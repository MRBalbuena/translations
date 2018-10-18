using System.Collections.Generic;
using Trs.Data.Entities;

namespace Trs.Engine
{
    public interface ITranslationService
    {
         List<Translation> GetTranslations();
         bool Update(Translation translation);
    }
}