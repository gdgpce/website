import dynamic from "next/dynamic";

const ClientComponent = dynamic(() => import("./ClientComponent"), {
  ssr: false,
});

// Metadata export for Next.js
export async function generateMetadata({ params }) {
    const { slug } = params;

    try {
        // Fetch event data
        const eventResponse = await fetch(`https://gdg.community.dev/api/event_slim/${slug}`);
        const event = await eventResponse.json();

        // Fetch speaker data
        const speakerResponse = await fetch(`https://gdg.community.dev/api/event_person/?event=${slug}`);
        const speaker = await speakerResponse.json();

        // Dynamically set metadata
        return {
            title: event.title || "Event Details",
            description: event.description_short || "Join us for this exciting event!",
            openGraph: {
                title: event.title || "GDG PCE",
                description: event.description_short || "Join us for this exciting event!",
                images: [
                    {
                        url: event.cropped_picture_url || "/default-banner.png", // Provide a fallback if no image
                        width: 630,
                        height: 630,
                    },
                ],
            },
            twitter: {
                title: event.title || "GDG PCE",
                description: event.description_short || "Join us for this exciting event!",
                images: [event.cropped_banner_url || "/default-banner.png"],
            },
        };
    } catch (error) {
        // Fallback metadata if the event fetch fails
        return {
            title: "GDG PCE",
            description: "Join us for this exciting event!",
        };
    }
}

export default async function UserPage({ params }) {
    const { slug } = params;

    try {
        // Fetch event data
        const eventResponse = await fetch(`https://gdg.community.dev/api/event_slim/${slug}`);
        const event = await eventResponse.json();

        // Fetch speaker data
        const speakerResponse = await fetch(`https://gdg.community.dev/api/event_person/?event=${slug}`);
        const speaker = await speakerResponse.json();

        console.log(eventResponse.ok);
        if(!eventResponse.ok) throw new Error("Something went wrong");
        if(!speakerResponse) throw new Error("Something went wrong");   

        return (
            <div>
                {/* Pass error as false when data is successfully fetched */}
                <ClientComponent event={event} speaker={speaker} error={false} />
            </div>
        );
    } catch (error) {
        // Pass error as true if fetching fails
        return (
            <div>
                <ClientComponent event={null} speaker={null} error={true} />
            </div>
        );
    }
}
