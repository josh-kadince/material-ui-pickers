var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as PropTypes from 'prop-types';
import * as React from 'react';
import BasePicker from '../_shared/BasePicker';
import DomainPropTypes from '../constants/prop-types';
import InlineWrapper from '../wrappers/InlineWrapper';
import Calendar from './components/Calendar';
import DatePicker from './DatePicker';
export var DatePickerInline = function (props) {
    var allowKeyboardControl = props.allowKeyboardControl, animateYearScrolling = props.animateYearScrolling, disableFuture = props.disableFuture, disablePast = props.disablePast, format = props.format, forwardedRef = props.forwardedRef, labelFunc = props.labelFunc, leftArrowIcon = props.leftArrowIcon, maxDate = props.maxDate, minDate = props.minDate, initialFocusedDate = props.initialFocusedDate, onChange = props.onChange, openToYearSelection = props.openToYearSelection, renderDay = props.renderDay, rightArrowIcon = props.rightArrowIcon, shouldDisableDate = props.shouldDisableDate, value = props.value, autoOk = props.autoOk, onlyCalendar = props.onlyCalendar, other = __rest(props, ["allowKeyboardControl", "animateYearScrolling", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value", "autoOk", "onlyCalendar"]);
    var ComponentToShow = onlyCalendar ? Calendar : DatePicker;
    return (React.createElement(BasePicker, __assign({}, props, { autoOk: true }), function (_a) {
        var date = _a.date, utils = _a.utils, isAccepted = _a.isAccepted, handleChange = _a.handleChange, handleTextFieldChange = _a.handleTextFieldChange, handleAccept = _a.handleAccept;
        return (React.createElement(InlineWrapper, __assign({ disableFuture: disableFuture, disablePast: disablePast, format: format || utils.dateFormat, labelFunc: labelFunc, maxDate: maxDate, minDate: minDate, onChange: handleTextFieldChange, innerRef: forwardedRef, value: value, isAccepted: isAccepted, handleAccept: handleAccept }, other),
            React.createElement(ComponentToShow, { date: date, allowKeyboardControl: allowKeyboardControl, animateYearScrolling: animateYearScrolling, disableFuture: disableFuture, disablePast: disablePast, leftArrowIcon: leftArrowIcon, maxDate: maxDate, minDate: minDate, onChange: handleChange, openToYearSelection: openToYearSelection, renderDay: renderDay, rightArrowIcon: rightArrowIcon, shouldDisableDate: shouldDisableDate })));
    }));
};
DatePickerInline.propTypes = {
    onlyCalendar: PropTypes.bool,
    value: DomainPropTypes.date,
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    initialFocusedDate: DomainPropTypes.date,
    format: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    animateYearScrolling: PropTypes.bool,
    openToYearSelection: PropTypes.bool,
    labelFunc: PropTypes.func,
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
    renderDay: PropTypes.func,
    shouldDisableDate: PropTypes.func,
    allowKeyboardControl: PropTypes.bool,
    forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    autoOk: PropTypes.bool,
};
DatePickerInline.defaultProps = {
    value: new Date(),
    format: undefined,
    minDate: '1900-01-01',
    maxDate: '2100-01-01',
    initialFocusedDate: undefined,
    disableFuture: false,
    disablePast: false,
    animateYearScrolling: false,
    openToYearSelection: false,
    allowKeyboardControl: true,
    leftArrowIcon: 'keyboard_arrow_left',
    rightArrowIcon: 'keyboard_arrow_right',
    renderDay: undefined,
    labelFunc: undefined,
    shouldDisableDate: undefined,
    forwardedRef: undefined,
    autoOk: undefined,
    onlyCalendar: false,
};
export default React.forwardRef(function (props, ref) { return (React.createElement(DatePickerInline, __assign({}, props, { forwardedRef: ref }))); });
