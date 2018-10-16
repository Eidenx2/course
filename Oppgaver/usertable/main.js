function checkIn() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var currentdate = new Date();
    var btn = "<button>Checkout</button>";
    var row = '<tr><td>' +name + '</td>'+ '<td>' + email + '</td>' + '<td>' + currentdate +'</td>' + '<td>' + '</td>' + '<td>'+ btn +'</td></tr>'

    document.getElementById('users').innerHTML = row;

}