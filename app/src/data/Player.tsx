function getChildren(elementNumber: number) {
    let row = 0;
    let count = 0;

    while (count + row + 1 <= elementNumber) {
        row++;
        count += row;
    }

    let indexInRow = elementNumber - count;
    let startOfNextRow = count + row + 1;
    let leftChild = startOfNextRow + indexInRow;
    let rightChild = leftChild + 1;

    return [leftChild, rightChild];
}

export default getChildren;