export const popupPhoto = document.querySelector('.popup_type_open-photo');
export const photoElemOpen = document.querySelector('.popup__open-photo');
export const titleElemOpen = document.querySelector('.popup__open-caption');

//сюда перенесла функцию для открытия попапов
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
  };

