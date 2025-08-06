using System.Collections;
using DG.Tweening;
using Luna.Unity;
using UnityEngine;

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
		private GameObject gameOverPanel;

		[SerializeField]
		private LayerMask objectLayer;

		private int[] chooseOrderIndex = new int[3];

		private bool isStart = false;

		private int gameLevel = 0;

		private int orderClearCount = 3;

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
			GameObject obj = null;
			switch (randomObj)
			{
			case 0:
				obj = Object.Instantiate(cokeGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 1:
				obj = Object.Instantiate(JuiceGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 2:
				obj = Object.Instantiate(danjiGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 3:
				obj = Object.Instantiate(pringlesGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 4:
				obj = Object.Instantiate(milkGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 5:
				obj = Object.Instantiate(peperoGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 6:
				obj = Object.Instantiate(kimbabGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 7:
				obj = Object.Instantiate(twinGos[randomType]);
				objectPool[_index] = obj;
				break;
			case 8:
				obj = Object.Instantiate(yoplaitGos[randomType]);
				objectPool[_index] = obj;
				break;
			}
			obj.GetComponent<ObjectCtrl>().objectNum = _index;
			ObjectSetPosition(_index);
		}

		private void ObjectSetPosition(int _index)
		{
			objectPool[_index].transform.position = objectSpawnPoses[_index].position;
		}

		private void SpawnOrderObjects()
		{
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
				Debug.Log(hit.transform.name);
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
					_clickObj.transform.DOShakePosition(0.5f);
					yield return new WaitForSeconds(0.51f);
					Object.Destroy(_clickObj);
					objectPool[objNum] = null;
					ObjectSelect(objNum);
					orderClearCount--;
					if (orderClearCount == 0)
					{
						gameLevel++;
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
