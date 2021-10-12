
class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number)
        this._interest = interest;
    }

    get getInterest() {
        return this._interest;
    }

    set setInterest(interest) {
        this._interest = interest;
    }

    /**
     * Method to deposit interest into the account
     */
    addInterest() {
        let newDeposit = this.getBalance() * this.getInterest / 100;
        this.deposit(newDeposit)
        console.log("newDeposit: " + newDeposit + " new balance " + this.getBalance())
        return newDeposit;
    }


    /**
     * @returns {string} representation of saving account
     */
     toString() {
        "Account " + this.getNumber() + ": balance " + this.getBalance() + " after interest " + this.getInterest();
    }

    endOfMonth() {
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this.getInterest}`
    }
}