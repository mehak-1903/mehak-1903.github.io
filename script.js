document.addEventListener("DOMContentLoaded", async function () {
    const username = "mehak-1903";
    const profilePic = document.getElementById("profile-pic");
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        profilePic.src = data.avatar_url || "default.jpg";
    } catch (error) {
        console.error("GitHub profile fetch error:", error);
    }
});
