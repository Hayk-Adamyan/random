//----1.1-------------
//let sum = 0
//for (let x = 10; x <= 99; x++) {
//		sum += x
//		
//	}
//	console.log(sum)
//------1.2--------------------		
//for(let i = 1; i < 20; i++){
//	if(i % 3 == 0 && i % 5 == 0){
//			console.log(i)
//	}
//}
//-------2.1--------------------

//let arr = [1, 5, 40, 70, 2, 3]
//let sum = 0
//for (let i = 0; i < arr.length; i++) {
//	if (arr[i] % 2 == 0) {
//			sum += arr[i]
//	}	
//}
//	console.log(sum)
//------------2.2------------------
//let arr = [1, 5, 40, 70, 2, 3]
//let qanak = 0
//for(let i = 0; i < arr.length; i++){
//	if(arr[i] % 2 !== 0){
//		qanak++
//	}
//}
//	console.log(qanak)
//-------2.3----------------------------
//let arr = [1, 6, 40, 70, 9, 3]
//let arr1 = []
//for(let i = 0; i < arr.length; i++){
//	if(arr[i] % 3 == 0){
//		arr1.push(arr[i])
//	}
//}
//console.log(arr1)
//----3.1------------------------
//let arr = [1, 6, 40, 70, 9, 3]
//let k
//for(let i = 0; i < arr.length; i++){
//	 k = arr[i] * arr[i]
//		console.log(k)
//	if(k > 100){
//		 console.log(true)
//	}
//	else{console.log(false)}
//	
//	}
//-------3.2----------------------------------
//function f(){	
//let x = 8	
//		let sum = 0
//for (let i = 1; i < x; i++) {
//	if (i % 2 == 0) {
//			sum += i
//	
//	}	
//
//}
//		console.log(sum)
//}
//
//f()
//------------3.3------------------------
//function f(n) {
//if(n == 0){return 0}
//	var sum = f(n - 1)
//	if (n % 2 == 0){sum += n}
//	return sum
//}
//
//console.log(f(10))





//function f(a){
//	if (a == 1){
//		return 1
//	}
//	return a * f(a - 1)
//}
//console.log(f(7))
//
//



//-------3.5---------------
//let t = 'aa bba bbaanb aab'
//		t = t.split('')
//for(let i = 0; i < t.length; i++){
//	if(t[i] == 'a'){
//
//	t[i] = ''
//	}
//}
//t = t.join('')
//console.log(t)
//------4.1------------------------------
//let arr = [4,8,3,6]
//let k =arr.filter(a => a % 2 == 0)
//console.log(k)
//------4.2----------------------------
//let a = [5, 8, 4, 6, 10, 1]
//a = a.sort((a, b) => a < b ? 1:-1)
//					 console.log(a)
//-------------4.3--------------------
//let arr = [4,8,3,6]
//arr = arr.map((a) => a + 1)
//console.log(arr)
//---------buttoni sexman jamanak poxel guyn@ ev dirq@---

		function rand(){
	let r = Math.round(Math.random() * 255)
	let g = Math.round(Math.random() * 255)
	let b = Math.round(Math.random() * 255)
	let color = `rgb(${r},${g},${b})`
	div1.style.background = color
	div1.style.position = 'absolute'
	div1.style.left = `${r}px`
	div1.style.top = `${g}px`
	
}
btn.addEventListener('click',rand)