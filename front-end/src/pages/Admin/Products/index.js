import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchProductList, deleteProduct } from "../../../api";
import { Table, Popconfirm, Spin,Button} from "antd";
import { Text,  Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { DeleteOutlined } from "@ant-design/icons";

function AdminProducts() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });
  const queryClient = useQueryClient();
  //cache aldık bunu
  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}> Düzenle </Link>
            <Popconfirm
              title="Uyarı"
              description="Silmek istediğinizden emin misiniz"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("success");
                  },
                });
                alertify.success("Silindi.");
              }}
              onCancel={() => {
                console.log("İptal Edildi");
              }}
              okText="Evet"
              cancelText="Hayır"
              placement="left"
            >
              <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);
  if (isLoading) {
    return (
      <div>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  }
  if (isError) {
    return <div> Error {error.message}</div>;
  }

  return (
    <>
      <Center color='white'>
        <Link to="/admin/products/new">
          <Button colorScheme='blue'>Ürün Ekle</Button>
        </Link>
      </Center>

      <Text fontSize="2xl">Admin Product</Text>

      <Table dataSource={data} columns={columns} rowKey="_id" />
    </>
  );
}

export default AdminProducts;
