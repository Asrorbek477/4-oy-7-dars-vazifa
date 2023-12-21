// !!! 1. Sonlardan tashkil topgan massiv elementlari orasidan toqlarining sonini topuvchi funksiya yozing.
// let arr = [1, 2, 3, 4, 5];

// function oddnumbersArr(arg) {
//     let counter = 0;
    
//     for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//     counter++;
//     }
//     }
    
//     return counter ;
//    }
   
//    console.log(oddnumbersArr(arr)); 

// !!! 2. Sonlardan tashkil topgan massiv elementlari orasidan 3 ga hamda 7 ga karralilarining kopaytmasini topuvchi funksiya yozing.
//    let arr = [21, 35, 42, 57, 64, 84];

//    function  multipleArr(arg) {
//     let sum = 1;
//     for (i = 0; i < arg.length; i++) {
//         if (arg[i] % 3 == 0 && arg[i] % 7 == 0) {
//             sum *= arg[i];
//         }
//     }
//     return sum;
//    }

//    console.log(multipleArr(arr));

// !!! 3. Sonlardan tashkil topgan massiv berilganda uning toq elementlaridan iborat yangi massiv hosil qiladigan funksiya yozing.
// let arr = [1, 2, 3, 4, 5];

// function oddelements(arg) {

//     let oddmassive = [];
    
//     for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//     oddmassive.push(arg[i]);
//     }
//     }
    
//     return oddmassive;
//    }
   
//    console.log(oddelements(arr)); 

// !!! 4. Sonlardan tashkil topgan massiv berilganda uning juft indeksdagi elementlaridan iborat yangi massiv hosil qiladigan funksiya yozing.
// let arr = [1, 2, 3, 4, 5];

// function coupleelements(arg) {

//     let couplemassive = [];
    
//     for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//         couplemassive.push(arg[i]);
//     }
//     }
    
//     return couplemassive;
//    }
   
//    console.log(coupleelements(arr)); 

// !!! 5. Sozlardan tashkil topgan massiv berilganda ushbu sozlarning bosh harflaridan iborat yangi massiv hosil qiladigan funksiya yozing.
// function capitallettermassive(arg) {
//     let resault = [];
   
//     for (let i = 0; i < arg.length; i++) {
//     let word = arg[i];
//     let capitalletter = word.charAt(0);
   
//     resault.push(capitalletter);
//     }
   
//     return resault;
//    }
   
//    let words = ["Salom", "Hayr", "Ob-havo", "Kitob"];
   
//    console.log(capitallettermassive(words));
   