# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun · u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

A program (Node.js, standard library only) that writes one deadpan weather
forecast for a city that does not exist to `/output/entry.txt`.

## The line

> Bramblewick: 72 and sunny, with a 40% chance of afternoon hail the size of regrets, falling mostly downtown.

108 characters, one sentence, no trailing newline.

Why this line: it is a real broadcast line first — temperature, chance,
timing, place — and the joke is the measurement itself: hail sized in
regrets, reported by a forecaster who treats it like any other Tuesday.
Chosen from 8 candidates compared head-to-head against the judge brief
(see the candidates file in the build notes); the field was leaning on
geese, second sunrises and gulls falling upward, so all of those were avoided.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
