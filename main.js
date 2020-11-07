function main() {

    //Resets Variables
    tilesList = null
    positions = null
    totalWoodDots = 0
    totalOreDots = 0
    totalWheatDots = 0
    totalSheepDots = 0
    totalBrickDots = 0

    //Initializes the Tiles and Positions
    declareTiles()
    declareMaterialDotTotals()
    calculateDotRarity()
    declarePositions()

    //Applies the first three strategies
    calculateMaxCard()
    calculateResourcePlenty()
    calculateResourceRarity()

    //Initializes neighbors
    declareNeighbors()

    //Applies the two other strategies
    calculateNeighbors()

}

//Remove Later
submitForms = function () {
    console.log(document.getElementById("t1n").value);
    console.log(document.getElementById("t2n").value);
    console.log(document.getElementById("t3n").value);
    console.log(document.getElementById("t4n").value);
    console.log(document.getElementById("t5n").value);
    console.log(document.getElementById("t6n").value);
    console.log(document.getElementById("t7n").value);
    console.log(document.getElementById("t8n").value);
    console.log(document.getElementById("t9n").value);
    console.log(document.getElementById("t10n").value);
    console.log(document.getElementById("t11n").value);
    console.log(document.getElementById("t12n").value);
    console.log(document.getElementById("t13n").value);
    console.log(document.getElementById("t14n").value);
    console.log(document.getElementById("t15n").value);
    console.log(document.getElementById("t16n").value);
    console.log(document.getElementById("t17n").value);
    console.log(document.getElementById("t18n").value);
    console.log(document.getElementById("t19n").value);
    console.log(document.getElementById("t1m").value);
    console.log(document.getElementById("t2m").value);
    console.log(document.getElementById("t3m").value);
    console.log(document.getElementById("t4m").value);
    console.log(document.getElementById("t5m").value);
    console.log(document.getElementById("t6m").value);
    console.log(document.getElementById("t7m").value);
    console.log(document.getElementById("t8m").value);
    console.log(document.getElementById("t9m").value);
    console.log(document.getElementById("t10m").value);
    console.log(document.getElementById("t11m").value);
    console.log(document.getElementById("t12m").value);
    console.log(document.getElementById("t13m").value);
    console.log(document.getElementById("t14m").value);
    console.log(document.getElementById("t15m").value);
    console.log(document.getElementById("t16m").value);
    console.log(document.getElementById("t17m").value);
    console.log(document.getElementById("t18m").value);
    console.log(document.getElementById("t19m").value);
}

//Displays every position object in its entirety
function displayPositions() {
    for (i = 0; i < positions.length; i++) {
        console.log(positions[i])
    }
}

//Displays the current order of the position names
function displayPositionNames() {
    for (i = 0; i < positions.length; i++) {
        console.log(positions[i].displayName)
    }
}

//Displays the position ordering for each strategy in the console
function displayConsoleResults() {

    main()

    console.log("=== Material Dot Totals ===")
    console.log("Wood Dot Totals: " + totalWoodDots)
    console.log("Ore Dot Totals: " + totalOreDots)
    console.log("Wheat Dot Totals: " + totalWheatDots)
    console.log("Sheep Dot Totals: " + totalSheepDots)
    console.log("Brick Dot Totals: " + totalBrickDots)

    console.log("=== Positions List ===")
    console.log(positions)

    console.log("=== Tiles List ===")
    console.log(tilesList)

    console.log("=== Max Card Strategy ===")
    positions.sort(compareMax)
    displayPositionNames()

    console.log("=== Resource Plenty Strategy ===")
    positions.sort(comparePlenty)
    displayPositionNames()

    console.log("=== Resource Rarity Strategy ===")
    positions.sort(compareRarity)
    displayPositionNames()

    console.log("=== Neighbors Strategy ===")
    positions.sort(compareNeighbor)
    displayPositionNames()

    console.log("=== Best Neighbor Strategy ===")
    positions.sort(compareBestNeighbor)
    displayPositionNames()
}

//Displays the HTML Table for Basic Output
function basicDisplayTableResults() {

    main()

    maxCardsArray = []
    resourcePlentyArray = []
    resourceRarityArray = []
    neighborsArray = []
    bestNeighborsArray = []

    positions.sort(compareMax)
    for (i = 0; i < positions.length; i++) {
        maxCardsArray.push((positions[i].displayName))
    }

    positions.sort(comparePlenty)
    for (i = 0; i < positions.length; i++) {
        resourcePlentyArray.push((positions[i].displayName))
    }

    positions.sort(compareRarity)
    for (i = 0; i < positions.length; i++) {
        resourceRarityArray.push((positions[i].displayName))
    }

    positions.sort(compareNeighbor)
    for (i = 0; i < positions.length; i++) {
        neighborsArray.push((positions[i].displayName))
    }

    positions.sort(compareBestNeighbor)
    for (i = 0; i < positions.length; i++) {
        bestNeighborsArray.push((positions[i].displayName))
    }

    totalArray = [maxCardsArray, resourcePlentyArray, resourceRarityArray, neighborsArray, bestNeighborsArray]

    createBasicTableHTML(totalArray, "resultsTable")
}

//Creates the HTML Table for Basic Output
function createBasicTableHTML(myArray, tableId) {

    document.getElementById(tableId).innerHTML = ""

    var result = "";
    result += "<tr>";
    result += "<td>" + "<b>Max Cards</b>" + "</td>" + "<td>" + "<b>Resource Plenty</b>" + "</td>" +
        "<td>" + "<b>Resource Rarity</b>" + "</td>" + "<td>" + "<b>Neighbors</b>" + "</td>" + "<td>" + "<b>Best Neighbors</b>" + "</td>";
    result += "</tr>";
    for (var i = 0; i < myArray[0].length; i++) {
        result += "<tr>";
        result += "<td><b>" + myArray[0][i] + "</b></td>" + "<td><b>" + myArray[1][i] + "</b></td>" + "<td><b>" + myArray[2][i] + "</b></td>" +
            "<td><b>" + myArray[3][i] + "</b></td>" + "<td><b>" + myArray[4][i] + "</b></td>";
        result += "</tr>";

    }

    document.getElementById(tableId).innerHTML += result

}

//Displays the HTML Table for Advanced Output
function advancedDisplayTableResults() {

    main()

    maxCardsArray = []
    maxCardsScore = []
    resourcePlentyArray = []
    resourcePlentyScore = []
    resourceRarityArray = []
    resourceRarityScore = []
    neighborsArray = []
    neighborsScore = []
    bestNeighborsArray = []
    bestNeighborsScore = []

    positions.sort(compareMax)
    for (i = 0; i < positions.length; i++) {
        maxCardsArray.push((positions[i].displayName))
        maxCardsScore.push((positions[i].maxCardScore.toFixed(3)))
    }

    positions.sort(comparePlenty)
    for (i = 0; i < positions.length; i++) {
        resourcePlentyArray.push((positions[i].displayName))
        resourcePlentyScore.push((positions[i].resourcePlentyScore.toFixed(3)))
    }

    positions.sort(compareRarity)
    for (i = 0; i < positions.length; i++) {
        resourceRarityArray.push((positions[i].displayName))
        resourceRarityScore.push((positions[i].resourceRarityScore.toFixed(3)))
    }

    positions.sort(compareNeighbor)
    for (i = 0; i < positions.length; i++) {
        neighborsArray.push((positions[i].displayName))
        try {
            neighborsScore.push((positions[i].neighborScore.toFixed(3)))
        } catch (error) {
            neighborsScore.push((positions[i].neighborScore))
        }
    }

    positions.sort(compareBestNeighbor)
    for (i = 0; i < positions.length; i++) {
        bestNeighborsArray.push((positions[i].displayName))
        try {
            bestNeighborsScore.push((positions[i].bestNeighborScore.toFixed(3)))
        } catch (error) {
            bestNeighborsScore.push((positions[i].bestNeighborScore))
        }
    }

    totalArray = [maxCardsArray, maxCardsScore, resourcePlentyArray, resourcePlentyScore, resourceRarityArray,
        resourceRarityScore, neighborsArray, neighborsScore, bestNeighborsArray, bestNeighborsScore]

    createAdvancedTableHTML(totalArray, "resultsTable")
}

//Creates the HTML Table for Advanced Output
function createAdvancedTableHTML(myArray, tableId) {

    document.getElementById(tableId).innerHTML = ""

    var result = "";
    result += "<tr>";

    result += "<td>" + "<b>Max Cards</b>" + "</td>" + "<td>" + "<b>Max Cards Scores</b>" + "</td>" + "<td>" + "<b>Resource Plenty</b>" + "</td>" + "<td>" +
        "<b>Resource Plenty Score</b>" + "</td>" + "<td>" + "<b>Resource Rarity</b>" + "</td>" + "<td>" + "<b>Resource Rarity Score</b>" + "<td>" + "<b>Neighbors</b>" +
        "</td>" + "<td>" + "<b>Neighbors Score</b>" + "</td>" + "<td>" + "<b>Best Neighbors</b>" + "</td>" + "<td>" + "<b>Best Neighbors Score</b>" + "</td>";

    result += "</tr>";

    for (var i = 0; i < myArray[0].length; i++) {
        result += "<tr>";

        result += "<td><b>" + myArray[0][i] + "</b></td>" + "<td>" + myArray[1][i] + "</td>" + "<td><b>" + myArray[2][i] + "</b></td>" +
            "<td>" + myArray[3][i] + "</td>" + "<td><b>" + myArray[4][i] + "</b></td>" + "<td>" + myArray[5][i] + "</td>" + "<td><b>" + myArray[6][i] +
            "</b></td>" + "<td>" + myArray[7][i] + "</td>" + "<td><b>" + myArray[8][i] + "</b></td>" + "<td>" + myArray[9][i] + "</td>";

        result += "</tr>";

    }

    document.getElementById(tableId).innerHTML += result

}

//Creates a randomized game board
function randomize() {
    var matArray = [0,0,0,1,1,1,1,2,2,2,3,3,3,3,5,5,5,5,6]
    var numArray = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]

    shuffle(matArray);
    shuffle(numArray);

    for (i = 0; i < 19 ; i++) {
        var mat = matArray.pop()
        console.log("mat: " + mat)
        if (mat == 6) {
            document.getElementById("t"+(i+1)+"m").value = mat
            document.getElementById("t"+(i+1)+"n").value = 0
        }
        else {
            document.getElementById("t"+(i+1)+"m").value = mat
            document.getElementById("t"+(i+1)+"n").value = numArray.pop()
        }
    }

}

//This function returns the number of dots for a number
function getDots(n) {
    if (n == 0) {
        return (0)
    }
    if (n <= 7) {
        return (n - 1)
    }
    else {
        return (Math.abs(n - 13))
    }
}

//Returns the weight using mod 2. 0 result symbolizes 1/3, 1 result symbolizes 1/4
function getWeight(mat) {
    if (mat % 2 == 0) {
        return (1 / 3)
    }
    else {
        return (1 / 4)
    }
}

//This function translates the materials
//From the numbers format to text
//0 = Brick
//1 = Wood
//2 = Ore
//3 = Sheep
//4/5 (Optional) = Wheat
//6 = Desert
function getMaterialName(material) {
    switch (material) {
        case 0:
            return ("Brick")
        case 1:
            return ("Wood")
        case 2:
            return ("Ore")
        case 3:
            return ("Sheep")
        case 4:
            return ("Wheat")
        case 5:
            return ("Wheat")
        case 6:
            return ("Desert")
        default:
        //Error
    }
}

//Returns the total number of dots for a material on the board
function getTotalDots(material) {
    switch (material) {
        case 0:
            return (totalBrickDots)
        case 1:
            return (totalWoodDots)
        case 2:
            return (totalOreDots)
        case 3:
            return (totalSheepDots)
        case 4:
            return (totalWheatDots)
        case 5:
            return (totalWheatDots)
        default:
        //Error
    }
}

class Position {
    constructor(name, displayName, tilesList) {
        this.name = name
        this.displayName = displayName
        this.tiles = tilesList
        this.maxCardScore = null
        this.resourcePlentyScore = null
        this.resourceRarityScore = null
        this.neighborScore = null
        this.bestNeighborScore = null
    }
}

class Tile {
    constructor(value, mat) {
        this.value = value
        this.mat = mat
        this.weight = getWeight(mat)
        this.dot = getDots(value)
        //Change from 36 if 6 player sized map
        this.dotProb = this.dot / 36
        this.dotWeight = this.dotProb * this.weight
    }
}

//Applies the Max Card Strategy
function calculateMaxCard() {
    for (i = 0; i < positions.length; i++) {
        var sum = 0;
        for (x = 0; x < positions[i].tiles.length; x++) {
            sum += positions[i].tiles[x].dotProb
        }
        positions[i].maxCardScore = sum
    }
}

//Applies the Resource Plenty Strategy
function calculateResourcePlenty() {
    for (i = 0; i < positions.length; i++) {
        var sum = 0;
        for (x = 0; x < positions[i].tiles.length; x++) {
            sum += positions[i].tiles[x].dotWeight
        }
        positions[i].resourcePlentyScore = sum
    }
}

//Applies the Resource Rarity Strategy
function calculateResourceRarity() {
    for (i = 0; i < positions.length; i++) {
        var sum = 0;
        for (x = 0; x < positions[i].tiles.length; x++) {
            sum += positions[i].tiles[x].dotRarity
        }
        positions[i].resourceRarityScore = sum
    }
}

//Applies the Neighbors and Best Neighbors Strategies
function calculateNeighbors() {
    for (i = 0; i < positions.length; i++) {
        var sum = 0;
        var max = 0;
        for (x = 0; x < positions[i].neighbors.length; x++) {
            if (positions[i].neighbors[x] > max) {
                max = positions[i].neighbors[x]
            }
            sum += positions[i].neighbors[x]
        }

        //console.log("Sum of " + positions[i].name + " : " + sum)
        //console.log("Max of " + positions[i].name + " : " + max)

        //Calculate Neighbors Score
        positions[i].neighborScore = positions[i].resourceRarityScore + (sum / 2)
        //console.log("Neighbor Score of " + positions[i].name + " : " + positions[i].neighborScore)

        //Calculate Best Neighbor Score
        positions[i].bestNeighborScore = positions[i].resourceRarityScore + (max / 2)
        //console.log("Best Neighbor Score of " + positions[i].name + " : " + positions[i].bestNeighborScore)
    }
}

//Sorts positions according to Max Card Score
function compareMax(a, b) {

    const comp1 = a.maxCardScore;
    const comp2 = b.maxCardScore;

    let comparison = 0;
    if (comp1 < comp2) {
        comparison = 1;
    } else if (comp1 > comp2) {
        comparison = -1;
    }
    return comparison;
}

//Sorts positions according to Resource Plenty Score
function comparePlenty(a, b) {

    const comp1 = a.resourcePlentyScore;
    const comp2 = b.resourcePlentyScore;

    let comparison = 0;
    if (comp1 < comp2) {
        comparison = 1;
    } else if (comp1 > comp2) {
        comparison = -1;
    }
    return comparison;
}

//Sorts positions according to Resource Rarity Score
function compareRarity(a, b) {

    const comp1 = a.resourceRarityScore;
    const comp2 = b.resourceRarityScore;

    let comparison = 0;
    if (comp1 < comp2) {
        comparison = 1;
    } else if (comp1 > comp2) {
        comparison = -1;
    }
    return comparison;
}

//Sorts positions according to Neighbors Score
function compareNeighbor(a, b) {

    const comp1 = a.neighborScore;
    const comp2 = b.neighborScore;

    let comparison = 0;
    if (comp1 < comp2) {
        comparison = 1;
    } else if (comp1 > comp2) {
        comparison = -1;
    }
    return comparison;
}

//Sorts positions according to Best Neighbor Score
function compareBestNeighbor(a, b) {

    const comp1 = a.bestNeighborScore;
    const comp2 = b.bestNeighborScore;

    let comparison = 0;
    if (comp1 < comp2) {
        comparison = 1;
    } else if (comp1 > comp2) {
        comparison = -1;
    }
    return comparison;
}

//Shuffles an array for the randomizer funtion
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//This function calculates the total dots for each material
function declareMaterialDotTotals() {

    totalWoodDots = 0
    totalOreDots = 0
    totalWheatDots = 0
    totalSheepDots = 0
    totalBrickDots = 0

    for (i = 0; i < tilesList.length; i++) {
        var currentDot = getDots(tilesList[i].value)

        if (tilesList[i].mat == 0) {
            totalBrickDots += currentDot
        }
        else if (tilesList[i].mat == 1) {
            totalWoodDots += currentDot
        }
        else if (tilesList[i].mat == 2) {
            totalOreDots += currentDot
        }
        else if (tilesList[i].mat == 3) {
            totalSheepDots += currentDot
        }
        else if (tilesList[i].mat == 4) {
            totalWheatDots += currentDot
        }
        else if (tilesList[i].mat == 5) {
            totalWheatDots += currentDot
        }

    }

}

//Calculates the dot scores using the total material rarity scores
function calculateDotRarity() {
    for (i = 0; i < tilesList.length; i++) {
        if (tilesList[i].mat == 6) {
            tilesList[i].dotRarity = 0
        }
        else {
            tilesList[i].dotRarity = tilesList[i].dot / getTotalDots(tilesList[i].mat)
        }
    }
}

//This function creates all of the possible settlement positions
function declarePositions() {
    positions = [
        new Position("u_a1", "A1", [t1]),
        new Position("u_a2", "A2", [t1]),
        new Position("u_b", "B", [t2]),
        new Position("u_c", "C", [t1, t2]),
        new Position("u_d", "D", [t1, t4]),
        new Position("u_e", "E", [t4]),
        new Position("u_f1", "F1", [t5]),
        new Position("u_f2", "F2", [t5]),
        new Position("u_g", "G", [t2, t5]),
        new Position("u_h", "H", [t1, t2, t3]),
        new Position("u_i", "I", [t1, t3, t4]),
        new Position("u_j", "J", [t4, t9]),
        new Position("u_k1", "K1", [t9]),
        new Position("u_k2", "K2", [t9]),
        new Position("u_l", "L", [t2, t5, t6]),
        new Position("u_m", "M", [t2, t3, t6]),
        new Position("u_n", "N", [t3, t4, t8]),
        new Position("u_o", "O", [t4, t8, t9]),
        new Position("u_p", "P", [t5, t10]),
        new Position("u_q", "Q", [t5, t6, t10]),
        new Position("u_r", "R", [t3, t6, t7]),
        new Position("u_s", "S", [t3, t7, t8]),
        new Position("u_t", "T", [t8, t9, t14]),
        new Position("u_u", "U", [t9, t14]),
        new Position("u_v", "V", [t10]),
        new Position("u_w", "W", [t6, t10, t11]),
        new Position("u_x", "X", [t6, t7, t11]),
        new Position("u_y", "Y", [t7, t8, t13]),
        new Position("u_z", "Z", [t8, t13, t14]),
        new Position("l_a", "a", [t14]),
        new Position("l_b", "b", [t10, t15]),
        new Position("l_c", "c", [t10, t11, t15]),
        new Position("l_d", "d", [t7, t11, t12]),
        new Position("l_e", "e", [t7, t12, t13]),
        new Position("l_f", "f", [t13, t14, t19]),
        new Position("l_g", "g", [t14, t19]),
        new Position("l_h1", "h1", [t15]),
        new Position("l_h2", "h2", [t15]),
        new Position("l_i", "i", [t11, t15, t16]),
        new Position("l_j", "j", [t11, t12, t16]),
        new Position("l_k", "k", [t12, t13, t18]),
        new Position("l_l", "l", [t13, t18, t19]),
        new Position("l_m1", "m1", [t19]),
        new Position("l_m2", "m2", [t19]),
        new Position("l_n", "n", [t15, t16]),
        new Position("l_o", "o", [t12, t16, t17]),
        new Position("l_p", "p", [t12, t17, t18]),
        new Position("l_q", "q", [t18, t19]),
        new Position("l_r", "r", [t16]),
        new Position("l_s", "s", [t16, t17]),
        new Position("l_t", "t", [t17, t18]),
        new Position("l_u", "u", [t18]),
        new Position("l_v1", "v1", [t17]),
        new Position("l_v2", "v2", [t17])]
}

//0 = Brick
//1 = Wood
//2 = Ore
//3 = Sheep
//4/5 (Optional) = Wheat
//6 = Desert
function declareTiles() {

    t1 = new Tile(parseInt(document.getElementById("t1n").value), parseInt(document.getElementById("t1m").value))
    t2 = new Tile(parseInt(document.getElementById("t2n").value), parseInt(document.getElementById("t2m").value))
    t3 = new Tile(parseInt(document.getElementById("t3n").value), parseInt(document.getElementById("t3m").value))
    t4 = new Tile(parseInt(document.getElementById("t4n").value), parseInt(document.getElementById("t4m").value))
    t5 = new Tile(parseInt(document.getElementById("t5n").value), parseInt(document.getElementById("t5m").value))
    t6 = new Tile(parseInt(document.getElementById("t6n").value), parseInt(document.getElementById("t6m").value))
    t7 = new Tile(parseInt(document.getElementById("t7n").value), parseInt(document.getElementById("t7m").value))
    t8 = new Tile(parseInt(document.getElementById("t8n").value), parseInt(document.getElementById("t8m").value))
    t9 = new Tile(parseInt(document.getElementById("t9n").value), parseInt(document.getElementById("t9m").value))
    t10 = new Tile(parseInt(document.getElementById("t10n").value), parseInt(document.getElementById("t10m").value))
    t11 = new Tile(parseInt(document.getElementById("t11n").value), parseInt(document.getElementById("t11m").value))
    t12 = new Tile(parseInt(document.getElementById("t12n").value), parseInt(document.getElementById("t12m").value))
    t13 = new Tile(parseInt(document.getElementById("t13n").value), parseInt(document.getElementById("t13m").value))
    t14 = new Tile(parseInt(document.getElementById("t14n").value), parseInt(document.getElementById("t14m").value))
    t15 = new Tile(parseInt(document.getElementById("t15n").value), parseInt(document.getElementById("t15m").value))
    t16 = new Tile(parseInt(document.getElementById("t16n").value), parseInt(document.getElementById("t16m").value))
    t17 = new Tile(parseInt(document.getElementById("t17n").value), parseInt(document.getElementById("t17m").value))
    t18 = new Tile(parseInt(document.getElementById("t18n").value), parseInt(document.getElementById("t18m").value))
    t19 = new Tile(parseInt(document.getElementById("t19n").value), parseInt(document.getElementById("t19m").value))

    tilesList = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19]
}

//This function adds settlement neighbors' scores to each position
function declareNeighbors() {
    positions[0].neighbors = [positions[2].resourceRarityScore, positions[9].resourceRarityScore, positions[4].resourceRarityScore]
    positions[1].neighbors = [positions[3].resourceRarityScore, positions[10].resourceRarityScore, positions[5].resourceRarityScore]
    positions[2].neighbors = [positions[0].resourceRarityScore, positions[7].resourceRarityScore, positions[9].resourceRarityScore, positions[14].resourceRarityScore]
    positions[3].neighbors = [positions[1].resourceRarityScore, positions[8].resourceRarityScore, positions[10].resourceRarityScore, positions[15].resourceRarityScore]
    positions[4].neighbors = [positions[0].resourceRarityScore, positions[9].resourceRarityScore, positions[16].resourceRarityScore, positions[11].resourceRarityScore]
    positions[5].neighbors = [positions[1].resourceRarityScore, positions[10].resourceRarityScore, positions[12].resourceRarityScore, positions[17].resourceRarityScore]
    positions[6].neighbors = [positions[8].resourceRarityScore, positions[19].resourceRarityScore, positions[24].resourceRarityScore]
    positions[7].neighbors = [positions[2].resourceRarityScore, positions[14].resourceRarityScore, positions[18].resourceRarityScore]
    positions[8].neighbors = [positions[3].resourceRarityScore, positions[6].resourceRarityScore, positions[15].resourceRarityScore, positions[19].resourceRarityScore]
    positions[9].neighbors = [positions[0].resourceRarityScore, positions[2].resourceRarityScore, positions[4].resourceRarityScore, positions[14].resourceRarityScore, positions[16].resourceRarityScore, positions[20].resourceRarityScore]
    positions[10].neighbors = [positions[1].resourceRarityScore, positions[3].resourceRarityScore, positions[5].resourceRarityScore, positions[15].resourceRarityScore, positions[17].resourceRarityScore, positions[21].resourceRarityScore]
    positions[11].neighbors = [positions[4].resourceRarityScore, positions[13].resourceRarityScore, positions[16].resourceRarityScore, positions[22].resourceRarityScore]
    positions[12].neighbors = [positions[5].resourceRarityScore, positions[17].resourceRarityScore, positions[23].resourceRarityScore]
    positions[13].neighbors = [positions[11].resourceRarityScore, positions[22].resourceRarityScore, positions[29].resourceRarityScore]
    positions[14].neighbors = [positions[2].resourceRarityScore, positions[7].resourceRarityScore, positions[9].resourceRarityScore, positions[18].resourceRarityScore, positions[20].resourceRarityScore, positions[25].resourceRarityScore]
    positions[15].neighbors = [positions[3].resourceRarityScore, positions[8].resourceRarityScore, positions[10].resourceRarityScore, positions[19].resourceRarityScore, positions[21].resourceRarityScore, positions[26].resourceRarityScore]
    positions[16].neighbors = [positions[4].resourceRarityScore, positions[9].resourceRarityScore, positions[11].resourceRarityScore, positions[20].resourceRarityScore, positions[22].resourceRarityScore, positions[27].resourceRarityScore]
    positions[17].neighbors = [positions[5].resourceRarityScore, positions[10].resourceRarityScore, positions[12].resourceRarityScore, positions[21].resourceRarityScore, positions[23].resourceRarityScore, positions[28].resourceRarityScore]
    positions[18].neighbors = [positions[7].resourceRarityScore, positions[14].resourceRarityScore, positions[25].resourceRarityScore, positions[30].resourceRarityScore]
    positions[19].neighbors = [positions[6].resourceRarityScore, positions[8].resourceRarityScore, positions[15].resourceRarityScore, positions[24].resourceRarityScore, positions[26].resourceRarityScore, positions[31].resourceRarityScore]
    positions[20].neighbors = [positions[9].resourceRarityScore, positions[14].resourceRarityScore, positions[16].resourceRarityScore, positions[25].resourceRarityScore, positions[27].resourceRarityScore, positions[32].resourceRarityScore]
    positions[21].neighbors = [positions[10].resourceRarityScore, positions[15].resourceRarityScore, positions[17].resourceRarityScore, positions[26].resourceRarityScore, positions[28].resourceRarityScore, positions[33].resourceRarityScore]
    positions[22].neighbors = [positions[11].resourceRarityScore, positions[13].resourceRarityScore, positions[16].resourceRarityScore, positions[22].resourceRarityScore, positions[29].resourceRarityScore, positions[34].resourceRarityScore]
    positions[23].neighbors = [positions[12].resourceRarityScore, positions[17].resourceRarityScore, positions[28].resourceRarityScore, positions[35].resourceRarityScore]
    positions[24].neighbors = [positions[6].resourceRarityScore, positions[19].resourceRarityScore, positions[31].resourceRarityScore, positions[37].resourceRarityScore]
    positions[25].neighbors = [positions[14].resourceRarityScore, positions[18].resourceRarityScore, positions[20].resourceRarityScore, positions[30].resourceRarityScore, positions[32].resourceRarityScore, positions[38].resourceRarityScore]
    positions[26].neighbors = [positions[15].resourceRarityScore, positions[19].resourceRarityScore, positions[21].resourceRarityScore, positions[31].resourceRarityScore, positions[33].resourceRarityScore, positions[39].resourceRarityScore]
    positions[27].neighbors = [positions[16].resourceRarityScore, positions[20].resourceRarityScore, positions[22].resourceRarityScore, positions[32].resourceRarityScore, positions[34].resourceRarityScore, positions[40].resourceRarityScore]
    positions[28].neighbors = [positions[17].resourceRarityScore, positions[21].resourceRarityScore, positions[23].resourceRarityScore, positions[33].resourceRarityScore, positions[35].resourceRarityScore, positions[41].resourceRarityScore]
    positions[29].neighbors = [positions[13].resourceRarityScore, positions[22].resourceRarityScore, positions[34].resourceRarityScore, positions[42].resourceRarityScore]
    positions[30].neighbors = [positions[18].resourceRarityScore, positions[25].resourceRarityScore, positions[38].resourceRarityScore, positions[36].resourceRarityScore]
    positions[31].neighbors = [positions[19].resourceRarityScore, positions[24].resourceRarityScore, positions[26].resourceRarityScore, positions[37].resourceRarityScore, positions[39].resourceRarityScore, positions[44].resourceRarityScore]
    positions[32].neighbors = [positions[20].resourceRarityScore, positions[25].resourceRarityScore, positions[27].resourceRarityScore, positions[38].resourceRarityScore, positions[40].resourceRarityScore, positions[45].resourceRarityScore]
    positions[33].neighbors = [positions[21].resourceRarityScore, positions[26].resourceRarityScore, positions[28].resourceRarityScore, positions[39].resourceRarityScore, positions[41].resourceRarityScore, positions[46].resourceRarityScore]
    positions[34].neighbors = [positions[22].resourceRarityScore, positions[27].resourceRarityScore, positions[29].resourceRarityScore, positions[40].resourceRarityScore, positions[42].resourceRarityScore, positions[47].resourceRarityScore]
    positions[35].neighbors = [positions[23].resourceRarityScore, positions[28].resourceRarityScore, positions[41].resourceRarityScore, positions[43].resourceRarityScore]
    positions[36].neighbors = [positions[30].resourceRarityScore, positions[38].resourceRarityScore, positions[48].resourceRarityScore]
    positions[37].neighbors = [positions[24].resourceRarityScore, positions[31].resourceRarityScore, positions[44].resourceRarityScore]
    positions[38].neighbors = [positions[25].resourceRarityScore, positions[30].resourceRarityScore, positions[32].resourceRarityScore, positions[36].resourceRarityScore, positions[45].resourceRarityScore, positions[48].resourceRarityScore]
    positions[39].neighbors = [positions[26].resourceRarityScore, positions[31].resourceRarityScore, positions[33].resourceRarityScore, positions[44].resourceRarityScore, positions[46].resourceRarityScore, positions[49].resourceRarityScore]
    positions[40].neighbors = [positions[27].resourceRarityScore, positions[32].resourceRarityScore, positions[34].resourceRarityScore, positions[45].resourceRarityScore, positions[47].resourceRarityScore, positions[50].resourceRarityScore]
    positions[41].neighbors = [positions[28].resourceRarityScore, positions[33].resourceRarityScore, positions[35].resourceRarityScore, positions[43].resourceRarityScore, positions[46].resourceRarityScore, positions[51].resourceRarityScore]
    positions[42].neighbors = [positions[29].resourceRarityScore, positions[34].resourceRarityScore, positions[47].resourceRarityScore]
    positions[43].neighbors = [positions[35].resourceRarityScore, positions[41].resourceRarityScore, positions[51].resourceRarityScore]
    positions[44].neighbors = [positions[31].resourceRarityScore, positions[37].resourceRarityScore, positions[39].resourceRarityScore]
    positions[45].neighbors = [positions[32].resourceRarityScore, positions[38].resourceRarityScore, positions[40].resourceRarityScore, positions[48].resourceRarityScore, positions[50].resourceRarityScore, positions[53].resourceRarityScore]
    positions[46].neighbors = [positions[33].resourceRarityScore, positions[39].resourceRarityScore, positions[41].resourceRarityScore, positions[49].resourceRarityScore, positions[51].resourceRarityScore, positions[52].resourceRarityScore]
    positions[47].neighbors = [positions[34].resourceRarityScore, positions[40].resourceRarityScore, positions[42].resourceRarityScore, positions[50].resourceRarityScore]
    positions[48].neighbors = [positions[38].resourceRarityScore, positions[36].resourceRarityScore, positions[45].resourceRarityScore, positions[53].resourceRarityScore]
    positions[49].neighbors = [positions[39].resourceRarityScore, positions[44].resourceRarityScore, positions[46].resourceRarityScore, positions[52].resourceRarityScore]
    positions[50].neighbors = [positions[40].resourceRarityScore, positions[45].resourceRarityScore, positions[47].resourceRarityScore, positions[53].resourceRarityScore]
    positions[51].neighbors = [positions[41].resourceRarityScore, positions[43].resourceRarityScore, positions[46].resourceRarityScore, positions[52].resourceRarityScore]
    positions[52].neighbors = [positions[46].resourceRarityScore, positions[49].resourceRarityScore, positions[51].resourceRarityScore]
    positions[53].neighbors = [positions[45].resourceRarityScore, positions[48].resourceRarityScore, positions[50].resourceRarityScore]
}