// generate a random number
const randomNumberGenerator = (num) => Math.floor(Math.random() * num);

// create a collection of wisdom as an object of arrays
const collectedWisdom = {
    communication: [ 'Be conscious in switching between system 1 and 2 where appropriate', 'Practice the art of interpreting all communication constructively', 'Listen & Read actively - constantly summarising in own words', 'Sync breathing rythm with the other person', 'Mirror body language', 'Hold good eye contact'],
    effectiveness: [ 'Live as if you were living for the second time and you had acted as foolishly the first time as you are about to act now', 'Courage, Wisdom, Justice, Temperance - The 4 Stoic virtues', 'Remember to focus on all my tasks like meditation - light touch focus - Sustainable focus', 'Manage what you can\'t influence',  'Make sure a task is complete before moving on', 'Set a Pure and Clear Intention to give focused attention to each task before and during it'],
    wellbeing: ['Since you make good or evil by your own thoughts, it is your own thoughts that ought to be your principal concern', 'Practice Enjoying the present moment no matter what it is' ]
};

// store given wisdom in an array
const givenWisdom = [];

// iterate over the collectedWisdom object
for(let prop in collectedWisdom) {
    let optionIdx = randomNumberGenerator(collectedWisdom[prop].length);

    // use the object's properties to customize the message added to personal wisdom with each iteration
    switch(prop) {
        case 'communication' :
            givenWisdom.push(`To improve your communication remember: ${collectedWisdom[prop][optionIdx]}`);
            break;
        case 'effectiveness' :
            givenWisdom.push(`To improve your effectiveness remember: ${collectedWisdom[prop][optionIdx]}`);
            break;
        case 'wellbeing' :
            givenWisdom.push(`To improve your wellbeing remember: ${collectedWisdom[prop][optionIdx]}`);
            break;
        default:
            givenWisdom.push('There is no wisdom to be found here.')
    } 
};

function formatWisdom(wisdom) {
    const formatted = wisdom.join('\n');
    console.log(formatted);
};

formatWisdom(givenWisdom);