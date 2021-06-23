<h1 align="center">always when, never why :(</h1>
  
Whendys is a small library used to get the time since a Date represented in an ~~edible~~ readable format.
  
> "8 hours ago"

## Example

```ts
import {when} from 'whendys'

// pretend it's June 23, 2021!

// String
let delay = when('June 26, 2020') // => 11 months ago

// Date object
delay = when(new Date('June 22 2021'))  // => 1 day ago

// Milliseconds
delay = when(1623643200000) // => 1 week ago
```
