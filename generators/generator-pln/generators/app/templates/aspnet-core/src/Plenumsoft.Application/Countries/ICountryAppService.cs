using Abp.Application.Services;
using <%= projectName %>.Countries.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace <%= projectName %>.Base.Countries
{
    public interface ICountryAppService : ICrudAppService<CountryDto, string, CountryInputDto>, IApplicationService
    {
    }
}
