import { fetchElement } from "../api/dataAccess.js"
import { requestList } from "./apptList.js"
import { bookingsList } from "./bookingList.js"
import { requestFormHTML } from "./requestForm.js"

export const section = (container) => document.querySelector(container)

const render = () => {
    fetchElement("requests")
    .then(()=> fetchElement("clowns"))
    .then(()=> fetchElement("completed"))
    .then(()=> section(".form__requests").innerHTML = requestFormHTML())
    .then(()=> section(".list__requests").innerHTML = requestList())
    .then(()=> section(".list__current-bookings").innerHTML = bookingsList())
}

render()

document.addEventListener("update", ()=> render())


