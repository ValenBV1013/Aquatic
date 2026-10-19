from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_aquatic_data(request):
    data = {
        "title": "Explora el Abismo Oceánico",
        "description": "Descubre las maravillas de la vida marina, la biodiversidad de los arrecifes y las especies más fascinantes del océano profundo.",
        "stats": {
            "expeditions": "250+",
            "divers": "120 Especies",
            "oceans_explored": "15 Habitats"
        },
        "species": [
            {
                "id": "1",
                "name": "Ballena Jorobada",
                "scientific": "Megaptera novaeangliae",
                "category": "Mamífero Marino",
                "type": "mamiferos",
                "depth": "0 - 200 metros",
                "habitat": "Océanos globales",
                "status": "Preocupación menor",
                "image": "https://images.pexels.com/photos/1000654/pexels-photo-1000654.jpeg?auto=compress&cs=tinysrgb&w=800",
                "desc": "Conocidas por sus espectaculares saltos fuera del agua y sus complejos cantos submarinos que pueden escucharse a kilómetros de distancia."
            },
            {
                "id": "2",
                "name": "Tortuga Laúd",
                "scientific": "Dermochelys coriacea",
                "category": "Reptil Marino",
                "type": "invertebrados",
                "depth": "Hasta 1,200 metros",
                "habitat": "Océanos tropicales y templados",
                "status": "En peligro crítico",
                "image": "https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=800",
                "desc": "La tortuga laúd es la especie de tortuga más grande del mundo. Posee un caparazón flexible lechoso y puede sumergirse a profundidades abismales."
            },
            {
                "id": "3",
                "name": "Manta Raya Gigante",
                "scientific": "Mobula birostris",
                "category": "Pez Cartilaginoso",
                "type": "peces",
                "depth": "0 - 120 metros",
                "habitat": "Arrecifes y mar abierto",
                "status": "Vulnerable",
                "image": "https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&w=800",
                "desc": "Con una envergadura de hasta 7 metros, navegan suavemente filtrando plancton a través de sus agallas."
            },
            {
                "id": "4",
                "name": "Tiburón Ballena",
                "scientific": "Rhincodon typus",
                "category": "Pez Cartilaginoso",
                "type": "peces",
                "depth": "0 - 700 metros",
                "habitat": "Aguas cálidas y tropicales",
                "status": "En peligro",
                "image": "https://images.pexels.com/photos/3313934/pexels-photo-3313934.jpeg?auto=compress&cs=tinysrgb&w=800",
                "desc": "El pez más grande del planeta. A pesar de su imponente tamaño de más de 12 metros, es un dócil gigante filtrador totalmente inofensivo."
            },
            {
                "id": "5",
                "name": "Delfín Mular",
                "scientific": "Tursiops truncatus",
                "category": "Mamífero Marino",
                "type": "mamiferos",
                "depth": "0 - 200 metros",
                "habitat": "Costas y océanos mundiales",
                "status": "Preocupación menor",
                "image": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=800",
                "desc": "Conocidos por su alta inteligencia, interacción social compleja y uso de ecolocalización para navegar en las aguas del océano."
            },
            {
                "id": "6",
                "name": "Medusa Luna",
                "scientific": "Aurelia aurita",
                "category": "Invertebrado",
                "type": "invertebrados",
                "depth": "0 - 40 metros",
                "habitat": "Aguas costeras globales",
                "status": "Abundante",
                "image": "https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=800",
                "desc": "Cuerpo translúcido fascinante con reflejos bioluminiscentes. Flotan en las corrientes marinas alimentándose de zooplancton."
            }
        ],
        "services": [
            {
                "title": "Monitoreo Biológico Submarino",
                "desc": "Sistemas de visión e IA instalados en arrecifes para rastrear poblaciones marinas en tiempo real."
            },
            {
                "title": "Conservación de Hábitats",
                "desc": "Restauración activa de arrecifes de coral y zonas protegidas mar adentro."
            },
            {
                "title": "Expediciones Educativas",
                "desc": "Inmersiones científicas guiadas y telemetría de vida marina para investigación global."
            }
        ]
    }
    return Response(data)