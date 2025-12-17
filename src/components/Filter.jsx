import { Form, Link, useLoaderData } from "react-router";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import { Button, Checkbox, Flex, Slider } from "antd";
import { useState } from "react";

const Filter = () => {
  const maxPrice=1000
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  const { meta, params } = useLoaderData();
  const { category, company, order } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        name={"search"}
        label={"Search Product"}
        type={"search"}
        size={"input-sm"}
      />
      <FormSelect
        defaultValue={category}
        label="Select Category"
        name={"category"}
        list={meta.categories}
      />
      <FormSelect
        defaultValue={company}
        label="Select Company"
        name={"company"}
        list={meta.companies}
      />
      <FormSelect
        defaultValue={order}
        label="Sort by"
        name={"order"}
        list={["a-z", "z-a", "high", "low"]}
      />
      {/* range */}
      <div>
        <Slider defaultValue={selectedPrice} min={0} max={selectedPrice} tooltip={{ open: true }} />
        <Flex className="justify-between">
          <p>$ 0</p>
          <p>$ 1000</p>
        </Flex>
      </div>
      <div>
        <Checkbox style={{color:"white"}}>Free Shipping</Checkbox>
      </div>
      {/* Buttons */}
      <Button type="submit" className="custom-btn rounded-lg">
        SEARCH
      </Button>
      <Link to={"/products"} className="rounded-lg">
        <Button style={{width:"100%"}} className="custom-btn">RESET</Button>
      </Link>
    </Form>
  );
};

export default Filter;
