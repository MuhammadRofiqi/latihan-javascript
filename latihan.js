var name = "mr"; 
var age = 17;
var money = 1000000;
var jus = 50000;
var amer = 300000;

if (name !== ""){
    if (age >= 17) {
        console.log("Anda hanya dapat membeli Amer")
        if ( money >= amer) {
            console.log(`Anda bisa pesan minum, sisa uang anda ${money-amer}`)
        } else {
            console.log(`uang anda tidak cukup anda harus pulang`)
        }
    } else {
        console.log("Anda hanya dapat membeli jus")
        if ( money >= jus) {
            console.log(`Anda bisa pesan minum, sisa uang anda ${money-jus}`)
        } else {
            console.log(`uang anda tidak cukup anda harus pulang`)
        }
    }
} else {
    console.log("Anda tidak boleh masuk")
}
