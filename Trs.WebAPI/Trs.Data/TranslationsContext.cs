using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Trs.Data.Entities;

namespace Trs.Data
{
    public class TranslationsContext: DbContext
    {

        public TranslationsContext()
        {
            
        }
        public TranslationsContext(DbContextOptions<TranslationsContext> options): base(options)
        {}

        public DbSet<Translation> Translations{ get; set; }
        public DbSet<Version> Version{ get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            var config = new ConfigurationBuilder();
            var path = Path.Combine(AppContext.BaseDirectory, "appsetings.json");

            optionsBuilder.UseSqlServer("Server=(local);Database=Translations;Persist Security Info=True; User ID=trnsuser;Password=trn5pa55;MultipleActiveResultSets=True");
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Translation>()
                .Property("Id")
                .IsRequired();

            modelBuilder.Entity<Translation>()
                .Property("OriginalText")
                .IsRequired();

            modelBuilder.Entity<TrnVersion>()
                .Property("Title")
                .HasMaxLength(200)
                .IsRequired();          
            
            modelBuilder.Entity<TrnVersion>()
                .Property("CreatedOn")
                .IsRequired();

            // Relationship Version - Translation one to many
            modelBuilder.Entity<TrnVersion>()
                .HasMany<Translation>(t => t.Translations)
                .WithOne(v => v.TrnVersion)
                .HasForeignKey(t => t.TrnVersionId);
        }
    }
}
