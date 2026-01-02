require('dotenv').config()
const express = require('express')
const app = express()
const githubdata = {
  "login": "Yashraj047",
  "id": 207678518,
  "node_id": "U_kgDODGDsNg",
  "avatar_url": "https://avatars.githubusercontent.com/u/207678518?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Yashraj047",
  "html_url": "https://github.com/Yashraj047",
  "followers_url": "https://api.github.com/users/Yashraj047/followers",
  "following_url": "https://api.github.com/users/Yashraj047/following{/other_user}",
  "gists_url": "https://api.github.com/users/Yashraj047/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Yashraj047/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Yashraj047/subscriptions",
  "organizations_url": "https://api.github.com/users/Yashraj047/orgs",
  "repos_url": "https://api.github.com/users/Yashraj047/repos",
  "events_url": "https://api.github.com/users/Yashraj047/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Yashraj047/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Yash",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Halke mai nhi lena :) ",
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 3,
  "following": 8,
  "created_at": "2025-04-15T08:18:26Z",
  "updated_at": "2026-01-02T15:49:33Z"
}

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ME', (req, res) => {
  res.send('I am Yashraj')
})

app.get('/about', (req, res) => {
  res.send('<h1>I am a backend developer</h1><p>I love coding</p>')
})

app.get('/github', (req, res) => {
  res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
