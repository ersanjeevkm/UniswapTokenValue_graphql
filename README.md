# uniswapTokenValue_graphql

To develop a solution that utilizes the concept of multi calls to fetch prices from Uniswap. The solution allows for the retrieval of multiple token prices in a single call, rather than multiple separate API requests. The objective is to improve efficiency by reducing the number of calls to the blockchain node. The user can input an index of the desired token prices, and the solution will return the prices in a single call.

Developed using Node.js

Indorder to retrieve multiple token prices in single call, made use of Uniswap subgraphs of tokens object

![image](https://user-images.githubusercontent.com/59253577/217344683-f2f84a52-9394-44e0-bcce-df93846edf10.png)

Here derivedETH gives value of a token in ETH
Uniswap GraphQL API: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2

So to retrieve multiple token values the query for the same

```
{
  tokens(where:{symbol_in: ["UNFI", "BIT"]}) {
    id
    name
    derivedETH
    symbol
  }
}
```

Code output:

![image](https://user-images.githubusercontent.com/59253577/217346124-ede7b9fc-bb69-4964-b59d-943ee0ae5bd0.png)
