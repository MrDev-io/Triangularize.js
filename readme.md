# Triangularize.js
**Current Version: v0.5.0**

A javascript plugin that generates a trianglular grid. [View on CodePen](https://codepen.io/NotDan/pen/BbMeVK)

 *Created By Daniel Baliczek*

## Dependencies
- jQuery 3.3.1

## Implementation

1. Import jQuery
    * tested in 3.3.1, unsure if this will work in previous versions of jQuery
    * untested, but the grid should generate in the slim build. Animations will not.
1. Import triangulate.js
1. Import the code where you call the $.triangularize() function
    * for example, $("#myElement").triangularize({triHeight: 40, spacingH: 20});
1. Import triangulate.css

## Roadmap
### v1: The Triangle Grid
* Adjust based on screen size
* Add option to show/hide either the upside down or rightside up triangle
* adjust amount of triangles generated with spacing
* Rename options to make them more intuitive
### v2: Triangularize animations
* Create Wave Function
    * add option for range of colors, in steps
    * add duration option
    * add width option?
    * always, onclick
* Create Sparkle Animation
    * add option for mutliple colors
    * add frequency option
    * add speed option
* Create Ripple Animation
    * onclick, random
    * add dissipate option
    * options for multiple colors
    * add duration option
    * add frequency option if random
* Create Pulse Animation
    * Colors option
    * Duration from change option
    * random option
* Allow Stacking of Animations, with prioriety being last
* Allow Animations to happen on events



|Info              |                  |
| -----------------|------------------|
|**Author:**       |Daniel Baliczek   |
|**Date Created:** |3/24/2019         |
|**Date Updated**  |3/24/2019         |
|**Contact**       |dan@mrdev.io      |