let energia= 50
let clima="chovendo"

if(energia >= 70 && clima=="sol"){
    console.log("Vou a praia")
} else if(energia >= 60 && (clima=="nublado" || clima=="chovendo" )) {
    console.log("Vou ao cinema")
} else {
    console.log("Vou ficar em casa")
}

