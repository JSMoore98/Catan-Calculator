function main() {

    //Function read in data + create tiles?
    //Function Declare Points
    //Functions for first 3 algorithm steps
    //Function Declare Neighbors
    //Functions for last 2 algorithm steps
    //Function for Displaying Results

    declareTiles()
    declarePositions()
    calculateMaxCard()
    CalculateResourcePlenty()

    // test_a = new Position("test_a",[t1,t2,t3])
    // test_b = new Position("test_b",[t1,t2])
    //test_a.tiles.push(t1, t2, t3)
    //test_b.tiles.push(t1, t2)
    // console.log(test_a)
    // test_a.storeNeighborScore = test_b.storeNeighborScore
    // console.log(test_a.storeNeighborScore)
    // test_b.storeNeighborScore = [4,3]
    // console.log(test_a.storeNeighborScore)
    // console.log(test_a.tiles[0])
    // console.log(test_a.tiles[0].value)
    // console.log(getMaterialName(test_a.tiles[0].mat))

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
function getMaterialName(m) {
    switch (m) {
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

class Position {
    constructor(name,tilesList) {
        this.name = name
        this.tiles = tilesList
        this.storeNeighborScore = null
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
        //Calculate dot/resourceRarity
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
    }
}

function CalculateResourcePlenty(){
    for (i=0; i < positions.length; i++) {
        var sum = 0;
        for (x=0; x < positions[i].tiles.length; x++) {
            sum += positions[i].tiles[x].dotWeight
        }
        positions[i].maxCardScore = sum
        console.log(positions[i].name + " = " + sum)
    }
}

//This function creates all of the possible settlement positions
function declarePositions() {
    positions = [
    new Position("u_a",[t1]),
    new Position("u_b",[t2]),
    new Position("u_c",[t1,t2]),
    new Position("u_d",[t1,t4]),
    new Position("u_e",[t4]),
    new Position("u_f",[t5]),
    new Position("u_g",[t2,t5]),
    new Position("u_h",[t1,t2,t3]),
    new Position("u_i",[t1,t3,t4]),
    new Position("u_j",[t4,t9]),
    new Position("u_k",[t9]),
    new Position("u_l",[t2,t5,t6]),
    new Position("u_m",[t2,t3,t6]),
    new Position("u_n",[t3,t4,t8]),
    new Position("u_o",[t4,t8,t9]),
    new Position("u_p",[t5,t10]),
    new Position("u_q",[t5,t6,t10]),
    new Position("u_r",[t3,t6,t7]),
    new Position("u_s",[t3,t7,t8]),
    new Position("u_t",[t8,t9,t14]),
    new Position("u_u",[t9,t14]),
    new Position("u_v",[t10]),
    new Position("u_w",[t6,t10,t11]),
    new Position("u_x",[t6,t7,t11]),
    new Position("u_y",[t7,t8,t13]),
    new Position("u_z",[t8,t13,t14]),
    new Position("l_a",[t14]),
    new Position("l_b",[t10,t15]),
    new Position("l_c",[t10,t11,t15]),
    new Position("l_d",[t7,t11,t12]),
    new Position("l_e",[t7,t12,t13]),
    new Position("l_f",[t13,t14,t19]),
    new Position("l_g",[t14,t19]),
    new Position("l_h",[t15]),
    new Position("l_i",[t11,t15,t16]),
    new Position("l_j",[t11,t12,t16]),
    new Position("l_k",[t12,t13,t18]),
    new Position("l_l",[t13,t18,t19]),
    new Position("l_m",[t19]),
    new Position("l_n",[t15,t16]),
    new Position("l_o",[t12,t16,t17]),
    new Position("l_p",[t12,t17,t18]),
    new Position("l_q",[t18,t19]),
    new Position("l_r",[t16]),
    new Position("l_s",[t16,t17]),
    new Position("l_t",[t17,t18]),
    new Position("l_u",[t18]),
    new Position("l_v",[t17])]

    // console.log(positions)
    // console.log(positions[0])
    // positions[0].tiles[0] = t3
    // console.log(positions[0].tiles[0])
    // console.log(positions[0].tiles[0].value)
    // console.log(getMaterialName(positions[0].tiles[0].mat))
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
    //Push neighbor's scores and then apply algorithm?
    //test_a.neighbors.push(test_b)
}