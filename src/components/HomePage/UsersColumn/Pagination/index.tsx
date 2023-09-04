import React, { useState } from "react";
import { DataTypes, NotificationType } from "../../../../types/Types";
import { PaginationLimit } from "../../../../utils/constants/Pagination";
import { Pagination } from "antd";
import { usersApi } from "../../../../services/api/usersListApi";

type Props = {
  total: number | undefined;
  setData: React.Dispatch<React.SetStateAction<DataTypes | null>>;
  setIsFetch: (value: boolean) => void;
  openNotificationWithIcon: (type: NotificationType, message: string) => void;
};

const PaginationItem = ({
  total,
  setData,
  setIsFetch,
  openNotificationWithIcon,
}: Props) => {
  const [current, setCurrent] = useState(1);

  const onChangeUsersList = async (item: number) => {
    const offset = (item - 1) * PaginationLimit.limit;

    try {
      setIsFetch(true);
      const newUsersData = await usersApi.getUsersList(offset);
      setData(newUsersData.data);
      setCurrent(offset);
      setIsFetch(false);
      openNotificationWithIcon("success", "Данные получены");
    } catch (error) {
      openNotificationWithIcon("error", `Данные не получены : ${error}`);
      setIsFetch(false);
    }
  };

  const totalPages = total && total * 5
  return (
    <div className="flex justify-center pt-5">
      <Pagination
          onChange={onChangeUsersList}
          total={totalPages}
          pageSize={5}
      />
    </div>
  );
};

export default PaginationItem;
