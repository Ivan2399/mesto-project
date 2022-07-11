export const config = {
    profile: {
        profileSelector: '.profile',
        profileEditButton: '.profile__button-edit',
        profileAddButton: '.profile__button-add',
        profileAvatarEditButton: '.profile__avatar-button-edit',
        profileAvatar : '.profile__avatar',
        profileName : '.profile__name',
        profileHobby : '.profile__hobby'
    },
    popup: {
        popupSelector: '.popup',
        popupEdit: '#popup-edit',
        popupEditAvatar: '#popup-avatar-edit',
        popupImage: '.popup__image',
        popupImageOpen: '#popup-image',
        popupImageTitle: '.popup__image-title',
        popupAdd: '#popup-add',
        popupExitButton: '.popup__button-exit',
        popupExitImageButton: '#imageClose',
        popupVisible: 'popup_opened'

    },
    form: {
        formSelector: '.popup__form',
        formInputSelector: '.popup__input-item',
        sumbitSelectorButton: '#button-submit',
        submitDisabledButton: 'popup__button_disabled',
        formErrorInput: 'popup__input-item_type_error',
        formErrorClass: 'popup__error_visible',
        formEditAvatarInput: '.popup__input-item_type_link',
        formEditNameInput: '.popup__input-item_type_name',
        formEditJobInput: '.popup__input-item_type_profession',
        formAddNameInput: '.popup__input-item_type_card-name',
        formAddLinkInput: '.popup__input-item_type_link',
    },
    card: {
        elements: '.elements',
        selectorCardElements: '#card',
        cardElements: '.elements__element',
        cardElementsTitle: '.elements__title',
        cardElementsTitleRow: 'elements__title-row',
        cardElementsImage: '.elements__image',
        cardElementsDeleteButton:'.elements__delete',
        cardElementsDeleteButtonVisible: 'elements__delete_visible',
        cardElementsLikeButton: '.elements__like',
        cardElementLikeActive: 'elements__like_active',
        cardElementsLikeCounter: '.elements__like-counter',
    },
    // preloader: {

    // }

}