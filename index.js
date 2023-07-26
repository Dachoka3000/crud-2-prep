function postShoe(){

    let newObject={
        name:document.getElementById("name").value,
        image:document.getElementById("image").value,
        price:document.getElementById("price").value
    }

    fetch("http://localhost:8080/shoes", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newObject)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
}

let form = document.getElementById("postForm")
form.addEventListener("submit",function(event){
    event.preventDefault()
    postShoe()
    form.reset() 
})

function updateShoe(id){
    let updatedObject = {
        name:"boots",
        image:"https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:5600
    }

    fetch(`http://localhost:8080/shoes/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(updatedObject)
    })
    .then(response=>console.log(response.status))
    .catch(error=>console.log(error))
}

let updateButton = document.getElementById("updateButton")
updateButton.addEventListener("click",function(){
    updateShoe(3)
})

//the object this time only has one key-value pair
function deleteShoe(id){
    fetch(`http://localhost:8080/shoes/${id}`,{
        method:"DELETE"
    })
    .then(response=>console.log(response.status))
    .catch(error=>console.log(error))
}

let deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", function(){
    deleteShoe(2)
    deleteShoe(4)
    
} )