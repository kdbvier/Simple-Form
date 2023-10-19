import React, { useState, useEffect } from "react";
import SelectPicker, { SelectDataType } from "./components/SelectPicker";
import TextField from "./components/TextField";
import {
  AppContainer,
  FormContainer,
  Button,
  Form,
  ResultContent,
  Sidebar,
  SidebarItem,
} from "./styles";

type ErrorState = {
  state: boolean;
  value: string;
};

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

function App() {
  const [formState, setFormState] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState<ErrorState>({
    state: false,
    value: "",
  });
  const [emailError, setEmailError] = useState<ErrorState>({
    state: false,
    value: "",
  });
  const [phoneError, setPhoneError] = useState<ErrorState>({
    state: false,
    value: "",
  });
  const [passwordError, setPasswordError] = useState<ErrorState>({
    state: false,
    value: "",
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState<ErrorState>({
    state: false,
    value: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [countries, setCountries] = useState<SelectDataType[]>([]);

  const getCountries = async () => {
    const countriesJSON = await fetch(
      "https://restcountries.com/v3.1/all?fields=name"
    );
    const countriesData = await countriesJSON.json();
    setCountries(
      countriesData.map((_data: any) => {
        return { label: _data.name.common, value: _data.name.common };
      })
    );
  };
  useEffect(() => {
    getCountries();
  }, []);

  const handleSelectorChange = (index: number) => {
    setSelectedIndex(index);
  };
  const handleSubmitA = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || selectedIndex === -1)
      return;
    let status = true;
    if (name.length < 4 || name.length > 16) {
      status = false;
      setNameError({ state: true, value: "Username must be 4-12 characters" });
    } else {
      status = true;
      setNameError({ state: false, value: "" });
    }
    if (!emailRegExp.test(email)) {
      status = false;
      setEmailError({ state: true, value: "Invalid email address" });
    } else {
      status = true;
      setEmailError({ state: false, value: "" });
    }
    if (!phoneRegExp.test(phone)) {
      status = false;
      setPhoneError({ state: true, value: "Invalid phone number" });
    } else {
      status = true;
      setPhoneError({ state: false, value: "" });
    }
    if (status) {
      setFormState(formState + 1);
    }
  };
  const handleSubmitB = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password === "" || confirmPassword === "") return;
    if (password.length < 8 || password.length > 16) {
      setPasswordError({
        state: true,
        value: "Password must be 8-16 characters.",
      });
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError({
        state: true,
        value: "Password doesn't match.",
      });
      return;
    }
    setFormState(formState + 1);
  };
  const getFormContent = () => {
    if (formState === 1) {
      return (
        <Form onSubmit={handleSubmitB}>
          <TextField
            label="Password"
            onError={passwordError.state}
            errorMessage={passwordError.value}
            onChange={(e) => setPassword(e)}
            placeholder="Input password"
            value={password}
            type="password"
          />
          <TextField
            label="Repeat password"
            onError={confirmPasswordError.state}
            errorMessage={confirmPasswordError.value}
            onChange={(e) => setConfirmPassword(e)}
            placeholder="Repeat password"
            value={confirmPassword}
            type="password"
          />
          <Button
            disabled={password === "" || confirmPassword === ""}
            type="submit"
          >
            Continue
          </Button>
        </Form>
      );
    } else if (formState === 2) {
      return (
        <Form>
          <ResultContent>
            <div className="title">Username</div>
            <div className="content">{name}</div>
          </ResultContent>
          <ResultContent>
            <div className="title">Email</div>
            <div className="content">{email}</div>
          </ResultContent>
          <ResultContent>
            <div className="title">Country</div>
            <div className="content">{countries[selectedIndex]?.value}</div>
          </ResultContent>
          <Button type="submit">Complete</Button>
        </Form>
      );
    } else {
      return (
        <Form onSubmit={handleSubmitA}>
          <TextField
            label="Username"
            onError={nameError.state}
            errorMessage={nameError.value}
            onChange={(e) => setName(e)}
            placeholder="Input username"
            value={name}
          />
          <TextField
            label="Email"
            onError={emailError.state}
            errorMessage={emailError.value}
            onChange={(e) => setEmail(e)}
            placeholder="Input email"
            value={email}
          />
          <TextField
            label="Phone"
            onError={phoneError.state}
            errorMessage={phoneError.value}
            onChange={(e) => setPhone(e)}
            placeholder="Input phone"
            value={phone}
            type="text"
          />
          <div>
            <label>Country</label>
            <SelectPicker
              data={countries}
              seletedIndex={selectedIndex}
              onChange={handleSelectorChange}
            />
          </div>
          <Button
            disabled={
              name === "" ||
              email === "" ||
              phone === "" ||
              selectedIndex === -1
            }
            type="submit"
          >
            Continue
          </Button>
        </Form>
      );
    }
  };

  return (
    <AppContainer>
      <div className="header">Super test form</div>
      <p>Initial info</p>
      <FormContainer>{getFormContent()}</FormContainer>
      <Sidebar>
        <SidebarItem active={formState === 0}>
          <div className="check" />
          <p>Initial info</p>
        </SidebarItem>
        <SidebarItem active={formState === 1}>
          <div className="check" />
          <p>Password screen</p>
        </SidebarItem>
        <SidebarItem active={formState === 2}>
          <div className="check" />
          <p>Review</p>
        </SidebarItem>
      </Sidebar>
    </AppContainer>
  );
}

export default App;
