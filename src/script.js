document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset(); // Reset the form
});
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const certificateInput = document.getElementById('certificate');
    const certificateName = document.getElementById('certificate-name').value;
    const certificateList = document.getElementById('certificate-list');

    if (certificateInput.files.length > 0) {
        const file = certificateInput.files[0];
        const listItem = document.createElement('div');
        listItem.classList.add('certificate-item');
        listItem.innerHTML = `
            <strong>${certificateName}</strong> 
            <a href="${URL.createObjectURL(file)}" target="_blank">View Certificate</a>
            <button class="delete-button">Delete</button>
        `;

        // Append the item to the certificate list
        certificateList.appendChild(listItem);

        // Clear the input fields
        certificateInput.value = '';
        document.getElementById('certificate-name').value = '';

        // Add delete functionality
        listItem.querySelector('.delete-button').addEventListener('click', function() {
            certificateList.removeChild(listItem);
        });
    }
});
