
class CheckingAccount extends Account {

    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    get getOverdraft() {
        return this._overdraft;
    }

    set setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    /**
     * Method to take money out of the account with overdraft limit
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
     withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.getBalance() + this.getOverdraft) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }


    /**
     * @returns {string} representation of checking account
     */
     toString() {
        return "Account " + this.getNumber() + ": balance " + this.getBalance();
    }

    endOfMonth() {
        return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: -100 overdraft limit: ${this.getOverdraft}`
    }
}