import logger from "./logger.js";

function firstPush () {
    logger.printCount()
    logger.log('Learning Singleton')
    logger.printCount()
}

export { firstPush }