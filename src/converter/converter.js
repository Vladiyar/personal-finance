
let food = ['MAGAZIN','SHOP TURKISH BAZAAR', 'magazinPivarium', 'Петриківка', 'SHOP GLAVRYBA', 'АТБ', 'Сільпо', 'Produkti', 'VARUS', 'MagazinZirochka', 'Апельмон', 'Градус', 'Ашан', 'BRYDZH', 'Natali', 'Marija', 'Centralyniy gatsronom', 'Centralyniy gatsronom', 'food'],
fast_food = ['Добра Кава', 'Mangal Food', 'Булочка', 'PHiniki', 'Bulonka', 'MANGAL', 'IQ Pizza', 'IQPIZZA', 'Bulon11', 'McDonald’s', 'ExpressMarket', 'MAVRA PIZZA', 'fast_food'],
clothes = ['STAFF1', 'Colins', 'PROSTOR 229', 'S.UA.03.57', 'clothes'],
cosmetics = ['EVA', 'cosmetics'],
mobile = ['Vodafone\n+380999554887', 'Киевстар\n+380673979387', 'Lifecell\n+380634628798', 'Киевстар\n+380984819670', 'Киевстар\n+380985199680', 'mobile'],
online_shopping = ['Нова пошта', 'AliExpress', 'prom.ua', 'ALIEXPRESS.COM', 'Rozetka', 'online_shopping'],
drugs = ['Аптека Доброго Дня', 'Аптека Копейка', 'Аптека АНЦ', 'APTEKA N70', 'Persha Sotsialna Apteka', 'Аспирин', 'APTEKAOPTOVIHCN', 'VeterenarnajaAptekaLim', 'drugs'],
top_up = ['Виведення кешбеку 105.31₴', 'Відсотки за листопад', 'Від: Зарплатная приват', 'Термінал IBOX', 'Відсотки за червень', 'Виведення кешбеку 101.49₴', 'Відсотки за липень', 'Відсотки за серпень', 'Скасування. Google', 'top_up'],
transfer = ['Кучер', 'PINImpyrial', 'FOP TARAN NATALIYA MYKHAY', '537523****6213', 'Пусичка', 'Маргарита Г.', 'Kolesnichenko Oleksandr', 'Yudovych Dmytro', 'Від: Маргарита Г.', 'Димон', 'Alexey Markov', 'NADOZHA VLADIIAR', '431414****7721', 'Списання Skrill4659', 'Nadozha Vladiiar', '516874****0525', 'transfer'], 
entertainment = ['PLAYKEY.NET', 'Blizzard', 'MEGOGO', 'Google', 'Операція квазі-готівка PINImpyrial', 'entertainment'],
payments = ['iPay.ua', 'UAPAY', 'payments'],
other = ['Zaporozie 16','Magijaprjazhi','ZAP021', 'Predostavlenijauslug', 'Фора', 'Нефтек АЗС 15', 'Zaporozie 13', 'A974', 'other'];

let categories = [food, fast_food, clothes, cosmetics, mobile, online_shopping, drugs, top_up, transfer, entertainment, payments, other];
      


let newData = []
let result = []


const addCat = (cats, item) =>{
	for(let cat of cats) {
		for(let j in cat) {
			if(item === cat[j] ) {
				return cat[cat.length - 1];
			}
		}
	}
}




//making new cats for more accurate labeling
// const categoriesMaker = () => {
//   labelStop: for (let i in t2){
      
//     if (t2[i].cat === "food"){
//       if(food.length === 0){
//           food.push(t2[i].title);
//       } else {
//       for(let j of food) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       food.push(t2[i].title)
//       }
      
//     } else if (t2[i].cat === "fast_food") {
//       if(fast_food.length === 0){
//           fast_food.push(t2[i].title);
//       } else {
//       for(let j of fast_food) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       fast_food.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "clothes") {
//       if(clothes.length === 0){
//           clothes.push(t2[i].title);
//       } else {
//       for(let j of clothes) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       clothes.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "cosmetics") {
//       if(cosmetics.length === 0){
//           cosmetics.push(t2[i].title);
//       } else {
//       for(let j of cosmetics) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       cosmetics.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "mobile") {
//       if(mobile.length === 0){
//           mobile.push(t2[i].title);
//       } else {
//       for(let j of mobile) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       mobile.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "online_shopping") {
//       if(online_shopping.length === 0){
//           online_shopping.push(t2[i].title);
//       } else {
//       for(let j of online_shopping) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       online_shopping.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "drugs") {
//       if(drugs.length === 0){
//           drugs.push(t2[i].title);
//       } else {
//       for(let j of drugs) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       drugs.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "top_up") {
//       if(top_up.length === 0){
//           top_up.push(t2[i].title);
//       } else {
//       for(let j of top_up) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       top_up.push(t2[i].title)
//       }        
//     } else if (t2[i].cat === "transfer") {
//       if(transfer.length === 0){
//           transfer.push(t2[i].title);
//       } else {
//       for(let j of transfer) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       transfer.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "entertainment") {
//       if(entertainment.length === 0){
//           entertainment.push(t2[i].title);
//       } else {
//       for(let j of entertainment) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       entertainment.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "payments") {
//       if(payments.length === 0){
//           payments.push(t2[i].title);
//       } else {
//       for(let j of payments) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       payments.push(t2[i].title)
//       }
//     } else if (t2[i].cat === "other") {
//       if(other.length === 0){
//           other.push(t2[i].title);
//       } else {
//       for(let j of other) {
//         if(j === t2[i].title) {
//             continue labelStop;
//           }
//         }
//       other.push(t2[i].title)
//       }
//     }
//   }

// }



const converter = (data) => {  
  for(let i of data) {
    let titleName = i[2];
    let catName = " ";
   
    let obj = {
        id: i[0],
        date: i[1],
        title: titleName,
        amount: i[3],
        cat: addCat(categories ,titleName),
      }
    newData.push(obj)
  }
  
  // checking if there is no unlebeling data
  let undefData = []
  for(let i of newData){
    if(i['cat'] === undefined) {
      undefData.push(i['title']);
    }
  }

  //console.dir(newData, {'maxArrayLength': null});
  result.push(newData);
  result.push(undefData);
  return result;
}

export default converter;
