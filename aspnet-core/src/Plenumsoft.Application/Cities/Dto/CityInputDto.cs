using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Plenumsoft.Cities.Dto
{
    public class CityInputDto : PagedResultRequestDto
    {
        public string CountryName { get; set; }
        public string StateName { get; set; }
        public string CityName { get; set; }
        public bool? IsActive { get; set; }
    }
}
