import AppLayout from "@/components/layout/AppLayout";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
type ListProps = {
  listProp: {
    category: string;
    page: string | undefined;
  };
};
const List: React.FC<ListProps> = ({ listProp }) => {
  useEffect(() => {
    console.log(listProp);
  }, []);
  return <AppLayout>List</AppLayout>;
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const category = ctx.query.category as string;
  const page = ctx.query.page as string | undefined;
  const listProp = {
    category,
    page: page ?? 1,
  };
  console.log("listProp");
  console.log(listProp);
  console.log(ctx.query);

  return {
    props: { listProp },
  };
};
export default List;
