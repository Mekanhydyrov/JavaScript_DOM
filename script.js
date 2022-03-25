// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()

// *** Multiple Elements

// class name
// document.getElementsByClassName()

let val;

// val = document.getElementsByClassName('list-group-item');
// //val = val[2];

// val[1].style.color = 'skyblue';

// for (let i = 0; i < val.length; i++) {
//     console.log(val[i].style.color = 'red');
//     console.log(val[i].textContent = 'Yeni Öğe');
// }





//document.getElementsByTagName(); ile uşalma

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');





// document.querySelectorAll() // Tümünü Seçme


// val = document.querySelectorAll('li');

// val.forEach(function(item, index) {
//     item.textContent = `${index} - Merhaba`;
// });




// val = document.querySelectorAll('li:nth-child(even)');

// val.forEach(function(item) {
//     item.style.background = '#ccc';
// });

// console.log(val);






// Creating Element  (element Oluşturma)

const li = document.createElement('li');


// add class
li.className = 'list-group-item list-group-item-danger';


// Add Attribute 
li.setAttribute('title', 'Attribute Ekleme');
li.setAttribute('data-id', '5');


//text Node

const text = document.createTextNode('Yeni Yapılacaklar');
li.appendChild(text);




const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item float-right';
a.innerHTML = '<i class="fas fa-times"></i>';


// append a to li

li.appendChild(a);


// append li to ul
document.querySelector('#task-list').appendChild(li);

console.log(li);