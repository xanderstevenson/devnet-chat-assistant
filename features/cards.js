//
// Demo interactive adaptive cards
//
module.exports = function (controller) {

    controller.hears("cards", "message,direct_message", async (bot, message) => {

        if (!controller.public_url) {
            await bot.reply(message, {
                text: "Please configure the PUBLIC_URL setting to enable this sample feature"
            });
            return;
        }

        await bot.reply(message, {
            text: "DevNet Chat Assistant",
            attachments: [{
                "contentType": "application/vnd.microsoft.card.adaptive",
                "content": {
                    "type": "AdaptiveCard",
                    "version": '1.0',
                    "body": [{
                            "type": "ColumnSet",
                            "columns": [{
                                    "type": "Column",
                                    "items": [{
                                        "type": "Image",
                                        "style": "Person",
                                        "url": "https://static.wixstatic.com/media/3a60df_ba60095194a041f0b2ae04cfbae19e5c~mv2.gif",
                                        "size": "Medium",
                                        "height": "50px"
                                    }],
                                    "width": "auto"
                                },
                                {
                                    "type": "Column",
                                    "items": [{
                                            "type": "TextBlock",
                                            "text": "Cisco Webex",
                                            "weight": "Lighter",
                                            "color": "Accent",
                                            "size": "Medium"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "weight": "Bolder",
                                            "text": "DevNet Support Cyborg",
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
                            "columns": [{
                                    "type": "Column",
                                    "width": 8,
                                    "items": [{
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
                                    "items": [{
                                            "type": "TextBlock",
                                            "color": "Light",
                                            "text": "An interactive bot to help users with DevNet",
                                            "maxLines": 1
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Maintained by Cisco DevNet DevX Support",
                                            "weight": "Lighter",
                                            "spacing": "Small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Mac, Windows, iOS, Android",
                                            "weight": "Lighter",
                                            "spacing": "Small"
                                        }
                                    ],
                                    "width": 75
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
                            "type": "TextBlock",
                            "text": "New TextBlock",
                            "wrap": true
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [{
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [{
                                        "type": "Image",
                                        "url": "https://developer.webex.com/images/link-icon.png",
                                        "size": "Small",
                                        "width": "30px"
                                    }],
                                    "spacing": "Small"
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "[Developer Portal Buttons and Cards Guide]()",
                                        "size": "Medium"
                                    }],
                                    "verticalContentAlignment": "Center",
                                    "spacing": "Small"
                                }
                            ]
                        },
                        {
                            "type": "ActionSet",
                            "actions": [{
                                "type": "Action.Submit",
                                "title": "Subscribe to Release Notes",
                                "data": {
                                    "subscribe": true
                                }
                            }],
                            "spacing": "None"
                        }
                    ],
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
                }
            }]
        })
    })

    controller.commandHelp.push({
        command: "cards",
        text: "Demo adaptive cards"
    });

}