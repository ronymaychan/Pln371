using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Plenumsoft.EntityFrameworkCore
{
    public static class PlenumsoftDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<PlenumsoftDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<PlenumsoftDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
