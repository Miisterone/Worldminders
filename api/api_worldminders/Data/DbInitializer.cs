using api_worldminders.Models;

namespace api_worldminders.Data;

public static class DbInitializer
{
    public static void Initialize(MonsterContext context)
    {
        if (context.Monsters.Any())
        {
            return; // DB has been seeded
        }

        var monsters = new[]
        {
            new Monster { Id = 1, Name = "Cuivrenard", Type = "Minéral", Description = "Facile à repérer à cause du bruit qu'il fait. Mais il est moins aisé de l'attraper à cause de sa vitese élevée et multipliée par les mécanismes qui sort de son dos quand il est adulte. Les mécanismes à croit sa vitesse et sa force. Plus il est vieux plus il accumule des minerais rares sur son ventre et sa queue.", Image = "https://i.postimg.cc/VsWrcZj7/cuivrenard.png" },
            new Monster { Id = 2, Name = "Voltue", Type = "Électrique", Description = "Sur sa carapace sse trouve une plaque en faire supra conductive. Sa puissance électrique augmente avec le temps, si un prédateur la touche, cela peut varier d'une paralsie d'un membre, général ou la mort pour la taille adulte. Les extrémités de la créature fonctionnent comme un para-tonnerre ce qui la protege. Les lignes qui parcourent son corps permettent de canaliser l'électricité. Et ces symboles sur la carapace permettent de leurre ses proies", Image = "https://i.postimg.cc/HjGdMg5G/voltue.png" },
            new Monster { Id = 3, Name = "Lisaure", Type = "Aquatique", Description = "Un prédateur aquatique extrêmement grand, il mesure plus de 10m de large pour 4m de largeur. Il est doté de 4 très grands nageoires dorsales qui lui permette de nager à des vitesses allant jusqu'à 70 km. Il puise sa puissance des puissants typhons sous-marins", Image = "https://i.postimg.cc/jjC8NJhf/lisaure.png" },
            new Monster { Id = 4, Name = "Lapthor", Type = "Ardent", Description = "Soon soon", Image = "https://i.postimg.cc/nhmKtYT0/lapthor.png" },
        };

        context.Monsters.AddRange(monsters);
        context.SaveChanges();
    }
}