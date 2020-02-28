---
id: liquidityTokenFactory
title: Liquidity Token Factory
---

### createLiquidityToken()

- should not be called directly (harmless just useless)

#### parameters

- all come from the factory

#### actions

- deploy liquidity token snapshot token
- adds factory as minter
- returns address of deplpoyed token

### upgradeIncentve()

#### parameters

- new incentives address

#### actions

- requires call comes from current incentives
- updates the new incentives contract in contract
