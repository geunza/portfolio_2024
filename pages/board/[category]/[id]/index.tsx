import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
type DetailProps = {
  category: string;
  boardId: string;
};
const Detail: React.FC<DetailProps> = ({ category, boardId }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      console.log("category");
      console.log(category);
      console.log("boardId");
      console.log(boardId);
    }
  }, [router]);
  return <div>Detail</div>;
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const category = ctx.query.category as string;
  const boardId = ctx.query.id as string;
  console.log(ctx.query);
  try {
    return {
      props: {
        category,
        boardId,
      },
    };
  } catch (err) {
    console.log(err);

    return {
      props: {},
    };
  }
};
export default Detail;
