export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private money: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (money: number): void => {
    this.money = money
    if(this.validateStatus()){
      this.balance += money
    }
  }

  withdraw = (money: number): void => {
    this.money = money
    if(this.validateStatus() && money <= this.balance){
      this.balance -= money
    }
    else{
      console.log('Não tem Saldo!')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
