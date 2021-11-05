const names = [
  { first_name: "Meade", last_name: "Salaman" },
  { first_name: "Eleni", last_name: "Shorten" },
  { first_name: "Leonidas", last_name: "Golby" },
  { first_name: "Rozamond", last_name: "Ielden" },
  { first_name: "Bil", last_name: "Durnall" },
  { first_name: "Mic", last_name: "Petow" },
  { first_name: "Pat", last_name: "Byfield" },
  { first_name: "Abner", last_name: "Divell" },
  { first_name: "Bunnie", last_name: "De Lorenzo" },
  { first_name: "Hedwiga", last_name: "Jedraszek" },
  { first_name: "Nissa", last_name: "Bunkle" },
  { first_name: "Adelle", last_name: "Mordon" },
  { first_name: "Dieter", last_name: "Lowes" },
  { first_name: "Hermie", last_name: "Higbin" },
  { first_name: "Rosamond", last_name: "Goede" },
  { first_name: "Anderea", last_name: "Kavanagh" },
  { first_name: "Opalina", last_name: "Ensten" },
  { first_name: "Rubia", last_name: "Geraghty" },
  { first_name: "Tremayne", last_name: "Bowmen" },
  { first_name: "Viola", last_name: "Cubitt" },
  { first_name: "Lenka", last_name: "Peckham" },
  { first_name: "Vinnie", last_name: "Nichols" },
  { first_name: "Nickolas", last_name: "Densham" },
  { first_name: "Byran", last_name: "Panton" },
  { first_name: "Kippy", last_name: "Densumbe" },
  { first_name: "Julia", last_name: "Krystek" },
  { first_name: "Marietta", last_name: "Stobbe" },
  { first_name: "Cherrita", last_name: "Sibborn" },
  { first_name: "Laurice", last_name: "Cuell" },
  { first_name: "Arri", last_name: "Minghetti" },
  { first_name: "Latrena", last_name: "Jessel" },
  { first_name: "Arlie", last_name: "Gerdes" },
  { first_name: "Genevra", last_name: "Aizic" },
  { first_name: "Cletus", last_name: "Deppen" },
  { first_name: "Dixie", last_name: "Belcham" },
  { first_name: "Robb", last_name: "Sloper" },
  { first_name: "Baird", last_name: "Aitkin" },
  { first_name: "Theodore", last_name: "Joesbury" },
  { first_name: "Vinnie", last_name: "Coad" },
  { first_name: "Griffin", last_name: "Baumann" },
  { first_name: "Yehudit", last_name: "MacVean" },
  { first_name: "Eberhard", last_name: "Cunradi" },
  { first_name: "Janaya", last_name: "Sailes" },
  { first_name: "Nedda", last_name: "Gilardoni" },
  { first_name: "Libbie", last_name: "Venus" },
  { first_name: "Aleece", last_name: "Marzelli" },
  { first_name: "Florenza", last_name: "Trafford" },
  { first_name: "Veronique", last_name: "Ferne" },
  { first_name: "Ephrayim", last_name: "Stithe" },
  { first_name: "Cate", last_name: "Meus" },
  { first_name: "Nevile", last_name: "De'Ath" },
  { first_name: "Devan", last_name: "Mullenger" },
  { first_name: "Edvard", last_name: "Viccary" },
  { first_name: "Sonny", last_name: "Piggot" },
  { first_name: "Hogan", last_name: "Drewes" },
  { first_name: "Gonzales", last_name: "Lobbe" },
  { first_name: "Rockwell", last_name: "Tenman" },
  { first_name: "Morten", last_name: "Caston" },
  { first_name: "Baird", last_name: "Torresi" },
  { first_name: "Lonnie", last_name: "Dawkins" },
  { first_name: "Tomasina", last_name: "Lomax" },
  { first_name: "Arlinda", last_name: "Brauner" },
  { first_name: "Amby", last_name: "Heindle" },
  { first_name: "Rene", last_name: "Shaddick" },
  { first_name: "Amye", last_name: "Meddick" },
  { first_name: "Catharina", last_name: "Gordon" },
  { first_name: "Herbert", last_name: "Redley" },
  { first_name: "Timmi", last_name: "Shipton" },
  { first_name: "Ezmeralda", last_name: "Michelle" },
  { first_name: "Caresse", last_name: "Dory" },
  { first_name: "Rancell", last_name: "Cash" },
  { first_name: "Fifi", last_name: "Gibbett" },
  { first_name: "Cele", last_name: "Priden" },
  { first_name: "Irwin", last_name: "Manley" },
  { first_name: "Camilla", last_name: "Gutans" },
  { first_name: "Giustina", last_name: "Tozer" },
  { first_name: "Jasmine", last_name: "Willcott" },
  { first_name: "Fenelia", last_name: "Blaschek" },
  { first_name: "Marius", last_name: "Schottli" },
  { first_name: "Shurlock", last_name: "Zanutti" },
  { first_name: "Jehanna", last_name: "Tackle" },
  { first_name: "Tulley", last_name: "Boots" },
  { first_name: "Marna", last_name: "Hurl" },
  { first_name: "Dermot", last_name: "Whetland" },
  { first_name: "Tabor", last_name: "Checkley" },
  { first_name: "Clarette", last_name: "McKerley" },
  { first_name: "Vinita", last_name: "McCallister" },
  { first_name: "Shina", last_name: "Eynald" },
  { first_name: "Vale", last_name: "Hilling" },
  { first_name: "Scarface", last_name: "Jakubiak" },
  { first_name: "Maurizia", last_name: "Coucha" },
  { first_name: "Man", last_name: "Augustine" },
  { first_name: "Ceil", last_name: "Langstaff" },
  { first_name: "Bobette", last_name: "Artharg" },
  { first_name: "Polly", last_name: "Rushman" },
  { first_name: "Doralin", last_name: "Marjanovic" },
  { first_name: "Elianora", last_name: "Stannett" },
  { first_name: "Saunders", last_name: "Gaine" },
  { first_name: "Pavel", last_name: "Lyness" },
  { first_name: "Becka", last_name: "Marner" },
];

let x = names.map((name) => {
  return {
    [`${name.first_name} ${name.last_name}`]: 0,
  };
});
