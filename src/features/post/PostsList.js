import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import styled from "styled-components";
import { RowCenter } from "../styles/GlobalStyles";

const PostsList = () => {

    const orderedPostIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    const PostFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `
    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <RowCenter>
        <PostFlex>
            {content}
        </PostFlex>
        </RowCenter>
    )
}
export default PostsList