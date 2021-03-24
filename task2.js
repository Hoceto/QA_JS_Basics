function first_non_repeating_letter(text){
    
    while (true) {
        var char = text[0];
        var re = new RegExp(char.toLowerCase(), "g");
    
        var char_count = (text.toLowerCase().match(re)||[]).length;
        //console.log(char_count);

        if (char_count == 1){
            return char;
        } 
        else{
            text = text.replace(re, '');
        }

        if (text==='') return text;
    }
}


console.log(first_non_repeating_letter("stress"))
console.log(first_non_repeating_letter("sTreSS"))
console.log(first_non_repeating_letter("b"))
console.log(first_non_repeating_letter("cccccc"))
