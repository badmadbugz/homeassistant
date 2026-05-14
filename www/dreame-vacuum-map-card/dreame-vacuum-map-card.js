
(function() {
  const style = document.createElement('style');
  style.textContent = ".header{padding:1.25rem 1.25rem .625rem;text-align:center;padding-bottom:unset}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center;padding-left:2rem}[dir=rtl] .header__title-wrapper{padding-left:0;padding-right:2rem}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon{display:flex;color:var(--accent-color)}.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500;unicode-bidi:plaintext}.header__stat-value--cleaning-time{unicode-bidi:unset}.map-selector{position:relative;display:flex;justify-content:center}.map-selector__button{display:inline-flex;align-items:center;gap:.375rem;padding:.375rem .75rem;background:var(--surface-bg, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:1.25rem;color:var(--text-primary, #1a1a1a);font-size:.8125rem;font-weight:500;cursor:pointer;transition:all .2s ease}.map-selector__button:hover{background:var(--surface-bg-hover, #ebebeb)}.map-selector__button--open{background:var(--surface-bg-hover, #ebebeb);border-color:var(--accent-color, #007aff)}.map-selector__button--disabled,.map-selector__button:disabled{opacity:.5;cursor:not-allowed}.map-selector__icon{display:flex;align-items:center;color:var(--text-secondary, #666)}.map-selector__icon svg{width:1rem;height:1rem}.map-selector__label{max-width:8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.map-selector__chevron{width:1rem;height:1rem;color:var(--text-secondary, #666);transition:transform .2s ease}.map-selector__chevron--open{transform:rotate(180deg)}.map-selector__dropdown{position:absolute;top:calc(100% + .25rem);left:50%;transform:translate(-50%);min-width:10rem;max-width:14rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);border-radius:.75rem;box-shadow:var(--card-shadow, 0 4px 12px rgba(0, 0, 0, .1));overflow:hidden;z-index:100;animation:map-selector-dropdown-fade-in .15s ease}.map-selector__option{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.625rem .875rem;background:transparent;border:none;color:var(--text-primary, #1a1a1a);font-size:.875rem;text-align:start;cursor:pointer;transition:background .15s ease}.map-selector__option:hover{background:var(--surface-bg-hover, #f5f5f5)}.map-selector__option--selected{color:var(--accent-color, #007aff);font-weight:500}.map-selector__option:not(:last-child){border-bottom:1px solid var(--border-color, #e8e8e8)}.map-selector__option-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:.5rem}[dir=rtl] .map-selector__option-name{padding-right:0;padding-left:.5rem}.map-selector__option-check{width:1rem;height:1rem;color:var(--accent-color, #007aff);flex-shrink:0}@keyframes map-selector-dropdown-fade-in{0%{opacity:0;transform:translate(-50%) translateY(-.25rem)}to{opacity:1;transform:translate(-50%) translateY(0)}}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem;margin-bottom:unset}.cleaning-mode-button-wrapper__repeats{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.9rem;font-weight:600;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__repeats:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__repeats:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__repeats:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem .75rem .5rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.map-controls{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .map-controls{right:auto;left:.75rem}.map-controls{display:flex;flex-direction:column;gap:.25rem;z-index:10}.map-controls__button{width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.map-controls__button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.map-controls__button:active{transform:scale(.95)}.map-controls__button svg{transition:transform .2s ease}.map-controls__button--lock{margin-top:.25rem}.map-controls__button--locked{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.map-controls__button--locked:hover{background:var(--accent-hover, #0066d6);border-color:var(--accent-hover, #0066d6)}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem}[dir=rtl] .room-list-view__header{padding-right:0;padding-left:3.5rem}.room-list-view__header{padding-left:1rem}[dir=rtl] .room-list-view__header{padding-left:0;padding-right:1rem}.room-list-view__header{font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}[dir=rtl] .room-list-view__item{text-align:right}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.vacuum-position-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}.vacuum-position-marker__bg{fill:var(--vacuum-marker-bg, rgba(255, 255, 255, .9));stroke:var(--vacuum-marker-stroke, #4caf50);stroke-width:2;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))}.vacuum-position-marker__icon{fill:var(--vacuum-marker-color, #4caf50)}.vacuum-position-marker--cleaning .vacuum-position-marker__bg{animation:vacuum-pulse 1.5s ease-in-out infinite}.charger-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:5}.charger-marker__bg{fill:var(--charger-marker-bg, rgba(255, 255, 255, .9));stroke:var(--charger-marker-stroke, #ffc107);stroke-width:2;filter:drop-shadow(0 1px 3px rgba(0,0,0,.25))}.charger-marker__icon{fill:var(--charger-marker-color, #ffc107)}@keyframes vacuum-pulse{0%{opacity:1}50%{opacity:.7}to{opacity:1}}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}@media(orientation:landscape){.vacuum-map{max-height:calc(100vh - 280px);max-height:calc(100dvh - 280px);min-height:min(18.75rem,100vh - 280px)}}.vacuum-map--locked .react-transform-wrapper{touch-action:pan-y}.vacuum-map__content{position:relative;display:inline-block;width:100%;height:100%}.vacuum-map__image{display:block;width:100%;height:auto;border-radius:.9375rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem}[dir=rtl] .vacuum-map__cycles{right:auto;left:1rem}.vacuum-map__cycles{bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__zone-handle{position:absolute;background:#007aff;border:.125rem solid white;border-radius:.25rem;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:background .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:\"\";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5}.vacuum-map__zone-handle:active{background:#003d99}.vacuum-map__zone-handle--top,.vacuum-map__zone-handle--bottom{width:2.5rem;height:.5rem;left:50%;cursor:ns-resize}.vacuum-map__zone-handle--top{top:-.25rem}.vacuum-map__zone-handle--bottom{bottom:-.25rem}.vacuum-map__zone-handle--left,.vacuum-map__zone-handle--right{width:.5rem;height:2.5rem;top:50%;cursor:ew-resize}.vacuum-map__zone-handle--left{left:-.25rem}[dir=rtl] .vacuum-map__zone-handle--left{left:auto;right:-.25rem}.vacuum-map__zone-handle--right{right:-.25rem}[dir=rtl] .vacuum-map__zone-handle--right{right:auto;left:-.25rem}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem}[dir=rtl] .vacuum-map__zone-clear{right:auto;left:-.75rem}.vacuum-map__zone-clear{width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:background .2s ease;line-height:1;padding:0;z-index:11}.vacuum-map__zone-clear:hover{background:#ff1f0f}.vacuum-map__zone-clear:active{background:#c00}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room-segments path{pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover:not(.vacuum-map__room-segment--selected){fill:#ffffff26;stroke:#ffffffe6;stroke-width:3;filter:drop-shadow(0 0 8px rgba(255,255,255,.6))}.vacuum-map__room-segment--selected{fill:var(--accent-bg, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-hover, rgba(212, 175, 55, .45));filter:drop-shadow(0 0 6px var(--accent-color-shadow-color, rgba(212, 175, 55, .5)))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.575rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:#fff;background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left}[dir=rtl] .accordion__header{text-align:right}.accordion__header{transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:1000px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem}[dir=rtl] .toggle__knob{left:auto;right:.125rem}.toggle__knob{bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}[dir=rtl] .toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(-1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover:not(.circular-button--disabled){transform:translateY(-.125rem)}.circular-button--disabled{opacity:.5;pointer-events:none}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}[dir=rtl] .circular-button__circle>:nth-child(2):not(:last-child){rotate:180deg}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:hidden;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control--disabled{opacity:.5;pointer-events:none}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:absolute;top:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-down .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-down{0%{transform:translate(-50%) translateY(-1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.error-boundary{display:flex;align-items:center;justify-content:center;min-height:200px;padding:1.5rem;background:var(--surface-bg, #f5f5f5);border-radius:.75rem}.error-boundary__content{text-align:center;max-width:300px}.error-boundary__icon{width:48px;height:48px;margin:0 auto 1rem;background:var(--error-color, #ff3b30);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700}.error-boundary__title{margin:0 0 .5rem;font-size:1.125rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.error-boundary__message{margin:0 0 1rem;font-size:.875rem;color:var(--text-secondary, #666);line-height:1.4}.error-boundary__retry{padding:.5rem 1rem;background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background .2s ease}.error-boundary__retry:hover{background:var(--accent-color-hover, #0056b3)}.customize-mode{display:flex;flex-direction:column;gap:.5rem}.customize-mode__empty{display:flex;align-items:center;justify-content:center;padding:2rem;color:var(--text-secondary);font-size:.875rem}.customize-mode__empty p{margin:0}.customize-mode__room-accordions{display:flex;flex-direction:column;gap:.25rem}.customize-mode__badges{display:flex;gap:.25rem}.customize-mode__badge{display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;padding:.125rem .25rem;border-radius:.25rem;background:var(--accent-bg);font-size:.8rem;font-weight:600;color:var(--accent-color);text-transform:uppercase}.customize-mode__badge:nth-child(3){text-transform:unset}.customize-mode__room-settings-content{display:flex;flex-direction:column;gap:1rem}.customize-mode__setting-group{display:flex;flex-direction:column;gap:.5rem}.customize-mode__setting-label{font-size:.75rem;font-weight:500;color:var(--text-secondary)}.customize-mode__options{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.customize-mode__options--pills{gap:1rem}.customize-mode__option{display:flex;flex-direction:column;align-items:center;gap:2rem}.customize-mode__option-label{font-size:.8rem;color:var(--text-secondary);text-align:center}.customize-mode__pill{padding:.375rem .75rem;border:1.5px solid var(--surface-border);border-radius:1.25rem;background:var(--surface-bg);color:var(--text-secondary);font-size:1rem;font-weight:500;cursor:pointer;transition:all .15s ease;min-width:3.5rem}.customize-mode__pill:hover{border-color:var(--accent-color);background:var(--accent-bg-secondary)}.customize-mode__pill--selected{border-color:var(--accent-color);background:var(--accent-color);color:var(--accent-bg-secondary);color:#fff}.customize-mode__pill--cycle{font-weight:600}.customize-mode__wetness-slider{display:flex;flex-direction:column;gap:.25rem}.cleaning-mode-modal{height:100%}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{height:calc(100% - 4rem);overflow-y:auto;width:100%;overflow-x:hidden}.cleaning-mode-modal__content-wrapper::-webkit-scrollbar{display:none}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--disabled{cursor:not-allowed;opacity:.5}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}[dir=rtl] .cleaning-mode-modal__mode-icon--mop-after>:nth-child(2),[dir=rtl] .cleaning-mode-modal__mode-icon--vac-mop>:nth-child(2){rotate:180deg}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .cleaning-mode-modal__mode-checkmark{right:auto;left:.75rem}.cleaning-mode-modal__mode-checkmark{width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:flex;justify-content:flex-start;gap:2rem;overflow-x:auto;padding:.5rem 0}.cleaning-mode-modal__power-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__power-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-container--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}[dir=rtl] .cleaning-mode-modal__slider-tooltip{transform:translate(50%)}.cleaning-mode-modal__slider-tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__route-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__route-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.entity-item{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .1));gap:16px}.entity-item:last-child{border-bottom:none}.entity-item--child{padding-left:16px;opacity:.9}.entity-item__info{display:flex;flex-direction:column;flex:1;min-width:0}.entity-item__label{font-size:14px;font-weight:500;color:var(--text-primary, #000)}.entity-item__description{font-size:12px;color:var(--text-secondary, #666);margin-top:2px}.entity-item--select{flex-direction:column;align-items:stretch;gap:8px}.entity-item--select .entity-item__info{flex:none}.entity-item--segmented{flex-direction:column;align-items:stretch;gap:8px}.entity-item--segmented .entity-item__info{flex:none}.entity-item--slider{flex-direction:column;align-items:stretch;gap:8px}.entity-item--slider .entity-item__info{flex:none}.entity-item__select{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;cursor:pointer;min-width:120px}.entity-item__select:disabled{opacity:.5;cursor:not-allowed}.entity-item__button{padding:8px 16px;border-radius:8px;border:none;background:var(--accent-color, #007aff);color:#fff;font-size:14px;font-weight:500;cursor:pointer;transition:opacity .2s ease}.entity-item__button:hover:not(:disabled){opacity:.9}.entity-item__button:active:not(:disabled){opacity:.8}.entity-item__button:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider-container{display:flex;align-items:center;gap:12px}.entity-item__slider{flex:1;height:6px;border-radius:3px;appearance:none;background:var(--divider-color, rgba(0, 0, 0, .2));cursor:pointer}.entity-item__slider::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer}.entity-item__slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);border:none;cursor:pointer}.entity-item__slider:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider:disabled::-webkit-slider-thumb{cursor:not-allowed}.entity-item__slider:disabled::-moz-range-thumb{cursor:not-allowed}.entity-item__slider-value{font-size:14px;font-weight:500;color:var(--text-primary, #000);min-width:40px;text-align:right}.entity-item__slider--volume .entity-item__slider::-webkit-slider-thumb,.entity-item__slider--brightness .entity-item__slider::-webkit-slider-thumb{background:var(--accent-color, #007aff)}.entity-item__time-input{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;font-family:inherit;cursor:pointer;min-width:100px}.entity-item__time-input:disabled{opacity:.5;cursor:not-allowed}.entity-item__time-input::-webkit-calendar-picker-indicator{cursor:pointer;filter:var(--time-picker-filter, none)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__item--slider{flex-direction:column;align-items:stretch;gap:.5rem}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.ai-detection-section__slider-container{display:flex;align-items:center;gap:.75rem}.ai-detection-section__slider{flex:1;height:4px;appearance:none;background:var(--surface-secondary, #e0e0e0);border-radius:2px;cursor:pointer}.ai-detection-section__slider::-webkit-slider-thumb{appearance:none;width:16px;height:16px;background:var(--accent-color, #007aff);border-radius:50%;cursor:pointer}.ai-detection-section__slider:disabled{opacity:.5;cursor:not-allowed}.ai-detection-section__slider-value{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);min-width:36px;text-align:right}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__mode-selector{display:flex;flex-direction:column;gap:.75rem;padding-bottom:.5rem;border-bottom:1px solid var(--border-color, #e0e0e0);margin-bottom:.25rem}.carpet-settings-section__sub-options{display:flex;flex-direction:column;gap:.5rem;padding-left:.25rem}.carpet-settings-section__sub-label{font-size:.75rem;color:var(--text-secondary, #666);font-weight:500}.carpet-settings-section__sub-buttons{display:flex;gap:.5rem}.carpet-settings-section__sub-button{flex:1;padding:.5rem .75rem;font-size:.8125rem;font-weight:500;border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;background:var(--surface-secondary, #f5f5f5);color:var(--text-primary, #333);cursor:pointer;transition:all .2s ease}.carpet-settings-section__sub-button:hover:not(.carpet-settings-section__sub-button--active){background:var(--surface-tertiary, #eee)}.carpet-settings-section__sub-button--active{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.carpet-settings-section__sub-button:disabled{opacity:.5;cursor:not-allowed}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.carpet-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000);unicode-bidi:plaintext}.dock-settings-section{display:flex;flex-direction:column;gap:.75rem}.dock-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.dock-settings-section__item--select,.dock-settings-section__item--segmented{flex-direction:column;align-items:stretch;gap:.5rem}.dock-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.dock-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.dock-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.dock-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.dock-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.dock-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.dock-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.dock-settings-section__button{padding:.5rem 1rem;font-size:.8125rem;font-weight:500;border:1px solid var(--accent-color, #007aff);border-radius:.5rem;background:var(--accent-color, #007aff);color:#fff;cursor:pointer;transition:all .2s ease;white-space:nowrap}.dock-settings-section__button:hover:not(:disabled){background:var(--accent-color-hover, #0056b3)}.dock-settings-section__button:disabled{opacity:.5;cursor:not-allowed}.edge-corner-section{display:flex;flex-direction:column;gap:.75rem}.edge-corner-section__sub-settings{display:flex;flex-direction:column;gap:.5rem;margin-top:-.25rem}.edge-corner-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.edge-corner-section__item--indented{padding-left:1rem;border-left:2px solid var(--border-color, #e0e0e0);margin-left:.5rem}.edge-corner-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.edge-corner-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.edge-corner-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.edge-corner-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.edge-corner-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.edge-corner-section__select:focus{border-color:var(--accent-color, #007aff)}.edge-corner-section__select:hover{background:var(--surface-tertiary, #eee)}.edge-corner-section__select:disabled{opacity:.5;cursor:not-allowed}.floor-settings-section{display:flex;flex-direction:column;gap:.75rem}.floor-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.floor-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.floor-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.floor-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.floor-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.floor-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.floor-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.floor-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.floor-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.map-settings-section{display:flex;flex-direction:column;gap:.75rem}.map-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.map-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.map-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.map-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.map-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.map-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.map-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.map-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.map-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.map-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.map-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:.5rem}.map-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.map-settings-section__action-button:active{transform:scale(.98)}.map-settings-section__action-button:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.map-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.quick-settings-section{display:flex;flex-direction:column;gap:.75rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.quick-settings-section__item--child{margin-left:1rem;padding-left:.75rem;border-left:2px solid var(--accent-color, #007aff)}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.quick-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.quick-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.quick-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:.5rem}.quick-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.quick-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.quick-settings-section__action-button:active{transform:scale(.98)}.quick-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.quick-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.volume-section{display:flex;flex-direction:column;gap:.75rem}.volume-section__row{display:flex;flex-direction:row;gap:1rem}.volume-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.volume-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.volume-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.volume-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.volume-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section__select{width:100%;padding:.5rem 2.5rem .5rem .75rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;appearance:none;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:1rem}.volume-section__select:hover{border-color:var(--accent-color, #007aff)}.volume-section__select:focus{outline:none;border-color:var(--accent-color, #007aff);box-shadow:0 0 0 2px #007aff33}.volume-section__select:disabled{opacity:.5;cursor:not-allowed}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}[dir=rtl] .volume-section__tooltip{transform:translate(50%)}.volume-section__tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}[dir=rtl] .settings-panel__sections{padding-right:0;padding-left:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem}[dir=rtl] .room-selection-display__label{margin-right:0;margin-left:.5rem}.room-selection-display__label{color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}\n";
  document.head.appendChild(style);
})();
function pg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var _u = { exports: {} }, Fo = {};
var up;
function sb() {
  if (up) return Fo;
  up = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(l, c, d) {
    var _ = null;
    if (d !== void 0 && (_ = "" + d), c.key !== void 0 && (_ = "" + c.key), "key" in c) {
      d = {};
      for (var m in c)
        m !== "key" && (d[m] = c[m]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: l,
      key: _,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return Fo.Fragment = i, Fo.jsx = o, Fo.jsxs = o, Fo;
}
var dp;
function cb() {
  return dp || (dp = 1, _u.exports = sb()), _u.exports;
}
var g = cb(), mu = { exports: {} }, pe = {};
var _p;
function ub() {
  if (_p) return pe;
  _p = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function z(E) {
    return E === null || typeof E != "object" ? null : (E = w && E[w] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var T = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, O = Object.assign, q = {};
  function L(E, D, K) {
    this.props = E, this.context = D, this.refs = q, this.updater = K || T;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(E, D) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, D, "setState");
  }, L.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function U() {
  }
  U.prototype = L.prototype;
  function Z(E, D, K) {
    this.props = E, this.context = D, this.refs = q, this.updater = K || T;
  }
  var B = Z.prototype = new U();
  B.constructor = Z, O(B, L.prototype), B.isPureReactComponent = !0;
  var H = Array.isArray;
  function F() {
  }
  var Y = { H: null, A: null, T: null, S: null }, W = Object.prototype.hasOwnProperty;
  function ae(E, D, K) {
    var $ = K.ref;
    return {
      $$typeof: a,
      type: E,
      key: D,
      ref: $ !== void 0 ? $ : null,
      props: K
    };
  }
  function ie(E, D) {
    return ae(E.type, D, E.props);
  }
  function ue(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function se(E) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(K) {
      return D[K];
    });
  }
  var ze = /\/+/g;
  function ke(E, D) {
    return typeof E == "object" && E !== null && E.key != null ? se("" + E.key) : D.toString(36);
  }
  function ve(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(F, F) : (E.status = "pending", E.then(
          function(D) {
            E.status === "pending" && (E.status = "fulfilled", E.value = D);
          },
          function(D) {
            E.status === "pending" && (E.status = "rejected", E.reason = D);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function x(E, D, K, $, oe) {
    var me = typeof E;
    (me === "undefined" || me === "boolean") && (E = null);
    var we = !1;
    if (E === null) we = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case i:
              we = !0;
              break;
            case v:
              return we = E._init, x(
                we(E._payload),
                D,
                K,
                $,
                oe
              );
          }
      }
    if (we)
      return oe = oe(E), we = $ === "" ? "." + ke(E, 0) : $, H(oe) ? (K = "", we != null && (K = we.replace(ze, "$&/") + "/"), x(oe, D, K, "", function(wt) {
        return wt;
      })) : oe != null && (ue(oe) && (oe = ie(
        oe,
        K + (oe.key == null || E && E.key === oe.key ? "" : ("" + oe.key).replace(
          ze,
          "$&/"
        ) + "/") + we
      )), D.push(oe)), 1;
    we = 0;
    var Ke = $ === "" ? "." : $ + ":";
    if (H(E))
      for (var Le = 0; Le < E.length; Le++)
        $ = E[Le], me = Ke + ke($, Le), we += x(
          $,
          D,
          K,
          me,
          oe
        );
    else if (Le = z(E), typeof Le == "function")
      for (E = Le.call(E), Le = 0; !($ = E.next()).done; )
        $ = $.value, me = Ke + ke($, Le++), we += x(
          $,
          D,
          K,
          me,
          oe
        );
    else if (me === "object") {
      if (typeof E.then == "function")
        return x(
          ve(E),
          D,
          K,
          $,
          oe
        );
      throw D = String(E), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return we;
  }
  function X(E, D, K) {
    if (E == null) return E;
    var $ = [], oe = 0;
    return x(E, $, "", "", function(me) {
      return D.call(K, me, oe++);
    }), $;
  }
  function J(E) {
    if (E._status === -1) {
      var D = E._result;
      D = D(), D.then(
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = K);
        },
        function(K) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = K);
        }
      ), E._status === -1 && (E._status = 0, E._result = D);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var _e = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, ge = {
    map: X,
    forEach: function(E, D, K) {
      X(
        E,
        function() {
          D.apply(this, arguments);
        },
        K
      );
    },
    count: function(E) {
      var D = 0;
      return X(E, function() {
        D++;
      }), D;
    },
    toArray: function(E) {
      return X(E, function(D) {
        return D;
      }) || [];
    },
    only: function(E) {
      if (!ue(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return pe.Activity = b, pe.Children = ge, pe.Component = L, pe.Fragment = o, pe.Profiler = c, pe.PureComponent = Z, pe.StrictMode = l, pe.Suspense = h, pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, pe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return Y.H.useMemoCache(E);
    }
  }, pe.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, pe.cacheSignal = function() {
    return null;
  }, pe.cloneElement = function(E, D, K) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var $ = O({}, E.props), oe = E.key;
    if (D != null)
      for (me in D.key !== void 0 && (oe = "" + D.key), D)
        !W.call(D, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && D.ref === void 0 || ($[me] = D[me]);
    var me = arguments.length - 2;
    if (me === 1) $.children = K;
    else if (1 < me) {
      for (var we = Array(me), Ke = 0; Ke < me; Ke++)
        we[Ke] = arguments[Ke + 2];
      $.children = we;
    }
    return ae(E.type, oe, $);
  }, pe.createContext = function(E) {
    return E = {
      $$typeof: _,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: d,
      _context: E
    }, E;
  }, pe.createElement = function(E, D, K) {
    var $, oe = {}, me = null;
    if (D != null)
      for ($ in D.key !== void 0 && (me = "" + D.key), D)
        W.call(D, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (oe[$] = D[$]);
    var we = arguments.length - 2;
    if (we === 1) oe.children = K;
    else if (1 < we) {
      for (var Ke = Array(we), Le = 0; Le < we; Le++)
        Ke[Le] = arguments[Le + 2];
      oe.children = Ke;
    }
    if (E && E.defaultProps)
      for ($ in we = E.defaultProps, we)
        oe[$] === void 0 && (oe[$] = we[$]);
    return ae(E, me, oe);
  }, pe.createRef = function() {
    return { current: null };
  }, pe.forwardRef = function(E) {
    return { $$typeof: m, render: E };
  }, pe.isValidElement = ue, pe.lazy = function(E) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: E },
      _init: J
    };
  }, pe.memo = function(E, D) {
    return {
      $$typeof: p,
      type: E,
      compare: D === void 0 ? null : D
    };
  }, pe.startTransition = function(E) {
    var D = Y.T, K = {};
    Y.T = K;
    try {
      var $ = E(), oe = Y.S;
      oe !== null && oe(K, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(F, _e);
    } catch (me) {
      _e(me);
    } finally {
      D !== null && K.types !== null && (D.types = K.types), Y.T = D;
    }
  }, pe.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, pe.use = function(E) {
    return Y.H.use(E);
  }, pe.useActionState = function(E, D, K) {
    return Y.H.useActionState(E, D, K);
  }, pe.useCallback = function(E, D) {
    return Y.H.useCallback(E, D);
  }, pe.useContext = function(E) {
    return Y.H.useContext(E);
  }, pe.useDebugValue = function() {
  }, pe.useDeferredValue = function(E, D) {
    return Y.H.useDeferredValue(E, D);
  }, pe.useEffect = function(E, D) {
    return Y.H.useEffect(E, D);
  }, pe.useEffectEvent = function(E) {
    return Y.H.useEffectEvent(E);
  }, pe.useId = function() {
    return Y.H.useId();
  }, pe.useImperativeHandle = function(E, D, K) {
    return Y.H.useImperativeHandle(E, D, K);
  }, pe.useInsertionEffect = function(E, D) {
    return Y.H.useInsertionEffect(E, D);
  }, pe.useLayoutEffect = function(E, D) {
    return Y.H.useLayoutEffect(E, D);
  }, pe.useMemo = function(E, D) {
    return Y.H.useMemo(E, D);
  }, pe.useOptimistic = function(E, D) {
    return Y.H.useOptimistic(E, D);
  }, pe.useReducer = function(E, D, K) {
    return Y.H.useReducer(E, D, K);
  }, pe.useRef = function(E) {
    return Y.H.useRef(E);
  }, pe.useState = function(E) {
    return Y.H.useState(E);
  }, pe.useSyncExternalStore = function(E, D, K) {
    return Y.H.useSyncExternalStore(
      E,
      D,
      K
    );
  }, pe.useTransition = function() {
    return Y.H.useTransition();
  }, pe.version = "19.2.3", pe;
}
var mp;
function Du() {
  return mp || (mp = 1, mu.exports = ub()), mu.exports;
}
var R = Du();
const Nn = /* @__PURE__ */ pg(R);
var fu = { exports: {} }, Wo = {}, pu = { exports: {} }, gu = {};
var fp;
function db() {
  return fp || (fp = 1, (function(a) {
    function i(x, X) {
      var J = x.length;
      x.push(X);
      e: for (; 0 < J; ) {
        var _e = J - 1 >>> 1, ge = x[_e];
        if (0 < c(ge, X))
          x[_e] = X, x[J] = ge, J = _e;
        else break e;
      }
    }
    function o(x) {
      return x.length === 0 ? null : x[0];
    }
    function l(x) {
      if (x.length === 0) return null;
      var X = x[0], J = x.pop();
      if (J !== X) {
        x[0] = J;
        e: for (var _e = 0, ge = x.length, E = ge >>> 1; _e < E; ) {
          var D = 2 * (_e + 1) - 1, K = x[D], $ = D + 1, oe = x[$];
          if (0 > c(K, J))
            $ < ge && 0 > c(oe, K) ? (x[_e] = oe, x[$] = J, _e = $) : (x[_e] = K, x[D] = J, _e = D);
          else if ($ < ge && 0 > c(oe, J))
            x[_e] = oe, x[$] = J, _e = $;
          else break e;
        }
      }
      return X;
    }
    function c(x, X) {
      var J = x.sortIndex - X.sortIndex;
      return J !== 0 ? J : x.id - X.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var _ = Date, m = _.now();
      a.unstable_now = function() {
        return _.now() - m;
      };
    }
    var h = [], p = [], v = 1, b = null, w = 3, z = !1, T = !1, O = !1, q = !1, L = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function B(x) {
      for (var X = o(p); X !== null; ) {
        if (X.callback === null) l(p);
        else if (X.startTime <= x)
          l(p), X.sortIndex = X.expirationTime, i(h, X);
        else break;
        X = o(p);
      }
    }
    function H(x) {
      if (O = !1, B(x), !T)
        if (o(h) !== null)
          T = !0, F || (F = !0, se());
        else {
          var X = o(p);
          X !== null && ve(H, X.startTime - x);
        }
    }
    var F = !1, Y = -1, W = 5, ae = -1;
    function ie() {
      return q ? !0 : !(a.unstable_now() - ae < W);
    }
    function ue() {
      if (q = !1, F) {
        var x = a.unstable_now();
        ae = x;
        var X = !0;
        try {
          e: {
            T = !1, O && (O = !1, U(Y), Y = -1), z = !0;
            var J = w;
            try {
              t: {
                for (B(x), b = o(h); b !== null && !(b.expirationTime > x && ie()); ) {
                  var _e = b.callback;
                  if (typeof _e == "function") {
                    b.callback = null, w = b.priorityLevel;
                    var ge = _e(
                      b.expirationTime <= x
                    );
                    if (x = a.unstable_now(), typeof ge == "function") {
                      b.callback = ge, B(x), X = !0;
                      break t;
                    }
                    b === o(h) && l(h), B(x);
                  } else l(h);
                  b = o(h);
                }
                if (b !== null) X = !0;
                else {
                  var E = o(p);
                  E !== null && ve(
                    H,
                    E.startTime - x
                  ), X = !1;
                }
              }
              break e;
            } finally {
              b = null, w = J, z = !1;
            }
            X = void 0;
          }
        } finally {
          X ? se() : F = !1;
        }
      }
    }
    var se;
    if (typeof Z == "function")
      se = function() {
        Z(ue);
      };
    else if (typeof MessageChannel < "u") {
      var ze = new MessageChannel(), ke = ze.port2;
      ze.port1.onmessage = ue, se = function() {
        ke.postMessage(null);
      };
    } else
      se = function() {
        L(ue, 0);
      };
    function ve(x, X) {
      Y = L(function() {
        x(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, a.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : W = 0 < x ? Math.floor(1e3 / x) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, a.unstable_next = function(x) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = w;
      }
      var J = w;
      w = X;
      try {
        return x();
      } finally {
        w = J;
      }
    }, a.unstable_requestPaint = function() {
      q = !0;
    }, a.unstable_runWithPriority = function(x, X) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var J = w;
      w = x;
      try {
        return X();
      } finally {
        w = J;
      }
    }, a.unstable_scheduleCallback = function(x, X, J) {
      var _e = a.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? _e + J : _e) : J = _e, x) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = J + ge, x = {
        id: v++,
        callback: X,
        priorityLevel: x,
        startTime: J,
        expirationTime: ge,
        sortIndex: -1
      }, J > _e ? (x.sortIndex = J, i(p, x), o(h) === null && x === o(p) && (O ? (U(Y), Y = -1) : O = !0, ve(H, J - _e))) : (x.sortIndex = ge, i(h, x), T || z || (T = !0, F || (F = !0, se()))), x;
    }, a.unstable_shouldYield = ie, a.unstable_wrapCallback = function(x) {
      var X = w;
      return function() {
        var J = w;
        w = X;
        try {
          return x.apply(this, arguments);
        } finally {
          w = J;
        }
      };
    };
  })(gu)), gu;
}
var pp;
function _b() {
  return pp || (pp = 1, pu.exports = db()), pu.exports;
}
var hu = { exports: {} }, Et = {};
var gp;
function mb() {
  if (gp) return Et;
  gp = 1;
  var a = Du();
  function i(h) {
    var p = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + h + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var l = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(h, p, v) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: h,
      containerInfo: p,
      implementation: v
    };
  }
  var _ = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, p) {
    if (h === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Et.createPortal = function(h, p) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(i(299));
    return d(h, p, null, v);
  }, Et.flushSync = function(h) {
    var p = _.T, v = l.p;
    try {
      if (_.T = null, l.p = 2, h) return h();
    } finally {
      _.T = p, l.p = v, l.d.f();
    }
  }, Et.preconnect = function(h, p) {
    typeof h == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, l.d.C(h, p));
  }, Et.prefetchDNS = function(h) {
    typeof h == "string" && l.d.D(h);
  }, Et.preinit = function(h, p) {
    if (typeof h == "string" && p && typeof p.as == "string") {
      var v = p.as, b = m(v, p.crossOrigin), w = typeof p.integrity == "string" ? p.integrity : void 0, z = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      v === "style" ? l.d.S(
        h,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: b,
          integrity: w,
          fetchPriority: z
        }
      ) : v === "script" && l.d.X(h, {
        crossOrigin: b,
        integrity: w,
        fetchPriority: z,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Et.preinitModule = function(h, p) {
    if (typeof h == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var v = m(
            p.as,
            p.crossOrigin
          );
          l.d.M(h, {
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && l.d.M(h);
  }, Et.preload = function(h, p) {
    if (typeof h == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var v = p.as, b = m(v, p.crossOrigin);
      l.d.L(h, v, {
        crossOrigin: b,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Et.preloadModule = function(h, p) {
    if (typeof h == "string")
      if (p) {
        var v = m(p.as, p.crossOrigin);
        l.d.m(h, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else l.d.m(h);
  }, Et.requestFormReset = function(h) {
    l.d.r(h);
  }, Et.unstable_batchedUpdates = function(h, p) {
    return h(p);
  }, Et.useFormState = function(h, p, v) {
    return _.H.useFormState(h, p, v);
  }, Et.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, Et.version = "19.2.3", Et;
}
var hp;
function fb() {
  if (hp) return hu.exports;
  hp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), hu.exports = mb(), hu.exports;
}
var vp;
function pb() {
  if (vp) return Wo;
  vp = 1;
  var a = _b(), i = Du(), o = fb();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function _(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (d(e) !== e)
      throw Error(l(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return h(s), e;
          if (u === r) return h(s), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = s, r = u;
      else {
        for (var f = !1, y = s.child; y; ) {
          if (y === n) {
            f = !0, n = s, r = u;
            break;
          }
          if (y === r) {
            f = !0, r = s, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = u.child; y; ) {
            if (y === n) {
              f = !0, n = u, r = s;
              break;
            }
            if (y === r) {
              f = !0, r = u, n = s;
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), z = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), W = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.activity"), ie = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ue = Symbol.iterator;
  function se(e) {
    return e === null || typeof e != "object" ? null : (e = ue && e[ue] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ze = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ze ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case L:
        return "Profiler";
      case q:
        return "StrictMode";
      case H:
        return "Suspense";
      case F:
        return "SuspenseList";
      case ae:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case Z:
          return e.displayName || "Context";
        case U:
          return (e._context.displayName || "Context") + ".Consumer";
        case B:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Y:
          return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
        case W:
          t = e._payload, e = e._init;
          try {
            return ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var ve = Array.isArray, x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, _e = [], ge = -1;
  function E(e) {
    return { current: e };
  }
  function D(e) {
    0 > ge || (e.current = _e[ge], _e[ge] = null, ge--);
  }
  function K(e, t) {
    ge++, _e[ge] = e.current, e.current = t;
  }
  var $ = E(null), oe = E(null), me = E(null), we = E(null);
  function Ke(e, t) {
    switch (K(me, t), K(oe, e), K($, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rf(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rf(t), e = Df(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    D($), K($, e);
  }
  function Le() {
    D($), D(oe), D(me);
  }
  function wt(e) {
    e.memoizedState !== null && K(we, e);
    var t = $.current, n = Df(t, e.type);
    t !== n && (K(oe, e), K($, n));
  }
  function Rt(e) {
    oe.current === e && (D($), D(oe)), we.current === e && (D(we), Yo._currentValue = J);
  }
  var Na, Ca;
  function St(e) {
    if (Na === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Na = t && t[1] || "", Ca = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Na + e + Ca;
  }
  var Dn = !1;
  function jn(e, t) {
    if (!e || Dn) return "";
    Dn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (j) {
                  var M = j;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (j) {
                  M = j;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                M = j;
              }
              (P = e()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (j) {
            if (j && M && typeof j.stack == "string")
              return [j.stack, M.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = r.DetermineComponentFrameRoot(), f = u[0], y = u[1];
      if (f && y) {
        var S = f.split(`
`), C = y.split(`
`);
        for (s = r = 0; r < S.length && !S[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; s < C.length && !C[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (r === S.length || s === C.length)
          for (r = S.length - 1, s = C.length - 1; 1 <= r && 0 <= s && S[r] !== C[s]; )
            s--;
        for (; 1 <= r && 0 <= s; r--, s--)
          if (S[r] !== C[s]) {
            if (r !== 1 || s !== 1)
              do
                if (r--, s--, 0 > s || S[r] !== C[s]) {
                  var G = `
` + S[r].replace(" at new ", " at ");
                  return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
                }
              while (1 <= r && 0 <= s);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? St(n) : "";
  }
  function si(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return St(e.type);
      case 16:
        return St("Lazy");
      case 13:
        return e.child !== t && t !== null ? St("Suspense Fallback") : St("Suspense");
      case 19:
        return St("SuspenseList");
      case 0:
      case 15:
        return jn(e.type, !1);
      case 11:
        return jn(e.type.render, !1);
      case 1:
        return jn(e.type, !0);
      case 31:
        return St("Activity");
      default:
        return "";
    }
  }
  function fa(e) {
    try {
      var t = "", n = null;
      do
        t += si(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var We = Object.prototype.hasOwnProperty, mt = a.unstable_scheduleCallback, xa = a.unstable_cancelCallback, cd = a.unstable_shouldYield, Jl = a.unstable_requestPaint, At = a.unstable_now, Bh = a.unstable_getCurrentPriorityLevel, ud = a.unstable_ImmediatePriority, dd = a.unstable_UserBlockingPriority, dr = a.unstable_NormalPriority, Ph = a.unstable_LowPriority, _d = a.unstable_IdlePriority, Zh = a.log, Yh = a.unstable_setDisableYieldValue, ao = null, Pt = null;
  function Qa(e) {
    if (typeof Zh == "function" && Yh(e), Pt && typeof Pt.setStrictMode == "function")
      try {
        Pt.setStrictMode(ao, e);
      } catch {
      }
  }
  var Zt = Math.clz32 ? Math.clz32 : Xh, Vh = Math.log, Kh = Math.LN2;
  function Xh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Vh(e) / Kh | 0) | 0;
  }
  var _r = 256, mr = 262144, fr = 4194304;
  function Ln(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function pr(e, t, n) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var y = r & 134217727;
    return y !== 0 ? (r = y & ~u, r !== 0 ? s = Ln(r) : (f &= y, f !== 0 ? s = Ln(f) : n || (n = y & ~e, n !== 0 && (s = Ln(n))))) : (y = r & ~u, y !== 0 ? s = Ln(y) : f !== 0 ? s = Ln(f) : n || (n = r & ~e, n !== 0 && (s = Ln(n)))), s === 0 ? 0 : t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : s;
  }
  function no(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Fh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function md() {
    var e = fr;
    return fr <<= 1, (fr & 62914560) === 0 && (fr = 4194304), e;
  }
  function es(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function io(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Wh(e, t, n, r, s, u) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var y = e.entanglements, S = e.expirationTimes, C = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var G = 31 - Zt(n), P = 1 << G;
      y[G] = 0, S[G] = -1;
      var M = C[G];
      if (M !== null)
        for (C[G] = null, G = 0; G < M.length; G++) {
          var j = M[G];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~P;
    }
    r !== 0 && fd(e, r, 0), u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function fd(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - Zt(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
  }
  function pd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Zt(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  function gd(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : ts(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function ts(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function as(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function hd() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : np(e.type));
  }
  function vd(e, t) {
    var n = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = n;
    }
  }
  var Ja = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Ja, Dt = "__reactProps$" + Ja, ci = "__reactContainer$" + Ja, ns = "__reactEvents$" + Ja, $h = "__reactListeners$" + Ja, Qh = "__reactHandles$" + Ja, yd = "__reactResources$" + Ja, oo = "__reactMarker$" + Ja;
  function is(e) {
    delete e[ft], delete e[Dt], delete e[ns], delete e[$h], delete e[Qh];
  }
  function ui(e) {
    var t = e[ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ci] || n[ft]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = If(e); e !== null; ) {
            if (n = e[ft]) return n;
            e = If(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function di(e) {
    if (e = e[ft] || e[ci]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ro(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function _i(e) {
    var t = e[yd];
    return t || (t = e[yd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function dt(e) {
    e[oo] = !0;
  }
  var bd = /* @__PURE__ */ new Set(), wd = {};
  function Un(e, t) {
    mi(e, t), mi(e + "Capture", t);
  }
  function mi(e, t) {
    for (wd[e] = t, e = 0; e < t.length; e++)
      bd.add(t[e]);
  }
  var Jh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Sd = {}, Ed = {};
  function ev(e) {
    return We.call(Ed, e) ? !0 : We.call(Sd, e) ? !1 : Jh.test(e) ? Ed[e] = !0 : (Sd[e] = !0, !1);
  }
  function gr(e, t, n) {
    if (ev(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function hr(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Oa(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  function Jt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function zd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function tv(e, t, n) {
    var r = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var s = r.get, u = r.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: r.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function os(e) {
    if (!e._valueTracker) {
      var t = zd(e) ? "checked" : "value";
      e._valueTracker = tv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function kd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = zd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function vr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var av = /[\n"\\]/g;
  function ea(e) {
    return e.replace(
      av,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function rs(e, t, n, r, s, u, f, y) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Jt(t)) : e.value !== "" + Jt(t) && (e.value = "" + Jt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? ls(e, f, Jt(t)) : n != null ? ls(e, f, Jt(n)) : r != null && e.removeAttribute("value"), s == null && u != null && (e.defaultChecked = !!u), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Jt(y) : e.removeAttribute("name");
  }
  function Td(e, t, n, r, s, u, f, y) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        os(e);
        return;
      }
      n = n != null ? "" + Jt(n) : "", t = t != null ? "" + Jt(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? s, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = y ? e.checked : !!r, e.defaultChecked = !!r, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), os(e);
  }
  function ls(e, t, n) {
    t === "number" && vr(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function fi(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++)
        t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Jt(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ad(e, t, n) {
    if (t != null && (t = "" + Jt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Jt(n) : "";
  }
  function Nd(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(l(92));
        if (ve(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        n = r;
      }
      n == null && (n = ""), t = n;
    }
    n = Jt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), os(e);
  }
  function pi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cd(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || nv.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function xd(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, n != null) {
      for (var r in n)
        !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var s in t)
        r = t[s], t.hasOwnProperty(s) && n[s] !== r && Cd(e, s, r);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Cd(e, u, t[u]);
  }
  function ss(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var iv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ov = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yr(e) {
    return ov.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ma() {
  }
  var cs = null;
  function us(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var gi = null, hi = null;
  function Od(e) {
    var t = di(e);
    if (t && (e = t.stateNode)) {
      var n = e[Dt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (rs(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + ea(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var s = r[Dt] || null;
                if (!s) throw Error(l(90));
                rs(
                  r,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              r = n[t], r.form === e.form && kd(r);
          }
          break e;
        case "textarea":
          Ad(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && fi(e, !!n.multiple, t, !1);
      }
    }
  }
  var ds = !1;
  function Md(e, t, n) {
    if (ds) return e(t, n);
    ds = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (ds = !1, (gi !== null || hi !== null) && (rl(), gi && (t = gi, e = hi, hi = gi = null, Od(t), e)))
        for (t = 0; t < e.length; t++) Od(e[t]);
    }
  }
  function lo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = n[Dt] || null;
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        l(231, t, typeof n)
      );
    return n;
  }
  var Ra = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _s = !1;
  if (Ra)
    try {
      var so = {};
      Object.defineProperty(so, "passive", {
        get: function() {
          _s = !0;
        }
      }), window.addEventListener("test", so, so), window.removeEventListener("test", so, so);
    } catch {
      _s = !1;
    }
  var en = null, ms = null, br = null;
  function Rd() {
    if (br) return br;
    var e, t = ms, n = t.length, r, s = "value" in en ? en.value : en.textContent, u = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === s[u - r]; r++) ;
    return br = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function wr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Sr() {
    return !0;
  }
  function Dd() {
    return !1;
  }
  function jt(e) {
    function t(n, r, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Sr : Dd, this.isPropagationStopped = Dd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sr);
      },
      persist: function() {
      },
      isPersistent: Sr
    }), t;
  }
  var qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Er = jt(qn), co = b({}, qn, { view: 0, detail: 0 }), rv = jt(co), fs, ps, uo, zr = b({}, co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== uo && (uo && e.type === "mousemove" ? (fs = e.screenX - uo.screenX, ps = e.screenY - uo.screenY) : ps = fs = 0, uo = e), fs);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ps;
    }
  }), jd = jt(zr), lv = b({}, zr, { dataTransfer: 0 }), sv = jt(lv), cv = b({}, co, { relatedTarget: 0 }), gs = jt(cv), uv = b({}, qn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dv = jt(uv), _v = b({}, qn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), mv = jt(_v), fv = b({}, qn, { data: 0 }), Ld = jt(fv), pv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, gv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, hv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function vv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hv[e]) ? !!t[e] : !1;
  }
  function hs() {
    return vv;
  }
  var yv = b({}, co, {
    key: function(e) {
      if (e.key) {
        var t = pv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = wr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hs,
    charCode: function(e) {
      return e.type === "keypress" ? wr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? wr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), bv = jt(yv), wv = b({}, zr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ud = jt(wv), Sv = b({}, co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hs
  }), Ev = jt(Sv), zv = b({}, qn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kv = jt(zv), Tv = b({}, zr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Av = jt(Tv), Nv = b({}, qn, {
    newState: 0,
    oldState: 0
  }), Cv = jt(Nv), xv = [9, 13, 27, 32], vs = Ra && "CompositionEvent" in window, _o = null;
  Ra && "documentMode" in document && (_o = document.documentMode);
  var Ov = Ra && "TextEvent" in window && !_o, qd = Ra && (!vs || _o && 8 < _o && 11 >= _o), Gd = " ", Hd = !1;
  function Id(e, t) {
    switch (e) {
      case "keyup":
        return xv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var vi = !1;
  function Mv(e, t) {
    switch (e) {
      case "compositionend":
        return Bd(t);
      case "keypress":
        return t.which !== 32 ? null : (Hd = !0, Gd);
      case "textInput":
        return e = t.data, e === Gd && Hd ? null : e;
      default:
        return null;
    }
  }
  function Rv(e, t) {
    if (vi)
      return e === "compositionend" || !vs && Id(e, t) ? (e = Rd(), br = ms = en = null, vi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Pd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dv[e.type] : t === "textarea";
  }
  function Zd(e, t, n, r) {
    gi ? hi ? hi.push(r) : hi = [r] : gi = r, t = ml(t, "onChange"), 0 < t.length && (n = new Er(
      "onChange",
      "change",
      null,
      n,
      r
    ), e.push({ event: n, listeners: t }));
  }
  var mo = null, fo = null;
  function jv(e) {
    Af(e, 0);
  }
  function kr(e) {
    var t = ro(e);
    if (kd(t)) return e;
  }
  function Yd(e, t) {
    if (e === "change") return t;
  }
  var Vd = !1;
  if (Ra) {
    var ys;
    if (Ra) {
      var bs = "oninput" in document;
      if (!bs) {
        var Kd = document.createElement("div");
        Kd.setAttribute("oninput", "return;"), bs = typeof Kd.oninput == "function";
      }
      ys = bs;
    } else ys = !1;
    Vd = ys && (!document.documentMode || 9 < document.documentMode);
  }
  function Xd() {
    mo && (mo.detachEvent("onpropertychange", Fd), fo = mo = null);
  }
  function Fd(e) {
    if (e.propertyName === "value" && kr(fo)) {
      var t = [];
      Zd(
        t,
        fo,
        e,
        us(e)
      ), Md(jv, t);
    }
  }
  function Lv(e, t, n) {
    e === "focusin" ? (Xd(), mo = t, fo = n, mo.attachEvent("onpropertychange", Fd)) : e === "focusout" && Xd();
  }
  function Uv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return kr(fo);
  }
  function qv(e, t) {
    if (e === "click") return kr(t);
  }
  function Gv(e, t) {
    if (e === "input" || e === "change")
      return kr(t);
  }
  function Hv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Yt = typeof Object.is == "function" ? Object.is : Hv;
  function po(e, t) {
    if (Yt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!We.call(t, s) || !Yt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Wd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $d(e, t) {
    var n = Wd(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Wd(n);
    }
  }
  function Qd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Jd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = vr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = vr(e.document);
    }
    return t;
  }
  function ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Iv = Ra && "documentMode" in document && 11 >= document.documentMode, yi = null, Ss = null, go = null, Es = !1;
  function e_(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Es || yi == null || yi !== vr(r) || (r = yi, "selectionStart" in r && ws(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), go && po(go, r) || (go = r, r = ml(Ss, "onSelect"), 0 < r.length && (t = new Er(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: r }), t.target = yi)));
  }
  function Gn(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var bi = {
    animationend: Gn("Animation", "AnimationEnd"),
    animationiteration: Gn("Animation", "AnimationIteration"),
    animationstart: Gn("Animation", "AnimationStart"),
    transitionrun: Gn("Transition", "TransitionRun"),
    transitionstart: Gn("Transition", "TransitionStart"),
    transitioncancel: Gn("Transition", "TransitionCancel"),
    transitionend: Gn("Transition", "TransitionEnd")
  }, zs = {}, t_ = {};
  Ra && (t_ = document.createElement("div").style, "AnimationEvent" in window || (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation), "TransitionEvent" in window || delete bi.transitionend.transition);
  function Hn(e) {
    if (zs[e]) return zs[e];
    if (!bi[e]) return e;
    var t = bi[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in t_)
        return zs[e] = t[n];
    return e;
  }
  var a_ = Hn("animationend"), n_ = Hn("animationiteration"), i_ = Hn("animationstart"), Bv = Hn("transitionrun"), Pv = Hn("transitionstart"), Zv = Hn("transitioncancel"), o_ = Hn("transitionend"), r_ = /* @__PURE__ */ new Map(), ks = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ks.push("scrollEnd");
  function pa(e, t) {
    r_.set(e, t), Un(t, [e]);
  }
  var Tr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, ta = [], wi = 0, Ts = 0;
  function Ar() {
    for (var e = wi, t = Ts = wi = 0; t < e; ) {
      var n = ta[t];
      ta[t++] = null;
      var r = ta[t];
      ta[t++] = null;
      var s = ta[t];
      ta[t++] = null;
      var u = ta[t];
      if (ta[t++] = null, r !== null && s !== null) {
        var f = r.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), r.pending = s;
      }
      u !== 0 && l_(n, s, u);
    }
  }
  function Nr(e, t, n, r) {
    ta[wi++] = e, ta[wi++] = t, ta[wi++] = n, ta[wi++] = r, Ts |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function As(e, t, n, r) {
    return Nr(e, t, n, r), Cr(e);
  }
  function In(e, t) {
    return Nr(e, null, null, t), Cr(e);
  }
  function l_(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var s = !1, u = e.return; u !== null; )
      u.childLanes |= n, r = u.alternate, r !== null && (r.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (s = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, s && t !== null && (s = 31 - Zt(n), e = u.hiddenUpdates, r = e[s], r === null ? e[s] = [t] : r.push(t), t.lane = n | 536870912), u) : null;
  }
  function Cr(e) {
    if (50 < qo)
      throw qo = 0, Lc = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Si = {};
  function Yv(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vt(e, t, n, r) {
    return new Yv(e, t, n, r);
  }
  function Ns(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Da(e, t) {
    var n = e.alternate;
    return n === null ? (n = Vt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function s_(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function xr(e, t, n, r, s, u) {
    var f = 0;
    if (r = e, typeof e == "function") Ns(e) && (f = 1);
    else if (typeof e == "string")
      f = Wy(
        e,
        n,
        $.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ae:
          return e = Vt(31, n, t, s), e.elementType = ae, e.lanes = u, e;
        case O:
          return Bn(n.children, s, u, t);
        case q:
          f = 8, s |= 24;
          break;
        case L:
          return e = Vt(12, n, t, s | 2), e.elementType = L, e.lanes = u, e;
        case H:
          return e = Vt(13, n, t, s), e.elementType = H, e.lanes = u, e;
        case F:
          return e = Vt(19, n, t, s), e.elementType = F, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                f = 10;
                break e;
              case U:
                f = 9;
                break e;
              case B:
                f = 11;
                break e;
              case Y:
                f = 14;
                break e;
              case W:
                f = 16, r = null;
                break e;
            }
          f = 29, n = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = Vt(f, n, t, s), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function Bn(e, t, n, r) {
    return e = Vt(7, e, r, t), e.lanes = n, e;
  }
  function Cs(e, t, n) {
    return e = Vt(6, e, null, t), e.lanes = n, e;
  }
  function c_(e) {
    var t = Vt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function xs(e, t, n) {
    return t = Vt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var u_ = /* @__PURE__ */ new WeakMap();
  function aa(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = u_.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: fa(t)
      }, u_.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: fa(t)
    };
  }
  var Ei = [], zi = 0, Or = null, ho = 0, na = [], ia = 0, tn = null, wa = 1, Sa = "";
  function ja(e, t) {
    Ei[zi++] = ho, Ei[zi++] = Or, Or = e, ho = t;
  }
  function d_(e, t, n) {
    na[ia++] = wa, na[ia++] = Sa, na[ia++] = tn, tn = e;
    var r = wa;
    e = Sa;
    var s = 32 - Zt(r) - 1;
    r &= ~(1 << s), n += 1;
    var u = 32 - Zt(t) + s;
    if (30 < u) {
      var f = s - s % 5;
      u = (r & (1 << f) - 1).toString(32), r >>= f, s -= f, wa = 1 << 32 - Zt(t) + s | n << s | r, Sa = u + e;
    } else
      wa = 1 << u | n << s | r, Sa = e;
  }
  function Os(e) {
    e.return !== null && (ja(e, 1), d_(e, 1, 0));
  }
  function Ms(e) {
    for (; e === Or; )
      Or = Ei[--zi], Ei[zi] = null, ho = Ei[--zi], Ei[zi] = null;
    for (; e === tn; )
      tn = na[--ia], na[ia] = null, Sa = na[--ia], na[ia] = null, wa = na[--ia], na[ia] = null;
  }
  function __(e, t) {
    na[ia++] = wa, na[ia++] = Sa, na[ia++] = tn, wa = t.id, Sa = t.overflow, tn = e;
  }
  var pt = null, Ye = null, Ce = !1, an = null, oa = !1, Rs = Error(l(519));
  function nn(e) {
    var t = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw vo(aa(t, e)), Rs;
  }
  function m_(e) {
    var t = e.stateNode, n = e.type, r = e.memoizedProps;
    switch (t[ft] = e, t[Dt] = r, n) {
      case "dialog":
        Ee("cancel", t), Ee("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ee("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ho.length; n++)
          Ee(Ho[n], t);
        break;
      case "source":
        Ee("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ee("error", t), Ee("load", t);
        break;
      case "details":
        Ee("toggle", t);
        break;
      case "input":
        Ee("invalid", t), Td(
          t,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        );
        break;
      case "select":
        Ee("invalid", t);
        break;
      case "textarea":
        Ee("invalid", t), Nd(t, r.value, r.defaultValue, r.children);
    }
    n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || r.suppressHydrationWarning === !0 || Of(t.textContent, n) ? (r.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)), r.onScroll != null && Ee("scroll", t), r.onScrollEnd != null && Ee("scrollend", t), r.onClick != null && (t.onclick = Ma), t = !0) : t = !1, t || nn(e, !0);
  }
  function f_(e) {
    for (pt = e.return; pt; )
      switch (pt.tag) {
        case 5:
        case 31:
        case 13:
          oa = !1;
          return;
        case 27:
        case 3:
          oa = !0;
          return;
        default:
          pt = pt.return;
      }
  }
  function ki(e) {
    if (e !== pt) return !1;
    if (!Ce) return f_(e), Ce = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || $c(e.type, e.memoizedProps)), n = !n), n && Ye && nn(e), f_(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ye = Hf(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ye = Hf(e);
    } else
      t === 27 ? (t = Ye, vn(e.type) ? (e = au, au = null, Ye = e) : Ye = t) : Ye = pt ? la(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pn() {
    Ye = pt = null, Ce = !1;
  }
  function Ds() {
    var e = an;
    return e !== null && (Gt === null ? Gt = e : Gt.push.apply(
      Gt,
      e
    ), an = null), e;
  }
  function vo(e) {
    an === null ? an = [e] : an.push(e);
  }
  var js = E(null), Zn = null, La = null;
  function on(e, t, n) {
    K(js, t._currentValue), t._currentValue = n;
  }
  function Ua(e) {
    e._currentValue = js.current, D(js);
  }
  function Ls(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Us(e, t, n, r) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var y = u;
          u = s;
          for (var S = 0; S < t.length; S++)
            if (y.context === t[S]) {
              u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), Ls(
                u.return,
                n,
                e
              ), r || (f = null);
              break e;
            }
          u = y.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(l(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), Ls(f, n, e), f = null;
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ti(e, t, n, r) {
    e = null;
    for (var s = t, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(l(387));
        if (f = f.memoizedProps, f !== null) {
          var y = s.type;
          Yt(s.pendingProps.value, f.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (s === we.current) {
        if (f = s.alternate, f === null) throw Error(l(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Yo) : e = [Yo]);
      }
      s = s.return;
    }
    e !== null && Us(
      t,
      e,
      n,
      r
    ), t.flags |= 262144;
  }
  function Mr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Yt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Yn(e) {
    Zn = e, La = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return p_(Zn, e);
  }
  function Rr(e, t) {
    return Zn === null && Yn(e), p_(e, t);
  }
  function p_(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, La === null) {
      if (e === null) throw Error(l(308));
      La = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else La = La.next = t;
    return n;
  }
  var Vv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Kv = a.unstable_scheduleCallback, Xv = a.unstable_NormalPriority, it = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function qs() {
    return {
      controller: new Vv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function yo(e) {
    e.refCount--, e.refCount === 0 && Kv(Xv, function() {
      e.controller.abort();
    });
  }
  var bo = null, Gs = 0, Ai = 0, Ni = null;
  function Fv(e, t) {
    if (bo === null) {
      var n = bo = [];
      Gs = 0, Ai = Bc(), Ni = {
        status: "pending",
        value: void 0,
        then: function(r) {
          n.push(r);
        }
      };
    }
    return Gs++, t.then(g_, g_), t;
  }
  function g_() {
    if (--Gs === 0 && bo !== null) {
      Ni !== null && (Ni.status = "fulfilled");
      var e = bo;
      bo = null, Ai = 0, Ni = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Wv(e, t) {
    var n = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return e.then(
      function() {
        r.status = "fulfilled", r.value = t;
        for (var s = 0; s < n.length; s++) (0, n[s])(t);
      },
      function(s) {
        for (r.status = "rejected", r.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), r;
  }
  var h_ = x.S;
  x.S = function(e, t) {
    ef = At(), typeof t == "object" && t !== null && typeof t.then == "function" && Fv(e, t), h_ !== null && h_(e, t);
  };
  var Vn = E(null);
  function Hs() {
    var e = Vn.current;
    return e !== null ? e : Ze.pooledCache;
  }
  function Dr(e, t) {
    t === null ? K(Vn, Vn.current) : K(Vn, t.pool);
  }
  function v_() {
    var e = Hs();
    return e === null ? null : { parent: it._currentValue, pool: e };
  }
  var Ci = Error(l(460)), Is = Error(l(474)), jr = Error(l(542)), Lr = { then: function() {
  } };
  function y_(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function b_(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Ma, Ma), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, S_(e), e;
      default:
        if (typeof t.status == "string") t.then(Ma, Ma);
        else {
          if (e = Ze, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = t, e.status = "pending", e.then(
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = r;
              }
            },
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = r;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, S_(e), e;
        }
        throw Xn = t, Ci;
    }
  }
  function Kn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Xn = n, Ci) : n;
    }
  }
  var Xn = null;
  function w_() {
    if (Xn === null) throw Error(l(459));
    var e = Xn;
    return Xn = null, e;
  }
  function S_(e) {
    if (e === Ci || e === jr)
      throw Error(l(483));
  }
  var xi = null, wo = 0;
  function Ur(e) {
    var t = wo;
    return wo += 1, xi === null && (xi = []), b_(xi, e, t);
  }
  function So(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function qr(e, t) {
    throw t.$$typeof === w ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function E_(e) {
    function t(A, k) {
      if (e) {
        var N = A.deletions;
        N === null ? (A.deletions = [k], A.flags |= 16) : N.push(k);
      }
    }
    function n(A, k) {
      if (!e) return null;
      for (; k !== null; )
        t(A, k), k = k.sibling;
      return null;
    }
    function r(A) {
      for (var k = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? k.set(A.key, A) : k.set(A.index, A), A = A.sibling;
      return k;
    }
    function s(A, k) {
      return A = Da(A, k), A.index = 0, A.sibling = null, A;
    }
    function u(A, k, N) {
      return A.index = N, e ? (N = A.alternate, N !== null ? (N = N.index, N < k ? (A.flags |= 67108866, k) : N) : (A.flags |= 67108866, k)) : (A.flags |= 1048576, k);
    }
    function f(A) {
      return e && A.alternate === null && (A.flags |= 67108866), A;
    }
    function y(A, k, N, I) {
      return k === null || k.tag !== 6 ? (k = Cs(N, A.mode, I), k.return = A, k) : (k = s(k, N), k.return = A, k);
    }
    function S(A, k, N, I) {
      var ne = N.type;
      return ne === O ? G(
        A,
        k,
        N.props.children,
        I,
        N.key
      ) : k !== null && (k.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === W && Kn(ne) === k.type) ? (k = s(k, N.props), So(k, N), k.return = A, k) : (k = xr(
        N.type,
        N.key,
        N.props,
        null,
        A.mode,
        I
      ), So(k, N), k.return = A, k);
    }
    function C(A, k, N, I) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== N.containerInfo || k.stateNode.implementation !== N.implementation ? (k = xs(N, A.mode, I), k.return = A, k) : (k = s(k, N.children || []), k.return = A, k);
    }
    function G(A, k, N, I, ne) {
      return k === null || k.tag !== 7 ? (k = Bn(
        N,
        A.mode,
        I,
        ne
      ), k.return = A, k) : (k = s(k, N), k.return = A, k);
    }
    function P(A, k, N) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return k = Cs(
          "" + k,
          A.mode,
          N
        ), k.return = A, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case z:
            return N = xr(
              k.type,
              k.key,
              k.props,
              null,
              A.mode,
              N
            ), So(N, k), N.return = A, N;
          case T:
            return k = xs(
              k,
              A.mode,
              N
            ), k.return = A, k;
          case W:
            return k = Kn(k), P(A, k, N);
        }
        if (ve(k) || se(k))
          return k = Bn(
            k,
            A.mode,
            N,
            null
          ), k.return = A, k;
        if (typeof k.then == "function")
          return P(A, Ur(k), N);
        if (k.$$typeof === Z)
          return P(
            A,
            Rr(A, k),
            N
          );
        qr(A, k);
      }
      return null;
    }
    function M(A, k, N, I) {
      var ne = k !== null ? k.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return ne !== null ? null : y(A, k, "" + N, I);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case z:
            return N.key === ne ? S(A, k, N, I) : null;
          case T:
            return N.key === ne ? C(A, k, N, I) : null;
          case W:
            return N = Kn(N), M(A, k, N, I);
        }
        if (ve(N) || se(N))
          return ne !== null ? null : G(A, k, N, I, null);
        if (typeof N.then == "function")
          return M(
            A,
            k,
            Ur(N),
            I
          );
        if (N.$$typeof === Z)
          return M(
            A,
            k,
            Rr(A, N),
            I
          );
        qr(A, N);
      }
      return null;
    }
    function j(A, k, N, I, ne) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return A = A.get(N) || null, y(k, A, "" + I, ne);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case z:
            return A = A.get(
              I.key === null ? N : I.key
            ) || null, S(k, A, I, ne);
          case T:
            return A = A.get(
              I.key === null ? N : I.key
            ) || null, C(k, A, I, ne);
          case W:
            return I = Kn(I), j(
              A,
              k,
              N,
              I,
              ne
            );
        }
        if (ve(I) || se(I))
          return A = A.get(N) || null, G(k, A, I, ne, null);
        if (typeof I.then == "function")
          return j(
            A,
            k,
            N,
            Ur(I),
            ne
          );
        if (I.$$typeof === Z)
          return j(
            A,
            k,
            N,
            Rr(k, I),
            ne
          );
        qr(k, I);
      }
      return null;
    }
    function Q(A, k, N, I) {
      for (var ne = null, Oe = null, ee = k, ye = k = 0, Ae = null; ee !== null && ye < N.length; ye++) {
        ee.index > ye ? (Ae = ee, ee = null) : Ae = ee.sibling;
        var Me = M(
          A,
          ee,
          N[ye],
          I
        );
        if (Me === null) {
          ee === null && (ee = Ae);
          break;
        }
        e && ee && Me.alternate === null && t(A, ee), k = u(Me, k, ye), Oe === null ? ne = Me : Oe.sibling = Me, Oe = Me, ee = Ae;
      }
      if (ye === N.length)
        return n(A, ee), Ce && ja(A, ye), ne;
      if (ee === null) {
        for (; ye < N.length; ye++)
          ee = P(A, N[ye], I), ee !== null && (k = u(
            ee,
            k,
            ye
          ), Oe === null ? ne = ee : Oe.sibling = ee, Oe = ee);
        return Ce && ja(A, ye), ne;
      }
      for (ee = r(ee); ye < N.length; ye++)
        Ae = j(
          ee,
          A,
          ye,
          N[ye],
          I
        ), Ae !== null && (e && Ae.alternate !== null && ee.delete(
          Ae.key === null ? ye : Ae.key
        ), k = u(
          Ae,
          k,
          ye
        ), Oe === null ? ne = Ae : Oe.sibling = Ae, Oe = Ae);
      return e && ee.forEach(function(En) {
        return t(A, En);
      }), Ce && ja(A, ye), ne;
    }
    function le(A, k, N, I) {
      if (N == null) throw Error(l(151));
      for (var ne = null, Oe = null, ee = k, ye = k = 0, Ae = null, Me = N.next(); ee !== null && !Me.done; ye++, Me = N.next()) {
        ee.index > ye ? (Ae = ee, ee = null) : Ae = ee.sibling;
        var En = M(A, ee, Me.value, I);
        if (En === null) {
          ee === null && (ee = Ae);
          break;
        }
        e && ee && En.alternate === null && t(A, ee), k = u(En, k, ye), Oe === null ? ne = En : Oe.sibling = En, Oe = En, ee = Ae;
      }
      if (Me.done)
        return n(A, ee), Ce && ja(A, ye), ne;
      if (ee === null) {
        for (; !Me.done; ye++, Me = N.next())
          Me = P(A, Me.value, I), Me !== null && (k = u(Me, k, ye), Oe === null ? ne = Me : Oe.sibling = Me, Oe = Me);
        return Ce && ja(A, ye), ne;
      }
      for (ee = r(ee); !Me.done; ye++, Me = N.next())
        Me = j(ee, A, ye, Me.value, I), Me !== null && (e && Me.alternate !== null && ee.delete(Me.key === null ? ye : Me.key), k = u(Me, k, ye), Oe === null ? ne = Me : Oe.sibling = Me, Oe = Me);
      return e && ee.forEach(function(lb) {
        return t(A, lb);
      }), Ce && ja(A, ye), ne;
    }
    function Pe(A, k, N, I) {
      if (typeof N == "object" && N !== null && N.type === O && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case z:
            e: {
              for (var ne = N.key; k !== null; ) {
                if (k.key === ne) {
                  if (ne = N.type, ne === O) {
                    if (k.tag === 7) {
                      n(
                        A,
                        k.sibling
                      ), I = s(
                        k,
                        N.props.children
                      ), I.return = A, A = I;
                      break e;
                    }
                  } else if (k.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === W && Kn(ne) === k.type) {
                    n(
                      A,
                      k.sibling
                    ), I = s(k, N.props), So(I, N), I.return = A, A = I;
                    break e;
                  }
                  n(A, k);
                  break;
                } else t(A, k);
                k = k.sibling;
              }
              N.type === O ? (I = Bn(
                N.props.children,
                A.mode,
                I,
                N.key
              ), I.return = A, A = I) : (I = xr(
                N.type,
                N.key,
                N.props,
                null,
                A.mode,
                I
              ), So(I, N), I.return = A, A = I);
            }
            return f(A);
          case T:
            e: {
              for (ne = N.key; k !== null; ) {
                if (k.key === ne)
                  if (k.tag === 4 && k.stateNode.containerInfo === N.containerInfo && k.stateNode.implementation === N.implementation) {
                    n(
                      A,
                      k.sibling
                    ), I = s(k, N.children || []), I.return = A, A = I;
                    break e;
                  } else {
                    n(A, k);
                    break;
                  }
                else t(A, k);
                k = k.sibling;
              }
              I = xs(N, A.mode, I), I.return = A, A = I;
            }
            return f(A);
          case W:
            return N = Kn(N), Pe(
              A,
              k,
              N,
              I
            );
        }
        if (ve(N))
          return Q(
            A,
            k,
            N,
            I
          );
        if (se(N)) {
          if (ne = se(N), typeof ne != "function") throw Error(l(150));
          return N = ne.call(N), le(
            A,
            k,
            N,
            I
          );
        }
        if (typeof N.then == "function")
          return Pe(
            A,
            k,
            Ur(N),
            I
          );
        if (N.$$typeof === Z)
          return Pe(
            A,
            k,
            Rr(A, N),
            I
          );
        qr(A, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, k !== null && k.tag === 6 ? (n(A, k.sibling), I = s(k, N), I.return = A, A = I) : (n(A, k), I = Cs(N, A.mode, I), I.return = A, A = I), f(A)) : n(A, k);
    }
    return function(A, k, N, I) {
      try {
        wo = 0;
        var ne = Pe(
          A,
          k,
          N,
          I
        );
        return xi = null, ne;
      } catch (ee) {
        if (ee === Ci || ee === jr) throw ee;
        var Oe = Vt(29, ee, null, A.mode);
        return Oe.lanes = I, Oe.return = A, Oe;
      }
    };
  }
  var Fn = E_(!0), z_ = E_(!1), rn = !1;
  function Bs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ps(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ln(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, t = Cr(e), l_(e, null, n), t;
    }
    return Nr(e, r, t, n), Cr(e);
  }
  function Eo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, pd(e, n);
    }
  }
  function Zs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? s = u = t : u = u.next = t;
      } else s = u = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Ys = !1;
  function zo() {
    if (Ys) {
      var e = Ni;
      if (e !== null) throw e;
    }
  }
  function ko(e, t, n, r) {
    Ys = !1;
    var s = e.updateQueue;
    rn = !1;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y, C = S.next;
      S.next = null, f === null ? u = C : f.next = C, f = S;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, y = G.lastBaseUpdate, y !== f && (y === null ? G.firstBaseUpdate = C : y.next = C, G.lastBaseUpdate = S));
    }
    if (u !== null) {
      var P = s.baseState;
      f = 0, G = C = S = null, y = u;
      do {
        var M = y.lane & -536870913, j = M !== y.lane;
        if (j ? (Te & M) === M : (r & M) === M) {
          M !== 0 && M === Ai && (Ys = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, le = y;
            M = t;
            var Pe = n;
            switch (le.tag) {
              case 1:
                if (Q = le.payload, typeof Q == "function") {
                  P = Q.call(Pe, P, M);
                  break e;
                }
                P = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = le.payload, M = typeof Q == "function" ? Q.call(Pe, P, M) : Q, M == null) break e;
                P = b({}, P, M);
                break e;
              case 2:
                rn = !0;
            }
          }
          M = y.callback, M !== null && (e.flags |= 64, j && (e.flags |= 8192), j = s.callbacks, j === null ? s.callbacks = [M] : j.push(M));
        } else
          j = {
            lane: M,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, G === null ? (C = G = j, S = P) : G = G.next = j, f |= M;
        if (y = y.next, y === null) {
          if (y = s.shared.pending, y === null)
            break;
          j = y, y = j.next, j.next = null, s.lastBaseUpdate = j, s.shared.pending = null;
        }
      } while (!0);
      G === null && (S = P), s.baseState = S, s.firstBaseUpdate = C, s.lastBaseUpdate = G, u === null && (s.shared.lanes = 0), mn |= f, e.lanes = f, e.memoizedState = P;
    }
  }
  function k_(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function T_(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        k_(n[e], t);
  }
  var Oi = E(null), Gr = E(0);
  function A_(e, t) {
    e = Va, K(Gr, e), K(Oi, t), Va = e | t.baseLanes;
  }
  function Vs() {
    K(Gr, Va), K(Oi, Oi.current);
  }
  function Ks() {
    Va = Gr.current, D(Oi), D(Gr);
  }
  var Kt = E(null), ra = null;
  function cn(e) {
    var t = e.alternate;
    K(tt, tt.current & 1), K(Kt, e), ra === null && (t === null || Oi.current !== null || t.memoizedState !== null) && (ra = e);
  }
  function Xs(e) {
    K(tt, tt.current), K(Kt, e), ra === null && (ra = e);
  }
  function N_(e) {
    e.tag === 22 ? (K(tt, tt.current), K(Kt, e), ra === null && (ra = e)) : un();
  }
  function un() {
    K(tt, tt.current), K(Kt, Kt.current);
  }
  function Xt(e) {
    D(Kt), ra === e && (ra = null), D(tt);
  }
  var tt = E(0);
  function Hr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || eu(n) || tu(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var qa = 0, he = null, Ie = null, ot = null, Ir = !1, Mi = !1, Wn = !1, Br = 0, To = 0, Ri = null, $v = 0;
  function Je() {
    throw Error(l(321));
  }
  function Fs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Yt(e[n], t[n])) return !1;
    return !0;
  }
  function Ws(e, t, n, r, s, u) {
    return qa = u, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e === null || e.memoizedState === null ? dm : dc, Wn = !1, u = n(r, s), Wn = !1, Mi && (u = x_(
      t,
      n,
      r,
      s
    )), C_(e), u;
  }
  function C_(e) {
    x.H = Co;
    var t = Ie !== null && Ie.next !== null;
    if (qa = 0, ot = Ie = he = null, Ir = !1, To = 0, Ri = null, t) throw Error(l(300));
    e === null || rt || (e = e.dependencies, e !== null && Mr(e) && (rt = !0));
  }
  function x_(e, t, n, r) {
    he = e;
    var s = 0;
    do {
      if (Mi && (Ri = null), To = 0, Mi = !1, 25 <= s) throw Error(l(301));
      if (s += 1, ot = Ie = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      x.H = _m, u = t(n, r);
    } while (Mi);
    return u;
  }
  function Qv() {
    var e = x.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ao(t) : t, e = e.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== e && (he.flags |= 1024), t;
  }
  function $s() {
    var e = Br !== 0;
    return Br = 0, e;
  }
  function Qs(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Js(e) {
    if (Ir) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ir = !1;
    }
    qa = 0, ot = Ie = he = null, Mi = !1, To = Br = 0, Ri = null;
  }
  function Nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ot === null ? he.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function at() {
    if (Ie === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = ot === null ? he.memoizedState : ot.next;
    if (t !== null)
      ot = t, Ie = e;
    else {
      if (e === null)
        throw he.alternate === null ? Error(l(467)) : Error(l(310));
      Ie = e, e = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null
      }, ot === null ? he.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function Pr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ao(e) {
    var t = To;
    return To += 1, Ri === null && (Ri = []), e = b_(Ri, e, t), t = he, (ot === null ? t.memoizedState : ot.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? dm : dc), e;
  }
  function Zr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ao(e);
      if (e.$$typeof === Z) return gt(e);
    }
    throw Error(l(438, String(e)));
  }
  function ec(e) {
    var t = null, n = he.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var r = he.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Pr(), he.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
        n[r] = ie;
    return t.index++, n;
  }
  function Ga(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yr(e) {
    var t = at();
    return tc(t, Ie, e);
  }
  function tc(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = n;
    var s = e.baseQueue, u = r.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = u.next, u.next = f;
      }
      t.baseQueue = s = u, r.pending = null;
    }
    if (u = e.baseState, s === null) e.memoizedState = u;
    else {
      t = s.next;
      var y = f = null, S = null, C = t, G = !1;
      do {
        var P = C.lane & -536870913;
        if (P !== C.lane ? (Te & P) === P : (qa & P) === P) {
          var M = C.revertLane;
          if (M === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), P === Ai && (G = !0);
          else if ((qa & M) === M) {
            C = C.next, M === Ai && (G = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (y = S = P, f = u) : S = S.next = P, he.lanes |= M, mn |= M;
          P = C.action, Wn && n(u, P), u = C.hasEagerState ? C.eagerState : n(u, P);
        } else
          M = {
            lane: P,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (y = S = M, f = u) : S = S.next = M, he.lanes |= P, mn |= P;
        C = C.next;
      } while (C !== null && C !== t);
      if (S === null ? f = u : S.next = y, !Yt(u, e.memoizedState) && (rt = !0, G && (n = Ni, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = f, e.baseQueue = S, r.lastRenderedState = u;
    }
    return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function ac(e) {
    var t = at(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, u = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== s);
      Yt(u, t.memoizedState) || (rt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function O_(e, t, n) {
    var r = he, s = at(), u = Ce;
    if (u) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else n = t();
    var f = !Yt(
      (Ie || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, rt = !0), s = s.queue, oc(D_.bind(null, r, s, e), [
      e
    ]), s.getSnapshot !== t || f || ot !== null && ot.memoizedState.tag & 1) {
      if (r.flags |= 2048, Di(
        9,
        { destroy: void 0 },
        R_.bind(
          null,
          r,
          s,
          n,
          t
        ),
        null
      ), Ze === null) throw Error(l(349));
      u || (qa & 127) !== 0 || M_(r, t, n);
    }
    return n;
  }
  function M_(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = Pr(), he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function R_(e, t, n, r) {
    t.value = n, t.getSnapshot = r, j_(t) && L_(e);
  }
  function D_(e, t, n) {
    return n(function() {
      j_(t) && L_(e);
    });
  }
  function j_(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Yt(e, n);
    } catch {
      return !0;
    }
  }
  function L_(e) {
    var t = In(e, 2);
    t !== null && Ht(t, e, 2);
  }
  function nc(e) {
    var t = Nt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Wn) {
        Qa(!0);
        try {
          n();
        } finally {
          Qa(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ga,
      lastRenderedState: e
    }, t;
  }
  function U_(e, t, n, r) {
    return e.baseState = n, tc(
      e,
      Ie,
      typeof r == "function" ? r : Ga
    );
  }
  function Jv(e, t, n, r, s) {
    if (Xr(e)) throw Error(l(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          u.listeners.push(f);
        }
      };
      x.T !== null ? n(!0) : u.isTransition = !1, r(u), n = t.pending, n === null ? (u.next = t.pending = u, q_(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function q_(e, t) {
    var n = t.action, r = t.payload, s = e.state;
    if (t.isTransition) {
      var u = x.T, f = {};
      x.T = f;
      try {
        var y = n(s, r), S = x.S;
        S !== null && S(f, y), G_(e, t, y);
      } catch (C) {
        ic(e, t, C);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), x.T = u;
      }
    } else
      try {
        u = n(s, r), G_(e, t, u);
      } catch (C) {
        ic(e, t, C);
      }
  }
  function G_(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(r) {
        H_(e, t, r);
      },
      function(r) {
        return ic(e, t, r);
      }
    ) : H_(e, t, n);
  }
  function H_(e, t, n) {
    t.status = "fulfilled", t.value = n, I_(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, q_(e, n)));
  }
  function ic(e, t, n) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = n, I_(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function I_(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function B_(e, t) {
    return t;
  }
  function P_(e, t) {
    if (Ce) {
      var n = Ze.formState;
      if (n !== null) {
        e: {
          var r = he;
          if (Ce) {
            if (Ye) {
              t: {
                for (var s = Ye, u = oa; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (s = la(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Ye = la(
                  s.nextSibling
                ), r = s.data === "F!";
                break e;
              }
            }
            nn(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return n = Nt(), n.memoizedState = n.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: B_,
      lastRenderedState: t
    }, n.queue = r, n = sm.bind(
      null,
      he,
      r
    ), r.dispatch = n, r = nc(!1), u = uc.bind(
      null,
      he,
      !1,
      r.queue
    ), r = Nt(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = s, n = Jv.bind(
      null,
      he,
      s,
      u,
      n
    ), s.dispatch = n, r.memoizedState = e, [t, n, !1];
  }
  function Z_(e) {
    var t = at();
    return Y_(t, Ie, e);
  }
  function Y_(e, t, n) {
    if (t = tc(
      e,
      t,
      B_
    )[0], e = Yr(Ga)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = Ao(t);
      } catch (f) {
        throw f === Ci ? jr : f;
      }
    else r = t;
    t = at();
    var s = t.queue, u = s.dispatch;
    return n !== t.memoizedState && (he.flags |= 2048, Di(
      9,
      { destroy: void 0 },
      ey.bind(null, s, n),
      null
    )), [r, u, e];
  }
  function ey(e, t) {
    e.action = t;
  }
  function V_(e) {
    var t = at(), n = Ie;
    if (n !== null)
      return Y_(t, n, e);
    at(), t = t.memoizedState, n = at();
    var r = n.queue.dispatch;
    return n.memoizedState = e, [t, r, !1];
  }
  function Di(e, t, n, r) {
    return e = { tag: e, create: n, deps: r, inst: t, next: null }, t = he.updateQueue, t === null && (t = Pr(), he.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
  }
  function K_() {
    return at().memoizedState;
  }
  function Vr(e, t, n, r) {
    var s = Nt();
    he.flags |= e, s.memoizedState = Di(
      1 | t,
      { destroy: void 0 },
      n,
      r === void 0 ? null : r
    );
  }
  function Kr(e, t, n, r) {
    var s = at();
    r = r === void 0 ? null : r;
    var u = s.memoizedState.inst;
    Ie !== null && r !== null && Fs(r, Ie.memoizedState.deps) ? s.memoizedState = Di(t, u, n, r) : (he.flags |= e, s.memoizedState = Di(
      1 | t,
      u,
      n,
      r
    ));
  }
  function X_(e, t) {
    Vr(8390656, 8, e, t);
  }
  function oc(e, t) {
    Kr(2048, 8, e, t);
  }
  function ty(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null)
      t = Pr(), he.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function F_(e) {
    var t = at().memoizedState;
    return ty({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(l(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function W_(e, t) {
    return Kr(4, 2, e, t);
  }
  function $_(e, t) {
    return Kr(4, 4, e, t);
  }
  function Q_(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function J_(e, t, n) {
    n = n != null ? n.concat([e]) : null, Kr(4, 4, Q_.bind(null, t, e), n);
  }
  function rc() {
  }
  function em(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && Fs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function tm(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    if (t !== null && Fs(t, r[1]))
      return r[0];
    if (r = e(), Wn) {
      Qa(!0);
      try {
        e();
      } finally {
        Qa(!1);
      }
    }
    return n.memoizedState = [r, t], r;
  }
  function lc(e, t, n) {
    return n === void 0 || (qa & 1073741824) !== 0 && (Te & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = af(), he.lanes |= e, mn |= e, n);
  }
  function am(e, t, n, r) {
    return Yt(n, t) ? n : Oi.current !== null ? (e = lc(e, n, r), Yt(e, t) || (rt = !0), e) : (qa & 42) === 0 || (qa & 1073741824) !== 0 && (Te & 261930) === 0 ? (rt = !0, e.memoizedState = n) : (e = af(), he.lanes |= e, mn |= e, t);
  }
  function nm(e, t, n, r, s) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var f = x.T, y = {};
    x.T = y, uc(e, !1, t, n);
    try {
      var S = s(), C = x.S;
      if (C !== null && C(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var G = Wv(
          S,
          r
        );
        No(
          e,
          t,
          G,
          $t(e)
        );
      } else
        No(
          e,
          t,
          r,
          $t(e)
        );
    } catch (P) {
      No(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: P },
        $t()
      );
    } finally {
      X.p = u, f !== null && y.types !== null && (f.types = y.types), x.T = f;
    }
  }
  function ay() {
  }
  function sc(e, t, n, r) {
    if (e.tag !== 5) throw Error(l(476));
    var s = im(e).queue;
    nm(
      e,
      s,
      t,
      J,
      n === null ? ay : function() {
        return om(e), n(r);
      }
    );
  }
  function im(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: J
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function om(e) {
    var t = im(e);
    t.next === null && (t = e.alternate.memoizedState), No(
      e,
      t.next.queue,
      {},
      $t()
    );
  }
  function cc() {
    return gt(Yo);
  }
  function rm() {
    return at().memoizedState;
  }
  function lm() {
    return at().memoizedState;
  }
  function ny(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = $t();
          e = ln(n);
          var r = sn(t, e, n);
          r !== null && (Ht(r, t, n), Eo(r, t, n)), t = { cache: qs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function iy(e, t, n) {
    var r = $t();
    n = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xr(e) ? cm(t, n) : (n = As(e, t, n, r), n !== null && (Ht(n, e, r), um(n, t, r)));
  }
  function sm(e, t, n) {
    var r = $t();
    No(e, t, n, r);
  }
  function No(e, t, n, r) {
    var s = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xr(e)) cm(t, s);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, y = u(f, n);
          if (s.hasEagerState = !0, s.eagerState = y, Yt(y, f))
            return Nr(e, t, s, 0), Ze === null && Ar(), !1;
        } catch {
        }
      if (n = As(e, t, s, r), n !== null)
        return Ht(n, e, r), um(n, t, r), !0;
    }
    return !1;
  }
  function uc(e, t, n, r) {
    if (r = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xr(e)) {
      if (t) throw Error(l(479));
    } else
      t = As(
        e,
        n,
        r,
        2
      ), t !== null && Ht(t, e, 2);
  }
  function Xr(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function cm(e, t) {
    Mi = Ir = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function um(e, t, n) {
    if ((n & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, pd(e, n);
    }
  }
  var Co = {
    readContext: gt,
    use: Zr,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useLayoutEffect: Je,
    useInsertionEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useSyncExternalStore: Je,
    useId: Je,
    useHostTransitionStatus: Je,
    useFormState: Je,
    useActionState: Je,
    useOptimistic: Je,
    useMemoCache: Je,
    useCacheRefresh: Je
  };
  Co.useEffectEvent = Je;
  var dm = {
    readContext: gt,
    use: Zr,
    useCallback: function(e, t) {
      return Nt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
    useEffect: X_,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Vr(
        4194308,
        4,
        Q_.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Vr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Vr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Nt();
      t = t === void 0 ? null : t;
      var r = e();
      if (Wn) {
        Qa(!0);
        try {
          e();
        } finally {
          Qa(!1);
        }
      }
      return n.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, n) {
      var r = Nt();
      if (n !== void 0) {
        var s = n(t);
        if (Wn) {
          Qa(!0);
          try {
            n(t);
          } finally {
            Qa(!1);
          }
        }
      } else s = t;
      return r.memoizedState = r.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, r.queue = e, e = e.dispatch = iy.bind(
        null,
        he,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = Nt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = nc(e);
      var t = e.queue, n = sm.bind(null, he, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = Nt();
      return lc(n, e, t);
    },
    useTransition: function() {
      var e = nc(!1);
      return e = nm.bind(
        null,
        he,
        e.queue,
        !0,
        !1
      ), Nt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var r = he, s = Nt();
      if (Ce) {
        if (n === void 0)
          throw Error(l(407));
        n = n();
      } else {
        if (n = t(), Ze === null)
          throw Error(l(349));
        (Te & 127) !== 0 || M_(r, t, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return s.queue = u, X_(D_.bind(null, r, u, e), [
        e
      ]), r.flags |= 2048, Di(
        9,
        { destroy: void 0 },
        R_.bind(
          null,
          r,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Nt(), t = Ze.identifierPrefix;
      if (Ce) {
        var n = Sa, r = wa;
        n = (r & ~(1 << 32 - Zt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Br++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = $v++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: cc,
    useFormState: P_,
    useActionState: P_,
    useOptimistic: function(e) {
      var t = Nt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = uc.bind(
        null,
        he,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: ec,
    useCacheRefresh: function() {
      return Nt().memoizedState = ny.bind(
        null,
        he
      );
    },
    useEffectEvent: function(e) {
      var t = Nt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((De & 2) !== 0)
          throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, dc = {
    readContext: gt,
    use: Zr,
    useCallback: em,
    useContext: gt,
    useEffect: oc,
    useImperativeHandle: J_,
    useInsertionEffect: W_,
    useLayoutEffect: $_,
    useMemo: tm,
    useReducer: Yr,
    useRef: K_,
    useState: function() {
      return Yr(Ga);
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = at();
      return am(
        n,
        Ie.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yr(Ga)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : Ao(e),
        t
      ];
    },
    useSyncExternalStore: O_,
    useId: rm,
    useHostTransitionStatus: cc,
    useFormState: Z_,
    useActionState: Z_,
    useOptimistic: function(e, t) {
      var n = at();
      return U_(n, Ie, e, t);
    },
    useMemoCache: ec,
    useCacheRefresh: lm
  };
  dc.useEffectEvent = F_;
  var _m = {
    readContext: gt,
    use: Zr,
    useCallback: em,
    useContext: gt,
    useEffect: oc,
    useImperativeHandle: J_,
    useInsertionEffect: W_,
    useLayoutEffect: $_,
    useMemo: tm,
    useReducer: ac,
    useRef: K_,
    useState: function() {
      return ac(Ga);
    },
    useDebugValue: rc,
    useDeferredValue: function(e, t) {
      var n = at();
      return Ie === null ? lc(n, e, t) : am(
        n,
        Ie.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ac(Ga)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : Ao(e),
        t
      ];
    },
    useSyncExternalStore: O_,
    useId: rm,
    useHostTransitionStatus: cc,
    useFormState: V_,
    useActionState: V_,
    useOptimistic: function(e, t) {
      var n = at();
      return Ie !== null ? U_(n, Ie, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: ec,
    useCacheRefresh: lm
  };
  _m.useEffectEvent = F_;
  function _c(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var mc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = $t(), s = ln(r);
      s.payload = t, n != null && (s.callback = n), t = sn(e, s, r), t !== null && (Ht(t, e, r), Eo(t, e, r));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = $t(), s = ln(r);
      s.tag = 1, s.payload = t, n != null && (s.callback = n), t = sn(e, s, r), t !== null && (Ht(t, e, r), Eo(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = $t(), r = ln(n);
      r.tag = 2, t != null && (r.callback = t), t = sn(e, r, n), t !== null && (Ht(t, e, n), Eo(t, e, n));
    }
  };
  function mm(e, t, n, r, s, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, f) : t.prototype && t.prototype.isPureReactComponent ? !po(n, r) || !po(s, u) : !0;
  }
  function fm(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mc.enqueueReplaceState(t, t.state, null);
  }
  function $n(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var r in t)
        r !== "ref" && (n[r] = t[r]);
    }
    if (e = e.defaultProps) {
      n === t && (n = b({}, n));
      for (var s in e)
        n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function pm(e) {
    Tr(e);
  }
  function gm(e) {
    console.error(e);
  }
  function hm(e) {
    Tr(e);
  }
  function Fr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function vm(e, t, n) {
    try {
      var r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function fc(e, t, n) {
    return n = ln(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Fr(e, t);
    }, n;
  }
  function ym(e) {
    return e = ln(e), e.tag = 3, e;
  }
  function bm(e, t, n, r) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = r.value;
      e.payload = function() {
        return s(u);
      }, e.callback = function() {
        vm(t, n, r);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      vm(t, n, r), typeof s != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
      var y = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function oy(e, t, n, r, s) {
    if (n.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = n.alternate, t !== null && Ti(
        t,
        n,
        s,
        !0
      ), n = Kt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return ra === null ? ll() : n.alternate === null && et === 0 && (et = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, r === Lr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Gc(e, r, s)), !1;
          case 22:
            return n.flags |= 65536, r === Lr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Gc(e, r, s)), !1;
        }
        throw Error(l(435, n.tag));
      }
      return Gc(e, r, s), ll(), !1;
    }
    if (Ce)
      return t = Kt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, r !== Rs && (e = Error(l(422), { cause: r }), vo(aa(e, n)))) : (r !== Rs && (t = Error(l(423), {
        cause: r
      }), vo(
        aa(t, n)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, r = aa(r, n), s = fc(
        e.stateNode,
        r,
        s
      ), Zs(e, s), et !== 4 && (et = 2)), !1;
    var u = Error(l(520), { cause: r });
    if (u = aa(u, n), Uo === null ? Uo = [u] : Uo.push(u), et !== 4 && (et = 2), t === null) return !0;
    r = aa(r, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = s & -s, n.lanes |= e, e = fc(n.stateNode, r, e), Zs(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (fn === null || !fn.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = ym(s), bm(
              s,
              e,
              n,
              r
            ), Zs(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var pc = Error(l(461)), rt = !1;
  function ht(e, t, n, r) {
    t.child = e === null ? z_(t, null, n, r) : Fn(
      t,
      e.child,
      n,
      r
    );
  }
  function wm(e, t, n, r, s) {
    n = n.render;
    var u = t.ref;
    if ("ref" in r) {
      var f = {};
      for (var y in r)
        y !== "ref" && (f[y] = r[y]);
    } else f = r;
    return Yn(t), r = Ws(
      e,
      t,
      n,
      f,
      u,
      s
    ), y = $s(), e !== null && !rt ? (Qs(e, t, s), Ha(e, t, s)) : (Ce && y && Os(t), t.flags |= 1, ht(e, t, r, s), t.child);
  }
  function Sm(e, t, n, r, s) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Ns(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Em(
        e,
        t,
        u,
        r,
        s
      )) : (e = xr(
        n.type,
        null,
        r,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ec(e, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : po, n(f, r) && e.ref === t.ref)
        return Ha(e, t, s);
    }
    return t.flags |= 1, e = Da(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Em(e, t, n, r, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (po(u, r) && e.ref === t.ref)
        if (rt = !1, t.pendingProps = r = u, Ec(e, s))
          (e.flags & 131072) !== 0 && (rt = !0);
        else
          return t.lanes = e.lanes, Ha(e, t, s);
    }
    return gc(
      e,
      t,
      n,
      r,
      s
    );
  }
  function zm(e, t, n, r) {
    var s = r.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (r = t.child = e.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          r = s & ~u;
        } else r = 0, t.child = null;
        return km(
          e,
          t,
          u,
          n,
          r
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Dr(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? A_(t, u) : Vs(), N_(t);
      else
        return r = t.lanes = 536870912, km(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          r
        );
    } else
      u !== null ? (Dr(t, u.cachePool), A_(t, u), un(), t.memoizedState = null) : (e !== null && Dr(t, null), Vs(), un());
    return ht(e, t, s, n), t.child;
  }
  function xo(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function km(e, t, n, r, s) {
    var u = Hs();
    return u = u === null ? null : { parent: it._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && Dr(t, null), Vs(), N_(t), e !== null && Ti(e, t, r, !0), t.childLanes = s, null;
  }
  function Wr(e, t) {
    return t = Qr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Tm(e, t, n) {
    return Fn(t, e.child, null, n), e = Wr(t, t.pendingProps), e.flags |= 2, Xt(t), t.memoizedState = null, e;
  }
  function ry(e, t, n) {
    var r = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ce) {
        if (r.mode === "hidden")
          return e = Wr(t, r), t.lanes = 536870912, xo(null, e);
        if (Xs(t), (e = Ye) ? (e = Gf(
          e,
          oa
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: tn !== null ? { id: wa, overflow: Sa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = c_(e), n.return = t, t.child = n, pt = t, Ye = null)) : e = null, e === null) throw nn(t);
        return t.lanes = 536870912, null;
      }
      return Wr(t, r);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Xs(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = Tm(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(l(558));
      else if (rt || Ti(e, t, n, !1), s = (n & e.childLanes) !== 0, rt || s) {
        if (r = Ze, r !== null && (f = gd(r, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, In(e, f), Ht(r, e, f), pc;
        ll(), t = Tm(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Ye = la(f.nextSibling), pt = t, Ce = !0, an = null, oa = !1, e !== null && __(t, e), t = Wr(t, r), t.flags |= 4096;
      return t;
    }
    return e = Da(e.child, {
      mode: r.mode,
      children: r.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function $r(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(l(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function gc(e, t, n, r, s) {
    return Yn(t), n = Ws(
      e,
      t,
      n,
      r,
      void 0,
      s
    ), r = $s(), e !== null && !rt ? (Qs(e, t, s), Ha(e, t, s)) : (Ce && r && Os(t), t.flags |= 1, ht(e, t, n, s), t.child);
  }
  function Am(e, t, n, r, s, u) {
    return Yn(t), t.updateQueue = null, n = x_(
      t,
      r,
      n,
      s
    ), C_(e), r = $s(), e !== null && !rt ? (Qs(e, t, u), Ha(e, t, u)) : (Ce && r && Os(t), t.flags |= 1, ht(e, t, n, u), t.child);
  }
  function Nm(e, t, n, r, s) {
    if (Yn(t), t.stateNode === null) {
      var u = Si, f = n.contextType;
      typeof f == "object" && f !== null && (u = gt(f)), u = new n(r, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = mc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = r, u.state = t.memoizedState, u.refs = {}, Bs(t), f = n.contextType, u.context = typeof f == "object" && f !== null ? gt(f) : Si, u.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (_c(
        t,
        n,
        f,
        r
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && mc.enqueueReplaceState(u, u.state, null), ko(t, r, u, s), zo(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      u = t.stateNode;
      var y = t.memoizedProps, S = $n(n, y);
      u.props = S;
      var C = u.context, G = n.contextType;
      f = Si, typeof G == "object" && G !== null && (f = gt(G));
      var P = n.getDerivedStateFromProps;
      G = typeof P == "function" || typeof u.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, G || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y || C !== f) && fm(
        t,
        u,
        r,
        f
      ), rn = !1;
      var M = t.memoizedState;
      u.state = M, ko(t, r, u, s), zo(), C = t.memoizedState, y || M !== C || rn ? (typeof P == "function" && (_c(
        t,
        n,
        P,
        r
      ), C = t.memoizedState), (S = rn || mm(
        t,
        n,
        S,
        r,
        M,
        C,
        f
      )) ? (G || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = C), u.props = r, u.state = C, u.context = f, r = S) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, Ps(e, t), f = t.memoizedProps, G = $n(n, f), u.props = G, P = t.pendingProps, M = u.context, C = n.contextType, S = Si, typeof C == "object" && C !== null && (S = gt(C)), y = n.getDerivedStateFromProps, (C = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== P || M !== S) && fm(
        t,
        u,
        r,
        S
      ), rn = !1, M = t.memoizedState, u.state = M, ko(t, r, u, s), zo();
      var j = t.memoizedState;
      f !== P || M !== j || rn || e !== null && e.dependencies !== null && Mr(e.dependencies) ? (typeof y == "function" && (_c(
        t,
        n,
        y,
        r
      ), j = t.memoizedState), (G = rn || mm(
        t,
        n,
        G,
        r,
        M,
        j,
        S
      ) || e !== null && e.dependencies !== null && Mr(e.dependencies)) ? (C || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, j, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        r,
        j,
        S
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = j), u.props = r, u.state = j, u.context = S, r = G) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return u = r, $r(e, t), r = (t.flags & 128) !== 0, u || r ? (u = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && r ? (t.child = Fn(
      t,
      e.child,
      null,
      s
    ), t.child = Fn(
      t,
      null,
      n,
      s
    )) : ht(e, t, n, s), t.memoizedState = u.state, e = t.child) : e = Ha(
      e,
      t,
      s
    ), e;
  }
  function Cm(e, t, n, r) {
    return Pn(), t.flags |= 256, ht(e, t, n, r), t.child;
  }
  var hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vc(e) {
    return { baseLanes: e, cachePool: v_() };
  }
  function yc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Wt), e;
  }
  function xm(e, t, n) {
    var r = t.pendingProps, s = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), f && (s = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ce) {
        if (s ? cn(t) : un(), (e = Ye) ? (e = Gf(
          e,
          oa
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: tn !== null ? { id: wa, overflow: Sa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = c_(e), n.return = t, t.child = n, pt = t, Ye = null)) : e = null, e === null) throw nn(t);
        return tu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = r.children;
      return r = r.fallback, s ? (un(), s = t.mode, y = Qr(
        { mode: "hidden", children: y },
        s
      ), r = Bn(
        r,
        s,
        n,
        null
      ), y.return = t, r.return = t, y.sibling = r, t.child = y, r = t.child, r.memoizedState = vc(n), r.childLanes = yc(
        e,
        f,
        n
      ), t.memoizedState = hc, xo(null, r)) : (cn(t), bc(t, y));
    }
    var S = e.memoizedState;
    if (S !== null && (y = S.dehydrated, y !== null)) {
      if (u)
        t.flags & 256 ? (cn(t), t.flags &= -257, t = wc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (un(), t.child = e.child, t.flags |= 128, t = null) : (un(), y = r.fallback, s = t.mode, r = Qr(
          { mode: "visible", children: r.children },
          s
        ), y = Bn(
          y,
          s,
          n,
          null
        ), y.flags |= 2, r.return = t, y.return = t, r.sibling = y, t.child = r, Fn(
          t,
          e.child,
          null,
          n
        ), r = t.child, r.memoizedState = vc(n), r.childLanes = yc(
          e,
          f,
          n
        ), t.memoizedState = hc, t = xo(null, r));
      else if (cn(t), tu(y)) {
        if (f = y.nextSibling && y.nextSibling.dataset, f) var C = f.dgst;
        f = C, r = Error(l(419)), r.stack = "", r.digest = f, vo({ value: r, source: null, stack: null }), t = wc(
          e,
          t,
          n
        );
      } else if (rt || Ti(e, t, n, !1), f = (n & e.childLanes) !== 0, rt || f) {
        if (f = Ze, f !== null && (r = gd(f, n), r !== 0 && r !== S.retryLane))
          throw S.retryLane = r, In(e, r), Ht(f, e, r), pc;
        eu(y) || ll(), t = wc(
          e,
          t,
          n
        );
      } else
        eu(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Ye = la(
          y.nextSibling
        ), pt = t, Ce = !0, an = null, oa = !1, e !== null && __(t, e), t = bc(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (un(), y = r.fallback, s = t.mode, S = e.child, C = S.sibling, r = Da(S, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? y = Da(
      C,
      y
    ) : (y = Bn(
      y,
      s,
      n,
      null
    ), y.flags |= 2), y.return = t, r.return = t, r.sibling = y, t.child = r, xo(null, r), r = t.child, y = e.child.memoizedState, y === null ? y = vc(n) : (s = y.cachePool, s !== null ? (S = it._currentValue, s = s.parent !== S ? { parent: S, pool: S } : s) : s = v_(), y = {
      baseLanes: y.baseLanes | n,
      cachePool: s
    }), r.memoizedState = y, r.childLanes = yc(
      e,
      f,
      n
    ), t.memoizedState = hc, xo(e.child, r)) : (cn(t), n = e.child, e = n.sibling, n = Da(n, {
      mode: "visible",
      children: r.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function bc(e, t) {
    return t = Qr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Qr(e, t) {
    return e = Vt(22, e, null, t), e.lanes = 0, e;
  }
  function wc(e, t, n) {
    return Fn(t, e.child, null, n), e = bc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Om(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ls(e.return, t, n);
  }
  function Sc(e, t, n, r, s, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = r, f.tail = n, f.tailMode = s, f.treeForkCount = u);
  }
  function Mm(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, u = r.tail;
    r = r.children;
    var f = tt.current, y = (f & 2) !== 0;
    if (y ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, K(tt, f), ht(e, t, r, n), r = Ce ? ho : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Om(e, n, t);
        else if (e.tag === 19)
          Om(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          e = n.alternate, e !== null && Hr(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Sc(
          t,
          !1,
          s,
          n,
          u,
          r
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Hr(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Sc(
          t,
          !0,
          n,
          null,
          u,
          r
        );
        break;
      case "together":
        Sc(
          t,
          !1,
          null,
          null,
          void 0,
          r
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ha(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), mn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ti(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Da(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Da(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ec(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mr(e)));
  }
  function ly(e, t, n) {
    switch (t.tag) {
      case 3:
        Ke(t, t.stateNode.containerInfo), on(t, it, e.memoizedState.cache), Pn();
        break;
      case 27:
      case 5:
        wt(t);
        break;
      case 4:
        Ke(t, t.stateNode.containerInfo);
        break;
      case 10:
        on(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Xs(t), null;
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (cn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xm(e, t, n) : (cn(t), e = Ha(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        cn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (r = (n & t.childLanes) !== 0, r || (Ti(
          e,
          t,
          n,
          !1
        ), r = (n & t.childLanes) !== 0), s) {
          if (r)
            return Mm(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), K(tt, tt.current), r) break;
        return null;
      case 22:
        return t.lanes = 0, zm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        on(t, it, e.memoizedState.cache);
    }
    return Ha(e, t, n);
  }
  function Rm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        rt = !0;
      else {
        if (!Ec(e, n) && (t.flags & 128) === 0)
          return rt = !1, ly(
            e,
            t,
            n
          );
        rt = (e.flags & 131072) !== 0;
      }
    else
      rt = !1, Ce && (t.flags & 1048576) !== 0 && d_(t, ho, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var r = t.pendingProps;
          if (e = Kn(t.elementType), t.type = e, typeof e == "function")
            Ns(e) ? (r = $n(e, r), t.tag = 1, t = Nm(
              null,
              t,
              e,
              r,
              n
            )) : (t.tag = 0, t = gc(
              null,
              t,
              e,
              r,
              n
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === B) {
                t.tag = 11, t = wm(
                  null,
                  t,
                  e,
                  r,
                  n
                );
                break e;
              } else if (s === Y) {
                t.tag = 14, t = Sm(
                  null,
                  t,
                  e,
                  r,
                  n
                );
                break e;
              }
            }
            throw t = ke(e) || e, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return gc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return r = t.type, s = $n(
          r,
          t.pendingProps
        ), Nm(
          e,
          t,
          r,
          s,
          n
        );
      case 3:
        e: {
          if (Ke(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          r = t.pendingProps;
          var u = t.memoizedState;
          s = u.element, Ps(e, t), ko(t, r, null, n);
          var f = t.memoizedState;
          if (r = f.cache, on(t, it, r), r !== u.cache && Us(
            t,
            [it],
            n,
            !0
          ), zo(), r = f.element, u.isDehydrated)
            if (u = {
              element: r,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Cm(
                e,
                t,
                r,
                n
              );
              break e;
            } else if (r !== s) {
              s = aa(
                Error(l(424)),
                t
              ), vo(s), t = Cm(
                e,
                t,
                r,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ye = la(e.firstChild), pt = t, Ce = !0, an = null, oa = !0, n = z_(
                t,
                null,
                r,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Pn(), r === s) {
              t = Ha(
                e,
                t,
                n
              );
              break e;
            }
            ht(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return $r(e, t), e === null ? (n = Yf(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ce || (n = t.type, e = t.pendingProps, r = fl(
          me.current
        ).createElement(n), r[ft] = t, r[Dt] = e, vt(r, n, e), dt(r), t.stateNode = r) : t.memoizedState = Yf(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return wt(t), e === null && Ce && (r = t.stateNode = Bf(
          t.type,
          t.pendingProps,
          me.current
        ), pt = t, oa = !0, s = Ye, vn(t.type) ? (au = s, Ye = la(r.firstChild)) : Ye = s), ht(
          e,
          t,
          t.pendingProps.children,
          n
        ), $r(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ce && ((s = r = Ye) && (r = Uy(
          r,
          t.type,
          t.pendingProps,
          oa
        ), r !== null ? (t.stateNode = r, pt = t, Ye = la(r.firstChild), oa = !1, s = !0) : s = !1), s || nn(t)), wt(t), s = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, r = u.children, $c(s, u) ? r = null : f !== null && $c(s, f) && (t.flags |= 32), t.memoizedState !== null && (s = Ws(
          e,
          t,
          Qv,
          null,
          null,
          n
        ), Yo._currentValue = s), $r(e, t), ht(e, t, r, n), t.child;
      case 6:
        return e === null && Ce && ((e = n = Ye) && (n = qy(
          n,
          t.pendingProps,
          oa
        ), n !== null ? (t.stateNode = n, pt = t, Ye = null, e = !0) : e = !1), e || nn(t)), null;
      case 13:
        return xm(e, t, n);
      case 4:
        return Ke(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = Fn(
          t,
          null,
          r,
          n
        ) : ht(e, t, r, n), t.child;
      case 11:
        return wm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return ht(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return ht(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ht(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return r = t.pendingProps, on(t, t.type, r.value), ht(e, t, r.children, n), t.child;
      case 9:
        return s = t.type._context, r = t.pendingProps.children, Yn(t), s = gt(s), r = r(s), t.flags |= 1, ht(e, t, r, n), t.child;
      case 14:
        return Sm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Em(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Mm(e, t, n);
      case 31:
        return ry(e, t, n);
      case 22:
        return zm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Yn(t), r = gt(it), e === null ? (s = Hs(), s === null && (s = Ze, u = qs(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), t.memoizedState = { parent: r, cache: s }, Bs(t), on(t, it, s)) : ((e.lanes & n) !== 0 && (Ps(e, t), ko(t, null, null, n), zo()), s = e.memoizedState, u = t.memoizedState, s.parent !== r ? (s = { parent: r, cache: r }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), on(t, it, r)) : (r = u.cache, on(t, it, r), r !== s.cache && Us(
          t,
          [it],
          n,
          !0
        ))), ht(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
  }
  function Ia(e) {
    e.flags |= 4;
  }
  function zc(e, t, n, r, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (lf()) e.flags |= 8192;
        else
          throw Xn = Lr, Is;
    } else e.flags &= -16777217;
  }
  function Dm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Wf(t))
      if (lf()) e.flags |= 8192;
      else
        throw Xn = Lr, Is;
  }
  function Jr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? md() : 536870912, e.lanes |= t, qi |= t);
  }
  function Oo(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 65011712, r |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function sy(e, t, n) {
    var r = t.pendingProps;
    switch (Ms(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ve(t), null;
      case 3:
        return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Ua(it), Le(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ki(t) ? Ia(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ds())), Ve(t), null;
      case 26:
        var s = t.type, u = t.memoizedState;
        return e === null ? (Ia(t), u !== null ? (Ve(t), Dm(t, u)) : (Ve(t), zc(
          t,
          s,
          null,
          r,
          n
        ))) : u ? u !== e.memoizedState ? (Ia(t), Ve(t), Dm(t, u)) : (Ve(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== r && Ia(t), Ve(t), zc(
          t,
          s,
          e,
          r,
          n
        )), null;
      case 27:
        if (Rt(t), n = me.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Ia(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ve(t), null;
          }
          e = $.current, ki(t) ? m_(t) : (e = Bf(s, r, n), t.stateNode = e, Ia(t));
        }
        return Ve(t), null;
      case 5:
        if (Rt(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Ia(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ve(t), null;
          }
          if (u = $.current, ki(t))
            m_(t);
          else {
            var f = fl(
              me.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof r.is == "string" ? f.createElement("select", {
                      is: r.is
                    }) : f.createElement("select"), r.multiple ? u.multiple = !0 : r.size && (u.size = r.size);
                    break;
                  default:
                    u = typeof r.is == "string" ? f.createElement(s, { is: r.is }) : f.createElement(s);
                }
            }
            u[ft] = t, u[Dt] = r;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = u;
            e: switch (vt(u, s, r), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && Ia(t);
          }
        }
        return Ve(t), zc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && Ia(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = me.current, ki(t)) {
            if (e = t.stateNode, n = t.memoizedProps, r = null, s = pt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  r = s.memoizedProps;
              }
            e[ft] = t, e = !!(e.nodeValue === n || r !== null && r.suppressHydrationWarning === !0 || Of(e.nodeValue, n)), e || nn(t, !0);
          } else
            e = fl(e).createTextNode(
              r
            ), e[ft] = t, t.stateNode = e;
        }
        return Ve(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (r = ki(t), n !== null) {
            if (e === null) {
              if (!r) throw Error(l(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[ft] = t;
            } else
              Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), e = !1;
          } else
            n = Ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Xt(t), t) : (Xt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Ve(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = ki(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(l(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(l(317));
              s[ft] = t;
            } else
              Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), s = !1;
          } else
            s = Ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (Xt(t), t) : (Xt(t), null);
        }
        return Xt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, s = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (s = r.alternate.memoizedState.cachePool.pool), u = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (u = r.memoizedState.cachePool.pool), u !== s && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Jr(t, t.updateQueue), Ve(t), null);
      case 4:
        return Le(), e === null && Vc(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return Ua(t.type), Ve(t), null;
      case 19:
        if (D(tt), r = t.memoizedState, r === null) return Ve(t), null;
        if (s = (t.flags & 128) !== 0, u = r.rendering, u === null)
          if (s) Oo(r, !1);
          else {
            if (et !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Hr(e), u !== null) {
                  for (t.flags |= 128, Oo(r, !1), e = u.updateQueue, t.updateQueue = e, Jr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    s_(n, e), n = n.sibling;
                  return K(
                    tt,
                    tt.current & 1 | 2
                  ), Ce && ja(t, r.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null && At() > il && (t.flags |= 128, s = !0, Oo(r, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = Hr(u), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Jr(t, e), Oo(r, !0), r.tail === null && r.tailMode === "hidden" && !u.alternate && !Ce)
                return Ve(t), null;
            } else
              2 * At() - r.renderingStartTime > il && n !== 536870912 && (t.flags |= 128, s = !0, Oo(r, !1), t.lanes = 4194304);
          r.isBackwards ? (u.sibling = t.child, t.child = u) : (e = r.last, e !== null ? e.sibling = u : t.child = u, r.last = u);
        }
        return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = At(), e.sibling = null, n = tt.current, K(
          tt,
          s ? n & 1 | 2 : n & 1
        ), Ce && ja(t, r.treeForkCount), e) : (Ve(t), null);
      case 22:
      case 23:
        return Xt(t), Ks(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), n = t.updateQueue, n !== null && Jr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && D(Vn), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ua(it), Ve(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function cy(e, t) {
    switch (Ms(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ua(it), Le(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Rt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Xt(t), t.alternate === null)
            throw Error(l(340));
          Pn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Xt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          Pn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return D(tt), null;
      case 4:
        return Le(), null;
      case 10:
        return Ua(t.type), null;
      case 22:
      case 23:
        return Xt(t), Ks(), e !== null && D(Vn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ua(it), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jm(e, t) {
    switch (Ms(t), t.tag) {
      case 3:
        Ua(it), Le();
        break;
      case 26:
      case 27:
      case 5:
        Rt(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        t.memoizedState !== null && Xt(t);
        break;
      case 13:
        Xt(t);
        break;
      case 19:
        D(tt);
        break;
      case 10:
        Ua(t.type);
        break;
      case 22:
      case 23:
        Xt(t), Ks(), e !== null && D(Vn);
        break;
      case 24:
        Ua(it);
    }
  }
  function Mo(e, t) {
    try {
      var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var u = n.create, f = n.inst;
            r = u(), f.destroy = r;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      qe(t, t.return, y);
    }
  }
  function dn(e, t, n) {
    try {
      var r = t.updateQueue, s = r !== null ? r.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            var f = r.inst, y = f.destroy;
            if (y !== void 0) {
              f.destroy = void 0, s = t;
              var S = n, C = y;
              try {
                C();
              } catch (G) {
                qe(
                  s,
                  S,
                  G
                );
              }
            }
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (G) {
      qe(t, t.return, G);
    }
  }
  function Lm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        T_(t, n);
      } catch (r) {
        qe(e, e.return, r);
      }
    }
  }
  function Um(e, t, n) {
    n.props = $n(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (r) {
      qe(e, t, r);
    }
  }
  function Ro(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
      }
    } catch (s) {
      qe(e, t, s);
    }
  }
  function Ea(e, t) {
    var n = e.ref, r = e.refCleanup;
    if (n !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (s) {
          qe(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          qe(e, t, s);
        }
      else n.current = null;
  }
  function qm(e) {
    var t = e.type, n = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (s) {
      qe(e, e.return, s);
    }
  }
  function kc(e, t, n) {
    try {
      var r = e.stateNode;
      Oy(r, e.type, n, t), r[Dt] = t;
    } catch (s) {
      qe(e, e.return, s);
    }
  }
  function Gm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && vn(e.type) || e.tag === 4;
  }
  function Tc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && vn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ac(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ma));
    else if (r !== 4 && (r === 27 && vn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Ac(e, t, n), e = e.sibling; e !== null; )
        Ac(e, t, n), e = e.sibling;
  }
  function el(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (r === 27 && vn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (el(e, t, n), e = e.sibling; e !== null; )
        el(e, t, n), e = e.sibling;
  }
  function Hm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var r = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      vt(t, r, n), t[ft] = e, t[Dt] = n;
    } catch (u) {
      qe(e, e.return, u);
    }
  }
  var Ba = !1, lt = !1, Nc = !1, Im = typeof WeakSet == "function" ? WeakSet : Set, _t = null;
  function uy(e, t) {
    if (e = e.containerInfo, Fc = wl, e = Jd(e), ws(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var s = r.anchorOffset, u = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0, y = -1, S = -1, C = 0, G = 0, P = e, M = null;
            t: for (; ; ) {
              for (var j; P !== n || s !== 0 && P.nodeType !== 3 || (y = f + s), P !== u || r !== 0 && P.nodeType !== 3 || (S = f + r), P.nodeType === 3 && (f += P.nodeValue.length), (j = P.firstChild) !== null; )
                M = P, P = j;
              for (; ; ) {
                if (P === e) break t;
                if (M === n && ++C === s && (y = f), M === u && ++G === r && (S = f), (j = P.nextSibling) !== null) break;
                P = M, M = P.parentNode;
              }
              P = j;
            }
            n = y === -1 || S === -1 ? null : { start: y, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Wc = { focusedElem: e, selectionRange: n }, wl = !1, _t = t; _t !== null; )
      if (t = _t, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, _t = e;
      else
        for (; _t !== null; ) {
          switch (t = _t, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  s = e[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, s = u.memoizedProps, u = u.memoizedState, r = n.stateNode;
                try {
                  var Q = $n(
                    n.type,
                    s
                  );
                  e = r.getSnapshotBeforeUpdate(
                    Q,
                    u
                  ), r.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  qe(
                    n,
                    n.return,
                    le
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Jc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, _t = e;
            break;
          }
          _t = t.return;
        }
  }
  function Bm(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Za(e, n), r & 4 && Mo(5, n);
        break;
      case 1:
        if (Za(e, n), r & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              qe(n, n.return, f);
            }
          else {
            var s = $n(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              qe(
                n,
                n.return,
                f
              );
            }
          }
        r & 64 && Lm(n), r & 512 && Ro(n, n.return);
        break;
      case 3:
        if (Za(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            T_(e, t);
          } catch (f) {
            qe(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Hm(n);
      case 26:
      case 5:
        Za(e, n), t === null && r & 4 && qm(n), r & 512 && Ro(n, n.return);
        break;
      case 12:
        Za(e, n);
        break;
      case 31:
        Za(e, n), r & 4 && Ym(e, n);
        break;
      case 13:
        Za(e, n), r & 4 && Vm(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = yy.bind(
          null,
          n
        ), Gy(e, n))));
        break;
      case 22:
        if (r = n.memoizedState !== null || Ba, !r) {
          t = t !== null && t.memoizedState !== null || lt, s = Ba;
          var u = lt;
          Ba = r, (lt = t) && !u ? Ya(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Za(e, n), Ba = s, lt = u;
        }
        break;
      case 30:
        break;
      default:
        Za(e, n);
    }
  }
  function Pm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && is(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Xe = null, Lt = !1;
  function Pa(e, t, n) {
    for (n = n.child; n !== null; )
      Zm(e, t, n), n = n.sibling;
  }
  function Zm(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(ao, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        lt || Ea(n, t), Pa(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        lt || Ea(n, t);
        var r = Xe, s = Lt;
        vn(n.type) && (Xe = n.stateNode, Lt = !1), Pa(
          e,
          t,
          n
        ), Bo(n.stateNode), Xe = r, Lt = s;
        break;
      case 5:
        lt || Ea(n, t);
      case 6:
        if (r = Xe, s = Lt, Xe = null, Pa(
          e,
          t,
          n
        ), Xe = r, Lt = s, Xe !== null)
          if (Lt)
            try {
              (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(n.stateNode);
            } catch (u) {
              qe(
                n,
                t,
                u
              );
            }
          else
            try {
              Xe.removeChild(n.stateNode);
            } catch (u) {
              qe(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Xe !== null && (Lt ? (e = Xe, Uf(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Vi(e)) : Uf(Xe, n.stateNode));
        break;
      case 4:
        r = Xe, s = Lt, Xe = n.stateNode.containerInfo, Lt = !0, Pa(
          e,
          t,
          n
        ), Xe = r, Lt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        dn(2, n, t), lt || dn(4, n, t), Pa(
          e,
          t,
          n
        );
        break;
      case 1:
        lt || (Ea(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Um(
          n,
          t,
          r
        )), Pa(
          e,
          t,
          n
        );
        break;
      case 21:
        Pa(
          e,
          t,
          n
        );
        break;
      case 22:
        lt = (r = lt) || n.memoizedState !== null, Pa(
          e,
          t,
          n
        ), lt = r;
        break;
      default:
        Pa(
          e,
          t,
          n
        );
    }
  }
  function Ym(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Vi(e);
      } catch (n) {
        qe(t, t.return, n);
      }
    }
  }
  function Vm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Vi(e);
      } catch (n) {
        qe(t, t.return, n);
      }
  }
  function dy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Im()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Im()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function tl(e, t) {
    var n = dy(e);
    t.forEach(function(r) {
      if (!n.has(r)) {
        n.add(r);
        var s = by.bind(null, e, r);
        r.then(s, s);
      }
    });
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var s = n[r], u = e, f = t, y = f;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (vn(y.type)) {
                Xe = y.stateNode, Lt = !1;
                break e;
              }
              break;
            case 5:
              Xe = y.stateNode, Lt = !1;
              break e;
            case 3:
            case 4:
              Xe = y.stateNode.containerInfo, Lt = !0;
              break e;
          }
          y = y.return;
        }
        if (Xe === null) throw Error(l(160));
        Zm(u, f, s), Xe = null, Lt = !1, u = s.alternate, u !== null && (u.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Km(t, e), t = t.sibling;
  }
  var ga = null;
  function Km(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ut(t, e), qt(e), r & 4 && (dn(3, e, e.return), Mo(3, e), dn(5, e, e.return));
        break;
      case 1:
        Ut(t, e), qt(e), r & 512 && (lt || n === null || Ea(n, n.return)), r & 64 && Ba && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
        break;
      case 26:
        var s = ga;
        if (Ut(t, e), qt(e), r & 512 && (lt || n === null || Ea(n, n.return)), r & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (r = e.memoizedState, n === null)
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  r = e.type, n = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (r) {
                    case "title":
                      u = s.getElementsByTagName("title")[0], (!u || u[oo] || u[ft] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(r), s.head.insertBefore(
                        u,
                        s.querySelector("head > title")
                      )), vt(u, r, n), u[ft] = e, dt(u), r = u;
                      break e;
                    case "link":
                      var f = Xf(
                        "link",
                        "href",
                        s
                      ).get(r + (n.href || ""));
                      if (f) {
                        for (var y = 0; y < f.length; y++)
                          if (u = f[y], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(y, 1);
                            break t;
                          }
                      }
                      u = s.createElement(r), vt(u, r, n), s.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = Xf(
                        "meta",
                        "content",
                        s
                      ).get(r + (n.content || ""))) {
                        for (y = 0; y < f.length; y++)
                          if (u = f[y], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(y, 1);
                            break t;
                          }
                      }
                      u = s.createElement(r), vt(u, r, n), s.head.appendChild(u);
                      break;
                    default:
                      throw Error(l(468, r));
                  }
                  u[ft] = e, dt(u), r = u;
                }
                e.stateNode = r;
              } else
                Ff(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Kf(
                s,
                r,
                e.memoizedProps
              );
          else
            u !== r ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, r === null ? Ff(
              s,
              e.type,
              e.stateNode
            ) : Kf(
              s,
              r,
              e.memoizedProps
            )) : r === null && e.stateNode !== null && kc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ut(t, e), qt(e), r & 512 && (lt || n === null || Ea(n, n.return)), n !== null && r & 4 && kc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ut(t, e), qt(e), r & 512 && (lt || n === null || Ea(n, n.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            pi(s, "");
          } catch (Q) {
            qe(e, e.return, Q);
          }
        }
        r & 4 && e.stateNode != null && (s = e.memoizedProps, kc(
          e,
          s,
          n !== null ? n.memoizedProps : s
        )), r & 1024 && (Nc = !0);
        break;
      case 6:
        if (Ut(t, e), qt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          r = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = r;
          } catch (Q) {
            qe(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (hl = null, s = ga, ga = pl(t.containerInfo), Ut(t, e), ga = s, qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Vi(t.containerInfo);
          } catch (Q) {
            qe(e, e.return, Q);
          }
        Nc && (Nc = !1, Xm(e));
        break;
      case 4:
        r = ga, ga = pl(
          e.stateNode.containerInfo
        ), Ut(t, e), qt(e), ga = r;
        break;
      case 12:
        Ut(t, e), qt(e);
        break;
      case 31:
        Ut(t, e), qt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, tl(e, r)));
        break;
      case 13:
        Ut(t, e), qt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (nl = At()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, tl(e, r)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null, C = Ba, G = lt;
        if (Ba = C || s, lt = G || S, Ut(t, e), lt = G, Ba = C, qt(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (n === null || S || Ba || lt || Qn(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (u = S.stateNode, s)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    y = S.stateNode;
                    var P = S.memoizedProps.style, M = P != null && P.hasOwnProperty("display") ? P.display : null;
                    y.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (Q) {
                  qe(S, S.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (Q) {
                  qe(S, S.return, Q);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var j = S.stateNode;
                  s ? qf(j, !0) : qf(S.stateNode, !1);
                } catch (Q) {
                  qe(S, S.return, Q);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, tl(e, n))));
        break;
      case 19:
        Ut(t, e), qt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, tl(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ut(t, e), qt(e);
    }
  }
  function qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, r = e.return; r !== null; ) {
          if (Gm(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        if (n == null) throw Error(l(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, u = Tc(e);
            el(e, u, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (pi(f, ""), n.flags &= -33);
            var y = Tc(e);
            el(e, y, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo, C = Tc(e);
            Ac(
              e,
              C,
              S
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (G) {
        qe(e, e.return, G);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Xm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Za(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Bm(e, t.alternate, t), t = t.sibling;
  }
  function Qn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dn(4, t, t.return), Qn(t);
          break;
        case 1:
          Ea(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Um(
            t,
            t.return,
            n
          ), Qn(t);
          break;
        case 27:
          Bo(t.stateNode);
        case 26:
        case 5:
          Ea(t, t.return), Qn(t);
          break;
        case 22:
          t.memoizedState === null && Qn(t);
          break;
        case 30:
          Qn(t);
          break;
        default:
          Qn(t);
      }
      e = e.sibling;
    }
  }
  function Ya(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate, s = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ya(
            s,
            u,
            n
          ), Mo(4, u);
          break;
        case 1:
          if (Ya(
            s,
            u,
            n
          ), r = u, s = r.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (C) {
              qe(r, r.return, C);
            }
          if (r = u, s = r.updateQueue, s !== null) {
            var y = r.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  k_(S[s], y);
            } catch (C) {
              qe(r, r.return, C);
            }
          }
          n && f & 64 && Lm(u), Ro(u, u.return);
          break;
        case 27:
          Hm(u);
        case 26:
        case 5:
          Ya(
            s,
            u,
            n
          ), n && r === null && f & 4 && qm(u), Ro(u, u.return);
          break;
        case 12:
          Ya(
            s,
            u,
            n
          );
          break;
        case 31:
          Ya(
            s,
            u,
            n
          ), n && f & 4 && Ym(s, u);
          break;
        case 13:
          Ya(
            s,
            u,
            n
          ), n && f & 4 && Vm(s, u);
          break;
        case 22:
          u.memoizedState === null && Ya(
            s,
            u,
            n
          ), Ro(u, u.return);
          break;
        case 30:
          break;
        default:
          Ya(
            s,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Cc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && yo(n));
  }
  function xc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yo(e));
  }
  function ha(e, t, n, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Fm(
          e,
          t,
          n,
          r
        ), t = t.sibling;
  }
  function Fm(e, t, n, r) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ha(
          e,
          t,
          n,
          r
        ), s & 2048 && Mo(9, t);
        break;
      case 1:
        ha(
          e,
          t,
          n,
          r
        );
        break;
      case 3:
        ha(
          e,
          t,
          n,
          r
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yo(e)));
        break;
      case 12:
        if (s & 2048) {
          ha(
            e,
            t,
            n,
            r
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, f = u.id, y = u.onPostCommit;
            typeof y == "function" && y(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            qe(t, t.return, S);
          }
        } else
          ha(
            e,
            t,
            n,
            r
          );
        break;
      case 31:
        ha(
          e,
          t,
          n,
          r
        );
        break;
      case 13:
        ha(
          e,
          t,
          n,
          r
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? ha(
          e,
          t,
          n,
          r
        ) : Do(e, t) : u._visibility & 2 ? ha(
          e,
          t,
          n,
          r
        ) : (u._visibility |= 2, ji(
          e,
          t,
          n,
          r,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Cc(f, t);
        break;
      case 24:
        ha(
          e,
          t,
          n,
          r
        ), s & 2048 && xc(t.alternate, t);
        break;
      default:
        ha(
          e,
          t,
          n,
          r
        );
    }
  }
  function ji(e, t, n, r, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, y = n, S = r, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ji(
            u,
            f,
            y,
            S,
            s
          ), Mo(8, f);
          break;
        case 23:
          break;
        case 22:
          var G = f.stateNode;
          f.memoizedState !== null ? G._visibility & 2 ? ji(
            u,
            f,
            y,
            S,
            s
          ) : Do(
            u,
            f
          ) : (G._visibility |= 2, ji(
            u,
            f,
            y,
            S,
            s
          )), s && C & 2048 && Cc(
            f.alternate,
            f
          );
          break;
        case 24:
          ji(
            u,
            f,
            y,
            S,
            s
          ), s && C & 2048 && xc(f.alternate, f);
          break;
        default:
          ji(
            u,
            f,
            y,
            S,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Do(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, r = t, s = r.flags;
        switch (r.tag) {
          case 22:
            Do(n, r), s & 2048 && Cc(
              r.alternate,
              r
            );
            break;
          case 24:
            Do(n, r), s & 2048 && xc(r.alternate, r);
            break;
          default:
            Do(n, r);
        }
        t = t.sibling;
      }
  }
  var jo = 8192;
  function Li(e, t, n) {
    if (e.subtreeFlags & jo)
      for (e = e.child; e !== null; )
        Wm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Wm(e, t, n) {
    switch (e.tag) {
      case 26:
        Li(
          e,
          t,
          n
        ), e.flags & jo && e.memoizedState !== null && $y(
          n,
          ga,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Li(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var r = ga;
        ga = pl(e.stateNode.containerInfo), Li(
          e,
          t,
          n
        ), ga = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = jo, jo = 16777216, Li(
          e,
          t,
          n
        ), jo = r) : Li(
          e,
          t,
          n
        ));
        break;
      default:
        Li(
          e,
          t,
          n
        );
    }
  }
  function $m(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Lo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          _t = r, Jm(
            r,
            e
          );
        }
      $m(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qm(e), e = e.sibling;
  }
  function Qm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Lo(e), e.flags & 2048 && dn(9, e, e.return);
        break;
      case 3:
        Lo(e);
        break;
      case 12:
        Lo(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, al(e)) : Lo(e);
        break;
      default:
        Lo(e);
    }
  }
  function al(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          _t = r, Jm(
            r,
            e
          );
        }
      $m(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          dn(8, t, t.return), al(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, al(t));
          break;
        default:
          al(t);
      }
      e = e.sibling;
    }
  }
  function Jm(e, t) {
    for (; _t !== null; ) {
      var n = _t;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          dn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          yo(n.memoizedState.cache);
      }
      if (r = n.child, r !== null) r.return = n, _t = r;
      else
        e: for (n = e; _t !== null; ) {
          r = _t;
          var s = r.sibling, u = r.return;
          if (Pm(r), r === n) {
            _t = null;
            break e;
          }
          if (s !== null) {
            s.return = u, _t = s;
            break e;
          }
          _t = u;
        }
    }
  }
  var _y = {
    getCacheForType: function(e) {
      var t = gt(it), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return gt(it).controller.signal;
    }
  }, my = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Ze = null, Se = null, Te = 0, Ue = 0, Ft = null, _n = !1, Ui = !1, Oc = !1, Va = 0, et = 0, mn = 0, Jn = 0, Mc = 0, Wt = 0, qi = 0, Uo = null, Gt = null, Rc = !1, nl = 0, ef = 0, il = 1 / 0, ol = null, fn = null, ut = 0, pn = null, Gi = null, Ka = 0, Dc = 0, jc = null, tf = null, qo = 0, Lc = null;
  function $t() {
    return (De & 2) !== 0 && Te !== 0 ? Te & -Te : x.T !== null ? Bc() : hd();
  }
  function af() {
    if (Wt === 0)
      if ((Te & 536870912) === 0 || Ce) {
        var e = mr;
        mr <<= 1, (mr & 3932160) === 0 && (mr = 262144), Wt = e;
      } else Wt = 536870912;
    return e = Kt.current, e !== null && (e.flags |= 32), Wt;
  }
  function Ht(e, t, n) {
    (e === Ze && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (Hi(e, 0), gn(
      e,
      Te,
      Wt,
      !1
    )), io(e, n), ((De & 2) === 0 || e !== Ze) && (e === Ze && ((De & 2) === 0 && (Jn |= n), et === 4 && gn(
      e,
      Te,
      Wt,
      !1
    )), za(e));
  }
  function nf(e, t, n) {
    if ((De & 6) !== 0) throw Error(l(327));
    var r = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || no(e, t), s = r ? gy(e, t) : qc(e, t, !0), u = r;
    do {
      if (s === 0) {
        Ui && !r && gn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !fy(n)) {
          s = qc(e, t, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var y = e;
              s = Uo;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (Hi(y, f).flags |= 256), f = qc(
                y,
                f,
                !1
              ), f !== 2) {
                if (Oc && !S) {
                  y.errorRecoveryDisabledLanes |= u, Jn |= u, s = 4;
                  break e;
                }
                u = Gt, Gt = s, u !== null && (Gt === null ? Gt = u : Gt.push.apply(
                  Gt,
                  u
                ));
              }
              s = f;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Hi(e, 0), gn(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, u = s, u) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              gn(
                r,
                t,
                Wt,
                !_n
              );
              break e;
            case 2:
              Gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (s = nl + 300 - At(), 10 < s)) {
            if (gn(
              r,
              t,
              Wt,
              !_n
            ), pr(r, 0, !0) !== 0) break e;
            Ka = t, r.timeoutHandle = jf(
              of.bind(
                null,
                r,
                n,
                Gt,
                ol,
                Rc,
                t,
                Wt,
                Jn,
                qi,
                _n,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          of(
            r,
            n,
            Gt,
            ol,
            Rc,
            t,
            Wt,
            Jn,
            qi,
            _n,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    za(e);
  }
  function of(e, t, n, r, s, u, f, y, S, C, G, P, M, j) {
    if (e.timeoutHandle = -1, P = t.subtreeFlags, P & 8192 || (P & 16785408) === 16785408) {
      P = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ma
      }, Wm(
        t,
        u,
        P
      );
      var Q = (u & 62914560) === u ? nl - At() : (u & 4194048) === u ? ef - At() : 0;
      if (Q = Qy(
        P,
        Q
      ), Q !== null) {
        Ka = u, e.cancelPendingCommit = Q(
          mf.bind(
            null,
            e,
            t,
            u,
            n,
            r,
            s,
            f,
            y,
            S,
            G,
            P,
            null,
            M,
            j
          )
        ), gn(e, u, f, !C);
        return;
      }
    }
    mf(
      e,
      t,
      u,
      n,
      r,
      s,
      f,
      y,
      S
    );
  }
  function fy(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var r = 0; r < n.length; r++) {
          var s = n[r], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Yt(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function gn(e, t, n, r) {
    t &= ~Mc, t &= ~Jn, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var u = 31 - Zt(s), f = 1 << u;
      r[u] = -1, s &= ~f;
    }
    n !== 0 && fd(e, n, t);
  }
  function rl() {
    return (De & 6) === 0 ? (Go(0), !1) : !0;
  }
  function Uc() {
    if (Se !== null) {
      if (Ue === 0)
        var e = Se.return;
      else
        e = Se, La = Zn = null, Js(e), xi = null, wo = 0, e = Se;
      for (; e !== null; )
        jm(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function Hi(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Dy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Ka = 0, Uc(), Ze = e, Se = n = Da(e.current, null), Te = t, Ue = 0, Ft = null, _n = !1, Ui = no(e, t), Oc = !1, qi = Wt = Mc = Jn = mn = et = 0, Gt = Uo = null, Rc = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var s = 31 - Zt(r), u = 1 << s;
        t |= e[s], r &= ~u;
      }
    return Va = t, Ar(), n;
  }
  function rf(e, t) {
    he = null, x.H = Co, t === Ci || t === jr ? (t = w_(), Ue = 3) : t === Is ? (t = w_(), Ue = 4) : Ue = t === pc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ft = t, Se === null && (et = 1, Fr(
      e,
      aa(t, e.current)
    ));
  }
  function lf() {
    var e = Kt.current;
    return e === null ? !0 : (Te & 4194048) === Te ? ra === null : (Te & 62914560) === Te || (Te & 536870912) !== 0 ? e === ra : !1;
  }
  function sf() {
    var e = x.H;
    return x.H = Co, e === null ? Co : e;
  }
  function cf() {
    var e = x.A;
    return x.A = _y, e;
  }
  function ll() {
    et = 4, _n || (Te & 4194048) !== Te && Kt.current !== null || (Ui = !0), (mn & 134217727) === 0 && (Jn & 134217727) === 0 || Ze === null || gn(
      Ze,
      Te,
      Wt,
      !1
    );
  }
  function qc(e, t, n) {
    var r = De;
    De |= 2;
    var s = sf(), u = cf();
    (Ze !== e || Te !== t) && (ol = null, Hi(e, t)), t = !1;
    var f = et;
    e: do
      try {
        if (Ue !== 0 && Se !== null) {
          var y = Se, S = Ft;
          switch (Ue) {
            case 8:
              Uc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Kt.current === null && (t = !0);
              var C = Ue;
              if (Ue = 0, Ft = null, Ii(e, y, S, C), n && Ui) {
                f = 0;
                break e;
              }
              break;
            default:
              C = Ue, Ue = 0, Ft = null, Ii(e, y, S, C);
          }
        }
        py(), f = et;
        break;
      } catch (G) {
        rf(e, G);
      }
    while (!0);
    return t && e.shellSuspendCounter++, La = Zn = null, De = r, x.H = s, x.A = u, Se === null && (Ze = null, Te = 0, Ar()), f;
  }
  function py() {
    for (; Se !== null; ) uf(Se);
  }
  function gy(e, t) {
    var n = De;
    De |= 2;
    var r = sf(), s = cf();
    Ze !== e || Te !== t ? (ol = null, il = At() + 500, Hi(e, t)) : Ui = no(
      e,
      t
    );
    e: do
      try {
        if (Ue !== 0 && Se !== null) {
          t = Se;
          var u = Ft;
          t: switch (Ue) {
            case 1:
              Ue = 0, Ft = null, Ii(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (y_(u)) {
                Ue = 0, Ft = null, df(t);
                break;
              }
              t = function() {
                Ue !== 2 && Ue !== 9 || Ze !== e || (Ue = 7), za(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              y_(u) ? (Ue = 0, Ft = null, df(t)) : (Ue = 0, Ft = null, Ii(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (Se.tag) {
                case 26:
                  f = Se.memoizedState;
                case 5:
                case 27:
                  var y = Se;
                  if (f ? Wf(f) : y.stateNode.complete) {
                    Ue = 0, Ft = null;
                    var S = y.sibling;
                    if (S !== null) Se = S;
                    else {
                      var C = y.return;
                      C !== null ? (Se = C, sl(C)) : Se = null;
                    }
                    break t;
                  }
              }
              Ue = 0, Ft = null, Ii(e, t, u, 5);
              break;
            case 6:
              Ue = 0, Ft = null, Ii(e, t, u, 6);
              break;
            case 8:
              Uc(), et = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        hy();
        break;
      } catch (G) {
        rf(e, G);
      }
    while (!0);
    return La = Zn = null, x.H = r, x.A = s, De = n, Se !== null ? 0 : (Ze = null, Te = 0, Ar(), et);
  }
  function hy() {
    for (; Se !== null && !cd(); )
      uf(Se);
  }
  function uf(e) {
    var t = Rm(e.alternate, e, Va);
    e.memoizedProps = e.pendingProps, t === null ? sl(e) : Se = t;
  }
  function df(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Am(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Te
        );
        break;
      case 11:
        t = Am(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Te
        );
        break;
      case 5:
        Js(t);
      default:
        jm(n, t), t = Se = s_(t, Va), t = Rm(n, t, Va);
    }
    e.memoizedProps = e.pendingProps, t === null ? sl(e) : Se = t;
  }
  function Ii(e, t, n, r) {
    La = Zn = null, Js(t), xi = null, wo = 0;
    var s = t.return;
    try {
      if (oy(
        e,
        s,
        t,
        n,
        Te
      )) {
        et = 1, Fr(
          e,
          aa(n, e.current)
        ), Se = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw Se = s, u;
      et = 1, Fr(
        e,
        aa(n, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Ce || r === 1 ? e = !0 : Ui || (Te & 536870912) !== 0 ? e = !1 : (_n = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Kt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), _f(t, e)) : sl(t);
  }
  function sl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _f(
          t,
          _n
        );
        return;
      }
      e = t.return;
      var n = sy(
        t.alternate,
        t,
        Va
      );
      if (n !== null) {
        Se = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function _f(e, t) {
    do {
      var n = cy(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Se = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Se = e;
        return;
      }
      Se = e = n;
    } while (e !== null);
    et = 6, Se = null;
  }
  function mf(e, t, n, r, s, u, f, y, S) {
    e.cancelPendingCommit = null;
    do
      cl();
    while (ut !== 0);
    if ((De & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (u = t.lanes | t.childLanes, u |= Ts, Wh(
        e,
        n,
        u,
        f,
        y,
        S
      ), e === Ze && (Se = Ze = null, Te = 0), Gi = t, pn = e, Ka = n, Dc = u, jc = s, tf = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, wy(dr, function() {
        return vf(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = x.T, x.T = null, s = X.p, X.p = 2, f = De, De |= 4;
        try {
          uy(e, t, n);
        } finally {
          De = f, X.p = s, x.T = r;
        }
      }
      ut = 1, ff(), pf(), gf();
    }
  }
  function ff() {
    if (ut === 1) {
      ut = 0;
      var e = pn, t = Gi, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = x.T, x.T = null;
        var r = X.p;
        X.p = 2;
        var s = De;
        De |= 4;
        try {
          Km(t, e);
          var u = Wc, f = Jd(e.containerInfo), y = u.focusedElem, S = u.selectionRange;
          if (f !== y && y && y.ownerDocument && Qd(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && ws(y)) {
              var C = S.start, G = S.end;
              if (G === void 0 && (G = C), "selectionStart" in y)
                y.selectionStart = C, y.selectionEnd = Math.min(
                  G,
                  y.value.length
                );
              else {
                var P = y.ownerDocument || document, M = P && P.defaultView || window;
                if (M.getSelection) {
                  var j = M.getSelection(), Q = y.textContent.length, le = Math.min(S.start, Q), Pe = S.end === void 0 ? le : Math.min(S.end, Q);
                  !j.extend && le > Pe && (f = Pe, Pe = le, le = f);
                  var A = $d(
                    y,
                    le
                  ), k = $d(
                    y,
                    Pe
                  );
                  if (A && k && (j.rangeCount !== 1 || j.anchorNode !== A.node || j.anchorOffset !== A.offset || j.focusNode !== k.node || j.focusOffset !== k.offset)) {
                    var N = P.createRange();
                    N.setStart(A.node, A.offset), j.removeAllRanges(), le > Pe ? (j.addRange(N), j.extend(k.node, k.offset)) : (N.setEnd(k.node, k.offset), j.addRange(N));
                  }
                }
              }
            }
            for (P = [], j = y; j = j.parentNode; )
              j.nodeType === 1 && P.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < P.length; y++) {
              var I = P[y];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          wl = !!Fc, Wc = Fc = null;
        } finally {
          De = s, X.p = r, x.T = n;
        }
      }
      e.current = t, ut = 2;
    }
  }
  function pf() {
    if (ut === 2) {
      ut = 0;
      var e = pn, t = Gi, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = x.T, x.T = null;
        var r = X.p;
        X.p = 2;
        var s = De;
        De |= 4;
        try {
          Bm(e, t.alternate, t);
        } finally {
          De = s, X.p = r, x.T = n;
        }
      }
      ut = 3;
    }
  }
  function gf() {
    if (ut === 4 || ut === 3) {
      ut = 0, Jl();
      var e = pn, t = Gi, n = Ka, r = tf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Gi = pn = null, hf(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (fn = null), as(n), t = t.stateNode, Pt && typeof Pt.onCommitFiberRoot == "function")
        try {
          Pt.onCommitFiberRoot(
            ao,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = x.T, s = X.p, X.p = 2, x.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < r.length; f++) {
            var y = r[f];
            u(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          x.T = t, X.p = s;
        }
      }
      (Ka & 3) !== 0 && cl(), za(e), s = e.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? e === Lc ? qo++ : (qo = 0, Lc = e) : qo = 0, Go(0);
    }
  }
  function hf(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, yo(t)));
  }
  function cl() {
    return ff(), pf(), gf(), vf();
  }
  function vf() {
    if (ut !== 5) return !1;
    var e = pn, t = Dc;
    Dc = 0;
    var n = as(Ka), r = x.T, s = X.p;
    try {
      X.p = 32 > n ? 32 : n, x.T = null, n = jc, jc = null;
      var u = pn, f = Ka;
      if (ut = 0, Gi = pn = null, Ka = 0, (De & 6) !== 0) throw Error(l(331));
      var y = De;
      if (De |= 4, Qm(u.current), Fm(
        u,
        u.current,
        f,
        n
      ), De = y, Go(0, !1), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        try {
          Pt.onPostCommitFiberRoot(ao, u);
        } catch {
        }
      return !0;
    } finally {
      X.p = s, x.T = r, hf(e, t);
    }
  }
  function yf(e, t, n) {
    t = aa(n, t), t = fc(e.stateNode, t, 2), e = sn(e, t, 2), e !== null && (io(e, 2), za(e));
  }
  function qe(e, t, n) {
    if (e.tag === 3)
      yf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yf(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
            e = aa(n, e), n = ym(2), r = sn(t, n, 2), r !== null && (bm(
              n,
              r,
              t,
              e
            ), io(r, 2), za(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new my();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else
      s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (Oc = !0, s.add(n), e = vy.bind(null, e, t, n), t.then(e, e));
  }
  function vy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ze === e && (Te & n) === n && (et === 4 || et === 3 && (Te & 62914560) === Te && 300 > At() - nl ? (De & 2) === 0 && Hi(e, 0) : Mc |= n, qi === Te && (qi = 0)), za(e);
  }
  function bf(e, t) {
    t === 0 && (t = md()), e = In(e, t), e !== null && (io(e, t), za(e));
  }
  function yy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bf(e, n);
  }
  function by(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(t), bf(e, n);
  }
  function wy(e, t) {
    return mt(e, t);
  }
  var ul = null, Bi = null, Hc = !1, dl = !1, Ic = !1, hn = 0;
  function za(e) {
    e !== Bi && e.next === null && (Bi === null ? ul = Bi = e : Bi = Bi.next = e), dl = !0, Hc || (Hc = !0, Ey());
  }
  function Go(e, t) {
    if (!Ic && dl) {
      Ic = !0;
      do
        for (var n = !1, r = ul; r !== null; ) {
          if (e !== 0) {
            var s = r.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = r.suspendedLanes, y = r.pingedLanes;
              u = (1 << 31 - Zt(42 | e) + 1) - 1, u &= s & ~(f & ~y), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, zf(r, u));
          } else
            u = Te, u = pr(
              r,
              r === Ze ? u : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (u & 3) === 0 || no(r, u) || (n = !0, zf(r, u));
          r = r.next;
        }
      while (n);
      Ic = !1;
    }
  }
  function Sy() {
    wf();
  }
  function wf() {
    dl = Hc = !1;
    var e = 0;
    hn !== 0 && Ry() && (e = hn);
    for (var t = At(), n = null, r = ul; r !== null; ) {
      var s = r.next, u = Sf(r, t);
      u === 0 ? (r.next = null, n === null ? ul = s : n.next = s, s === null && (Bi = n)) : (n = r, (e !== 0 || (u & 3) !== 0) && (dl = !0)), r = s;
    }
    ut !== 0 && ut !== 5 || Go(e), hn !== 0 && (hn = 0);
  }
  function Sf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Zt(u), y = 1 << f, S = s[f];
      S === -1 ? ((y & n) === 0 || (y & r) !== 0) && (s[f] = Fh(y, t)) : S <= t && (e.expiredLanes |= y), u &= ~y;
    }
    if (t = Ze, n = Te, n = pr(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, n === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && xa(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || no(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (r !== null && xa(r), as(n)) {
        case 2:
        case 8:
          n = dd;
          break;
        case 32:
          n = dr;
          break;
        case 268435456:
          n = _d;
          break;
        default:
          n = dr;
      }
      return r = Ef.bind(null, e), n = mt(n, r), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return r !== null && r !== null && xa(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ef(e, t) {
    if (ut !== 0 && ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (cl() && e.callbackNode !== n)
      return null;
    var r = Te;
    return r = pr(
      e,
      e === Ze ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (nf(e, r, t), Sf(e, At()), e.callbackNode != null && e.callbackNode === n ? Ef.bind(null, e) : null);
  }
  function zf(e, t) {
    if (cl()) return null;
    nf(e, t, !0);
  }
  function Ey() {
    jy(function() {
      (De & 6) !== 0 ? mt(
        ud,
        Sy
      ) : wf();
    });
  }
  function Bc() {
    if (hn === 0) {
      var e = Ai;
      e === 0 && (e = _r, _r <<= 1, (_r & 261888) === 0 && (_r = 256)), hn = e;
    }
    return hn;
  }
  function kf(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yr("" + e);
  }
  function Tf(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function zy(e, t, n, r, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var u = kf(
        (s[Dt] || null).action
      ), f = r.submitter;
      f && (t = (t = f[Dt] || null) ? kf(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var y = new Er(
        "action",
        "action",
        null,
        r,
        s
      );
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (hn !== 0) {
                  var S = f ? Tf(s, f) : new FormData(s);
                  sc(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: u
                    },
                    null,
                    S
                  );
                }
              } else
                typeof u == "function" && (y.preventDefault(), S = f ? Tf(s, f) : new FormData(s), sc(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: u
                  },
                  u,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Pc = 0; Pc < ks.length; Pc++) {
    var Zc = ks[Pc], ky = Zc.toLowerCase(), Ty = Zc[0].toUpperCase() + Zc.slice(1);
    pa(
      ky,
      "on" + Ty
    );
  }
  pa(a_, "onAnimationEnd"), pa(n_, "onAnimationIteration"), pa(i_, "onAnimationStart"), pa("dblclick", "onDoubleClick"), pa("focusin", "onFocus"), pa("focusout", "onBlur"), pa(Bv, "onTransitionRun"), pa(Pv, "onTransitionStart"), pa(Zv, "onTransitionCancel"), pa(o_, "onTransitionEnd"), mi("onMouseEnter", ["mouseout", "mouseover"]), mi("onMouseLeave", ["mouseout", "mouseover"]), mi("onPointerEnter", ["pointerout", "pointerover"]), mi("onPointerLeave", ["pointerout", "pointerover"]), Un(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Un(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Un("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Un(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Un(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Un(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ay = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho)
  );
  function Af(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = r.length - 1; 0 <= f; f--) {
            var y = r[f], S = y.instance, C = y.currentTarget;
            if (y = y.listener, S !== u && s.isPropagationStopped())
              break e;
            u = y, s.currentTarget = C;
            try {
              u(s);
            } catch (G) {
              Tr(G);
            }
            s.currentTarget = null, u = S;
          }
        else
          for (f = 0; f < r.length; f++) {
            if (y = r[f], S = y.instance, C = y.currentTarget, y = y.listener, S !== u && s.isPropagationStopped())
              break e;
            u = y, s.currentTarget = C;
            try {
              u(s);
            } catch (G) {
              Tr(G);
            }
            s.currentTarget = null, u = S;
          }
      }
    }
  }
  function Ee(e, t) {
    var n = t[ns];
    n === void 0 && (n = t[ns] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Nf(t, e, 2, !1), n.add(r));
  }
  function Yc(e, t, n) {
    var r = 0;
    t && (r |= 4), Nf(
      n,
      e,
      r,
      t
    );
  }
  var _l = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(e) {
    if (!e[_l]) {
      e[_l] = !0, bd.forEach(function(n) {
        n !== "selectionchange" && (Ay.has(n) || Yc(n, !1, e), Yc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_l] || (t[_l] = !0, Yc("selectionchange", !1, t));
    }
  }
  function Nf(e, t, n, r) {
    switch (np(t)) {
      case 2:
        var s = tb;
        break;
      case 8:
        s = ab;
        break;
      default:
        s = lu;
    }
    n = s.bind(
      null,
      t,
      n,
      e
    ), s = void 0, !_s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
      passive: s
    }) : e.addEventListener(t, n, !1);
  }
  function Kc(e, t, n, r, s) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var f = r.tag;
        if (f === 3 || f === 4) {
          var y = r.stateNode.containerInfo;
          if (y === s) break;
          if (f === 4)
            for (f = r.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; y !== null; ) {
            if (f = ui(y), f === null) return;
            if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              r = u = f;
              continue e;
            }
            y = y.parentNode;
          }
        }
        r = r.return;
      }
    Md(function() {
      var C = u, G = us(n), P = [];
      e: {
        var M = r_.get(e);
        if (M !== void 0) {
          var j = Er, Q = e;
          switch (e) {
            case "keypress":
              if (wr(n) === 0) break e;
            case "keydown":
            case "keyup":
              j = bv;
              break;
            case "focusin":
              Q = "focus", j = gs;
              break;
            case "focusout":
              Q = "blur", j = gs;
              break;
            case "beforeblur":
            case "afterblur":
              j = gs;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = jd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = sv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Ev;
              break;
            case a_:
            case n_:
            case i_:
              j = dv;
              break;
            case o_:
              j = kv;
              break;
            case "scroll":
            case "scrollend":
              j = rv;
              break;
            case "wheel":
              j = Av;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Ud;
              break;
            case "toggle":
            case "beforetoggle":
              j = Cv;
          }
          var le = (t & 4) !== 0, Pe = !le && (e === "scroll" || e === "scrollend"), A = le ? M !== null ? M + "Capture" : null : M;
          le = [];
          for (var k = C, N; k !== null; ) {
            var I = k;
            if (N = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || N === null || A === null || (I = lo(k, A), I != null && le.push(
              Io(k, I, N)
            )), Pe) break;
            k = k.return;
          }
          0 < le.length && (M = new j(
            M,
            Q,
            null,
            n,
            G
          ), P.push({ event: M, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", M && n !== cs && (Q = n.relatedTarget || n.fromElement) && (ui(Q) || Q[ci]))
            break e;
          if ((j || M) && (M = G.window === G ? G : (M = G.ownerDocument) ? M.defaultView || M.parentWindow : window, j ? (Q = n.relatedTarget || n.toElement, j = C, Q = Q ? ui(Q) : null, Q !== null && (Pe = d(Q), le = Q.tag, Q !== Pe || le !== 5 && le !== 27 && le !== 6) && (Q = null)) : (j = null, Q = C), j !== Q)) {
            if (le = jd, I = "onMouseLeave", A = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (le = Ud, I = "onPointerLeave", A = "onPointerEnter", k = "pointer"), Pe = j == null ? M : ro(j), N = Q == null ? M : ro(Q), M = new le(
              I,
              k + "leave",
              j,
              n,
              G
            ), M.target = Pe, M.relatedTarget = N, I = null, ui(G) === C && (le = new le(
              A,
              k + "enter",
              Q,
              n,
              G
            ), le.target = N, le.relatedTarget = Pe, I = le), Pe = I, j && Q)
              t: {
                for (le = Ny, A = j, k = Q, N = 0, I = A; I; I = le(I))
                  N++;
                I = 0;
                for (var ne = k; ne; ne = le(ne))
                  I++;
                for (; 0 < N - I; )
                  A = le(A), N--;
                for (; 0 < I - N; )
                  k = le(k), I--;
                for (; N--; ) {
                  if (A === k || k !== null && A === k.alternate) {
                    le = A;
                    break t;
                  }
                  A = le(A), k = le(k);
                }
                le = null;
              }
            else le = null;
            j !== null && Cf(
              P,
              M,
              j,
              le,
              !1
            ), Q !== null && Pe !== null && Cf(
              P,
              Pe,
              Q,
              le,
              !0
            );
          }
        }
        e: {
          if (M = C ? ro(C) : window, j = M.nodeName && M.nodeName.toLowerCase(), j === "select" || j === "input" && M.type === "file")
            var Oe = Yd;
          else if (Pd(M))
            if (Vd)
              Oe = Gv;
            else {
              Oe = Uv;
              var ee = Lv;
            }
          else
            j = M.nodeName, !j || j.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? C && ss(C.elementType) && (Oe = Yd) : Oe = qv;
          if (Oe && (Oe = Oe(e, C))) {
            Zd(
              P,
              Oe,
              n,
              G
            );
            break e;
          }
          ee && ee(e, M, C), e === "focusout" && C && M.type === "number" && C.memoizedProps.value != null && ls(M, "number", M.value);
        }
        switch (ee = C ? ro(C) : window, e) {
          case "focusin":
            (Pd(ee) || ee.contentEditable === "true") && (yi = ee, Ss = C, go = null);
            break;
          case "focusout":
            go = Ss = yi = null;
            break;
          case "mousedown":
            Es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Es = !1, e_(P, n, G);
            break;
          case "selectionchange":
            if (Iv) break;
          case "keydown":
          case "keyup":
            e_(P, n, G);
        }
        var ye;
        if (vs)
          e: {
            switch (e) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          vi ? Id(e, n) && (Ae = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (qd && n.locale !== "ko" && (vi || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && vi && (ye = Rd()) : (en = G, ms = "value" in en ? en.value : en.textContent, vi = !0)), ee = ml(C, Ae), 0 < ee.length && (Ae = new Ld(
          Ae,
          e,
          null,
          n,
          G
        ), P.push({ event: Ae, listeners: ee }), ye ? Ae.data = ye : (ye = Bd(n), ye !== null && (Ae.data = ye)))), (ye = Ov ? Mv(e, n) : Rv(e, n)) && (Ae = ml(C, "onBeforeInput"), 0 < Ae.length && (ee = new Ld(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          G
        ), P.push({
          event: ee,
          listeners: Ae
        }), ee.data = ye)), zy(
          P,
          e,
          C,
          n,
          G
        );
      }
      Af(P, t);
    });
  }
  function Io(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function ml(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = lo(e, n), s != null && r.unshift(
        Io(e, s, u)
      ), s = lo(e, t), s != null && r.push(
        Io(e, s, u)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function Ny(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Cf(e, t, n, r, s) {
    for (var u = t._reactName, f = []; n !== null && n !== r; ) {
      var y = n, S = y.alternate, C = y.stateNode;
      if (y = y.tag, S !== null && S === r) break;
      y !== 5 && y !== 26 && y !== 27 || C === null || (S = C, s ? (C = lo(n, u), C != null && f.unshift(
        Io(n, C, S)
      )) : s || (C = lo(n, u), C != null && f.push(
        Io(n, C, S)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Cy = /\r\n?/g, xy = /\u0000|\uFFFD/g;
  function xf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cy, `
`).replace(xy, "");
  }
  function Of(e, t) {
    return t = xf(t), xf(e) === t;
  }
  function Be(e, t, n, r, s, u) {
    switch (n) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || pi(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && pi(e, "" + r);
        break;
      case "className":
        hr(e, "class", r);
        break;
      case "tabIndex":
        hr(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hr(e, n, r);
        break;
      case "style":
        xd(e, r, u);
        break;
      case "data":
        if (t !== "object") {
          hr(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = yr("" + r), e.setAttribute(n, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Be(e, t, "name", s.name, s, null), Be(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Be(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Be(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Be(e, t, "encType", s.encType, s, null), Be(e, t, "method", s.method, s, null), Be(e, t, "target", s.target, s, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = yr("" + r), e.setAttribute(n, r);
        break;
      case "onClick":
        r != null && (e.onclick = Ma);
        break;
      case "onScroll":
        r != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ee("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (n = r.__html, n != null) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = yr("" + r), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(n, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
        break;
      case "popover":
        Ee("beforetoggle", e), Ee("toggle", e), gr(e, "popover", r);
        break;
      case "xlinkActuate":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        Oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        Oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        Oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        Oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        gr(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = iv.get(n) || n, gr(e, n, r));
    }
  }
  function Xc(e, t, n, r, s, u) {
    switch (n) {
      case "style":
        xd(e, r, u);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (n = r.__html, n != null) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof r == "string" ? pi(e, r) : (typeof r == "number" || typeof r == "bigint") && pi(e, "" + r);
        break;
      case "onScroll":
        r != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ee("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Ma);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!wd.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), t = n.slice(2, s ? n.length - 7 : void 0), u = e[Dt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, s), typeof r == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, s);
              break e;
            }
            n in e ? e[n] = r : r === !0 ? e.setAttribute(n, "") : gr(e, n, r);
          }
    }
  }
  function vt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ee("error", e), Ee("load", e);
        var r = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  Be(e, t, u, f, n, null);
              }
          }
        s && Be(e, t, "srcSet", n.srcSet, n, null), r && Be(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ee("invalid", e);
        var y = u = f = s = null, S = null, C = null;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var G = n[r];
            if (G != null)
              switch (r) {
                case "name":
                  s = G;
                  break;
                case "type":
                  f = G;
                  break;
                case "checked":
                  S = G;
                  break;
                case "defaultChecked":
                  C = G;
                  break;
                case "value":
                  u = G;
                  break;
                case "defaultValue":
                  y = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(l(137, t));
                  break;
                default:
                  Be(e, t, r, G, n, null);
              }
          }
        Td(
          e,
          u,
          y,
          S,
          C,
          f,
          s,
          !1
        );
        return;
      case "select":
        Ee("invalid", e), r = f = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (y = n[s], y != null))
            switch (s) {
              case "value":
                u = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "multiple":
                r = y;
              default:
                Be(e, t, s, y, n, null);
            }
        t = u, n = f, e.multiple = !!r, t != null ? fi(e, !!r, t, !1) : n != null && fi(e, !!r, n, !0);
        return;
      case "textarea":
        Ee("invalid", e), u = s = r = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (y = n[f], y != null))
            switch (f) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                u = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(l(91));
                break;
              default:
                Be(e, t, f, y, n, null);
            }
        Nd(e, r, s, u);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) && (r = n[S], r != null) && (S === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : Be(e, t, S, r, n, null));
        return;
      case "dialog":
        Ee("beforetoggle", e), Ee("toggle", e), Ee("cancel", e), Ee("close", e);
        break;
      case "iframe":
      case "object":
        Ee("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Ho.length; r++)
          Ee(Ho[r], e);
        break;
      case "image":
        Ee("error", e), Ee("load", e);
        break;
      case "details":
        Ee("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ee("error", e), Ee("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && (r = n[C], r != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                Be(e, t, C, r, n, null);
            }
        return;
      default:
        if (ss(t)) {
          for (G in n)
            n.hasOwnProperty(G) && (r = n[G], r !== void 0 && Xc(
              e,
              t,
              G,
              r,
              n,
              void 0
            ));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && (r = n[y], r != null && Be(e, t, y, r, n, null));
  }
  function Oy(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, u = null, f = null, y = null, S = null, C = null, G = null;
        for (j in n) {
          var P = n[j];
          if (n.hasOwnProperty(j) && P != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = P;
              default:
                r.hasOwnProperty(j) || Be(e, t, j, null, r, P);
            }
        }
        for (var M in r) {
          var j = r[M];
          if (P = n[M], r.hasOwnProperty(M) && (j != null || P != null))
            switch (M) {
              case "type":
                u = j;
                break;
              case "name":
                s = j;
                break;
              case "checked":
                C = j;
                break;
              case "defaultChecked":
                G = j;
                break;
              case "value":
                f = j;
                break;
              case "defaultValue":
                y = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(l(137, t));
                break;
              default:
                j !== P && Be(
                  e,
                  t,
                  M,
                  j,
                  r,
                  P
                );
            }
        }
        rs(
          e,
          f,
          y,
          S,
          C,
          G,
          u,
          s
        );
        return;
      case "select":
        j = f = y = M = null;
        for (u in n)
          if (S = n[u], n.hasOwnProperty(u) && S != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                r.hasOwnProperty(u) || Be(
                  e,
                  t,
                  u,
                  null,
                  r,
                  S
                );
            }
        for (s in r)
          if (u = r[s], S = n[s], r.hasOwnProperty(s) && (u != null || S != null))
            switch (s) {
              case "value":
                M = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== S && Be(
                  e,
                  t,
                  s,
                  u,
                  r,
                  S
                );
            }
        t = y, n = f, r = j, M != null ? fi(e, !!n, M, !1) : !!r != !!n && (t != null ? fi(e, !!n, t, !0) : fi(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        j = M = null;
        for (y in n)
          if (s = n[y], n.hasOwnProperty(y) && s != null && !r.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, y, null, r, s);
            }
        for (f in r)
          if (s = r[f], u = n[f], r.hasOwnProperty(f) && (s != null || u != null))
            switch (f) {
              case "value":
                M = s;
                break;
              case "defaultValue":
                j = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(l(91));
                break;
              default:
                s !== u && Be(e, t, f, s, r, u);
            }
        Ad(e, M, j);
        return;
      case "option":
        for (var Q in n)
          M = n[Q], n.hasOwnProperty(Q) && M != null && !r.hasOwnProperty(Q) && (Q === "selected" ? e.selected = !1 : Be(
            e,
            t,
            Q,
            null,
            r,
            M
          ));
        for (S in r)
          M = r[S], j = n[S], r.hasOwnProperty(S) && M !== j && (M != null || j != null) && (S === "selected" ? e.selected = M && typeof M != "function" && typeof M != "symbol" : Be(
            e,
            t,
            S,
            M,
            r,
            j
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var le in n)
          M = n[le], n.hasOwnProperty(le) && M != null && !r.hasOwnProperty(le) && Be(e, t, le, null, r, M);
        for (C in r)
          if (M = r[C], j = n[C], r.hasOwnProperty(C) && M !== j && (M != null || j != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(l(137, t));
                break;
              default:
                Be(
                  e,
                  t,
                  C,
                  M,
                  r,
                  j
                );
            }
        return;
      default:
        if (ss(t)) {
          for (var Pe in n)
            M = n[Pe], n.hasOwnProperty(Pe) && M !== void 0 && !r.hasOwnProperty(Pe) && Xc(
              e,
              t,
              Pe,
              void 0,
              r,
              M
            );
          for (G in r)
            M = r[G], j = n[G], !r.hasOwnProperty(G) || M === j || M === void 0 && j === void 0 || Xc(
              e,
              t,
              G,
              M,
              r,
              j
            );
          return;
        }
    }
    for (var A in n)
      M = n[A], n.hasOwnProperty(A) && M != null && !r.hasOwnProperty(A) && Be(e, t, A, null, r, M);
    for (P in r)
      M = r[P], j = n[P], !r.hasOwnProperty(P) || M === j || M == null && j == null || Be(e, t, P, M, r, j);
  }
  function Mf(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function My() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
        var s = n[r], u = s.transferSize, f = s.initiatorType, y = s.duration;
        if (u && y && Mf(f)) {
          for (f = 0, y = s.responseEnd, r += 1; r < n.length; r++) {
            var S = n[r], C = S.startTime;
            if (C > y) break;
            var G = S.transferSize, P = S.initiatorType;
            G && Mf(P) && (S = S.responseEnd, f += G * (S < y ? 1 : (y - C) / (S - C)));
          }
          if (--r, t += 8 * (u + f) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Fc = null, Wc = null;
  function fl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Df(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $c(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function Ry() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Qc ? !1 : (Qc = e, !0) : (Qc = null, !1);
  }
  var jf = typeof setTimeout == "function" ? setTimeout : void 0, Dy = typeof clearTimeout == "function" ? clearTimeout : void 0, Lf = typeof Promise == "function" ? Promise : void 0, jy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lf < "u" ? function(e) {
    return Lf.resolve(null).then(e).catch(Ly);
  } : jf;
  function Ly(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function vn(e) {
    return e === "head";
  }
  function Uf(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (r === 0) {
            e.removeChild(s), Vi(t);
            return;
          }
          r--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          r++;
        else if (n === "html")
          Bo(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Bo(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, y = u.nodeName;
            u[oo] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && Bo(e.ownerDocument.body);
      n = s;
    } while (n);
    Vi(t);
  }
  function qf(e, t) {
    var n = e;
    e = 0;
    do {
      var r = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8)
        if (n = r.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = r;
    } while (n);
  }
  function Jc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(n), is(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Uy(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[oo])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = la(e.nextSibling), e === null) break;
    }
    return null;
  }
  function qy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = la(e.nextSibling), e === null)) return null;
    return e;
  }
  function Gf(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = la(e.nextSibling), e === null)) return null;
    return e;
  }
  function eu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function tu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Gy(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var r = function() {
        t(), n.removeEventListener("DOMContentLoaded", r);
      };
      n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function la(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var au = null;
  function Hf(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return la(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function If(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Bf(e, t, n) {
    switch (t = fl(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function Bo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    is(e);
  }
  var sa = /* @__PURE__ */ new Map(), Pf = /* @__PURE__ */ new Set();
  function pl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Xa = X.d;
  X.d = {
    f: Hy,
    r: Iy,
    D: By,
    C: Py,
    L: Zy,
    m: Yy,
    X: Ky,
    S: Vy,
    M: Xy
  };
  function Hy() {
    var e = Xa.f(), t = rl();
    return e || t;
  }
  function Iy(e) {
    var t = di(e);
    t !== null && t.tag === 5 && t.type === "form" ? om(t) : Xa.r(e);
  }
  var Pi = typeof document > "u" ? null : document;
  function Zf(e, t, n) {
    var r = Pi;
    if (r && typeof t == "string" && t) {
      var s = ea(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Pf.has(s) || (Pf.add(s), e = { rel: e, crossOrigin: n, href: t }, r.querySelector(s) === null && (t = r.createElement("link"), vt(t, "link", e), dt(t), r.head.appendChild(t)));
    }
  }
  function By(e) {
    Xa.D(e), Zf("dns-prefetch", e, null);
  }
  function Py(e, t) {
    Xa.C(e, t), Zf("preconnect", e, t);
  }
  function Zy(e, t, n) {
    Xa.L(e, t, n);
    var r = Pi;
    if (r && e && t) {
      var s = 'link[rel="preload"][as="' + ea(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + ea(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + ea(
        n.imageSizes
      ) + '"]')) : s += '[href="' + ea(e) + '"]';
      var u = s;
      switch (t) {
        case "style":
          u = Zi(e);
          break;
        case "script":
          u = Yi(e);
      }
      sa.has(u) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), sa.set(u, e), r.querySelector(s) !== null || t === "style" && r.querySelector(Po(u)) || t === "script" && r.querySelector(Zo(u)) || (t = r.createElement("link"), vt(t, "link", e), dt(t), r.head.appendChild(t)));
    }
  }
  function Yy(e, t) {
    Xa.m(e, t);
    var n = Pi;
    if (n && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + ea(r) + '"][href="' + ea(e) + '"]', u = s;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Yi(e);
      }
      if (!sa.has(u) && (e = b({ rel: "modulepreload", href: e }, t), sa.set(u, e), n.querySelector(s) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Zo(u)))
              return;
        }
        r = n.createElement("link"), vt(r, "link", e), dt(r), n.head.appendChild(r);
      }
    }
  }
  function Vy(e, t, n) {
    Xa.S(e, t, n);
    var r = Pi;
    if (r && e) {
      var s = _i(r).hoistableStyles, u = Zi(e);
      t = t || "default";
      var f = s.get(u);
      if (!f) {
        var y = { loading: 0, preload: null };
        if (f = r.querySelector(
          Po(u)
        ))
          y.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = sa.get(u)) && nu(e, n);
          var S = f = r.createElement("link");
          dt(S), vt(S, "link", e), S._p = new Promise(function(C, G) {
            S.onload = C, S.onerror = G;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, gl(f, t, r);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: y
        }, s.set(u, f);
      }
    }
  }
  function Ky(e, t) {
    Xa.X(e, t);
    var n = Pi;
    if (n && e) {
      var r = _i(n).hoistableScripts, s = Yi(e), u = r.get(s);
      u || (u = n.querySelector(Zo(s)), u || (e = b({ src: e, async: !0 }, t), (t = sa.get(s)) && iu(e, t), u = n.createElement("script"), dt(u), vt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, r.set(s, u));
    }
  }
  function Xy(e, t) {
    Xa.M(e, t);
    var n = Pi;
    if (n && e) {
      var r = _i(n).hoistableScripts, s = Yi(e), u = r.get(s);
      u || (u = n.querySelector(Zo(s)), u || (e = b({ src: e, async: !0, type: "module" }, t), (t = sa.get(s)) && iu(e, t), u = n.createElement("script"), dt(u), vt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, r.set(s, u));
    }
  }
  function Yf(e, t, n, r) {
    var s = (s = me.current) ? pl(s) : null;
    if (!s) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Zi(n.href), n = _i(
          s
        ).hoistableStyles, r = n.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Zi(n.href);
          var u = _i(
            s
          ).hoistableStyles, f = u.get(e);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = s.querySelector(
            Po(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), sa.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, sa.set(e, n), u || Fy(
            s,
            e,
            n,
            f.state
          ))), t && r === null)
            throw Error(l(528, ""));
          return f;
        }
        if (t && r !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Yi(n), n = _i(
          s
        ).hoistableScripts, r = n.get(t), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function Zi(e) {
    return 'href="' + ea(e) + '"';
  }
  function Po(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Vf(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Fy(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), vt(t, "link", n), dt(t), e.head.appendChild(t));
  }
  function Yi(e) {
    return '[src="' + ea(e) + '"]';
  }
  function Zo(e) {
    return "script[async]" + e;
  }
  function Kf(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + ea(n.href) + '"]'
          );
          if (r)
            return t.instance = r, dt(r), r;
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), dt(r), vt(r, "style", s), gl(r, n.precedence, e), t.instance = r;
        case "stylesheet":
          s = Zi(n.href);
          var u = e.querySelector(
            Po(s)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, dt(u), u;
          r = Vf(n), (s = sa.get(s)) && nu(r, s), u = (e.ownerDocument || e).createElement("link"), dt(u);
          var f = u;
          return f._p = new Promise(function(y, S) {
            f.onload = y, f.onerror = S;
          }), vt(u, "link", r), t.state.loading |= 4, gl(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Yi(n.src), (s = e.querySelector(
            Zo(u)
          )) ? (t.instance = s, dt(s), s) : (r = n, (s = sa.get(u)) && (r = b({}, n), iu(r, s)), e = e.ownerDocument || e, s = e.createElement("script"), dt(s), vt(s, "link", r), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, gl(r, n.precedence, e));
    return t.instance;
  }
  function gl(e, t, n) {
    for (var r = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = r.length ? r[r.length - 1] : null, u = s, f = 0; f < r.length; f++) {
      var y = r[f];
      if (y.dataset.precedence === t) u = y;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function nu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function iu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var hl = null;
  function Xf(e, t, n) {
    if (hl === null) {
      var r = /* @__PURE__ */ new Map(), s = hl = /* @__PURE__ */ new Map();
      s.set(n, r);
    } else
      s = hl, r = s.get(n), r || (r = /* @__PURE__ */ new Map(), s.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[oo] || u[ft] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var y = r.get(f);
        y ? y.push(u) : r.set(f, [u]);
      }
    }
    return r;
  }
  function Ff(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Wy(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Wf(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function $y(e, t, n, r) {
    if (n.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Zi(r.href), u = t.querySelector(
          Po(s)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = vl.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, dt(u);
          return;
        }
        u = t.ownerDocument || t, r = Vf(r), (s = sa.get(s)) && nu(r, s), u = u.createElement("link"), dt(u);
        var f = u;
        f._p = new Promise(function(y, S) {
          f.onload = y, f.onerror = S;
        }), vt(u, "link", r), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = vl.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var ou = 0;
  function Qy(e, t) {
    return e.stylesheets && e.count === 0 && bl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var r = setTimeout(function() {
        if (e.stylesheets && bl(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ou === 0 && (ou = 62500 * My());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && bl(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > ou ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(s);
      };
    } : null;
  }
  function vl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) bl(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var yl = null;
  function bl(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yl = /* @__PURE__ */ new Map(), t.forEach(Jy, e), yl = null, vl.call(e));
  }
  function Jy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = yl.get(e);
      if (n) var r = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), yl.set(e, n);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), r = f);
        }
        r && n.set(null, r);
      }
      s = t.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || r, u === r && n.set(null, s), n.set(f, s), this.count++, r = vl.bind(this), s.addEventListener("load", r), s.addEventListener("error", r), u ? u.parentNode.insertBefore(s, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Yo = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function eb(e, t, n, r, s, u, f, y, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = es(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = es(0), this.hiddenUpdates = es(null), this.identifierPrefix = r, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $f(e, t, n, r, s, u, f, y, S, C, G, P) {
    return e = new eb(
      e,
      t,
      n,
      f,
      S,
      C,
      G,
      P,
      y
    ), t = 1, u === !0 && (t |= 24), u = Vt(3, null, null, t), e.current = u, u.stateNode = e, t = qs(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: t
    }, Bs(u), e;
  }
  function Qf(e) {
    return e ? (e = Si, e) : Si;
  }
  function Jf(e, t, n, r, s, u) {
    s = Qf(s), r.context === null ? r.context = s : r.pendingContext = s, r = ln(t), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = sn(e, r, t), n !== null && (Ht(n, e, t), Eo(n, e, t));
  }
  function ep(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ru(e, t) {
    ep(e, t), (e = e.alternate) && ep(e, t);
  }
  function tp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = In(e, 67108864);
      t !== null && Ht(t, e, 67108864), ru(e, 67108864);
    }
  }
  function ap(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = $t();
      t = ts(t);
      var n = In(e, t);
      n !== null && Ht(n, e, t), ru(e, t);
    }
  }
  var wl = !0;
  function tb(e, t, n, r) {
    var s = x.T;
    x.T = null;
    var u = X.p;
    try {
      X.p = 2, lu(e, t, n, r);
    } finally {
      X.p = u, x.T = s;
    }
  }
  function ab(e, t, n, r) {
    var s = x.T;
    x.T = null;
    var u = X.p;
    try {
      X.p = 8, lu(e, t, n, r);
    } finally {
      X.p = u, x.T = s;
    }
  }
  function lu(e, t, n, r) {
    if (wl) {
      var s = su(r);
      if (s === null)
        Kc(
          e,
          t,
          r,
          Sl,
          n
        ), ip(e, r);
      else if (ib(
        s,
        e,
        t,
        n,
        r
      ))
        r.stopPropagation();
      else if (ip(e, r), t & 4 && -1 < nb.indexOf(e)) {
        for (; s !== null; ) {
          var u = di(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Ln(u.pendingLanes);
                  if (f !== 0) {
                    var y = u;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; f; ) {
                      var S = 1 << 31 - Zt(f);
                      y.entanglements[1] |= S, f &= ~S;
                    }
                    za(u), (De & 6) === 0 && (il = At() + 500, Go(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = In(u, 2), y !== null && Ht(y, u, 2), rl(), ru(u, 2);
            }
          if (u = su(r), u === null && Kc(
            e,
            t,
            r,
            Sl,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && r.stopPropagation();
      } else
        Kc(
          e,
          t,
          r,
          null,
          n
        );
    }
  }
  function su(e) {
    return e = us(e), cu(e);
  }
  var Sl = null;
  function cu(e) {
    if (Sl = null, e = ui(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = _(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Sl = e, null;
  }
  function np(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bh()) {
          case ud:
            return 2;
          case dd:
            return 8;
          case dr:
          case Ph:
            return 32;
          case _d:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uu = !1, yn = null, bn = null, wn = null, Vo = /* @__PURE__ */ new Map(), Ko = /* @__PURE__ */ new Map(), Sn = [], nb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ip(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        bn = null;
        break;
      case "mouseover":
      case "mouseout":
        wn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ko.delete(t.pointerId);
    }
  }
  function Xo(e, t, n, r, s, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: u,
      targetContainers: [s]
    }, t !== null && (t = di(t), t !== null && tp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function ib(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return yn = Xo(
          yn,
          e,
          t,
          n,
          r,
          s
        ), !0;
      case "dragenter":
        return bn = Xo(
          bn,
          e,
          t,
          n,
          r,
          s
        ), !0;
      case "mouseover":
        return wn = Xo(
          wn,
          e,
          t,
          n,
          r,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return Vo.set(
          u,
          Xo(
            Vo.get(u) || null,
            e,
            t,
            n,
            r,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, Ko.set(
          u,
          Xo(
            Ko.get(u) || null,
            e,
            t,
            n,
            r,
            s
          )
        ), !0;
    }
    return !1;
  }
  function op(e) {
    var t = ui(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = _(n), t !== null) {
            e.blockedOn = t, vd(e.priority, function() {
              ap(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(n), t !== null) {
            e.blockedOn = t, vd(e.priority, function() {
              ap(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function El(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = su(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(
          n.type,
          n
        );
        cs = r, n.target.dispatchEvent(r), cs = null;
      } else
        return t = di(n), t !== null && tp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function rp(e, t, n) {
    El(e) && n.delete(t);
  }
  function ob() {
    uu = !1, yn !== null && El(yn) && (yn = null), bn !== null && El(bn) && (bn = null), wn !== null && El(wn) && (wn = null), Vo.forEach(rp), Ko.forEach(rp);
  }
  function zl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, uu || (uu = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      ob
    )));
  }
  var kl = null;
  function lp(e) {
    kl !== e && (kl = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        kl === e && (kl = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], r = e[t + 1], s = e[t + 2];
          if (typeof r != "function") {
            if (cu(r || n) === null)
              continue;
            break;
          }
          var u = di(n);
          u !== null && (e.splice(t, 3), t -= 3, sc(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: r
            },
            r,
            s
          ));
        }
      }
    ));
  }
  function Vi(e) {
    function t(S) {
      return zl(S, e);
    }
    yn !== null && zl(yn, e), bn !== null && zl(bn, e), wn !== null && zl(wn, e), Vo.forEach(t), Ko.forEach(t);
    for (var n = 0; n < Sn.length; n++) {
      var r = Sn[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < Sn.length && (n = Sn[0], n.blockedOn === null); )
      op(n), n.blockedOn === null && Sn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (r = 0; r < n.length; r += 3) {
        var s = n[r], u = n[r + 1], f = s[Dt] || null;
        if (typeof u == "function")
          f || lp(n);
        else if (f) {
          var y = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[Dt] || null)
              y = f.formAction;
            else if (cu(s) !== null) continue;
          } else y = f.action;
          typeof y == "function" ? n[r + 1] = y : (n.splice(r, 3), r -= 3), lp(n);
        }
      }
  }
  function sp() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), r || setTimeout(n, 20);
    }
    function n() {
      if (!r && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var r = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function du(e) {
    this._internalRoot = e;
  }
  Tl.prototype.render = du.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var n = t.current, r = $t();
    Jf(n, r, e, t, null, null);
  }, Tl.prototype.unmount = du.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Jf(e.current, 2, null, e, null, null), rl(), t[ci] = null;
    }
  };
  function Tl(e) {
    this._internalRoot = e;
  }
  Tl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = hd();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++) ;
      Sn.splice(n, 0, e), n === 0 && op(e);
    }
  };
  var cp = i.version;
  if (cp !== "19.2.3")
    throw Error(
      l(
        527,
        cp,
        "19.2.3"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = p(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var rb = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Al.isDisabled && Al.supportsFiber)
      try {
        ao = Al.inject(
          rb
        ), Pt = Al;
      } catch {
      }
  }
  return Wo.createRoot = function(e, t) {
    if (!c(e)) throw Error(l(299));
    var n = !1, r = "", s = pm, u = gm, f = hm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = $f(
      e,
      1,
      !1,
      null,
      null,
      n,
      r,
      null,
      s,
      u,
      f,
      sp
    ), e[ci] = t.current, Vc(e), new du(t);
  }, Wo.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(l(299));
    var r = !1, s = "", u = pm, f = gm, y = hm, S = null;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), t = $f(
      e,
      1,
      !0,
      t,
      n ?? null,
      r,
      s,
      S,
      u,
      f,
      y,
      sp
    ), t.context = Qf(null), n = t.current, r = $t(), r = ts(r), s = ln(r), s.callback = null, sn(n, s, r), n = r, t.current.lanes = n, io(t, n), za(t), e[ci] = t.current, Vc(e), new Tl(t);
  }, Wo.version = "19.2.3", Wo;
}
var yp;
function gb() {
  if (yp) return fu.exports;
  yp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), fu.exports = pb(), fu.exports;
}
var hb = gb();
const vb = /* @__PURE__ */ pg(hb);
const gg = (...a) => a.filter((i, o, l) => !!i && i.trim() !== "" && l.indexOf(i) === o).join(" ").trim();
const yb = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const bb = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, o, l) => l ? l.toUpperCase() : o.toLowerCase()
);
const bp = (a) => {
  const i = bb(a);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var wb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Sb = (a) => {
  for (const i in a)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const Eb = R.forwardRef(
  ({
    color: a = "currentColor",
    size: i = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: l,
    className: c = "",
    children: d,
    iconNode: _,
    ...m
  }, h) => R.createElement(
    "svg",
    {
      ref: h,
      ...wb,
      width: i,
      height: i,
      stroke: a,
      strokeWidth: l ? Number(o) * 24 / Number(i) : o,
      className: gg("lucide", c),
      ...!d && !Sb(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ..._.map(([p, v]) => R.createElement(p, v)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
const ce = (a, i) => {
  const o = R.forwardRef(
    ({ className: l, ...c }, d) => R.createElement(Eb, {
      ref: d,
      iconNode: i,
      className: gg(
        `lucide-${yb(bp(a))}`,
        `lucide-${a}`,
        l
      ),
      ...c
    })
  );
  return o.displayName = bp(a), o;
};
const zb = [
  [
    "path",
    {
      d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
      key: "67vhrh"
    }
  ],
  ["path", { d: "M4 9v6", key: "bns7oa" }]
], kb = ce("arrow-big-right-dash", zb);
const Tb = [
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]
];
ce("battery-charging", Tb);
const Ab = [
  ["path", { d: "M10 10v4", key: "1mb2ec" }],
  ["path", { d: "M14 10v4", key: "1nt88p" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 10v4", key: "1n77qd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Nb = ce("battery-full", Ab);
const Cb = [
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], xb = ce("battery-low", Cb);
const Ob = [
  ["path", { d: "M10 14v-4", key: "suye4c" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Mb = ce("battery-medium", Ob);
const Rb = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Db = ce("battery", Rb);
const jb = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], Lb = ce("bookmark", jb);
const Ub = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], qb = ce("brain", Ub);
const Gb = [
  ["path", { d: "m16 22-1-4", key: "1ow2iv" }],
  [
    "path",
    {
      d: "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1",
      key: "11gii7"
    }
  ],
  ["path", { d: "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z", key: "bju7h4" }],
  ["path", { d: "m8 22 1-4", key: "s3unb" }]
], ju = ce("brush-cleaning", Gb);
const Hb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], hg = ce("check", Hb);
const Ib = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], vg = ce("chevron-down", Ib);
const Bb = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Pb = ce("circle-play", Bb);
const Zb = [
  ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
], Yb = ce("corner-down-right", Zb);
const Vb = [
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 16h12", key: "u522kt" }]
], Kb = ce("dock", Vb);
const Xb = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
], Vl = ce("droplet", Xb);
const Fb = [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
], Wb = ce("footprints", Fb);
const $b = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
], Ul = ce("gauge", $b);
const Qb = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], Jb = ce("grid-2x2-check", Qb);
const e0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], t0 = ce("history", e0);
const a0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], n0 = ce("info", a0);
const i0 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], o0 = ce("layers", i0);
const r0 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], l0 = ce("list", r0);
const s0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], c0 = ce("lock-open", s0);
const u0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], d0 = ce("lock", u0);
const _0 = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], Lu = ce("map", _0);
const m0 = [["path", { d: "M5 12h14", key: "1ays0h" }]], f0 = ce("minus", m0);
const p0 = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], g0 = ce("octagon-x", p0);
const h0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
], v0 = ce("panel-bottom-close", h0);
const y0 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], b0 = ce("pause", y0);
const w0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], S0 = ce("play", w0);
const E0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], yg = ce("plus", E0);
const z0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], k0 = ce("rotate-ccw", z0);
const T0 = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], A0 = ce("route", T0);
const N0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], bg = ce("scan", N0);
const C0 = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], x0 = ce("settings-2", C0);
const O0 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], M0 = ce("settings", O0);
const R0 = [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
], D0 = ce("shell", R0);
const j0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
], L0 = ce("signal-high", j0);
const U0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
], q0 = ce("signal-low", U0);
const G0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
], H0 = ce("signal-medium", G0);
const I0 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
], B0 = ce("signal", I0);
const P0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], Z0 = ce("sliders-horizontal", P0);
const Y0 = [
  [
    "path",
    {
      d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "1ystz2"
    }
  ],
  ["path", { d: "M3 4v16", key: "1ph11n" }]
], V0 = ce("step-forward", Y0);
const K0 = [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
], ku = ce("thermometer", K0);
const X0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], F0 = ce("timer", X0);
const W0 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], $0 = ce("volume-2", W0);
const Q0 = [
  ["path", { d: "M12 10L12 2", key: "jvb0aw" }],
  ["path", { d: "M16 6L12 10L8 6", key: "9j6vje" }],
  [
    "path",
    {
      d: "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15",
      key: "s2zepw"
    }
  ],
  [
    "path",
    {
      d: "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21",
      key: "u68omc"
    }
  ]
], J0 = ce("waves-arrow-down", Q0);
const ew = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], tw = ce("zap", ew), Ne = {
  STATE: { key: "state" },
  MAIN_BRUSH_LEFT: { key: "main_brush_left" },
  MAIN_BRUSH_TIME_LEFT: {
    key: "main_brush_time_left"
  },
  SIDE_BRUSH_LEFT: { key: "side_brush_left" },
  SIDE_BRUSH_TIME_LEFT: {
    key: "side_brush_time_left"
  },
  FILTER_LEFT: { key: "filter_left" },
  FILTER_TIME_LEFT: { key: "filter_time_left" },
  SENSOR_DIRTY_LEFT: { key: "sensor_dirty_left" },
  SENSOR_DIRTY_TIME_LEFT: {
    key: "sensor_dirty_time_left"
  },
  TANK_FILTER_LEFT: { key: "tank_filter_left" },
  TANK_FILTER_TIME_LEFT: {
    key: "tank_filter_time_left"
  },
  MOP_PAD_LEFT: { key: "mop_pad_left" },
  MOP_PAD_TIME_LEFT: { key: "mop_pad_time_left" },
  SILVER_ION_LEFT: { key: "silver_ion_left" },
  SILVER_ION_TIME_LEFT: {
    key: "silver_ion_time_left"
  },
  DETERGENT_LEFT: { key: "detergent_left" },
  DETERGENT_TIME_LEFT: {
    key: "detergent_time_left"
  },
  SQUEEGEE_LEFT: { key: "squeegee_left" },
  SQUEEGEE_TIME_LEFT: { key: "squeegee_time_left" },
  ONBOARD_DIRTY_WATER_TANK_LEFT: {
    key: "onboard_dirty_water_tank_left"
  },
  ONBOARD_DIRTY_WATER_TANK_TIME_LEFT: {
    key: "onboard_dirty_water_tank_time_left"
  },
  DIRTY_WATER_CHANNEL_DIRTY_LEFT: {
    key: "dirty_water_channel_dirty_left"
  },
  DIRTY_WATER_CHANNEL_DIRTY_TIME_LEFT: {
    key: "dirty_water_channel_dirty_time_left"
  },
  DEODORIZER_LEFT: { key: "deodorizer_left" },
  DEODORIZER_TIME_LEFT: { key: "deodorizer_time_left" },
  WHEEL_DIRTY_LEFT: { key: "wheel_dirty_left" },
  WHEEL_DIRTY_TIME_LEFT: { key: "wheel_dirty_time_left" },
  SCALE_INHIBITOR_LEFT: { key: "scale_inhibitor_left" },
  SCALE_INHIBITOR_TIME_LEFT: {
    key: "scale_inhibitor_time_left"
  },
  FLUFFING_ROLLER_DIRTY_LEFT: {
    key: "fluffing_roller_dirty_left"
  },
  FLUFFING_ROLLER_DIRTY_TIME_LEFT: {
    key: "fluffing_roller_dirty_time_left"
  },
  ROLLER_MOP_FILTER_DIRTY_LEFT: {
    key: "roller_mop_filter_dirty_left"
  },
  ROLLER_MOP_FILTER_DIRTY_TIME_LEFT: {
    key: "roller_mop_filter_dirty_time_left"
  },
  WATER_OUTLET_FILTER_DIRTY_LEFT: {
    key: "water_outlet_filter_dirty_left"
  },
  WATER_OUTLET_FILTER_DIRTY_TIME_LEFT: {
    key: "water_outlet_filter_dirty_time_left"
  }
}, Uu = {
  RESUME_CLEANING: { key: "resume_cleaning", platform: "switch" },
  CARPET_BOOST: { key: "carpet_boost", platform: "switch", category: "config" },
  OBSTACLE_AVOIDANCE: { key: "obstacle_avoidance", platform: "switch", category: "config" },
  CUSTOMIZED_CLEANING: { key: "customized_cleaning", platform: "switch", icon: "mdi:home-search" },
  CHILD_LOCK: { key: "child_lock", platform: "switch", category: "config" },
  TIGHT_MOPPING: { key: "tight_mopping", platform: "switch", icon: "mdi:heating-coil", category: "config" },
  DND: { key: "dnd", platform: "switch", category: "config", name: "DnD" },
  DND_DISABLE_RESUME_CLEANING: {
    key: "dnd_disable_resume_cleaning",
    platform: "switch",
    icon: "mdi:pause-box",
    category: "config"
  },
  DND_DISABLE_AUTO_EMPTY: {
    key: "dnd_disable_auto_empty",
    platform: "switch",
    icon: "mdi:delete-off",
    category: "config"
  },
  DND_REDUCE_VOLUME: { key: "dnd_reduce_volume", platform: "switch", icon: "mdi:volume-minus", category: "config" },
  MULTI_FLOOR_MAP: { key: "multi_floor_map", platform: "switch", category: "config" },
  AUTO_DUST_COLLECTING: { key: "auto_dust_collecting", platform: "switch" },
  CARPET_RECOGNITION: { key: "carpet_recognition", platform: "switch", icon: "mdi:rug", category: "config" },
  SELF_CLEAN: { key: "self_clean", platform: "switch" },
  WATER_ELECTROLYSIS: { key: "water_electrolysis", platform: "switch", category: "config" },
  AUTO_WATER_REFILLING: { key: "auto_water_refilling", platform: "switch", category: "config" },
  INTELLIGENT_RECOGNITION: { key: "intelligent_recognition", platform: "switch", category: "config" },
  AUTO_DRYING: { key: "auto_drying", platform: "switch" },
  CARPET_AVOIDANCE: { key: "carpet_avoidance", platform: "switch", icon: "mdi:close-box-outline", category: "config" },
  AUTO_ADD_DETERGENT: { key: "auto_add_detergent", platform: "switch", icon: "mdi:chart-bubble", category: "config" },
  MOP_WASHING_WITH_DETERGENT: {
    key: "mop_washing_with_detergent",
    platform: "switch",
    icon: "mdi:hand-wash",
    category: "config",
    name: "Mop Washing With Detergent"
  },
  MOPPING_WITH_DETERGENT: {
    key: "mopping_with_detergent",
    platform: "switch",
    icon: "mdi:hand-wash",
    category: "config"
  },
  MAP_SAVING: { key: "map_saving", platform: "switch", icon: "mdi:map-legend", category: "config" },
  AUTO_MOUNT_MOP: { key: "auto_mount_mop", platform: "switch", icon: "mdi:google-circles-group", category: "config" },
  AUTO_CHANGE_MOP: { key: "auto_change_mop", platform: "switch", icon: "mdi:domain-switch", category: "config" },
  VOICE_ASSISTANT: { key: "voice_assistant", platform: "switch", category: "config" },
  CLEANING_SEQUENCE: { key: "cleaning_sequence", platform: "switch", icon: "mdi:order-numeric-ascending" },
  SELF_CLEAN_BY_ZONE: { key: "self_clean_by_zone", platform: "switch" },
  AI_OBSTACLE_DETECTION: { key: "ai_obstacle_detection", platform: "switch", category: "config" },
  AI_OBSTACLE_IMAGE_UPLOAD: {
    key: "ai_obstacle_image_upload",
    platform: "switch",
    icon: "mdi:cloud-upload",
    category: "config"
  },
  AI_OBSTACLE_PICTURE: { key: "ai_obstacle_picture", platform: "switch", category: "config" },
  AI_PET_DETECTION: { key: "ai_pet_detection", platform: "switch", category: "config" },
  AI_HUMAN_DETECTION: { key: "ai_human_detection", platform: "switch", category: "config" },
  AI_FURNITURE_DETECTION: {
    key: "ai_furniture_detection",
    platform: "switch",
    icon: "mdi:table-furniture",
    category: "config"
  },
  AI_FLUID_DETECTION: { key: "ai_fluid_detection", platform: "switch", category: "config" },
  FUZZY_OBSTACLE_DETECTION: {
    key: "fuzzy_obstacle_detection",
    platform: "switch",
    icon: "mdi:blur-linear",
    category: "config"
  },
  AI_PET_AVOIDANCE: { key: "ai_pet_avoidance", platform: "switch", icon: "mdi:dog-service", category: "config" },
  PET_PICTURE: { key: "pet_picture", platform: "switch", icon: "mdi:cat", category: "config" },
  PET_FOCUSED_DETECTION: { key: "pet_focused_detection", platform: "switch", icon: "mdi:dog", category: "config" },
  LARGE_PARTICLES_BOOST: {
    key: "large_particles_boost",
    platform: "switch",
    icon: "mdi:weather-dust",
    category: "config"
  },
  FILL_LIGHT: { key: "fill_light", platform: "switch" },
  COLLISION_AVOIDANCE: { key: "collision_avoidance", platform: "switch", category: "config" },
  STAIN_AVOIDANCE: { key: "stain_avoidance", platform: "switch", icon: "mdi:liquid-spot" },
  FLOOR_DIRECTION_CLEANING: {
    key: "floor_direction_cleaning",
    platform: "switch",
    icon: "mdi:arrow-decision-auto",
    category: "config"
  },
  PET_FOCUSED_CLEANING: { key: "pet_focused_cleaning", platform: "switch", icon: "mdi:paw", category: "config" },
  INTENSIVE_CARPET_CLEANING: {
    key: "intensive_carpet_cleaning",
    platform: "switch",
    icon: "mdi:creation",
    category: "config"
  },
  SIDE_REACH: { key: "side_reach", platform: "switch", icon: "mdi:selection-ellipse-arrow-inside", category: "config" },
  MOP_EXTEND: { key: "mop_extend", platform: "switch", icon: "mdi:waves-arrow-right" },
  GAP_CLEANING_EXTENSION: {
    key: "gap_cleaning_extension",
    platform: "switch",
    icon: "mdi:plus-circle-multiple",
    category: "config"
  },
  MOPPING_UNDER_FURNITURES: {
    key: "mopping_under_furnitures",
    platform: "switch",
    icon: "mdi:table-picnic",
    category: "config"
  },
  OFF_PEAK_CHARGING: { key: "off_peak_charging", platform: "switch", icon: "mdi:battery-clock", category: "config" },
  AUTO_CHARGING: { key: "auto_charging", platform: "switch", icon: "mdi:battery-sync" },
  HUMAN_FOLLOW: { key: "human_follow", platform: "switch" },
  MAX_SUCTION_POWER: { key: "max_suction_power", platform: "switch", icon: "mdi:speedometer" },
  SMART_DRYING: { key: "smart_drying", platform: "switch", icon: "mdi:clock-fast" },
  HOT_WASHING: { key: "hot_washing", platform: "switch", icon: "mdi:sun-thermometer" },
  UV_STERILIZATION: { key: "uv_sterilization", platform: "switch", icon: "mdi:sun-wireless" },
  ULTRA_CLEAN_MODE: { key: "ultra_clean_mode", platform: "switch", icon: "mdi:silverware-clean" },
  STREAMING_VOICE_PROMPT: { key: "streaming_voice_prompt", platform: "switch" },
  CLEAN_CARPETS_FIRST: {
    key: "clean_carpets_first",
    platform: "switch",
    icon: "mdi:order-bool-descending-variant",
    category: "config"
  },
  SMART_MOP_WASHING: { key: "smart_mop_washing", platform: "switch", icon: "mdi:hand-water", category: "config" },
  SILENT_DRYING: { key: "silent_drying", platform: "switch", icon: "mdi:volume-mute" },
  HAIR_COMPRESSION: {
    key: "hair_compression",
    platform: "switch",
    icon: "mdi:arrow-collapse-vertical",
    category: "config"
  },
  SIDE_BRUSH_CARPET_ROTATE: {
    key: "side_brush_carpet_rotate",
    platform: "switch",
    icon: "mdi:format-rotate-90",
    category: "config"
  },
  LIFT_CHASSIS_ON_CARPET: {
    key: "lift_chassis_on_carpet",
    platform: "switch",
    icon: "mdi:weather-moonset-up",
    category: "config"
  },
  CLOSE_ROLLER_COVER_ON_CARPET: {
    key: "close_roller_cover_on_carpet",
    platform: "switch",
    icon: "mdi:circle-off-outline",
    category: "config"
  },
  DUST_BAG_DRYING: { key: "dust_bag_drying", platform: "switch", icon: "mdi:fire-circle", category: "config" },
  RING_LIGHT_ALWAYS_ON: {
    key: "ring_light_always_on",
    platform: "switch",
    icon: "mdi:light-recessed",
    category: "config"
  },
  OBSTACLE_CROSSING: {
    key: "obstacle_crossing",
    platform: "switch",
    icon: "mdi:boom-gate-arrow-up",
    category: "config",
    name: "Synchronized Obstacle Crossing"
  },
  ACTIVE_SUSPENSION_CROSSING: {
    key: "active_suspension_crossing",
    platform: "switch",
    icon: "mdi:weather-moonset-up",
    category: "config"
  },
  DYNAMIC_OBSTACLE_CLEANING: {
    key: "dynamic_obstacle_cleaning",
    platform: "switch",
    icon: "mdi:map-marker-circle",
    category: "config"
  },
  PRESSURIZED_CLEANING: {
    key: "pressurized_cleaning",
    platform: "switch",
    icon: "mdi:car-brake-low-pressure",
    category: "config"
  },
  LDS_STATE: { key: "lds_state", platform: "switch", name: "LDS State" },
  CAMERA_LIGHT_BRIGHTNESS_AUTO: { key: "camera_light_brightness_auto", platform: "switch" }
}, Fa = {
  SUCTION_LEVEL: { key: "suction_level", platform: "select" },
  WATER_VOLUME: { key: "water_volume", platform: "select" },
  CLEANING_MODE: { key: "cleaning_mode", platform: "select" },
  CARPET_SENSITIVITY: { key: "carpet_sensitivity", platform: "select", icon: "mdi:rug" },
  CARPET_CLEANING: { key: "carpet_cleaning", platform: "select", icon: "mdi:close-box-outline" },
  AUTO_EMPTY_FREQUENCY: { key: "auto_empty_frequency", platform: "select" },
  DRYING_TIME: { key: "drying_time", platform: "select", icon: "mdi:sun-clock" },
  MOP_WASH_LEVEL: { key: "mop_wash_level", platform: "select", icon: "mdi:water-opacity" },
  VOICE_ASSISTANT_LANGUAGE: {
    key: "voice_assistant_language",
    platform: "select",
    icon: "mdi:translate-variant",
    category: "config"
  },
  MOP_PRESSURE: { key: "mop_pressure", platform: "select", icon: "mdi:car-brake-low-pressure" },
  MOP_TEMPERATURE: { key: "mop_temperature", platform: "select", icon: "mdi:thermometer-water" },
  LOW_LYING_AREA_FREQUENCY: {
    key: "low_lying_area_frequency",
    platform: "select",
    icon: "mdi:priority-high",
    category: "config"
  },
  SCRAPER_FREQUENCY: { key: "scraper_frequency", platform: "select", icon: "mdi:squeegee", category: "config" },
  MOP_PAD_HUMIDITY: { key: "mop_pad_humidity", platform: "select" },
  MOPPING_TYPE: { key: "mopping_type", platform: "select", icon: "mdi:spray-bottle", category: "config" },
  CUSTOM_MOPPING_ROUTE: { key: "custom_mopping_route", platform: "select" },
  WIDER_CORNER_COVERAGE: {
    key: "wider_corner_coverage",
    platform: "select",
    icon: "mdi:rounded-corner",
    category: "config"
  },
  MOP_PAD_SWING: { key: "mop_pad_swing", platform: "select", icon: "mdi:arrow-split-vertical", category: "config" },
  MOP_EXTEND_FREQUENCY: {
    key: "mop_extend_frequency",
    platform: "select",
    icon: "mdi:waves-arrow-right",
    category: "config"
  },
  SELF_CLEAN_FREQUENCY: { key: "self_clean_frequency", platform: "select" },
  AUTO_RECLEANING: { key: "auto_recleaning", platform: "select", icon: "mdi:repeat-variant" },
  AUTO_REWASHING: { key: "auto_rewashing", platform: "select" },
  CLEANING_ROUTE: { key: "cleaning_route", platform: "select" },
  BATTERY_CHARGE_LEVEL: {
    key: "battery_charge_level",
    platform: "select",
    icon: "mdi:battery-heart-variant",
    category: "config"
  },
  CLEANGENIUS: { key: "cleangenius", platform: "select", icon: "mdi:atom" },
  CLEANGENIUS_MODE: { key: "cleangenius_mode", platform: "select", icon: "mdi:atom" },
  WATER_TEMPERATURE: { key: "water_temperature", platform: "select", icon: "mdi:water-thermometer" },
  AUTO_LDS_COVERAGE: { key: "auto_lds_coverage", platform: "select", icon: "mdi:elevator", category: "config" },
  AUTO_EMPTY_MODE: { key: "auto_empty_mode", platform: "select" },
  MOP_CLEAN_FREQUENCY: { key: "mop_clean_frequency", platform: "select" },
  WASHING_MODE: { key: "washing_mode", platform: "select", icon: "mdi:water-opacity" },
  MAP_ROTATION: { key: "map_rotation", platform: "select", icon: "mdi:crop-rotate", category: "config" },
  SELECTED_MAP: { key: "selected_map", platform: "select", icon: "mdi:map-check" },
  CLEANING_TIMES: { key: "cleaning_times", platform: "select" },
  MOP_TYPE: { key: "mop_type", platform: "select", category: "config" },
  ORDER: { key: "order", platform: "select" },
  FLOOR_MATERIAL: { key: "floor_material", platform: "select" },
  FLOOR_MATERIAL_DIRECTION: { key: "floor_material_direction", platform: "select" },
  VISIBILITY: { key: "visibility", platform: "select" },
  NAME: { key: "name", platform: "select" }
}, aw = {
  RESET_MAIN_BRUSH: {
    key: "reset_main_brush",
    platform: "button",
    icon: "mdi:car-turbocharger",
    category: "diagnostic"
  },
  RESET_SIDE_BRUSH: {
    key: "reset_side_brush",
    platform: "button",
    icon: "mdi:pinwheel-outline",
    category: "diagnostic"
  },
  RESET_FILTER: { key: "reset_filter", platform: "button", icon: "mdi:air-filter", category: "diagnostic" },
  RESET_SENSOR: { key: "reset_sensor", platform: "button", icon: "mdi:radar", category: "diagnostic" },
  RESET_MOP_PAD: { key: "reset_mop_pad", platform: "button", icon: "mdi:hydro-power", category: "diagnostic" },
  RESET_SILVER_ION: { key: "reset_silver_ion", platform: "button", icon: "mdi:shimmer", category: "diagnostic" },
  RESET_DETERGENT: { key: "reset_detergent", platform: "button", icon: "mdi:chart-bubble", category: "diagnostic" },
  RESET_SQUEEGEE: { key: "reset_squeegee", platform: "button", icon: "mdi:squeegee", category: "diagnostic" },
  RESET_ONBOARD_DIRTY_WATER_TANK: {
    key: "reset_onboard_dirty_water_tank",
    platform: "button",
    icon: "mdi:train-car-tank",
    category: "diagnostic"
  },
  RESET_DIRTY_WATER_CHANNEL: {
    key: "reset_dirty_water_channel",
    platform: "button",
    icon: "mdi:cup",
    category: "diagnostic"
  },
  RESET_DEODORIZER: { key: "reset_deodorizer", platform: "button", icon: "mdi:scent", category: "diagnostic" },
  RESET_SCALE_INHIBITOR: { key: "reset_scale_inhibitor", platform: "button", icon: "mdi:pipe", category: "diagnostic" },
  RESET_WHEEL: { key: "reset_wheel", platform: "button", icon: "mdi:tire", category: "diagnostic" },
  RESET_FLUFFING_ROLLER: {
    key: "reset_fluffing_roller",
    platform: "button",
    icon: "mdi:blinds-open",
    category: "diagnostic"
  },
  RESET_ROLLER_MOP_FILTER: {
    key: "reset_roller_mop_filter",
    platform: "button",
    icon: "mdi:filter-settings",
    category: "diagnostic"
  },
  RESET_WATER_OUTLET_FILTER: {
    key: "reset_water_outlet_filter",
    platform: "button",
    icon: "mdi:filter-settings",
    category: "diagnostic"
  },
  START_AUTO_EMPTY: { key: "start_auto_empty", platform: "button" },
  CLEAR_WARNING: {
    key: "clear_warning",
    platform: "button",
    icon: "mdi:clipboard-check-outline",
    category: "diagnostic"
  },
  START_FAST_MAPPING: { key: "start_fast_mapping", platform: "button", icon: "mdi:map-plus", category: "config" },
  START_MAPPING: { key: "start_mapping", platform: "button", icon: "mdi:broom", category: "config" },
  SELF_CLEAN: { key: "self_clean", platform: "button" },
  MANUAL_DRYING: { key: "manual_drying", platform: "button" },
  MANUAL_DUST_BAG_DRYING: { key: "manual_dust_bag_drying", platform: "button" },
  WATER_TANK_DRAINING: { key: "water_tank_draining", platform: "button", icon: "mdi:pump", category: "diagnostic" },
  EMPTY_WATER_TANK: { key: "empty_water_tank", platform: "button", icon: "mdi:waves-arrow-up", category: "diagnostic" },
  BASE_STATION_SELF_REPAIR: { key: "base_station_self_repair", platform: "button", category: "diagnostic" },
  BASE_STATION_CLEANING: {
    key: "base_station_cleaning",
    platform: "button",
    icon: "mdi:car-wash",
    category: "diagnostic"
  },
  START_RECLEANING: {
    key: "start_recleaning",
    platform: "button",
    icon: "mdi:refresh-circle",
    name: "Start Re-Cleaning"
  },
  RELOAD_SHORTCUTS: {
    key: "reload_shortcuts",
    platform: "button",
    icon: "mdi:motion-play-outline",
    category: "diagnostic"
  },
  SHORTCUT: { key: "shortcut", platform: "button", icon: "mdi:play-speed" },
  BACKUP: { key: "backup", platform: "button", icon: "mdi:content-save", category: "diagnostic" }
}, Ml = {
  VOLUME: { key: "volume", platform: "number" },
  MOP_CLEANING_REMAINDER: {
    key: "mop_cleaning_remainder",
    platform: "number",
    icon: "mdi:alarm-check",
    category: "config"
  },
  SELF_CLEAN_AREA: { key: "self_clean_area", platform: "number" },
  SELF_CLEAN_TIME: { key: "self_clean_time", platform: "number", icon: "mdi:table-clock" },
  CAMERA_LIGHT_BRIGHTNESS: {
    key: "camera_light_brightness",
    platform: "number",
    icon: "mdi:brightness-percent",
    category: "config"
  },
  WETNESS_LEVEL: { key: "wetness_level", platform: "number" },
  DRYING_TIME: { key: "drying_time", platform: "number", icon: "mdi:sun-clock" },
  AUTO_EMPTY_AREA: { key: "auto_empty_area", platform: "number", icon: "mdi:recycle" }
}, nw = {
  DND_START: { key: "dnd_start", platform: "time", icon: "mdi:clock-start", category: "config", name: "DnD Start" },
  DND_END: { key: "dnd_end", platform: "time", icon: "mdi:clock-end", category: "config", name: "DnD End" },
  OFF_PEAK_CHARGING_START: {
    key: "off_peak_charging_start",
    platform: "time",
    icon: "mdi:battery-lock-open",
    category: "config",
    name: "Off-Peak Charging Start"
  },
  OFF_PEAK_CHARGING_END: {
    key: "off_peak_charging_end",
    platform: "time",
    icon: "mdi:battery-lock",
    category: "config",
    name: "Off-Peak Charging End"
  }
}, iw = {
  MAP: { key: "map" }
}, ca = {
  SUCTION_LEVEL: { key: "suction_level" },
  MOP_PRESSURE: { key: "mop_pressure" },
  MOP_TEMPERATURE: { key: "mop_temperature" },
  CLEANING_TIMES: { key: "cleaning_times" }
}, Tu = {
  WETNESS_LEVEL: { key: "wetness_level" }
}, wp = {
  VACUUM_RESET_CONSUMABLE: { key: "vacuum_reset_consumable", domain: "dreame_vacuum" }
}, wg = {
  AI_DETECTION: "ai_detection",
  AUTO_ADD_DETERGENT: "auto_add_detergent",
  AUTO_EMPTY_BASE: "auto_empty_base",
  AUTO_EMPTY_MODE: "auto_empty_mode",
  AUTO_REWASHING: "auto_rewashing",
  CARPET_RECOGNITION: "carpet_recognition",
  CLEANGENIUS: "cleangenius",
  CLEANING_ROUTE: "cleaning_route",
  DND: "dnd",
  DND_FUNCTIONS: "dnd_functions",
  HOT_WASHING: "hot_washing",
  LOW_LYING_AREA_FREQUENCY: "low_lying_area_frequency",
  MAX_SUCTION_POWER: "max_suction_power",
  MOP_PAD_LIFTING: "mop_pad_lifting",
  MOP_PAD_SWING: "mop_pad_swing",
  MOP_PAD_SWING_PLUS: "mop_pad_swing_plus",
  OFF_PEAK_CHARGING: "off_peak_charging",
  SCRAPER_FREQUENCY: "scraper_frequency",
  SELF_CLEAN_FREQUENCY: "self_clean_frequency",
  SELF_WASH_BASE: "self_wash_base",
  SHORTCUTS: "shortcuts",
  SIDE_REACH: "side_reach",
  SMART_MOP_WASHING: "smart_mop_washing",
  STATION_CLEANING: "station_cleaning",
  VOICE_ASSISTANT: "voice_assistant",
  WASHING_MODE: "washing_mode",
  WETNESS_LEVEL: "wetness_level"
};
function kt(a, i, o) {
  return `${a}.${i}_${o}`;
}
function xt(a, i, o, l) {
  return `${a}.${i}_room_${o}_${l}`;
}
function re(a, i, o, l) {
  return {
    key: Uu[a].key,
    platform: "switch",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function Ot(a, i, o, l) {
  return {
    key: Fa[a].key,
    platform: "select",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function Sg(a, i, o, l) {
  return {
    key: Ml[a].key,
    platform: "number",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function ua(a, i, o, l) {
  return {
    key: aw[a].key,
    platform: "button",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
function ql(a, i, o, l) {
  return {
    key: nw[a].key,
    platform: "time",
    labelKey: i,
    descriptionKey: o,
    ...l
  };
}
const fe = wg, Eg = {
  key: "quick_settings",
  titleKey: "settings.quick_settings.title",
  order: 1,
  entities: [
    re("CHILD_LOCK", "settings.quick_settings.child_lock", "settings.quick_settings.child_lock_desc"),
    re("RESUME_CLEANING", "settings.quick_settings.resume_cleaning", "settings.quick_settings.resume_cleaning_desc"),
    re("DND", "settings.quick_settings.dnd", "settings.quick_settings.dnd_desc", { capability: fe.DND }),
    ql("DND_START", "settings.quick_settings.dnd_start", void 0, {
      capability: fe.DND,
      parentKey: "dnd"
    }),
    ql("DND_END", "settings.quick_settings.dnd_end", void 0, {
      capability: fe.DND,
      parentKey: "dnd"
    }),
    re(
      "DND_DISABLE_RESUME_CLEANING",
      "settings.quick_settings.dnd_disable_resume",
      "settings.quick_settings.dnd_disable_resume_desc",
      {
        capability: fe.DND_FUNCTIONS,
        parentKey: "dnd"
      }
    ),
    re(
      "DND_DISABLE_AUTO_EMPTY",
      "settings.quick_settings.dnd_disable_auto_empty",
      "settings.quick_settings.dnd_disable_auto_empty_desc",
      {
        capability: fe.DND_FUNCTIONS,
        parentKey: "dnd"
      }
    ),
    re(
      "DND_REDUCE_VOLUME",
      "settings.quick_settings.dnd_reduce_volume",
      "settings.quick_settings.dnd_reduce_volume_desc",
      {
        capability: fe.DND_FUNCTIONS,
        parentKey: "dnd"
      }
    )
  ]
}, zg = {
  key: "quick_actions",
  titleKey: "settings.station_controls.title",
  order: 2,
  entities: [
    ua("SELF_CLEAN", "settings.station_controls.self_clean", "settings.station_controls.self_clean_desc"),
    ua("MANUAL_DRYING", "settings.station_controls.manual_drying", "settings.station_controls.manual_drying_desc"),
    ua(
      "WATER_TANK_DRAINING",
      "settings.station_controls.water_tank_draining",
      "settings.station_controls.water_tank_draining_desc"
    ),
    ua(
      "BASE_STATION_CLEANING",
      "settings.station_controls.base_station_cleaning",
      "settings.station_controls.base_station_cleaning_desc"
    ),
    ua(
      "EMPTY_WATER_TANK",
      "settings.station_controls.empty_water_tank",
      "settings.station_controls.empty_water_tank_desc"
    ),
    ua(
      "START_AUTO_EMPTY",
      "settings.station_controls.start_auto_empty",
      "settings.station_controls.start_auto_empty_desc"
    ),
    ua(
      "START_RECLEANING",
      "settings.station_controls.start_recleaning",
      "settings.station_controls.start_recleaning_desc"
    ),
    ua("CLEAR_WARNING", "settings.station_controls.clear_warning", "settings.station_controls.clear_warning_desc")
  ]
}, kg = {
  key: "carpet_settings",
  titleKey: "settings.carpet.title",
  order: 3,
  capabilities: [fe.CARPET_RECOGNITION],
  entities: [
    re("CARPET_RECOGNITION", "settings.carpet.carpet_recognition", "settings.carpet.carpet_recognition_desc"),
    re("CARPET_AVOIDANCE", "settings.carpet.carpet_avoidance", "settings.carpet.carpet_avoidance_desc"),
    Ot("CARPET_CLEANING", "settings.carpet.cleaning_mode", "settings.carpet.cleaning_mode_desc"),
    re("CLEAN_CARPETS_FIRST", "settings.carpet.clean_carpets_first", "settings.carpet.clean_carpets_first_desc"),
    re("CARPET_BOOST", "settings.carpet.carpet_boost", "settings.carpet.carpet_boost_desc"),
    re("INTENSIVE_CARPET_CLEANING", "settings.carpet.intensive_cleaning", "settings.carpet.intensive_cleaning_desc"),
    re("SIDE_BRUSH_CARPET_ROTATE", "settings.carpet.side_brush_rotate", "settings.carpet.side_brush_rotate_desc"),
    Ot("CARPET_SENSITIVITY", "settings.carpet.sensitivity", "settings.carpet.sensitivity_desc")
  ]
}, Tg = {
  key: "floor_settings",
  titleKey: "settings.floor.title",
  order: 4,
  entities: [
    re("OBSTACLE_AVOIDANCE", "settings.floor.obstacle_avoidance", "settings.floor.obstacle_avoidance_desc"),
    re("COLLISION_AVOIDANCE", "settings.floor.collision_avoidance", "settings.floor.collision_avoidance_desc"),
    re("AUTO_MOUNT_MOP", "settings.floor.auto_mount_mop", "settings.floor.auto_mount_mop_desc"),
    re("TIGHT_MOPPING", "settings.floor.tight_mopping", "settings.floor.tight_mopping_desc"),
    re("STAIN_AVOIDANCE", "settings.floor.stain_avoidance", "settings.floor.stain_avoidance_desc"),
    re(
      "FLOOR_DIRECTION_CLEANING",
      "settings.floor.floor_direction_cleaning",
      "settings.floor.floor_direction_cleaning_desc"
    ),
    re("LARGE_PARTICLES_BOOST", "settings.floor.large_particles_boost", "settings.floor.large_particles_boost_desc"),
    re("PET_FOCUSED_CLEANING", "settings.floor.pet_focused_cleaning", "settings.floor.pet_focused_cleaning_desc"),
    Ot("AUTO_RECLEANING", "settings.floor.auto_recleaning", "settings.floor.auto_recleaning_desc"),
    Ot(
      "LOW_LYING_AREA_FREQUENCY",
      "settings.floor.low_lying_area_frequency",
      "settings.floor.low_lying_area_frequency_desc",
      {
        capability: fe.LOW_LYING_AREA_FREQUENCY
      }
    )
  ]
}, Ag = {
  key: "edge_corner",
  titleKey: "settings.edge_corner.title",
  order: 5,
  capabilities: [fe.MOP_PAD_LIFTING, fe.SIDE_REACH, fe.MOP_PAD_SWING, fe.MOP_PAD_SWING_PLUS],
  entities: [
    re("SIDE_REACH", "settings.edge_corner.side_reach", "settings.edge_corner.side_reach_desc", {
      capability: fe.SIDE_REACH
    }),
    re("MOP_EXTEND", "settings.edge_corner.mop_extend", "settings.edge_corner.mop_extend_desc"),
    re("GAP_CLEANING_EXTENSION", "settings.edge_corner.gap_cleaning", "settings.edge_corner.gap_cleaning_desc", {
      parentKey: "mop_extend"
    }),
    re("MOPPING_UNDER_FURNITURES", "settings.edge_corner.mopping_under", "settings.edge_corner.mopping_under_desc", {
      parentKey: "mop_extend"
    }),
    Ot("MOP_EXTEND_FREQUENCY", "settings.edge_corner.extend_frequency", "settings.edge_corner.extend_frequency_desc")
  ]
}, Ng = {
  key: "volume",
  titleKey: "settings.volume.title",
  order: 6,
  entities: [
    Sg("VOLUME", "settings.volume.volume", void 0, { renderHint: "volume", min: 0, max: 100 }),
    re("VOICE_ASSISTANT", "settings.volume.voice_assistant", "settings.volume.voice_assistant_desc", {
      capability: fe.VOICE_ASSISTANT
    }),
    Ot("VOICE_ASSISTANT_LANGUAGE", "settings.volume.voice_language", "settings.volume.voice_language_desc", {
      capability: fe.VOICE_ASSISTANT,
      parentKey: "voice_assistant"
    }),
    re(
      "STREAMING_VOICE_PROMPT",
      "settings.volume.streaming_voice_prompt",
      "settings.volume.streaming_voice_prompt_desc"
    )
  ]
}, Cg = {
  key: "dock_settings",
  titleKey: "settings.dock.title",
  order: 7,
  capabilities: [
    fe.AUTO_EMPTY_BASE,
    fe.SELF_WASH_BASE,
    fe.AUTO_ADD_DETERGENT,
    fe.SMART_MOP_WASHING,
    fe.WASHING_MODE,
    fe.HOT_WASHING,
    fe.OFF_PEAK_CHARGING,
    fe.STATION_CLEANING,
    fe.AUTO_REWASHING
  ],
  entities: [
    re("SELF_CLEAN", "settings.dock.self_clean", "settings.dock.self_clean_desc", { capability: fe.SELF_WASH_BASE }),
    re("AUTO_DUST_COLLECTING", "settings.dock.auto_dust_collecting", "settings.dock.auto_dust_collecting_desc", {
      capability: fe.AUTO_EMPTY_BASE
    }),
    Ot("AUTO_EMPTY_MODE", "settings.dock.auto_empty_mode", "settings.dock.auto_empty_mode_desc", {
      capability: fe.AUTO_EMPTY_MODE
    }),
    Ot("AUTO_EMPTY_FREQUENCY", "settings.dock.auto_empty_frequency", "settings.dock.auto_empty_frequency_desc", {
      capability: fe.AUTO_EMPTY_BASE
    }),
    re("AUTO_ADD_DETERGENT", "settings.dock.auto_detergent", "settings.dock.auto_detergent_desc", {
      capability: fe.AUTO_ADD_DETERGENT
    }),
    re(
      "MOP_WASHING_WITH_DETERGENT",
      "settings.dock.mop_washing_with_detergent",
      "settings.dock.mop_washing_with_detergent_desc",
      {
        capability: fe.AUTO_ADD_DETERGENT
      }
    ),
    re("MOPPING_WITH_DETERGENT", "settings.dock.mopping_with_detergent", "settings.dock.mopping_with_detergent_desc"),
    re("WATER_ELECTROLYSIS", "settings.dock.water_electrolysis", "settings.dock.water_electrolysis_desc", {
      capability: fe.SELF_WASH_BASE
    }),
    re("AUTO_WATER_REFILLING", "settings.dock.auto_water_refilling", "settings.dock.auto_water_refilling_desc"),
    re("SMART_MOP_WASHING", "settings.dock.smart_washing", "settings.dock.smart_washing_desc", {
      capability: fe.SMART_MOP_WASHING
    }),
    Ot("MOP_WASH_LEVEL", "settings.dock.mop_wash_level", "settings.dock.mop_wash_level_desc", {
      capability: fe.SELF_WASH_BASE
    }),
    Ot("WASHING_MODE", "settings.dock.washing_mode", "settings.dock.washing_mode_desc", {
      capability: fe.WASHING_MODE
    }),
    Ot("WATER_TEMPERATURE", "settings.dock.water_temperature", "settings.dock.water_temperature_desc", {
      capability: fe.HOT_WASHING
    }),
    re("AUTO_DRYING", "settings.dock.auto_drying", "settings.dock.auto_drying_desc", {
      capability: fe.SELF_WASH_BASE
    }),
    Ot("DRYING_TIME", "settings.dock.drying_time", "settings.dock.drying_time_desc", {
      capability: fe.SELF_WASH_BASE,
      useSegmentedControl: !0
    }),
    Ot("AUTO_REWASHING", "settings.dock.auto_rewashing", "settings.dock.auto_rewashing_desc", {
      capability: fe.AUTO_REWASHING
    }),
    re("OFF_PEAK_CHARGING", "settings.dock.off_peak_charging", "settings.dock.off_peak_charging_desc", {
      capability: fe.OFF_PEAK_CHARGING
    }),
    ql("OFF_PEAK_CHARGING_START", "settings.dock.off_peak_charging_start", void 0, {
      capability: fe.OFF_PEAK_CHARGING,
      parentKey: "off_peak_charging"
    }),
    ql("OFF_PEAK_CHARGING_END", "settings.dock.off_peak_charging_end", void 0, {
      capability: fe.OFF_PEAK_CHARGING,
      parentKey: "off_peak_charging"
    }),
    ua("BASE_STATION_CLEANING", "settings.dock.station_cleaning", "settings.dock.station_cleaning_desc", {
      capability: fe.STATION_CLEANING
    }),
    ua("BASE_STATION_SELF_REPAIR", "settings.dock.self_repair", "settings.dock.self_repair_desc", {
      capability: fe.STATION_CLEANING
    }),
    Ot("SCRAPER_FREQUENCY", "settings.dock.scraper_frequency", "settings.dock.scraper_frequency_desc", {
      capability: fe.SCRAPER_FREQUENCY
    })
  ]
}, xg = {
  key: "ai_detection",
  titleKey: "settings.ai_detection.title",
  order: 8,
  capabilities: [fe.AI_DETECTION],
  entities: [
    re(
      "INTELLIGENT_RECOGNITION",
      "settings.ai_detection.intelligent_recognition",
      "settings.ai_detection.intelligent_recognition_desc"
    ),
    re(
      "AI_OBSTACLE_DETECTION",
      "settings.ai_detection.ai_obstacle_detection",
      "settings.ai_detection.ai_obstacle_detection_desc"
    ),
    re(
      "FUZZY_OBSTACLE_DETECTION",
      "settings.ai_detection.fuzzy_obstacle_detection",
      "settings.ai_detection.fuzzy_obstacle_detection_desc"
    ),
    re(
      "AI_OBSTACLE_IMAGE_UPLOAD",
      "settings.ai_detection.ai_obstacle_image_upload",
      "settings.ai_detection.ai_obstacle_image_upload_desc"
    ),
    re(
      "AI_OBSTACLE_PICTURE",
      "settings.ai_detection.ai_obstacle_picture",
      "settings.ai_detection.ai_obstacle_picture_desc"
    ),
    re("AI_PET_DETECTION", "settings.ai_detection.ai_pet_detection", "settings.ai_detection.ai_pet_detection_desc"),
    re("AI_PET_AVOIDANCE", "settings.ai_detection.ai_pet_avoidance", "settings.ai_detection.ai_pet_avoidance_desc"),
    re(
      "PET_FOCUSED_DETECTION",
      "settings.ai_detection.pet_focused_detection",
      "settings.ai_detection.pet_focused_detection_desc"
    ),
    re("PET_PICTURE", "settings.ai_detection.pet_picture", "settings.ai_detection.pet_picture_desc"),
    re(
      "AI_HUMAN_DETECTION",
      "settings.ai_detection.ai_human_detection",
      "settings.ai_detection.ai_human_detection_desc"
    ),
    re("HUMAN_FOLLOW", "settings.ai_detection.human_follow", "settings.ai_detection.human_follow_desc"),
    re(
      "AI_FURNITURE_DETECTION",
      "settings.ai_detection.ai_furniture_detection",
      "settings.ai_detection.ai_furniture_detection_desc"
    ),
    re(
      "AI_FLUID_DETECTION",
      "settings.ai_detection.ai_fluid_detection",
      "settings.ai_detection.ai_fluid_detection_desc"
    ),
    re("FILL_LIGHT", "settings.ai_detection.fill_light", "settings.ai_detection.fill_light_desc"),
    re(
      "CAMERA_LIGHT_BRIGHTNESS_AUTO",
      "settings.ai_detection.camera_light_auto",
      "settings.ai_detection.camera_light_auto_desc"
    ),
    Sg(
      "CAMERA_LIGHT_BRIGHTNESS",
      "settings.ai_detection.camera_light_brightness",
      "settings.ai_detection.camera_light_brightness_desc",
      {
        renderHint: "brightness",
        parentKey: "camera_light_brightness_auto"
        // Show only when auto is OFF (inverted logic handled in component)
      }
    )
  ]
}, Og = {
  key: "map_settings",
  titleKey: "settings.map.title",
  order: 9,
  entities: [
    re("MULTI_FLOOR_MAP", "settings.map.multi_floor", "settings.map.multi_floor_desc"),
    Ot("MAP_ROTATION", "settings.map.rotation", "settings.map.rotation_desc"),
    ua("START_MAPPING", "settings.map.start_mapping"),
    ua("START_FAST_MAPPING", "settings.map.start_fast_mapping")
  ]
};
[
  Eg,
  zg,
  kg,
  Tg,
  Ag,
  Ng,
  Cg,
  xg,
  Og
].sort((a, i) => a.order - i.order);
const ow = /* @__PURE__ */ g.jsx(Db, {}), rw = /* @__PURE__ */ g.jsx(xb, {}), lw = /* @__PURE__ */ g.jsx(Mb, {}), sw = /* @__PURE__ */ g.jsx(Nb, {}), cw = /* @__PURE__ */ g.jsx(t0, {}), uw = /* @__PURE__ */ g.jsx(bg, {}), dw = /* @__PURE__ */ g.jsx(S0, {}), _w = /* @__PURE__ */ g.jsx(b0, {}), mw = /* @__PURE__ */ g.jsx(V0, {}), fw = /* @__PURE__ */ g.jsx(g0, {}), pw = /* @__PURE__ */ g.jsx(v0, {}), gw = /* @__PURE__ */ g.jsx(Lb, {}), hw = /* @__PURE__ */ g.jsx(Pb, {}), Mg = /* @__PURE__ */ g.jsx(ju, {}), Rg = /* @__PURE__ */ g.jsx(Vl, {}), Gl = /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
  /* @__PURE__ */ g.jsx(ju, {}),
  /* @__PURE__ */ g.jsx(yg, {}),
  /* @__PURE__ */ g.jsx(Vl, {})
] }), qu = /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
  /* @__PURE__ */ g.jsx(ju, {}),
  /* @__PURE__ */ g.jsx(kb, {}),
  /* @__PURE__ */ g.jsx(Vl, {})
] }), Au = /* @__PURE__ */ g.jsx(q0, {}), Gu = /* @__PURE__ */ g.jsx(H0, {}), Dg = /* @__PURE__ */ g.jsx(L0, {}), Nu = /* @__PURE__ */ g.jsx(B0, {}), vw = /* @__PURE__ */ g.jsx(bg, {}), yw = /* @__PURE__ */ g.jsx(F0, {}), bw = /* @__PURE__ */ g.jsx(Jb, {}), ww = /* @__PURE__ */ g.jsx(tw, {}), Sw = /* @__PURE__ */ g.jsx(A0, {}), Ew = /* @__PURE__ */ g.jsx(D0, {}), zw = /* @__PURE__ */ g.jsx(J0, {}), jg = /* @__PURE__ */ g.jsx(Z0, {}), kw = /* @__PURE__ */ g.jsx(Vl, {}), Sp = {
  // Idle states
  idle: "idle",
  charging: "idle",
  charging_completed: "idle",
  // Cleaning states
  sweeping: "cleaning",
  mopping: "cleaning",
  sweeping_and_mopping: "cleaning",
  second_cleaning: "cleaning",
  spot_cleaning: "cleaning",
  extra_cleaning: "cleaning",
  initial_deep_cleaning: "cleaning",
  floor_maintaining: "cleaning",
  // Paused states
  paused: "paused",
  washing_paused: "paused",
  monitoring_paused: "paused",
  dust_bag_drying_paused: "paused",
  finding_pet_paused: "paused",
  initial_deep_cleaning_paused: "paused",
  changing_mop_paused: "paused",
  floor_maintaining_paused: "paused",
  // Returning states
  returning: "returning",
  returning_to_wash: "returning",
  returning_install_mop: "returning",
  returning_remove_mop: "returning",
  returning_auto_empty: "returning",
  returning_to_drain: "returning",
  heading_to_extra_cleaning: "returning",
  // Maintenance states
  washing: "maintenance",
  drying: "maintenance",
  auto_emptying: "maintenance",
  station_cleaning: "maintenance",
  draining: "maintenance",
  auto_water_draining: "maintenance",
  emptying: "maintenance",
  dust_bag_drying: "maintenance",
  water_check: "maintenance",
  clean_add_water: "maintenance",
  sanitizing: "maintenance",
  sanitizing_with_dry: "maintenance",
  changing_mop: "maintenance",
  // Error state
  error: "error",
  // Other states
  unknown: "other",
  building: "other",
  upgrading: "other",
  remote_control: "other",
  monitoring: "other",
  shortcut: "other",
  human_following: "other",
  finding_pet: "other",
  waiting_for_task: "other",
  smart_charging: "other",
  station_reset: "other",
  clean_summon: "other"
}, Ep = {
  sweeping: "vacuuming",
  spot_cleaning: "vacuuming",
  mopping: "mopping",
  second_cleaning: "mopping",
  // Mopping phase of "mop after vac"
  sweeping_and_mopping: "vacuuming_and_mopping",
  extra_cleaning: "vacuuming",
  initial_deep_cleaning: "vacuuming_and_mopping",
  floor_maintaining: "mopping"
}, zp = {
  cleaning: "cleaning",
  docked: "idle",
  idle: "idle",
  paused: "paused",
  returning: "returning",
  error: "error"
}, Tw = "idle", Aw = "none", nt = wg, Nw = {
  WETNESS: {
    MIN: 1,
    MAX: 32
  }
}, ei = {
  SELECT: "select",
  SWITCH: "switch",
  NUMBER: "number",
  VACUUM: "vacuum",
  DREAME_VACUUM: "dreame_vacuum"
}, zn = {
  SELECT_OPTION: "select_option",
  TURN_ON: "turn_on",
  TURN_OFF: "turn_off",
  SET_VALUE: "set_value",
  START: "start",
  RETURN_TO_BASE: "return_to_base",
  VACUUM_CLEAN_SEGMENT: "vacuum_clean_segment",
  SET_FAN_SPEED: "set_fan_speed"
}, be = {
  SWEEPING: "Sweeping",
  MOPPING: "Mopping",
  SWEEPING_AND_MOPPING: "Sweeping and mopping",
  MOPPING_AFTER_SWEEPING: "Mopping after sweeping",
  CUSTOMIZE: "Customize"
}, ba = {
  VACUUM_AND_MOP: "Vacuum and mop",
  MOP_AFTER_VACUUM: "Mop after vacuum"
}, ka = {
  OFF: "Off",
  ROUTINE_CLEANING: "Routine cleaning",
  DEEP_CLEANING: "Deep cleaning"
}, Qt = {
  CLEANING_MODE: {
    SWEEPING: "sweeping",
    MOPPING: "mopping",
    SWEEPING_AND_MOPPING: "sweeping_and_mopping",
    MOPPING_AFTER_SWEEPING: "mopping_after_sweeping",
    CUSTOMIZE: "customize"
  },
  CLEANGENIUS_MODE: {
    VACUUM_AND_MOP: "vacuum_and_mop",
    MOP_AFTER_VACUUM: "mop_after_vacuum"
  },
  CLEANGENIUS: {
    OFF: "off",
    ROUTINE_CLEANING: "routine_cleaning",
    DEEP_CLEANING: "deep_cleaning"
  },
  SELF_CLEAN_FREQUENCY: {
    BY_AREA: "by_area",
    BY_TIME: "by_time",
    BY_ROOM: "by_room"
  }
}, ii = {
  BY_AREA: "By area",
  BY_TIME: "By time",
  BY_ROOM: "By room"
}, Xi = {
  QUIET: "Quiet",
  SILENT: "Silent",
  STANDARD: "Standard",
  STRONG: "Strong",
  TURBO: "Turbo"
}, ai = {
  QUICK: "Quick",
  STANDARD: "Standard",
  INTENSIVE: "Intensive",
  DEEP: "Deep"
}, Rl = {
  SLIGHTLY_DRY: "Slightly dry",
  MOIST: "Moist",
  WET: "Wet"
}, Dl = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High"
}, Cw = {
  ALL: "all"
}, $o = {
  CLEANGENIUS: "CleanGenius",
  CUSTOM: "Custom"
}, kp = {
  MAP_LOCKED: "dreame-vacuum-map-locked",
  CUSTOMIZE_CONFIG: "dreame-vacuum-card:customize_config"
}, zt = {
  MODE: Cw.ALL,
  CLEANING_MODE: be.SWEEPING_AND_MOPPING,
  CLEANGENIUS_MODE: ba.VACUUM_AND_MOP,
  SUCTION_LEVEL: Xi.STANDARD,
  WETNESS_LEVEL: 20,
  CLEANING_ROUTE: ai.STANDARD,
  MAX_SUCTION_POWER: !1,
  SELF_CLEAN_AREA: 20,
  SELF_CLEAN_FREQUENCY: ii.BY_AREA,
  MOP_PAD_HUMIDITY: Rl.MOIST,
  WATER_VOLUME: Dl.MEDIUM,
  SELF_CLEAN_AREA_MIN: 10,
  SELF_CLEAN_AREA_MAX: 35,
  SELF_CLEAN_TIME: 25,
  SELF_CLEAN_TIME_MIN: 10,
  SELF_CLEAN_TIME_MAX: 50
};
let vu = !1;
const te = {
  /** Enable or disable debug logging */
  setDebug: (a) => {
    vu = a;
  },
  /** Check if debug logging is enabled */
  isDebugEnabled: () => vu,
  /** Log debug message (only when debug is enabled) */
  debug: (a, ...i) => {
    vu && console.debug(`[Dreame][${a}]`, ...i);
  },
  /** Log info message (always logged) */
  info: (...a) => {
    console.info("[Dreame]", ...a);
  },
  /** Log warning message (always logged) */
  warn: (...a) => {
    console.warn("[Dreame]", ...a);
  },
  /** Log error message (always logged) */
  error: (...a) => {
    console.error("[Dreame]", ...a);
  }
};
function xw() {
  const a = {
    enableDebug: () => {
      te.setDebug(!0), te.info("Debug logging enabled");
    },
    disableDebug: () => {
      te.setDebug(!1), te.info("Debug logging disabled");
    },
    isDebugEnabled: () => te.isDebugEnabled()
  };
  window.dreameVacuum = a;
}
function Hu(a) {
  const i = R.useCallback(
    (p, v, b) => {
      te.debug("HA", "Service call:", p, v, b), a.callService(p, v, b);
    },
    [a]
  ), o = R.useCallback(
    (p, v) => {
      te.debug("HA", "Select:", p, "→", v);
      const b = {
        entity_id: p,
        option: v
      };
      i(ei.SELECT, zn.SELECT_OPTION, b);
    },
    [i]
  ), l = R.useCallback(
    (p, v) => {
      te.debug("HA", "Switch:", p, "→", v ? "ON" : "OFF");
      const b = v ? zn.TURN_ON : zn.TURN_OFF;
      i(ei.SWITCH, b, { entity_id: p });
    },
    [i]
  ), c = R.useCallback(
    (p, v) => {
      te.debug("HA", "Number:", p, "→", v);
      const b = {
        entity_id: p,
        value: v
      };
      i(ei.NUMBER, zn.SET_VALUE, b);
    },
    [i]
  ), d = R.useCallback(
    (p) => {
      te.debug("HA", "Vacuum Start:", p), i(ei.VACUUM, zn.START, { entity_id: p });
    },
    [i]
  ), _ = R.useCallback(
    (p) => {
      te.debug("HA", "Vacuum Return to base:", p), i(ei.VACUUM, zn.RETURN_TO_BASE, { entity_id: p });
    },
    [i]
  ), m = R.useCallback(
    (p, v) => {
      te.debug("HA", "Vacuum Clean segments:", p, v);
      const b = {
        entity_id: p,
        segments: v
      };
      i(ei.DREAME_VACUUM, zn.VACUUM_CLEAN_SEGMENT, b);
    },
    [i]
  ), h = R.useCallback(
    (p, v) => {
      te.debug("HA", "Vacuum Set fan speed:", p, "→", v), i(ei.VACUUM, zn.SET_FAN_SPEED, {
        entity_id: p,
        fan_speed: v
      });
    },
    [i]
  );
  return {
    setSelectOption: o,
    setSwitch: l,
    setNumber: c,
    startVacuum: d,
    returnToBase: _,
    cleanSegments: m,
    setFanSpeed: h,
    callService: i
  };
}
function Ow(a) {
  switch (a) {
    case be.SWEEPING:
      return Qt.CLEANING_MODE.SWEEPING;
    case be.MOPPING:
      return Qt.CLEANING_MODE.MOPPING;
    case be.SWEEPING_AND_MOPPING:
      return Qt.CLEANING_MODE.SWEEPING_AND_MOPPING;
    case be.MOPPING_AFTER_SWEEPING:
      return Qt.CLEANING_MODE.MOPPING_AFTER_SWEEPING;
    case be.CUSTOMIZE:
      return Qt.CLEANING_MODE.CUSTOMIZE;
    default:
      return a;
  }
}
function Mw(a) {
  switch (a) {
    case ba.VACUUM_AND_MOP:
      return Qt.CLEANGENIUS_MODE.VACUUM_AND_MOP;
    case ba.MOP_AFTER_VACUUM:
      return Qt.CLEANGENIUS_MODE.MOP_AFTER_VACUUM;
    default:
      return a;
  }
}
function Lg(a) {
  switch (a) {
    case ka.OFF:
      return Qt.CLEANGENIUS.OFF;
    case ka.ROUTINE_CLEANING:
      return Qt.CLEANGENIUS.ROUTINE_CLEANING;
    case ka.DEEP_CLEANING:
      return Qt.CLEANGENIUS.DEEP_CLEANING;
    default:
      return a;
  }
}
function Rw(a) {
  switch (a) {
    case ii.BY_AREA:
      return Qt.SELF_CLEAN_FREQUENCY.BY_AREA;
    case ii.BY_TIME:
      return Qt.SELF_CLEAN_FREQUENCY.BY_TIME;
    case ii.BY_ROOM:
      return Qt.SELF_CLEAN_FREQUENCY.BY_ROOM;
    default:
      return a;
  }
}
function Kl(a) {
  return a.toLowerCase();
}
function Iu(a) {
  return a.replace("vacuum.", "");
}
function Bu(a) {
  return R.useMemo(() => {
    const i = Iu(a);
    return {
      base: i,
      cleaningMode: kt("select", i, Fa.CLEANING_MODE.key),
      cleangeniusMode: kt("select", i, Fa.CLEANGENIUS_MODE.key),
      cleangenius: kt("select", i, Fa.CLEANGENIUS.key),
      suctionLevel: kt("select", i, Fa.SUCTION_LEVEL.key),
      waterVolume: kt("select", i, Fa.WATER_VOLUME.key),
      cleaningRoute: kt("select", i, Fa.CLEANING_ROUTE.key),
      maxSuctionPower: kt("switch", i, Uu.MAX_SUCTION_POWER.key),
      wetnessLevel: kt("number", i, Ml.WETNESS_LEVEL.key),
      selfCleanFrequency: kt("select", i, Fa.SELF_CLEAN_FREQUENCY.key),
      selfCleanArea: kt("number", i, Ml.SELF_CLEAN_AREA.key),
      selfCleanTime: kt("number", i, Ml.SELF_CLEAN_TIME.key),
      stateSensor: kt("sensor", i, Ne.STATE.key)
    };
  }, [a]);
}
const Pu = "dreame-vacuum-card:repeat_count";
function Dw() {
  try {
    const a = localStorage.getItem(Pu);
    if (a) {
      const i = parseInt(a, 10);
      if (i >= 1 && i <= 3)
        return i;
    }
  } catch {
  }
  return 1;
}
function jw(a) {
  try {
    localStorage.setItem(Pu, String(a));
  } catch {
  }
}
function Lw() {
  try {
    localStorage.removeItem(Pu);
  } catch {
  }
}
function Uw({ defaultMode: a = zt.MODE } = {}) {
  const [i, o] = R.useState(a), [l, c] = R.useState(/* @__PURE__ */ new Map()), [d, _] = R.useState(null), [m, h] = R.useState(!1), [p, v] = R.useState(!1), [b, w] = R.useState(!1), [z, T] = R.useState(Dw), O = R.useCallback((Y) => {
    te.debug("UI", "Mode changed:", Y), o(Y), c(/* @__PURE__ */ new Map()), _(null);
  }, []), q = R.useCallback((Y, W) => {
    c((ae) => {
      const ie = new Map(ae);
      return ae.has(Y) ? (te.debug("UI", "Room deselected:", { roomId: Y, roomName: W }), ie.delete(Y)) : (te.debug("UI", "Room selected:", { roomId: Y, roomName: W }), ie.set(Y, W)), ie;
    });
  }, []), L = R.useCallback((Y) => {
    te.debug("UI", "Cleaning mode modal:", Y ? "opened" : "closed"), h(Y);
  }, []), U = R.useCallback((Y) => {
    te.debug("UI", "Shortcuts modal:", Y ? "opened" : "closed"), v(Y);
  }, []), Z = R.useCallback((Y) => {
    te.debug("UI", "Settings panel:", Y ? "opened" : "closed"), w(Y);
  }, []), B = R.useCallback((Y) => {
    te.debug("UI", "Zone changed:", Y), _(Y);
  }, []), H = R.useCallback(() => {
    T((Y) => {
      const W = Y % 3 + 1;
      return jw(W), te.debug("UI", "Repeat count cycled to", W), W;
    });
  }, []), F = R.useCallback(() => {
    T(1), Lw(), te.debug("UI", "Repeat count reset to 1");
  }, []);
  return {
    selectedMode: i,
    selectedRooms: l,
    selectedZone: d,
    modalOpened: m,
    shortcutsModalOpened: p,
    settingsPanelOpened: b,
    repeatCount: z,
    setSelectedMode: o,
    setSelectedRooms: c,
    setSelectedZone: B,
    setModalOpened: L,
    setShortcutsModalOpened: U,
    setSettingsPanelOpened: Z,
    handleModeChange: O,
    handleRoomToggle: q,
    cycleRepeatCount: H,
    resetRepeatCount: F
  };
}
const qw = {
  // Common
  common: {
    run: "Run",
    start: "Start",
    stop: "Stop",
    cancel: "Cancel",
    save: "Save",
    apply: "Apply",
    reset: "Reset"
  },
  // Room Selector
  room_selector: {
    title: "Select Rooms",
    selected_count: "{{count}} selected"
  },
  // Map Selector
  map_selector: {
    unknown: "Unknown Map"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "No map available",
    looking_for: "Looking for: {{entity}}",
    room_overlay: "Click on room numbers to select rooms for cleaning",
    zone_overlay_create: "Click on the map to place a cleaning zone",
    zone_overlay_resize: "Drag corners to resize, click elsewhere to reposition",
    clear_zone: "Clear zone",
    switch_to_list: "Switch to list view",
    switch_to_map: "Switch to map view",
    room_list_overlay: "Tap rooms to select for cleaning",
    no_rooms: "No rooms available",
    zoom_in: "Zoom in",
    zoom_out: "Zoom out",
    zoom_reset: "Reset zoom",
    lock_map: "Lock map",
    unlock_map: "Unlock map"
  },
  // Mode Tabs
  modes: {
    room: "Room",
    all: "All",
    zone: "Zone"
  },
  // Action Buttons
  actions: {
    clean: "Clean",
    clean_all: "Clean All",
    clean_rooms: "Clean {{count}} Room",
    clean_rooms_plural: "Clean {{count}} Rooms",
    select_rooms: "Select Rooms",
    zone_clean: "Zone Clean",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    stop_and_dock: "Stop & Dock",
    dock: "Dock"
  },
  // Toast Messages
  toast: {
    selected_room: "Selected {{name}}",
    deselected_room: "Deselected {{name}}",
    paused: "Paused cleaning",
    stopped: "Stopped cleaning",
    docked: "Returning to dock",
    cleaning_started: "Cleaning started",
    resuming: "Resuming cleaning",
    starting_full_clean: "Starting full house cleaning",
    pausing_vacuum: "Pausing vacuum",
    stopping_vacuum: "Stopping vacuum",
    stopping_and_docking: "Stopping and returning to dock",
    vacuum_docking: "Vacuum returning to dock",
    starting_room_clean: "Starting cleaning for {{count}} selected room",
    starting_room_clean_plural: "Starting cleaning for {{count}} selected rooms",
    starting_zone_clean: "Starting zone cleaning",
    select_rooms_first: "Please select rooms to clean first",
    cannot_determine_map: "Cannot determine map dimensions",
    select_zone_first: "Please select a zone on the map"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Selected Rooms:",
    selected_label: "Selected:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Custom: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "View shortcuts",
    repeats_tooltip: "Cleaning passes",
    vac_and_mop: "Vac & Mop",
    mop_after_vac: "Mop after Vac",
    vacuum: "Vacuum",
    mop: "Mop"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Cleaning Mode",
    clean_genius: "CleanGenius",
    custom: "Custom"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Shortcuts",
    no_shortcuts: "No shortcuts available",
    create_hint: "Create shortcuts in the Dreame app to quickly start your favorite cleaning routines"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Cleaning Mode",
    suction_power_title: "Suction Power",
    max_plus_description: "The suction power will be increased to the highest level, which is a single-use mode.",
    wetness_title: "Wetness",
    slightly_dry: "Slightly dry",
    moist: "Moist",
    wet: "Wet",
    water_volume_title: "Water Volume",
    water_low: "Low",
    water_medium: "Medium",
    water_high: "High",
    mop_washing_frequency_title: "Mop-washing frequency",
    route_title: "Route",
    mop_pressure_title: "Mop Pressure",
    mop_temperature_title: "Water Temperature"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Light",
    normal: "Normal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normal",
    warm: "Warm"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Customize",
    description: "Set personalized suction and mopping preferences for each area.",
    set_button: "Set",
    vacuum: "Vacuum",
    mop: "Mop",
    vac_and_mop: "Vac & Mop",
    cycles: "Cycles",
    apply_to_all: "Apply to All Rooms",
    click_room_hint: "Click the single area to change the mode.",
    intelligent_recommendation: "Intelligent Recommendation",
    select_room: "Select Room",
    settings_for: "{{room}} Settings",
    no_rooms: "No rooms available"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Cleaning Mode",
    deep_cleaning: "Deep Cleaning"
  },
  // Header
  header: {
    battery: "Battery",
    status: "Status",
    area: "Area",
    time: "Time"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Quiet",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "By room",
    by_area: "By area",
    by_time: "By time"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Quick",
    standard: "Standard",
    intensive: "Intensive",
    deep: "Deep"
  },
  // Errors
  errors: {
    entity_not_found: "Entity not found: {{entity}}",
    failed_to_load: "Failed to load entity data",
    service_call_failed: "Failed to send command to vacuum",
    entity_unavailable: "Vacuum is unavailable"
  },
  // Settings Panel
  settings: {
    title: "Settings",
    consumables: {
      title: "Consumables",
      main_brush: "Main Brush",
      side_brush: "Side Brush",
      filter: "Filter",
      sensor: "Sensor",
      mop_pad: "Mop Pad",
      silver_ion: "Silver Ion",
      detergent: "Detergent",
      squeegee: "Squeegee",
      tank_filter: "Tank Filter",
      onboard_dirty_water_tank: "Onboard Dirty Water Tank",
      dirty_water_channel: "Dirty Water Channel",
      deodorizer: "Deodorizer",
      wheel: "Wheel",
      scale_inhibitor: "Scale Inhibitor",
      fluffing_roller: "Fluffing Roller",
      roller_mop_filter: "Roller Mop Filter",
      water_outlet_filter: "Water Outlet Filter",
      remaining: "remaining",
      reset: "Reset"
    },
    device_info: {
      title: "Device Info",
      firmware: "Firmware",
      total_area: "Total Cleaned Area",
      total_time: "Total Cleaning Time",
      total_cleans: "Total Cleanings",
      wifi_ssid: "Wi-Fi Network",
      wifi_signal: "Signal Strength",
      ip_address: "IP Address"
    },
    quick_settings: {
      title: "Quick Settings",
      child_lock: "Child Lock",
      child_lock_desc: "Disable physical buttons on device",
      resume_cleaning: "Resume Cleaning",
      resume_cleaning_desc: "Automatically resume cleaning after charging",
      dnd: "Do Not Disturb",
      dnd_desc: "Quiet hours with reduced activity",
      dnd_start: "Start Time",
      dnd_end: "End Time",
      dnd_disable_resume: "Disable Resume",
      dnd_disable_resume_desc: "Do not resume cleaning during DND",
      dnd_disable_auto_empty: "Disable Auto Empty",
      dnd_disable_auto_empty_desc: "Do not auto empty during DND",
      dnd_reduce_volume: "Reduce Volume",
      dnd_reduce_volume_desc: "Lower device volume during DND"
    },
    volume: {
      title: "Volume & Sound",
      volume: "Volume",
      test_sound: "Locate",
      muted: "Muted",
      voice_assistant: "Voice Assistant",
      voice_assistant_desc: "Enable voice announcements and feedback",
      voice_language: "Voice Language",
      voice_language_desc: "Language for voice announcements",
      streaming_voice_prompt: "Streaming Voice Prompt",
      streaming_voice_prompt_desc: "Real-time voice feedback during cleaning"
    },
    carpet: {
      title: "Carpet Settings",
      carpet_recognition: "Carpet Recognition",
      carpet_recognition_desc: "Detect carpets automatically",
      carpet_avoidance: "Carpet Avoidance",
      carpet_avoidance_desc: "Avoid carpets while mopping",
      clean_carpets_first: "Clean Carpets First",
      clean_carpets_first_desc: "Vacuum carpets before mopping floors",
      carpet_boost: "Carpet Boost",
      carpet_boost_desc: "Increase suction power on carpets",
      intensive_cleaning: "Intensive Cleaning",
      intensive_cleaning_desc: "Deep clean carpets with extra passes",
      side_brush_rotate: "Side Brush Rotate",
      side_brush_rotate_desc: "Rotate side brush on carpets",
      sensitivity: "Carpet Sensitivity",
      sensitivity_desc: "Detection sensitivity level",
      sensitivity_low: "Low",
      sensitivity_medium: "Medium",
      sensitivity_high: "High",
      cleaning_mode: "Carpet Cleaning",
      cleaning_mode_desc: "How to handle carpets during cleaning",
      mode_vacuum: "Vacuum",
      mode_vacuum_and_mop: "Vac & Mop",
      mode_avoidance: "Avoid",
      mode_ignore: "Ignore",
      vacuum_mode: "Vacuum Mode",
      vacuum_adaptation: "Mop Lift",
      vacuum_remove_mop: "Remove Mop"
    },
    floor: {
      title: "Floor Settings",
      obstacle_avoidance: "Obstacle Avoidance",
      obstacle_avoidance_desc: "Use sensors to avoid obstacles",
      collision_avoidance: "Collision Avoidance",
      collision_avoidance_desc: "Slow down near walls and furniture",
      auto_mount_mop: "Auto Mount Mop",
      auto_mount_mop_desc: "Automatically attach mop pad when needed",
      auto_recleaning: "Auto Re-Cleaning",
      auto_recleaning_desc: "Automatically re-clean missed areas",
      recleaning_off: "Off",
      recleaning_in_deep_mode: "In Deep Mode",
      recleaning_in_all_modes: "In All Modes",
      stain_avoidance: "Stain Avoidance",
      stain_avoidance_desc: "Avoid detected stains",
      tight_mopping: "Tight Mopping",
      tight_mopping_desc: "Mop closer to walls and edges",
      floor_direction_cleaning: "Floor Direction Cleaning",
      floor_direction_cleaning_desc: "Clean along the floor grain direction",
      large_particles_boost: "Large Particles Boost",
      large_particles_boost_desc: "Increase suction for large debris",
      pet_focused_cleaning: "Pet Focused Cleaning",
      pet_focused_cleaning_desc: "Extra cleaning in pet areas",
      low_lying_area_frequency: "Low-Lying Area Frequency",
      low_lying_area_frequency_desc: "How often to clean low-lying areas under furniture"
    },
    edge_corner: {
      title: "Edge & Corner",
      side_reach: "Side Reach",
      side_reach_desc: "Extend side brush to reach edges",
      mop_extend: "Mop Extend",
      mop_extend_desc: "Extend mop pad to clean edges and corners",
      gap_cleaning: "Gap Cleaning",
      gap_cleaning_desc: "Clean narrow gaps between furniture",
      mopping_under: "Mop Under Furniture",
      mopping_under_desc: "Extend mop to clean under low furniture",
      extend_frequency: "Extend Frequency",
      extend_frequency_desc: "How often to extend mop for edge cleaning",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligent",
      frequency_high: "High"
    },
    dock: {
      title: "Dock Settings",
      self_clean: "Self Clean",
      self_clean_desc: "Auto wash mop after cleaning",
      auto_empty_mode: "Auto Empty Mode",
      auto_empty_mode_desc: "When to automatically empty the dustbin",
      auto_empty_frequency: "Auto Empty Frequency",
      auto_empty_frequency_desc: "How many cleanings before auto-emptying",
      empty_off: "Off",
      empty_standard: "Standard",
      empty_high_frequency: "High Frequency",
      empty_low_frequency: "Low Frequency",
      auto_detergent: "Auto Add Detergent",
      auto_detergent_desc: "Automatically add detergent when washing",
      mop_washing_with_detergent: "Mop Washing With Detergent",
      mop_washing_with_detergent_desc: "Use detergent when washing mop pad",
      mopping_with_detergent: "Mopping With Detergent",
      mopping_with_detergent_desc: "Use detergent while mopping floors",
      water_electrolysis: "Water Electrolysis",
      water_electrolysis_desc: "Sterilize water using electrolysis",
      auto_water_refilling: "Auto Water Refilling",
      auto_water_refilling_desc: "Automatically refill clean water tank",
      auto_dust_collecting: "Auto Dust Collecting",
      auto_dust_collecting_desc: "Automatically empty dustbin after cleaning",
      smart_washing: "Smart Mop Washing",
      smart_washing_desc: "Intelligently adjust washing based on dirt level",
      mop_wash_level: "Mop Wash Level",
      mop_wash_level_desc: "Intensity of mop pad washing",
      washing_mode: "Washing Mode",
      washing_mode_desc: "Intensity of mop pad washing",
      washing_light: "Light",
      washing_standard: "Standard",
      washing_deep: "Deep",
      water_temperature: "Water Temperature",
      water_temperature_desc: "Temperature for mop washing",
      temp_normal: "Normal",
      temp_mild: "Mild",
      temp_warm: "Warm",
      temp_hot: "Hot",
      auto_drying: "Auto Drying",
      auto_drying_desc: "Automatically dry mop pad after cleaning",
      drying_time: "Drying Time",
      drying_time_desc: "Duration for mop pad drying",
      auto_rewashing: "Auto Rewashing",
      auto_rewashing_desc: "Automatically rewash mop when dirty",
      rewashing_off: "Off",
      rewashing_in_deep_mode: "In Deep Mode",
      rewashing_in_all_modes: "In All Modes",
      off_peak_charging: "Off-Peak Charging",
      off_peak_charging_desc: "Charge during off-peak hours to save energy",
      off_peak_charging_start: "Start Time",
      off_peak_charging_end: "End Time",
      station_cleaning: "Station Cleaning",
      station_cleaning_desc: "Clean the base station",
      clean_now: "Clean Now",
      self_repair: "Self Repair",
      self_repair_desc: "Run station self-repair diagnostics",
      repair_now: "Repair",
      scraper_frequency: "Scraper Frequency",
      scraper_frequency_desc: "How often to clean the rubber scraper"
    },
    ai_detection: {
      title: "AI & Detection",
      intelligent_recognition: "Intelligent Recognition",
      intelligent_recognition_desc: "AI-powered environment recognition",
      ai_obstacle_detection: "AI Obstacle Detection",
      ai_obstacle_detection_desc: "Use AI to identify and avoid obstacles",
      fuzzy_obstacle_detection: "Fuzzy Obstacle Detection",
      fuzzy_obstacle_detection_desc: "Detect soft or unclear obstacles",
      ai_obstacle_image_upload: "Obstacle Image Upload",
      ai_obstacle_image_upload_desc: "Upload obstacle images for analysis",
      ai_obstacle_picture: "Obstacle Picture",
      ai_obstacle_picture_desc: "Take pictures of detected obstacles",
      ai_pet_detection: "Pet Detection",
      ai_pet_detection_desc: "Detect and avoid pets",
      ai_pet_avoidance: "Pet Avoidance",
      ai_pet_avoidance_desc: "Actively avoid detected pets",
      pet_focused_detection: "Pet Focused Detection",
      pet_focused_detection_desc: "Enhanced detection for pet areas",
      pet_picture: "Pet Picture",
      pet_picture_desc: "Take pictures of detected pets",
      ai_human_detection: "Human Detection",
      ai_human_detection_desc: "Detect and avoid humans",
      human_follow: "Human Follow",
      human_follow_desc: "Follow humans for interactive cleaning",
      ai_furniture_detection: "Furniture Detection",
      ai_furniture_detection_desc: "Detect and navigate around furniture",
      ai_fluid_detection: "Fluid Detection",
      ai_fluid_detection_desc: "Detect and avoid liquids",
      fill_light: "Fill Light",
      fill_light_desc: "Use fill light for better detection",
      camera_light_auto: "Auto Camera Brightness",
      camera_light_auto_desc: "Automatically adjust camera light brightness",
      camera_light_brightness: "Camera Light Brightness",
      camera_light_brightness_desc: "Manual camera light brightness level"
    },
    station_controls: {
      title: "Station Controls",
      self_clean: "Self Clean",
      self_clean_desc: "Start mop pad washing cycle",
      manual_drying: "Manual Drying",
      manual_drying_desc: "Start mop pad drying cycle",
      water_tank_draining: "Drain Water Tank",
      water_tank_draining_desc: "Drain dirty water from tank",
      base_station_cleaning: "Clean Station",
      base_station_cleaning_desc: "Clean the base station",
      empty_water_tank: "Empty Water Tank",
      empty_water_tank_desc: "Empty the water collection tank",
      start_auto_empty: "Auto Empty",
      start_auto_empty_desc: "Start automatic dustbin emptying",
      start_recleaning: "Reclean",
      start_recleaning_desc: "Start recleaning missed areas",
      clear_warning: "Clear Warning",
      clear_warning_desc: "Clear current warning messages"
    },
    map: {
      title: "Map Settings",
      multi_floor: "Multi-Floor Map",
      multi_floor_desc: "Enable support for multiple floor maps",
      rotation: "Map Rotation",
      rotation_desc: "Rotate map orientation",
      mapping_actions: "Mapping Actions",
      start_mapping: "Start Mapping",
      start_fast_mapping: "Fast Mapping"
    }
  }
}, Gw = {
  // Common
  common: {
    run: "Ausführen",
    start: "Start",
    stop: "Stopp",
    cancel: "Abbrechen",
    save: "Speichern",
    apply: "Anwenden",
    reset: "Zurücksetzen"
  },
  // Room Selector
  room_selector: {
    title: "Räume auswählen",
    selected_count: "{{count}} ausgewählt"
  },
  // Map Selector
  map_selector: {
    unknown: "Unbekannte Karte"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Keine Karte verfügbar",
    looking_for: "Suche nach: {{entity}}",
    room_overlay: "Klicken Sie auf Raumnummern, um Räume zum Reinigen auszuwählen",
    zone_overlay_create: "Klicken Sie auf die Karte, um eine Reinigungszone zu platzieren",
    zone_overlay_resize: "Ziehen Sie an den Ecken, um die Größe zu ändern, oder klicken Sie woanders, um neu zu positionieren",
    clear_zone: "Zone löschen",
    switch_to_list: "Zur Listenansicht wechseln",
    switch_to_map: "Zur Kartenansicht wechseln",
    room_list_overlay: "Räume antippen, um sie für die Reinigung auszuwählen",
    no_rooms: "Keine Räume verfügbar",
    zoom_in: "Vergrößern",
    zoom_out: "Verkleinern",
    zoom_reset: "Zoom zurücksetzen",
    lock_map: "Karte sperren",
    unlock_map: "Karte entsperren"
  },
  // Mode Tabs
  modes: {
    room: "Raum",
    all: "Alle",
    zone: "Zone"
  },
  // Action Buttons
  actions: {
    clean: "Reinigen",
    clean_all: "Alles reinigen",
    clean_rooms: "{{count}} Raum reinigen",
    clean_rooms_plural: "{{count}} Räume reinigen",
    select_rooms: "Räume auswählen",
    zone_clean: "Zone reinigen",
    pause: "Pause",
    resume: "Fortsetzen",
    stop: "Stopp",
    stop_and_dock: "Stopp & Andocken",
    dock: "Andocken"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} ausgewählt",
    deselected_room: "{{name}} abgewählt",
    paused: "Reinigung pausiert",
    stopped: "Reinigung gestoppt",
    docked: "Kehrt zur Station zurück",
    cleaning_started: "Reinigung gestartet",
    resuming: "Reinigung wird fortgesetzt",
    starting_full_clean: "Vollständige Hausreinigung gestartet",
    pausing_vacuum: "Saugroboter wird pausiert",
    stopping_vacuum: "Saugroboter wird gestoppt",
    stopping_and_docking: "Stoppen und zur Basis zurückkehren",
    vacuum_docking: "Saugroboter kehrt zur Station zurück",
    starting_room_clean: "Reinigung für {{count}} ausgewählten Raum wird gestartet",
    starting_room_clean_plural: "Reinigung für {{count}} ausgewählte Räume wird gestartet",
    starting_zone_clean: "Zonenreinigung wird gestartet",
    select_rooms_first: "Bitte wählen Sie zuerst Räume zum Reinigen aus",
    cannot_determine_map: "Kartenabmessungen können nicht ermittelt werden",
    select_zone_first: "Bitte wählen Sie zuerst eine Zone auf der Karte aus"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Ausgewählte Räume:",
    selected_label: "Ausgewählt:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Benutzerdefiniert: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Verknüpfungen anzeigen",
    repeats_tooltip: "Reinigungsdurchgänge",
    vac_and_mop: "Saugen & Wischen",
    mop_after_vac: "Wischen nach Saugen",
    vacuum: "Saugen",
    mop: "Wischen"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Reinigungsmodus",
    clean_genius: "CleanGenius",
    custom: "Benutzerdefiniert"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Verknüpfungen",
    no_shortcuts: "Keine Verknüpfungen verfügbar",
    create_hint: "Erstellen Sie Verknüpfungen in der Dreame-App, um Ihre bevorzugten Reinigungsroutinen schnell zu starten"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Reinigungsmodus",
    suction_power_title: "Saugleistung",
    max_plus_description: "Die Saugkraft wird auf die höchste Stufe erhöht. Dies ist ein Einmal-Modus.",
    wetness_title: "Feuchtigkeit",
    slightly_dry: "Leicht trocken",
    moist: "Feucht",
    wet: "Nass",
    water_volume_title: "Wassermenge",
    water_low: "Niedrig",
    water_medium: "Mittel",
    water_high: "Hoch",
    mop_washing_frequency_title: "Wischmopp-Waschfrequenz",
    route_title: "Route",
    mop_pressure_title: "Wischdruck",
    mop_temperature_title: "Wassertemperatur"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Leicht",
    normal: "Normal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normal",
    warm: "Warm"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Anpassen",
    description: "Personalisierte Saug- und Wischeinstellungen für jeden Bereich festlegen.",
    set_button: "Einstellen",
    vacuum: "Saugen",
    mop: "Wischen",
    vac_and_mop: "Saugen & Wischen",
    cycles: "Durchgänge",
    apply_to_all: "Auf alle Räume anwenden",
    click_room_hint: "Klicken Sie auf einen Bereich, um den Modus zu ändern.",
    intelligent_recommendation: "Intelligente Empfehlung",
    select_room: "Raum auswählen",
    settings_for: "{{room}} Einstellungen",
    no_rooms: "Keine Räume verfügbar"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Reinigungsmodus",
    deep_cleaning: "Tiefenreinigung"
  },
  // Header
  header: {
    battery: "Batterie",
    status: "Status",
    area: "Fläche",
    time: "Zeit"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Leise",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Nach Raum",
    by_area: "Nach Fläche",
    by_time: "Nach Zeit"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Schnell",
    standard: "Standard",
    intensive: "Intensiv",
    deep: "Tief"
  },
  // Errors
  errors: {
    entity_not_found: "Entität nicht gefunden: {{entity}}",
    failed_to_load: "Entitätsdaten konnten nicht geladen werden",
    service_call_failed: "Befehl konnte nicht an den Staubsauger gesendet werden",
    entity_unavailable: "Staubsauger nicht verfügbar"
  },
  // Settings Panel
  settings: {
    title: "Einstellungen",
    consumables: {
      title: "Verbrauchsmaterialien",
      main_brush: "Hauptbürste",
      side_brush: "Seitenbürste",
      filter: "Filter",
      sensor: "Sensor",
      mop_pad: "Wischpad",
      silver_ion: "Silberionen",
      detergent: "Reinigungsmittel",
      squeegee: "Abzieher",
      tank_filter: "Tankfilter",
      onboard_dirty_water_tank: "Onboard-Schmutzwassertank",
      dirty_water_channel: "Schmutzwasserkanal",
      deodorizer: "Deodorizer",
      wheel: "Rad",
      scale_inhibitor: "Kalkschutz",
      fluffing_roller: "Auflockerungswalze",
      roller_mop_filter: "Rollenmopp-Filter",
      water_outlet_filter: "Wasserauslassfilter",
      remaining: "verbleibend",
      reset: "Zurücksetzen"
    },
    device_info: {
      title: "Geräteinformationen",
      firmware: "Firmware",
      total_area: "Gesamtreinigungsfläche",
      total_time: "Gesamtreinigungszeit",
      total_cleans: "Gesamte Reinigungen",
      wifi_ssid: "WLAN-Netzwerk",
      wifi_signal: "Signalstärke",
      ip_address: "IP-Adresse"
    },
    quick_settings: {
      title: "Schnelleinstellungen",
      child_lock: "Kindersicherung",
      child_lock_desc: "Tasten am Gerät deaktivieren",
      resume_cleaning: "Reinigung fortsetzen",
      resume_cleaning_desc: "Reinigung nach dem Laden automatisch fortsetzen",
      dnd: "Nicht stören",
      dnd_desc: "Ruhezeiten mit reduzierter Aktivität",
      dnd_start: "Startzeit",
      dnd_end: "Endzeit",
      dnd_disable_resume: "Fortsetzen deaktivieren",
      dnd_disable_resume_desc: "Reinigung während DND nicht fortsetzen",
      dnd_disable_auto_empty: "Auto-Entleerung deaktivieren",
      dnd_disable_auto_empty_desc: "Während DND nicht automatisch entleeren",
      dnd_reduce_volume: "Lautstärke reduzieren",
      dnd_reduce_volume_desc: "Gerätelautstärke während DND verringern"
    },
    volume: {
      title: "Lautstärke & Ton",
      volume: "Lautstärke",
      test_sound: "Finden",
      muted: "Stumm",
      voice_assistant: "Sprachassistent",
      voice_assistant_desc: "Sprachansagen und Feedback aktivieren",
      voice_language: "Sprachsprache",
      voice_language_desc: "Sprache für Ansagen",
      streaming_voice_prompt: "Streaming-Sprachansage",
      streaming_voice_prompt_desc: "Echtzeit-Sprachfeedback während der Reinigung"
    },
    carpet: {
      title: "Teppich-Einstellungen",
      carpet_recognition: "Teppicherkennung",
      carpet_recognition_desc: "Teppiche automatisch erkennen",
      carpet_avoidance: "Teppichvermeidung",
      carpet_avoidance_desc: "Teppiche beim Wischen vermeiden",
      clean_carpets_first: "Teppiche zuerst reinigen",
      clean_carpets_first_desc: "Teppiche vor dem Wischen saugen",
      carpet_boost: "Teppich-Boost",
      carpet_boost_desc: "Saugkraft auf Teppichen erhöhen",
      intensive_cleaning: "Intensivreinigung",
      intensive_cleaning_desc: "Teppiche mit extra Durchgängen reinigen",
      side_brush_rotate: "Seitenbürste drehen",
      side_brush_rotate_desc: "Seitenbürste auf Teppichen drehen",
      sensitivity: "Teppich-Empfindlichkeit",
      sensitivity_desc: "Erkennungsempfindlichkeit",
      sensitivity_low: "Niedrig",
      sensitivity_medium: "Mittel",
      sensitivity_high: "Hoch",
      cleaning_mode: "Teppichreinigung",
      cleaning_mode_desc: "Verhalten bei Teppichen während der Reinigung",
      mode_vacuum: "Saugen",
      mode_vacuum_and_mop: "Saug & Wisch",
      mode_avoidance: "Vermeiden",
      mode_ignore: "Ignorieren",
      vacuum_mode: "Saugmodus",
      vacuum_adaptation: "Mopp anheben",
      vacuum_remove_mop: "Mopp entfernen"
    },
    floor: {
      title: "Boden-Einstellungen",
      obstacle_avoidance: "Hindernisvermeidung",
      obstacle_avoidance_desc: "Sensoren zur Hindernisvermeidung verwenden",
      collision_avoidance: "Kollisionsvermeidung",
      collision_avoidance_desc: "Langsamer an Wänden und Möbeln",
      auto_mount_mop: "Auto-Mopp montieren",
      auto_mount_mop_desc: "Moppaufsatz automatisch anbringen",
      auto_recleaning: "Auto-Nachreinigung",
      auto_recleaning_desc: "Verpasste Bereiche automatisch nachreinigen",
      recleaning_off: "Aus",
      recleaning_in_deep_mode: "Im Tiefenmodus",
      recleaning_in_all_modes: "In allen Modi",
      stain_avoidance: "Fleckenvermeidung",
      stain_avoidance_desc: "Erkannte Flecken vermeiden",
      tight_mopping: "Gründliches Wischen",
      tight_mopping_desc: "Näher an Wänden und Kanten wischen",
      floor_direction_cleaning: "Bodenrichtungsreinigung",
      floor_direction_cleaning_desc: "Entlang der Bodenmaserung reinigen",
      large_particles_boost: "Großpartikel-Boost",
      large_particles_boost_desc: "Saugleistung für große Partikel erhöhen",
      pet_focused_cleaning: "Haustier-fokussierte Reinigung",
      pet_focused_cleaning_desc: "Extra Reinigung in Haustierbereichen",
      low_lying_area_frequency: "Niedrigbereich-Häufigkeit",
      low_lying_area_frequency_desc: "Wie oft niedrige Bereiche unter Möbeln gereinigt werden"
    },
    edge_corner: {
      title: "Kanten & Ecken",
      side_reach: "Seitenreichweite",
      side_reach_desc: "Seitenbürste für Kanten ausfahren",
      mop_extend: "Mopp ausfahren",
      mop_extend_desc: "Mopp für Kanten und Ecken ausfahren",
      gap_cleaning: "Spaltenreinigung",
      gap_cleaning_desc: "Enge Spalten zwischen Möbeln reinigen",
      mopping_under: "Unter Möbeln wischen",
      mopping_under_desc: "Mopp unter niedrige Möbel ausfahren",
      extend_frequency: "Ausfahrhäufigkeit",
      extend_frequency_desc: "Wie oft der Mopp für Kantenreinigung ausfahren soll",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligent",
      frequency_high: "Hoch"
    },
    dock: {
      title: "Dock-Einstellungen",
      self_clean: "Selbstreinigung",
      self_clean_desc: "Mopp nach Reinigung automatisch waschen",
      auto_empty_mode: "Auto-Entleerungsmodus",
      auto_empty_mode_desc: "Wann der Staubbehälter automatisch entleert werden soll",
      auto_empty_frequency: "Auto-Entleerungsfrequenz",
      auto_empty_frequency_desc: "Anzahl der Reinigungen vor automatischer Entleerung",
      empty_off: "Aus",
      empty_standard: "Standard",
      empty_high_frequency: "Hohe Frequenz",
      empty_low_frequency: "Niedrige Frequenz",
      auto_detergent: "Auto Reinigungsmittel",
      auto_detergent_desc: "Automatisch Reinigungsmittel beim Waschen hinzufügen",
      mop_washing_with_detergent: "Moppwäsche mit Reinigungsmittel",
      mop_washing_with_detergent_desc: "Reinigungsmittel beim Waschen des Mopps verwenden",
      mopping_with_detergent: "Wischen mit Reinigungsmittel",
      mopping_with_detergent_desc: "Reinigungsmittel beim Wischen des Bodens verwenden",
      water_electrolysis: "Wasserelektrolyse",
      water_electrolysis_desc: "Wasser durch Elektrolyse sterilisieren",
      auto_water_refilling: "Auto Wassernachfüllung",
      auto_water_refilling_desc: "Frischwassertank automatisch nachfüllen",
      auto_dust_collecting: "Auto Staubsammlung",
      auto_dust_collecting_desc: "Staubbehälter nach Reinigung automatisch entleeren",
      smart_washing: "Intelligentes Waschen",
      smart_washing_desc: "Waschen intelligent an Verschmutzung anpassen",
      mop_wash_level: "Mopp-Waschstufe",
      mop_wash_level_desc: "Intensität der Moppwäsche",
      washing_mode: "Waschmodus",
      washing_mode_desc: "Intensität der Moppwäsche",
      washing_light: "Leicht",
      washing_standard: "Standard",
      washing_deep: "Intensiv",
      water_temperature: "Wassertemperatur",
      water_temperature_desc: "Temperatur für die Moppwäsche",
      temp_normal: "Normal",
      temp_mild: "Mild",
      temp_warm: "Warm",
      temp_hot: "Heiß",
      auto_drying: "Auto-Trocknung",
      auto_drying_desc: "Mopp nach der Reinigung automatisch trocknen",
      drying_time: "Trocknungszeit",
      drying_time_desc: "Dauer der Mopptrocknung",
      auto_rewashing: "Auto-Nachwaschen",
      auto_rewashing_desc: "Mopp bei Verschmutzung automatisch nachwaschen",
      rewashing_off: "Aus",
      rewashing_in_deep_mode: "Im Tiefenmodus",
      rewashing_in_all_modes: "In allen Modi",
      off_peak_charging: "Schwachlastladen",
      off_peak_charging_desc: "Während Schwachlastzeiten laden um Energie zu sparen",
      off_peak_charging_start: "Startzeit",
      off_peak_charging_end: "Endzeit",
      station_cleaning: "Station reinigen",
      station_cleaning_desc: "Die Basisstation reinigen",
      clean_now: "Jetzt reinigen",
      self_repair: "Selbstreparatur",
      self_repair_desc: "Stations-Selbstdiagnose ausführen",
      repair_now: "Reparieren",
      scraper_frequency: "Schaber-Häufigkeit",
      scraper_frequency_desc: "Wie oft der Gummischaber gereinigt wird"
    },
    ai_detection: {
      title: "KI & Erkennung",
      intelligent_recognition: "Intelligente Erkennung",
      intelligent_recognition_desc: "KI-gestützte Umgebungserkennung",
      ai_obstacle_detection: "KI-Hinderniserkennung",
      ai_obstacle_detection_desc: "KI zur Erkennung und Vermeidung von Hindernissen nutzen",
      fuzzy_obstacle_detection: "Unscharfe Hinderniserkennung",
      fuzzy_obstacle_detection_desc: "Weiche oder undeutliche Hindernisse erkennen",
      ai_obstacle_image_upload: "Hindernis-Bilder hochladen",
      ai_obstacle_image_upload_desc: "Hindernisbilder zur Analyse hochladen",
      ai_obstacle_picture: "Hindernisbild",
      ai_obstacle_picture_desc: "Bilder von erkannten Hindernissen aufnehmen",
      ai_pet_detection: "Haustiererkennung",
      ai_pet_detection_desc: "Haustiere erkennen und vermeiden",
      ai_pet_avoidance: "Haustiervermeidung",
      ai_pet_avoidance_desc: "Erkannte Haustiere aktiv vermeiden",
      pet_focused_detection: "Haustier-fokussierte Erkennung",
      pet_focused_detection_desc: "Verbesserte Erkennung für Haustierbereiche",
      pet_picture: "Haustierbild",
      pet_picture_desc: "Bilder von erkannten Haustieren aufnehmen",
      ai_human_detection: "Personenerkennung",
      ai_human_detection_desc: "Personen erkennen und vermeiden",
      human_follow: "Person folgen",
      human_follow_desc: "Personen für interaktive Reinigung folgen",
      ai_furniture_detection: "Möbelerkennung",
      ai_furniture_detection_desc: "Möbel erkennen und umfahren",
      ai_fluid_detection: "Flüssigkeitserkennung",
      ai_fluid_detection_desc: "Flüssigkeiten erkennen und vermeiden",
      fill_light: "Zusatzlicht",
      fill_light_desc: "Zusatzlicht für bessere Erkennung nutzen",
      camera_light_auto: "Auto-Kamerahelligkeit",
      camera_light_auto_desc: "Kameralicht-Helligkeit automatisch anpassen",
      camera_light_brightness: "Kameralicht-Helligkeit",
      camera_light_brightness_desc: "Manuelle Kameralicht-Helligkeit"
    },
    station_controls: {
      title: "Stationssteuerung",
      self_clean: "Selbstreinigung",
      self_clean_desc: "Wischmoppwaschzyklus starten",
      manual_drying: "Manuelle Trocknung",
      manual_drying_desc: "Wischmopp-Trockenzyklus starten",
      water_tank_draining: "Wassertank entleeren",
      water_tank_draining_desc: "Schmutzwasser aus dem Tank ablassen",
      base_station_cleaning: "Station reinigen",
      base_station_cleaning_desc: "Die Basisstation reinigen",
      empty_water_tank: "Wassertank leeren",
      empty_water_tank_desc: "Den Wassersammelbehälter leeren",
      start_auto_empty: "Auto-Entleerung",
      start_auto_empty_desc: "Automatische Staubbehälter-Entleerung starten",
      start_recleaning: "Nachreinigung",
      start_recleaning_desc: "Nachreinigung verpasster Bereiche starten",
      clear_warning: "Warnung löschen",
      clear_warning_desc: "Aktuelle Warnmeldungen löschen"
    },
    map: {
      title: "Karten-Einstellungen",
      multi_floor: "Mehrere Etagen",
      multi_floor_desc: "Unterstützung für mehrere Etagenkarten aktivieren",
      rotation: "Kartenrotation",
      rotation_desc: "Kartenausrichtung drehen",
      mapping_actions: "Kartierungsaktionen",
      start_mapping: "Kartierung starten",
      start_fast_mapping: "Schnellkartierung"
    }
  }
}, Hw = {
  // Common
  common: {
    run: "Запустить",
    start: "Старт",
    stop: "Стоп",
    cancel: "Отмена",
    save: "Сохранить",
    apply: "Применить",
    reset: "Сбросить"
  },
  // Room Selector
  room_selector: {
    title: "Выбор комнат",
    selected_count: "{{count}} выбрано"
  },
  // Map Selector
  map_selector: {
    unknown: "Неизвестная карта"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Нет доступной карты",
    looking_for: "Обнаружение: {{entity}}",
    room_overlay: "Кликните на номера комнат чтобы выбрать комнаты для убокри",
    zone_overlay_create: "Кликните на карту для добавления зоны уборки",
    zone_overlay_resize: "Потяните за углы для изменения размеры, кликните на любом месте для новой зоны",
    clear_zone: "Уборка зоны",
    switch_to_list: "Переключить на список",
    switch_to_map: "Переключить на карту",
    room_list_overlay: "Нажмите на комнаты для выбора уборки",
    no_rooms: "Нет доступных комнат",
    zoom_in: "Увеличить",
    zoom_out: "Уменьшить",
    zoom_reset: "Сбросить масштаб",
    lock_map: "Заблокировать карту",
    unlock_map: "Разблокировать карту"
  },
  // Mode Tabs
  modes: {
    room: "Комната",
    all: "Всё",
    zone: "Зона"
  },
  // Action Buttons
  actions: {
    clean: "Очистка",
    clean_all: "Очистка всего",
    clean_rooms: "Очистка {{count}} комнаты",
    clean_rooms_plural: "Очистка {{count}} комнат",
    select_rooms: "Выбор комнат",
    zone_clean: "Уборка зоны",
    pause: "Пауза",
    resume: "Продолжить",
    stop: "Стоп",
    stop_and_dock: "Стоп и на базу",
    dock: "Возврат на базу"
  },
  // Toast Messages
  toast: {
    selected_room: "Выбраны {{name}}",
    deselected_room: "Исключены {{name}}",
    paused: "Уборки приостановлена",
    stopped: "Уборка остановлена",
    docked: "Возвращение на базу",
    cleaning_started: "Уборка начата",
    resuming: "Продолжение уборки",
    starting_full_clean: "Начинается полная уборка дома",
    pausing_vacuum: "Приостановка пылесоса",
    stopping_vacuum: "Остановка пылесоса",
    stopping_and_docking: "Остановка и возврат на базу",
    vacuum_docking: "Пылесос возвращается на базу",
    starting_room_clean: "Начало уборки {{count}} выбранной комнаты",
    starting_room_clean_plural: "Начало уборки {{count}} выбранных комнат",
    starting_zone_clean: "Начало зональной уборки",
    select_rooms_first: "Пожалуйста, сначала выберите комнаты с которых начать",
    cannot_determine_map: "Не удаётся распознать размеры карты",
    select_zone_first: "Пожалуйста, выберите зону на карте"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Выбранные комнаты:",
    selected_label: "Выбрано:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Настроить уборку: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Посмотреть шорткаты",
    repeats_tooltip: "Количество проходов",
    vac_and_mop: "Сухая и влажная",
    mop_after_vac: "Влажная после сухой",
    vacuum: "Сухая уборка",
    mop: "Влажная уборка"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Режим уборки",
    clean_genius: "CleanGenius",
    custom: "Настроить"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Шорткаты",
    no_shortcuts: "Нет доступных шорткатов",
    create_hint: "Создайте шорткаты в приложении Dreame для быстрого выбора ваших любимых процедур "
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Режим уборки",
    suction_power_title: "Мощность всасывания",
    max_plus_description: "Мощность всасывания будет увеличена до максимального уровня, что соответствует режиму одноразового использования.",
    wetness_title: "Влажность",
    slightly_dry: "Слегка сухая",
    moist: "Влажная",
    wet: "Мокрая",
    water_volume_title: "Объём воды",
    water_low: "Низкий",
    water_medium: "Средний",
    water_high: "Высокий",
    mop_washing_frequency_title: "Периодичность промывки швабры",
    route_title: "Маршрут",
    mop_pressure_title: "Давление швабры",
    mop_temperature_title: "Температура воды"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Лёгкое",
    normal: "Нормальное"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Обычная",
    warm: "Тёплая"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Настроить",
    description: "Установите персонализированные настройки всасывания и влажности для каждой зоны.",
    set_button: "Установить",
    vacuum: "Пылесос",
    mop: "Швабра",
    vac_and_mop: "Пылесос и швабра",
    cycles: "Циклы",
    apply_to_all: "Применить ко всем комнатам",
    click_room_hint: "Нажмите на зону, чтобы изменить режим.",
    intelligent_recommendation: "Умная рекомендация",
    select_room: "Выберите комнату",
    settings_for: "Настройки {{room}}",
    no_rooms: "Комнаты не найдены"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Режим уборки",
    deep_cleaning: "Тщательная уборка"
  },
  // Header
  header: {
    battery: "Батарея",
    status: "Статус",
    area: "Площадь",
    time: "Время"
  },
  // Units
  units: {
    square_meters: "м²",
    minutes: "мин",
    minutes_short: "м",
    percent: "%",
    decibels: "дБм"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Тихий",
    standard: "Стандартный",
    strong: "Турбо",
    turbo: "Макс"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "По комнате",
    by_area: "По площади",
    by_time: "По времени"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Быстрый",
    standard: "Стандартный",
    intensive: "Интенсивный",
    deep: "Глубокий"
  },
  // Errors
  errors: {
    entity_not_found: "Сущность не найдена: {{entity}}",
    failed_to_load: "Не удалось загрузить данные сущности",
    service_call_failed: "Не удалось отправить команду пылесосу",
    entity_unavailable: "Пылесос недоступен"
  },
  // Settings Panel
  settings: {
    title: "Настройки",
    consumables: {
      title: "Расходные материалы",
      main_brush: "Основная щётка",
      side_brush: "Боковая щётка",
      filter: "Фильтр",
      sensor: "Датчик",
      mop_pad: "Моп",
      silver_ion: "Серебряный ион",
      detergent: "Моющее средство",
      squeegee: "Скребок",
      tank_filter: "Фильтр бака",
      onboard_dirty_water_tank: "Бортовой бак грязной воды",
      dirty_water_channel: "Канал грязной воды",
      deodorizer: "Дезодорант",
      wheel: "Колесо",
      scale_inhibitor: "Средство от накипи",
      fluffing_roller: "Взбивающий ролик",
      roller_mop_filter: "Фильтр роликового мопа",
      water_outlet_filter: "Фильтр выхода воды",
      remaining: "осталось",
      reset: "Сбросить"
    },
    device_info: {
      title: "Информация об устройстве",
      firmware: "Прошивка",
      total_area: "Общая площадь уборки",
      total_time: "Общее время уборки",
      total_cleans: "Всего уборок",
      wifi_ssid: "Сеть Wi-Fi",
      wifi_signal: "Уровень сигнала",
      ip_address: "IP-адрес"
    },
    quick_settings: {
      title: "Быстрые настройки",
      child_lock: "Блокировка от детей",
      child_lock_desc: "Отключить кнопки на устройстве",
      resume_cleaning: "Продолжить уборку",
      resume_cleaning_desc: "Автоматически продолжить уборку после зарядки",
      dnd: "Не беспокоить",
      dnd_desc: "Тихие часы с ограниченной активностью",
      dnd_start: "Время начала",
      dnd_end: "Время окончания",
      dnd_disable_resume: "Отключить продолжение",
      dnd_disable_resume_desc: "Не продолжать уборку в режиме DND",
      dnd_disable_auto_empty: "Отключить авто-опустошение",
      dnd_disable_auto_empty_desc: "Не опустошать автоматически в режиме DND",
      dnd_reduce_volume: "Уменьшить громкость",
      dnd_reduce_volume_desc: "Уменьшить громкость устройства в режиме DND"
    },
    volume: {
      title: "Громкость и звук",
      volume: "Громкость",
      test_sound: "Найти",
      muted: "Без звука",
      voice_assistant: "Голосовой помощник",
      voice_assistant_desc: "Включить голосовые объявления и обратную связь",
      voice_language: "Язык голоса",
      voice_language_desc: "Язык голосовых объявлений",
      streaming_voice_prompt: "Потоковые голосовые подсказки",
      streaming_voice_prompt_desc: "Голосовая обратная связь в реальном времени во время уборки"
    },
    carpet: {
      title: "Настройки ковров",
      carpet_recognition: "Распознавание ковров",
      carpet_recognition_desc: "Автоматически распознавать ковры",
      carpet_avoidance: "Избегание ковров",
      carpet_avoidance_desc: "Избегать ковров при влажной уборке",
      clean_carpets_first: "Сначала ковры",
      clean_carpets_first_desc: "Пылесосить ковры перед мытьём полов",
      carpet_boost: "Усиление на коврах",
      carpet_boost_desc: "Увеличить мощность всасывания на коврах",
      intensive_cleaning: "Интенсивная уборка",
      intensive_cleaning_desc: "Глубокая очистка ковров с доп. проходами",
      side_brush_rotate: "Вращение боковой щётки",
      side_brush_rotate_desc: "Вращать боковую щётку на коврах",
      sensitivity: "Чувствительность ковра",
      sensitivity_desc: "Уровень чувствительности распознавания",
      sensitivity_low: "Низкая",
      sensitivity_medium: "Средняя",
      sensitivity_high: "Высокая",
      cleaning_mode: "Уборка ковров",
      cleaning_mode_desc: "Поведение при уборке ковров",
      mode_vacuum: "Пылесос",
      mode_vacuum_and_mop: "Пыл. и швабра",
      mode_avoidance: "Избегать",
      mode_ignore: "Игнорировать",
      vacuum_mode: "Режим пылесоса",
      vacuum_adaptation: "Поднять швабру",
      vacuum_remove_mop: "Снять тряпку"
    },
    floor: {
      title: "Настройки пола",
      obstacle_avoidance: "Избегание препятствий",
      obstacle_avoidance_desc: "Использовать датчики для обхода препятствий",
      collision_avoidance: "Избегание столкновений",
      collision_avoidance_desc: "Замедление у стен и мебели",
      auto_mount_mop: "Авто-установка швабры",
      auto_mount_mop_desc: "Автоматически прикреплять насадку для мытья",
      auto_recleaning: "Авто-перечистка",
      auto_recleaning_desc: "Автоматически перечищать пропущенные участки",
      recleaning_off: "Выкл",
      recleaning_in_deep_mode: "В глубоком режиме",
      recleaning_in_all_modes: "Во всех режимах",
      stain_avoidance: "Избегание пятен",
      stain_avoidance_desc: "Обходить обнаруженные пятна",
      tight_mopping: "Тщательная мойка",
      tight_mopping_desc: "Мыть ближе к стенам и краям",
      floor_direction_cleaning: "Уборка по направлению пола",
      floor_direction_cleaning_desc: "Убирать вдоль направления волокон пола",
      large_particles_boost: "Усиление для крупных частиц",
      large_particles_boost_desc: "Увеличить всасывание для крупного мусора",
      pet_focused_cleaning: "Уборка в зонах питомцев",
      pet_focused_cleaning_desc: "Дополнительная уборка в местах обитания питомцев",
      low_lying_area_frequency: "Частота уборки низких зон",
      low_lying_area_frequency_desc: "Как часто убирать низкие зоны под мебелью"
    },
    edge_corner: {
      title: "Края и углы",
      side_reach: "Боковой охват",
      side_reach_desc: "Выдвижение боковой щётки для краёв",
      mop_extend: "Выдвижение швабры",
      mop_extend_desc: "Выдвижение швабры для краёв и углов",
      gap_cleaning: "Очистка щелей",
      gap_cleaning_desc: "Очистка узких щелей между мебелью",
      mopping_under: "Мытьё под мебелью",
      mopping_under_desc: "Выдвижение швабры под низкую мебель",
      extend_frequency: "Частота выдвижения",
      extend_frequency_desc: "Как часто выдвигать швабру для краёв",
      frequency_standard: "Стандартная",
      frequency_intelligent: "Умная",
      frequency_high: "Высокая"
    },
    dock: {
      title: "Настройки станции",
      self_clean: "Самоочистка",
      self_clean_desc: "Авто-мойка швабры после уборки",
      auto_empty_mode: "Авто-опустошение",
      auto_empty_mode_desc: "Когда автоматически опустошать пылесборник",
      auto_empty_frequency: "Частота авто-опустошения",
      auto_empty_frequency_desc: "Количество уборок перед авто-опустошением",
      empty_off: "Выкл",
      empty_standard: "Стандарт",
      empty_high_frequency: "Часто",
      empty_low_frequency: "Редко",
      auto_detergent: "Авто-моющее средство",
      auto_detergent_desc: "Автоматически добавлять моющее средство",
      mop_washing_with_detergent: "Мойка швабры с моющим средством",
      mop_washing_with_detergent_desc: "Использовать моющее средство при мойке швабры",
      mopping_with_detergent: "Уборка с моющим средством",
      mopping_with_detergent_desc: "Использовать моющее средство при влажной уборке",
      water_electrolysis: "Электролиз воды",
      water_electrolysis_desc: "Стерилизация воды с помощью электролиза",
      auto_water_refilling: "Авто-наполнение воды",
      auto_water_refilling_desc: "Автоматически наполнять бак чистой водой",
      auto_dust_collecting: "Авто-сбор пыли",
      auto_dust_collecting_desc: "Автоматически опустошать пылесборник после уборки",
      smart_washing: "Умная мойка",
      smart_washing_desc: "Умная настройка мойки по уровню загрязнения",
      mop_wash_level: "Уровень мойки швабры",
      mop_wash_level_desc: "Интенсивность мойки насадки",
      washing_mode: "Режим мойки",
      washing_mode_desc: "Интенсивность мойки насадки",
      washing_light: "Лёгкая",
      washing_standard: "Стандарт",
      washing_deep: "Глубокая",
      water_temperature: "Температура воды",
      water_temperature_desc: "Температура для мойки швабры",
      temp_normal: "Обычная",
      temp_mild: "Тёплая",
      temp_warm: "Горячая",
      temp_hot: "Очень горячая",
      auto_drying: "Авто-сушка",
      auto_drying_desc: "Автоматически сушить насадку после уборки",
      drying_time: "Время сушки",
      drying_time_desc: "Продолжительность сушки насадки",
      auto_rewashing: "Авто-перемывка",
      auto_rewashing_desc: "Автоматически перемывать швабру при загрязнении",
      rewashing_off: "Выкл",
      rewashing_in_deep_mode: "В глубоком режиме",
      rewashing_in_all_modes: "Во всех режимах",
      off_peak_charging: "Зарядка в непиковое время",
      off_peak_charging_desc: "Заряжать в непиковые часы для экономии энергии",
      off_peak_charging_start: "Время начала",
      off_peak_charging_end: "Время окончания",
      station_cleaning: "Очистка станции",
      station_cleaning_desc: "Очистить базовую станцию",
      clean_now: "Очистить",
      self_repair: "Самодиагностика",
      self_repair_desc: "Запустить диагностику станции",
      repair_now: "Диагностика",
      scraper_frequency: "Частота очистки скребка",
      scraper_frequency_desc: "Как часто очищать резиновый скребок"
    },
    ai_detection: {
      title: "ИИ и распознавание",
      intelligent_recognition: "Умное распознавание",
      intelligent_recognition_desc: "ИИ-распознавание окружающей среды",
      ai_obstacle_detection: "ИИ-распознавание препятствий",
      ai_obstacle_detection_desc: "Использовать ИИ для определения и обхода препятствий",
      fuzzy_obstacle_detection: "Нечёткое распознавание препятствий",
      fuzzy_obstacle_detection_desc: "Обнаружение мягких или нечётких препятствий",
      ai_obstacle_image_upload: "Загрузка изображений препятствий",
      ai_obstacle_image_upload_desc: "Загружать изображения препятствий для анализа",
      ai_obstacle_picture: "Фото препятствия",
      ai_obstacle_picture_desc: "Фотографировать обнаруженные препятствия",
      ai_pet_detection: "Распознавание питомцев",
      ai_pet_detection_desc: "Обнаружение и обход питомцев",
      ai_pet_avoidance: "Избегание питомцев",
      ai_pet_avoidance_desc: "Активно избегать обнаруженных питомцев",
      pet_focused_detection: "Фокусировка на питомцах",
      pet_focused_detection_desc: "Улучшенное распознавание зон питомцев",
      pet_picture: "Фото питомца",
      pet_picture_desc: "Фотографировать обнаруженных питомцев",
      ai_human_detection: "Распознавание людей",
      ai_human_detection_desc: "Обнаружение и обход людей",
      human_follow: "Следование за человеком",
      human_follow_desc: "Следовать за людьми для интерактивной уборки",
      ai_furniture_detection: "Распознавание мебели",
      ai_furniture_detection_desc: "Обнаружение и обход мебели",
      ai_fluid_detection: "Распознавание жидкостей",
      ai_fluid_detection_desc: "Обнаружение и обход жидкостей",
      fill_light: "Подсветка",
      fill_light_desc: "Использовать подсветку для лучшего распознавания",
      camera_light_auto: "Авто-яркость камеры",
      camera_light_auto_desc: "Автоматически настраивать яркость подсветки камеры",
      camera_light_brightness: "Яркость подсветки камеры",
      camera_light_brightness_desc: "Ручной уровень яркости подсветки камеры"
    },
    station_controls: {
      title: "Управление станцией",
      self_clean: "Самоочистка",
      self_clean_desc: "Запустить цикл мытья салфетки",
      manual_drying: "Ручная сушка",
      manual_drying_desc: "Запустить цикл сушки салфетки",
      water_tank_draining: "Слив воды",
      water_tank_draining_desc: "Слить грязную воду из бака",
      base_station_cleaning: "Очистка станции",
      base_station_cleaning_desc: "Очистить базовую станцию",
      empty_water_tank: "Опустошить бак",
      empty_water_tank_desc: "Опустошить бак для сбора воды",
      start_auto_empty: "Авто-опустошение",
      start_auto_empty_desc: "Запустить автоматическое опустошение пылесборника",
      start_recleaning: "Перечистка",
      start_recleaning_desc: "Запустить перечистку пропущенных участков",
      clear_warning: "Сбросить предупреждение",
      clear_warning_desc: "Сбросить текущие предупреждения"
    },
    map: {
      title: "Настройки карты",
      multi_floor: "Многоэтажная карта",
      multi_floor_desc: "Включить поддержку карт нескольких этажей",
      rotation: "Поворот карты",
      rotation_desc: "Повернуть ориентацию карты",
      mapping_actions: "Действия картографии",
      start_mapping: "Начать картографию",
      start_fast_mapping: "Быстрая картография"
    }
  }
}, Iw = {
  // Common (通用)
  common: {
    run: "运行",
    start: "开始",
    stop: "停止",
    cancel: "取消",
    save: "保存",
    apply: "应用",
    reset: "重置"
  },
  // Room Selector (房间选择器)
  room_selector: {
    title: "选择房间",
    selected_count: "已选 {{count}} 个"
  },
  // Map Selector (地图选择器)
  map_selector: {
    unknown: "未知地图"
  },
  // Vacuum Map (建图与地图交互)
  vacuum_map: {
    no_map: "暂无地图",
    looking_for: "正在寻找：{{entity}}",
    room_overlay: "请选择需要清洁的房间",
    zone_overlay_create: "点击地图添加划区清洁区域",
    zone_overlay_resize: "拖动边角调整大小，点击其他空白处重新放置",
    clear_zone: "清除选区",
    switch_to_list: "切换到列表视图",
    switch_to_map: "切换到地图视图",
    room_list_overlay: "点击房间进行选择",
    no_rooms: "暂无可用房间",
    zoom_in: "放大",
    zoom_out: "缩小",
    zoom_reset: "重置缩放",
    lock_map: "锁定地图",
    unlock_map: "解锁地图"
  },
  // Mode Tabs (模式切换标签)
  modes: {
    room: "选区",
    // 对应选定房间
    all: "全局",
    // 对应全屋
    zone: "划区"
    // 对应自定义区域
  },
  // Action Buttons (操作按钮)
  actions: {
    clean: "开始清洁",
    clean_all: "全屋清洁",
    clean_rooms: "清洁 {{count}} 个房间",
    clean_rooms_plural: "清洁 {{count}} 个房间",
    select_rooms: "选择房间",
    zone_clean: "划区清洁",
    pause: "暂停",
    resume: "继续",
    stop: "停止",
    stop_and_dock: "停止并回充",
    dock: "回充"
  },
  // Toast Messages (提示信息)
  toast: {
    selected_room: "已选择 {{name}}",
    deselected_room: "已取消选择 {{name}}",
    paused: "清洁已暂停",
    stopped: "清洁已停止",
    docked: "正在返回基站",
    cleaning_started: "开始清洁",
    resuming: "恢复清洁",
    starting_full_clean: "开始全屋清洁",
    pausing_vacuum: "扫地机器人已暂停",
    stopping_vacuum: "扫地机器人已停止",
    stopping_and_docking: "停止并返回基站",
    vacuum_docking: "扫地机正在返回基站",
    starting_room_clean: "开始清洁选中的 {{count}} 个房间",
    starting_room_clean_plural: "开始清洁选中的 {{count}} 个房间",
    starting_zone_clean: "开始划区清洁",
    select_rooms_first: "请先选择要清洁的房间",
    cannot_determine_map: "无法获取地图尺寸",
    select_zone_first: "请先在地图上划定一个区域"
  },
  // Room Selection Display (房间选择显示)
  room_display: {
    selected_rooms: "已选房间：",
    selected_label: "已选："
  },
  // Cleaning Mode Button (清洁模式按钮)
  cleaning_mode_button: {
    prefix_custom: "自定义：",
    prefix_cleangenius: "智能托管：",
    view_shortcuts: "查看快捷指令",
    repeats_tooltip: "清洁次数",
    vac_and_mop: "扫拖同步",
    mop_after_vac: "先扫后拖",
    vacuum: "单扫",
    mop: "单拖"
  },
  // Cleaning Mode Modal (清洁模式弹窗)
  cleaning_mode: {
    title: "清洁模式",
    clean_genius: "智能托管",
    custom: "自定义"
  },
  // Shortcuts Modal (快捷指令弹窗)
  shortcuts: {
    title: "快捷指令",
    no_shortcuts: "暂无快捷指令",
    create_hint: "请在 Dreame (追觅) App 中创建快捷指令，以便快速启动您常用的清洁任务"
  },
  // Custom Mode (自定义模式)
  custom_mode: {
    cleaning_mode_title: "清洁模式",
    suction_power_title: "吸力设置",
    max_plus_description: "吸力将提升至最高档位（该模式仅单次生效）。",
    wetness_title: "拖布水量",
    slightly_dry: "偏干",
    moist: "标准",
    wet: "偏湿",
    water_volume_title: "出水量",
    water_low: "低",
    water_medium: "中",
    water_high: "高",
    mop_washing_frequency_title: "拖布回洗频率",
    route_title: "路径设置",
    mop_pressure_title: "拖地压力",
    mop_temperature_title: "水温"
  },
  // 拖地压力选项
  mop_pressure: {
    light: "轻柔",
    normal: "标准"
  },
  // 水温选项
  mop_temperature: {
    normal: "常温",
    warm: "温水"
  },
  // 定制清洁模式
  customize: {
    title: "定制",
    description: "为每个区域设置个性化的吸力和拖地偏好。",
    set_button: "设置",
    vacuum: "吸尘",
    mop: "拖地",
    vac_and_mop: "吸拖",
    cycles: "清扫次数",
    apply_to_all: "应用到所有房间",
    click_room_hint: "点击区域以更改模式。",
    intelligent_recommendation: "智能推荐",
    select_room: "选择房间",
    settings_for: "{{room}}设置",
    no_rooms: "没有可用的房间"
  },
  // CleanGenius Mode (智能托管模式)
  cleangenius_mode: {
    cleaning_mode_title: "清洁模式",
    deep_cleaning: "深度清洁"
  },
  // Header (头部信息)
  header: {
    battery: "电量",
    status: "状态",
    area: "面积",
    time: "时间"
  },
  // Units (单位)
  units: {
    square_meters: "㎡",
    minutes: "分钟",
    minutes_short: "分",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (吸力档位)
  suction_levels: {
    quiet: "安静",
    standard: "标准",
    strong: "强劲",
    turbo: "超强"
  },
  // Mop Washing Frequency (拖布回洗频率)
  mop_washing_frequency: {
    by_room: "按房间",
    by_area: "按面积",
    by_time: "按时间"
  },
  // Cleaning Routes (清扫路线)
  cleaning_routes: {
    quick: "快速",
    standard: "标准",
    intensive: "强力",
    deep: "深度"
  },
  // Errors (错误提示)
  errors: {
    entity_not_found: "未找到实体：{{entity}}",
    failed_to_load: "加载实体数据失败",
    service_call_failed: "发送指令到扫地机失败",
    entity_unavailable: "扫地机不可用"
  },
  // Settings Panel (设置面板)
  settings: {
    title: "设置",
    consumables: {
      title: "耗材管理",
      main_brush: "主刷",
      side_brush: "边刷",
      filter: "滤网",
      sensor: "传感器",
      mop_pad: "拖布",
      silver_ion: "银离子",
      detergent: "清洁剂",
      squeegee: "刮水器",
      tank_filter: "水箱过滤器",
      onboard_dirty_water_tank: "内置污水箱",
      dirty_water_channel: "污水通道",
      deodorizer: "除臭剂",
      wheel: "轮子",
      scale_inhibitor: "防垢剂",
      fluffing_roller: "蓬松滚筒",
      roller_mop_filter: "滚筒拖布过滤器",
      water_outlet_filter: "出水过滤器",
      remaining: "剩余",
      reset: "复位"
    },
    device_info: {
      title: "设备信息",
      firmware: "固件版本",
      total_area: "累计清洁面积",
      total_time: "累计清洁时间",
      total_cleans: "累计清洁次数",
      wifi_ssid: "Wi-Fi 网络",
      wifi_signal: "信号强度",
      ip_address: "IP 地址"
    },
    quick_settings: {
      title: "快捷设置",
      child_lock: "童锁",
      child_lock_desc: "锁定设备按键以防误触",
      resume_cleaning: "断点续扫",
      resume_cleaning_desc: "充电后自动恢复清洁",
      dnd: "免打扰",
      dnd_desc: "在设定的安静时段内不主动执行任务",
      dnd_start: "开始时间",
      dnd_end: "结束时间",
      dnd_disable_resume: "禁用恢复",
      dnd_disable_resume_desc: "免打扰期间不恢复清洁",
      dnd_disable_auto_empty: "禁用自动集尘",
      dnd_disable_auto_empty_desc: "免打扰期间不自动集尘",
      dnd_reduce_volume: "降低音量",
      dnd_reduce_volume_desc: "免打扰期间降低设备音量"
    },
    volume: {
      title: "音量与语音",
      volume: "音量",
      test_sound: "寻找机器",
      muted: "已静音",
      voice_assistant: "语音助手",
      voice_assistant_desc: "启用语音播报和反馈",
      voice_language: "语音语言",
      voice_language_desc: "语音播报的语言",
      streaming_voice_prompt: "实时语音提示",
      streaming_voice_prompt_desc: "清洁过程中的实时语音反馈"
    },
    carpet: {
      title: "地毯设置",
      carpet_recognition: "地毯识别",
      carpet_recognition_desc: "自动识别地毯",
      carpet_avoidance: "避开地毯",
      carpet_avoidance_desc: "拖地时避开地毯",
      clean_carpets_first: "优先清洁地毯",
      clean_carpets_first_desc: "先吸尘地毯再拖地",
      carpet_boost: "地毯增压",
      carpet_boost_desc: "在地毯上自动提升吸力",
      intensive_cleaning: "深度清洁",
      intensive_cleaning_desc: "多次清扫深度清洁地毯",
      side_brush_rotate: "边刷旋转",
      side_brush_rotate_desc: "在地毯上旋转边刷",
      sensitivity: "地毯识别灵敏度",
      sensitivity_desc: "设置传感器检测地毯的灵敏程度",
      sensitivity_low: "低",
      sensitivity_medium: "中",
      sensitivity_high: "高",
      cleaning_mode: "地毯清洁",
      cleaning_mode_desc: "清洁时遇到地毯的处理方式",
      mode_vacuum: "吸尘",
      mode_vacuum_and_mop: "吸拖",
      mode_avoidance: "躲避",
      mode_ignore: "忽略",
      vacuum_mode: "吸尘模式",
      vacuum_adaptation: "抬升拖布",
      vacuum_remove_mop: "拆除拖布"
    },
    floor: {
      title: "地板设置",
      obstacle_avoidance: "障碍物避让",
      obstacle_avoidance_desc: "使用传感器避开障碍物",
      collision_avoidance: "碰撞避让",
      collision_avoidance_desc: "靠近墙壁和家具时减速",
      auto_mount_mop: "自动安装拖布",
      auto_mount_mop_desc: "需要时自动安装拖布垫",
      auto_recleaning: "自动复清",
      auto_recleaning_desc: "自动重新清洁遗漏区域",
      recleaning_off: "关闭",
      recleaning_in_deep_mode: "深度模式",
      recleaning_in_all_modes: "所有模式",
      stain_avoidance: "污渍躲避",
      stain_avoidance_desc: "自动避开识别到的顽固污渍",
      tight_mopping: "精细拖地",
      tight_mopping_desc: "更贴近墙壁和边缘拖地",
      floor_direction_cleaning: "顺向清洁",
      floor_direction_cleaning_desc: "沿地板纹理方向清洁",
      large_particles_boost: "大颗粒增压",
      large_particles_boost_desc: "增加吸力清理大颗粒杂物",
      pet_focused_cleaning: "宠物区域清洁",
      pet_focused_cleaning_desc: "在宠物活动区域加强清洁",
      low_lying_area_frequency: "低矮区域清洁频率",
      low_lying_area_frequency_desc: "多久清洁一次家具下方的低矮区域"
    },
    edge_corner: {
      title: "边角清洁",
      side_reach: "边刷延伸",
      side_reach_desc: "延伸边刷清洁边缘",
      mop_extend: "拖布延伸",
      mop_extend_desc: "延伸拖布清洁边角",
      gap_cleaning: "缝隙清洁",
      gap_cleaning_desc: "清洁家具之间的窄缝",
      mopping_under: "家具底部清洁",
      mopping_under_desc: "延伸拖布清洁低矮家具底部",
      extend_frequency: "延伸频率",
      extend_frequency_desc: "拖布延伸清洁边缘的频率",
      frequency_standard: "标准",
      frequency_intelligent: "智能",
      frequency_high: "高"
    },
    dock: {
      title: "基站设置",
      self_clean: "自动清洗",
      self_clean_desc: "清洁后自动清洗拖布",
      auto_empty_mode: "自动集尘模式",
      auto_empty_mode_desc: "何时自动清空尘盒",
      auto_empty_frequency: "自动集尘频率",
      auto_empty_frequency_desc: "多少次清洁后自动集尘",
      empty_off: "关闭",
      empty_standard: "标准",
      empty_high_frequency: "高频",
      empty_low_frequency: "低频",
      auto_detergent: "自动添加清洁剂",
      auto_detergent_desc: "清洗时自动添加清洁剂",
      mop_washing_with_detergent: "拖布清洗添加清洁剂",
      mop_washing_with_detergent_desc: "清洗拖布时使用清洁剂",
      mopping_with_detergent: "拖地使用清洁剂",
      mopping_with_detergent_desc: "拖地时使用清洁剂",
      water_electrolysis: "水电解",
      water_electrolysis_desc: "通过电解杀菌净化水质",
      auto_water_refilling: "自动加水",
      auto_water_refilling_desc: "自动补充清水箱",
      auto_dust_collecting: "自动集尘",
      auto_dust_collecting_desc: "清洁后自动清空尘盒",
      smart_washing: "智能洗拖布",
      smart_washing_desc: "根据脏污程度智能调整清洗",
      mop_wash_level: "拖布清洗等级",
      mop_wash_level_desc: "拖布清洗强度",
      washing_mode: "清洗模式",
      washing_mode_desc: "拖布清洗强度",
      washing_light: "轻度",
      washing_standard: "标准",
      washing_deep: "深度",
      water_temperature: "水温",
      water_temperature_desc: "清洗拖布的水温",
      temp_normal: "常温",
      temp_mild: "温和",
      temp_warm: "温热",
      temp_hot: "高温",
      auto_drying: "自动烘干",
      auto_drying_desc: "清洁后自动烘干拖布",
      drying_time: "烘干时间",
      drying_time_desc: "拖布烘干时长",
      auto_rewashing: "自动复洗",
      auto_rewashing_desc: "拖布脏污时自动复洗",
      rewashing_off: "关闭",
      rewashing_in_deep_mode: "深度模式",
      rewashing_in_all_modes: "所有模式",
      off_peak_charging: "低峰充电",
      off_peak_charging_desc: "低峰时段充电节省电费",
      off_peak_charging_start: "开始时间",
      off_peak_charging_end: "结束时间",
      station_cleaning: "基站清洁",
      station_cleaning_desc: "清洁基站",
      clean_now: "立即清洁",
      self_repair: "自检修复",
      self_repair_desc: "运行基站自检修复诊断",
      repair_now: "修复",
      scraper_frequency: "刮板清洁频率",
      scraper_frequency_desc: "多久清洁一次橡胶刮板"
    },
    ai_detection: {
      title: "AI 识别与避障",
      intelligent_recognition: "智能识别",
      intelligent_recognition_desc: "AI 驱动的环境识别",
      ai_obstacle_detection: "AI 障碍物识别",
      ai_obstacle_detection_desc: "使用 AI 视觉识别并避开障碍物",
      fuzzy_obstacle_detection: "模糊障碍物识别",
      fuzzy_obstacle_detection_desc: "检测软质或不清晰的障碍物",
      ai_obstacle_image_upload: "实景障碍物照片上传",
      ai_obstacle_image_upload_desc: "上传拍摄到的障碍物照片以供分析",
      ai_obstacle_picture: "障碍物照片",
      ai_obstacle_picture_desc: "拍摄检测到的障碍物照片",
      ai_pet_detection: "宠物识别",
      ai_pet_detection_desc: "识别并智能避让宠物",
      ai_pet_avoidance: "避让宠物",
      ai_pet_avoidance_desc: "主动避让检测到的宠物",
      pet_focused_detection: "宠物重点识别",
      pet_focused_detection_desc: "增强宠物区域检测",
      pet_picture: "宠物照片",
      pet_picture_desc: "拍摄检测到的宠物照片",
      ai_human_detection: "人员识别",
      ai_human_detection_desc: "识别并避让活动人员",
      human_follow: "人员跟随",
      human_follow_desc: "跟随人员进行互动清洁",
      ai_furniture_detection: "家具识别",
      ai_furniture_detection_desc: "识别家具并沿边清扫",
      ai_fluid_detection: "液体识别",
      ai_fluid_detection_desc: "识别并避开地面液体",
      fill_light: "自动补光灯",
      fill_light_desc: "暗光环境下自动开启以提升识别率",
      camera_light_auto: "自动相机亮度",
      camera_light_auto_desc: "自动调节相机补光灯亮度",
      camera_light_brightness: "相机补光亮度",
      camera_light_brightness_desc: "手动设置相机补光灯亮度"
    },
    station_controls: {
      title: "基站控制",
      self_clean: "自动清洗",
      self_clean_desc: "启动拖布清洗程序",
      manual_drying: "手动烘干",
      manual_drying_desc: "启动拖布烘干程序",
      water_tank_draining: "排水",
      water_tank_draining_desc: "排出污水箱中的脏水",
      base_station_cleaning: "清洁基站",
      base_station_cleaning_desc: "清洁充电基站",
      empty_water_tank: "清空水箱",
      empty_water_tank_desc: "清空集水箱",
      start_auto_empty: "自动集尘",
      start_auto_empty_desc: "启动自动集尘",
      start_recleaning: "重新清洁",
      start_recleaning_desc: "启动遗漏区域重新清洁",
      clear_warning: "清除警告",
      clear_warning_desc: "清除当前警告消息"
    },
    map: {
      title: "地图设置",
      multi_floor: "多层地图",
      multi_floor_desc: "启用多层地图支持",
      rotation: "地图旋转",
      rotation_desc: "旋转地图方向",
      mapping_actions: "建图操作",
      start_mapping: "开始建图",
      start_fast_mapping: "快速建图"
    }
  }
}, Bw = {
  // Common
  common: {
    run: "Ejecutar",
    start: "Iniciar",
    stop: "Detener",
    cancel: "Cancelar",
    save: "Guardar",
    apply: "Aplicar",
    reset: "Restablecer"
  },
  // Room Selector
  room_selector: {
    title: "Seleccionar Habitaciones",
    selected_count: "{{count}} seleccionadas"
  },
  // Map Selector
  map_selector: {
    unknown: "Mapa desconocido"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "No hay mapa disponible",
    looking_for: "Buscando: {{entity}}",
    room_overlay: "Haga clic en los números de las habitaciones para seleccionarlas para la limpieza",
    zone_overlay_create: "Haga clic en el mapa para colocar una zona de limpieza",
    zone_overlay_resize: "Arrastre las esquinas para cambiar el tamaño, haga clic en otro lugar para reposicionar",
    clear_zone: "Borrar zona",
    switch_to_list: "Cambiar a vista de lista",
    switch_to_map: "Cambiar a vista de mapa",
    room_list_overlay: "Toque las habitaciones para seleccionarlas para la limpieza",
    no_rooms: "No hay habitaciones disponibles",
    zoom_in: "Acercar",
    zoom_out: "Alejar",
    zoom_reset: "Restablecer zoom",
    lock_map: "Bloquear mapa",
    unlock_map: "Desbloquear mapa"
  },
  // Mode Tabs
  modes: {
    room: "Habitaciones",
    all: "Todo",
    zone: "Zona"
  },
  // Action Buttons
  actions: {
    clean: "Limpiar",
    clean_all: "Limpiar Todo",
    clean_rooms: "Limpiar {{count}} Habitación",
    clean_rooms_plural: "Limpiar {{count}} Habitaciones",
    select_rooms: "Seleccionar Habitaciones",
    zone_clean: "Limpiar Zona",
    pause: "Pausar",
    resume: "Reanudar",
    stop: "Detener",
    stop_and_dock: "Detener y volver",
    dock: "Base"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} seleccionada",
    deselected_room: "{{name}} deseleccionada",
    paused: "Limpieza pausada",
    stopped: "Limpieza detenida",
    docked: "Volviendo a la base",
    cleaning_started: "Limpieza iniciada",
    resuming: "Reanudando limpieza",
    starting_full_clean: "Iniciando limpieza de toda la casa",
    pausing_vacuum: "Pausando aspirador",
    stopping_vacuum: "Deteniendo aspirador",
    stopping_and_docking: "Deteniendo y volviendo a la base",
    vacuum_docking: "Aspirador volviendo a la base",
    starting_room_clean: "Iniciando limpieza para {{count}} habitación seleccionada",
    starting_room_clean_plural: "Iniciando limpieza para {{count}} habitaciones seleccionadas",
    starting_zone_clean: "Iniciando limpieza de zona",
    select_rooms_first: "Por favor, seleccione primero las habitaciones a limpiar",
    cannot_determine_map: "No se pueden determinar las dimensiones del mapa",
    select_zone_first: "Por favor, seleccione una zona en el mapa"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Habitaciones seleccionadas:",
    selected_label: "Seleccionadas:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Personalizado: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Ver accesos directos",
    repeats_tooltip: "Pasadas de limpieza",
    vac_and_mop: "Aspirar y Trapear",
    mop_after_vac: "Trapear después de aspirar",
    vacuum: "Aspirar",
    mop: "Trapear"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Modo de limpieza",
    clean_genius: "CleanGenius",
    custom: "Personalizado"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Accesos directos",
    no_shortcuts: "No hay accesos directos disponibles",
    create_hint: "Cree accesos directos en la aplicación Dreame para iniciar rápidamente sus rutinas de limpieza favoritas"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Modo de limpieza",
    suction_power_title: "Potencia de succión",
    max_plus_description: "La potencia de succión se incrementará al máximo nivel, es un modo de un solo uso.",
    wetness_title: "Humedad",
    slightly_dry: "Ligeramente seco",
    moist: "Húmedo",
    wet: "Mojado",
    water_volume_title: "Volumen de agua",
    water_low: "Bajo",
    water_medium: "Medio",
    water_high: "Alto",
    mop_washing_frequency_title: "Frecuencia de lavado de mopa",
    route_title: "Ruta",
    mop_pressure_title: "Presión de la mopa",
    mop_temperature_title: "Temperatura del agua"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Ligera",
    normal: "Normal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normal",
    warm: "Templada"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Personalizar",
    description: "Establece preferencias personalizadas de succión y fregado para cada área.",
    set_button: "Configurar",
    vacuum: "Aspirar",
    mop: "Fregar",
    vac_and_mop: "Aspirar y fregar",
    cycles: "Ciclos",
    apply_to_all: "Aplicar a todas las habitaciones",
    click_room_hint: "Haz clic en un área para cambiar el modo.",
    intelligent_recommendation: "Recomendación inteligente",
    select_room: "Seleccionar habitación",
    settings_for: "Ajustes de {{room}}",
    no_rooms: "No hay habitaciones disponibles"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Modo de limpieza",
    deep_cleaning: "Limpieza profunda"
  },
  // Header
  header: {
    battery: "Batería",
    status: "Estado",
    area: "Área",
    time: "Tiempo"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Silencioso",
    standard: "Estándar",
    strong: "Turbo",
    turbo: "Máximo"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Por habitación",
    by_area: "Por área",
    by_time: "Por tiempo"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Rápido",
    standard: "Estándar",
    intensive: "Intensivo",
    deep: "Profundo"
  },
  // Errors
  errors: {
    entity_not_found: "Entidad no encontrada: {{entity}}",
    failed_to_load: "Error al cargar datos de la entidad",
    service_call_failed: "Error al enviar comando a la aspiradora",
    entity_unavailable: "Aspiradora no disponible"
  },
  // Settings Panel
  settings: {
    title: "Ajustes",
    consumables: {
      title: "Consumibles",
      main_brush: "Cepillo principal",
      side_brush: "Cepillo lateral",
      filter: "Filtro",
      sensor: "Sensor",
      mop_pad: "Almohadilla de fregado",
      silver_ion: "Ion de plata",
      detergent: "Detergente",
      squeegee: "Escobilla",
      tank_filter: "Filtro del tanque",
      onboard_dirty_water_tank: "Tanque de agua sucia integrado",
      dirty_water_channel: "Canal de agua sucia",
      deodorizer: "Desodorizador",
      wheel: "Rueda",
      scale_inhibitor: "Inhibidor de cal",
      fluffing_roller: "Rodillo esponjador",
      roller_mop_filter: "Filtro de rodillo fregona",
      water_outlet_filter: "Filtro de salida de agua",
      remaining: "restante",
      reset: "Restablecer"
    },
    device_info: {
      title: "Información del dispositivo",
      firmware: "Firmware",
      total_area: "Área total limpiada",
      total_time: "Tiempo total de limpieza",
      total_cleans: "Limpiezas totales",
      wifi_ssid: "Red Wi-Fi",
      wifi_signal: "Intensidad de señal",
      ip_address: "Dirección IP"
    },
    quick_settings: {
      title: "Ajustes rápidos",
      child_lock: "Bloqueo infantil",
      child_lock_desc: "Desactivar botones físicos del dispositivo",
      resume_cleaning: "Reanudar limpieza",
      resume_cleaning_desc: "Reanudar automáticamente la limpieza después de cargar",
      dnd: "No molestar",
      dnd_desc: "Horas de silencio con actividad reducida",
      dnd_start: "Hora de inicio",
      dnd_end: "Hora de fin",
      dnd_disable_resume: "Desactivar reanudación",
      dnd_disable_resume_desc: "No reanudar limpieza durante No molestar",
      dnd_disable_auto_empty: "Desactivar vaciado auto",
      dnd_disable_auto_empty_desc: "No vaciar automáticamente durante No molestar",
      dnd_reduce_volume: "Reducir volumen",
      dnd_reduce_volume_desc: "Bajar volumen del dispositivo durante No molestar"
    },
    volume: {
      title: "Volumen y sonido",
      volume: "Volumen",
      test_sound: "Localizar",
      muted: "Silenciado",
      voice_assistant: "Asistente de voz",
      voice_assistant_desc: "Habilitar anuncios y retroalimentación por voz",
      voice_language: "Idioma de voz",
      voice_language_desc: "Idioma para los anuncios de voz",
      streaming_voice_prompt: "Avisos de voz en tiempo real",
      streaming_voice_prompt_desc: "Retroalimentación por voz en tiempo real durante la limpieza"
    },
    carpet: {
      title: "Configuración de alfombras",
      carpet_recognition: "Reconocimiento de alfombras",
      carpet_recognition_desc: "Detectar alfombras automáticamente",
      carpet_avoidance: "Evitar alfombras",
      carpet_avoidance_desc: "Evitar alfombras durante el fregado",
      clean_carpets_first: "Limpiar alfombras primero",
      clean_carpets_first_desc: "Aspirar alfombras antes de trapear",
      carpet_boost: "Potencia en alfombras",
      carpet_boost_desc: "Aumentar potencia de succión en alfombras",
      intensive_cleaning: "Limpieza intensiva",
      intensive_cleaning_desc: "Limpieza profunda con pasadas extra",
      side_brush_rotate: "Rotar cepillo lateral",
      side_brush_rotate_desc: "Rotar cepillo lateral en alfombras",
      sensitivity: "Sensibilidad de alfombras",
      sensitivity_desc: "Nivel de sensibilidad de detección",
      sensitivity_low: "Baja",
      sensitivity_medium: "Media",
      sensitivity_high: "Alta",
      cleaning_mode: "Limpieza de alfombras",
      cleaning_mode_desc: "Cómo manejar alfombras durante la limpieza",
      mode_vacuum: "Aspirar",
      mode_vacuum_and_mop: "Asp. y Trap.",
      mode_avoidance: "Evitar",
      mode_ignore: "Ignorar",
      vacuum_mode: "Modo aspirado",
      vacuum_adaptation: "Levantar mopa",
      vacuum_remove_mop: "Quitar mopa"
    },
    floor: {
      title: "Configuración de suelo",
      obstacle_avoidance: "Evitación de obstáculos",
      obstacle_avoidance_desc: "Usar sensores para evitar obstáculos",
      collision_avoidance: "Evitar colisiones",
      collision_avoidance_desc: "Reducir velocidad cerca de paredes y muebles",
      auto_mount_mop: "Montar mopa auto",
      auto_mount_mop_desc: "Montar automáticamente la almohadilla de mopa",
      auto_recleaning: "Re-limpieza auto",
      auto_recleaning_desc: "Volver a limpiar áreas perdidas automáticamente",
      recleaning_off: "Desactivado",
      recleaning_in_deep_mode: "En modo profundo",
      recleaning_in_all_modes: "En todos los modos",
      stain_avoidance: "Evitación de manchas",
      stain_avoidance_desc: "Evitar manchas detectadas",
      tight_mopping: "Fregado minucioso",
      tight_mopping_desc: "Fregar más cerca de paredes y bordes",
      floor_direction_cleaning: "Limpieza según dirección del suelo",
      floor_direction_cleaning_desc: "Limpiar siguiendo la veta del suelo",
      large_particles_boost: "Potencia para partículas grandes",
      large_particles_boost_desc: "Aumentar succión para residuos grandes",
      pet_focused_cleaning: "Limpieza enfocada en mascotas",
      pet_focused_cleaning_desc: "Limpieza extra en áreas de mascotas",
      low_lying_area_frequency: "Frecuencia de zonas bajas",
      low_lying_area_frequency_desc: "Con qué frecuencia limpiar zonas bajas bajo los muebles"
    },
    edge_corner: {
      title: "Bordes y Esquinas",
      side_reach: "Alcance lateral",
      side_reach_desc: "Extender cepillo lateral para bordes",
      mop_extend: "Extensión de mopa",
      mop_extend_desc: "Extender mopa para bordes y esquinas",
      gap_cleaning: "Limpieza de huecos",
      gap_cleaning_desc: "Limpiar espacios estrechos entre muebles",
      mopping_under: "Fregar bajo muebles",
      mopping_under_desc: "Extender mopa bajo muebles bajos",
      extend_frequency: "Frecuencia de extensión",
      extend_frequency_desc: "Frecuencia de extensión para limpieza de bordes",
      frequency_standard: "Estándar",
      frequency_intelligent: "Inteligente",
      frequency_high: "Alta"
    },
    dock: {
      title: "Configuración de base",
      self_clean: "Autolimpieza",
      self_clean_desc: "Lavar mopa automáticamente después de limpiar",
      auto_empty_mode: "Modo vaciado auto",
      auto_empty_mode_desc: "Cuándo vaciar automáticamente el depósito",
      auto_empty_frequency: "Frecuencia vaciado auto",
      auto_empty_frequency_desc: "Cuántas limpiezas antes del vaciado auto",
      empty_off: "Desactivado",
      empty_standard: "Estándar",
      empty_high_frequency: "Alta frecuencia",
      empty_low_frequency: "Baja frecuencia",
      auto_detergent: "Detergente auto",
      auto_detergent_desc: "Añadir detergente automáticamente al lavar",
      mop_washing_with_detergent: "Lavado de mopa con detergente",
      mop_washing_with_detergent_desc: "Usar detergente al lavar la mopa",
      mopping_with_detergent: "Fregado con detergente",
      mopping_with_detergent_desc: "Usar detergente al fregar el suelo",
      water_electrolysis: "Electrólisis de agua",
      water_electrolysis_desc: "Esterilizar agua mediante electrólisis",
      auto_water_refilling: "Rellenado auto de agua",
      auto_water_refilling_desc: "Rellenar automáticamente el tanque de agua limpia",
      auto_dust_collecting: "Recolección auto de polvo",
      auto_dust_collecting_desc: "Vaciar automáticamente el depósito después de limpiar",
      smart_washing: "Lavado inteligente",
      smart_washing_desc: "Ajustar lavado según nivel de suciedad",
      mop_wash_level: "Nivel lavado mopa",
      mop_wash_level_desc: "Intensidad del lavado de la mopa",
      washing_mode: "Modo lavado",
      washing_mode_desc: "Intensidad del lavado de la mopa",
      washing_light: "Ligero",
      washing_standard: "Estándar",
      washing_deep: "Profundo",
      water_temperature: "Temperatura del agua",
      water_temperature_desc: "Temperatura para lavar la mopa",
      temp_normal: "Normal",
      temp_mild: "Suave",
      temp_warm: "Templada",
      temp_hot: "Caliente",
      auto_drying: "Secado auto",
      auto_drying_desc: "Secar automáticamente la mopa después de limpiar",
      drying_time: "Tiempo de secado",
      drying_time_desc: "Duración del secado de la mopa",
      auto_rewashing: "Relavado automático",
      auto_rewashing_desc: "Relavar mopa automáticamente cuando esté sucia",
      rewashing_off: "Desactivado",
      rewashing_in_deep_mode: "En modo profundo",
      rewashing_in_all_modes: "En todos los modos",
      off_peak_charging: "Carga en horas valle",
      off_peak_charging_desc: "Cargar en horas valle para ahorrar energía",
      off_peak_charging_start: "Hora de inicio",
      off_peak_charging_end: "Hora de fin",
      station_cleaning: "Limpieza de estación",
      station_cleaning_desc: "Limpiar la estación base",
      clean_now: "Limpiar ahora",
      self_repair: "Auto-reparación",
      self_repair_desc: "Ejecutar diagnóstico de auto-reparación de la estación",
      repair_now: "Reparar",
      scraper_frequency: "Frecuencia del raspador",
      scraper_frequency_desc: "Con qué frecuencia limpiar el raspador de goma"
    },
    ai_detection: {
      title: "IA y detección",
      intelligent_recognition: "Reconocimiento inteligente",
      intelligent_recognition_desc: "Reconocimiento del entorno con IA",
      ai_obstacle_detection: "Detección de obstáculos con IA",
      ai_obstacle_detection_desc: "Usar IA para identificar y evitar obstáculos",
      fuzzy_obstacle_detection: "Detección de obstáculos difusos",
      fuzzy_obstacle_detection_desc: "Detectar obstáculos suaves o poco claros",
      ai_obstacle_image_upload: "Carga de imágenes de obstáculos",
      ai_obstacle_image_upload_desc: "Cargar imágenes de obstáculos para análisis",
      ai_obstacle_picture: "Foto de obstáculo",
      ai_obstacle_picture_desc: "Tomar fotos de obstáculos detectados",
      ai_pet_detection: "Detección de mascotas",
      ai_pet_detection_desc: "Detectar y evitar mascotas",
      ai_pet_avoidance: "Evitar mascotas",
      ai_pet_avoidance_desc: "Evitar activamente las mascotas detectadas",
      pet_focused_detection: "Detección enfocada en mascotas",
      pet_focused_detection_desc: "Detección mejorada para áreas de mascotas",
      pet_picture: "Foto de mascota",
      pet_picture_desc: "Tomar fotos de mascotas detectadas",
      ai_human_detection: "Detección de personas",
      ai_human_detection_desc: "Detectar y evitar personas",
      human_follow: "Seguir personas",
      human_follow_desc: "Seguir personas para limpieza interactiva",
      ai_furniture_detection: "Detección de muebles",
      ai_furniture_detection_desc: "Detectar y navegar alrededor de muebles",
      ai_fluid_detection: "Detección de líquidos",
      ai_fluid_detection_desc: "Detectar y evitar líquidos",
      fill_light: "Luz de relleno",
      fill_light_desc: "Usar luz de relleno para mejor detección",
      camera_light_auto: "Brillo automático de cámara",
      camera_light_auto_desc: "Ajustar automáticamente el brillo de la luz de la cámara",
      camera_light_brightness: "Brillo de luz de cámara",
      camera_light_brightness_desc: "Nivel de brillo manual de la luz de la cámara"
    },
    station_controls: {
      title: "Controles de estación",
      self_clean: "Autolimpieza",
      self_clean_desc: "Iniciar ciclo de lavado de mopa",
      manual_drying: "Secado manual",
      manual_drying_desc: "Iniciar ciclo de secado de mopa",
      water_tank_draining: "Vaciar tanque",
      water_tank_draining_desc: "Drenar agua sucia del tanque",
      base_station_cleaning: "Limpiar estación",
      base_station_cleaning_desc: "Limpiar la estación base",
      empty_water_tank: "Vaciar tanque de agua",
      empty_water_tank_desc: "Vaciar el tanque de recolección de agua",
      start_auto_empty: "Vaciado automático",
      start_auto_empty_desc: "Iniciar vaciado automático del depósito",
      start_recleaning: "Relimpieza",
      start_recleaning_desc: "Iniciar relimpieza de áreas perdidas",
      clear_warning: "Limpiar advertencia",
      clear_warning_desc: "Limpiar mensajes de advertencia actuales"
    },
    map: {
      title: "Configuración del mapa",
      multi_floor: "Mapa multi-piso",
      multi_floor_desc: "Habilitar soporte para mapas de múltiples pisos",
      rotation: "Rotación del mapa",
      rotation_desc: "Girar la orientación del mapa",
      mapping_actions: "Acciones de mapeo",
      start_mapping: "Iniciar mapeo",
      start_fast_mapping: "Mapeo rápido"
    }
  }
}, Pw = {
  // Common
  common: {
    run: "Uitvoeren",
    start: "Start",
    stop: "Stop",
    cancel: "Annuleren",
    save: "Opslaan",
    apply: "Toepassen",
    reset: "Resetten"
  },
  // Kamer Kiezer
  room_selector: {
    title: "Kamers Selecteren",
    selected_count: "{{count}} geselecteerd"
  },
  // Kaart Kiezer
  map_selector: {
    unknown: "Onbekende kaart"
  },
  // Stofzuiger Kaart
  vacuum_map: {
    no_map: "Geen kaart beschikbaar",
    looking_for: "Zoeken naar: {{entity}}",
    room_overlay: "Klik op kamernummers om kamers te selecteren voor reiniging",
    zone_overlay_create: "Klik op de kaart om een schoonmaakzone te plaatsen",
    zone_overlay_resize: "Sleep de hoeken om aan te passen, klik elders om te verplaatsen",
    clear_zone: "Zone wissen",
    switch_to_list: "Naar lijstweergave",
    switch_to_map: "Naar kaartweergave",
    room_list_overlay: "Tik op kamers om te selecteren voor reiniging",
    no_rooms: "Geen kamers beschikbaar",
    zoom_in: "Inzoomen",
    zoom_out: "Uitzoomen",
    zoom_reset: "Zoom resetten",
    lock_map: "Kaart vergrendelen",
    unlock_map: "Kaart ontgrendelen"
  },
  // Modus Tabbladen
  modes: {
    room: "Kamer",
    all: "Alles",
    zone: "Zone"
  },
  // Actieknoppen
  actions: {
    clean: "Schoonmaken",
    clean_all: "Alles Schoonmaken",
    clean_rooms: "Schoonmaken ({{count}} kamer)",
    clean_rooms_plural: "Schoonmaken ({{count}} kamers)",
    select_rooms: "Kamers Selecteren",
    zone_clean: "Zone Reinigen",
    pause: "Pauze",
    resume: "Hervatten",
    stop: "Stop",
    stop_and_dock: "Stop & Docken",
    dock: "Docken"
  },
  // Meldingen (Toasts)
  toast: {
    selected_room: "{{name}} geselecteerd",
    deselected_room: "{{name}} gedeselecteerd",
    paused: "Schoonmaken gepauzeerd",
    stopped: "Schoonmaken gestopt",
    docked: "Keert terug naar dock",
    cleaning_started: "Schoonmaken gestart",
    resuming: "Schoonmaken wordt hervat",
    starting_full_clean: "Start volledige reiniging van het huis",
    pausing_vacuum: "Stofzuiger pauzeren",
    stopping_vacuum: "Stofzuiger stoppen",
    stopping_and_docking: "Stoppen en terugkeren naar dock",
    vacuum_docking: "Stofzuiger keert terug naar dock",
    starting_room_clean: "Start reinigen van {{count}} geselecteerde kamer",
    starting_room_clean_plural: "Start reinigen van {{count}} geselecteerde kamers",
    starting_zone_clean: "Zone-reiniging gestart",
    select_rooms_first: "Selecteer eerst de kamers die je wilt schoonmaken",
    cannot_determine_map: "Kan afmetingen van de kaart niet bepalen",
    select_zone_first: "Selecteer eerst een zone op de kaart"
  },
  // Kamer Selectie Weergave
  room_display: {
    selected_rooms: "Geselecteerde Kamers:",
    selected_label: "Geselecteerd:"
  },
  // Schoonmaakmodus Knop
  cleaning_mode_button: {
    prefix_custom: "Aangepast: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Snelkoppelingen bekijken",
    repeats_tooltip: "Reinigingspassen",
    vac_and_mop: "Stofzuigen & Dweilen",
    mop_after_vac: "Dweilen na Stofzuigen",
    vacuum: "Stofzuigen",
    mop: "Dweilen"
  },
  // Schoonmaakmodus Modal
  cleaning_mode: {
    title: "Schoonmaakmodus",
    clean_genius: "CleanGenius",
    custom: "Aangepast"
  },
  // Snelkoppelingen Modal
  shortcuts: {
    title: "Snelkoppelingen",
    no_shortcuts: "Geen snelkoppelingen beschikbaar",
    create_hint: "Maak snelkoppelingen aan in de Dreame app om snel je favoriete routines te starten"
  },
  // Aangepaste Modus
  custom_mode: {
    cleaning_mode_title: "Schoonmaakmodus",
    suction_power_title: "Zuigkracht",
    max_plus_description: "De zuigkracht wordt verhoogd naar het hoogste niveau (eenmalige modus).",
    wetness_title: "Vochtigheid",
    slightly_dry: "Licht droog",
    moist: "Vochtig",
    wet: "Nat",
    water_volume_title: "Watervolume",
    water_low: "Laag",
    water_medium: "Gemiddeld",
    water_high: "Hoog",
    mop_washing_frequency_title: "Dweil-wasfrequentie",
    route_title: "Route",
    mop_pressure_title: "Dweildruk",
    mop_temperature_title: "Watertemperatuur"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Licht",
    normal: "Normaal"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normaal",
    warm: "Warm"
  },
  // Aanpassen Schoonmaakmodus
  customize: {
    title: "Aanpassen",
    description: "Stel gepersonaliseerde zuig- en dweilvoorkeuren in voor elk gebied.",
    set_button: "Instellen",
    vacuum: "Zuigen",
    mop: "Dweilen",
    vac_and_mop: "Zuigen & dweilen",
    cycles: "Cycli",
    apply_to_all: "Toepassen op alle kamers",
    click_room_hint: "Klik op een gebied om de modus te wijzigen.",
    intelligent_recommendation: "Intelligente aanbeveling",
    select_room: "Selecteer kamer",
    settings_for: "{{room}} instellingen",
    no_rooms: "Geen kamers beschikbaar"
  },
  // CleanGenius Modus
  cleangenius_mode: {
    cleaning_mode_title: "Schoonmaakmodus",
    deep_cleaning: "Grondige Reiniging"
  },
  // Header
  header: {
    battery: "Batterij",
    status: "Status",
    area: "Oppervlak",
    time: "Tijd"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Stil",
    standard: "Standaard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Per kamer",
    by_area: "Per oppervlak",
    by_time: "Per tijd"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Snel",
    standard: "Standaard",
    intensive: "Intensief",
    deep: "Diep"
  },
  // Fouten
  errors: {
    entity_not_found: "Entiteit niet gevonden: {{entity}}",
    failed_to_load: "Kan entiteitsgegevens niet laden",
    service_call_failed: "Kan opdracht niet naar stofzuiger sturen",
    entity_unavailable: "Stofzuiger niet beschikbaar"
  },
  // Instellingenpaneel
  settings: {
    title: "Instellingen",
    consumables: {
      title: "Onderdelen & Verbruik",
      main_brush: "Hoofdborstel",
      side_brush: "Zijborstel",
      filter: "Filter",
      sensor: "Sensor",
      mop_pad: "Dweilpad",
      silver_ion: "Zilverion",
      detergent: "Reinigingsmiddel",
      squeegee: "Trekker",
      tank_filter: "Tankfilter",
      onboard_dirty_water_tank: "Ingebouwde vuilwatertank",
      dirty_water_channel: "Vuilwaterkanaal",
      deodorizer: "Luchtverfrisser",
      wheel: "Wiel",
      scale_inhibitor: "Kalkremmer",
      fluffing_roller: "Pluizende roller",
      roller_mop_filter: "Rollermopfilter",
      water_outlet_filter: "Wateruitlaatfilter",
      remaining: "resterend",
      reset: "Resetten"
    },
    device_info: {
      title: "Apparaatinfo",
      firmware: "Firmware",
      total_area: "Totaal Gereinigd Oppervlak",
      total_time: "Totale Schoonmaaktijd",
      total_cleans: "Totaal Aantal Reinigingen",
      wifi_ssid: "Wifi-netwerk",
      wifi_signal: "Signaalsterkte",
      ip_address: "IP-adres"
    },
    quick_settings: {
      title: "Snelle Instellingen",
      child_lock: "Kinderslot",
      child_lock_desc: "Fysieke knoppen op het apparaat uitschakelen",
      resume_cleaning: "Reiniging hervatten",
      resume_cleaning_desc: "Automatisch reiniging hervatten na opladen",
      dnd: "Niet Storen",
      dnd_desc: "Stille uren met beperkte activiteit",
      dnd_start: "Starttijd",
      dnd_end: "Eindtijd",
      dnd_disable_resume: "Hervatten uitschakelen",
      dnd_disable_resume_desc: "Niet hervatten tijdens Niet Storen",
      dnd_disable_auto_empty: "Auto legen uitschakelen",
      dnd_disable_auto_empty_desc: "Niet automatisch legen tijdens Niet Storen",
      dnd_reduce_volume: "Volume verlagen",
      dnd_reduce_volume_desc: "Apparaatvolume verlagen tijdens Niet Storen"
    },
    volume: {
      title: "Volume & Geluid",
      volume: "Volume",
      test_sound: "Lokaliseren",
      muted: "Gedempt",
      voice_assistant: "Spraakassistent",
      voice_assistant_desc: "Spraakmeldingen en feedback inschakelen",
      voice_language: "Spraaktaal",
      voice_language_desc: "Taal voor spraakmeldingen",
      streaming_voice_prompt: "Realtime spraakprompt",
      streaming_voice_prompt_desc: "Realtime spraakfeedback tijdens reiniging"
    },
    carpet: {
      title: "Tapijtinstellingen",
      carpet_recognition: "Tapijtherkenning",
      carpet_recognition_desc: "Tapijten automatisch detecteren",
      carpet_avoidance: "Tapijt vermijden",
      carpet_avoidance_desc: "Tapijten vermijden tijdens dweilen",
      clean_carpets_first: "Tapijten eerst reinigen",
      clean_carpets_first_desc: "Tapijten stofzuigen voor het dweilen",
      carpet_boost: "Tapijtboost",
      carpet_boost_desc: "Zuigkracht verhogen op tapijt",
      intensive_cleaning: "Intensieve reiniging",
      intensive_cleaning_desc: "Dieptereiniging met extra passages",
      side_brush_rotate: "Zijborstel draaien",
      side_brush_rotate_desc: "Zijborstel draaien op tapijten",
      sensitivity: "Tapijtgevoeligheid",
      sensitivity_desc: "Gevoeligheidsniveau voor detectie",
      sensitivity_low: "Laag",
      sensitivity_medium: "Gemiddeld",
      sensitivity_high: "Hoog",
      cleaning_mode: "Tapijtreiniging",
      cleaning_mode_desc: "Hoe tapijten behandelen tijdens het reinigen",
      mode_vacuum: "Stofzuigen",
      mode_vacuum_and_mop: "Zuig & Dweil",
      mode_avoidance: "Vermijden",
      mode_ignore: "Negeren",
      vacuum_mode: "Stofzuigmodus",
      vacuum_adaptation: "Dweil optillen",
      vacuum_remove_mop: "Dweil verwijderen"
    },
    floor: {
      title: "Vloerinstellingen",
      obstacle_avoidance: "Obstakelvermijding",
      obstacle_avoidance_desc: "Sensoren gebruiken om obstakels te vermijden",
      collision_avoidance: "Botsing vermijden",
      collision_avoidance_desc: "Vertragen bij muren en meubels",
      auto_mount_mop: "Auto dweil monteren",
      auto_mount_mop_desc: "Automatisch dweilpad bevestigen wanneer nodig",
      auto_recleaning: "Auto her-reiniging",
      auto_recleaning_desc: "Automatisch gemiste gebieden opnieuw reinigen",
      recleaning_off: "Uit",
      recleaning_in_deep_mode: "In diepe modus",
      recleaning_in_all_modes: "In alle modi",
      stain_avoidance: "Vlekvermijding",
      stain_avoidance_desc: "Gedetecteerde vlekken vermijden",
      tight_mopping: "Grondig dweilen",
      tight_mopping_desc: "Dweilen dichter bij muren en randen",
      floor_direction_cleaning: "Vloerichting reiniging",
      floor_direction_cleaning_desc: "Reinigen langs de vloernerf",
      large_particles_boost: "Grote deeltjes boost",
      large_particles_boost_desc: "Zuigkracht verhogen voor groot vuil",
      pet_focused_cleaning: "Huisdier-gerichte reiniging",
      pet_focused_cleaning_desc: "Extra reiniging in huisdiergebieden",
      low_lying_area_frequency: "Lage-zonefrequentie",
      low_lying_area_frequency_desc: "Hoe vaak lage zones onder meubels reinigen"
    },
    edge_corner: {
      title: "Randen & Hoeken",
      side_reach: "Zijbereik",
      side_reach_desc: "Zijborstel uitschuiven voor randen",
      mop_extend: "Dweil uitschuiven",
      mop_extend_desc: "Dweil uitschuiven voor randen en hoeken",
      gap_cleaning: "Spleetreiniging",
      gap_cleaning_desc: "Smalle spleten tussen meubels reinigen",
      mopping_under: "Dweilen onder meubels",
      mopping_under_desc: "Dweil uitschuiven onder lage meubels",
      extend_frequency: "Uitschuiffrequentie",
      extend_frequency_desc: "Hoe vaak dweil uitschuiven voor randenreiniging",
      frequency_standard: "Standaard",
      frequency_intelligent: "Intelligent",
      frequency_high: "Hoog"
    },
    dock: {
      title: "Dock-instellingen",
      self_clean: "Zelfreiniging",
      self_clean_desc: "Auto dweil wassen na reiniging",
      auto_empty_mode: "Auto legen modus",
      auto_empty_mode_desc: "Wanneer automatisch de stofbak legen",
      auto_empty_frequency: "Auto legen frequentie",
      auto_empty_frequency_desc: "Hoeveel reinigingen voor auto legen",
      empty_off: "Uit",
      empty_standard: "Standaard",
      empty_high_frequency: "Hoge frequentie",
      empty_low_frequency: "Lage frequentie",
      auto_detergent: "Auto wasmiddel",
      auto_detergent_desc: "Automatisch wasmiddel toevoegen bij wassen",
      mop_washing_with_detergent: "Dweil wassen met wasmiddel",
      mop_washing_with_detergent_desc: "Wasmiddel gebruiken bij dweil wassen",
      mopping_with_detergent: "Dweilen met wasmiddel",
      mopping_with_detergent_desc: "Wasmiddel gebruiken tijdens het dweilen",
      water_electrolysis: "Water elektrolyse",
      water_electrolysis_desc: "Water steriliseren met elektrolyse",
      auto_water_refilling: "Auto water bijvullen",
      auto_water_refilling_desc: "Automatisch schoonwatertank bijvullen",
      auto_dust_collecting: "Auto stof verzamelen",
      auto_dust_collecting_desc: "Automatisch stofbak legen na reiniging",
      smart_washing: "Slim wassen",
      smart_washing_desc: "Wassen aanpassen op basis van vuilniveau",
      mop_wash_level: "Dweil wasniveau",
      mop_wash_level_desc: "Intensiteit van dweil wassen",
      washing_mode: "Wasmodus",
      washing_mode_desc: "Intensiteit van dweil wassen",
      washing_light: "Licht",
      washing_standard: "Standaard",
      washing_deep: "Diep",
      water_temperature: "Watertemperatuur",
      water_temperature_desc: "Temperatuur voor dweil wassen",
      temp_normal: "Normaal",
      temp_mild: "Mild",
      temp_warm: "Warm",
      temp_hot: "Heet",
      auto_drying: "Auto drogen",
      auto_drying_desc: "Automatisch dweil drogen na reiniging",
      drying_time: "Droogtijd",
      drying_time_desc: "Duur van dweil drogen",
      auto_rewashing: "Auto herwassen",
      auto_rewashing_desc: "Automatisch dweil herwassen wanneer vuil",
      rewashing_off: "Uit",
      rewashing_in_deep_mode: "In diepe modus",
      rewashing_in_all_modes: "In alle modi",
      off_peak_charging: "Daluren opladen",
      off_peak_charging_desc: "Opladen tijdens daluren om energie te besparen",
      off_peak_charging_start: "Starttijd",
      off_peak_charging_end: "Eindtijd",
      station_cleaning: "Station reiniging",
      station_cleaning_desc: "Het basisstation reinigen",
      clean_now: "Nu reinigen",
      self_repair: "Zelfreparatie",
      self_repair_desc: "Station zelfreparatie diagnose uitvoeren",
      repair_now: "Repareren",
      scraper_frequency: "Schraperfrequentie",
      scraper_frequency_desc: "Hoe vaak de rubberen schraper reinigen"
    },
    ai_detection: {
      title: "AI & Detectie",
      intelligent_recognition: "Intelligente herkenning",
      intelligent_recognition_desc: "AI-gestuurde omgevingsherkenning",
      ai_obstacle_detection: "AI-obstakeldetectie",
      ai_obstacle_detection_desc: "AI gebruiken om obstakels te herkennen en vermijden",
      fuzzy_obstacle_detection: "Vage obstakeldetectie",
      fuzzy_obstacle_detection_desc: "Zachte of onduidelijke obstakels detecteren",
      ai_obstacle_image_upload: "Obstakelfoto's uploaden",
      ai_obstacle_image_upload_desc: "Foto's van obstakels uploaden voor analyse",
      ai_obstacle_picture: "Obstakelfoto",
      ai_obstacle_picture_desc: "Foto's maken van gedetecteerde obstakels",
      ai_pet_detection: "Huisdierdetectie",
      ai_pet_detection_desc: "Huisdieren detecteren en vermijden",
      ai_pet_avoidance: "Huisdier vermijden",
      ai_pet_avoidance_desc: "Actief gedetecteerde huisdieren vermijden",
      pet_focused_detection: "Huisdier-gerichte detectie",
      pet_focused_detection_desc: "Verbeterde detectie voor huisdiergebieden",
      pet_picture: "Huisdierfoto",
      pet_picture_desc: "Foto's maken van gedetecteerde huisdieren",
      ai_human_detection: "Personendetectie",
      ai_human_detection_desc: "Personen detecteren en vermijden",
      human_follow: "Persoon volgen",
      human_follow_desc: "Personen volgen voor interactieve reiniging",
      ai_furniture_detection: "Meubeldetectie",
      ai_furniture_detection_desc: "Meubels detecteren en eromheen navigeren",
      ai_fluid_detection: "Vloeistofdetectie",
      ai_fluid_detection_desc: "Vloeistoffen detecteren en vermijden",
      fill_light: "Bijverlichting",
      fill_light_desc: "Bijverlichting gebruiken voor betere detectie",
      camera_light_auto: "Auto camerahelderheid",
      camera_light_auto_desc: "Cameralicht helderheid automatisch aanpassen",
      camera_light_brightness: "Cameralicht helderheid",
      camera_light_brightness_desc: "Handmatig cameralicht helderheidsniveau"
    },
    station_controls: {
      title: "Stationbediening",
      self_clean: "Zelfreiniging",
      self_clean_desc: "Start de dweilwascyclus",
      manual_drying: "Handmatig drogen",
      manual_drying_desc: "Start de dweildroogcyclus",
      water_tank_draining: "Watertank legen",
      water_tank_draining_desc: "Vuil water uit de tank laten lopen",
      base_station_cleaning: "Station reinigen",
      base_station_cleaning_desc: "Reinig het basisstation",
      empty_water_tank: "Watertank leegmaken",
      empty_water_tank_desc: "De wateropvangtank leegmaken",
      start_auto_empty: "Auto legen",
      start_auto_empty_desc: "Start automatisch stofbak legen",
      start_recleaning: "Her-reiniging",
      start_recleaning_desc: "Start her-reiniging van gemiste gebieden",
      clear_warning: "Waarschuwing wissen",
      clear_warning_desc: "Huidige waarschuwingsberichten wissen"
    },
    map: {
      title: "Kaartinstellingen",
      multi_floor: "Multi-verdiepingen kaart",
      multi_floor_desc: "Ondersteuning voor meerdere verdiepingskaarten inschakelen",
      rotation: "Kaartrotatie",
      rotation_desc: "Kaartoriëntatie draaien",
      mapping_actions: "Kaartacties",
      start_mapping: "Start kaartmaking",
      start_fast_mapping: "Snelle kaartmaking"
    }
  }
}, Zw = {
  // Common
  common: {
    run: "Esegui",
    start: "Avvia",
    stop: "Ferma",
    cancel: "Annulla",
    save: "Salva",
    apply: "Applica",
    reset: "Reimposta"
  },
  // Room Selector
  room_selector: {
    title: "Seleziona stanze",
    selected_count: "{{count}} selezionate"
  },
  // Map Selector
  map_selector: {
    unknown: "Mappa sconosciuta"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Nessuna mappa disponibile",
    looking_for: "Ricerca di: {{entity}}",
    room_overlay: "Clicca sui numeri delle stanze per selezionarle per la pulizia",
    zone_overlay_create: "Clicca sulla mappa per posizionare una zona di pulizia",
    zone_overlay_resize: "Trascina gli angoli per ridimensionare, clicca altrove per riposizionare",
    clear_zone: "Cancella zona",
    switch_to_list: "Passa alla vista elenco",
    switch_to_map: "Passa alla vista mappa",
    room_list_overlay: "Tocca le stanze per selezionarle per la pulizia",
    no_rooms: "Nessuna stanza disponibile",
    zoom_in: "Ingrandisci",
    zoom_out: "Riduci",
    zoom_reset: "Reimposta zoom",
    lock_map: "Blocca mappa",
    unlock_map: "Sblocca mappa"
  },
  // Mode Tabs
  modes: {
    room: "Stanza",
    all: "Tutto",
    zone: "Zona"
  },
  // Action Buttons
  actions: {
    clean: "Pulisci",
    clean_all: "Pulisci tutto",
    clean_rooms: "Pulisci {{count}} stanza",
    clean_rooms_plural: "Pulisci {{count}} stanze",
    select_rooms: "Seleziona stanze",
    zone_clean: "Pulizia zona",
    pause: "Pausa",
    resume: "Riprendi",
    stop: "Stop",
    stop_and_dock: "Stop e rientra",
    dock: "Rientra alla base"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} selezionata",
    deselected_room: "{{name}} deselezionata",
    paused: "Pulizia in pausa",
    stopped: "Pulizia interrotta",
    docked: "Rientro alla base in corso",
    cleaning_started: "Pulizia avviata",
    resuming: "Ripresa della pulizia",
    starting_full_clean: "Avvio pulizia completa della casa",
    pausing_vacuum: "Messa in pausa del robot",
    stopping_vacuum: "Arresto del robot",
    stopping_and_docking: "Arresto e rientro alla base",
    vacuum_docking: "Il robot sta rientrando alla base",
    starting_room_clean: "Avvio pulizia per {{count}} stanza selezionata",
    starting_room_clean_plural: "Avvio pulizia per {{count}} stanze selezionate",
    starting_zone_clean: "Avvio pulizia della zona",
    select_rooms_first: "Seleziona prima le stanze da pulire",
    cannot_determine_map: "Impossibile determinare le dimensioni della mappa",
    select_zone_first: "Seleziona una zona sulla mappa"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Stanze selezionate:",
    selected_label: "Selezionate:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Personalizzato: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Visualizza scorciatoie",
    repeats_tooltip: "Passaggi di pulizia",
    vac_and_mop: "Aspirazione e lavaggio",
    mop_after_vac: "Lavaggio dopo aspirazione",
    vacuum: "Aspirazione",
    mop: "Lavaggio"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Modalità di pulizia",
    clean_genius: "CleanGenius",
    custom: "Personalizzata"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Scorciatoie",
    no_shortcuts: "Nessuna scorciatoia disponibile",
    create_hint: "Crea scorciatoie nell'app Dreame per avviare rapidamente le tue routine di pulizia preferite"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Modalità di pulizia",
    suction_power_title: "Potenza di aspirazione",
    max_plus_description: "La potenza di aspirazione sarà aumentata al livello massimo. Modalità utilizzabile una sola volta.",
    wetness_title: "Livello di umidità",
    slightly_dry: "Leggermente asciutto",
    moist: "Umido",
    wet: "Bagnato",
    water_volume_title: "Volume d'acqua",
    water_low: "Basso",
    water_medium: "Medio",
    water_high: "Alto",
    mop_washing_frequency_title: "Frequenza lavaggio mop",
    route_title: "Percorso",
    mop_pressure_title: "Pressione Mop",
    mop_temperature_title: "Temperatura dell'acqua"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Leggera",
    normal: "Normale"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normale",
    warm: "Calda"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Personalizza",
    description: "Imposta preferenze personalizzate di aspirazione e lavaggio per ogni area.",
    set_button: "Imposta",
    vacuum: "Aspira",
    mop: "Lava",
    vac_and_mop: "Aspira e lava",
    cycles: "Cicli",
    apply_to_all: "Applica a tutte le stanze",
    click_room_hint: "Clicca su un'area per cambiare la modalità.",
    intelligent_recommendation: "Raccomandazione intelligente",
    select_room: "Seleziona stanza",
    settings_for: "Impostazioni di {{room}}",
    no_rooms: "Nessuna stanza disponibile"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Modalità di pulizia",
    deep_cleaning: "Pulizia profonda"
  },
  // Header
  header: {
    battery: "Batteria",
    status: "Stato",
    area: "Area",
    time: "Tempo"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Silenzioso",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Per stanza",
    by_area: "Per area",
    by_time: "Per tempo"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Veloce",
    standard: "Standard",
    intensive: "Intensivo",
    deep: "Profondo"
  },
  // Errors
  errors: {
    entity_not_found: "Entità non trovata: {{entity}}",
    failed_to_load: "Impossibile caricare i dati entità",
    service_call_failed: "Impossibile inviare il comando all'aspirapolvere",
    entity_unavailable: "Aspirapolvere non disponibile"
  },
  // Settings Panel
  settings: {
    title: "Impostazioni",
    consumables: {
      title: "Materiali di consumo",
      main_brush: "Spazzola principale",
      side_brush: "Spazzola laterale",
      filter: "Filtro",
      sensor: "Sensore",
      mop_pad: "Panno lavapavimenti",
      silver_ion: "Ioni d'argento",
      detergent: "Detergente",
      squeegee: "Tergipavimento",
      tank_filter: "Filtro serbatoio",
      onboard_dirty_water_tank: "Serbatoio acqua sporca integrato",
      dirty_water_channel: "Canale acqua sporca",
      deodorizer: "Deodorante",
      wheel: "Ruota",
      scale_inhibitor: "Anticalcare",
      fluffing_roller: "Rullo spazzolatore",
      roller_mop_filter: "Filtro panno rotante",
      water_outlet_filter: "Filtro uscita acqua",
      remaining: "rimanente",
      reset: "Reimposta"
    },
    device_info: {
      title: "Informazioni dispositivo",
      firmware: "Firmware",
      total_area: "Area totale pulita",
      total_time: "Tempo totale di pulizia",
      total_cleans: "Pulizie totali",
      wifi_ssid: "Rete Wi-Fi",
      wifi_signal: "Potenza segnale",
      ip_address: "Indirizzo IP"
    },
    quick_settings: {
      title: "Impostazioni rapide",
      child_lock: "Blocco bambini",
      child_lock_desc: "Disabilita i pulsanti fisici del dispositivo",
      resume_cleaning: "Riprendi pulizia",
      resume_cleaning_desc: "Riprendi automaticamente la pulizia dopo la ricarica",
      dnd: "Non disturbare",
      dnd_desc: "Orari silenziosi con attività ridotta",
      dnd_start: "Ora di inizio",
      dnd_end: "Ora di fine",
      dnd_disable_resume: "Disabilita ripresa",
      dnd_disable_resume_desc: "Non riprendere la pulizia durante DND",
      dnd_disable_auto_empty: "Disabilita svuotamento auto",
      dnd_disable_auto_empty_desc: "Non svuotare automaticamente durante DND",
      dnd_reduce_volume: "Riduci volume",
      dnd_reduce_volume_desc: "Abbassa il volume del dispositivo durante DND"
    },
    volume: {
      title: "Volume e suoni",
      volume: "Volume",
      test_sound: "Individua",
      muted: "Disattivato",
      voice_assistant: "Assistente vocale",
      voice_assistant_desc: "Abilita annunci e feedback vocali",
      voice_language: "Lingua voce",
      voice_language_desc: "Lingua per gli annunci vocali",
      streaming_voice_prompt: "Prompt vocale in streaming",
      streaming_voice_prompt_desc: "Feedback vocale in tempo reale durante la pulizia"
    },
    carpet: {
      title: "Impostazioni tappeti",
      carpet_recognition: "Riconoscimento tappeti",
      carpet_recognition_desc: "Rileva automaticamente i tappeti",
      carpet_avoidance: "Evita tappeti",
      carpet_avoidance_desc: "Evita i tappeti durante il lavaggio",
      clean_carpets_first: "Pulisci tappeti prima",
      clean_carpets_first_desc: "Aspira i tappeti prima di lavare i pavimenti",
      carpet_boost: "Potenza tappeti",
      carpet_boost_desc: "Aumenta la potenza di aspirazione sui tappeti",
      intensive_cleaning: "Pulizia intensiva",
      intensive_cleaning_desc: "Pulizia profonda con passaggi extra",
      side_brush_rotate: "Rotazione spazzola laterale",
      side_brush_rotate_desc: "Ruota la spazzola laterale sui tappeti",
      sensitivity: "Sensibilità tappeti",
      sensitivity_desc: "Livello di sensibilità di rilevamento",
      sensitivity_low: "Bassa",
      sensitivity_medium: "Media",
      sensitivity_high: "Alta",
      cleaning_mode: "Pulizia tappeti",
      cleaning_mode_desc: "Come gestire i tappeti durante la pulizia",
      mode_vacuum: "Aspira",
      mode_vacuum_and_mop: "Asp. e Lava",
      mode_avoidance: "Evita",
      mode_ignore: "Ignora",
      vacuum_mode: "Modalità aspirazione",
      vacuum_adaptation: "Solleva panno",
      vacuum_remove_mop: "Rimuovi panno"
    },
    floor: {
      title: "Impostazioni pavimento",
      obstacle_avoidance: "Evitamento ostacoli",
      obstacle_avoidance_desc: "Usa i sensori per evitare ostacoli",
      collision_avoidance: "Evita collisioni",
      collision_avoidance_desc: "Rallenta vicino a pareti e mobili",
      auto_mount_mop: "Monta panno auto",
      auto_mount_mop_desc: "Montare automaticamente il panno quando necessario",
      auto_recleaning: "Ri-pulizia auto",
      auto_recleaning_desc: "Ri-pulire automaticamente le aree mancate",
      recleaning_off: "Disattivato",
      recleaning_in_deep_mode: "In modalità profonda",
      recleaning_in_all_modes: "In tutte le modalità",
      stain_avoidance: "Evitamento macchie",
      stain_avoidance_desc: "Evita le macchie rilevate",
      tight_mopping: "Lavaggio accurato",
      tight_mopping_desc: "Lava più vicino a pareti e bordi",
      floor_direction_cleaning: "Pulizia direzione pavimento",
      floor_direction_cleaning_desc: "Pulisce seguendo la direzione delle venature del pavimento",
      large_particles_boost: "Potenziamento particelle grandi",
      large_particles_boost_desc: "Aumenta l'aspirazione per detriti grandi",
      pet_focused_cleaning: "Pulizia aree animali",
      pet_focused_cleaning_desc: "Pulizia extra nelle aree degli animali domestici",
      low_lying_area_frequency: "Frequenza zone basse",
      low_lying_area_frequency_desc: "Quanto spesso pulire le zone basse sotto i mobili"
    },
    edge_corner: {
      title: "Bordi e Angoli",
      side_reach: "Portata laterale",
      side_reach_desc: "Estendere la spazzola laterale per i bordi",
      mop_extend: "Estensione panno",
      mop_extend_desc: "Estendere il panno per bordi e angoli",
      gap_cleaning: "Pulizia fessure",
      gap_cleaning_desc: "Pulire spazi stretti tra i mobili",
      mopping_under: "Lavaggio sotto mobili",
      mopping_under_desc: "Estendere il panno sotto mobili bassi",
      extend_frequency: "Frequenza estensione",
      extend_frequency_desc: "Frequenza di estensione per pulizia bordi",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligente",
      frequency_high: "Alta"
    },
    dock: {
      title: "Impostazioni base",
      self_clean: "Autopulizia",
      self_clean_desc: "Lavaggio automatico del panno dopo la pulizia",
      auto_empty_mode: "Svuotamento auto",
      auto_empty_mode_desc: "Quando svuotare automaticamente il contenitore",
      auto_empty_frequency: "Frequenza svuotamento auto",
      auto_empty_frequency_desc: "Quante pulizie prima dello svuotamento auto",
      empty_off: "Disattivato",
      empty_standard: "Standard",
      empty_high_frequency: "Alta frequenza",
      empty_low_frequency: "Bassa frequenza",
      auto_detergent: "Detergente auto",
      auto_detergent_desc: "Aggiungere automaticamente detergente durante il lavaggio",
      mop_washing_with_detergent: "Lavaggio panno con detergente",
      mop_washing_with_detergent_desc: "Usa detergente durante il lavaggio del panno",
      mopping_with_detergent: "Lavaggio con detergente",
      mopping_with_detergent_desc: "Usa detergente durante il lavaggio del pavimento",
      water_electrolysis: "Elettrolisi acqua",
      water_electrolysis_desc: "Sterilizza l'acqua tramite elettrolisi",
      auto_water_refilling: "Riempimento auto acqua",
      auto_water_refilling_desc: "Riempie automaticamente il serbatoio acqua pulita",
      auto_dust_collecting: "Raccolta auto polvere",
      auto_dust_collecting_desc: "Svuota automaticamente il contenitore dopo la pulizia",
      smart_washing: "Lavaggio intelligente",
      smart_washing_desc: "Regolare il lavaggio in base allo sporco",
      mop_wash_level: "Livello lavaggio panno",
      mop_wash_level_desc: "Intensità del lavaggio del panno",
      washing_mode: "Modalità lavaggio",
      washing_mode_desc: "Intensità del lavaggio del panno",
      washing_light: "Leggero",
      washing_standard: "Standard",
      washing_deep: "Profondo",
      water_temperature: "Temperatura dell'acqua",
      water_temperature_desc: "Temperatura per il lavaggio del panno",
      temp_normal: "Normale",
      temp_mild: "Mite",
      temp_warm: "Tiepida",
      temp_hot: "Calda",
      auto_drying: "Asciugatura auto",
      auto_drying_desc: "Asciugare automaticamente il panno dopo la pulizia",
      drying_time: "Tempo asciugatura",
      drying_time_desc: "Durata asciugatura del panno",
      auto_rewashing: "Rilavaggio automatico",
      auto_rewashing_desc: "Rilavare automaticamente il panno quando sporco",
      rewashing_off: "Disattivato",
      rewashing_in_deep_mode: "In modalità profonda",
      rewashing_in_all_modes: "In tutte le modalità",
      off_peak_charging: "Ricarica fuori picco",
      off_peak_charging_desc: "Ricaricare durante le ore non di punta per risparmiare energia",
      off_peak_charging_start: "Ora di inizio",
      off_peak_charging_end: "Ora di fine",
      station_cleaning: "Pulizia stazione",
      station_cleaning_desc: "Pulire la stazione base",
      clean_now: "Pulisci ora",
      self_repair: "Autoriparazione",
      self_repair_desc: "Esegui la diagnostica di autoriparazione della stazione",
      repair_now: "Ripara",
      scraper_frequency: "Frequenza raschietto",
      scraper_frequency_desc: "Quanto spesso pulire il raschietto in gomma"
    },
    ai_detection: {
      title: "AI e rilevamento",
      intelligent_recognition: "Riconoscimento intelligente",
      intelligent_recognition_desc: "Riconoscimento dell'ambiente basato su AI",
      ai_obstacle_detection: "Rilevamento ostacoli AI",
      ai_obstacle_detection_desc: "Usa l'AI per identificare ed evitare ostacoli",
      fuzzy_obstacle_detection: "Rilevamento ostacoli sfocati",
      fuzzy_obstacle_detection_desc: "Rileva ostacoli morbidi o poco chiari",
      ai_obstacle_image_upload: "Caricamento immagini ostacoli",
      ai_obstacle_image_upload_desc: "Carica immagini degli ostacoli per l'analisi",
      ai_obstacle_picture: "Foto ostacoli",
      ai_obstacle_picture_desc: "Scatta foto degli ostacoli rilevati",
      ai_pet_detection: "Rilevamento animali domestici",
      ai_pet_detection_desc: "Rileva ed evita animali domestici",
      ai_pet_avoidance: "Evita animali domestici",
      ai_pet_avoidance_desc: "Evita attivamente gli animali rilevati",
      pet_focused_detection: "Rilevamento focalizzato animali",
      pet_focused_detection_desc: "Rilevamento migliorato per le aree degli animali",
      pet_picture: "Foto animali",
      pet_picture_desc: "Scatta foto degli animali rilevati",
      ai_human_detection: "Rilevamento persone",
      ai_human_detection_desc: "Rileva ed evita persone",
      human_follow: "Segui persone",
      human_follow_desc: "Segui le persone per una pulizia interattiva",
      ai_furniture_detection: "Rilevamento mobili",
      ai_furniture_detection_desc: "Rileva e aggira i mobili",
      ai_fluid_detection: "Rilevamento liquidi",
      ai_fluid_detection_desc: "Rileva ed evita liquidi",
      fill_light: "Luce di riempimento",
      fill_light_desc: "Usa la luce di riempimento per un rilevamento migliore",
      camera_light_auto: "Luminosità camera automatica",
      camera_light_auto_desc: "Regola automaticamente la luminosità della luce della camera",
      camera_light_brightness: "Luminosità luce camera",
      camera_light_brightness_desc: "Livello di luminosità manuale della luce della camera"
    },
    station_controls: {
      title: "Controlli stazione",
      self_clean: "Autopulizia",
      self_clean_desc: "Avvia il ciclo di lavaggio del panno",
      manual_drying: "Asciugatura manuale",
      manual_drying_desc: "Avvia il ciclo di asciugatura del panno",
      water_tank_draining: "Svuota serbatoio",
      water_tank_draining_desc: "Scarica l'acqua sporca dal serbatoio",
      base_station_cleaning: "Pulisci stazione",
      base_station_cleaning_desc: "Pulisci la stazione base",
      empty_water_tank: "Svuota serbatoio acqua",
      empty_water_tank_desc: "Svuota il serbatoio di raccolta dell'acqua",
      start_auto_empty: "Svuotamento automatico",
      start_auto_empty_desc: "Avvia lo svuotamento automatico del contenitore",
      start_recleaning: "Ripulizia",
      start_recleaning_desc: "Avvia la ripulizia delle aree mancate",
      clear_warning: "Cancella avviso",
      clear_warning_desc: "Cancella i messaggi di avviso correnti"
    },
    map: {
      title: "Impostazioni mappa",
      multi_floor: "Mappa multipiano",
      multi_floor_desc: "Abilita il supporto per mappe a più piani",
      rotation: "Rotazione mappa",
      rotation_desc: "Ruota l'orientamento della mappa",
      mapping_actions: "Azioni mappatura",
      start_mapping: "Avvia mappatura",
      start_fast_mapping: "Mappatura veloce"
    }
  }
}, Yw = {
  // Common
  common: {
    run: "Uruchom",
    start: "Start",
    stop: "Stop",
    cancel: "Anuluj",
    save: "Zapisz",
    apply: "Zastosuj",
    reset: "Resetuj"
  },
  // Room Selector
  room_selector: {
    title: "Wybierz pokoje",
    selected_count: "Wybrano: {{count}}"
  },
  // Map Selector
  map_selector: {
    unknown: "Nieznana mapa"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Mapa niedostępna",
    looking_for: "Szukanie: {{entity}}",
    room_overlay: "Kliknij numery pokojów, aby wybrać je do sprzątania",
    zone_overlay_create: "Kliknij na mapie, aby umieścić strefę sprzątania",
    zone_overlay_resize: "Przeciągnij rogi, aby zmienić rozmiar, kliknij obok, aby zmienić pozycję",
    clear_zone: "Wyczyść strefę",
    switch_to_list: "Przełącz na widok listy",
    switch_to_map: "Przełącz na widok mapy",
    room_list_overlay: "Dotknij pokoje, aby wybrać do sprzątania",
    no_rooms: "Brak dostępnych pokoi",
    zoom_in: "Powiększ",
    zoom_out: "Pomniejsz",
    zoom_reset: "Resetuj powiększenie",
    lock_map: "Zablokuj mapę",
    unlock_map: "Odblokuj mapę"
  },
  // Mode Tabs
  modes: {
    room: "Pokój",
    all: "Wszystko",
    zone: "Strefa"
  },
  // Action Buttons
  actions: {
    clean: "Sprzątaj",
    clean_all: "Sprzątaj wszystko",
    clean_rooms: "Sprzątaj {{count}} pokój",
    clean_rooms_plural: "Sprzątaj {{count}} pokoje/pokoi",
    select_rooms: "Wybierz pokoje",
    zone_clean: "Sprzątanie strefowe",
    pause: "Pauza",
    resume: "Wznów",
    stop: "Zatrzymaj",
    stop_and_dock: "Zatrzymaj i wróć",
    dock: "Baza"
  },
  // Toast Messages
  toast: {
    selected_room: "Wybrano {{name}}",
    deselected_room: "Odznaczono {{name}}",
    paused: "Wstrzymano sprzątanie",
    stopped: "Zatrzymano sprzątanie",
    docked: "Powrót do bazy",
    cleaning_started: "Rozpoczęto sprzątanie",
    resuming: "Wznawianie sprzątania",
    starting_full_clean: "Rozpoczynanie sprzątania całego domu",
    pausing_vacuum: "Wstrzymywanie odkurzacza",
    stopping_vacuum: "Zatrzymywanie odkurzacza",
    stopping_and_docking: "Zatrzymywanie i powrót do bazy",
    vacuum_docking: "Odkurzacz wraca do bazy",
    starting_room_clean: "Rozpoczynanie sprzątania {{count}} wybranego pokoju",
    starting_room_clean_plural: "Rozpoczynanie sprzątania {{count}} wybranych pokojów",
    starting_zone_clean: "Rozpoczynanie sprzątania strefowego",
    select_rooms_first: "Najpierw wybierz pokoje do sprzątania",
    cannot_determine_map: "Nie można określić wymiarów mapy",
    select_zone_first: "Najpierw wybierz strefę na mapie"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Wybrane pokoje:",
    selected_label: "Wybrano:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Własne: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Pokaż skróty",
    repeats_tooltip: "Liczba przejść",
    vac_and_mop: "Odkurzanie i mopowanie",
    mop_after_vac: "Mopowanie po odkurzaniu",
    vacuum: "Odkurzanie",
    mop: "Mopowanie"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Tryb sprzątania",
    clean_genius: "CleanGenius",
    custom: "Własny"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Skróty",
    no_shortcuts: "Brak dostępnych skrótów",
    create_hint: "Utwórz skróty w aplikacji Dreame, aby szybko uruchamiać ulubione procedury sprzątania"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Tryb sprzątania",
    suction_power_title: "Siła ssania",
    max_plus_description: "Siła ssania zostanie zwiększona do najwyższego poziomu (tryb jednorazowy).",
    wetness_title: "Wilgotność mopa",
    slightly_dry: "Lekko suchy",
    moist: "Wilgotny",
    wet: "Mokry",
    water_volume_title: "Ilość wody",
    water_low: "Niska",
    water_medium: "Średnia",
    water_high: "Wysoka",
    mop_washing_frequency_title: "Częstotliwość mycia mopa",
    route_title: "Trasa",
    mop_pressure_title: "Siła nacisku mopa",
    mop_temperature_title: "Temperatura wody"
  },
  // Mop pressure levels
  mop_pressure: {
    light: "Lekki",
    normal: "Normalny"
  },
  // Mop temperature levels
  mop_temperature: {
    normal: "Normalna",
    warm: "Ciepła"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Dostosuj",
    description: "Ustaw spersonalizowane preferencje ssania i mopowania dla każdego obszaru.",
    set_button: "Ustaw",
    vacuum: "Odkurzaj",
    mop: "Mopuj",
    vac_and_mop: "Odkurzaj i mopuj",
    cycles: "Cykle",
    apply_to_all: "Zastosuj do wszystkich pomieszczeń",
    click_room_hint: "Kliknij obszar, aby zmienić tryb.",
    intelligent_recommendation: "Inteligentna rekomendacja",
    select_room: "Wybierz pokój",
    settings_for: "Ustawienia {{room}}",
    no_rooms: "Brak dostępnych pokoi"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Tryb sprzątania",
    deep_cleaning: "Głębokie czyszczenie"
  },
  // Header
  header: {
    battery: "Bateria",
    status: "Status",
    area: "Powierzchnia",
    time: "Czas"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Cichy",
    standard: "Standardowy",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Według pokoju",
    by_area: "Według powierzchni",
    by_time: "Według czasu"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Szybki",
    standard: "Standardowy",
    intensive: "Intensywny",
    deep: "Głęboki"
  },
  // Errors
  errors: {
    entity_not_found: "Nie znaleziono encji: {{entity}}",
    failed_to_load: "Nie udało się załadować danych encji",
    service_call_failed: "Nie udało się wysłać polecenia do odkurzacza",
    entity_unavailable: "Odkurzacz niedostępny"
  },
  // Settings Panel
  settings: {
    title: "Ustawienia",
    consumables: {
      title: "Materiały eksploatacyjne",
      main_brush: "Szczotka główna",
      side_brush: "Szczotka boczna",
      filter: "Filtr",
      sensor: "Czujnik",
      mop_pad: "Nakładka mopująca",
      silver_ion: "Jony srebra",
      detergent: "Detergent",
      squeegee: "Ściągaczka",
      tank_filter: "Filtr zbiornika",
      onboard_dirty_water_tank: "Wbudowany zbiornik brudnej wody",
      dirty_water_channel: "Kanał brudnej wody",
      deodorizer: "Dezodorant",
      wheel: "Koło",
      scale_inhibitor: "Środek antywapniowy",
      fluffing_roller: "Wałek napuszający",
      roller_mop_filter: "Filtr mopa rolkowego",
      water_outlet_filter: "Filtr wylotu wody",
      remaining: "pozostało",
      reset: "Resetuj"
    },
    device_info: {
      title: "Informacje o urządzeniu",
      firmware: "Oprogramowanie układowe",
      total_area: "Całkowita powierzchnia sprzątania",
      total_time: "Całkowity czas sprzątania",
      total_cleans: "Liczba sprzątań",
      wifi_ssid: "Sieć Wi-Fi",
      wifi_signal: "Siła sygnału",
      ip_address: "Adres IP"
    },
    quick_settings: {
      title: "Szybkie ustawienia",
      child_lock: "Blokada rodzicielska",
      child_lock_desc: "Wyłącz przyciski fizyczne na urządzeniu",
      resume_cleaning: "Wznów sprzątanie",
      resume_cleaning_desc: "Automatycznie wznów sprzątanie po naładowaniu",
      dnd: "Nie przeszkadzać (DND)",
      dnd_desc: "Godziny ciszy z ograniczoną aktywnością",
      dnd_start: "Czas rozpoczęcia",
      dnd_end: "Czas zakończenia",
      dnd_disable_resume: "Wyłącz wznawianie",
      dnd_disable_resume_desc: "Nie wznawiaj sprzątania podczas DND",
      dnd_disable_auto_empty: "Wyłącz auto opróżnianie",
      dnd_disable_auto_empty_desc: "Nie opróżniaj automatycznie podczas DND",
      dnd_reduce_volume: "Zmniejsz głośność",
      dnd_reduce_volume_desc: "Zmniejsz głośność urządzenia podczas DND"
    },
    volume: {
      title: "Głośność i dźwięk",
      volume: "Głośność",
      test_sound: "Zlokalizuj urządzenie",
      muted: "Wyciszony",
      voice_assistant: "Asystent głosowy",
      voice_assistant_desc: "Włącz komunikaty głosowe i informacje zwrotne",
      voice_language: "Język głosu",
      voice_language_desc: "Język komunikatów głosowych",
      streaming_voice_prompt: "Komunikaty głosowe na żywo",
      streaming_voice_prompt_desc: "Informacje głosowe w czasie rzeczywistym podczas sprzątania"
    },
    carpet: {
      title: "Ustawienia dywanów",
      carpet_recognition: "Rozpoznawanie dywanów",
      carpet_recognition_desc: "Automatyczne rozpoznawanie dywanów",
      carpet_avoidance: "Unikanie dywanów",
      carpet_avoidance_desc: "Unikaj dywanów podczas mopowania",
      clean_carpets_first: "Najpierw dywany",
      clean_carpets_first_desc: "Odkurzaj dywany przed mopowaniem",
      carpet_boost: "Wzmocnienie na dywanie",
      carpet_boost_desc: "Zwiększ siłę ssania na dywanach",
      intensive_cleaning: "Intensywne czyszczenie",
      intensive_cleaning_desc: "Głębokie czyszczenie z dodatkowymi przejściami",
      side_brush_rotate: "Obracanie szczotki bocznej",
      side_brush_rotate_desc: "Obracaj szczotkę boczną na dywanach",
      sensitivity: "Czułość wykrywania dywanów",
      sensitivity_desc: "Poziom czułości wykrywania",
      sensitivity_low: "Niska",
      sensitivity_medium: "Średnia",
      sensitivity_high: "Wysoka",
      cleaning_mode: "Czyszczenie dywanów",
      cleaning_mode_desc: "Jak postępować z dywanami podczas sprzątania",
      mode_vacuum: "Odkurzanie",
      mode_vacuum_and_mop: "Odk. i Mop",
      mode_avoidance: "Unikaj",
      mode_ignore: "Ignoruj",
      vacuum_mode: "Tryb odkurzania",
      vacuum_adaptation: "Podnieś mop",
      vacuum_remove_mop: "Usuń mop"
    },
    floor: {
      title: "Ustawienia podłogi",
      obstacle_avoidance: "Omijanie przeszkód",
      obstacle_avoidance_desc: "Użyj czujników do omijania przeszkód",
      collision_avoidance: "Unikanie kolizji",
      collision_avoidance_desc: "Zwolnij przy ścianach i meblach",
      auto_mount_mop: "Auto montaż mopa",
      auto_mount_mop_desc: "Automatycznie zamontuj nakładkę mopa",
      auto_recleaning: "Automatyczne doczyszczanie",
      auto_recleaning_desc: "Automatycznie doczyszczaj pominięte obszary",
      recleaning_off: "Wył",
      recleaning_in_deep_mode: "W trybie głębokim",
      recleaning_in_all_modes: "We wszystkich trybach",
      stain_avoidance: "Omijanie plam",
      stain_avoidance_desc: "Omijaj wykryte plamy",
      tight_mopping: "Dokładne mopowanie",
      tight_mopping_desc: "Mopuj bliżej ścian i krawędzi",
      floor_direction_cleaning: "Czyszczenie wzdłuż podłogi",
      floor_direction_cleaning_desc: "Sprzątaj wzdłuż kierunku słojów podłogi",
      large_particles_boost: "Wzmocnienie dla dużych cząstek",
      large_particles_boost_desc: "Zwiększ siłę ssania dla dużych zanieczyszczeń",
      pet_focused_cleaning: "Sprzątanie stref zwierząt",
      pet_focused_cleaning_desc: "Dodatkowe sprzątanie w strefach zwierząt",
      low_lying_area_frequency: "Częstotliwość niskich stref",
      low_lying_area_frequency_desc: "Jak często sprzątać niskie obszary pod meblami"
    },
    edge_corner: {
      title: "Krawędzie i Rogi",
      side_reach: "Zasięg boczny",
      side_reach_desc: "Wysuń szczotkę boczną do krawędzi",
      mop_extend: "Wysunięcie mopa",
      mop_extend_desc: "Wysuń mop do krawędzi i rogów",
      gap_cleaning: "Czyszczenie szczelin",
      gap_cleaning_desc: "Czyść wąskie szczeliny między meblami",
      mopping_under: "Mopowanie pod meblami",
      mopping_under_desc: "Wysuń mop pod niskie meble",
      extend_frequency: "Częstotliwość wysuwania",
      extend_frequency_desc: "Jak często wysuwać mop do czyszczenia krawędzi",
      frequency_standard: "Standardowa",
      frequency_intelligent: "Inteligentna",
      frequency_high: "Wysoka"
    },
    dock: {
      title: "Ustawienia stacji",
      self_clean: "Samooczyszczanie",
      self_clean_desc: "Auto mycie mopa po sprzątaniu",
      auto_empty_mode: "Tryb auto opróżniania",
      auto_empty_mode_desc: "Kiedy automatycznie opróżniać pojemnik",
      auto_empty_frequency: "Częstotliwość auto opróżniania",
      auto_empty_frequency_desc: "Ile sprzątań przed auto opróżnianiem",
      empty_off: "Wył",
      empty_standard: "Standardowy",
      empty_high_frequency: "Wysoka częst.",
      empty_low_frequency: "Niska częst.",
      auto_detergent: "Auto detergent",
      auto_detergent_desc: "Automatycznie dodawaj detergent podczas mycia",
      mop_washing_with_detergent: "Mycie mopa z detergentem",
      mop_washing_with_detergent_desc: "Używaj detergentu podczas mycia mopa",
      mopping_with_detergent: "Mopowanie z detergentem",
      mopping_with_detergent_desc: "Używaj detergentu podczas mopowania",
      water_electrolysis: "Elektroliza wody",
      water_electrolysis_desc: "Sterylizacja wody za pomocą elektrolizy",
      auto_water_refilling: "Auto uzupełnianie wody",
      auto_water_refilling_desc: "Automatyczne uzupełnianie zbiornika czystej wody",
      auto_dust_collecting: "Auto zbieranie kurzu",
      auto_dust_collecting_desc: "Automatyczne opróżnianie pojemnika po sprzątaniu",
      smart_washing: "Inteligentne mycie",
      smart_washing_desc: "Dostosuj mycie do poziomu zabrudzenia",
      mop_wash_level: "Poziom mycia mopa",
      mop_wash_level_desc: "Intensywność mycia mopa",
      washing_mode: "Tryb mycia",
      washing_mode_desc: "Intensywność mycia mopa",
      washing_light: "Lekki",
      washing_standard: "Standardowy",
      washing_deep: "Głęboki",
      water_temperature: "Temperatura wody",
      water_temperature_desc: "Temperatura do mycia mopa",
      temp_normal: "Normalna",
      temp_mild: "Łagodna",
      temp_warm: "Ciepła",
      temp_hot: "Gorąca",
      auto_drying: "Auto suszenie",
      auto_drying_desc: "Automatycznie suszyć mop po czyszczeniu",
      drying_time: "Czas suszenia",
      drying_time_desc: "Czas suszenia mopa",
      auto_rewashing: "Auto ponowne mycie",
      auto_rewashing_desc: "Automatycznie myj mop gdy brudny",
      rewashing_off: "Wył",
      rewashing_in_deep_mode: "W trybie głębokim",
      rewashing_in_all_modes: "We wszystkich trybach",
      off_peak_charging: "Ładowanie poza szczytem",
      off_peak_charging_desc: "Ładuj poza godzinami szczytu, aby oszczędzać energię",
      off_peak_charging_start: "Czas rozpoczęcia",
      off_peak_charging_end: "Czas zakończenia",
      station_cleaning: "Czyszczenie stacji",
      station_cleaning_desc: "Wyczyść stację bazową",
      clean_now: "Wyczyść teraz",
      self_repair: "Samonaprawa",
      self_repair_desc: "Uruchom diagnostykę samonaprawy stacji",
      repair_now: "Napraw",
      scraper_frequency: "Częstotliwość skrobaka",
      scraper_frequency_desc: "Jak często czyścić gumowy skrobak"
    },
    ai_detection: {
      title: "AI i Wykrywanie",
      intelligent_recognition: "Inteligentne rozpoznawanie",
      intelligent_recognition_desc: "Rozpoznawanie otoczenia oparte na AI",
      ai_obstacle_detection: "Rozpoznawanie przeszkód AI",
      ai_obstacle_detection_desc: "Używaj AI do identyfikacji i omijania przeszkód",
      fuzzy_obstacle_detection: "Rozmyte wykrywanie przeszkód",
      fuzzy_obstacle_detection_desc: "Wykrywanie miękkich lub niewyraźnych przeszkód",
      ai_obstacle_image_upload: "Przesyłanie zdjęć przeszkód",
      ai_obstacle_image_upload_desc: "Przesyłaj zdjęcia przeszkód do analizy",
      ai_obstacle_picture: "Zdjęcie przeszkody",
      ai_obstacle_picture_desc: "Rób zdjęcia wykrytych przeszkód",
      ai_pet_detection: "Wykrywanie zwierząt",
      ai_pet_detection_desc: "Wykrywaj i omijaj zwierzęta domowe",
      ai_pet_avoidance: "Unikanie zwierząt",
      ai_pet_avoidance_desc: "Aktywnie omijaj wykryte zwierzęta",
      pet_focused_detection: "Wykrywanie skoncentrowane na zwierzętach",
      pet_focused_detection_desc: "Ulepszone wykrywanie dla obszarów ze zwierzętami",
      pet_picture: "Zdjęcie zwierzęcia",
      pet_picture_desc: "Rób zdjęcia wykrytych zwierząt",
      ai_human_detection: "Wykrywanie ludzi",
      ai_human_detection_desc: "Wykrywaj i omijaj ludzi",
      human_follow: "Podążanie za człowiekiem",
      human_follow_desc: "Podążaj za ludźmi do interaktywnego sprzątania",
      ai_furniture_detection: "Wykrywanie mebli",
      ai_furniture_detection_desc: "Wykrywaj i nawiguj wokół mebli",
      ai_fluid_detection: "Wykrywanie cieczy",
      ai_fluid_detection_desc: "Wykrywaj i omijaj rozlane płyny",
      fill_light: "Doświetlenie",
      fill_light_desc: "Użyj światła pomocniczego dla lepszego wykrywania",
      camera_light_auto: "Auto jasność kamery",
      camera_light_auto_desc: "Automatycznie dostosuj jasność światła kamery",
      camera_light_brightness: "Jasność światła kamery",
      camera_light_brightness_desc: "Ręczny poziom jasności światła kamery"
    },
    station_controls: {
      title: "Sterowanie stacją",
      self_clean: "Samooczyszczanie",
      self_clean_desc: "Rozpocznij cykl mycia mopa",
      manual_drying: "Ręczne suszenie",
      manual_drying_desc: "Rozpocznij cykl suszenia mopa",
      water_tank_draining: "Opróżnij zbiornik",
      water_tank_draining_desc: "Odprowadź brudną wodę ze zbiornika",
      base_station_cleaning: "Wyczyść stację",
      base_station_cleaning_desc: "Oczyść stację bazową",
      empty_water_tank: "Opróżnij zbiornik wody",
      empty_water_tank_desc: "Opróżnij zbiornik na wodę",
      start_auto_empty: "Auto opróżnianie",
      start_auto_empty_desc: "Rozpocznij automatyczne opróżnianie pojemnika",
      start_recleaning: "Ponowne sprzątanie",
      start_recleaning_desc: "Rozpocznij ponowne sprzątanie pominiętych obszarów",
      clear_warning: "Wyczyść ostrzeżenie",
      clear_warning_desc: "Wyczyść bieżące komunikaty ostrzegawcze"
    },
    map: {
      title: "Ustawienia mapy",
      multi_floor: "Mapa wielopiętrowa",
      multi_floor_desc: "Włącz obsługę map wielu pięter",
      rotation: "Obrót mapy",
      rotation_desc: "Obróć orientację mapy",
      mapping_actions: "Akcje mapowania",
      start_mapping: "Rozpocznij mapowanie",
      start_fast_mapping: "Szybkie mapowanie"
    }
  }
}, Vw = {
  // Common
  common: {
    run: "Exécuter",
    start: "Démarrer",
    stop: "Arrêter",
    cancel: "Annuler",
    save: "Enregistrer",
    apply: "Appliquer",
    reset: "Réinitialiser"
  },
  // Room selector
  room_selector: {
    title: "Sélectionner des pièces",
    selected_count: "{{count}} sélectionnée(s)"
  },
  // Map Selector
  map_selector: {
    unknown: "Carte inconnue"
  },
  // Vacuum map
  vacuum_map: {
    no_map: "Aucune carte disponible",
    looking_for: "Recherche de : {{entity}}",
    room_overlay: "Cliquez sur les numéros pour sélectionner les pièces à nettoyer",
    zone_overlay_create: "Cliquez sur la carte pour placer une zone de nettoyage",
    zone_overlay_resize: "Faites glisser les coins pour redimensionner, cliquez ailleurs pour repositionner",
    clear_zone: "Effacer la zone",
    switch_to_list: "Passer à la vue liste",
    switch_to_map: "Passer à la vue carte",
    room_list_overlay: "Appuyez sur les pièces pour les sélectionner",
    no_rooms: "Aucune pièce configurée",
    zoom_in: "Zoom avant",
    zoom_out: "Zoom arrière",
    zoom_reset: "Réinitialiser le zoom",
    lock_map: "Verrouiller la carte",
    unlock_map: "Déverrouiller la carte"
  },
  // Mode tabs
  modes: {
    room: "Pièce",
    all: "Tout",
    zone: "Zone"
  },
  // Action buttons
  actions: {
    clean: "Nettoyer",
    clean_all: "Tout nettoyer",
    clean_rooms: "Nettoyer {{count}} pièce",
    clean_rooms_plural: "Nettoyer {{count}} pièces",
    select_rooms: "Sélectionner des pièces",
    zone_clean: "Nettoyage de zone",
    pause: "Pause",
    resume: "Reprendre",
    stop: "Arrêter",
    stop_and_dock: "Arrêter et charger",
    dock: "Charger"
  },
  // Toast messages
  toast: {
    selected_room: "{{name}} sélectionné(e)",
    deselected_room: "{{name}} désélectionné(e)",
    paused: "Nettoyage mis en pause",
    stopped: "Nettoyage arrêté",
    docked: "Retour à la base",
    cleaning_started: "Nettoyage démarré",
    resuming: "Reprise du nettoyage",
    starting_full_clean: "Démarrage du nettoyage complet",
    pausing_vacuum: "Mise en pause de l'aspirateur",
    stopping_vacuum: "Arrêt de l'aspirateur",
    stopping_and_docking: "Arrêt et retour à la base",
    vacuum_docking: "L'aspirateur retourne à sa base",
    starting_room_clean: "Démarrage du nettoyage de la pièce sélectionnée",
    starting_room_clean_plural: "Démarrage du nettoyage des {{count}} pièces sélectionnées",
    starting_zone_clean: "Démarrage du nettoyage de zone",
    select_rooms_first: "Veuillez d'abord sélectionner des pièces",
    cannot_determine_map: "Impossible de déterminer les dimensions de la carte",
    select_zone_first: "Veuillez sélectionner une zone sur la carte"
  },
  // Room selection display
  room_display: {
    selected_rooms: "Pièces sélectionnées :",
    selected_label: "Sélection :"
  },
  // Cleaning mode button
  cleaning_mode_button: {
    prefix_custom: "Personnalisé : ",
    prefix_cleangenius: "CleanGenius : ",
    view_shortcuts: "Voir les raccourcis",
    repeats_tooltip: "Passages de nettoyage",
    vac_and_mop: "Aspi & Lavage",
    mop_after_vac: "Lavage après Aspi",
    vacuum: "Aspirateur",
    mop: "Serpillère"
  },
  // Cleaning mode modal
  cleaning_mode: {
    title: "Mode de nettoyage",
    clean_genius: "CleanGenius",
    custom: "Personnalisé"
  },
  // Shortcuts modal
  shortcuts: {
    title: "Raccourcis",
    no_shortcuts: "Aucun raccourci disponible",
    create_hint: "Créez des raccourcis dans l'application Dreame pour lancer rapidement vos routines préférées"
  },
  // Custom mode
  custom_mode: {
    cleaning_mode_title: "Mode de nettoyage",
    suction_power_title: "Puissance d'aspiration",
    max_plus_description: "La puissance sera augmentée au niveau maximum (usage unique).",
    wetness_title: "Débit d'eau",
    slightly_dry: "Sec",
    moist: "Standard",
    wet: "Humide",
    water_volume_title: "Volume d'eau",
    water_low: "Faible",
    water_medium: "Moyen",
    water_high: "Élevé",
    mop_washing_frequency_title: "Fréquence de lavage de serpillère",
    route_title: "Trajectoire de nettoyage",
    mop_pressure_title: "Pression de la serpillère",
    mop_temperature_title: "Température de l'eau"
  },
  // Niveaux de pression serpillère
  mop_pressure: {
    light: "Légère",
    normal: "Normale"
  },
  // Niveaux de température eau
  mop_temperature: {
    normal: "Normale",
    warm: "Tiède"
  },
  // Customize Cleaning Mode
  customize: {
    title: "Personnaliser",
    description: "Définir les préférences d'aspiration et de lavage pour chaque zone.",
    set_button: "Définir",
    vacuum: "Aspirateur",
    mop: "Serpillère",
    vac_and_mop: "Aspi & Lavage",
    cycles: "Cycles",
    apply_to_all: "Appliquer à toutes les pièces",
    click_room_hint: "Cliquez sur une zone pour changer le mode.",
    intelligent_recommendation: "Recommandation intelligente",
    select_room: "Sélectionner une pièce",
    settings_for: "Paramètres de {{room}}",
    no_rooms: "Aucune pièce disponible"
  },
  // CleanGenius mode
  cleangenius_mode: {
    cleaning_mode_title: "Mode de nettoyage",
    deep_cleaning: "Nettoyage approfondi"
  },
  // Header
  header: {
    battery: "Batterie",
    status: "Statut",
    area: "Surface",
    time: "Temps"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction levels
  suction_levels: {
    quiet: "Silencieux",
    standard: "Standard",
    strong: "Fort",
    turbo: "Turbo"
  },
  // Mop washing frequency
  mop_washing_frequency: {
    by_room: "Par pièce",
    by_area: "Par surface",
    by_time: "Par durée"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "Rapide",
    standard: "Standard",
    intensive: "Intensif",
    deep: "Profond"
  },
  // Errors
  errors: {
    entity_not_found: "Entité introuvable : {{entity}}",
    failed_to_load: "Échec du chargement des données de l'entité",
    service_call_failed: "Échec de l'envoi de la commande à l'aspirateur",
    entity_unavailable: "Aspirateur non disponible"
  },
  // Settings panel
  settings: {
    title: "Paramètres",
    consumables: {
      title: "Consommables",
      main_brush: "Brosse principale",
      side_brush: "Brosse latérale",
      filter: "Filtre",
      sensor: "Capteur",
      mop_pad: "Serpillière",
      silver_ion: "Ion argent",
      detergent: "Détergent",
      squeegee: "Raclette",
      tank_filter: "Filtre du réservoir",
      onboard_dirty_water_tank: "Réservoir d'eau sale embarqué",
      dirty_water_channel: "Canal d'eau sale",
      deodorizer: "Désodorisant",
      wheel: "Roue",
      scale_inhibitor: "Anti-calcaire",
      fluffing_roller: "Rouleau de brossage",
      roller_mop_filter: "Filtre de serpillière rotative",
      water_outlet_filter: "Filtre de sortie d'eau",
      remaining: "restant",
      reset: "Réinitialiser"
    },
    device_info: {
      title: "Infos appareil",
      firmware: "Version du firmware",
      total_area: "Surface totale nettoyée",
      total_time: "Temps total de nettoyage",
      total_cleans: "Nombre total de nettoyages",
      wifi_ssid: "Réseau Wi-Fi",
      wifi_signal: "Force du signal",
      ip_address: "Adresse IP"
    },
    quick_settings: {
      title: "Réglages rapides",
      child_lock: "Verrouillage enfant",
      child_lock_desc: "Désactiver les boutons physiques",
      resume_cleaning: "Reprendre le nettoyage",
      resume_cleaning_desc: "Reprendre automatiquement le nettoyage après la charge",
      dnd: "Ne pas déranger",
      dnd_desc: "Heures silencieuses avec activité réduite",
      dnd_start: "Heure de début",
      dnd_end: "Heure de fin",
      dnd_disable_resume: "Désactiver reprise",
      dnd_disable_resume_desc: "Ne pas reprendre le nettoyage en mode NPD",
      dnd_disable_auto_empty: "Désactiver vidage auto",
      dnd_disable_auto_empty_desc: "Ne pas vider automatiquement en mode NPD",
      dnd_reduce_volume: "Réduire le volume",
      dnd_reduce_volume_desc: "Baisser le volume en mode NPD"
    },
    volume: {
      title: "Volume & Son",
      volume: "Volume",
      test_sound: "Localiser l'aspirateur",
      muted: "Muet",
      voice_assistant: "Assistant vocal",
      voice_assistant_desc: "Activer les annonces et retours vocaux",
      voice_language: "Langue vocale",
      voice_language_desc: "Langue des annonces vocales",
      streaming_voice_prompt: "Annonces vocales en temps réel",
      streaming_voice_prompt_desc: "Retour vocal en direct pendant le nettoyage"
    },
    carpet: {
      title: "Paramètres tapis",
      carpet_recognition: "Reconnaissance des tapis",
      carpet_recognition_desc: "Détecter automatiquement les tapis",
      carpet_avoidance: "Évitement des tapis",
      carpet_avoidance_desc: "Éviter les tapis pendant le lavage",
      clean_carpets_first: "Nettoyer tapis en premier",
      clean_carpets_first_desc: "Aspirer les tapis avant de laver les sols",
      carpet_boost: "Boost tapis",
      carpet_boost_desc: "Puissance max sur les tapis",
      intensive_cleaning: "Nettoyage intensif",
      intensive_cleaning_desc: "Nettoyage en profondeur avec passages supplémentaires",
      side_brush_rotate: "Rotation brosse latérale",
      side_brush_rotate_desc: "Faire tourner la brosse latérale sur les tapis",
      sensitivity: "Sensibilité tapis",
      sensitivity_desc: "Niveau de sensibilité de détection",
      sensitivity_low: "Faible",
      sensitivity_medium: "Moyenne",
      sensitivity_high: "Élevée",
      cleaning_mode: "Nettoyage tapis",
      cleaning_mode_desc: "Comment gérer les tapis pendant le nettoyage",
      mode_vacuum: "Aspirer",
      mode_vacuum_and_mop: "Asp. & Lav.",
      mode_avoidance: "Éviter",
      mode_ignore: "Ignorer",
      vacuum_mode: "Mode aspiration",
      vacuum_adaptation: "Lever serpillère",
      vacuum_remove_mop: "Retirer serpillère"
    },
    floor: {
      title: "Paramètres sol",
      obstacle_avoidance: "Évitement d'obstacles",
      obstacle_avoidance_desc: "Utiliser les capteurs pour éviter les obstacles",
      collision_avoidance: "Évitement de collision",
      collision_avoidance_desc: "Ralentir près des murs et meubles",
      auto_mount_mop: "Montage auto serpillère",
      auto_mount_mop_desc: "Attacher automatiquement la serpillère",
      auto_recleaning: "Re-nettoyage auto",
      auto_recleaning_desc: "Re-nettoyer automatiquement les zones manquées",
      recleaning_off: "Désactivé",
      recleaning_in_deep_mode: "En mode profond",
      recleaning_in_all_modes: "Dans tous les modes",
      stain_avoidance: "Évitement des taches",
      stain_avoidance_desc: "Éviter les taches détectées",
      tight_mopping: "Lavage minutieux",
      tight_mopping_desc: "Laver plus près des murs et des bords",
      floor_direction_cleaning: "Nettoyage directionnel",
      floor_direction_cleaning_desc: "Nettoyer dans le sens du grain du sol",
      large_particles_boost: "Boost grosses particules",
      large_particles_boost_desc: "Augmenter l'aspiration pour les gros débris",
      pet_focused_cleaning: "Nettoyage zones animaux",
      pet_focused_cleaning_desc: "Nettoyage supplémentaire dans les zones des animaux",
      low_lying_area_frequency: "Fréquence zones basses",
      low_lying_area_frequency_desc: "Fréquence de nettoyage des zones basses sous les meubles"
    },
    edge_corner: {
      title: "Bords & Coins",
      side_reach: "Portée latérale",
      side_reach_desc: "Étendre la brosse latérale pour les bords",
      mop_extend: "Extension serpillère",
      mop_extend_desc: "Étendre la serpillère pour les bords et coins",
      gap_cleaning: "Nettoyage des interstices",
      gap_cleaning_desc: "Nettoyer les espaces étroits entre les meubles",
      mopping_under: "Lavage sous meubles",
      mopping_under_desc: "Étendre la serpillère sous les meubles bas",
      extend_frequency: "Fréquence d'extension",
      extend_frequency_desc: "Fréquence d'extension pour le nettoyage des bords",
      frequency_standard: "Standard",
      frequency_intelligent: "Intelligent",
      frequency_high: "Élevée"
    },
    dock: {
      title: "Paramètres station",
      self_clean: "Auto-nettoyage",
      self_clean_desc: "Démarrer le cycle de lavage de la serpillère",
      auto_empty_mode: "Mode vidage auto",
      auto_empty_mode_desc: "Quand vider automatiquement le bac à poussière",
      auto_empty_frequency: "Fréquence vidage auto",
      auto_empty_frequency_desc: "Nombre de vidages automatiques par cycle",
      empty_off: "Désactivé",
      empty_standard: "Standard",
      empty_high_frequency: "Fréquence élevée",
      empty_low_frequency: "Fréquence basse",
      auto_detergent: "Détergent auto",
      auto_detergent_desc: "Ajouter automatiquement du détergent lors du lavage",
      mop_washing_with_detergent: "Lavage serpillère avec détergent",
      mop_washing_with_detergent_desc: "Utiliser du détergent lors du lavage de la serpillère",
      mopping_with_detergent: "Lavage avec détergent",
      mopping_with_detergent_desc: "Utiliser du détergent lors du lavage du sol",
      water_electrolysis: "Électrolyse de l'eau",
      water_electrolysis_desc: "Stériliser l'eau par électrolyse",
      auto_water_refilling: "Remplissage auto eau",
      auto_water_refilling_desc: "Remplir automatiquement le réservoir d'eau propre",
      auto_dust_collecting: "Collecte auto poussière",
      auto_dust_collecting_desc: "Vider automatiquement le bac après nettoyage",
      smart_washing: "Lavage intelligent",
      smart_washing_desc: "Ajuster le lavage selon le niveau de saleté",
      mop_wash_level: "Niveau de lavage",
      mop_wash_level_desc: "Intensité du cycle de lavage de la serpillère",
      washing_mode: "Mode lavage",
      washing_mode_desc: "Intensité du lavage de la serpillère",
      washing_light: "Léger",
      washing_standard: "Standard",
      washing_deep: "Profond",
      water_temperature: "Température de l'eau",
      water_temperature_desc: "Température pour le lavage de la serpillère",
      temp_normal: "Normale",
      temp_mild: "Douce",
      temp_warm: "Tiède",
      temp_hot: "Chaude",
      auto_drying: "Séchage auto",
      auto_drying_desc: "Sécher automatiquement la serpillère après nettoyage",
      drying_time: "Temps de séchage",
      drying_time_desc: "Durée du séchage de la serpillère",
      station_cleaning: "Nettoyage station",
      station_cleaning_desc: "Nettoyer la station de base",
      clean_now: "Nettoyer",
      auto_rewashing: "Re-lavage auto",
      auto_rewashing_desc: "Re-laver automatiquement la serpillère si nécessaire",
      rewashing_off: "Désactivé",
      rewashing_in_deep_mode: "En mode profond",
      rewashing_in_all_modes: "Dans tous les modes",
      off_peak_charging: "Charge heures creuses",
      off_peak_charging_desc: "Charger pendant les heures creuses pour économiser",
      off_peak_charging_start: "Heure de début",
      off_peak_charging_end: "Heure de fin",
      self_repair: "Auto-réparation",
      self_repair_desc: "Diagnostic et réparation automatiques",
      repair_now: "Réparer",
      scraper_frequency: "Fréquence du racleur",
      scraper_frequency_desc: "Fréquence de nettoyage du racleur en caoutchouc"
    },
    ai_detection: {
      title: "IA & Détection",
      intelligent_recognition: "Reconnaissance intelligente",
      intelligent_recognition_desc: "Utiliser l'IA pour identifier les obstacles et les zones",
      ai_obstacle_detection: "Détection d'obstacles par IA",
      ai_obstacle_detection_desc: "Utiliser l'IA pour identifier les obstacles",
      fuzzy_obstacle_detection: "Détection floue",
      fuzzy_obstacle_detection_desc: "Détecter les obstacles partiellement visibles",
      ai_obstacle_image_upload: "Envoi d'images d'obstacles",
      ai_obstacle_image_upload_desc: "Envoyer les images pour analyse",
      ai_obstacle_picture: "Photo d'obstacles IA",
      ai_obstacle_picture_desc: "Prendre des photos des obstacles détectés",
      ai_pet_detection: "Détection d'animaux",
      ai_pet_detection_desc: "Détecter et éviter les animaux",
      ai_pet_avoidance: "Évitement des animaux",
      ai_pet_avoidance_desc: "Éviter activement les animaux détectés",
      pet_focused_detection: "Détection animaux ciblée",
      pet_focused_detection_desc: "Détection prioritaire des animaux",
      pet_picture: "Photo animaux",
      pet_picture_desc: "Prendre des photos des animaux détectés",
      ai_human_detection: "Détection humaine",
      ai_human_detection_desc: "Détecter et éviter les personnes",
      human_follow: "Suivi humain",
      human_follow_desc: "Suivre les personnes pendant le nettoyage",
      ai_furniture_detection: "Détection de meubles",
      ai_furniture_detection_desc: "Naviguer autour des meubles",
      ai_fluid_detection: "Détection de liquides",
      ai_fluid_detection_desc: "Détecter et éviter les flaques",
      fill_light: "Lumière d'appoint",
      fill_light_desc: "Utiliser la lumière pour une meilleure détection",
      camera_light_auto: "Lumière caméra auto",
      camera_light_auto_desc: "Ajuster automatiquement l'éclairage de la caméra",
      camera_light_brightness: "Luminosité caméra",
      camera_light_brightness_desc: "Niveau de luminosité de l'éclairage caméra"
    },
    station_controls: {
      title: "Contrôles de la station",
      self_clean: "Auto-nettoyage",
      self_clean_desc: "Démarrer le cycle de lavage de la serpillère",
      manual_drying: "Séchage manuel",
      manual_drying_desc: "Démarrer le cycle de séchage de la serpillère",
      water_tank_draining: "Vidange du réservoir",
      water_tank_draining_desc: "Vidanger l'eau sale du réservoir",
      base_station_cleaning: "Nettoyage de la station",
      base_station_cleaning_desc: "Nettoyer la station de base",
      empty_water_tank: "Vider le réservoir",
      empty_water_tank_desc: "Vider le réservoir de collecte d'eau",
      start_auto_empty: "Démarrer vidage auto",
      start_auto_empty_desc: "Vider automatiquement le bac à poussière",
      start_recleaning: "Démarrer re-nettoyage",
      start_recleaning_desc: "Re-nettoyer les zones manquées",
      clear_warning: "Effacer avertissement",
      clear_warning_desc: "Effacer les avertissements actuels"
    },
    map: {
      title: "Paramètres carte",
      multi_floor: "Carte multi-étages",
      multi_floor_desc: "Activer le support pour plusieurs cartes d'étages",
      rotation: "Rotation de la carte",
      rotation_desc: "Tourner l'orientation de la carte",
      mapping_actions: "Actions de cartographie",
      start_mapping: "Démarrer cartographie",
      start_fast_mapping: "Cartographie rapide"
    }
  }
}, Kw = {
  // Common
  common: {
    run: "הפעל",
    start: "התחל",
    stop: "עצור",
    cancel: "בטל",
    save: "שמור",
    apply: "החל",
    reset: "אפס"
  },
  // בחירת חדרים
  room_selector: {
    title: "בחר חדרים",
    selected_count: "{{count}} נבחרו"
  },
  // בחירת מפה
  map_selector: {
    unknown: "מפה לא ידועה"
  },
  // מפת שואב
  vacuum_map: {
    no_map: "אין מפה זמינה",
    looking_for: "מחפש את: {{entity}}",
    room_overlay: "לחץ על מספרי החדרים כדי לבחור חדרים לניקוי",
    zone_overlay_create: "לחץ על המפה כדי להוסיף אזור ניקוי",
    zone_overlay_resize: "גרור את הפינות לשינוי גודל, לחץ במקום אחר לשינוי מיקום",
    clear_zone: "נקה אזור",
    switch_to_list: "עבור לתצוגת רשימה",
    switch_to_map: "עבור לתצוגת מפה",
    room_list_overlay: "לחץ על חדרים כדי לבחור לניקוי",
    no_rooms: "אין חדרים זמינים",
    zoom_in: "הגדל",
    zoom_out: "הקטן",
    zoom_reset: "אפס זום",
    lock_map: "נעל מפה",
    unlock_map: "בטל נעילת מפה"
  },
  // לשוניות מצבים
  modes: {
    room: "חדר",
    all: "הכל",
    zone: "אזור"
  },
  // כפתורי פעולה
  actions: {
    clean: "נקה",
    clean_all: "נקה הכל",
    clean_rooms: "נקה חדר {{count}}",
    clean_rooms_plural: "נקה {{count}} חדרים",
    select_rooms: "בחר חדרים",
    zone_clean: "ניקוי אזור",
    pause: "השהה",
    resume: "המשך",
    stop: "עצור",
    stop_and_dock: "עצור וחזור",
    dock: "עמדת טעינה"
  },
  // הודעות קופצות (Toast)
  toast: {
    selected_room: "נבחר {{name}}",
    deselected_room: "בוטל {{name}}",
    paused: "הניקוי הושהה",
    stopped: "הניקוי הופסק",
    docked: "חוזר לעמדת טעינה",
    cleaning_started: "הניקוי התחיל",
    resuming: "ממשיך ניקוי",
    starting_full_clean: "מתחיל ניקוי של כל הבית",
    pausing_vacuum: "משהה שואב",
    stopping_vacuum: "עוצר שואב",
    stopping_and_docking: "עוצר וחוזר לתחנה",
    vacuum_docking: "השואב חוזר לעמדת טעינה",
    starting_room_clean: "מתחיל ניקוי עבור חדר {{count}} שנבחר",
    starting_room_clean_plural: "מתחיל ניקוי עבור {{count}} חדרים שנבחרו",
    starting_zone_clean: "מתחיל ניקוי אזור",
    select_rooms_first: "אנא בחר חדרים לניקוי תחילה",
    cannot_determine_map: "לא ניתן לקבוע את מידות המפה",
    select_zone_first: "אנא בחר אזור על המפה"
  },
  // תצוגת בחירת חדרים
  room_display: {
    selected_rooms: "חדרים שנבחרו:",
    selected_label: "נבחרו:"
  },
  // כפתור מצב ניקוי
  cleaning_mode_button: {
    prefix_custom: "מותאם אישית: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "צפה בקיצורי דרך",
    repeats_tooltip: "חזרות",
    vac_and_mop: "שאיבה ושטיפה",
    mop_after_vac: "שטיפה אחרי שאיבה",
    vacuum: "שאיבה",
    mop: "שטיפה"
  },
  // מודאל מצב ניקוי
  cleaning_mode: {
    title: "מצב ניקוי",
    clean_genius: "CleanGenius",
    custom: "מותאם אישית"
  },
  // מודאל קיצורי דרך
  shortcuts: {
    title: "קיצורי דרך",
    no_shortcuts: "אין קיצורי דרך זמינים",
    create_hint: "צור קיצורי דרך באפליקציית Dreame כדי להפעיל במהירות את תוכניות הניקוי המועדפות עליך"
  },
  // מצב מותאם אישית
  custom_mode: {
    cleaning_mode_title: "מצב ניקוי",
    suction_power_title: "עוצמת שאיבה",
    max_plus_description: "עוצמת השאיבה תוגבר לרמה הגבוהה ביותר, זהו מצב לשימוש חד-פעמי.",
    wetness_title: "רמת רטיבות",
    slightly_dry: "מעט יבש",
    moist: "לח",
    wet: "רטוב",
    water_volume_title: "כמות מים",
    water_low: "נמוך",
    water_medium: "בינוני",
    water_high: "גבוה",
    mop_washing_frequency_title: "תדירות שטיפת סמרטוט",
    route_title: "מסלול",
    mop_pressure_title: "לחץ סמרטוט",
    mop_temperature_title: "טמפרטורת מים"
  },
  // רמות לחץ סמרטוט
  mop_pressure: {
    light: "קל",
    normal: "רגיל"
  },
  // רמות טמפרטורת מים
  mop_temperature: {
    normal: "רגיל",
    warm: "חם"
  },
  // מצב התאמה אישית
  customize: {
    title: "התאמה אישית",
    description: "הגדר העדפות שאיבה וניגוב מותאמות אישית לכל אזור.",
    set_button: "הגדר",
    vacuum: "שואב",
    mop: "מנגב",
    vac_and_mop: "שואב ומנגב",
    cycles: "מחזורים",
    apply_to_all: "החל על כל החדרים",
    click_room_hint: "לחץ על אזור כדי לשנות את המצב.",
    intelligent_recommendation: "המלצה חכמה",
    select_room: "בחר חדר",
    settings_for: "הגדרות {{room}}",
    no_rooms: "אין חדרים זמינים"
  },
  // מצב CleanGenius
  cleangenius_mode: {
    cleaning_mode_title: "מצב ניקוי",
    deep_cleaning: "ניקוי עמוק"
  },
  // כותרת (Header)
  header: {
    battery: "סוללה",
    status: "סטטוס",
    area: "שטח",
    time: "זמן"
  },
  // יחידות מידה
  units: {
    square_meters: 'מ"ר',
    minutes: "דק'",
    minutes_short: "ד'",
    percent: "%",
    decibels: "dBm"
  },
  // רמות שאיבה
  suction_levels: {
    quiet: "שקט",
    standard: "סטנדרטי",
    strong: "טורבו",
    turbo: "מקסימום"
  },
  // תדירות שטיפת סמרטוט
  mop_washing_frequency: {
    by_room: "לפי חדר",
    by_area: "לפי שטח",
    by_time: "לפי זמן"
  },
  // מסלולי ניקוי
  cleaning_routes: {
    quick: "מהיר",
    standard: "רגיל",
    intensive: "אינטנסיבי",
    deep: "עמוק"
  },
  // שגיאות
  errors: {
    entity_not_found: "ישות לא נמצאה: {{entity}}",
    failed_to_load: "שגיאה בטעינת נתוני הישות",
    service_call_failed: "שגיאה בשליחת פקודה לשואב",
    entity_unavailable: "השואב אינו זמין"
  },
  // פאנל הגדרות
  settings: {
    title: "הגדרות",
    consumables: {
      title: "חלקי חילוף",
      main_brush: "מברשת ראשית",
      side_brush: "מברשת צד",
      filter: "מסנן",
      sensor: "חיישן",
      mop_pad: "רפידת ניגוב",
      silver_ion: "יוני כסף",
      detergent: "חומר ניקוי",
      squeegee: "מגב",
      tank_filter: "מסנן מיכל",
      onboard_dirty_water_tank: "מיכל מים מלוכלכים מובנה",
      dirty_water_channel: "ערוץ מים מלוכלכים",
      deodorizer: "מטהר אוויר",
      wheel: "גלגל",
      scale_inhibitor: "נוגד אבנית",
      fluffing_roller: "רולר הפרדה",
      roller_mop_filter: "מסנן ספוג רולר",
      water_outlet_filter: "מסנן יציאת מים",
      remaining: "נותרו",
      reset: "איפוס"
    },
    device_info: {
      title: "מידע על המכשיר",
      firmware: "גרסת קושחה",
      total_area: 'סה"כ שטח שנוקה',
      total_time: 'סה"כ זמן ניקוי',
      total_cleans: 'סה"כ סבבי ניקוי',
      wifi_ssid: "רשת Wi-Fi",
      wifi_signal: "עוצמת אות",
      ip_address: "כתובת IP"
    },
    quick_settings: {
      title: "הגדרות מהירות",
      child_lock: "נעילת ילדים",
      child_lock_desc: "ביטול הלחצנים הפיזיים במכשיר",
      resume_cleaning: "המשך ניקוי",
      resume_cleaning_desc: "המשך ניקוי אוטומטית לאחר טעינה",
      dnd: "נא לא להפריע",
      dnd_desc: "שעות שקטות עם פעילות מופחתת",
      dnd_start: "שעת התחלה",
      dnd_end: "שעת סיום",
      dnd_disable_resume: "השבת המשך",
      dnd_disable_resume_desc: "אל תמשיך ניקוי במצב נא לא להפריע",
      dnd_disable_auto_empty: "השבת ריקון אוטומטי",
      dnd_disable_auto_empty_desc: "אל תרוקן אוטומטית במצב נא לא להפריע",
      dnd_reduce_volume: "הפחת עוצמת קול",
      dnd_reduce_volume_desc: "הפחת עוצמת קול המכשיר במצב נא לא להפריע"
    },
    volume: {
      title: "עוצמת קול וצליל",
      volume: "עוצמה",
      test_sound: "אתר מכשיר",
      muted: "מושתק",
      voice_assistant: "עוזר קולי",
      voice_assistant_desc: "הפעל הודעות קוליות ומשוב",
      voice_language: "שפת קול",
      voice_language_desc: "שפה להודעות קוליות",
      streaming_voice_prompt: "הנחיה קולית בזמן אמת",
      streaming_voice_prompt_desc: "משוב קולי בזמן אמת במהלך ניקוי"
    },
    carpet: {
      title: "הגדרות שטיחים",
      carpet_recognition: "זיהוי שטיחים",
      carpet_recognition_desc: "זיהוי אוטומטי של שטיחים",
      carpet_avoidance: "הימנעות משטיחים",
      carpet_avoidance_desc: "הימנעות משטיחים בזמן ניגוב",
      clean_carpets_first: "נקה שטיחים קודם",
      clean_carpets_first_desc: "שאוב שטיחים לפני שטיפת רצפות",
      carpet_boost: "הגברת שאיבה על שטיחים",
      carpet_boost_desc: "הגברת עוצמת השאיבה על שטיחים",
      intensive_cleaning: "ניקוי אינטנסיבי",
      intensive_cleaning_desc: "ניקוי עמוק עם מעברים נוספים",
      side_brush_rotate: "סיבוב מברשת צד",
      side_brush_rotate_desc: "סובב מברשת צד על שטיחים",
      sensitivity: "רגישות לזיהוי שטיחים",
      sensitivity_desc: "רמת רגישות הזיהוי",
      sensitivity_low: "נמוכה",
      sensitivity_medium: "בינונית",
      sensitivity_high: "גבוהה",
      cleaning_mode: "ניקוי שטיחים",
      cleaning_mode_desc: "כיצד לטפל בשטיחים במהלך הניקוי",
      mode_vacuum: "שאיבה",
      mode_vacuum_and_mop: "שאיבה ושטיפה",
      mode_avoidance: "הימנעות",
      mode_ignore: "התעלם",
      vacuum_mode: "מצב שאיבה",
      vacuum_adaptation: "הרמת מגב",
      vacuum_remove_mop: "הסר מגב"
    },
    floor: {
      title: "הגדרות רצפה",
      obstacle_avoidance: "הימנעות ממכשולים",
      obstacle_avoidance_desc: "השתמש בחיישנים להימנעות ממכשולים",
      collision_avoidance: "הימנעות מהתנגשות",
      collision_avoidance_desc: "האט ליד קירות ורהיטים",
      auto_mount_mop: "הרכבת מגב אוטומטית",
      auto_mount_mop_desc: "הרכב אוטומטית את כרית המגב בעת הצורך",
      auto_recleaning: "ניקוי חוזר אוטומטי",
      auto_recleaning_desc: "נקה אוטומטית אזורים שהוחמצו",
      recleaning_off: "כבוי",
      recleaning_in_deep_mode: "במצב עמוק",
      recleaning_in_all_modes: "בכל המצבים",
      stain_avoidance: "הימנעות מכתמים",
      stain_avoidance_desc: "הימנעות מכתמים שזוהו",
      tight_mopping: "שטיפה יסודית",
      tight_mopping_desc: "שטיפה קרובה יותר לקירות ולקצוות",
      floor_direction_cleaning: "ניקוי בכיוון הרצפה",
      floor_direction_cleaning_desc: "נקה לאורך כיוון סיבי הרצפה",
      large_particles_boost: "הגברה לחלקיקים גדולים",
      large_particles_boost_desc: "הגבר שאיבה לפסולת גדולה",
      pet_focused_cleaning: "ניקוי ממוקד חיות מחמד",
      pet_focused_cleaning_desc: "ניקוי נוסף באזורי חיות מחמד",
      low_lying_area_frequency: "תדירות אזורים נמוכים",
      low_lying_area_frequency_desc: "באיזו תדירות לנקות אזורים נמוכים מתחת לרהיטים"
    },
    edge_corner: {
      title: "קצוות ופינות",
      side_reach: "הגעה צדית",
      side_reach_desc: "הארך מברשת צד לקצוות",
      mop_extend: "הארכת מגב",
      mop_extend_desc: "הארך מגב לקצוות ופינות",
      gap_cleaning: "ניקוי מרווחים",
      gap_cleaning_desc: "נקה מרווחים צרים בין רהיטים",
      mopping_under: "שטיפה מתחת לרהיטים",
      mopping_under_desc: "הארך מגב מתחת לרהיטים נמוכים",
      extend_frequency: "תדירות הארכה",
      extend_frequency_desc: "באיזו תדירות להאריך מגב לניקוי קצוות",
      frequency_standard: "רגילה",
      frequency_intelligent: "חכמה",
      frequency_high: "גבוהה"
    },
    dock: {
      title: "הגדרות תחנה",
      self_clean: "ניקוי עצמי",
      self_clean_desc: "שטיפת מגב אוטומטית לאחר ניקוי",
      auto_empty_mode: "מצב ריקון אוטו",
      auto_empty_mode_desc: "מתי לרוקן אוטומטית את מיכל האבק",
      auto_empty_frequency: "תדירות ריקון אוטו",
      auto_empty_frequency_desc: "כמה ניקויים לפני ריקון אוטומטי",
      empty_off: "כבוי",
      empty_standard: "רגיל",
      empty_high_frequency: "תדירות גבוהה",
      empty_low_frequency: "תדירות נמוכה",
      auto_detergent: "חומר ניקוי אוטו",
      auto_detergent_desc: "הוסף אוטומטית חומר ניקוי בזמן שטיפה",
      mop_washing_with_detergent: "שטיפת מגב עם חומר ניקוי",
      mop_washing_with_detergent_desc: "שימוש בחומר ניקוי בשטיפת המגב",
      mopping_with_detergent: "ניגוב עם חומר ניקוי",
      mopping_with_detergent_desc: "שימוש בחומר ניקוי בזמן ניגוב",
      water_electrolysis: "אלקטרוליזה של מים",
      water_electrolysis_desc: "עיקור מים באמצעות אלקטרוליזה",
      auto_water_refilling: "מילוי מים אוטומטי",
      auto_water_refilling_desc: "מילוי אוטומטי של מיכל המים הנקיים",
      auto_dust_collecting: "איסוף אבק אוטומטי",
      auto_dust_collecting_desc: "ריקון אוטומטי של מיכל האבק לאחר ניקוי",
      smart_washing: "שטיפה חכמה",
      smart_washing_desc: "התאם שטיפה לפי רמת הלכלוך",
      mop_wash_level: "רמת שטיפת מגב",
      mop_wash_level_desc: "עוצמת שטיפת המגב",
      washing_mode: "מצב שטיפה",
      washing_mode_desc: "עוצמת שטיפת המגב",
      washing_light: "קל",
      washing_standard: "רגיל",
      washing_deep: "עמוק",
      water_temperature: "טמפרטורת מים",
      water_temperature_desc: "טמפרטורה לשטיפת המגב",
      temp_normal: "רגילה",
      temp_mild: "עדינה",
      temp_warm: "חמה",
      temp_hot: "חמה מאוד",
      auto_drying: "ייבוש אוטו",
      auto_drying_desc: "ייבש אוטומטית את המגב לאחר ניקוי",
      drying_time: "זמן ייבוש",
      drying_time_desc: "משך ייבוש המגב",
      auto_rewashing: "שטיפה חוזרת אוטומטית",
      auto_rewashing_desc: "שטוף מגב אוטומטית כשמלוכלך",
      rewashing_off: "כבוי",
      rewashing_in_deep_mode: "במצב עמוק",
      rewashing_in_all_modes: "בכל המצבים",
      off_peak_charging: "טעינה בשעות שפל",
      off_peak_charging_desc: "טען בשעות שפל לחיסכון באנרגיה",
      off_peak_charging_start: "שעת התחלה",
      off_peak_charging_end: "שעת סיום",
      station_cleaning: "ניקוי תחנה",
      station_cleaning_desc: "נקה את תחנת הבסיס",
      clean_now: "נקה עכשיו",
      self_repair: "תיקון עצמי",
      self_repair_desc: "הפעל אבחון תיקון עצמי של התחנה",
      repair_now: "תקן",
      scraper_frequency: "תדירות מגרד",
      scraper_frequency_desc: "באיזו תדירות לנקות את המגרד הגומי"
    },
    ai_detection: {
      title: "בינה מלאכותית וזיהוי",
      intelligent_recognition: "זיהוי חכם",
      intelligent_recognition_desc: "זיהוי סביבה מבוסס AI",
      ai_obstacle_detection: "זיהוי מכשולים מבוסס AI",
      ai_obstacle_detection_desc: "שימוש ב-AI לזיהוי והימנעות ממכשולים",
      fuzzy_obstacle_detection: "זיהוי מכשולים מטושטש",
      fuzzy_obstacle_detection_desc: "זיהוי מכשולים רכים או לא ברורים",
      ai_obstacle_image_upload: "העלאת תמונות מכשולים",
      ai_obstacle_image_upload_desc: "העלאת תמונות מכשולים לניתוח",
      ai_obstacle_picture: "תמונת מכשול",
      ai_obstacle_picture_desc: "צלם תמונות של מכשולים שזוהו",
      ai_pet_detection: "זיהוי חיות מחמד",
      ai_pet_detection_desc: "זיהוי והימנעות מחיות מחמד",
      ai_pet_avoidance: "הימנעות מחיות מחמד",
      ai_pet_avoidance_desc: "הימנעות פעילה מחיות מחמד שזוהו",
      pet_focused_detection: "זיהוי ממוקד חיות מחמד",
      pet_focused_detection_desc: "זיהוי משופר לאזורי חיות מחמד",
      pet_picture: "תמונת חיית מחמד",
      pet_picture_desc: "צלם תמונות של חיות מחמד שזוהו",
      ai_human_detection: "זיהוי בני אדם",
      ai_human_detection_desc: "זיהוי והימנעות מבני אדם",
      human_follow: "מעקב אחר אדם",
      human_follow_desc: "עקוב אחר אנשים לניקוי אינטראקטיבי",
      ai_furniture_detection: "זיהוי רהיטים",
      ai_furniture_detection_desc: "זיהוי וניווט סביב רהיטים",
      ai_fluid_detection: "זיהוי נוזלים",
      ai_fluid_detection_desc: "זיהוי והימנעות מנוזלים",
      fill_light: "תאורת עזר",
      fill_light_desc: "שימוש בתאורת עזר לזיהוי טוב יותר",
      camera_light_auto: "בהירות מצלמה אוטומטית",
      camera_light_auto_desc: "התאם אוטומטית את בהירות אור המצלמה",
      camera_light_brightness: "בהירות אור מצלמה",
      camera_light_brightness_desc: "רמת בהירות ידנית של אור המצלמה"
    },
    station_controls: {
      title: "בקרת תחנה",
      self_clean: "ניקוי עצמי",
      self_clean_desc: "התחל מחזור שטיפת מטלית",
      manual_drying: "ייבוש ידני",
      manual_drying_desc: "התחל מחזור ייבוש מטלית",
      water_tank_draining: "ריקון מיכל מים",
      water_tank_draining_desc: "נקז מים מלוכלכים מהמיכל",
      base_station_cleaning: "ניקוי תחנה",
      base_station_cleaning_desc: "נקה את תחנת הבסיס",
      empty_water_tank: "רוקן מיכל מים",
      empty_water_tank_desc: "רוקן את מיכל איסוף המים",
      start_auto_empty: "ריקון אוטומטי",
      start_auto_empty_desc: "התחל ריקון אוטומטי של מיכל האבק",
      start_recleaning: "ניקוי חוזר",
      start_recleaning_desc: "התחל ניקוי חוזר של אזורים שהוחמצו",
      clear_warning: "נקה אזהרה",
      clear_warning_desc: "נקה הודעות אזהרה נוכחיות"
    },
    map: {
      title: "הגדרות מפה",
      multi_floor: "מפת רב-קומות",
      multi_floor_desc: "הפעל תמיכה במפות מרובות קומות",
      rotation: "סיבוב מפה",
      rotation_desc: "סובב את כיוון המפה",
      mapping_actions: "פעולות מיפוי",
      start_mapping: "התחל מיפוי",
      start_fast_mapping: "מיפוי מהיר"
    }
  }
}, Xw = {
  // Common
  common: {
    run: "실행",
    start: "시작",
    stop: "정지",
    cancel: "취소",
    save: "저장",
    apply: "적용",
    reset: "초기화"
  },
  // Room Selector
  room_selector: {
    title: "방 선택",
    selected_count: "{{count}}개 선택됨"
  },
  // Map Selector
  map_selector: {
    unknown: "알 수 없는 맵"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "사용 가능한 맵이 없습니다",
    looking_for: "검색 중: {{entity}}",
    room_overlay: "방 번호를 클릭하여 청소할 방을 선택하세요",
    zone_overlay_create: "맵을 클릭하여 청소 구역을 지정하세요",
    zone_overlay_resize: "모서리를 드래그하여 크기를 조절하거나, 다른 곳을 클릭하여 위치를 이동하세요",
    clear_zone: "구역 지우기",
    switch_to_list: "목록 보기로 전환",
    switch_to_map: "맵 보기로 전환",
    room_list_overlay: "청소할 방을 탭하여 선택하세요",
    no_rooms: "사용 가능한 방이 없습니다",
    zoom_in: "확대",
    zoom_out: "축소",
    zoom_reset: "확대/축소 초기화",
    lock_map: "맵 잠금",
    unlock_map: "맵 잠금 해제"
  },
  // Mode Tabs
  modes: {
    room: "방",
    all: "전체",
    zone: "구역"
  },
  // Action Buttons
  actions: {
    clean: "청소",
    clean_all: "전체 청소",
    clean_rooms: "{{count}}개 방 청소",
    clean_rooms_plural: "{{count}}개 방 청소",
    select_rooms: "방 선택",
    zone_clean: "구역 청소",
    pause: "일시 정지",
    resume: "재개",
    stop: "중지",
    stop_and_dock: "중지 및 도크 복귀",
    dock: "도크 복귀"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} 선택됨",
    deselected_room: "{{name}} 선택 해제됨",
    paused: "청소가 일시 정지되었습니다",
    stopped: "청소가 중지되었습니다",
    docked: "도크로 복귀 중입니다",
    cleaning_started: "청소를 시작했습니다",
    resuming: "청소를 재개합니다",
    starting_full_clean: "전체 집 청소를 시작합니다",
    pausing_vacuum: "청소기 일시 정지 중",
    stopping_vacuum: "청소기 중지 중",
    stopping_and_docking: "청소기 중지 및 도크 복귀 중",
    vacuum_docking: "청소기가 도크로 복귀 중입니다",
    starting_room_clean: "선택한 {{count}}개 방 청소를 시작합니다",
    starting_room_clean_plural: "선택한 {{count}}개 방 청소를 시작합니다",
    starting_zone_clean: "구역 청소를 시작합니다",
    select_rooms_first: "먼저 청소할 방을 선택해 주세요",
    cannot_determine_map: "맵 크기를 확인할 수 없습니다",
    select_zone_first: "먼저 맵에서 구역을 선택해 주세요"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "선택된 방:",
    selected_label: "선택 항목:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "맞춤: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "단축키 보기",
    repeats_tooltip: "반복 횟수",
    vac_and_mop: "진공 및 물걸레",
    mop_after_vac: "진공 후 물걸레",
    vacuum: "진공",
    mop: "물걸레"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "청소 모드",
    clean_genius: "CleanGenius",
    custom: "맞춤 설정"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "단축키",
    no_shortcuts: "사용 가능한 단축키가 없습니다",
    create_hint: "Dreame 앱에서 단축키를 만들어 자주 사용하는 청소 루틴을 빠르게 시작하세요"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "청소 모드",
    suction_power_title: "흡입력",
    max_plus_description: "흡입력을 최고 수준으로 올립니다. 일회성 모드입니다.",
    wetness_title: "물걸레 습도",
    slightly_dry: "약간 건조",
    moist: "촉촉하게",
    wet: "젖음",
    water_volume_title: "물 양",
    water_low: "낮음",
    water_medium: "중간",
    water_high: "높음",
    mop_washing_frequency_title: "물걸레 세척 빈도",
    route_title: "경로",
    mop_pressure_title: "물걸레 압력",
    mop_temperature_title: "물 온도"
  },
  // 물걸레 압력 레벨
  mop_pressure: {
    light: "약하게",
    normal: "보통"
  },
  // 물 온도 레벨
  mop_temperature: {
    normal: "상온",
    warm: "따뜻하게"
  },
  // Customize Cleaning Mode
  customize: {
    title: "사용자 지정",
    description: "각 구역에 대한 흡입력 및 물걸레 설정을 지정하세요.",
    set_button: "설정",
    vacuum: "진공",
    mop: "물걸레",
    vac_and_mop: "진공 및 물걸레",
    cycles: "반복 횟수",
    apply_to_all: "모든 방에 적용",
    click_room_hint: "개별 구역을 클릭하여 모드를 변경하세요.",
    intelligent_recommendation: "지능형 추천",
    select_room: "방 선택",
    settings_for: "{{room}} 설정",
    no_rooms: "사용 가능한 방이 없습니다"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "청소 모드",
    deep_cleaning: "딥 클리닝"
  },
  // Header
  header: {
    battery: "배터리",
    status: "상태",
    area: "면적",
    time: "시간"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "분",
    minutes_short: "분",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "저소음",
    standard: "표준",
    strong: "터보",
    turbo: "최대"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "방별",
    by_area: "면적별",
    by_time: "시간별"
  },
  // Cleaning Routes
  cleaning_routes: {
    quick: "빠르게",
    standard: "표준",
    intensive: "집중",
    deep: "딥 클리닝"
  },
  // Errors
  errors: {
    entity_not_found: "엔티티를 찾을 수 없음: {{entity}}",
    failed_to_load: "엔티티 데이터를 불러오지 못했습니다",
    service_call_failed: "청소기에 명령을 보내지 못했습니다",
    entity_unavailable: "청소기를 사용할 수 없습니다"
  },
  // Settings Panel
  settings: {
    title: "설정",
    consumables: {
      title: "소모품",
      main_brush: "메인 브러시",
      side_brush: "사이드 브러시",
      filter: "필터",
      sensor: "센서",
      mop_pad: "물걸레 패드",
      silver_ion: "은이온",
      detergent: "세제",
      squeegee: "스퀴지",
      tank_filter: "탱크 필터",
      onboard_dirty_water_tank: "내장 오수 탱크",
      dirty_water_channel: "오수 채널",
      deodorizer: "탈취제",
      wheel: "바퀴",
      scale_inhibitor: "석회 억제제",
      fluffing_roller: "플러핑 롤러",
      roller_mop_filter: "롤러 물걸레 필터",
      water_outlet_filter: "물 배출 필터",
      remaining: "남음",
      reset: "초기화"
    },
    device_info: {
      title: "기기 정보",
      firmware: "펌웨어",
      total_area: "총 청소 면적",
      total_time: "총 청소 시간",
      total_cleans: "총 청소 횟수",
      wifi_ssid: "Wi-Fi 네트워크",
      wifi_signal: "신호 강도",
      ip_address: "IP 주소"
    },
    quick_settings: {
      title: "빠른 설정",
      child_lock: "차일드 락",
      child_lock_desc: "기기의 물리적 버튼을 비활성화합니다",
      resume_cleaning: "청소 재개",
      resume_cleaning_desc: "충전 후 자동으로 청소 재개",
      dnd: "방해 금지",
      dnd_desc: "활동을 줄여 조용한 시간을 가집니다",
      dnd_start: "시작 시간",
      dnd_end: "종료 시간",
      dnd_disable_resume: "재개 비활성화",
      dnd_disable_resume_desc: "방해 금지 모드에서 청소 재개 안 함",
      dnd_disable_auto_empty: "자동 비우기 비활성화",
      dnd_disable_auto_empty_desc: "방해 금지 모드에서 자동 비우기 안 함",
      dnd_reduce_volume: "볼륨 줄이기",
      dnd_reduce_volume_desc: "방해 금지 모드에서 기기 볼륨 줄이기"
    },
    volume: {
      title: "볼륨 및 사운드",
      volume: "볼륨",
      test_sound: "위치 찾기",
      muted: "음소거됨",
      voice_assistant: "음성 어시스턴트",
      voice_assistant_desc: "음성 안내 및 피드백 활성화",
      voice_language: "음성 언어",
      voice_language_desc: "음성 안내 언어",
      streaming_voice_prompt: "실시간 음성 안내",
      streaming_voice_prompt_desc: "청소 중 실시간 음성 피드백"
    },
    carpet: {
      title: "카펫 설정",
      carpet_recognition: "카펫 인식",
      carpet_recognition_desc: "카펫을 자동으로 감지합니다",
      carpet_avoidance: "카펫 회피",
      carpet_avoidance_desc: "물걸레질 중 카펫을 회피합니다",
      clean_carpets_first: "카펫 먼저 청소",
      clean_carpets_first_desc: "바닥 물걸레 전에 카펫 청소",
      carpet_boost: "카펫 부스트",
      carpet_boost_desc: "카펫 위에서 흡입력을 높입니다",
      intensive_cleaning: "집중 청소",
      intensive_cleaning_desc: "추가 패스로 카펫 심층 청소",
      side_brush_rotate: "사이드 브러시 회전",
      side_brush_rotate_desc: "카펫에서 사이드 브러시 회전",
      sensitivity: "카펫 민감도",
      sensitivity_desc: "감지 민감도 수준",
      sensitivity_low: "낮음",
      sensitivity_medium: "보통",
      sensitivity_high: "높음",
      cleaning_mode: "카펫 청소",
      cleaning_mode_desc: "청소 중 카펫 처리 방법",
      mode_vacuum: "청소",
      mode_vacuum_and_mop: "청소 & 물걸레",
      mode_avoidance: "회피",
      mode_ignore: "무시",
      vacuum_mode: "청소 모드",
      vacuum_adaptation: "물걸레 들어올림",
      vacuum_remove_mop: "물걸레 제거"
    },
    floor: {
      title: "바닥 설정",
      obstacle_avoidance: "장애물 회피",
      obstacle_avoidance_desc: "센서를 사용하여 장애물 회피",
      collision_avoidance: "충돌 회피",
      collision_avoidance_desc: "벽과 가구 근처에서 속도 줄임",
      auto_mount_mop: "자동 물걸레 장착",
      auto_mount_mop_desc: "필요시 자동으로 물걸레 패드 장착",
      auto_recleaning: "자동 재청소",
      auto_recleaning_desc: "놓친 영역 자동 재청소",
      recleaning_off: "끔",
      recleaning_in_deep_mode: "딥 모드에서",
      recleaning_in_all_modes: "모든 모드에서",
      stain_avoidance: "얼룩 회피",
      stain_avoidance_desc: "감지된 얼룩을 피합니다",
      tight_mopping: "꼼꼼한 물걸레질",
      tight_mopping_desc: "벽과 가장자리에 더 가깝게 닦습니다",
      floor_direction_cleaning: "바닥 방향 청소",
      floor_direction_cleaning_desc: "바닥 결 방향에 따라 청소",
      large_particles_boost: "대형 입자 부스트",
      large_particles_boost_desc: "큰 이물질에 대한 흡입력 증가",
      pet_focused_cleaning: "반려동물 구역 청소",
      pet_focused_cleaning_desc: "반려동물 구역에서 추가 청소",
      low_lying_area_frequency: "낮은 구역 청소 빈도",
      low_lying_area_frequency_desc: "가구 아래 낮은 구역을 얼마나 자주 청소할지"
    },
    edge_corner: {
      title: "가장자리 & 모서리",
      side_reach: "측면 도달",
      side_reach_desc: "가장자리를 위해 측면 브러시 확장",
      mop_extend: "물걸레 확장",
      mop_extend_desc: "가장자리와 모서리를 위해 물걸레 확장",
      gap_cleaning: "틈새 청소",
      gap_cleaning_desc: "가구 사이 좁은 틈새 청소",
      mopping_under: "가구 아래 청소",
      mopping_under_desc: "낮은 가구 아래로 물걸레 확장",
      extend_frequency: "확장 빈도",
      extend_frequency_desc: "가장자리 청소를 위한 물걸레 확장 빈도",
      frequency_standard: "표준",
      frequency_intelligent: "지능형",
      frequency_high: "높음"
    },
    dock: {
      title: "도크 설정",
      self_clean: "자가 세척",
      self_clean_desc: "청소 후 자동 물걸레 세척",
      auto_empty_mode: "자동 비우기 모드",
      auto_empty_mode_desc: "먼지통을 자동으로 비울 시기",
      auto_empty_frequency: "자동 비우기 빈도",
      auto_empty_frequency_desc: "주기당 자동 비우기 횟수",
      empty_off: "끔",
      empty_standard: "표준",
      empty_high_frequency: "고빈도",
      empty_low_frequency: "저빈도",
      auto_detergent: "자동 세제 추가",
      auto_detergent_desc: "세척 시 자동으로 세제 추가",
      mop_washing_with_detergent: "세제로 물걸레 세척",
      mop_washing_with_detergent_desc: "물걸레 세척 시 세제 사용",
      mopping_with_detergent: "세제로 물걸레질",
      mopping_with_detergent_desc: "바닥 물걸레질 시 세제 사용",
      water_electrolysis: "물 전기분해",
      water_electrolysis_desc: "전기분해로 물 살균",
      auto_water_refilling: "자동 물 보충",
      auto_water_refilling_desc: "깨끗한 물 탱크 자동 보충",
      auto_dust_collecting: "자동 먼지 수집",
      auto_dust_collecting_desc: "청소 후 자동으로 먼지통 비우기",
      smart_washing: "스마트 세척",
      smart_washing_desc: "오염 수준에 따라 세척 조정",
      mop_wash_level: "세척 수준",
      mop_wash_level_desc: "물걸레 세척 사이클 강도",
      washing_mode: "세척 모드",
      washing_mode_desc: "물걸레 세척 강도",
      washing_light: "가벼움",
      washing_standard: "표준",
      washing_deep: "심층",
      water_temperature: "물 온도",
      water_temperature_desc: "물걸레 세척 온도",
      temp_normal: "보통",
      temp_mild: "미온",
      temp_warm: "따뜻함",
      temp_hot: "뜨거움",
      auto_drying: "자동 건조",
      auto_drying_desc: "청소 후 자동으로 물걸레 건조",
      drying_time: "건조 시간",
      drying_time_desc: "물걸레 건조 시간",
      auto_rewashing: "자동 재세척",
      auto_rewashing_desc: "오염 시 자동으로 물걸레 재세척",
      rewashing_off: "끔",
      rewashing_in_deep_mode: "딥 모드에서",
      rewashing_in_all_modes: "모든 모드에서",
      off_peak_charging: "비피크 시간 충전",
      off_peak_charging_desc: "비피크 시간에 충전하여 에너지 절약",
      off_peak_charging_start: "시작 시간",
      off_peak_charging_end: "종료 시간",
      station_cleaning: "스테이션 청소",
      station_cleaning_desc: "베이스 스테이션 청소",
      clean_now: "지금 청소",
      self_repair: "자가 수리",
      self_repair_desc: "스테이션 자가 진단 실행",
      repair_now: "수리",
      scraper_frequency: "스크레이퍼 청소 빈도",
      scraper_frequency_desc: "고무 스크레이퍼를 얼마나 자주 청소할지"
    },
    ai_detection: {
      title: "AI 및 감지",
      intelligent_recognition: "지능형 인식",
      intelligent_recognition_desc: "AI 기반 환경 인식",
      ai_obstacle_detection: "AI 장애물 감지",
      ai_obstacle_detection_desc: "AI를 사용하여 장애물을 식별하고 피합니다",
      fuzzy_obstacle_detection: "퍼지 장애물 감지",
      fuzzy_obstacle_detection_desc: "부드럽거나 불명확한 장애물 감지",
      ai_obstacle_image_upload: "장애물 이미지 업로드",
      ai_obstacle_image_upload_desc: "분석을 위해 장애물 이미지를 업로드합니다",
      ai_obstacle_picture: "장애물 사진",
      ai_obstacle_picture_desc: "감지된 장애물 사진 촬영",
      ai_pet_detection: "반려동물 감지",
      ai_pet_detection_desc: "반려동물을 감지하고 피합니다",
      ai_pet_avoidance: "반려동물 회피",
      ai_pet_avoidance_desc: "감지된 반려동물을 적극적으로 회피",
      pet_focused_detection: "반려동물 집중 감지",
      pet_focused_detection_desc: "반려동물 영역 강화 감지",
      pet_picture: "반려동물 사진",
      pet_picture_desc: "감지된 반려동물 사진 촬영",
      ai_human_detection: "사람 감지",
      ai_human_detection_desc: "사람을 감지하고 피합니다",
      human_follow: "사람 따라가기",
      human_follow_desc: "인터랙티브 청소를 위해 사람 따라가기",
      ai_furniture_detection: "가구 감지",
      ai_furniture_detection_desc: "가구를 감지하고 주변을 탐색합니다",
      ai_fluid_detection: "액체 감지",
      ai_fluid_detection_desc: "액체를 감지하고 피합니다",
      fill_light: "보조 조명",
      fill_light_desc: "더 나은 감지를 위해 보조 조명을 사용합니다",
      camera_light_auto: "자동 카메라 밝기",
      camera_light_auto_desc: "카메라 조명 밝기 자동 조정",
      camera_light_brightness: "카메라 조명 밝기",
      camera_light_brightness_desc: "수동 카메라 조명 밝기 수준"
    },
    station_controls: {
      title: "스테이션 제어",
      self_clean: "자가 세척",
      self_clean_desc: "물걸레 패드 세척 사이클 시작",
      manual_drying: "수동 건조",
      manual_drying_desc: "물걸레 패드 건조 사이클 시작",
      water_tank_draining: "물탱크 배수",
      water_tank_draining_desc: "탱크에서 오수 배수",
      base_station_cleaning: "스테이션 청소",
      base_station_cleaning_desc: "베이스 스테이션 청소",
      empty_water_tank: "물탱크 비우기",
      empty_water_tank_desc: "물 수집 탱크 비우기",
      start_auto_empty: "자동 비우기",
      start_auto_empty_desc: "먼지통 자동 비우기 시작",
      start_recleaning: "재청소",
      start_recleaning_desc: "놓친 영역 재청소 시작",
      clear_warning: "경고 지우기",
      clear_warning_desc: "현재 경고 메시지 지우기"
    },
    map: {
      title: "지도 설정",
      multi_floor: "다층 지도",
      multi_floor_desc: "여러 층 지도 지원 활성화",
      rotation: "지도 회전",
      rotation_desc: "지도 방향 회전",
      mapping_actions: "매핑 작업",
      start_mapping: "매핑 시작",
      start_fast_mapping: "빠른 매핑"
    }
  }
}, Tp = {
  en: qw,
  de: Gw,
  ru: Hw,
  zh: Iw,
  es: Bw,
  nl: Pw,
  it: Zw,
  pl: Yw,
  fr_FR: Vw,
  he: Kw,
  ko: Xw
};
function Fw(a, i) {
  return i ? Object.entries(i).reduce((o, [l, c]) => o.replace(new RegExp(`{{${l}}}`, "g"), String(c)), a) : a;
}
function Ww(a, i) {
  return i.split(".").reduce((o, l) => {
    if (o && typeof o == "object" && l in o)
      return o[l];
  }, a);
}
function $w(a = "en") {
  const i = Tp[a] || Tp.en;
  return function(l, c) {
    const d = Ww(i, l);
    return typeof d != "string" ? (te.warn(`Translation key not found: ${l}`), l) : Fw(d, c);
  };
}
function Qw(a, i) {
  return i === 0 ? a("actions.select_rooms") : a(i === 1 ? "actions.clean_rooms" : "actions.clean_rooms_plural", { count: String(i) });
}
const Jw = ["he"];
function Ug(a) {
  return Jw.includes(a);
}
const Zu = R.createContext(null);
function He(a) {
  const i = R.useContext(Zu), o = a ?? i?.language ?? "en", l = R.useMemo(() => $w(o), [o]);
  return {
    t: l,
    getRoomCountTranslation: (c) => Qw(l, c)
  };
}
function V(a, i, o) {
  function l(m, h) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: h,
        constr: _,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(a))
      return;
    m._zod.traits.add(a), i(m, h);
    const p = _.prototype, v = Object.keys(p);
    for (let b = 0; b < v.length; b++) {
      const w = v[b];
      w in m || (m[w] = p[w].bind(m));
    }
  }
  const c = o?.Parent ?? Object;
  class d extends c {
  }
  Object.defineProperty(d, "name", { value: a });
  function _(m) {
    var h;
    const p = o?.Parent ? new d() : this;
    l(p, m), (h = p._zod).deferred ?? (h.deferred = []);
    for (const v of p._zod.deferred)
      v();
    return p;
  }
  return Object.defineProperty(_, "init", { value: l }), Object.defineProperty(_, Symbol.hasInstance, {
    value: (m) => o?.Parent && m instanceof o.Parent ? !0 : m?._zod?.traits?.has(a)
  }), Object.defineProperty(_, "name", { value: a }), _;
}
class Qi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class qg extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
const Gg = {};
function oi(a) {
  return Gg;
}
function Hg(a) {
  const i = Object.values(a).filter((l) => typeof l == "number");
  return Object.entries(a).filter(([l, c]) => i.indexOf(+l) === -1).map(([l, c]) => c);
}
function Cu(a, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function Yu(a) {
  return {
    get value() {
      {
        const i = a();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Vu(a) {
  return a == null;
}
function Ku(a) {
  const i = a.startsWith("^") ? 1 : 0, o = a.endsWith("$") ? a.length - 1 : a.length;
  return a.slice(i, o);
}
const Ap = /* @__PURE__ */ Symbol("evaluating");
function Ge(a, i, o) {
  let l;
  Object.defineProperty(a, i, {
    get() {
      if (l !== Ap)
        return l === void 0 && (l = Ap, l = o()), l;
    },
    set(c) {
      Object.defineProperty(a, i, {
        value: c
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function li(a, i, o) {
  Object.defineProperty(a, i, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function On(...a) {
  const i = {};
  for (const o of a) {
    const l = Object.getOwnPropertyDescriptors(o);
    Object.assign(i, l);
  }
  return Object.defineProperties({}, i);
}
function Np(a) {
  return JSON.stringify(a);
}
function e1(a) {
  return a.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Ig = "captureStackTrace" in Error ? Error.captureStackTrace : (...a) => {
};
function Hl(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}
const t1 = Yu(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const a = Function;
    return new a(""), !0;
  } catch {
    return !1;
  }
});
function Jo(a) {
  if (Hl(a) === !1)
    return !1;
  const i = a.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const o = i.prototype;
  return !(Hl(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function Bg(a) {
  return Jo(a) ? { ...a } : Array.isArray(a) ? [...a] : a;
}
const a1 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ji(a) {
  return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Mn(a, i, o) {
  const l = new a._zod.constr(i ?? a._zod.def);
  return (!i || o?.parent) && (l._zod.parent = a), l;
}
function de(a) {
  const i = a;
  if (!i)
    return {};
  if (typeof i == "string")
    return { error: () => i };
  if (i?.message !== void 0) {
    if (i?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return delete i.message, typeof i.error == "string" ? { ...i, error: () => i.error } : i;
}
function n1(a) {
  return Object.keys(a).filter((i) => a[i]._zod.optin === "optional" && a[i]._zod.optout === "optional");
}
function i1(a, i) {
  const o = a._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const d = On(a._zod.def, {
    get shape() {
      const _ = {};
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (_[m] = o.shape[m]);
      }
      return li(this, "shape", _), _;
    },
    checks: []
  });
  return Mn(a, d);
}
function o1(a, i) {
  const o = a._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const d = On(a._zod.def, {
    get shape() {
      const _ = { ...a._zod.def.shape };
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete _[m];
      }
      return li(this, "shape", _), _;
    },
    checks: []
  });
  return Mn(a, d);
}
function r1(a, i) {
  if (!Jo(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = a._zod.def.checks;
  if (o && o.length > 0) {
    const d = a._zod.def.shape;
    for (const _ in i)
      if (Object.getOwnPropertyDescriptor(d, _) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const c = On(a._zod.def, {
    get shape() {
      const d = { ...a._zod.def.shape, ...i };
      return li(this, "shape", d), d;
    }
  });
  return Mn(a, c);
}
function l1(a, i) {
  if (!Jo(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = On(a._zod.def, {
    get shape() {
      const l = { ...a._zod.def.shape, ...i };
      return li(this, "shape", l), l;
    }
  });
  return Mn(a, o);
}
function s1(a, i) {
  const o = On(a._zod.def, {
    get shape() {
      const l = { ...a._zod.def.shape, ...i._zod.def.shape };
      return li(this, "shape", l), l;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Mn(a, o);
}
function c1(a, i, o) {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const _ = On(i._zod.def, {
    get shape() {
      const m = i._zod.def.shape, h = { ...m };
      if (o)
        for (const p in o) {
          if (!(p in m))
            throw new Error(`Unrecognized key: "${p}"`);
          o[p] && (h[p] = a ? new a({
            type: "optional",
            innerType: m[p]
          }) : m[p]);
        }
      else
        for (const p in m)
          h[p] = a ? new a({
            type: "optional",
            innerType: m[p]
          }) : m[p];
      return li(this, "shape", h), h;
    },
    checks: []
  });
  return Mn(i, _);
}
function u1(a, i, o) {
  const l = On(i._zod.def, {
    get shape() {
      const c = i._zod.def.shape, d = { ...c };
      if (o)
        for (const _ in o) {
          if (!(_ in d))
            throw new Error(`Unrecognized key: "${_}"`);
          o[_] && (d[_] = new a({
            type: "nonoptional",
            innerType: c[_]
          }));
        }
      else
        for (const _ in c)
          d[_] = new a({
            type: "nonoptional",
            innerType: c[_]
          });
      return li(this, "shape", d), d;
    }
  });
  return Mn(i, l);
}
function Fi(a, i = 0) {
  if (a.aborted === !0)
    return !0;
  for (let o = i; o < a.issues.length; o++)
    if (a.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function Pg(a, i) {
  return i.map((o) => {
    var l;
    return (l = o).path ?? (l.path = []), o.path.unshift(a), o;
  });
}
function Nl(a) {
  return typeof a == "string" ? a : a?.message;
}
function ri(a, i, o) {
  const l = { ...a, path: a.path ?? [] };
  if (!a.message) {
    const c = Nl(a.inst?._zod.def?.error?.(a)) ?? Nl(i?.error?.(a)) ?? Nl(o.customError?.(a)) ?? Nl(o.localeError?.(a)) ?? "Invalid input";
    l.message = c;
  }
  return delete l.inst, delete l.continue, i?.reportInput || delete l.input, l;
}
function Xu(a) {
  return Array.isArray(a) ? "array" : typeof a == "string" ? "string" : "unknown";
}
function er(...a) {
  const [i, o, l] = a;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: o,
    inst: l
  } : { ...i };
}
const Zg = (a, i) => {
  a.name = "$ZodError", Object.defineProperty(a, "_zod", {
    value: a._zod,
    enumerable: !1
  }), Object.defineProperty(a, "issues", {
    value: i,
    enumerable: !1
  }), a.message = JSON.stringify(i, Cu, 2), Object.defineProperty(a, "toString", {
    value: () => a.message,
    enumerable: !1
  });
}, Yg = V("$ZodError", Zg), Vg = V("$ZodError", Zg, { Parent: Error });
function d1(a, i = (o) => o.message) {
  const o = {}, l = [];
  for (const c of a.issues)
    c.path.length > 0 ? (o[c.path[0]] = o[c.path[0]] || [], o[c.path[0]].push(i(c))) : l.push(i(c));
  return { formErrors: l, fieldErrors: o };
}
function _1(a, i = (o) => o.message) {
  const o = { _errors: [] }, l = (c) => {
    for (const d of c.issues)
      if (d.code === "invalid_union" && d.errors.length)
        d.errors.map((_) => l({ issues: _ }));
      else if (d.code === "invalid_key")
        l({ issues: d.issues });
      else if (d.code === "invalid_element")
        l({ issues: d.issues });
      else if (d.path.length === 0)
        o._errors.push(i(d));
      else {
        let _ = o, m = 0;
        for (; m < d.path.length; ) {
          const h = d.path[m];
          m === d.path.length - 1 ? (_[h] = _[h] || { _errors: [] }, _[h]._errors.push(i(d))) : _[h] = _[h] || { _errors: [] }, _ = _[h], m++;
        }
      }
  };
  return l(a), o;
}
const Fu = (a) => (i, o, l, c) => {
  const d = l ? Object.assign(l, { async: !1 }) : { async: !1 }, _ = i._zod.run({ value: o, issues: [] }, d);
  if (_ instanceof Promise)
    throw new Qi();
  if (_.issues.length) {
    const m = new (c?.Err ?? a)(_.issues.map((h) => ri(h, d, oi())));
    throw Ig(m, c?.callee), m;
  }
  return _.value;
}, Wu = (a) => async (i, o, l, c) => {
  const d = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let _ = i._zod.run({ value: o, issues: [] }, d);
  if (_ instanceof Promise && (_ = await _), _.issues.length) {
    const m = new (c?.Err ?? a)(_.issues.map((h) => ri(h, d, oi())));
    throw Ig(m, c?.callee), m;
  }
  return _.value;
}, Xl = (a) => (i, o, l) => {
  const c = l ? { ...l, async: !1 } : { async: !1 }, d = i._zod.run({ value: o, issues: [] }, c);
  if (d instanceof Promise)
    throw new Qi();
  return d.issues.length ? {
    success: !1,
    error: new (a ?? Yg)(d.issues.map((_) => ri(_, c, oi())))
  } : { success: !0, data: d.value };
}, m1 = /* @__PURE__ */ Xl(Vg), Fl = (a) => async (i, o, l) => {
  const c = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let d = i._zod.run({ value: o, issues: [] }, c);
  return d instanceof Promise && (d = await d), d.issues.length ? {
    success: !1,
    error: new a(d.issues.map((_) => ri(_, c, oi())))
  } : { success: !0, data: d.value };
}, f1 = /* @__PURE__ */ Fl(Vg), p1 = (a) => (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Fu(a)(i, o, c);
}, g1 = (a) => (i, o, l) => Fu(a)(i, o, l), h1 = (a) => async (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Wu(a)(i, o, c);
}, v1 = (a) => async (i, o, l) => Wu(a)(i, o, l), y1 = (a) => (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Xl(a)(i, o, c);
}, b1 = (a) => (i, o, l) => Xl(a)(i, o, l), w1 = (a) => async (i, o, l) => {
  const c = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Fl(a)(i, o, c);
}, S1 = (a) => async (i, o, l) => Fl(a)(i, o, l), E1 = /^[cC][^\s-]{8,}$/, z1 = /^[0-9a-z]+$/, k1 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, T1 = /^[0-9a-vA-V]{20}$/, A1 = /^[A-Za-z0-9]{27}$/, N1 = /^[a-zA-Z0-9_-]{21}$/, C1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, x1 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Cp = (a) => a ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${a}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, O1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, M1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function R1() {
  return new RegExp(M1, "u");
}
const D1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, j1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, L1 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, U1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, q1 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Kg = /^[A-Za-z0-9_-]*$/, G1 = /^\+[1-9]\d{6,14}$/, Xg = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", H1 = /* @__PURE__ */ new RegExp(`^${Xg}$`);
function Fg(a) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof a.precision == "number" ? a.precision === -1 ? `${i}` : a.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${a.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function I1(a) {
  return new RegExp(`^${Fg(a)}$`);
}
function B1(a) {
  const i = Fg({ precision: a.precision }), o = ["Z"];
  a.local && o.push(""), a.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${i}(?:${o.join("|")})`;
  return new RegExp(`^${Xg}T(?:${l})$`);
}
const P1 = (a) => {
  const i = a ? `[\\s\\S]{${a?.minimum ?? 0},${a?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, Z1 = /^[^A-Z]*$/, Y1 = /^[^a-z]*$/, Ta = /* @__PURE__ */ V("$ZodCheck", (a, i) => {
  var o;
  a._zod ?? (a._zod = {}), a._zod.def = i, (o = a._zod).onattach ?? (o.onattach = []);
}), V1 = /* @__PURE__ */ V("$ZodCheckMaxLength", (a, i) => {
  var o;
  Ta.init(a, i), (o = a._zod.def).when ?? (o.when = (l) => {
    const c = l.value;
    return !Vu(c) && c.length !== void 0;
  }), a._zod.onattach.push((l) => {
    const c = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < c && (l._zod.bag.maximum = i.maximum);
  }), a._zod.check = (l) => {
    const c = l.value;
    if (c.length <= i.maximum)
      return;
    const _ = Xu(c);
    l.issues.push({
      origin: _,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: c,
      inst: a,
      continue: !i.abort
    });
  };
}), K1 = /* @__PURE__ */ V("$ZodCheckMinLength", (a, i) => {
  var o;
  Ta.init(a, i), (o = a._zod.def).when ?? (o.when = (l) => {
    const c = l.value;
    return !Vu(c) && c.length !== void 0;
  }), a._zod.onattach.push((l) => {
    const c = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > c && (l._zod.bag.minimum = i.minimum);
  }), a._zod.check = (l) => {
    const c = l.value;
    if (c.length >= i.minimum)
      return;
    const _ = Xu(c);
    l.issues.push({
      origin: _,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: c,
      inst: a,
      continue: !i.abort
    });
  };
}), X1 = /* @__PURE__ */ V("$ZodCheckLengthEquals", (a, i) => {
  var o;
  Ta.init(a, i), (o = a._zod.def).when ?? (o.when = (l) => {
    const c = l.value;
    return !Vu(c) && c.length !== void 0;
  }), a._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.minimum = i.length, c.maximum = i.length, c.length = i.length;
  }), a._zod.check = (l) => {
    const c = l.value, d = c.length;
    if (d === i.length)
      return;
    const _ = Xu(c), m = d > i.length;
    l.issues.push({
      origin: _,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: a,
      continue: !i.abort
    });
  };
}), Wl = /* @__PURE__ */ V("$ZodCheckStringFormat", (a, i) => {
  var o, l;
  Ta.init(a, i), a._zod.onattach.push((c) => {
    const d = c._zod.bag;
    d.format = i.format, i.pattern && (d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(i.pattern));
  }), i.pattern ? (o = a._zod).check ?? (o.check = (c) => {
    i.pattern.lastIndex = 0, !i.pattern.test(c.value) && c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: c.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: a,
      continue: !i.abort
    });
  }) : (l = a._zod).check ?? (l.check = () => {
  });
}), F1 = /* @__PURE__ */ V("$ZodCheckRegex", (a, i) => {
  Wl.init(a, i), a._zod.check = (o) => {
    i.pattern.lastIndex = 0, !i.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: i.pattern.toString(),
      inst: a,
      continue: !i.abort
    });
  };
}), W1 = /* @__PURE__ */ V("$ZodCheckLowerCase", (a, i) => {
  i.pattern ?? (i.pattern = Z1), Wl.init(a, i);
}), $1 = /* @__PURE__ */ V("$ZodCheckUpperCase", (a, i) => {
  i.pattern ?? (i.pattern = Y1), Wl.init(a, i);
}), Q1 = /* @__PURE__ */ V("$ZodCheckIncludes", (a, i) => {
  Ta.init(a, i);
  const o = Ji(i.includes), l = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${o}` : o);
  i.pattern = l, a._zod.onattach.push((c) => {
    const d = c._zod.bag;
    d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(l);
  }), a._zod.check = (c) => {
    c.value.includes(i.includes, i.position) || c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: c.value,
      inst: a,
      continue: !i.abort
    });
  };
}), J1 = /* @__PURE__ */ V("$ZodCheckStartsWith", (a, i) => {
  Ta.init(a, i);
  const o = new RegExp(`^${Ji(i.prefix)}.*`);
  i.pattern ?? (i.pattern = o), a._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(o);
  }), a._zod.check = (l) => {
    l.value.startsWith(i.prefix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: l.value,
      inst: a,
      continue: !i.abort
    });
  };
}), eS = /* @__PURE__ */ V("$ZodCheckEndsWith", (a, i) => {
  Ta.init(a, i);
  const o = new RegExp(`.*${Ji(i.suffix)}$`);
  i.pattern ?? (i.pattern = o), a._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(o);
  }), a._zod.check = (l) => {
    l.value.endsWith(i.suffix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: l.value,
      inst: a,
      continue: !i.abort
    });
  };
}), tS = /* @__PURE__ */ V("$ZodCheckOverwrite", (a, i) => {
  Ta.init(a, i), a._zod.check = (o) => {
    o.value = i.tx(o.value);
  };
});
class aS {
  constructor(i = []) {
    this.content = [], this.indent = 0, this && (this.args = i);
  }
  indented(i) {
    this.indent += 1, i(this), this.indent -= 1;
  }
  write(i) {
    if (typeof i == "function") {
      i(this, { execution: "sync" }), i(this, { execution: "async" });
      return;
    }
    const l = i.split(`
`).filter((_) => _), c = Math.min(...l.map((_) => _.length - _.trimStart().length)), d = l.map((_) => _.slice(c)).map((_) => " ".repeat(this.indent * 2) + _);
    for (const _ of d)
      this.content.push(_);
  }
  compile() {
    const i = Function, o = this?.args, c = [...(this?.content ?? [""]).map((d) => `  ${d}`)];
    return new i(...o, c.join(`
`));
  }
}
const nS = {
  major: 4,
  minor: 3,
  patch: 6
}, st = /* @__PURE__ */ V("$ZodType", (a, i) => {
  var o;
  a ?? (a = {}), a._zod.def = i, a._zod.bag = a._zod.bag || {}, a._zod.version = nS;
  const l = [...a._zod.def.checks ?? []];
  a._zod.traits.has("$ZodCheck") && l.unshift(a);
  for (const c of l)
    for (const d of c._zod.onattach)
      d(a);
  if (l.length === 0)
    (o = a._zod).deferred ?? (o.deferred = []), a._zod.deferred?.push(() => {
      a._zod.run = a._zod.parse;
    });
  else {
    const c = (_, m, h) => {
      let p = Fi(_), v;
      for (const b of m) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(_))
            continue;
        } else if (p)
          continue;
        const w = _.issues.length, z = b._zod.check(_);
        if (z instanceof Promise && h?.async === !1)
          throw new Qi();
        if (v || z instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await z, _.issues.length !== w && (p || (p = Fi(_, w)));
          });
        else {
          if (_.issues.length === w)
            continue;
          p || (p = Fi(_, w));
        }
      }
      return v ? v.then(() => _) : _;
    }, d = (_, m, h) => {
      if (Fi(_))
        return _.aborted = !0, _;
      const p = c(m, l, h);
      if (p instanceof Promise) {
        if (h.async === !1)
          throw new Qi();
        return p.then((v) => a._zod.parse(v, h));
      }
      return a._zod.parse(p, h);
    };
    a._zod.run = (_, m) => {
      if (m.skipChecks)
        return a._zod.parse(_, m);
      if (m.direction === "backward") {
        const p = a._zod.parse({ value: _.value, issues: [] }, { ...m, skipChecks: !0 });
        return p instanceof Promise ? p.then((v) => d(v, _, m)) : d(p, _, m);
      }
      const h = a._zod.parse(_, m);
      if (h instanceof Promise) {
        if (m.async === !1)
          throw new Qi();
        return h.then((p) => c(p, l, m));
      }
      return c(h, l, m);
    };
  }
  Ge(a, "~standard", () => ({
    validate: (c) => {
      try {
        const d = m1(a, c);
        return d.success ? { value: d.data } : { issues: d.error?.issues };
      } catch {
        return f1(a, c).then((_) => _.success ? { value: _.data } : { issues: _.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), $u = /* @__PURE__ */ V("$ZodString", (a, i) => {
  st.init(a, i), a._zod.pattern = [...a?._zod.bag?.patterns ?? []].pop() ?? P1(a._zod.bag), a._zod.parse = (o, l) => {
    if (i.coerce)
      try {
        o.value = String(o.value);
      } catch {
      }
    return typeof o.value == "string" || o.issues.push({
      expected: "string",
      code: "invalid_type",
      input: o.value,
      inst: a
    }), o;
  };
}), Fe = /* @__PURE__ */ V("$ZodStringFormat", (a, i) => {
  Wl.init(a, i), $u.init(a, i);
}), iS = /* @__PURE__ */ V("$ZodGUID", (a, i) => {
  i.pattern ?? (i.pattern = x1), Fe.init(a, i);
}), oS = /* @__PURE__ */ V("$ZodUUID", (a, i) => {
  if (i.version) {
    const l = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (l === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Cp(l));
  } else
    i.pattern ?? (i.pattern = Cp());
  Fe.init(a, i);
}), rS = /* @__PURE__ */ V("$ZodEmail", (a, i) => {
  i.pattern ?? (i.pattern = O1), Fe.init(a, i);
}), lS = /* @__PURE__ */ V("$ZodURL", (a, i) => {
  Fe.init(a, i), a._zod.check = (o) => {
    try {
      const l = o.value.trim(), c = new URL(l);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(c.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: o.value,
        inst: a,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(c.protocol.endsWith(":") ? c.protocol.slice(0, -1) : c.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: o.value,
        inst: a,
        continue: !i.abort
      })), i.normalize ? o.value = c.href : o.value = l;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: a,
        continue: !i.abort
      });
    }
  };
}), sS = /* @__PURE__ */ V("$ZodEmoji", (a, i) => {
  i.pattern ?? (i.pattern = R1()), Fe.init(a, i);
}), cS = /* @__PURE__ */ V("$ZodNanoID", (a, i) => {
  i.pattern ?? (i.pattern = N1), Fe.init(a, i);
}), uS = /* @__PURE__ */ V("$ZodCUID", (a, i) => {
  i.pattern ?? (i.pattern = E1), Fe.init(a, i);
}), dS = /* @__PURE__ */ V("$ZodCUID2", (a, i) => {
  i.pattern ?? (i.pattern = z1), Fe.init(a, i);
}), _S = /* @__PURE__ */ V("$ZodULID", (a, i) => {
  i.pattern ?? (i.pattern = k1), Fe.init(a, i);
}), mS = /* @__PURE__ */ V("$ZodXID", (a, i) => {
  i.pattern ?? (i.pattern = T1), Fe.init(a, i);
}), fS = /* @__PURE__ */ V("$ZodKSUID", (a, i) => {
  i.pattern ?? (i.pattern = A1), Fe.init(a, i);
}), pS = /* @__PURE__ */ V("$ZodISODateTime", (a, i) => {
  i.pattern ?? (i.pattern = B1(i)), Fe.init(a, i);
}), gS = /* @__PURE__ */ V("$ZodISODate", (a, i) => {
  i.pattern ?? (i.pattern = H1), Fe.init(a, i);
}), hS = /* @__PURE__ */ V("$ZodISOTime", (a, i) => {
  i.pattern ?? (i.pattern = I1(i)), Fe.init(a, i);
}), vS = /* @__PURE__ */ V("$ZodISODuration", (a, i) => {
  i.pattern ?? (i.pattern = C1), Fe.init(a, i);
}), yS = /* @__PURE__ */ V("$ZodIPv4", (a, i) => {
  i.pattern ?? (i.pattern = D1), Fe.init(a, i), a._zod.bag.format = "ipv4";
}), bS = /* @__PURE__ */ V("$ZodIPv6", (a, i) => {
  i.pattern ?? (i.pattern = j1), Fe.init(a, i), a._zod.bag.format = "ipv6", a._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: a,
        continue: !i.abort
      });
    }
  };
}), wS = /* @__PURE__ */ V("$ZodCIDRv4", (a, i) => {
  i.pattern ?? (i.pattern = L1), Fe.init(a, i);
}), SS = /* @__PURE__ */ V("$ZodCIDRv6", (a, i) => {
  i.pattern ?? (i.pattern = U1), Fe.init(a, i), a._zod.check = (o) => {
    const l = o.value.split("/");
    try {
      if (l.length !== 2)
        throw new Error();
      const [c, d] = l;
      if (!d)
        throw new Error();
      const _ = Number(d);
      if (`${_}` !== d)
        throw new Error();
      if (_ < 0 || _ > 128)
        throw new Error();
      new URL(`http://[${c}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: a,
        continue: !i.abort
      });
    }
  };
});
function Wg(a) {
  if (a === "")
    return !0;
  if (a.length % 4 !== 0)
    return !1;
  try {
    return atob(a), !0;
  } catch {
    return !1;
  }
}
const ES = /* @__PURE__ */ V("$ZodBase64", (a, i) => {
  i.pattern ?? (i.pattern = q1), Fe.init(a, i), a._zod.bag.contentEncoding = "base64", a._zod.check = (o) => {
    Wg(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: a,
      continue: !i.abort
    });
  };
});
function zS(a) {
  if (!Kg.test(a))
    return !1;
  const i = a.replace(/[-_]/g, (l) => l === "-" ? "+" : "/"), o = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return Wg(o);
}
const kS = /* @__PURE__ */ V("$ZodBase64URL", (a, i) => {
  i.pattern ?? (i.pattern = Kg), Fe.init(a, i), a._zod.bag.contentEncoding = "base64url", a._zod.check = (o) => {
    zS(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: a,
      continue: !i.abort
    });
  };
}), TS = /* @__PURE__ */ V("$ZodE164", (a, i) => {
  i.pattern ?? (i.pattern = G1), Fe.init(a, i);
});
function AS(a, i = null) {
  try {
    const o = a.split(".");
    if (o.length !== 3)
      return !1;
    const [l] = o;
    if (!l)
      return !1;
    const c = JSON.parse(atob(l));
    return !("typ" in c && c?.typ !== "JWT" || !c.alg || i && (!("alg" in c) || c.alg !== i));
  } catch {
    return !1;
  }
}
const NS = /* @__PURE__ */ V("$ZodJWT", (a, i) => {
  Fe.init(a, i), a._zod.check = (o) => {
    AS(o.value, i.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: a,
      continue: !i.abort
    });
  };
}), CS = /* @__PURE__ */ V("$ZodUnknown", (a, i) => {
  st.init(a, i), a._zod.parse = (o) => o;
}), xS = /* @__PURE__ */ V("$ZodNever", (a, i) => {
  st.init(a, i), a._zod.parse = (o, l) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: a
  }), o);
});
function xp(a, i, o) {
  a.issues.length && i.issues.push(...Pg(o, a.issues)), i.value[o] = a.value;
}
const OS = /* @__PURE__ */ V("$ZodArray", (a, i) => {
  st.init(a, i), a._zod.parse = (o, l) => {
    const c = o.value;
    if (!Array.isArray(c))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: c,
        inst: a
      }), o;
    o.value = Array(c.length);
    const d = [];
    for (let _ = 0; _ < c.length; _++) {
      const m = c[_], h = i.element._zod.run({
        value: m,
        issues: []
      }, l);
      h instanceof Promise ? d.push(h.then((p) => xp(p, o, _))) : xp(h, o, _);
    }
    return d.length ? Promise.all(d).then(() => o) : o;
  };
});
function Il(a, i, o, l, c) {
  if (a.issues.length) {
    if (c && !(o in l))
      return;
    i.issues.push(...Pg(o, a.issues));
  }
  a.value === void 0 ? o in l && (i.value[o] = void 0) : i.value[o] = a.value;
}
function $g(a) {
  const i = Object.keys(a.shape);
  for (const l of i)
    if (!a.shape?.[l]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const o = n1(a.shape);
  return {
    ...a,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(o)
  };
}
function Qg(a, i, o, l, c, d) {
  const _ = [], m = c.keySet, h = c.catchall._zod, p = h.def.type, v = h.optout === "optional";
  for (const b in i) {
    if (m.has(b))
      continue;
    if (p === "never") {
      _.push(b);
      continue;
    }
    const w = h.run({ value: i[b], issues: [] }, l);
    w instanceof Promise ? a.push(w.then((z) => Il(z, o, b, i, v))) : Il(w, o, b, i, v);
  }
  return _.length && o.issues.push({
    code: "unrecognized_keys",
    keys: _,
    input: i,
    inst: d
  }), a.length ? Promise.all(a).then(() => o) : o;
}
const MS = /* @__PURE__ */ V("$ZodObject", (a, i) => {
  if (st.init(a, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
    const m = i.shape;
    Object.defineProperty(i, "shape", {
      get: () => {
        const h = { ...m };
        return Object.defineProperty(i, "shape", {
          value: h
        }), h;
      }
    });
  }
  const l = Yu(() => $g(i));
  Ge(a._zod, "propValues", () => {
    const m = i.shape, h = {};
    for (const p in m) {
      const v = m[p]._zod;
      if (v.values) {
        h[p] ?? (h[p] = /* @__PURE__ */ new Set());
        for (const b of v.values)
          h[p].add(b);
      }
    }
    return h;
  });
  const c = Hl, d = i.catchall;
  let _;
  a._zod.parse = (m, h) => {
    _ ?? (_ = l.value);
    const p = m.value;
    if (!c(p))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: p,
        inst: a
      }), m;
    m.value = {};
    const v = [], b = _.shape;
    for (const w of _.keys) {
      const z = b[w], T = z._zod.optout === "optional", O = z._zod.run({ value: p[w], issues: [] }, h);
      O instanceof Promise ? v.push(O.then((q) => Il(q, m, w, p, T))) : Il(O, m, w, p, T);
    }
    return d ? Qg(v, p, m, h, l.value, a) : v.length ? Promise.all(v).then(() => m) : m;
  };
}), RS = /* @__PURE__ */ V("$ZodObjectJIT", (a, i) => {
  MS.init(a, i);
  const o = a._zod.parse, l = Yu(() => $g(i)), c = (w) => {
    const z = new aS(["shape", "payload", "ctx"]), T = l.value, O = (Z) => {
      const B = Np(Z);
      return `shape[${B}]._zod.run({ value: input[${B}], issues: [] }, ctx)`;
    };
    z.write("const input = payload.value;");
    const q = /* @__PURE__ */ Object.create(null);
    let L = 0;
    for (const Z of T.keys)
      q[Z] = `key_${L++}`;
    z.write("const newResult = {};");
    for (const Z of T.keys) {
      const B = q[Z], H = Np(Z), Y = w[Z]?._zod?.optout === "optional";
      z.write(`const ${B} = ${O(Z)};`), Y ? z.write(`
        if (${B}.issues.length) {
          if (${H} in input) {
            payload.issues = payload.issues.concat(${B}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${H}, ...iss.path] : [${H}]
            })));
          }
        }
        
        if (${B}.value === undefined) {
          if (${H} in input) {
            newResult[${H}] = undefined;
          }
        } else {
          newResult[${H}] = ${B}.value;
        }
        
      `) : z.write(`
        if (${B}.issues.length) {
          payload.issues = payload.issues.concat(${B}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${H}, ...iss.path] : [${H}]
          })));
        }
        
        if (${B}.value === undefined) {
          if (${H} in input) {
            newResult[${H}] = undefined;
          }
        } else {
          newResult[${H}] = ${B}.value;
        }
        
      `);
    }
    z.write("payload.value = newResult;"), z.write("return payload;");
    const U = z.compile();
    return (Z, B) => U(w, Z, B);
  };
  let d;
  const _ = Hl, m = !Gg.jitless, p = m && t1.value, v = i.catchall;
  let b;
  a._zod.parse = (w, z) => {
    b ?? (b = l.value);
    const T = w.value;
    return _(T) ? m && p && z?.async === !1 && z.jitless !== !0 ? (d || (d = c(i.shape)), w = d(w, z), v ? Qg([], T, w, z, b, a) : w) : o(w, z) : (w.issues.push({
      expected: "object",
      code: "invalid_type",
      input: T,
      inst: a
    }), w);
  };
});
function Op(a, i, o, l) {
  for (const d of a)
    if (d.issues.length === 0)
      return i.value = d.value, i;
  const c = a.filter((d) => !Fi(d));
  return c.length === 1 ? (i.value = c[0].value, c[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: o,
    errors: a.map((d) => d.issues.map((_) => ri(_, l, oi())))
  }), i);
}
const DS = /* @__PURE__ */ V("$ZodUnion", (a, i) => {
  st.init(a, i), Ge(a._zod, "optin", () => i.options.some((c) => c._zod.optin === "optional") ? "optional" : void 0), Ge(a._zod, "optout", () => i.options.some((c) => c._zod.optout === "optional") ? "optional" : void 0), Ge(a._zod, "values", () => {
    if (i.options.every((c) => c._zod.values))
      return new Set(i.options.flatMap((c) => Array.from(c._zod.values)));
  }), Ge(a._zod, "pattern", () => {
    if (i.options.every((c) => c._zod.pattern)) {
      const c = i.options.map((d) => d._zod.pattern);
      return new RegExp(`^(${c.map((d) => Ku(d.source)).join("|")})$`);
    }
  });
  const o = i.options.length === 1, l = i.options[0]._zod.run;
  a._zod.parse = (c, d) => {
    if (o)
      return l(c, d);
    let _ = !1;
    const m = [];
    for (const h of i.options) {
      const p = h._zod.run({
        value: c.value,
        issues: []
      }, d);
      if (p instanceof Promise)
        m.push(p), _ = !0;
      else {
        if (p.issues.length === 0)
          return p;
        m.push(p);
      }
    }
    return _ ? Promise.all(m).then((h) => Op(h, c, a, d)) : Op(m, c, a, d);
  };
}), jS = /* @__PURE__ */ V("$ZodIntersection", (a, i) => {
  st.init(a, i), a._zod.parse = (o, l) => {
    const c = o.value, d = i.left._zod.run({ value: c, issues: [] }, l), _ = i.right._zod.run({ value: c, issues: [] }, l);
    return d instanceof Promise || _ instanceof Promise ? Promise.all([d, _]).then(([h, p]) => Mp(o, h, p)) : Mp(o, d, _);
  };
});
function xu(a, i) {
  if (a === i)
    return { valid: !0, data: a };
  if (a instanceof Date && i instanceof Date && +a == +i)
    return { valid: !0, data: a };
  if (Jo(a) && Jo(i)) {
    const o = Object.keys(i), l = Object.keys(a).filter((d) => o.indexOf(d) !== -1), c = { ...a, ...i };
    for (const d of l) {
      const _ = xu(a[d], i[d]);
      if (!_.valid)
        return {
          valid: !1,
          mergeErrorPath: [d, ..._.mergeErrorPath]
        };
      c[d] = _.data;
    }
    return { valid: !0, data: c };
  }
  if (Array.isArray(a) && Array.isArray(i)) {
    if (a.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let l = 0; l < a.length; l++) {
      const c = a[l], d = i[l], _ = xu(c, d);
      if (!_.valid)
        return {
          valid: !1,
          mergeErrorPath: [l, ..._.mergeErrorPath]
        };
      o.push(_.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Mp(a, i, o) {
  const l = /* @__PURE__ */ new Map();
  let c;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      c ?? (c = m);
      for (const h of m.keys)
        l.has(h) || l.set(h, {}), l.get(h).l = !0;
    } else
      a.issues.push(m);
  for (const m of o.issues)
    if (m.code === "unrecognized_keys")
      for (const h of m.keys)
        l.has(h) || l.set(h, {}), l.get(h).r = !0;
    else
      a.issues.push(m);
  const d = [...l].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (d.length && c && a.issues.push({ ...c, keys: d }), Fi(a))
    return a;
  const _ = xu(i.value, o.value);
  if (!_.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(_.mergeErrorPath)}`);
  return a.value = _.data, a;
}
const LS = /* @__PURE__ */ V("$ZodEnum", (a, i) => {
  st.init(a, i);
  const o = Hg(i.entries), l = new Set(o);
  a._zod.values = l, a._zod.pattern = new RegExp(`^(${o.filter((c) => a1.has(typeof c)).map((c) => typeof c == "string" ? Ji(c) : c.toString()).join("|")})$`), a._zod.parse = (c, d) => {
    const _ = c.value;
    return l.has(_) || c.issues.push({
      code: "invalid_value",
      values: o,
      input: _,
      inst: a
    }), c;
  };
}), US = /* @__PURE__ */ V("$ZodLiteral", (a, i) => {
  if (st.init(a, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(i.values);
  a._zod.values = o, a._zod.pattern = new RegExp(`^(${i.values.map((l) => typeof l == "string" ? Ji(l) : l ? Ji(l.toString()) : String(l)).join("|")})$`), a._zod.parse = (l, c) => {
    const d = l.value;
    return o.has(d) || l.issues.push({
      code: "invalid_value",
      values: i.values,
      input: d,
      inst: a
    }), l;
  };
}), qS = /* @__PURE__ */ V("$ZodTransform", (a, i) => {
  st.init(a, i), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new qg(a.constructor.name);
    const c = i.transform(o.value, o);
    if (l.async)
      return (c instanceof Promise ? c : Promise.resolve(c)).then((_) => (o.value = _, o));
    if (c instanceof Promise)
      throw new Qi();
    return o.value = c, o;
  };
});
function Rp(a, i) {
  return a.issues.length && i === void 0 ? { issues: [], value: void 0 } : a;
}
const Jg = /* @__PURE__ */ V("$ZodOptional", (a, i) => {
  st.init(a, i), a._zod.optin = "optional", a._zod.optout = "optional", Ge(a._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Ge(a._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Ku(o.source)})?$`) : void 0;
  }), a._zod.parse = (o, l) => {
    if (i.innerType._zod.optin === "optional") {
      const c = i.innerType._zod.run(o, l);
      return c instanceof Promise ? c.then((d) => Rp(d, o.value)) : Rp(c, o.value);
    }
    return o.value === void 0 ? o : i.innerType._zod.run(o, l);
  };
}), GS = /* @__PURE__ */ V("$ZodExactOptional", (a, i) => {
  Jg.init(a, i), Ge(a._zod, "values", () => i.innerType._zod.values), Ge(a._zod, "pattern", () => i.innerType._zod.pattern), a._zod.parse = (o, l) => i.innerType._zod.run(o, l);
}), HS = /* @__PURE__ */ V("$ZodNullable", (a, i) => {
  st.init(a, i), Ge(a._zod, "optin", () => i.innerType._zod.optin), Ge(a._zod, "optout", () => i.innerType._zod.optout), Ge(a._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Ku(o.source)}|null)$`) : void 0;
  }), Ge(a._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), a._zod.parse = (o, l) => o.value === null ? o : i.innerType._zod.run(o, l);
}), IS = /* @__PURE__ */ V("$ZodDefault", (a, i) => {
  st.init(a, i), a._zod.optin = "optional", Ge(a._zod, "values", () => i.innerType._zod.values), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    if (o.value === void 0)
      return o.value = i.defaultValue, o;
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => Dp(d, i)) : Dp(c, i);
  };
});
function Dp(a, i) {
  return a.value === void 0 && (a.value = i.defaultValue), a;
}
const BS = /* @__PURE__ */ V("$ZodPrefault", (a, i) => {
  st.init(a, i), a._zod.optin = "optional", Ge(a._zod, "values", () => i.innerType._zod.values), a._zod.parse = (o, l) => (l.direction === "backward" || o.value === void 0 && (o.value = i.defaultValue), i.innerType._zod.run(o, l));
}), PS = /* @__PURE__ */ V("$ZodNonOptional", (a, i) => {
  st.init(a, i), Ge(a._zod, "values", () => {
    const o = i.innerType._zod.values;
    return o ? new Set([...o].filter((l) => l !== void 0)) : void 0;
  }), a._zod.parse = (o, l) => {
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => jp(d, a)) : jp(c, a);
  };
});
function jp(a, i) {
  return !a.issues.length && a.value === void 0 && a.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: a.value,
    inst: i
  }), a;
}
const ZS = /* @__PURE__ */ V("$ZodCatch", (a, i) => {
  st.init(a, i), Ge(a._zod, "optin", () => i.innerType._zod.optin), Ge(a._zod, "optout", () => i.innerType._zod.optout), Ge(a._zod, "values", () => i.innerType._zod.values), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => (o.value = d.value, d.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: d.issues.map((_) => ri(_, l, oi()))
      },
      input: o.value
    }), o.issues = []), o)) : (o.value = c.value, c.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: c.issues.map((d) => ri(d, l, oi()))
      },
      input: o.value
    }), o.issues = []), o);
  };
}), YS = /* @__PURE__ */ V("$ZodPipe", (a, i) => {
  st.init(a, i), Ge(a._zod, "values", () => i.in._zod.values), Ge(a._zod, "optin", () => i.in._zod.optin), Ge(a._zod, "optout", () => i.out._zod.optout), Ge(a._zod, "propValues", () => i.in._zod.propValues), a._zod.parse = (o, l) => {
    if (l.direction === "backward") {
      const d = i.out._zod.run(o, l);
      return d instanceof Promise ? d.then((_) => Cl(_, i.in, l)) : Cl(d, i.in, l);
    }
    const c = i.in._zod.run(o, l);
    return c instanceof Promise ? c.then((d) => Cl(d, i.out, l)) : Cl(c, i.out, l);
  };
});
function Cl(a, i, o) {
  return a.issues.length ? (a.aborted = !0, a) : i._zod.run({ value: a.value, issues: a.issues }, o);
}
const VS = /* @__PURE__ */ V("$ZodReadonly", (a, i) => {
  st.init(a, i), Ge(a._zod, "propValues", () => i.innerType._zod.propValues), Ge(a._zod, "values", () => i.innerType._zod.values), Ge(a._zod, "optin", () => i.innerType?._zod?.optin), Ge(a._zod, "optout", () => i.innerType?._zod?.optout), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    const c = i.innerType._zod.run(o, l);
    return c instanceof Promise ? c.then(Lp) : Lp(c);
  };
});
function Lp(a) {
  return a.value = Object.freeze(a.value), a;
}
const KS = /* @__PURE__ */ V("$ZodCustom", (a, i) => {
  Ta.init(a, i), st.init(a, i), a._zod.parse = (o, l) => o, a._zod.check = (o) => {
    const l = o.value, c = i.fn(l);
    if (c instanceof Promise)
      return c.then((d) => Up(d, o, l, a));
    Up(c, o, l, a);
  };
});
function Up(a, i, o, l) {
  if (!a) {
    const c = {
      code: "custom",
      input: o,
      inst: l,
      // incorporates params.error into issue reporting
      path: [...l._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !l._zod.def.abort
      // params: inst._zod.def.params,
    };
    l._zod.def.params && (c.params = l._zod.def.params), i.issues.push(er(c));
  }
}
var qp;
class XS {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...o) {
    const l = o[0];
    return this._map.set(i, l), l && typeof l == "object" && "id" in l && this._idmap.set(l.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const o = this._map.get(i);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(i), this;
  }
  get(i) {
    const o = i._zod.parent;
    if (o) {
      const l = { ...this.get(o) ?? {} };
      delete l.id;
      const c = { ...l, ...this._map.get(i) };
      return Object.keys(c).length ? c : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function FS() {
  return new XS();
}
(qp = globalThis).__zod_globalRegistry ?? (qp.__zod_globalRegistry = FS());
const Qo = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function WS(a, i) {
  return new a({
    type: "string",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function $S(a, i) {
  return new a({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Gp(a, i) {
  return new a({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function QS(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function JS(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function eE(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tE(a, i) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aE(a, i) {
  return new a({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nE(a, i) {
  return new a({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function iE(a, i) {
  return new a({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oE(a, i) {
  return new a({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function rE(a, i) {
  return new a({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lE(a, i) {
  return new a({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sE(a, i) {
  return new a({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cE(a, i) {
  return new a({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uE(a, i) {
  return new a({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dE(a, i) {
  return new a({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _E(a, i) {
  return new a({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mE(a, i) {
  return new a({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fE(a, i) {
  return new a({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pE(a, i) {
  return new a({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gE(a, i) {
  return new a({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hE(a, i) {
  return new a({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vE(a, i) {
  return new a({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function yE(a, i) {
  return new a({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function bE(a, i) {
  return new a({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function wE(a, i) {
  return new a({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function SE(a) {
  return new a({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function EE(a, i) {
  return new a({
    type: "never",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function eh(a, i) {
  return new V1({
    check: "max_length",
    ...de(i),
    maximum: a
  });
}
// @__NO_SIDE_EFFECTS__
function Bl(a, i) {
  return new K1({
    check: "min_length",
    ...de(i),
    minimum: a
  });
}
// @__NO_SIDE_EFFECTS__
function th(a, i) {
  return new X1({
    check: "length_equals",
    ...de(i),
    length: a
  });
}
// @__NO_SIDE_EFFECTS__
function zE(a, i) {
  return new F1({
    check: "string_format",
    format: "regex",
    ...de(i),
    pattern: a
  });
}
// @__NO_SIDE_EFFECTS__
function kE(a) {
  return new W1({
    check: "string_format",
    format: "lowercase",
    ...de(a)
  });
}
// @__NO_SIDE_EFFECTS__
function TE(a) {
  return new $1({
    check: "string_format",
    format: "uppercase",
    ...de(a)
  });
}
// @__NO_SIDE_EFFECTS__
function AE(a, i) {
  return new Q1({
    check: "string_format",
    format: "includes",
    ...de(i),
    includes: a
  });
}
// @__NO_SIDE_EFFECTS__
function NE(a, i) {
  return new J1({
    check: "string_format",
    format: "starts_with",
    ...de(i),
    prefix: a
  });
}
// @__NO_SIDE_EFFECTS__
function CE(a, i) {
  return new eS({
    check: "string_format",
    format: "ends_with",
    ...de(i),
    suffix: a
  });
}
// @__NO_SIDE_EFFECTS__
function to(a) {
  return new tS({
    check: "overwrite",
    tx: a
  });
}
// @__NO_SIDE_EFFECTS__
function xE(a) {
  return /* @__PURE__ */ to((i) => i.normalize(a));
}
// @__NO_SIDE_EFFECTS__
function OE() {
  return /* @__PURE__ */ to((a) => a.trim());
}
// @__NO_SIDE_EFFECTS__
function ME() {
  return /* @__PURE__ */ to((a) => a.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function RE() {
  return /* @__PURE__ */ to((a) => a.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function DE() {
  return /* @__PURE__ */ to((a) => e1(a));
}
// @__NO_SIDE_EFFECTS__
function jE(a, i, o) {
  return new a({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...de(o)
  });
}
// @__NO_SIDE_EFFECTS__
function LE(a, i, o) {
  return new a({
    type: "custom",
    check: "custom",
    fn: i,
    ...de(o)
  });
}
// @__NO_SIDE_EFFECTS__
function UE(a) {
  const i = /* @__PURE__ */ qE((o) => (o.addIssue = (l) => {
    if (typeof l == "string")
      o.issues.push(er(l, o.value, i._zod.def));
    else {
      const c = l;
      c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), c.input ?? (c.input = o.value), c.inst ?? (c.inst = i), c.continue ?? (c.continue = !i._zod.def.abort), o.issues.push(er(c));
    }
  }, a(o.value, o)));
  return i;
}
// @__NO_SIDE_EFFECTS__
function qE(a, i) {
  const o = new Ta({
    check: "custom",
    ...de(i)
  });
  return o._zod.check = a, o;
}
function ah(a) {
  let i = a?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: a.processors ?? {},
    metadataRegistry: a?.metadata ?? Qo,
    target: i,
    unrepresentable: a?.unrepresentable ?? "throw",
    override: a?.override ?? (() => {
    }),
    io: a?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: a?.cycles ?? "ref",
    reused: a?.reused ?? "inline",
    external: a?.external ?? void 0
  };
}
function bt(a, i, o = { path: [], schemaPath: [] }) {
  var l;
  const c = a._zod.def, d = i.seen.get(a);
  if (d)
    return d.count++, o.schemaPath.includes(a) && (d.cycle = o.path), d.schema;
  const _ = { schema: {}, count: 1, cycle: void 0, path: o.path };
  i.seen.set(a, _);
  const m = a._zod.toJSONSchema?.();
  if (m)
    _.schema = m;
  else {
    const v = {
      ...o,
      schemaPath: [...o.schemaPath, a],
      path: o.path
    };
    if (a._zod.processJSONSchema)
      a._zod.processJSONSchema(i, _.schema, v);
    else {
      const w = _.schema, z = i.processors[c.type];
      if (!z)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);
      z(a, i, w, v);
    }
    const b = a._zod.parent;
    b && (_.ref || (_.ref = b), bt(b, i, v), i.seen.get(b).isParent = !0);
  }
  const h = i.metadataRegistry.get(a);
  return h && Object.assign(_.schema, h), i.io === "input" && Ct(a) && (delete _.schema.examples, delete _.schema.default), i.io === "input" && _.schema._prefault && ((l = _.schema).default ?? (l.default = _.schema._prefault)), delete _.schema._prefault, i.seen.get(a).schema;
}
function nh(a, i) {
  const o = a.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const l = /* @__PURE__ */ new Map();
  for (const _ of a.seen.entries()) {
    const m = a.metadataRegistry.get(_[0])?.id;
    if (m) {
      const h = l.get(m);
      if (h && h !== _[0])
        throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      l.set(m, _[0]);
    }
  }
  const c = (_) => {
    const m = a.target === "draft-2020-12" ? "$defs" : "definitions";
    if (a.external) {
      const b = a.external.registry.get(_[0])?.id, w = a.external.uri ?? ((T) => T);
      if (b)
        return { ref: w(b) };
      const z = _[1].defId ?? _[1].schema.id ?? `schema${a.counter++}`;
      return _[1].defId = z, { defId: z, ref: `${w("__shared")}#/${m}/${z}` };
    }
    if (_[1] === o)
      return { ref: "#" };
    const p = `#/${m}/`, v = _[1].schema.id ?? `__schema${a.counter++}`;
    return { defId: v, ref: p + v };
  }, d = (_) => {
    if (_[1].schema.$ref)
      return;
    const m = _[1], { ref: h, defId: p } = c(_);
    m.def = { ...m.schema }, p && (m.defId = p);
    const v = m.schema;
    for (const b in v)
      delete v[b];
    v.$ref = h;
  };
  if (a.cycles === "throw")
    for (const _ of a.seen.entries()) {
      const m = _[1];
      if (m.cycle)
        throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const _ of a.seen.entries()) {
    const m = _[1];
    if (i === _[0]) {
      d(_);
      continue;
    }
    if (a.external) {
      const p = a.external.registry.get(_[0])?.id;
      if (i !== _[0] && p) {
        d(_);
        continue;
      }
    }
    if (a.metadataRegistry.get(_[0])?.id) {
      d(_);
      continue;
    }
    if (m.cycle) {
      d(_);
      continue;
    }
    if (m.count > 1 && a.reused === "ref") {
      d(_);
      continue;
    }
  }
}
function ih(a, i) {
  const o = a.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const l = (_) => {
    const m = a.seen.get(_);
    if (m.ref === null)
      return;
    const h = m.def ?? m.schema, p = { ...h }, v = m.ref;
    if (m.ref = null, v) {
      l(v);
      const w = a.seen.get(v), z = w.schema;
      if (z.$ref && (a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(z)) : Object.assign(h, z), Object.assign(h, p), _._zod.parent === v)
        for (const O in h)
          O === "$ref" || O === "allOf" || O in p || delete h[O];
      if (z.$ref && w.def)
        for (const O in h)
          O === "$ref" || O === "allOf" || O in w.def && JSON.stringify(h[O]) === JSON.stringify(w.def[O]) && delete h[O];
    }
    const b = _._zod.parent;
    if (b && b !== v) {
      l(b);
      const w = a.seen.get(b);
      if (w?.schema.$ref && (h.$ref = w.schema.$ref, w.def))
        for (const z in h)
          z === "$ref" || z === "allOf" || z in w.def && JSON.stringify(h[z]) === JSON.stringify(w.def[z]) && delete h[z];
    }
    a.override({
      zodSchema: _,
      jsonSchema: h,
      path: m.path ?? []
    });
  };
  for (const _ of [...a.seen.entries()].reverse())
    l(_[0]);
  const c = {};
  if (a.target === "draft-2020-12" ? c.$schema = "https://json-schema.org/draft/2020-12/schema" : a.target === "draft-07" ? c.$schema = "http://json-schema.org/draft-07/schema#" : a.target === "draft-04" ? c.$schema = "http://json-schema.org/draft-04/schema#" : a.target, a.external?.uri) {
    const _ = a.external.registry.get(i)?.id;
    if (!_)
      throw new Error("Schema is missing an `id` property");
    c.$id = a.external.uri(_);
  }
  Object.assign(c, o.def ?? o.schema);
  const d = a.external?.defs ?? {};
  for (const _ of a.seen.entries()) {
    const m = _[1];
    m.def && m.defId && (d[m.defId] = m.def);
  }
  a.external || Object.keys(d).length > 0 && (a.target === "draft-2020-12" ? c.$defs = d : c.definitions = d);
  try {
    const _ = JSON.parse(JSON.stringify(c));
    return Object.defineProperty(_, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: Pl(i, "input", a.processors),
          output: Pl(i, "output", a.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), _;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Ct(a, i) {
  const o = i ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(a))
    return !1;
  o.seen.add(a);
  const l = a._zod.def;
  if (l.type === "transform")
    return !0;
  if (l.type === "array")
    return Ct(l.element, o);
  if (l.type === "set")
    return Ct(l.valueType, o);
  if (l.type === "lazy")
    return Ct(l.getter(), o);
  if (l.type === "promise" || l.type === "optional" || l.type === "nonoptional" || l.type === "nullable" || l.type === "readonly" || l.type === "default" || l.type === "prefault")
    return Ct(l.innerType, o);
  if (l.type === "intersection")
    return Ct(l.left, o) || Ct(l.right, o);
  if (l.type === "record" || l.type === "map")
    return Ct(l.keyType, o) || Ct(l.valueType, o);
  if (l.type === "pipe")
    return Ct(l.in, o) || Ct(l.out, o);
  if (l.type === "object") {
    for (const c in l.shape)
      if (Ct(l.shape[c], o))
        return !0;
    return !1;
  }
  if (l.type === "union") {
    for (const c of l.options)
      if (Ct(c, o))
        return !0;
    return !1;
  }
  if (l.type === "tuple") {
    for (const c of l.items)
      if (Ct(c, o))
        return !0;
    return !!(l.rest && Ct(l.rest, o));
  }
  return !1;
}
const GE = (a, i = {}) => (o) => {
  const l = ah({ ...o, processors: i });
  return bt(a, l), nh(l, a), ih(l, a);
}, Pl = (a, i, o = {}) => (l) => {
  const { libraryOptions: c, target: d } = l ?? {}, _ = ah({ ...c ?? {}, target: d, io: i, processors: o });
  return bt(a, _), nh(_, a), ih(_, a);
}, HE = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, IE = (a, i, o, l) => {
  const c = o;
  c.type = "string";
  const { minimum: d, maximum: _, format: m, patterns: h, contentEncoding: p } = a._zod.bag;
  if (typeof d == "number" && (c.minLength = d), typeof _ == "number" && (c.maxLength = _), m && (c.format = HE[m] ?? m, c.format === "" && delete c.format, m === "time" && delete c.format), p && (c.contentEncoding = p), h && h.size > 0) {
    const v = [...h];
    v.length === 1 ? c.pattern = v[0].source : v.length > 1 && (c.allOf = [
      ...v.map((b) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, BE = (a, i, o, l) => {
  o.not = {};
}, PE = (a, i, o, l) => {
}, ZE = (a, i, o, l) => {
  const c = a._zod.def, d = Hg(c.entries);
  d.every((_) => typeof _ == "number") && (o.type = "number"), d.every((_) => typeof _ == "string") && (o.type = "string"), o.enum = d;
}, YE = (a, i, o, l) => {
  const c = a._zod.def, d = [];
  for (const _ of c.values)
    if (_ === void 0) {
      if (i.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof _ == "bigint") {
      if (i.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      d.push(Number(_));
    } else
      d.push(_);
  if (d.length !== 0) if (d.length === 1) {
    const _ = d[0];
    o.type = _ === null ? "null" : typeof _, i.target === "draft-04" || i.target === "openapi-3.0" ? o.enum = [_] : o.const = _;
  } else
    d.every((_) => typeof _ == "number") && (o.type = "number"), d.every((_) => typeof _ == "string") && (o.type = "string"), d.every((_) => typeof _ == "boolean") && (o.type = "boolean"), d.every((_) => _ === null) && (o.type = "null"), o.enum = d;
}, VE = (a, i, o, l) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, KE = (a, i, o, l) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, XE = (a, i, o, l) => {
  const c = o, d = a._zod.def, { minimum: _, maximum: m } = a._zod.bag;
  typeof _ == "number" && (c.minItems = _), typeof m == "number" && (c.maxItems = m), c.type = "array", c.items = bt(d.element, i, { ...l, path: [...l.path, "items"] });
}, FE = (a, i, o, l) => {
  const c = o, d = a._zod.def;
  c.type = "object", c.properties = {};
  const _ = d.shape;
  for (const p in _)
    c.properties[p] = bt(_[p], i, {
      ...l,
      path: [...l.path, "properties", p]
    });
  const m = new Set(Object.keys(_)), h = new Set([...m].filter((p) => {
    const v = d.shape[p]._zod;
    return i.io === "input" ? v.optin === void 0 : v.optout === void 0;
  }));
  h.size > 0 && (c.required = Array.from(h)), d.catchall?._zod.def.type === "never" ? c.additionalProperties = !1 : d.catchall ? d.catchall && (c.additionalProperties = bt(d.catchall, i, {
    ...l,
    path: [...l.path, "additionalProperties"]
  })) : i.io === "output" && (c.additionalProperties = !1);
}, WE = (a, i, o, l) => {
  const c = a._zod.def, d = c.inclusive === !1, _ = c.options.map((m, h) => bt(m, i, {
    ...l,
    path: [...l.path, d ? "oneOf" : "anyOf", h]
  }));
  d ? o.oneOf = _ : o.anyOf = _;
}, $E = (a, i, o, l) => {
  const c = a._zod.def, d = bt(c.left, i, {
    ...l,
    path: [...l.path, "allOf", 0]
  }), _ = bt(c.right, i, {
    ...l,
    path: [...l.path, "allOf", 1]
  }), m = (p) => "allOf" in p && Object.keys(p).length === 1, h = [
    ...m(d) ? d.allOf : [d],
    ...m(_) ? _.allOf : [_]
  ];
  o.allOf = h;
}, QE = (a, i, o, l) => {
  const c = a._zod.def, d = bt(c.innerType, i, l), _ = i.seen.get(a);
  i.target === "openapi-3.0" ? (_.ref = c.innerType, o.nullable = !0) : o.anyOf = [d, { type: "null" }];
}, JE = (a, i, o, l) => {
  const c = a._zod.def;
  bt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType;
}, ez = (a, i, o, l) => {
  const c = a._zod.def;
  bt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType, o.default = JSON.parse(JSON.stringify(c.defaultValue));
}, tz = (a, i, o, l) => {
  const c = a._zod.def;
  bt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType, i.io === "input" && (o._prefault = JSON.parse(JSON.stringify(c.defaultValue)));
}, az = (a, i, o, l) => {
  const c = a._zod.def;
  bt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType;
  let _;
  try {
    _ = c.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = _;
}, nz = (a, i, o, l) => {
  const c = a._zod.def, d = i.io === "input" ? c.in._zod.def.type === "transform" ? c.out : c.in : c.out;
  bt(d, i, l);
  const _ = i.seen.get(a);
  _.ref = d;
}, iz = (a, i, o, l) => {
  const c = a._zod.def;
  bt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType, o.readOnly = !0;
}, oh = (a, i, o, l) => {
  const c = a._zod.def;
  bt(c.innerType, i, l);
  const d = i.seen.get(a);
  d.ref = c.innerType;
}, oz = /* @__PURE__ */ V("ZodISODateTime", (a, i) => {
  pS.init(a, i), Qe.init(a, i);
});
function rz(a) {
  return /* @__PURE__ */ vE(oz, a);
}
const lz = /* @__PURE__ */ V("ZodISODate", (a, i) => {
  gS.init(a, i), Qe.init(a, i);
});
function sz(a) {
  return /* @__PURE__ */ yE(lz, a);
}
const cz = /* @__PURE__ */ V("ZodISOTime", (a, i) => {
  hS.init(a, i), Qe.init(a, i);
});
function uz(a) {
  return /* @__PURE__ */ bE(cz, a);
}
const dz = /* @__PURE__ */ V("ZodISODuration", (a, i) => {
  vS.init(a, i), Qe.init(a, i);
});
function _z(a) {
  return /* @__PURE__ */ wE(dz, a);
}
const mz = (a, i) => {
  Yg.init(a, i), a.name = "ZodError", Object.defineProperties(a, {
    format: {
      value: (o) => _1(a, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => d1(a, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        a.issues.push(o), a.message = JSON.stringify(a.issues, Cu, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        a.issues.push(...o), a.message = JSON.stringify(a.issues, Cu, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return a.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, ma = V("ZodError", mz, {
  Parent: Error
}), fz = /* @__PURE__ */ Fu(ma), pz = /* @__PURE__ */ Wu(ma), gz = /* @__PURE__ */ Xl(ma), hz = /* @__PURE__ */ Fl(ma), vz = /* @__PURE__ */ p1(ma), yz = /* @__PURE__ */ g1(ma), bz = /* @__PURE__ */ h1(ma), wz = /* @__PURE__ */ v1(ma), Sz = /* @__PURE__ */ y1(ma), Ez = /* @__PURE__ */ b1(ma), zz = /* @__PURE__ */ w1(ma), kz = /* @__PURE__ */ S1(ma), ct = /* @__PURE__ */ V("ZodType", (a, i) => (st.init(a, i), Object.assign(a["~standard"], {
  jsonSchema: {
    input: Pl(a, "input"),
    output: Pl(a, "output")
  }
}), a.toJSONSchema = GE(a, {}), a.def = i, a.type = i.type, Object.defineProperty(a, "_def", { value: i }), a.check = (...o) => a.clone(On(i, {
  checks: [
    ...i.checks ?? [],
    ...o.map((l) => typeof l == "function" ? { _zod: { check: l, def: { check: "custom" }, onattach: [] } } : l)
  ]
}), {
  parent: !0
}), a.with = a.check, a.clone = (o, l) => Mn(a, o, l), a.brand = () => a, a.register = ((o, l) => (o.add(a, l), a)), a.parse = (o, l) => fz(a, o, l, { callee: a.parse }), a.safeParse = (o, l) => gz(a, o, l), a.parseAsync = async (o, l) => pz(a, o, l, { callee: a.parseAsync }), a.safeParseAsync = async (o, l) => hz(a, o, l), a.spa = a.safeParseAsync, a.encode = (o, l) => vz(a, o, l), a.decode = (o, l) => yz(a, o, l), a.encodeAsync = async (o, l) => bz(a, o, l), a.decodeAsync = async (o, l) => wz(a, o, l), a.safeEncode = (o, l) => Sz(a, o, l), a.safeDecode = (o, l) => Ez(a, o, l), a.safeEncodeAsync = async (o, l) => zz(a, o, l), a.safeDecodeAsync = async (o, l) => kz(a, o, l), a.refine = (o, l) => a.check(hk(o, l)), a.superRefine = (o) => a.check(vk(o)), a.overwrite = (o) => a.check(/* @__PURE__ */ to(o)), a.optional = () => Bp(a), a.exactOptional = () => ik(a), a.nullable = () => Pp(a), a.nullish = () => Bp(Pp(a)), a.nonoptional = (o) => uk(a, o), a.array = () => lh(a), a.or = (o) => Wz([a, o]), a.and = (o) => Qz(a, o), a.transform = (o) => Zp(a, ak(o)), a.default = (o) => lk(a, o), a.prefault = (o) => ck(a, o), a.catch = (o) => _k(a, o), a.pipe = (o) => Zp(a, o), a.readonly = () => pk(a), a.describe = (o) => {
  const l = a.clone();
  return Qo.add(l, { description: o }), l;
}, Object.defineProperty(a, "description", {
  get() {
    return Qo.get(a)?.description;
  },
  configurable: !0
}), a.meta = (...o) => {
  if (o.length === 0)
    return Qo.get(a);
  const l = a.clone();
  return Qo.add(l, o[0]), l;
}, a.isOptional = () => a.safeParse(void 0).success, a.isNullable = () => a.safeParse(null).success, a.apply = (o) => o(a), a)), rh = /* @__PURE__ */ V("_ZodString", (a, i) => {
  $u.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (l, c, d) => IE(a, l, c);
  const o = a._zod.bag;
  a.format = o.format ?? null, a.minLength = o.minimum ?? null, a.maxLength = o.maximum ?? null, a.regex = (...l) => a.check(/* @__PURE__ */ zE(...l)), a.includes = (...l) => a.check(/* @__PURE__ */ AE(...l)), a.startsWith = (...l) => a.check(/* @__PURE__ */ NE(...l)), a.endsWith = (...l) => a.check(/* @__PURE__ */ CE(...l)), a.min = (...l) => a.check(/* @__PURE__ */ Bl(...l)), a.max = (...l) => a.check(/* @__PURE__ */ eh(...l)), a.length = (...l) => a.check(/* @__PURE__ */ th(...l)), a.nonempty = (...l) => a.check(/* @__PURE__ */ Bl(1, ...l)), a.lowercase = (l) => a.check(/* @__PURE__ */ kE(l)), a.uppercase = (l) => a.check(/* @__PURE__ */ TE(l)), a.trim = () => a.check(/* @__PURE__ */ OE()), a.normalize = (...l) => a.check(/* @__PURE__ */ xE(...l)), a.toLowerCase = () => a.check(/* @__PURE__ */ ME()), a.toUpperCase = () => a.check(/* @__PURE__ */ RE()), a.slugify = () => a.check(/* @__PURE__ */ DE());
}), Tz = /* @__PURE__ */ V("ZodString", (a, i) => {
  $u.init(a, i), rh.init(a, i), a.email = (o) => a.check(/* @__PURE__ */ $S(Az, o)), a.url = (o) => a.check(/* @__PURE__ */ aE(Nz, o)), a.jwt = (o) => a.check(/* @__PURE__ */ hE(Pz, o)), a.emoji = (o) => a.check(/* @__PURE__ */ nE(Cz, o)), a.guid = (o) => a.check(/* @__PURE__ */ Gp(Hp, o)), a.uuid = (o) => a.check(/* @__PURE__ */ QS(xl, o)), a.uuidv4 = (o) => a.check(/* @__PURE__ */ JS(xl, o)), a.uuidv6 = (o) => a.check(/* @__PURE__ */ eE(xl, o)), a.uuidv7 = (o) => a.check(/* @__PURE__ */ tE(xl, o)), a.nanoid = (o) => a.check(/* @__PURE__ */ iE(xz, o)), a.guid = (o) => a.check(/* @__PURE__ */ Gp(Hp, o)), a.cuid = (o) => a.check(/* @__PURE__ */ oE(Oz, o)), a.cuid2 = (o) => a.check(/* @__PURE__ */ rE(Mz, o)), a.ulid = (o) => a.check(/* @__PURE__ */ lE(Rz, o)), a.base64 = (o) => a.check(/* @__PURE__ */ fE(Hz, o)), a.base64url = (o) => a.check(/* @__PURE__ */ pE(Iz, o)), a.xid = (o) => a.check(/* @__PURE__ */ sE(Dz, o)), a.ksuid = (o) => a.check(/* @__PURE__ */ cE(jz, o)), a.ipv4 = (o) => a.check(/* @__PURE__ */ uE(Lz, o)), a.ipv6 = (o) => a.check(/* @__PURE__ */ dE(Uz, o)), a.cidrv4 = (o) => a.check(/* @__PURE__ */ _E(qz, o)), a.cidrv6 = (o) => a.check(/* @__PURE__ */ mE(Gz, o)), a.e164 = (o) => a.check(/* @__PURE__ */ gE(Bz, o)), a.datetime = (o) => a.check(rz(o)), a.date = (o) => a.check(sz(o)), a.time = (o) => a.check(uz(o)), a.duration = (o) => a.check(_z(o));
});
function Wa(a) {
  return /* @__PURE__ */ WS(Tz, a);
}
const Qe = /* @__PURE__ */ V("ZodStringFormat", (a, i) => {
  Fe.init(a, i), rh.init(a, i);
}), Az = /* @__PURE__ */ V("ZodEmail", (a, i) => {
  rS.init(a, i), Qe.init(a, i);
}), Hp = /* @__PURE__ */ V("ZodGUID", (a, i) => {
  iS.init(a, i), Qe.init(a, i);
}), xl = /* @__PURE__ */ V("ZodUUID", (a, i) => {
  oS.init(a, i), Qe.init(a, i);
}), Nz = /* @__PURE__ */ V("ZodURL", (a, i) => {
  lS.init(a, i), Qe.init(a, i);
}), Cz = /* @__PURE__ */ V("ZodEmoji", (a, i) => {
  sS.init(a, i), Qe.init(a, i);
}), xz = /* @__PURE__ */ V("ZodNanoID", (a, i) => {
  cS.init(a, i), Qe.init(a, i);
}), Oz = /* @__PURE__ */ V("ZodCUID", (a, i) => {
  uS.init(a, i), Qe.init(a, i);
}), Mz = /* @__PURE__ */ V("ZodCUID2", (a, i) => {
  dS.init(a, i), Qe.init(a, i);
}), Rz = /* @__PURE__ */ V("ZodULID", (a, i) => {
  _S.init(a, i), Qe.init(a, i);
}), Dz = /* @__PURE__ */ V("ZodXID", (a, i) => {
  mS.init(a, i), Qe.init(a, i);
}), jz = /* @__PURE__ */ V("ZodKSUID", (a, i) => {
  fS.init(a, i), Qe.init(a, i);
}), Lz = /* @__PURE__ */ V("ZodIPv4", (a, i) => {
  yS.init(a, i), Qe.init(a, i);
}), Uz = /* @__PURE__ */ V("ZodIPv6", (a, i) => {
  bS.init(a, i), Qe.init(a, i);
}), qz = /* @__PURE__ */ V("ZodCIDRv4", (a, i) => {
  wS.init(a, i), Qe.init(a, i);
}), Gz = /* @__PURE__ */ V("ZodCIDRv6", (a, i) => {
  SS.init(a, i), Qe.init(a, i);
}), Hz = /* @__PURE__ */ V("ZodBase64", (a, i) => {
  ES.init(a, i), Qe.init(a, i);
}), Iz = /* @__PURE__ */ V("ZodBase64URL", (a, i) => {
  kS.init(a, i), Qe.init(a, i);
}), Bz = /* @__PURE__ */ V("ZodE164", (a, i) => {
  TS.init(a, i), Qe.init(a, i);
}), Pz = /* @__PURE__ */ V("ZodJWT", (a, i) => {
  NS.init(a, i), Qe.init(a, i);
}), Zz = /* @__PURE__ */ V("ZodUnknown", (a, i) => {
  CS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => PE();
});
function Ip() {
  return /* @__PURE__ */ SE(Zz);
}
const Yz = /* @__PURE__ */ V("ZodNever", (a, i) => {
  xS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => BE(a, o, l);
});
function Vz(a) {
  return /* @__PURE__ */ EE(Yz, a);
}
const Kz = /* @__PURE__ */ V("ZodArray", (a, i) => {
  OS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => XE(a, o, l, c), a.element = i.element, a.min = (o, l) => a.check(/* @__PURE__ */ Bl(o, l)), a.nonempty = (o) => a.check(/* @__PURE__ */ Bl(1, o)), a.max = (o, l) => a.check(/* @__PURE__ */ eh(o, l)), a.length = (o, l) => a.check(/* @__PURE__ */ th(o, l)), a.unwrap = () => a.element;
});
function lh(a, i) {
  return /* @__PURE__ */ jE(Kz, a, i);
}
const Xz = /* @__PURE__ */ V("ZodObject", (a, i) => {
  RS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => FE(a, o, l, c), Ge(a, "shape", () => i.shape), a.keyof = () => Wi(Object.keys(a._zod.def.shape)), a.catchall = (o) => a.clone({ ...a._zod.def, catchall: o }), a.passthrough = () => a.clone({ ...a._zod.def, catchall: Ip() }), a.loose = () => a.clone({ ...a._zod.def, catchall: Ip() }), a.strict = () => a.clone({ ...a._zod.def, catchall: Vz() }), a.strip = () => a.clone({ ...a._zod.def, catchall: void 0 }), a.extend = (o) => r1(a, o), a.safeExtend = (o) => l1(a, o), a.merge = (o) => s1(a, o), a.pick = (o) => i1(a, o), a.omit = (o) => o1(a, o), a.partial = (...o) => c1(sh, a, o[0]), a.required = (...o) => u1(ch, a, o[0]);
});
function Qu(a, i) {
  const o = {
    type: "object",
    shape: a ?? {},
    ...de(i)
  };
  return new Xz(o);
}
const Fz = /* @__PURE__ */ V("ZodUnion", (a, i) => {
  DS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => WE(a, o, l, c), a.options = i.options;
});
function Wz(a, i) {
  return new Fz({
    type: "union",
    options: a,
    ...de(i)
  });
}
const $z = /* @__PURE__ */ V("ZodIntersection", (a, i) => {
  jS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => $E(a, o, l, c);
});
function Qz(a, i) {
  return new $z({
    type: "intersection",
    left: a,
    right: i
  });
}
const Ou = /* @__PURE__ */ V("ZodEnum", (a, i) => {
  LS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (l, c, d) => ZE(a, l, c), a.enum = i.entries, a.options = Object.values(i.entries);
  const o = new Set(Object.keys(i.entries));
  a.extract = (l, c) => {
    const d = {};
    for (const _ of l)
      if (o.has(_))
        d[_] = i.entries[_];
      else
        throw new Error(`Key ${_} not found in enum`);
    return new Ou({
      ...i,
      checks: [],
      ...de(c),
      entries: d
    });
  }, a.exclude = (l, c) => {
    const d = { ...i.entries };
    for (const _ of l)
      if (o.has(_))
        delete d[_];
      else
        throw new Error(`Key ${_} not found in enum`);
    return new Ou({
      ...i,
      checks: [],
      ...de(c),
      entries: d
    });
  };
});
function Wi(a, i) {
  const o = Array.isArray(a) ? Object.fromEntries(a.map((l) => [l, l])) : a;
  return new Ou({
    type: "enum",
    entries: o,
    ...de(i)
  });
}
const Jz = /* @__PURE__ */ V("ZodLiteral", (a, i) => {
  US.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => YE(a, o, l), a.values = new Set(i.values), Object.defineProperty(a, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function ek(a, i) {
  return new Jz({
    type: "literal",
    values: Array.isArray(a) ? a : [a],
    ...de(i)
  });
}
const tk = /* @__PURE__ */ V("ZodTransform", (a, i) => {
  qS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => KE(a, o), a._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new qg(a.constructor.name);
    o.addIssue = (d) => {
      if (typeof d == "string")
        o.issues.push(er(d, o.value, i));
      else {
        const _ = d;
        _.fatal && (_.continue = !1), _.code ?? (_.code = "custom"), _.input ?? (_.input = o.value), _.inst ?? (_.inst = a), o.issues.push(er(_));
      }
    };
    const c = i.transform(o.value, o);
    return c instanceof Promise ? c.then((d) => (o.value = d, o)) : (o.value = c, o);
  };
});
function ak(a) {
  return new tk({
    type: "transform",
    transform: a
  });
}
const sh = /* @__PURE__ */ V("ZodOptional", (a, i) => {
  Jg.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => oh(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function Bp(a) {
  return new sh({
    type: "optional",
    innerType: a
  });
}
const nk = /* @__PURE__ */ V("ZodExactOptional", (a, i) => {
  GS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => oh(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function ik(a) {
  return new nk({
    type: "optional",
    innerType: a
  });
}
const ok = /* @__PURE__ */ V("ZodNullable", (a, i) => {
  HS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => QE(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function Pp(a) {
  return new ok({
    type: "nullable",
    innerType: a
  });
}
const rk = /* @__PURE__ */ V("ZodDefault", (a, i) => {
  IS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => ez(a, o, l, c), a.unwrap = () => a._zod.def.innerType, a.removeDefault = a.unwrap;
});
function lk(a, i) {
  return new rk({
    type: "default",
    innerType: a,
    get defaultValue() {
      return typeof i == "function" ? i() : Bg(i);
    }
  });
}
const sk = /* @__PURE__ */ V("ZodPrefault", (a, i) => {
  BS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => tz(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function ck(a, i) {
  return new sk({
    type: "prefault",
    innerType: a,
    get defaultValue() {
      return typeof i == "function" ? i() : Bg(i);
    }
  });
}
const ch = /* @__PURE__ */ V("ZodNonOptional", (a, i) => {
  PS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => JE(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function uk(a, i) {
  return new ch({
    type: "nonoptional",
    innerType: a,
    ...de(i)
  });
}
const dk = /* @__PURE__ */ V("ZodCatch", (a, i) => {
  ZS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => az(a, o, l, c), a.unwrap = () => a._zod.def.innerType, a.removeCatch = a.unwrap;
});
function _k(a, i) {
  return new dk({
    type: "catch",
    innerType: a,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const mk = /* @__PURE__ */ V("ZodPipe", (a, i) => {
  YS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => nz(a, o, l, c), a.in = i.in, a.out = i.out;
});
function Zp(a, i) {
  return new mk({
    type: "pipe",
    in: a,
    out: i
    // ...util.normalizeParams(params),
  });
}
const fk = /* @__PURE__ */ V("ZodReadonly", (a, i) => {
  VS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => iz(a, o, l, c), a.unwrap = () => a._zod.def.innerType;
});
function pk(a) {
  return new fk({
    type: "readonly",
    innerType: a
  });
}
const gk = /* @__PURE__ */ V("ZodCustom", (a, i) => {
  KS.init(a, i), ct.init(a, i), a._zod.processJSONSchema = (o, l, c) => VE(a, o);
});
function hk(a, i = {}) {
  return /* @__PURE__ */ LE(gk, a, i);
}
function vk(a) {
  return /* @__PURE__ */ UE(a);
}
function je(a, i) {
  return typeof a == typeof i ? a : i;
}
function yk(a) {
  return typeof a == "string";
}
function Tn(a) {
  return typeof a == "number";
}
const bk = /^[a-z][a-z0-9_]*\.[a-z0-9][a-z0-9_]*$/, uh = Wa().regex(bk, "Invalid entity ID format. Expected: domain.object_id"), wk = uh.refine((a) => a.startsWith("vacuum."), {
  message: "Expected vacuum.* entity"
}), Sk = uh.refine((a) => a.startsWith("camera."), {
  message: "Expected camera.* entity"
}), Ek = Qu({
  type: ek("stop"),
  action: Wi(["stop", "stop_and_dock"])
}), zk = Qu({
  primary: Wa().optional(),
  accent: Wa().optional(),
  background: Wa().optional(),
  surface: Wa().optional(),
  text: Wa().optional(),
  textSecondary: Wa().optional()
}).optional(), kk = Qu({
  type: Wa(),
  entity: wk,
  map_entity: Sk.optional(),
  title: Wa().optional(),
  theme: Wi(["light", "dark", "custom", "auto"]).optional(),
  custom_theme: zk,
  language: Wi(["en", "de", "ru", "pl", "it", "nl", "es", "zh", "he", "fr_FR", "ko"]).optional(),
  default_mode: Wi(["room", "all", "zone"]).optional(),
  default_room_view: Wi(["map", "list"]).optional(),
  buttons: lh(Ek).optional()
});
function Tk(a) {
  const i = kk.safeParse(a);
  return i.success ? {
    valid: !0,
    errors: [],
    warnings: [],
    data: i.data
  } : {
    valid: !1,
    errors: i.error.issues.map((l) => {
      const c = l.path.join(".");
      return c ? `${c}: ${l.message}` : l.message;
    }),
    warnings: []
  };
}
function Yp(a, i, o) {
  const l = o.scale || 1, c = o.padding || [0, 0, 0, 0], d = o.crop || [0, 0, 0, 0], _ = o.left, m = o.top, h = o.height, p = o.grid_size, v = (a + d[0] - c[0]) / l * p + _, b = m + (h * p - 1) - (i + d[1] - c[1]) / l * p;
  return { x: Math.round(v), y: Math.round(b) };
}
function Ak(a, i, o, l) {
  const c = xk(i);
  if (te.debug("ZoneConverter", "Input:", { uiZone: a, imageWidth: o, imageHeight: l, hasDimensions: !!c }), !c) {
    const w = Ck(i);
    return te.debug("ZoneConverter", "Using calibration fallback, points:", w?.length ?? 0), Nk(a, w, o, l);
  }
  te.debug("ZoneConverter", "Map dimensions:", c);
  const d = a.x1 / 100 * o, _ = a.y1 / 100 * l, m = a.x2 / 100 * o, h = a.y2 / 100 * l;
  te.debug("ZoneConverter", "Pixel coords:", { px1: d, py1: _, px2: m, py2: h });
  const p = Yp(d, _, c), v = Yp(m, h, c), b = {
    x1: p.x,
    y1: p.y,
    x2: v.x,
    y2: v.y
  };
  return te.debug("ZoneConverter", "Output vacuum coords:", b), b;
}
function Nk(a, i, o, l) {
  if (!i || i.length < 3)
    return {
      x1: Math.round(a.x1 / 100 * 12e3 - 6e3),
      y1: Math.round(a.y1 / 100 * 12e3 - 6e3),
      x2: Math.round(a.x2 / 100 * 12e3 - 6e3),
      y2: Math.round(a.y2 / 100 * 12e3 - 6e3)
    };
  const c = a.x1 / 100 * o, d = a.y1 / 100 * l, _ = a.x2 / 100 * o, m = a.y2 / 100 * l, h = i[0], p = i[1], v = i[2], b = (p.vacuum.x - h.vacuum.x) / (p.map.x - h.map.x || 1), w = (v.vacuum.y - h.vacuum.y) / (v.map.y - h.map.y || 1), z = Math.round(h.vacuum.x + (c - h.map.x) * b), T = Math.round(h.vacuum.y + (d - h.map.y) * w), O = Math.round(h.vacuum.x + (_ - h.map.x) * b), q = Math.round(h.vacuum.y + (m - h.map.y) * w);
  return {
    x1: z,
    y1: T,
    x2: O,
    y2: q
  };
}
function Ck(a) {
  const i = a?.attributes?.calibration_points;
  return !i || !Array.isArray(i) || i.length < 3 ? null : i.map((o) => {
    const l = o;
    return {
      vacuum: { x: l.vacuum?.x ?? 0, y: l.vacuum?.y ?? 0 },
      map: { x: l.map?.x ?? 0, y: l.map?.y ?? 0 }
    };
  });
}
function xk(a) {
  const i = a?.attributes;
  if (!i)
    return null;
  const o = Tn(i.top) ? i.top : void 0, l = Tn(i.left) ? i.left : void 0, c = Tn(i.height) ? i.height : void 0, d = Tn(i.width) ? i.width : void 0, _ = Tn(i.grid_size) ? i.grid_size : void 0;
  if (o !== void 0 && l !== void 0 && c && d && _) {
    const m = Tn(i.scale) ? i.scale : 1, h = Array.isArray(i.padding) ? i.padding : [0, 0, 0, 0], p = Array.isArray(i.crop) ? i.crop : [0, 0, 0, 0];
    return {
      top: o,
      left: l,
      height: c,
      width: d,
      grid_size: _,
      scale: m,
      padding: h,
      crop: p
    };
  }
  return null;
}
async function kn(a, i, o, l, c, d) {
  try {
    return await a.callService(i, o, l), !0;
  } catch (_) {
    return te.error(`Service call failed: ${i}.${o}`, _), c && d && c(d), !1;
  }
}
function Ok({ hass: a, entityId: i, mapEntityId: o, onSuccess: l, onError: c }) {
  const { t: d } = He(), _ = R.useCallback(async () => {
    te.debug("Vacuum", "Start full clean", i), await kn(
      a,
      "vacuum",
      "start",
      { entity_id: i },
      c,
      d("errors.service_call_failed")
    ) && l?.(d("toast.starting_full_clean"));
  }, [a, i, l, c, d]), m = R.useCallback(async () => {
    te.debug("Vacuum", "Pause", i), await kn(
      a,
      "vacuum",
      "pause",
      { entity_id: i },
      c,
      d("errors.service_call_failed")
    ) && l?.(d("toast.pausing_vacuum"));
  }, [a, i, l, c, d]), h = R.useCallback(
    async (T = "stop") => {
      te.debug("Vacuum", "Stop", { action: T, entityId: i }), await kn(
        a,
        "vacuum",
        "stop",
        { entity_id: i },
        c,
        d("errors.service_call_failed")
      ) && (T === "stop_and_dock" ? (await kn(
        a,
        "vacuum",
        "return_to_base",
        { entity_id: i },
        c,
        d("errors.service_call_failed")
      ), l?.(d("toast.stopping_and_docking"))) : l?.(d("toast.stopping_vacuum")));
    },
    [a, i, l, c, d]
  ), p = R.useCallback(async () => {
    te.debug("Vacuum", "Return to dock", i), await kn(
      a,
      "vacuum",
      "return_to_base",
      { entity_id: i },
      c,
      d("errors.service_call_failed")
    ) && l?.(d("toast.vacuum_docking"));
  }, [a, i, l, c, d]), v = R.useCallback(
    async (T, O, q = 1) => {
      te.debug("Vacuum", "Clean segments", { entityId: i, segments: T, count: O, repeats: q }), await kn(
        a,
        "dreame_vacuum",
        "vacuum_clean_segment",
        {
          entity_id: i,
          segments: T,
          repeats: q
        },
        c,
        d("errors.service_call_failed")
      ) && l?.(d(O === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(O) }));
    },
    [a, i, l, c, d]
  ), b = R.useCallback(
    async (T) => {
      if (T.length === 0) {
        te.debug("Vacuum", "No room configs provided");
        return;
      }
      const O = T.map((B) => B.roomId), q = T.map((B) => B.cycles), L = T.map((B) => B.suctionLevel), U = T.map((B) => B.mopWetness);
      if (te.debug("Vacuum", "Clean segments with custom config", {
        entityId: i,
        segments: O,
        repeats: q,
        suctionLevels: L,
        waterVolumes: U,
        roomConfigs: T
      }), await kn(
        a,
        "dreame_vacuum",
        "vacuum_clean_segment",
        {
          entity_id: i,
          segments: O,
          repeats: q,
          suction_level: L,
          water_volume: U
        },
        c,
        d("errors.service_call_failed")
      )) {
        const B = T.length;
        l?.(d(B === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(B) }));
      }
    },
    [a, i, l, c, d]
  ), w = R.useCallback(
    async (T, O, q, L = 1) => {
      const U = a.states[o];
      te.debug("Vacuum", "Clean zone - input:", {
        uiZone: T,
        imageWidth: O,
        imageHeight: q,
        mapEntityId: o,
        repeats: L,
        calibrationPoints: U?.attributes?.calibration_points
      });
      const Z = Ak(T, U, O, q);
      te.debug("Vacuum", "Clean zone - converted:", Z), await kn(
        a,
        "dreame_vacuum",
        "vacuum_clean_zone",
        {
          entity_id: i,
          zone: [Z.x1, Z.y1, Z.x2, Z.y2],
          repeats: L
        },
        c,
        d("errors.service_call_failed")
      ) && l?.(d("toast.starting_zone_clean"));
    },
    [a, i, o, l, c, d]
  ), z = R.useCallback(
    (T, O, q, L, U, Z = 1, B) => {
      switch (te.debug("Vacuum", "Handle clean", {
        mode: T,
        selectedRooms: Array.from(O.entries()),
        selectedZone: q,
        imageWidth: L,
        imageHeight: U,
        repeats: Z,
        customizeMode: !!B
      }), T) {
        case "all":
          B && B.length > 0 ? b(B) : _();
          break;
        case "room":
          if (O.size > 0)
            if (B && B.length > 0) {
              const H = B.filter((F) => O.has(F.roomId));
              H.length > 0 ? b(H) : v(Array.from(O.keys()), O.size, Z);
            } else
              v(Array.from(O.keys()), O.size, Z);
          else
            te.debug("Vacuum", "No rooms selected"), l?.(d("toast.select_rooms_first"));
          break;
        case "zone":
          q && L && U ? w(q, L, U, Z) : q ? (te.debug("Vacuum", "Zone selected but no image dimensions"), l?.(d("toast.cannot_determine_map"))) : (te.debug("Vacuum", "No zone selected"), l?.(d("toast.select_zone_first")));
          break;
      }
    },
    [_, v, b, w, l, d]
  );
  return {
    handleStart: _,
    handlePause: m,
    handleStop: h,
    handleDock: p,
    handleCleanSegments: v,
    handleCleanSegmentsCustomized: b,
    handleCleanZone: w,
    handleClean: z
  };
}
function Mk(a = 3e3) {
  const [i, o] = R.useState(null);
  R.useEffect(() => {
    if (i) {
      const d = setTimeout(() => o(null), a);
      return () => clearTimeout(d);
    }
  }, [i, a]);
  const l = R.useCallback((d) => {
    o(d);
  }, []), c = R.useCallback(() => {
    o(null);
  }, []);
  return {
    toast: i,
    showToast: l,
    hideToast: c
  };
}
const jl = {
  name: "light",
  colors: {
    // Background colors
    cardBg: "#f5f5f7",
    surfaceBg: "#ffffff",
    surfaceSecondary: "#f0f0f0",
    surfaceTertiary: "#e8e8e8",
    surfaceBgHover: "rgba(255, 255, 255, 0.5)",
    // Text colors
    textPrimary: "#1a1a1a",
    textPrimaryInvert: "#ffffff",
    textSecondary: "#666666",
    textTertiary: "#999999",
    // Accent colors
    accentColor: "#007aff",
    accentColorHover: "#0051d5",
    accentBg: "#e3f2fd",
    accentBgHover: "#bbdefb",
    accentBgSecondary: "#999999",
    accentBgSecondaryHover: "#666666",
    accentBgTransparent: "rgba(0, 122, 255, 0.15)",
    accentShadow: "rgba(0, 122, 255, 0.3)",
    accentColorShadowColor: "rgba(0, 122, 255, 0.25)",
    // State colors
    warningColor: "#ff9500",
    warningShadow: "rgba(255, 149, 0, 0.4)",
    errorColor: "#ff3b30",
    errorColorHover: "#ff1f0f",
    errorShadow: "rgba(255, 59, 48, 0.4)",
    // UI elements
    borderColor: "#e0e0e0",
    overlayBg: "rgba(0, 0, 0, 0.05)",
    cardShadow: "rgba(0, 0, 0, 0.08)",
    cardShadowHover: "rgba(0, 0, 0, 0.12)",
    handleShadow: "rgba(0, 0, 0, 0.2)",
    handleBg: "rgba(0, 0, 0, 0.15)",
    backdropBg: "rgba(0, 0, 0, 0.4)",
    // Toggle specific
    toggleActive: "rgba(0, 122, 255, 0.25)",
    toggleActiveBorder: "#0051d5",
    toggleActiveShadowColor: "#ffffff"
  }
}, dh = {
  name: "dark",
  colors: {
    // Background colors
    cardBg: "#1c1c1e",
    surfaceBg: "#2c2c2e",
    surfaceSecondary: "#3a3a3c",
    surfaceTertiary: "#48484a",
    surfaceBgHover: "rgba(255, 255, 255, 0.1)",
    // Text colors
    textPrimary: "#ffffff",
    textPrimaryInvert: "#1a1a1a",
    textSecondary: "#aeaeb2",
    textTertiary: "#8e8e93",
    // Accent colors
    accentColor: "#5865f2",
    accentColorHover: "#409cff",
    accentBg: "rgba(10, 132, 255, 0.2)",
    accentBgHover: "rgba(10, 132, 255, 0.3)",
    accentBgSecondary: "rgba(10, 132, 255, 0.1)",
    accentBgSecondaryHover: "rgba(10, 132, 255, 0.2)",
    accentBgTransparent: "rgba(10, 132, 255, 0.2)",
    accentShadow: "rgba(10, 132, 255, 0.4)",
    accentColorShadowColor: "rgba(88, 101, 242, 0.25)",
    // State colors
    warningColor: "#ff9f0a",
    warningShadow: "rgba(255, 159, 10, 0.4)",
    errorColor: "#ff453a",
    errorColorHover: "#ff6961",
    errorShadow: "rgba(255, 69, 58, 0.4)",
    // UI elements
    borderColor: "#48484a",
    overlayBg: "rgba(0, 0, 0, 0.3)",
    cardShadow: "rgba(0, 0, 0, 0.3)",
    cardShadowHover: "rgba(0, 0, 0, 0.4)",
    handleShadow: "rgba(0, 0, 0, 0.4)",
    handleBg: "rgba(255, 255, 255, 0.15)",
    backdropBg: "rgba(0, 0, 0, 0.6)",
    // Toggle specific
    toggleActive: "#2e354f",
    toggleActiveBorder: "#5865f2",
    toggleActiveShadowColor: "rgba(88, 101, 242, 0.25)"
  }
};
function Rk(a, i) {
  switch (a) {
    case "light":
      return jl;
    case "dark":
      return dh;
    case "custom":
      return Dk(i || {});
    case "auto":
      return jl;
    default:
      return jl;
  }
}
function Dk(a) {
  return {
    name: "custom",
    colors: {
      ...(a.base === "dark" ? dh : jl).colors,
      ...a
    }
  };
}
function jk(a) {
  return {
    "--card-bg": a.cardBg,
    "--surface-bg": a.surfaceBg,
    "--surface-secondary": a.surfaceSecondary,
    "--surface-tertiary": a.surfaceTertiary,
    "--surface-bg-hover": a.surfaceBgHover,
    "--text-primary": a.textPrimary,
    "--text-primary-invert": a.textPrimaryInvert,
    "--text-secondary": a.textSecondary,
    "--text-tertiary": a.textTertiary,
    "--accent-color": a.accentColor,
    "--accent-color-hover": a.accentColorHover,
    "--accent-bg": a.accentBg,
    "--accent-bg-hover": a.accentBgHover,
    "--accent-bg-secondary": a.accentBgSecondary,
    "--accent-bg-secondary-hover": a.accentBgSecondaryHover,
    "--accent-bg-transparent": a.accentBgTransparent,
    "--accent-shadow": a.accentShadow,
    "--accent-color-shadow-color": a.accentColorShadowColor,
    "--warning-color": a.warningColor,
    "--warning-shadow": a.warningShadow,
    "--error-color": a.errorColor,
    "--error-color-hover": a.errorColorHover,
    "--error-shadow": a.errorShadow,
    "--border-color": a.borderColor,
    "--overlay-bg": a.overlayBg,
    "--card-shadow": a.cardShadow,
    "--card-shadow-hover": a.cardShadowHover,
    "--handle-shadow": a.handleShadow,
    "--handle-bg": a.handleBg,
    "--backdrop-bg": a.backdropBg,
    "--toggle-active": a.toggleActive,
    "--toggle-active-border": a.toggleActiveBorder,
    "--toggle-active-shadow-color": a.toggleActiveShadowColor
  };
}
function Lk(a, i) {
  const o = jk(i.colors);
  Object.entries(o).forEach(([l, c]) => {
    a.style.setProperty(l, c);
  });
}
function Uk() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function qk(a, i) {
  return a === "auto" ? i ? "dark" : "light" : a;
}
function Gk({
  themeType: a = "auto",
  customThemeConfig: i,
  containerRef: o,
  haDarkMode: l
}) {
  const [c, d] = R.useState(Uk);
  R.useEffect(() => {
    if (a !== "auto")
      return;
    const p = window.matchMedia("(prefers-color-scheme: dark)"), v = () => d(p.matches);
    return d(p.matches), p.addEventListener("change", v), () => p.removeEventListener("change", v);
  }, [a]);
  const _ = R.useMemo(() => c || l === !0, [c, l]), m = R.useMemo(
    () => qk(a, _),
    [a, _]
  ), h = R.useMemo(() => Rk(m, i), [m, i]);
  return R.useEffect(() => {
    o?.current && Lk(o.current, h);
  }, [h, o]), h;
}
function Hk({ hass: a, entity: i, config: o, language: l, children: c }) {
  const d = R.useMemo(() => Ug(l), [l]), _ = Fk(a, i), m = R.useMemo(
    () => ({ hass: a, entity: i, config: o, language: l, isRtl: d, machineState: _ }),
    [a, i, o, l, d, _]
  );
  return /* @__PURE__ */ g.jsx(Zu.Provider, { value: m, children: c });
}
function nr() {
  const a = R.useContext(Zu);
  if (!a)
    throw new Error("useVacuumCardContext must be used within VacuumCardProvider");
  return a;
}
function Mt() {
  return nr().hass;
}
function Bt() {
  return nr().entity;
}
function Ju() {
  return nr().config;
}
function ed() {
  return Mt().config?.unit_system?.area ?? "m²";
}
function td() {
  return nr().isRtl;
}
function Aa() {
  return nr().machineState;
}
function Ik() {
  const a = Ju();
  return { getStopAction: R.useCallback(() => a.buttons?.find((l) => l.type === "stop")?.action ?? "stop", [a.buttons]) };
}
function Bk({ hass: a, baseEntityId: i, rooms: o }) {
  const l = R.useMemo(() => o.map((v) => ({
    roomId: v.id,
    roomName: v.name,
    suctionEntityId: xt("select", i, v.id, ca.SUCTION_LEVEL.key),
    wetnessEntityId: xt("number", i, v.id, Tu.WETNESS_LEVEL.key),
    cleaningTimesEntityId: xt(
      "select",
      i,
      v.id,
      ca.CLEANING_TIMES.key
    ),
    mopPressureEntityId: xt(
      "select",
      i,
      v.id,
      ca.MOP_PRESSURE.key
    ),
    mopTemperatureEntityId: xt(
      "select",
      i,
      v.id,
      ca.MOP_TEMPERATURE.key
    )
  })), [i, o]), c = R.useMemo(() => {
    const v = /* @__PURE__ */ new Map();
    for (const b of l) {
      const w = a.states[b.suctionEntityId], z = a.states[b.wetnessEntityId], T = a.states[b.cleaningTimesEntityId], O = a.states[b.mopPressureEntityId], q = a.states[b.mopTemperatureEntityId], L = !!(w || z || T || O || q);
      v.set(b.roomId, {
        roomId: b.roomId,
        roomName: b.roomName,
        // Suction level
        suctionLevel: w?.state ?? null,
        suctionLevelOptions: w?.attributes?.options ?? [],
        // Wetness level
        wetnessLevel: z ? parseFloat(z.state) : null,
        wetnessMin: z?.attributes?.min ?? 1,
        wetnessMax: z?.attributes?.max ?? 32,
        // Cleaning times
        cleaningTimes: T?.state ?? null,
        cleaningTimesOptions: T?.attributes?.options ?? [],
        // Mop pressure
        mopPressure: O?.state ?? null,
        mopPressureOptions: O?.attributes?.options ?? [],
        // Mop temperature
        mopTemperature: q?.state ?? null,
        mopTemperatureOptions: q?.attributes?.options ?? [],
        hasEntities: L
      });
    }
    return v;
  }, [a.states, l]), d = R.useCallback(
    (v, b) => {
      const w = xt("select", i, v, ca.SUCTION_LEVEL.key);
      te.debug("RoomSettings", "Setting suction level:", { roomId: v, value: b, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: b
      });
    },
    [a, i]
  ), _ = R.useCallback(
    (v, b) => {
      const w = xt("number", i, v, Tu.WETNESS_LEVEL.key);
      te.debug("RoomSettings", "Setting wetness level:", { roomId: v, value: b, entityId: w }), a.callService("number", "set_value", {
        entity_id: w,
        value: b
      });
    },
    [a, i]
  ), m = R.useCallback(
    (v, b) => {
      const w = xt("select", i, v, ca.CLEANING_TIMES.key);
      te.debug("RoomSettings", "Setting cleaning times:", { roomId: v, value: b, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: b
      });
    },
    [a, i]
  ), h = R.useCallback(
    (v, b) => {
      const w = xt("select", i, v, ca.MOP_PRESSURE.key);
      te.debug("RoomSettings", "Setting mop pressure:", { roomId: v, value: b, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: b
      });
    },
    [a, i]
  ), p = R.useCallback(
    (v, b) => {
      const w = xt("select", i, v, ca.MOP_TEMPERATURE.key);
      te.debug("RoomSettings", "Setting mop temperature:", { roomId: v, value: b, entityId: w }), a.callService("select", "select_option", {
        entity_id: w,
        option: b
      });
    },
    [a, i]
  );
  return {
    roomSettings: c,
    setSuctionLevel: d,
    setWetnessLevel: _,
    setCleaningTimes: m,
    setMopPressure: h,
    setMopTemperature: p
  };
}
function yt(a, i) {
  const o = i ? a.states[i] : void 0, l = !!o, c = o ? o.state !== "unavailable" : !1, d = l && !c;
  return {
    entity: o,
    exists: l,
    available: c,
    state: o?.state,
    isOn: o?.state === "on",
    disabled: !l || !c,
    unavailable: d,
    attributes: o?.attributes ?? {}
  };
}
function _h(a, i, o) {
  const l = `switch.${i}_${o}`;
  return { entityId: l, ...yt(a, l) };
}
function mh(a, i, o) {
  const l = `select.${i}_${o}`;
  return { entityId: l, ...yt(a, l) };
}
function Pk(a, i, o) {
  const l = `number.${i}_${o}`, c = yt(a, l), d = c.state ? parseFloat(c.state) : 0;
  return { entityId: l, ...c, numericValue: d };
}
function Zk(a, i, o) {
  const l = `button.${i}_${o}`;
  return { entityId: l, ...yt(a, l) };
}
function Yk(a, i, o) {
  const l = `time.${i}_${o}`, c = yt(a, l), d = c.state ? c.state.substring(0, 5) : "00:00";
  return { entityId: l, ...c, timeValue: d };
}
function ir() {
  const a = Bt();
  return R.useMemo(() => {
    const i = a.attributes.capabilities ?? [], o = new Set(i);
    return {
      raw: i,
      has: (l) => o.has(l),
      hasAny: (...l) => l.some((c) => o.has(c)),
      hasAll: (...l) => l.every((c) => o.has(c))
    };
  }, [a.attributes.capabilities]);
}
function Vk(a, i) {
  return a && Sp[a] ? Sp[a] : i && zp[i] ? zp[i] : Tw;
}
function Kk(a) {
  return a && Ep[a] ? Ep[a] : Aw;
}
function Xk(a, i, o, l) {
  const c = a === "cleaning", d = a === "paused", _ = c || d, m = i === "mopping", h = o === be.MOPPING;
  return {
    // Cleaning mode: only when idle
    canChangeCleaningMode: a === "idle",
    // Suction: disabled when mopping, paused, or customized cleaning active
    canChangeSuctionPower: !h && !m && !d && !(c && l),
    // Wetness: only when idle
    canChangeWetness: !_,
    // Route: only when idle
    canChangeRoute: !_,
    // Mop frequency buttons: disabled during cleaning (sliders remain enabled)
    canChangeMopFrequency: !_,
    // Max power toggle: disabled during cleaning
    canToggleMaxPower: !_,
    // Actions
    canStartCleaning: !_ && a !== "returning" && a !== "error",
    canPause: c,
    canResume: d,
    canStop: _,
    canDock: a !== "returning" && a !== "maintenance"
  };
}
function Fk(a, i) {
  return R.useMemo(() => {
    const o = Iu(i.entity_id), l = kt("sensor", o, Ne.STATE.key), c = yt(a, l), d = c.state ?? i.state ?? "unknown", _ = Vk(c.state, i.state), m = Kk(c.state), h = i.attributes.cleaning_mode ?? be.SWEEPING_AND_MOPPING, p = i.attributes.customized_cleaning === !0, v = Xk(_, m, h, p);
    return {
      phase: _,
      task: m,
      rawState: d,
      cleaningMode: h,
      isCustomizedCleaning: p,
      controls: v
    };
  }, [a, i]);
}
const Vp = {
  [be.SWEEPING_AND_MOPPING]: "cleaning_mode_button.vac_and_mop",
  [be.MOPPING_AFTER_SWEEPING]: "cleaning_mode_button.mop_after_vac",
  [be.SWEEPING]: "cleaning_mode_button.vacuum",
  [be.MOPPING]: "cleaning_mode_button.mop",
  [be.CUSTOMIZE]: "customize.title"
}, Wk = {
  [be.SWEEPING_AND_MOPPING]: "Vac & Mop",
  [be.MOPPING_AFTER_SWEEPING]: "Mop after Vac",
  [be.SWEEPING]: "Vac",
  [be.MOPPING]: "Mop",
  [be.CUSTOMIZE]: "Customize"
};
function $k(a, i) {
  return i && Vp[a] ? i(Vp[a]) : Wk[a] ?? a;
}
const Kp = {
  [ba.VACUUM_AND_MOP]: "cleaning_mode_button.vac_and_mop",
  [ba.MOP_AFTER_VACUUM]: "cleaning_mode_button.mop_after_vac"
}, Qk = {
  [ba.VACUUM_AND_MOP]: "Vac & Mop",
  [ba.MOP_AFTER_VACUUM]: "Mop after Vac"
};
function Jk(a, i) {
  return i && Kp[a] ? i(Kp[a]) : Qk[a] ?? a;
}
function eT(a, i) {
  const o = a.toLowerCase();
  return o.includes("quiet") || o.includes("silent") ? i ? i("suction_levels.quiet") : "Quiet" : o.includes("standard") ? i ? i("suction_levels.standard") : "Standard" : o.includes("strong") ? i ? i("suction_levels.strong") : "Turbo" : o.includes("turbo") ? i ? i("suction_levels.turbo") : "Max" : a;
}
function tT(a) {
  switch (a) {
    case be.SWEEPING:
      return Mg;
    case be.MOPPING:
      return Rg;
    case be.SWEEPING_AND_MOPPING:
      return Gl;
    case be.MOPPING_AFTER_SWEEPING:
      return qu;
    case be.CUSTOMIZE:
      return jg;
    default:
      return "";
  }
}
function aT(a) {
  switch (a) {
    case ba.VACUUM_AND_MOP:
      return Gl;
    case ba.MOP_AFTER_VACUUM:
      return qu;
    default:
      return "";
  }
}
function nT(a) {
  switch (a) {
    case Xi.QUIET:
    case Xi.SILENT:
      return Au;
    case Xi.STANDARD:
      return Gu;
    case Xi.STRONG:
      return Dg;
    case Xi.TURBO:
      return Nu;
  }
}
function iT(a) {
  switch (a) {
    case ai.QUICK:
      return ww;
    case ai.STANDARD:
      return Sw;
    case ai.INTENSIVE:
      return Ew;
    case ai.DEEP:
      return zw;
  }
}
function oT(a) {
  switch (a) {
    case ii.BY_AREA:
      return vw;
    case ii.BY_TIME:
      return yw;
    case ii.BY_ROOM:
      return bw;
    default:
      return "⚙️";
  }
}
function rT(a) {
  return kw;
}
function lT(a, i) {
  if (i)
    switch (a) {
      case Dl.LOW:
        return i("custom_mode.water_low");
      case Dl.MEDIUM:
        return i("custom_mode.water_medium");
      case Dl.HIGH:
        return i("custom_mode.water_high");
      default:
        return a;
    }
  return a;
}
function sT(a, i) {
  if (!a)
    return null;
  const o = i.title || a.attributes?.friendly_name || "Dreame Vacuum", l = i.map_entity || `camera.${i.entity.split(".")[1]}_map`, c = a.attributes?.selected_map || "", d = a.attributes?.rooms?.[c], _ = Array.isArray(d) ? d.map((m) => ({
    id: m.id,
    name: m.name,
    x: 50,
    y: 50,
    icon: m.icon
  })) : [];
  return {
    deviceName: o,
    mapEntityId: l,
    rooms: _
  };
}
function cT(a, i) {
  const o = je(a.attributes.status, ""), l = a.attributes.segment_cleaning || !1, c = a.attributes.zone_cleaning || !1;
  if (a.attributes.started) {
    if (l || o.toLowerCase().includes("room"))
      return "room";
    if (c || o.toLowerCase().includes("zone"))
      return "zone";
  }
  return i;
}
function uT(a, i, o) {
  const l = a.states[i], c = a.states[o], d = /* @__PURE__ */ new Map();
  if (!l) return d;
  const _ = l.attributes.segment_cleaning === !0, m = l.attributes.active_segments;
  if (!_ || !m || !Array.isArray(m))
    return d;
  const h = c?.attributes?.rooms, p = /* @__PURE__ */ new Map();
  h && Object.values(h).forEach((v) => {
    p.set(v.room_id, v.name);
  });
  for (const v of m) {
    const b = p.get(v) || `Room ${v}`;
    d.set(v, b);
  }
  return d;
}
function fh(a, i) {
  const o = a.states[i];
  if (!o?.attributes?.rooms)
    return te.debug("RoomParser", "No rooms found in camera entity:", i), [];
  const l = o.attributes.rooms;
  return Object.values(l).map((c) => ({
    id: c.room_id,
    name: c.name,
    icon: c.icon,
    visibility: c.visibility,
    x0: c.x0,
    y0: c.y0,
    x1: c.x1,
    y1: c.y1,
    x: c.x,
    y: c.y
  }));
}
function $i(a, i, o, l, c) {
  if (!o || o.length < 3) {
    const z = (a + 1e4) / 2e4, T = (i + 1e4) / 2e4;
    return {
      x: z * l,
      y: T * c
    };
  }
  const d = o[0], _ = o[1], m = o[2], h = (_.map.x - d.map.x) / (_.vacuum.x - d.vacuum.x || 1), p = (m.map.y - d.map.y) / (m.vacuum.y - d.vacuum.y || 1), v = d.map.x + (a - d.vacuum.x) * h, b = d.map.y + (i - d.vacuum.y) * p;
  return { x: v, y: b };
}
function dT(a, i, o, l) {
  if (a.x0 === void 0 || a.y0 === void 0 || a.x1 === void 0 || a.y1 === void 0)
    return te.warn("Room missing coordinates:", a), "";
  const c = $i(a.x0, a.y0, i, o, l), d = $i(a.x1, a.y0, i, o, l), _ = $i(a.x1, a.y1, i, o, l), m = $i(a.x0, a.y1, i, o, l);
  return `M ${c.x} ${c.y} L ${d.x} ${d.y} L ${_.x} ${_.y} L ${m.x} ${m.y} Z`;
}
function _T({ deviceName: a, onSettingsClick: i }) {
  const { t: o } = He(), l = ed(), c = Bt(), { rawState: d } = Aa(), _ = d.charAt(0).toUpperCase() + d.slice(1).replace(/_/g, " "), m = je(c.attributes.cleaned_area, 0), h = je(c.attributes.cleaning_time, 0), p = je(c.attributes.battery, 0), v = () => {
    const w = c.attributes.battery;
    return Tn(w) ? w >= 80 ? sw : w >= 60 ? lw : w >= 20 ? rw : ow : null;
  }, b = je(c.attributes.cleaning_progress, 0) || je(c.attributes.drying_progress, 0);
  return /* @__PURE__ */ g.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "header__top", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "header__title-wrapper", children: [
        /* @__PURE__ */ g.jsx("h2", { className: "header__title", children: a }),
        /* @__PURE__ */ g.jsx("p", { className: "header__status", children: _ })
      ] }),
      i && /* @__PURE__ */ g.jsx("button", { className: "header__settings-btn", onClick: i, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ g.jsx(M0, {}) })
    ] }),
    d !== "sleeping" && b > 0 && /* @__PURE__ */ g.jsx("div", { className: "header__progress", children: /* @__PURE__ */ g.jsx("div", { className: "header__progress-bar", children: /* @__PURE__ */ g.jsx("div", { className: "header__progress-fill", style: { width: `${b}%` } }) }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "header__stats", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ g.jsx("span", { className: "header__stat-icon", children: uw }),
        /* @__PURE__ */ g.jsxs("span", { className: "header__stat-value", children: [
          m,
          " ",
          l
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ g.jsx("span", { className: "header__stat-icon", children: cw }),
        /* @__PURE__ */ g.jsxs("span", { className: "header__stat-value--cleaning-time", children: [
          h,
          " ",
          o("units.minutes")
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ g.jsx("span", { className: "header__stat-icon", children: v() }),
        /* @__PURE__ */ g.jsxs("span", { className: "header__stat-value", children: [
          p,
          " ",
          o("units.percent")
        ] })
      ] })
    ] })
  ] });
}
function mT() {
  const { t: a } = He(), i = Bt(), o = Mt(), l = Ju(), [c, d] = R.useState(!1), _ = R.useRef(null), m = i.attributes, h = R.useMemo(() => m.maps ?? [], [m.maps]), p = m.selected_map_id ?? m.selected_map, v = l.entity?.split(".")[1] ?? "", b = kt("select", v, Fa.SELECTED_MAP.key), z = mh(o, v, "selected_map").unavailable, T = R.useMemo(() => h.find((L) => L.id === p), [h, p]), O = T?.custom_name || T?.name || a("map_selector.unknown"), q = R.useCallback(
    (L) => {
      o.callService("select", "select_option", {
        entity_id: b,
        option: L.name
      }), d(!1);
    },
    [o, b]
  );
  return R.useEffect(() => {
    function L(U) {
      const Z = U.composedPath();
      _.current && !Z.includes(_.current) && d(!1);
    }
    if (c)
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [c]), R.useEffect(() => {
    function L(U) {
      U.key === "Escape" && d(!1);
    }
    if (c)
      return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [c]), /* @__PURE__ */ g.jsxs("div", { className: "map-selector", ref: _, children: [
    /* @__PURE__ */ g.jsxs(
      "button",
      {
        className: `map-selector__button ${c ? "map-selector__button--open" : ""} ${z ? "map-selector__button--disabled" : ""}`,
        onClick: () => !z && d(!c),
        type: "button",
        disabled: z,
        "aria-expanded": c,
        "aria-haspopup": "listbox",
        children: [
          /* @__PURE__ */ g.jsx("span", { className: "map-selector__icon", children: /* @__PURE__ */ g.jsx(Lu, { size: 16 }) }),
          /* @__PURE__ */ g.jsx("span", { className: "map-selector__label", children: O }),
          /* @__PURE__ */ g.jsx(vg, { className: `map-selector__chevron ${c ? "map-selector__chevron--open" : ""}` })
        ]
      }
    ),
    c && /* @__PURE__ */ g.jsx("div", { className: "map-selector__dropdown", role: "listbox", children: h.map((L) => {
      const U = L.id === p, Z = L.custom_name || L.name;
      return /* @__PURE__ */ g.jsxs(
        "button",
        {
          className: `map-selector__option ${U ? "map-selector__option--selected" : ""}`,
          onClick: () => q(L),
          type: "button",
          role: "option",
          "aria-selected": U,
          children: [
            /* @__PURE__ */ g.jsx("span", { className: "map-selector__option-name", children: Z }),
            U && /* @__PURE__ */ g.jsx(hg, { className: "map-selector__option-check" })
          ]
        },
        L.id
      );
    }) })
  ] });
}
function fT({
  cleaningMode: a,
  cleanGeniusMode: i,
  cleangenius: o,
  onClick: l,
  onShortcutsClick: c,
  onRepeatClick: d,
  repeatCount: _ = 1
}) {
  const { t: m } = He(), { phase: h, isCustomizedCleaning: p } = Aa(), b = h === "cleaning" || h === "paused" || p, w = (U) => p ? jg : U === be.SWEEPING ? Mg : U === be.MOPPING ? Rg : U === be.SWEEPING_AND_MOPPING ? Gl : U === be.MOPPING_AFTER_SWEEPING ? qu : Gl, z = (U) => U === ba.VACUUM_AND_MOP ? m("cleaning_mode_button.vac_and_mop") : U === ba.MOP_AFTER_VACUUM ? m("cleaning_mode_button.mop_after_vac") : "", T = (U) => p ? m("customize.title") : U === be.MOPPING_AFTER_SWEEPING ? m("cleaning_mode_button.mop_after_vac") : U === be.SWEEPING_AND_MOPPING ? m("cleaning_mode_button.vac_and_mop") : U === be.SWEEPING ? m("cleaning_mode_button.vacuum") : U === be.MOPPING ? m("cleaning_mode_button.mop") : "", O = () => m(o === "Off" ? "cleaning_mode_button.prefix_custom" : "cleaning_mode_button.prefix_cleangenius"), q = (U) => {
    U.stopPropagation(), c?.();
  }, L = (U) => {
    U.stopPropagation(), d?.();
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-button-wrapper", children: [
    /* @__PURE__ */ g.jsxs("button", { onClick: l, className: "cleaning-mode-button", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-button__content", children: [
        /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-button__icon", children: w(a) }),
        /* @__PURE__ */ g.jsxs("span", { className: "cleaning-mode-button__text", children: [
          O(),
          o === "Off" ? T(a) : z(i)
        ] })
      ] }),
      /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-button__arrow", children: "›" })
    ] }),
    d && /* @__PURE__ */ g.jsxs(
      "button",
      {
        className: `cleaning-mode-button-wrapper__repeats ${b ? "cleaning-mode-button-wrapper__repeats--disabled" : ""}`,
        onClick: L,
        title: m("cleaning_mode_button.repeats_tooltip"),
        disabled: b,
        children: [
          "x",
          _
        ]
      }
    ),
    o === "Off" && c && /* @__PURE__ */ g.jsx(
      "button",
      {
        className: `cleaning-mode-button-wrapper__shortcuts ${b ? "cleaning-mode-button-wrapper__shortcuts--disabled" : ""}`,
        onClick: q,
        title: m("cleaning_mode_button.view_shortcuts"),
        disabled: b,
        children: gw
      }
    )
  ] });
}
var ni = function(a, i) {
  return Number(a.toFixed(i));
}, pT = function(a, i) {
  return i;
}, Re = function(a, i, o) {
  o && typeof o == "function" && o(a, i);
}, gT = function(a) {
  return -Math.cos(a * Math.PI) / 2 + 0.5;
}, hT = function(a) {
  return a;
}, vT = function(a) {
  return a * a;
}, yT = function(a) {
  return a * (2 - a);
}, bT = function(a) {
  return a < 0.5 ? 2 * a * a : -1 + (4 - 2 * a) * a;
}, wT = function(a) {
  return a * a * a;
}, ST = function(a) {
  return --a * a * a + 1;
}, ET = function(a) {
  return a < 0.5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
}, zT = function(a) {
  return a * a * a * a;
}, kT = function(a) {
  return 1 - --a * a * a * a;
}, TT = function(a) {
  return a < 0.5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a;
}, AT = function(a) {
  return a * a * a * a * a;
}, NT = function(a) {
  return 1 + --a * a * a * a * a;
}, CT = function(a) {
  return a < 0.5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a;
}, ph = {
  easeOut: gT,
  linear: hT,
  easeInQuad: vT,
  easeOutQuad: yT,
  easeInOutQuad: bT,
  easeInCubic: wT,
  easeOutCubic: ST,
  easeInOutCubic: ET,
  easeInQuart: zT,
  easeOutQuart: kT,
  easeInOutQuart: TT,
  easeInQuint: AT,
  easeOutQuint: NT,
  easeInOutQuint: CT
}, gh = function(a) {
  typeof a == "number" && cancelAnimationFrame(a);
}, ya = function(a) {
  a.mounted && (gh(a.animation), a.isAnimating = !1, a.animation = null, a.velocity = null);
};
function hh(a, i, o, l) {
  if (a.mounted) {
    var c = (/* @__PURE__ */ new Date()).getTime(), d = 1;
    ya(a), a.animation = function() {
      if (!a.mounted)
        return gh(a.animation);
      var _ = (/* @__PURE__ */ new Date()).getTime() - c, m = _ / o, h = ph[i], p = h(m);
      _ >= o ? (l(d), a.animation = null) : a.animation && (l(p), requestAnimationFrame(a.animation));
    }, requestAnimationFrame(a.animation);
  }
}
function xT(a) {
  var i = a.scale, o = a.positionX, l = a.positionY;
  return !(Number.isNaN(i) || Number.isNaN(o) || Number.isNaN(l));
}
function Rn(a, i, o, l) {
  var c = xT(i);
  if (!(!a.mounted || !c)) {
    var d = a.setState, _ = a.state, m = _.scale, h = _.positionX, p = _.positionY, v = i.scale - m, b = i.positionX - h, w = i.positionY - p;
    o === 0 ? d(i.scale, i.positionX, i.positionY) : hh(a, l, o, function(z) {
      z !== 1 ? a.isAnimating = !0 : a.isAnimating = !1;
      var T = m + v * z, O = h + b * z, q = p + w * z;
      d(T, O, q);
    });
  }
}
function OT(a, i, o) {
  var l = a.offsetWidth, c = a.offsetHeight, d = i.offsetWidth, _ = i.offsetHeight, m = d * o, h = _ * o, p = l - m, v = c - h;
  return {
    wrapperWidth: l,
    wrapperHeight: c,
    newContentWidth: m,
    newDiffWidth: p,
    newContentHeight: h,
    newDiffHeight: v
  };
}
var MT = function(a, i, o, l, c, d, _) {
  var m = a > i ? o * (_ ? 0.5 : 1) : 0, h = l > c ? d * (_ ? 0.5 : 1) : 0, p = a - i - m, v = m, b = l - c - h, w = h;
  return {
    minPositionX: p,
    maxPositionX: v,
    minPositionY: b,
    maxPositionY: w,
    scaleWidthFactor: m,
    scaleHeightFactor: h
  };
}, ad = function(a, i) {
  var o = a.wrapperComponent, l = a.contentComponent, c = a.setup, d = c.centerZoomedOut, _ = c.disablePadding;
  if (!o || !l)
    throw new Error("Components are not mounted");
  var m = OT(o, l, i), h = m.wrapperWidth, p = m.wrapperHeight, v = m.newContentWidth, b = m.newContentHeight, w = m.newDiffWidth, z = m.newDiffHeight, T = MT(h, v, w, p, b, z, !!d), O = h >= v && p >= b;
  _ && O && !d && (T.minPositionX = 0, T.maxPositionX = 0, T.minPositionY = 0, T.maxPositionY = 0);
  var q = a.setup, L = q.minPositionX, U = q.maxPositionX, Z = q.minPositionY, B = q.maxPositionY;
  return L != null && (T.minPositionX = h * (1 - i) + L * i), U != null && (T.maxPositionX = U * i), Z != null && (T.minPositionY = p * (1 - i) + Z * i), B != null && (T.maxPositionY = B * i), T;
}, tr = function(a, i, o, l) {
  return l ? a < i ? ni(i, 2) : a > o ? ni(o, 2) : ni(a, 2) : ni(a, 2);
}, eo = function(a, i) {
  var o = ad(a, i);
  return a.bounds = o, o;
};
function or(a, i, o, l, c, d, _) {
  var m = o.minPositionX, h = o.minPositionY, p = o.maxPositionX, v = o.maxPositionY, b = 0, w = 0;
  _ && (b = c, w = d);
  var z = tr(a, m - b, p + b, l), T = tr(i, h - w, v + w, l);
  return { x: z, y: T };
}
function $l(a, i, o, l, c, d) {
  var _ = a.state, m = _.scale, h = _.positionX, p = _.positionY, v = l - m;
  if (typeof i != "number" || typeof o != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: h, y: p };
  var b = h - i * v, w = p - o * v, z = or(b, w, c, d, 0, 0, null);
  return z;
}
var Xp = 1e-7;
function rr(a, i, o, l, c) {
  var d = c ? l : 0, _ = Math.max(i - d, Xp), m = o + d;
  return !Number.isNaN(o) && a >= m ? m : !Number.isNaN(i) && a <= _ ? _ : Math.max(a, Xp);
}
var Fp = function(a, i) {
  var o = a.setup.panning.excluded, l = a.isInitialized, c = a.wrapperComponent, d = i.target, _ = "shadowRoot" in d && "composedPath" in i, m = _ ? i.composedPath().some(function(v) {
    return v instanceof Element ? c?.contains(v) : !1;
  }) : c?.contains(d), h = l && d && m;
  if (!h)
    return !1;
  var p = lr(d, o);
  return !(p || d.getAttribute("draggable") === "true" || d.getAttribute("contenteditable") === "true" || d.isContentEditable);
}, Wp = function(a) {
  var i = a.isInitialized, o = a.isPanning, l = a.setup, c = l.panning.disabled, d = i && o && !c;
  return !!d;
}, RT = function(a, i) {
  var o = a.state, l = o.positionX, c = o.positionY;
  a.isPanning = !0;
  var d = i.clientX, _ = i.clientY;
  a.startCoords = { x: d - l, y: _ - c };
}, DT = function(a, i) {
  var o = i.touches, l = a.state, c = l.positionX, d = l.positionY;
  a.isPanning = !0;
  var _ = o.length === 1;
  if (_) {
    var m = o[0].clientX, h = o[0].clientY;
    a.startCoords = { x: m - c, y: h - d };
  }
};
function jT(a) {
  var i = a.state, o = i.positionX, l = i.positionY, c = i.scale, d = a.setup, _ = d.disabled, m = d.limitToBounds, h = d.centerZoomedOut, p = a.wrapperComponent;
  if (!(_ || !p || !a.bounds)) {
    var v = a.bounds, b = v.maxPositionX, w = v.minPositionX, z = v.maxPositionY, T = v.minPositionY, O = o > b || o < w, q = l > z || l < T, L = o > b ? p.offsetWidth : a.setup.minPositionX || 0, U = l > z ? p.offsetHeight : a.setup.minPositionY || 0, Z = $l(a, L, U, c, a.bounds, m || h), B = Z.x, H = Z.y;
    return {
      scale: c,
      positionX: O ? B : o,
      positionY: q ? H : l
    };
  }
}
function vh(a, i, o, l, c) {
  var d = a.setup.limitToBounds, _ = a.wrapperComponent, m = a.bounds, h = a.state, p = h.scale, v = h.positionX, b = h.positionY;
  if (!(_ === null || m === null || i === v && o === b)) {
    var w = or(i, o, m, d, l, c, _), z = w.x, T = w.y;
    a.setState(p, z, T);
  }
}
var LT = function(a, i, o) {
  var l = a.startCoords, c = a.state, d = a.setup.panning, _ = d.lockAxisX, m = d.lockAxisY, h = c.positionX, p = c.positionY;
  if (!l)
    return { x: h, y: p };
  var v = i - l.x, b = o - l.y, w = _ ? h : v, z = m ? p : b;
  return { x: w, y: z };
}, xn = function(a, i, o) {
  var l = a.setup, c = a.state, d = l.minScale, _ = l.disablePadding, m = l.centerZoomedOut, h = o ?? c.scale;
  return i > 0 && h >= d && !_ && !m ? i : 0;
}, An;
(function(a) {
  a.TRACK_PAD = "track_pad", a.MOUSE = "mouse", a.TOUCH = "touch";
})(An || (An = {}));
var UT = function(a) {
  var i = a.mounted, o = a.wrapperComponent, l = a.contentComponent, c = a.setup, d = c.disabled, _ = c.velocityAnimation, m = c.limitToBounds, h = a.state.scale, p = _.disabled;
  if (p || d || !i || !o || !l)
    return !1;
  if (!m)
    return !0;
  var v = o.offsetWidth < l.offsetWidth * h || o.offsetHeight < l.offsetHeight * h;
  return v;
}, qT = function(a) {
  var i = a.mounted, o = a.velocity, l = a.bounds, c = a.setup, d = c.disabled, _ = c.velocityAnimation, m = _.disabled, h = !m && !d && i;
  return !(!h || !o || !l);
};
function GT(a, i) {
  var o = a.setup.velocityAnimation, l = o.animationTime, c = o.maxAnimationTime, d = o.inertia;
  return Math.min(l * Math.max(1, Math.abs(i / d)), c);
}
function $p(a, i, o, l, c, d, _, m, h, p) {
  if (c) {
    if (i > _ && o > _) {
      var v = _ + (a - _) * p;
      return v > h ? h : v < _ ? _ : v;
    }
    if (i < d && o < d) {
      var v = d + (a - d) * p;
      return v < m ? m : v > d ? d : v;
    }
  }
  return l ? i : tr(a, d, _, c);
}
function HT(a) {
  var i = 1, o = a.offsetWidth / window.innerWidth;
  return Number.isNaN(o) ? i : Math.min(i, o);
}
var yu = function(a, i, o) {
  var l = 0, c = a * o;
  return Number.isNaN(c) ? l : a < 0 ? Math.max(c, -i) : Math.min(c, i);
};
function IT(a, i, o) {
  var l, c, d = UT(a);
  if (d) {
    var _ = a.lastMousePosition, m = a.velocityTime, h = a.setup, p = a.wrapperComponent, v = h.velocityAnimation, b = v.maxStrengthMouse, w = v.maxStrengthTouch, z = v.sensitivityTouch, T = v.sensitivityMouse, O = Date.now();
    if (_ && m && p) {
      var q = HT(p), L = (l = {}, l[An.TOUCH] = z, l[An.MOUSE] = T, l)[o], U = (c = {}, c[An.TOUCH] = w, c[An.MOUSE] = b, c)[o], Z = i.x - _.x, B = i.y - _.y, H = yu(Z / q, U, L), F = yu(B / q, U, L), Y = O - m, W = Z * Z + B * B, ae = yu(Math.sqrt(W) / Y, U, L);
      a.velocity = { velocityX: H, velocityY: F, total: ae };
    }
    a.lastMousePosition = i, a.velocityTime = O;
  }
}
function BT(a) {
  var i = a.velocity, o = a.bounds, l = a.setup, c = a.wrapperComponent, d = qT(a);
  if (!(!d || !i || !o || !c)) {
    var _ = i.velocityX, m = i.velocityY, h = i.total, p = o.maxPositionX, v = o.minPositionX, b = o.maxPositionY, w = o.minPositionY, z = l.limitToBounds, T = l.autoAlignment, O = l.zoomAnimation, q = l.panning, L = q.lockAxisY, U = q.lockAxisX, Z = O.animationType, B = T.sizeX, H = T.sizeY, F = T.velocityAlignmentTime, Y = F, W = GT(a, h), ae = Math.max(W, Y), ie = xn(a, B), ue = xn(a, H), se = ie * c.offsetWidth / 100, ze = ue * c.offsetHeight / 100, ke = p + se, ve = v - se, x = b + ze, X = w - ze, J = a.state, _e = (/* @__PURE__ */ new Date()).getTime();
    hh(a, Z, ae, function(ge) {
      var E = a.state, D = E.scale, K = E.positionX, $ = E.positionY, oe = (/* @__PURE__ */ new Date()).getTime() - _e, me = oe / Y, we = ph[T.animationType], Ke = 1 - we(Math.min(1, me)), Le = 1 - ge, wt = K + _ * Le, Rt = $ + m * Le, Na = $p(wt, J.positionX, K, U, z, v, p, ve, ke, Ke), Ca = $p(Rt, J.positionY, $, L, z, w, b, X, x, Ke);
      if (K !== wt || $ !== Rt) {
        a.setState(D, Na, Ca);
        var St = a.props.onPanning;
        St && St(xe(a), {});
      }
    });
  }
}
function Qp(a, i) {
  var o = a.state, l = o.scale, c = o.positionX, d = o.positionY;
  a.panStartPosition = { x: c, y: d }, ya(a), eo(a, l), window.TouchEvent !== void 0 && i instanceof TouchEvent ? DT(a, i) : RT(a, i);
}
function yh(a, i) {
  var o = a.state.scale, l = a.setup, c = l.minScale, d = l.autoAlignment, _ = d.disabled, m = d.sizeX, h = d.sizeY, p = d.animationTime, v = d.animationType, b = _ || o < c || !m && !h;
  if (!b) {
    var w = jT(a);
    w && Rn(a, w, p, v);
  }
}
function Jp(a, i, o, l) {
  var c = a.startCoords, d = a.setup, _ = d.autoAlignment, m = _.sizeX, h = _.sizeY;
  if (c) {
    var p = LT(a, i, o), v = p.x, b = p.y, w = xn(a, m), z = xn(a, h);
    IT(a, { x: v, y: b }, l), vh(a, v, b, w, z);
  }
}
function PT(a, i) {
  if (a.isPanning) {
    var o = a.velocity, l = a.wrapperComponent, c = a.contentComponent;
    a.isPanning = !1;
    var d = a.state, _ = d.positionX, m = d.positionY, h = d.scale, p = a.panStartPosition;
    if (a.panStartPosition = null, p) {
      var v = _ - p.x, b = m - p.y;
      if (v * v + b * b <= 25)
        return;
    }
    a.isAnimating = !1, a.animation = null;
    var w = l?.offsetWidth || 0, z = l?.offsetHeight || 0, T = (c?.offsetWidth || 0) * h, O = (c?.offsetHeight || 0) * h, q = !a.setup.limitToBounds || w < T || z < O, L = !i && o && o.total > 0.1 && q;
    L ? BT(a) : yh(a);
  }
}
function nd(a, i, o, l) {
  var c = a.setup, d = c.minScale, _ = c.maxScale, m = c.limitToBounds, h = rr(ni(i, 2), d, _, 0, !1), p = eo(a, h), v = $l(a, o, l, h, p, m), b = v.x, w = v.y;
  return { scale: h, positionX: b, positionY: w };
}
function id(a, i, o) {
  var l = a.state.scale, c = a.wrapperComponent, d = a.setup, _ = d.minScale, m = d.maxScale, h = d.limitToBounds, p = d.zoomAnimation, v = p.disabled, b = p.animationTime, w = p.animationType, z = l >= _ && l <= m, T = v || z;
  if ((l >= 1 || h) && yh(a), !(T || !c || !a.mounted)) {
    var O = i || c.offsetWidth / 2, q = o || c.offsetHeight / 2, L = l < _ ? _ : m, U = nd(a, L, O, q);
    U && Rn(a, U, b, w);
  }
}
var _a = function() {
  return _a = Object.assign || function(i) {
    for (var o, l = 1, c = arguments.length; l < c; l++) {
      o = arguments[l];
      for (var d in o) Object.prototype.hasOwnProperty.call(o, d) && (i[d] = o[d]);
    }
    return i;
  }, _a.apply(this, arguments);
};
function eg(a, i, o) {
  for (var l = 0, c = i.length, d; l < c; l++)
    (d || !(l in i)) && (d || (d = Array.prototype.slice.call(i, 0, l)), d[l] = i[l]);
  return a.concat(d || Array.prototype.slice.call(i));
}
var bu = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, ti = {
  disabled: !1,
  minPositionX: null,
  maxPositionX: null,
  minPositionY: null,
  maxPositionY: null,
  minScale: 1,
  maxScale: 8,
  limitToBounds: !0,
  centerZoomedOut: !1,
  centerOnInit: !1,
  disablePadding: !1,
  smooth: !0,
  detached: !1,
  wheel: {
    step: 0.015,
    disabled: !1,
    wheelDisabled: !1,
    touchPadDisabled: !1,
    activationKeys: [],
    excluded: []
  },
  trackPadPanning: {
    disabled: !0,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    activationKeys: [],
    excluded: []
  },
  panning: {
    disabled: !1,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    allowLeftClickPan: !0,
    allowMiddleClickPan: !0,
    allowRightClickPan: !0,
    activationKeys: [],
    excluded: []
  },
  pinch: {
    step: 5,
    disabled: !1,
    allowPanning: !0,
    excluded: []
  },
  doubleClick: {
    disabled: !1,
    step: 0.7,
    mode: "zoomIn",
    animationType: "easeOut",
    animationTime: 200,
    excluded: []
  },
  zoomAnimation: {
    disabled: !1,
    size: 0.4,
    animationTime: 200,
    animationType: "easeOut"
  },
  autoAlignment: {
    disabled: !1,
    sizeX: 100,
    sizeY: 100,
    animationTime: 200,
    velocityAlignmentTime: 400,
    animationType: "easeOut"
  },
  velocityAnimation: {
    disabled: !1,
    sensitivityMouse: 1,
    sensitivityTouch: 1.2,
    maxStrengthMouse: 20,
    maxStrengthTouch: 40,
    inertia: 1,
    animationTime: 300,
    maxAnimationTime: 800,
    animationType: "easeOut"
  }
}, Mu = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, bh = function(a) {
  var i, o, l, c, d, _, m, h, p, v = Math.max((i = a.minScale) !== null && i !== void 0 ? i : ti.minScale, 1e-7), b = (o = a.maxScale) !== null && o !== void 0 ? o : ti.maxScale, w = (l = a.initialScale) !== null && l !== void 0 ? l : bu.scale, z = Math.min(Math.max(w, v), b), T = tr((c = a.initialPositionX) !== null && c !== void 0 ? c : bu.positionX, (d = a.minPositionX) !== null && d !== void 0 ? d : -1 / 0, (_ = a.maxPositionX) !== null && _ !== void 0 ? _ : 1 / 0, a.minPositionX != null || a.maxPositionX != null), O = tr((m = a.initialPositionY) !== null && m !== void 0 ? m : bu.positionY, (h = a.minPositionY) !== null && h !== void 0 ? h : -1 / 0, (p = a.maxPositionY) !== null && p !== void 0 ? p : 1 / 0, a.minPositionY != null || a.maxPositionY != null);
  return {
    previousScale: z,
    scale: z,
    positionX: T,
    positionY: O
  };
}, tg = function(a) {
  var i = _a({}, ti);
  return Object.keys(a).forEach(function(o) {
    var l = o, c = typeof a[l] < "u", d = typeof ti[l] < "u";
    if (d && c) {
      var _ = Object.prototype.toString.call(ti[l]), m = _ === "[object Object]", h = _ === "[object Array]";
      m ? i[l] = _a(_a({}, ti[l]), a[l]) : h ? i[l] = eg(eg([], ti[l], !0), a[l]) : i[l] = a[l];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, wh = function(a, i, o) {
  var l = a.state.scale, c = a.wrapperComponent, d = a.setup, _ = d.maxScale, m = d.minScale, h = d.zoomAnimation, p = d.smooth, v = h.size;
  if (!c)
    throw new Error("Wrapper is not mounted");
  var b = p ? l * Math.exp(i * o) : l + i * o, w = rr(ni(b, 3), m, _, v, !1);
  return w;
};
function Sh(a, i, o, l, c) {
  var d, _, m = a.wrapperComponent, h = a.state, p = h.scale, v = h.positionX, b = h.positionY, w = a.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var z = w.disabled ? 0 : l, T = m.offsetWidth, O = m.offsetHeight, q = (T / 2 - v) / p, L = (O / 2 - b) / p, U = wh(a, i, o), Z = nd(a, U, q, L);
  if (!Z)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var B = a.props, H = B.onZoomStart, F = B.onZoom, Y = B.onZoomStop, W = new MouseEvent("mousemove", { bubbles: !0 }), ae = xe(a);
  Re(ae, W, H), Re(ae, W, F), Rn(a, Z, z, c);
  var ie = (_ = (d = m.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView) !== null && _ !== void 0 ? _ : typeof window < "u" ? window : null;
  ie && ie.setTimeout(function() {
    a.mounted && Re(xe(a), W, Y);
  }, z);
}
function Eh(a, i, o, l) {
  var c, d, _ = a.setup, m = a.wrapperComponent, h = a.contentComponent, p = _.limitToBounds, v = _.centerOnInit, b = bh(a.props), w = a.state, z = w.scale, T = w.positionX, O = w.positionY;
  if (m) {
    var q = b.positionX, L = b.positionY;
    if (v && h) {
      var U = od(b.scale, m, h);
      q = U.positionX, L = U.positionY;
    }
    var Z = ad(a, b.scale), B = or(q, L, Z, p, 0, 0, m), H = {
      scale: b.scale,
      positionX: B.x,
      positionY: B.y
    };
    if (!(z === b.scale && T === b.positionX && O === b.positionY)) {
      l?.();
      var F = a.props, Y = F.onZoomStart, W = F.onZoom, ae = F.onZoomStop, ie = new MouseEvent("mousemove", { bubbles: !0 }), ue = xe(a);
      Re(ue, ie, Y), Re(ue, ie, W), Rn(a, H, i, o);
      var se = (d = (c = m.ownerDocument) === null || c === void 0 ? void 0 : c.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
      se && se.setTimeout(function() {
        a.mounted && Re(xe(a), ie, ae);
      }, i);
    }
  }
}
function ZT(a, i, o, l) {
  var c = a.getBoundingClientRect(), d = i.getBoundingClientRect(), _ = o.getBoundingClientRect(), m = d.x * l.scale, h = d.y * l.scale;
  return {
    x: (c.x - _.x + m) / l.scale,
    y: (c.y - _.y + h) / l.scale
  };
}
function YT(a, i, o, l, c) {
  l === void 0 && (l = 0), c === void 0 && (c = 0);
  var d = a.wrapperComponent, _ = a.contentComponent, m = a.state, h = a.setup, p = h.limitToBounds, v = h.minScale, b = h.maxScale;
  if (!d || !_)
    return m;
  var w = d.getBoundingClientRect(), z = i.getBoundingClientRect(), T = ZT(i, d, _, m), O = T.x, q = T.y, L = z.width / m.scale, U = z.height / m.scale, Z = d.offsetWidth / L, B = d.offsetHeight / U, H = rr(o || Math.min(Z, B), v, b, 0, !1), F = (w.width - L * H) / 2, Y = (w.height - U * H) / 2, W = (w.left - O) * H + F + l, ae = (w.top - q) * H + Y + c, ie = ad(a, H), ue = or(W, ae, ie, p, 0, 0, d), se = ue.x, ze = ue.y;
  return { positionX: se, positionY: ze, scale: H };
}
var VT = function(a) {
  return function(i, o, l) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Sh(a, 1, i, o, l);
  };
}, KT = function(a) {
  return function(i, o, l) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Sh(a, -1, i, o, l);
  };
}, XT = function(a) {
  return function(i, o, l, c, d) {
    c === void 0 && (c = 300), d === void 0 && (d = "easeOut");
    var _ = a.state, m = _.positionX, h = _.positionY, p = _.scale, v = a.wrapperComponent, b = a.contentComponent, w = a.setup.disabled;
    if (!(w || !v || !b)) {
      var z = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(o) ? h : o,
        scale: Number.isNaN(l) ? p : l
      };
      Rn(a, z, c, d);
    }
  };
}, FT = function(a) {
  return function(i, o) {
    i === void 0 && (i = 200), o === void 0 && (o = "easeOut"), Eh(a, i, o);
  };
}, WT = function(a) {
  return function(i, o, l) {
    o === void 0 && (o = 200), l === void 0 && (l = "easeOut");
    var c = a.state, d = a.wrapperComponent, _ = a.contentComponent;
    if (d && _) {
      var m = od(i || c.scale, d, _);
      Rn(a, m, o, l);
    }
  };
}, $T = function(a) {
  return function(i, o, l, c, d, _) {
    l === void 0 && (l = 600), c === void 0 && (c = "easeOut"), d === void 0 && (d = 0), _ === void 0 && (_ = 0), ya(a);
    var m = a.wrapperComponent, h = typeof i == "string" ? document.getElementById(i) : i;
    if (m && h && m.contains(h)) {
      var p = YT(a, h, o, d, _);
      Rn(a, p, l, c);
    }
  };
}, Zl = function(a) {
  return {
    instance: a,
    state: a.state,
    zoomIn: VT(a),
    zoomOut: KT(a),
    setTransform: XT(a),
    resetTransform: FT(a),
    centerView: WT(a),
    zoomToElement: $T(a)
  };
}, zh = function(a) {
  return {
    instance: a,
    state: a.state
  };
}, xe = function(a) {
  var i = {};
  return Object.assign(i, zh(a)), Object.assign(i, Zl(a)), i;
}, wu = !1;
function Su() {
  try {
    var a = {
      get passive() {
        return wu = !0, !1;
      }
    };
    return a;
  } catch {
    return wu = !1, wu;
  }
}
var Ol = ".".concat(Mu.wrapperClass), lr = function(a, i) {
  return i.some(function(o) {
    return a.matches("".concat(Ol, " ").concat(o, ", ").concat(Ol, " .").concat(o, ", ").concat(Ol, " ").concat(o, " *, ").concat(Ol, " .").concat(o, " *"));
  });
}, ar = function(a) {
  a && clearTimeout(a);
}, QT = function(a) {
  return Number.parseFloat(a.toFixed(8));
}, kh = function(a, i, o) {
  var l = QT(o);
  return "translate(".concat(a, "px, ").concat(i, "px) scale(").concat(l, ")");
}, od = function(a, i, o) {
  var l = o.offsetWidth * a, c = o.offsetHeight * a, d = (i.offsetWidth - l) / 2, _ = (i.offsetHeight - c) / 2;
  return {
    scale: a,
    positionX: d,
    positionY: _
  };
};
function JT(a, i) {
  a != null && (typeof a == "function" ? a(i) : a.current = i);
}
function eA(a) {
  return function(i) {
    a.forEach(function(o) {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var Th = function(a, i) {
  var o = a.setup.wheel, l = o.disabled, c = o.wheelDisabled, d = o.touchPadDisabled, _ = o.excluded, m = a.isInitialized, h = a.isPanning, p = i.target, v = m && !h && !l && p;
  if (!v || c && !i.ctrlKey || d && i.ctrlKey)
    return !1;
  var b = lr(p, _);
  if (b)
    return !1;
  var w = a.isPressingKeys(a.setup.wheel.activationKeys);
  return !!w;
}, tA = function(a, i) {
  var o = a.setup, l = o.disabled, c = o.trackPadPanning, d = c.activationKeys, _ = c.excluded;
  if (!a.wrapperComponent || !a.contentComponent || l || c.disabled || i.ctrlKey)
    return !1;
  var m = Th(a, i);
  if (m)
    return !1;
  var h = i.target, p = lr(h, _);
  if (p)
    return !1;
  var v = a.isPressingKeys(d);
  return !!v;
}, aA = function(a) {
  return a ? a.deltaY < 0 ? 1 : -1 : 0;
};
function nA(a, i) {
  var o = aA(a), l = pT(i, o);
  return l;
}
function Ah(a, i, o) {
  var l = i.getBoundingClientRect(), c = 0, d = 0;
  if ("clientX" in a)
    c = (a.clientX - l.left) / o, d = (a.clientY - l.top) / o;
  else {
    var _ = a.touches[0];
    c = (_.clientX - l.left) / o, d = (_.clientY - l.top) / o;
  }
  return (Number.isNaN(c) || Number.isNaN(d)) && console.error("No mouse or touch offset found"), {
    x: c,
    y: d
  };
}
var iA = function(a, i, o, l, c) {
  var d = a.state.scale, _ = a.wrapperComponent, m = a.setup, h = m.maxScale, p = m.minScale, v = m.zoomAnimation, b = m.disablePadding, w = v.size, z = v.disabled;
  if (!_)
    throw new Error("Wrapper is not mounted");
  var T = d + i * o, O = l ? !1 : !z, q = rr(T, p, h, w, O && !b);
  return q;
}, Nh = function(a, i) {
  var o = a.previousWheelEvent, l = a.state.scale, c = a.setup, d = c.maxScale, _ = c.minScale;
  return o ? l < d || l > _ || Math.sign(o.deltaY) !== Math.sign(i.deltaY) || o.deltaY > 0 && o.deltaY < i.deltaY || o.deltaY < 0 && o.deltaY > i.deltaY || Math.sign(o.deltaY) !== Math.sign(i.deltaY) : !1;
}, oA = function(a, i) {
  var o = a.setup.pinch, l = o.disabled, c = o.excluded, d = a.isInitialized, _ = i.target, m = d && !l && _;
  if (!m)
    return !1;
  var h = lr(_, c);
  return !h;
}, rA = function(a) {
  var i = a.setup.pinch.disabled, o = a.isInitialized, l = a.pinchStartDistance, c = o && !i && l !== null;
  return !!c;
}, lA = function(a, i, o) {
  var l = o.getBoundingClientRect(), c = a.touches, d = c[0].clientX - l.left, _ = c[0].clientY - l.top, m = c[1].clientX - l.left, h = c[1].clientY - l.top;
  return {
    x: (d + m) / 2 / i,
    y: (_ + h) / 2 / i
  };
}, Ch = function(a) {
  return Math.sqrt(Math.pow(a.touches[0].pageX - a.touches[1].pageX, 2) + Math.pow(a.touches[0].pageY - a.touches[1].pageY, 2));
}, sA = 5, cA = function(a, i) {
  var o = a.pinchStartScale, l = a.pinchStartDistance, c = a.setup, d = c.maxScale, _ = c.minScale, m = c.zoomAnimation, h = c.disablePadding, p = c.pinch, v = m.size, b = m.disabled, w = p.step;
  if (!o || l === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return a.state.scale;
  var z = i / l, T = z * o, O = (T - o) * (w / sA), q = o + O, L = q === 1 / 0 ? 0 : ni(q, 10);
  return rr(L, _, d, v, !b && !h);
}, xh = 160, Oh = 100, uA = function(a, i) {
  var o = a.props, l = o.onWheelStart, c = o.onZoomStart;
  a.wheelStopEventTimer || (ya(a), Re(xe(a), i, l), Re(xe(a), i, c));
}, dA = function(a, i) {
  var o = a.props, l = o.onWheel, c = o.onZoom, d = a.contentComponent, _ = a.setup, m = a.state, h = m.scale, p = _.limitToBounds, v = _.centerZoomedOut, b = _.zoomAnimation, w = _.wheel, z = _.disablePadding, T = _.smooth, O = b.size, q = b.disabled, L = w.step;
  if (!d)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var U = nA(i, null), Z = T ? L * Math.abs(i.deltaY) : L, B = iA(a, U, Z, !i.ctrlKey);
  if (h !== B) {
    var H = eo(a, B), F = Ah(i, d, h), Y = q || O === 0 || v || z, W = p && Y, ae = $l(a, F.x, F.y, B, H, W), ie = ae.x, ue = ae.y;
    a.previousWheelEvent = i, a.setState(B, ie, ue), Re(xe(a), i, l), Re(xe(a), i, c);
  }
}, _A = function(a, i) {
  var o = a.props, l = o.onWheelStop, c = o.onZoomStop;
  ar(a.wheelAnimationTimer), a.wheelAnimationTimer = setTimeout(function() {
    a.mounted && (id(a, i.x, i.y), a.wheelAnimationTimer = null);
  }, Oh);
  var d = Nh(a, i);
  d && (ar(a.wheelStopEventTimer), a.wheelStopEventTimer = setTimeout(function() {
    a.mounted && (a.wheelStopEventTimer = null, Re(xe(a), i, l), Re(xe(a), i, c));
  }, xh));
}, mA = function(a, i) {
  var o = a.props, l = o.onWheelStart, c = o.onPanningStart;
  a.wheelStopEventTimer || (ya(a), Re(xe(a), i, l), Re(xe(a), i, c));
}, fA = function(a, i) {
  var o = a.props, l = o.onWheelStop, c = o.onPanningStop;
  ar(a.wheelAnimationTimer), a.wheelAnimationTimer = setTimeout(function() {
    a.mounted && (id(a, i.x, i.y), a.wheelAnimationTimer = null);
  }, Oh);
  var d = Nh(a, i);
  d && (ar(a.wheelStopEventTimer), a.wheelStopEventTimer = setTimeout(function() {
    a.mounted && (a.wheelStopEventTimer = null, Re(xe(a), i, l), Re(xe(a), i, c));
  }, xh));
}, Mh = function(a) {
  for (var i = 0, o = 0, l = 0; l < 2; l += 1)
    i += a.touches[l].clientX, o += a.touches[l].clientY;
  var c = i / 2, d = o / 2;
  return { x: c, y: d };
}, pA = function(a, i) {
  var o = Ch(i);
  a.pinchStartDistance = o, a.lastDistance = o, a.pinchStartScale = a.state.scale, a.isPanning = !1, a.isPinching = !0, a.pinchPreviousCenter = Mh(i), ya(a);
}, gA = function(a, i) {
  var o = a.contentComponent, l = a.pinchStartDistance, c = a.wrapperComponent, d = a.pinchPreviousCenter, _ = a.state.scale, m = a.setup, h = m.limitToBounds, p = m.centerZoomedOut, v = m.zoomAnimation, b = m.autoAlignment, w = m.pinch, z = m.panning, T = v.disabled, O = v.size, q = w.allowPanning;
  if (!(l === null || !o)) {
    var L = lA(i, _, o);
    if (!(!Number.isFinite(L.x) || !Number.isFinite(L.y))) {
      var U = Ch(i), Z = cA(a, U), B = Mh(i), H = _ / Z, F = (B.x - (d?.x || 0)) * H, Y = (B.y - (d?.y || 0)) * H;
      if (!(Z === _ && F === 0 && Y === 0)) {
        a.pinchPreviousCenter = B;
        var W = eo(a, Z), ae = T || O === 0 || p, ie = h && ae, ue = $l(a, L.x, L.y, Z, W, ie), se = ue.x, ze = ue.y;
        if (a.pinchMidpoint = L, a.lastDistance = U, z.disabled || !q)
          a.setState(Z, se, ze);
        else {
          var ke = b.sizeX, ve = b.sizeY, x = xn(a, ke, Z), X = xn(a, ve, Z), J = se + F, _e = ze + Y, ge = or(J, _e, W, h, x, X, c), E = ge.x, D = ge.y;
          a.setState(Z, E, D);
        }
      }
    }
  }
}, hA = function(a) {
  var i = a.pinchMidpoint;
  a.velocity = null, a.lastDistance = null, a.pinchMidpoint = null, a.pinchStartScale = null, a.pinchStartDistance = null, a.isPinching = !1, id(a, i?.x, i?.y);
}, Rh = function(a, i) {
  var o = a.props.onZoomStop, l = a.setup.doubleClick.animationTime;
  ar(a.doubleClickStopEventTimer), a.doubleClickStopEventTimer = setTimeout(function() {
    a.doubleClickStopEventTimer = null, Re(xe(a), i, o);
  }, l);
}, vA = function(a, i) {
  var o = a.props, l = o.onZoomStart, c = o.onZoom, d = a.setup.doubleClick, _ = d.animationTime, m = d.animationType;
  Re(xe(a), i, l), Eh(a, _, m, function() {
    return Re(xe(a), i, c);
  }), Rh(a, i);
};
function yA(a, i) {
  return a === "toggle" ? i === 1 ? 1 : -1 : a === "zoomOut" ? -1 : 1;
}
function bA(a, i) {
  var o = a.setup, l = a.doubleClickStopEventTimer, c = a.state, d = a.contentComponent, _ = c.scale, m = a.props, h = m.onZoomStart, p = m.onZoom, v = o.doubleClick, b = v.disabled, w = v.mode, z = v.step, T = v.animationTime, O = v.animationType;
  if (!b && !l) {
    if (w === "reset")
      return vA(a, i);
    if (!d)
      return console.error("No ContentComponent found");
    var q = yA(w, a.state.scale), L = wh(a, q, z);
    if (_ !== L) {
      Re(xe(a), i, h);
      var U = Ah(i, d, _), Z = nd(a, L, U.x, U.y);
      if (!Z)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Re(xe(a), i, p), Rn(a, Z, T, O), Rh(a, i);
    }
  }
}
var wA = function(a, i) {
  var o = a.isInitialized, l = a.setup, c = a.wrapperComponent, d = l.doubleClick, _ = d.disabled, m = d.excluded, h = i.target, p = c?.contains(h), v = o && h && p && !_;
  if (!v)
    return !1;
  var b = lr(h, m);
  return !b;
}, SA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(i) {
      var o = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        o.initializeWindowEvents();
      }, this.unmount = function() {
        o.cleanupWindowEvents();
      }, this.update = function(l) {
        o.props = l, o.wrapperComponent && o.contentComponent && eo(o, o.state.scale), o.setup = tg(l);
      }, this.initializeWindowEvents = function() {
        var l, c, d, _, m = Su(), h = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, p = h?.defaultView;
        (c = o.wrapperComponent) === null || c === void 0 || c.addEventListener("wheel", o.onWheelPanning, m), (d = o.wrapperComponent) === null || d === void 0 || d.addEventListener("keyup", o.setKeyUnPressed, m), (_ = o.wrapperComponent) === null || _ === void 0 || _.addEventListener("keydown", o.setKeyPressed, m), p?.addEventListener("mousedown", o.onPanningStart, m), p?.addEventListener("mousemove", o.onPanning, m), p?.addEventListener("mouseup", o.onPanningStop, m), h?.addEventListener("mouseleave", o.clearPanning, m), p?.addEventListener("keyup", o.setKeyUnPressed, m), p?.addEventListener("keydown", o.setKeyPressed, m), p?.addEventListener("blur", o.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var l, c, d, _, m, h = Su(), p = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, v = p?.defaultView;
        v?.removeEventListener("mousedown", o.onPanningStart, h), v?.removeEventListener("mousemove", o.onPanning, h), v?.removeEventListener("mouseup", o.onPanningStop, h), p?.removeEventListener("mouseleave", o.clearPanning, h), v?.removeEventListener("keyup", o.setKeyUnPressed, h), v?.removeEventListener("keydown", o.setKeyPressed, h), v?.removeEventListener("blur", o.handleWindowBlur), document.removeEventListener("mouseleave", o.clearPanning, h), (c = o.wrapperComponent) === null || c === void 0 || c.removeEventListener("wheel", o.onWheelPanning, h), (d = o.wrapperComponent) === null || d === void 0 || d.removeEventListener("keyup", o.setKeyUnPressed, h), (_ = o.wrapperComponent) === null || _ === void 0 || _.removeEventListener("keydown", o.setKeyPressed, h), ya(o), (m = o.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(l) {
        var c = Su();
        l.addEventListener("wheel", o.onWheelZoom, c), l.addEventListener("dblclick", o.onDoubleClick, c), l.addEventListener("touchstart", o.onTouchPanningStart, c), l.addEventListener("touchmove", o.onTouchPanning, c), l.addEventListener("touchend", o.onTouchPanningStop, c);
      }, this.handleInitialize = function(l) {
        var c = o.setup.centerOnInit;
        o.applyTransformation(), o.onInitCallbacks.forEach(function(d) {
          return d(xe(o));
        }), c && (o.setCenter(), o.observer = new ResizeObserver(function() {
          var d, _ = l.offsetWidth, m = l.offsetHeight;
          (_ > 0 || m > 0) && (o.onInitCallbacks.forEach(function(h) {
            return h(xe(o));
          }), o.setCenter(), (d = o.observer) === null || d === void 0 || d.disconnect());
        }), setTimeout(function() {
          var d;
          (d = o.observer) === null || d === void 0 || d.disconnect();
        }, 5e3), o.observer.observe(l));
      }, this.onWheelZoom = function(l) {
        var c = o.setup.disabled;
        if (!c) {
          o.syncModifierKeys(l);
          var d = Th(o, l);
          d && (uA(o, l), dA(o, l), _A(o, l));
        }
      }, this.onWheelPanning = function(l) {
        var c = o.props.onPanning, d = o.setup.trackPadPanning, _ = d.lockAxisX, m = d.lockAxisY;
        o.syncModifierKeys(l);
        var h = tA(o, l);
        if (h) {
          l.preventDefault(), l.stopPropagation();
          var p = o.state, v = p.positionX, b = p.positionY, w = v - l.deltaX, z = b - l.deltaY, T = _ ? v : w, O = m ? b : z, q = o.setup.autoAlignment, L = q.sizeX, U = q.sizeY, Z = xn(o, L), B = xn(o, U);
          T === v && O === b || (mA(o, l), vh(o, T, O, Z, B), Re(xe(o), l, c), fA(o, l));
        }
      }, this.onPanningStart = function(l) {
        var c = o.setup.disabled, d = o.props.onPanningStart;
        if (!c) {
          o.syncModifierKeys(l);
          var _ = Fp(o, l);
          if (_) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.button === 0 && !o.setup.panning.allowLeftClickPan || l.button === 1 && !o.setup.panning.allowMiddleClickPan || l.button === 2 && !o.setup.panning.allowRightClickPan || (l.preventDefault(), l.stopPropagation(), ya(o), Qp(o, l), Re(xe(o), l, d)));
          }
        }
      }, this.onPanning = function(l) {
        var c = o.setup.disabled, d = o.props.onPanning;
        if (!c) {
          if (o.syncModifierKeys(l), o.isPanning && l.buttons === 0) {
            o.clearPanning(l);
            return;
          }
          var _ = Wp(o);
          if (_) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.preventDefault(), l.stopPropagation(), Jp(o, l.clientX, l.clientY, An.MOUSE), Re(xe(o), l, d));
          }
        }
      }, this.onPanningStop = function(l) {
        var c = o.setup.panning.velocityDisabled, d = o.props.onPanningStop;
        o.isPanning && (PT(o, c), Re(xe(o), l, d));
      }, this.onPinchStart = function(l) {
        var c = o.setup.disabled, d = o.props.onPinchStart;
        if (!c) {
          var _ = oA(o, l);
          _ && (pA(o, l), ya(o), Re(xe(o), l, d));
        }
      }, this.onPinch = function(l) {
        var c = o.setup.disabled, d = o.props.onPinch;
        if (!c) {
          var _ = rA(o);
          _ && (l.preventDefault(), l.stopPropagation(), gA(o, l), Re(xe(o), l, d));
        }
      }, this.onPinchStop = function(l) {
        var c = o.props.onPinchStop;
        o.pinchStartScale && (hA(o), Re(xe(o), l, c));
      }, this.onTouchPanningStart = function(l) {
        var c = o.setup, d = c.disabled, _ = c.doubleClick, m = o.props.onPanningStart;
        if (!d) {
          var h = !_?.disabled, p = o.lastTouch && +/* @__PURE__ */ new Date() - o.lastTouch < 200;
          if (h && p && l.touches.length === 1)
            o.onDoubleClick(l);
          else {
            o.lastTouch = +/* @__PURE__ */ new Date(), ya(o);
            var v = l.touches, b = v.length === 1, w = v.length === 2, z = Fp(o, l);
            if (b) {
              if (!z)
                return;
              ya(o), Qp(o, l), Re(xe(o), l, m);
            }
            w && o.onPinchStart(l);
          }
        }
      }, this.onTouchPanning = function(l) {
        var c = o.setup.disabled, d = o.props.onPanning;
        if (o.isPanning && l.touches.length === 1) {
          if (c)
            return;
          var _ = Wp(o);
          if (!_)
            return;
          l.cancelable && l.preventDefault(), l.stopPropagation();
          var m = l.touches[0];
          Jp(o, m.clientX, m.clientY, An.TOUCH), Re(xe(o), l, d);
        } else l.touches.length > 1 && o.onPinch(l);
      }, this.onTouchPanningStop = function(l) {
        o.onPanningStop(l), o.onPinchStop(l);
      }, this.onDoubleClick = function(l) {
        var c = o.setup.disabled;
        if (!c) {
          var d = wA(o, l);
          d && bA(o, l);
        }
      }, this.clearPanning = function(l) {
        o.isPanning && o.onPanningStop(l);
      }, this.handleWindowBlur = function() {
        o.pressedKeys = {}, o.isPanning && (o.isPanning = !1, o.startCoords = null);
      }, this.syncModifierKeys = function(l) {
        var c = l.ctrlKey, d = l.metaKey, _ = l.shiftKey, m = l.altKey;
        typeof c == "boolean" && (o.pressedKeys.Control = c), typeof d == "boolean" && (o.pressedKeys.Meta = d), typeof _ == "boolean" && (o.pressedKeys.Shift = _), typeof m == "boolean" && (o.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(l) {
        o.pressedKeys[l.key] = !0;
      }, this.setKeyUnPressed = function(l) {
        o.pressedKeys[l.key] = !1;
      }, this.isPressingKeys = function(l) {
        return typeof l == "function" ? l(Object.entries(o.pressedKeys).filter(function(c) {
          var d = c[1];
          return d;
        }).map(function(c) {
          var d = c[0];
          return d;
        })) : l.length ? !!l.every(function(c) {
          return o.pressedKeys[c];
        }) : !0;
      }, this.setCenter = function() {
        if (o.wrapperComponent && o.contentComponent) {
          var l = od(o.state.scale, o.wrapperComponent, o.contentComponent);
          o.setState(l.scale, l.positionX, l.positionY);
        }
      }, this.handleTransformStyles = function(l, c, d) {
        return o.props.customTransform ? o.props.customTransform(l, c, d) : kh(l, c, d);
      }, this.getContext = function() {
        return xe(o);
      }, this.applyTransformation = function() {
        if (!(!o.mounted || !o.contentComponent)) {
          var l = o.state, c = l.scale, d = l.positionX, _ = l.positionY, m = o.handleTransformStyles(d, _, c);
          o.props.detached || (o.contentComponent.style.transform = m), o.onTransformCallbacks.forEach(function(h) {
            return h({
              scale: c,
              positionX: d,
              positionY: _,
              previousScale: o.state.previousScale,
              ref: xe(o)
            });
          });
        }
      }, this.setState = function(l, c, d) {
        var _ = o.props.onTransform;
        if (!Number.isNaN(l) && !Number.isNaN(c) && !Number.isNaN(d)) {
          var m = Math.max(l, 1e-7);
          m !== o.state.scale && (o.state.previousScale = o.state.scale, o.state.scale = m), o.state.positionX = c, o.state.positionY = d, o.applyTransformation();
          var h = xe(o);
          o.onChangeCallbacks.forEach(function(p) {
            return p(h);
          }), Re(h, { scale: o.state.scale, positionX: c, positionY: d }, _);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(l) {
        return o.onTransformCallbacks.has(l) || o.onTransformCallbacks.add(l), function() {
          o.onTransformCallbacks.delete(l);
        };
      }, this.onChange = function(l) {
        return o.onChangeCallbacks.has(l) || o.onChangeCallbacks.add(l), function() {
          o.onChangeCallbacks.delete(l);
        };
      }, this.onInit = function(l) {
        return o.onInitCallbacks.has(l) || o.onInitCallbacks.add(l), function() {
          o.onInitCallbacks.delete(l);
        };
      }, this.init = function(l, c) {
        o.cleanupWindowEvents(), o.wrapperComponent = l, o.contentComponent = c, eo(o, o.state.scale), o.handleInitializeWrapperEvents(l), o.handleInitialize(c), o.initializeWindowEvents(), o.isInitialized = !0;
        var d = xe(o);
        Re(d, void 0, o.props.onInit), JT(o.props.ref, d);
      }, this.props = i, this.setup = tg(this.props), this.state = bh(this.props);
    }
    return a;
  })()
), sr = Nn.createContext(null), EA = function(a, i) {
  return typeof a == "function" ? a(i) : a;
}, zA = Nn.forwardRef(function(a, i) {
  var o = R.useRef(new SA(a)).current, l = EA(a.children, Zl(o));
  return R.useImperativeHandle(i, function() {
    return Zl(o);
  }, [o]), R.useEffect(function() {
    o.update(a);
  }, [o, a]), g.jsx(sr.Provider, _a({ value: o }, { children: l }));
});
Nn.forwardRef(function(a, i) {
  var o = R.useRef(null), l = R.useContext(sr);
  return R.useEffect(function() {
    return l.onChange(function(c) {
      if (o.current) {
        var d = 0, _ = 0;
        o.current.style.transform = l.handleTransformStyles(d, _, 1 / c.instance.state.scale);
      }
    });
  }, [l]), g.jsx("div", _a({}, a, { ref: eA([o, i]) }));
});
function kA(a, i) {
  i === void 0 && (i = {});
  var o = i.insertAt;
  if (!(typeof document > "u")) {
    var l = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", o === "top" && l.firstChild ? l.insertBefore(c, l.firstChild) : l.appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
  }
}
var TA = `.transform-component-module_wrapper__SPB86 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.transform-component-module_content__FBWxo {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__FBWxo img {
  pointer-events: none;
}
.transform-component-module_infiniteGrid__Z-aP3 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.12) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  background-position: 0 0;
}
`, Eu = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
kA(TA);
var AA = function(a) {
  var i = a.children, o = a.wrapperClass, l = o === void 0 ? "" : o, c = a.contentClass, d = c === void 0 ? "" : c, _ = a.wrapperStyle, m = a.contentStyle, h = a.wrapperProps, p = h === void 0 ? {} : h, v = a.contentProps, b = v === void 0 ? {} : v, w = a.infinite, z = w === void 0 ? !1 : w, T = R.useContext(sr), O = T.init, q = T.cleanupWindowEvents, L = R.useRef(null), U = R.useRef(null), Z = R.useRef(null);
  return R.useEffect(function() {
    var B = L.current, H = U.current;
    return B !== null && H !== null && O && O?.(B, H), function() {
      q?.();
    };
  }, []), R.useEffect(function() {
    if (z) {
      var B = Z.current;
      if (B) {
        var H = function() {
          var F = T.state, Y = F.positionX, W = F.positionY;
          B.style.backgroundPosition = "".concat(Y, "px ").concat(W, "px");
        };
        return H(), T.onChange(H);
      }
    }
  }, [z, T]), g.jsxs("div", _a({}, p, { ref: L, className: "".concat(Mu.wrapperClass, " ").concat(Eu.wrapper, " ").concat(l), style: _ }, { children: [z && g.jsx("div", { ref: Z, className: Eu.infiniteGrid, "aria-hidden": !0 }), g.jsx("div", _a({}, b, { ref: U, className: "".concat(Mu.contentClass, " ").concat(Eu.content, " ").concat(d), style: _a(_a({}, m), { transform: kh(T.state.positionX, T.state.positionY, T.state.scale) }) }, { children: i }))] }));
};
function NA(a, i) {
  var o = Math.max(0, Math.min(a.x + a.width, i.x + i.width) - Math.max(a.x, i.x)), l = Math.max(0, Math.min(a.y + a.height, i.y + i.height) - Math.max(a.y, i.y));
  return o * l;
}
function CA(a) {
  var i = a.elementX, o = a.elementY, l = a.elementWidth, c = a.elementHeight, d = a.scale, _ = a.positionX, m = a.positionY, h = a.viewportWidth, p = a.viewportHeight, v = a.margin, b = v === void 0 ? 0 : v, w = a.threshold, z = w === void 0 ? 0 : w, T = {
    x: -b,
    y: -b,
    width: h + 2 * b,
    height: p + 2 * b
  }, O = {
    x: i * d + _,
    y: o * d + m,
    width: l * d,
    height: c * d
  };
  if (z <= 0) {
    var q = O.x < T.x + T.width && O.x + O.width > T.x, L = O.y < T.y + T.height && O.y + O.height > T.y;
    return q && L;
  }
  var U = O.width * O.height;
  if (U <= 0)
    return !1;
  var Z = NA(T, O);
  return Z / U >= z;
}
Nn.forwardRef(function(a, i) {
  var o = a.x, l = a.y, c = a.width, d = a.height, _ = a.margin, m = _ === void 0 ? 0 : _, h = a.threshold, p = h === void 0 ? 0 : h, v = a.placeholder, b = v === void 0 ? null : v, w = a.onShow, z = a.onHide, T = a.children, O = a.className, q = a.style, L = R.useContext(sr), U = R.useState(!1), Z = U[0], B = U[1], H = R.useRef(!1), F = R.useRef(w), Y = R.useRef(z);
  return F.current = w, Y.current = z, R.useEffect(function() {
    var W = function() {
      var ue, se, ze = L.wrapperComponent;
      if (ze) {
        var ke = CA({
          elementX: o,
          elementY: l,
          elementWidth: c,
          elementHeight: d,
          scale: L.state.scale,
          positionX: L.state.positionX,
          positionY: L.state.positionY,
          viewportWidth: ze.offsetWidth,
          viewportHeight: ze.offsetHeight,
          margin: m,
          threshold: p
        });
        ke !== H.current && (H.current = ke, B(ke), ke ? (ue = F.current) === null || ue === void 0 || ue.call(F) : (se = Y.current) === null || se === void 0 || se.call(Y));
      }
    };
    W();
    var ae = L.onChange(W), ie;
    return L.wrapperComponent || (ie = L.onInit(function() {
      return W();
    })), function() {
      ae(), ie?.();
    };
  }, [L, o, l, c, d, m, p]), Z ? g.jsx("div", _a({ ref: i, className: O, style: q }, { children: T })) : b ? g.jsx(g.Fragment, { children: b }) : null;
});
var rd = function() {
  var a = R.useContext(sr);
  if (!a)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return a;
}, xA = function() {
  var a = rd();
  return Zl(a);
}, OA = function(a) {
  var i = rd();
  R.useEffect(function() {
    var o, l = i.onChange(function(c) {
      o = a(zh(c.instance));
    });
    return function() {
      l(), o?.();
    };
  }, [a, i]);
};
function MA(a, i, o) {
  return Math.max(i, Math.min(a, o));
}
const Tt = {
  toVector(a, i) {
    return a === void 0 && (a = i), Array.isArray(a) ? a : [a, a];
  },
  add(a, i) {
    return [a[0] + i[0], a[1] + i[1]];
  },
  sub(a, i) {
    return [a[0] - i[0], a[1] - i[1]];
  },
  addTo(a, i) {
    a[0] += i[0], a[1] += i[1];
  },
  subTo(a, i) {
    a[0] -= i[0], a[1] -= i[1];
  }
};
function ag(a, i, o) {
  return i === 0 || Math.abs(i) === 1 / 0 ? Math.pow(a, o * 5) : a * i * o / (i + o * a);
}
function ng(a, i, o, l = 0.15) {
  return l === 0 ? MA(a, i, o) : a < i ? -ag(i - a, o - i, l) + i : a > o ? +ag(a - o, o - i, l) + o : a;
}
function RA(a, [i, o], [l, c]) {
  const [[d, _], [m, h]] = a;
  return [ng(i, d, _, l), ng(o, m, h, c)];
}
function DA(a, i) {
  if (typeof a != "object" || a === null) return a;
  var o = a[Symbol.toPrimitive];
  if (o !== void 0) {
    var l = o.call(a, i);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(a);
}
function jA(a) {
  var i = DA(a, "string");
  return typeof i == "symbol" ? i : String(i);
}
function It(a, i, o) {
  return i = jA(i), i in a ? Object.defineProperty(a, i, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[i] = o, a;
}
function ig(a, i) {
  var o = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(a);
    i && (l = l.filter(function(c) {
      return Object.getOwnPropertyDescriptor(a, c).enumerable;
    })), o.push.apply(o, l);
  }
  return o;
}
function $e(a) {
  for (var i = 1; i < arguments.length; i++) {
    var o = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ig(Object(o), !0).forEach(function(l) {
      It(a, l, o[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : ig(Object(o)).forEach(function(l) {
      Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(o, l));
    });
  }
  return a;
}
const Dh = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function og(a) {
  return a ? a[0].toUpperCase() + a.slice(1) : "";
}
const LA = ["enter", "leave"];
function UA(a = !1, i) {
  return a && !LA.includes(i);
}
function qA(a, i = "", o = !1) {
  const l = Dh[a], c = l && l[i] || i;
  return "on" + og(a) + og(c) + (UA(o, c) ? "Capture" : "");
}
const GA = ["gotpointercapture", "lostpointercapture"];
function HA(a) {
  let i = a.substring(2).toLowerCase();
  const o = !!~i.indexOf("passive");
  o && (i = i.replace("passive", ""));
  const l = GA.includes(i) ? "capturecapture" : "capture", c = !!~i.indexOf(l);
  return c && (i = i.replace("capture", "")), {
    device: i,
    capture: c,
    passive: o
  };
}
function IA(a, i = "") {
  const o = Dh[a], l = o && o[i] || i;
  return a + l;
}
function Ql(a) {
  return "touches" in a;
}
function jh(a) {
  return Ql(a) ? "touch" : "pointerType" in a ? a.pointerType : "mouse";
}
function BA(a) {
  return Array.from(a.touches).filter((i) => {
    var o, l;
    return i.target === a.currentTarget || ((o = a.currentTarget) === null || o === void 0 || (l = o.contains) === null || l === void 0 ? void 0 : l.call(o, i.target));
  });
}
function PA(a) {
  return a.type === "touchend" || a.type === "touchcancel" ? a.changedTouches : a.targetTouches;
}
function Lh(a) {
  return Ql(a) ? PA(a)[0] : a;
}
function ZA(a) {
  return BA(a).map((i) => i.identifier);
}
function zu(a) {
  const i = Lh(a);
  return Ql(a) ? i.identifier : i.pointerId;
}
function rg(a) {
  const i = Lh(a);
  return [i.clientX, i.clientY];
}
function YA(a) {
  const i = {};
  if ("buttons" in a && (i.buttons = a.buttons), "shiftKey" in a) {
    const {
      shiftKey: o,
      altKey: l,
      metaKey: c,
      ctrlKey: d
    } = a;
    Object.assign(i, {
      shiftKey: o,
      altKey: l,
      metaKey: c,
      ctrlKey: d
    });
  }
  return i;
}
function Yl(a, ...i) {
  return typeof a == "function" ? a(...i) : a;
}
function VA() {
}
function KA(...a) {
  return a.length === 0 ? VA : a.length === 1 ? a[0] : function() {
    let i;
    for (const o of a)
      i = o.apply(this, arguments) || i;
    return i;
  };
}
function lg(a, i) {
  return Object.assign({}, i, a || {});
}
const XA = 32;
class FA {
  constructor(i, o, l) {
    this.ctrl = i, this.args = o, this.key = l, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(i) {
    this.ctrl.state[this.key] = i;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: i,
      shared: o,
      ingKey: l,
      args: c
    } = this;
    o[l] = i._active = i.active = i._blocked = i._force = !1, i._step = [!1, !1], i.intentional = !1, i._movement = [0, 0], i._distance = [0, 0], i._direction = [0, 0], i._delta = [0, 0], i._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], i.args = c, i.axis = void 0, i.memo = void 0, i.elapsedTime = i.timeDelta = 0, i.direction = [0, 0], i.distance = [0, 0], i.overflow = [0, 0], i._movementBound = [!1, !1], i.velocity = [0, 0], i.movement = [0, 0], i.delta = [0, 0], i.timeStamp = 0;
  }
  start(i) {
    const o = this.state, l = this.config;
    o._active || (this.reset(), this.computeInitial(), o._active = !0, o.target = i.target, o.currentTarget = i.currentTarget, o.lastOffset = l.from ? Yl(l.from, o) : o.offset, o.offset = o.lastOffset, o.startTime = o.timeStamp = i.timeStamp);
  }
  computeValues(i) {
    const o = this.state;
    o._values = i, o.values = this.config.transform(i);
  }
  computeInitial() {
    const i = this.state;
    i._initial = i._values, i.initial = i.values;
  }
  compute(i) {
    const {
      state: o,
      config: l,
      shared: c
    } = this;
    o.args = this.args;
    let d = 0;
    if (i && (o.event = i, l.preventDefault && i.cancelable && o.event.preventDefault(), o.type = i.type, c.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, c.locked = !!document.pointerLockElement, Object.assign(c, YA(i)), c.down = c.pressed = c.buttons % 2 === 1 || c.touches > 0, d = i.timeStamp - o.timeStamp, o.timeStamp = i.timeStamp, o.elapsedTime = o.timeStamp - o.startTime), o._active) {
      const F = o._delta.map(Math.abs);
      Tt.addTo(o._distance, F);
    }
    this.axisIntent && this.axisIntent(i);
    const [_, m] = o._movement, [h, p] = l.threshold, {
      _step: v,
      values: b
    } = o;
    if (l.hasCustomTransform ? (v[0] === !1 && (v[0] = Math.abs(_) >= h && b[0]), v[1] === !1 && (v[1] = Math.abs(m) >= p && b[1])) : (v[0] === !1 && (v[0] = Math.abs(_) >= h && Math.sign(_) * h), v[1] === !1 && (v[1] = Math.abs(m) >= p && Math.sign(m) * p)), o.intentional = v[0] !== !1 || v[1] !== !1, !o.intentional) return;
    const w = [0, 0];
    if (l.hasCustomTransform) {
      const [F, Y] = b;
      w[0] = v[0] !== !1 ? F - v[0] : 0, w[1] = v[1] !== !1 ? Y - v[1] : 0;
    } else
      w[0] = v[0] !== !1 ? _ - v[0] : 0, w[1] = v[1] !== !1 ? m - v[1] : 0;
    this.restrictToAxis && !o._blocked && this.restrictToAxis(w);
    const z = o.offset, T = o._active && !o._blocked || o.active;
    T && (o.first = o._active && !o.active, o.last = !o._active && o.active, o.active = c[this.ingKey] = o._active, i && (o.first && ("bounds" in l && (o._bounds = Yl(l.bounds, o)), this.setup && this.setup()), o.movement = w, this.computeOffset()));
    const [O, q] = o.offset, [[L, U], [Z, B]] = o._bounds;
    o.overflow = [O < L ? -1 : O > U ? 1 : 0, q < Z ? -1 : q > B ? 1 : 0], o._movementBound[0] = o.overflow[0] ? o._movementBound[0] === !1 ? o._movement[0] : o._movementBound[0] : !1, o._movementBound[1] = o.overflow[1] ? o._movementBound[1] === !1 ? o._movement[1] : o._movementBound[1] : !1;
    const H = o._active ? l.rubberband || [0, 0] : [0, 0];
    if (o.offset = RA(o._bounds, o.offset, H), o.delta = Tt.sub(o.offset, z), this.computeMovement(), T && (!o.last || d > XA)) {
      o.delta = Tt.sub(o.offset, z);
      const F = o.delta.map(Math.abs);
      Tt.addTo(o.distance, F), o.direction = o.delta.map(Math.sign), o._direction = o._delta.map(Math.sign), !o.first && d > 0 && (o.velocity = [F[0] / d, F[1] / d], o.timeDelta = d);
    }
  }
  emit() {
    const i = this.state, o = this.shared, l = this.config;
    if (i._active || this.clean(), (i._blocked || !i.intentional) && !i._force && !l.triggerAllEvents) return;
    const c = this.handler($e($e($e({}, o), i), {}, {
      [this.aliasKey]: i.values
    }));
    c !== void 0 && (i.memo = c);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function WA([a, i], o) {
  const l = Math.abs(a), c = Math.abs(i);
  if (l > c && l > o)
    return "x";
  if (c > l && c > o)
    return "y";
}
class $A extends FA {
  constructor(...i) {
    super(...i), It(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = Tt.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = Tt.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(i) {
    const o = this.state, l = this.config;
    if (!o.axis && i) {
      const c = typeof l.axisThreshold == "object" ? l.axisThreshold[jh(i)] : l.axisThreshold;
      o.axis = WA(o._movement, c);
    }
    o._blocked = (l.lockDirection || !!l.axis) && !o.axis || !!l.axis && l.axis !== o.axis;
  }
  restrictToAxis(i) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          i[1] = 0;
          break;
        case "y":
          i[0] = 0;
          break;
      }
  }
}
const QA = (a) => a, sg = 0.15, Uh = {
  enabled(a = !0) {
    return a;
  },
  eventOptions(a, i, o) {
    return $e($e({}, o.shared.eventOptions), a);
  },
  preventDefault(a = !1) {
    return a;
  },
  triggerAllEvents(a = !1) {
    return a;
  },
  rubberband(a = 0) {
    switch (a) {
      case !0:
        return [sg, sg];
      case !1:
        return [0, 0];
      default:
        return Tt.toVector(a);
    }
  },
  from(a) {
    if (typeof a == "function") return a;
    if (a != null) return Tt.toVector(a);
  },
  transform(a, i, o) {
    const l = a || o.shared.transform;
    return this.hasCustomTransform = !!l, l || QA;
  },
  threshold(a) {
    return Tt.toVector(a, 0);
  }
}, JA = 0, cr = $e($e({}, Uh), {}, {
  axis(a, i, {
    axis: o
  }) {
    if (this.lockDirection = o === "lock", !this.lockDirection) return o;
  },
  axisThreshold(a = JA) {
    return a;
  },
  bounds(a = {}) {
    if (typeof a == "function")
      return (d) => cr.bounds(a(d));
    if ("current" in a)
      return () => a.current;
    if (typeof HTMLElement == "function" && a instanceof HTMLElement)
      return a;
    const {
      left: i = -1 / 0,
      right: o = 1 / 0,
      top: l = -1 / 0,
      bottom: c = 1 / 0
    } = a;
    return [[i, o], [l, c]];
  }
}), cg = {
  ArrowRight: (a, i = 1) => [a * i, 0],
  ArrowLeft: (a, i = 1) => [-1 * a * i, 0],
  ArrowUp: (a, i = 1) => [0, -1 * a * i],
  ArrowDown: (a, i = 1) => [0, a * i]
};
class e2 extends $A {
  constructor(...i) {
    super(...i), It(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const i = this.state;
    i._pointerId = void 0, i._pointerActive = !1, i._keyboardActive = !1, i._preventScroll = !1, i._delayed = !1, i.swipe = [0, 0], i.tap = !1, i.canceled = !1, i.cancel = this.cancel.bind(this);
  }
  setup() {
    const i = this.state;
    if (i._bounds instanceof HTMLElement) {
      const o = i._bounds.getBoundingClientRect(), l = i.currentTarget.getBoundingClientRect(), c = {
        left: o.left - l.left + i.offset[0],
        right: o.right - l.right + i.offset[0],
        top: o.top - l.top + i.offset[1],
        bottom: o.bottom - l.bottom + i.offset[1]
      };
      i._bounds = cr.bounds(c);
    }
  }
  cancel() {
    const i = this.state;
    i.canceled || (i.canceled = !0, i._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(i) {
    const o = this.config, l = this.state;
    if (i.buttons != null && (Array.isArray(o.pointerButtons) ? !o.pointerButtons.includes(i.buttons) : o.pointerButtons !== -1 && o.pointerButtons !== i.buttons)) return;
    const c = this.ctrl.setEventIds(i);
    o.pointerCapture && i.target.setPointerCapture(i.pointerId), !(c && c.size > 1 && l._pointerActive) && (this.start(i), this.setupPointer(i), l._pointerId = zu(i), l._pointerActive = !0, this.computeValues(rg(i)), this.computeInitial(), o.preventScrollAxis && jh(i) !== "mouse" ? (l._active = !1, this.setupScrollPrevention(i)) : o.delay > 0 ? (this.setupDelayTrigger(i), o.triggerAllEvents && (this.compute(i), this.emit())) : this.startPointerDrag(i));
  }
  startPointerDrag(i) {
    const o = this.state;
    o._active = !0, o._preventScroll = !0, o._delayed = !1, this.compute(i), this.emit();
  }
  pointerMove(i) {
    const o = this.state, l = this.config;
    if (!o._pointerActive) return;
    const c = zu(i);
    if (o._pointerId !== void 0 && c !== o._pointerId) return;
    const d = rg(i);
    if (document.pointerLockElement === i.target ? o._delta = [i.movementX, i.movementY] : (o._delta = Tt.sub(d, o._values), this.computeValues(d)), Tt.addTo(o._movement, o._delta), this.compute(i), o._delayed && o.intentional) {
      this.timeoutStore.remove("dragDelay"), o.active = !1, this.startPointerDrag(i);
      return;
    }
    if (l.preventScrollAxis && !o._preventScroll)
      if (o.axis)
        if (o.axis === l.preventScrollAxis || l.preventScrollAxis === "xy") {
          o._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(i);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(i) {
    this.ctrl.setEventIds(i);
    try {
      this.config.pointerCapture && i.target.hasPointerCapture(i.pointerId) && i.target.releasePointerCapture(i.pointerId);
    } catch {
    }
    const o = this.state, l = this.config;
    if (!o._active || !o._pointerActive) return;
    const c = zu(i);
    if (o._pointerId !== void 0 && c !== o._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(i);
    const [d, _] = o._distance;
    if (o.tap = d <= l.tapsThreshold && _ <= l.tapsThreshold, o.tap && l.filterTaps)
      o._force = !0;
    else {
      const [m, h] = o._delta, [p, v] = o._movement, [b, w] = l.swipe.velocity, [z, T] = l.swipe.distance, O = l.swipe.duration;
      if (o.elapsedTime < O) {
        const q = Math.abs(m / o.timeDelta), L = Math.abs(h / o.timeDelta);
        q > b && Math.abs(p) > z && (o.swipe[0] = Math.sign(m)), L > w && Math.abs(v) > T && (o.swipe[1] = Math.sign(h));
      }
    }
    this.emit();
  }
  pointerClick(i) {
    !this.state.tap && i.detail > 0 && (i.preventDefault(), i.stopPropagation());
  }
  setupPointer(i) {
    const o = this.config, l = o.device;
    o.pointerLock && i.currentTarget.requestPointerLock(), o.pointerCapture || (this.eventStore.add(this.sharedConfig.window, l, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, l, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, l, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(i) {
    this.state._preventScroll && i.cancelable && i.preventDefault();
  }
  setupScrollPrevention(i) {
    this.state._preventScroll = !1, t2(i);
    const o = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", o), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", o), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, i);
  }
  setupDelayTrigger(i) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(i);
    }, this.config.delay);
  }
  keyDown(i) {
    const o = cg[i.key];
    if (o) {
      const l = this.state, c = i.shiftKey ? 10 : i.altKey ? 0.1 : 1;
      this.start(i), l._delta = o(this.config.keyboardDisplacement, c), l._keyboardActive = !0, Tt.addTo(l._movement, l._delta), this.compute(i), this.emit();
    }
  }
  keyUp(i) {
    i.key in cg && (this.state._keyboardActive = !1, this.setActive(), this.compute(i), this.emit());
  }
  bind(i) {
    const o = this.config.device;
    i(o, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (i(o, "change", this.pointerMove.bind(this)), i(o, "end", this.pointerUp.bind(this)), i(o, "cancel", this.pointerUp.bind(this)), i("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (i("key", "down", this.keyDown.bind(this)), i("key", "up", this.keyUp.bind(this))), this.config.filterTaps && i("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function t2(a) {
  "persist" in a && typeof a.persist == "function" && a.persist();
}
const ur = typeof window < "u" && window.document && window.document.createElement;
function qh() {
  return ur && "ontouchstart" in window;
}
function a2() {
  return qh() || ur && window.navigator.maxTouchPoints > 1;
}
function n2() {
  return ur && "onpointerdown" in window;
}
function i2() {
  return ur && "exitPointerLock" in window.document;
}
function o2() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const da = {
  isBrowser: ur,
  gesture: o2(),
  touch: qh(),
  touchscreen: a2(),
  pointer: n2(),
  pointerLock: i2()
}, r2 = 250, l2 = 180, s2 = 0.5, c2 = 50, u2 = 250, d2 = 10, ug = {
  mouse: 0,
  touch: 0,
  pen: 8
}, _2 = $e($e({}, cr), {}, {
  device(a, i, {
    pointer: {
      touch: o = !1,
      lock: l = !1,
      mouse: c = !1
    } = {}
  }) {
    return this.pointerLock = l && da.pointerLock, da.touch && o ? "touch" : this.pointerLock ? "mouse" : da.pointer && !c ? "pointer" : da.touch ? "touch" : "mouse";
  },
  preventScrollAxis(a, i, {
    preventScroll: o
  }) {
    if (this.preventScrollDelay = typeof o == "number" ? o : o || o === void 0 && a ? r2 : void 0, !(!da.touchscreen || o === !1))
      return a || (o !== void 0 ? "y" : void 0);
  },
  pointerCapture(a, i, {
    pointer: {
      capture: o = !0,
      buttons: l = 1,
      keys: c = !0
    } = {}
  }) {
    return this.pointerButtons = l, this.keys = c, !this.pointerLock && this.device === "pointer" && o;
  },
  threshold(a, i, {
    filterTaps: o = !1,
    tapsThreshold: l = 3,
    axis: c = void 0
  }) {
    const d = Tt.toVector(a, o ? l : c ? 1 : 0);
    return this.filterTaps = o, this.tapsThreshold = l, d;
  },
  swipe({
    velocity: a = s2,
    distance: i = c2,
    duration: o = u2
  } = {}) {
    return {
      velocity: this.transform(Tt.toVector(a)),
      distance: this.transform(Tt.toVector(i)),
      duration: o
    };
  },
  delay(a = 0) {
    switch (a) {
      case !0:
        return l2;
      case !1:
        return 0;
      default:
        return a;
    }
  },
  axisThreshold(a) {
    return a ? $e($e({}, ug), a) : ug;
  },
  keyboardDisplacement(a = d2) {
    return a;
  }
});
$e($e({}, Uh), {}, {
  device(a, i, {
    shared: o,
    pointer: {
      touch: l = !1
    } = {}
  }) {
    if (o.target && !da.touch && da.gesture) return "gesture";
    if (da.touch && l) return "touch";
    if (da.touchscreen) {
      if (da.pointer) return "pointer";
      if (da.touch) return "touch";
    }
  },
  bounds(a, i, {
    scaleBounds: o = {},
    angleBounds: l = {}
  }) {
    const c = (_) => {
      const m = lg(Yl(o, _), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [m.min, m.max];
    }, d = (_) => {
      const m = lg(Yl(l, _), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [m.min, m.max];
    };
    return typeof o != "function" && typeof l != "function" ? [c(), d()] : (_) => [c(_), d(_)];
  },
  threshold(a, i, o) {
    return this.lockDirection = o.axis === "lock", Tt.toVector(a, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(a) {
    return a === void 0 ? "ctrlKey" : a;
  },
  pinchOnWheel(a = !0) {
    return a;
  }
});
$e($e({}, cr), {}, {
  mouseOnly: (a = !0) => a
});
$e($e({}, cr), {}, {
  mouseOnly: (a = !0) => a
});
const Gh = /* @__PURE__ */ new Map(), Ru = /* @__PURE__ */ new Map();
function m2(a) {
  Gh.set(a.key, a.engine), Ru.set(a.key, a.resolver);
}
const f2 = {
  key: "drag",
  engine: e2,
  resolver: _2
};
function p2(a, i) {
  if (a == null) return {};
  var o = {}, l = Object.keys(a), c, d;
  for (d = 0; d < l.length; d++)
    c = l[d], !(i.indexOf(c) >= 0) && (o[c] = a[c]);
  return o;
}
function g2(a, i) {
  if (a == null) return {};
  var o = p2(a, i), l, c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    for (c = 0; c < d.length; c++)
      l = d[c], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(a, l) && (o[l] = a[l]);
  }
  return o;
}
const h2 = {
  target(a) {
    if (a)
      return () => "current" in a ? a.current : a;
  },
  enabled(a = !0) {
    return a;
  },
  window(a = da.isBrowser ? window : void 0) {
    return a;
  },
  eventOptions({
    passive: a = !0,
    capture: i = !1
  } = {}) {
    return {
      passive: a,
      capture: i
    };
  },
  transform(a) {
    return a;
  }
}, v2 = ["target", "eventOptions", "window", "enabled", "transform"];
function Ll(a = {}, i) {
  const o = {};
  for (const [l, c] of Object.entries(i))
    switch (typeof c) {
      case "function":
        o[l] = c.call(o, a[l], l, a);
        break;
      case "object":
        o[l] = Ll(a[l], c);
        break;
      case "boolean":
        c && (o[l] = a[l]);
        break;
    }
  return o;
}
function y2(a, i, o = {}) {
  const l = a, {
    target: c,
    eventOptions: d,
    window: _,
    enabled: m,
    transform: h
  } = l, p = g2(l, v2);
  if (o.shared = Ll({
    target: c,
    eventOptions: d,
    window: _,
    enabled: m,
    transform: h
  }, h2), i) {
    const v = Ru.get(i);
    o[i] = Ll($e({
      shared: o.shared
    }, p), v);
  } else
    for (const v in p) {
      const b = Ru.get(v);
      b && (o[v] = Ll($e({
        shared: o.shared
      }, p[v]), b));
    }
  return o;
}
class Hh {
  constructor(i, o) {
    It(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = i, this._gestureKey = o;
  }
  add(i, o, l, c, d) {
    const _ = this._listeners, m = IA(o, l), h = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, p = $e($e({}, h), d);
    i.addEventListener(m, c, p);
    const v = () => {
      i.removeEventListener(m, c, p), _.delete(v);
    };
    return _.add(v), v;
  }
  clean() {
    this._listeners.forEach((i) => i()), this._listeners.clear();
  }
}
class b2 {
  constructor() {
    It(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(i, o, l = 140, ...c) {
    this.remove(i), this._timeouts.set(i, window.setTimeout(o, l, ...c));
  }
  remove(i) {
    const o = this._timeouts.get(i);
    o && window.clearTimeout(o);
  }
  clean() {
    this._timeouts.forEach((i) => {
      window.clearTimeout(i);
    }), this._timeouts.clear();
  }
}
class w2 {
  constructor(i) {
    It(this, "gestures", /* @__PURE__ */ new Set()), It(this, "_targetEventStore", new Hh(this)), It(this, "gestureEventStores", {}), It(this, "gestureTimeoutStores", {}), It(this, "handlers", {}), It(this, "config", {}), It(this, "pointerIds", /* @__PURE__ */ new Set()), It(this, "touchIds", /* @__PURE__ */ new Set()), It(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), S2(this, i);
  }
  setEventIds(i) {
    if (Ql(i))
      return this.touchIds = new Set(ZA(i)), this.touchIds;
    if ("pointerId" in i)
      return i.type === "pointerup" || i.type === "pointercancel" ? this.pointerIds.delete(i.pointerId) : i.type === "pointerdown" && this.pointerIds.add(i.pointerId), this.pointerIds;
  }
  applyHandlers(i, o) {
    this.handlers = i, this.nativeHandlers = o;
  }
  applyConfig(i, o) {
    this.config = y2(i, o, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const i of this.gestures)
      this.gestureEventStores[i].clean(), this.gestureTimeoutStores[i].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...i) {
    const o = this.config.shared, l = {};
    let c;
    if (!(o.target && (c = o.target(), !c))) {
      if (o.enabled) {
        for (const _ of this.gestures) {
          const m = this.config[_], h = dg(l, m.eventOptions, !!c);
          if (m.enabled) {
            const p = Gh.get(_);
            new p(this, i, _).bind(h);
          }
        }
        const d = dg(l, o.eventOptions, !!c);
        for (const _ in this.nativeHandlers)
          d(_, "", (m) => this.nativeHandlers[_]($e($e({}, this.state.shared), {}, {
            event: m,
            args: i
          })), void 0, !0);
      }
      for (const d in l)
        l[d] = KA(...l[d]);
      if (!c) return l;
      for (const d in l) {
        const {
          device: _,
          capture: m,
          passive: h
        } = HA(d);
        this._targetEventStore.add(c, _, "", l[d], {
          capture: m,
          passive: h
        });
      }
    }
  }
}
function Ki(a, i) {
  a.gestures.add(i), a.gestureEventStores[i] = new Hh(a, i), a.gestureTimeoutStores[i] = new b2();
}
function S2(a, i) {
  i.drag && Ki(a, "drag"), i.wheel && Ki(a, "wheel"), i.scroll && Ki(a, "scroll"), i.move && Ki(a, "move"), i.pinch && Ki(a, "pinch"), i.hover && Ki(a, "hover");
}
const dg = (a, i, o) => (l, c, d, _ = {}, m = !1) => {
  var h, p;
  const v = (h = _.capture) !== null && h !== void 0 ? h : i.capture, b = (p = _.passive) !== null && p !== void 0 ? p : i.passive;
  let w = m ? l : qA(l, c, v);
  o && b && (w += "Passive"), a[w] = a[w] || [], a[w].push(d);
};
function E2(a, i = {}, o, l) {
  const c = Nn.useMemo(() => new w2(a), []);
  if (c.applyHandlers(a, l), c.applyConfig(i, o), Nn.useEffect(c.effect.bind(c)), Nn.useEffect(() => c.clean.bind(c), []), i.target === void 0)
    return c.bind.bind(c);
}
function z2(a, i) {
  return m2(f2), E2({
    drag: a
  }, i || {}, "drag");
}
const k2 = 10;
function T2({ room: a, path: i, isSelected: o, isBusy: l, onRoomToggle: c }) {
  const d = R.useRef(null);
  return z2(
    (_) => {
      _.tap && (te.debug("RoomSegments", "Tap on room:", a.id, a.name), c(a.id, a.name));
    },
    {
      target: d,
      filterTaps: !0,
      tapsThreshold: k2
    }
  ), /* @__PURE__ */ g.jsx(
    "path",
    {
      ref: d,
      d: i,
      className: `vacuum-map__room-segment ${o ? "vacuum-map__room-segment--selected" : ""}`,
      fill: o ? "var(--accent-bg, rgba(212, 175, 55, 0.3))" : "transparent",
      stroke: !l && o ? "var(--accent-color, #D4AF37)" : "rgba(255, 255, 255, 0.2)",
      strokeWidth: "2",
      style: { cursor: "pointer", transition: "all 0.2s ease", touchAction: "none" },
      "data-room-id": a.id,
      "data-room-name": a.name,
      children: /* @__PURE__ */ g.jsx("title", { children: a.name })
    }
  );
}
function A2({
  rooms: a,
  selectedRooms: i,
  onRoomToggle: o,
  calibrationPoints: l,
  imageWidth: c,
  imageHeight: d
}) {
  const { phase: _ } = Aa(), m = _ !== "idle";
  te.debug("RoomSegments", "Render, selectedRooms:", Array.from(i.keys()));
  const h = R.useMemo(() => a.filter((p) => p.visibility !== "Hidden").sort((p, v) => {
    const b = Math.abs(((p.x1 ?? 0) - (p.x0 ?? 0)) * ((p.y1 ?? 0) - (p.y0 ?? 0)));
    return Math.abs(((v.x1 ?? 0) - (v.x0 ?? 0)) * ((v.y1 ?? 0) - (v.y0 ?? 0))) - b;
  }).map((p) => ({
    room: p,
    path: dT(p, l, c, d)
  })), [a, l, c, d]);
  return !c || !d ? null : /* @__PURE__ */ g.jsx(
    "svg",
    {
      className: "vacuum-map__room-segments",
      viewBox: `0 0 ${c} ${d}`,
      preserveAspectRatio: "xMidYMid meet",
      children: h.map(({ room: p, path: v }) => {
        const b = i.has(p.id);
        return v ? /* @__PURE__ */ g.jsx(
          T2,
          {
            room: p,
            path: v,
            isSelected: b,
            isBusy: m,
            onRoomToggle: o
          },
          p.id
        ) : (te.warn("No path for room:", p.id, p.name), null);
      })
    }
  );
}
const N2 = R.memo(A2);
function C2({
  viewMode: a,
  onViewToggle: i,
  onZoomIn: o,
  onZoomOut: l,
  onZoomReset: c,
  showViewToggle: d = !1,
  showZoomControls: _ = !0,
  isMapLocked: m,
  onToggleLock: h
}) {
  const { t: p } = He(), v = a === "map", b = a === "list", w = p(v ? "vacuum_map.switch_to_list" : "vacuum_map.switch_to_map"), z = v ? l0 : Lu, T = p(m ? "vacuum_map.unlock_map" : "vacuum_map.lock_map"), O = m ? d0 : c0;
  return /* @__PURE__ */ g.jsxs("div", { className: "map-controls", children: [
    d && i && /* @__PURE__ */ g.jsx("button", { className: "map-controls__button", onClick: i, "aria-label": w, title: w, children: /* @__PURE__ */ g.jsx(z, { size: 18 }) }),
    _ && !m && !b && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          className: "map-controls__button",
          onClick: o,
          "aria-label": p("vacuum_map.zoom_in"),
          title: p("vacuum_map.zoom_in"),
          children: /* @__PURE__ */ g.jsx(yg, { size: 18 })
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          className: "map-controls__button",
          onClick: l,
          "aria-label": p("vacuum_map.zoom_out"),
          title: p("vacuum_map.zoom_out"),
          children: /* @__PURE__ */ g.jsx(f0, { size: 18 })
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          className: "map-controls__button",
          onClick: c,
          "aria-label": p("vacuum_map.zoom_reset"),
          title: p("vacuum_map.zoom_reset"),
          children: /* @__PURE__ */ g.jsx(k0, { size: 16 })
        }
      )
    ] }),
    !b && /* @__PURE__ */ g.jsx(
      "button",
      {
        className: `map-controls__button map-controls__button--lock${m ? " map-controls__button--locked" : ""}`,
        onClick: h,
        "aria-label": T,
        title: T,
        children: /* @__PURE__ */ g.jsx(O, { size: 16 })
      }
    )
  ] });
}
function x2({ rooms: a, selectedRooms: i, onRoomToggle: o }) {
  const { t: l } = He();
  return a.length === 0 ? /* @__PURE__ */ g.jsx("div", { className: "room-list-view", children: /* @__PURE__ */ g.jsx("div", { className: "room-list-view__empty", children: l("vacuum_map.no_rooms") }) }) : /* @__PURE__ */ g.jsxs("div", { className: "room-list-view", children: [
    /* @__PURE__ */ g.jsx("div", { className: "room-list-view__header", children: l("vacuum_map.room_list_overlay") }),
    /* @__PURE__ */ g.jsx("div", { className: "room-list-view__list", children: a.map((c) => {
      const d = i.has(c.id);
      return /* @__PURE__ */ g.jsxs(
        "button",
        {
          className: `room-list-view__item ${d ? "room-list-view__item--selected" : ""}`,
          onClick: () => o(c.id, c.name),
          children: [
            /* @__PURE__ */ g.jsx("span", { className: "room-list-view__item-name", children: c.name }),
            /* @__PURE__ */ g.jsx("span", { className: "room-list-view__item-check", children: d && /* @__PURE__ */ g.jsx(hg, { size: 18 }) })
          ]
        },
        c.id
      );
    }) })
  ] });
}
function O2({ zone: a, onZoneChange: i, clearZoneLabel: o, contentRef: l }) {
  const c = rd(), { phase: d } = Aa(), _ = d === "cleaning" || d === "paused", [m, h] = R.useState(null), [p, v] = R.useState(c.state.scale);
  OA(
    R.useCallback((H) => {
      v(H.state.scale);
    }, [])
  );
  const b = 1 / p, [w, z] = R.useState(null), T = R.useCallback(
    (H, F) => {
      const Y = l.current;
      if (!Y) return null;
      const W = Y.getBoundingClientRect(), { scale: ae } = c.state, ie = (H - W.left) / ae, ue = (F - W.top) / ae, se = W.width / ae, ze = W.height / ae, ke = Math.max(0, Math.min(100, ie / se * 100)), ve = Math.max(0, Math.min(100, ue / ze * 100));
      return { x: ke, y: ve };
    },
    [l, c]
  ), O = R.useCallback(
    (H) => {
      if (m) return;
      H.stopPropagation();
      const F = T(H.clientX, H.clientY);
      if (!F) return;
      const Y = 15, W = {
        x1: Math.max(0, F.x - Y / 2),
        y1: Math.max(0, F.y - Y / 2),
        x2: Math.min(100, F.x + Y / 2),
        y2: Math.min(100, F.y + Y / 2)
      };
      te.debug("Zone", "Created at click:", F, W), i(W);
    },
    [T, i, m]
  ), q = (H, F) => {
    H.stopPropagation(), H.preventDefault(), a && (h(F), z(a));
  }, L = (H) => "touches" in H && H.touches.length > 0 ? { clientX: H.touches[0].clientX, clientY: H.touches[0].clientY } : { clientX: H.clientX, clientY: H.clientY }, U = R.useCallback(
    (H) => {
      if (!m || !w) return;
      const { clientX: F, clientY: Y } = L(H), W = T(F, Y);
      if (!W) return;
      const ae = { ...w }, ie = 5;
      switch (m) {
        case "top":
          ae.y1 = Math.min(W.y, w.y2 - ie);
          break;
        case "bottom":
          ae.y2 = Math.max(W.y, w.y1 + ie);
          break;
        case "left":
          ae.x1 = Math.min(W.x, w.x2 - ie);
          break;
        case "right":
          ae.x2 = Math.max(W.x, w.x1 + ie);
          break;
      }
      i(ae);
    },
    [m, w, T, i]
  ), Z = R.useCallback(() => {
    h(null), z(null);
  }, []), B = (H) => {
    H.stopPropagation(), i(null), h(null), z(null);
  };
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "vacuum-map__zone-container",
      onClick: O,
      onMouseMove: U,
      onMouseUp: Z,
      onMouseLeave: Z,
      onTouchMove: U,
      onTouchEnd: Z,
      onTouchCancel: Z,
      children: a && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: "vacuum-map__zone",
          style: {
            left: `${a.x1}%`,
            top: `${a.y1}%`,
            width: `${a.x2 - a.x1}%`,
            height: `${a.y2 - a.y1}%`
          },
          onClick: (H) => H.stopPropagation(),
          children: !_ && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--top",
                style: { transform: `translateX(-50%) scale(${b})` },
                onMouseDown: (H) => q(H, "top"),
                onTouchStart: (H) => q(H, "top"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ g.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--right",
                style: { transform: `translateY(-50%) scale(${b})` },
                onMouseDown: (H) => q(H, "right"),
                onTouchStart: (H) => q(H, "right"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ g.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--bottom",
                style: { transform: `translateX(-50%) scale(${b})` },
                onMouseDown: (H) => q(H, "bottom"),
                onTouchStart: (H) => q(H, "bottom"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ g.jsx(
              "div",
              {
                className: "vacuum-map__zone-handle vacuum-map__zone-handle--left",
                style: { transform: `translateY(-50%) scale(${b})` },
                onMouseDown: (H) => q(H, "left"),
                onTouchStart: (H) => q(H, "left"),
                title: "Resize"
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "vacuum-map__zone-clear",
                style: { transform: `scale(${b})` },
                onClick: B,
                title: o,
                children: "×"
              }
            )
          ] })
        }
      )
    }
  );
}
const M2 = "M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z";
function R2({
  position: a,
  calibrationPoints: i,
  imageWidth: o,
  imageHeight: l,
  isCleaning: c = !1
}) {
  const d = R.useMemo(() => $i(a.x, a.y, i, o, l), [a.x, a.y, i, o, l]), _ = Math.max(o, l) * 0.05, m = _ / 2;
  return /* @__PURE__ */ g.jsx(
    "svg",
    {
      className: `vacuum-position-marker${c ? " vacuum-position-marker--cleaning" : ""}`,
      viewBox: `0 0 ${o} ${l}`,
      preserveAspectRatio: "xMidYMid meet",
      children: /* @__PURE__ */ g.jsxs("g", { transform: `translate(${d.x - m}, ${d.y - m})`, children: [
        /* @__PURE__ */ g.jsx("circle", { cx: m, cy: m, r: m * 0.9, className: "vacuum-position-marker__bg" }),
        /* @__PURE__ */ g.jsx("g", { transform: `scale(${_ / 24})`, children: /* @__PURE__ */ g.jsx("path", { d: M2, className: "vacuum-position-marker__icon" }) })
      ] })
    }
  );
}
const D2 = "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15";
function j2({ position: a, calibrationPoints: i, imageWidth: o, imageHeight: l }) {
  const c = R.useMemo(() => $i(a.x, a.y, i, o, l), [a.x, a.y, i, o, l]), d = Math.max(o, l) * 0.04, _ = d / 2;
  return /* @__PURE__ */ g.jsx("svg", { className: "charger-marker", viewBox: `0 0 ${o} ${l}`, preserveAspectRatio: "xMidYMid meet", children: /* @__PURE__ */ g.jsxs("g", { transform: `translate(${c.x - _}, ${c.y - _})`, children: [
    /* @__PURE__ */ g.jsx("circle", { cx: _, cy: _, r: _ * 0.9, className: "charger-marker__bg" }),
    /* @__PURE__ */ g.jsx("g", { transform: `scale(${d / 24})`, children: /* @__PURE__ */ g.jsx("path", { d: D2, className: "charger-marker__icon" }) })
  ] }) });
}
function L2({
  showViewToggle: a,
  showZoomControls: i,
  viewMode: o,
  onViewToggle: l,
  isMapLocked: c,
  onToggleLock: d,
  onResetTransformReady: _
}) {
  const { zoomIn: m, zoomOut: h, resetTransform: p } = xA();
  return R.useEffect(() => {
    _(p);
  }, [p, _]), /* @__PURE__ */ g.jsx(
    C2,
    {
      showViewToggle: a,
      showZoomControls: i,
      viewMode: o,
      onViewToggle: l,
      onZoomIn: () => m(),
      onZoomOut: () => h(),
      onZoomReset: () => p(),
      isMapLocked: c,
      onToggleLock: d
    }
  );
}
function U2({
  mapEntityId: a,
  selectedMode: i,
  selectedRooms: o,
  onRoomToggle: l,
  zone: c,
  onZoneChange: d,
  onImageDimensionsChange: _,
  defaultRoomView: m = "map"
}) {
  const { t: h } = He(), p = Mt(), v = Ju(), { phase: b } = Aa(), w = b === "cleaning" || b === "paused", z = p.states[a], T = z?.attributes?.entity_picture, O = R.useRef(null), q = R.useRef(null), L = R.useRef(null), [U, Z] = R.useState({ width: 0, height: 0 }), [B, H] = R.useState(m), [F, Y] = R.useState(() => {
    try {
      const D = localStorage.getItem(kp.MAP_LOCKED);
      return D === null ? !0 : D === "true";
    } catch {
      return !0;
    }
  }), W = R.useCallback((D) => {
    L.current = D;
  }, []), ae = R.useCallback(() => {
    const D = !F;
    D && L.current && L.current(), Y(D);
    try {
      localStorage.setItem(kp.MAP_LOCKED, String(D));
    } catch {
    }
  }, [F]), ie = i === "room" ? B : m, ue = R.useMemo(
    () => fh(p, a),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p.states[a]?.attributes?.rooms, a]
  ), se = z?.attributes?.calibration_points ?? [], ze = z?.attributes?.vacuum_position, ke = z?.attributes?.charger_position, ve = b === "cleaning", x = v.show_vacuum_position === !0, X = x && ze && U.width > 0 && U.height > 0, J = x && ke && U.width > 0 && U.height > 0, _e = R.useCallback(
    (D) => {
      const K = D.currentTarget;
      K.naturalWidth && K.naturalHeight && (Z({ width: K.naturalWidth, height: K.naturalHeight }), _?.(K.naturalWidth, K.naturalHeight));
    },
    [_]
  ), ge = !F && i !== "zone", E = `vacuum-map${F ? " vacuum-map--locked" : ""}`;
  return /* @__PURE__ */ g.jsxs("div", { className: E, ref: O, children: [
    z && T ? /* @__PURE__ */ g.jsxs(
      zA,
      {
        initialScale: 1,
        minScale: 0.5,
        maxScale: 4,
        centerOnInit: !0,
        centerZoomedOut: !1,
        limitToBounds: !1,
        wheel: {
          step: 0.05,
          disabled: F
        },
        pinch: {
          step: 0.5,
          disabled: F
        },
        panning: {
          disabled: !ge,
          velocityDisabled: !0,
          excluded: ["vacuum-map__room-segment"]
        },
        doubleClick: { disabled: !0 },
        children: [
          /* @__PURE__ */ g.jsx(
            L2,
            {
              showViewToggle: i === "room",
              showZoomControls: i !== "room" || ie === "map",
              viewMode: ie,
              onViewToggle: () => H((D) => D === "map" ? "list" : "map"),
              isMapLocked: F,
              onToggleLock: ae,
              onResetTransformReady: W
            }
          ),
          /* @__PURE__ */ g.jsx(
            AA,
            {
              wrapperStyle: {
                width: "100%",
                height: "100%"
              },
              contentStyle: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ g.jsxs("div", { className: "vacuum-map__content", ref: q, children: [
                /* @__PURE__ */ g.jsx(
                  "img",
                  {
                    src: p.hassUrl(T),
                    alt: "Vacuum Map",
                    className: "vacuum-map__image",
                    onLoad: _e,
                    draggable: !1
                  }
                ),
                J && /* @__PURE__ */ g.jsx(
                  j2,
                  {
                    position: ke,
                    calibrationPoints: se,
                    imageWidth: U.width,
                    imageHeight: U.height
                  }
                ),
                X && /* @__PURE__ */ g.jsx(
                  R2,
                  {
                    position: ze,
                    calibrationPoints: se,
                    imageWidth: U.width,
                    imageHeight: U.height,
                    isCleaning: ve
                  }
                ),
                i === "room" && ie === "map" && !w && U.width > 0 && U.height > 0 && /* @__PURE__ */ g.jsx(
                  N2,
                  {
                    rooms: ue,
                    selectedRooms: o,
                    onRoomToggle: l,
                    calibrationPoints: se,
                    imageWidth: U.width,
                    imageHeight: U.height
                  }
                ),
                i === "zone" && /* @__PURE__ */ g.jsx(
                  O2,
                  {
                    zone: c,
                    onZoneChange: d,
                    clearZoneLabel: h("vacuum_map.clear_zone"),
                    contentRef: q
                  }
                )
              ] })
            }
          )
        ]
      }
    ) : /* @__PURE__ */ g.jsxs("div", { className: "vacuum-map__placeholder", children: [
      h("vacuum_map.no_map"),
      /* @__PURE__ */ g.jsx("br", {}),
      /* @__PURE__ */ g.jsx("small", { children: h("vacuum_map.looking_for", { entity: a }) })
    ] }),
    i === "room" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      ie === "map" && !w && /* @__PURE__ */ g.jsx("div", { className: "vacuum-map__overlay", children: h("vacuum_map.room_overlay") }),
      ie === "list" && /* @__PURE__ */ g.jsx(x2, { rooms: ue, selectedRooms: o, onRoomToggle: l })
    ] }),
    i === "zone" && /* @__PURE__ */ g.jsx("div", { className: "vacuum-map__overlay", children: h(c ? "vacuum_map.zone_overlay_resize" : "vacuum_map.zone_overlay_create") })
  ] });
}
function q2({ selectedMode: a, onModeChange: i }) {
  const { t: o } = He(), { phase: l } = Aa(), c = l === "cleaning" || l === "paused", d = [
    { value: "room", label: o("modes.room") },
    { value: "all", label: o("modes.all") },
    { value: "zone", label: o("modes.zone") }
  ];
  return /* @__PURE__ */ g.jsx("div", { className: `mode-tabs ${c ? "mode-tabs--disabled" : ""}`, children: d.map((_) => /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: () => i(_.value),
      className: `mode-tabs__button ${a === _.value ? "mode-tabs__button--active" : ""}`,
      disabled: c,
      children: _.label
    },
    _.value
  )) });
}
function G2({ onClick: a, text: i, disabled: o = !1 }) {
  return /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__clean ${o ? "action-buttons__clean--disabled" : ""}`,
      disabled: o,
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "action-buttons__icon", children: dw }),
        /* @__PURE__ */ g.jsx("span", { children: i })
      ]
    }
  );
}
function H2({ onClick: a, disabled: i = !1 }) {
  const { t: o } = He();
  return /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__pause ${i ? "action-buttons__pause--disabled" : ""}`,
      disabled: i,
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "action-buttons__icon", children: _w }),
        /* @__PURE__ */ g.jsx("span", { children: o("actions.pause") })
      ]
    }
  );
}
function I2({ onClick: a, disabled: i = !1 }) {
  const { t: o } = He();
  return /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__resume ${i ? "action-buttons__resume--disabled" : ""}`,
      disabled: i,
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "action-buttons__icon", children: mw }),
        /* @__PURE__ */ g.jsx("span", { children: o("actions.resume") })
      ]
    }
  );
}
function _g({ onClick: a, action: i, disabled: o = !1 }) {
  const { t: l } = He(), c = l(i === "stop_and_dock" ? "actions.stop_and_dock" : "actions.stop");
  return /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__stop ${o ? "action-buttons__stop--disabled" : ""}`,
      disabled: o,
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "action-buttons__icon", children: fw }),
        /* @__PURE__ */ g.jsx("span", { children: c })
      ]
    }
  );
}
function B2({ onClick: a, disabled: i = !1 }) {
  const { t: o } = He();
  return /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: a,
      className: `action-buttons__dock ${i ? "action-buttons__dock--disabled" : ""}`,
      disabled: i,
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "action-buttons__icon", children: pw }),
        /* @__PURE__ */ g.jsx("span", { children: o("actions.dock") })
      ]
    }
  );
}
function P2({
  selectedMode: a,
  selectedRoomsCount: i,
  onClean: o,
  onPause: l,
  onResume: c,
  onStop: d,
  onDock: _
}) {
  const { t: m, getRoomCountTranslation: h } = He(), { getStopAction: p } = Ik(), { phase: v, controls: b } = Aa(), w = p(), z = () => {
    switch (a) {
      case "room":
        return h(i);
      case "all":
        return m("actions.clean_all");
      case "zone":
        return m("actions.zone_clean");
      default:
        return m("actions.clean");
    }
  }, T = () => d(w);
  return v === "cleaning" ? /* @__PURE__ */ g.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ g.jsx(H2, { onClick: l, disabled: !b.canPause }),
    /* @__PURE__ */ g.jsx(_g, { onClick: T, action: w, disabled: !b.canStop })
  ] }) : v === "paused" ? /* @__PURE__ */ g.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ g.jsx(I2, { onClick: c, disabled: !b.canResume }),
    /* @__PURE__ */ g.jsx(_g, { onClick: T, action: w, disabled: !b.canStop })
  ] }) : /* @__PURE__ */ g.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ g.jsx(G2, { onClick: o, text: z(), disabled: !b.canStartCleaning }),
    /* @__PURE__ */ g.jsx(B2, { onClick: _, disabled: !b.canDock })
  ] });
}
function va({ title: a, icon: i, defaultOpen: o = !1, children: l }) {
  const [c, d] = R.useState(o), _ = R.useCallback(() => {
    d((m) => !m);
  }, []);
  return /* @__PURE__ */ g.jsxs("div", { className: `accordion ${c ? "accordion--open" : ""}`, children: [
    /* @__PURE__ */ g.jsxs("button", { className: "accordion__header", onClick: _, type: "button", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "accordion__title-wrapper", children: [
        i && /* @__PURE__ */ g.jsx("span", { className: "accordion__icon", children: i }),
        /* @__PURE__ */ g.jsx("span", { className: "accordion__title", children: a })
      ] }),
      /* @__PURE__ */ g.jsx(vg, { className: "accordion__chevron" })
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "accordion__content", children: /* @__PURE__ */ g.jsx("div", { className: "accordion__content-inner", children: l }) })
  ] });
}
function ld({ checked: a = !1, onChange: i, disabled: o = !1 }) {
  const l = (c) => {
    i && !o && i(c.target.checked);
  };
  return /* @__PURE__ */ g.jsxs("label", { className: `toggle ${o ? "toggle--disabled" : ""}`, children: [
    /* @__PURE__ */ g.jsx("input", { type: "checkbox", className: "toggle__input", checked: a, onChange: l, disabled: o }),
    /* @__PURE__ */ g.jsx("span", { className: "toggle__slider", children: /* @__PURE__ */ g.jsx("span", { className: "toggle__knob" }) })
  ] });
}
function Cn({
  icon: a,
  label: i,
  selected: o = !1,
  onClick: l,
  size: c = "medium",
  iconStyle: d,
  disabled: _ = !1
}) {
  return /* @__PURE__ */ g.jsxs("div", { className: `circular-button ${_ ? "circular-button--disabled" : ""}`, children: [
    /* @__PURE__ */ g.jsx(
      "button",
      {
        className: `circular-button__circle circular-button__circle--${c} ${o ? "circular-button__circle--selected" : ""}`,
        onClick: l,
        disabled: _,
        children: typeof a == "string" ? /* @__PURE__ */ g.jsx("span", { className: "circular-button__icon", style: d, children: a }) : a
      }
    ),
    i && /* @__PURE__ */ g.jsx("span", { className: "circular-button__label", children: i })
  ] });
}
function sd({ opened: a, onClose: i, children: o }) {
  return a ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "modal__backdrop", onClick: i }),
    /* @__PURE__ */ g.jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ g.jsx("div", { className: "modal__handle" }),
      /* @__PURE__ */ g.jsx("div", { className: "modal__content", children: o })
    ] })
  ] }) : null;
}
function Ih({ options: a, value: i, onChange: o, disabled: l = !1 }) {
  return /* @__PURE__ */ g.jsx("div", { className: `segmented-control ${l ? "segmented-control--disabled" : ""}`, children: a.map((c) => /* @__PURE__ */ g.jsx(
    "button",
    {
      className: `segmented-control__button ${i === c.value ? "segmented-control__button--active" : ""}`,
      onClick: () => !l && o(c.value),
      disabled: l,
      children: c.label
    },
    c.value
  )) });
}
function Z2({ message: a, onClose: i }) {
  return /* @__PURE__ */ g.jsxs("div", { className: "toast", children: [
    /* @__PURE__ */ g.jsx("span", { className: "toast__message", children: a }),
    /* @__PURE__ */ g.jsx("button", { className: "toast__close", onClick: i, "aria-label": "Close", children: "×" })
  ] });
}
class Y2 extends R.Component {
  constructor(i) {
    super(i), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(i) {
    return { hasError: !0, error: i };
  }
  componentDidCatch(i, o) {
    te.error("Caught error:", i), te.error("Component stack:", o.componentStack);
  }
  handleRetry = () => {
    this.setState({ hasError: !1, error: null });
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ g.jsx("div", { className: "error-boundary", children: /* @__PURE__ */ g.jsxs("div", { className: "error-boundary__content", children: [
      /* @__PURE__ */ g.jsx("div", { className: "error-boundary__icon", children: "!" }),
      /* @__PURE__ */ g.jsx("h3", { className: "error-boundary__title", children: "Something went wrong" }),
      /* @__PURE__ */ g.jsx("p", { className: "error-boundary__message", children: "The card encountered an error. Try refreshing the page." }),
      /* @__PURE__ */ g.jsx("button", { className: "error-boundary__retry", onClick: this.handleRetry, children: "Try Again" })
    ] }) }) : this.props.children;
  }
}
function V2({
  cleangeniusMode: a,
  cleangeniusModeList: i,
  cleangenius: o,
  baseEntityId: l
}) {
  const c = Mt(), { phase: d } = Aa(), { setSelectOption: _ } = Hu(c), { t: m } = He(), h = Bu(l), p = d === "cleaning" || d === "paused", v = yt(c, h.cleangenius), b = yt(c, h.cleaningRoute), w = yt(c, h.cleangeniusMode), z = p || w.unavailable, T = p || v.unavailable, O = (q) => {
    const L = q ? ka.DEEP_CLEANING : ka.ROUTINE_CLEANING, U = q ? ai.DEEP : ai.STANDARD;
    _(h.cleangenius, Lg(L)), b.available && _(h.cleaningRoute, Kl(U));
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ g.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ g.jsx("h3", { className: "cleaning-mode-modal__section-title", children: m("cleangenius_mode.cleaning_mode_title") }),
      /* @__PURE__ */ g.jsx(
        "div",
        {
          className: `cleaning-mode-modal__mode-grid ${z ? "cleaning-mode-modal__mode-grid--disabled" : ""}`,
          children: i.map((q, L) => {
            const U = q, Z = q === "Vacuum and mop";
            return /* @__PURE__ */ g.jsxs(
              "div",
              {
                className: `cleaning-mode-modal__mode-card ${q === a ? "cleaning-mode-modal__mode-card--selected" : ""} ${z ? "cleaning-mode-modal__mode-card--disabled" : ""}`,
                onClick: () => !z && _(h.cleangeniusMode, Mw(U)),
                style: { cursor: z ? "not-allowed" : "pointer" },
                children: [
                  /* @__PURE__ */ g.jsx(
                    "div",
                    {
                      className: `cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${Z ? "vac-mop" : "mop-after"}`,
                      children: aT(U)
                    }
                  ),
                  /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__mode-label", children: Jk(U, m) }),
                  q === a && /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-modal__mode-checkmark", children: /* @__PURE__ */ g.jsx("span", { children: "✓" }) })
                ]
              },
              L
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        className: `cleaning-mode-modal__setting ${T ? "cleaning-mode-modal__setting--disabled" : ""}`,
        children: [
          /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__setting-label", children: m("cleangenius_mode.deep_cleaning") }),
          /* @__PURE__ */ g.jsx(
            ld,
            {
              checked: o === ka.DEEP_CLEANING,
              onChange: O,
              disabled: T
            }
          )
        ]
      }
    )
  ] });
}
function K2({
  cleaningMode: a,
  cleaningModeList: i,
  onSelect: o,
  entityId: l,
  t: c,
  disabled: d = !1,
  customizeSelected: _ = !1,
  hideCustomize: m = !1
}) {
  const h = m ? i.filter((p) => p !== be.CUSTOMIZE) : i;
  return /* @__PURE__ */ g.jsx("div", { className: `cleaning-mode-modal__power-grid ${d ? "cleaning-mode-modal__power-grid--disabled" : ""}`, children: h.map((p, v) => {
    const b = p === be.CUSTOMIZE ? _ : p === a && !_;
    return /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
      /* @__PURE__ */ g.jsx(
        Cn,
        {
          size: "small",
          selected: b,
          onClick: () => {
            if (d) return;
            const w = p === be.CUSTOMIZE ? be.CUSTOMIZE : Ow(p);
            o(l, w);
          },
          icon: tT(p)
        }
      ),
      /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: $k(p, c) })
    ] }, v);
  }) });
}
const X2 = ["Quiet", "Standard", "Strong", "Turbo"];
function F2({
  suctionLevel: a,
  suctionLevelList: i,
  maxSuctionPower: o,
  onSelectSuctionLevel: l,
  onToggleMaxPower: c,
  suctionLevelEntityId: d,
  maxSuctionPowerEntityId: _,
  maxPlusDescription: m,
  t: h,
  suctionLevelDisabled: p = !1,
  maxPowerDisabled: v = !1,
  hideMaxPower: b = !1
}) {
  const w = i.length > 0 ? i : X2, z = p || !b && o;
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        className: `cleaning-mode-modal__power-grid ${z ? "cleaning-mode-modal__power-grid--disabled" : ""}`,
        children: w.map((T, O) => /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
          /* @__PURE__ */ g.jsx(
            Cn,
            {
              size: "small",
              selected: !o && T === a,
              onClick: () => !z && l(d, Kl(T)),
              icon: nT(T),
              disabled: z
            }
          ),
          /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__power-label", children: eT(T, h) })
        ] }, O))
      }
    ),
    !b && /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__max-plus", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__max-plus-header", children: [
        /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__max-plus-title", children: "Max+" }),
        /* @__PURE__ */ g.jsx(
          ld,
          {
            checked: o,
            disabled: v,
            onChange: (T) => c(_, T)
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx("p", { className: "cleaning-mode-modal__max-plus-description", children: m })
    ] })
  ] });
}
function W2({
  wetnessLevel: a,
  mopPadHumidity: i,
  onChangeWetness: o,
  entityId: l,
  slightlyDryLabel: c,
  moistLabel: d,
  wetLabel: _,
  disabled: m = !1
}) {
  const [h, p] = R.useState(a), v = td();
  R.useEffect(() => {
    p(a);
  }, [a]);
  const { MIN: b, MAX: w } = Nw.WETNESS, z = (h - b) / (w - b) * 100, T = 20, O = `calc(${z}% + ${T / 2 - z * T / 100}px)`, q = (B) => {
    m || p(parseInt(B.target.value));
  }, L = () => {
    !m && h !== a && o(l, h);
  }, U = v ? "to left" : "to right", Z = [
    { humidity: Rl.SLIGHTLY_DRY, text: c },
    { humidity: Rl.MOIST, text: d },
    { humidity: Rl.WET, text: _ }
  ];
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        className: `cleaning-mode-modal__slider-container ${m ? "cleaning-mode-modal__slider-container--disabled" : ""}`,
        children: /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
          /* @__PURE__ */ g.jsx(
            "input",
            {
              type: "range",
              min: b,
              max: w,
              value: h,
              onChange: q,
              onMouseUp: L,
              onTouchEnd: L,
              disabled: m,
              className: "cleaning-mode-modal__slider",
              style: {
                background: `linear-gradient(${U}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${z}%, var(--accent-bg-secondary-hover) ${z}%, var(--accent-bg-secondary-hover) 100%)`
              }
            }
          ),
          /* @__PURE__ */ g.jsx(
            "div",
            {
              className: "cleaning-mode-modal__slider-tooltip",
              style: v ? { right: O } : { left: O },
              children: h
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-modal__slider-labels", children: Z.map(({ humidity: B, text: H }) => /* @__PURE__ */ g.jsx(
      "span",
      {
        className: `cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--${i === B ? "active" : "inactive"}`,
        children: H
      },
      B
    )) })
  ] });
}
const $2 = ["Low", "Medium", "High"];
function Q2({
  waterVolume: a,
  waterVolumeList: i,
  onSelect: o,
  entityId: l,
  t: c,
  disabled: d = !1
}) {
  const _ = i.length > 0 ? i : $2;
  return /* @__PURE__ */ g.jsx("div", { className: `cleaning-mode-modal__power-grid ${d ? "cleaning-mode-modal__power-grid--disabled" : ""}`, children: _.map((m, h) => /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
    /* @__PURE__ */ g.jsx(
      Cn,
      {
        size: "small",
        selected: m === a,
        onClick: () => !d && o(l, Kl(m)),
        icon: rT(),
        disabled: d
      }
    ),
    /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__power-label", children: lT(m, c) })
  ] }, h)) });
}
const mg = {
  "By room": "mop_washing_frequency.by_room",
  "By area": "mop_washing_frequency.by_area",
  "By time": "mop_washing_frequency.by_time"
};
function J2(a, i) {
  return i && mg[a] ? i(mg[a]) : a;
}
function eN({
  selfCleanFrequency: a,
  selfCleanFrequencyList: i,
  selfCleanArea: o,
  selfCleanAreaMin: l,
  selfCleanAreaMax: c,
  selfCleanTime: d,
  selfCleanTimeMin: _,
  selfCleanTimeMax: m,
  onSelectFrequency: h,
  onChangeArea: p,
  onChangeTime: v,
  frequencyEntityId: b,
  areaEntityId: w,
  timeEntityId: z,
  t: T,
  frequencyDisabled: O = !1,
  areaDisabled: q = !1,
  timeDisabled: L = !1
}) {
  const [U, Z] = R.useState(o), [B, H] = R.useState(d), F = ed(), Y = td();
  R.useEffect(() => {
    Z(o);
  }, [o]), R.useEffect(() => {
    H(d);
  }, [d]);
  const W = a === "By area", ae = a === "By time", ie = W || ae, ue = W ? U : B, se = W ? l : _, ze = W ? c : m, ke = (ue - se) / (ze - se) * 100, ve = 20, x = `calc(${ke}% + ${ve / 2 - ke * ve / 100}px)`, X = T ? T("units.minutes_short") : "m", J = Y ? "to left" : "to right", _e = W ? q : L, ge = (D) => {
    if (_e) return;
    const K = parseInt(D.target.value);
    W ? Z(K) : H(K);
  }, E = () => {
    _e || (W && U !== o ? p(w, U) : ae && B !== d && v(z, B));
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        className: `cleaning-mode-modal__horizontal-scroll ${O ? "cleaning-mode-modal__horizontal-scroll--disabled" : ""}`,
        children: i.map((D, K) => /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
          /* @__PURE__ */ g.jsx(
            Cn,
            {
              size: "small",
              selected: D === a,
              onClick: () => !O && h(b, Rw(D)),
              icon: oT(D),
              disabled: O
            }
          ),
          /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: J2(D, T) })
        ] }, K))
      }
    ),
    ie && /* @__PURE__ */ g.jsx(
      "div",
      {
        className: `cleaning-mode-modal__slider-container ${_e ? "cleaning-mode-modal__slider-container--disabled" : ""}`,
        style: { marginTop: "1rem" },
        children: /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
          /* @__PURE__ */ g.jsx(
            "input",
            {
              type: "range",
              min: se,
              max: ze,
              value: ue,
              onChange: ge,
              onMouseUp: E,
              onTouchEnd: E,
              disabled: _e,
              className: "cleaning-mode-modal__slider",
              style: {
                background: `linear-gradient(${J}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${ke}%, var(--accent-bg-secondary-hover) ${ke}%, var(--accent-bg-secondary-hover) 100%)`
              }
            }
          ),
          /* @__PURE__ */ g.jsx(
            "div",
            {
              className: "cleaning-mode-modal__slider-tooltip",
              style: Y ? { right: x } : { left: x },
              children: W ? `${U}${F}` : `${B}${X}`
            }
          )
        ] })
      }
    )
  ] });
}
function tN(a, i) {
  const o = `cleaning_routes.${a.toLowerCase()}`, l = i(o);
  return l === o ? a : l;
}
function aN({
  cleaningRoute: a,
  cleaningRouteList: i,
  onSelect: o,
  entityId: l,
  disabled: c = !1
}) {
  const { t: d } = He();
  return /* @__PURE__ */ g.jsx("div", { className: `cleaning-mode-modal__route-grid ${c ? "cleaning-mode-modal__route-grid--disabled" : ""}`, children: i.map((_, m) => /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__route-option", children: [
    /* @__PURE__ */ g.jsx(
      Cn,
      {
        size: "small",
        selected: _ === a,
        onClick: () => !c && o(l, Kl(_)),
        icon: iT(_),
        disabled: c
      }
    ),
    /* @__PURE__ */ g.jsx("span", { className: "cleaning-mode-modal__route-label", children: tN(_, d) })
  ] }, m)) });
}
function nN({
  cleaningMode: a,
  cleaningModeList: i,
  suctionLevel: o,
  suctionLevelList: l,
  wetnessLevel: c,
  mopPadHumidity: d,
  waterVolume: _,
  waterVolumeList: m,
  cleaningRoute: h,
  cleaningRouteList: p,
  maxSuctionPower: v,
  selfCleanArea: b,
  selfCleanFrequency: w,
  selfCleanFrequencyList: z,
  selfCleanAreaMin: T,
  selfCleanAreaMax: O,
  selfCleanTime: q,
  selfCleanTimeMin: L,
  selfCleanTimeMax: U,
  baseEntityId: Z,
  onCleaningModeSelect: B,
  showOnlyCleaningModeSelector: H = !1
}) {
  const F = Mt(), Y = Bt(), { controls: W, phase: ae, isCustomizedCleaning: ie } = Aa(), { setSelectOption: ue, setSwitch: se, setNumber: ze, setFanSpeed: ke } = Hu(F), ve = Bu(Z), { t: x } = He(), X = ir(), J = X.has(nt.MAX_SUCTION_POWER), _e = X.has(nt.WETNESS_LEVEL), ge = X.has(nt.SELF_CLEAN_FREQUENCY), E = X.has(nt.CLEANING_ROUTE), D = X.has(nt.SELF_WASH_BASE), K = !_e && !D && m.length > 0, $ = yt(F, ve.cleaningMode), oe = ae === "cleaning" || ae === "paused", me = B ?? ue, we = R.useCallback(
    (Le, wt) => {
      if (oe && !ie) {
        const Rt = {
          quiet: "silent",
          standard: "standard",
          strong: "strong",
          turbo: "turbo"
        };
        ke(Y.entity_id, Rt[wt] ?? wt);
      } else oe || ue(ve.suctionLevel, wt);
    },
    [oe, ie, ke, ue, Y.entity_id, ve.suctionLevel]
  ), Ke = oe || !H && $.unavailable;
  return /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ g.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ g.jsx("h3", { className: "cleaning-mode-modal__section-title", children: x("custom_mode.cleaning_mode_title") }),
      /* @__PURE__ */ g.jsx(
        K2,
        {
          cleaningMode: a,
          cleaningModeList: i,
          onSelect: me,
          entityId: ve.cleaningMode,
          t: x,
          customizeSelected: H,
          hideCustomize: oe,
          disabled: Ke
        }
      )
    ] }),
    !H && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ g.jsx("h3", { className: "cleaning-mode-modal__section-title", children: x("custom_mode.suction_power_title") }),
        /* @__PURE__ */ g.jsx(
          F2,
          {
            suctionLevel: o,
            suctionLevelList: l,
            maxSuctionPower: v,
            onSelectSuctionLevel: we,
            onToggleMaxPower: se,
            suctionLevelEntityId: ve.suctionLevel,
            maxSuctionPowerEntityId: ve.maxSuctionPower,
            maxPlusDescription: x("custom_mode.max_plus_description"),
            t: x,
            suctionLevelDisabled: !W.canChangeSuctionPower,
            maxPowerDisabled: !W.canToggleMaxPower,
            hideMaxPower: !J
          }
        )
      ] }),
      K && a !== be.SWEEPING && /* @__PURE__ */ g.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ g.jsx("h3", { className: "cleaning-mode-modal__section-title", children: x("custom_mode.water_volume_title") }),
        /* @__PURE__ */ g.jsx(
          Q2,
          {
            waterVolume: _,
            waterVolumeList: m,
            onSelect: ue,
            entityId: ve.waterVolume,
            t: x,
            disabled: !W.canChangeWetness
          }
        )
      ] }),
      _e && a !== be.SWEEPING && /* @__PURE__ */ g.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ g.jsx("h3", { className: "cleaning-mode-modal__section-title", children: x("custom_mode.wetness_title") }),
        /* @__PURE__ */ g.jsx(
          W2,
          {
            wetnessLevel: c,
            mopPadHumidity: d,
            onChangeWetness: ze,
            entityId: ve.wetnessLevel,
            slightlyDryLabel: x("custom_mode.slightly_dry"),
            moistLabel: x("custom_mode.moist"),
            wetLabel: x("custom_mode.wet"),
            disabled: !W.canChangeWetness
          }
        )
      ] }),
      ge && /* @__PURE__ */ g.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ g.jsx("h3", { className: "cleaning-mode-modal__section-title", children: x("custom_mode.mop_washing_frequency_title") }),
        /* @__PURE__ */ g.jsx(
          eN,
          {
            selfCleanFrequency: w,
            selfCleanFrequencyList: z,
            selfCleanArea: b,
            selfCleanAreaMin: T,
            selfCleanAreaMax: O,
            selfCleanTime: q,
            selfCleanTimeMin: L,
            selfCleanTimeMax: U,
            onSelectFrequency: ue,
            onChangeArea: ze,
            onChangeTime: ze,
            frequencyEntityId: ve.selfCleanFrequency,
            areaEntityId: ve.selfCleanArea,
            timeEntityId: ve.selfCleanTime,
            t: x,
            frequencyDisabled: !W.canChangeMopFrequency,
            areaDisabled: !1,
            timeDisabled: !1
          }
        )
      ] }),
      E && p.length > 0 && /* @__PURE__ */ g.jsxs("section", { className: "cleaning-mode-modal__section", children: [
        /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-modal__section-header", children: /* @__PURE__ */ g.jsx("h3", { className: "cleaning-mode-modal__section-title", children: x("custom_mode.route_title") }) }),
        /* @__PURE__ */ g.jsx(
          aN,
          {
            cleaningRoute: h,
            cleaningRouteList: p,
            onSelect: ue,
            entityId: ve.cleaningRoute,
            disabled: !W.canChangeRoute
          }
        )
      ] })
    ] })
  ] });
}
const iN = {
  quiet: Au,
  silent: Au,
  standard: Gu,
  strong: Dg,
  turbo: Nu,
  max: Nu
}, oN = {
  light: /* @__PURE__ */ g.jsx(Ul, { size: 18, strokeWidth: 1.5 }),
  normal: /* @__PURE__ */ g.jsx(Ul, { size: 18, strokeWidth: 2.5 })
}, rN = {
  normal: /* @__PURE__ */ g.jsx(ku, { size: 18, strokeWidth: 1.5 }),
  warm: /* @__PURE__ */ g.jsx(ku, { size: 18, strokeWidth: 2.5 })
}, lN = {
  quiet: "Q",
  silent: "Q",
  standard: "S",
  strong: "T",
  turbo: "T",
  max: "M"
};
function sN(a) {
  return a ? lN[a] ?? a.charAt(0).toUpperCase() : "-";
}
function cN(a, i, o) {
  if (a === null) return "-";
  const l = (o - i) / 3;
  return a <= i + l ? "D" : a <= i + l * 2 ? "M" : "W";
}
function uN({
  value: a,
  min: i,
  max: o,
  onChange: l,
  slightlyDryLabel: c,
  moistLabel: d,
  wetLabel: _,
  disabled: m = !1
}) {
  const [h, p] = R.useState(a), v = td();
  R.useEffect(() => {
    p(a);
  }, [a]);
  const b = (h - i) / (o - i) * 100, w = 20, z = `calc(${b}% + ${w / 2 - b * w / 100}px)`, T = (B) => {
    m || p(parseInt(B.target.value));
  }, O = () => {
    !m && h !== a && l(h);
  }, q = v ? "to left" : "to right", L = (o - i) / 3, U = h <= i + L ? "dry" : h <= i + L * 2 ? "moist" : "wet", Z = [
    { key: "dry", text: c },
    { key: "moist", text: d },
    { key: "wet", text: _ }
  ];
  return /* @__PURE__ */ g.jsxs("div", { className: `customize-mode__wetness-slider ${m ? "customize-mode__wetness-slider--disabled" : ""}`, children: [
    /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-modal__slider-container", children: /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "range",
          min: i,
          max: o,
          value: h,
          onChange: T,
          onMouseUp: O,
          onTouchEnd: O,
          disabled: m,
          className: "cleaning-mode-modal__slider",
          style: {
            background: `linear-gradient(${q}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${b}%, var(--accent-bg-secondary-hover) ${b}%, var(--accent-bg-secondary-hover) 100%)`
          }
        }
      ),
      /* @__PURE__ */ g.jsx(
        "div",
        {
          className: "cleaning-mode-modal__slider-tooltip",
          style: v ? { right: z } : { left: z },
          children: h
        }
      )
    ] }) }),
    /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-modal__slider-labels", children: Z.map(({ key: B, text: H }) => /* @__PURE__ */ g.jsx(
      "span",
      {
        className: `cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--${U === B ? "active" : "inactive"}`,
        children: H
      },
      B
    )) })
  ] });
}
function dN({
  setting: a,
  setSuctionLevel: i,
  setWetnessLevel: o,
  setCleaningTimes: l,
  setMopPressure: c,
  setMopTemperature: d,
  t: _,
  suctionDisabled: m = !1,
  wetnessDisabled: h = !1,
  cleaningTimesDisabled: p = !1,
  mopPressureDisabled: v = !1,
  mopTemperatureDisabled: b = !1
}) {
  return /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__room-settings-content", children: [
    a.suctionLevelOptions.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ g.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.suction_power_title") }),
      /* @__PURE__ */ g.jsx("div", { className: `customize-mode__options ${m ? "customize-mode__options--disabled" : ""}`, children: a.suctionLevelOptions.map((w) => /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__option", children: [
        /* @__PURE__ */ g.jsx(
          Cn,
          {
            size: "small",
            selected: a.suctionLevel === w,
            onClick: () => !m && i(a.roomId, w),
            icon: iN[w] || Gu,
            disabled: m
          }
        ),
        /* @__PURE__ */ g.jsx("span", { className: "customize-mode__option-label", children: _(`suction_levels.${w.toLowerCase()}`) })
      ] }, w)) })
    ] }),
    a.wetnessLevel !== null && /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ g.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.wetness_title") }),
      /* @__PURE__ */ g.jsx(
        uN,
        {
          value: a.wetnessLevel,
          min: a.wetnessMin,
          max: a.wetnessMax,
          onChange: (w) => o(a.roomId, w),
          slightlyDryLabel: _("custom_mode.slightly_dry"),
          moistLabel: _("custom_mode.moist"),
          wetLabel: _("custom_mode.wet"),
          disabled: h
        }
      )
    ] }),
    a.mopPressureOptions.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ g.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.mop_pressure_title") }),
      /* @__PURE__ */ g.jsx("div", { className: `customize-mode__options ${v ? "customize-mode__options--disabled" : ""}`, children: a.mopPressureOptions.map((w) => /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__option", children: [
        /* @__PURE__ */ g.jsx(
          Cn,
          {
            size: "small",
            selected: a.mopPressure === w,
            onClick: () => !v && c(a.roomId, w),
            icon: oN[w.toLowerCase()] || /* @__PURE__ */ g.jsx(Ul, { size: 18 }),
            disabled: v
          }
        ),
        /* @__PURE__ */ g.jsx("span", { className: "customize-mode__option-label", children: _(`mop_pressure.${w.toLowerCase()}`) })
      ] }, w)) })
    ] }),
    a.mopTemperatureOptions.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ g.jsx("span", { className: "customize-mode__setting-label", children: _("custom_mode.mop_temperature_title") }),
      /* @__PURE__ */ g.jsx(
        "div",
        {
          className: `customize-mode__options ${b ? "customize-mode__options--disabled" : ""}`,
          children: a.mopTemperatureOptions.map((w) => /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__option", children: [
            /* @__PURE__ */ g.jsx(
              Cn,
              {
                size: "small",
                selected: a.mopTemperature === w,
                onClick: () => !b && d(a.roomId, w),
                icon: rN[w.toLowerCase()] || /* @__PURE__ */ g.jsx(ku, { size: 18 }),
                disabled: b
              }
            ),
            /* @__PURE__ */ g.jsx("span", { className: "customize-mode__option-label", children: _(`mop_temperature.${w.toLowerCase()}`) })
          ] }, w))
        }
      )
    ] }),
    a.cleaningTimesOptions.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "customize-mode__setting-group", children: [
      /* @__PURE__ */ g.jsx("span", { className: "customize-mode__setting-label", children: _("customize.cycles") }),
      /* @__PURE__ */ g.jsx(
        "div",
        {
          className: `customize-mode__options customize-mode__options--pills ${p ? "customize-mode__options--disabled" : ""}`,
          children: a.cleaningTimesOptions.map((w) => /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `customize-mode__pill customize-mode__pill--cycle ${a.cleaningTimes === w ? "customize-mode__pill--selected" : ""}`,
              onClick: () => !p && l(a.roomId, w),
              disabled: p,
              children: w
            },
            w
          ))
        }
      )
    ] })
  ] });
}
function _N({ baseEntityId: a }) {
  const { t: i } = He(), o = Mt(), l = kt("camera", a, iw.MAP.key), c = fh(o, l), { roomSettings: d, setSuctionLevel: _, setWetnessLevel: m, setCleaningTimes: h, setMopPressure: p, setMopTemperature: v } = Bk({
    hass: o,
    baseEntityId: a,
    rooms: c.map((w) => ({ id: w.id, name: w.name }))
  });
  if (c.length === 0)
    return /* @__PURE__ */ g.jsx("div", { className: "customize-mode", children: /* @__PURE__ */ g.jsx("div", { className: "customize-mode__empty", children: /* @__PURE__ */ g.jsx("p", { children: i("customize.no_rooms") }) }) });
  const b = c.filter((w) => d.get(w.id)?.hasEntities);
  return b.length === 0 ? /* @__PURE__ */ g.jsx("div", { className: "customize-mode", children: /* @__PURE__ */ g.jsx("div", { className: "customize-mode__empty", children: /* @__PURE__ */ g.jsx("p", { children: i("customize.no_rooms") }) }) }) : /* @__PURE__ */ g.jsx("div", { className: "customize-mode", children: /* @__PURE__ */ g.jsx("div", { className: "customize-mode__room-accordions", children: b.map((w) => {
    const z = d.get(w.id);
    if (!z) return null;
    const T = xt(
      "select",
      a,
      w.id,
      ca.SUCTION_LEVEL.key
    ), O = xt(
      "number",
      a,
      w.id,
      Tu.WETNESS_LEVEL.key
    ), q = xt(
      "select",
      a,
      w.id,
      ca.CLEANING_TIMES.key
    ), L = xt(
      "select",
      a,
      w.id,
      ca.MOP_PRESSURE.key
    ), U = xt(
      "select",
      a,
      w.id,
      ca.MOP_TEMPERATURE.key
    ), Z = yt(o, T), B = yt(o, O), H = yt(o, q), F = yt(o, L), Y = yt(o, U), W = [];
    return z.suctionLevel && W.push(sN(z.suctionLevel)), z.wetnessLevel !== null && W.push(cN(z.wetnessLevel, z.wetnessMin, z.wetnessMax)), z.cleaningTimes && W.push(`${z.cleaningTimes}`), /* @__PURE__ */ g.jsx(
      va,
      {
        title: w.name,
        icon: /* @__PURE__ */ g.jsx("span", { className: "customize-mode__badges", children: W.map((ae, ie) => /* @__PURE__ */ g.jsx("span", { className: "customize-mode__badge", children: ae }, ie)) }),
        children: /* @__PURE__ */ g.jsx(
          dN,
          {
            setting: z,
            setSuctionLevel: _,
            setWetnessLevel: m,
            setCleaningTimes: h,
            setMopPressure: p,
            setMopTemperature: v,
            t: i,
            suctionDisabled: Z.unavailable,
            wetnessDisabled: B.unavailable,
            cleaningTimesDisabled: H.unavailable,
            mopPressureDisabled: F.unavailable,
            mopTemperatureDisabled: Y.unavailable
          }
        )
      },
      w.id
    );
  }) }) });
}
function mN({ opened: a, onClose: i }) {
  const { t: o } = He(), l = Bt(), c = Mt(), { phase: d, isCustomizedCleaning: _ } = Aa(), m = Iu(l.entity_id), { setSelectOption: h } = Hu(c), p = Bu(m), b = ir().has(nt.CLEANGENIUS), w = d === "cleaning" || d === "paused", z = kt("switch", m, Uu.CUSTOMIZED_CLEANING.key), T = yt(c, p.cleangenius), O = (fa, We) => {
    const mt = l.attributes[fa];
    return Array.isArray(mt) ? mt : We;
  }, q = T.state?.toLowerCase(), L = je(l.attributes.cleangenius, ka.OFF), Z = q && q !== "unavailable" && q !== "unknown" ? q !== "off" : L !== ka.OFF, B = L, H = je(l.attributes.cleaning_mode, zt.CLEANING_MODE), F = je(l.attributes.cleangenius_mode, zt.CLEANGENIUS_MODE), Y = je(l.attributes.suction_level, zt.SUCTION_LEVEL), W = je(l.attributes.wetness_level, zt.WETNESS_LEVEL), ae = je(l.attributes.water_volume, zt.WATER_VOLUME), ie = je(l.attributes.cleaning_route, zt.CLEANING_ROUTE), ue = je(l.attributes.max_suction_power, zt.MAX_SUCTION_POWER), se = je(l.attributes.self_clean_area, zt.SELF_CLEAN_AREA), ze = je(l.attributes.self_clean_frequency, zt.SELF_CLEAN_FREQUENCY), ke = je(l.attributes.mop_pad_humidity, zt.MOP_PAD_HUMIDITY), ve = O("self_clean_frequency_list", []), x = ve.length > 0 ? ve : ["By area", "By time", "By room"], X = je(l.attributes.self_clean_area_min, zt.SELF_CLEAN_AREA_MIN), J = je(l.attributes.self_clean_area_max, zt.SELF_CLEAN_AREA_MAX), _e = je(l.attributes.previous_self_clean_time, zt.SELF_CLEAN_TIME), ge = je(l.attributes.self_clean_time_min, zt.SELF_CLEAN_TIME_MIN), E = je(l.attributes.self_clean_time_max, zt.SELF_CLEAN_TIME_MAX), D = [
    { value: $o.CLEANGENIUS, label: o("cleaning_mode.clean_genius") },
    { value: $o.CUSTOM, label: o("cleaning_mode.custom") }
  ], K = O("cleaning_mode_list", []), oe = [...K.length > 0 ? K : ["Sweeping", "Mopping", "Sweeping and mopping", "Mopping after sweeping"], be.CUSTOMIZE], me = O("cleangenius_mode_list", ["Vacuum and mop", "Mop after vacuum"]), we = O("suction_level_list", []), Ke = we.length > 0 ? we : ["Quiet", "Standard", "Strong", "Turbo"], Le = O("water_volume_list", []), wt = Le.length > 0 ? Le : ["Low", "Medium", "High"], Rt = O("cleaning_route_list", []), Na = Rt.length > 0 ? Rt : ["Quick", "Standard", "Intensive", "Deep"], Ca = w || T.unavailable, St = b && Z, Dn = (fa) => {
    const We = fa === $o.CLEANGENIUS;
    We && _ && c.callService("switch", "turn_off", { entity_id: z });
    const mt = We ? ka.ROUTINE_CLEANING : ka.OFF;
    h(p.cleangenius, Lg(mt));
  }, jn = (fa, We) => {
    if (We === be.CUSTOMIZE) {
      te.debug("CleaningModeModal", "Enabling customized cleaning"), c.callService("switch", "turn_on", { entity_id: z });
      return;
    }
    _ ? (te.debug("CleaningModeModal", "Disabling customized cleaning"), c.callService("switch", "turn_off", { entity_id: z }), setTimeout(() => h(fa, We), 300)) : h(fa, We);
  }, si = !St && _;
  return /* @__PURE__ */ g.jsx(sd, { opened: a, onClose: i, children: /* @__PURE__ */ g.jsxs("div", { className: "cleaning-mode-modal", children: [
    b && /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-modal__header", children: /* @__PURE__ */ g.jsx(
      Ih,
      {
        value: St ? $o.CLEANGENIUS : $o.CUSTOM,
        onChange: Dn,
        options: D,
        disabled: Ca
      }
    ) }),
    /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: St ? /* @__PURE__ */ g.jsx(
      V2,
      {
        cleangeniusMode: F,
        cleangeniusModeList: me,
        cleangenius: B,
        baseEntityId: m
      }
    ) : /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(
        nN,
        {
          cleaningMode: _ ? be.CUSTOMIZE : H,
          cleaningModeList: oe,
          suctionLevel: Y,
          suctionLevelList: Ke,
          wetnessLevel: W,
          mopPadHumidity: ke,
          waterVolume: ae,
          waterVolumeList: wt,
          cleaningRoute: ie,
          cleaningRouteList: Na,
          maxSuctionPower: ue,
          selfCleanArea: se,
          selfCleanFrequency: ze,
          selfCleanFrequencyList: x,
          selfCleanAreaMin: X,
          selfCleanAreaMax: J,
          selfCleanTime: _e,
          selfCleanTimeMin: ge,
          selfCleanTimeMax: E,
          baseEntityId: m,
          onCleaningModeSelect: jn,
          showOnlyCleaningModeSelector: si
        }
      ),
      si && /* @__PURE__ */ g.jsx(_N, { baseEntityId: m })
    ] }) })
  ] }) });
}
function fN({ opened: a, onClose: i }) {
  const { t: o } = He(), l = Bt(), c = Mt(), d = l.attributes.shortcuts || {}, _ = Object.entries(d).map(([v, b]) => ({
    id: parseInt(v),
    ...b
  })), h = yt(c, l.entity_id).disabled, p = (v) => {
    h || (c.callService("dreame_vacuum", "vacuum_start_shortcut", {
      entity_id: l.entity_id,
      shortcut_id: v
    }), i());
  };
  return /* @__PURE__ */ g.jsx(sd, { opened: a, onClose: i, children: /* @__PURE__ */ g.jsxs("div", { className: "shortcuts-modal", children: [
    /* @__PURE__ */ g.jsx("h2", { className: "shortcuts-modal__title", children: o("shortcuts.title") }),
    _.length === 0 ? /* @__PURE__ */ g.jsxs("div", { className: "shortcuts-modal__empty", children: [
      /* @__PURE__ */ g.jsx("p", { children: o("shortcuts.no_shortcuts") }),
      /* @__PURE__ */ g.jsx("p", { className: "shortcuts-modal__empty-hint", children: o("shortcuts.create_hint") })
    ] }) : /* @__PURE__ */ g.jsx("div", { className: "shortcuts-modal__list", children: _.map((v) => /* @__PURE__ */ g.jsxs(
      "button",
      {
        className: `shortcuts-modal__item ${h ? "shortcuts-modal__item--disabled" : ""}`,
        onClick: () => p(v.id),
        disabled: h,
        children: [
          /* @__PURE__ */ g.jsx("span", { className: "shortcuts-modal__item-icon", children: hw }),
          /* @__PURE__ */ g.jsx("span", { className: "shortcuts-modal__item-name", children: v.name })
        ]
      },
      v.id
    )) })
  ] }) });
}
function pN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Mt(), d = l.entity_id.split(".")[1] ?? "", _ = _h(c, d, a.key), m = R.useCallback(
    (h) => {
      c.callService("switch", h ? "turn_on" : "turn_off", {
        entity_id: _.entityId
      });
    },
    [c, _.entityId]
  );
  return _.disabled ? null : /* @__PURE__ */ g.jsxs("div", { className: `entity-item ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ g.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ g.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ g.jsx(ld, { checked: _.isOn, disabled: _.unavailable, onChange: m })
  ] });
}
function fg(a) {
  return a.split("_").map((i) => i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()).join(" ");
}
function gN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Mt(), d = l.entity_id.split(".")[1] ?? "", _ = `select.${d}_${a.key}`, m = mh(c, d, a.key), h = m.attributes.options ?? [], p = R.useCallback(
    (b) => {
      c.callService("select", "select_option", {
        entity_id: _,
        option: b
      });
    },
    [c, _]
  );
  if (m.disabled || h.length === 0) return null;
  const v = m.state ?? h[0] ?? "";
  if (a.useSegmentedControl) {
    const b = h.map((w) => ({
      value: w,
      label: fg(w)
    }));
    return /* @__PURE__ */ g.jsxs("div", { className: `entity-item entity-item--segmented ${i ? "entity-item--child" : ""}`, children: [
      /* @__PURE__ */ g.jsxs("div", { className: "entity-item__info", children: [
        /* @__PURE__ */ g.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
        a.descriptionKey && /* @__PURE__ */ g.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
      ] }),
      /* @__PURE__ */ g.jsx(
        Ih,
        {
          options: b,
          value: v,
          onChange: p,
          disabled: m.unavailable
        }
      )
    ] });
  }
  return /* @__PURE__ */ g.jsxs("div", { className: `entity-item entity-item--select ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ g.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ g.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        className: "entity-item__select",
        value: v,
        disabled: m.unavailable,
        onChange: (b) => p(b.target.value),
        children: h.map((b) => /* @__PURE__ */ g.jsx("option", { value: b, children: fg(b) }, b))
      }
    )
  ] });
}
function hN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Mt(), d = l.entity_id.split(".")[1] ?? "", _ = Pk(c, d, a.key), m = a.min ?? _.attributes.min ?? 0, h = a.max ?? _.attributes.max ?? 100, p = a.step ?? _.attributes.step ?? 1, v = R.useCallback(
    (z) => {
      c.callService("number", "set_value", {
        entity_id: _.entityId,
        value: z
      });
    },
    [c, _.entityId]
  );
  if (_.disabled) return null;
  const b = a.renderHint ?? "slider", w = b === "volume" ? "entity-item__slider--volume" : b === "brightness" ? "entity-item__slider--brightness" : "";
  return /* @__PURE__ */ g.jsxs("div", { className: `entity-item entity-item--slider ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ g.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ g.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: `entity-item__slider-container ${w}`, children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "range",
          className: "entity-item__slider",
          min: m,
          max: h,
          step: p,
          value: _.numericValue,
          disabled: _.unavailable,
          onChange: (z) => v(Number(z.target.value))
        }
      ),
      /* @__PURE__ */ g.jsxs("span", { className: "entity-item__slider-value", children: [
        Math.round(_.numericValue),
        b === "volume" || b === "brightness" ? "%" : ""
      ] })
    ] })
  ] });
}
function vN({ definition: a, isChild: i = !1, buttonLabel: o }) {
  const { t: l } = He(), c = Bt(), d = Mt(), _ = c.entity_id.split(".")[1] ?? "", m = Zk(d, _, a.key), h = R.useCallback(() => {
    d.callService("button", "press", {
      entity_id: m.entityId
    });
  }, [d, m.entityId]);
  return m.disabled ? null : /* @__PURE__ */ g.jsxs("div", { className: `entity-item ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ g.jsx("span", { className: "entity-item__label", children: l(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ g.jsx("span", { className: "entity-item__description", children: l(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ g.jsx("button", { className: "entity-item__button", disabled: m.unavailable, onClick: h, children: o ?? l("common.run") })
  ] });
}
function yN({ definition: a, isChild: i = !1 }) {
  const { t: o } = He(), l = Bt(), c = Mt(), d = l.entity_id.split(".")[1] ?? "", _ = Yk(c, d, a.key), m = R.useCallback(
    (h) => {
      c.callService("time", "set_value", {
        entity_id: _.entityId,
        time: h
      });
    },
    [c, _.entityId]
  );
  return _.disabled ? null : /* @__PURE__ */ g.jsxs("div", { className: `entity-item entity-item--time ${i ? "entity-item--child" : ""}`, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "entity-item__info", children: [
      /* @__PURE__ */ g.jsx("span", { className: "entity-item__label", children: o(a.labelKey) }),
      a.descriptionKey && /* @__PURE__ */ g.jsx("span", { className: "entity-item__description", children: o(a.descriptionKey) })
    ] }),
    /* @__PURE__ */ g.jsx(
      "input",
      {
        type: "time",
        className: "entity-item__time-input",
        value: _.timeValue,
        disabled: _.unavailable,
        onChange: (h) => m(h.target.value)
      }
    )
  ] });
}
function bN({ definition: a, isChild: i = !1 }) {
  const o = Bt(), l = Mt(), c = o.entity_id.split(".")[1] ?? "", d = ir();
  if (a.capability && !d.has(a.capability) || a.parentKey && !_h(l, c, a.parentKey).isOn)
    return null;
  const _ = i || !!a.parentKey;
  switch (a.platform) {
    case "switch":
      return /* @__PURE__ */ g.jsx(pN, { definition: a, isChild: _ });
    case "select":
      return /* @__PURE__ */ g.jsx(gN, { definition: a, isChild: _ });
    case "number":
      return /* @__PURE__ */ g.jsx(hN, { definition: a, isChild: _ });
    case "button":
      return /* @__PURE__ */ g.jsx(vN, { definition: a, isChild: _ });
    case "time":
      return /* @__PURE__ */ g.jsx(yN, { definition: a, isChild: _ });
    default:
      return null;
  }
}
function $a({ section: a, className: i }) {
  const o = ir();
  if (a.capabilities && a.capabilities.length > 0 && !a.capabilities.some((_) => o.has(_)))
    return null;
  const l = a.entities.map((d) => /* @__PURE__ */ g.jsx(bN, { definition: d }, d.key));
  return l.some((d) => d !== null) ? /* @__PURE__ */ g.jsx("div", { className: `data-driven-section ${i ?? ""}`, children: l }) : null;
}
function wN() {
  return /* @__PURE__ */ g.jsx($a, { section: xg, className: "ai-detection-section" });
}
function SN() {
  return /* @__PURE__ */ g.jsx($a, { section: kg, className: "carpet-settings-section" });
}
const EN = [
  {
    key: "main_brush",
    labelKey: "settings.consumables.main_brush",
    percentKey: Ne.MAIN_BRUSH_LEFT.key,
    hoursKey: Ne.MAIN_BRUSH_TIME_LEFT.key,
    consumableKey: "main_brush"
  },
  {
    key: "side_brush",
    labelKey: "settings.consumables.side_brush",
    percentKey: Ne.SIDE_BRUSH_LEFT.key,
    hoursKey: Ne.SIDE_BRUSH_TIME_LEFT.key,
    consumableKey: "side_brush"
  },
  {
    key: "filter",
    labelKey: "settings.consumables.filter",
    percentKey: Ne.FILTER_LEFT.key,
    hoursKey: Ne.FILTER_TIME_LEFT.key,
    consumableKey: "filter"
  },
  {
    key: "sensor",
    labelKey: "settings.consumables.sensor",
    percentKey: Ne.SENSOR_DIRTY_LEFT.key,
    hoursKey: Ne.SENSOR_DIRTY_TIME_LEFT.key,
    consumableKey: "sensor"
  },
  {
    key: "mop_pad",
    labelKey: "settings.consumables.mop_pad",
    percentKey: Ne.MOP_PAD_LEFT.key,
    hoursKey: Ne.MOP_PAD_TIME_LEFT.key,
    consumableKey: "mop_pad"
  },
  {
    key: "silver_ion",
    labelKey: "settings.consumables.silver_ion",
    percentKey: Ne.SILVER_ION_LEFT.key,
    hoursKey: Ne.SILVER_ION_TIME_LEFT.key,
    consumableKey: "silver_ion"
  },
  {
    key: "detergent",
    labelKey: "settings.consumables.detergent",
    percentKey: Ne.DETERGENT_LEFT.key,
    hoursKey: Ne.DETERGENT_TIME_LEFT.key,
    consumableKey: "detergent"
  },
  {
    key: "squeegee",
    labelKey: "settings.consumables.squeegee",
    percentKey: Ne.SQUEEGEE_LEFT.key,
    hoursKey: Ne.SQUEEGEE_TIME_LEFT.key,
    consumableKey: "squeegee"
  },
  {
    key: "tank_filter",
    labelKey: "settings.consumables.tank_filter",
    percentKey: Ne.TANK_FILTER_LEFT.key,
    hoursKey: Ne.TANK_FILTER_TIME_LEFT.key,
    consumableKey: "tank_filter"
  },
  {
    key: "onboard_dirty_water_tank",
    labelKey: "settings.consumables.onboard_dirty_water_tank",
    percentKey: Ne.ONBOARD_DIRTY_WATER_TANK_LEFT.key,
    hoursKey: Ne.ONBOARD_DIRTY_WATER_TANK_TIME_LEFT.key,
    consumableKey: "onboard_dirty_water_tank"
  },
  {
    key: "dirty_water_channel",
    labelKey: "settings.consumables.dirty_water_channel",
    percentKey: Ne.DIRTY_WATER_CHANNEL_DIRTY_LEFT.key,
    hoursKey: Ne.DIRTY_WATER_CHANNEL_DIRTY_TIME_LEFT.key,
    consumableKey: "dirty_water_channel"
  },
  {
    key: "deodorizer",
    labelKey: "settings.consumables.deodorizer",
    percentKey: Ne.DEODORIZER_LEFT.key,
    hoursKey: Ne.DEODORIZER_TIME_LEFT.key,
    consumableKey: "deodorizer"
  },
  {
    key: "wheel",
    labelKey: "settings.consumables.wheel",
    percentKey: Ne.WHEEL_DIRTY_LEFT.key,
    hoursKey: Ne.WHEEL_DIRTY_TIME_LEFT.key,
    consumableKey: "wheel"
  },
  {
    key: "scale_inhibitor",
    labelKey: "settings.consumables.scale_inhibitor",
    percentKey: Ne.SCALE_INHIBITOR_LEFT.key,
    hoursKey: Ne.SCALE_INHIBITOR_TIME_LEFT.key,
    consumableKey: "scale_inhibitor"
  },
  {
    key: "fluffing_roller",
    labelKey: "settings.consumables.fluffing_roller",
    percentKey: Ne.FLUFFING_ROLLER_DIRTY_LEFT.key,
    hoursKey: Ne.FLUFFING_ROLLER_DIRTY_TIME_LEFT.key,
    consumableKey: "fluffing_roller"
  },
  {
    key: "roller_mop_filter",
    labelKey: "settings.consumables.roller_mop_filter",
    percentKey: Ne.ROLLER_MOP_FILTER_DIRTY_LEFT.key,
    hoursKey: Ne.ROLLER_MOP_FILTER_DIRTY_TIME_LEFT.key,
    consumableKey: "roller_mop_filter"
  },
  {
    key: "water_outlet_filter",
    labelKey: "settings.consumables.water_outlet_filter",
    percentKey: Ne.WATER_OUTLET_FILTER_DIRTY_LEFT.key,
    hoursKey: Ne.WATER_OUTLET_FILTER_DIRTY_TIME_LEFT.key,
    consumableKey: "water_outlet_filter"
  }
];
function zN() {
  const { t: a } = He(), i = Bt(), o = Mt(), l = i.attributes, c = R.useCallback(
    (m) => {
      o.callService(wp.VACUUM_RESET_CONSUMABLE.domain, wp.VACUUM_RESET_CONSUMABLE.key, {
        entity_id: i.entity_id,
        consumable: m
      });
    },
    [o, i.entity_id]
  ), d = (m) => m >= 50 ? "var(--consumable-good, #34c759)" : m >= 20 ? "var(--consumable-warning, #ff9500)" : "var(--consumable-critical, #ff3b30)", _ = EN.filter((m) => {
    const h = l[m.percentKey];
    return h != null;
  });
  return _.length === 0 ? null : /* @__PURE__ */ g.jsx("div", { className: "consumables-section", children: _.map((m) => {
    const h = je(l[m.percentKey], 0), p = je(l[m.hoursKey], 0), v = d(h);
    return /* @__PURE__ */ g.jsxs("div", { className: "consumables-section__item", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "consumables-section__info", children: [
        /* @__PURE__ */ g.jsx("span", { className: "consumables-section__label", children: a(m.labelKey) }),
        /* @__PURE__ */ g.jsxs("span", { className: "consumables-section__stats", children: [
          h,
          "% · ",
          p,
          "h ",
          a("settings.consumables.remaining")
        ] })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: "consumables-section__progress", children: /* @__PURE__ */ g.jsx(
        "div",
        {
          className: "consumables-section__progress-bar",
          style: {
            width: `${h}%`,
            backgroundColor: v
          }
        }
      ) }),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          className: "consumables-section__reset",
          onClick: () => c(m.consumableKey),
          type: "button",
          children: a("settings.consumables.reset")
        }
      )
    ] }, m.key);
  }) });
}
function kN() {
  const { t: a } = He(), i = ed(), l = Bt().attributes, c = l.firmware_version, d = yk(c) || Tn(c) ? c : "-", _ = je(l.total_cleaned_area, 0), m = je(l.total_cleaning_time, 0), h = je(l.cleaning_count, 0), p = l.ap, v = p?.ssid ?? "-", b = p?.rssi ?? "-", w = p?.ip ?? "-", z = [
    { labelKey: "settings.device_info.firmware", value: d },
    { labelKey: "settings.device_info.total_area", value: _, unit: i },
    { labelKey: "settings.device_info.total_time", value: m, unit: a("units.minutes") },
    { labelKey: "settings.device_info.total_cleans", value: h },
    { labelKey: "settings.device_info.wifi_ssid", value: v },
    { labelKey: "settings.device_info.wifi_signal", value: b, unit: a("units.decibels") },
    { labelKey: "settings.device_info.ip_address", value: w }
  ];
  return /* @__PURE__ */ g.jsx("div", { className: "device-info-section", children: z.map((T) => /* @__PURE__ */ g.jsxs("div", { className: "device-info-section__item", children: [
    /* @__PURE__ */ g.jsx("span", { className: "device-info-section__label", children: a(T.labelKey) }),
    /* @__PURE__ */ g.jsxs("span", { className: "device-info-section__value", children: [
      T.value,
      T.unit && ` ${T.unit}`
    ] })
  ] }, T.labelKey)) });
}
function TN() {
  return /* @__PURE__ */ g.jsx($a, { section: Cg, className: "dock-settings-section" });
}
function AN() {
  return /* @__PURE__ */ g.jsx($a, { section: Ag, className: "edge-corner-section" });
}
function NN() {
  return /* @__PURE__ */ g.jsx($a, { section: Tg, className: "floor-settings-section" });
}
function CN() {
  return /* @__PURE__ */ g.jsx($a, { section: Og, className: "map-settings-section" });
}
function xN() {
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx($a, { section: Eg, className: "quick-settings-section" }),
    /* @__PURE__ */ g.jsx(
      $a,
      {
        section: zg,
        className: "quick-settings-section quick-settings-section--actions"
      }
    )
  ] });
}
function ON() {
  return /* @__PURE__ */ g.jsx($a, { section: Ng, className: "volume-section" });
}
function MN({ opened: a, onClose: i }) {
  const { t: o } = He(), l = ir(), c = l.has(nt.CARPET_RECOGNITION), d = l.has(nt.AI_DETECTION), _ = l.hasAny(
    nt.MOP_PAD_LIFTING,
    nt.SIDE_REACH,
    nt.MOP_PAD_SWING
  ), m = l.hasAny(
    nt.AUTO_EMPTY_BASE,
    nt.SELF_WASH_BASE,
    nt.AUTO_ADD_DETERGENT,
    nt.SMART_MOP_WASHING,
    nt.WASHING_MODE,
    nt.HOT_WASHING,
    nt.OFF_PEAK_CHARGING,
    nt.STATION_CLEANING,
    nt.AUTO_REWASHING
  );
  return /* @__PURE__ */ g.jsx(sd, { opened: a, onClose: i, children: /* @__PURE__ */ g.jsxs("div", { className: "settings-panel", children: [
    /* @__PURE__ */ g.jsx("h2", { className: "settings-panel__title", children: o("settings.title") }),
    /* @__PURE__ */ g.jsx("div", { className: "settings-panel__scroll-wrapper", children: /* @__PURE__ */ g.jsxs("div", { className: "settings-panel__sections", children: [
      /* @__PURE__ */ g.jsx(va, { title: o("settings.consumables.title"), icon: /* @__PURE__ */ g.jsx(Ul, {}), children: /* @__PURE__ */ g.jsx(zN, {}) }),
      /* @__PURE__ */ g.jsx(va, { title: o("settings.quick_settings.title"), icon: /* @__PURE__ */ g.jsx(x0, {}), children: /* @__PURE__ */ g.jsx(xN, {}) }),
      c && /* @__PURE__ */ g.jsx(va, { title: o("settings.carpet.title"), icon: /* @__PURE__ */ g.jsx(o0, {}), children: /* @__PURE__ */ g.jsx(SN, {}) }),
      /* @__PURE__ */ g.jsx(va, { title: o("settings.floor.title"), icon: /* @__PURE__ */ g.jsx(Wb, {}), children: /* @__PURE__ */ g.jsx(NN, {}) }),
      _ && /* @__PURE__ */ g.jsx(va, { title: o("settings.edge_corner.title"), icon: /* @__PURE__ */ g.jsx(Yb, {}), children: /* @__PURE__ */ g.jsx(AN, {}) }),
      /* @__PURE__ */ g.jsx(va, { title: o("settings.volume.title"), icon: /* @__PURE__ */ g.jsx($0, {}), children: /* @__PURE__ */ g.jsx(ON, {}) }),
      m && /* @__PURE__ */ g.jsx(va, { title: o("settings.dock.title"), icon: /* @__PURE__ */ g.jsx(Kb, {}), children: /* @__PURE__ */ g.jsx(TN, {}) }),
      d && /* @__PURE__ */ g.jsx(va, { title: o("settings.ai_detection.title"), icon: /* @__PURE__ */ g.jsx(qb, {}), children: /* @__PURE__ */ g.jsx(wN, {}) }),
      /* @__PURE__ */ g.jsx(va, { title: o("settings.map.title"), icon: /* @__PURE__ */ g.jsx(Lu, {}), children: /* @__PURE__ */ g.jsx(CN, {}) }),
      /* @__PURE__ */ g.jsx(va, { title: o("settings.device_info.title"), icon: /* @__PURE__ */ g.jsx(n0, {}), children: /* @__PURE__ */ g.jsx(kN, {}) })
    ] }) })
  ] }) });
}
function RN({ selectedRooms: a }) {
  const { t: i } = He();
  if (a.size === 0)
    return null;
  const o = Array.from(a.values()).join(", ");
  return /* @__PURE__ */ g.jsxs("div", { className: "room-selection-display", children: [
    /* @__PURE__ */ g.jsx("span", { className: "room-selection-display__label", children: i("room_display.selected_label") }),
    /* @__PURE__ */ g.jsx("span", { className: "room-selection-display__rooms", children: o })
  ] });
}
function DN({ hass: a, config: i }) {
  const o = a.states[i.entity];
  te.debug("DreameVacuumCard", "Loaded entity", o);
  const l = i.theme ?? "auto", c = i.language || "en", d = Ug(c), { t: _ } = He(c), m = R.useRef(null), h = Gk({
    themeType: l,
    customThemeConfig: i.custom_theme,
    containerRef: m,
    haDarkMode: a.themes?.darkMode
  }), [p, v] = R.useState(null), {
    selectedMode: b,
    selectedRooms: w,
    selectedZone: z,
    modalOpened: T,
    shortcutsModalOpened: O,
    settingsPanelOpened: q,
    repeatCount: L,
    setSelectedMode: U,
    setSelectedRooms: Z,
    setSelectedZone: B,
    setModalOpened: H,
    setShortcutsModalOpened: F,
    setSettingsPanelOpened: Y,
    handleModeChange: W,
    handleRoomToggle: ae,
    cycleRepeatCount: ie,
    resetRepeatCount: ue
  } = Uw({ defaultMode: i.default_mode }), se = i.map_entity || `camera.${i.entity.split(".")[1]}_map`, ze = o ? o.state === "cleaning" || je(o.attributes.started, !1) : !1, ke = o ? o.attributes.segment_cleaning === !0 : !1;
  R.useEffect(() => {
    if (!ke) return;
    const We = uT(a, i.entity, se);
    if (We.size > 0) {
      const mt = Array.from(w.keys()).sort(), xa = Array.from(We.keys()).sort();
      (mt.length !== xa.length || mt.some((Jl, At) => Jl !== xa[At])) && (te.debug("DreameVacuumCard", "Syncing room selection with active segments", xa), Z(We), U("room"));
    }
  }, [ke, a, i.entity, se, w, Z, U]), R.useEffect(() => {
    ze || ue();
  }, [ze, ue]);
  const { toast: ve, showToast: x, hideToast: X } = Mk(), J = R.useCallback(
    (We) => {
      x(We);
    },
    [x]
  ), { handlePause: _e, handleStop: ge, handleDock: E, handleClean: D } = Ok({
    hass: a,
    entityId: i.entity,
    mapEntityId: se,
    onSuccess: x,
    onError: J
  }), K = R.useCallback(
    (We, mt) => {
      const xa = w.has(We);
      ae(We, mt), x(
        xa ? _("toast.deselected_room", { name: mt }) : _("toast.selected_room", { name: mt })
      );
    },
    [w, ae, x, _]
  ), $ = R.useCallback(() => {
    D(
      b,
      w,
      z,
      p?.width,
      p?.height,
      L
    );
  }, [b, w, z, p, L, D]), oe = R.useCallback(() => {
    a.callService("vacuum", "start", { entity_id: i.entity }), x(_("toast.resuming"));
  }, [a, i.entity, x, _]), me = R.useCallback(() => Y(!0), [Y]), we = R.useCallback(() => Y(!1), [Y]), Ke = R.useCallback(() => H(!0), [H]), Le = R.useCallback(() => H(!1), [H]), wt = R.useCallback(() => F(!0), [F]), Rt = R.useCallback(() => F(!1), [F]), Na = R.useCallback(
    (We, mt) => v({ width: We, height: mt }),
    []
  );
  if (!o)
    return /* @__PURE__ */ g.jsx("div", { className: "dreame-vacuum-card__error", children: _("errors.entity_not_found", { entity: i.entity }) });
  if (o.state === "unavailable" || o.state === "unknown")
    return /* @__PURE__ */ g.jsx("div", { className: "dreame-vacuum-card__error dreame-vacuum-card__error--unavailable", children: _("errors.entity_unavailable") });
  const Ca = sT(o, i);
  if (!Ca)
    return /* @__PURE__ */ g.jsx("div", { className: "dreame-vacuum-card__error", children: _("errors.failed_to_load") });
  const { deviceName: St, mapEntityId: Dn } = Ca, jn = Dn || se, si = cT(o, b), fa = (o.attributes.capabilities ?? []).includes(nt.SHORTCUTS);
  return /* @__PURE__ */ g.jsx(Hk, { hass: a, entity: o, config: i, language: c, children: /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: m,
      className: `dreame-vacuum-card dreame-vacuum-card--${h.name}`,
      dir: d ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ g.jsxs("div", { className: "dreame-vacuum-card__container", children: [
          /* @__PURE__ */ g.jsx(_T, { deviceName: St, onSettingsClick: me }),
          /* @__PURE__ */ g.jsx(mT, {}),
          /* @__PURE__ */ g.jsx(
            U2,
            {
              mapEntityId: jn,
              selectedMode: b,
              selectedRooms: w,
              onRoomToggle: K,
              zone: z,
              onZoneChange: B,
              onImageDimensionsChange: Na,
              defaultRoomView: i.default_room_view
            }
          ),
          /* @__PURE__ */ g.jsx(
            fT,
            {
              cleanGeniusMode: je(o.attributes.cleangenius_mode, ""),
              cleaningMode: je(o.attributes.cleaning_mode, "Sweeping and mopping"),
              cleangenius: je(o.attributes.cleangenius, "Off"),
              onClick: Ke,
              onShortcutsClick: fa ? wt : void 0,
              onRepeatClick: ie,
              repeatCount: L
            }
          ),
          /* @__PURE__ */ g.jsxs("div", { className: "dreame-vacuum-card__controls", children: [
            b === "room" && /* @__PURE__ */ g.jsx(RN, { selectedRooms: w }),
            /* @__PURE__ */ g.jsx(q2, { selectedMode: si, onModeChange: W }),
            /* @__PURE__ */ g.jsx(
              P2,
              {
                selectedMode: b,
                selectedRoomsCount: w.size,
                onClean: $,
                onPause: _e,
                onResume: oe,
                onStop: ge,
                onDock: E
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ g.jsx(mN, { opened: T, onClose: Le }),
        /* @__PURE__ */ g.jsx(fN, { opened: O, onClose: Rt }),
        /* @__PURE__ */ g.jsx(MN, { opened: q, onClose: we }),
        ve && /* @__PURE__ */ g.jsx(Z2, { message: ve, onClose: X })
      ]
    }
  ) });
}
const jN = `.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left}[dir=rtl] .accordion__header{text-align:right}.accordion__header{transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:1000px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem}[dir=rtl] .toggle__knob{left:auto;right:.125rem}.toggle__knob{bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}[dir=rtl] .toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(-1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover:not(.circular-button--disabled){transform:translateY(-.125rem)}.circular-button--disabled{opacity:.5;pointer-events:none}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}[dir=rtl] .circular-button__circle>:nth-child(2):not(:last-child){rotate:180deg}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:hidden;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control--disabled{opacity:.5;pointer-events:none}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:absolute;top:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-down .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-down{0%{transform:translate(-50%) translateY(-1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.error-boundary{display:flex;align-items:center;justify-content:center;min-height:200px;padding:1.5rem;background:var(--surface-bg, #f5f5f5);border-radius:.75rem}.error-boundary__content{text-align:center;max-width:300px}.error-boundary__icon{width:48px;height:48px;margin:0 auto 1rem;background:var(--error-color, #ff3b30);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700}.error-boundary__title{margin:0 0 .5rem;font-size:1.125rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.error-boundary__message{margin:0 0 1rem;font-size:.875rem;color:var(--text-secondary, #666);line-height:1.4}.error-boundary__retry{padding:.5rem 1rem;background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background .2s ease}.error-boundary__retry:hover{background:var(--accent-color-hover, #0056b3)}.header{padding:1.25rem 1.25rem .625rem;text-align:center;padding-bottom:unset}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center;padding-left:2rem}[dir=rtl] .header__title-wrapper{padding-left:0;padding-right:2rem}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon{display:flex;color:var(--accent-color)}.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500;unicode-bidi:plaintext}.header__stat-value--cleaning-time{unicode-bidi:unset}.map-selector{position:relative;display:flex;justify-content:center}.map-selector__button{display:inline-flex;align-items:center;gap:.375rem;padding:.375rem .75rem;background:var(--surface-bg, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:1.25rem;color:var(--text-primary, #1a1a1a);font-size:.8125rem;font-weight:500;cursor:pointer;transition:all .2s ease}.map-selector__button:hover{background:var(--surface-bg-hover, #ebebeb)}.map-selector__button--open{background:var(--surface-bg-hover, #ebebeb);border-color:var(--accent-color, #007aff)}.map-selector__button--disabled,.map-selector__button:disabled{opacity:.5;cursor:not-allowed}.map-selector__icon{display:flex;align-items:center;color:var(--text-secondary, #666)}.map-selector__icon svg{width:1rem;height:1rem}.map-selector__label{max-width:8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.map-selector__chevron{width:1rem;height:1rem;color:var(--text-secondary, #666);transition:transform .2s ease}.map-selector__chevron--open{transform:rotate(180deg)}.map-selector__dropdown{position:absolute;top:calc(100% + .25rem);left:50%;transform:translate(-50%);min-width:10rem;max-width:14rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);border-radius:.75rem;box-shadow:var(--card-shadow, 0 4px 12px rgba(0, 0, 0, .1));overflow:hidden;z-index:100;animation:map-selector-dropdown-fade-in .15s ease}.map-selector__option{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.625rem .875rem;background:transparent;border:none;color:var(--text-primary, #1a1a1a);font-size:.875rem;text-align:start;cursor:pointer;transition:background .15s ease}.map-selector__option:hover{background:var(--surface-bg-hover, #f5f5f5)}.map-selector__option--selected{color:var(--accent-color, #007aff);font-weight:500}.map-selector__option:not(:last-child){border-bottom:1px solid var(--border-color, #e8e8e8)}.map-selector__option-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:.5rem}[dir=rtl] .map-selector__option-name{padding-right:0;padding-left:.5rem}.map-selector__option-check{width:1rem;height:1rem;color:var(--accent-color, #007aff);flex-shrink:0}@keyframes map-selector-dropdown-fade-in{0%{opacity:0;transform:translate(-50%) translateY(-.25rem)}to{opacity:1;transform:translate(-50%) translateY(0)}}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.575rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:#fff;background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem;margin-bottom:unset}.cleaning-mode-button-wrapper__repeats{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.9rem;font-weight:600;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__repeats:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__repeats:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__repeats:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem .75rem .5rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.vacuum-position-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}.vacuum-position-marker__bg{fill:var(--vacuum-marker-bg, rgba(255, 255, 255, .9));stroke:var(--vacuum-marker-stroke, #4caf50);stroke-width:2;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))}.vacuum-position-marker__icon{fill:var(--vacuum-marker-color, #4caf50)}.vacuum-position-marker--cleaning .vacuum-position-marker__bg{animation:vacuum-pulse 1.5s ease-in-out infinite}.charger-marker{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:5}.charger-marker__bg{fill:var(--charger-marker-bg, rgba(255, 255, 255, .9));stroke:var(--charger-marker-stroke, #ffc107);stroke-width:2;filter:drop-shadow(0 1px 3px rgba(0,0,0,.25))}.charger-marker__icon{fill:var(--charger-marker-color, #ffc107)}@keyframes vacuum-pulse{0%{opacity:1}50%{opacity:.7}to{opacity:1}}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}@media(orientation:landscape){.vacuum-map{max-height:calc(100vh - 280px);max-height:calc(100dvh - 280px);min-height:min(18.75rem,100vh - 280px)}}.vacuum-map--locked .react-transform-wrapper{touch-action:pan-y}.vacuum-map__content{position:relative;display:inline-block;width:100%;height:100%}.vacuum-map__image{display:block;width:100%;height:auto;border-radius:.9375rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem}[dir=rtl] .vacuum-map__cycles{right:auto;left:1rem}.vacuum-map__cycles{bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__zone-handle{position:absolute;background:#007aff;border:.125rem solid white;border-radius:.25rem;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:background .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:"";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5}.vacuum-map__zone-handle:active{background:#003d99}.vacuum-map__zone-handle--top,.vacuum-map__zone-handle--bottom{width:2.5rem;height:.5rem;left:50%;cursor:ns-resize}.vacuum-map__zone-handle--top{top:-.25rem}.vacuum-map__zone-handle--bottom{bottom:-.25rem}.vacuum-map__zone-handle--left,.vacuum-map__zone-handle--right{width:.5rem;height:2.5rem;top:50%;cursor:ew-resize}.vacuum-map__zone-handle--left{left:-.25rem}[dir=rtl] .vacuum-map__zone-handle--left{left:auto;right:-.25rem}.vacuum-map__zone-handle--right{right:-.25rem}[dir=rtl] .vacuum-map__zone-handle--right{right:auto;left:-.25rem}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem}[dir=rtl] .vacuum-map__zone-clear{right:auto;left:-.75rem}.vacuum-map__zone-clear{width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:background .2s ease;line-height:1;padding:0;z-index:11}.vacuum-map__zone-clear:hover{background:#ff1f0f}.vacuum-map__zone-clear:active{background:#c00}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room-segments path{pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover:not(.vacuum-map__room-segment--selected){fill:#ffffff26;stroke:#ffffffe6;stroke-width:3;filter:drop-shadow(0 0 8px rgba(255,255,255,.6))}.vacuum-map__room-segment--selected{fill:var(--accent-bg, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-hover, rgba(212, 175, 55, .45));filter:drop-shadow(0 0 6px var(--accent-color-shadow-color, rgba(212, 175, 55, .5)))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem}[dir=rtl] .room-list-view__header{padding-right:0;padding-left:3.5rem}.room-list-view__header{padding-left:1rem}[dir=rtl] .room-list-view__header{padding-left:0;padding-right:1rem}.room-list-view__header{font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}[dir=rtl] .room-list-view__item{text-align:right}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.map-controls{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .map-controls{right:auto;left:.75rem}.map-controls{display:flex;flex-direction:column;gap:.25rem;z-index:10}.map-controls__button{width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.map-controls__button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.map-controls__button:active{transform:scale(.95)}.map-controls__button svg{transition:transform .2s ease}.map-controls__button--lock{margin-top:.25rem}.map-controls__button--locked{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.map-controls__button--locked:hover{background:var(--accent-hover, #0066d6);border-color:var(--accent-hover, #0066d6)}.cleaning-mode-modal{height:100%}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{height:calc(100% - 4rem);overflow-y:auto;width:100%;overflow-x:hidden}.cleaning-mode-modal__content-wrapper::-webkit-scrollbar{display:none}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover:not(.cleaning-mode-modal__mode-card--disabled){transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--disabled{cursor:not-allowed;opacity:.5}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}[dir=rtl] .cleaning-mode-modal__mode-icon--mop-after>:nth-child(2),[dir=rtl] .cleaning-mode-modal__mode-icon--vac-mop>:nth-child(2){rotate:180deg}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem}[dir=rtl] .cleaning-mode-modal__mode-checkmark{right:auto;left:.75rem}.cleaning-mode-modal__mode-checkmark{width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:flex;justify-content:flex-start;gap:2rem;overflow-x:auto;padding:.5rem 0}.cleaning-mode-modal__power-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__power-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-container--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}[dir=rtl] .cleaning-mode-modal__slider-tooltip{transform:translate(50%)}.cleaning-mode-modal__slider-tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.cleaning-mode-modal__route-grid--disabled{opacity:.5;pointer-events:none}.cleaning-mode-modal__route-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.customize-mode{display:flex;flex-direction:column;gap:.5rem}.customize-mode__empty{display:flex;align-items:center;justify-content:center;padding:2rem;color:var(--text-secondary);font-size:.875rem}.customize-mode__empty p{margin:0}.customize-mode__room-accordions{display:flex;flex-direction:column;gap:.25rem}.customize-mode__badges{display:flex;gap:.25rem}.customize-mode__badge{display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;padding:.125rem .25rem;border-radius:.25rem;background:var(--accent-bg);font-size:.8rem;font-weight:600;color:var(--accent-color);text-transform:uppercase}.customize-mode__badge:nth-child(3){text-transform:unset}.customize-mode__room-settings-content{display:flex;flex-direction:column;gap:1rem}.customize-mode__setting-group{display:flex;flex-direction:column;gap:.5rem}.customize-mode__setting-label{font-size:.75rem;font-weight:500;color:var(--text-secondary)}.customize-mode__options{display:flex;justify-content:flex-start;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem;gap:2rem}.customize-mode__options--pills{gap:1rem}.customize-mode__option{display:flex;flex-direction:column;align-items:center;gap:2rem}.customize-mode__option-label{font-size:.8rem;color:var(--text-secondary);text-align:center}.customize-mode__pill{padding:.375rem .75rem;border:1.5px solid var(--surface-border);border-radius:1.25rem;background:var(--surface-bg);color:var(--text-secondary);font-size:1rem;font-weight:500;cursor:pointer;transition:all .15s ease;min-width:3.5rem}.customize-mode__pill:hover{border-color:var(--accent-color);background:var(--accent-bg-secondary)}.customize-mode__pill--selected{border-color:var(--accent-color);background:var(--accent-color);color:var(--accent-bg-secondary);color:#fff}.customize-mode__pill--cycle{font-weight:600}.customize-mode__wetness-slider{display:flex;flex-direction:column;gap:.25rem}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem}[dir=rtl] .room-selection-display__label{margin-right:0;margin-left:.5rem}.room-selection-display__label{color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.entity-item{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .1));gap:16px}.entity-item:last-child{border-bottom:none}.entity-item--child{padding-left:16px;opacity:.9}.entity-item__info{display:flex;flex-direction:column;flex:1;min-width:0}.entity-item__label{font-size:14px;font-weight:500;color:var(--text-primary, #000)}.entity-item__description{font-size:12px;color:var(--text-secondary, #666);margin-top:2px}.entity-item--select{flex-direction:column;align-items:stretch;gap:8px}.entity-item--select .entity-item__info{flex:none}.entity-item--segmented{flex-direction:column;align-items:stretch;gap:8px}.entity-item--segmented .entity-item__info{flex:none}.entity-item--slider{flex-direction:column;align-items:stretch;gap:8px}.entity-item--slider .entity-item__info{flex:none}.entity-item__select{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;cursor:pointer;min-width:120px}.entity-item__select:disabled{opacity:.5;cursor:not-allowed}.entity-item__button{padding:8px 16px;border-radius:8px;border:none;background:var(--accent-color, #007aff);color:#fff;font-size:14px;font-weight:500;cursor:pointer;transition:opacity .2s ease}.entity-item__button:hover:not(:disabled){opacity:.9}.entity-item__button:active:not(:disabled){opacity:.8}.entity-item__button:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider-container{display:flex;align-items:center;gap:12px}.entity-item__slider{flex:1;height:6px;border-radius:3px;appearance:none;background:var(--divider-color, rgba(0, 0, 0, .2));cursor:pointer}.entity-item__slider::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer}.entity-item__slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:var(--accent-color, #007aff);border:none;cursor:pointer}.entity-item__slider:disabled{opacity:.5;cursor:not-allowed}.entity-item__slider:disabled::-webkit-slider-thumb{cursor:not-allowed}.entity-item__slider:disabled::-moz-range-thumb{cursor:not-allowed}.entity-item__slider-value{font-size:14px;font-weight:500;color:var(--text-primary, #000);min-width:40px;text-align:right}.entity-item__slider--volume .entity-item__slider::-webkit-slider-thumb,.entity-item__slider--brightness .entity-item__slider::-webkit-slider-thumb{background:var(--accent-color, #007aff)}.entity-item__time-input{padding:8px 12px;border-radius:8px;border:1px solid var(--divider-color, rgba(0, 0, 0, .2));background:var(--surface-bg, #fff);color:var(--text-primary, #000);font-size:14px;font-family:inherit;cursor:pointer;min-width:100px}.entity-item__time-input:disabled{opacity:.5;cursor:not-allowed}.entity-item__time-input::-webkit-calendar-picker-indicator{cursor:pointer;filter:var(--time-picker-filter, none)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__item--slider{flex-direction:column;align-items:stretch;gap:.5rem}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.ai-detection-section__slider-container{display:flex;align-items:center;gap:.75rem}.ai-detection-section__slider{flex:1;height:4px;appearance:none;background:var(--surface-secondary, #e0e0e0);border-radius:2px;cursor:pointer}.ai-detection-section__slider::-webkit-slider-thumb{appearance:none;width:16px;height:16px;background:var(--accent-color, #007aff);border-radius:50%;cursor:pointer}.ai-detection-section__slider:disabled{opacity:.5;cursor:not-allowed}.ai-detection-section__slider-value{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);min-width:36px;text-align:right}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__mode-selector{display:flex;flex-direction:column;gap:.75rem;padding-bottom:.5rem;border-bottom:1px solid var(--border-color, #e0e0e0);margin-bottom:.25rem}.carpet-settings-section__sub-options{display:flex;flex-direction:column;gap:.5rem;padding-left:.25rem}.carpet-settings-section__sub-label{font-size:.75rem;color:var(--text-secondary, #666);font-weight:500}.carpet-settings-section__sub-buttons{display:flex;gap:.5rem}.carpet-settings-section__sub-button{flex:1;padding:.5rem .75rem;font-size:.8125rem;font-weight:500;border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;background:var(--surface-secondary, #f5f5f5);color:var(--text-primary, #333);cursor:pointer;transition:all .2s ease}.carpet-settings-section__sub-button:hover:not(.carpet-settings-section__sub-button--active){background:var(--surface-tertiary, #eee)}.carpet-settings-section__sub-button--active{background:var(--accent-color, #007aff);border-color:var(--accent-color, #007aff);color:#fff}.carpet-settings-section__sub-button:disabled{opacity:.5;cursor:not-allowed}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.carpet-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000);unicode-bidi:plaintext}.quick-settings-section{display:flex;flex-direction:column;gap:.75rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.quick-settings-section__item--child{margin-left:1rem;padding-left:.75rem;border-left:2px solid var(--accent-color, #007aff)}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.quick-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.quick-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.quick-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:.5rem}.quick-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.quick-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.quick-settings-section__action-button:active{transform:scale(.98)}.quick-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.quick-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.volume-section{display:flex;flex-direction:column;gap:.75rem}.volume-section__row{display:flex;flex-direction:row;gap:1rem}.volume-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:.5rem 0}.volume-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.volume-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.volume-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.volume-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section__select{width:100%;padding:.5rem 2.5rem .5rem .75rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:1rem}.volume-section__select:hover{border-color:var(--accent-color, #007aff)}.volume-section__select:focus{outline:none;border-color:var(--accent-color, #007aff);box-shadow:0 0 0 2px #007aff33}.volume-section__select:disabled{opacity:.5;cursor:not-allowed}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}[dir=rtl] .volume-section__tooltip{transform:translate(50%)}.volume-section__tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.floor-settings-section{display:flex;flex-direction:column;gap:.75rem}.floor-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.floor-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.floor-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.floor-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.floor-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.floor-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.floor-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.floor-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.floor-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.edge-corner-section{display:flex;flex-direction:column;gap:.75rem}.edge-corner-section__sub-settings{display:flex;flex-direction:column;gap:.5rem;margin-top:-.25rem}.edge-corner-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.edge-corner-section__item--indented{padding-left:1rem;border-left:2px solid var(--border-color, #e0e0e0);margin-left:.5rem}.edge-corner-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.edge-corner-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.edge-corner-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.edge-corner-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.edge-corner-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.edge-corner-section__select:focus{border-color:var(--accent-color, #007aff)}.edge-corner-section__select:hover{background:var(--surface-tertiary, #eee)}.edge-corner-section__select:disabled{opacity:.5;cursor:not-allowed}.dock-settings-section{display:flex;flex-direction:column;gap:.75rem}.dock-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.dock-settings-section__item--select,.dock-settings-section__item--segmented{flex-direction:column;align-items:stretch;gap:.5rem}.dock-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.dock-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.dock-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.dock-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.dock-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.dock-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.dock-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.dock-settings-section__button{padding:.5rem 1rem;font-size:.8125rem;font-weight:500;border:1px solid var(--accent-color, #007aff);border-radius:.5rem;background:var(--accent-color, #007aff);color:#fff;cursor:pointer;transition:all .2s ease;white-space:nowrap}.dock-settings-section__button:hover:not(:disabled){background:var(--accent-color-hover, #0056b3)}.dock-settings-section__button:disabled{opacity:.5;cursor:not-allowed}.map-settings-section{display:flex;flex-direction:column;gap:.75rem}.map-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.map-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.map-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.map-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.map-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.map-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.map-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.map-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.map-settings-section__select:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__actions{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;padding-top:.75rem;border-top:1px solid var(--border-color, #e0e0e0)}.map-settings-section__actions-label{font-size:.75rem;font-weight:500;color:var(--text-secondary, #666);text-transform:uppercase;letter-spacing:.5px}.map-settings-section__actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:.5rem}.map-settings-section__action-button{display:flex;flex-direction:column;align-items:center;gap:.375rem;padding:.75rem .5rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-settings-section__action-button:hover{background:var(--surface-tertiary, #eee);border-color:var(--accent-color, #007aff)}.map-settings-section__action-button:active{transform:scale(.98)}.map-settings-section__action-button:disabled{opacity:.5;cursor:not-allowed}.map-settings-section__action-icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.map-settings-section__action-label{font-size:.75rem;font-weight:500;color:var(--text-primary, #333);text-align:center;line-height:1.2}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}[dir=rtl] .settings-panel__sections{padding-right:0;padding-left:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}`;
xw();
class LN extends HTMLElement {
  _root = null;
  _hass;
  _config;
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const i = document.createElement("style");
    i.textContent = jN, this.shadowRoot.appendChild(i);
  }
  setConfig(i) {
    const o = Tk(i);
    if (!o.valid)
      throw new Error(`Invalid configuration: ${o.errors.join("; ")}`);
    o.warnings.length > 0 && te.warn("Configuration warnings:", o.warnings), this._config = i, this.render();
  }
  set hass(i) {
    console.debug("Received Home Assistant instance:", i), this._hass = i, this.render();
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this._root && (this._root.unmount(), this._root = null);
  }
  render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;
    let i = this.shadowRoot.querySelector("#react-root");
    i || (i = document.createElement("div"), i.id = "react-root", this.shadowRoot.appendChild(i)), this._root || (this._root = vb.createRoot(i)), this._root.render(
      /* @__PURE__ */ g.jsx(Nn.StrictMode, { children: /* @__PURE__ */ g.jsx(Y2, { children: /* @__PURE__ */ g.jsx(DN, { hass: this._hass, config: this._config }) }) })
    );
  }
  getCardSize() {
    return 4;
  }
  static getStubConfig() {
    return {
      type: "custom:dreame-vacuum-map-card",
      entity: "vacuum.dreame_vacuum",
      title: "Dreame Vacuum"
    };
  }
}
customElements.define("dreame-vacuum-map-card", LN);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "dreame-vacuum-map-card",
  name: "Dreame Vacuum Map Card",
  description: "Custom vacuum map card for Dreame vacuum cleaners"
});
te.info("Dreame Vacuum Map Card (React) loaded");
export {
  LN as default
};
