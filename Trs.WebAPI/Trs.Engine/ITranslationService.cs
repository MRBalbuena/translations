using System.Collections.Generic;
using Trs.Data.Models;

namespace Trs.Engine
{
    public interface ITranslationService
    {
         List<Translation> GetTranslations();
    }
}