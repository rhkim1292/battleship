const DOMHandler = (() => {
	const testFn = () => {
		const h1 = document.createElement('h1');
		h1.textContent = 'testing!';
		document.body.appendChild(h1);
	};
	return {
        testFn,
    };
})();

export default DOMHandler;
