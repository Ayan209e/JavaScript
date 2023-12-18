const promiseOne = new Promise(function (resolve,reject) {
    // Do async task
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : 'ayan' , email : "ayan@ayan.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    let error = true;
    if(!error){
        resolve({username : "Ayan" , password : "123"})
    }
    else{
        reject("Error: Something went wrong")
    }
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username;
})
.then( (username) => {
    console.log(username)
})
.catch(function(err){
    console.log(err);
})
.finally( () => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E : ",error);
    }
}

// getAllUsers();

fetch('https://api.github.com/users/Ayan209e')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
}).catch( (err) => console.log(err))

// Read -> promise.all
