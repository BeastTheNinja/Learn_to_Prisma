const response = await fetch(
    "http://localhost:3000/auth/login",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "test@test.dk",
            password: "123456",
        }),
    }
);

const data = await response.json();

console.log(data);

export {};