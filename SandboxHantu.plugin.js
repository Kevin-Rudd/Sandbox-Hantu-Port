const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const contracts = [{
    "Data": {
        "EnableSaving": false,
        "Objectives": [],
        "Bricks": ["assembly:/_pro/scenes/missions/salty/mission_seagull/contracts_mode.brick","assembly:/_pro/scenes/missions/salty/mission_seagull/rain.brick","assembly:/_pro/scenes/missions/salty/mission_seagull/night.brick"],
        "GameDifficulties": [],
        "GameChangers": ["61a618c2-1cfc-46fa-846b-467de76042d6",
      "b48bb7f9-b630-48cb-a816-720ed7959319",
      "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
      "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
      "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
      "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
      "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
      "f96e94b7-1c0e-49c9-9332-07346a955fd2",
      "95690829-7da4-4225-a087-08918cccf120"],
        "Entrances": [],
        "Stashpoints": [
            "384c9fcb-6f7f-41b9-9029-cc6b3f583355",
            "384c9fcb-6f7f-41b9-9029-cc6b3f583353"
          ]
    },
    "Metadata": {
        "Location": "LOCATION_SALTY_SEAGULL",
        "Title": "UI_CONTRACT_CREATE_CONTRACT_TITLE",
        "CodeName_Hint": "SC_Seagull",
        "ScenePath": "assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull_sandbox.entity",
        "Description": "UI_CONTRACT_CREATE_CONTRACT_DESC",
        "Id": "00c57709-e049-44c9-a1b2-7655e19884fd",
        "CreationTimestamp": "2014-04-04T09:41:25.473Z",
        "LastUpdate": "2015-05-19T09:56:04.984Z",
        "Type": "creation",
        "Release": "2.20.x",
        "CreatorUserId": "ae4a3efe-63c9-43e9-8f57-67678b9f95e2",
        "IsPublished": true,
        "TileImage": "images/hantunight.jpg",
        "BackgroundImage": "images/contracts/seagull/tile_background.jpg",
        "Entitlements": ["LOCATION_SALTY"]
    },
    "UserData": {}
},
{
    "Data": {
        "EnableSaving": false,
        "Objectives": [],
        "Bricks": ["assembly:/_pro/scenes/missions/salty/mission_seagull/contracts_mode.brick"],
        "GameDifficulties": [],
        "GameChangers": ["61a618c2-1cfc-46fa-846b-467de76042d6",
      "b48bb7f9-b630-48cb-a816-720ed7959319",
      "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
      "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
      "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
      "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
      "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
      "f96e94b7-1c0e-49c9-9332-07346a955fd2",
      "95690829-7da4-4225-a087-08918cccf120"],
        "Entrances": [],
        "Stashpoints": [
            "384c9fcb-6f7f-41b9-9029-cc6b3f583355",
            "384c9fcb-6f7f-41b9-9029-cc6b3f583353"
          ]
    },
    "Metadata": {
        "Location": "LOCATION_SALTY_SEAGULL",
        "Title": "UI_CONTRACT_CREATE_CONTRACT_TITLE",
        "CodeName_Hint": "SC_Seagull",
        "ScenePath": "assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull_sandbox.entity",
        "Description": "UI_CONTRACT_CREATE_CONTRACT_DESC",
        "Id": "00c57709-e049-44c9-a1b3-7655e19884fd",
        "CreationTimestamp": "2014-04-04T09:41:25.473Z",
        "LastUpdate": "2015-05-19T09:56:04.984Z",
        "Type": "creation",
        "Release": "2.20.x",
        "CreatorUserId": "ae4a3efe-63c9-43e9-8f57-67678b9f95e2",
        "IsPublished": true,
        "TileImage": "images/locations/location_salty/tile.jpg",
        "BackgroundImage": "images/contracts/seagull/tile_background.jpg",
        "Entitlements": ["LOCATION_SALTY"]
    },
    "UserData": {}
}]

var LOCATION_SALTY_SEAGULL = "LOCATION_SALTY_SEAGULL"
var LOCATION_SALTY_NIGHT = "LOCATION_SALTY_NIGHT"

var DaytimeLocationData = {
		Id: "LOCATION_SALTY_SEAGULL",
		Type: "location",
		Subtype: "sublocation",
		GameAsset: null,
		ImageId: "",
		RMTPrice: -1,
		GamePrice: -1,
		IsPurchasable: false,
		IsPublished: true,
		IsDroppable: false,
		Capabilities: [],
		Qualities: {},
		Properties: {
			ParentLocation: "LOCATION_PARENT_SALTY",
			Icon: "images/locations/location_salty/tile.jpg",
			Background: "images/contracts/seagull/tile_background.jpg",
			DlcImage: "images/livetile/dlc/tile_hitman3.jpg",
			DlcName: "GAME_STORE_METADATA_S3_GAME_TITLE",
			LockedIcon: "images/contracts/seagull/tile_background.jpg",
			IsLocked: false,
			UpcomingContent: false,
			UpcomingKey: "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			Order: 69,
			Season: 2,
			ProgressionKey: "LOCATION_SALTY",
			CreateContractId: "00c57709-e049-44c9-a1b3-7655e19884fd",
			RequiredResources: ["[assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull_sandbox.entity].entitytemplate"],
			Entitlements: ["LOCATION_SALTY"]
		},
		Guid: "a24c04e8-1bc2-45a2-b370-6fc1bcac488f",
		Rarity: null
	}

var NighttimeLocationData = {
		Id: "LOCATION_SALTY_NIGHT",
		Type: "location",
		Subtype: "sublocation",
		GameAsset: null,
		ImageId: "",
		RMTPrice: -1,
		GamePrice: -1,
		IsPurchasable: false,
		IsPublished: true,
		IsDroppable: false,
		Capabilities: [],
		Qualities: {},
		Properties: {
			ParentLocation: "LOCATION_PARENT_SALTY",
			Icon: "images/hantunight.jpg",
			Background: "images/contracts/seagull/tile_background.jpg",
			DlcImage: "images/livetile/dlc/tile_hitman3.jpg",
			DlcName: "GAME_STORE_METADATA_S3_GAME_TITLE",
			LockedIcon: "images/contracts/seagull/tile_background.jpg",
			IsLocked: false,
			UpcomingContent: false,
			UpcomingKey: "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			Order: 69,
			Season: 2,
			ProgressionKey: "LOCATION_SALTY",
			CreateContractId: "00c57709-e049-44c9-a1b2-7655e19884fd",
			RequiredResources: ["[assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull_sandbox.entity].entitytemplate"],
			Entitlements: ["LOCATION_SALTY"]
		},
		Guid: "245cc871-c09e-46c8-a708-e47376f509d2",
		Rarity: null
	}

module.exports = function SandboxHantuPlugin(controller) {
    if (!controller.smf.modIsInstalled("KevinRudd.SandboxHantu")) {
        log(LogLevel.ERROR, "[Sandbox Hantu] Mod currently not deployed, please deploy it in SMF")
        return
    }


    controller.hooks.getContractManifest.tap("SandboxHantu", (id) => {        
        if (id === "00e57709-e049-44c9-a2c3-7655e19884fb") {
            return {
                "Data": {
                    "EnableSaving": true,
                    "EnableExits": {
                        "$eq": [
                          "$80621eca-eddf-4167-a9fe-912e8f476b73",
                          "$0b6ae576-32d0-4d09-990a-ab16e9987bae",
                          "$dd100889-2a9e-4ed0-91c2-b780ae77e53f",
                          "Completed"
                        ]
                      },
                    "Objectives": [
                        {
                            "Comment": "--- Primary Target 1 ---",
                            "Id": "80621eca-eddf-4167-a9fe-912e8f476b73",
                            "Primary": true,
                            "SuccessEvent": {
                                "EventName": "Kill",
                                "EventValues": {
                                    "RepositoryId": "22283ca4-89cf-4235-be1d-4f76cd1bd321"
                                }
                            }
                        }, {
                            "Comment": "--- Primary Target 2 ---",
                            "Id": "0b6ae576-32d0-4d09-990a-ab16e9987bae",
                            "Primary": true,
                            "SuccessEvent": {
                                "EventName": "Kill",
                                "EventValues": {
                                    "RepositoryId": "55334e2d-45c6-41b3-920e-aeb5c5111b37"
                                }
                            }
                        }, {
                            "Comment": "--- Primary Target 3 ---",
                            "Id": "dd100889-2a9e-4ed0-91c2-b780ae77e53f",
                            "Primary": true,
                            "SuccessEvent": {
                                "EventName": "Kill",
                                "EventValues": {
                                    "RepositoryId": "0a4e517a-e1e1-41d7-af91-751bc663df35"
                                }
                            }
                        }, {
                            "Comment": "----- Do not Eliminate Main Hostage -----",
                            "Id": "0b935cd6-8ca4-4094-81a4-2b1c24465cee",
                            "Primary": true,
                            "ForceShowOnLoadingScreen": true,
                            "ObjectiveType": "custom",
                            "ExcludeFromScoring": true,
                            "LongBriefingText": "$loc UI_CONTRACT_SEAGULL_RESCUE_DESC",
                            "Image": "images/contracts/seagull/tile_hostages.jpg",
                            "BriefingName": "$loc UI_CONTRACT_SEAGULL_RESCUE_NAME",
                            "BriefingText": "$loc UI_CONTRACT_SEAGULL_RESCUE_OBJ",
                            "HUDTemplate": {
                                "display": "$loc UI_CONTRACT_SEAGULL_RESCUE_OBJ",
                                "iconType": 17
                            },
                            "Type": "statemachine",
                            "Definition": {
                                "display": {
                                    "iconType": 17
                                },
                                "Scope": "session",
                                "States": {
                                    "Start": {
                                        "Main_Hostage_Down": {
                                            "Transition": "Failure"
                                        },
                                        "AllTargetsDown": {
                                            "Transition": "Start"
                                        }
                                    }
                                }
                            }
                        }, {
                            "Id": "22bdf176-4ca4-4075-9ce3-ea792392983e",
                            "Type": "statemachine",
                            "Category": "condition",
                            "ExcludeFromScoring": true,
                            "OnActive": {
                                "IfInProgress": {
                                    "Visible": false
                                },
                                "IfCompleted": {
                                    "Visible": false
                                },
                                "IfFailed": {
                                    "Visible": false
                                }
                            },
                            "Definition": {
                                "Scope": "session",
                                "Context": {},
                                "States": {
                                    "Start": {
                                        "TargetsEscaping": {
                                            "Transition": "Success"
                                        }
                                    }
                                }
                            }
                        }, {
                            "Activation": {
                                "$eq": ["$22bdf176-4ca4-4075-9ce3-ea792392983e", "Completed"]
                            },
                            "Id": "bee28940-3092-4639-b24a-5c7e16e94d07",
                            "BriefingText": "$loc UI_CONTRACT_ELUSIVE_STATE_FAILED",
                            "IsHidden": true,
                            "ExcludeFromScoring": true,
                            "HUDTemplate": {
                                "display": "$loc UI_CONTRACT_SEAGULL_Objective_StopEvacuation"
                            },
                            "IgnoreIfInactive": true,
                            "OnActive": {
                                "IfCompleted": {
                                    "Visible": false
                                },
                                "IfInProgress": {
                                    "Visible": false
                                },
                                "IfFailed": {
                                    "Visible": false
                                }
                            },
                            "Scope": "session",
                            "Type": "statemachine",
                            "Definition": {
                                "Context": {},
                                "States": {
                                    "Start": {
                                        "MainTargetEscaped": {
                                            "Transition": "Failure"
                                        },
                                        "PreventedEvacuation": {
                                            "Transition": "Success"
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    "Bricks": ["assembly:/_pro/scenes/missions/Salty/mission_seagull/mission_seagull_sandbox.brick"],
                    "GameDifficulties": [{
                        "Difficulty": "easy",
                        "Bricks": []
                    }, {
                        "Difficulty": "normal",
                        "Bricks": []
                    }, {
                        "Difficulty": "hard",
                        "Bricks": ["assembly:/_pro/scenes/missions/salty/mission_seagull/difficulty_hard_hantu.brick"]
                    }
                ],
                    "GameChangers": []
                },
                "Metadata": {
                    "DebriefingVideo": "debriefing_seagull",
                    "Location": "LOCATION_SALTY_SEAGULL",
                    "Title": "UI_CONTRACT_SEAGULL_TITLE",
                    "CodeName_Hint": "SC_Seagull",
                    "ScenePath": "assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull_sandbox.entity",
                    "Description": "UI_CONTRACT_SEAGULL_DESC",
                    "Id": "00e57709-e049-44c9-a2c3-7655e19884fb",
                    "CreationTimestamp": "2014-04-04T09:41:25.473Z",
                    "LastUpdate": "2015-05-19T09:56:04.984Z",
                    "Type": "flashback",
                    "Subtype": "flashback",
                    "Release": "2.20.x",
                    "CreatorUserId": "ae4a3efe-63c9-43e9-8f57-67678b9f95e2",
                    "IsPublished": true,
                    "TileImage": "images/sandbox_tile.jpg",
                    "BriefingVideo": "briefing_seagull",
                    "BackgroundImage": "images/contracts/seagull/tile_background.jpg",
                    "Entitlements": ["LOCATION_SALTY"]
                },
                "UserData": {}
            }
        }
    })

    controller.configManager.configs.Entrances["assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull_sandbox.entity"] = [
        "e690549c-d035-46fe-b175-2b73e1c048d3",
        "e690549c-d035-46fe-b175-2b73e1c048d2",
        "e690549c-d035-46fe-b175-2b73e1c048d1"
    ]
	controller.configManager.configs.AgencyPickups["assembly:/_pro/scenes/missions/salty/mission_seagull/scene_seagull_sandbox.entity"] = [
        "384c9fcb-6f7f-41b9-9029-cc6b3f583355",
        "384c9fcb-6f7f-41b9-9029-cc6b3f583353"

    ]

    contracts.forEach((contract) => {
        controller.addMission(contract)

    })

    controller.configManager.configs.LocationsData.parents.LOCATION_PARENT_SALTY.Properties.Order = 160
    controller.configManager.configs.LocationsData.children[LOCATION_SALTY_SEAGULL] = DaytimeLocationData
    controller.configManager.configs.LocationsData.children[LOCATION_SALTY_NIGHT] = NighttimeLocationData

    log(LogLevel.INFO, "[Sandbox Hantu] Plugin successfully loaded. Access via Destinations menu")
}

