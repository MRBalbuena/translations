using System;
using System.Collections.Generic;

namespace Trs.Data.Entities
{    
    public class TrnVersion    
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Description { get; set; }
        public DateTime StartedOn { get; set; }
        public DateTime EndedOn { get; set; }

        public ICollection<Translation> Translations { get; set; }
    }
}   