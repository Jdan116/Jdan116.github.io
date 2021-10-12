
class Bank {

    accounts = [];
    static nextNumber = 1;

    addAccount() {
        const account = new Account(Bank.nextNumber);
        ++Bank.nextNumber;
        this.accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        const saving = new SavingsAccount(Bank.nextNumber, interest);
        ++Bank.nextNumber;
        this.accounts.push(saving);
        return saving.getNumber();
    }

    addCheckingAccount(overdraft) {
        const checking = new CheckingAccount(Bank.nextNumber, overdraft);
        ++Bank.nextNumber;
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

