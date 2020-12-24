# RuneQL

A GraphQL API for Old School Runescape data including Items, Grand Exchange prices, Monsters, and more.

Try it in the browser: https://api.runeql.com/

Try it from the terminal:

```sh
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ item(id: 4151) { name, examine, price } }" }' \
https://api.runeql.com/
```

```sh
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

## Related repositories

- [runeql-web](https://github.com/schmidlidev/runeql-web) Repository for www.runeql.com
- [runeql-tools](https://github.com/schmidlidev/runeql-tools) Various tools supporting RuneQL including scraping, transforming, and deploying data.
- [runeql-data](https://github.com/schmidlidev/runeql-data) The staging area for static data served by RuneQL.

## Made possible by

- [OSRSBox](https://github.com/osrsbox/osrsbox-db)
- [Oldschool Runescape wiki](https://oldschool.runescape.wiki/)
