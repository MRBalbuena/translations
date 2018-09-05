using System;

namespace Trs.Data.Models
{
    public class Translation
    {
        public long Id { get; set; }
        public string Key { get; set; }
        public string OriginalText { get; set; }
        public string TranslatedText { get; set; }
        public string BlockedBy { get; set; }
        public DateTime? BlockedTime { get; set; }
        public string TranslatedBy { get; set; }
        public DateTime? TranslatedTime { get; set; }
        public string CheckedBy { get; set; }
        public DateTime? CheckedTime { get; set; }
        public string EditedBy { get; set; }
        public DateTime? EditedTime { get; set; }        
        public string Comment { get; set; }
        public string Version { get; set; }
    }
}