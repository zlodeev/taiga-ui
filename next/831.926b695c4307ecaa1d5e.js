(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{HTce:function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCountryIsoCode} from '@taiga-ui/i18n';\n\n@Component({\n    selector: 'tui-input-phone-international-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('', Validators.minLength(12)),\n    });\n\n    readonly countries = Object.values(TuiCountryIsoCode);\n\n    countryIsoCode = TuiCountryIsoCode.US;\n}\n"}}]);