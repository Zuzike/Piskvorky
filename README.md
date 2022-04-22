let naTahu = "X";

const handleClick = (event) => {
if (
event.target.classList.contains("hrac-X") ||
event.target.classList.contains("hrac-O")
) {
return;
}
event.target.classList.add(`hrac-${naTahu}`);
naTahu = naTahu === "X" ? "O" : "X"; (TOTO JE ALTER ZáPIS IF PODMIENKY)
};

const tlacitka = document.querySelectorAll("button");
for (let index = 0; index < tlacitka.length; index++) {
const tlacitko = tlacitka[index];
tlacitko.addEventListener("click", handleClick);
}

HRACIE POLE POMOCOU KOMPONENTY: V HTML JE LEN DIV id='add'
let naTahu = "X";

const handleClick = (event) => {
if (event.target.tagName !== "BUTTON") {
return;
}

if (
event.target.classList.contains("hrac-X") ||
event.target.classList.contains("hrac-O")
) {
return;
}

event.target.classList.add(`hrac-${naTahu}`);
naTahu = naTahu === "X" ? "O" : "X";
};

/_const pocetPolicek = 10;_/

const Tlacitko = () => { = vkládám tlačítko do HTML
return "<button></button>";
};

/_ TOTO JE DLHší ZáPIS TOHO POD NíM
const RadekTlacitek = (props) => {
const { pocetPolicek } = props;
const pocetPolicek = props.pocetPolicek;
};
_/

-> TOTO JE ZáPIS, KEď POCET POLíčEK NIE JE Už GLOB.PREMENNá
const RadekTlacitek = ({pocetPolicek}) => { = tlačítka sú v divu
let result = "<div>";
for (let i = 0; i < pocetPolicek; i++) {
result += Tlacitko();
}
result += "</div>";
return result;
};

const PoleTlacitek = () => {
let result = "";
for (let i = 0; i < pocetPolicek; i++) {
/_result += RadekTlacitek(); PRE PRíPAD BEZ GLOBáLNEJ_/
resutt += RadekTlacitek({pocetPolicek});
}
return result;
};

document.querySelector("#app").addEventListener("click", handleClick);
document.querySelector("#app").innerHTML = PoleTlacitek();

const app = document.querySelector("#app");
app.addEventListener("click", handleClick); = najprv událost, ale nastane až po udiatí, preto nevadí, že políčka vkladám pod
app.innerHTML = PoleTlacitek({ pocetPolicek: 10 }); = nastavujem
app.innerHTML += PoleTlacitek({ pocetPolicek: 3 });
