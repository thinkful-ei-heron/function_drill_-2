'strict mode' 

let loaf = {
    flour : 300,
    water: 210,
    hydration : function (){
        return (this.flour/this.water)*100;
    }
    
}

console.log(loaf.flour, loaf.water);

console.log(loaf.hydration());


