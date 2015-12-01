Unlike many other languages, JavaScript numbers are always stored as floating
point numbers. Floating point numbers are a trade-off between range and precision.
This means they can handle a larger range of numbers, but will be less precise.

Example:
```javascript
0.2 + 0.1
// expect 0.3, get 0.30000000000000004
```

To get around this, you can multiply and divide, or use method to specify how many decimal points you want.

```javascript
(0.2 * 10 + 0.1 * 10) / 10;
+((0.2 + 0.1).toFixed(1));
// both will be 0.3
```
