var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Co byś zmienił w swoim życiu, gdybyś mógł/a cofnąć się w czasie?"
words[2] = "Z jakim celebrytą chciałbyś się spotkać?"
words[3] = "Jakie jest twoje największe marzenie?"
words[4] = "Czy masz autorytet? Jeśli tak, to kim jest ta osoba?"
words[5] = "Wolisz wschody czy zachody słońca?"
words[6] = "W jakim mieście chciałbyś/aś zamieszkać?"
words[7] = "W jakim kraju chciałbyś/aś zamieszkać?"
words[8] = "SMS czy rozmowa przez telefon?"
words[9] = "Piłka nożna czy koszykówka?"
words[10] = "Najlepszy dzień w roku?"
words[11] = "W jakim zawodzie chciałbyś/aś pracować?"
words[12] = "W jakim języku chciałbyś/aś płynnie mówić?"
words[13] = "Co możesz zjeść w każdej chwili?"
words[14] = "Kim jest twój ulubiony twórca internetowy?"
words[15] = "Z czego się najczęściej śmiejesz?"
words[16] = "Jak się nazywa piosenka, której możesz ciągle słuchać?"
words[17] = "Co masz na swojej tapecie?"
words[18] = "Jaki był twój największy lęk z czasów dzieciństwa?"
words[19] = "Jak się nazywał twój pierwszy zwierzak?"
words[20] = "Twój ulubiony dzięń tygodnia?"
words[21] = "Do jakiego kraju chciałbyś/aś wybrać się na wakacje?"
words[22] = "Czy żałuesz jakiejkolwiek zawartej znajomości?"
words[23] = "Jaką postać z serialu animowanego chciałbyś/aś ożywić?"
words[24] = "Ile możesz wytrzymać bez telefonu?"
words[25] = "Kim jest najważniejsza osoba w twoim życiu?"
words[26] = "Jakie jest twoje ulubione hobby?"
words[27] = "Technikum czy liceum?"
words[28] = "Jakie jest twoje największe osiągnięcie?"
words[29] = "Co możesz ugotować bez przepisu z internetu?"
words[30] = "Jaki jest twój ulubiony sport?"
words[31] = "Na jakie tematy mógłbyś/abyś dyskutować godzinami?"
words[32] = "Lubisz polskie romantyczne komedie?"
words[33] = "Czy czytasz aktualnie czytasz jakąś książkę? Jeśli tak, to jaką?"
words[34] = "Udało Ci się kiedyś coś wygrać?"
words[35] = "Jesteś domatorem czy ciągle gdzieś uciekasz?"
words[36] = "Czy bałeś/aś się ciemności w dzieciństwie?"
words[37] = "Na co byś wydał/a milion złotych?"
words[38] = "Czy słyszysz czasem na swój temat jakieś komplementy?"
words[39] = "Czy masz wysoką samoocenę?"
words[40] = "Czy czytasz jakieś gazety? Jeśli tak, to jakie?"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {

var rnd = Math.ceil(Math.random() * NumberOfWords)

frm.WordBox.value = words[rnd]
}
