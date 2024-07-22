var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

var app = builder.Build();

app.MapGet("/", () => "And this is a message from the Back End!");

app.UseCors(builder => builder
  .AllowAnyOrigin()
  .AllowAnyMethod()
  .AllowAnyHeader()
);

app.Run();
