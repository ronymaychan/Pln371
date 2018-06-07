using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace Plenumsoft.Authorization.Accounts.Dto
{
    public class ResetPasswordDto
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public string ResetCode { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
