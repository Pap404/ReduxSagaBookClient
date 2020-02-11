export const requestBookSuccess = (data) => {
    return { type: 'REQUESTED_BOOK_SUCCEEDED', payload: data }
};

export const fetchBook = () => {
    return { type: 'FETCHED_BOOK' }
};