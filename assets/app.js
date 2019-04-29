console.log('js connected');

let validEmail = true;
let emailBox = document.getElementById("email-box");

let doThing = () =>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailBox.value)) {
        emailBox.style.color = 'GREEN';
        validEmail = true;
    } else {
        emailBox.style.color = 'RED';
        validEmail = false;
    }
    
}
emailBox && emailBox.addEventListener('change', doThing);


validateMyForm = () => {
    if(validEmail){
        return true;
    }else{
        openModal();
        return false;

    }
}


let openModal = () =>{
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

// const searchButton = document.getElementById("search-button");

// const search = () =>{
//     let input = document.getElementById("input-box").value;
//     let events = document.querySelector(".events")
//     console.log(input);
//     $.ajax({
//         type:"GET",
//         url:"https://app.ticketmaster.com/discovery/v2/events/Z7r9jZ1Aebd39.json?apikey=Hrfvp5IvZnT0GP85zTN8GGs9W6W3kczc",
//         async:true,
//         dataType: "json",
//         success: function(json) {
//                     console.log(json)
//                     for (let i = 0;i<json._embedded.events.length; i ++){
//                         let el = document.createElement("div")
//                         el.innerText = json._embedded.events[i].name
//                         events.append(el)
//                     }
//                  },
//         error: function(xhr, status, err) {
//                  }
//       });
// }

// searchButton && searchButton.addEventListener('click', search);




// $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Hrfvp5IvZnT0GP85zTN8GGs9W6W3kczc",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });





