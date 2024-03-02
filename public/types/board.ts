export type BoardListItem = {
  id: number;
  title: string;
  regDate: string;
  updateDate: string;
  idx: string;
};
export type BoardList = {
  pageIndex: number;
  pageSize: number;
  pageTotalCnt: number;
  list: BoardListItem[];
};
export type BoardDetailItem = {
  id: number;
  title: string;
  content: string;
};
export type BoardDetail = {
  prevDtl: BoardDetailItem | null;
  nextDtl: BoardDetailItem | null;
  dtl: BoardDetailItem;
};
