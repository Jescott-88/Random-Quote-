// This is a random quotes generator program//
const prompt = require("prompt-sync")();
// Array holding quotes//
  const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
  "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "You only live once, but if you do it right, once is enough. – Mae West",
  "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
  "Be yourself; everyone else is already taken. – Oscar Wilde"
]

// array holding random facts//
  const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries are not.",
    "A day on Venus is longer than a year on Venus.",
    "Sharks have been around longer than trees.",
    "Wombat poop is cube-shaped.",
    "Sloths can hold their breath for up to 40 minutes underwater.",
    "The Eiffel Tower can grow by up to 6 inches in the summer due to the expansion of the metal in the heat.",
    "A group of flamingos is called a 'flamboyance.'",
    "The longest hiccuping spree lasted 68 years.",
    "A sneeze travels out of your nose at over 100 miles per hour.",
    "A single cloud can weigh more than 1 million pounds.",
    "The shortest commercial flight in the world lasts just 57 seconds, connecting two islands in the Orkney Islands of Scotland.",
    "Cows have best friends and get stressed when they are separated.",
    "Some turtles can breathe through their butts."
   ]

//array holding random words of the day//
  const words =[
    "Eunoia - Beautiful thinking; a state of normal mental health." ,
    "Petrichor- The pleasant, earthy smell after rain." ,
    "Serendipity - The occurrence of events by chance in a happy or beneficial way." ,
    "Limerence - The state of being infatuated or obsessed with another person." ,
    "Sonder - The realization that each passerby has a life as vivid and complex as your own.",
    "Ephemeral - Lasting for a very short time." ,
    "Susurrus - A whispering, murmuring, or rustling sound." ,
    "Ineffable - Too great or extreme to be expressed or described in words." ,
    "Grok - To understand something profoundly and intuitively." ,
    "Vellichoria - The fleeting moment when you’re filled with the desire to be anywhere but where you are." ,
    "Numinous - Having a strong religious or spiritual quality; indicating or suggesting the presence of a divine power." ,
    "Zephyr - A gentle, mild breeze." ,
    "Desuetude - The state of being no longer used or practiced." ,
    "Ebullient - Overflowing with enthusiasm or excitement." ,
    "Callipygian - Having well-shaped buttocks." 

] 
//function for greeting//
  greeting = () => {
    return'Hello and welcome to my random daily growth randomizer' 
};
  console.log(greeting());

  let name = prompt('To start, can i please have your name?');

  let answer = prompt('Thanks ' +name + ', would like like to get a random quote, fact and word of the day?');

getQuote = () => {
  if (answer.toString().toLowerCase() === 'yes') {
  return  quotes[Math.floor(Math.random()*quotes.length)];
 }
 else{
  return " Ok, have a nice day" + name;
 }
}
 getFact = () => {
  if (answer.toString().toLowerCase() === 'yes'){
    return  facts[Math.floor(Math.random()*facts.length)];
  }
 }

 getWord = () => {
  if (answer.toString().toLowerCase() === 'yes'){
    return  words[Math.floor(Math.random()*words.length)];
  }
 }

 console.log(getQuote());
 console.log(getFact());
 console.log(getWord());