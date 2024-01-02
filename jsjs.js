// let tableFood= ['Riz', "Aricot",'Sucre'], p='';
// let addFood = tableFood.push('legumes','Fromage')
// for (let i=0; i< tableFood.length;i++){
//     p+='prenom n°'+(i+1) + ':'  + tableFood[i] + '\n'
// }
// alert('le tableau contient ' + addFood + 'elements : \n\n' + p)

let tableFood= ['Riz','riz','Aricot','aristote','Sucre','sucre'], p='';
tableFood.sort()
for (let i=0; i< tableFood.length;i++){
    p+='prenom n°'+(i+1) + ':'  + tableFood[i] + '\n'
}

alert(p)


