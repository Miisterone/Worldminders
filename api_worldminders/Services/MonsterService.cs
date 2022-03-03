using api_worldminders.Data;
using api_worldminders.Models;
using Microsoft.EntityFrameworkCore;

namespace api_worldminders.Services;

public class MonsterService
{
    private readonly MonsterContext _context;

    public MonsterService(MonsterContext context)
    {
        _context = context;
    }
    
    public IEnumerable<Monster> GetAll()
    {
        return _context.Monsters
            .AsNoTracking()
            .ToList();
    }
    
    public Monster? GetById(int id)
    {
        return _context.Monsters.AsNoTracking().SingleOrDefault(p => p.Id == id);
    }
    
    public Monster Create(Monster newMonster)
    {
        _context.Monsters.Add(newMonster);
        _context.SaveChanges();

        return newMonster;
    }
    
    public void DeleteById(int id)
    {
        var monsterToDelete = _context.Monsters.Find(id);
        if (monsterToDelete is not null)
        {
            _context.Monsters.Remove(monsterToDelete);
            _context.SaveChanges();
        }
    }

    public Monster? Update(int id,Monster newMonster)
    {
        var existingMonster = GetById(id);

        if (existingMonster is not null)
        {
            existingMonster = newMonster;
            _context.Monsters.Update(existingMonster);
            _context.SaveChanges();
        }

        return existingMonster;
    }
}