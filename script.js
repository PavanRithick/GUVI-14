document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    const foodChoices = Array.from(foodCheckboxes).map(checkbox => checkbox.value).join(', ');

    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const tableRow = `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodChoices}</td>
        <td>${state}</td>
        <td>${country}</td>
    </tr>`;

    document.querySelector('#usersTable tbody').insertAdjacentHTML('beforeend', tableRow);

    // Clear the form fields
    document.getElementById('registrationForm').reset();
});
