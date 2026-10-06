# Color Converter

## Purpose

Color Converter is a simple Node.js application that converts hexadecimal color values into RGB values.

For example:

`#FF5733` → `RGB(255, 87, 51)`

The project is developed as a DevOps course project and will be gradually extended with automated testing, a REST API, a graphical user interface, logging, continuous integration, and deployment.

## Prerequisites

Before using this application, make sure the following software is installed:

* Node.js
* npm

You can check the installed versions with:

```bash
node --version
npm --version
```

## Dependencies

This project uses the following external dependency:

* [Chalk](https://www.npmjs.com/package/chalk) - used to improve the readability of command-line output.

The dependency is listed in `package.json` and is installed automatically with `npm install`.

## Installation

Clone or download the project and navigate to the project directory:

```bash
cd color-converter
```

Install the project dependencies:

```bash
npm install
```

## Usage

Run the application with:

```bash
node main.js
```

Enter a hexadecimal color value when prompted.

For example:

```text
Enter a hexadecimal color: #FF5733
RGB(255, 87, 51)
```

The application converts the hexadecimal color value into its corresponding RGB values.

## Maintainer

Ting
