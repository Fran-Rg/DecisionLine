import Rand, { PRNG } from 'rand-seed';

interface Question {
    q: string;
    a1: string;
    a2: string;
}
export type { Question };
const questions = [
    {
        "q": "In the street, you look at",
        "a1": "People",
        "a2": "Your phone",
    },
    {
        "q": "Getting caught",
        "a1": "Masturbating",
        "a2": "Pooping in the pool",
    },
    {
        "q": "At which level do you consider it an adultery",
        "a1": "Oral",
        "a2": "Fantasizing",
    },
    {
        "q": "Best tool for a zombie apocalypse",
        "a1": "A Walkie Talkie",
        "a2": "An axe",
    },
    {
        "q": "Amplified sense",
        "a1": "Have the smell of a dog",
        "a2": "Have the sight of an eagle",
    },
    {
        "q": "More bearable when hiking for 2 hours",
        "a1": "Without underwear",
        "a2": "Wearing flip flops",
    },
    {
        "q": "Your life style",
        "a1": "Keep everything, throw nothing",
        "a2": "Own as little as possible",
    },
    {
        "q": "Best Quickie style",
        "a1": "In the shower",
        "a2": "On the kitchen table",
    },
    {
        "q": "What are your neighbors more likely to complain about",
        "a1": "Noise after hours",
        "a2": "Suspicious smells",
    },
    {
        "q": "Time travel",
        "a1": "To the past",
        "a2": "To the future",
    },
    {
        "q": "New year's resolution every year",
        "a1": "Eat Healthier",
        "a2": "Work out more",
    },
    {
        "q": "Orgasm sound type",
        "a1": "Piercing scream",
        "a2": "Low moan",
    },
    {
        "q": "Put you in the mood",
        "a1": "Sex toys",
        "a2": "Sexy costumes/lingerie",
    },
    {
        "q": "Go-to Christmas gift",
        "a1": "Pair of socks",
        "a2": "Scented candle",
    },
    {
        "q": "Your fingernails",
        "a1": "Cut them",
        "a2": "Chew them",
    },
    {
        "q": "Preferred Holidays",
        "a1": "With your in-laws",
        "a2": "Alone in front of the TV",
    },
    {
        "q": "Kind of student",
        "a2": "Always did homework",
        "a1": "Copied homework from others",
    },
    {
        "q": "Never have to wait for",
        "a1": "Traffic light",
        "a2": "Check-out line",
    },
    {
        "q": "If it is broken",
        "a1": "Repair it yourself",
        "a2": "Buy a new one",
    },
    {
        "q": "Be the brand face for",
        "a1": "An Hemmorrhoid cream",
        "a2": "An Adult diaper",
    },
    {
        "q": "Making out with",
        "a1": "Person to you left",
        "a2": "Person to your right",
    },
    {
        "q": "When a topic annoys you",
        "a1": "You wait politely",
        "a2": "You cut the conversation short",
    },
    {
        "q": "Someone cheating in games",
        "a1": "You cheat too",
        "a2": "You tell on them",
    },
    {
        "q": "Give your advice on",
        "a1": "Relationships",
        "a2": "Chidren's education",
    },
    {
        "q": "Teleport",
        "a1": "To Mars",
        "a2": "To Hawaii",
    },
    {
        "q": "Live",
        "a1": "One month in prison",
        "a2": "One year without phone",
    },
    {
        "q": "Prefer to be stuck 1 hour",
        "a1": "In traffic",
        "a2": "On a ski lift",
    },
    {
        "q": "Worst DNA test",
        "a1": "Your dad is not your data",
        "a2": "Your Parents are cousins",
    },
    {
        "q": "Key to success",
        "a1": "Intelligence",
        "a2": "Beauty",
    },
    {
        "q": "Your skin covered in",
        "a1": "Fur",
        "a2": "Scales",
    },
    {
        "q": "Person to your left",
        "a1": "You slap them",
        "a2": "You French kiss them",
    },
    {
        "q": "Speeding ticket",
        "a1": "I deserve it",
        "a2": "Probably a mistake",
    },
    {
        "q": "Your dating pattern",
        "a1": "Let's take it month by month",
        "a2": "'til death do us part",
    },
    {
        "q": "Find",
        "a1": "Treasure map",
        "a2": "A time capsule box",
    },
    {
        "q": "At the supermarket",
        "a1": "Shortest line",
        "a2": "Hottest cashier",
    },
    {
        "q": "A whole lifetime without",
        "a1": "Telephone",
        "a2": "Toilet Paper",
    },
    {
        "q": "Get laid",
        "a1": "On a pebble beach",
        "a2": "In an igloo",
    },
    {
        "q": "Period Sex",
        "a1": "Nah, I'm good",
        "a2": "It's fiiiine",
    },
    {
        "q": "Live",
        "a1": "Hometown forever",
        "a2": "New country every 5 years",
    },
    {
        "q": "Worst at a restaurant",
        "a1": "Pubic hair in the plate",
        "a2": "Cockroach around",
    },
    {
        "q": "Shoes",
        "a1": "Crocs",
        "a2": "Cowboy boots with spurs",
    },
    {
        "q": "Halloween Costume",
        "a1": "Sexy",
        "a2": "Funny",
    },
    {
        "q": "Porno",
        "a1": "Need a story",
        "a2": "Skip the story",
    },
    {
        "q": "Worst 3 days per month",
        "a1": "Hemorroids",
        "a2": "Diarrhea",
    },
    {
        "q": "Awkward pharmacy purchase",
        "a1": "XS Condoms",
        "a2": "Laxatives",
    },
    {
        "q": "Your underwear",
        "a1": "Super sexy",
        "a2": "Super Practical",
    },
    {
        "q": "Feeding at the park",
        "a1": "The squirrels",
        "a2": "The pigeons",
    },
    {
        "q": "Free vacation",
        "a1": "Camping on paradise beach",
        "a2": "5 stars hotel in city",
    },
    {
        "q": "Own a pet",
        "a1": "Tiger",
        "a2": "Snake",
    },
    {
        "q": "Have diarrhea",
        "a1": "On the train",
        "a2": "At work",
    },
    {
        "q": "Job at disneyland",
        "a1": "Mascot",
        "a2": "Ride Operator",
    },
    {
        "q": "Worst to be hopeless in",
        "a1": "Grammar",
        "a2": "Oral sex",
    },
    {
        "q": "On an empty stomach",
        "a1": "Angry",
        "a2": "Brain is turned off",
    },
    {
        "q": "You Argue",
        "a1": "About everything",
        "a2": "As little as possible",
    },
    {
        "q": "FIFA World Cup",
        "a1": "Every summer",
        "a2": "Once a decade",
    },
    {
        "q": "Own",
        "a1": "Forever puppy",
        "a2": "Forever kitten",
    },
    {
        "q": "Dance",
        "a1": "Slow and sensual",
        "a2": "Frenzied",
    },
    {
        "q": "Sauce for your fries",
        "a1": "Yogurt",
        "a2": "Jam",
    },
    {
        "q": "Marry someone who",
        "a1": "Smells bad",
        "a2": "Never stop talking",
    },
    {
        "q": "Condom",
        "a1": "Textured",
        "a2": "Glow in the dark",
    },
    {
        "q": "Orgy",
        "a1": "With people I know",
        "a2": "With unknown people",
    },
    {
        "q": "Spend dirty money",
        "a1": "For a charity",
        "a2": "At the casino",
    },
    {
        "q": "Stuck alone in an elevator",
        "a1": "You panic",
        "a2": "You take a nap",
    },
    {
        "q": "Radio",
        "a1": "Current Top hits",
        "a2": "Classic hits",
    },
    {
        "q": "Sexier uniform",
        "a1": "Cop",
        "a2": "Nurse/Doctor",
    },
    {
        "q": "Favorite accent",
        "a1": "French",
        "a2": "British",
    },
    {
        "q": "Live and earn",
        "a1": "In the city for minimum wage",
        "a2": "In the countryside for high salary",
    },
    {
        "q": "Forced fed",
        "a1": "Tortoise",
        "a2": "Snake",
    },
    {
        "q": "1 year",
        "a1": "Vow of silence",
        "a2": "Vow of chastity",
    },
    {
        "q": "Ski vacation",
        "a1": "Fondue and raclette",
        "a2": "On the slopes",
    },
    {
        "q": "Your neighbors are fighting",
        "a1": "Cover it with music",
        "a2": "Eavesdrop",
    },
    {
        "q": "The worst neighbors",
        "a1": "3 babies who cry non-stop",
        "a2": "A couple who fucks 24/7",
    },
    {
        "q": "You would rather be",
        "a1": "Famous and rich",
        "a2": "Unknown but without savings",
    },
    {
        "q": "In the forest",
        "a1": "You search for beautiful plants",
        "a2": "You search for animals",
    },
    {
        "q": "Amputate",
        "a1": "One of your arms",
        "a2": "Your tongue",
    },
    {
        "q": "Lunch break",
        "a1": "10 minutes",
        "a2": "Hour and maybe a half",
    },
    {
        "q": "At the end of a rainbow",
        "a1": "Real treasure",
        "a2": "Real unicorn",
    },
    {
        "q": "When drunk",
        "a1": "Sleepy or less active",
        "a2": "Hyperactive",
    },
    {
        "q": "Concert",
        "a1": "At the back of a big show",
        "a2": "At the front of a small gig",
    },
    {
        "q": "New TV Series hit",
        "a1": "Binge it",
        "a2": "Savour it",
    },
    {
        "q": "Worse to rub on your face",
        "a1": "Sandpaper",
        "a2": "Worms",
    },
    {
        "q": "Piercing",
        "a1": "Your tongue",
        "a2": "Your nipple",
    },
    {
        "q": "Walk barefoot on",
        "a1": "Legos",
        "a2": "Cow dung",
    },
    {
        "q": "Get a new talent",
        "a1": "Contortionism",
        "a2": "imitating regional accents",
    },
    {
        "q": "Whiskey",
        "a1": "Classy",
        "a2": "Shitty",
    },
    {
        "q": "Breakup phrase",
        "a1": "It's not you, it's me",
        "a2": "Thinkgs were moving too quickly",
    },
    {
        "q": "Shit out",
        "a1": "1 tennis ball",
        "a2": "1L of spicy sauce",
    },
    {
        "q": "Say \"I love you\"",
        "a1": "On the first date",
        "a2": "Never!",
    },
    {
        "q": "Year off",
        "a1": "Travel very far",
        "a2": "Travel around",
    },
    {
        "q": "Being President",
        "a1": "Can do",
        "a2": "Impossible",
    },
    {
        "q": "Eyebrows for the rest of your life",
        "a1": "Unibrow",
        "a2": "Completely shaved",
    },
    {
        "q": "Year end exam",
        "a1": "Minimum to pass",
        "a2": "S grade",
    },
    {
        "q": "End all your sentences with",
        "a1": "You know",
        "a2": "Bitch",
    },
    {
        "q": "Most sensitive topic",
        "a1": "Politics",
        "a2": "Money",
    },
    {
        "q": "Sex slave to",
        "a1": "Person to your left",
        "a2": "Person to your right",
    },
    {
        "q": "Fight against",
        "a1": "A tiger",
        "a2": "A shark",
    },
    {
        "q": "Watching a game",
        "a1": "With commercials every 2 minutes",
        "a2": "In slow motion",
    },
    {
        "q": "Videogames",
        "a1": "PC",
        "a2": "Console",
    },
    {
        "q": "Win",
        "a1": "Oscar",
        "a2": "Nobel prize",
    },
    {
        "q": "When you run",
        "a1": "Look so athletic",
        "a2": "Look so sad",
    },
    {
        "q": "Pee in the shower",
        "a1": "More water",
        "a2": "I have standards",
    },
    {
        "q": "Trust to watch your kids",
        "a1": "Person to your left",
        "a2": "Person to your right",
    },
    {
        "q": "Fetish",
        "a1": "Feet",
        "a2": "Latex",
    },
    {
        "q": "Ruins pizza",
        "a1": "Anchovies",
        "a2": "Olives",
    },
    {
        "q": "Haircut",
        "a1": "Mohawk",
        "a2": "Mullet",
    },
    {
        "q": "Work fantasy",
        "a1": "Plumber",
        "a2": "Boss/secretary",
    },
    {
        "q": "Break up",
        "a1": "Stay friends",
        "a2": "Out of my life",
    },
    {
        "q": "Fart in front of your partner",
        "a1": "After 1 week",
        "a2": "After 5 years",
    },
    {
        "q": "Choosing your order at a restaurant",
        "a1": "Takes 20 minutes",
        "a2": "Takes 10 seconds",
    },
    {
        "q": "Toothbrush",
        "a1": "Electric",
        "a2": "Manual",
    },
    {
        "q": "Drinking",
        "a1": "Mix and Match",
        "a2": "One pick for the night",
    },
    {
        "q": "Already full but comes your favorite dessert",
        "a1": "Eat and be sick",
        "a2": "Skip",
    },
    {
        "q": "Explore",
        "a1": "The ocean depths",
        "a2": "The edges of space",
    },
    {
        "q": "Most awkward to walk in during action in bed",
        "a1": "Your parents on you",
        "a2": "You on your parents",
    },
    {
        "q": "Worst to have a chastity belt",
        "a1": "Every weekend forever",
        "a2": "2 years from now",
    },
    {
        "q": "Tour of",
        "a1": "Gay clubs",
        "a2": "Strip clubs",
    },
    {
        "q": "Your farts",
        "a1": "Loud",
        "a2": "Smelly",
    },
    {
        "q": "At the pool",
        "a1": "30 laps",
        "a2": "Lay in the shallow end",
    },
    {
        "q": "At the bar",
        "a1": "Drinks are on me!",
        "a2": "I forgot my wallet...",
    },
    {
        "q": "Usually overestimate",
        "a1": "Your physical abilities",
        "a2": "Your memory",
    },
    {
        "q": "Worst drivers",
        "a1": "Drive slow in the fast lane",
        "a2": "Stick to your back",
    },
    {
        "q": "Speak",
        "a1": "22 living languages",
        "a2": "To animals",
    },
    {
        "q": "In 10 years, you dream of being",
        "a1": "Settler on Mars",
        "a2": "Ruler on Earth",
    },
    {
        "q": "Be better in",
        "a1": "Math",
        "a2": "History",
    },
    {
        "q": "A world without",
        "a1": "Screens",
        "a2": "Music",
    },
    {
        "q": "When you wake up",
        "a1": "You scratch your scrotch",
        "a2": "You fart",
    },
    {
        "q": "Arrive at a meeting",
        "a1": "Early",
        "a2": "Late",
    },
    {
        "q": "Your guilty pleasure",
        "a1": "Kids TV show",
        "a2": "Dumb Reality TV show",
    },
    {
        "q": "Genetically engineer",
        "a1": "T-rex",
        "a2": "Unicorn",
    },
    {
        "q": "Shopping",
        "a1": "Online",
        "a2": "In shops",
    },
    {
        "q": "Sex with",
        "a1": "Lights On",
        "a2": "Lights Off",
    },
    {
        "q": "Once Every Monday you can",
        "a1": "Shit gold",
        "a2": "Teleport",
    },
    {
        "q": "Worst sort of text to send to your boss",
        "a1": "Sext",
        "a2": "Gossip... about your boss",
    },
    {
        "q": "Run naked",
        "a1": "Through cacti",
        "a2": "In front of coworkers",
    },
    {
        "q": "Get your diploma",
        "a1": "With honors, by cheating",
        "a2": "Fairly, on the 3rd try",
    },
    {
        "q": "Steal",
        "a1": "Toilet paper from the office",
        "a2": "Robe from the hotel",
    },
    {
        "q": "Masturbation",
        "a1": "3 times per year",
        "a2": "3 times per day",
    },
    {
        "q": "Your friend is being cheated on",
        "a1": "You tell them",
        "a2": "You keep the secret",
    },
    {
        "q": "Sneezing while drunk",
        "a1": "You fart at the same time",
        "a2": "You vomit in your mouth",
    },
    {
        "q": "Two people fighting",
        "a1": "You film them",
        "a2": "You separate them",
    },
    {
        "q": "At the grocery",
        "a1": "You get more than needed, much more",
        "a2": "Strict minimum",
    },
    {
        "q": "Shopping spree",
        "a1": "With pleasure!",
        "a2": "No, thank you",
    },
    {
        "q": "Know",
        "a1": "How you will die",
        "a2": "When your partner will die",
    },
    {
        "q": "Karaoke",
        "a1": "Try hard",
        "a2": "Scream hard",
    },
    {
        "q": "In the street",
        "a1": "Step in a dog shit",
        "a2": "Pigeon poops on you",
    },
    {
        "q": "Vacation home",
        "a1": "Vatican",
        "a2": "Versailles",
    },
    {
        "q": "What you like about your job",
        "a1": "Your salary",
        "a2": "Your coworkers",
    },
    {
        "q": "Sniff",
        "a1": "Your farts under the cover",
        "a2": "Your underwear to re-use them",
    },
    {
        "q": "Drink",
        "a1": "1 Glass of blood",
        "a2": "1 Glass of sperm",
    },
    {
        "q": "Win the lottery",
        "a1": "$100,000 this year",
        "a2": "$1,000,000 in 10 years",
    },
    {
        "q": "Hurt friendship more",
        "a1": "Forget to wish you happy birthday",
        "a2": "Forget to pay you back",
    },
    {
        "q": "Never again have to do",
        "a1": "Laundry",
        "a2": "Dishes",
    },
    {
        "q": "Most likely midlife crisis",
        "a1": "You get in debt to start your company",
        "a2": "You leave everything to raise goats",
    },
    {
        "q": "Never again suffer from",
        "a1": "Lack of sleep",
        "a2": "Hunger",
    },
    {
        "q": "Worst to forever have bad",
        "a1": "Internet connection",
        "a2": "Breath",
    },
    {
        "q": "Reading this book on the tube",
        "a1": "Why can't I please my partner",
        "a2": "Fisting for Dummies",
    },
    {
        "q": "Ideal home",
        "a1": "Big living room",
        "a2": "Big kitchen",
    },
    {
        "q": "Pornhub Goal",
        "a1": "Watch every video",
        "a2": "Get 1 Million views on your video",
    },
    {
        "q": "As a couple",
        "a1": "Fights, but mind-blowing sex",
        "a2": "Never fight, but no touching",
    },
    {
        "q": "Prefer to carpool with a",
        "a1": "Scientologist",
        "a2": "Flat earther",
    },
    {
        "q": "See the future",
        "a1": "For yourself",
        "a2": "For your loved ones",
    },
    {
        "q": "Being world champion of",
        "a1": "Rock, Paper, Scissors",
        "a2": "Bilboquet/Cup and ball",
    },
    {
        "q": "Lick a body smeared with",
        "a1": "Chocolate",
        "a2": "",
    },
    {
        "q": "Kill",
        "a1": "A close friend",
        "a2": "Two babies",
    },
    {
        "q": "When you're bored",
        "a1": "Snack on everything",
        "a2": "Binge TV shows",
    },
    {
        "q": "Swim with",
        "a1": "Dolphins",
        "a2": "Wales",
    },
    {
        "q": "Classic email mistake",
        "a1": "Reply all by accident",
        "a2": "You forget the attachment",
    },
    {
        "q": "Meal",
        "a1": "At least 20 photos",
        "a2": "Refill at least 5 times",
    },
    {
        "q": "Videogames",
        "a1": "It was better 20 years ago",
        "a2": "The new stuff is better",
    },
    {
        "q": "Picking a beach",
        "a1": "Crowded sandy beach",
        "a2": "Deserted pebble beach",
    },
    {
        "q": "Befriend",
        "a1": "An alien",
        "a2": "A robot",
    },
    {
        "q": "Amazing orgasm every time",
        "a1": "For you",
        "a2": "For your partners",
    },
    {
        "q": "Reuse",
        "a1": "Condom",
        "a2": "Toilet paper",
    },
    {
        "q": "Take a dump",
        "a1": "With someone in the next stall",
        "a2": "While talking on the phone",
    },
    {
        "q": "Live in the world of",
        "a1": "Star Wards, as a Jedi",
        "a2": "X-Men, as a mutant",
    },
    {
        "q": "Mint chocolate chip ice cream",
        "a1": "You eat it",
        "a2": "You erase it from the planet",
    },
    {
        "q": "Your best birthday",
        "a1": "Just friends",
        "a2": "Just family",
    },
    {
        "q": "Tatto",
        "a1": "Hidden",
        "a2": "Visible",
    },
    {
        "q": "You regularly forget",
        "a1": "Your keys",
        "a2": "Your password",
    },
    {
        "q": "You have the flu",
        "a1": "Non stop whinning",
        "a2": "One suppository and done",
    },
    {
        "q": "Pubes",
        "a1": "Shave it",
        "a2": "Natural/Trim it",
    },
    {
        "q": "When you're wrong",
        "a1": "Admit your mistake",
        "a2": "I'm never wrong",
    },
    {
        "q": "Orgy with",
        "a1": "Your neighbors",
        "a2": "Your coworkers",
    },
    {
        "q": "French",
        "a1": "Cheese",
        "a2": "Wine",
    },
    // {
    //     "q": "Q",
    //     "a1": "A",
    //     "a2": "A",
    // },
]
const shuffle = (rand: Rand, array: any[]) =>{
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(rand.next() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
const getRandomQuestion = (seed:string, playerNumber:number, round: number) => {
    // return questions[round] // DEBUG
    const rand = new Rand(seed+round.toString());
    const gquestions = shuffle(rand, questions.slice())
    return gquestions[playerNumber];
}
export default getRandomQuestion;