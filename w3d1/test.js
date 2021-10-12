        // initialize mocha
        mocha.setup('bdd');
        // chai has a lot of stuff, let's make assert global
        let assert = chai.assert;

        const acc1 = new Account(1);
        const WITH_DRAW = 10;
        const DEPOSIT = 90;
        const INTEREST = 2.5;
        const OVER_DRAFT_LIMIT = 500;

        acc1.deposit(100);
        describe("withdraw", () => {
            it(`The Current balance for Account #${acc1.getNumber()} is ${acc1.getBalance()}. Now, the account balance is $${acc1.getBalance() - WITH_DRAW} after $${WITH_DRAW} withdrawn`,
                () => {
                    acc1.withdraw(WITH_DRAW);
                    assert.equal(90, acc1.getBalance());
                });
        });

        const acc2 = new Account(2);
        describe("withdraw throw exception", () => {
            it(`The Current balance for Account #${acc2.getNumber()} is ${acc2.getBalance()}. Trying to withdraw $${WITH_DRAW}. Insufficient funds`,
                () => {
                    assert.throws(function() {acc2.withdraw(10)}, Error, 'Insufficient funds');
                });
        });

        describe("negative value withdraw throw exception", () => {
            it(`Trying to withdraw -100. Withdraw amount has to be greater than zero`,
                () => {
                    assert.throws(function() {acc2.withdraw(-100)}, Error, 'Withdraw amount has to be greater than zero');
                });
        });

        describe("deposit", () => {
            it(`The Current balance for Account #${acc2.getNumber()} is ${acc2.getBalance()}. Now, account balance is $${acc2.getBalance() + DEPOSIT} after $${DEPOSIT} deposited`,
                () => {
                    acc2.deposit(DEPOSIT);
                    assert.equal(DEPOSIT, acc2.getBalance());
                });
        });


        const saving = new SavingsAccount(3, INTEREST);
        saving.deposit(100);
        
        describe("addInterest", () => {
            it(`The Current balance for Account#${saving.getNumber()} is ${saving.getBalance()}. Now, account balance is $${saving.getBalance() + saving.addInterest()} after $${INTEREST} interest is added.`,
                () => {
                    assert.equal(102.5, saving.getBalance());
                });
        });
        
        const checking = new CheckingAccount(4, OVER_DRAFT_LIMIT);
        describe("withdraw", () => {
            it(`The Current balance for Account #${checking.getNumber()} is ${checking.getBalance()}. Now, the account balance is $${checking.getBalance() - 100} after $100 withdrawn`,
                () => {
                    checking.withdraw(100);
                    assert.equal(-100, checking.getBalance());
                });
        });

        const bank = new Bank();
        describe("addAccount", () => {
            it("new account with accountId 1 is added",
                () => {
                    assert.equal(1, bank.addAccount());
                });
        });
        
        describe("addSavingsAccount", () => {
            it("new saving account with accountId 3 is added",
                () => {
                    assert.equal(2, bank.addSavingsAccount(1.5));
                });
        });
        
        describe("addCheckingAccount", () => {
            it("new checking account with accountId 2 is added",
                () => {
                    assert.equal(3, bank.addCheckingAccount(500));
                });
        });
        
        describe("endOfMonth", () => {
            it("endOfMonth message retreived from different account type polymorphically",
                () => {
                    assert.equal(` Interest added SavingsAccount 2: balance: 0 interest: 1.5 Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500 `, bank.endOfMonth());
                });
        });

        console.log(bank.endOfMonth());
        console.log(bank.accounts)
        bank.closeAccount(2)
        console.log(bank.accounts)
        bank.accountReport();
        bank.endOfMonth();