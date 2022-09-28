import { useState } from "react";

const devNames = [
  'Alice',
  'Bob',
  'Carol',
  'Debbie',
  'Edgar',
  'Franny',
  'Georgia',
  'Harvey',
  'Ichabod',
  'Juliette',
  'Klaus',
  'Leland',
  'Marcus',
  'Nigella',
  'Olivia',
  'Pierre',
  'Quincy',
  'Ronalda',
  'Samantha',
  'Tony',
  'Ursula',
  'Victor',
  'Wendy',
  'Xavier',
  'Yasmin',
  'Zelda'
]

const adjectives = [
  'Amazing',
  'Incredible',
  'Stupendous',
  'Life-Affirming',
  'Spectacular',
  'Astonishing',
  'Mind-Blowing',
  'Truly Sublime',
  'Unbelievable',
  'Utterly Delightful',
  'Marvelous',
  'Awesome',
  'Breathtaking',
  'Shocking',
  'Startling',
  'Thrilling',
  'Wondrous',
  'Remarkable',
  'World-Shattering',
  'Sensational',
  'Stunning',
  'Pretty Good'
]

const fonts = [
  "'Brush Script MT', cursive",
  "'Courier New', monospace",
  "Georgia, serif",
  "'Trebuchet MS', sans-serif",
  "'Times New Roman', serif"
]

const pickRandomColor = function() {
  let toReturn = "#";
  const hexCodes = "01234567890ABCDEF";
  for (let i = 0; i < 6; i++) {
    toReturn += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return toReturn;
}

export function ToDoList() {
  const [bgColor] = useState(pickRandomColor());
  const [textColor] = useState(pickRandomColor());
  const [devName] = useState(devNames[Math.floor(Math.random() * devNames.length)]);
  const [adjective] = useState(adjectives[Math.floor(Math.random() * adjectives.length)]);
  const [listFont] = useState(fonts[Math.floor(Math.random() * fonts.length)]);
  return (
    <>
      <div style={ {backgroundColor: bgColor, color: textColor, fontFamily: listFont}}>
        {devName}'s {adjective} To-Do List App
      </div>
    </>
  )
}