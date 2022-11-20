//reserved seats example from the  '1A 3C 2B 20G 5A' 

//only three possible seat combinations: (b,c,d,e), (d,e,f,g), (f,g,h,j)
//therefore, there's no need to take the A and K seats account, bcs it's not gonna change the result.

const solution = (N, S) => {
    const reservedSeatsArray = S.split(' ');
        const seatColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J','K'];
    let count = 0;
    
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

module.exports = solution;