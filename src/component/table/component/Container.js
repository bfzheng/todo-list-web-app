import SortBtn from './SortBtn';
import {connect} from "react-redux";
import moment from "moment";
import initFormItems from "../../reducer/initFormItems";

const mapStateToProps = ({login}) => ({
    authorization: login.authorization
});

const mapDispatchToProps = (dispatch) => ({
    onClickSortBtn: (column, up, authorization) => {
        let server = `/todos?sort=${column},${up === false ? `asc` : `desc`}`;
        initFormItems(server, dispatch, authorization);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBtn);