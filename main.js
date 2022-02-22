'use strict'

module.exports = class Classifer {
    #ad;

    /**
     * @param {string} profile Profile libs
     */
    constructor(profile){
        this.#ad = require('./libs/napi.win32-x64-msvc.node');
        this.#ad.profile(profile);
    }

    /**
     * @param {string} string String from classify
     * @returns {string}
     */
    classify(string){
        return this.#ad.classify(string);
    }

    /**
     * @param {Object[]} model Array with params
     * @param {string} model[].token Token for learn
     * @param {string} model[].word Word for learn
     */
    learn(model){
        for(const {token, word} of model){
            this.#ad.learn(token, word);
        }
    }

    /**
     * @param {Object[]} model Array with params
     * @param {string} model[].token Token for learn
     * @param {string} model[].word Word for learn
     */
    unLearn(model){
        for(const {token, word} of model){
            this.#ad.unLearn(token, word);
        }
    }

    /**
     * @param {string} profileName Profile name
     */
    dropProfile(profileName){
        this.#ad.dropProfile(profileName);
    }

    /**
     * @param {string} string Token for remove
     */
    remove(string){
        this.#ad.removeToken(string)
    }
}