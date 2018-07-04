using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace <%= projectName %>.Domain
{
    public class City  : Abp.Domain.Entities.Entity<string>, Abp.Domain.Entities.IPassivable
    {
        public string Name { get; set; }
        public string Abreviation { get; set; }
        public bool IsActive { get; set; }
        public string StateId { get; set; }
        public virtual State State { get; set; }
    }
}
