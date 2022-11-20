//reserved seats example from the  '1A 3C 2B 20G 5A' 

//only three possible seat combinations: (b,c,d,e), (d,e,f,g), (f,g,h,j)

//I tried to make a more elegant approach for the problem, but it might still be a bit messy and confuse, but more with better performance. 
//Regardless, it worked with the example I remembered.


//first, I separate the column letter from the row number so I can have an index for each seat.
//it initially goes to every row of the plane and checks if it is empty. if it does, add 2 possible combinations.
    //if not, it gets the index of every reserved seat in each row.
    // no matter where the reserved seat is, I have at least one possible combination to fit a family. So, depending on where it is, I can fit 1 or 2 families.
    //if there are two or more seats occupied in a row, it's a completely different story. 
        //If it's too big, I can't fit familes. 
        //If it's in the middle of the array, I can't either.

const test = '1A 3C 2B 20G 5A' 
function solution(N, S) {
    const reservedSeatsArray = S.split(' ');
        const seatColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J','K'];
    let count = 0;
    let countIt = 0;
    
    const reservedRowNumber = reservedSeatsArray.map(seat => Number(seat.slice(0, -1)));
    const reservedRowLetter = reservedSeatsArray.map(seat => seat.slice(-1));
    
    //go through all rows and check for reserved seats
    for(let i = 1; i <= N; i++) {
        //non-empty rows;
        if(reservedRowNumber.includes(i)) {
            const reservedSeatsInColumn = reservedRowLetter.filter((element, index) => reservedRowNumber[index] === i);
            const reservedSeatPositions = [];

            //get the position of every occupied row
            for(let index in reservedSeatsInColumn) {
                reservedSeatPositions.push(seatColumns.indexOf(reservedSeatsInColumn[index]));
            }
            
            //for rows with only one seat reserved
            if(reservedSeatPositions.length == 1) {
                if (reservedSeatPositions[0] > 8 || reservedSeatPositions[0] < 1) {
                    count +=2;
                } 
                else {
                    count++;
                }
            }
            //for seat with multiple seats reserved
            else {
                if (reservedSeatPositions.every(el => el > 8 || el < 1)) {
                    count+=2;
                }
                else if( (reservedSeatPositions.length <= 4) && (reservedSeatPositions.every(el => reservedSeatPositions != 4 || el != 5))) {
                    count++;
                }
            }
        }
        //for empty rows
        else {
            count += 2;
        }
    }
    return count;
}

solution(4, test);