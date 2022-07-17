const dp = document.getElementById('display');
var numbers = ['num_0', 'num_1'];
for(var i = 0; i < numbers.length; i++){
    switch (document.getElementById(numbers[i])){
        case 'num_0':
            alert("hello");
    }
}
var num = document.getElementById(numbers[1]);
num.onclick = () =>{
    alert("hello");
}