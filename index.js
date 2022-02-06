function introduction(name) {
    return `Hi, my name is ${name}.`
}


function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function sayHelloTo(firstName = "User") {
    return `Hello, ${firstName}!`
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}