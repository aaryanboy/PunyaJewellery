
export default function Blogdetails({ 
    params, 
}: { 
    params: { blogId: string };
 }) {
    
    // const blogId = params.blogId; // Destructure the blogId from params

    console.log("hello world");

    return (
        <>
            <h1 className="p-10">{params.blogId}</h1>
        </>
    );
}
