const notes = [
{
    id: 1,
    subject: "ctrl d Keyboard Shortcut",
    date: "5/27/2021",
    feeling: "Mindful",
    timeSpent: "1 Minute",
},

{ 
    id: 2,
    subject: "push",
    date: "5/28/2021",
    feeling: "Mindful",
    timeSpent: "10 Minute",
},

{
    id: 3,
    subject: "JavaScript Strings",
    date: "6/1/2021",
    feeling: "Relief",
    timeSpent: "20 Minute",
},
    
{
    id: 4,
    subject: "For loop",
    date: "6/1/2021",
    feeling: "Mindful",
    timeSpent: "30 Minutes",    
},    

]

const noteAboutToday = {
    id: 5,
    subject: "If loop",
    date: "6/1/2021",
    feeling: "Frustrated",
    timeSpent: "40 Minute",
}

notes.push(noteAboutToday)
console.log(notes)
