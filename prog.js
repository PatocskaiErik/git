7. const szamol = require('./modul');
szamol.szorz(3, 5);
szamol.osszead(3, 5);
szamol.hatv(3, 5);


1;
//Egyszerű adattípusok:
//string
a = 'szöveg';

//number
b = 10;

//boolean(eldöntendő) vagy logikai
c = true;


//Összetett adattípusok:
//Tömb
array = [1, 2, 3];

//object
e = {
    name: 'Erik';
    age: 27;
    isMale: true;
}

2;
A const értéke nem változtatható. A let értéke változtatható később is.

const a = 10;
// a = 11 már nem lehet. Az érték így nem fog módosulni.
let b = 10;
b = 11;
// A b értéke módosul 11-re.

3. 
Érték szerinti paraméterátadás esetén a függvény az adat értékének másolatával dolgozik. 

Referencia típusú átadásnál, a paraméter változása megváltoztatja az adatot, amelyre a referencia mutat.
Így módosulni fog az eredeti érték is.

4.
const containsElement = (arr,num) => {
    for (i=0; i<arr.length; i++) {
        if (num===arr[i]){
            return true;
        }
        return false;
    };
}

5.
const obj = [{
    name: 'Feri',
    age: 25,
}];
const oldest = (arr) => {
    let max =0;
    let oldestPeople='';
    for (i=0; i<arr.length; i++) {
        if (arr[i].age>max) {
            max=arr[i].age;
            oldestPeople=arr[i].name;
        }
    }
    return oldestPeople;
};
6. 
const metszet = (array1, array2) => {
  const common = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        common.push(array1[i]);
      }
    }
  }
  return common
};

8.
const array = (n, m) => {
  const tomb = [];
  for (let i = 0; i < n; i++) {
    tomb.push();
    for (let j = 0; j < m; j++) {
      tomb[i].push(i * j);
    }
  }
  return tomb;
};