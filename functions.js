function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("John", "Doe"));

// self invoking function

(function() {
    console.log("Happy Happy Happy !!");
}) ()