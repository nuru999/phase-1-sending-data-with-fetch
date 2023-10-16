// Add your code here//

function submitData(userName, userEmail) {
    const userData = {
      name: userName,
      email: userEmail
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    // Return the fetch chain//
    return fetch('http://localhost:3000/users', config)
      .then(response => response.json())
      .then(data => {
        // Access the newly created ID and append it to the DOM
        const id = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = id;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        // Handle errors and append the error message to the DOM//
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }
  
  // Example usage://
  submitData("John Doe", "john@example.com");
  
