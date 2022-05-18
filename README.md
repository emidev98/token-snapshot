# Token Snapshot

This tool allow to export CW20 and CW721 data from Terra Classic at a specific block height. [Website hosted here](http://token-snapshot.decentryfi.xyz/) if you need to do so.

## Exported Data model for CW20

### JSON
```JSON 
[
    {
        "amount": "0",
        "address": "terra10ecry8dqe3gj9le75y74javjectsa5tlz26hj6"
    },
    {
        "amount": "9149",
        "address": "terra10jn25qy2nj8kdz4g2p37ua5fgc0rasje2nnxhm"
    },
    {
        "amount": "0",
        "address": "terra10jt9uc5fp56rk8y6w92vurl5yacn3remfvjnk6"
    },
    {
        "amount": "163484",
        "address": "terra10mqlxx62tn8mq4myjtxsqk02r74a6p6rzcdnww"
    }
]
```

### CSV
```CSV
amount,address
0, terra10ecry8dqe3gj9le75y74javjectsa5tlz26hj6
9149, terra10jn25qy2nj8kdz4g2p37ua5fgc0rasje2nnxhm
0, terra10jt9uc5fp56rk8y6w92vurl5yacn3remfvjnk6
163484, terra10mqlxx62tn8mq4myjtxsqk02r74a6p6rzcdnww
```

## Exported Data model for CW721

### JSON
```JSON 
[
    {
        "owner": "terra1ah5hkf3afprw7pyftpynq5lggcccr3tmkgpltc",
        "image": "ipfs://QmQSUy9svSfT3csbPv6qbEyXrDSJDSjSE2J22KajnKG4Pk",
        "image_data": null,
        "external_url": null,
        "description": "Character Loot for the Lootopia Metaverse",
        "name": "Character Loot #0",
        "attributes": [
            {
                "display_type": null,
                "trait_type": "Name",
                "value": "Rhydolin"
            },
            {
                "display_type": null,
                "trait_type": "Origin",
                "value": "Vidu"
            },
            {
                "display_type": null,
                "trait_type": "Profession",
                "value": "Medic"
            },
            {
                "display_type": null,
                "trait_type": "Obsession",
                "value": "Immortality"
            },
            {
                "display_type": null,
                "trait_type": "Talent",
                "value": "Adaptability"
            },
            {
                "display_type": null,
                "trait_type": "Skill",
                "value": "Uncover Traitor"
            },
            {
                "display_type": null,
                "trait_type": "Alignment",
                "value": "Lawful Neutral"
            }
        ],
        "background_color": null,
        "animation_url": null,
        "youtube_url": null
    },
    {
        "owner": "terra1ws4w8w0xs5dz9d4lzw6c5twtkkycjv9v55grvw",
        "image": "ipfs://QmXsgJ9yyJ1uWJB6HbX3Wt1eQJSbVWixb7YtZqj3TjybYQ",
        "image_data": null,
        "external_url": null,
        "description": "Character Loot for the Lootopia Metaverse",
        "name": "Character Loot #1",
        "attributes": [
            {
                "display_type": null,
                "trait_type": "Name",
                "value": "Zisurgh"
            },
            {
                "display_type": null,
                "trait_type": "Origin",
                "value": "Mukai"
            },
            {
                "display_type": null,
                "trait_type": "Profession",
                "value": "Arms Dealer"
            },
            {
                "display_type": null,
                "trait_type": "Obsession",
                "value": "Immortality"
            },
            {
                "display_type": null,
                "trait_type": "Talent",
                "value": "Intuition"
            },
            {
                "display_type": null,
                "trait_type": "Skill",
                "value": "Sneak"
            },
            {
                "display_type": null,
                "trait_type": "Alignment",
                "value": "Lawful Good"
            }
        ],
        "background_color": null,
        "animation_url": null,
        "youtube_url": null
    },
    {
        "owner": "terra1ah5hkf3afprw7pyftpynq5lggcccr3tmkgpltc",
        "image": "ipfs://QmRePjpNzypWKHJeScjuTABq1fo6kizwKnQumDxsYeK4kv",
        "image_data": null,
        "external_url": null,
        "description": "Character Loot for the Lootopia Metaverse",
        "name": "Character Loot #10",
        "attributes": [
            {
                "display_type": null,
                "trait_type": "Name",
                "value": "Jurret"
            },
            {
                "display_type": null,
                "trait_type": "Origin",
                "value": "Vidu"
            },
            {
                "display_type": null,
                "trait_type": "Profession",
                "value": "Engineer"
            },
            {
                "display_type": null,
                "trait_type": "Obsession",
                "value": "Power"
            },
            {
                "display_type": null,
                "trait_type": "Talent",
                "value": "Communication"
            },
            {
                "display_type": null,
                "trait_type": "Skill",
                "value": "Repair Item"
            },
            {
                "display_type": null,
                "trait_type": "Alignment",
                "value": "Chaotic Good"
            }
        ],
        "background_color": null,
        "animation_url": null,
        "youtube_url": null
    }
]
```

### CSV
```CSV
owner,image,image_data,external_url,description,name,attributes,background_color,animation_url,youtube_url
terra1ah5hkf3afprw7pyftpynq5lggcccr3tmkgpltc, ipfs://QmQSUy9svSfT3csbPv6qbEyXrDSJDSjSE2J22KajnKG4Pk, , , Character Loot for the Lootopia Metaverse, Character Loot #0, "[{"display_type":null,"trait_type":"Name","value":"Rhydolin"},{"display_type":null,"trait_type":"Origin","value":"Vidu"},{"display_type":null,"trait_type":"Profession","value":"Medic"},{"display_type":null,"trait_type":"Obsession","value":"Immortality"},{"display_type":null,"trait_type":"Talent","value":"Adaptability"},{"display_type":null,"trait_type":"Skill","value":"Uncover Traitor"},{"display_type":null,"trait_type":"Alignment","value":"Lawful Neutral"}]", , , 
terra1ws4w8w0xs5dz9d4lzw6c5twtkkycjv9v55grvw, ipfs://QmXsgJ9yyJ1uWJB6HbX3Wt1eQJSbVWixb7YtZqj3TjybYQ, , , Character Loot for the Lootopia Metaverse, Character Loot #1, "[{"display_type":null,"trait_type":"Name","value":"Zisurgh"},{"display_type":null,"trait_type":"Origin","value":"Mukai"},{"display_type":null,"trait_type":"Profession","value":"Arms Dealer"},{"display_type":null,"trait_type":"Obsession","value":"Immortality"},{"display_type":null,"trait_type":"Talent","value":"Intuition"},{"display_type":null,"trait_type":"Skill","value":"Sneak"},{"display_type":null,"trait_type":"Alignment","value":"Lawful Good"}]", , , 
terra1ah5hkf3afprw7pyftpynq5lggcccr3tmkgpltc, ipfs://QmRePjpNzypWKHJeScjuTABq1fo6kizwKnQumDxsYeK4kv, , , Character Loot for the Lootopia Metaverse, Character Loot #10, "[{"display_type":null,"trait_type":"Name","value":"Jurret"},{"display_type":null,"trait_type":"Origin","value":"Vidu"},{"display_type":null,"trait_type":"Profession","value":"Engineer"},{"display_type":null,"trait_type":"Obsession","value":"Power"},{"display_type":null,"trait_type":"Talent","value":"Communication"},{"display_type":null,"trait_type":"Skill","value":"Repair Item"},{"display_type":null,"trait_type":"Alignment","value":"Chaotic Good"}]", , , 
```