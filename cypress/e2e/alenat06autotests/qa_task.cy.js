describe('Проверка авторизации', function () {

    it('Позитивная проверка', function () {
         cy.visit('https://login.qa.studio/'); // переходим на сайт "https://login.qa.studio/"
         cy.get('#mail').type('german@dolnikov.ru');// в поле логин вводим корректный логин
         cy.get('#pass').type ('iLoveqastudio1'); // в поле пароль вводим верный пароль
         cy.get('#loginButton').click(); // нажимаем кнопку "войти"
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем? что получаем сообщение "Авторизация прошла успешно"
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что кнопка "крестик" видна пользователям 
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // переходим на сайт "https://login.qa.studio/"
        cy.get('#forgotEmailButton').click(); // нажимаем кнопку "забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru');// вводим верный логин 
        cy.get('#restoreEmailButton').click(); // нажимаем кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяем, что получаем сообщение "Успешно отправили пароль на e-mail"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что кнопка "крестик" видна пользователям 
    })
    it('Негативная проверка', function () {
        cy.visit('https://login.qa.studio/'); // переходим на сайт "https://login.qa.studio/"
        cy.get('#mail').type('german@dolnikov.ru');// в поле логин вводим корректный логин
        cy.get('#pass').type ('iLoveqastudio222'); // в поле пароль вводим НЕверный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем? что получаем сообщение "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что кнопка "крестик" видна пользователям 
    })
    it('Негативная проверка', function () {
        cy.visit('https://login.qa.studio/'); // переходим на сайт "https://login.qa.studio/"
        cy.get('#mail').type('german@olnikov.ru');// в поле логин вводим НЕкорректный логин 
        cy.get('#pass').type ('iLoveqastudio1'); // в поле пароль вводим верный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем? что получаем сообщение "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что кнопка "крестик" видна пользователям 
    })
    it('Негативная проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // переходим на сайт "https://login.qa.studio/"
        cy.get('#mail').type('germandolnikov.ru');// в поле логин вводим  логин без @
        cy.get('#pass').type ('iLoveqastudio1'); // в поле пароль вводим верный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку "войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяем, что получаем сообщение "Нужно исправить проблему валидации"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что кнопка "крестик" видна пользователям 
    })

    it('Проверка строчных букв в логине', function () {
        cy.visit('https://login.qa.studio/'); // переходим на сайт "https://login.qa.studio/"
        cy.get('#mail').type('GerMan@Dolnikov.ru');// в поле логин вводим  логин в формате "GerMan@Dolnikov.ru"
        cy.get('#pass').type ('iLoveqastudio1'); // в поле пароль вводим верный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку "войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем, что получаем сообщение "Авторизация прошла успешно"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что кнопка "крестик" видна пользователям 
    })

 }) 