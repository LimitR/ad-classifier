'use strict'

module.exports = class Classifer {
    #ad;

    /**
     * @param {string} profile Profile libs
     */
    constructor(profile){
        this.#ad = require('./libs/napi.win32-x64-msvc.node');
        if(!profile){
            this.#ad.profile('default');
        }else{
            this.#ad.profile(profile);
        }
        this.#ad.run();
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
        this.#ad.save();
    }

    /**
     * @param {string} token Token for learn
     * @param {string} word Word for learn
     */
    learnOne(token, word){
        this.#ad.learn(token, word);
        this.#ad.save();
    }

    /**
     * @param {Object[]} model Array with params
     * @param {string} model[].token Token for unlearn
     * @param {string} model[].word Word for unlearn
     */
    unLearn(model){
        for(const {token, word} of model){
            this.#ad.unLearn(token, word);
        }
        this.#ad.save();
    }

    /**
     * @param {string} token Token for unlearn
     * @param {string} word Word for unlearn
     */
    unLearnOne(token, word){
        this.#ad.unLearn(token, word);
        this.#ad.save();
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
        this.#ad.removeToken(string);
    }
}