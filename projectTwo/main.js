let ul = document.querySelector(".list")

// async function func() {
//     let data = await fetch('https://api/themoviedb.org/3/movie/upcoming?api_key=dcea1fd73e65d34387ad6de7ef9cc5e&language=en-US&page=1')

//     let parseData = await data.JSON()

//     console.log(parseData.results);
// }

// let wrapper = document.querySelector(".wrapper")

// {/* <div class="conatiner">
//     <div class="warapper">
//         <div class="card" style="width: 18rem;">
//             <img src="..." alt="..." class="card-img-top">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
//                 <a class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     </div>
// </div> */} 


// https://api/themoviedb.org/3/movie/upcoming?api_key=dcea1fd73e65d34387ad6de7ef9cc5e&language=en-US&page=1

async function data(){
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let parseData = await data.json()
    console.log(parseData)
}

data()

function render(arr) {
    // document.querySelector("body").innerHTML += arr.map(item => item.title)
    for (let i of arr){
        let li = document.createElement(li)
        li.textContent = i.title
        ul.append(li)
    }
}


// GET
// POST
// PUT
// DELETE