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
        "q": "A which level do you consider it an adultery",
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
        "a2": "The one who always did homework",
        "a1": "The one who copied homework from others",
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
    // {
    //     "q": "QUESTION",
    //     "a1": "ANSWER",
    //     "a2": "ANSWER",
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
    const rand = new Rand(seed+round.toString());
    const gquestions = shuffle(rand, questions.slice())
    return gquestions[playerNumber];
}
export default getRandomQuestion;