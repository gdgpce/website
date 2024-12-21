import ClientComponent from "./ClientComponent";

export default async function UserPage({ params }) {
    const { slug } = params;

    try {
        const eventResponse = await fetch(`https://gdg.community.dev/api/event_slim/${slug}`);
        const event = await eventResponse.json();

        const speakerResponse = await fetch(`https://gdg.community.dev/api/event_person/?event=${slug}`);
        const speaker = await speakerResponse.json();

        return (
            <div>
                <ClientComponent event={event} speaker={speaker} />
            </div>
        );
    } catch (error) {
        return <p>Error: {error.message}</p>;
    }
}
