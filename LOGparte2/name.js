let userName = getFirstName("felipe amaral dos campos", " ")// com espaçoooo
console.log("seja bem vindo: " + userName)


function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0] // pega o primeiro nome
    return firstName
}

userName = getFirstName("fagner-pinto-dos-campos", "-") //com ------
console.log("seja bem vindo: " + userName)