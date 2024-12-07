package kontulari.kontchallege.demo_backend.GitHub.dto;

public class GitHubResultDTO {
    private String login;
    private Number id;
    private String html_url;
    private String location;
    private String bio;

    private String name;

    private String avatar_url;

    private Number public_repos;

    private Number following;

    private Number followers;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    public Number getPublic_repos() {
        return public_repos;
    }

    public void setPublic_repos(Number public_repos) {
        this.public_repos = public_repos;
    }

    public Number getFollowing() {
        return following;
    }

    public void setFollowing(Number following) {
        this.following = following;
    }

    public Number getFollowers() {
        return followers;
    }

    public void setFollowers(Number followers) {
        this.followers = followers;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Number getId() {
        return id;
    }

    public void setId(Number id) {
        this.id = id;
    }

    public String getHtml_url() {
        return html_url;
    }

    public void setHtml_url(String html_url) {
        this.html_url = html_url;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }
}
