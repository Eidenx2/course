var list = [];

function checkIn() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var currentTime = new Date().toLocaleString();
    list.push({
        name: name,
        email: email,
        checkin: currentTime,
        checkout: ''
        
    });
    updateTable();

};

function checkOut(listNumber) {
        list[listNumber].checkout = new Date().toLocaleString();
        
        updateTable();
    };
    
function updateTable() {

    let tableLines = [];
    for (var i = 0; i < list.length; i++) {
        list[i].checkout ? '' : button = "<button onclick='checkOut("+i+")'>Checkout</button>"
        tableLines.push(
            "<tr>" +
            '<td>' + list[i].name + '</td>' +
            '<td>' + list[i].email + '</td>' +
            '<td>' + list[i].checkin + '</td>' +
            '<td>' + list[i].checkout + '</td>' +
            '<td>' +  button + '</td>' +
            "</tr>"
        );
    }
    document.getElementById('users').innerHTML = tableLines.join('');
}