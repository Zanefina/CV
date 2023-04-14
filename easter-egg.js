//del 1
const egg1 = document.getElementById("egg1");
egg1.addEventListener("click", function(){
    document.body.style.background = "#F1948A";
});

//Del2

const modal = document.getElementById("myModal");


const span = document.getElementsByClassName("close")[0];


function closeModal() {
    modal.style.display = "none";
}


const secretCode = ["1", "9", "9", "8"];
let index = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === secretCode[index]) {
    index++;

    if (index === secretCode.length) {
        modal.style.display = "block";
        index = 0;
    }
} else {
    index = 0;
}
});




/*var pattern = ['1', '9', '9', '8'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		modalPopup();
	}
    function modalPopup (){
        const newModal=document.createElement("div");
        newModal.className="surprisemodal";

        const message=document.createElement("h1");
        message.innerHTML="Glad Påsk!!!";
        message.className="surprise";

        document.body.appendChild(newModal);
        newModal.appendChild(message);  
        newModal.style.display="block";

        window.onclick= function (evt){
            if(evt.target==newModal){
            newModal.style.display="none";
        }
        }
        return newModal;
        }
};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
*/