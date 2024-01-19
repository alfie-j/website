const wordList = [
    {
        word: "python",
        hint: "A famous programming language, mainly used in the development of apps."
    },
    {
        word: "guitar",
        hint: "A musical instrument, with strings."
    },
    {
        word: "aim",
        hint: "A purpose or intention."
    },
    {
        word: "venus",
        hint: "A planet of our solar system."
    },
    {
        word: "gold",
        hint: "A yellow precious metal."
    },
    {
        word: "ebay",
        hint: "An online shopping site."
    },
    {
        word: "matrix",
        hint: "A science fiction movie."
    },
    {
        word: "bugs",
        hint: "A problem related to programming."
    },
    {
        word: "avatar",
        hint: "An epic science fiction fantasy film."
    },
    {
        word: "gif",
        hint: "A file format for image."
    },
    {
        word: "mental",
        hint: "Related to the mind."
    },
    {
        word: "map",
        hint: "A diagram representation of an area."
    },
    {
        word: "island",
        hint: "A land surrounded by water on all 4 sides."
    },
    {
        word: "hockey",
        hint: "A famous outdoor game, sometimes played on ice."
    },
    {
        word: "chess",
        hint: "An indoor game."
    },
    {
        word: "github",
        hint: "Code hosting platform."
    },
    {
        word: "png",
        hint: "An image file format."
    },
    {
        word: "silver",
        hint: "Precious greyish-white metal."
    },
    {
        word: "mobile",
        hint: "An electronic device."
    },
    {
        word: "gpu",
        hint: "A computer component."
    },
    {
        word: "java",
        hint: "A complex programming language."
    },
    {
        word: "google",
        hint: "A famous search engine."
    },
    {
        word: "venice",
        hint: "A famous city of waters."
    },
    {
        word: "excel",
        hint: "A microsoft product for businesses."
    },
    {
        word: "mysql",
        hint: "A relational database system."
    },
    {
        word: "nepal",
        hint: "A developing country's name."
    },
    {
        word: "flute",
        hint: "A musical instrument."
    },
    {
        word: "crypto",
        hint: "A digital currency."
    },
    {
        word: "tesla",
        hint: "A unit of magnetic flux density."
    },
    {
        word: "mars",
        hint: "A planet of our solar system."
    },
    {
        word: "drink",
        hint: "The action of consuming something that is in a liquid state."
    },
    {
        word: "School",
        hint: "The name of an organisation that has educative faculty that trains the human resource."
    },
    {
        word: "water",
        hint: "A liquid that is vital for human survival."
    },
    {
        word: "air",
        hint: "Related to a gas."
    },
    {
        word: "idea",
        hint: "A thought or suggestion."
    },
    {
        word: "chocolate",
        hint: "A sweet, smooth confectionary."
    },
    {
        word: "svg",
        hint: "A vector image format."
    },
    {
        word: "jpeg",
        hint: "An image file format."
    },
    {
        word: "search",
        hint: "An act to find something."
    },
    {
        word: "key",
        hint: "A small piece of metal."
    },
    {
        word: "egypt",
        hint: "The name of the country that is host to one of the 7 wonders of the world."
    },
    {
        word: "joker",
        hint: "A psychological thriller film."
    },
    {
        word: "dubai",
        hint: "A developed city."
    },
    {
        word: "photo",
        hint: "A digital or physical representation of person or scene."
    },
    {
        word: "nile",
        hint: "The largest river in the world."
    },
    {
        word: "rain",
        hint: "Something that is produced by clouds."
    },
    {
        word: "addition",
        hint: "The process of combining numbers"
    },
    {
        word: "meeting",
        hint: "A mutual coming together of a group of people"
    },
    {
        word: "number",
        hint: "A mathematical representation device that is the root of math"
    },
    {
        word: "exchange",
        hint: "Barter or trade"
    },
    {
        word: "canvas",
        hint: "A stretched piece of cloth like material, presumably present on art boards"
    },
    {
        word: "garden",
        hint: "An area where vegetation is planted, usually for decoration or crop"
    },
    {
        word: "position",
        hint: "Location of something"
    },
    {
        word: "feather",
        hint: "flat appendages growing from a bird's skin"
    },
    {
        word: "comfort",
        hint: "A state of physical comfort and freedom from discomfort or restriction"
    },
    {
        word: "tongue",
        hint: "A muscle present in the mouth that assists in digestion"
    },
    {
        word: "expansion",
        hint: "To spread out"
    },
    {
        word: "country",
        hint: "A politically bordered area"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
    {
        word: "flummox",
        hint: "To be perplexed, or surprised"
    },
    {
        word: "parable",
        hint: "A story or fable"
    },
    {
        word: "dainty",
        hint: "fragile or delicate"
    },
    {
        word: "aggregation",
        hint: "A grouping or gathering of an object or people"
    },
    {
        word: "enterprise",
        hint: "A business or company"
    },
    {
        word: "cauterize",
        hint: "to disinfect by burning"
    },
    {
        word: "incinerate",
        hint: "to reduce to ashes by means of fire"
    },
    {
        word: "asphyxiate",
        hint: "to choke or cut off air"
    },
    {
        word: "toothbrush",
        hint: "A device used to clean your teeth"
    },
    {
        word: "whisker",
        hint: "A projectile of hair that grows from the face of few mammals"
    },
    {
        word: "strain",
        hint: "to stress or push to its limits"
    },
    {
        word: "abscond",
        hint: "To escape in secret and go into hiding"
    },
    {
        word: "embezzle",
        hint: "To steal money that you have been trusted with"
    },
    {
        word: "prowess",
        hint: "skill in something specified"
    },
    {
        word: "whimsical",
        hint: "unusually playful and/or amusing"
    },
    {
        word: "kludge",
        hint: "A makeshift solution to a problem"
    },
    {
        word: "consigliere",
        hint: "trusted adviser or counselor"
    },
    {
        word: "reconcile",
        hint: "settling or resolving things"
    },
    {
        word: "perennial",
        hint: "something that exists in the same manner for a long time"
    },    
    {
        word: "advocate",
        hint: "to support or argue for something"
    },
]