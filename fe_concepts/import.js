import defaultExport from "module-name";
//module-name.js
export default defaultExport
const defaultExport = "hello"

import * as name from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
alias2

export export2 = "value"


import defaultExport, { export [ , [...] ] } from "module-name";

export default defaultExport
export {export, export1, export2}

const export = 'name'
const export1 = "foo"
const export2 = "bar"
const defaultExport = "hello"


import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";

import defaultExport, * as name from "module-name";

export default defaultExport
const defaultExport = "hello"
export const export = 'name'
export const export1 = "foo"
export const export2 = "bar"

import "module-name";


import * as myModule from '/modules/my-module.js'; // all exports from myModule
myModule.doAllTheAmazingThings();

import {myExport} from '/modules/my-module.js'; // only myExport

import {foo, bar} from '/modules/my-module.js'; // foo and bar

import {reallyReallyLongModuleExportName as shortName} from '/modules/my-module.js'; // use alias

import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js'; // multiple aliases

import "my-module"; // import a module with no exports - import it only to initialize
