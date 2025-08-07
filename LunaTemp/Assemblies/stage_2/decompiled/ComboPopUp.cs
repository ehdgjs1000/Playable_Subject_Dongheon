using System.Collections;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class ComboPopUp : MonoBehaviour
{
	[SerializeField]
	private Image comboImage;

	[SerializeField]
	private Sprite[] comboSprites;

	public void Setup(float _comboTime)
	{
		if (_comboTime >= 3.6f)
		{
			comboImage.sprite = comboSprites[3];
		}
		else if (_comboTime < 3.6f && _comboTime >= 2.6f)
		{
			comboImage.sprite = comboSprites[2];
		}
		else if (_comboTime < 2.6f && _comboTime >= 1.6f)
		{
			comboImage.sprite = comboSprites[1];
		}
		else if (_comboTime >= 1.6f)
		{
			comboImage.sprite = comboSprites[0];
		}
		StartCoroutine(ComboAnimation());
	}

	private IEnumerator ComboAnimation()
	{
		base.transform.localScale = Vector3.zero;
		base.transform.DOScale(new Vector3(0.15f, 0.15f, 0.15f), 0.3f);
		yield return new WaitForSeconds(0.3f);
		base.transform.DOScale(Vector3.zero, 0.2f);
	}
}
