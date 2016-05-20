The tilde (`~`) is the bitwise NOT operator. `~x` is roughly the same as `-(x+1)`.

The double tilde (`~~`) is simply two single tilde operators, and so performs a bitwise complement twice. The side-effect is that the value gets converted to an integer number. Hence, `~~` is often used as a faster alternative to `Math.floor`.

```javascript
console.log(Math.floor(42.01))
// 42

console.log(~~42.01)
// 42
```
