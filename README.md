# Naive classifier bayesian with sqlite
## Use libs

```js
npm init ad-classifier
```
```js
const Classifer = require("ad-classifier");
const instans = new Classifer("profile_1")
```
Для запуска нужно указать профиль (проверьте возможность дефолтного запуска), при создании инстанса класса.

Для "обучения", нужно воспользоваться методом .learn()
```js
instans.learn([
    { token: "Dog", word: "Barks and bites" },
    { token: "Cat", word: "Purring and sleeping" },
    ]);
```
Для получения результата классификатора, нужно вызвать метод .classify()
```js
instans.classify("Just eating and sleeping") // "Cat"
```