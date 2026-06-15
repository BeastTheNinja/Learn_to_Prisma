const url = `${process.env.LOCALHOST}:${process.env.PORT}/auth/register`;

export const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        firstName: "Sebastian",
        lastName: "TESTER",
        email: "test@test.dk",
        password: "123456",
    }),
});

const data = await response.json();
console.log(data);
