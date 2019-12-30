
function checkresult() {
    let score = document.getElementById("txt").value;
    checkGrade(score);
}
let grade;

function checkGrade(score)
{
   if (score<40)
   {
      grade="F";
   }
   else if (score<46)
   {
      grade="D";
   }
   else if (score<51)
   {
      grade="C";
   }
   else if (score<56)
   {
      grade="C+";
   }
   else if (score<61)
   {
      grade="B";
   }
   else if (score<66)
   {
      grade="B+";
   }
   else if (score<71)
   {
      grade="A-";
   }
   else if (score<76)
   {
      grade="A";
   }
   else
   {
      grade="A+";
   }
   return alert(grade);;
}
