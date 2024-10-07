const checkSetting = {
    "code": 0,
    "message": "success",
    "data": {
        "defaultConfigTemplate": [
            {
                "id": "header-section",
                "hide": false,
                "sort": [
                    [
                        "header-section-text"
                    ]
                ],
                "children": {
                    "header-section-text": {
                        "value": "",
                        "hide": false
                    }
                }
            },
            {
                "id": "restaurant-info-section",
                "hide": false,
                "sort": [
                    [
                        "restaurant-info-section-restaurantName"
                    ],
                    [
                        "restaurant-info-section-address"
                    ],
                    [
                        "restaurant-info-section-phoneNumber"
                    ]
                ],
                "children": {
                    "restaurant-info-section-restaurantName": {
                        "value": "Restaurant Name",
                        "hide": false
                    },
                    "restaurant-info-section-address": {
                        "value": "Street Address City, ST, Zip Code",
                        "hide": false
                    },
                    "restaurant-info-section-phoneNumber": {
                        "value": "Phone Number",
                        "hide": false
                    }
                }
            },
            {
                "id": "check-info-section",
                "hide": false,
                "sort": [
                    [
                        "check-info-section-diningOption",
                        "check-info-section-tableNumber"
                    ],
                    [
                        "check-info-section-checkNumber",
                        "check-info-section-salesChannel"
                    ],
                    [
                        "check-info-section-serverName",
                        "check-info-section-guestNumber"
                    ],
                    [
                        "check-info-section-date"
                    ]
                ],
                "children": {
                    "check-info-section-diningOption": {
                        "value": "Dine In",
                        "hide": false
                    },
                    "check-info-section-salesChannel": {
                        "value": "",
                        "hide": false
                    },
                    "check-info-section-date": {
                        "value": "Jun 18, 2024 7:30:00 PM",
                        "hide": false
                    },
                    "check-info-section-serverName": {
                        "value": "Server: Server name",
                        "hide": false
                    },
                    "check-info-section-tableNumber": {
                        "value": "Table 1",
                        "hide": false
                    },
                    "check-info-section-checkNumber": {
                        "value": "Check #UI3N3",
                        "hide": false
                    },
                    "check-info-section-guestNumber": {
                        "value": "Total Guest: 5",
                        "hide": false
                    }
                }
            },
            {
                "id": "guest-info-section",
                "hide": false,
                "sort": [
                    [
                        "guest-info-section-guestName",
                        "guest-info-section-guestPhoneNumber"
                    ],
                    [
                        "guest-info-section-guestNotes"
                    ]
                ],
                "children": {
                    "guest-info-section-guestName": {
                        "value": "Guest Name",
                        "hide": false
                    },
                    "guest-info-section-guestPhoneNumber": {
                        "value": "555-555-5555",
                        "hide": false
                    },
                    "guest-info-section-guestNotes": {
                        "value": "",
                        "hide": false
                    }
                }
            },
            {
                "id": "item-info-section",
                "hide": false,
                "sort": [],
                "children": {
                    "item-info-section-dishLineSpacing": {
                        "value": "14",
                        "hide": false
                    },
                    "item-info-section-itemNotes": {
                        "value": ">>Note: item notes is here",
                        "hide": false
                    },
                    "item-info-section-checkNotes": {
                        "value": ">>ORDER NOTE: ORDER NOTE IS HERE",
                        "hide": false
                    }
                }
            },
            {
                "id": "discount-info-section",
                "hide": false,
                "sort": [],
                "children": {}
            },
            {
                "id": "footer-section",
                "hide": false,
                "sort": [
                    [
                        "footer-section-text"
                    ]
                ],
                "children": {
                    "footer-section-text": {
                        "value": "",
                        "hide": false
                    }
                }
            },
            {
                "id": "payment-status-section",
                "hide": false,
                "sort": [],
                "children": {}
            }
        ],
        "configDetails": [
            {
                "id": "header-section",
                "hide": true,
                "sort": [],
                "children": {
                    "header-section-text": {
                        "hide": true,
                        "value": "Check  K h&e*a/d\\e*r～!\nthanks you"
                    }
                }
            },
            {
                "id": "restaurant-info-section",
                "hide": false,
                "sort": [
                    [
                        "restaurant-info-section-restaurantName"
                    ]
                ],
                "children": {
                    "restaurant-info-section-address": {
                        "hide": false,
                        "value": "{\"streetAddress\":\"110 happy street, #216\",\"city\":\"Chicago\",\"state\":\"IL\",\"zipcode\":\"02353\"}"
                    },
                    "restaurant-info-section-phoneNumber": {
                        "hide": false,
                        "value": "1234567891"
                    },
                    "restaurant-info-section-restaurantName": {
                        "hide": false,
                        "value": "Restaurant Name"
                    }
                }
            },
            {
                "id": "check-info-section",
                "hide": false,
                "sort": [
                    [
                        "check-info-section-diningOption",
                        "check-info-section-tableNumber"
                    ],
                    [
                        "check-info-section-checkNumber"
                    ],
                    [],
                    [
                        "check-info-section-date"
                    ]
                ],
                "children": {
                    "check-info-section-date": {
                        "hide": false,
                        "value": "Jun 18, 2024 7:30:00 PM"
                    },
                    "check-info-section-serverName": {
                        "hide": false,
                        "value": "Server: Server name"
                    },
                    "check-info-section-checkNumber": {
                        "hide": false,
                        "value": "Check #001"
                    },
                    "check-info-section-guestNumber": {
                        "hide": false,
                        "value": "Total Guest: 5"
                    },
                    "check-info-section-tableNumber": {
                        "hide": false,
                        "value": "Table 1"
                    },
                    "check-info-section-diningOption": {
                        "hide": false,
                        "value": "Dine In"
                    },
                    "check-info-section-salesChannel": {
                        "hide": false,
                        "value": "Table"
                    }
                }
            },
            {
                "id": "guest-info-section",
                "hide": true,
                "sort": [
                    [],
                    []
                ],
                "children": {
                    "guest-info-section-guestName": {
                        "hide": true,
                        "value": "Guest Name"
                    },
                    "guest-info-section-guestNotes": {
                        "hide": true,
                        "value": ""
                    },
                    "guest-info-section-guestPhoneNumber": {
                        "hide": true,
                        "value": "555-555-5555"
                    }
                }
            },
            {
                "id": "item-info-section",
                "hide": false,
                "sort": [
                    [
                        "item-info-section-itemNotes"
                    ]
                ],
                "children": {
                    "item-info-section-itemNotes": {
                        "hide": false,
                        "value": ">>Note: item notes is here"
                    },
                    "item-info-section-dishLineSpacing": {
                        "hide": false,
                        "value": "5"
                    }
                }
            },
            {
                "id": "check-notes-section",
                "hide": false,
                "sort": [],
                "children": {
                    "check-section-text": {
                        "hide": false,
                        "value": ">>ORDER NOTE: ORDER NOTE IS HERE"
                    }
                }
            },
            {
                "id": "discount-info-section",
                "hide": false,
                "sort": [],
                "children": {}
            },
            {
                "id": "footer-section",
                "hide": true,
                "sort": [
                    []
                ],
                "children": {
                    "footer-section-text": {
                        "hide": true,
                        "value": "Check -narrow, TEL,footerfooterfooterfoote<>/&*($#@~dwdwd"
                    }
                }
            },
            {
                "id": "payment-status-section",
                "hide": false,
                "sort": [],
                "children": {}
            }
        ],
        "configType": "Check",
        "modifiedTime": 1726656171952,
        "version": 31
    },
    "option": null,
    "success": true
}
export default checkSetting;