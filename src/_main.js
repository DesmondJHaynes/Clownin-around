import { requestList } from "./apptList.js"
import { bookingsList } from "./bookingList.js"
import { requestFormHTML } from "./requestForm.js"

const section = (container) => document.querySelector(container)

section(".form__requests").innerHTML = requestFormHTML()
section(".list__requests").innerHTML = requestList()
section(".list__current-bookings").innerHTML = bookingsList()