const users = [
{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
},
]

const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
},
]


const personAccount = {
    firstName: 'tom',
    lastName: 'hardy',
    incomes: {acting: 50000, assets: 100, interest: 3000},
    expenses: {mortgage: 2000, internet: 500, fuel: 1000},
    totalIncome: function(){ 
        return Object.values(this.incomes).reduce((a, b) => a + b);
    },
    totalExpense: function(){
        return Object.values(this.expenses).reduce((a, b) => a + b);
    },
    addIncome: function(newincome){
        personAccount.incomes['newincome'] = newincome;
    },
    addExpense: function(newExpense){
        personAccount.expenses['newincome'] = newExpense;
    },
    accountBalance: function(){
        return this.totalIncome() - this.totalExpense()
    },
    accountInfo: function (){
        return `${this.firstName} ${this.lastName} with account balance of ${this.accountBalance()}`
    }
}



function checker(iden) {
    let userExists = false;

    for (const user of users) {
        if (user._id === iden) {
            userExists = true;
            console.log("User exists");
            break;
        }
    }

    if (!userExists) {
        signup(iden, 'timi', 'timi@timi.com', '24455', '09/09/2021 10:50 AM', false);
    }
}

function signup(iden, username, email, password, createdAt, isLoggedIn = false) {
    users.push({
        _id: iden,
        username: username,
        email: email,
        password: password,
        createdAt: createdAt,
        isLoggedIn: isLoggedIn,
    });
    console.log(`User ${iden} added to database`);
}

// Example usage:
checker('ab12ex');  // Existing user, should print "User exists"
checker('newUserId');
checker('ygouhv')  // Non-existing user, should add a new user and print "User added to database"
console.log(users)