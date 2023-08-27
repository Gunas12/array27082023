//Verilmiş ededler siyahisindaki en böyük ededi tapan alqoritm
/*let num = [1, 5, 7, 14, 12, 19, 1];
let a
for (let i = 0; i < num.length - 1; i++) {
    if (num[i] > num[i + 1]) {
        a = num[i]
    }
    else {
        a = num[i + 1]
    }
}
console.log(a);*/


//Ədəd və rəqəmlərdən ibarət arrayda neçə rəqəm olduğunu tapan alqoritm
/*let qarisiq = ["10", 50, "20", 30];
for (let i = 0; i < qarisiq.length; i++) {
    if (typeof (qarisiq[i]) == typeof (30)) {
        console.log(qarisiq[i])
    }
}*/

//Verilmiş Products arrayindəki Product objectlərinin Id'ləri tək olanlarının Price'larının ədədi ortasını tapan algorithm yazın.
let Products = [
    { Id: 123, Name: "ton baliq", price: 10, StockCount: 50 },
    { Id: 124, Name: "alma", price: 50, StockCount: 100 },
    { Id: 125, Name: "decor up", price: 5, StockCount: 0 },
    { Id: 126, Name: "sirab", price: 12, StockCount: 5 },
    { Id: 127, Name: "AUDI", price: 9999, StockCount: 1 },
    { Id: 128, Name: "sucuq", price: 45, StockCount: 26 }

]
let s = 0;
let d = 0;
for (let i = 0; i < Products.length; i++) {
    if (Products[i].Id % 2 == 1) {
        s = s + Products[i].price
        d++
    }
}
console.log(s / d)