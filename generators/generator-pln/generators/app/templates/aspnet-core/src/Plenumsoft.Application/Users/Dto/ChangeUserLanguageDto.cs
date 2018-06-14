using System.ComponentModel.DataAnnotations;

namespace Plenumsoft.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}