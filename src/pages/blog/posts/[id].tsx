import { NavigationButton } from "@/components/general/NavigationButton"
import { getAllPostIds, getPostData } from "@/lib/posts"
import { formatDate } from "@/utils/formatting"
import Link from "next/link"
import { Post } from "@/lib/types"

const Post = ({ postData }: any) => {
  return (
    <>
      <Link
        className="mb-6 text-xs text-moonstone hover:text-spoon before:content-['←']"
        href="/blog"
      > All Posts</Link>
      <p className="italic text-moonstone">{formatDate(postData.date)} | {postData.categories}</p>
      <h2 className="reverse-moon mb-6">{postData.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      {postData.link && (
        <span className="max-w-sm mt-6">
          <NavigationButton link={postData.link}>Learn More</NavigationButton>
        </span>
      )}
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default Post;