import React, { useEffect, useState } from 'react'



export function Notes() {
    const [notes, setNotes] = useState([])


    useEffect(() => {
        fetch('https://startup.humdrumjobs.com/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    return (
        <div>
            {notes.map(note => (
                <h1 key={ note.id }> { note.jobtype }</h1>
            ))}
        </div>
    )
}

// const container = document.querySelector('.posts');

// const renderPosts = async () => {
//     let url = 'https://startup.humdrumjobs/posts';


//     const res = await fetch(url);
//     const posts = await res.json();

//     let template = '';
//     posts.forEach( post => {
//         template += `
//         <div class='post'>
//             <h2>${post.jobtype}</h2>
//             <p>${post.location}</p>
//             <p>${post.payment}</p>
//             <p>${post.notes.slice(0, 200)}</p>
//             <p>${post.email}</p>
//             <a href='/details'>read more...</a>
//         </div>
//         `
//     })
//     container.innerHTML = template
// }

// window.addEventListener('DOMContentLoaded', () => renderPosts())

