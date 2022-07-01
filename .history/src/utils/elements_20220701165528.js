import {config} from "./Config";

export const elements = {
    cardsElementsContainer: document.querySelector(config.card.cardElements),
    cardsElementsTemplate: document.querySelector(config.card.selectorCardElements),

    profileName: document.querySelector(config.profile.profileName),
    profileHobby: document.querySelector(config.profile.profileHobby),

}