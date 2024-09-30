# @sliderzz/daz-ui

`@sliderzz/daz-ui` is a React component library that provides reusable UI components for your projects. Currently, it includes the `Dazcard` component.

## Installation

You can install `@sliderzz/daz-ui` via npm or yarn:

### Using npm

```bash
npm install @sliderzz/daz-ui
```

### Using yarn

```bash
yarn add @sliderzz/daz-ui
```

## Usage

### Importing Components

To use the `Dazcard` component, import it from `@sliderzz/daz-ui`:

```typescript
import { Dazcard } from "@sliderzz/daz-ui";
```

### Example

Here’s a basic example of how to use the our component in a React application:

```typescript
// The Dazcard component accepts the following props:
// 1. title (string): The title to display on the card.
// 2. desc (string): The description to display on the card.

import React from "react";
import { Dazcard } from "@sliderzz/daz-ui";

const App = () => (
    <div>
        <Dazcard
            title="Card Title"
            desc="This is a description of the card."
        />
    </div>
);

export default App;
```

Feel free to use amazing components!
