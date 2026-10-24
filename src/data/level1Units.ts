import { UnitTestData } from '../types/fundations';

export const level1Units: Record<string, UnitTestData> = {
  "level-1-unit-3": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/sh/",
        "answers": [
          "sh"
        ]
      },
      {
        "number": 2,
        "prompt": "/k/",
        "answers": [
          "c",
          "k",
          "ck"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u012d/",
        "answers": [
          "i"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u016d/",
        "answers": [
          "u"
        ]
      },
      {
        "number": 5,
        "prompt": "/ch/",
        "answers": [
          "ch"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "chat",
        "tapUnits": [
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "a"
          },
          {
            "text": "t"
          }
        ],
        "markingDescription": "Spell the word, \"chat\" and mark the digraph."
      },
      {
        "number": 2,
        "word": "dash",
        "tapUnits": [
          {
            "text": "d"
          },
          {
            "text": "a"
          },
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"dash\" and mark the digraph."
      },
      {
        "number": 3,
        "word": "math",
        "tapUnits": [
          {
            "text": "m"
          },
          {
            "text": "a"
          },
          {
            "text": "th",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"math\" and mark the digraph."
      },
      {
        "number": 4,
        "word": "chop",
        "tapUnits": [
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "o"
          },
          {
            "text": "p"
          }
        ],
        "markingDescription": "Spell the word, \"chop\" and mark the digraph."
      },
      {
        "number": 5,
        "word": "neck",
        "tapUnits": [
          {
            "text": "n"
          },
          {
            "text": "e"
          },
          {
            "text": "ck",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"neck\" and mark the digraph."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "We got into a hot bath.",
        "words": [
          "We",
          "got",
          "into",
          "a",
          "hot",
          "bath"
        ],
        "phoneticWords": [
          "got",
          "hot",
          "bath"
        ],
        "trickWords": [
          "We",
          "into",
          "a"
        ],
        "punctuation": "."
      },
      {
        "number": 2,
        "text": "Did Jack rush to get the bus?",
        "words": [
          "Did",
          "Jack",
          "rush",
          "to",
          "get",
          "the",
          "bus"
        ],
        "phoneticWords": [
          "Did",
          "Jack",
          "rush",
          "get",
          "bus"
        ],
        "trickWords": [
          "to",
          "the"
        ],
        "punctuation": "?"
      }
    ],
    "level": 1,
    "unit": 3,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-4": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/ch/",
        "answers": [
          "ch"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u012d/",
        "answers": [
          "i"
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
        "prompt": "/\u0103/",
        "answers": [
          "a"
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
        "word": "chill",
        "tapUnits": [
          {
            "text": "ch",
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
        "markingDescription": "Spell the word, \"chill\" and mark the bonus letters."
      },
      {
        "number": 2,
        "word": "lash",
        "tapUnits": [
          {
            "text": "l"
          },
          {
            "text": "a"
          },
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"lash\" and mark the digraph."
      },
      {
        "number": 3,
        "word": "puff",
        "tapUnits": [
          {
            "text": "p"
          },
          {
            "text": "u"
          },
          {
            "text": "ff",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"puff\" and mark the bonus letters."
      },
      {
        "number": 4,
        "word": "fall",
        "tapUnits": [
          {
            "text": "f"
          },
          {
            "text": "all",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word \"fall\" and mark the bonus letters."
      },
      {
        "number": 5,
        "word": "lock",
        "tapUnits": [
          {
            "text": "l"
          },
          {
            "text": "o"
          },
          {
            "text": "ck",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word \"lock\" and mark the digraph."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "They will toss the ball to me.",
        "words": [
          "They",
          "will",
          "toss",
          "the",
          "ball",
          "to",
          "me"
        ],
        "phoneticWords": [
          "will",
          "toss",
          "ball"
        ],
        "trickWords": [
          "They",
          "the",
          "to",
          "me"
        ],
        "punctuation": "."
      },
      {
        "number": 2,
        "text": "Your pack is a mess!",
        "words": [
          "Your",
          "pack",
          "is",
          "a",
          "mess"
        ],
        "phoneticWords": [
          "pack",
          "mess"
        ],
        "trickWords": [
          "Your",
          "is",
          "a"
        ],
        "punctuation": "!"
      }
    ],
    "level": 1,
    "unit": 4,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-5": {
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
        "prompt": "/ks/",
        "answers": [
          "x"
        ]
      },
      {
        "number": 3,
        "prompt": "/am/",
        "answers": [
          "am"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u0115/",
        "answers": [
          "e"
        ]
      },
      {
        "number": 5,
        "prompt": "/an/",
        "answers": [
          "an"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "quick",
        "tapUnits": [
          {
            "text": "qu",
            "isDigraphOrSuffix": true
          },
          {
            "text": "i"
          },
          {
            "text": "ck",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"quick\" and mark the digraph."
      },
      {
        "number": 2,
        "word": "man",
        "tapUnits": [
          {
            "text": "m"
          },
          {
            "text": "an",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"man\" and box the glued sound."
      },
      {
        "number": 3,
        "word": "fan",
        "tapUnits": [
          {
            "text": "f"
          },
          {
            "text": "an",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"fan\" and box the glued sound."
      },
      {
        "number": 4,
        "word": "shell",
        "tapUnits": [
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          },
          {
            "text": "e"
          },
          {
            "text": "ll",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"shell\" and mark the bonus letters."
      },
      {
        "number": 5,
        "word": "ham",
        "tapUnits": [
          {
            "text": "h"
          },
          {
            "text": "am",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"ham\" and box the glued sound."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "They ran from the back of the mall.",
        "words": [
          "They",
          "ran",
          "from",
          "the",
          "back",
          "of",
          "the",
          "mall"
        ],
        "phoneticWords": [
          "ran",
          "back",
          "mall"
        ],
        "trickWords": [
          "They",
          "from",
          "the",
          "of"
        ],
        "punctuation": "."
      },
      {
        "number": 2,
        "text": "Does she have the pan for Rick?",
        "words": [
          "Does",
          "she",
          "have",
          "the",
          "pan",
          "for",
          "Rick"
        ],
        "phoneticWords": [
          "pan",
          "Rick"
        ],
        "trickWords": [
          "Does",
          "she",
          "have",
          "the",
          "for"
        ],
        "punctuation": "?"
      }
    ],
    "level": 1,
    "unit": 5,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-6": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/kw/",
        "answers": [
          "qu"
        ]
      },
      {
        "number": 2,
        "prompt": "/z/",
        "answers": [
          "s",
          "z"
        ]
      },
      {
        "number": 3,
        "prompt": "/th/",
        "answers": [
          "th"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u0103/",
        "answers": [
          "a"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u014f/",
        "answers": [
          "o"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "tells",
        "baseword": "tell",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "e"
          },
          {
            "text": "ll",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word \"tells\" and underline the base word and circle the suffix."
      },
      {
        "number": 2,
        "word": "ships",
        "baseword": "ship",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "sh",
            "isDigraphOrSuffix": true
          },
          {
            "text": "i"
          },
          {
            "text": "p"
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word \"ships\" and underline the base word and circle the suffix."
      },
      {
        "number": 3,
        "word": "chins",
        "baseword": "chin",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          },
          {
            "text": "i"
          },
          {
            "text": "n"
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word \"chins\" and underline the base word and circle the suffix."
      },
      {
        "number": 4,
        "word": "quits",
        "baseword": "quit",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "qu",
            "isDigraphOrSuffix": true
          },
          {
            "text": "i"
          },
          {
            "text": "t"
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word \"quits\" and underline the base word and circle the suffix."
      },
      {
        "number": 5,
        "word": "walls",
        "baseword": "wall",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "w"
          },
          {
            "text": "all",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word \"walls\" and underline the base word and circle the suffix."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "Who said the kids had chips and dip?",
        "words": [
          "Who",
          "said",
          "the",
          "kids",
          "had",
          "chips",
          "and",
          "dip"
        ],
        "phoneticWords": [
          "kids",
          "had",
          "chips",
          "dip"
        ],
        "trickWords": [
          "Who",
          "said",
          "the",
          "and"
        ],
        "punctuation": "?"
      },
      {
        "number": 2,
        "text": "Where are your tan socks?",
        "words": [
          "Where",
          "are",
          "your",
          "tan",
          "socks"
        ],
        "phoneticWords": [
          "tan",
          "socks"
        ],
        "trickWords": [
          "Where",
          "are",
          "your"
        ],
        "punctuation": "?"
      }
    ],
    "level": 1,
    "unit": 6,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-7": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/ank/",
        "answers": [
          "ank"
        ]
      },
      {
        "number": 2,
        "prompt": "/z/",
        "answers": [
          "z",
          "s"
        ]
      },
      {
        "number": 3,
        "prompt": "/ung/",
        "answers": [
          "ung"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u0115/",
        "answers": [
          "e"
        ]
      },
      {
        "number": 5,
        "prompt": "/ink/",
        "answers": [
          "ink"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "thank",
        "tapUnits": [
          {
            "text": "th",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ank",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"thank\", and box the glued sound."
      },
      {
        "number": 2,
        "word": "wings",
        "baseword": "wing",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "w"
          },
          {
            "text": "ing",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"wings\" and box the glued sound."
      },
      {
        "number": 3,
        "word": "rink",
        "tapUnits": [
          {
            "text": "r"
          },
          {
            "text": "ink",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"rink\" and box the glued sound."
      },
      {
        "number": 4,
        "word": "songs",
        "baseword": "song",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "ong",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"songs\" and box the glued sound."
      },
      {
        "number": 5,
        "word": "things",
        "baseword": "thing",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "th",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ing",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"things\" and box the glued sound."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "Put my junk here.",
        "words": [
          "Put",
          "my",
          "junk",
          "here"
        ],
        "phoneticWords": [
          "junk"
        ],
        "trickWords": [
          "Put",
          "my",
          "here"
        ],
        "punctuation": "."
      },
      {
        "number": 2,
        "text": "The king also sang a very long song.",
        "words": [
          "The",
          "king",
          "also",
          "sang",
          "a",
          "very",
          "long",
          "song"
        ],
        "phoneticWords": [
          "king",
          "sang",
          "long",
          "song"
        ],
        "trickWords": [
          "The",
          "also",
          "a",
          "very"
        ],
        "punctuation": "."
      }
    ],
    "level": 1,
    "unit": 7,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-8": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/unk/",
        "answers": [
          "unk"
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
        "prompt": "/\u012d/",
        "answers": [
          "i"
        ]
      },
      {
        "number": 4,
        "prompt": "/o\u0307l/",
        "answers": [
          "all"
        ]
      },
      {
        "number": 5,
        "prompt": "/th/",
        "answers": [
          "th"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "stuff",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "t"
          },
          {
            "text": "u"
          },
          {
            "text": "ff",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"stuff\" and mark the blend."
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
        "markingDescription": "Spell the word, \"press\" and mark the blend."
      },
      {
        "number": 3,
        "word": "pinch",
        "tapUnits": [
          {
            "text": "p"
          },
          {
            "text": "i"
          },
          {
            "text": "n"
          },
          {
            "text": "ch",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"pinch\" and mark the digraph blend."
      },
      {
        "number": 4,
        "word": "brags",
        "baseword": "brag",
        "suffix": "s",
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
            "text": "g"
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"brags\" and mark the blend."
      },
      {
        "number": 5,
        "word": "vest",
        "tapUnits": [
          {
            "text": "v"
          },
          {
            "text": "e"
          },
          {
            "text": "s"
          },
          {
            "text": "t"
          }
        ],
        "markingDescription": "Spell the word, \"vest\" and mark the blend."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "Could Jill munch on her plum?",
        "words": [
          "Could",
          "Jill",
          "munch",
          "on",
          "her",
          "plum"
        ],
        "phoneticWords": [
          "Jill",
          "munch",
          "plum"
        ],
        "trickWords": [
          "Could",
          "on",
          "her"
        ],
        "punctuation": "?"
      },
      {
        "number": 2,
        "text": "Where did the dog sniff some clams?",
        "words": [
          "Where",
          "did",
          "the",
          "dog",
          "sniff",
          "some",
          "clams"
        ],
        "phoneticWords": [
          "did",
          "dog",
          "sniff",
          "clams"
        ],
        "trickWords": [
          "Where",
          "the",
          "some"
        ],
        "punctuation": "?"
      }
    ],
    "level": 1,
    "unit": 8,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-9": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/z/",
        "answers": [
          "z",
          "s"
        ]
      },
      {
        "number": 2,
        "prompt": "/ch/",
        "answers": [
          "ch"
        ]
      },
      {
        "number": 3,
        "prompt": "/ung/",
        "answers": [
          "ung"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u0115/",
        "answers": [
          "e"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u0103/",
        "answers": [
          "a"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "test",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "e"
          },
          {
            "text": "s"
          },
          {
            "text": "t"
          }
        ],
        "markingDescription": "Spell the word, \"test\" and mark the closed syllable."
      },
      {
        "number": 2,
        "word": "drill",
        "tapUnits": [
          {
            "text": "d"
          },
          {
            "text": "r"
          },
          {
            "text": "i"
          },
          {
            "text": "ll",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"drill\" and mark the closed syllable."
      },
      {
        "number": 3,
        "word": "puffs",
        "baseword": "puff",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "p"
          },
          {
            "text": "u"
          },
          {
            "text": "ff",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"puffs\" and mark the closed syllable."
      },
      {
        "number": 4,
        "word": "lunch",
        "tapUnits": [
          {
            "text": "l"
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
        "markingDescription": "Spell the word, \"lunch\" and mark the closed syllable."
      },
      {
        "number": 5,
        "word": "plugs",
        "baseword": "plug",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "p"
          },
          {
            "text": "l"
          },
          {
            "text": "u"
          },
          {
            "text": "g"
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"plugs\" and mark the closed syllable."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "Did you see his golf clubs?",
        "words": [
          "Did",
          "you",
          "see",
          "his",
          "golf",
          "clubs"
        ],
        "phoneticWords": [
          "golf",
          "clubs"
        ],
        "trickWords": [
          "Did",
          "you",
          "see",
          "his"
        ],
        "punctuation": "?"
      },
      {
        "number": 2,
        "text": "Each block was on the last bench.",
        "words": [
          "Each",
          "block",
          "was",
          "on",
          "the",
          "last",
          "bench"
        ],
        "phoneticWords": [
          "block",
          "last",
          "bench"
        ],
        "trickWords": [
          "Each",
          "was",
          "on",
          "the"
        ],
        "punctuation": "."
      }
    ],
    "level": 1,
    "unit": 9,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-10": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/sh/",
        "answers": [
          "sh"
        ]
      },
      {
        "number": 2,
        "prompt": "/ks/",
        "answers": [
          "x"
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
        "prompt": "/onk/",
        "answers": [
          "onk"
        ]
      },
      {
        "number": 5,
        "prompt": "/am/",
        "answers": [
          "am"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "slant",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "l"
          },
          {
            "text": "a"
          },
          {
            "text": "n"
          },
          {
            "text": "t"
          }
        ],
        "markingDescription": "Spell the word, \"slant\" and mark one blend."
      },
      {
        "number": 2,
        "word": "twist",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "w"
          },
          {
            "text": "i"
          },
          {
            "text": "s"
          },
          {
            "text": "t"
          }
        ],
        "markingDescription": "Spell the word, \"twist\" and mark one blend."
      },
      {
        "number": 3,
        "word": "slumps",
        "baseword": "slump",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "l"
          },
          {
            "text": "u"
          },
          {
            "text": "m"
          },
          {
            "text": "p"
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"slumps\" and mark one blend."
      },
      {
        "number": 4,
        "word": "blended",
        "baseword": "blend",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "l"
          },
          {
            "text": "e"
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
        "markingDescription": "Spell the word, \"blended\" and mark one blend."
      },
      {
        "number": 5,
        "word": "trusting",
        "baseword": "trust",
        "suffix": "ing",
        "tapUnits": [
          {
            "text": "t"
          },
          {
            "text": "r"
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
            "text": "ing",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"trusting\" and mark one blend."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "How could Frank get stung?",
        "words": [
          "How",
          "could",
          "Frank",
          "get",
          "stung"
        ],
        "phoneticWords": [
          "Frank",
          "stung"
        ],
        "trickWords": [
          "How",
          "could",
          "get"
        ],
        "punctuation": "?"
      },
      {
        "number": 2,
        "text": "I am thinking about the quiz.",
        "words": [
          "I",
          "am",
          "thinking",
          "about",
          "the",
          "quiz"
        ],
        "phoneticWords": [
          "thinking",
          "quiz"
        ],
        "trickWords": [
          "about",
          "the"
        ],
        "punctuation": "."
      }
    ],
    "level": 1,
    "unit": 10,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-11": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u0101/",
        "answers": [
          "a-e"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u0103/",
        "answers": [
          "a"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u012b/",
        "answers": [
          "i-e"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u016b/",
        "answers": [
          "u-e"
        ]
      },
      {
        "number": 5,
        "prompt": "/oo/",
        "answers": [
          "u-e"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "mule",
        "tapUnits": [
          {
            "text": "m"
          },
          {
            "text": "u-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "l"
          }
        ],
        "markingDescription": "Spell the word, \"mule\" and mark the vowel-consonant-e syllable."
      },
      {
        "number": 2,
        "word": "brave",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "r"
          },
          {
            "text": "a-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "v"
          }
        ],
        "markingDescription": "Spell the word, \"brave\" and mark the vowel-consonant-e syllable."
      },
      {
        "number": 3,
        "word": "joke",
        "tapUnits": [
          {
            "text": "j"
          },
          {
            "text": "o-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "k"
          }
        ],
        "markingDescription": "Spell the word, \"joke\" and mark the vowel-consonant-e syllable."
      },
      {
        "number": 4,
        "word": "grade",
        "tapUnits": [
          {
            "text": "g"
          },
          {
            "text": "r"
          },
          {
            "text": "a-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "d"
          }
        ],
        "markingDescription": "Spell the word, \"grade\" and mark the vowel-consonant-e syllable."
      },
      {
        "number": 5,
        "word": "smile",
        "tapUnits": [
          {
            "text": "s"
          },
          {
            "text": "m"
          },
          {
            "text": "i-e",
            "isDigraphOrSuffix": true
          },
          {
            "text": "l"
          }
        ],
        "markingDescription": "Spell the word, \"smile\" and mark the vowel-consonant-e syllable."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "Another cave is down by the lake.",
        "words": [
          "Another",
          "cave",
          "is",
          "down",
          "by",
          "the",
          "lake"
        ],
        "phoneticWords": [
          "cave",
          "lake"
        ],
        "trickWords": [
          "Another",
          "down",
          "by",
          "the"
        ],
        "punctuation": "."
      },
      {
        "number": 2,
        "text": "That friend tells the best jokes.",
        "words": [
          "That",
          "friend",
          "tells",
          "the",
          "best",
          "jokes"
        ],
        "phoneticWords": [
          "tells",
          "best",
          "jokes"
        ],
        "trickWords": [
          "That",
          "friend",
          "the"
        ],
        "punctuation": "."
      }
    ],
    "level": 1,
    "unit": 11,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-12": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/z/",
        "answers": [
          "z",
          "s"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u0101/",
        "answers": [
          "a-e"
        ]
      },
      {
        "number": 3,
        "prompt": "/k/",
        "answers": [
          "c",
          "k",
          "ck"
        ]
      },
      {
        "number": 4,
        "prompt": "/j/",
        "answers": [
          "j"
        ]
      },
      {
        "number": 5,
        "prompt": "/\u0103/",
        "answers": [
          "a"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "upset",
        "tapUnits": [
          {
            "text": "up",
            "isDigraphOrSuffix": true
          },
          {
            "text": "set",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"upset\" and underline the two different syllables."
      },
      {
        "number": 2,
        "word": "admit",
        "tapUnits": [
          {
            "text": "ad",
            "isDigraphOrSuffix": true
          },
          {
            "text": "mit",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"admit\" and underline the two different syllables."
      },
      {
        "number": 3,
        "word": "public",
        "tapUnits": [
          {
            "text": "pub",
            "isDigraphOrSuffix": true
          },
          {
            "text": "lic",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"public\" and underline the two different syllables."
      },
      {
        "number": 4,
        "word": "dislike",
        "tapUnits": [
          {
            "text": "dis",
            "isDigraphOrSuffix": true
          },
          {
            "text": "like",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"dislike\" and underline the two different syllables."
      },
      {
        "number": 5,
        "word": "reptile",
        "tapUnits": [
          {
            "text": "rep",
            "isDigraphOrSuffix": true
          },
          {
            "text": "tile",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"reptile\" and underline the two different syllables."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "People squinted into the sunshine.",
        "words": [
          "People",
          "squinted",
          "into",
          "the",
          "sunshine"
        ],
        "phoneticWords": [
          "squinted",
          "sunshine"
        ],
        "trickWords": [
          "People",
          "into",
          "the"
        ],
        "punctuation": "."
      },
      {
        "number": 2,
        "text": "Is there a cupcake inside your backpack?",
        "words": [
          "Is",
          "there",
          "a",
          "cupcake",
          "inside",
          "your",
          "backpack"
        ],
        "phoneticWords": [
          "cupcake",
          "inside",
          "backpack"
        ],
        "trickWords": [
          "there",
          "your"
        ],
        "punctuation": "?"
      }
    ],
    "level": 1,
    "unit": 12,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  },
  "level-1-unit-13": {
    "sounds": [
      {
        "number": 1,
        "prompt": "/\u0101/",
        "answers": [
          "a-e"
        ]
      },
      {
        "number": 2,
        "prompt": "/\u0103/",
        "answers": [
          "a"
        ]
      },
      {
        "number": 3,
        "prompt": "/\u012b/",
        "answers": [
          "i-e"
        ]
      },
      {
        "number": 4,
        "prompt": "/\u016b/",
        "answers": [
          "u-e"
        ]
      },
      {
        "number": 5,
        "prompt": "/oo/",
        "answers": [
          "u-e"
        ]
      }
    ],
    "words": [
      {
        "number": 1,
        "word": "expect",
        "baseword": "expect",
        "suffix": "ed",
        "tapUnits": [
          {
            "text": "ex",
            "isDigraphOrSuffix": true
          },
          {
            "text": "pect",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ed",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"expect\" and underline the base word and circle the suffix."
      },
      {
        "number": 2,
        "word": "glasses",
        "baseword": "glass",
        "suffix": "es",
        "tapUnits": [
          {
            "text": "g"
          },
          {
            "text": "l"
          },
          {
            "text": "a"
          },
          {
            "text": "ss",
            "isDigraphOrSuffix": true
          },
          {
            "text": "es",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"glasses\" and underline the base word and circle the suffix."
      },
      {
        "number": 3,
        "word": "benches",
        "baseword": "bench",
        "suffix": "es",
        "tapUnits": [
          {
            "text": "b"
          },
          {
            "text": "e"
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
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"benches\" and underline the base word and circle the suffix."
      },
      {
        "number": 4,
        "word": "disrupting",
        "baseword": "disrupt",
        "suffix": "ing",
        "tapUnits": [
          {
            "text": "dis",
            "isDigraphOrSuffix": true
          },
          {
            "text": "rupt",
            "isDigraphOrSuffix": true
          },
          {
            "text": "ing",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"disrupting\" and underline the base word and circle the suffix."
      },
      {
        "number": 5,
        "word": "athletes",
        "baseword": "athlete",
        "suffix": "s",
        "tapUnits": [
          {
            "text": "ath",
            "isDigraphOrSuffix": true
          },
          {
            "text": "lete",
            "isDigraphOrSuffix": true
          },
          {
            "text": "s",
            "isDigraphOrSuffix": true
          }
        ],
        "markingDescription": "Spell the word, \"athletes\" and underline the base word and circle the suffix."
      }
    ],
    "trickWords": [],
    "sentences": [
      {
        "number": 1,
        "text": "They invented that little game.",
        "words": [
          "They",
          "invented",
          "that",
          "little",
          "game"
        ],
        "phoneticWords": [
          "invented",
          "game"
        ],
        "trickWords": [
          "They",
          "little"
        ],
        "punctuation": "."
      },
      {
        "number": 2,
        "text": "Their dentist has new glasses.",
        "words": [
          "Their",
          "dentist",
          "has",
          "new",
          "glasses"
        ],
        "phoneticWords": [
          "dentist",
          "glasses"
        ],
        "trickWords": [
          "Their",
          "new"
        ],
        "punctuation": "."
      }
    ],
    "level": 1,
    "unit": 13,
    "title": "Fundations: End of Unit Test",
    "totalScore": 25
  }
};
