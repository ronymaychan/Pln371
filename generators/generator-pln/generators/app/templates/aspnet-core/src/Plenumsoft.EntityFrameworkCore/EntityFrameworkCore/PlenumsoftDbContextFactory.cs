using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using <%= projectName %>.Configuration;
using <%= projectName %>.Web;

namespace <%= projectName %>.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class <%= projectName %>DbContextFactory : IDesignTimeDbContextFactory<<%= projectName %>DbContext>
    {
        public <%= projectName %>DbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<<%= projectName %>DbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            <%= projectName %>DbContextConfigurer.Configure(builder, configuration.GetConnectionString(<%= projectName %>Consts.ConnectionStringName));

            return new <%= projectName %>DbContext(builder.Options);
        }
    }
}
