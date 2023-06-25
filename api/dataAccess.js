const api = `http://localhost:8088`

const dataStorage = 
{
    clowns : [],
    requests : [],
    completed : []
} 



//fetch***
export const fetchElement = (param) => {
    return fetch(`${api}/${param}`)
    .then(res => res.json())
    .then(data => dataStorage[param] = data)
    .then(()=> console.table(dataStorage[param]))
}




//POST***
//post object created from click event listener in "requestForm.js"
export const postRequest = (newRequest) => {

    const optionPost =  
    {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(newRequest)
    }
    return fetch(`${api}/requests`, optionPost)
    .then(res => res.json())
    .then(()=> document.dispatchEvent(new CustomEvent("update")))
}

//post object created from change event listener in "apptList.js"
export const postCompleted = (object) => {
    const optionPost = 
    {
        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body :  JSON.stringify(object)
    }

    return fetch(`${api}/completed`, optionPost)
    .then(res => res.json())
    .then(()=>document.dispatchEvent(new CustomEvent("update")))
}




//DELETE***
export const deleteRequest = (id) => {
    return fetch(`${api}/requests/${id}`, {method : "DELETE"})
    .then (()=> document.dispatchEvent(new CustomEvent("update")))
}




//getHandlers***
export const getdata = (arrData) => {
    return dataStorage[arrData].map((obj)=>({...obj}))
}

//setHndlers***