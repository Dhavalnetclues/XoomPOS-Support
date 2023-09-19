const queryPresets = [
    {
        label: 'Latest Posts by Publish Date', key: 'preset1', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "DESC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["date"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }
    },


    {
        label: 'Oldest Posts by Publish Date', key: 'preset2', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "ASC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["date"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }

    },
    {
        label: 'Latest Posts by Modified Date', key: 'preset3', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "DESC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["modified"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }

    },

    {
        label: 'Oldest Posts by Modified Date', key: 'preset4', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "ASC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["modified"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }
    },


    {
        label: 'Alphabetical Order A-Z', key: 'preset5', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "ASC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["name"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }

    },

    {
        label: 'Alphabetical Order Z-A', key: 'preset6', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "DESC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["name"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }


    },


    {
        label: 'Most Commented Posts', key: 'preset7', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "DESC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["name"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }


    },


    {
        label: 'Random 10 Posts', key: 'preset8', value: { "items": [{ "val": ["post"], "multiple": false, "id": "postType", "label": "Post Types", "description": "Select Post Types to Query" }, { "val": ["publish"], "multiple": false, "id": "postStatus", "label": "Post status", "description": "Query post by post status" }, { "val": "DESC", "multiple": false, "id": "order", "label": "Order", "description": "Post query order" }, { "val": ["rand"], "multiple": false, "id": "orderby", "label": "Orderby", "description": "Post query orderby" }, { "val": "10", "multiple": false, "id": "postsPerPage", "label": "Posts Per Page", "description": "" }] }

    },

];

export default queryPresets;