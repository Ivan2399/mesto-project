export const config = {
    profile: {
        selector: '.profile',
        editButton: '.profile__button-edit',
        addButton: '.profile__button-add',
        avatarEditButton: '.profile__avatar-button-edit',
        avatar : '.profile__avatar',
        profileName : '.profile__name',
        hobby : '.profile__hobby'
    },
    popup: {
        selector: '.popup',
        popupEdit: '#popup-edit',
        popupEditAvatar: '#popup-avatar-edit',
        popupImage: '.popup__image',
        popupImageOpen: '#popup-image',
        popupImageTitle: '.popup__image-title',
        popupAdd: '#popup-add',
        popupExitButton: '.popup__button-exit'


    },
    form: {
        formSelector: '.popup__form',
        formInputSelector: '.popup__input-item',
        inputs: {
            name: '#name',
            about: '#profession',
            link: '#link',
            avatar: '#pic',
          },

        formEditAvatarInput: '.popup__input-item_type_link',
        formEditNameInput: '.popup__input-item_type_name',
        formEditJobInput: '.popup__input-item_type_profession',
        formAddNameInput: '.popup__input-item_type_card-name',
        formAddLinkInput: '.popup__input-item_type_link',


    },
    cards: {
        selectorContainer: '#card',
        card: '.elements',

    },
    // preloader: {

    // }

}