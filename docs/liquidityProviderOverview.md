---
id: liquidity-provider-overview
title: Liquidity Provider Overview
sidebar_label: Overview
---

---

### Liquidity Providers

Like Uniswap, Futureswap is powered by liquidity providers. Every Futureswap liquidity exchange holds reserves of a stable token (ex: DAI) and another ERC20 token (ex: wrapped ETH). To become a liquidity provider you are required to deposit equal value amounts of the exchanges stable and asset tokens. You are then minted transferable liquidity tokens which represent your ownership to that liquidity pool. If you own 10 liquidity tokens and there are 100 outstanding you own 10/100 = 10% of the tokens in the asset and stable pools.

Automated market making means that Futureswap's liquidity providers may initially take the other side of an unmatched futures position. An example of this would be a brand new exchange where there are zero open trades. If a $100 long is open then there is $100 of longs and $0 of shorts. The liquidity providers are covering the $100 long position effectively making them short the asset temporarily.

### Adding Liquidity

To add liquidity to a Futureswap exchange use the function in FutureSwap.sol called `addLiquidity`. Users that deposit liquidity into the system receive a liquidity token that represents their share of ownership to the assets in the liquidity pool. These liquidity tokens can be burnt into the contract to remove liquidity and fees which are in the same pool.
addLiquidity takes in one parameters:
\_assetTokenAmount

`transferLiquidity` -> Gets the Asset value and matches how much stable that would be. If the stable is not the same decimal it unpads it to the right amount then transfers it to the DSR.

Liquidity providers can send in the exchange’s base asset and stable token for example this could be ETH (asset) and DAI (stable). If unwrapped ETH is being sent in it will be converted to wrapped ETH (WETH) as Futureswap only uses token complying with the ERC-20 standard. If DAI is being sent in the contract will put the DAI in the Dai Savings Rate.

Adding liquidity requires depositing an equivalent value of the pool’s Asset and Stable tokens into the ERC20 token's associated exchange contract.
Liquidity providers that join a pool use the exchange rate set by that pool’s oracle. As the price of the underlying assets move Futureswap’s InternalExchange arbitrages the assets so that the pools remain balanced with equal values. This is very similar to how uniswap.io functions with the exception that there isn’t infinite liquidity on either side. Arbitragers can purchase the token side that is overweighted at a 1% discount to the price oracle.

### Removing Liquidity

To remove liquidity from a Futureswap exchange use the function in FutureSwap.sol called `removeLiquidity`
removeLiquidity takes in one parameters:
tokensToBurn

The address that sends this request must own liquidity tokens and those tokens will be burnt for withdrawing.

This requires the amount is not being currently utalized. It gets the balance of the available liquidity of the tokens in the pool and then multiplies it by how much of the liquidity tokens you own.

If the DAI is in the DSR it removes it, if the token is Weth it unwraps it.

As well add any funds to DSR will get called if funds are not in the DSR and the caller will be rewarded

### Liquidity Example

#### Example

The liquidity pool for a Futureswap ETH/DAI exchange already has $100 of ETH and $100 of DAI in it.
There are 100 liquidity tokens (LT) outstanding.
Alice adds $25 of ETH and $25 of DAI to the exchange for a sum of $100 in value.
Alice’s liquidity addition makes up 20% ($50/$250) of the liquidity pools and we can calculate how many liquidity tokens she will receive by finding the price of LT: 100 tokens / $200 in liquidity = 0.25.
Then we take the 0.25 ratio and multiply Alice’s dollar addition of \$50 to get a new share amount of 25.
