---
id: howItWorks
title: How It Works
sidebar_label: How It Works
---

---

In this section, we will provide an overview of how the system works for Traders, Liquidity Providers, and Liquidators.

#### Traders

Traders enter into a position by first choosing the pair they want to trade on (ETH/DAI, WBTC/DAI, ect...). Then selecting a long or short position, long the trader thinks the price of the asset will increase and short if they think it will decrease. Next is selecting the deposit amount in that pairing's stable token (DAI or USDC) this amount will determine the size of the trade. Finally the user will select the amount of leverage they wish to use. Increased leverage increases the likelihood of the trade being liquidated by price movement against the trade.

```javascript
trade_size = deposited_amount * leverage;
```

#### Liquidity Providers

Liquidity Providers (LP's) provide liquidity to the platform in equal value amounts per exchange. For example, if they wanted to add value to an ETH/DAI pool they'd add $100 of ETH and $100 of DAI. They are minted liquidity tokens similarly to Uniswap. LPs can redeem liquidity at any time if their liquidity is not in a trade. They will ideally be receiving the trade fees for allowing traders to use their liquidity. They will also be earning FutureSwap Token (FST) as an added incentive.

#### Liquidators

Liquidators monitor the platform for positions that are close to violating margin requirements. They receive 30% of the remaining collateral for saving the position by closing the trade. Liquidators do not need to include any value with this transaction as they do not have to take over the trade.
