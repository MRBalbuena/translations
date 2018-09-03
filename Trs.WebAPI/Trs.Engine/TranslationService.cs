using System;
using System.Collections.Generic;
using Trs.Data.Models;

namespace Trs.Engine
{
    public class TranslationService
    {
        public List<Translation> GetTranslations(){
            return new List<Translation>{
                new Translation{
                    Id = 1,
                    Key = "TR1",
                    OriginalText = "This is the first row to translate",
                    TranslatedText = ""
                }
            };
        }
    }
}
