---
id: trade-frontrunning
title: Trader Frontrunning
sidebar_label: Frontrunning
---

---

### Trade Frontrunning

Using an on chain oracle allows for a profitable opportunity to place a trade just before the oracle price has updated on chain. This is done when the frontrunner knows what the price is going to be and beats the oracle's transaction. This is one type of frontrunning from a high level.

Frontrunning is deterred on Futureswap by giving trades that are placed just before an oracle price update the next oracle price. The amount of time in which a trade will be labeled as frontrunning is called the front running window. If you place a trade within this time window of the oracle updating your trade will receive the next oracle price.

There is a popup that will alert before you place a trade within the frontrunning window.
