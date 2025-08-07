# Steps to create a new project


DON'T FOLLOW THE SIMPLE VERSION AS IT REQUIRES HACKING AROUND THE CONFIG
AND HTML FILES TO MAKE IT WORK
BETTER TO USE WEBPACK OR ROLLUP

SIMPLE TYPESCRIPT PROJECT

1. `tsc --init` : initialise as typescript
2. `mkdir src dist` : create src folder for code, dist folder for compiled output
3. `touch src/index.ts` : create index file
4. In `tsconfig.json` : make `outDir` active to `./dist` folder
5. In `tsconfig.json` : add `include` option for `"src"` so it only builds from `src` folder


NOTE:
for now I am making these `false`iIn `tsconfig.json` until I understand what all the extra files it produces are for

```
    "sourceMap": false,
    "declaration": false,
    "declarationMap": false,
```