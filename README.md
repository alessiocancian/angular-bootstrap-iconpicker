# angular-bootstrap-iconpicker
Angular directive for Victor Valencia's Bootstrap Iconpicker (http://victor-valencia.github.io/bootstrap-iconpicker/).

I wanted to use that awesome Iconpicker inside a ng-repeat and I found nothing available online to achieve that, so I developed this directive. Hope it helps someone! :)

## Usage
- Import javascript and css files from Victor Valencia's iconpicker
- Import angular-bootstrap-iconpicker.js file from this repository
- Add 'bootstrap-iconpicker' to the dependencies of your angular module <br/>`var app = angular.module('test', ['bootstrap-iconpicker']);`
- Use it in your html <br/>`<button iconpicker="" ng-model="icon" icon-changed="iconChangedFunction"></button>`
