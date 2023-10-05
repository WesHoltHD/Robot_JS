
function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
    
    console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk")
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange (money,1.5);
}

function calcBottles(startMoney, costPerBottle) {

    var numberOfbottles = Math.floor(startMoney / costPerBottle);
    return numberOfbottles;
}

function calcChange(startMoney, costPerBottle) {
    var change = startMoney % costPerBottle;
    return change;
}

getMilk(5);