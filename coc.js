const COC_API_TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhmMGYyNjBhLTc3NTYtNDU0My04YTYxLWE3NGUwZDAxOTg5YyIsImlhdCI6MTYxMTIwMDU1OSwic3ViIjoiZGV2ZWxvcGVyLzBmOTRiYzdmLTYxMDItYTcwZC0wOTQ1LTIxMzExZWRiNWRiOSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy4zNy4xODIuNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.msCH8ch03Bj-VQYlwFMhZf_bnai9h4yUUzlQ4KJoZn8KjIYf6fE0ko1IIz6Im8pZZhvVjZFC2vdGWE13P0ihbQ"
const clashApi = require('clash-of-clans-api')

let client = clashApi({
  token: COC_API_TOKEN // Optional, can also use COC_API_TOKEN env variable
});

async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag)
    console.log("this is the player info:", playerInfo)

  } catch (error) {
    console.error(error)
  }
}

// showPlayerInfo('#LC220UJYY')

async function showClanByTag(tag) {
    try {
      const ClanByTag = await client.clanByTag(tag)
      console.log("this is the player info:", ClanByTag.memberList)
  
    } catch (error) {
      console.error(error)
    }
  }
  
   showClanByTag('#9GU0UC9J')
