// 유저 스토리
// - 유저는 메뉴와 상품들을 볼 수 있다.
// - 유저는 로그인을 할 수 있다.
// - 유저는 상품디테일을 보기 위해 로그인을 해야한다.
// - 로그인한 유저는 상품디테일정보를 볼 수 있다.
// - 유저는 상품을 검색할 수 있다.
// - 유저는 로그아웃할 수 있다.
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [id, setId] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id.trim() || !password.trim()) {
            alert('ID와 비밀번호를 입력해주세요.');
            return;
        }
        if (onLogin) {
            onLogin();
        }
        navigate('/');
    };

    return (
        <Container>
            <h3 className="page-title">로그인</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                
                <Button variant="dark" type="submit" className="w-100">
                    로그인
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
