const dp = document.getElementById('display');
var numbers = ['num_0', 'num_1', "num_2", "num_3", "num_4", "num_5", "num_6", "num_7", "num_8", "num_9", "num_del"];
for(var i = 0; i < numbers.length; i++){
    document.getElementById(numbers[i]).addEventListener("click", (e)=> {
       e.target = dp.append(e.target.value);
       


    })
   
}
