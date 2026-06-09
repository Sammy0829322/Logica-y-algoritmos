 const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;
    while (siguiente < arr.length) {
        let palabra_1 = arr[inicio];
        let palabra_2 = arr[siguiente];
        if (palabra_1[0] !== palabra_2[0]) {
            siguiente++;
            inicio++;     
        }

        else{
    
           return [palabra_1,palabra_2];
        }
    }
    return null;
    
}
console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]