let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "error";

const orders = ["12", "23", "45", "34"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (currentOrder === "45") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
