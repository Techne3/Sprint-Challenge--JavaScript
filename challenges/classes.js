// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (at){
//     this.length = at.length;
//     this.width = at.width;
//     this.height = at.height;
//   }

  class CuboidMaker{
      constructor(at){
        this.length = at.length;
        this.width = at.width;
        this.height = at.height;
      }
        volume() {
        return (this.length * this.width * this.height)
      }
      surfaceArea() {
        return ( 2* ((this.length*this.width) + (this.length*this.height)+(this.width * this.height)) )
      }
      
  }
        const cuboid = new CuboidMaker({
            length:4,
            width:5,
            height:5,
        })



//Stretch

        class CubeMaker extends CuboidMaker{
            constructor(at){
                super(at) 
            }
            surf(){
                return (6*(this.length*this.length))
            }
            vol(){
                return(this.length*this.width*this.height)
            }
        }
        const cuboids = new CubeMaker({
            length:5,
            width:5,
            height:5,
        })


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cuboids.vol());
console.log(cuboids.surf())



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.