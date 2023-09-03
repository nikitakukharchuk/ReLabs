const getMillisecondsAsPercentage = () => {
    let startTime = new Date().getTime();
    let interval = 10;
    let maxTime = 2000;
    let currentTime;

    return function() {
        currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTime;

        if (elapsedTime >= maxTime) {
            return 100;
        } else {
            return (elapsedTime / maxTime) * 100;
        }
    };
}

export const percentageFunction = getMillisecondsAsPercentage();

const millisecondsInPresent = () => setInterval(() => {
    const percentage : number = percentageFunction();
    return percentage
}, 10);