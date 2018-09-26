import initFormItems from "./initFormItems";
import initTags from "./initTags";

const updateFormItem = (dispatch, authorization, currentId, item) => {
    fetch("/api/todos", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': authorization
        },
        body: JSON.stringify({
            "id": currentId,
            "name": item.name,
            "status": item.status,
            "dueDate": item.dueDate,
            "tags": item.tags.map(tag => ({name: tag}))
        })
    }).then(function (response) {
        // debugger
        initFormItems("/todos", dispatch, authorization);
        initTags(dispatch, authorization);
    });
};

export default updateFormItem;