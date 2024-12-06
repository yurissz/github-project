package kontulari.kontchallege.demo_backend.GitHub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RepositoryDTO {
    private String name;
    private String description;

    @JsonProperty("html_url")
    private String htmlUrl;

    @JsonProperty("created_at")
    private String createdAt;

    @JsonProperty("updated_at")
    private String updatedAt;

    @JsonProperty("pushed_at")
    private String pushedAt;

    private LicenseDTO license;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHtmlUrl() {
        return htmlUrl;
    }

    public void setHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getPushedAt() {
        return pushedAt;
    }

    public void setPushedAt(String pushedAt) {
        this.pushedAt = pushedAt;
    }

    public LicenseDTO getLicense() {
        return license;
    }

    public void setLicense(LicenseDTO license) {
        this.license = license;
    }
}