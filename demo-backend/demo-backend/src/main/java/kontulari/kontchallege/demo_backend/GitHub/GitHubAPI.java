package kontulari.kontchallege.demo_backend.GitHub;

import kontulari.kontchallege.demo_backend.GitHub.dto.GitHubResultDTO;
import kontulari.kontchallege.demo_backend.GitHub.dto.RepositoryDTO;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("github")
public class GitHubAPI {

    private static final String BASE_URL = "https://api.github.com/users/";
    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("{user}")
    public GitHubResultDTO consultaGitHub(@PathVariable String user) {
        String url = BASE_URL + user;
        ResponseEntity<GitHubResultDTO> response = restTemplate.getForEntity(url, GitHubResultDTO.class);
        return response.getBody();
    }

    @GetMapping("{user}/repos")
    public List<RepositoryDTO> consultaRepos(@PathVariable String user) {
        String url = BASE_URL + user + "/repos";
        ResponseEntity<List<RepositoryDTO>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<>() {}
        );
        return response.getBody();
    }
}

