// Announcement titles for announcement cards
const announcementTitles = [
    "Exciting New Product Launch!",
    "Upcoming Event: Save the Date!",
    "Important Notice Regarding Service Changes",
    "Introducing Our Latest Feature Update",
    "Limited-Time Offer: Don't Miss Out!",
    "Join Us for a Special Webinar",
    "Big News: Company Expansion Plans",
    "Calling all Developers: Hackathon Announcement",
    "Customer Appreciation Sale: Discounts Galore!",
    "Breaking News: Industry Partnership Announcement",
    "Mark Your Calendars: Annual Conference Announcement",
    "Now Hiring: Join Our Growing Team!",
    "Product Recall Alert: Important Information Inside",
    "Exclusive Sneak Peek: Coming Soon!",
    "Discover Our New Website Redesign",
    "Important Security Update: Action Required",
    "New Blog Post: Expert Insights on Industry Trends",
    "Join Our Beta Testing Program",
    "Exciting Collaboration Announcement",
    "Save Big with Our Summer Sale",
];

const profile_photos = [
    "kermit.png",
    "doguito.jpeg",
    "dog-egg.jpeg",
    "dog-ears.jpeg"
]


// Generates a list of cards as HTML, between 1 and 30 extra cards generated.
// Returns it as a string
function generateProjectCards() {
    let output = "";
    // card_amount = Math.floor(Math.random() * 31);
    card_amount = 9;
    for(i = 0; i < card_amount; i++){
        output += `
                    <div class="card">
                        <img src="assets/sad_chihuahua.jpg" alt="Dog with tears of joy" style="width:100%">
                        <h1>Tears of Joy Dog</h1>
                        <p class="price">$5.99</p>
                        <p>Some text about joy of being a dog</p>
                        <p><button>Buy one pup cup ☕️</button></p>
                        <div class="card-buttons">
                            <button>👁️‍🗨️</button>
                            <button>⭐️</button>
                            <button>ᛘ️</button>
                        </div>
                    </div>
`
    }
    return output
}

// Same as the `generateProjectCards` function, but, for the `announcement` card and uses a random title
function generateAnnouncementCards() {
    let output = "";
    // card_amount = Math.floor(Math.random() * 16);
    card_amount = 4
    for(i = 0; i < card_amount; i++){
        let randomTitle = announcementTitles[Math.floor(Math.random() * announcementTitles.length)];
        output += `
                    <div class="announcement-card">
                        <h5>` + randomTitle + `</h5>
                        <p>This is a random announcement to show the CSS and HTML capabilities of the author but really there&#39;s nothing of value in this card so one has to wonder as to why you are still reading this</p>
                        <hr>
                    </div>
`
    }
    return output
}



// Set the project cards
document.getElementById('the-card-container').innerHTML = generateProjectCards();
document.getElementById('the-announcements-container').innerHTML = generateAnnouncementCards();

