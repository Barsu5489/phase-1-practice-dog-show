function fetchDogs(){
    fetch('http://localhost:3000/dogs')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        dogTable(data)
    })
}

function dogTable(dog){
    const table_body = document.getElementById('table-body')
    dog.forEach(dog=>{
    const tr = document.createElement('tr')

    const td1 = document.createElement('td')
    td1.textContent = dog.name
    const name = dog.name
    tr.appendChild(td1)

    const td2 = document.createElement('td')
    td2.textContent = dog.breed
        const breed = dog.breed
    const td3 = document.createElement('td')
    td3.textContent = dog.sex
    const sex  =dog.sex

    const td4 = document.createElement('td')
    td4.innerHTML = `<td><button>Edit</button></td>`
    table_body.appendChild(tr)    
   
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    td4.addEventListener('click',()=>{
        //console.log('editbtn')
        //console.log(`Name: ${name} Breed: ${breed} Sex: ${sex}`)
        const input = document.querySelectorAll('input')
        input[0].value = dog.name
        input[1].value = dog.breed
        input[2].value = dog.sex

        const form = document.getElementById('dog-form')
        form.addEventListener('submit',(e)=>{
            
            e.preventDefault()
            const update = {
                name:input[0].value,
                breed:input[1].value,
                sex:input[2].value
            }
            console.log(input[0].value)
            console.log(input[1].value)
            console.log(input[2].value)
            
    fetch(`http://localhost:3000/dogs/${dog.id}`,{
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: {
            'Content-type': 'application/json',
        }
    }).then(res=>res.json())
    .then(data=>console.log(data))


            
        })

    })
})
}
document.addEventListener('DOMContentLoaded', () => {
fetchDogs()

})