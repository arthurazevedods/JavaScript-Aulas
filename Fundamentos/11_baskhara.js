let b = 4
let c = 6
let a = 10
function baskhara(a, b, delta) {
    let a2 = (2*a);
    console.log(a2)
    let raizQuadradaDeDelta = Math.sqrt(delta)
    console.log(raizQuadradaDeDelta)
    let x1 = (-b + raizQuadradaDeDelta) / (a2)
    console.log(x1)
    let x2 = (-b - raizQuadradaDeDelta) / (a2)
    console.log(x1, x2)
}
function eqSegundoGrau(a,b,c){
    let delta = (b * b) - (4 * a * c)
    console.log(a,b,c,delta)
    baskhara(a, b, delta)
}

eqSegundoGrau(a,b,c)
eqSegundoGrau(10,20,30)
