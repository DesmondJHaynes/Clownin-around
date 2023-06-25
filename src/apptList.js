import { deleteRequest, getdata, postCompleted } from "../api/dataAccess.js"

document.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteRequest")) {
        const [,requestId] = event.target.id.split("--")

        deleteRequest(parseInt(requestId))
    }
})

document.addEventListener("change", event => {
    if (event.target.name === "clown") {
        const [requestId, clownId] = event.target.value.split("--")
        const date = new Date().toLocaleDateString()
        let object = 
            {
                "requestId" : parseInt(requestId),
                "clownId" : parseInt(clownId),
                "completeionDate" : date
            }
        postCompleted(object)
    }
})



export const requestList = () => {
    const requests = getdata('requests')

    let html = `<h2>Your request has been submitted!</h2>`

    //step 1
    const convertedRequests = 
        requests.map((request) => {
            const date = new Date(request.reservationDate);
            request.unix = date.getTime() - Date.now()
            return ({...request})
        })
        console.table(convertedRequests)

    //step2
    let reorderedRequests = convertedRequests.sort((a,b)=> a.unix - b.unix)
    console.table(reorderedRequests)

    html += reorderedRequests.map((htmlBuilder)).join("")
        
    return html
}




const htmlBuilder = (request) => {
    const clowns = getdata("clowns")
    const completed = getdata("completed")

    let html = "<ul>"

    const finder = completed.find(complete => complete.requestId === request.id)
    console.log(finder)
    

    if (finder){

                html += 
                `<li>${request.childName}\'s Celebration is requested for ${request.reservationDate}
                <button class="button" id="deleteRequest--${request.id}">Delete</button>
                </li>`

        } else {

        html += 
        `<li>${request.childName}\'s Celebration is requested for ${request.reservationDate}
        <button class="button" id="deleteRequest--${request.id}">Delete</button></br>Satisfy Reservation
        <select name="clown">
        <option value="0">Choose Clown</option>
        `
    
        clowns.forEach(clown => {
            html += `<option value="${request.id}--${clown.id}">${clown.name}</option>`
        })
    
        html += `</select></li>`
    }
    html += `</ul>`

       
    return html

}


/*
//Algorithm
Alright so we want to SORT our data based on the objects "date" property value.
We're gonna achieve this in 2 parts....

First let's convert our dates to UNIX time...

    const convertedRequests = requests.map((request) => {
        const date = new Date(request.reservationDate);
        request.unixDate = date.getTime()
    })
    ////^theory

      const convertedRequests = requests.map((request) => {
        const date = new Date(request.reservationDate);
        request.unixDate = date.getTime()
        return ({...request}) <==Don't forget to return the array!
    })
    ////^actual

Second we'll use the .sort() method with instructions on how to sort the data passed through the method in order to get an array of our objects in the order we want.

    const convertedRequests = ...STEP1
    
    convertedRequest.sort(a,b) => a.unixDate - a.unixDate
        //in my limited understanding sort is similar to .find() in which you are simply estabilishing parameters and then creating something of a conditional statement. Instead of finding what in your array meets the condition, it moreso forces the established conditions onto the array (specifically in regards to how they are listed). if you're looking for any type of actual changes to your objects, or whatever you have inside your array, the map method is for that kind of thing.
*/