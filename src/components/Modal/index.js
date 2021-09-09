import React from "react";
import { Modal, Button } from "react-rainbow-components";
import style from "./style.module.css";

const textStyles = {
  textAlign: "center",
  fontSize: 15,
  padding: "0 16px",
};

export default function ModalWFooter({ isModalOpen, setIsModalOpen }) {
  const handleOnClose = () => {
    setIsModalOpen(false);
  };

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
        <p style={textStyles}>
          A rainbow is a meteorological phenomenon that is caused by reflection,
          refraction and dispersion of light in water droplets resulting in a
          spectrum of light appearing in the sky. It takes the form of a
          multicoloured circular arc. Rainbows caused by sunlight always appear
          in the section of sky directly opposite the sun. Rainbows can be full
          circles. However, the observer normally sees only an arc formed by
          illuminated.
        </p>
        <p style={textStyles}>
          It takes the form of a multicoloured circular arc. Rainbows caused by
          sunlight always appear in the section of sky directly opposite the
          sun. Rainbows can be full circles. However, the observer normally sees
          only an arc formed by illuminated droplets.
        </p>
        <p style={textStyles}>
          Rainbows caused by sunlight always appear in the section of sky
          directly opposite the sun. Rainbows can be full circles. However, the
          observer normally sees only an arc formed by illuminated droplets
          above the ground.
        </p>
      </Modal>
    </div>
  );
}
