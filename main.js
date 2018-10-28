// const submit = document.getElementById('submit')
// const select = document.getElementById('company')
// fetch(`http://api.citybik.es/v2/networks`)
//   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//   .then(response => {
//     console.log(response)
//
//     for(let i = 0; i<555; i++){
//
//       let str = ''
//
//       if(response.networks[i].company.length){
//
//         for(let j = 0; j < response.networks[i].company.length; j++){
//
//           str += response.networks[i].company[j]
//       }
//     }
//
//     let text = document.createTextNode(str)
//
//     let option = document.createElement('option')
//
//     option.appendChild(text)
//
//     select.append(option)
//
//     option.setAttribute('city',response.networks[i].location.city)
//     option.setAttribute('country',response.networks[i].location.country)
//   }
// });
//     submit.addEventListener('click', function(){
//       var city = select.getAttribute('city')
//       var country = select.getAttribute('country')
// })
//
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=&APPID=43df58f55020682bd2c25d15fd090abf&units=imperial`)
//   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//   .then(response => {
//   })




  const submit = document.getElementById('submit')
let select = document.getElementById('company')
fetch('http://api.citybik.es/v2/networks')
.then(res => res.json())
.then( (response) => {
console.log(response)
// A for loop to iterate through our array
for(let i = 0; i < 555; i++){
  // Local variable to hold company name
  let str = ''
  // Conditional if the typeof is a string, just add it to local variable str
  if(response.networks[i].company.length){
    // if not a string, then we loop through array again for the values
    for(let j = 0; j < response.networks[i].company.length; j++){
      // Take the values of the second array and concanate to the str variable
      str += response.networks[i].company[j]
    }
  }
  // Creates a text node from the variable str
  let text = document.createTextNode(str)
  // Creates a option html tage
  let option = document.createElement('option')
  // Takes the text node created and append that to the option html created
  option.appendChild(text)
  // Takes the option html created and append it to the parent select in the html
  select.append(option)
  // This process is repeated until we reach the end of our iterating of the array
  option.setAttribute('city', response.networks[i].location.city)
  option.setAttribute('country', response.networks[i].location.country)
}
});

submit.addEventListener('click', function(e){
 e.preventDefault()
 let city = select.options[select.selectedIndex].getAttribute('city')
 console.log(city)
 let country = select.options[select.selectedIndex].getAttribute('country')
 console.log(country)
 let apiCode = "6d59147568f10e6ee2ba85323ec05e1a"

let location = city+ ","+ country
let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiCode}&units=imperial`

fetch(apiURL)
.then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
   console.log(response)
})
})
