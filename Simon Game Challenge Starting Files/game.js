
var buttonColours =["red","blue","green","yellow"]
var gamePattern = []
var userClickedPattern = [];
var started = false;
var level = 0;
// $(document).keydown(function(){ //detect whether can start a game
//     if(!started){
//         $("#level-title").text("Level " + level);
//         nextSequence();
//         started = true;
//         console.log("检测到按键事件。")
//     }
// })
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  
$(".btn").on('click',function(){
    var userChosenColour =  $(this).attr("id"); 
    //get id of this evernt,$(this) 表示触发了点击事件的元素，即被点击的按钮
    userClickedPattern.push(userChosenColour);
    playSound(userClickedPattern);
    animatePress(userClickedPattern)
    checkAnswer(userClickedPattern.length-1);
})



function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]==userClickedPattern[currentLevel]){
      if (userClickedPattern.length === gamePattern.length){
       console.log("success")
       setTimeout(function () {
           nextSequence();
         }, 1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
       setTimeout(function() {
           $("body").removeClass("game-over");
         }, 200);
           startOver();
       
    }

}

function nextSequence(){
    userClickedPattern = [];
    level ++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.ceil(Math.random(0,3)*3)
    randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //use jQuery by id 
    playSound(randomChosenColour);
    
}

function playSound(name){
    var name =new Audio('sounds/'+name+'.mp3');
    //pay attention to file format
    name.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");

        //在 .addClass() 和 .removeClass() 方法中，不需要在类名前面加上点号（.）。
        //点号通常在选择器中使用，而在添加和移除类时不需要。
    }, 100);
}



function startOver(){
    var gamePattern = []
    var started = false;
    var level = 0;
}