import React, { useState } from "react";
import {
  Modal,
  Button,
  Input,
  DateTimePicker,
  Picklist,
  Option,
} from "react-rainbow-components";
import style from "./style.module.css";
import { getCategory } from "../../utils/utils";

export default function ModalWFooter({ isModalOpen, setIsModalOpen, data }) {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState({
    value: "Food",
    name: undefined,
    label: "Food",
    icon: null,
  });
  const [options, setOptions] = useState(getCategory(data));
  const [customCategory, setCustomCategory] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  const handleOnClose = () => {
    setIsModalOpen(false);
  };

  function handlePicklistChange(value) {
    setCategory(value);
  }

  console.log("options", options);
  console.log("category", category);

  return (
    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
      <Modal
        id="modal-2"
        isOpen={isModalOpen}
        onRequestClose={handleOnClose}
        title="Add Expense"
        footer={
          <div className={style.modalFooter}>
            <Button
              className="rainbow-m-right_large"
              label="Cancel"
              variant="neutral"
              onClick={handleOnClose}
            />
            <Button label="Save" variant="brand" />
          </div>
        }
      >
        <Input
          className="rainbow-p-around_medium"
          label="Amount"
          labelAlignment="left"
          placeholder="Amount"
          type="number"
          min={0}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          className="rainbow-p-around_medium"
          label="Description"
          labelAlignment="left"
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="rainbow-flex rainbow-align_right">
          <Picklist
            onChange={handlePicklistChange}
            value={category}
            placeholder="Select Category"
            labelAlignment="left"
            label="Category"
          >
            <Option value="Custom" label="Custom" />
            {options.map((ele, index) => (
              <Option key={index} value={ele} label={ele} />
            ))}
          </Picklist>
          {category.value === "Custom" && (
            <Input
              type="text"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              label="Custom Category"
              labelAlignment="left"
            />
          )}
        </div>
        <DateTimePicker
          formatStyle="small"
          value={dateTime}
          label="DateTimePicker Label"
          onChange={(value) => setDateTime(value)}
          className="rainbow-m-around_small"
          labelAlignment="left"
        />
      </Modal>
    </div>
  );
}
