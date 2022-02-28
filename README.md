# Naive classifier bayesian with sqlite
## Usage

```powershell
npm i ad-classifier
```
```javascript
const Classifer = require("ad-classifier");
const instans = new Classifer("profile_1")
```
To create an instance of a class, you can choose a profile name and point from constructor or just leave it blank. Then it will be used default profile.

For teach a classify, you can used to methods: **.learn()** or **.learnOne()**
```javascript
instans.learn([
    { token: "Dog", word: "Barks and bites" },
    { token: "Cat", word: "Purring and sleeping" },
    ]);

instans.learnOne("Dog", "Barks and bites");
```
For take result a classifying, you can used method: **.classify()**
```javascript
instans.classify("Just eating and sleeping") // "Cat"
```
For remove profile, you can used method: **.dropProfile()**
```javascript
instans.dropProfile("profile_1")
```
For removed a wrong data in classify, you can used methods: **.unLearn()** or **.unLearnOne()**
```javascript
instans.unLearn([{ token: "Cat", word: "Purring and sleeping" }])
instans.unLearnOne("Cat", "Purring and sleeping")
```

For remove token and all data with it, you can used method: **.remove()**
```javascript
instans.remove("Cat")
```