package kontulari.kontchallege.demo_backend.GitHub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OwnerDTO {
    private String login;

    private String avatar_url;

    private String html_url;

    public String getLogin() {
        return login;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    public String getHtml_url() {
        return html_url;
    }

    public void setHtml_url(String html_url) {
        this.html_url = html_url;
    }

    public void setLogin(String login) {
        this.login = login;
    }

}
