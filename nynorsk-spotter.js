debug = 0;
words = ["alvorleg", "argumenta",
          "bekymra", "berre", "bileta", "blei", "brannar",
          " dei ", "desse", "dårleg", "droppa", "dukka",
          " eg ", " eiga ", " ein ", "einaste", " eit ", " eitt ",
          "farleg", "festklagar", "fjerna", "fleire", "forbod", "forgifta", "fryktar", "frykteleg", "frakta", " frå ",
          "gjere", " gong ", "granskar", "gøymd",
          "hendingar", "hakka", "heilt", "heime",
          "ikkje",
          "jakta", "jegerar", "juristar",
          "kjempar", "klassingar", "kommunane","kompisane", "kvar", "kvifor", "køyre",
          "laboratoria", "lagrar", "leiar", "leigde", "liggje", "løysingar",
          "meiner", "misforståing", "mistar",
          "nase", "Noreg", " no ", "nymotens",
          "omveltingar",
          "regjeringa", " rota ", "rutinane",
          "saka", "sakna", "saman", "seier", "setja", "sjukehuset", "skaparane", "skjerpa", "skulane", "skular", "skule", "sommaren", "stansar", "stengde", "studentar",
          "timar", "turistane",
          "utan", "utru",
          "valde", "valte", "veit", " veka ",
          "åtvara"];

classes   = [ "dh-langlesing-text--2fDc2", "kur-room__content", "plug-teaser"];

for( var k = 0; k<classes.length; k++){
  elements = document.getElementsByClassName(classes[k]);

  if(debug==1){
    console.log("searching class   "+classes[k]);
    console.log(elements);

    console.log("words length "+words.length);
    console.log("elements length "+elements.length);
  }

  listOfNews = [];
  wordsFound  = [];

  for (var i = 0; i < elements.length; i++) {
    atleastonefound = false;
    for(var j=0; j<words.length; j++){
      var s = elements[i].innerHTML;
      var res = s.search(words[j]);

      if(res != -1) {
        atleastonefound = true;
        listOfNews.push(i);
        wordsFound.push(words[j]);

        if(debug==1)
          console.log(words[j]);
        
        elements[i].style.border = "5px solid red";
      }
    }
    if(atleastonefound && debug==1)
      console.log(elements[i]);
  }

  if(listOfNews.length != 0 && debug==1){
    console.log("list of news");
    console.log(listOfNews);
  }
  if(wordsFound.length != 0 && debug==1){
    console.log("list of words found");
    console.log(wordsFound);
  }
}

