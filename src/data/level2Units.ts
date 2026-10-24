import { UnitTestData } from '../types/fundations';

export const level2Units: Record<string, UnitTestData> = {
  "level-2-unit-1": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/k/",
        "answers": [
          "c",
          "k",
          "ck"
        ]
      },
      {
        "number": 2,
        "prompt": "/w/",
        "answers": [
          "w",
          "wh"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u0115/",
        "answers": [
          "e"
        ]
      },
      {
        "number": 4,
        "prompt": "/ch/",
        "answers": [
          "ch"
        ]
      },
      {
        "number": 5,
        "prompt": "/kw/",
        "answers": [
          "qu"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "cloth",
        "tapUnits": [
          {
            "text": "c"
          },
          {
            "text": "l"
          },
          {
            "text": "o"
          },
          {
            "text": "th",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"cloth\" and mark the closed syllable."
      },
      {
        "number": 2,
        "word": "bunch",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "u"
          },
          {
            "text": "n"
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"bunch\" and mark the closed syllable."
      },
      {
        "number": 3,
        "word": "skim",
        "tapUnits": [
          {
            "text": "s",
            "type": "single"
          },
          {
            "text": "k",
            "type": "single"
          },
          {
            "text": "i",
            "type": "single"
          },
          {
            "text": "m",
            "type": "single"
          }
        ],
        "markingDescription": "Spell the word, \"skim\" and mark the closed syllable."
      },
      {
        "number": 4,
        "word": "strap",
        "tapUnits": [
          {
            "text": "s",
            "type": "single"
          },
          {
            "text": "t",
            "type": "single"
          },
          {
            "text": "r",
            "type": "single"
          },
          {
            "text": "a",
            "type": "single"
          },
          {
            "text": "p",
            "type": "single"
          }
        ],
        "markingDescription": "Spell the word, \"strap\" and mark the closed syllable."
      },
      {
        "number": 5,
        "word": "quilt",
        "tapUnits": [
          {
            "text": "qu",
            "isDigraphOrSuffix": true
          },
          {
            "text": "i"
          },
          {
            "text": "l"
          },
          {
            "text": "t"
          }
        ],
        "markingDescription": "Spell the word, \"quilt\" and mark the closed syllable."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "your"
      },
      {
        "number": 2,
        "word": "was"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "Ken had milk with his snack.",
                "words": [
                        "Ken",
                        "had",
                        "milk",
                        "with",
                        "his",
                        "snack"
                ],
                "phoneticWords": [
                        "Ken",
                        "milk",
                        "snack"
                ],
                "trickWords": [],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "They said to pack one bag.",
                "words": [
                        "They",
                        "said",
                        "to",
                        "pack",
                        "one",
                        "bag"
                ],
                "phoneticWords": [
                        "pack",
                        "bag"
                ],
                "trickWords": [
                        "They",
                        "said",
                        "one"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 1,
    "title": "Fundations: End of Unit 1 Test",
    "totalScore": 25
  },
  "level-2-unit-2": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/ung/",
        "answers": [
          "ung"
        ]
      },
      {
        "number": 2,
        "prompt": "/ank/",
        "answers": [
          "ank"
        ]
      },
      {
        "number": 3,
        "prompt": "/o\u0307l/",
        "answers": [
          "all"
        ]
      },
      {
        "number": 4,
        "prompt": "/ink/",
        "answers": [
          "ink"
        ]
      },
      {
        "number": 5,
        "prompt": "/ong/",
        "answers": [
          "ong"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "quill",
        "tapUnits": [
          {
            "text": "qu",
            "isDigraphOrSuffix": true
          },
          {
            "text": "i"
          },
          {
            "text": "ll",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"quill\" and mark the closed syllable."
      },
      {
        "number": 2,
        "word": "press",
        "tapUnits": [
          {
            "text": "p"
          },
          {
            "text": "r"
          },
          {
            "text": "e"
          },
          {
            "text": "ss",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"press\" and mark the closed syllable."
      },
      {
        "number": 3,
        "word": "strong",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "t"
          },
          {
            "text": "r"
          },
          {
            "text": "ong",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"strong\" and mark the closed syllable."
      },
      {
        "number": 4,
        "word": "cliff",
        "tapUnits": [
          {
            "text": "c"
          },
          {
            "text": "l"
          },
          {
            "text": "i"
          },
          {
            "text": "ff",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"cliff\" and mark the closed syllable."
      },
      {
        "number": 5,
        "word": "shelf",
        "tapUnits": [
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          },
          {
            "text": "e"
          },
          {
            "text": "l"
          },
          {
            "text": "f"
          }
        ],
        "markingDescription": "Spell the word, \"shelf\" and mark the closed syllable."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "pull"
      },
      {
        "number": 2,
        "word": "walk"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "Did Jeff think that the tank was full?",
                "words": [
                        "Did",
                        "Jeff",
                        "think",
                        "that",
                        "the",
                        "tank",
                        "was",
                        "full"
                ],
                "phoneticWords": [
                        "Jeff",
                        "think",
                        "tank"
                ],
                "trickWords": [
                        "full"
                ],
                "punctuation": "?"
        },
        {
                "number": 2,
                "text": "Both men had a long talk with the boss.",
                "words": [
                        "Both",
                        "men",
                        "had",
                        "a",
                        "long",
                        "talk",
                        "with",
                        "the",
                        "boss"
                ],
                "phoneticWords": [
                        "long",
                        "boss"
                ],
                "trickWords": [
                        "Both",
                        "talk"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 2,
    "title": "Fundations: End of Unit 2 Test",
    "totalScore": 25
  },
  "level-2-unit-3": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u012bnd/",
        "answers": [
          "ind"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u012bld/",
        "answers": [
          "ild"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u014dld/",
        "answers": [
          "old"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u014dst/",
        "answers": [
          "ost"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u014dlt/",
        "answers": [
          "olt"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "fold",
        "tapUnits": [
          {
            "text": "f"
          },
          {
            "text": "old",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"fold\" and mark the closed exception."
      },
      {
        "number": 2,
        "word": "grind",
        "tapUnits": [
          {
            "text": "g"
          },
          {
            "text": "r"
          },
          {
            "text": "ind",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"grind\" and mark the closed exception."
      },
      {
        "number": 3,
        "word": "flunk",
        "tapUnits": [
          {
            "text": "f"
          },
          {
            "text": "l"
          },
          {
            "text": "unk",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"flunk\" and mark the closed syllable."
      },
      {
        "number": 4,
        "word": "bolt",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "olt",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"bolt\" and mark the closed exception."
      },
      {
        "number": 5,
        "word": "branch",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "r"
          },
          {
            "text": "a"
          },
          {
            "text": "n"
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"branch\" and mark the closed syllable."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "goes"
      },
      {
        "number": 2,
        "word": "where"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "Who got the most stuff done?",
                "words": [
                        "Who",
                        "got",
                        "the",
                        "most",
                        "stuff",
                        "done"
                ],
                "phoneticWords": [
                        "most",
                        "stuff"
                ],
                "trickWords": [
                        "Who",
                        "done"
                ],
                "punctuation": "?"
        },
        {
                "number": 2,
                "text": "The small child will pet the pretty colt.",
                "words": [
                        "The",
                        "small",
                        "child",
                        "will",
                        "pet",
                        "the",
                        "pretty",
                        "colt"
                ],
                "phoneticWords": [
                        "child",
                        "pet",
                        "colt"
                ],
                "trickWords": [
                        "pretty"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 3,
    "title": "Fundations: End of Unit 3 Test",
    "totalScore": 25
  },
  "level-2-unit-4": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/d/",
        "answers": [
          "d",
          "ed"
        ]
      },
      {
        "number": 2,
        "prompt": "/t/",
        "answers": [
          "t",
          "ed"
        ]
      },
      {
        "number": 3,
        "prompt": "/ing/",
        "answers": [
          "ing"
        ]
      },
      {
        "number": 4,
        "prompt": "/s/",
        "answers": [
          "s"
        ]
      },
      {
        "number": 5,
        "prompt": "/z/",
        "answers": [
          "z",
          "s"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "bunches",
        "baseword": "bunch",
        "suffix": "es",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "u"
          },
          {
            "text": "n"
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "es",
            "isDigraphOrSuffix": true,
            "type": "suffix",
            "tileType": "suffix"
          }
        ],
        "markingDescription": "Spell the word, \"bunches\" and underline the base word and circle the suffix."
      },
      {
        "number": 2,
        "word": "swishing",
        "baseword": "swish",
        "suffix": "ing",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "w"
          },
          {
            "text": "i"
          },
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ing",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"swishing\" and underline the base word and circle the suffix."
      },
      {
        "number": 3,
        "word": "coldest",
        "baseword": "cold",
        "suffix": "est",
        "tapUnits": [
          {
            "text": "c"
          },
          {
            "text": "old",
            "isDigraphOrSuffix": true
          },
          {
            "text": "est",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"coldest\" and underline the base word and circle the suffix."
      },
      {
        "number": 4,
        "word": "spelled",
        "baseword": "spell",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "p"
          },
          {
            "text": "e"
          },
          {
            "text": "ll",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"spelled\" and underline the base word and circle the suffix."
      },
      {
        "number": 5,
        "word": "dusted",
        "baseword": "dust",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "d"
          },
          {
            "text": "u"
          },
          {
            "text": "s"
          },
          {
            "text": "t"
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"dusted\" and underline the base word and circle the suffix."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "again"
      },
      {
        "number": 2,
        "word": "animal"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "The fastest foxes sprinted there by the hills.",
                "words": [
                        "The",
                        "fastest",
                        "foxes",
                        "sprinted",
                        "there",
                        "by",
                        "the",
                        "hills"
                ],
                "phoneticWords": [
                        "fastest",
                        "foxes",
                        "sprinted",
                        "hills"
                ],
                "trickWords": [
                        "there"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "Please use the blocks.",
                "words": [
                        "Please",
                        "use",
                        "the",
                        "blocks"
                ],
                "phoneticWords": [
                        "blocks"
                ],
                "trickWords": [
                        "Please",
                        "use"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 4,
    "title": "Fundations: End of Unit 4 Test",
    "totalScore": 25
  },
  "level-2-unit-5": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/t/",
        "answers": [
          "t",
          "ed"
        ]
      },
      {
        "number": 2,
        "prompt": "/th/",
        "answers": [
          "th"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u014f/",
        "answers": [
          "o"
        ]
      },
      {
        "number": 4,
        "prompt": "/y/",
        "answers": [
          "y"
        ]
      },
      {
        "number": 5,
        "prompt": "/ung/",
        "answers": [
          "ung"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "combat",
        "tapUnits": [
          {
            "text": "com",
            "isDigraphOrSuffix": true
          },
          {
            "text": "bat",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"combat\", and scoop and mark both syllables."
      },
      {
        "number": 2,
        "word": "thankful",
        "baseword": "thank",
        "suffix": "ful",
        "tapUnits": [
          {
            "text": "th",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ank",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ful",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"thankful\" and mark the syllable and circle the suffix."
      },
      {
        "number": 3,
        "word": "panic",
        "tapUnits": [
          {
            "text": "pan",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ic",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"panic\", and scoop and mark the syllables."
      },
      {
        "number": 4,
        "word": "kindness",
        "baseword": "kind",
        "suffix": "ness",
        "tapUnits": [
          {
            "text": "k"
          },
          {
            "text": "ind",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ness",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"kindness\", and mark the syllable and circle the suffix."
      },
      {
        "number": 5,
        "word": "invented",
        "baseword": "invent",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "in",
            "isDigraphOrSuffix": true
          },
          {
            "text": "vent",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"invented\" and scoop and mark both syllables and circle the suffix."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "knew"
      },
      {
        "number": 2,
        "word": "once"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "I know that is a childish habit.",
                "words": [
                        "I",
                        "know",
                        "that",
                        "is",
                        "a",
                        "childish",
                        "habit"
                ],
                "phoneticWords": [
                        "childish",
                        "habit"
                ],
                "trickWords": [
                        "know"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "The dentist always insisted that we floss often.",
                "words": [
                        "The",
                        "dentist",
                        "always",
                        "insisted",
                        "that",
                        "we",
                        "floss",
                        "often"
                ],
                "phoneticWords": [
                        "dentist",
                        "insisted",
                        "floss"
                ],
                "trickWords": [
                        "always",
                        "often"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 5,
    "title": "Fundations: End of Unit 5 Test",
    "totalScore": 25
  },
  "level-2-unit-6": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u016b/",
        "answers": [
          "u-e"
        ]
      },
      {
        "number": 2,
        "prompt": "/iv/",
        "answers": [
          "ive"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u0113/",
        "answers": [
          "e-e"
        ]
      },
      {
        "number": 4,
        "prompt": "/oo/",
        "answers": [
          "u-e"
        ]
      },
      {
        "number": 5,
        "prompt": "/z/",
        "answers": [
          "z",
          "s"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "spoke",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "p"
          },
          {
            "text": "o-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "k"
          }
        ],
        "markingDescription": "Spell the word, \"spoke\" and mark the v-e syllable."
      },
      {
        "number": 2,
        "word": "blaze",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "l"
          },
          {
            "text": "a-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "z"
          }
        ],
        "markingDescription": "Spell the word, \"blaze\" and mark the v-e syllable."
      },
      {
        "number": 3,
        "word": "timeless",
        "baseword": "time",
        "suffix": "less",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "i-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "m"
          },
          {
            "text": "less",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"timeless\" and mark the v-e syllable and circle the suffix."
      },
      {
        "number": 4,
        "word": "athlete",
        "tapUnits": [
          {
            "text": "ath",
            "isDigraphOrSuffix": true
          },
          {
            "text": "lete",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"athlete\" and scoop the word and mark the two syllables."
      },
      {
        "number": 5,
        "word": "captive",
        "tapUnits": [
          {
            "text": "cap",
            "isDigraphOrSuffix": true
          },
          {
            "text": "tive",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"captive\" and scoop the word and mark the two syllables."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "move"
      },
      {
        "number": 2,
        "word": "together"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "Dave rode his bike to his house.",
                "words": [
                        "Dave",
                        "rode",
                        "his",
                        "bike",
                        "to",
                        "his",
                        "house"
                ],
                "phoneticWords": [
                        "Dave",
                        "rode",
                        "bike"
                ],
                "trickWords": [
                        "house"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "Take the plates to the right place.",
                "words": [
                        "Take",
                        "the",
                        "plates",
                        "to",
                        "the",
                        "right",
                        "place"
                ],
                "phoneticWords": [
                        "plates",
                        "place"
                ],
                "trickWords": [
                        "Take",
                        "right"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 6,
    "title": "Fundations: End of Unit 6 Test",
    "totalScore": 25
  },
  "level-2-unit-7": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u0113/",
        "answers": [
          "e-e",
          "e",
          "y"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u012b/",
        "answers": [
          "i-e",
          "i",
          "y"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u0113/",
        "answers": [
          "y"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u016b/",
        "answers": [
          "u"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u012bld/",
        "answers": [
          "ild"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "remote",
        "tapUnits": [
          {
            "text": "re",
            "isDigraphOrSuffix": true
          },
          {
            "text": "mote",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"remote\" and scoop the word and mark the two syllables."
      },
      {
        "number": 2,
        "word": "shyness",
        "baseword": "shy",
        "suffix": "ness",
        "tapUnits": [
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          },
          {
            "text": "y"
          },
          {
            "text": "ness",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"shyness\" and mark the syllable and circle the suffix."
      },
      {
        "number": 3,
        "word": "windy",
        "baseword": "wind",
        "suffix": "y",
        "tapUnits": [
          {
            "text": "w"
          },
          {
            "text": "i"
          },
          {
            "text": "n"
          },
          {
            "text": "d"
          },
          {
            "text": "y",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"windy\" and mark the syllable and circle the suffix."
      },
      {
        "number": 4,
        "word": "lobby",
        "tapUnits": [
          {
            "text": "lob",
            "isDigraphOrSuffix": true
          },
          {
            "text": "by",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"lobby\" and scoop the word and mark the two syllables."
      },
      {
        "number": 5,
        "word": "menu",
        "tapUnits": [
          {
            "text": "men",
            "isDigraphOrSuffix": true
          },
          {
            "text": "u",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"menu\" and scoop the word and mark the two syllables."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "every"
      },
      {
        "number": 2,
        "word": "something"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "His family is trying to find a large hotel in the city.",
                "words": [
                        "His",
                        "family",
                        "is",
                        "trying",
                        "to",
                        "find",
                        "a",
                        "large",
                        "hotel",
                        "in",
                        "the",
                        "city"
                ],
                "phoneticWords": [
                        "trying",
                        "find",
                        "hotel"
                ],
                "trickWords": [
                        "family",
                        "large",
                        "city"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "We depend on firemen to protect us.",
                "words": [
                        "We",
                        "depend",
                        "on",
                        "firemen",
                        "to",
                        "protect",
                        "us"
                ],
                "phoneticWords": [
                        "depend",
                        "protect"
                ],
                "trickWords": [],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 7,
    "title": "Fundations: End of Unit 7 Test",
    "totalScore": 25
  },
  "level-2-unit-8": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u012b/",
        "answers": [
          "i-e",
          "i",
          "y"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u016b/",
        "answers": [
          "u-e",
          "u"
        ]
      },
      {
        "number": 3,
        "prompt": "/ar/",
        "answers": [
          "ar"
        ]
      },
      {
        "number": 4,
        "prompt": "/or/",
        "answers": [
          "or",
          "ore"
        ]
      },
      {
        "number": 5,
        "prompt": "/kw/",
        "answers": [
          "qu"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "reported",
        "baseword": "report",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "re",
            "isDigraphOrSuffix": true
          },
          {
            "text": "port",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"reported\" and scoop the word and mark the two syllables. Circle the suffix."
      },
      {
        "number": 2,
        "word": "explore",
        "tapUnits": [
          {
            "text": "ex",
            "isDigraphOrSuffix": true
          },
          {
            "text": "plore",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"explore\" and scoop the word and mark the two syllables."
      },
      {
        "number": 3,
        "word": "scar",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "c"
          },
          {
            "text": "ar",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"scar\" and scoop the word and mark the syllable."
      },
      {
        "number": 4,
        "word": "garlic",
        "tapUnits": [
          {
            "text": "gar",
            "isDigraphOrSuffix": true
          },
          {
            "text": "lic",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"garlic\" and scoop the word and mark the two syllables."
      },
      {
        "number": 5,
        "word": "porches",
        "baseword": "porch",
        "suffix": "es",
        "tapUnits": [
          {
            "text": "p"
          },
          {
            "text": "or",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "es",
            "isDigraphOrSuffix": true,
            "type": "suffix",
            "tileType": "suffix"
          }
        ],
        "markingDescription": "Spell the word, \"porches\" and scoop the word and mark the syllable. Circle the suffix."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "world"
      },
      {
        "number": 2,
        "word": "answer"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "The army marched to many different spots.",
                "words": [
                        "The",
                        "army",
                        "marched",
                        "to",
                        "many",
                        "different",
                        "spots"
                ],
                "phoneticWords": [
                        "marched",
                        "spots"
                ],
                "trickWords": [
                        "many",
                        "different"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "The cart will carry the acorns from the garden.",
                "words": [
                        "The",
                        "cart",
                        "will",
                        "carry",
                        "the",
                        "acorns",
                        "from",
                        "the",
                        "garden"
                ],
                "phoneticWords": [
                        "cart",
                        "acorns",
                        "garden"
                ],
                "trickWords": [
                        "carry"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 8,
    "title": "Fundations: End of Unit 8 Test",
    "totalScore": 25
  },
  "level-2-unit-9": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u0113/",
        "answers": [
          "e-e",
          "e",
          "y"
        ]
      },
      {
        "number": 2,
        "prompt": "/er/",
        "answers": [
          "er",
          "ir",
          "ur"
        ]
      },
      {
        "number": 3,
        "prompt": "/ar/",
        "answers": [
          "ar"
        ]
      },
      {
        "number": 4,
        "prompt": "/or/",
        "answers": [
          "or",
          "ore"
        ]
      },
      {
        "number": 5,
        "prompt": "/w/",
        "answers": [
          "w",
          "wh"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "dirty",
        "baseword": "dirt",
        "suffix": "y",
        "tapUnits": [
          {
            "text": "d"
          },
          {
            "text": "ir",
            "isDigraphOrSuffix": true
          },
          {
            "text": "t"
          },
          {
            "text": "y",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"dirty\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 2,
        "word": "chapter",
        "tapUnits": [
          {
            "text": "chap",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ter",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"chapter\" and scoop the word and mark the two syllables."
      },
      {
        "number": 3,
        "word": "sturdy",
        "tapUnits": [
          {
            "text": "stur",
            "isDigraphOrSuffix": true
          },
          {
            "text": "dy",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"sturdy\" and scoop the word and mark the two syllables."
      },
      {
        "number": 4,
        "word": "corner",
        "tapUnits": [
          {
            "text": "cor",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ner",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"corner\" and scoop the word and mark the two syllables."
      },
      {
        "number": 5,
        "word": "termite",
        "tapUnits": [
          {
            "text": "ter",
            "isDigraphOrSuffix": true
          },
          {
            "text": "mite",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"termite\" and scoop the word and mark the two syllables."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "brother"
      },
      {
        "number": 2,
        "word": "earth"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "You will learn cursive in the third term.",
                "words": [
                        "You",
                        "will",
                        "learn",
                        "cursive",
                        "in",
                        "the",
                        "third",
                        "term"
                ],
                "phoneticWords": [
                        "cursive",
                        "third",
                        "term"
                ],
                "trickWords": [
                        "learn"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "My mother and father have returned from church.",
                "words": [
                        "My",
                        "mother",
                        "and",
                        "father",
                        "have",
                        "returned",
                        "from",
                        "church"
                ],
                "phoneticWords": [
                        "returned",
                        "church"
                ],
                "trickWords": [
                        "mother",
                        "father"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 9,
    "title": "Fundations: End of Unit 9 Test",
    "totalScore": 25
  },
  "level-2-unit-10": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u0101/",
        "answers": [
          "a-e",
          "a",
          "ai",
          "ay"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u012b/",
        "answers": [
          "i-e",
          "i",
          "y"
        ]
      },
      {
        "number": 3,
        "prompt": "/er/",
        "answers": [
          "er",
          "ir",
          "ur"
        ]
      },
      {
        "number": 4,
        "prompt": "/k/",
        "answers": [
          "c",
          "k",
          "ck"
        ]
      },
      {
        "number": 5,
        "prompt": "/ong/",
        "answers": [
          "ong"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "fainted",
        "baseword": "faint",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "f"
          },
          {
            "text": "ai",
            "isDigraphOrSuffix": true
          },
          {
            "text": "n"
          },
          {
            "text": "t"
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"fainted\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 2,
        "word": "replay",
        "tapUnits": [
          {
            "text": "re",
            "isDigraphOrSuffix": true
          },
          {
            "text": "play",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"replay\" and scoop the word and mark the two syllables."
      },
      {
        "number": 3,
        "word": "trays",
        "baseword": "tray",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "r"
          },
          {
            "text": "ay",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"trays\" and scoop the word and mark the syllable."
      },
      {
        "number": 4,
        "word": "explain",
        "tapUnits": [
          {
            "text": "ex",
            "isDigraphOrSuffix": true
          },
          {
            "text": "plain",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"explain\" and scoop the word and mark the two syllables."
      },
      {
        "number": 5,
        "word": "crane",
        "tapUnits": [
          {
            "text": "c"
          },
          {
            "text": "r"
          },
          {
            "text": "a-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "n"
          }
        ],
        "markingDescription": "Spell the word, \"crane\" and scoop the word and mark the syllable."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "America"
      },
      {
        "number": 2,
        "word": "country"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "I thought his painting of the school was great.",
                "words": [
                        "I",
                        "thought",
                        "his",
                        "painting",
                        "of",
                        "the",
                        "school",
                        "was",
                        "great"
                ],
                "phoneticWords": [
                        "painting"
                ],
                "trickWords": [
                        "thought",
                        "school",
                        "great"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "We had to wait in the rain when the train was delayed.",
                "words": [
                        "We",
                        "had",
                        "to",
                        "wait",
                        "in",
                        "the",
                        "rain",
                        "when",
                        "the",
                        "train",
                        "was",
                        "delayed"
                ],
                "phoneticWords": [
                        "wait",
                        "rain",
                        "train",
                        "delayed"
                ],
                "trickWords": [],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 10,
    "title": "Fundations: End of Unit 10 Test",
    "totalScore": 25
  },
  "level-2-unit-11": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u0113/",
        "answers": [
          "e-e",
          "e",
          "y",
          "ee",
          "ea",
          "ey"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u0101/",
        "answers": [
          "a-e",
          "a",
          "ai",
          "ay"
        ]
      },
      {
        "number": 3,
        "prompt": "/or/",
        "answers": [
          "or",
          "ore"
        ]
      },
      {
        "number": 4,
        "prompt": "/ch/",
        "answers": [
          "ch"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u0113/",
        "answers": [
          "y"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "chimney",
        "tapUnits": [
          {
            "text": "chim",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ney",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"chimney\" and scoop the word and mark the two syllables."
      },
      {
        "number": 2,
        "word": "completely",
        "baseword": "complete",
        "suffix": "ly",
        "tapUnits": [
          {
            "text": "com",
            "isDigraphOrSuffix": true
          },
          {
            "text": "plete",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ly",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"completely\" and scoop the word and mark the two syllables. Circle the suffix."
      },
      {
        "number": 3,
        "word": "cheap",
        "tapUnits": [
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ea",
            "isDigraphOrSuffix": true
          },
          {
            "text": "p"
          }
        ],
        "markingDescription": "Spell the word, \"cheap\" and scoop the word and mark the syllable."
      },
      {
        "number": 4,
        "word": "speeches",
        "baseword": "speech",
        "suffix": "es",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "p"
          },
          {
            "text": "ee",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "es",
            "isDigraphOrSuffix": true,
            "type": "suffix",
            "tileType": "suffix"
          }
        ],
        "markingDescription": "Spell the word, \"speeches\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 5,
        "word": "teacher",
        "baseword": "teach",
        "suffix": "er",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "ea",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "er",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"teacher\" and scoop the word and mark the syllable. Circle the suffix."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "whose"
      },
      {
        "number": 2,
        "word": "son"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "The hockey team won thirteen games.",
                "words": [
                        "The",
                        "hockey",
                        "team",
                        "won",
                        "thirteen",
                        "games"
                ],
                "phoneticWords": [
                        "hockey",
                        "team",
                        "thirteen",
                        "games"
                ],
                "trickWords": [
                        "won"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "The breakfast feast is ready!",
                "words": [
                        "The",
                        "breakfast",
                        "feast",
                        "is",
                        "ready"
                ],
                "phoneticWords": [
                        "feast"
                ],
                "trickWords": [
                        "breakfast",
                        "ready"
                ],
                "punctuation": "!"
        }

    ],
    "level": 2,
    "unit": 11,
    "title": "Fundations: End of Unit 11 Test",
    "totalScore": 25
  },
  "level-2-unit-12": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/oi/",
        "answers": [
          "oi",
          "oy"
        ]
      },
      {
        "number": 2,
        "prompt": "/er/",
        "answers": [
          "er",
          "ir",
          "ur"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u0113/",
        "answers": [
          "e-e",
          "e",
          "y",
          "ee",
          "ea",
          "ey"
        ]
      },
      {
        "number": 4,
        "prompt": "/th/",
        "answers": [
          "th"
        ]
      },
      {
        "number": 5,
        "prompt": "/o\u0307l/",
        "answers": [
          "all"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "spoiled",
        "baseword": "spoil",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "p"
          },
          {
            "text": "oi",
            "isDigraphOrSuffix": true
          },
          {
            "text": "l"
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"spoiled\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 2,
        "word": "destroy",
        "tapUnits": [
          {
            "text": "de",
            "isDigraphOrSuffix": true
          },
          {
            "text": "stroy",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"destroy\" and scoop the word and mark the two syllables."
      },
      {
        "number": 3,
        "word": "joining",
        "baseword": "join",
        "suffix": "ing",
        "tapUnits": [
          {
            "text": "j"
          },
          {
            "text": "oi",
            "isDigraphOrSuffix": true
          },
          {
            "text": "n"
          },
          {
            "text": "ing",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"joining\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 4,
        "word": "joyful",
        "baseword": "joy",
        "suffix": "ful",
        "tapUnits": [
          {
            "text": "j"
          },
          {
            "text": "oy",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ful",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"joyful\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 5,
        "word": "scarf",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "c"
          },
          {
            "text": "ar",
            "isDigraphOrSuffix": true
          },
          {
            "text": "f"
          }
        ],
        "markingDescription": "Spell the word, \"scarf\" and scoop the word and mark the syllable."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "write"
      },
      {
        "number": 2,
        "word": "their"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "She had an enjoyable day at her favorite ocean beach.",
                "words": [
                        "She",
                        "had",
                        "an",
                        "enjoyable",
                        "day",
                        "at",
                        "her",
                        "favorite",
                        "ocean",
                        "beach"
                ],
                "phoneticWords": [
                        "enjoyable",
                        "day",
                        "beach"
                ],
                "trickWords": [
                        "favorite",
                        "ocean"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "The soil is moist early in the morning.",
                "words": [
                        "The",
                        "soil",
                        "is",
                        "moist",
                        "early",
                        "in",
                        "the",
                        "morning"
                ],
                "phoneticWords": [
                        "soil",
                        "moist"
                ],
                "trickWords": [
                        "early"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 12,
    "title": "Fundations: End of Unit 12 Test",
    "totalScore": 25
  },
  "level-2-unit-13": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u014d/",
        "answers": [
          "o-e",
          "o",
          "oa",
          "oe",
          "ow"
        ]
      },
      {
        "number": 2,
        "prompt": "/ar/",
        "answers": [
          "ar"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u012b/",
        "answers": [
          "i-e",
          "i",
          "y"
        ]
      },
      {
        "number": 4,
        "prompt": "/w/",
        "answers": [
          "w",
          "wh"
        ]
      },
      {
        "number": 5,
        "prompt": "/v-e/",
        "answers": [
          "ive"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "coast",
        "tapUnits": [
          {
            "text": "c"
          },
          {
            "text": "oa",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s"
          },
          {
            "text": "t"
          }
        ],
        "markingDescription": "Spell the word, \"coast\" and scoop the word and mark the syllable."
      },
      {
        "number": 2,
        "word": "showed",
        "baseword": "show",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ow",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"showed\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 3,
        "word": "below",
        "tapUnits": [
          {
            "text": "be",
            "isDigraphOrSuffix": true
          },
          {
            "text": "low",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"below\" and scoop the word and mark the two syllables."
      },
      {
        "number": 4,
        "word": "toes",
        "baseword": "toe",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "oe",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"toes\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 5,
        "word": "explode",
        "tapUnits": [
          {
            "text": "ex",
            "isDigraphOrSuffix": true
          },
          {
            "text": "plode",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"explode\" and scoop the word and mark the two syllables."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "beautiful"
      },
      {
        "number": 2,
        "word": "lose"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "My cousin met her coach on Tuesday.",
                "words": [
                        "My",
                        "cousin",
                        "met",
                        "her",
                        "coach",
                        "on",
                        "Tuesday"
                ],
                "phoneticWords": [
                        "coach"
                ],
                "trickWords": [
                        "cousin",
                        "Tuesday"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "A storm will bring snow to the coast tomorrow.",
                "words": [
                        "A",
                        "storm",
                        "will",
                        "bring",
                        "snow",
                        "to",
                        "the",
                        "coast",
                        "tomorrow"
                ],
                "phoneticWords": [
                        "storm",
                        "bring",
                        "snow",
                        "coast"
                ],
                "trickWords": [
                        "tomorrow"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 13,
    "title": "Fundations: End of Unit 13 Test",
    "totalScore": 25
  },
  "level-2-unit-14": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/ow/",
        "answers": [
          "ou",
          "ow"
        ]
      },
      {
        "number": 2,
        "prompt": "/er/",
        "answers": [
          "er",
          "ir",
          "ur"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u014d/",
        "answers": [
          "o-e",
          "o",
          "oa",
          "oe",
          "ow"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u0101/",
        "answers": [
          "a-e",
          "a",
          "ai",
          "ay"
        ]
      },
      {
        "number": 5,
        "prompt": "/ks/",
        "answers": [
          "x"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "cloudy",
        "baseword": "cloud",
        "suffix": "y",
        "tapUnits": [
          {
            "text": "c"
          },
          {
            "text": "l"
          },
          {
            "text": "ou",
            "isDigraphOrSuffix": true
          },
          {
            "text": "d"
          },
          {
            "text": "y",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"cloudy\" and scoop the word and mark the syllable."
      },
      {
        "number": 2,
        "word": "showering",
        "baseword": "shower",
        "suffix": "ing",
        "tapUnits": [
          {
            "text": "show",
            "isDigraphOrSuffix": true
          },
          {
            "text": "er",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ing",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"showering\" and scoop the word and mark the two syllables. Circle the suffix."
      },
      {
        "number": 3,
        "word": "drown",
        "tapUnits": [
          {
            "text": "d"
          },
          {
            "text": "r"
          },
          {
            "text": "ow",
            "isDigraphOrSuffix": true
          },
          {
            "text": "n"
          }
        ],
        "markingDescription": "Spell the word, \"drown\" and scoop the word and mark the syllable."
      },
      {
        "number": 4,
        "word": "outline",
        "tapUnits": [
          {
            "text": "out",
            "isDigraphOrSuffix": true
          },
          {
            "text": "line",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"outline\" and scoop the word and mark the two syllables."
      },
      {
        "number": 5,
        "word": "sounded",
        "baseword": "sound",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "ou",
            "isDigraphOrSuffix": true
          },
          {
            "text": "n"
          },
          {
            "text": "d"
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"sounded\" and scoop the word and mark the syllable. Circle the suffix."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "Thursday"
      },
      {
        "number": 2,
        "word": "bought"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "Jim found a piece of candy on the ground.",
                "words": [
                        "Jim",
                        "found",
                        "a",
                        "piece",
                        "of",
                        "candy",
                        "on",
                        "the",
                        "ground"
                ],
                "phoneticWords": [
                        "found",
                        "candy",
                        "ground"
                ],
                "trickWords": [
                        "piece"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "He brought the lost hound to the pound on Wednesday.",
                "words": [
                        "He",
                        "brought",
                        "the",
                        "lost",
                        "hound",
                        "to",
                        "the",
                        "pound",
                        "on",
                        "Wednesday"
                ],
                "phoneticWords": [
                        "hound",
                        "pound"
                ],
                "trickWords": [
                        "brought",
                        "Wednesday"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 14,
    "title": "Fundations: End of Unit 14 Test",
    "totalScore": 25
  },
  "level-2-unit-15": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/oo/",
        "answers": [
          "u-e",
          "u",
          "ue",
          "ou",
          "oo",
          "ew"
        ]
      },
      {
        "number": 2,
        "prompt": "/ow/",
        "answers": [
          "ou",
          "ow"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u014f\u014f/",
        "answers": [
          "oo"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u016b/",
        "answers": [
          "u-e",
          "u",
          "ue"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u0113/",
        "answers": [
          "e-e",
          "e",
          "y",
          "ee",
          "ea",
          "ey"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "chewing",
        "baseword": "chew",
        "suffix": "ing",
        "tapUnits": [
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ew",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ing",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"chewing\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 2,
        "word": "groups",
        "baseword": "group",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "g"
          },
          {
            "text": "r"
          },
          {
            "text": "ou",
            "isDigraphOrSuffix": true
          },
          {
            "text": "p"
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"groups\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 3,
        "word": "continue",
        "tapUnits": [
          {
            "text": "con",
            "isDigraphOrSuffix": true
          },
          {
            "text": "tin",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ue",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"continue\" and scoop the word and mark the three syllables."
      },
      {
        "number": 4,
        "word": "spooky",
        "baseword": "spook",
        "suffix": "y",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "p"
          },
          {
            "text": "oo",
            "isDigraphOrSuffix": true
          },
          {
            "text": "k"
          },
          {
            "text": "y",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"spooky\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 5,
        "word": "hooked",
        "baseword": "hook",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "h"
          },
          {
            "text": "oo",
            "isDigraphOrSuffix": true
          },
          {
            "text": "k"
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"hooked\" and scoop the word and mark the syllable. Circle the suffix."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "January"
      },
      {
        "number": 2,
        "word": "February"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "If it is hot enough in July the special flowers will bloom.",
                "words": [
                        "If",
                        "it",
                        "is",
                        "hot",
                        "enough",
                        "in",
                        "July",
                        "the",
                        "special",
                        "flowers",
                        "will",
                        "bloom"
                ],
                "phoneticWords": [
                        "flowers",
                        "bloom"
                ],
                "trickWords": [
                        "enough",
                        "July",
                        "special"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "It is foolish to argue with the umpire.",
                "words": [
                        "It",
                        "is",
                        "foolish",
                        "to",
                        "argue",
                        "with",
                        "the",
                        "umpire"
                ],
                "phoneticWords": [
                        "foolish",
                        "argue",
                        "umpire"
                ],
                "trickWords": [],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 15,
    "title": "Fundations: End of Unit 15 Test",
    "totalScore": 25
  },
  "level-2-unit-16": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/o\u0307/",
        "answers": [
          "au",
          "aw"
        ]
      },
      {
        "number": 2,
        "prompt": "/ow/",
        "answers": [
          "ou",
          "ow"
        ]
      },
      {
        "number": 3,
        "prompt": "/oo/",
        "answers": [
          "u-e",
          "u",
          "ue",
          "ew",
          "oo",
          "ou"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u0101/",
        "answers": [
          "a-e",
          "a",
          "ai",
          "ay"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u014d/",
        "answers": [
          "o-e",
          "o",
          "oa",
          "oe",
          "ow"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "launch",
        "tapUnits": [
          {
            "text": "l"
          },
          {
            "text": "au",
            "isDigraphOrSuffix": true
          },
          {
            "text": "n"
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"launch\" and scoop the word and mark the syllable."
      },
      {
        "number": 2,
        "word": "straw",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "t"
          },
          {
            "text": "r"
          },
          {
            "text": "aw",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"straw\" and scoop the word and mark the syllable."
      },
      {
        "number": 3,
        "word": "astronaut",
        "tapUnits": [
          {
            "text": "as",
            "isDigraphOrSuffix": true
          },
          {
            "text": "tro",
            "isDigraphOrSuffix": true
          },
          {
            "text": "naut",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"astronaut\" and scoop the word and mark the three syllables."
      },
      {
        "number": 4,
        "word": "haunted",
        "baseword": "haunt",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "h"
          },
          {
            "text": "au",
            "isDigraphOrSuffix": true
          },
          {
            "text": "n"
          },
          {
            "text": "t"
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"haunted\" and scoop the word and mark the syllable. Circle the suffix."
      },
      {
        "number": 5,
        "word": "crawled",
        "baseword": "crawl",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "c"
          },
          {
            "text": "r"
          },
          {
            "text": "aw",
            "isDigraphOrSuffix": true
          },
          {
            "text": "l"
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"crawled\" and scoop the word and mark the syllable. Circle the suffix."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "special"
      },
      {
        "number": 2,
        "word": "August"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "I saw a hawk with sharp claws by the water.",
                "words": [
                        "I",
                        "saw",
                        "a",
                        "hawk",
                        "with",
                        "sharp",
                        "claws",
                        "by",
                        "the",
                        "water"
                ],
                "phoneticWords": [
                        "saw",
                        "hawk",
                        "sharp",
                        "claws"
                ],
                "trickWords": [
                        "water"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "My daughter will laugh at the clown.",
                "words": [
                        "My",
                        "daughter",
                        "will",
                        "laugh",
                        "at",
                        "the",
                        "clown"
                ],
                "phoneticWords": [
                        "clown"
                ],
                "trickWords": [
                        "daughter",
                        "laugh"
                ],
                "punctuation": "."
        }

    ],
    "level": 2,
    "unit": 16,
    "title": "Fundations: End of Unit 16 Test",
    "totalScore": 25
  },
  "level-2-unit-17": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u016b/",
        "answers": [
          "u-e",
          "u",
          "ue"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u014f\u014f/",
        "answers": [
          "oo"
        ]
      },
      {
        "number": 3,
        "prompt": "/o\u0307/",
        "answers": [
          "au",
          "aw"
        ]
      },
      {
        "number": 4,
        "prompt": "/z/",
        "answers": [
          "z",
          "s"
        ]
      },
      {
        "number": 5,
        "prompt": "/ul/",
        "answers": [
          "-le"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "stumble",
        "tapUnits": [
          {
            "text": "stum",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ble",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"stumble\" and scoop the word and mark the two syllables."
      },
      {
        "number": 2,
        "word": "marbles",
        "baseword": "marble",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "mar",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ble",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"marbles\" and scoop the word and mark the two syllables. Circle the suffix."
      },
      {
        "number": 3,
        "word": "snuggle",
        "tapUnits": [
          {
            "text": "snug",
            "isDigraphOrSuffix": true
          },
          {
            "text": "gle",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"snuggle\" and scoop the word and mark the two syllables."
      },
      {
        "number": 4,
        "word": "sparkles",
        "baseword": "sparkle",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "spar",
            "isDigraphOrSuffix": true
          },
          {
            "text": "kle",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"sparkles\" and scoop the word and mark the two syllables. Circle the suffix."
      },
      {
        "number": 5,
        "word": "cable",
        "tapUnits": [
          {
            "text": "ca",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ble",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"cable\" and scoop the word and mark the two syllables."
      }
    ],
    "trickWords": [
      {
        "number": 1,
        "word": "Thursday"
      },
      {
        "number": 2,
        "word": "Saturday"
      }
    ],
    "sentences": [

        {
                "number": 1,
                "text": "The young child had trouble with a couple of the simple puzzles.",
                "words": [
                        "The",
                        "young",
                        "child",
                        "had",
                        "trouble",
                        "with",
                        "a",
                        "couple",
                        "of",
                        "the",
                        "simple",
                        "puzzles"
                ],
                "phoneticWords": [
                        "simple",
                        "puzzles"
                ],
                "trickWords": [
                        "young",
                        "trouble",
                        "couple"
                ],
                "punctuation": "."
        },
        {
                "number": 2,
                "text": "Are the purple candles on the table yet?",
                "words": [
                        "Are",
                        "the",
                        "purple",
                        "candles",
                        "on",
                        "the",
                        "table",
                        "yet"
                ],
                "phoneticWords": [
                        "purple",
                        "candles",
                        "table"
                ],
                "trickWords": [],
                "punctuation": "?"
        }

    ],
    "level": 2,
    "unit": 17,
    "title": "Fundations: End of Unit 17 Test",
    "totalScore": 25
  }
};
