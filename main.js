'use strict'

module.exports = class Classifer {
    #ad;

    /**
     * @param {string} profile Profile libs
     */
    constructor(profile){
        this.#ad = require('lib/napi.win32-x64-msvc.node');
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
}