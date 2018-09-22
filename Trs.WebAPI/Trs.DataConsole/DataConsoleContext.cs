using Trs.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Trs.DataConsole
{
    public class DataConsoleContext: DbContext
    {
        public DataConsoleContext()
        {
            
        }
        public DataConsoleContext(DbContextOptions<DataConsoleContext> options): base(options)
        {}

        public DbSet<Translation> Translations{ get; set; }
        public DbSet<TrnVersion> Version{ get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){

            optionsBuilder.UseSqlServer("Server=(LocalDb)\\V11.0;Database=Translations;Persist Security Info=True; User ID=trnsuser;Password=trn5pa55;MultipleActiveResultSets=True");
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Translation>()
                .Property("Id")
                .IsRequired();

            modelBuilder.Entity<Translation>()
                .Property("OriginalText")
                .IsRequired();

            modelBuilder.Entity<TrnVersion>()
                .ToTable("Version`");
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
                .HasForeignKey(t => t.VersionId);
        }        
    }
}