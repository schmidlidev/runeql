# RuneQL

![cicd](https://github.com/schmidlidev/runeql/workflows/cicd/badge.svg?branch=master)
![Discord](https://img.shields.io/discord/792868323011723275)

A GraphQL API for Old School Runescape data including Items, Grand Exchange prices, Monsters, and more.

Try it in the browser: https://api.runeql.com/

Try it from the terminal:

```sh
# Request
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ item(id: 4151) { name, examine, price } }" }' \
https://api.runeql.com/
```

```sh
# Response
{
  "data":{
    "item":{
      "name":"Abyssal whip",
      "examine":"A weapon from the abyss.",
      "price":2856720
    }
  }
}
```

API Documentation: https://www.runeql.com/schema/

## Features

- Items
  - Including live Grand Exchange prices
- Monsters
  - Including drop tables
- Player hiscores
  - TBD

If there's a feature you'd like to see implemented in RuneQL, please feel free to [open an issue](https://github.com/schmidlidev/runeql/issues/new).
Alternatively, ask in the [RuneQL Discord](https://discord.gg/BsqnhWZTz8).

## Related repositories

- [runeql-web](https://github.com/schmidlidev/runeql-web) Repository for www.runeql.com
- [runeql-tools](https://github.com/schmidlidev/runeql-tools) Various tools supporting RuneQL including scraping, transforming, and deploying data.
- [runeql-data](https://github.com/schmidlidev/runeql-data) The staging area for static data served by RuneQL.

## Made possible by

- [OSRSBox](https://github.com/osrsbox/osrsbox-db)
- [Oldschool Runescape wiki](https://oldschool.runescape.wiki/)
