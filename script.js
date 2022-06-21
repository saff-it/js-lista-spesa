
const groceryList = [
    'pane',
    'acqua',
    'uova',
    'burro',
    'olio',
    'carne',
    'tonno',
    'pasta',
]


const groceryContainer = document.querySelector('ul.gr-list-cont');

let i = 0;

while ( i < groceryList.length ){
    console.log(groceryList[i]);

    i++;

    let groceryItem = document.createElement('li');
    groceryItem.innerHTML = groceryList[i-1];

    groceryContainer.append(groceryItem);

}