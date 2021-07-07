//
// Demo interactive adaptive cards
//
module.exports = function (controller) {

    controller.hears('cards', 'message,direct_message', async (bot, message) => {

        if (!controller.public_url) {
            await bot.reply(message, {
                text: 'Please configure the PUBLIC_URL setting to enable this sample feature'
            });
            return;
        }

        await bot.reply(message, {
            text: 'DevNet Chat Assistant',
            attachments: [{
                'contentType': 'application/vnd.microsoft.card.adaptive',
                'content': {
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
                                            "color": "Accent",
                                            "size": "Medium"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "weight": "Bolder",
                                            "text": "DevNet Chat Helper",
                                            "wrap": true,
                                            "size": "Large",
                                            "spacing": "Small",
                                            "fontType": "Default"
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
                                    "width": 10,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "What:",
                                            "color": "Good"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Who:",
                                            "spacing": "Small",
                                            "color": "Good"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "OS:",
                                            "spacing": "Small",
                                            "color": "Good"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": 65,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "color": "Light",
                                            "text": "This bot is designed to help visitors & users with DevNet",
                                            "maxLines": 1
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Developed and maintained by Cisco DevNet DevX",
                                            "weight": "Lighter",
                                            "spacing": "Small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Mac, Windows, iOS, Android",
                                            "weight": "Lighter",
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
                            "text": "We're making it easier for you to interact with bots and integrations in Webex Teams. When your bot sends information in a space that includes a card with buttons, you can now easily interact with it.",
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
                    "version": "1.2",
                    'actions': [{
                        'type': 'Action.Submit',
                        'title': 'Submit'
                    }]
                }
            }]
        })
    })

    controller.on('attachmentActions', async (bot, message) => {

        let hostName = message.value.vmlist;

        await bot.reply(message, {
            text: 'Stats',
            attachments: [{
                'contentType': 'application/vnd.microsoft.card.adaptive',
                'content': {
                    'type': 'AdaptiveCard',
                    'version': '1.0',
                    'body': [{
                            'type': 'ColumnSet',
                            'columns': [{
                                    'type': 'Column',
                                    'width': 'stretch',
                                    'items': [{
                                            'type': 'TextBlock',
                                            'text': 'VM Monitor',
                                            'size': 'ExtraLarge',
                                            'weight': 'Bolder',
                                            'horizontalAlignment': 'Center'
                                        },
                                        {
                                            'type': 'TextBlock',
                                            'text': 'Data for Host:'
                                        },
                                        {
                                            'type': 'TextBlock',
                                            'text': `${ hostName }`,
                                            'weight': 'Bolder'
                                        }
                                    ],
                                    'verticalContentAlignment': 'Center',
                                    'horizontalAlignment': 'Center'
                                },
                                {
                                    'type': 'Column',
                                    'width': 'stretch',
                                    'items': [{
                                        'type': 'Image',
                                        'altText': '',
                                        'url': `${controller.public_url}/www/monitor.png`
                                    }]
                                }
                            ]
                        },
                        {
                            'type': 'Image',
                            'altText': '',
                            'url': `${controller.public_url}/www/stats.png`
                        }
                    ],
                    '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json'
                }
            }]
        })
    })

    controller.commandHelp.push({
        command: 'cards',
        text: 'Demo adaptive cards'
    });

}