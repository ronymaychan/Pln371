using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace <%= projectName %>.EntityFrameworkCore
{
    public static class <%= projectName %>DbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<<%= projectName %>DbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<<%= projectName %>DbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
