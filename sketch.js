 var  course,back;
 
 var SERVE=0;
var gameState = SERVE;
var END=2;
var PLAY=1;
var INSTRUCTION1=3;
var INSTRUCTION2=4;
var INSTRUCTION3=5;
var INSTRUCTION4=6;
var INSTRUCTION5=7;
var INSTRUCTION6=8;
var INSTRUCTION7=9;
var INSTRUCTION8=10;


var block1,block2,block3,block4,block5,block6,block7,block8;


function preload() {
 
  bg = loadImage("doctor.jpg");
  

 
  
}

function setup() {
  createCanvas(1500,1000);
  
course = createSprite(700,400,120,40);
course.shapeColor="pink";

 
 
 back=createSprite(1000,850,100,43);
 back.shapeColor="blue";
 back.visible=false;

 
 //column1
 block1=createSprite(110,100,240,50);
 block1.shapeColor="pink";
 block1.visible=false;

 block2=createSprite(400,100,240,50);
 block2.shapeColor="pink";
 block2.visible=false;

 block3=createSprite(700,100,240,50);
 block3.shapeColor="pink";
 block3.visible=false;

 block4=createSprite(700,300,240,50);
 block4.shapeColor="pink";
 block4.visible=false;

 block5=createSprite(1290,100,240,50);
 block5.shapeColor="pink";
 block5.visible=false;

 //column2
 block6=createSprite(110,300,240,50);
 block6.shapeColor="pink";
 block6.visible=false;

 block7=createSprite(400,300,240,50);
 block7.shapeColor="pink";
 block7.visible=false;

 block8=createSprite(110,500,240,50);
 block8.shapeColor="pink";
 block8.visible=false;

  

  
  
}

function draw() {
  background(bg);

  drawSprites()
  
  if(gameState === SERVE){

    textSize(15)
    fill("black");
    text("**CLICK ON COURSES TO CHOOSE**",30,100);
    
    textSize(25);
    fill("red");
    stroke("red");
    text("course",650,410);
    

    fill("blue");
    stroke("white")
    textSize(43);
    text("Hi, WELCOME!",650,120);
    
   
    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    back.visible = false;
    
    course.visible = true;
   
    

    if(mousePressedOver(course)){
      gameState=PLAY; 
      }

      
    
    
    
    
  }

  
  
  
  
  
  
  
  
  
  if(gameState === PLAY){ 

   
   textSize(20);
   fill("blue");
   stroke("blue");
   text("career in medicine",35,105);
   text("Medicine Entrance Exam",325,105);
   text("Courses in Medicine",625,105);
   text("What is Medicine all about?",600,300);
   text("Top Medicine Colleges in India",1140,105);
   text("Job Opportunities for Medicine",5,305);
   text("Salary after Medicine",325,305);
   text("Eligibility Criteria for Admission in Medicine",5,500);

   block1.visible = true;
   block2.visible = true;
   block3.visible = true;
   block4.visible = true;
   block5.visible = true;
   block6.visible = true;
   block7.visible = true;
   block8.visible = true;
   back.visible = false;

    
    course.visible=false;

    textSize(25);
    fill("white");
    stroke("black")
    text("Back",100,860);

    if(mousePressedOver(back)){
      gameState=PLAY;
    }

    if(mousePressedOver(block1)){
    
     gameState=INSTRUCTION1;
     
    } 
     
    if(mousePressedOver(block2)){
      
      gameState=INSTRUCTION2;
    

    }

    if(mousePressedOver(block3)){
      gameState=INSTRUCTION3;

    }

    if(mousePressedOver(block4)){
      textSize(25)
     fill("blue");
     stroke("blue");
     text("hello")

    }

    if(mousePressedOver(block5)){
      textSize(25)
     fill("blue");
     stroke("blue");
     text("hello")

    }

    if(mousePressedOver(block6)){
      textSize(25)
     fill("blue");
     stroke("blue");
     text("hello")

    }

    if(mousePressedOver(block7)){
      textSize(25)
     fill("blue");
     stroke("blue");
     text("hello")

    }

    if(mousePressedOver(block8)){
      textSize(25)
     fill("blue");
     stroke("blue");
     text("hello")
    } 
    
    
   


 








     
    
    
  }
    if(gameState===INSTRUCTION1){
      textSize(25);
      fill("black");
      stroke("red");
      text("Getting admission in medical colleges requires great determination and hard work.",400,230);
      text("The profession demands not only professional commitment but a promise to save life of an aggrieved person. ",200,360);
      text("Hence, one must follow the admission process earnestly to pursue the degree. ",200,450);
      text("Let us take a look at the eligibility criteria and entrance exams to seek admission in medical courses.",290,490)
      text(" a) Undergraduate course",200,540);
      text("Undergraduate course is known as M.B.B.S. (Bachelor of Medicine and Bachelor of Surgery). ",200,620);
      text("An MBBS aspirant can apply for entrance exam after completion of 10+2 with minimum 55% marks and",200,690);
      text("should also have Physics, Chemistry and Biology at 10+2 level.",200,720);
      text("b) Post graduate course");
      text("In order to pursue M.D. (Doctor of Medicine), one needs to possess M.B.B.S. degree along with internship experience.",200,750);
      text("c) Doctoral Course",200,790);
      text("D.M: This is a doctorate degree awarded by many universities in US and is equivalent to a PhD degree.",200,820);
      text(" Doctors possessing M.D. degree are eligible to for this course.",200,860);

      block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    back.visible = true;

    }

    if(gameState===INSTRUCTION2){
      textSize(25);
      fill("black");
      stroke("red");
      text("The list of entrance exams for getting into Medicine profession is provided as under:",400,230);
      text(" a) Undergraduate",200,360);
      text("• MBBA ",200,450);
      text("• AIPMT (All India Pre-Medical/Pre-Dental Test)",290,490)
      text("• AIIMS (All India Institute of Medical Science Entrance Test)",200,540);
      text("• JIPMER (Jawaharlal Institute of Post Graduate Medical Education and Research) Medical Entrance Test",200,620);
      text("• Christian Medical College Entrance Exam",200,690);
      text("• Banaras Hindu University Pre-Medical Test (BHU-PMT)",200,720);
      text("• Manipal University Admissions Test for Undergraduate Studies",200,750);
      text("b) Postgraduate Exams",200,790);
      text("• AIPGEE (All India Post Graduate Medical Entrance Examination)",200,820);
      text("• DUPGMET (Delhi University Post Graduate Medical Entrance Test)",200,860);
      text("c) Doctoral Course Exam ",200,880)
      text("• NEET-SS",200,920);
      text("• JIPMER DM",200,960);

      block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    back.visible=true;
    }

    if(gameState===INSTRUCTION3){
      textSize(25);
      fill("black");
      stroke("red");
      text("hello",400,230);
      text(" a) Undergraduate",200,360);
      text("• MBBA ",200,450);
      text("• AIPMT (All India Pre-Medical/Pre-Dental Test)",290,490)
      text("• AIIMS (All India Institute of Medical Science Entrance Test)",200,540);
      text("• JIPMER (Jawaharlal Institute of Post Graduate Medical Education and Research) Medical Entrance Test",200,620);
      text("• Christian Medical College Entrance Exam",200,690);
      text("• Banaras Hindu University Pre-Medical Test (BHU-PMT)",200,720);
      text("• Manipal University Admissions Test for Undergraduate Studies",200,750);
      text("b) Postgraduate Exams",200,790);
      text("• AIPGEE (All India Post Graduate Medical Entrance Examination)",200,820);
      text("• DUPGMET (Delhi University Post Graduate Medical Entrance Test)",200,860);
      text("c) Doctoral Course Exam ",200,880)
      text("• NEET-SS",200,920);
      text("• JIPMER DM",200,960);

      block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    back.visible=true;
    }

  

     
    
    






















  

  
  

  
  
    
  }
