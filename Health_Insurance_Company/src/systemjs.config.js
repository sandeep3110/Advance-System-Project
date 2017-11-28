/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // Angular2 bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other Angular2 libraries
      'rxjs':                        'npm:rxjs',
      'angular-in-memory-web-api':   'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      // ngx-boostrap Angular2  module
      'moment':                      'node_modules/moment/moment.js',
      'ng2-bootstrap/ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
      //jquery Angular2 module
      '@types/jquery' : 'npm:@types/jquery',
      /* For star rating Angular2 module*/
      'ng2-rating': 'npm:ng2-rating',
      /*Angular2 module dateTimePicker*/
      'ng2-datetime':'npm:ng2-datetime',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      },

      /* For ngx-boostarp package */
      'ngx-bootstrap' : {
        'main': 'index.js',
        'defaultExtension' : 'js' 
       },
       /* For jquery package */
      /* '@types/jquery': {
        'main': 'index.js',
        'defaultExtension': 'js'
        }, */

      /* For ng2-star rating package */
      'ng2-rating': {
        'main': 'index.js',
        'defaultExtension' : 'js' 
      },
      /* For ng2-dateTime picker package */
      'ng2-datetime': {
        'main': 'ng2-datetime',
        'defaultExtension': 'js'
        },
    }
  });
})(this);
