using System.ComponentModel.DataAnnotations;

namespace api_worldminders.Models;

public class Monster
{
    public int Id { get; set; }
    
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Type { get; set; }
    
    public string? Description { get; set; }
    public string? Image { get; set; }
}