(window.webpackJsonp=window.webpackJsonp||[]).push([[941],{V2Bj:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-island-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiIslandExample3 {\n    bannerImage = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';\n    expanded = false;\n    index = 1;\n    testForm = new FormGroup({\n        testValue: new FormControl('', Validators.required),\n    });\n\n    collapsingText =\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +\n        'sed do eiusmod tempor incididunt ut labore et dolore ' +\n        'magna aliqua.';\n\n    get linesLimit(): number {\n        return this.expanded ? 10 : 3;\n    }\n\n    expandText(): void {\n        this.expanded = !this.expanded;\n    }\n\n    onIndexChange(index: number): void {\n        this.index = index;\n    }\n}\n"}}]);