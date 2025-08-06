using UnityEngine;

[RequireComponent(typeof(Camera))]
public class CameraAspect : MonoBehaviour
{
	public float targetAspect = 64f / 85f;

	private Camera cam;

	private float lastScreenWidth;

	private float lastScreenHeight;

	private void Start()
	{
		cam = GetComponent<Camera>();
		UpdateCameraRect();
		lastScreenWidth = Screen.width;
		lastScreenHeight = Screen.height;
	}

	private void Update()
	{
		if ((float)Screen.width != lastScreenWidth || (float)Screen.height != lastScreenHeight)
		{
			UpdateCameraRect();
			lastScreenWidth = Screen.width;
			lastScreenHeight = Screen.height;
		}
	}

	private void UpdateCameraRect()
	{
		float windowAspect = (float)Screen.width / (float)Screen.height;
		float scaleHeight = windowAspect / targetAspect;
		if (scaleHeight < 1f)
		{
			cam.rect = new Rect(0f, (1f - scaleHeight) / 2f, 1f, scaleHeight);
			return;
		}
		float scaleWidth = 1f / scaleHeight;
		cam.rect = new Rect((1f - scaleWidth) / 2f, 0f, scaleWidth, 1f);
	}
}
