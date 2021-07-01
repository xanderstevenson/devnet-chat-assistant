//
// Demo interactive adaptive cards
//
module.exports = function(controller) {

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
                                    }],
                                    'verticalContentAlignment': 'Center'
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
                            'type': 'Input.ChoiceSet',
                            'placeholder': 'Placeholder text',
                            'choices': [{
                                    'title': 'CUCM Pub',
                                    'value': '10.10.0.1'
                                },
                                {
                                    'title': 'CUCM Sub',
                                    'value': '10.10.0.2'
                                },
                                {
                                    'title': 'IM&P',
                                    'value': '10.10.0.3'
                                }
                            ],
                            'value': '10.10.0.1',
                            'id': 'vmlist'
                        }
                    ],
                    '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',

                    'actions': [{
                        'type': 'Action.Submit',
                        'title': 'Submit'
                    }]
                }
            }]
        })
    })


    controller.commandHelp.push({
        command: 'cards',
        text: 'Demo adaptive cards'
    });

}