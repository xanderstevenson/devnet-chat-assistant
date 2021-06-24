var AdaptiveCard = require('/assets/cards/welcomeCard.json');

module.exports = function (controller) {

    // controller.botCommons = {

    //     healthCheck: process.env.PUBLIC_ADDRESS,
    //     upSince: new Date( Date.now() ).toGMTString(),
    //     botName: controller.adapter.identity.displayName,
    //     botVersion: 'v' + require( '../package.json' ).version,
    //     owner: process.env.OWNER,
    //     support: process.env.SUPPORT,
    //     botkitVersion: controller.version,
    //     platform: process.env.PLATFORM,
    //     code: process.env.CODE
    // }

    controller.hears( 'what?', 'message,direct_message', async ( bot, message ) => {

                // Author a card
        // In practice you'll probably get this from a service
        // see http://adaptivecards.io/samples/ for inspiration

        var card = {
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [
                {
                    "type": "Image",
                    "url": "http://adaptivecards.io/content/adaptive-card-50.png"
                },
                {
                    "type": "TextBlock",
                    "text": "Hello **Adaptive Cards!**"
                }
            ],
            "actions": [
                {
                    "type": "Action.OpenUrl",
                    "title": "Learn more",
                    "url": "http://adaptivecards.io"
                },
                {
                    "type": "Action.OpenUrl",
                    "title": "GitHub",
                    "url": "http://github.com/Microsoft/AdaptiveCards"
                }
            ]
        };

        await bot.reply( message, { markdown: 'test' }, { attachment: card } );
    });

    controller.commandHelp.push( { command: 'what', text: 'card testing' } );

}

