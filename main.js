
const button = document.querySelector('button');
const body = document.querySelector('body')
button.addEventListener('click', ()=>{
    axios.get('https://swapi.dev/api/planets?search=Alderaan')
    .then(res=>res.data.results.map(result=>result.residents))
    .then((result)=>{

        result.map(url => {
            
            for (let index = 0; index < url.length; index++) {
                axios.get(url[index]).then(res=>{
                    let h2 = document.createElement('h2')
                    h2.innerText = res.data.name
                    body.appendChild(h2)
                }) 
            }
            
        })
        
    })


})