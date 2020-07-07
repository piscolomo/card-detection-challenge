export default function detectNetwork(card_number){
    var result = "Card not found";
    switch(card_number.length){
        case 14:
            var prefix = card_number.substring(0,2);
            if(prefix == "38" || prefix == "39"){
                result = "Diners Club"
            }
            break;
        case 15:
            var prefix = card_number.substring(0,2);
            if(prefix == "34" || prefix == "37"){
                result = "American Express"
            }
            break;
        case 16:
            var prefix = card_number.substring(0,2);
            if(["51", "52", "53", "54", "55"].includes(prefix)){
                result = "MasterCard"
            }
        case 13:
        case 16:
        case 19:
            if(card_number.substring(0,1)=="4"){
                result = "Visa"
            }
            break;
    }
    return result;
}