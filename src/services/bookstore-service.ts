import {Book} from "../constants/ActionTypes";

export default class BookstoreService {
    getBooks(): Book[] {
        return [
            {id: 1, name: 'Буря', author: 'Шекспир Уильям', price: 721, image: 'assets/1.png'},
            {id: 2, name: 'Шмель Анинка', author: 'Секора Ондржей', price: 395, image: 'assets/2.png'},
            {id: 3, name: 'Трое с площади Карронад', author: 'Крапивин Владислав', price: 303, image: 'assets/3.png'},
            {id: 4, name: 'Дети синего фламинго', author: 'Крапивин Владислав', price: 303, image: 'assets/4.png'},
            {id: 5, name: 'Муму', author: 'Тургенев Иван Сергеевич', price: 324, image: 'assets/5.png'},
            {id: 6, name: 'Стихи и песенки', author: 'Носов Николай', price: 478, image: 'assets/6.png'},
        ]
    }
}