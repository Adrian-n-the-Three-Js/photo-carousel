# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

TODO:
- figure out why the 3 album components on the right will re-render the 1st time i click either an arrow button or menu photo, & only the 1st time


- refactor assignFilters in generatePhotoInfo in seedHelpers.js to be more accurate to real life, e.g. follow actual categories/types of the photos rather than random?
- fill out trips for generatePhotoInfo based on actual trips user creates w/ UI
- refactor user contributions in generateUserInfo to count actual # of contributions per user?
- refactor Carousel & PhotoMenu into class components, move props/methods unique to those from App.jsx -> can't b/c methods use setState