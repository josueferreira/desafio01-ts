import { DioAccount } from "./DioAccount";

export class SavingsAccount extends DioAccount{
    
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  depositSaving = (money: number) : void =>{
    money += 10
    this.deposit(money)
  }
}