const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(user => user.languages.length  >= 3 );


let emailAddresses = users.map(user => user.email)

let yearsOfExperience = users.reduce((totalYears, users, index, array) =>
    totalYears + users.yearsOfExperience / array.length, 0);

let longestEmail = users.reduce((a,b) =>{
    if (a.length < b.email.length){
        a = b.email
    }
    return a;
}, '')


let everyonesName = users.reduce((accumulator, users, index, array) =>{
    if (index === array.length -1){
        accumulator.push(users.name)
        return `Your instructors are: ${accumulator.join(', ')}`
    }else{
        accumulator.push(users.name)
        return accumulator
    }
}, []);


let uniqueUserLanguages = users.reduce((accumulator, user) => {
    let languages = user.languages;
    for (let i =0; i < languages.length; i++){
        if (!accumulator.includes(languages[i])){
            accumulator.push(languages[i]);
        }
    }
    return accumulator.sort();
}, []);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);