const Pokemons = [
  {
    id: "#001",
    name: "Bulbasaur",
    image: `/images/bulbasaur.png`,
    color: "#74CB48",
    type: ["Grass", "#74CB48", "Poison", "#A43E9E"],
    weight: "6,9 kg",
    height: "0,7 m",
    moves: ["Chlorophyll", "Overgrow"],
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    stats: {
      hp: "045",
      atk: "049",
      def: "049",
      satk: "065",
      sdef: "065",
      spd: "045",
    },
  },

  {
    id: "#002",
    name: "Ivysaur",
    image: `/images/ivisaur.png`,
    color: "#74CB48",
    type: ["Grass", "#74CB48", "Poison", "#A43E9E"],
    weight: "13 kg",
    height: "1 m",
    moves: ["Chlorophyll", "Overgrow"],
    description:
      "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
    stats: {
      hp: "045",
      atk: "049",
      def: "049",
      satk: "065",
      sdef: "065",
      spd: "045",
    },
  },
  {
    id: "#003",
    name: "Venusaur",
    image: `/images/venusaur.png`,
    color: "#74CB48",
    type: ["Grass", "#74CB48", "Poison", "#A43E9E"],
    weight: "100 kg",
    height: "2 m",
    moves: ["Chlorophyll", "Overgrow"],
    description:
      "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
    stats: {
      hp: "045",
      atk: "049",
      def: "049",
      satk: "065",
      sdef: "065",
      spd: "045",
    },
  },

  {
    id: "#004",
    name: "Charmander",
    image: `/images/charmander.png`,
    color: "#F57D31",
    type: ["Fire", "#F57D31"],
    weight: "8,5 kg",
    height: "0,6 m",
    moves: ["Mega-Punch", "Fire-Punch"],
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    stats: {
      hp: "039",
      atk: "052",
      def: "043",
      satk: "060",
      sdef: "050",
      spd: "065",
    },
  },
  {
    id: "#005",
    name: "Charmeleon",
    image: `/images/charmeleon.png`,
    color: "#F57D31",
    type: ["Fire", "#F57D31"],
    weight: "19 kg",
    height: "1.1 m",
    moves: ["Mega-Punch", "Fire-Punch"],
    description:
      "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
    stats: {
      hp: "039",
      atk: "052",
      def: "043",
      satk: "060",
      sdef: "050",
      spd: "065",
    },
  },
  {
    id: "#006",
    name: "Charizard",
    image: `/images/charizard.png`,
    color: "#F57D31",
    type: ["Fire", "#F57D31"],
    weight: "90.5 kg",
    height: "1.7 m",
    moves: ["Mega-Punch", "Fire-Punch"],
    description:
      "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
    stats: {
      hp: "039",
      atk: "052",
      def: "043",
      satk: "060",
      sdef: "050",
      spd: "065",
    },
  },
  {
    id: "#007",
    name: "Squirtle",
    image: `/images/squirtle.png`,
    color: "#6493EB",
    type: ["Water", "#6493EB"],

    weight: "9,0 kg",
    height: "0,5 m",
    moves: ["Torrent", "Rain-Dish"],
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    stats: {
      hp: "044",
      atk: "048",
      def: "065",
      satk: "050",
      sdef: "064",
      spd: "043",
    },
  },
  {
    id: "#008",
    name: "Wartortle",
    image: `/images/wartortle.png`,
    color: "#6493EB",
    type: ["Water", "#6493EB"],

    weight: "22.5 kg",
    height: "1.0 m",
    moves: ["Torrent", "Rain-Dish"],
    description:
      "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
    stats: {
      hp: "044",
      atk: "048",
      def: "065",
      satk: "050",
      sdef: "064",
      spd: "043",
    },
  },
  {
    id: "#009",
    name: "Blastoise",
    image: `/images/blastoise.png`,
    color: "#6493EB",
    type: ["Water", "#6493EB"],

    weight: "85.5 kg",
    height: "1.6 m",
    moves: ["Torrent", "Rain-Dish"],
    description:
      "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
    stats: {
      hp: "044",
      atk: "048",
      def: "065",
      satk: "050",
      sdef: "064",
      spd: "043",
    },
  },
  {
    id: "#012",
    name: "Butterfree",
    image: `/images/butterfree.png`,
    color: "#A7B723",
    type: ["Bug", "#A7B723", "Flying", "#A891EC"],

    weight: "32,0 kg",
    height: "1,1 m",
    moves: ["Compound-Eyes", "Tinted-Lens"],
    description:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    stats: {
      hp: "060",
      atk: "045",
      def: "050",
      satk: "090",
      sdef: "080",
      spd: "070",
    },
  },

  {
    id: "#025",
    name: "Pikachu",
    image: `/images/pikachu.png`,
    color: "#F9CF30",
    type: ["Electric", "#F9CF30"],

    weight: "6,0 kg",
    height: "0,4 m",
    moves: ["Mega-Punch", "Pay-Day"],

    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    stats: {
      hp: "035",
      atk: "055",
      def: "040",
      satk: "050",
      sdef: "050",
      spd: "090",
    },
  },
  {
    id: "#026",
    name: "Raichu",
    image: `/images/raichu.png`,
    color: "#F9CF30",
    type: ["Electric", "#F9CF30"],

    weight: "30 kg",
    height: "0,8 m",
    moves: ["Mega-Punch", "Pay-Day"],

    description:
      "Su larga cola le sirve como toma de tierra para protegerse a sí mismo del alto voltaje que genera su cuerpo.",
    stats: {
      hp: "035",
      atk: "055",
      def: "040",
      satk: "050",
      sdef: "050",
      spd: "090",
    },
  },
  {
    id: "#092",
    name: "Gastly",
    image: `/images/gastly.png`,
    color: "#70559B",
    type: ["Ghost", "#70559B", "Poison", "#666666"],
    weight: "0,1 kg",
    height: "1,3 m",
    moves: ["Levitate"],
    description:
      "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
    stats: {
      hp: "030",
      atk: "035",
      def: "030",
      satk: "110",
      sdef: "035",
      spd: "080",
    },
  },
  {
    id: "#093",
    name: "Haunter",
    image: `/images/haunter.png`,
    color: "#70559B",
    type: ["Ghost", "#70559B", "Poison", "#666666"],
    weight: "0,1 kg",
    height: "1,6 m",
    moves: ["Levitate"],
    description:
      "Su lengua está hecha de gas. Si lame a su víctima, esta sufrirá constantes temblores hasta fallecer.",
    stats: {
      hp: "030",
      atk: "035",
      def: "030",
      satk: "110",
      sdef: "035",
      spd: "080",
    },
  },
  {
    id: "#094",
    name: "Gengar",
    image: `/images/gengar.png`,
    color: "#70559B",
    type: ["Ghost", "#70559B", "Poison", "#666666"],
    weight: "40.5 kg",
    height: "1.5 m",
    moves: ["Levitate"],
    description:
      "Las noches de luna llena, a este Pokémon le gusta imitar las sombras de la gente y burlarse de sus miedos.",
    stats: {
      hp: "030",
      atk: "035",
      def: "030",
      satk: "110",
      sdef: "035",
      spd: "080",
    },
  },
  {
    id: "#132",
    name: "Ditto",
    image: `/images/ditto.png`,
    color: "#AAA67F",
    type: ["Normal", "#AAA67F"],

    weight: "4,0 kg",
    height: "0,3 m",
    moves: ["Limber", "Imposter"],
    description:
      "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
    stats: {
      hp: "048",
      atk: "048",
      def: "048",
      satk: "048",
      sdef: "048",
      spd: "048",
    },
  },
  {
    id: "#152",
    name: "Mew",
    image: `/images/mew.png`,
    color: "#FB5584",
    type: ["Psychic", "#FB5584"],

    weight: "4,0 kg",
    height: "0,4 m",
    moves: ["Synchronize"],
    description:
      "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
    stats: {
      hp: "100",
      atk: "100",
      def: "100",
      satk: "100",
      sdef: "100",
      spd: "100",
    },
  },
  {
    id: "#304",
    name: "Aron",
    image: `/images/aron.png`,
    color: "#B7B9D0",
    type: ["Steel", "#B7B9D0", "Rock", "#B69E31"],

    weight: "60,0 kg",
    height: "0,4 m",
    moves: ["Sturdy", "Rock-Head"],

    description:
      "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
    stats: {
      hp: "050",
      atk: "070",
      def: "100",
      satk: "040",
      sdef: "040",
      spd: "030",
    },
  },
];

export default Pokemons;