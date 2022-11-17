const Ship = (len) => {
    const shipLength = len;
	let hits = 0;
	const hit = () => {
		hits++;
	};
    const isSunk = () => {
        return hits === shipLength;
    };
	return {
        get hits() {
            return hits;
        },
        hit,
        isSunk,
    };
};

export default Ship;