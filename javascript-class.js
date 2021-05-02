class Matrix{

    constructor(width,height, elem = (x,y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y=0; y<height; y++){
            for (let x=0; x<height; x++){
                this.content[y*width+x] = elem(x,y);
            }
        }
    }

    get(x,y){
        return this.content[y*this.width+x];
    }

    set(x,y, value){
        this.content[y*this.width+x] = value;
    }
}

var matrix = new Matrix(2,2, (x,y) => x+y);

console.log(matrix);
matrix.set(0,1,3);
console.log(matrix);
console.log(matrix.get(0,1));


class Vec{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }


    plus(vec){
        return new Vec(this.x+vec.x,this.y+vec.y);
    }

    minus(vec){
        return new Vec(this.x-vec.x,this.y-vec.y);
    }

    length(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    }
}

var vec1 = new Vec(2,3);
var vec2 = new Vec(4,5);
console.log(vec2.minus(vec1).length());


class Group{

    constructor(){
        this.content = [];
    }

    add(elem){
        if(this.content.indexOf(elem) === -1){
            this.content.push(elem);
        }
    }

    delete(elem){
        if(this.content.indexOf(elem) > -1){
            this.content = this.content.splice(this.content.indexOf(elem));
        }
    }

    has(elem){
        if(this.content.indexOf(elem) === -1){
            return false;
        }
        return true;
    }

    _isIterable(obj){
        if(obj == null){
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    static from(obj){
        if(typeof obj[Symbol.iterator] === 'function'){
            let group = new Group();
            for(let value of obj){
                group.add(value);
            }
            return group;
        }
    }
}

var group1 = new Group();
group1.add(1);
group1.add(2);
group1.add(3);
group1.add(1);
console.log(group1);
console.log(group1.has(5));
console.log(Group.from([3,4,5,1,7,5,2,4]));