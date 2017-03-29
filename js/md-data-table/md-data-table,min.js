import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'md-backdropmd-edit-dialog-backdrop': {
    'zIndex': '80'
  },
  'md-edit-dialog': {
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitFlexDirection': 'column',
    'MsFlexDirection': 'column',
    'flexDirection': 'column',
    'position': 'fixed',
    'zIndex': '81',
    'backgroundColor': '#f9f9f9',
    'borderRadius': '2px',
    'cursor': 'default'
  },
  'md-edit-dialog>md-content': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'md-edit-dialog>md-content md-title': {
    'color': 'rgba(0, 0, 0, .87)',
    'marginBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'md-edit-dialog>md-content md-input-container': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'md-edit-dialog>md-content md-input-container input': {
    'float': 'none'
  },
  'md-edit-dialog>md-content md-input-container md-errors-spacer': {
    'minHeight': [{ 'unit': 'string', 'value': 'auto' }],
    'minWidth': [{ 'unit': 'string', 'value': 'auto' }],
    'color': 'rgba(0, 0, 0, .54)'
  },
  'md-edit-dialog>md-content md-input-container md-errors-spacer md-char-counter': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'md-edit-dialog>md-content md-input-container [ng-message]': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }]
  },
  'md-edit-dialog>md-actions': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'md-edit-dialog>md-actions md-button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'string', 'value': 'initial' }]
  },
  'md-edit-dialog>md-actions md-button+md-button': {
    'marginLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'md-table-pagination': {
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitAlignItems': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'WebkitJustifyContent': 'flex-end',
    'MsFlexPack': 'end',
    'justifyContent': 'flex-end',
    'WebkitFlexWrap': 'wrap-reverse',
    'MsFlexWrap': 'wrap-reverse',
    'flexWrap': 'wrap-reverse',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': 'rgba(0, 0, 0, .54)',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .12)' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'md-table-pagination md-select': {
    'WebkitJustifyContent': 'flex-end',
    'MsFlexPack': 'end',
    'justifyContent': 'flex-end',
    'minWidth': [{ 'unit': 'px', 'value': 64 }]
  },
  'md-table-pagination md-select:not([disabled]):focus md-select-value': {
    'color': 'rgba(0, 0, 0, .54)'
  },
  'md-table-pagination md-select md-select-value': {
    'WebkitFlex': '0 0 auto',
    'MsFlex': '0 0 auto',
    'flex': '0 0 auto'
  },
  'md-table-pagination md-select md-select-value spanmd-select-icon': {
    'WebkitJustifyContent': 'center',
    'MsFlexPack': 'center',
    'justifyContent': 'center',
    'textAlign': 'center',
    'marginRight': [{ 'unit': 'px', 'value': -6 }]
  },
  'md-table-pagination md-select md-select-value spanmd-select-icon:after': {
    'top': [{ 'unit': 'string', 'value': 'initial' }],
    'WebkitTransform': 'scaleY(0.5) scaleX(1)',
    'transform': 'scaleY(0.5) scaleX(1)'
  },
  'md-table-pagination>*': {
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitAlignItems': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'height': [{ 'unit': 'px', 'value': 56 }]
  },
  'md-table-pagination>buttons:not(:first-child)': {
    'marginLeft': [{ 'unit': 'px', 'value': 32 }]
  },
  'md-table-pagination>limit-select:not(:first-child)': {
    'marginLeft': [{ 'unit': 'px', 'value': 32 }]
  },
  'md-table-pagination>buttons': {
    'marginRight': [{ 'unit': 'px', 'value': -16 }]
  },
  'md-table-pagination>buttons>md-buttonmd-icon-button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'md-table-pagination>buttons>label+md-buttonmd-icon-button': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'md-selectmd-table-select': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'md-selectmd-table-select>md-select-value': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 0 }],
    'minHeight': [{ 'unit': 'px', 'value': 24 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'md-selectmd-table-select>md-select-value>span': {
    'display': 'block',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'WebkitTransform': 'none!important',
    'transform': 'none!important'
  },
  'md-selectmd-table-select>md-select-value>span>md-text': {
    'display': 'inherit',
    'height': [{ 'unit': 'string', 'value': 'inherit' }],
    'WebkitTransform': 'inherit',
    'transform': 'inherit'
  },
  'md-selectmd-table-select>md-select-value>spanmd-select-icon': {
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitAlignItems': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'height': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'md-selectmd-table-select>md-select-value>spanmd-select-icon:after': {
    'top': [{ 'unit': 'string', 'value': 'initial' }]
  },
  'md-select-menu-containermd-pagination-select': {
    'marginLeft': [{ 'unit': 'px', 'value': -2 }],
    'borderRadius': '2px'
  },
  'md-select-menu-containermd-table-select': {
    'marginLeft': [{ 'unit': 'px', 'value': -2 }],
    'borderRadius': '2px'
  },
  'md-select-menu-containermd-pagination-select md-content': {
    'borderRadius': 'inherit'
  },
  'md-select-menu-containermd-pagination-select md-select-menu': {
    'borderRadius': 'inherit'
  },
  'md-select-menu-containermd-table-select md-content': {
    'borderRadius': 'inherit'
  },
  'md-select-menu-containermd-table-select md-select-menu': {
    'borderRadius': 'inherit'
  },
  'md-select-menu-containermd-pagination-select md-content': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'md-select-menu-containermd-table-select md-content': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'md-select-menu-containermd-table-select md-text': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'md-select-menu-containermd-pagination-select md-text': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'md-toolbarmd-table-toolbar': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'md-toolbarmd-table-toolbarmd-default-theme:not(md-menu-toolbar)md-default': {
    'backgroundColor': '#fff',
    'color': 'rgba(0, 0, 0, .87)'
  },
  'md-toolbarmd-table-toolbar:not(md-menu-toolbar)md-default': {
    'backgroundColor': '#fff',
    'color': 'rgba(0, 0, 0, .87)'
  },
  'md-toolbarmd-table-toolbarmd-default-theme:not(md-menu-toolbar)md-default md-button': {
    'color': 'rgba(0, 0, 0, .87)'
  },
  'md-toolbarmd-table-toolbar:not(md-menu-toolbar)md-default md-button': {
    'color': 'rgba(0, 0, 0, .87)'
  },
  'md-toolbarmd-table-toolbar md-toolbar-tools': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'md-toolbarmd-table-toolbar md-toolbar-tools md-icon': {
    'color': 'rgba(0, 0, 0, .54)'
  },
  'md-toolbarmd-table-toolbar md-toolbar-tools>md-buttonmd-icon-button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'md-toolbarmd-table-toolbar md-toolbar-tools>md-buttonmd-icon-button:first-child': {
    'marginLeft': [{ 'unit': 'px', 'value': -12 }]
  },
  'md-toolbarmd-table-toolbar md-toolbar-tools>md-buttonmd-icon-button:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': -12 }]
  },
  'md-card>md-table-container:first-child': {
    'borderTopLeftRadius': '2px',
    'borderTopRightRadius': '2px'
  },
  'md-card>md-toolbarmd-table-toolbar:first-child': {
    'borderTopLeftRadius': '2px',
    'borderTopRightRadius': '2px'
  },
  'md-card>md-table-container:last-child': {
    'borderBottomLeftRadius': '2px',
    'borderBottomRightRadius': '2px'
  },
  'md-card>md-toolbarmd-table-toolbar:last-child': {
    'borderBottomLeftRadius': '2px',
    'borderBottomRightRadius': '2px'
  },
  'md-table-container': {
    'display': 'block',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'overflowX': 'auto',
    'WebkitOverflowScrolling': 'touch'
  },
  'tablemd-table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderSpacing': '0',
    'overflow': 'hidden'
  },
  'tablemd-table theadmd-head>trmd-row': {
    'height': [{ 'unit': 'px', 'value': 56 }]
  },
  'tablemd-table tbodymd-body>trmd-row': {
    'height': [{ 'unit': 'px', 'value': 48 }]
  },
  'tablemd-table tfootmd-foot>trmd-row': {
    'height': [{ 'unit': 'px', 'value': 48 }]
  },
  'tablemd-table theadmd-head+md-table-progress md-progress-linear': {
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  'tablemd-table md-table-progress th': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemd-table md-table-progress th md-progress-linear': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'opacity 1s'
  },
  'tablemd-table md-table-progress th md-progress-linearng-hide': {
    'opacity': '0'
  },
  'tablemd-table md-table-progress th md-progress-linear>md-container': {
    'height': [{ 'unit': 'px', 'value': 3 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'none'
  },
  'tablemd-table md-table-progress th md-progress-linear>md-container>md-bar': {
    'height': [{ 'unit': 'px', 'value': 3 }]
  },
  'tablemd-table thmd-column': {
    'color': 'rgba(0, 0, 0, .54)',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': '700',
    'whiteSpace': 'nowrap'
  },
  'tablemd-table thmd-columnmd-sort': {
    'cursor': 'pointer'
  },
  'tablemd-table thmd-column md-icon': {
    'height': [{ 'unit': 'px', 'value': 16 }],
    'width': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 16 }]
  },
  'tablemd-table thmd-column md-iconmd-sort-icon': {
    'color': 'rgba(0, 0, 0, .26)',
    'opacity': '0',
    'transition': '-webkit-transform .25s, opacity .25s',
    'transition': 'transform .25s, opacity .25s'
  },
  'tablemd-table thmd-column md-iconmd-sort-iconmd-asc': {
    'WebkitTransform': 'rotate(0deg)',
    'transform': 'rotate(0deg)'
  },
  'tablemd-table thmd-column md-iconmd-sort-iconmd-desc': {
    'WebkitTransform': 'rotate(180deg)',
    'transform': 'rotate(180deg)'
  },
  'tablemd-table thmd-column md-icon:not(:first-child)': {
    'marginLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'tablemd-table thmd-column md-icon:not(:last-child)': {
    'marginRight': [{ 'unit': 'px', 'value': 8 }]
  },
  'tablemd-table thmd-columnmd-active': {
    'color': 'rgba(0, 0, 0, .87)'
  },
  'tablemd-table thmd-columnmd-active md-icon': {
    'color': 'rgba(0, 0, 0, .87)'
  },
  'tablemd-table thmd-columnmd-active md-iconmd-sort-icon': {
    'opacity': '1'
  },
  'tablemd-table thmd-column:hover md-iconmd-sort-icon': {
    'opacity': '1'
  },
  'tablemd-table trmd-row[data-ng-repeat]ng-leave': {
    'display': 'none'
  },
  'tablemd-table trmd-row[ng-repeat]ng-leave': {
    'display': 'none'
  },
  'tablemd-table trmd-row[ng\:repeat]ng-leave': {
    'display': 'none'
  },
  'tablemd-table trmd-row[x-ng-repeat]ng-leave': {
    'display': 'none'
  },
  'tablemd-tablemd-row-select tbodymd-body>trmd-row': {
    'transition': 'background-color .2s'
  },
  'tablemd-tablemd-row-select tbodymd-body>trmd-row:not([disabled]):hover': {
    'backgroundColor': '#eee!important'
  },
  'tablemd-tablemd-row-select tbodymd-body>trmd-rowmd-selected': {
    'backgroundColor': '#f5f5f5'
  },
  'tablemd-tablemd-row-select tdmd-cell:first-child': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'tablemd-tablemd-row-select thmd-column:first-child': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'tablemd-tablemd-row-select tdmd-cell:nth-child(2)': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'tablemd-tablemd-row-select thmd-column:nth-child(2)': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'tablemd-tablemd-row-select tdmd-cell:nth-child(n+3):nth-last-child(n+2)': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 56 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemd-tablemd-row-select thmd-column:nth-child(n+3):nth-last-child(n+2)': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 56 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemd-table:not(md-row-select) tdmd-cell:first-child': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'tablemd-table:not(md-row-select) thmd-column:first-child': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }]
  },
  'tablemd-table:not(md-row-select) tdmd-cell:nth-child(n+2):nth-last-child(n+2)': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 56 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemd-table:not(md-row-select) thmd-column:nth-child(n+2):nth-last-child(n+2)': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 56 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemd-table tdmd-cell': {
    'verticalAlign': 'middle',
    'textAlign': 'left'
  },
  'tablemd-table thmd-column': {
    'verticalAlign': 'middle',
    'textAlign': 'left'
  },
  'tablemd-table tdmd-cell>*': {
    'verticalAlign': 'middle'
  },
  'tablemd-table thmd-column>*': {
    'verticalAlign': 'middle'
  },
  'tablemd-table tdmd-cell:last-child': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemd-table thmd-column:last-child': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemd-table tdmd-cellmd-clickable': {
    'cursor': 'pointer'
  },
  'tablemd-table thmd-columnmd-clickable': {
    'cursor': 'pointer'
  },
  'tablemd-table tdmd-cellmd-clickable:focus': {
    'outline': '0'
  },
  'tablemd-table thmd-columnmd-clickable:focus': {
    'outline': '0'
  },
  'tablemd-table tdmd-cellmd-numeric': {
    'textAlign': 'right'
  },
  'tablemd-table thmd-columnmd-numeric': {
    'textAlign': 'right'
  },
  'tablemd-table tdmd-cell md-checkbox': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }]
  },
  'tablemd-table thmd-column md-checkbox': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }]
  },
  'tablemd-table tdmd-cell': {
    'color': 'rgba(0, 0, 0, .87)',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .12)' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'tablemd-table tdmd-cellmd-numeric md-select': {
    'WebkitJustifyContent': 'flex-end',
    'MsFlexPack': 'end',
    'justifyContent': 'flex-end'
  },
  'tablemd-table tdmd-cellmd-numeric md-select md-select-value': {
    'WebkitFlex': '0 0 auto',
    'MsFlex': '0 0 auto',
    'flex': '0 0 auto'
  },
  'tablemd-table tdmd-cellmd-placeholder': {
    'color': 'rgba(0, 0, 0, .26)'
  },
  'tablemd-table tdmd-cell md-select>md-select-value>spanmd-select-icon': {
    'WebkitJustifyContent': 'flex-end',
    'MsFlexPack': 'end',
    'justifyContent': 'flex-end',
    'color': 'rgba(0, 0, 0, .54)',
    'width': [{ 'unit': 'px', 'value': 18 }],
    'textAlign': 'right'
  },
  'tablemd-table tdmd-cell md-select>md-select-value>spanmd-select-icon:after': {
    'WebkitTransform': 'scaleY(0.4) scaleX(0.8)',
    'transform': 'scaleY(0.4) scaleX(0.8)'
  }
});
