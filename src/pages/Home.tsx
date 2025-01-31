// import React, { useEffect, useState } from 'react';
import PostListItem from '../components/PostListItem';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList';

const Home = () => {
  // const [postList, setPostList] = useState<IResponsePostList>([]);
  const { data: postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>...불러 오는 중...</div>;
  }

  // const fetchPostList = async () => {
  //   const { data } = await getPostList();
  //   // const sortedData = data.sort((a: IPost, b: IPost) => {
  //   //   if (a.id >= b.id) return -1;
  //   //   else return 1;
  //   // });
  //   data.reverse();
  //   setPostList(data);
  // };

  // useEffect(() => {
  //   fetchPostList();
  // }, []);

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(item => {
        return <PostListItem key={item.id} id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />;
      })}
    </div>
  );
};

export default Home;
