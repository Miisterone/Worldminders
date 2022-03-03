using Microsoft.EntityFrameworkCore;
using api_worldminders.Models;

namespace api_worldminders.Data;

public class MonsterContext : DbContext
{
    public MonsterContext (DbContextOptions<MonsterContext> options) : base(options)
    {
    }

    public DbSet<Monster> Monsters => Set<Monster>();
}