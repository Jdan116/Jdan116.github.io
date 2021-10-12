
class Bank {

    accounts = [];
    static nextNumber = 0;

    addAccount() {
        const account = new Account(1);
        this.accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        const saving = new SavingsAccount(2, interest);
        this.accounts.push(saving);
        return saving.getNumber();
    }

    addCheckingAccount(overdraft) {
        const checking = new CheckingAccount(3, overdraft);
        this.accounts.push(checking);
        return checking.getNumber();
    }

    closeAccount(number) {
        for(let i = 0; i < this.accounts.length; ++i) {
            if(this.accounts[i].getNumber() === number) {
                this.accounts.splice(i, 1);
            }
        }
    }

    accountReport() {
        this.accounts.forEach(element => {
            console.log(element)
        });
    }

    endOfMonth(){
        console.log(this.accounts)
        let msg = "";
        this.accounts.forEach(element => {
            msg += element.endOfMonth() + " ";
        });
        return msg;
    }
}
