"use client";

import React from 'react';
import { httpClient } from "@softbean/commons-http-client";

export default function Page() {

    httpClient
        .get("https://api.github.com/users/raphaelfurtado")
        .then((data) => {
            console.warn(data);
        })
    return <h1>Hello, Next.js!!</h1>
}