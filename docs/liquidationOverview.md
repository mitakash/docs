---
id: liquidation-overview
title: Liquidation Overview
sidebar_label: Overview
---

---

### Liquidation

Due to EVM limitations, running consistent logic checks for margin collateralization infractions is not possible. Futureswap, similar to Maker’s CDP liquidation mechanics, allows anyone to send a liquidation transaction to the contract. The contract then checks if the specific trade is in violation of margin collateralization rules and, if so, closes the trade. A 30% liquidation fee is charged to the remaining collateral and paid to the liquidator. 65% is returned to the trade initiator and the remaining 5% is returned to the liquidity pool as an additional fee for bearing the risk of the trade.

For the security of liquidity providers, trades have a set liquidation price saved at trade initiation (updateable via margin addition). This price is what is used for liquidation. This means that if in the case of a black swan event, where the underlying asset is extremely volatile and liquidation transactions cannot or are not feasible to be sent, the trade will still be liquidated at the stored liquidation price upon an eventual liquidation transaction receipt.