import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavigationProps } from "../models/props";
import '../css/navbar.css'

const Navigation: React.FC<NavigationProps> = ({ onTitleFilterChange }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onTitleFilterChange(searchValue)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Prevent form submission
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the default Enter key behavior
            onTitleFilterChange(searchValue);
            if (inputRef.current) {
                inputRef.current.blur(); // Unfocus the input
            }
        }
    }

    return (
        <Navbar sticky="top" className="navbar bg-dark" > {/* Use bg and expand props for Bootstrap styling */}
            <Container fluid className="p-0">
                <Navbar.Brand href="#home" className="text-light mx-4 navbar-brand">News Blog</Navbar.Brand>
                <Form className="mx-4" onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="Search news title..."
                        className="mr-sm-2"
                        value={searchValue}
                        onChange={handleInputChange}
                        onBlur={handleBlur} // allow user to search by clicking on other whitespace
                        onKeyDown={handleKeyDown} // allow user to submit by pressing enter
                        ref={inputRef} // Attach a ref to the input element
                    />
                </Form>
            </Container>
        </Navbar >
    )
};

export default Navigation;
