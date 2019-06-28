module.exports = class Addon {
    execute(bot, addCommandListener, config) {

        /* CODE TO BE EXECUTED ON LOAD */

    }
    manifest() {
        /* DETAILS ABOUT THE ADDON TO BE DISPLAYED ON THE WEB INTERFACE */
        return {
            developer:"Developer's Name",
            image:"image-url", /* VENUS NEEDS AN IMAGE SRC TO DOWNLOAD */
            description:"A generic addon, maybe?",
        }
    }
    config() {

        /* CONFIG TEMPLATE FOR THE ADDON, VALUES ARE ACCESSED INSIDE execute() */

        let template = {
            prefix: "[AntiSwear]"
        } 

        return {
            filename:"antiswear",
            json: template,
            schema: null
        }
    }
}