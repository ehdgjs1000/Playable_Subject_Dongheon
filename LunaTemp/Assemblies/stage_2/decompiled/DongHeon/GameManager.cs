using System.Collections;
using DG.Tweening;
using Luna.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace DongHeon
{
	public class GameManager : MonoBehaviour
	{
		[SerializeField]
		private Transform[] objectSpawnPoses;

		[SerializeField]
		private Transform[] orderSpawnPoses;

		[SerializeField]
		private GameObject[] cokeGos;

		[SerializeField]
		private GameObject[] JuiceGos;

		[SerializeField]
		private GameObject[] danjiGos;

		[SerializeField]
		private GameObject[] pringlesGos;

		[SerializeField]
		private GameObject[] milkGos;

		[SerializeField]
		private GameObject[] peperoGos;

		[SerializeField]
		private GameObject[] kimbabGos;

		[SerializeField]
		private GameObject[] twinGos;

		[SerializeField]
		private GameObject[] yoplaitGos;

		public GameObject[] objectPool;

		public GameObject[] orderPool;

		[SerializeField]
		private Image progressImage;

		[SerializeField]
		private TextMeshProUGUI scoreText;

		[SerializeField]
		private ComboPopUp comboGO;

		[SerializeField]
		private GameObject gameOverPanel;

		[SerializeField]
		private LayerMask objectLayer;

		private int[] chooseOrderIndex = new int[3];

		private bool isStart = false;

		private int gameLevel = 0;

		private int orderClearCount = 3;

		private float timeAttack = 5f;

		private int score;

		private void Start()
		{
			InitObject();
		}

		private void Update()
		{
			if (Input.GetMouseButtonDown(0))
			{
				CheckMouseObject();
			}
			timeAttack -= Time.deltaTime;
			progressImage.fillAmount = timeAttack / 5f;
			if (timeAttack <= 0f)
			{
				GameOver();
			}
		}

		private void InitObject()
		{
			for (int i = 0; i < 16; i++)
			{
				ObjectSelect(i);
			}
			SpawnOrderObjects();
		}

		private void ObjectSelect(int _index)
		{
			if (gameLevel > 3)
			{
				gameLevel = 3;
			}
			int randomObj = Random.Range(0, 9);
			int randomType = Random.Range(0, gameLevel + 1);
			GameObject prefab = GetRandomPrefab(randomType);
			GameObject obj = Object.Instantiate(prefab);
			obj.GetComponent<ObjectCtrl>().objectNum = _index;
			objectPool[_index] = obj;
			obj.transform.position = objectSpawnPoses[_index].position;
		}

		private GameObject GetRandomPrefab(int t)
		{
			int num = Random.Range(0, 9);
			if (1 == 0)
			{
			}
			GameObject result;
			switch (num)
			{
			case 0:
				result = cokeGos[t];
				break;
			case 1:
				result = JuiceGos[t];
				break;
			case 2:
				result = danjiGos[t];
				break;
			case 3:
				result = pringlesGos[t];
				break;
			case 4:
				result = milkGos[t];
				break;
			case 5:
				result = peperoGos[t];
				break;
			case 6:
				result = kimbabGos[t];
				break;
			case 7:
				result = twinGos[t];
				break;
			case 8:
				result = yoplaitGos[t];
				break;
			default:
				result = cokeGos[0];
				break;
			}
			if (1 == 0)
			{
			}
			return result;
		}

		private void SpawnOrderObjects()
		{
			timeAttack = 5f * Mathf.Pow(0.99f, gameLevel + 1);
			timeAttack = 5f * Mathf.Pow(0.99f, gameLevel + 1);
			orderClearCount = 3;
			for (int j = 0; j < 3; j++)
			{
				chooseOrderIndex[j] = -1;
			}
			for (int i = 0; i < 3; i++)
			{
				ChooseOrderObject(i);
			}
		}

		private void ChooseOrderObject(int _index)
		{
			int ranObj = Random.Range(0, objectPool.Length);
			GameObject obj = Object.Instantiate(objectPool[ranObj]);
			if (_index == 0)
			{
				chooseOrderIndex[0] = ranObj;
				orderPool[0] = obj;
				orderPool[0].transform.position = orderSpawnPoses[0].position;
				return;
			}
			int i = 0;
			if (i < _index)
			{
				if (chooseOrderIndex[i] == ranObj)
				{
					ChooseOrderObject(_index);
					return;
				}
				chooseOrderIndex[_index] = ranObj;
				orderPool[_index] = obj;
				orderPool[_index].transform.position = orderSpawnPoses[_index].position;
			}
		}

		private void CheckMouseObject()
		{
			Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var hit, (int)objectLayer))
			{
				StartCoroutine(CheckInOrder(hit.transform.gameObject));
			}
		}

		private IEnumerator CheckInOrder(GameObject _clickObj)
		{
			for (int i = 0; i < orderPool.Length; i++)
			{
				if (!(orderPool[i] != null) || !(_clickObj != null))
				{
					continue;
				}
				if (orderPool[i].name.Contains(_clickObj.name))
				{
					int objNum = _clickObj.GetComponent<ObjectCtrl>().objectNum;
					Object.Destroy(orderPool[i].gameObject);
					_clickObj.transform.DOShakePosition(0.3f);
					orderClearCount--;
					if (orderClearCount == 0)
					{
						ComboPopUp combo = Object.Instantiate(comboGO, _clickObj.transform.position, Quaternion.identity);
						combo.Setup(timeAttack);
					}
					yield return new WaitForSeconds(0.31f);
					Object.Destroy(_clickObj);
					objectPool[objNum] = null;
					ObjectSelect(objNum);
					if (orderClearCount == 0)
					{
						gameLevel++;
						score++;
						scoreText.text = score.ToString();
						SpawnOrderObjects();
					}
					yield return null;
				}
				else
				{
					Playable.InstallFullGame();
					GameOver();
				}
			}
		}

		public void GameOver()
		{
			gameOverPanel.transform.DOScale(Vector3.one, 0.5f);
			LifeCycle.GameEnded();
		}
	}
}
