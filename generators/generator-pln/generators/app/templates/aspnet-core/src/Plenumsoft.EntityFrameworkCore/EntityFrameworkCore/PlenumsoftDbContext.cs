using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using <%= projectName %>.Authorization.Roles;
using <%= projectName %>.Authorization.Users;
using <%= projectName %>.MultiTenancy;

namespace <%= projectName %>.EntityFrameworkCore
{
    public class <%= projectName %>DbContext : AbpZeroDbContext<Tenant, Role, User, <%= projectName %>DbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public <%= projectName %>DbContext(DbContextOptions<<%= projectName %>DbContext> options)
            : base(options)
        {
        }
    }
}
