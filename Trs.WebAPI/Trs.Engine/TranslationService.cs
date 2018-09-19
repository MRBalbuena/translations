using System;
using System.Collections.Generic;
using Trs.Data.Entities;

namespace Trs.Engine
{
    public class TranslationService: ITranslationService
    {
        public List<Translation> GetTranslations(){
            return new List<Translation>{
                new Translation{
                    Id = 1,
                    Key = "TR1",
                    OriginalText = "This is the first row to translate",
                    TranslatedText = "",
                    BlockedBy = "",
                    BlockedTime = null,
                    TranslatedBy = "",
                    TranslatedTime = null,
                    CheckedBy = "",
                    CheckedTime = null,
                    EditedBy = "",
                    EditedTime = null,
                    Comment = "",
                    TrnVersionId = 1
                },
                new Translation{
                    Id = 2,
                    Key = "TR2",
                    OriginalText = "This is the second row to translate",
                    TranslatedText = "",
                    BlockedBy = "",
                    BlockedTime = null,
                    TranslatedBy = "",
                    TranslatedTime = null,
                    CheckedBy = "",
                    CheckedTime = null,
                    EditedBy = "",
                    EditedTime = null,
                    Comment = "",
                    TrnVersionId = 1
                },
                new Translation{
                    Id = 3,
                    Key = "TR3",
                    OriginalText = "New parapraph to translate",
                    TranslatedText = "",
                    BlockedBy = "",
                    BlockedTime = null,
                    TranslatedBy = "",
                    TranslatedTime = null,
                    CheckedBy = "",
                    CheckedTime = null,
                    EditedBy = "",
                    EditedTime = null,
                    Comment = "",
                    TrnVersionId = 1
                },
                new Translation{
                    Id = 4,
                    Key = "TR4",
                    OriginalText = "End of translations",
                    TranslatedText = "",
                    BlockedBy = "",
                    BlockedTime = null,
                    TranslatedBy = "",
                    TranslatedTime = null,
                    CheckedBy = "",
                    CheckedTime = null,
                    EditedBy = "",
                    EditedTime = null,
                    Comment = "",
                    TrnVersionId = 1
                }                
            };
        }
    }
}
