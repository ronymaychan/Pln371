using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using <%= projectName %>.Cities.Dto;
using <%= projectName %>.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace <%= projectName %>.Base.Cities
{
    public class CityAppService : CrudAppService<City, CityDto, string, CityInputDto, CityCreateDto>, ICityAppService
    {
        public CityAppService(IRepository<City, string> repository) : base(repository)
        {
        }

        protected override IQueryable<City> ApplySorting(IQueryable<City> query, CityInputDto input)
        {
            return query.OrderBy(x => x.State.Country.Name).ThenBy(x => x.State.Name).ThenBy(x => x.Name);
        }

        protected override IQueryable<City> CreateFilteredQuery(CityInputDto input)
        {
            var query = Repository.GetAllIncluding(e => e.State, e => e.State.Country);

            if (!string.IsNullOrEmpty(input.CityName))
                query = query.Where(c => c.Name.ToLower().Contains(input.CityName.ToLower()) ||
                    c.Abreviation.ToLower().Contains(input.CityName.ToLower()));

            if (!string.IsNullOrEmpty(input.StateName))
                query = query.Where(c => c.State.Name.ToLower().Contains(input.StateName.ToLower()) ||
                    c.State.Abreviation.ToLower().Contains(input.StateName.ToLower()));

            if (!string.IsNullOrEmpty(input.CountryName))
                query = query.Where(c => c.State.Country.Name.ToLower().Contains(input.CountryName.ToLower()) ||
                    c.State.Country.Abreviation.ToLower().Contains(input.CountryName.ToLower()));

            if (input.IsActive != null)
                query = query.Where(c => c.IsActive == input.IsActive);
            
                return query;
        }
    }
}
