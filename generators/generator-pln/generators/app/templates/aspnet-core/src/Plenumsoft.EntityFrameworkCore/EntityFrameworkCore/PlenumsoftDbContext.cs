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
        public DbSet<Domain.Country> Countries { get; set; }
        public DbSet<Domain.State> States { get; set; }
        public DbSet<Domain.City> Cities { get; set; }

        public PlenumsoftDbContext(DbContextOptions<PlenumsoftDbContext> options)
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
