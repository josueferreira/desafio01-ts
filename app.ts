import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(300)
peopleAccount.withdraw(100)
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(500)
companyAccount.withdraw(200)
companyAccount.getLoan(700)
console.log(companyAccount.getName())
console.log(companyAccount.getBalance())
console.log(companyAccount)
const savingsAccount: SavingsAccount = new SavingsAccount('João', 77)
savingsAccount.depositSaving(500)
savingsAccount.withdraw(200)
console.log(savingsAccount.getName())
console.log(savingsAccount.getBalance())
console.log(savingsAccount)