export default async function Blogdetails(
    props: {
        params: Promise<{ blogId: string }>;
    }
) {
    const params = await props.params;
    // Await the params before using them
    const { blogId } = params;

    console.log("hello world");

    return (
        <>
            <h1 className="p-10">{blogId}</h1>
        </>
    );
}
