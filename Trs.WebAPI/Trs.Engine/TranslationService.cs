using System;
using System.Linq;
using System.Collections.Generic;
using Trs.Data;
using Trs.Data.Entities;

namespace Trs.Engine
{
    public class TranslationService: ITranslationService
    {
        private readonly ITranslationsContext _dbContext;

        public TranslationService(ITranslationsContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<Translation> GetTranslations(){
            return _dbContext.Translations.Take(10).ToList();
        }
    }
}
