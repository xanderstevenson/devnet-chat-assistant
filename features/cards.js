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
                    "version": "1.0",
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
                                            "text": "DevNet Support Helper",
                                            "wrap": true,
                                            "size": "Large",
                                            "spacing": "Small",
                                            "fontType": "Default",
                                            "color": "Light"
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
                                    "width": 12,
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
                                            "text": "Maintained by DevNet Developer Experience",
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
                            "wrap": true,
                            "separator": true,
                            "spacing": "Medium",
                            "text": "What would you like to learn about today? ",
                            "horizontalAlignment": "Center",
                            "size": "Medium",
                            "color": "Dark",
                            "weight": "Bolder"
                        },
                        {
                            "type": "TextBlock",
                            "wrap": true,
                            "text": "[Frequently Asked Questions](https://devnetsupport.cisco.com/hc/en-us/articles/4403440535187) ",
                            "horizontalAlignment": "Center",
                            "size": "Medium",
                            "weight": "Bolder",
                            "separator": true,
                            "spacing": "Medium",
                            "isSubtle": true
                        },
                        {
                            "type": "TextBlock",
                            "text": "[Source Code](https://github.com/xanderstevenson/devnet-support-helper) on GitHub",
                            "wrap": true,
                            "horizontalAlignment": "Center"
                        },
                        {
                            "type": "TextBlock",
                            "text": "for Mac, Windows, iOS, Android",
                            "wrap": true,
                            "separator": true,
                            "horizontalAlignment": "Center"
                        }
                    ],
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                }
            }]
        })
    })

    controller.commandHelp.push({
        command: "cards",
        text: "Demo adaptive cards"
    });

}