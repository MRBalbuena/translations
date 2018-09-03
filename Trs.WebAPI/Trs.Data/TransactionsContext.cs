using System;
using Microsoft.EntityFrameworkCore;
using Trs.Data.Models;

namespace Trs.Data
{
    public class TranslationsContext: DbContext
    {
        public DbSet<Translation> Translations{ get; set; }
        
    }
}
