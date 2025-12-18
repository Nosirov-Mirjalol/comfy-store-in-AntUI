import { useLoaderData, Link } from "react-router";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/Cart/CartSlice";
import { Breadcrumb, Card, Button, Select, Typography, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

const singleProductQuery = (id) => ({
  queryKey: ["singleProduct", id],
  queryFn: () => customFetch(`/products/${id}`),
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, colors, company, description, price, title } =
    product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    company,
    price,
    title,
    productColor,
    amount,
  };

  // Theme-aware styles
  const cardStyle = {
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)', // AntD theme variable
  };

  const imgStyle = {
    borderRadius: 12,
    width: '100%',
    maxHeight: 400, // kichikroq
    objectFit: 'cover',
  };

  return (
    <section className="max-w-6xl mx-auto px-4">
      <Breadcrumb
        style={{ marginBottom: 24 }}
        items={[
          { title: <Link className="!text-white" to="/">Home</Link> },
          { title: <Link className="!text-white" to="/products">Products</Link> },
        ]}
      />

      <Card  style={cardStyle}>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Rasm */}
          <img
            src={image}
            alt={title}
            style={imgStyle}
          />

          {/* Kontent */}
          <Space direction="vertical" size="middle">
            <Title level={2}>{title}</Title>
            <Text type="secondary">{company}</Text>
            <Title level={4}>{formatPrice(price)}</Title>

            <Paragraph>{description}</Paragraph>

            {/* Colors */}
            <Space>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setProductColor(color)}
                  style={{
                    backgroundColor: color,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    border:
                      color === productColor
                        ? '2px solid var(--ant-primary-color)'
                        : '1px solid #ccc',
                  }}
                />
              ))}
            </Space>

            {/* Amount */}
            <Select
              value={amount}
              onChange={setAmount}
              options={generateAmountOptions(20).map((opt) => ({
                label: opt.props.children,
                value: opt.props.value,
              }))}
              style={{ width: 120 }}
            />

            {/* Add to Cart */}
            <Button
              type="primary"
              size="large"
              onClick={() =>
                dispatch(addItem({ product: cartProduct }))
              }
            >
              Add to cart
            </Button>
          </Space>
        </div>
      </Card>
    </section>
  );
};

export default SingleProduct;
