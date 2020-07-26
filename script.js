const user1 = {
    name: 'Anna',
    surname: 'Forest',
    c: {
        a: 3,
        b: 4,
        c: {
            a: 3,
        },
    },
};

const user2 = {
    name: 'Anna',
    surname: 'Smith',
    c: {
        a: 5,
        b: 4,
        c: {
            a: 3,
        },
    },
};

function showDifference (object1, object2) {
    let answer = 0;
    for (const key in object1) {
        if (object1.hasOwnProperty(key)) {
            const element1 = object1[key];
            const element2 = object2[key];
            if(element1 !== null && typeof element1 === 'object') {
                console.log(element1, element2);
            } else if (element1 != element2) {
                answer++;
            };
        };
    };
    return answer;
};

console.log(showDifference(user1, user2));