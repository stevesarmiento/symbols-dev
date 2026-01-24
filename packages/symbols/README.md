# Symbols

S̶F̶ Symbols for the web, a comprehensive icon library designed for easy integration into your web projects.

## Installation

To use `symbols` in your project, install it via npm:

```shell
npm install symbols-react
```
Or via yarn:

```shell
yarn add symbols-react
```

## Usage

After installation, you can import and use the icons in your React components:
```shell
import { IconMangoFill, IconAppleLogo } from 'symbols-react';
 
 function MyApp() {
      return (
        <div>
          <IconMangoFill fill="black" />
          <IconAppleLogo fill="black" />
        </div>
      );
    }
```

Props, tailwind, style how you like:
```shell
import { IconMangoFill } from 'symbols-react';
 
 function MyApp() {
      return (
        <div>
          //Tailwind example
          <IconMangoFill className="fill-black w-[24] h-[24]" />

          //Props example
          <IconMangoFill fill="black" width="24" height="24" />
        </div>
      );
    }
```

## Contributing

Contributions are welcome! Please check out the [issues](https://github.com/stevesarmiento/symbols/issues) on GitHub for guidelines.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for more legal bs.
