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

const searchButton = document.getElementById("search-button");

const search = () =>{
    console.log("i get here");
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Hrfvp5IvZnT0GP85zTN8GGs9W6W3kczc",
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });
}

searchButton.addEventListener('click', search);






