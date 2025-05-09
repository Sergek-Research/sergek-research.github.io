#!/bin/sh
yarn compile ./lang/ru.json --ast --out-file ./src/compiled-lang/ru.json

yarn compile ./lang/en.json --ast --out-file ./src/compiled-lang/en.json
