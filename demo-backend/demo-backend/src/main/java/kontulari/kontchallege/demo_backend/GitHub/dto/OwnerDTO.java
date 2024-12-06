package kontulari.kontchallege.demo_backend.GitHub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OwnerDTO {
    private String login;

    @JsonProperty("avatar_url")
    private String avatarUrl;

    @JsonProperty("html_url")
    private String htmlUrl;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public String getHtmlUrl() {
        return htmlUrl;
    }

    public void setHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
    }
}
