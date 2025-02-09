package kontulari.kontchallege.demo_backend.GitHub;

import kontulari.kontchallege.demo_backend.GitHub.dto.GitHubResultDTO;
import kontulari.kontchallege.demo_backend.GitHub.dto.RepositoryDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("github")
public class GitHubAPI {

    private static final String BASE_URL = "https://api.github.com/users/";
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${GITHUB_TOKEN}")
    private String githubToken;

    private HttpHeaders createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + githubToken);
        return headers;
    }

    @GetMapping("{user}")
    public GitHubResultDTO consultaGitHub(@PathVariable String user) {
        String url = BASE_URL + user;
        HttpEntity<String> entity = new HttpEntity<>(createHeaders());
        ResponseEntity<GitHubResultDTO> response = restTemplate.exchange(url, HttpMethod.GET, entity, GitHubResultDTO.class);
        return response.getBody();
    }

    @GetMapping("{user}/repos")
    public List<RepositoryDTO> consultaRepos(@PathVariable String user) {
        String url = BASE_URL + user + "/repos";
        HttpEntity<String> entity = new HttpEntity<>(createHeaders());
        ResponseEntity<List<RepositoryDTO>> response = restTemplate.exchange(url, HttpMethod.GET, entity, new ParameterizedTypeReference<>() {});
        return response.getBody();
    }
}

