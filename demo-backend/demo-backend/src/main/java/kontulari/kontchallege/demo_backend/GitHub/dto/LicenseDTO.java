package kontulari.kontchallege.demo_backend.GitHub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LicenseDTO {
    private String key;
    private String name;

    @JsonProperty("spdx_id")
    private String spdxId;

    private String url;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpdxId() {
        return spdxId;
    }

    public void setSpdxId(String spdxId) {
        this.spdxId = spdxId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
