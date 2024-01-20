/*Objetivos
1-Realizar a operação selecionada 

*/
var Js_n1;
var Js_n2;
var Js_n3;
var Js_Select;

function calcula() {
    Js_n1 = parseInt( document.calculadora.n1.value);
    Js_n2 = parseInt(document.calculadora.n2.value);
    Js_Select = document.calculadora.operacao.value;
    switch (Js_Select) {
        case "soma":
            Js_n3 = Js_n1 + Js_n2;
            window.alert(Js_n3);
            break;
        case "subtracao":
            Js_n3 = Js_n1 - Js_n2;
            window.alert(Js_n3);
            break;
            case "multiplicacao":
                Js_n3 = Js_n1 * Js_n2;
                window.alert(Js_n3);
                break;
            case "divisao":
                Js_n3 = Js_n1 / Js_n2;
                window.alert(Js_n3);
                break;
    
        default:
            break;
    }
    window.alert(Js_Select+Js_n1+Js_n2);

}