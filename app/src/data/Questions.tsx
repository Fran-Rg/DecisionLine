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
        "q": "Job a disneyland",
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
    // {
    //     "q": "Q",
    //     "a1": "A",
    //     "a2": "A",
    // },
    // {
    //     "q": "Q",
    //     "a1": "A",
    //     "a2": "A",
    // },
    // {
    //     "q": "Q",
    //     "a1": "A",
    //     "a2": "A",
    // },
    // {
    //     "q": "Q",
    //     "a1": "A",
    //     "a2": "A",
    // },
    // {
    //     "q": "Q",
    //     "a1": "A",
    //     "a2": "A",
    // },
    // {
    //     "q": "Q",
    //     "a1": "A",
    //     "a2": "A",
    // },
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