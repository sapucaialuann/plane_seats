//reserved seats example from the  '1A 3C 2B 20G 5A' 

//  B C D E F G H J


//only three possible seat combinations: (b,c,d,e), (d,e,f,g), (f,g,h,j)
    //therefore, there's no need to take the A and K seats accountPossibleSeatCombinations, because it's not gonna change the result, weather it's reserved or not.

const getIndexOfSeats = (reservedSeatsInput) => {
    return filterList(reservedSeatsInput.split(' '));
}
const filterList = (arrayOfSeats) => {
    const filteredArray = [];
    arrayOfSeats.forEach(element => {if(!element.match(/[AK]/)) filteredArray.push(element)})
    // console.log(filteredArray)
    return filteredArray;
}

const solution = (N, S) => {
    let countPossibleSeatCombinations = 0;
    const possibleSeatLetters = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'J']

    const reservedSeatsList = getIndexOfSeats(S);

    const reservedRowNumber = reservedSeatsList.map(seat => Number(seat.slice(0, -1)));
    const reservedRowLetter = reservedSeatsList.map(seat => seat.slice(-1));
    
    //go through all rows and check for reserved seats
    for(let i = 1; i <= N; i++) {
        //non-empty rows;
        if(reservedRowNumber.includes(i)) {
            const row = reservedRowLetter.filter((element, index) => reservedRowNumber[index] === i).sort();

            if (row.length === 1) countPossibleSeatCombinations++;
            else if(row.length <= 4) {
                console.log('line with reservations: ', i);
                let countAvailableSeatsInRow = 0;
                for (let j = 0; j < possibleSeatLetters.length; j++) {
                    console.log('J: ', possibleSeatLetters[j])
                    if(!row.includes(possibleSeatLetters[j])) {
                            countAvailableSeatsInRow++;
                            console.log('streak: ', countAvailableSeatsInRow);
                            if (countAvailableSeatsInRow >= 4) {
                                countPossibleSeatCombinations++
                                countAvailableSeatsInRow = 0;
                            }
                    } else {
                        countAvailableSeatsInRow = 0;
                        console.log('streak set to 0: ', countAvailableSeatsInRow);
                    }
                }
                countAvailableSeatsInRow = 0;
            }
        }
        //for empty rows
        else {
            countPossibleSeatCombinations += 2;
        }
    }
    console.log(countPossibleSeatCombinations);
    return countPossibleSeatCombinations;
}
// A B C D E F G H J
solution(22,'1A 3C 2B 20G 5A')

module.exports = solution;
