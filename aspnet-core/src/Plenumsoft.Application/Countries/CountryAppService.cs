using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Plenumsoft.Authorization;
using Plenumsoft.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Plenumsoft.Countries.Dto;

namespace Plenumsoft.Base.Countries
{
    [AbpAuthorize(PermissionNames.Pages_Countries)]
    public class CountryAppService : CrudAppService<Country, CountryDto, string, CountryInputDto>, ICountryAppService
    {
        public CountryAppService(IRepository<Country, string> repository) : base(repository)
        {
        }

        protected override IQueryable<Country> ApplySorting(IQueryable<Country> query, CountryInputDto input)
        {
            return query.OrderBy(x => x.Name);
        }

        protected override IQueryable<Country> CreateFilteredQuery(CountryInputDto input)
        {
            var query = base.CreateFilteredQuery(input);

            if (!string.IsNullOrEmpty(input.CountryName))
                query = query.Where(x => x.Name.ToLower().Contains(input.CountryName.ToLower()) || 
                    x.Abreviation.ToLower().Contains(input.CountryName.ToLower()));

            if (input.IsActive != null)
                query = query.Where(x => x.IsActive == input.IsActive);

            return query;
        }
    }
}
