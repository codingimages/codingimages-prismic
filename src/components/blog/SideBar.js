import React from "react"
import RecentBlogPosts from "../blog/RecentPosts"

const BlogSideBar = () => {
    return (
        <aside className="py-5 px-0">
            <h4 className="mb-3">Recent Posts</h4>
            <RecentBlogPosts />
            {/* <h5>Recent Tutorials</h5> */}
        </aside>
    )
}

export default BlogSideBar