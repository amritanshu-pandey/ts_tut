class VendingMachine {
    private paid = ko.observable(0);

    aud1: Coins = new Coins(1, "./static/images/AUD1.jpg");
    aud2: Coins = new Coins(2, "./static/images/AUD2.jpg");
    cent50: Coins = new Coins(0.5, "./static/images/50cent.jpg");
    
    acceptedCoins: Coins[] = [this.cent50, this.aud1, this.aud2];
    acceptCoin(coin:Coins){
        let oldTotal:number = this.paid();
        this.paid(oldTotal + coin.Value);
        console.log("New value: "+this.paid());
    }
}