let fav="karma";
let guess=prompt("Guess my favorite movie: ");
while((guess!=fav) && (guess!='quit'))
{
    guess=prompt("Wrong guess.Please try again")
}
if(guess==fav)
{
    console.log("Congrats Your guess is correct !")
}
else{
    console.log(" you are Quit !");
}



































// let n=parseInt(prompt("Enter a number: "));
// let reverse=0;
// while(n!=0)
// {
//     let digit=n%10;
//     reverse=reverse*10+digit;
//     n=parseInt(n/10);
// }
// console.log(`Reverse of a number is: `,reverse);
