var Coins = (function () {
    function Coins(val, img) {
        if (val === void 0) { val = 1; }
        if (img === void 0) { img = "./static/images/AUD1.jpg"; }
        this.value = val;
        this.image = img;
    }
    Object.defineProperty(Coins.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coins.prototype, "Image", {
        get: function () {
            return this.image;
        },
        set: function (newValue) {
            this.image = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return Coins;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        this.paid = ko.observable(0);
        this.aud1 = new Coins(1, "./static/images/AUD1.jpg");
        this.aud2 = new Coins(2, "./static/images/AUD2.jpg");
        this.cent50 = new Coins(0.5, "./static/images/50cent.jpg");
        this.acceptedCoins = [this.cent50, this.aud1, this.aud2];
    }
    VendingMachine.prototype.acceptCoin = function (coin) {
        var oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
        console.log("New value: " + this.paid());
    };
    return VendingMachine;
}());
/// <reference path="Coins.ts" />
/// <reference path="VendingMachine.ts" />
// console.log("A Quarter has a value of: " + quarter.Value);
var machine = new VendingMachine;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map