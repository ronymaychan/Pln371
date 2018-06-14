using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Plenumsoft.Authorization;
using Plenumsoft.Domain;
using Plenumsoft.States.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plenumsoft.Base.States
{
    [AbpAuthorize(PermissionNames.Pages_Countries)]
    public class StateAppService : CrudAppService<State, StateDto, string, StateInputDto, StateCreateDto>, IStatesAppService
    {
        public StateAppService(IRepository<State, string> repository) : base(repository)
        {
        }

        protected override IQueryable<State> ApplySorting(IQueryable<State> query, StateInputDto input)
        {
            return query.OrderBy(x => x.Country.Name).OrderBy(x => x.Name);
        }

        protected override IQueryable<State> CreateFilteredQuery(StateInputDto input)
        {
            var query = Repository.GetAllIncluding(e => e.Country);

            if (!string.IsNullOrEmpty(input.CountryId))
                query = query.Where(c => c.CountryId == input.CountryId);

            if (!string.IsNullOrEmpty(input.StateName))
                query = query.Where(c => c.Name.ToLower().Contains(input.StateName.ToLower()) ||
                    c.Abreviation.ToLower().Contains(input.StateName.ToLower()));

            if (!string.IsNullOrEmpty(input.CountryName))
                query = query.Where(c => c.Country.Name.ToLower().Contains(input.CountryName.ToLower()) ||
                    c.Country.Abreviation.ToLower().Contains(input.CountryName.ToLower()));

            if (input.IsActive != null)
                query = query.Where(c => c.IsActive == input.IsActive);

            return query;
        }
    }
}
