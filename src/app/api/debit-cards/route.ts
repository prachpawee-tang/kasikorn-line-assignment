export async function GET() {
  return Response.json([
    {
      name: "My Salary",
      status: "in-progress",
      issuer: "TestLab",
      color: "#00a1e2",
    },
    {
      name: "For My Dream",
      status: "in-progress",
      issuer: "TestLab",
      color: "#ff8300",
    },
    {
      name: "My Debit card",
      status: "active",
      issuer: "TestLab",
      color: "#ffffff",
      borderColor: "#f2f3f7",
      number: "9440 7841 2222 3115",
    },
  ]);
}
