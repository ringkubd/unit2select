import units from './units.json';
function unit2select(el){
    var element;
    if (el instanceof String){
        element = document.getElementById(el);
    }else if (el instanceof Element){
        element = el;
    }
    let options = `<option>Select a option</option>`
    const units = unitFormat().map((unit) => {
        return options += `<option value="${unit.value}">${unit.text}</option>`
    });
    element.appendChild(options);
}

function unitFormat(){
    return units.map((u) => {
        return {value: u.definition.def, text: u.definition.def}
    })
}

module.exports = unit2select;
