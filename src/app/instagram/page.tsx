import React from "react";

export default async function Instagram() {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQWVVjY1F6WmdXZAHNOdk03aEhQVUhnVWdCQUl2VzRMaDgwdkRHZA3NlQS1zOGJUVnZAoZAG5BZAS05ZAWRwMmtDX1FiLWhsUU9tTVY0N0UtZAFB4V19TT3J1aDRLOUFBMnNCTWJIcU1aWDhBUmZAfVnh5NUFKc0VOQWsZD`; //${process.env.INSTAGRAM_KEY}
    const data = await fetch(url);
    const feed = await data.json();
    console.log(feed);

    const images = feed.data;
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-4 ">
                {images &&
                    images.map((image: any) => (
                        <div key={image.id}>
                            <img src={image.media_url} alt={image.caption} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
