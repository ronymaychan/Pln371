using Abp.Application.Services;
using Plenumsoft.States.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plenumsoft.Base.States
{
    public interface IStatesAppService : ICrudAppService<StateDto, string, StateInputDto, StateCreateDto>, IApplicationService
    {
    }
}
