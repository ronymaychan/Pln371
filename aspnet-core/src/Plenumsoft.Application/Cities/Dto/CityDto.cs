using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace Plenumsoft.Cities.Dto
{
    public class CityDto : EntityDto<string>
    {
        public string Name { get; set; }
        public string Abreviation { get; set; }
        public bool? IsActive { get; set; }
        public string StateId { get; set; }
        public States.Dto.StateDto State { get; set; }
    }
}
