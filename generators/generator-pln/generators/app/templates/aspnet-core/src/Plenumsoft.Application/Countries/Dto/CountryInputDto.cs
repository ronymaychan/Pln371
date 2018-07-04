using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace <%= projectName %>.Countries.Dto
{
    public class CountryInputDto : PagedResultRequestDto
    {
        public string CountryName { get; set; }
        public bool? IsActive { get; set; }
    }
}
