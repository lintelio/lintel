Lintel
======

[![Circle CI](https://circleci.com/gh/lintelio/lintel.svg?style=shield&circle-token=4e7638ed20ea1fad8670cb4482b05c186c5e53d3)](https://circleci.com/gh/lintelio/lintel)
[![npm](https://img.shields.io/npm/v/lintel.svg)](https://www.npmjs.com/package/lintel)
[![Bower](https://img.shields.io/bower/v/lintel.svg)](https://github.com/lintelio/lintel)


Lintel aims to be the next generation CSS framework for scalable applications.


Goals
-----

### Overall

- consistent variables
- consistent classes
- modular (through bower)
- extensible (through mixins)
- minimal markup
- accessible
- modern


### Consistent Variables
Variable names should be consistent for all modules. They should be consistent in their naming structure as well as their usage.

#### Global vs Module Specific
Global variables will be used to provide consistent spacing and colors. However, each module will have its own variables that inherit by default from the global ones. The idea behind this is to provide consistency by default, but allow for easy customization.

#### Naming Scheme

###### Size Related Variables
Clothing size suffixes will be used for size related variables, such as widths, paddings, and margins.

`*-#xs`  
`*-2xs`  
`*-xs`  
`*-sm`  
`*-md`  
`*-lg`  
`*-xl`  
`*-2xl`  
`*-#xl`  

###### Time Related Variables
`*-fastest`  
`*-faster`  
`*-fast`  
`*-base`  
`*-slow`  
`*-slower`  
`*-slowest`  

###### Color Related Variables
`*-darkest`  
`*-darker`  
`*-dark`  
`*-base`  
`*-light`  
`*-lighter`  
`*-lightest`  

###### Element Suffixes
`*-bg`  
`*-border`  
`*-text`  
`*-link`  

###### Modifier Suffixes
`*-hover`  
`*-active`  


### Consistent Classes
Class names should be consistent in structure. They will use BEM structure, but not the BEM syntax. As a reminder, the BEM structure is as follows:

`.block-element-modifier`  

###### Directional Modifiers
`*-y`  
`*-x`  
`*-top`  
`*-right`  
`*-bottom`  
`*-left`  

###### Style Modifiers
`*-primary`  
`*-secondary`  
`*-danger`  
`*-warning`  
`*-success`  
`*-inverse`  


### Modular
Lintel aims to be modular through bower. This has several advantages.

##### Semver
Each module will have its own semver, which means each module can be updated separately from the core. Semver dependencies can protect against incompatible module versions.

##### Quicker release cycles
Each module can be pushed as soon as it is ready, without worrying about unrelated changes to other modules. For example, if a user discovers a bug in the modals, it can be fixed and pushed out quickly. Users can then update only that module instead of updating everything, which may include breaking changes.

##### Easier forking
Users who need to fork the project and change only a certain part of it will not have to worry about pulling in upstream changes for unrelated parts of the project.

##### Healthier community
Any user can create a module to share with the rest of the world.


### Extensible
Lintel aims to use mixins to be extensible with minimal code required on the user's end.


### Minimal Markup
Lintel aims to require minimal markup needed in templates/views. Unnecessary wrappers should be avoided at all costs.


### Accessibility
Lintel aims to keep accessibility best practices in mind in order for it to be used by any organization.


### Modern
Lintel aims to officially support only modern browsers. That being said, **Lintel will gracefully degrade for older browsers**. 

The following browser versions will receive official support:
- latest version of Chrome and Chrome MSI 
- latest version of Firefox ESR and up
- latest version of Safari and iOS Safari
- IE10+


Project Structure
-----------------

Lintel is divided in several modules under the [lintelio](https://github.com/lintelio) organization.

The core components are located under [lintel](https://github.com/lintelio/lintel). Everything else is split up into modules.

### Reserved Names
Please note that the `lintel-contrib-*` namespace is reserved for the Lintel team. If you create a lintel module, please name it something else.


### Libsass
Note: Lintel is [libsass](http://libsass.org/) compatible, meaning you can compile it extremely fast. That being said, you are not restricted to using the libsass subset. You can use the ruby SASS compiler and compass if you like.
