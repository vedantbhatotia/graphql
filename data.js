const UserList = [
    {
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        age: 20,
        Nationality: 'IND',
        friends: [
            {
                id: 2,
                name: 'Peter',
                email: 'peter@gmail.com',
                age: 25,
                Nationality: 'USA'
            },
            {
                id: 3,
                name: 'Mark',
                email: 'mark@gmail.com',
                age: 30,
                Nationality: 'CAN'
            },
        ]
    },
    {
        id: 2,
        name: 'Peter',
        email: 'peter@gmail.com',
        age: 25,
        Nationality: 'USA',
        friends: [
            {
                id: 6,
                name: 'Bill',
                email: 'bill@gmail.com',
                age: 45,
                Nationality: 'SPA'
            },
        ]
    },
    {
        id: 3,
        name: 'Mark',
        email: 'mark@gmail.com',
        age: 30,
        Nationality: 'CAN'
    },
    {
        id: 4,
        name: 'Mary',
        email: 'mary@gmail.com',
        age: 35,
        Nationality: 'AUS'
    },
    {
        id: 5,
        name: 'Steve',
        email: 'steve@gmail.com',
        age: 40,
        Nationality: 'ITA'
    },
    {
        id: 6,
        name: 'Bill',
        email: 'bill@gmail.com',
        age: 45,
        Nationality: 'SPA'
    },
    {
        id: 7,
        name: 'Joe',
        email: 'joe@gmail.com',
        age: 50,
        Nationality: 'IND'
    }
]
const MovieList = [
    {
        id: 1,
        name: 'Avengers',
        yearOfPublication: 2012,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'Interstellar',
        yearOfPublication: 2007,
        isInTheaters: true
    },
    {
        id: 3,
        name: 'Superbad',
        yearOfPublication: 2007,
        isInTheaters: true
    },
    {
        id: 4,
        name: 'The Notebook',
        yearOfPublication: 2004,
        isInTheaters: false
    },
    {
        id: 5,
        name: 'The Lion King',
        yearOfPublication: 2019,
        isInTheaters: false
    },
    {
        id: 6,
        name: 'The Avengers',
        yearOfPublication: 2012,
        isInTheaters: true
    },
    {
        id: 7,
        name: 'The Avengers: Age of Ultron',
        yearOfPublication: 2015,
        isInTheaters: true
    }
]

module.exports = { UserList,MovieList};
