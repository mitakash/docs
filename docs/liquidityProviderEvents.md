---
id: liquidity-provider-risks
title: Liquidity Provider Risks and Returns
sidebar_label: Risk/Returns
---

---

### Pool Balancing Mechanism

To mitigate drastic imbalances between long/short volumes, an increasing fee(Dynamic Funding Rate) is charged to the more popular side. As the disparity between longs and shorts grows the over-represented side is disincentivized by paying an increasing fee to the less popular side. In the above example, short positions are strongly incentivized to take the other side of the trade (any amount up to a \$100 short which would balance the longs/shorts) because they will be earning the Dynamic Funding Rate (the time fee paid by the more popular side to the less in demand side, longs to shorts).

### Liquidity Provider Returns

An issue with Uniswap's system of requiring significantly more liquidity than trade volumes means that capital is not efficiently utilized. Futureswap improves on this by allowing up to 100% of the pools to be utilized by trades. This allows not only for more efficient use of capital but also helps keep liquidity pools balanced during volatile times. Liquidity providers earn trade commissions and borrowing fees on up to 100% of their funds.

Liquidity providers do take on added risk to receive these rewards. The worse case for the liquidity provider's (LP's) returns is that 100% of the traders are short and the price decreases. In this case, LP's have the same exposure (plus earned fees) as if they were holding 100% of the underlying asset instead of 50% of the asset and 50% of the stable. While this is extremely unlikely due to the Dynamic Funding Rate, it is still a risk. The shorts would be paying upwards of 10% per 8 hours to the liquidity providers or longs so an arbitrager could go 20x long and earn 200% (10% \* 20x) in 8 hours while hedging elsewhere. For this to happen arbitragers would need to be forgoing incredible returns.

Futureswap has mechanisms such as the Dynamic Funding Rate to maintain relative volume balance between longs and shorts. When a long position is profiting the shorts are losing and thus the risk is transferred from LPs to traders while LPs are earning 100% of the fees.
