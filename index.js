const units = require('./src/units');
function unit2select(el){
    let element;
    let formatedUnit = unitFormat();
    if (el instanceof String){
        element = document.getElementById(el);

        let options = `<option>Select a option</option>`;
        formatedUnit.forEach(unit => {
            options += `<option value="${unit.value}">${unit.text}</option>`
        });

        element.innerHTML = options;
    }
    if(el.current instanceof Element){
        let options = `<option>Select a option</option>`;
        formatedUnit.forEach(unit => {
            options += `<option value="${unit.value}">${unit.text?.toUpperCase()}</option>`
        });
        el.current.innerHTML = options;
    }
    return formatedUnit;
}

function unitFormat(){
    return units.map((u) => {
        return {value: u.definition?.def, text: u.definition?.def}
    })
}
module.exports = unit2select;
