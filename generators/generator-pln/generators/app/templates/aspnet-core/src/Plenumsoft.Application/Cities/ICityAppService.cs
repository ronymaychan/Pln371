using Abp.Application.Services;
using <%= projectName %>.Cities.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace <%= projectName %>.Base.Cities
{
    public interface ICityAppService : ICrudAppService<CityDto, string, CityInputDto, CityCreateDto>, IApplicationService
    {
    }
}
