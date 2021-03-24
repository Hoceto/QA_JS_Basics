function meetings (s) {

    var name_pairs = s.toUpperCase().split(";");
    var names = [];
    name_pairs.forEach((item) => names.push([item.split(":")[1], item.split(":")[0]]));
    names.sort();
    var str = '';
    names.forEach(item => str += "(" + item[0] + ", " + item[1] + ")")
    return str;

}

var info = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meetings(info));