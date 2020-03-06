---
id: trade-methods
title: Trade Methods
sidebar_label: Methods
---

---

### openLong

```openLong``` is function used open a long trade. First it gets the stable token price and then requires that that there is enough asset token not being used by other trades for this trade to reserve it, requries that leverage is between desired levels, requries that the trade size is appropriate. Then calculates collateral plus the trade open fee and transfers collateral plus the trade open fee in. Then calcs the full trade value. Next itgets the asset token price and calls ```newTrade()```which updates the state for the long pools.

```javascript
// @notice Creates a long position for the user
// @param  _collateral amount of Dai added to the users position
// @param  _leverage -> the desired leverage in wei = 10x leverage = 10 wei
// @param  _referral the address of the user who refered this trade
function openLong(
    uint256 _collateral, 
    uint256 _leverage, 
    address _referral
) public isSecured 
```

#### Events

```javascript
event Payouts(
    address indexed _provider,
    uint256 _timestamp,
    uint256[] _weeks,
    bool indexed _isTrader
);
```



