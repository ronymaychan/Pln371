using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Plenumsoft.Configuration;
using Plenumsoft.Web;

namespace Plenumsoft.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class PlenumsoftDbContextFactory : IDesignTimeDbContextFactory<PlenumsoftDbContext>
    {
        public PlenumsoftDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<PlenumsoftDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            PlenumsoftDbContextConfigurer.Configure(builder, configuration.GetConnectionString(PlenumsoftConsts.ConnectionStringName));

            return new PlenumsoftDbContext(builder.Options);
        }
    }
}
