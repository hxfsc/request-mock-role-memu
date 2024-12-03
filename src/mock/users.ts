import mockjs from "mockjs"

const url = import.meta.env.BASE_URL
mockjs.mock(url, "post", {
  "data|10":[{
    "id|+1": 0,
    name: "@cname",
    avatar: "@image('300x250')"
  }]
})
