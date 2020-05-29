const v = ["a","e","i","o","u","y","å","ä","ö"];
const k = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","z"]

function generatePassword(length){
    let rnd = 0;
    let password = "";
    for(let i = 0; i < length; i++){
        if(i%2 === 0){
            rnd = Math.floor(Math.random()*v.length);
            password += v[rnd];
        }
        else{
            rnd = Math.floor(Math.random()*k.length);
            password += k[rnd];
        }
    }
    return password;
}

console.log(generatePassword(10));