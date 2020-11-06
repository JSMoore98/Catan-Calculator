function main() {

    //Function to read in data + create tiles + track total material dots?

    totalWoodDots = 14
    totalOreDots = 10
    totalWheatDots = 12
    totalSheepDots = 10
    totalBrickDots = 11

    //Initializes the Tiles and Positions
    declareTiles()
    declarePositions()

    //Applies the first three strategies
    calculateMaxCard()
    calculateResourcePlenty()
    calculateResourceRarity()

    //Initializes neighbors
    declareNeighbors()

    //Applies the two other strategies
    calculateNeighbors()

    //Outputs results
    displayConsoleResults()
}

//Displays every position object in its entirety
function displayPositions() {
    for (i=0; i < positions.length; i++) {
        console.log(positions[i])
    }
}

//Displays the current order of the position names
function displayPositionNames() {
    for (i=0; i < positions.length; i++) {
        console.log(positions[i].displayName)
    }
}

//Displays the position ordering for each strategy in the console
function displayConsoleResults() {
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

//This function returns the number of dots for a number
function getDots(n) {
    if(n == 0) {
        return(0)
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
        return(1/3)
    }
    else {
        return(1/4)
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
            return("Desert")
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
    constructor(name,displayName,tilesList) {
        this.name = name
        this.displayName = displayName
        this.tiles = tilesList
        this.maxCardScore =  null
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
        this.dotProb = this.dot/36
        this.dotWeight = this.dotProb * this.weight
        this.dotRarity = this.dot / getTotalDots(this.mat) 
    }
}

//Applies the Max Card Strategy
function calculateMaxCard() {
    for (i=0; i < positions.length; i++) {
        var sum = 0;
        for (x=0; x < positions[i].tiles.length; x++) {
            sum += positions[i].tiles[x].dotProb
        }
        positions[i].maxCardScore = sum
        //console.log(positions[i].name + " = " + sum)
    }
}

//Applies the Resource Plenty Strategy
function calculateResourcePlenty(){
    for (i=0; i < positions.length; i++) {
        var sum = 0;
        for (x=0; x < positions[i].tiles.length; x++) {
            sum += positions[i].tiles[x].dotWeight
        }
        positions[i].resourcePlentyScore = sum
        //console.log(positions[i].name + " = " + sum)
    }
}

//Applies the Resource Rarity Strategy
function calculateResourceRarity(){
    for (i=0; i < positions.length; i++) {
        var sum = 0;
        for (x=0; x < positions[i].tiles.length; x++) {
            sum += positions[i].tiles[x].dotRarity
        }
        positions[i].resourceRarityScore = sum
        //console.log(positions[i].name + " = " + sum)
    }
}

//Applies the Neighbors and Best Neighbors Strategies
function calculateNeighbors(){
    for (i=0; i < positions.length; i++) {
        var sum = 0;
        var max = 0;
        for (x=0; x < positions[i].neighbors.length; x++) {
            if (positions[i].neighbors[x] > max) {
                max = positions[i].neighbors[x]
            }
            sum += positions[i].neighbors[x]
        }

        //console.log("Sum of " + positions[i].name + " : " + sum)
        //console.log("Max of " + positions[i].name + " : " + max)

        //Calculate Neighbors Score
        positions[i].neighborScore = positions[i].resourceRarityScore + (sum/2)
        //console.log("Neighbor Score of " + positions[i].name + " : " + positions[i].neighborScore)

        //Calculate Best Neighbor Score
        positions[i].bestNeighborScore = positions[i].resourceRarityScore + (max/2)
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

//This function creates all of the possible settlement positions
function declarePositions() {
    positions = [
    new Position("u_a1","A1",[t1]),
    new Position("u_a2","A2",[t1]),
    new Position("u_b","B",[t2]),
    new Position("u_c","C",[t1,t2]),
    new Position("u_d","D",[t1,t4]),
    new Position("u_e","E",[t4]),
    new Position("u_f1","F1",[t5]),
    new Position("u_f2","F2",[t5]),
    new Position("u_g","G",[t2,t5]),
    new Position("u_h","H",[t1,t2,t3]),
    new Position("u_i","I",[t1,t3,t4]),
    new Position("u_j","J",[t4,t9]),
    new Position("u_k1","K1",[t9]),
    new Position("u_k2","K2",[t9]),
    new Position("u_l","L",[t2,t5,t6]),
    new Position("u_m","M",[t2,t3,t6]),
    new Position("u_n","N",[t3,t4,t8]),
    new Position("u_o","O",[t4,t8,t9]),
    new Position("u_p","P",[t5,t10]),
    new Position("u_q","Q",[t5,t6,t10]),
    new Position("u_r","R",[t3,t6,t7]),
    new Position("u_s","S",[t3,t7,t8]),
    new Position("u_t","T",[t8,t9,t14]),
    new Position("u_u","U",[t9,t14]),
    new Position("u_v","V",[t10]),
    new Position("u_w","W",[t6,t10,t11]),
    new Position("u_x","X",[t6,t7,t11]),
    new Position("u_y","Y",[t7,t8,t13]),
    new Position("u_z","Z",[t8,t13,t14]),
    new Position("l_a","a",[t14]),
    new Position("l_b","b",[t10,t15]),
    new Position("l_c","c",[t10,t11,t15]),
    new Position("l_d","d",[t7,t11,t12]),
    new Position("l_e","e",[t7,t12,t13]),
    new Position("l_f","f",[t13,t14,t19]),
    new Position("l_g","g",[t14,t19]),
    new Position("l_h1","h1",[t15]),
    new Position("l_h2","h2",[t15]),
    new Position("l_i","i",[t11,t15,t16]),
    new Position("l_j","j",[t11,t12,t16]),
    new Position("l_k","k",[t12,t13,t18]),
    new Position("l_l","l",[t13,t18,t19]),
    new Position("l_m1","m1",[t19]),
    new Position("l_m2","m2",[t19]),
    new Position("l_n","n",[t15,t16]),
    new Position("l_o","o",[t12,t16,t17]),
    new Position("l_p","p",[t12,t17,t18]),
    new Position("l_q","q",[t18,t19]),
    new Position("l_r","r",[t16]),
    new Position("l_s","s",[t16,t17]),
    new Position("l_t","t",[t17,t18]),
    new Position("l_u","u",[t18]),
    new Position("l_v1","v1",[t17]),
    new Position("l_v2","v2",[t17])]
}

//0 = Brick
//1 = Wood
//2 = Ore
//3 = Sheep
//4/5 (Optional) = Wheat
//6 = Desert
function declareTiles() {
    t1 = new Tile(8, 3)
    t2 = new Tile(3, 3)
    t3 = new Tile(5, 5)
    t4 = new Tile(10, 1)
    t5 = new Tile(6, 1)
    t6 = new Tile(4, 2)
    t7 = new Tile(0, 0)
    t8 = new Tile(6, 2)
    t9 = new Tile(9, 5)
    t10 = new Tile(2, 5)
    t11 = new Tile(9, 0)
    t12 = new Tile(11, 2)
    t13 = new Tile(3, 1)
    t14 = new Tile(12, 3)
    t15 = new Tile(5, 1)
    t16 = new Tile(10, 5)
    t17 = new Tile(8, 0)
    t18 = new Tile(4, 3)
    t19 = new Tile(11, 0)
}

//This function adds settlement neighbors' scores to each position
function declareNeighbors() {
    positions[0].neighbors=[positions[2].resourceRarityScore,positions[9].resourceRarityScore,positions[4].resourceRarityScore]
    positions[1].neighbors=[positions[3].resourceRarityScore,positions[10].resourceRarityScore,positions[5].resourceRarityScore]
    positions[2].neighbors=[positions[0].resourceRarityScore,positions[7].resourceRarityScore,positions[9].resourceRarityScore,positions[14].resourceRarityScore]
    positions[3].neighbors=[positions[1].resourceRarityScore,positions[8].resourceRarityScore,positions[10].resourceRarityScore,positions[15].resourceRarityScore]
    positions[4].neighbors=[positions[0].resourceRarityScore,positions[9].resourceRarityScore,positions[16].resourceRarityScore,positions[11].resourceRarityScore]
    positions[5].neighbors=[positions[1].resourceRarityScore,positions[10].resourceRarityScore,positions[12].resourceRarityScore,positions[17].resourceRarityScore]
    positions[6].neighbors=[positions[8].resourceRarityScore,positions[19].resourceRarityScore,positions[24].resourceRarityScore]
    positions[7].neighbors=[positions[2].resourceRarityScore,positions[14].resourceRarityScore,positions[18].resourceRarityScore]
    positions[8].neighbors=[positions[3].resourceRarityScore,positions[6].resourceRarityScore,positions[15].resourceRarityScore,positions[19].resourceRarityScore]
    positions[9].neighbors=[positions[0].resourceRarityScore,positions[2].resourceRarityScore,positions[4].resourceRarityScore,positions[14].resourceRarityScore,positions[16].resourceRarityScore,positions[20].resourceRarityScore]
    positions[10].neighbors=[positions[1].resourceRarityScore,positions[3].resourceRarityScore,positions[5].resourceRarityScore,positions[15].resourceRarityScore,positions[17].resourceRarityScore,positions[21].resourceRarityScore]
    positions[11].neighbors=[positions[4].resourceRarityScore,positions[13].resourceRarityScore,positions[16].resourceRarityScore,positions[22].resourceRarityScore]
    positions[12].neighbors=[positions[5].resourceRarityScore,positions[17].resourceRarityScore,positions[23].resourceRarityScore]
    positions[13].neighbors=[positions[11].resourceRarityScore,positions[22].resourceRarityScore,positions[29].resourceRarityScore]
    positions[14].neighbors=[positions[2].resourceRarityScore,positions[7].resourceRarityScore,positions[9].resourceRarityScore,positions[18].resourceRarityScore,positions[20].resourceRarityScore,positions[25].resourceRarityScore]
    positions[15].neighbors=[positions[3].resourceRarityScore,positions[8].resourceRarityScore,positions[10].resourceRarityScore,positions[19].resourceRarityScore,positions[21].resourceRarityScore,positions[26].resourceRarityScore]
    positions[16].neighbors=[positions[4].resourceRarityScore,positions[9].resourceRarityScore,positions[11].resourceRarityScore,positions[20].resourceRarityScore,positions[22].resourceRarityScore,positions[27].resourceRarityScore]
    positions[17].neighbors=[positions[5].resourceRarityScore,positions[10].resourceRarityScore,positions[12].resourceRarityScore,positions[21].resourceRarityScore,positions[23].resourceRarityScore,positions[28].resourceRarityScore]
    positions[18].neighbors=[positions[7].resourceRarityScore,positions[14].resourceRarityScore,positions[25].resourceRarityScore,positions[30].resourceRarityScore]
    positions[19].neighbors=[positions[6].resourceRarityScore,positions[8].resourceRarityScore,positions[15].resourceRarityScore,positions[24].resourceRarityScore,positions[26].resourceRarityScore,positions[31].resourceRarityScore]
    positions[20].neighbors=[positions[9].resourceRarityScore,positions[14].resourceRarityScore,positions[16].resourceRarityScore,positions[25].resourceRarityScore,positions[27].resourceRarityScore,positions[32].resourceRarityScore]
    positions[21].neighbors=[positions[10].resourceRarityScore,positions[15].resourceRarityScore,positions[17].resourceRarityScore,positions[26].resourceRarityScore,positions[28].resourceRarityScore,positions[33].resourceRarityScore]
    positions[22].neighbors=[positions[11].resourceRarityScore,positions[13].resourceRarityScore,positions[16].resourceRarityScore,positions[22].resourceRarityScore,positions[29].resourceRarityScore,positions[34].resourceRarityScore]
    positions[23].neighbors=[positions[12].resourceRarityScore,positions[17].resourceRarityScore,positions[28].resourceRarityScore,positions[35].resourceRarityScore]
    positions[24].neighbors=[positions[6].resourceRarityScore,positions[19].resourceRarityScore,positions[31].resourceRarityScore,positions[37].resourceRarityScore]
    positions[25].neighbors=[positions[14].resourceRarityScore,positions[18].resourceRarityScore,positions[20].resourceRarityScore,positions[30].resourceRarityScore,positions[32].resourceRarityScore,positions[38].resourceRarityScore]
    positions[26].neighbors=[positions[15].resourceRarityScore,positions[19].resourceRarityScore,positions[21].resourceRarityScore,positions[31].resourceRarityScore,positions[33].resourceRarityScore,positions[39].resourceRarityScore]
    positions[27].neighbors=[positions[16].resourceRarityScore,positions[20].resourceRarityScore,positions[22].resourceRarityScore,positions[32].resourceRarityScore,positions[34].resourceRarityScore,positions[40].resourceRarityScore]
    positions[28].neighbors=[positions[17].resourceRarityScore,positions[21].resourceRarityScore,positions[23].resourceRarityScore,positions[33].resourceRarityScore,positions[35].resourceRarityScore,positions[41].resourceRarityScore]
    positions[29].neighbors=[positions[13].resourceRarityScore,positions[22].resourceRarityScore,positions[34].resourceRarityScore,positions[42].resourceRarityScore]
    positions[30].neighbors=[positions[18].resourceRarityScore,positions[25].resourceRarityScore,positions[38].resourceRarityScore,positions[36].resourceRarityScore]
    positions[31].neighbors=[positions[19].resourceRarityScore,positions[24].resourceRarityScore,positions[26].resourceRarityScore,positions[37].resourceRarityScore,positions[39].resourceRarityScore,positions[44].resourceRarityScore]
    positions[32].neighbors=[positions[20].resourceRarityScore,positions[25].resourceRarityScore,positions[27].resourceRarityScore,positions[38].resourceRarityScore,positions[40].resourceRarityScore,positions[45].resourceRarityScore]
    positions[33].neighbors=[positions[21].resourceRarityScore,positions[26].resourceRarityScore,positions[28].resourceRarityScore,positions[39].resourceRarityScore,positions[41].resourceRarityScore,positions[46].resourceRarityScore]
    positions[34].neighbors=[positions[22].resourceRarityScore,positions[27].resourceRarityScore,positions[29].resourceRarityScore,positions[40].resourceRarityScore,positions[42].resourceRarityScore,positions[47].resourceRarityScore]
    positions[35].neighbors=[positions[23].resourceRarityScore,positions[28].resourceRarityScore,positions[41].resourceRarityScore,positions[43].resourceRarityScore]
    positions[36].neighbors=[positions[30].resourceRarityScore,positions[38].resourceRarityScore,positions[48].resourceRarityScore]
    positions[37].neighbors=[positions[24].resourceRarityScore,positions[31].resourceRarityScore,positions[44].resourceRarityScore]
    positions[38].neighbors=[positions[25].resourceRarityScore,positions[30].resourceRarityScore,positions[32].resourceRarityScore,positions[36].resourceRarityScore,positions[45].resourceRarityScore,positions[48].resourceRarityScore]
    positions[39].neighbors=[positions[26].resourceRarityScore,positions[31].resourceRarityScore,positions[33].resourceRarityScore,positions[44].resourceRarityScore,positions[46].resourceRarityScore,positions[49].resourceRarityScore]
    positions[40].neighbors=[positions[27].resourceRarityScore,positions[32].resourceRarityScore,positions[34].resourceRarityScore,positions[45].resourceRarityScore,positions[47].resourceRarityScore,positions[50].resourceRarityScore]
    positions[41].neighbors=[positions[28].resourceRarityScore,positions[33].resourceRarityScore,positions[35].resourceRarityScore,positions[43].resourceRarityScore,positions[46].resourceRarityScore,positions[51].resourceRarityScore]
    positions[42].neighbors=[positions[29].resourceRarityScore,positions[34].resourceRarityScore,positions[47].resourceRarityScore]
    positions[43].neighbors=[positions[35].resourceRarityScore,positions[41].resourceRarityScore,positions[51].resourceRarityScore]
    positions[44].neighbors=[positions[31].resourceRarityScore,positions[37].resourceRarityScore,positions[39].resourceRarityScore]
    positions[45].neighbors=[positions[32].resourceRarityScore,positions[38].resourceRarityScore,positions[40].resourceRarityScore,positions[48].resourceRarityScore,positions[50].resourceRarityScore,positions[53].resourceRarityScore]
    positions[46].neighbors=[positions[33].resourceRarityScore,positions[39].resourceRarityScore,positions[41].resourceRarityScore,positions[49].resourceRarityScore,positions[51].resourceRarityScore,positions[52].resourceRarityScore]
    positions[47].neighbors=[positions[34].resourceRarityScore,positions[40].resourceRarityScore,positions[42].resourceRarityScore,positions[50].resourceRarityScore]
    positions[48].neighbors=[positions[38].resourceRarityScore,positions[36].resourceRarityScore,positions[45].resourceRarityScore,positions[53].resourceRarityScore]
    positions[49].neighbors=[positions[39].resourceRarityScore,positions[44].resourceRarityScore,positions[46].resourceRarityScore,positions[52].resourceRarityScore]
    positions[50].neighbors=[positions[40].resourceRarityScore,positions[45].resourceRarityScore,positions[47].resourceRarityScore,positions[53].resourceRarityScore]
    positions[51].neighbors=[positions[41].resourceRarityScore,positions[43].resourceRarityScore,positions[46].resourceRarityScore,positions[52].resourceRarityScore]
    positions[52].neighbors=[positions[46].resourceRarityScore,positions[49].resourceRarityScore,positions[51].resourceRarityScore]
    positions[53].neighbors=[positions[45].resourceRarityScore,positions[48].resourceRarityScore,positions[50].resourceRarityScore]
}