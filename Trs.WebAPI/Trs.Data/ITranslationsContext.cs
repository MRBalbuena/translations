using Microsoft.EntityFrameworkCore;
using Trs.Data.Entities;
using System;

namespace Trs.Data
{
    public interface ITranslationsContext: IModel, IDisposable
    {
        DbSet<Translation> Translations{ get; set; }
        DbSet<TrnVersion> Version{ get; set; }
    }
}