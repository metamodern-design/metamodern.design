import pkg from './package.json';


const typefaces = Object.keys(pkg.dependencies).filter(
  (str) => str.startsWith('typeface-'),
);


const assets = typefaces.map((name) => [
  `node_modules/${name}/files`,
  'files',
]);


const designSystemConfig = {
  variants: {
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    padding: ['responsive'],
  },
};


const postcss = {
  external: typefaces,
};


const metamodernConfig = {
  assets,
  designSystemConfig,
  postcss,
};


export default metamodernConfig;
