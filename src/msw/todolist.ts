import { HttpResponse, http } from "msw";

const getList = () => {
  http.get("/todolist", () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    // For now, let's just print a message to the console.
    console.log("todolist get 요청");
    return HttpResponse.json(Array.from(["aa", "bb"]));
  });
};

export { getList };
