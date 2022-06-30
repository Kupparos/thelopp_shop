import React, { useState } from "react";
import "./subscribe.css";
import { Input } from "antd";
const { Search } = Input;

export default function Subscribe() {
  const [email, setEmail] = useState('');
  
  const onSearch = (value) => {
    if (value.length > 0) {
      console.log(value);
    }
    setEmail('');
  };

  return (
    <div className="subscribe">
      <div className="container">
        <h1>GET PRESENTS AND SALES</h1>
        <Search
          placeholder="Your e-mail"
          value={email}
          allowClear
          enterButton="Subscribe"
          size="large"
          onChange={(e) => setEmail(e.target.value)}
          onSearch={onSearch}
          className="email_input"
        />
      </div>
    </div>
  );
}
