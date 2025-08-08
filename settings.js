require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAEecCFsDj1udigQAAPwHAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nFGg2IgFVdtQgo4Bd+227tQ4SAEQwYAohT*vct7O7pqZrZqV6eQnJz7zkn597vgKYkx2Ncg*53kDFSIo6bJa8zDPpgUIQhZqAFAsQR6APBUAudTkXjbglrfVqcbcuRx1tXordlnCsyVRZeMvMPo5H*Ah4tkBXHhPh*SLi3lTkunSOkJ+8oetVOq*Lz9FWRtHV6m2qp5eznbHOvwsXrC3g0GRFhhEZWdsIXzFAyxrWHCPsa*I3bqeUsYhJHS2Se8oXUQwMjimxvM9eWpU1Y3VsyVyHDzdfgD*fpksfb8pSEWrlDYRxEpYVL9TwVpI6Yz9btOnDrC9mS6Rv8nEQUB06AKSe8*rLuI*2yq7G39fy0lmRvZsc0CSt49Hm8EUZyHUxqGa3wYUgXXwN+G1sSRIfRVN6N3SLPj6l5FWLL3E*bqZfM9RuvhRM5XF+j9GfgHvvwSvx*dO94q*CVdbVN5+bEk4Fssds2nNWDytuFuTuSz6EyD*eHy42mX4OvF10*vduOoG0n0nW2lMVVW3PjimyEbNl1FVhJQjGx096i8wkf8YL9CWXi0rt7C8Xy7Oy2*vTQJpKNYXvN1yo*uLe5n*e68Jpsj+FeZzI3bUMNq6niLM0lMm4FVgwEA1rzsD66g24KV*dXgVQvT0Yxrp0A9OGjBRiOSM4Z4iSlzZ7Y0VoABeUK+wzzp7yAUe0IFzrdbLFTjTZ3U5mwKjBUuHIu9zkJaQRptRrE5mTzAlogY6mP8xwHNsl5yuopznMU4Rz0*36+VEOa4UvKsUsC0Aei1FWhqPR6PShpf+XfqhPiOcqybxRz0AIhSy9TDPqcFbgFnjcscQilnqQNjeFwoHUtRVNV01Q1XYPq0IBWw*HyVnVNLjjn6JKBPlTkbk+FPbn7+KcFKL7xNwM1tCXYAiFhOd*QIktSFHy46+MQ+X5aUL6qqW80C8xAv*O5jTknNMobagVFzD+REhsND9APUZLjH0pjhoMPLu*Tw0iDxgCifli*upMRaLA3iX4Vpw+7v+qTPOOgLMuqrIgKVOWO+oxsDh4*IDYZA8wRSXLQB8bUiKng2NZkRER*MRrpTqQbkQ4+KX149M0Ds0wcXuB6vyvNkheif71hy4FlNxwr0D3syrHiKaftvrgO0pffJGnG3RHBJbrtlE43kfUI38eDaHCobVaehdlOjoe+RqbucIbq0ByTaNHbDMtpsYBjCIdhbFTiuC7sW4bILror5aQz98habwzdAgEuiY9*LhaWmHqub+TjqI1i1cpsqz0wLZpVl93Y3vROgno1xfWGtM8DY14oscilG0xU0Tx7CtVOoaBGKw1v55npIm21b7tFeNLfuufZvcn71CTvvibP35Dg5xCi6IK*9HhvyBuTdR6tn5K8z7X*mA2DNQpOB76BkFWKcuR0nO9Pxuwo2HWhrXZbVhd3obvdKtcIgUfj9ixBPEzZBfQBogFLSQBagKVF41qHhukfihm64xjv1BOUc*2zE37XXOJblMfSzEb5qVFh1NUvRWPrWs+yFUf8o7GA3nzm+gIe*wJQSwECFAMUAAAICABHnAhbA49bnYoEAAD8BwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACyBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2348127666139',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'codexabq',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user