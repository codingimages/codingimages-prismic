import React from "react"

import { Helmet } from "react-helmet"

const MetaTags = ({ title, description, keywords }) => {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Reynaldo Navedo" />
            <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5d54b0924cd0540012f20524&product=inline-share-buttons' async='async'></script>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        </Helmet >
    )
}

export default MetaTags