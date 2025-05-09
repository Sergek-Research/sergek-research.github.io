#!/bin/sh
yarn extract './src/**/*.ts*' --ignore='**/*.d.ts' --out-file ./lang/ru.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'
