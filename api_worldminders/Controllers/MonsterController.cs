using System.Net;
using api_worldminders.Models;
using api_worldminders.Services;
using Microsoft.AspNetCore.Mvc;

namespace api_worldminders.Controllers;

[ApiController]
[Route("[controller]")]
public class MonsterController : ControllerBase
{
    private readonly MonsterService _service;

    public MonsterController(MonsterService service)
    {
        _service = service;
    }

    [HttpGet]
    public IEnumerable<Monster> GetAll()
    {
        return _service.GetAll();
    }

    [HttpPost]
    public IActionResult Create(Monster newMonster)
    {
        var monster = _service.Create(newMonster);
        return CreatedAtAction(nameof(GetById), new { id = monster.Id }, monster);
    }

    [HttpGet("{id}")]
    public ActionResult<Monster> GetById(int id)
    {
        var monster = _service.GetById(id);

        if (monster is not null)
        {
            return monster;
        }

        return NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var monster = _service.GetById(id);

        if (monster is null)
            return NotFound();

        _service.DeleteById(id);

        return NoContent();
    }

    [HttpPut("{id}")]
    public ActionResult<Monster> Put(int id,Monster monster)
    {
        var existingMonster = _service.GetById(id);

        if (existingMonster is null)
            return NotFound();
        
        _service.Update(id, monster);
        
        return NoContent();
    }
}