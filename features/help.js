//
// Command: help
//

//
// Forces the user to pick among a predefined list of options
//
const { BotkitConversation } = require( 'botkit' );

module.exports = function (controller) {

    const convo = new BotkitConversation( 'help_chat', controller );

    convo.ask( '**Please choose an area within DevNet**\
    \n\n 1. COVID-19\
    \n 2. Payment\
    \n 3. Access\
    \n 4. Platform\
    \n 5. Certs\
    \n 6. Tickets\
    \n 7. Content\
    \n\n Type a number, e.g. 4, and hit ENTER', [
        {
            pattern: '^1|2|3|4|5|6|7$',
            handler: async ( response, convo ) => {
                await convo.gotoThread( 'success' );
            }
        },
        {
            default: true,
            handler: async ( response, convo ) => {
                await convo.gotoThread( 'failure' )
            }
        }
    ], 'choseViableOption');

    convo.addMessage( {
        text: 'You have chosen option #{{ vars.choseViableOption }}.',
        action: 'complete'
    }, 'success' );


    convo.addMessage( {
        text: 'That is not a viable option; please try again.',
        action: 'default'
    }, 'failure' );

    controller.addDialog( convo );

    controller.hears( 'help', 'message,direct_message', async (bot, message) => {

        await bot.beginDialog( 'help_chat' );
    });


    controller.commandHelp.push( { command: 'help', text: 'Conversation example - guess from a restricted list of options' } );
};













// module.exports = function (controller) {

//     controller.hears( 'help', 'message,direct_message', async ( bot, message ) => {

//         let markDown = '**Available commands:**  \n';

//         controller.commandHelp.sort( ( a,b ) => {

//             return ( ( a.command < b.command ) ? -1 : ( ( a.command > b.command ) ? 1 : 0 ));
//         });

//         controller.commandHelp.forEach( element => {
            
//             markDown += `**${ controller.checkAddMention( message.roomType, element.command ) }**: ${ element.text }  \n`
//         });

//         await bot.reply( message, { markdown: markDown } );

       
//     });

//     controller.commandHelp.push( { command: 'help', text: 'Show available commands/descriptions' } );
// }
