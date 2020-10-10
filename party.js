

var name = prompt("Please enter your name: ");

const guestList = ["Amina", "Shehu", "Haruna"];

if(guestList.includes(name)) {
    alert(`You are welcome to the party ${name}`)
} else alert("you're not on the list");