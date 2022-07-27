import { AccAddress } from '@terra-money/terra.js';
import { LCDClient } from '@terra-money/terra.js'

const useQueryCW20 = () => {
  const lcd = new LCDClient({
    URL: "https://lcd.terra.dev/",
    chainID: "columbus-5",
  });
  const PRE_ATTACK_BLOCK_HEIGHT = 7544910;

  const getTokenInfo = async (
    address: AccAddress,
    block_height?: number
  ): Promise<any> => {
    const height = block_height ? block_height : PRE_ATTACK_BLOCK_HEIGHT;
    let tokenData = {};

    try {

      let queryTokenInfo: any = await lcd.wasm.contractQuery(address,
        { token_info: {} },
        { height }
      );
      tokenData = {
        ...queryTokenInfo,
        address
      }
    }
    catch (e) {
      console.log(e)
    }
    return tokenData;
  }

  const getTokenAccountsWithBalance = async (
    tokenAddress: AccAddress,
    block_height?: number,
    start_after?: AccAddress
  ): Promise<Array<{ amount: number, address: AccAddress }>> => {
    const all_accounts = start_after ? { limit: 30, start_after } : { limit: 30 };
    const height = block_height ? block_height : PRE_ATTACK_BLOCK_HEIGHT;

    let res: any = await lcd.wasm.contractQuery(tokenAddress, { all_accounts },
      { height }
    );

    if (res.accounts) {
      const balancePromises = res.accounts.map((account: any) => {
        return getAccountBalance(tokenAddress, account);
      });
      const balances = await Promise.all(balancePromises);

      const accountsWithBalances = balances.map((balance: any, index: any) => {
        return {
          amount: balance,
          address: res.accounts[index]
        }
      });

      return accountsWithBalances;
    }
    else return new Array();
  }

  const getAccountBalance = async (
    tokenAddress: AccAddress,
    address: AccAddress,
    block_height?: number
  ): Promise<string> => {
    const height = block_height ? block_height : PRE_ATTACK_BLOCK_HEIGHT;

    try {
      let res: { balance: string } = await lcd.wasm.contractQuery(tokenAddress,
        { balance: { address } },
        { height }
      );

      return res.balance;
    } catch (e) {
      console.error(e);
      return "0";
    }
  }
  return {
    PRE_ATTACK_BLOCK_HEIGHT,
    getTokenInfo,
    getTokenAccountsWithBalance,
    getAccountBalance
  }
}

export default useQueryCW20;