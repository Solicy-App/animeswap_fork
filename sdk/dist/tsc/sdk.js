"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.NetworkType = void 0;
const aptos_1 = require("aptos");
const SwapModule_1 = require("./modules/SwapModule");
const RouteModule_1 = require("./modules/RouteModule");
const MasterChefModule_1 = require("./modules/MasterChefModule");
const ResourcesModule_1 = require("./modules/ResourcesModule");
var NetworkType;
(function (NetworkType) {
    NetworkType[NetworkType["Mainnet"] = 0] = "Mainnet";
    NetworkType[NetworkType["Devnet"] = 1] = "Devnet";
    NetworkType[NetworkType["Testnet"] = 2] = "Testnet";
})(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
class SDK {
    /**
     * SDK constructor
     * @param nodeUrl string
     * @param networkType? NetworkType
     */
    constructor(nodeUrl, networkType) {
        const mainnetOptions = {
            nativeCoin: '0x1::aptos_coin::AptosCoin',
            modules: {
                Scripts: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeSwapPoolV1',
                CoinInfo: '0x1::coin::CoinInfo',
                CoinStore: '0x1::coin::CoinStore',
                DeployerAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57',
                ResourceAccountAddress: '0x70e66f1b792bdf49275461a3a39bda125257771784b7f0fffdbaaccd78be588e',
                AniAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeMasterChefV1::ANI',
                MasterChefScripts: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeMasterChefV1',
                MasterChefDeployerAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57',
                MasterChefResourceAccountAddress: '0x8615f5671592532631e56c76ca09d332fae1cd03d463bc379eec1007973966ef', // WIP
            },
        };
        const devnetOptions = {
            nativeCoin: '0x1::aptos_coin::AptosCoin',
            modules: {
                Scripts: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeSwapPoolV1',
                CoinInfo: '0x1::coin::CoinInfo',
                CoinStore: '0x1::coin::CoinStore',
                DeployerAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57',
                ResourceAccountAddress: '0x70e66f1b792bdf49275461a3a39bda125257771784b7f0fffdbaaccd78be588e',
                AniAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeMasterChefV1::ANI',
                MasterChefScripts: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeMasterChefV1',
                MasterChefDeployerAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57',
                MasterChefResourceAccountAddress: '0x8615f5671592532631e56c76ca09d332fae1cd03d463bc379eec1007973966ef',
            },
        };
        const testnetOptions = {
            nativeCoin: '0x1::aptos_coin::AptosCoin',
            modules: {
                Scripts: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeSwapPoolV1f1',
                CoinInfo: '0x1::coin::CoinInfo',
                CoinStore: '0x1::coin::CoinStore',
                DeployerAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57',
                ResourceAccountAddress: '0x70e66f1b792bdf49275461a3a39bda125257771784b7f0fffdbaaccd78be588e',
                AniAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeMasterChefV1::ANI',
                MasterChefScripts: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57::AnimeMasterChefV1',
                MasterChefDeployerAddress: '0x801ccf2187d7c75da60294212613a29ea90d37abc5c98feefffcbcf87739ae57',
                MasterChefResourceAccountAddress: '0x8615f5671592532631e56c76ca09d332fae1cd03d463bc379eec1007973966ef',
            },
        };
        let networkOptions = mainnetOptions; // default network
        if (networkType == NetworkType.Mainnet)
            networkOptions = mainnetOptions;
        if (networkType == NetworkType.Devnet)
            networkOptions = devnetOptions;
        if (networkType == NetworkType.Testnet)
            networkOptions = testnetOptions;
        const options = {
            nodeUrl,
            networkOptions: networkOptions,
        };
        this._networkOptions = options.networkOptions;
        this._client = new aptos_1.AptosClient(options.nodeUrl);
        this._swap = new SwapModule_1.SwapModule(this);
        this._route = new RouteModule_1.RouteModule(this);
        this._masterchef = new MasterChefModule_1.MasterChefModule(this);
        this._resources = new ResourcesModule_1.ResourcesModule(this);
    }
    get swap() {
        return this._swap;
    }
    get route() {
        return this._route;
    }
    get MasterChef() {
        return this._masterchef;
    }
    get resources() {
        return this._resources;
    }
    get client() {
        return this._client;
    }
    get networkOptions() {
        return this._networkOptions;
    }
}
exports.SDK = SDK;
//# sourceMappingURL=sdk.js.map