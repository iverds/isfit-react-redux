build-lists: true

## REST was good, but now it's time to move on

#### Iver Dihle Skjervum

---

# How many of you understands REST?

---

# I probably don't

---

# Agenda

1. Some history
2. Why REST is not that good
3. GraphQL

---
#When we fetched HTML


![inline fit](./img1-1.png)

---
#Single Page Applications (SPA)


![inline fit](./img1-2.png)

---

![fit](./img2.png)

---

# List of players

---

# What about the teams?

---

# REST with links

```javascript
[
    {
        name: "Alan Shearer",
        teams: { href: "/api/players/1/teams" }
    },
    {
        name: "Ian Rush",
        teams: { href: "/api/players/2/teams" }
    },
]
```

---

# Custom endpoints

- /GetPlayersWithTeams

- /GetPlayersWithTeamsAndGoals

- /GetPlayersWithTeamsAndGoalsAnd…

---

# What about GraphQL?

- It tries to solve nested resources

- And versioning

- And type safety

---

#Demo

---

#Resources

http://graphql.org/docs/getting-started

https://github.com/chentsulin/awesome-graphql

https://github.com/relayjs/relay-starter-kit

https://github.com/iverds/ndc2016-graphql

---

#Thank you
