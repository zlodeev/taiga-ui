(window.webpackJsonp=window.webpackJsonp||[]).push([[1473],{Bv9r:function(n,t,e){"use strict";e.r(t),t.default='<p>Make right click on any table\'s row.</p>\n\n<table class="tui-table">\n    <tbody>\n        <tr class="tui-table__tr tui-table__tr_hover_disabled">\n            <th\n                *ngFor="let column of tableColumns"\n                class="tui-table__th"\n            >\n                {{ column }}\n            </th>\n        </tr>\n        <tr\n            *ngFor="let rowInfo of tableData"\n            class="tui-table__tr"\n            [tuiDropdownContext]="contextMenu"\n        >\n            <td\n                *ngFor="let value of getObjectValues(rowInfo)"\n                class="tui-table__td"\n            >\n                {{ value }}\n            </td>\n\n            <ng-template\n                #contextMenu\n                let-close="close"\n                let-activeZone="activeZone"\n            >\n                <tui-data-list\n                    role="menu"\n                    tuiDataListDropdownManager\n                    class="context-menu"\n                    [tuiActiveZoneParent]="activeZone"\n                >\n                    <button\n                        *ngFor="let item of menuItems"\n                        tuiOption\n                        (click)="printToConsole(item.title, rowInfo); close()"\n                    >\n                        {{ item.title }}\n                        <tui-svg\n                            class="icon"\n                            [src]="item.iconName"\n                        ></tui-svg>\n                    </button>\n\n                    <button\n                        tuiOption\n                        tuiDropdownAlign="right"\n                        [tuiDropdown]="false"\n                        [tuiDropdownContent]="nestedMenu"\n                        [tuiDropdownSided]="true"\n                    >\n                        More\n                    </button>\n                </tui-data-list>\n\n                <ng-template #nestedMenu>\n                    <tui-data-list\n                        tuiDataListDropdownManager\n                        [tuiActiveZoneParent]="activeZone"\n                    >\n                        <button\n                            *ngFor="let option of moreOptions"\n                            tuiOption\n                        >\n                            {{ option }}\n                        </button>\n                    </tui-data-list>\n                </ng-template>\n            </ng-template>\n        </tr>\n    </tbody>\n</table>\n'}}]);