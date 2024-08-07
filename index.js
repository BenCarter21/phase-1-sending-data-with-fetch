// Add your code here

function submitData(userName, userEmail){
    let newUser = {name: userName, email: userEmail}
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser),
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (newUser) {
        const body = document.querySelector("body")
       body.append(newUser.id)
      })
      .catch(function (error) {
        alert("Bad things! Bad things!")
        const body = document.querySelector("body")
        console.log(error.message);
        body.append(error.message)
      });
}
