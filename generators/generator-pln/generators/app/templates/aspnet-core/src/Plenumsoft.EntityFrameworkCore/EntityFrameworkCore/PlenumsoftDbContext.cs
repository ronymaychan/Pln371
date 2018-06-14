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
        public DbSet<Domain.Country> Countries { get; set; }
        public DbSet<Domain.State> States { get; set; }
        public DbSet<Domain.City> Cities { get; set; }

        public <%= projectName %>DbContext(DbContextOptions<<%= projectName %>DbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new Mapping.CountryEntityConfiguration());
            modelBuilder.ApplyConfiguration(new Mapping.StateEntityConfiguration());
            modelBuilder.ApplyConfiguration(new Mapping.CityEntityConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}
