# RelaxNG Explanation

## xsd:duration
 The format of xsd:duration is PnYnMnDTnHnMnS, where P is a literal value that starts the expression, nY is the number of years followed by a literal Y, nM is the number of months followed by a literal M, nD is the number of days followed by a literal D, T is a literal value that separates the date and time, nH is the number of hours followed by a literal H, nM is the number of minutes followed by a literal M, and nS is the number of seconds followed by a literal S

```xml
<duration dur="P2Y6M5DT12H35M30S">2 years, 6 months, 5 days, 12 hours, 35 minutes, 30 seconds</duration>
```
```relaxNG
duration = element duration {dur, text}
dur = attribute dur {xsd:duration}
```