import Rand from 'rand-seed';
import questions from './questions.csv'

interface Question {
    q: string;
    a1: string;
    a2: string;
}
export type { Question };

const shuffle = (rand: Rand, array: any[]) =>{
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(rand.next() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const getRandomQuestion = (seed: string, playerNumber: number, round: number, lang: string) => {
    const rand = new Rand(seed+round.toString());
    const gquestions = shuffle(rand, questions.slice())
    const from_question = gquestions[playerNumber];
    return {
        q: from_question['Q'+lang],
        a1: from_question['A'+lang+'1'],
        a2: from_question['A'+lang+'2'],
    };
}
export default getRandomQuestion;