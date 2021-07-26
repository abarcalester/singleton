import logger from "./logger.js";

function secondRun () {
    logger.printCount()
    logger.log('From "b" class')
    logger.printCount()
}

export { secondRun }