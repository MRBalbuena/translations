using Microsoft.EntityFrameworkCore;
using Trs.Data.Entities;

namespace Trs.Data
{
    public interface ITranslationsContext
    {
        DbSet<Translation> Translations{ get; set; }
        DbSet<TrnVersion> Version{ get; set; }
    }
}