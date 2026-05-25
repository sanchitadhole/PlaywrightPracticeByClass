import { test, expect } from "@playwright/test";

test.only("API Response Validation (Playwright API Testing)",async({request})=>{
    const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1");
// const respBody = await resp.body();
// console.log(respBody)

const resStatus = resp.status();
// console.log(resStatus)
const resStatusText = resp.statusText();
// console.log(resStatusText)

// get the response as json body
const response = await resp.json()
// console.log(response)
const resheaders =  resp.headers();
// console.log(resheaders);
const headerArray = resp.headersArray();
// console.log(headerArray)

await expect(resStatus).toBe(200);
await expect(resStatusText).toBe("OK")
await expect(resp.ok()).toBeTruthy();
await expect(response).toHaveProperty("userId",1);
await expect(response).toHaveProperty("id",1);
await expect(response).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
await expect(response.body).toContain("quia et suscipit")
})