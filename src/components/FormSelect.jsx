import { Flex, Select } from "antd";

const FormSelect = ({ label, name, list, defaultValue }) => {
  return (
    <Flex className="flex-col gap-2">
      <label htmlFor={name} className="label">
        <span className=" capitalize">{label}</span>
      </label>
      <Select
        name={name}
        defaultValue={defaultValue}
        style={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "white",
        }}
        options={list.map((item) => ({ value: item, label: item }))}
      />
    </Flex>
  );
};

export default FormSelect;
