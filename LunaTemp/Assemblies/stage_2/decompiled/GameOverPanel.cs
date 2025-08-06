using Luna.Unity;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameOverPanel : MonoBehaviour
{
	public void ExitOnClick()
	{
		Playable.InstallFullGame();
	}

	public void RetryOnClick()
	{
		Playable.InstallFullGame();
		SceneManager.LoadScene(SceneManager.GetActiveScene().name);
		base.gameObject.SetActive(false);
	}
}
