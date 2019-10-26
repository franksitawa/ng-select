/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, ChangeDetectorRef, Input, Output, EventEmitter, ContentChild, TemplateRef, ViewEncapsulation, HostListener, HostBinding, ViewChild, ElementRef, ChangeDetectionStrategy, Inject, ContentChildren, QueryList, InjectionToken, Attribute } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { takeUntil, startWith, tap, debounceTime, map, filter } from 'rxjs/operators';
import { Subject, merge } from 'rxjs';
import { NgOptionTemplateDirective, NgLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgOptgroupTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgMultiLabelTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective } from './ng-templates.directive';
import { ConsoleService } from './console.service';
import { isDefined, isFunction, isPromise, isObject } from './value-utils';
import { ItemsList } from './items-list';
import { KeyCode } from './ng-select.types';
import { newId } from './id';
import { NgDropdownPanelComponent } from './ng-dropdown-panel.component';
import { NgOptionComponent } from './ng-option.component';
import { NgSelectConfig } from './config.service';
import { NgDropdownPanelService } from './ng-dropdown-panel.service';
/** @type {?} */
export const SELECTION_MODEL_FACTORY = new InjectionToken('ng-select-selection-model');
export class NgSelectComponent {
    /**
     * @param {?} classes
     * @param {?} autoFocus
     * @param {?} config
     * @param {?} newSelectionModel
     * @param {?} _elementRef
     * @param {?} _cd
     * @param {?} _console
     */
    constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.keyDownFn = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => true);
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this.openEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.clearEvent = new EventEmitter();
        this.addEvent = new EventEmitter();
        this.removeEvent = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._destroy$ = new Subject();
        this._keyPress$ = new Subject();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._isComposing = false;
        this.clearItem = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const option = this.selectedItems.find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value === item));
            this.unselect(option);
        });
        this.trackByOption = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        (_, item) => {
            if (this.trackByFn) {
                return this.trackByFn(item.value);
            }
            return item;
        });
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get items() { return this._items; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._itemsAreUsed = true;
        this._items = value;
    }
    ;
    /**
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    /**
     * @return {?}
     */
    get clearSearchOnAdd() { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    ;
    /**
     * @return {?}
     */
    get disabled() { return this.readonly || this._disabled; }
    ;
    /**
     * @return {?}
     */
    get filtered() { return (!!this.searchTerm && this.searchable || this._isComposing); }
    ;
    /**
     * @return {?}
     */
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    /**
     * @return {?}
     */
    get selectedValues() {
        return this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.value));
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return this.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */
    get currentPanelPosition() {
        if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
        }
        return undefined;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._handleKeyPresses();
        this._setInputAttributes();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown($event) {
        /** @type {?} */
        const keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyCode($event) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    }
    /**
     * @return {?}
     */
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDisabledState(state) {
        this._disabled = state;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._clearSearch();
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleItem(item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        this._onSelectionChanged();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.searchInput.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.searchInput.nativeElement.blur();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    /**
     * @return {?}
     */
    selectTag() {
        /** @type {?} */
        let tag;
        if (isFunction(this.addTag)) {
            tag = ((/** @type {?} */ (this.addTag)))(this.searchTerm);
        }
        else {
            tag = this._primitive ? this.searchTerm : { [this.bindLabel]: this.searchTerm };
        }
        /** @type {?} */
        const handleTag = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item));
        if (isPromise(tag)) {
            tag.then((/**
             * @param {?} item
             * @return {?}
             */
            item => this.select(handleTag(item)))).catch((/**
             * @return {?}
             */
            () => { }));
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    /**
     * @return {?}
     */
    showClear() {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    }
    /**
     * @return {?}
     */
    get showAddTag() {
        /** @type {?} */
        let term = this.searchTerm && this.searchTerm.trim();
        if (!term) {
            return false;
        }
        term = term.toLowerCase();
        return this.addTag &&
            (!this.itemsList.filteredItems.some((/**
             * @param {?} x
             * @return {?}
             */
            x => x.label.toLowerCase() === term)) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.label.toLowerCase() === term)))) &&
            !this.loading;
    }
    /**
     * @return {?}
     */
    showNoItemsFound() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this.searchTerm && !this.loading)) &&
            !this.showAddTag;
    }
    /**
     * @return {?}
     */
    showTypeToSearch() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this.searchTerm && !this.loading;
    }
    /**
     * @return {?}
     */
    onCompositionStart() {
        this._isComposing = true;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onCompositionEnd(term) {
        this._isComposing = false;
        this.filter(term);
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (this._isComposing) {
            return;
        }
        this._changeSearch(term);
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term, items: this.itemsList.filteredItems.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value)) });
        this.open();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputBlur($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        this.focused = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    /**
     * @return {?}
     */
    detectChanges() {
        if (!((/** @type {?} */ (this._cd))).destroyed) {
            this._cd.detectChanges();
        }
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        /** @type {?} */
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setItemsFromNgOptions() {
        /** @type {?} */
        const mapNgOptions = (/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            this.items = options.map((/**
             * @param {?} option
             * @return {?}
             */
            option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            })));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        });
        /** @type {?} */
        const handleOptionChange = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const changedOrDestroyed = merge(this.ngOptions.changes, this._destroy$);
            merge(...this.ngOptions.map((/**
             * @param {?} option
             * @return {?}
             */
            option => option.stateChange$)))
                .pipe(takeUntil(changedOrDestroyed))
                .subscribe((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                this._cd.detectChanges();
            }));
        });
        this.ngOptions.changes
            .pipe(startWith(this.ngOptions), takeUntil(this._destroy$))
            .subscribe((/**
         * @param {?} options
         * @return {?}
         */
        options => {
            this.bindLabel = this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _isValidWriteValue(value) {
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        const validateBinding = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
                this._console.warn(`Binding object(${JSON.stringify(item)}) with bindValue is not allowed.`);
                return false;
            }
            return true;
        });
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every((/**
             * @param {?} item
             * @return {?}
             */
            item => validateBinding(item)));
        }
        else {
            return validateBinding(value);
        }
    }
    /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        const select = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                const isValObject = isObject(val);
                /** @type {?} */
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        });
        if (this.multiple) {
            ((/** @type {?} */ (ngModel))).forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => select(item)));
        }
        else {
            select(ngModel);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(takeUntil(this._destroy$), tap((/**
         * @param {?} letter
         * @return {?}
         */
        letter => this._pressedKeys.push(letter))), debounceTime(200), filter((/**
         * @return {?}
         */
        () => this._pressedKeys.length > 0)), map((/**
         * @return {?}
         */
        () => this._pressedKeys.join(''))))
            .subscribe((/**
         * @param {?} term
         * @return {?}
         */
        term => {
            /** @type {?} */
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    this._cd.markForCheck();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setInputAttributes() {
        /** @type {?} */
        const input = this.searchInput.nativeElement;
        /** @type {?} */
        const attributes = Object.assign({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        for (const key of Object.keys(attributes)) {
            input.setAttribute(key, attributes[key]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateNgModel() {
        /** @type {?} */
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                /** @type {?} */
                let value = null;
                if (item.children) {
                    /** @type {?} */
                    const groupKey = this.groupValue ? this.bindValue : (/** @type {?} */ (this.groupBy));
                    value = item.value[groupKey || (/** @type {?} */ (this.groupBy))];
                }
                else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            }
            else {
                model.push(item.value);
            }
        }
        /** @type {?} */
        const selected = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.value));
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _clearSearch() {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    }
    /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */
    _changeSearch(searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
    /**
     * @private
     * @return {?}
     */
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    }
    /**
     * @private
     * @return {?}
     */
    _onSelectionChanged() {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleTab($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */
    _nextItemIsTag(nextStep) {
        /** @type {?} */
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    /**
     * @private
     * @return {?}
     */
    _handleBackspace() {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get _isTypeahead() {
        if (this.typeahead && this.typeahead.observers) {
            return this.typeahead.observers.length > 0;
        }
        else {
            return false;
        }
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
    }
}
NgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-select',
                template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NgSelectComponent)),
                        multi: true
                    }, NgDropdownPanelService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'listbox',
                    'class': 'ng-select',
                    '[class.ng-select-single]': '!multiple',
                },
                styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
            }] }
];
/** @nocollapse */
NgSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['class',] }] },
    { type: undefined, decorators: [{ type: Attribute, args: ['autofocus',] }] },
    { type: NgSelectConfig },
    { type: undefined, decorators: [{ type: Inject, args: [SELECTION_MODEL_FACTORY,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ConsoleService }
];
NgSelectComponent.propDecorators = {
    bindLabel: [{ type: Input }],
    bindValue: [{ type: Input }],
    markFirst: [{ type: Input }],
    placeholder: [{ type: Input }],
    notFoundText: [{ type: Input }],
    typeToSearchText: [{ type: Input }],
    addTagText: [{ type: Input }],
    loadingText: [{ type: Input }],
    clearAllText: [{ type: Input }],
    dropdownPosition: [{ type: Input }],
    appendTo: [{ type: Input }],
    loading: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    hideSelected: [{ type: Input }],
    selectOnTab: [{ type: Input }],
    openOnEnter: [{ type: Input }],
    maxSelectedItems: [{ type: Input }],
    groupBy: [{ type: Input }],
    groupValue: [{ type: Input }],
    bufferAmount: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    selectableGroup: [{ type: Input }],
    selectableGroupAsModel: [{ type: Input }],
    searchFn: [{ type: Input }],
    trackByFn: [{ type: Input }],
    clearOnBackspace: [{ type: Input }],
    labelForId: [{ type: Input }],
    inputAttrs: [{ type: Input }],
    tabIndex: [{ type: Input }],
    readonly: [{ type: Input }],
    keyDownFn: [{ type: Input }],
    typeahead: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-typeahead',] }],
    multiple: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-multiple',] }],
    addTag: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-taggable',] }],
    searchable: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-searchable',] }],
    clearable: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-clearable',] }],
    isOpen: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-opened',] }],
    items: [{ type: Input }],
    compareWith: [{ type: Input }],
    clearSearchOnAdd: [{ type: Input }],
    blurEvent: [{ type: Output, args: ['blur',] }],
    focusEvent: [{ type: Output, args: ['focus',] }],
    changeEvent: [{ type: Output, args: ['change',] }],
    openEvent: [{ type: Output, args: ['open',] }],
    closeEvent: [{ type: Output, args: ['close',] }],
    searchEvent: [{ type: Output, args: ['search',] }],
    clearEvent: [{ type: Output, args: ['clear',] }],
    addEvent: [{ type: Output, args: ['add',] }],
    removeEvent: [{ type: Output, args: ['remove',] }],
    scroll: [{ type: Output, args: ['scroll',] }],
    scrollToEnd: [{ type: Output, args: ['scrollToEnd',] }],
    optionTemplate: [{ type: ContentChild, args: [NgOptionTemplateDirective, { read: TemplateRef, static: false },] }],
    optgroupTemplate: [{ type: ContentChild, args: [NgOptgroupTemplateDirective, { read: TemplateRef, static: false },] }],
    labelTemplate: [{ type: ContentChild, args: [NgLabelTemplateDirective, { read: TemplateRef, static: false },] }],
    multiLabelTemplate: [{ type: ContentChild, args: [NgMultiLabelTemplateDirective, { read: TemplateRef, static: false },] }],
    headerTemplate: [{ type: ContentChild, args: [NgHeaderTemplateDirective, { read: TemplateRef, static: false },] }],
    footerTemplate: [{ type: ContentChild, args: [NgFooterTemplateDirective, { read: TemplateRef, static: false },] }],
    notFoundTemplate: [{ type: ContentChild, args: [NgNotFoundTemplateDirective, { read: TemplateRef, static: false },] }],
    typeToSearchTemplate: [{ type: ContentChild, args: [NgTypeToSearchTemplateDirective, { read: TemplateRef, static: false },] }],
    loadingTextTemplate: [{ type: ContentChild, args: [NgLoadingTextTemplateDirective, { read: TemplateRef, static: false },] }],
    tagTemplate: [{ type: ContentChild, args: [NgTagTemplateDirective, { read: TemplateRef, static: false },] }],
    loadingSpinnerTemplate: [{ type: ContentChild, args: [NgLoadingSpinnerTemplateDirective, { read: TemplateRef, static: false },] }],
    dropdownPanel: [{ type: ViewChild, args: [forwardRef((/**
                 * @return {?}
                 */
                () => NgDropdownPanelComponent)), { static: false },] }],
    searchInput: [{ type: ViewChild, args: ['searchInput', { static: true },] }],
    ngOptions: [{ type: ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
    disabled: [{ type: HostBinding, args: ['class.ng-select-disabled',] }],
    filtered: [{ type: HostBinding, args: ['class.ng-select-filtered',] }],
    handleKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NgSelectComponent.prototype.bindLabel;
    /** @type {?} */
    NgSelectComponent.prototype.bindValue;
    /** @type {?} */
    NgSelectComponent.prototype.markFirst;
    /** @type {?} */
    NgSelectComponent.prototype.placeholder;
    /** @type {?} */
    NgSelectComponent.prototype.notFoundText;
    /** @type {?} */
    NgSelectComponent.prototype.typeToSearchText;
    /** @type {?} */
    NgSelectComponent.prototype.addTagText;
    /** @type {?} */
    NgSelectComponent.prototype.loadingText;
    /** @type {?} */
    NgSelectComponent.prototype.clearAllText;
    /** @type {?} */
    NgSelectComponent.prototype.dropdownPosition;
    /** @type {?} */
    NgSelectComponent.prototype.appendTo;
    /** @type {?} */
    NgSelectComponent.prototype.loading;
    /** @type {?} */
    NgSelectComponent.prototype.closeOnSelect;
    /** @type {?} */
    NgSelectComponent.prototype.hideSelected;
    /** @type {?} */
    NgSelectComponent.prototype.selectOnTab;
    /** @type {?} */
    NgSelectComponent.prototype.openOnEnter;
    /** @type {?} */
    NgSelectComponent.prototype.maxSelectedItems;
    /** @type {?} */
    NgSelectComponent.prototype.groupBy;
    /** @type {?} */
    NgSelectComponent.prototype.groupValue;
    /** @type {?} */
    NgSelectComponent.prototype.bufferAmount;
    /** @type {?} */
    NgSelectComponent.prototype.virtualScroll;
    /** @type {?} */
    NgSelectComponent.prototype.selectableGroup;
    /** @type {?} */
    NgSelectComponent.prototype.selectableGroupAsModel;
    /** @type {?} */
    NgSelectComponent.prototype.searchFn;
    /** @type {?} */
    NgSelectComponent.prototype.trackByFn;
    /** @type {?} */
    NgSelectComponent.prototype.clearOnBackspace;
    /** @type {?} */
    NgSelectComponent.prototype.labelForId;
    /** @type {?} */
    NgSelectComponent.prototype.inputAttrs;
    /** @type {?} */
    NgSelectComponent.prototype.tabIndex;
    /** @type {?} */
    NgSelectComponent.prototype.readonly;
    /** @type {?} */
    NgSelectComponent.prototype.keyDownFn;
    /** @type {?} */
    NgSelectComponent.prototype.typeahead;
    /** @type {?} */
    NgSelectComponent.prototype.multiple;
    /** @type {?} */
    NgSelectComponent.prototype.addTag;
    /** @type {?} */
    NgSelectComponent.prototype.searchable;
    /** @type {?} */
    NgSelectComponent.prototype.clearable;
    /** @type {?} */
    NgSelectComponent.prototype.isOpen;
    /** @type {?} */
    NgSelectComponent.prototype.blurEvent;
    /** @type {?} */
    NgSelectComponent.prototype.focusEvent;
    /** @type {?} */
    NgSelectComponent.prototype.changeEvent;
    /** @type {?} */
    NgSelectComponent.prototype.openEvent;
    /** @type {?} */
    NgSelectComponent.prototype.closeEvent;
    /** @type {?} */
    NgSelectComponent.prototype.searchEvent;
    /** @type {?} */
    NgSelectComponent.prototype.clearEvent;
    /** @type {?} */
    NgSelectComponent.prototype.addEvent;
    /** @type {?} */
    NgSelectComponent.prototype.removeEvent;
    /** @type {?} */
    NgSelectComponent.prototype.scroll;
    /** @type {?} */
    NgSelectComponent.prototype.scrollToEnd;
    /** @type {?} */
    NgSelectComponent.prototype.optionTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.optgroupTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.labelTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.multiLabelTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.headerTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.footerTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.notFoundTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.typeToSearchTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.loadingTextTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.tagTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.loadingSpinnerTemplate;
    /** @type {?} */
    NgSelectComponent.prototype.dropdownPanel;
    /** @type {?} */
    NgSelectComponent.prototype.searchInput;
    /** @type {?} */
    NgSelectComponent.prototype.ngOptions;
    /** @type {?} */
    NgSelectComponent.prototype.itemsList;
    /** @type {?} */
    NgSelectComponent.prototype.viewPortItems;
    /** @type {?} */
    NgSelectComponent.prototype.searchTerm;
    /** @type {?} */
    NgSelectComponent.prototype.dropdownId;
    /** @type {?} */
    NgSelectComponent.prototype.element;
    /** @type {?} */
    NgSelectComponent.prototype.focused;
    /** @type {?} */
    NgSelectComponent.prototype.escapeHTML;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._items;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._itemsAreUsed;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._defaultLabel;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._primitive;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._manualOpen;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._pressedKeys;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._compareWith;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._clearSearchOnAdd;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._keyPress$;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._isComposing;
    /** @type {?} */
    NgSelectComponent.prototype.clearItem;
    /** @type {?} */
    NgSelectComponent.prototype.trackByOption;
    /** @type {?} */
    NgSelectComponent.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype.autoFocus;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    NgSelectComponent.prototype._console;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibGliL25nLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBSVQsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLE1BQU0sRUFFTixlQUFlLEVBQ2YsU0FBUyxFQUNULGNBQWMsRUFDZCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFDSCx5QkFBeUIsRUFDekIsd0JBQXdCLEVBQ3hCLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFDekIsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQiwrQkFBK0IsRUFDL0IsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3QixzQkFBc0IsRUFDdEIsaUNBQWlDLEVBQ3BDLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMs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eUNBQW9DOzs7OztJQUNwQyx5Q0FBb0M7Ozs7O0lBQ3BDLDhDQUFtQzs7Ozs7SUFFbkMsc0NBQWlEOzs7OztJQUNqRCx1Q0FBb0Q7Ozs7O0lBQ3BELHNDQUFvQzs7Ozs7SUFDcEMsdUNBQStCOzs7OztJQUUvQix5Q0FBNkI7O0lBRTdCLHNDQUdFOztJQXNTRiwwQ0FNRTs7SUF6U0Usb0NBQTBDOzs7OztJQUMxQyxzQ0FBOEM7Ozs7O0lBSTlDLGdDQUE4Qjs7Ozs7SUFDOUIscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIGZvcndhcmRSZWYsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIFZpZXdDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIEluamVjdCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSW5qZWN0aW9uVG9rZW4sXG4gICAgQXR0cmlidXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBzdGFydFdpdGgsIHRhcCwgZGVib3VuY2VUaW1lLCBtYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgQ29uc29sZVNlcnZpY2UgfSBmcm9tICcuL2NvbnNvbGUuc2VydmljZSc7XG5pbXBvcnQgeyBpc0RlZmluZWQsIGlzRnVuY3Rpb24sIGlzUHJvbWlzZSwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7IEl0ZW1zTGlzdCB9IGZyb20gJy4vaXRlbXMtbGlzdCc7XG5pbXBvcnQgeyBOZ09wdGlvbiwgS2V5Q29kZSB9IGZyb20gJy4vbmctc2VsZWN0LnR5cGVzJztcbmltcG9ydCB7IG5ld0lkIH0gZnJvbSAnLi9pZCc7XG5pbXBvcnQgeyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmctb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XG5pbXBvcnQgeyBOZ1NlbGVjdENvbmZpZyB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsU2VydmljZSB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTZWxlY3Rpb25Nb2RlbEZhY3Rvcnk+KCduZy1zZWxlY3Qtc2VsZWN0aW9uLW1vZGVsJyk7XG5leHBvcnQgdHlwZSBEcm9wZG93blBvc2l0aW9uID0gJ2JvdHRvbScgfCAndG9wJyB8ICdhdXRvJztcbmV4cG9ydCB0eXBlIEFkZFRhZ0ZuID0gKCh0ZXJtOiBzdHJpbmcpID0+IGFueSB8IFByb21pc2U8YW55Pik7XG5leHBvcnQgdHlwZSBDb21wYXJlV2l0aEZuID0gKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuO1xuZXhwb3J0IHR5cGUgR3JvdXBWYWx1ZUZuID0gKGtleTogc3RyaW5nIHwgb2JqZWN0LCBjaGlsZHJlbjogYW55W10pID0+IHN0cmluZyB8IG9iamVjdDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9LCBOZ0Ryb3Bkb3duUGFuZWxTZXJ2aWNlXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ3JvbGUnOiAnbGlzdGJveCcsXG4gICAgICAgICdjbGFzcyc6ICduZy1zZWxlY3QnLFxuICAgICAgICAnW2NsYXNzLm5nLXNlbGVjdC1zaW5nbGVdJzogJyFtdWx0aXBsZScsXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBiaW5kTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBiaW5kVmFsdWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtYXJrRmlyc3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm90Rm91bmRUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgdHlwZVRvU2VhcmNoVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFkZFRhZ1RleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsZWFyQWxsVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRyb3Bkb3duUG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XG4gICAgQElucHV0KCkgYXBwZW5kVG86IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgaGlkZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2VsZWN0T25UYWIgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBvcGVuT25FbnRlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBtYXhTZWxlY3RlZEl0ZW1zOiBudW1iZXI7XG4gICAgQElucHV0KCkgZ3JvdXBCeTogc3RyaW5nIHwgRnVuY3Rpb247XG4gICAgQElucHV0KCkgZ3JvdXBWYWx1ZTogR3JvdXBWYWx1ZUZuO1xuICAgIEBJbnB1dCgpIGJ1ZmZlckFtb3VudCA9IDQ7XG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXAgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXBBc01vZGVsID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzZWFyY2hGbiA9IG51bGw7XG4gICAgQElucHV0KCkgdHJhY2tCeUZuID0gbnVsbDtcbiAgICBASW5wdXQoKSBjbGVhck9uQmFja3NwYWNlID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBsYWJlbEZvcklkID0gbnVsbDtcbiAgICBASW5wdXQoKSBpbnB1dEF0dHJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlcjtcbiAgICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGtleURvd25GbiA9IChfOiBLZXlib2FyZEV2ZW50KSA9PiB0cnVlO1xuXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtdHlwZWFoZWFkJykgdHlwZWFoZWFkOiBTdWJqZWN0PHN0cmluZz47XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtbXVsdGlwbGUnKSBtdWx0aXBsZSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXRhZ2dhYmxlJykgYWRkVGFnOiBib29sZWFuIHwgQWRkVGFnRm4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1zZWFyY2hhYmxlJykgc2VhcmNoYWJsZSA9IHRydWU7XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtY2xlYXJhYmxlJykgY2xlYXJhYmxlID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1vcGVuZWQnKSBpc09wZW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGl0ZW1zKCkgeyByZXR1cm4gdGhpcy5faXRlbXMgfTtcblxuICAgIHNldCBpdGVtcyh2YWx1ZTogYW55W10pIHtcbiAgICAgICAgdGhpcy5faXRlbXNBcmVVc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgQElucHV0KClcbiAgICBnZXQgY29tcGFyZVdpdGgoKSB7IHJldHVybiB0aGlzLl9jb21wYXJlV2l0aDsgfVxuXG4gICAgc2V0IGNvbXBhcmVXaXRoKGZuOiBDb21wYXJlV2l0aEZuKSB7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdgY29tcGFyZVdpdGhgIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNsZWFyU2VhcmNoT25BZGQoKSB7IHJldHVybiBpc0RlZmluZWQodGhpcy5fY2xlYXJTZWFyY2hPbkFkZCkgPyB0aGlzLl9jbGVhclNlYXJjaE9uQWRkIDogdGhpcy5jbG9zZU9uU2VsZWN0OyB9O1xuXG4gICAgc2V0IGNsZWFyU2VhcmNoT25BZGQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2hPbkFkZCA9IHZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBvdXRwdXQgZXZlbnRzXG4gICAgQE91dHB1dCgnYmx1cicpIGJsdXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdmb2N1cycpIGZvY3VzRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnY2hhbmdlJykgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnb3BlbicpIG9wZW5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdjbG9zZScpIGNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnc2VhcmNoJykgc2VhcmNoRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdGVybTogc3RyaW5nLCBpdGVtczogYW55W10gfT4oKTtcbiAgICBAT3V0cHV0KCdjbGVhcicpIGNsZWFyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnYWRkJykgYWRkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgncmVtb3ZlJykgcmVtb3ZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnc2Nyb2xsJykgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XG4gICAgQE91dHB1dCgnc2Nyb2xsVG9FbmQnKSBzY3JvbGxUb0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vIGN1c3RvbSB0ZW1wbGF0ZXNcbiAgICBAQ29udGVudENoaWxkKE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgb3B0Z3JvdXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KSBsYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgbXVsdGlMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgbm90Rm91bmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgdHlwZVRvU2VhcmNoVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgbG9hZGluZ1RleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgdGFnVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgbG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQpLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJvcGRvd25QYW5lbDogTmdEcm9wZG93blBhbmVsQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ09wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBuZ09wdGlvbnM6IFF1ZXJ5TGlzdDxOZ09wdGlvbkNvbXBvbmVudD47XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1kaXNhYmxlZCcpIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMucmVhZG9ubHkgfHwgdGhpcy5fZGlzYWJsZWQgfTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWZpbHRlcmVkJykgZ2V0IGZpbHRlcmVkKCkgeyByZXR1cm4gKCEhdGhpcy5zZWFyY2hUZXJtICYmIHRoaXMuc2VhcmNoYWJsZSB8fCB0aGlzLl9pc0NvbXBvc2luZykgfTtcblxuICAgIGl0ZW1zTGlzdDogSXRlbXNMaXN0O1xuICAgIHZpZXdQb3J0SXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcbiAgICBzZWFyY2hUZXJtOiBzdHJpbmcgPSBudWxsO1xuICAgIGRyb3Bkb3duSWQgPSBuZXdJZCgpO1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGZvY3VzZWQ6IGJvb2xlYW47XG4gICAgZXNjYXBlSFRNTCA9IHRydWU7XG5cbiAgICBwcml2YXRlIF9pdGVtcyA9IFtdO1xuICAgIHByaXZhdGUgX2l0ZW1zQXJlVXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9kZWZhdWx0TGFiZWwgPSAnbGFiZWwnO1xuICAgIHByaXZhdGUgX3ByaW1pdGl2ZTtcbiAgICBwcml2YXRlIF9tYW51YWxPcGVuOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3ByZXNzZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX2NvbXBhcmVXaXRoOiBDb21wYXJlV2l0aEZuO1xuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoT25BZGQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfa2V5UHJlc3MkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICAgIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICAgIHByaXZhdGUgX2lzQ29tcG9zaW5nID0gZmFsc2U7XG5cbiAgICBjbGVhckl0ZW0gPSAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kKHggPT4geC52YWx1ZSA9PT0gaXRlbSk7XG4gICAgICAgIHRoaXMudW5zZWxlY3Qob3B0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBBdHRyaWJ1dGUoJ2NsYXNzJykgcHVibGljIGNsYXNzZXM6IHN0cmluZyxcbiAgICAgICAgQEF0dHJpYnV0ZSgnYXV0b2ZvY3VzJykgcHJpdmF0ZSBhdXRvRm9jdXM6IGFueSxcbiAgICAgICAgY29uZmlnOiBOZ1NlbGVjdENvbmZpZyxcbiAgICAgICAgQEluamVjdChTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSkgbmV3U2VsZWN0aW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsRmFjdG9yeSxcbiAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgX2NvbnNvbGU6IENvbnNvbGVTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX21lcmdlR2xvYmFsQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0ID0gbmV3IEl0ZW1zTGlzdCh0aGlzLCBuZXdTZWxlY3Rpb25Nb2RlbCgpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNMaXN0LnNlbGVjdGVkSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkVmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50UGFuZWxQb3NpdGlvbigpOiBEcm9wZG93blBvc2l0aW9uIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25QYW5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25QYW5lbC5jdXJyZW50UG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlS2V5UHJlc3NlcygpO1xuICAgICAgICB0aGlzLl9zZXRJbnB1dEF0dHJpYnV0ZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMuaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEl0ZW1zKGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlIHx8IFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX21hbnVhbE9wZW4gPSBpc0RlZmluZWQoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pdGVtc0FyZVVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXNjYXBlSFRNTCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fc2V0SXRlbXNGcm9tTmdPcHRpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWZpbmVkKHRoaXMuYXV0b0ZvY3VzKSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBoYW5kbGVLZXlEb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXlDb2RlID0gS2V5Q29kZVskZXZlbnQud2hpY2hdO1xuICAgICAgICBpZiAoa2V5Q29kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5RG93bkZuKCRldmVudCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlDb2RlKCRldmVudClcbiAgICAgICAgfSBlbHNlIGlmICgkZXZlbnQua2V5ICYmICRldmVudC5rZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlQcmVzcyQubmV4dCgkZXZlbnQua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5Q29kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoICgkZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5BcnJvd0Rvd246XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuQXJyb3dVcDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd1VwKCRldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuU3BhY2U6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU3BhY2UoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlRhYjpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUYWIoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Fc2M6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkJhY2tzcGFjZTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWNsZWFyLXdyYXBwZXInKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGVhckNsaWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmctYXJyb3ctd3JhcHBlcicpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy12YWx1ZS1pY29uJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBcnJvd0NsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xlYXJDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB0aGlzLmNsZWFyRXZlbnQuZW1pdCgpO1xuXG4gICAgICAgIHRoaXMuX29uU2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIGNsZWFyTW9kZWwoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGVhcmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVdyaXRlVmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNPcGVuIHx8IHRoaXMuaXRlbXNMaXN0Lm1heEl0ZW1zU2VsZWN0ZWQgfHwgdGhpcy5fbWFudWFsT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5hZGRUYWcgJiYgdGhpcy5pdGVtc0xpc3Qubm9JdGVtc1RvU2VsZWN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrU2VsZWN0ZWRPckRlZmF1bHQodGhpcy5tYXJrRmlyc3QpO1xuICAgICAgICB0aGlzLm9wZW5FdmVudC5lbWl0KCk7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnVubWFya0l0ZW0oKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KCk7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRvZ2dsZUl0ZW0oaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8IGl0ZW0uZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25TZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPbkFkZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudC5lbWl0KGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCB8fCB0aGlzLml0ZW1zTGlzdC5ub0l0ZW1zVG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBibHVyKCkge1xuICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5zZWxlY3QoaXRlbSk7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50LmVtaXQoaXRlbSk7XG4gICAgfVxuXG4gICAgc2VsZWN0VGFnKCkge1xuICAgICAgICBsZXQgdGFnO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLmFkZFRhZykpIHtcbiAgICAgICAgICAgIHRhZyA9ICg8QWRkVGFnRm4+dGhpcy5hZGRUYWcpKHRoaXMuc2VhcmNoVGVybSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWcgPSB0aGlzLl9wcmltaXRpdmUgPyB0aGlzLnNlYXJjaFRlcm0gOiB7IFt0aGlzLmJpbmRMYWJlbF06IHRoaXMuc2VhcmNoVGVybSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlVGFnID0gKGl0ZW0pID0+IHRoaXMuX2lzVHlwZWFoZWFkIHx8ICF0aGlzLmlzT3BlbiA/IHRoaXMuaXRlbXNMaXN0Lm1hcEl0ZW0oaXRlbSwgbnVsbCkgOiB0aGlzLml0ZW1zTGlzdC5hZGRJdGVtKGl0ZW0pO1xuICAgICAgICBpZiAoaXNQcm9taXNlKHRhZykpIHtcbiAgICAgICAgICAgIHRhZy50aGVuKGl0ZW0gPT4gdGhpcy5zZWxlY3QoaGFuZGxlVGFnKGl0ZW0pKSkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGhhbmRsZVRhZyh0YWcpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dDbGVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJhYmxlICYmICh0aGlzLmhhc1ZhbHVlIHx8IHRoaXMuc2VhcmNoVGVybSkgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgdHJhY2tCeU9wdGlvbiA9IChfOiBudW1iZXIsIGl0ZW06IE5nT3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrQnlGbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tCeUZuKGl0ZW0udmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcblxuICAgIGdldCBzaG93QWRkVGFnKCkge1xuICAgICAgICBsZXQgdGVybSA9IHRoaXMuc2VhcmNoVGVybSAmJiB0aGlzLnNlYXJjaFRlcm0udHJpbSgpO1xuICAgICAgICBpZiAoIXRlcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRlcm0gPSB0ZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRhZyAmJlxuICAgICAgICAgICAgKCF0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLnNvbWUoeCA9PiB4LmxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IHRlcm0pICYmXG4gICAgICAgICAgICAgICAgKCF0aGlzLmhpZGVTZWxlY3RlZCAmJiB0aGlzLmlzT3BlbiB8fCAhdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoeCA9PiB4LmxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IHRlcm0pKSkgJiZcbiAgICAgICAgICAgICF0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgc2hvd05vSXRlbXNGb3VuZCgpIHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgcmV0dXJuICgoZW1wdHkgJiYgIXRoaXMuX2lzVHlwZWFoZWFkICYmICF0aGlzLmxvYWRpbmcpIHx8XG4gICAgICAgICAgICAoZW1wdHkgJiYgdGhpcy5faXNUeXBlYWhlYWQgJiYgdGhpcy5zZWFyY2hUZXJtICYmICF0aGlzLmxvYWRpbmcpKSAmJlxuICAgICAgICAgICAgIXRoaXMuc2hvd0FkZFRhZztcbiAgICB9XG5cbiAgICBzaG93VHlwZVRvU2VhcmNoKCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwO1xuICAgICAgICByZXR1cm4gZW1wdHkgJiYgdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMuc2VhcmNoVGVybSAmJiAhdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIG9uQ29tcG9zaXRpb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5faXNDb21wb3NpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uQ29tcG9zaXRpb25FbmQodGVybTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2lzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlsdGVyKHRlcm0pO1xuICAgIH1cblxuICAgIGZpbHRlcih0ZXJtOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQ29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hhbmdlU2VhcmNoKHRlcm0pO1xuXG4gICAgICAgIGlmICghdGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmZpbHRlcih0aGlzLnNlYXJjaFRlcm0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdCh7IHRlcm0sIGl0ZW1zOiB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpIH0pO1xuXG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cygkZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nLXNlbGVjdC1mb2N1c2VkJyk7XG4gICAgICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduZy1zZWxlY3QtZm9jdXNlZCcpO1xuICAgICAgICB0aGlzLmJsdXJFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSXRlbUhvdmVyKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya0l0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgaWYgKCEoPGFueT50aGlzLl9jZCkuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRJdGVtcyhpdGVtczogYW55W10pIHtcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gaXRlbXNbMF07XG4gICAgICAgIHRoaXMuYmluZExhYmVsID0gdGhpcy5iaW5kTGFiZWwgfHwgdGhpcy5fZGVmYXVsdExhYmVsO1xuICAgICAgICB0aGlzLl9wcmltaXRpdmUgPSBpc0RlZmluZWQoZmlyc3RJdGVtKSA/ICFpc09iamVjdChmaXJzdEl0ZW0pIDogdGhpcy5fcHJpbWl0aXZlIHx8IHRoaXMuYmluZExhYmVsID09PSB0aGlzLl9kZWZhdWx0TGFiZWw7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnNldEl0ZW1zKGl0ZW1zKTtcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFwU2VsZWN0ZWRJdGVtcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBpc0RlZmluZWQodGhpcy5zZWFyY2hUZXJtKSAmJiAhdGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmZpbHRlcih0aGlzLnNlYXJjaFRlcm0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pc1R5cGVhaGVhZCB8fCB0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEl0ZW1zRnJvbU5nT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgbWFwTmdPcHRpb25zID0gKG9wdGlvbnM6IFF1ZXJ5TGlzdDxOZ09wdGlvbkNvbXBvbmVudD4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBvcHRpb25zLm1hcChvcHRpb24gPT4gKHtcbiAgICAgICAgICAgICAgICAkbmdPcHRpb25WYWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICRuZ09wdGlvbkxhYmVsOiBvcHRpb24uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZXRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFwU2VsZWN0ZWRJdGVtcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlT3B0aW9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlZE9yRGVzdHJveWVkID0gbWVyZ2UodGhpcy5uZ09wdGlvbnMuY2hhbmdlcywgdGhpcy5fZGVzdHJveSQpO1xuICAgICAgICAgICAgbWVyZ2UoLi4udGhpcy5uZ09wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uc3RhdGVDaGFuZ2UkKSlcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwoY2hhbmdlZE9yRGVzdHJveWVkKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kSXRlbShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsID0gb3B0aW9uLmxhYmVsIHx8IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5nT3B0aW9ucy5jaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShzdGFydFdpdGgodGhpcy5uZ09wdGlvbnMpLCB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShvcHRpb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRMYWJlbCA9IHRoaXMuX2RlZmF1bHRMYWJlbDtcbiAgICAgICAgICAgICAgICBtYXBOZ09wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaGFuZGxlT3B0aW9uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1ZhbGlkV3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSB8fCAodGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSA9PT0gJycpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVCaW5kaW5nID0gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQodGhpcy5jb21wYXJlV2l0aCkgJiYgaXNPYmplY3QoaXRlbSkgJiYgdGhpcy5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYEJpbmRpbmcgb2JqZWN0KCR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9KSB3aXRoIGJpbmRWYWx1ZSBpcyBub3QgYWxsb3dlZC5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnNvbGUud2FybignTXVsdGlwbGUgc2VsZWN0IG5nTW9kZWwgc2hvdWxkIGJlIGFycmF5LicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5ldmVyeShpdGVtID0+IHZhbGlkYXRlQmluZGluZyhpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVCaW5kaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVdyaXRlVmFsdWUobmdNb2RlbDogYW55IHwgYW55W10pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1ZhbGlkV3JpdGVWYWx1ZShuZ01vZGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3QgPSAodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEl0ZW0odmFsKTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbE9iamVjdCA9IGlzT2JqZWN0KHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQcmltaXRpdmUgPSAhaXNWYWxPYmplY3QgJiYgIXRoaXMuYmluZFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICgoaXNWYWxPYmplY3QgfHwgaXNQcmltaXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKHZhbCwgbnVsbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmJpbmRMYWJlbF06IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kVmFsdWVdOiB2YWxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KHRoaXMuaXRlbXNMaXN0Lm1hcEl0ZW0oaXRlbSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgKDxhbnlbXT5uZ01vZGVsKS5mb3JFYWNoKGl0ZW0gPT4gc2VsZWN0KGl0ZW0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdChuZ01vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUtleVByZXNzZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2tleVByZXNzJFxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSxcbiAgICAgICAgICAgICAgICB0YXAobGV0dGVyID0+IHRoaXMuX3ByZXNzZWRLZXlzLnB1c2gobGV0dGVyKSksXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX3ByZXNzZWRLZXlzLmxlbmd0aCA+IDApLFxuICAgICAgICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5qb2luKCcnKSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kQnlMYWJlbCh0ZXJtKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkS2V5cyA9IFtdO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0SW5wdXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0OiAnb2ZmJyxcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXplOiAnb2ZmJyxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogdGhpcy5sYWJlbEZvcklkID8gJ29mZicgOiB0aGlzLmRyb3Bkb3duSWQsXG4gICAgICAgICAgICAuLi50aGlzLmlucHV0QXR0cnNcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZU5nTW9kZWwoKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJpbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSB0aGlzLmdyb3VwVmFsdWUgPyB0aGlzLmJpbmRWYWx1ZSA6IDxzdHJpbmc+dGhpcy5ncm91cEJ5O1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGl0ZW0udmFsdWVbZ3JvdXBLZXkgfHwgPHN0cmluZz50aGlzLmdyb3VwQnldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5pdGVtc0xpc3QucmVzb2x2ZU5lc3RlZChpdGVtLnZhbHVlLCB0aGlzLmJpbmRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZGVsLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5wdXNoKGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKHggPT4geC52YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZShtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQoc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoaXNEZWZpbmVkKG1vZGVsWzBdKSA/IG1vZGVsWzBdIDogbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQoc2VsZWN0ZWRbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJTZWFyY2goKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jaGFuZ2VTZWFyY2gobnVsbCk7XG5cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hhbmdlU2VhcmNoKHNlYXJjaFRlcm0pIHtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtID0gc2VhcmNoVGVybTtcblxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkLm5leHQoc2VhcmNoVGVybSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhdGhpcy5kcm9wZG93blBhbmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnNjcm9sbFRvKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Njcm9sbFRvVGFnKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuIHx8ICF0aGlzLmRyb3Bkb3duUGFuZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwuc2Nyb2xsVG9UYWcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNlbGVjdGlvbkNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiB0aGlzLm11bHRpcGxlICYmIHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBpdGVtcyBhcmUgcmVuZGVyZWQuXG4gICAgICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwuYWRqdXN0UG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVRhYigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSAmJiAhdGhpcy5hZGRUYWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE9uVGFiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbSh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93QWRkVGFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWcoKTtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlRW50ZXIoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbSh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93QWRkVGFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wZW5PbkVudGVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVNwYWNlKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9uZXh0SXRlbUlzVGFnKCsxKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5tYXJrSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9UYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtOZXh0SXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlQXJyb3dVcCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25leHRJdGVtSXNUYWcoLTEpKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC51bm1hcmtJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb1RhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1ByZXZpb3VzSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9uZXh0SXRlbUlzVGFnKG5leHRTdGVwOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5pdGVtc0xpc3QubWFya2VkSW5kZXggKyBuZXh0U3RlcDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVGFnICYmIHRoaXMuc2VhcmNoVGVybVxuICAgICAgICAgICAgJiYgdGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbVxuICAgICAgICAgICAgJiYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID09PSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVCYWNrc3BhY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRlcm0gfHwgIXRoaXMuY2xlYXJhYmxlIHx8ICF0aGlzLmNsZWFyT25CYWNrc3BhY2UgfHwgIXRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KHRoaXMuaXRlbXNMaXN0Lmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXNUeXBlYWhlYWQoKSB7XG4gICAgICAgIGlmKHRoaXMudHlwZWFoZWFkICYmIHRoaXMudHlwZWFoZWFkLm9ic2VydmVycyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlYWhlYWQub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWVyZ2VHbG9iYWxDb25maWcoY29uZmlnOiBOZ1NlbGVjdENvbmZpZykge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCBjb25maWcucGxhY2Vob2xkZXI7XG4gICAgICAgIHRoaXMubm90Rm91bmRUZXh0ID0gdGhpcy5ub3RGb3VuZFRleHQgfHwgY29uZmlnLm5vdEZvdW5kVGV4dDtcbiAgICAgICAgdGhpcy50eXBlVG9TZWFyY2hUZXh0ID0gdGhpcy50eXBlVG9TZWFyY2hUZXh0IHx8IGNvbmZpZy50eXBlVG9TZWFyY2hUZXh0O1xuICAgICAgICB0aGlzLmFkZFRhZ1RleHQgPSB0aGlzLmFkZFRhZ1RleHQgfHwgY29uZmlnLmFkZFRhZ1RleHQ7XG4gICAgICAgIHRoaXMubG9hZGluZ1RleHQgPSB0aGlzLmxvYWRpbmdUZXh0IHx8IGNvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICAgICAgdGhpcy5jbGVhckFsbFRleHQgPSB0aGlzLmNsZWFyQWxsVGV4dCB8fCBjb25maWcuY2xlYXJBbGxUZXh0O1xuICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGwgPSBpc0RlZmluZWQodGhpcy52aXJ0dWFsU2Nyb2xsKVxuICAgICAgICAgICAgPyB0aGlzLnZpcnR1YWxTY3JvbGxcbiAgICAgICAgICAgIDogaXNEZWZpbmVkKGNvbmZpZy5kaXNhYmxlVmlydHVhbFNjcm9sbCkgPyAhY29uZmlnLmRpc2FibGVWaXJ0dWFsU2Nyb2xsIDogZmFsc2U7XG4gICAgICAgIHRoaXMub3Blbk9uRW50ZXIgPSBpc0RlZmluZWQodGhpcy5vcGVuT25FbnRlcikgPyB0aGlzLm9wZW5PbkVudGVyIDogY29uZmlnLm9wZW5PbkVudGVyO1xuICAgICAgICB0aGlzLmFwcGVuZFRvID0gdGhpcy5hcHBlbmRUbyB8fCBjb25maWcuYXBwZW5kVG87XG4gICAgICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5iaW5kVmFsdWUgfHwgY29uZmlnLmJpbmRWYWx1ZTtcbiAgICB9XG59XG4iXX0=