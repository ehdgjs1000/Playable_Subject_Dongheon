using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class ComboPopUp : MonoBehaviour
{
    [SerializeField] Image comboImage; 
    [SerializeField] Sprite[] comboSprites; //#0 Nice, #1 Great, #2 perfect, #3 outstanding 


    public void Setup(float _comboTime)
    {
        if(_comboTime >= 3.6f) comboImage.sprite = comboSprites[3];
        else if(_comboTime < 3.6f && _comboTime >= 2.6f) comboImage.sprite = comboSprites[2];
        else if(_comboTime < 2.6f && _comboTime >= 1.6f) comboImage.sprite = comboSprites[1];
        else if(_comboTime >= 1.6f) comboImage.sprite = comboSprites[0];

        StartCoroutine(ComboAnimation());
    }
    IEnumerator ComboAnimation()
    {
        this.transform.localScale = Vector3.zero;
        this.transform.DOScale(new Vector3(0.15f,0.15f,0.15f),0.3f);
        yield return new WaitForSeconds(0.3f);
        this.transform.DOScale(Vector3.zero,0.2f);
    }
}
