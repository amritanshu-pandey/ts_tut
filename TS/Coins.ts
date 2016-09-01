class Coins {
    private value: number;
    private image: string; 

    set Value(newValue: number) {
        this.value = newValue;
    }
    get Value(): number {
        return this.value;
    }

    set Image(newValue: string){
        this.image = newValue;
    }

    get Image(){
        return this.image;
    }

    constructor(val: number = 1, img: string = "./static/images/AUD1.jpg") {
        this.value = val;
        this.image = img;
    }

}