function introduction(name) {
    console.log("Aki") 
    return `Hi, my name is ${name}.`
    
}
function introductionWithLanguage(name,language) {
    console.log("Aki","Ember.js.")
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
}
function introductionWithLanguageOptional(name, language="JavaScript") {
    console.log(`Gracie, ${language}`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
}
