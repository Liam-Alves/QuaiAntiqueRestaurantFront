import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/lacarte", "La carte", "/pages/lacarte.html"),
    new Route("/lesreservations", "Les réservations", "/pages/lesreservation.html"),
    new Route("/moncompte", "Mon compte", "/pages/moncompte.html"),
    new Route("/connexion", "Connexion / Deconnexion", "/pages/connexion.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";