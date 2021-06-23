
import * as welcomeAttach from '/assets/cards/welcome-card';

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


        ////////// test /////////////
        welcome = {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "style": "Person",
                                    "url": "https://static.wixstatic.com/media/3a60df_ba60095194a041f0b2ae04cfbae19e5c~mv2.gif",
                                    "size": "Medium",
                                    "height": "50px"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Cisco Webex",
                                    "weight": "Lighter",
                                    "color": "Accent"
                                },
                                {
                                    "type": "TextBlock",
                                    "weight": "Bolder",
                                    "text": "DevNet Chat Assistant",
                                    "wrap": true,
                                    "color": "Light",
                                    "size": "Large",
                                    "spacing": "Small"
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                },
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": 35,
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Release Date:",
                                    "color": "Light"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Product:",
                                    "weight": "Lighter",
                                    "color": "Light",
                                    "spacing": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "OS:",
                                    "weight": "Lighter",
                                    "color": "Light",
                                    "spacing": "Small"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "width": 65,
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "TBD",
                                    "color": "Light"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "DevNet Chat Assistant",
                                    "color": "Light",
                                    "weight": "Lighter",
                                    "spacing": "Small"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Mac, Android, Windows, Web",
                                    "weight": "Lighter",
                                    "color": "Light",
                                    "spacing": "Small"
                                }
                            ]
                        }
                    ],
                    "spacing": "Padding",
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "TextBlock",
                    "text": "Here is some filler text to explain what this bot will do to make your lives wonderful and stress-less. ",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "Buttons and Cards Resources:"
                },
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://developer.webex.com/images/link-icon.png",
                                    "size": "Small",
                                    "width": "30px"
                                }
                            ],
                            "spacing": "Small"
                        },
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "[Developer Portal Buttons and Cards Guide]()",
                                    "size": "Medium"
                                }
                            ],
                            "verticalContentAlignment": "Center",
                            "spacing": "Small"
                        }
                    ]
                },
                {
                    "type": "ActionSet",
                    "actions": [
                        {
                            "type": "Action.Submit",
                            "title": "Subscribe to Release Notes",
                            "data": {
                                "subscribe": true
                            }
                        }
                    ],
                    "spacing": "None"
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.2"
        }
        
        


        await bot.reply( message, {attachments: welcome}, {markdown : markDown} );
    });
}
