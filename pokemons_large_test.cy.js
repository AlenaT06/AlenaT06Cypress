
describe ('Покемоны большой тест ', function () {
            it('Позитивная прорверка авторизации', function () {
                cy.visit('https://pokemonbattle.ru/login');//Заходим на сайт
                cy.get(':nth-child(1) > .auth__input').type('trubitsyna.alena@mail.ru');// В поле логин вводим корректный логин
                cy.get('#password').type('Alena12345');//В поле пароль вводим корректный пароль
                cy.get('.auth__button').click();// Нажимаем на кнопку "войти", 
                cy.get('.header__btn_active').visit ('https://pokemonbattle.ru/'); // Проверем, что после авторизации попадаем на страницу покемонов
        })
            it('Негативная прорверка авторизации', function () {
                cy.visit('https://pokemonbattle.ru/login');//Заходим на сайт
                cy.get(':nth-child(1) > .auth__input').type('trubitsyna.alena@mail.ru');// В поле логин вводим корректный логин
                cy.get('#password').type('Alena111111');//В поле пароль вводим НЕкорректный пароль
                cy.get('.auth__button').click();// Нажимаем на кнопку "войти", 
                cy.get(':nth-child(2) > .auth__error').contains('Неверные логин или пароль'); // Проверем, что после авторизации получаем сообщение "Неверные логин или пароль"
          
        })
            it('Прорверка валидации', function () {
                cy.visit('https://pokemonbattle.ru/login');//Заходим на сайт
                cy.get(':nth-child(1) > .auth__input').type('trubitsyna.alenamail.ru');// В поле логин вводим логин без "@"
                cy.get('#password').type('Alena12345');//В поле пароль вводим корректный пароль
                cy.get('.auth__button').click();// Нажимаем на кнопку "войти", 
                cy.get(':nth-child(1) >.auth__error').contains('Введите почту'); // Проверем, что после авторизации получаем сообщение "Введите почту"  
        })

            it ('Проверка перехода на страницу тренеров', function () {
                cy.visit('https://pokemonbattle.ru/login');//Заходим на сайт
                cy.get(':nth-child(1) > .auth__input').type('trubitsyna.alena@mail.ru');// В поле логин вводим корректный логин
                cy.get('#password').type('Alena12345');//В поле пароль вводим корректный пароль
                cy.get('.auth__button').click();// Нажимаем на кнопку "войти", 
                cy.get('body').visit('https://pokemonbattle.ru/trainer/7408');//Проверяем, что опция перехода на id тренера работает 
                cy.get('body').click().visit('https://pokemonbattle.ru/trainer/7408');// Переходим на страницу тренера
         })

         it ('Позитивная проверка покупки автара', function () { 
                cy.visit('https://pokemonbattle.ru/login');//Заходим на сайт
                cy.get(':nth-child(1) > .auth__input').type('trubitsyna.alena@mail.ru');// В поле логин вводим корректный логин
                cy.get('#password').type('Alena12345');//В поле пароль вводим корректный пароль
                cy.get('.auth__button').click();// Нажимаем на кнопку "войти", 
                cy.get('body').visit('https://pokemonbattle.ru/trainer/7408');//Проверяем, что опция перехода на id тренера работает 
                cy.get('body').click().visit('https://pokemonbattle.ru/trainer/7408');// Переходим на страницу тренера
                cy.get('[href="/shop"]').click().visit('https://pokemonbattle.ru/shop');//Проверяем переход в магазин аватаров
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111')//Вводим номер действующей карты
                cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); // Вводим корректный срок действия карты
                cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//Вводдим корректный cvv код 
                cy.get('.k_input_name').type('NAME');// Вводим корректное имя держателя карты
                cy.get('.pay-btn').click();//Нажимаем кнопку Оплатить 
                cy.get('#cardnumber').type('56456').click();//Вводим корректный код пуш-сообщения
                cy.get('.payment__submit-button').click()//Нажимаем кнопку отправить 
                cy.get('.payment__padding').contains('Покупка прошла успешно');//Получаем сообщение об успешной оплате
                cy.get('.payment__adv').contains('Вернуться в магазин').contains('https://pokemonbattle.ru/shop'); // Нажимаем кнопку вернуться в магазин  
        })

        it ('Негативная  проверка покупки автара (Некорректные платежные данные сard number)', function () { 
                
                cy.visit('https://pokemonbattle.ru/login');//Заходим на сайт
                cy.get(':nth-child(1) > .auth__input').type('trubitsyna.alena@mail.ru');// В поле логин вводим корректный логин 
                cy.get('#password').type('Alena12345');//В поле пароль ввожу корректный пароль
                cy.get('.auth__button').click();// Нажимаю на кнопку "войти", 
                cy.get('.header__container > .header__id').visit('https://pokemonbattle.ru/trainer/7408');//Проверяем, что опция перехода на id тренера работает 
                cy.get('body').click().visit('https://pokemonbattle.ru/trainer/7408');// Переходим на страницу тренера
                cy.get('[href="/shop"]').click().visit('https://pokemonbattle.ru/shop');//Проверяем переход в магазин аватаров
                cy.get(':nth-child(9) > .shop__button').click().visit('https://pokemonbattle.ru/payment/6');//Выбираем понравившийся аватар,нажимаю кнопку купить
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1112')//Вводим Некорректный номер карты
                cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); //Ввождим корректный срок действия карты 
                cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//Вводим корректный CVV код
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay__mistake-v2').contains('Неверный номер карты');// Проверяем, что сайт выдает ошибку "Неверный номер карты"
                cy.get('.pay-btn').click();//Проверяем, что кнопка сайта неактивна
        }) 
        it ('Негативная  проверка покупки автара (Некорректные платежные данные cvv)', function () { 
            
                cy.visit('https://pokemonbattle.ru/login');//Заходим на сайт
                cy.get(':nth-child(1) > .auth__input').type('trubitsyna.alena@mail.ru');// В поле логин вводим корректный логин 
                cy.get('#password').type('Alena12345');//В поле пароль ввожу корректный пароль
                cy.get('.auth__button').click();// Нажимаемна кнопку "войти", 
                cy.get('.header__container > .header__id').visit('https://pokemonbattle.ru/trainer/7408');//Проверяем, что опция перехода на id тренера работает 
                cy.get('body').click().visit('https://pokemonbattle.ru/trainer/7408');// Переходим на страницу тренера
                cy.get('[href="/shop"]').click().visit('https://pokemonbattle.ru/shop');//Проверяем переход в магазин аватаров
                cy.get(':nth-child(9) > .shop__button').click().visit('https://pokemonbattle.ru/payment/6');//Выбираем понравившийся аватар,нажимаю кнопку купить
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111')//Вводим корректный номер карты
                cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); //Вводим корректный срок действия карты 
                cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('000');//Вводим НЕКОРРЕКТНЫЙ CVV код
                cy.get('.pay-inputs-box > :nth-child(2) > .pay__mistake-v2').contains('Неверный код');//Проверяем, что получаю сообщение "Неверный код"
                cy.get('.pay-btn').click();//Проверя, что кнопка сайта неактивна
        })

    })
