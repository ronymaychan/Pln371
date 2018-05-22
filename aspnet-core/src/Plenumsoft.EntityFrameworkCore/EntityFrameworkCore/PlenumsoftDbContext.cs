using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Plenumsoft.Authorization.Roles;
using Plenumsoft.Authorization.Users;
using Plenumsoft.MultiTenancy;

namespace Plenumsoft.EntityFrameworkCore
{
    public class PlenumsoftDbContext : AbpZeroDbContext<Tenant, Role, User, PlenumsoftDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public PlenumsoftDbContext(DbContextOptions<PlenumsoftDbContext> options)
            : base(options)
        {
        }
    }
}
