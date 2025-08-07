using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using Luna.Unity;
using TMPro;

namespace DongHeon
{
    public class GameManager : MonoBehaviour
    {
        [SerializeField] Transform[] objectSpawnPoses;
        [SerializeField] Transform[] orderSpawnPoses;
        [SerializeField] GameObject[] cokeGos;
        [SerializeField] GameObject[] JuiceGos;
        [SerializeField] GameObject[] danjiGos;
        [SerializeField] GameObject[] pringlesGos;
        [SerializeField] GameObject[] milkGos;
        [SerializeField] GameObject[] peperoGos;
        [SerializeField] GameObject[] kimbabGos;
        [SerializeField] GameObject[] twinGos;
        [SerializeField] GameObject[] yoplaitGos;

        public GameObject[] objectPool;
        public GameObject[] orderPool;
        [SerializeField] Image progressImage;
        [SerializeField] TextMeshProUGUI scoreText;
        [SerializeField] ComboPopUp comboGO;
        
        //Game State
        [SerializeField] GameObject gameOverPanel;
        [SerializeField] LayerMask objectLayer;
        int[] chooseOrderIndex = new int[3];
        bool isStart = false;
        int gameLevel = 0;
        int orderClearCount = 3;
        float timeAttack = 5;
        int score;

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
            progressImage.fillAmount = timeAttack / 5.0f;
            if (timeAttack <= 0.0f) GameOver();
        }
        private void InitObject()
        {
            for (int i = 0; i < 16; i++)
            {
                ObjectSelect(i);
            }
            SpawnOrderObjects();
        }
        // object 선택 및 Gameobject생성
        private void ObjectSelect(int _index)
        {
            if (gameLevel > 3) gameLevel = 3;
            int randomObj = Random.Range(0, 9);
            int randomType = Random.Range(0, gameLevel + 1);
            GameObject prefab = GetRandomPrefab(randomType);

            var obj = Instantiate(prefab);
            obj.GetComponent<ObjectCtrl>().objectNum = _index;
            objectPool[_index] = obj;
            obj.transform.position = objectSpawnPoses[_index].position;
        }
        GameObject GetRandomPrefab(int t)
        {
            return Random.Range(0, 9) switch
            {
                0 => cokeGos[t],
                1 => JuiceGos[t],
                2 => danjiGos[t],
                3 => pringlesGos[t],
                4 => milkGos[t],
                5 => peperoGos[t],
                6 => kimbabGos[t],
                7 => twinGos[t],
                8 => yoplaitGos[t],
                _ => cokeGos[0],
            };
        }

        //order에 들어갈 object 생성
        private void SpawnOrderObjects()
        {
            timeAttack = 5 * Mathf.Pow(0.99f,gameLevel+1);
            timeAttack = 5 * Mathf.Pow(0.99f,gameLevel+1);
            orderClearCount = 3;
            //초기화
            for (int i = 0; i < 3; i++)
            {
                chooseOrderIndex[i] = -1;
            }
            
            for (int i = 0; i < 3; i++)
            {
                ChooseOrderObject(i);
            }
        }
        
        //order에 들어갈 object뽑기
        private void ChooseOrderObject(int _index)
        {
            //중복 index 제거하기
            int ranObj = Random.Range(0, objectPool.Length);
            GameObject obj = Instantiate(objectPool[ranObj]);
            //orderPool[i] = obj;
            //orderPool[_index].transform.position = orderSpawnPoses[_index].position;
            if(_index == 0)
            {
                chooseOrderIndex[0] = ranObj;
                orderPool[0] = obj;
                orderPool[0].transform.position = orderSpawnPoses[0].position;
                return;
            }
            else
            {
                for (int i = 0; i < _index; i++)
                {
                    //중복됐을경우
                    if (chooseOrderIndex[i] == ranObj)
                    {
                        ChooseOrderObject(_index);
                        break;
                    }
                    else
                    {
                        //중복 안 될경우
                        chooseOrderIndex[_index] = ranObj;
                        orderPool[_index] = obj;
                        orderPool[_index].transform.position = orderSpawnPoses[_index].position;
                        return;
                    }
                }
            }
            
        }

        private void CheckMouseObject()
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out var hit,objectLayer))
            {
                //오브젝트 클릭 시
                StartCoroutine(CheckInOrder(hit.transform.gameObject));
            }
        }
        
        IEnumerator CheckInOrder(GameObject _clickObj)
        {
            for (int i = 0; i < orderPool.Length; i++)
            {
                if (orderPool[i] != null && _clickObj != null )
                {
                    if (orderPool[i].name.Contains(_clickObj.name))
                    {
                        int objNum = _clickObj.GetComponent<ObjectCtrl>().objectNum;
                        Destroy(orderPool[i].gameObject);
                        _clickObj.transform.DOShakePosition(0.3f);
                        orderClearCount--;
                        if(orderClearCount == 0)
                        {
                            ComboPopUp combo = Instantiate(comboGO, _clickObj.transform.position, Quaternion.identity);
                            combo.Setup(timeAttack);
                        }
                        yield return new WaitForSeconds(0.31f);
                        Destroy(_clickObj);
                        objectPool[objNum] = null;
                        ObjectSelect(objNum);

                        if(orderClearCount == 0)
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
                        //게임 설치 화면
                        Luna.Unity.Playable.InstallFullGame();
                        GameOver();
                    }
                }
            }
        }
        public void GameOver()
        {
            gameOverPanel.transform.DOScale(Vector3.one, 0.5f);
            Luna.Unity.LifeCycle.GameEnded();
        }
    }
    
}

