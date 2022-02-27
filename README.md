# Naive classifier bayesian with sqlite
## Use libs

```powershell
npm i ad-classifier
```
```javascript
const Classifer = require("ad-classifier");
const instans = new Classifer("profile_1")
```
Для запуска нужно указать профиль , при создании инстанса класса, иначе будет использоваться дефолтный.

Для "обучения", нужно воспользоваться методом **.learn()**
```javascript
instans.learn([
    { token: "Dog", word: "Barks and bites" },
    { token: "Cat", word: "Purring and sleeping" },
    ]);
```
Для получения результата классификатора, нужно вызвать метод **.classify()**
```javascript
instans.classify("Just eating and sleeping") // "Cat"
```
Для удаления профиля, воспользуйтесь методом **.dropProfile()**
```javascript
instans.dropProfile("profile_1")
```
Для удаления неверных данных из памяти, нужно воспользоваться методом **.unLearn()**
```javascript
instans.unLearn([{ token: "Cat", word: "Purring and sleeping" }])
```

Для удаления токена и всех записей, воспользуйтесь методом **.remove()**
```javascript
instans.remove("Cat")
```