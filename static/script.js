const form= document.querySelector('form');
const resField= document.querySelector('#result-line');

form.addEventListener('submit',function(e){
    var data=new FormData(e.target);

    fetch("/classify", {
	method: "post",
	body: data
    })
	.then((res) => { return res.json(); })
	.then((json) => {
	    switch(json.response)
	    {
		case "not_cyberbullying":
		resField.textContent= "Not Cyberbullying 😃";
		break;

		case "other_cyberbullying":
		resField.textContent= "Other Cyberbullying";
		break;

		case "gender":
		resField.textContent= "Bullying: Gender";
		break;

		case "ethnicity":
		resField.textContent= "Bullying: Ethnicity";
		break;

		case "religion":
		resField.textContent= "Bullying: Religion";
		break;

		case "age":
		resField.textContent= "Bullying: Age";
		break;
	    }
	})
	.catch((err) => {
	    console.log(err);
	    alert('Server failed!');
	});

    
    e.preventDefault();
});
