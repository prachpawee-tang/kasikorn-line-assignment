export async function GET() {
  return Response.json([
    {
      name: "Emily",
      image: "https://dummyimage.com/54x54/999/fff",
      isBank: false,
    },
    {
      name: "Jone Kiersten",
      image: "https://dummyimage.com/54x54/999/fff",
      isBank: false,
    },
  ]);
}
