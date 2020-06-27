import { useRouter } from "next/router";
import { Divider } from "antd";

interface IProps {}

export default (props: IProps) => {
  const router = useRouter();

  const changePage = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <p><b>Homepage</b></p>
      <Divider />
      <span onClick={() => changePage("/trade")}>Trader</span>
      <Divider type="vertical" />
      <span onClick={() => changePage("/log")}>Log</span>
    </>
  );
};
