using api_worldminders.Data;
using api_worldminders.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSqlite<MonsterContext>("Data Source=DataBase.db");

builder.Services.AddScoped<MonsterService>();

builder.Services.AddCors(options => {});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.CreateDbIfNotExists();

app.UseCors(builder =>
{
    builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
});

app.UseCors("AllowOrigin");

app.Run();

//Run API
// Terminal 1: dotnet run
// Terminal 2: httprepl https://localhost:7244

// Add monster
//Terminal: post Monster -c "{"name":"Monster 4", "type":"Eau", "description":"test", "image":"test"}"