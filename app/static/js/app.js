/* Add your Application JavaScript */
window.onload = () => {
    const follow = document.querySelector('#lower > button');
    follow.addEventListener('click', followClick, true);

    function followClick(){
        incrementFollowers();
        follow.className = "followed";
        follow.textContent = "Followed"
        follow.removeEventListener('click', followClick, true);
    }
    
    function incrementFollowers(){
        var followers = document.querySelector("#followers > h3");
        followers.innerHTML = Number(followers.textContent) + 1
    }
}