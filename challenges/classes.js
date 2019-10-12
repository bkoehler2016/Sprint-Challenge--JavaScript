class CuboidMaker1 {
    constructor(attribute) {
        this.length = attribute.length;
        this.width = attribute.width;
        this.height = attribute.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return (
            2 *
            (this.length * this.width +
                this.length * this.height +
                this.width * this.height)
        );
    }
}


const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1 {
    constructor(attribute) {
        super(attribute);
    }
    cubeVolume() {
        return this.length * this.height * this.width;
    }
    cubeSurfaceArea() {
        let numberOfSides = 6;
        return numberOfSides * (this.length * this.length);
    }
}

const cube = new CubeMaker({
    length: 7,
    width: 7,
    height: 7
});

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());