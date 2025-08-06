using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using Luna;

public class GameOverPanel : MonoBehaviour
{
    public void ExitOnClick()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    public void RetryOnClick()
    {
        Luna.Unity.Playable.InstallFullGame();
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        this.gameObject.SetActive(false);
    }
}
