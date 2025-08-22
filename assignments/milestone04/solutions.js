function totalFine(fare){
    if(fare > 0){
        return fare + (fare*0.2) + 30
    }
    return "Invalid"
}

function onlyCharacter(str){
    let tmp =  []
    if(typeof(str) === 'string'){
        for(i of str){
            if(i != ' '){
                tmp.push(i)
            }
        }
        return tmp.join('').toUpperCase()
    }
    return 'Invalid'
}

function bestTeam(player1, player2){
    if(typeof(player1) === 'object' && typeof(player2) === 'object' 
    && player1 !== null && player2 !== null && !Array.isArray(player1) && !Array.isArray(player2) ){
        const score1 = player1.foul + player1.cardY + player1.cardR
        const score2 = player2.foul + player2.cardY + player2.cardR

        return (score1 === score2) ? 'Tie' : (score1 < score2) ? player1.name : player2.name
        
    }
    return 'Invalid'
}

function isSame(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}

function resultReport(marks){
    if(!Array.isArray(marks)){
        return 'Invalid'
    }
    let sum = 0
    let pass = 0
    let fail = 0
    for(i of marks){
        if(typeof(i) !== 'number'){
            return 'Invalid'
        }
        (i<40) ? fail++ : pass++
        sum += i
    }
    const avg = (marks.length === 0) ? 0 : Math.round((sum/marks.length))
    return {finalScore: avg, pass: pass, fail: fail}
}