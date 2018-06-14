using System;
using System.Collections.Generic;
using System.Text;

namespace Plenumsoft.Cities.Dto
{
    public class CityCreateDto : Abp.Application.Services.Dto.EntityDto<string>
    {
        public string Name { get; set; }
        public string Abreviation { get; set; }
        public bool? IsActive { get; set; }
        public string StateId { get; set; }
    }
}
