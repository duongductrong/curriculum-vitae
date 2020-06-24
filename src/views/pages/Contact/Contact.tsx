import React, { useState } from "react";
import Input from "../../../components/FormControl/Input/Input";
import Textarea from "../../../components/FormControl/Input/Textarea";

import "./contact.scss";
import Button from "../../../components/Button/Button";

export default function Contact() {
  const [value, setValue] = useState({ email: "", fullname: "", messages: "" });

  const onChangeValue = (type: string) => (e: any) => {
    switch (type) {
      case "email":
        setValue({ ...value, email: e.target.value });
        break;
      case "fullname":
        setValue({ ...value, fullname: e.target.value });
        break;
      case "messages":
        setValue({ ...value, messages: e.target.value });
        break;

      default:
        break;
    }
  };

  return (
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSdz1EyC3jeNGVNx588NT2WIiR96e83-dPr1j_djo_qgbLDByA/formResponse"
      className="contact"
    >
      <div className="contact__box">
        <h1>CONTACT WITH ME</h1>
        <div className="contact__entry">
          <label htmlFor="">Email *</label>
          <Input
            aria-label="Email"
            aria-describedby="i.desc.387410255 i.err.387410255"
            name="entry.1209367884"
            value={value.email}
            onChange={onChangeValue("email")}
            required
            dir="auto"
            data-initial-dir="auto"
            data-initial-value=""
            aria-invalid="true"
            className="contact__control"
            placeholder="Your email"
          />
        </div>
        <div className="contact__entry">
          <label htmlFor="">Fullname *</label>
          <Input
            aria-label="Fullname"
            aria-describedby="i.desc.1082787702 i.err.1082787702"
            name="entry.2147477264"
            value={value.fullname}
            required
            dir="auto"
            data-initial-dir="auto"
            data-initial-value=""
            className="contact__control"
            onChange={onChangeValue("fullname")}
            placeholder="Your email"
          />
        </div>
        <div className="contact__entry">
          <label htmlFor="">Messages *</label>
          <Textarea
            className="contact__control"
            rows={10}
            onChange={onChangeValue("messages")}
            placeholder="Your email"
            aria-label="Messages"
            required
            name="entry.12587439"
            dir="auto"
            data-initial-dir="auto"
            data-initial-value=""
            aria-describedby="i.desc.774562675 i.err.774562675"
            value={value.messages}
          />
        </div>

        <Button className="contact__btn">Sent now</Button>
      </div>
      <div className="contact__images"></div>
    </form>
  );
}
