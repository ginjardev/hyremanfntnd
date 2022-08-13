import CandidatesList from "../constants/candidatesList";

const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
}

const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}  

let num = 4;

console.log(sliceData(CandidatesList, num, 4 ));




export {
    calculateRange,
    sliceData
}