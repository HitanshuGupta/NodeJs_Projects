// // function kuch(){
// //     let count = 0;
// //     setInterval(()=>{
// //         count +=5;
// //         console.log(count);
// //     },1000);
// // }

// // kuch();

// function getUser() {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			res(user);
// 		}, 3000);
// 	});
// }

// function getUserProgress(user) {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			res(details);
// 		}, 5000);
// 	});
// }

// function processPRogress() {}

// getUser().then((res) =>
// 	getUserProgress(res).then((res) => processPRogress(res))
// );


// ************ Await and Async ********


// let getUser = () =>{
// return new Promise((res,rej) =>{
//     setTimeout(()=>{
//         console.log("fetched userr");
//         // res({
//         //     "name":"Hitanshu Gupta",
//         //     "age":21
//         // })
//         rej("Problem!!!")
//     },1000)
// })
// }

// // getUser().then(res => console.log(res))

// async function f(){
// let pr = getUser();
// console.log(pr);
// try {
//     let user = await pr;
// } catch {
//     console.log("error occured in DB connection");
// } finally{
    
// }
// }
// f()



