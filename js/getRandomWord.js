function getRandomWord(arr, min=0,max=0) {
    if(max === 0) { return arr[(Math.floor(Math.random() * arr.length))]}
    else {
        //получить случайное число от мин до макс
        let rand = Math.floor(min + Math.random() * (max + 1 - min));
        return arr[rand];
    }
}

export default getRandomWord;