import { postRequest } from "../api/dataAccess.js"
import { section } from "./_main.js"

export const requestFormHTML = () => {
    let html =
    `<h2>Are you ready to get down!</h2>
            <div>
                <label for="customer-name">Customer's Name</label><br>
                <input type="text" name="customer-name" id="">
            </div>
            <div>
                <label for="child-name">Child's Name</label><br>
                <input type="text" name="child-name" id="">
            </div>
            <div>
                <label for="address">Location Address</label><br>
                <input type="text" name="address" id="">
            </div>
            <div>
                <label for="date">Reservation Date</label><br>
                <input type="date" name="date" id="date">
            </div>
            <div>
                <label for="party-length">Number of Kids Attemnding</label><br>
                <input type="number" name="party-size" id="">
            </div>
            <div>
                <label for="party-length">Length of Reservation (Hours)</label><br>
                <input type="number" name="party-length" id="">
            </div>
            <button class="button" id="submitRequest">Submit Request</button>`
            
    return html
}

document.addEventListener("click", event => {
    if (event.target.id === "submitRequest") {
        
        if (
        section("input[name='customer-name']").value &&
        section("input[name='child-name']").value &&
        section("input[name='address']").value &&
        section("input[name='date']").value &&
        section("input[name='party-size']").value &&
        section("input[name='party-length']").value 
        ) {
            const newRequest = {}

            console.log(section("input[name='date']").value)
            console.log(new Date(section("input[name='date']").value).toLocaleDateString())

            newRequest.customerName = section("input[name='customer-name']").value
            newRequest.childName = section("input[name='child-name']").value
            newRequest.address = section("input[name='address']").value
            newRequest.reservationDate = section("input[name='date']").value
            newRequest.partySize = parseInt(section("input[name='party-size']").value)
            newRequest.partyLength = parseInt(section("input[name='party-length']").value)

            // console.log(newRequest)
            postRequest(newRequest)
        }
    }
})