function main() {
    console.log("Hello World")

    //Create Tiles 1-18
    //Create Desert Tile

    const t1 = new Tile(5, 1)
    const t2 = new Tile(10, 2)
    const t3 = new Tile(8, 0)

    tiles = [t1, t2, t3]

    //Create all points and tie to tiles

    test_a = new Position()
    test_b = new Position()
    test_a.tiles.push(t1, t2, t3)
    test_b.tiles.push(t1, t2)
    //Push neighbor's scores and then apply algorithm?
    //test_a.neighbors.push(test_b)
    console.log(test_a)
    console.log(test_a.tiles[0])
    console.log(test_a.tiles[0].value)
    console.log(getMaterialName(test_a.tiles[0].mat))

}

//This function returns the number of dots for a number
function getDots(n) {
    if (n <= 7) {
        return (n - 1)
    }
    else {
        return (Math.abs(n - 13))
    }
}

//This function translates the materials
//From the numbers format to text
//0 = Brick
//1 = Wood
//2 = Ore
//3 = Sheep
//4/5 (Optional) = Wheat
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
        default:
        //Error
    }
}

//This function creates all of the possible settlement positions
function declarePositions() {
    test_a = new Position()
    test_b = new Position()
    test_a.tiles.push(t1, t2, t3)
    test_b.tiles.push(t1, t2)
    //Push neighbor's scores and then apply algorithm?
    //test_a.neighbors.push(test_b)
    console.log(test_a)
    console.log(test_a.tiles[0])
    console.log(test_a.tiles[0].value)
    console.log(getMaterialName(test_a.tiles[0].mat))
}

class TreeNode {
    constructor(value, type, mat) {
        this.value = value
        this.type = type
        this.mat = mat
        this.descendents = []
    }
}

class Position {
    constructor() {
        this.tiles = []
        this.neighborScore = []
        //Add variables for algorithm scores
    }
}

class Tile {
    constructor(value, mat) {
        this.value = value
        this.mat = mat
        //0 Weight symbolizes 1/3, 1 Weight symbolizes 1/4
        this.weight = mat % 2
    }
}

//Dots calculation
//2-7: n-1 dots
//8-12" |n-13| dots