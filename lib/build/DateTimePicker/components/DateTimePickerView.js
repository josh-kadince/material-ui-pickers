import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
export var DateTimePickerView = function (_a) {
    var selected = _a.selected, children = _a.children, classes = _a.classes;
    if (!selected) {
        return null;
    }
    return React.createElement("div", { className: classes.view }, children);
};
DateTimePickerView.propTypes = {
    selected: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};
var styles = createStyles({
    view: {
        zIndex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
    },
});
export default withStyles(styles, { name: 'MuiPickerDTPickerView ' })(DateTimePickerView);
