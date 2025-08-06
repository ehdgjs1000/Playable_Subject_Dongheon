using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Luna.Unity;

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


        //Game State
        [SerializeField] GameObject gameOverPanel;
        [SerializeField] LayerMask objectLayer;
        int[] chooseOrderIndex = new int[3];
        bool isStart = false;
        int gameLevel = 0;
        int orderClearCount = 3;

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
        // object 선택 및 Gameobject생성
        private void ObjectSelect(int _index)
        {
            if (gameLevel > 3) gameLevel = 3;
            int randomObj = Random.Range(0, 9);
            int randomType = Random.Range(0, gameLevel + 1);
            
            GameObject obj = null;           
            switch (randomObj)
            {
                case 0:
                    obj = Instantiate(cokeGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 1:
                    obj = Instantiate(JuiceGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 2:
                    obj = Instantiate(danjiGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 3:
                    obj = Instantiate(pringlesGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 4:
                    obj = Instantiate(milkGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 5:
                    obj = Instantiate(peperoGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 6:
                    obj = Instantiate(kimbabGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 7:
                    obj = Instantiate(twinGos[randomType]);
                    objectPool[_index] = obj;
                    break;
                case 8:
                    obj = Instantiate(yoplaitGos[randomType]);
                    objectPool[_index] = obj;
                    break;
            }
            obj.GetComponent<ObjectCtrl>().objectNum = _index;
            ObjectSetPosition(_index);
        }
        // object 위치시키기
        private void ObjectSetPosition(int _index)
        {
            objectPool[_index].transform.position = objectSpawnPoses[_index].position;
        }

        //order에 들어갈 object 생성
        private void SpawnOrderObjects()
        {
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
            RaycastHit hit;
            if (Physics.Raycast(ray, out hit,objectLayer))
            {
                Debug.Log(hit.transform.name);
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
                        _clickObj.transform.DOShakePosition(0.5f);
                        yield return new WaitForSeconds(0.51f);
                        Destroy(_clickObj);

                        objectPool[objNum] = null;
                        ObjectSelect(objNum);

                        orderClearCount--;
                        if(orderClearCount == 0)
                        {
                            gameLevel++;
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

