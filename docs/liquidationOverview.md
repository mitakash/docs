---
id: liquidation-overview
title: Liquidation Overview
sidebar_label: Overview
---

---

### Liquidation

Due to EVM limitations, running consistent logic checks for collateralization infractions is not feasible. Futureswap, similar to Maker's CDP liquidation mechanics, allows anyone to send a liquidation transaction to the contract. No funds are needed to liquidate and the trade is not taken over by the liquidator. If the specific trade violates collateralization rules, it will be closed. A liquidation fee is charged to the remaining collateral and paid to the liquidator (at the start it will be 30% but can be lowered as the platform matures). 5% is added to the liquidity pool as a type of liquid insurance fund and the remaining funds are returned to the trade initiator (65%).

For the security of liquidity providers, trades have a set liquidation price saved at trade initiation (updateable via margin addition). This price is what is used for liquidation. This means that if in the case of a black swan event, where the underlying asset is extremely volatile and liquidation transactions cannot or are not feasible to be sent, the trade will still be liquidated at the stored liquidation price upon an eventual liquidation transaction receipt.
