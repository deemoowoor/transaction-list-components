import React from 'react';
import { v4 } from 'uuid';
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { Typography, LinearProgress, Card, CardContent, CardHeader } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Query } from '@apollo/react-components';
import { gql, useMutation } from '@apollo/client';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import HourglassEmptyOutlined from '@material-ui/icons/HourglassEmptyOutlined';
import Error from '@material-ui/icons/Error';
import { useStaticQuery, graphql } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Typography$1 from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BuildIcon from '@material-ui/icons/Build';

function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (Array.isArray(mix)) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

function clsx () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x;
		}
	}
	return str;
}

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var useStyles = makeStyles(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  };
});

var AddTransactionFormDialog = function AddTransactionFormDialog(props) {
  var classes = useStyles();

  var currencyList = props.currencyList,
      open = props.open,
      _onSubmit = props.onSubmit,
      onClose = props.onClose;

  var _React$useState = React.useState(currencyList[0]),
      _React$useState2 = slicedToArray(_React$useState, 2),
      currency = _React$useState2[0],
      setCurrency = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = slicedToArray(_React$useState3, 2),
      amount = _React$useState4[0],
      setAmount = _React$useState4[1];

  var onCurrencySelected = function onCurrencySelected(event) {
    setCurrency(event.target.value);
  };

  return React.createElement(
    Dialog,
    { open: open, onClose: onClose, "aria-labelledby": "form-dialog-title" },
    React.createElement(
      DialogTitle,
      { id: "form-dialog-title" },
      "Add transaction"
    ),
    React.createElement(
      DialogContent,
      null,
      React.createElement(
        "form",
        {
          onSubmit: function onSubmit(event) {
            event.preventDefault();
            return _onSubmit({ event: event, uuid: v4(), currency: currency, amount: amount });
          }
        },
        React.createElement(
          FormControl,
          {
            className: clsx(classes.formControl, classes.inlineForm)
          },
          React.createElement(TextField, {
            id: "amount",
            label: "Amount",
            value: amount,
            onChange: function onChange(event) {
              return setAmount(event.target.value);
            }
          })
        ),
        React.createElement(
          FormControl,
          {
            className: clsx(classes.formControl, classes.inlineForm)
          },
          React.createElement(
            InputLabel,
            { id: "filter-select-outlined-label" },
            "Currency"
          ),
          React.createElement(
            Select,
            {
              labelId: "currency-select-outlined-label",
              id: "currency-select-outlined",
              onChange: onCurrencySelected,
              value: currency
            },
            currencyList.map(function (code) {
              return React.createElement(
                MenuItem,
                { key: code, value: code },
                code
              );
            })
          )
        )
      )
    ),
    React.createElement(
      DialogActions,
      null,
      React.createElement(
        Button,
        {
          variant: "contained",
          color: "primary",
          onClick: function onClick(event) {
            return _onSubmit({ event: event, uuid: v4(), currency: currency, amount: amount });
          }
        },
        "Add"
      )
    )
  );
};

var useStyles$1 = makeStyles(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  };
});

var EditTransactionFormDialog = function EditTransactionFormDialog(props) {
  var classes = useStyles$1();
  var currencyList = props.currencyList,
      transaction = props.transaction,
      _onSubmit = props.onSubmit,
      open = props.open,
      onClose = props.onClose;

  var _React$useState = React.useState(transaction ? transaction.currency : currencyList[0]),
      _React$useState2 = slicedToArray(_React$useState, 2),
      currency = _React$useState2[0],
      setCurrency = _React$useState2[1];

  var _React$useState3 = React.useState(transaction ? transaction.amount : 0),
      _React$useState4 = slicedToArray(_React$useState3, 2),
      amount = _React$useState4[0],
      setAmount = _React$useState4[1];

  React.useEffect(function () {
    if (transaction) {
      setCurrency(transaction.currency);
      setAmount(transaction.amount);
    }
  }, [transaction]);

  var onCurrencySelected = function onCurrencySelected(event) {
    setCurrency(event.target.value);
  };

  if (!open) {
    return null;
  }

  return React.createElement(
    Dialog,
    { open: open, onClose: onClose, "aria-labelledby": "form-dialog-title" },
    React.createElement(
      DialogTitle,
      { id: "form-dialog-title" },
      "Edit transaction"
    ),
    React.createElement(
      DialogContent,
      null,
      React.createElement(
        "form",
        {
          onSubmit: function onSubmit(event) {
            event.preventDefault();
            return _onSubmit({ event: event, id: transaction.id, uuid: transaction.uuid, currency: currency, amount: amount });
          }
        },
        React.createElement(
          FormControl,
          {
            className: clsx(classes.formControl, classes.inlineForm)
          },
          React.createElement(TextField, {
            id: "amount",
            label: "Amount",
            value: amount,
            onChange: function onChange(event) {
              return setAmount(event.target.value);
            }
          })
        ),
        React.createElement(
          FormControl,
          {
            className: clsx(classes.formControl, classes.inlineForm)
          },
          React.createElement(
            InputLabel,
            { id: "filter-select-outlined-label" },
            "Currency"
          ),
          React.createElement(
            Select,
            {
              labelId: "currency-select-outlined-label",
              id: "currency-select-outlined",
              onChange: onCurrencySelected,
              value: currency
            },
            currencyList.map(function (code) {
              return React.createElement(
                MenuItem,
                { key: code, value: code },
                code
              );
            })
          )
        )
      )
    ),
    React.createElement(
      DialogActions,
      null,
      React.createElement(
        Button,
        {
          variant: "contained",
          color: "primary",
          onClick: function onClick(event) {
            return _onSubmit({
              event: event,
              id: transaction.id,
              uuid: transaction.uuid,
              currency: currency,
              amount: amount
            });
          }
        },
        "Edit"
      )
    )
  );
};

var styles = function styles(theme) {
  return {
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box"
    },
    tableRow: {
      cursor: "pointer"
    },
    tableRowHover: {
      "&:hover": {
        backgroundColor: theme.palette.grey[200]
      }
    },
    tableCell: {
      flex: 1,
      padding: "12px"
    },
    checkboxCell: {
      maxWidth: "50px",
      padding: "1px 0 0 0"
    },
    noClick: {
      cursor: "initial"
    }
  };
};

var EnhancedVirtualizedTable = function (_React$Component) {
  inherits(EnhancedVirtualizedTable, _React$Component);

  function EnhancedVirtualizedTable(props) {
    classCallCheck(this, EnhancedVirtualizedTable);

    var _this = possibleConstructorReturn(this, (EnhancedVirtualizedTable.__proto__ || Object.getPrototypeOf(EnhancedVirtualizedTable)).call(this, props));

    _this.headerRowRenderer = function (_ref) {
      var readonly = _ref.readonly,
          numSelected = _ref.numSelected,
          rowCount = _ref.rowCount,
          className = _ref.className,
          style = _ref.style,
          onSelectAllClick = _ref.onSelectAllClick,
          columns = _ref.columns;
      var _this$props = _this.props,
          headerHeight = _this$props.headerHeight,
          classes = _this$props.classes;


      return React.createElement(
        "div",
        { className: className, role: "row", style: style },
        !readonly ? React.createElement(
          TableCell,
          {
            component: "div",
            className: clsx(classes.tableCell, classes.flexContainer, classes.noClick, classes.checkboxCell),
            variant: "head",
            style: { height: headerHeight },
            align: "left",
            key: "checkbox-cell",
            padding: "checkbox"
          },
          React.createElement(Checkbox, {
            indeterminate: numSelected > 0 && numSelected < rowCount,
            checked: rowCount > 0 && numSelected === rowCount,
            onChange: onSelectAllClick,
            inputProps: { "aria-label": "select all" }
          })
        ) : null,
        columns
      );
    };

    _this.headerСellRenderer = function (_ref2) {
      var columnIndex = _ref2.columnIndex,
          onRequestSort = _ref2.onRequestSort,
          orderBy = _ref2.orderBy,
          order = _ref2.order;
      var _this$props2 = _this.props,
          headerHeight = _this$props2.headerHeight,
          columns = _this$props2.columns,
          classes = _this$props2.classes;


      var headCell = columns[columnIndex];

      var createSortHandler = function createSortHandler(property) {
        return function (event) {
          onRequestSort(event, property);
        };
      };

      return React.createElement(
        TableCell,
        {
          component: "div",
          className: clsx(classes.tableCell, classes.flexContainer, classes.noClick),
          variant: "head",
          style: { height: headerHeight },
          align: headCell.numeric || false ? "right" : "left",
          padding: headCell.disablePadding ? "none" : "default",
          sortDirection: orderBy === headCell.dataKey ? order : false
        },
        React.createElement(
          TableSortLabel,
          {
            active: orderBy === headCell.dataKey,
            direction: orderBy === headCell.dataKey ? order : "asc",
            onClick: createSortHandler(headCell.dataKey)
          },
          headCell.label,
          orderBy === headCell.dataKey ? React.createElement(
            "span",
            { className: classes.visuallyHidden },
            order === "desc" ? "sorted descending" : "sorted ascending"
          ) : null
        )
      );
    };

    _this.rowRenderer = function (_ref3) {
      var className = _ref3.className,
          columns = _ref3.columns,
          key = _ref3.key,
          rowIndex = _ref3.index,
          rowData = _ref3.rowData,
          style = _ref3.style,
          onRowClick = _ref3.onRowClick;
      var _this$props3 = _this.props,
          readonly = _this$props3.readonly,
          classes = _this$props3.classes;


      if (!rowData) {
        return null;
      }

      var isItemSelected = !readonly && _this.isSelected(rowData.id);

      return React.createElement(
        TableRow,
        {
          component: "div",
          hover: true,
          onClick: function onClick(event) {
            return onRowClick({ event: event, index: rowIndex, rowData: rowData });
          },
          role: "checkbox",
          "aria-checked": isItemSelected,
          tabIndex: -1,
          key: key,
          selected: isItemSelected,
          className: className,
          style: style
        },
        !readonly ? React.createElement(
          TableCell,
          {
            component: "div",
            padding: "checkbox",
            className: clsx(classes.tableCell, classes.flexContainer, classes.checkboxCell)
          },
          React.createElement(Checkbox, {
            checked: isItemSelected,
            inputProps: { "aria-labelledby": "enhanced-table-checkbox-0" }
          })
        ) : null,
        columns
      );
    };

    _this.cellRenderer = function (_ref4) {
      var cellData = _ref4.cellData,
          columnIndex = _ref4.columnIndex,
          columnsSpec = _ref4.columnsSpec,
          classes = _ref4.classes;

      return React.createElement(
        TableCell,
        {
          key: columnIndex,
          component: "div",
          id: "enhanced-table-checkbox-" + columnIndex,
          scope: "row",
          padding: "default",
          align: columnsSpec[columnIndex].numeric ? "right" : "left",
          className: clsx(classes.tableCell, classes.flexContainer)
        },
        cellData
      );
    };

    _this.isSelected = function (id) {
      return _this.props.selected.indexOf(id) !== -1;
    };

    _this.getRowClassName = function (_ref5) {
      var index = _ref5.index;
      var _this$props4 = _this.props,
          classes = _this$props4.classes,
          onRowClick = _this$props4.onRowClick;


      return clsx(classes.tableRow, classes.flexContainer, defineProperty({}, classes.tableRowHover, index !== -1 && onRowClick != null));
    };

    _this.state = { selected: [] };
    return _this;
  }

  createClass(EnhancedVirtualizedTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          rows = _props.rows,
          rowCount = _props.rowCount,
          rowsOnPage = _props.rowsOnPage,
          order = _props.order,
          orderBy = _props.orderBy,
          onRequestSort = _props.onRequestSort,
          onRowClick = _props.onRowClick,
          onSelectAllClick = _props.onSelectAllClick,
          readonly = _props.readonly,
          rowHeight = _props.rowHeight,
          headerHeight = _props.headerHeight,
          styles = _props.styles,
          classes = _props.classes,
          selected = _props.selected,
          tableProps = objectWithoutProperties(_props, ["columns", "rows", "rowCount", "rowsOnPage", "order", "orderBy", "onRequestSort", "onRowClick", "onSelectAllClick", "readonly", "rowHeight", "headerHeight", "styles", "classes", "selected"]);


      return React.createElement(
        AutoSizer,
        null,
        function (_ref6) {
          var height = _ref6.height,
              width = _ref6.width;
          return React.createElement(
            Table,
            _extends({
              height: height,
              width: width,
              rowHeight: rowHeight,
              gridStyle: {
                direction: "inherit"
              },
              headerHeight: headerHeight,
              className: classes.table,
              rowGetter: function rowGetter(_ref7) {
                var index = _ref7.index;
                return rows[index];
              },
              rowCount: rowsOnPage,
              rowClassName: _this2.getRowClassName,
              onRowClick: onRowClick,
              rowRenderer: function rowRenderer(rowProps) {
                return _this2.rowRenderer(_extends({
                  columnsSpec: columns
                }, rowProps));
              },
              headerRowRenderer: function headerRowRenderer(headerRowProps) {
                return _this2.headerRowRenderer(_extends({
                  readonly: readonly,
                  rowCount: rowsOnPage,
                  onSelectAllClick: onSelectAllClick,
                  numSelected: selected.length,
                  columnsSpec: columns
                }, headerRowProps));
              }
            }, tableProps),
            columns.map(function (_ref8, index) {
              var dataKey = _ref8.dataKey,
                  other = objectWithoutProperties(_ref8, ["dataKey"]);

              return React.createElement(Column, _extends({
                key: dataKey,
                headerRenderer: function headerRenderer(headerProps) {
                  return _this2.headerСellRenderer(_extends({}, headerProps, {
                    columnIndex: index,
                    onSelectAllClick: onSelectAllClick,
                    onRequestSort: onRequestSort,
                    readonly: readonly,
                    orderBy: orderBy,
                    order: order
                  }));
                },
                cellRenderer: function cellRenderer(cellProps) {
                  return _this2.cellRenderer(_extends({
                    classes: classes,
                    columnsSpec: columns
                  }, cellProps));
                },
                className: classes.flexContainer,
                dataKey: dataKey,
                flexGrow: 1
              }, other));
            })
          );
        }
      );
    }
  }]);
  return EnhancedVirtualizedTable;
}(React.Component);

EnhancedVirtualizedTable.defaultProps = {
  headerHeight: 48,
  rowHeight: 48
};


var EnhancedTable = withStyles(styles)(EnhancedVirtualizedTable);

var useToolbarStyles = makeStyles(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.8)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: "1 1 100%"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  };
});

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var classes = useToolbarStyles();
  var numSelected = props.numSelected,
      readonly = props.readonly,
      onDeleteAction = props.onDeleteAction,
      onFilterSelected = props.onFilterSelected,
      onShowAddDialog = props.onShowAddDialog,
      onShowEditDialog = props.onShowEditDialog,
      filterSelectList = props.filterSelectList,
      filterTitle = props.filterTitle,
      filterValue = props.filterValue;


  return React.createElement(
    Toolbar,
    {
      className: clsx(classes.root, defineProperty({}, classes.highlight, !readonly && numSelected > 0))
    },
    !readonly && numSelected > 0 ? React.createElement(
      Typography,
      {
        className: classes.title,
        color: "inherit",
        variant: "subtitle1",
        component: "div"
      },
      numSelected,
      " selected"
    ) : React.createElement(
      Typography,
      {
        className: classes.title,
        variant: "h6",
        id: "tableTitle",
        component: "div"
      },
      "Transactions"
    ),
    !readonly && numSelected === 0 ? React.createElement(
      Tooltip,
      { title: "Add" },
      React.createElement(
        IconButton,
        {
          "aria-label": "add",
          onClick: onShowAddDialog
        },
        React.createElement(AddIcon, { color: "action" })
      )
    ) : null,
    !readonly && numSelected === 1 ? React.createElement(
      Tooltip,
      { title: "Edit" },
      React.createElement(
        IconButton,
        {
          "aria-label": "Edit",
          onClick: onShowEditDialog
        },
        React.createElement(EditIcon, { color: "action" })
      )
    ) : null,
    !readonly && numSelected > 0 ? React.createElement(
      Tooltip,
      { title: "Delete" },
      React.createElement(
        IconButton,
        { "aria-label": "delete", onClick: onDeleteAction },
        React.createElement(DeleteIcon, null)
      )
    ) : React.createElement(
      React.Fragment,
      null,
      React.createElement(FilterListIcon, { key: "icon", title: filterTitle }),
      React.createElement(
        FormControl,
        { className: classes.formControl },
        React.createElement(
          InputLabel,
          { id: "filter-select-outlined-label" },
          filterTitle
        ),
        React.createElement(
          Select,
          {
            labelId: "filter-select-outlined-label",
            id: "filter-select-outlined",
            value: filterValue || "",
            onChange: onFilterSelected,
            label: filterTitle
          },
          React.createElement(
            MenuItem,
            { key: "empty-menu-item", value: "" },
            React.createElement(
              "em",
              null,
              "None"
            )
          ),
          filterSelectList.map(function (code) {
            return React.createElement(
              MenuItem,
              { key: code, value: code },
              code
            );
          })
        )
      )
    )
  );
};

var _templateObject = taggedTemplateLiteral(["\n  query TransactionConnection(\n    $page: ID!\n    $pageSize: Int!\n    $order: String\n    $orderBy: String\n    $filter: String\n  ) {\n    transactionConnection(\n      page: $page\n      pageSize: $pageSize\n      order: $order\n      orderBy: $orderBy\n      filter: $filter\n    ) {\n      edges {\n        node {\n          id\n          uuid\n          amount\n          currency\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n      }\n    }\n    currencies {\n      code\n    }\n  }\n"], ["\n  query TransactionConnection(\n    $page: ID!\n    $pageSize: Int!\n    $order: String\n    $orderBy: String\n    $filter: String\n  ) {\n    transactionConnection(\n      page: $page\n      pageSize: $pageSize\n      order: $order\n      orderBy: $orderBy\n      filter: $filter\n    ) {\n      edges {\n        node {\n          id\n          uuid\n          amount\n          currency\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n      }\n    }\n    currencies {\n      code\n    }\n  }\n"]),
    _templateObject2 = taggedTemplateLiteral(["\n  mutation AddTransaction($uuid: String!, $amount: Float!, $currency: String!) {\n    addTransaction(uuid: $uuid, amount: $amount, currency: $currency) {\n      id\n      uuid\n      amount\n      currency\n    }\n  }\n"], ["\n  mutation AddTransaction($uuid: String!, $amount: Float!, $currency: String!) {\n    addTransaction(uuid: $uuid, amount: $amount, currency: $currency) {\n      id\n      uuid\n      amount\n      currency\n    }\n  }\n"]),
    _templateObject3 = taggedTemplateLiteral(["\n  mutation UpdateTransaction(\n    $id: ID!\n    $uuid: ID!\n    $amount: Float!\n    $currency: String!\n  ) {\n    updateTransaction(\n      id: $id\n      uuid: $uuid\n      amount: $amount\n      currency: $currency\n    ) {\n      id\n      uuid\n      amount\n      currency\n    }\n  }\n"], ["\n  mutation UpdateTransaction(\n    $id: ID!\n    $uuid: ID!\n    $amount: Float!\n    $currency: String!\n  ) {\n    updateTransaction(\n      id: $id\n      uuid: $uuid\n      amount: $amount\n      currency: $currency\n    ) {\n      id\n      uuid\n      amount\n      currency\n    }\n  }\n"]),
    _templateObject4 = taggedTemplateLiteral(["\n  mutation DeleteTransactionsBulk($idList: [ID!]) {\n    deleteTransactionsBulk(idList: $idList) {\n      ok\n    }\n  }\n"], ["\n  mutation DeleteTransactionsBulk($idList: [ID!]) {\n    deleteTransactionsBulk(idList: $idList) {\n      ok\n    }\n  }\n"]);

var QUERY_TRANSACTIONS_AND_CURRENCIES = gql(_templateObject);

var ADD_TRANSACTION = gql(_templateObject2);

var UPDATE_TRANSACTION = gql(_templateObject3);

var DELETE_BULK_TRANSACTIONS = gql(_templateObject4);

var columns = [{
  dataKey: "id",
  numeric: false,
  disablePadding: false,
  label: "ID",
  width: 200
}, {
  dataKey: "amount",
  numeric: true,
  disablePadding: false,
  label: "Amount",
  width: 200
}, {
  dataKey: "currency",
  numeric: false,
  disablePadding: false,
  label: "Currency",
  width: 200
}];

var LoadingCard = function LoadingCard() {
  return React.createElement(
    Card,
    { className: "rotate-div" },
    React.createElement(CardHeader, {
      avatar: React.createElement(HourglassEmptyOutlined, { color: "primary", className: "rotate-infinite" }),
      title: "Transactions list loading..."
    }),
    React.createElement(
      CardContent,
      null,
      React.createElement(
        Typography,
        null,
        "Please, wait..."
      )
    ),
    React.createElement(LinearProgress, { color: "primary" })
  );
};

var ErrorCard = function ErrorCard(_ref) {
  var error = _ref.error;
  return React.createElement(
    Card,
    { className: "rotate-div" },
    React.createElement(CardHeader, {
      avatar: React.createElement(Error, { color: "secondary" }),
      title: "Loading transactions list failed!"
    }),
    React.createElement(
      CardContent,
      null,
      React.createElement(
        Typography,
        null,
        "Error: ",
        error || "no data"
      )
    )
  );
};

function TransactionsTableQuery(_ref2) {
  var _this = this;

  var readonly = _ref2.readonly;

  var _React$useState = React.useState("asc"),
      _React$useState2 = slicedToArray(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = React.useState("id"),
      _React$useState4 = slicedToArray(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      _React$useState6 = slicedToArray(_React$useState5, 2),
      page = _React$useState6[0],
      setPage = _React$useState6[1];

  var _React$useState7 = React.useState(50),
      _React$useState8 = slicedToArray(_React$useState7, 2),
      rowsPerPage = _React$useState8[0],
      setRowsPerPage = _React$useState8[1];

  var _React$useState9 = React.useState([]),
      _React$useState10 = slicedToArray(_React$useState9, 2),
      selected = _React$useState10[0],
      setSelected = _React$useState10[1];

  var _React$useState11 = React.useState(400),
      _React$useState12 = slicedToArray(_React$useState11, 2),
      windowInnerHeight = _React$useState12[0],
      setWindowInnerHeight = _React$useState12[1];

  var _React$useState13 = React.useState(false),
      _React$useState14 = slicedToArray(_React$useState13, 2),
      snackbarOpen = _React$useState14[0],
      setSnackbarOpen = _React$useState14[1];

  var _React$useState15 = React.useState(false),
      _React$useState16 = slicedToArray(_React$useState15, 2),
      showAddForm = _React$useState16[0],
      setShowAddForm = _React$useState16[1];

  var _React$useState17 = React.useState(false),
      _React$useState18 = slicedToArray(_React$useState17, 2),
      showEditForm = _React$useState18[0],
      setShowEditForm = _React$useState18[1];

  var _useMutation = useMutation(ADD_TRANSACTION),
      _useMutation2 = slicedToArray(_useMutation, 2),
      addTransaction = _useMutation2[0],
      _addData = _useMutation2[1]._addData;

  var _useMutation3 = useMutation(UPDATE_TRANSACTION),
      _useMutation4 = slicedToArray(_useMutation3, 2),
      updateTransaction = _useMutation4[0],
      _updateData = _useMutation4[1]._updateData;

  var _useMutation5 = useMutation(DELETE_BULK_TRANSACTIONS),
      _useMutation6 = slicedToArray(_useMutation5, 2),
      deleteTransactions = _useMutation6[0],
      _deleteData = _useMutation6[1]._deleteData;

  var _React$useState19 = React.useState(""),
      _React$useState20 = slicedToArray(_React$useState19, 2),
      filter = _React$useState20[0],
      setFilter = _React$useState20[1];

  React.useEffect(function () {
    if (window) {
      setWindowInnerHeight(window.innerHeight);
    }
  }, []);

  var updateWindowDimensions = function updateWindowDimensions() {
    setWindowInnerHeight(window.innerHeight);
  };

  React.useEffect(function () {
    window.addEventListener("resize", updateWindowDimensions);
  });

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    if (typeof event.target.value === "string") {
      setRowsPerPage(parseInt(event.target.value, 50));
    } else {
      setRowsPerPage(event.target.value);
    }

    setPage(0);
  };

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  var handleRowClick = function handleRowClick(_ref3) {
    var rowData = _ref3.rowData;

    var newSelected = [];
    var selectedIndex = selected.indexOf(rowData.id);

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, rowData.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var handleDeleteAction = function () {
    var _ref4 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, refetch) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return deleteTransactions({ variables: { idList: selected } });

            case 2:
              result = _context.sent;

              console.log("handleDeleteAction", result);
              setSnackbarOpen(true);
              setSelected([]);
              refetch();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function handleDeleteAction(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleAddTransaction = function () {
    var _ref5 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref6, refetch) {
      var event = _ref6.event,
          uuid = _ref6.uuid,
          currency = _ref6.currency,
          amount = _ref6.amount;
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return addTransaction({
                variables: { uuid: uuid, currency: currency, amount: parseFloat(amount) }
              });

            case 2:
              result = _context2.sent;

              console.log("handleAddTransaction", result);
              setSnackbarOpen(true);
              refetch();
              setShowAddForm(false);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function handleAddTransaction(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleUpdateTransaction = function () {
    var _ref7 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref8, refetch) {
      var event = _ref8.event,
          id = _ref8.id,
          uuid = _ref8.uuid,
          currency = _ref8.currency,
          amount = _ref8.amount;
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return updateTransaction({
                variables: { id: id, uuid: uuid, currency: currency, amount: parseFloat(amount) }
              });

            case 2:
              result = _context3.sent;

              console.log("handleUpdateTransaction", result);
              setSnackbarOpen(true);
              refetch();
              setShowEditForm(false);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function handleUpdateTransaction(_x5, _x6) {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleFilterSelected = function handleFilterSelected(event) {
    setFilter(event.target.value);
    setPage(0);
  };

  var handleSnackbarClose = function handleSnackbarClose(_event) {
    setSnackbarOpen(false);
  };

  return React.createElement(
    Query,
    {
      query: QUERY_TRANSACTIONS_AND_CURRENCIES,
      variables: { page: page, pageSize: rowsPerPage, order: order, orderBy: orderBy, filter: filter }
    },
    function (result) {
      var error = result.error,
          data = result.data,
          loading = result.loading,
          refetch = result.refetch;

      if (loading) {
        return React.createElement(LoadingCard, null);
      }

      if (!data || !data.transactionConnection.edges || error) {
        if (error) {
          console.error(error);
        }
        return React.createElement(ErrorCard, { error: error });
      }

      var rows = data.transactionConnection.edges.map(function (edge) {
        return edge.node;
      });
      var totalCount = data.transactionConnection.pageInfo.totalCount;

      var currencies = data.currencies.map(function (i) {
        return i.code;
      });

      var handleSelectAllClick = function handleSelectAllClick(event) {
        if (event.target.checked) {
          var newSelecteds = rows.map(function (item) {
            return item.id;
          });
          setSelected(newSelecteds);
          return;
        }

        setSelected([]);
      };

      var otherElementsHeight = 172;

      var rowsOnPage = Math.min(rowsPerPage, totalCount - page * rowsPerPage);

      return React.createElement(
        TableContainer,
        null,
        React.createElement(EnhancedTableToolbar, {
          readonly: readonly,
          numSelected: selected.length,
          onDeleteAction: function onDeleteAction(event) {
            return handleDeleteAction(event, refetch);
          },
          onFilterSelected: handleFilterSelected,
          onShowAddDialog: function onShowAddDialog() {
            return setShowAddForm(true);
          },
          onShowEditDialog: function onShowEditDialog() {
            return setShowEditForm(true);
          },
          filterSelectList: currencies,
          filterValue: filter,
          filterTitle: "Currency"
        }),
        React.createElement(
          Paper,
          {
            style: {
              height: windowInnerHeight - otherElementsHeight,
              width: "100%"
            }
          },
          React.createElement(EnhancedTable, {
            rows: rows,
            rowCount: totalCount,
            rowsOnPage: rowsOnPage,
            columns: columns,
            order: order,
            orderBy: orderBy,
            onRequestSort: handleRequestSort,
            onRowClick: handleRowClick,
            onSelectAllClick: handleSelectAllClick,
            readonly: readonly,
            selected: selected
          })
        ),
        React.createElement(TablePagination, {
          rowsPerPageOptions: [10, 50, 100, 500, 1000, 10000],
          component: "div",
          count: totalCount,
          rowsPerPage: rowsPerPage,
          page: page,
          onChangePage: handleChangePage,
          onChangeRowsPerPage: handleChangeRowsPerPage
        }),
        React.createElement(
          Snackbar,
          {
            open: snackbarOpen,
            autoHideDuration: 6000,
            onClose: handleSnackbarClose
          },
          React.createElement(
            Typography,
            null,
            "Action completed successfully"
          )
        ),
        React.createElement(AddTransactionFormDialog, {
          open: !readonly && selected.length === 0 && showAddForm,
          currencyList: currencies,
          onSubmit: function onSubmit(eventData) {
            return handleAddTransaction(eventData, refetch);
          },
          onClose: function onClose() {
            return setShowAddForm(false);
          }
        }),
        React.createElement(EditTransactionFormDialog, {
          open: !readonly && selected.length === 1 && showEditForm,
          currencyList: currencies,
          transaction: selected.length === 1 ? rows.filter(function (r) {
            return r.id === selected[0];
          })[0] : null,
          onSubmit: function onSubmit(eventData) {
            return handleUpdateTransaction(eventData, refetch);
          },
          onClose: function onClose() {
            return setShowEditForm(false);
          }
        })
      );
    }
  );
}

var _templateObject$1 = taggedTemplateLiteral(["\n    query {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "], ["\n    query {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "]);

var styles$1 = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  list: {
    width: 250
  }
};

function DenseAppBar(props) {
  var data = useStaticQuery(graphql(_templateObject$1));

  var classes = props.classes,
      title = props.title;

  var _React$useState = React.useState(false),
      _React$useState2 = slicedToArray(_React$useState, 2),
      menu = _React$useState2[0],
      setMenu = _React$useState2[1];

  var toggleMenu = function toggleMenu(open) {
    return function (event) {
      if (event.type === "keyDown" && (event.key === "Tab" || event.key === "Shift")) {
        return;
      }
      setMenu(open);
    };
  };

  var list = function list() {
    return React.createElement(
      "div",
      {
        className: clsx(classes.list),
        role: "presentation",
        onClick: toggleMenu(false),
        onKeyDown: toggleMenu(false)
      },
      React.createElement(
        List,
        null,
        React.createElement(
          ListItem,
          { button: true, component: "a", href: "/", key: "Customer's page" },
          React.createElement(AssessmentIcon, null),
          React.createElement(ListItemText, { primary: "Customer's page" })
        ),
        React.createElement(
          ListItem,
          { button: true, component: "a", href: "/backoffice", key: "Backoffice" },
          React.createElement(BuildIcon, null),
          React.createElement(ListItemText, { primary: "Backoffice" })
        )
      )
    );
  };

  return React.createElement(
    "div",
    { className: classes.root },
    React.createElement(
      Drawer,
      { open: menu, onClose: toggleMenu(false) },
      list()
    ),
    React.createElement(
      AppBar,
      { position: "static" },
      React.createElement(
        Toolbar,
        { variant: "dense" },
        React.createElement(
          IconButton,
          {
            className: classes.menuButton,
            color: "inherit",
            "aria-label": "Menu",
            onClick: toggleMenu(true)
          },
          React.createElement(MenuIcon, null)
        ),
        React.createElement(
          Typography$1,
          { variant: "h6", color: "inherit" },
          data.site.siteMetadata.title,
          " : ",
          title
        )
      )
    )
  );
}

var index = withStyles(styles$1)(DenseAppBar);

export { AddTransactionFormDialog, EditTransactionFormDialog, EnhancedTable, EnhancedTableToolbar, index as NavBar, TransactionsTableQuery };
//# sourceMappingURL=index.es.js.map
