let BaseDonnees = 
{
    restaurant : 
    [
        {
            name : "BISTROT TOKYO",
            fulladdress : "117 Rue du Faubourg Saint-Martin, 75010 Paris",
            phone : "0140348139",
            rating : "4.2/5 || 103 avis",
            website : "http://www.bistrot-tokyo.fr/?utm_source=google&utm_medium=organic&utm_campaign=google%20places",
            opening_hours : "lundi:[11:15–14:45], Mardi:[11:15–14:45], Mercredi:[11:15–14:45], Jeudi:[11:15–14:45], Vendredi:[11:15–14:45]"
        },
        {
            name : "Sushirama",
            fulladdress : "95 Rue du Faubourg Saint-Martin, 75010 Paris",
            phone : "0148035648",
            rating : "4.4/5 || 160 avis",
            website : "http://sushirama.fr/",
            opening_hours : "Lundi:[12:00–15:00], Mardi:[12:00–15:00], Mercredi:[11:00–15:00], Jeudi:[12:00–15:0], Vendredi:[11:00–15:00]"
        },
        {
            name : "Restaurant Delena Delices D'anatolie Specialites Turques",
            fulladdress : "56 Bd de Magenta, 75010 Paris",
            phone : "Y'en a pas ",
            rating : "3.6/5 || 13 avis",
            website : "Y'en a pas",
            opening_hours : "Lundi:[12:00–23:00], Mardi:[12:00–23:00], Mercredi:[11:00–23:00], Jeudi:[12:00–23:00], Vendredi:[11:00–23:00]"
        },
        {
            name : "PARISTANBUL",
            fulladdress : "116 Rue du Faubourg Saint-Martin, 75010 Paris",
            phone : "0189324930",
            rating : "4.9/5 || 517",
            website : "y'en a pas",
            opening_hours : "Lundi:[11:00–02:00], Mardi:[11:00–02:00], Mercredi:[11:00–02:00], Jeudi:[11:00–02:00], Vendredi:[11:00–02:00]"
        },
        {
            name : "Restaurant Al Assil",
            fulladdress : "50 Bd de Magenta, 75010 Paris",
            phone : "0171500400",
            rating : "4.8 / 687 avis",
            website : "Y'en a pas",
            opening_hours : "Lundi:[11:30–23:00], Mardi:[11:30–23:00], Mercredi:[11:30–23:00], Jeudi:[11:30–23:00], Vendredi:[11:30–23:00]"
        },
        // {
        //     name : "",
        //     fulladdress : "",
        //     phone : "",
        //     rating : "",
        //     website : "",
        //     opening_hours : ""
        // },
    ]
}

for (let i = 0; i < BaseDonnees.restaurant.length; i++)
{
    console.log(BaseDonnees.restaurant[i].name);  
    document.write(BaseDonnees.restaurant[i].name + "<br>");
}