using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace <%= projectName %>.States.Dto
{
    public class StateInputDto : PagedResultRequestDto
    {
        public string CountryName { get; set; }
        public string StateName { get; set; }
        public bool? IsActive { get; set; }
        public string CountryId { get; set; }
    }
}
