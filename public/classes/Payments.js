var Payments = /** @class */ (function () {
    function Payments(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payments.prototype.format = function () {
        return "".concat(this.recipient, " is owed $").concat(this.amount, " for ").concat(this.details);
    };
    return Payments;
}());
export { Payments };
