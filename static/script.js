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
		setBGColor('#69f7ff');
		break;

		case "other_cyberbullying":
		resField.textContent= "Other Cyberbullying";
		setBGColor('#72b0f8');
		break;

		case "gender":
		resField.textContent= "Bullying: Gender";
		setBGColor('#ff22b3');
		break;

		case "ethnicity":
		resField.textContent= "Bullying: Ethnicity";
		setBGColor('#b145c5');
		break;

		case "religion":
		resField.textContent= "Bullying: Religion";
		setBGColor('#d6ff86');		
		break;

		case "age":
		resField.textContent= "Bullying: Age";
		setBGColor('#ee72f8');		
		break;
	    }
	    setTimeout(()=>{setBGColor('#3a3a3a')},3000);
	})
	.catch((err) => {
	    console.log(err);
	    alert('Server failed!');
	});

    
    e.preventDefault();
});

function setBGColor(color)
{
    document.querySelector('body').style.backgroundColor=color;
}
