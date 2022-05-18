import { AccAddress } from '@terra-money/terra.js';
import { LCDClient } from '@terra-money/terra.js'

const useQueryCW721 = () => {
  const lcd = new LCDClient({
    URL: "https://solitary-wild-log.terra-mainnet.quiknode.pro/e29ad894ff7e7809f2a3fbfa8fd658e94eb67cdf",
    chainID: "columbus-5",
  });
  const PRE_ATTACK_BLOCK_HEIGHT = 7544910;

  const getAllMintedTokens = async (
    tokenAddress: AccAddress,
    block_height?: number,
    start_after?: AccAddress
  ): Promise<Array<any>> => {
    const all_tokens = start_after ? { limit: 30, start_after } : { limit: 30 };
    const height = block_height ? block_height : PRE_ATTACK_BLOCK_HEIGHT;

    let res: any = await lcd.wasm.contractQuery(
      tokenAddress, 
      { all_tokens },
      { height }
    );

    if (res.tokens) {
      const tokensPromisesInfo = res.tokens.map((tokenId: any) => {
        return getTokenInfo(tokenAddress, tokenId);
      });
      const tokensInfo = await Promise.all(tokensPromisesInfo);
      const tokensParsedInfo = tokensInfo.map((tokenInfo: any, index: any) => {
        return {
          owner: tokenInfo.access.owner,
          ...tokenInfo.info.extension
        }
      });

      return tokensParsedInfo;
    }
    else return new Array();
  }

  const getTokenInfo = async (
    tokenAddress: AccAddress,
    token_id: AccAddress,
    block_height?: number
  ): Promise<any> => {
    const height = block_height ? block_height : PRE_ATTACK_BLOCK_HEIGHT;

    try {
      let res: { balance: string } = await lcd.wasm.contractQuery(tokenAddress,
        { all_nft_info: { token_id } },
        { height }
      );

      return res;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }
  return {
    PRE_ATTACK_BLOCK_HEIGHT,
    getAllMintedTokens
  }
}

export default useQueryCW721;