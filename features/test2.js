{
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
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
                                            "color": "Accent"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "weight": "Bolder",
                                            "text": "DevNet Chat Helper",
                                            "horizontalAlignment": "Left",
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
                            "columns": [{
                                    "type": "Column",
                                    "width": 35,
                                    "items": [{
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
                                    "items": [{
                                            "type": "TextBlock",
                                            "text": "TBD",
                                            "color": "Light"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "DevNet Chat Helper for Webex",
                                            "color": "Light",
                                            "weight": "Lighter",
                                            "spacing": "Small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Mac, Windows, Web",
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
                            "text": "We're making it easier for you to interact with bots and integrations in Webex Teams. When your bot sends information in a space that includes a card with buttons, you can now easily interact with it.",
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": "Buttons and Cards Resources:"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [{
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [{
                                        "type": "Image",
                                        "altText": "",
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
                                        "horizontalAlignment": "Left",
                                        "size": "Medium"
                                    }],
                                    "verticalContentAlignment": "Center",
                                    "horizontalAlignment": "Left",
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
                            "horizontalAlignment": "Left",
                            "spacing": "None"
                        }
                    ],
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "version": "1.2",
                    "actions": [{
                        "type": "Action.Submit",
                        "title": "Submit"
                    }]
                }
            }]
}

