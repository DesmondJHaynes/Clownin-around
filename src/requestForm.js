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
                <label for="party-length">Length of Reservation (Hours)</label><br>
                <input type="number" name="party-length" id="">
            </div>
            <div>
                <label for="party-length">Number of Kids Attemnding</label><br>
                <input type="number" name="party-length" id="">
            </div>`
            
    return html
}