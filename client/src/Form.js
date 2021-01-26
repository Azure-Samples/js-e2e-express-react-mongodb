import React, { useState } from "react";

const Form = ({ addOne }) => {
  const [currentItem, setCurrentItem] = useState({
    name: "",
    job: "",
  });

  const onNameChangeHandler = (e) => {
    setCurrentItem({
      ...currentItem,
      name: e.target.value.trim(),
    });
  };
  const onJobChangeHandler = (e) => {
    setCurrentItem({
      ...currentItem,
      job: e.target.value.trim(),
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addOne(currentItem);
  };

  return (
    <div>
      <form className="commentForm" onSubmit={onSubmitHandler}>
        <input
          autoFocus
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={onNameChangeHandler}
        />

        <input
          type="text"
          name="job"
          id="job"
          placeholder="job"
          onChange={onJobChangeHandler}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;
