using UnityEngine;

public class MouseCtrl : MonoBehaviour
{
	[SerializeField]
	private Canvas mainCanvas;

	[SerializeField]
	private float offsetX;

	[SerializeField]
	private float offsetY;

	private void Update()
	{
		RectTransformUtility.ScreenPointToLocalPointInRectangle(mainCanvas.transform as RectTransform, Input.mousePosition, (mainCanvas.renderMode == RenderMode.ScreenSpaceOverlay) ? null : mainCanvas.worldCamera, out var pos);
		base.transform.localPosition = pos + new Vector2(offsetX, offsetY);
	}
}
