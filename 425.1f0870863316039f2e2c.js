(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{"7TCX":function(n,t,o){"use strict";o.r(t),t.default='<tui-badged-content\n    colorTop="var(--tui-support-01)"\n    [contentTop]="badgeValue"\n>\n    <tui-input\n        class="b-form"\n        [(ngModel)]="value"\n    >\n        Input text\n    </tui-input>\n</tui-badged-content>\n\n<div class="tui-space_top-5">\n    <tui-badged-content\n        [contentTop]="contentTop"\n        [contentBottom]="contentTop === 50 ? customBadge : \'\'"\n        [colorTop]="color"\n    >\n        <button\n            tuiButton\n            type="button"\n            appearance="secondary"\n            size="xl"\n            [disabled]="contentTop === 50"\n            (click)="onClick()"\n        >\n            Let\'s click 50 times ...\n        </button>\n    </tui-badged-content>\n\n    <ng-template #customBadge>\n        <div class="template">... and nothing happened</div>\n    </ng-template>\n</div>\n'}}]);