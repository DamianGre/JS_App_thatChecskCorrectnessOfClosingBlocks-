/*
Napisać funkcję sprawdzającą poprawność domknięcia bloków, otwieranych i zamykanych różnymi 
znakami:cytatu/cudzysłowu przecinkowego - znaki „ ”,cytatu/cudzysłowu szeryfowego - znaki » 
«,nawiasu okrągłego - znaki ( ). Po zakończeniu przeglądania napisu należy sprawdzić, czy wszystkie 
bloki zostały domknięte i jeśli nie, to stwierdzić błąd i poinformować o rodzaju niedomkniętych 
bloków.Do realizacji zadania należy wykorzystać stos (wystarczy jeden), pomocniczo można też 
skorzystać ze słownika/słowników.
*/

function sprawdzaczDomknięciaNapisów(napis) {
  let stos = []
  for(let znak of napis)
    if(znak == "„")
       stos.push("cudzysłów")
    else if(znak == "»")
       stos.push("szeryf")
    else if(znak == "(")
       stos.push("okrągły")
    else if(znak == "”") {
       if(stos.pop() != "cudzysłów")
         return false
         }
       else if(znak == "«") {
          if(stos.pop() != "szeryf")
          return false
          }
         else if(znak == ")") {
            if(stos.pop() != "okrągły")
            return false
         }
 if(stos.length == 0)
     console.log("Wszystkie znaki cudzysłowy/nawiasy szeryfowe/nawiasy okrągłe zosatły zamknięte")
 else
    for(let znaki of stos)
        if(znaki == "cudzysłów")
          console.log("Cudzysłów nie został domknięty.")
        else if(znaki == "szeryf")
          console.log("Nawias szeryfowy nie został domknięty.")
       else if(znaki == "okrągły")
         console.log("Nawias okrągły nie został domknięty.")
}
