using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseCtrl : MonoBehaviour
{
    [SerializeField] Canvas mainCanvas;
    [SerializeField] float offsetX, offsetY;
    private void Update()
    {
        Vector2 pos;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            mainCanvas.transform as RectTransform,
            Input.mousePosition,
            mainCanvas.renderMode == RenderMode.ScreenSpaceOverlay ? null : mainCanvas.worldCamera,
            out pos
        );
        this.transform.localPosition = pos + new Vector2(offsetX, offsetY);
    }
}
