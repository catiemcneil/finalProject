// var searchForm = document.querySelector('.shuffle-btn')
// searchForm.addEventListener('submit', function( e ) {
//   e.preventDefault()

//   var newPodcast = document.querySelector('input').value
//   var url = "https://www.audiosear.ch/api/random_episode"
//   var token = "233ae3f41c21bf212856d9ec2b9746dbc95625a8bd6198b824a845a726761686"

//   var request = new XMLHttpRequest()

//   request.addEventListener('load', handleRequest)
//   request.open('GET' ,url) //takes two arguments 1. the type of request 2. where we are making our request
//   request.setRequestHeader('Authorization','Bearer BQDYCB3OG6hRx8pXMiIAfc1YUZArAS-fz7gfin5ebfWsX5dNzjETq-ehUX-khh2PCTwx-0xaprylH8FAcyC5qOw9n8AWHHkD6gL9Xcp9bcvZGflmXBELkr7xtx4azk0x_5WgXS2yXOTqPPBlgqE')
//   request.setRequestHeader('Accept', 'application/json')
//   // request.setRequestHeader('Access-Control-Allow-Headers','*')
//   request.send()

//   function handleRequest(){
//     var response = JSON.parse(request.response)
//     console.log(response.podcast)
//     var results = {
//       podcast: []
//     }
//     for ( let i = 0; i < response.podcast.items.length; i++ ){
//       console.log(i)
//       try{
//         var single = {
//           name: response.podcast.items[i].name,
//           image: response.podcast.items[i].images[0].url,
//           url: response.podcast.items[i].url
//         }
//         results.artists.push(single)
//       }
//       catch (err){

//       }
//     }
//     // console.log(results)
//     // var single = {
//     //   name: response.artists.items[0].name,
//     //   image: response.artists.items[0].images[0].url,
//     //   description: response.artists.items[0].genres[0]
//     // }
//     results.podcast.push(single)
//     var app = document.querySelector('.searchResultsApp')
//     var list = document.createElement('ul')

//     for (let i = 0; i < results.podcast.length; i++ ){
//       var item = document.createElement('li')

//       var form1 = document.createElement('form')
//       form1.action = '/podcast'
//       form1.method = 'POST'
//       item.appendChild(form1)

//       var label = document.createElement('label')
//       label.for = 'description'
//       label.innerHTML = results.podcast[i].name
//       form1.appendChild(label)

//       var inputName = document.createElement('input')
//       inputName.type = 'hidden'
//       inputName.name = 'name'
//       inputName.value = results.podcast[i].name
//       form1.appendChild(inputName)

//       var inputImage = document.createElement('input')
//       inputImage.type = 'hidden'
//       inputImage.name = 'image'
//       inputImage.value = results.podcast[i].image
//       form1.appendChild(inputImage)

//       var inputDesc = document.createElement('input')
//       inputDesc.type = 'hidden'
//       inputDesc.name = 'description'
//       inputDesc.value = results.podcast[i].description
//       form1.appendChild(inputDesc)

//       var submitButton = document.createElement('button')
//       submitButton.type = 'submit'
//       submitButton.innerHTML = 'Add'
//       form1.appendChild(submitButton)

//       //item.innerHTML = results.artists[i].name

//       list.appendChild(item)

//     }
//     console.log(list)
//     // var templateSource = document.querySelector('#search-result-template')
//     // var template = Handlebars.compile( templateSource.innerHTML )
//     // console.log(results.artists)
//     // var renderedTemplate = template({artists:['1','2','3']})//results)
//     // console.log(renderedTemplate)
//     // app.innerHTML = list//renderedTemplate
//     app.appendChild( list )

//   }

// })