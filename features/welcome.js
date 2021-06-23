
import * as welcomeAttach from '/assets/cards/welcome-card.json';

// Welcome message 
// sent as the bot is added to a Room
//
module.exports = function (controller) {

    controller.on( 'memberships.created', async( bot, message ) => {

        // If the bot created the space, don't do anything
        if ( message.actorId == controller.adapter.identity.id ) return;

        let markDown = `#### Welcome to DevNet!\
                        \n\n![alt text](https://github.com/xanderstevenson/botkit-template/blob/master/assets/images/CiscoDevNetSmall.png)
                        \n\n _**Self-Help**_ options for the _**DevNet Associate Fundamentals Course**_ (blue text = clickable link):\
                        \n --- \
                        \n * **Search for common issues and their answers** in the course <a href='https://developer.cisco.com/docs/fundamentals/help/'>**FAQs**<a>. \
                        \n * **Questions on content** or **help with the course labs** can be found at the <a href='https://learningnetwork.cisco.com/s/topic/0TO3i0000008jY5GAI/devnet-certifications-community'>**DevNet Certifications Community**</a>.\
                        \n * **Technical issues** with your course, including page appearance, video or lab functionality, or payments? \
                        <a href='https://devnetsupport.cisco.com/hc/en-us/requests/new?ticket_form_id=360002862214'>**Open a ticket**</a> with DevNet Course Support. \
                        \n`;


        if ( message.data.roomType == 'group' ) {

            markDown += `\n<u>Note</u>: this is a "group" space and I (the Bot) will answer only if mentioned!  \n`
            markDown += `For help, enter: ${ controller.checkAddMention( message.data.roomType, '<u>help</u>' ) } `
        }
//         console.log('memberships created', message);


        await bot.reply( message, {attachments: welcomeAttach}, {markdown : markDown} );
    });
}
