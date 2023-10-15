function validateName() {
    const nameInput = document.getElementById("name");
    const nameResult = document.getElementById("nameResult");
    const nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex.test(nameInput.value)) {
        nameResult.textContent = "Valid name!";
    } else {
        nameResult.textContent = "Invalid name. Only letters and spaces are allowed.";
    }
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailResult = document.getElementById("emailResult");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(emailInput.value)) {
        emailResult.textContent = "Valid email address!";
    } else {
        emailResult.textContent = "Invalid email address.";
    }
}

function validatePostcode() {
    const postcodeInput = document.getElementById("postcode");
    const postcodeResult = document.getElementById("postcodeResult");
    const postcodeRegex = /^\d{4}$/;
    if (postcodeRegex.test(postcodeInput.value)) {
        postcodeResult.textContent = "Valid postcode!";
    } else {
        postcodeResult.textContent = "Invalid postcode. Use a valid format in 4 digit";
    }
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phoneResult = document.getElementById("phoneResult");
    const phoneRegex = /^01[0-9]{9}$/;
    if (phoneRegex.test(phoneInput.value)) {
        phoneResult.textContent = "Valid phone number!";
    } else {
        phoneResult.textContent = "Invalid phone number. Use a 11-digit format.";
    }
}
