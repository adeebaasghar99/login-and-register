var a = prompt("Enter your email:");

var b = prompt("Enter your password:");

var c = [" "]

c.push(a)
c.push(b)

console.log(c)

let email = prompt("enter you email:")

if (c[0] === email) {

    alert("Login successful!🌟");
}
else if (c[1] === email) {
    alert("Invalid email or password.");
}
else {
    alert("Invalid email")
}
