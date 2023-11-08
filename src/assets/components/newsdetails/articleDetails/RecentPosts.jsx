import React from 'react'

const RecentPosts = ({title, date}) => {
  return (
    <div className="recentPost">
        <p className="postTitle">{title}</p>
        <p className="postDate">{date}</p>
    </div>
  )
}

export default RecentPosts