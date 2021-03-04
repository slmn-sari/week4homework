const computer = require ("./data.js");

let result = null;

result = computer.map(item => {
return {
    id: item.id,
    marka: item.marka,
    model: item.model,
    renk: item.renk,
    Kullanim: item.Kullanim,
    modelyili: item.modelyili,
}

}).filter(item => item.Kullanim =="Notebook").map(item => {
    return{
        SIRALAMA: item.id,
        marka: item.marka,
        model: item.model,
        RENK: item.renk,
        Kullanim: item.Kullanim,
        modelyili: item.modelyili,
        ram:"8gb",
    }

});

console.table(result);