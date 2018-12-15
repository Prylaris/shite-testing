const thisPackage = require('../package.json');
const thisPackageLock = require('../package-lock.json');

class utils {
  constructor(toProperCase, random, wait, kernelVersion, databaseVersion) {
    this.toProperCase = (string)  => {
      return string.replace(/([^\W_]+[^\s-]*) */g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };  


    this.kernelVersion = thisPackage.version;
    this.databaseVersion = thisPackage.dependencies.enmap.slice(1);
    
    
    //Makes the string in the function proper case. For example, "hi how are you today" would become "Hi How Are You Today".

    this.toInvertedCase = (string)  => {
      return string.replace(/([^\W_]+[^\s-]*) */g, (txt) => {
        return txt.charAt(0).toLowerCase() + txt.substr(1).toUpperCase();
      });
    }; 
    
    //Does the opposite of toProperCase, makes it inverted. Like "hI hOW aRE yOU tODAY".

    this.random = (array) => { 
      return this[Math.floor(Math.random() * this.length)];
    };
    
    //Gets a random element from an array.
    
    
    this.wait = require('util').promisify(setTimeout);
    
    
  }
}

module.exports = utils;