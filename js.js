let question_arr = ['Пісня "Ніч яка місячна" не є народною, хоча багато хто вважає її саме такою. Хто автор слів?','З якої пісні ці рядки "Розчеши ми кучері, кучері, кучері. Я би тобі чесала, чесала, чесала, якби мати не знала, не знала, не знала"?','Доповніть пісню: "У неділю рано зіллячко копала/А у понеділок переполоскала/Прийшов вівторок - зіллячко зварила/А в середу рано *** отруїла"','Як звати дівчину, про яку згадується в пісні "Засвіт встали козаченькі"?'];
let a1_arr = ["Леся Українка","Ой Марічко, чичері","Степана","Наталка"]
let a2_arr = ["Михайло Старицький","А калина не верба","Іванка","Галина"]
let a3_arr = ["Остап Вишня","Цвіте терен","Тараса","Марусенька"]
let a4_arr = ["Тарас Шевченко","Два кольори","Гриця","Марічка"]
let answer_arr = ["Михайло Старицький","Ой Марічко, чичері","Гриця","Марусенька"]
let n_right_answer_arr = [2,1,4,3]
let right_answers = 0;
let n_answer = 4;
let pointFlag=1;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        if(pointFlag==1){
        right_answers += 1;
        pointFlag=0;
        }
        right_div.classList.remove("hidden");
        right.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
          if(pointFlag==1){
            //right_answers -= 1;
            pointFlag=0;
            }
        right_div.classList.remove("hidden");
        right.classList.add("hidden");
        wrong_div.classList.remove("hidden");
        }
        console.log ("right_answers=" +right_answers);
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    wrong_div.classList.add("hidden");
    pointFlag=1;
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question)
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    
    n_right_answer =n_right_answer_arr[n_question.value];
    
  }
