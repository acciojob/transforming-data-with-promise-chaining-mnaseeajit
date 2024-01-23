// //your JS code here. If required.

// document.getElementbyId("btn").addEventListener("click",function(){
// 	 let num = document.getElementById("ip").value;
// 	 let output = document.getElementById("output");
// 	myPromise1(num).then((data)=>{
// 		console.log(data);
// 		  output.innerHTML += data.Result;
// 		  return promise2(data.Result);
// 	}).then((data)=>{
// 		console.log(data);
// 		  output.innerHTML += data.Result;
// 		  return promise3(data.Result);
// 	}).then((data)=>{
// 		console.log(data);
// 		output.innerHTML += data.Result;
// 		  return promise4(data.Result);
// 	}).then((data)=>{
// 		console.log(data);
// 		output.innerHTML += data.Result;
// 		  return promise5(data.Result);
// 	}).then((data)=>{
// 		console.log(data);
// 		output.innerHTML += data.Result;
// 		  return promise6(data.Result);
// 	}).then((data)=>{
// 		output.innerHTML += data.Result;
// 		console.log(data);
// 	}).catch((err)=>{
// 		console.log(err);
// 	})
// })

// function myPromise1(num){
// 	return new Promise((resolve,reject)=>{
// 		  setTimeout(()=>{
// 			  resolve({Result : num});
			  
// 		  },2000)
// 	})
// }

// function promise2(data){
// 	return new Promise((resolve,reject)=>{
// 		  setTimeout(()=>{
// 			  resolve({Result : data});
			  
// 		  },2000)
// 	})
// }

// function promise3(data){
// 	return new Promise((resolve,reject)=>{
// 		  setTimeout(()=>{
// 			  resolve({Result : data*2});
			  
// 		  },1000)
// 	})
// }

// function promise4(data){
// 	return new Promise((resolve,reject)=>{
// 		  setTimeout(()=>{
// 			  resolve({Result : data-3});
			  
// 		  },1000)
// 	})
// }

// function promise5(data){
// 	return new Promise((resolve,reject)=>{
// 		  setTimeout(()=>{
// 			  resolve({Result: data / 2});
			  
// 		  },1000)
// 	})
// }

// function promise6(data){
// 	return new Promise((resolve,reject)=>{
// 		  setTimeout(()=>{
// 			  resolve({Result : data + 10});
			  
// 		  },1000)
// 	})
// }

document.getElementById("btn").addEventListener("click", function () {
    let num = document.getElementById("ip").value;
    let output = document.getElementById("output");

    myPromise1(num)
        .then((data) => {
            console.log(data);
            output.innerHTML += data.Result+`<br>`;
            return promise2(data.Result);
        })
        .then((data) => {
            console.log(data);
            output.innerHTML += data.Result+`<br>`;
            return promise3(data.Result);
        })
        .then((data) => {
            console.log(data);
            output.innerHTML += data.Result+`<br>`;
            return promise4(data.Result);
        })
        .then((data) => {
            console.log(data);
            output.innerHTML += data.Result+`<br>`;
            return promise5(data.Result);
        })
        .then((data) => {
            console.log(data);
            output.innerHTML += data.Result+`<br>`;
            return promise6(data.Result);
        })
        .then((data) => {
            output.innerHTML += data.Result+`<br>`;
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

function myPromise1(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ Result: num });
        }, 2000);
    });
}

function promise2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ Result: data });
        }, 2000);
    });
}

function promise3(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ Result: data * 2 });
        }, 1000);
    });
}

function promise4(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ Result: data - 3 });
        }, 1000);
    });
}

function promise5(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ Result: data / 2 });
        }, 1000);
    });
}

function promise6(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ Result: data + 10 });
        }, 1000);
    });
}

