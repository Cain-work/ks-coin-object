let coin = {
    state: 0,
    flip: function() {
        if (Math.random() * 100 < 50) {
            this.state = 0
        }
        else {
            this.state = 1
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 0){
        return "heads"  
        }
        else {
            return "tails"
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if(this.state === 0){
            return image = img()
        }
        else {
            return image = img()
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        
    }
    display20flips function() {

    }
    display20images function(){

    }
};

coin.flip()
console.log(coin.toString())