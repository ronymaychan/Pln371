using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Plenumsoft.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plenumsoft.Mapping
{
    public class StateEntityConfiguration : IEntityTypeConfiguration<State>
    {
        public void Configure(EntityTypeBuilder<State> builder)
        {
            builder.Property(p => p.Name).HasMaxLength(100).IsRequired();
            builder.Property(p => p.Abreviation).HasMaxLength(100).IsRequired();
            builder.Property(p => p.IsActive).IsRequired();
            builder.HasOne(p => p.Country).WithMany().HasForeignKey(x => x.CountryId);
        }
    }
}
