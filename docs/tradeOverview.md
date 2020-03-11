---
id: trade-overview
title: Trader Overview
sidebar_label: Overview
---

---

### Positions

Trades work by allowing users to borrow the tokens of liquidity providers. For each pair, there is an Asset and a Stable token.

Let’s use the example of ETH/DAI pair. The trader selects LONG for their position, which means the user is borrowing the ETH (asset). If the user selects SHORT this means they are borrowing DAI (stable).

The selected leverage amount determines at which multiple to borrow from the liquidity providers based on the collateral the trader put in.

When closing a position, traders are releasing their exposure back to the liquidity provider of a given pair.

:::important
With Futureswap you can never lose more than the collateral you put in
:::

### Pairs

Futureswap was designed to add pairs quickly. Inspired by Uniswap’s permissionless design, our system is based on AMM, which gives us the flexibility to serve markets with low to high volume. Futureswap adds a layer of governance to the process by checking the validity of the oracle of a pair that is being proposed.

### AMM

Futureswap does not use an order book system. We believe the future of DeFi requires flexibility and ease of quickly adding a new pairs. Our Automated Market Making design enables liquidity providers to balance pools using a bonding curve based on the price oracle.

### Oracle

All trades and liquidity pools use chainlink as our main oracle system. When a new pair is being added, the proposal will need to include the stable and asset reference contract that the exchange will use to determine prices.

### Front running protection

The system protects users from front running attacks by checking the position creation timestamp relative to the chainlink price update. If the position is opened within a window of 2 minutes before the price update, the system bumps the user up to the next price on trade close.

### FST Reward

FST is our system token used to vote and reduce trade fees. Every week the same amount of FSTs are given out (61,000) to traders who were active for that week. The amount of tokens given to users is determined by the cumaltive size of the user's trades for that week proportional to the rest of the trader volume for that week. So if Alice's trade volume was 10% of that week, she would claim 10% of that week's token allocation. To receive FST the user will need to navigate to the rewards section of our site or directly interface with the smart contract (Incentives.sol).

FST is a non-transferable token. Whatever address a trader uses to trade with will be the address that can claim the FST for those trades.

FSTs are not burnt to reduce trade fees. The system checks to see how many FST an account has and then applies the discount to the trade fee. The discount is calculated on a logarithmic curve and reduces trade fees by up to 30%.

FST is also used for voting on proposals for the system. Creating a new proposal does burn FST.

### Dynamic Funding Rate

Keeping the balance between longs and shorts is important for our system to achieve maximum returns for liquidity providers. In the case of a trade imbalance, liquidity providers are exposed to the over-represented side.

The funding rate changes dynamically based on the balance between the ratio of open shorts and longs. A volume-balanced long and short pool would have a near 0% funding fee while a pool with significantly more long exposure would have a much higher funding fee for the longs and an incentive fee for the underrepresented shorts. The funding fee scales exponentially.

To achieve a dynamic fee, traders do not own a set amount of collateral but rather a relative share of the collateral pool for their trade type. When a trade is initiated the appropriate collateral is transitioned from one collateral pool to the other. This facilitates a dynamic funding fee between all longs and shorts at once.

Example: If the long pool and short pools were both 50% allocated to open futures trades, the funding fee would roughly 0.03% for both sides. A large trader opens the remaining 50% of the long pool so that the long pool is now 100% allocated while the shorts are still 50%.

Since the large trade of 50% of the long pool occurred at once, the fee as expected will be significantly greater than 0.03% and could be in the low 1–3% range. Now that the funding fee is likely 10–100x that of BitMEX and other platforms, arbitrageurs will capitalize on the opportunity. They will open shorts on Futureswap to earn the 1–3% funding fee while simultaneously entering longs on other platforms to hedge their exposure. This incentive will return the longs and shorts back to near equilibrium.

The way this fee scales is adjustable. We anticipate that our initial estimation for the funding fee’s scaling ratio to be incorrect, and as such, it can be adjusted via governance mechanisms.

### Trade Example

Here is an example of how the system would work for a trader going long on ETH. Let’s assume 1 ETH = 100 DAI and 1 DAI = \$1.

Alice enters a position of 10 DAI and selects 10x leverage to go long on 1 ETH.

 <p><img width='200' height='auto' src="img/trade_setup.png" title="*"/></p>

The contract takes 1 ETH out of the liquidity pool and marks it as reserved for Alice. At this point, Alice has added 10 DAI as collateral and has a position size of 1 ETH.

#### ETH goes up 📈

1. Alice closes her long position at \$105.
1. \$100 worth of ETH (0.95238 ETH) is returned to the liquidity pool.
1. \$5 worth of ETH (0.0476 ETH) is paid out to Alice as her profit along with her initial 10 DAI of collateral.
1. The ETH pool still has the same value of ETH and has made fees off of the trade.
1. Price increase while long on ETH.

![alt text](img/eth_go_up.png "eth_go_up")

#### ETH goes Down 📉

1. Alice closes her long position at \$95.
1. \$95 worth of ETH (1 ETH) is returned to the liquidity pool.
1. \$5 worth of Alice’s collateral is converted to ETH to pay back the liquidity pool for her loss via a Uniswap-like pool.
1. Alice’s remaining \$5 in collateral is sent back to her.
1. The ETH pool still has the same value of ETH and has made fees off of the trade.
1. Price decrease while long on ETH.

![alt text](img/eth_go_down.png "eth_go_down")
