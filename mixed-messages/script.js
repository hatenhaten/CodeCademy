const quotes = {
    list1: [ 'Remember to focus on all my tasks like meditation - light touch focus - Sustainable focus', 'Courage, Wisdom, Justice, Temperance', 'Live as if you were living for the second time and you had acted as foolishly the first time as you are about to act now'],
    list2: ['Since you make good or evil by your own thoughts, it is your own thoughts that ought to be your principal concern', 'Make sure a task is complete before moving on', 'Set a Pure and Clear Intention to give focused attention to each task before and during it'],
    list3: ['Practice the art of interpreting situations constructively', 'Manage what you can\'t influence', 'Listen & Read actively - constantly summarising in own words']
};

const randomNumberGenerator = () => Math.floor(Math.random() * 3);

const quote1 =  quotes.list1[randomNumberGenerator()];
const quote2 =  quotes.list2[randomNumberGenerator()];
const quote3 =  quotes.list3[randomNumberGenerator()];

const quoteString = `${quote1},
${quote2} &
${quote3}`;


console.log(quoteString);