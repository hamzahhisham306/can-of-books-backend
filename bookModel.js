const mongoose =require('mongoose');
const bookSchema=require('./schema');
const bookModel=mongoose.model('module', bookSchema);


const Army = new bookModel({
    title: 'Army of None',
    description: 'A Bill Gates Top Five Book of 2018 A Pentagon defense expert and former U.S. Army Ranger explores what it would mean to give machines authority over the ultimate decision of life or death',
    status: true
});

const Victorian  = new bookModel({
    title: 'The Victorian Internet',
    description: 'A new paperback edition of the book the Wall Street Journal dubbed “a Dot-Com cult classic,” by the bestselling author of A History of the World in 6 Glasses-the fascinating story of the telegraph, the world s first “Internet.”The Victorian Internet tells the colorful story of the telegraphs creation and remarkable impact',
    status: true
});

const World = new bookModel({
    title: 'A World Without Work',
    description: "Shortlisted for the Financial Times & McKinsey 2020 Business Book of the YearA New York Times Book Review Editors’ ChoiceFrom an Oxford economist, a visionary account of how technology will transform the world of work, and what we should do about itFrom mechanical looms to the combustion engine to the first computers, ",
    status: true
})
Army.save();
Victorian .save();
World.save();

module.exports = bookModel