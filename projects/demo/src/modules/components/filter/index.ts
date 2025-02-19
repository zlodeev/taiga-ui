import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiBooleanHandler, TuiHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiFilterComponent} from '@taiga-ui/kit';

class ItemWithBadge {
    constructor(
        public readonly text: string,
        public readonly badgeValue?: number,
    ) {}

    public toString(): string {
        return this.text;
    }

    public valueOf(): number | null {
        return this.badgeValue || null;
    }
}

@Component({
    standalone: true,
    imports: [TuiDemo, TuiFilterComponent, ReactiveFormsModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected initialItems = ['Alex Inkin', 'Roman Sedov'];

    protected itemsVariants: Array<ReadonlyArray<ItemWithBadge | string>> = [
        ['Alex Inkin', 'Roman Sedov'],
        [
            new ItemWithBadge('Focused Zone', 10),
            new ItemWithBadge('Dropdown', 100),
            new ItemWithBadge('Menu Items', 30),
            new ItemWithBadge('Accordion'),
        ],
    ];

    protected badgeHandlerVariants: ReadonlyArray<TuiHandler<unknown, number>> = [
        (item) => Number(item),
        (item) => String(item).length,
    ];

    protected badgeHandler = this.badgeHandlerVariants[0];

    protected disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<ItemWithBadge | string>
    > = [
        TUI_FALSE_HANDLER,
        (item) => item === 'Roman Sedov',
        (item) => (Number(item.valueOf()) || 0) >= 30,
    ];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected items = this.itemsVariants[0];

    protected control = new FormControl(this.initialItems);

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = [
        'xs',
        's',
        'm',
        'l',
    ];

    protected size = this.sizeVariants[2];
}
