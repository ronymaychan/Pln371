using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace Plenumsoft.States.Dto
{
    public class StateDto : EntityDto<string>
    {
        public string Name { get; set; }
        public string Abreviation { get; set; }
        public bool IsActive { get; set; }
        public string CountryId { get; set; }
        public Countries.Dto.CountryDto Country { get; set; }
    }
}
