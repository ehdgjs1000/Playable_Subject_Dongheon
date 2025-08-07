var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointSpring' )
  var i637 = data
  i636.spring = i637[0]
  i636.damper = i637[1]
  i636.targetPosition = i637[2]
  return i636
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointMotor' )
  var i639 = data
  i638.m_TargetVelocity = i639[0]
  i638.m_Force = i639[1]
  i638.m_FreeSpin = i639[2]
  return i638
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointLimits' )
  var i641 = data
  i640.m_Min = i641[0]
  i640.m_Max = i641[1]
  i640.m_Bounciness = i641[2]
  i640.m_BounceMinVelocity = i641[3]
  i640.m_ContactDistance = i641[4]
  i640.minBounce = i641[5]
  i640.maxBounce = i641[6]
  return i640
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointDrive' )
  var i643 = data
  i642.m_PositionSpring = i643[0]
  i642.m_PositionDamper = i643[1]
  i642.m_MaximumForce = i643[2]
  i642.m_UseAcceleration = i643[3]
  return i642
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i645 = data
  i644.m_Spring = i645[0]
  i644.m_Damper = i645[1]
  return i644
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i647 = data
  i646.m_Limit = i647[0]
  i646.m_Bounciness = i647[1]
  i646.m_ContactDistance = i647[2]
  return i646
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i649 = data
  i648.m_ExtremumSlip = i649[0]
  i648.m_ExtremumValue = i649[1]
  i648.m_AsymptoteSlip = i649[2]
  i648.m_AsymptoteValue = i649[3]
  i648.m_Stiffness = i649[4]
  return i648
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i651 = data
  i650.m_LowerAngle = i651[0]
  i650.m_UpperAngle = i651[1]
  return i650
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i653 = data
  i652.m_MotorSpeed = i653[0]
  i652.m_MaximumMotorTorque = i653[1]
  return i652
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i655 = data
  i654.m_DampingRatio = i655[0]
  i654.m_Frequency = i655[1]
  i654.m_Angle = i655[2]
  return i654
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i657 = data
  i656.m_LowerTranslation = i657[0]
  i656.m_UpperTranslation = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i658 = root || new pc.UnityMaterial()
  var i659 = data
  i658.name = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'shader')
  i658.renderQueue = i659[3]
  i658.enableInstancing = !!i659[4]
  var i661 = i659[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i661[i + 0]) );
  }
  i658.floatParameters = i660
  var i663 = i659[6]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i663[i + 0]) );
  }
  i658.colorParameters = i662
  var i665 = i659[7]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i665[i + 0]) );
  }
  i658.vectorParameters = i664
  var i667 = i659[8]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i667[i + 0]) );
  }
  i658.textureParameters = i666
  var i669 = i659[9]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i669[i + 0]) );
  }
  i658.materialFlags = i668
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i677 = data
  i676.name = i677[0]
  i676.value = new pc.Color(i677[1], i677[2], i677[3], i677[4])
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i681 = data
  i680.name = i681[0]
  i680.value = new pc.Vec4( i681[1], i681[2], i681[3], i681[4] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i685 = data
  i684.name = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'value')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i689 = data
  i688.name = i689[0]
  i688.enabled = !!i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i691 = data
  i690.name = i691[0]
  i690.width = i691[1]
  i690.height = i691[2]
  i690.mipmapCount = i691[3]
  i690.anisoLevel = i691[4]
  i690.filterMode = i691[5]
  i690.hdr = !!i691[6]
  i690.format = i691[7]
  i690.wrapMode = i691[8]
  i690.alphaIsTransparency = !!i691[9]
  i690.alphaSource = i691[10]
  i690.graphicsFormat = i691[11]
  i690.sRGBTexture = !!i691[12]
  i690.desiredColorSpace = i691[13]
  i690.wrapU = i691[14]
  i690.wrapV = i691[15]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i693 = data
  i692.position = new pc.Vec3( i693[0], i693[1], i693[2] )
  i692.scale = new pc.Vec3( i693[3], i693[4], i693[5] )
  i692.rotation = new pc.Quat(i693[6], i693[7], i693[8], i693[9])
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'sharedMesh')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'additionalVertexStreams')
  i696.enabled = !!i697[2]
  request.r(i697[3], i697[4], 0, i696, 'sharedMaterial')
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.sharedMaterials = i698
  i696.receiveShadows = !!i697[6]
  i696.shadowCastingMode = i697[7]
  i696.sortingLayerID = i697[8]
  i696.sortingOrder = i697[9]
  i696.lightmapIndex = i697[10]
  i696.lightmapSceneIndex = i697[11]
  i696.lightmapScaleOffset = new pc.Vec4( i697[12], i697[13], i697[14], i697[15] )
  i696.lightProbeUsage = i697[16]
  i696.reflectionProbeUsage = i697[17]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i703 = data
  i702.name = i703[0]
  i702.tagId = i703[1]
  i702.enabled = !!i703[2]
  i702.isStatic = !!i703[3]
  i702.layer = i703[4]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i705 = data
  i704.name = i705[0]
  i704.halfPrecision = !!i705[1]
  i704.useUInt32IndexFormat = !!i705[2]
  i704.vertexCount = i705[3]
  i704.aabb = i705[4]
  var i707 = i705[5]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( !!i707[i + 0] );
  }
  i704.streams = i706
  i704.vertices = i705[6]
  var i709 = i705[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i709[i + 0]) );
  }
  i704.subMeshes = i708
  var i711 = i705[8]
  var i710 = []
  for(var i = 0; i < i711.length; i += 16) {
    i710.push( new pc.Mat4().setData(i711[i + 0], i711[i + 1], i711[i + 2], i711[i + 3],  i711[i + 4], i711[i + 5], i711[i + 6], i711[i + 7],  i711[i + 8], i711[i + 9], i711[i + 10], i711[i + 11],  i711[i + 12], i711[i + 13], i711[i + 14], i711[i + 15]) );
  }
  i704.bindposes = i710
  var i713 = i705[9]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i713[i + 0]) );
  }
  i704.blendShapes = i712
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i719 = data
  i718.triangles = i719[0]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i725 = data
  i724.name = i725[0]
  var i727 = i725[1]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i727[i + 0]) );
  }
  i724.frames = i726
  return i724
}

Deserializers["ObjectCtrl"] = function (request, data, root) {
  var i728 = root || request.c( 'ObjectCtrl' )
  var i729 = data
  i728.objectNum = i729[0]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i731 = data
  i730.center = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.size = new pc.Vec3( i731[3], i731[4], i731[5] )
  i730.enabled = !!i731[6]
  i730.isTrigger = !!i731[7]
  request.r(i731[8], i731[9], 0, i730, 'material')
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i733 = data
  i732.pivot = new pc.Vec2( i733[0], i733[1] )
  i732.anchorMin = new pc.Vec2( i733[2], i733[3] )
  i732.anchorMax = new pc.Vec2( i733[4], i733[5] )
  i732.sizeDelta = new pc.Vec2( i733[6], i733[7] )
  i732.anchoredPosition3D = new pc.Vec3( i733[8], i733[9], i733[10] )
  i732.rotation = new pc.Quat(i733[11], i733[12], i733[13], i733[14])
  i732.scale = new pc.Vec3( i733[15], i733[16], i733[17] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.planeDistance = i735[1]
  i734.referencePixelsPerUnit = i735[2]
  i734.isFallbackOverlay = !!i735[3]
  i734.renderMode = i735[4]
  i734.renderOrder = i735[5]
  i734.sortingLayerName = i735[6]
  i734.sortingOrder = i735[7]
  i734.scaleFactor = i735[8]
  request.r(i735[9], i735[10], 0, i734, 'worldCamera')
  i734.overrideSorting = !!i735[11]
  i734.pixelPerfect = !!i735[12]
  i734.targetDisplay = i735[13]
  i734.overridePixelPerfect = !!i735[14]
  return i734
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i737 = data
  i736.m_UiScaleMode = i737[0]
  i736.m_ReferencePixelsPerUnit = i737[1]
  i736.m_ScaleFactor = i737[2]
  i736.m_ReferenceResolution = new pc.Vec2( i737[3], i737[4] )
  i736.m_ScreenMatchMode = i737[5]
  i736.m_MatchWidthOrHeight = i737[6]
  i736.m_PhysicalUnit = i737[7]
  i736.m_FallbackScreenDPI = i737[8]
  i736.m_DefaultSpriteDPI = i737[9]
  i736.m_DynamicPixelsPerUnit = i737[10]
  i736.m_PresetInfoIsWorld = !!i737[11]
  return i736
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i739 = data
  i738.m_IgnoreReversedGraphics = !!i739[0]
  i738.m_BlockingObjects = i739[1]
  i738.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i739[2] )
  return i738
}

Deserializers["ComboPopUp"] = function (request, data, root) {
  var i740 = root || request.c( 'ComboPopUp' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'comboImage')
  var i743 = i741[2]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.comboSprites = i742
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i747 = data
  i746.cullTransparentMesh = !!i747[0]
  return i746
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Image' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Sprite')
  i748.m_Type = i749[2]
  i748.m_PreserveAspect = !!i749[3]
  i748.m_FillCenter = !!i749[4]
  i748.m_FillMethod = i749[5]
  i748.m_FillAmount = i749[6]
  i748.m_FillClockwise = !!i749[7]
  i748.m_FillOrigin = i749[8]
  i748.m_UseSpriteMesh = !!i749[9]
  i748.m_PixelsPerUnitMultiplier = i749[10]
  request.r(i749[11], i749[12], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[13]
  i748.m_Color = new pc.Color(i749[14], i749[15], i749[16], i749[17])
  i748.m_RaycastTarget = !!i749[18]
  i748.m_RaycastPadding = new pc.Vec4( i749[19], i749[20], i749[21], i749[22] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i751 = data
  i750.name = i751[0]
  i750.atlasId = i751[1]
  i750.mipmapCount = i751[2]
  i750.hdr = !!i751[3]
  i750.size = i751[4]
  i750.anisoLevel = i751[5]
  i750.filterMode = i751[6]
  var i753 = i751[7]
  var i752 = []
  for(var i = 0; i < i753.length; i += 4) {
    i752.push( UnityEngine.Rect.MinMaxRect(i753[i + 0], i753[i + 1], i753[i + 2], i753[i + 3]) );
  }
  i750.rects = i752
  i750.wrapU = i751[8]
  i750.wrapV = i751[9]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i757 = data
  i756.name = i757[0]
  i756.index = i757[1]
  i756.startup = !!i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i759 = data
  i758.enabled = !!i759[0]
  i758.aspect = i759[1]
  i758.orthographic = !!i759[2]
  i758.orthographicSize = i759[3]
  i758.backgroundColor = new pc.Color(i759[4], i759[5], i759[6], i759[7])
  i758.nearClipPlane = i759[8]
  i758.farClipPlane = i759[9]
  i758.fieldOfView = i759[10]
  i758.depth = i759[11]
  i758.clearFlags = i759[12]
  i758.cullingMask = i759[13]
  i758.rect = i759[14]
  request.r(i759[15], i759[16], 0, i758, 'targetTexture')
  i758.usePhysicalProperties = !!i759[17]
  i758.focalLength = i759[18]
  i758.sensorSize = new pc.Vec2( i759[19], i759[20] )
  i758.lensShift = new pc.Vec2( i759[21], i759[22] )
  i758.gateFit = i759[23]
  i758.commandBufferCount = i759[24]
  i758.cameraType = i759[25]
  return i758
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i761 = data
  i760.m_RenderShadows = !!i761[0]
  i760.m_RequiresDepthTextureOption = i761[1]
  i760.m_RequiresOpaqueTextureOption = i761[2]
  i760.m_CameraType = i761[3]
  var i763 = i761[4]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760.m_Cameras = i762
  i760.m_RendererIndex = i761[5]
  i760.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i761[6] )
  request.r(i761[7], i761[8], 0, i760, 'm_VolumeTrigger')
  i760.m_VolumeFrameworkUpdateModeOption = i761[9]
  i760.m_RenderPostProcessing = !!i761[10]
  i760.m_Antialiasing = i761[11]
  i760.m_AntialiasingQuality = i761[12]
  i760.m_StopNaN = !!i761[13]
  i760.m_Dithering = !!i761[14]
  i760.m_ClearDepth = !!i761[15]
  i760.m_AllowXRRendering = !!i761[16]
  i760.m_AllowHDROutput = !!i761[17]
  i760.m_UseScreenCoordOverride = !!i761[18]
  i760.m_ScreenSizeOverride = new pc.Vec4( i761[19], i761[20], i761[21], i761[22] )
  i760.m_ScreenCoordScaleBias = new pc.Vec4( i761[23], i761[24], i761[25], i761[26] )
  i760.m_RequiresDepthTexture = !!i761[27]
  i760.m_RequiresColorTexture = !!i761[28]
  i760.m_Version = i761[29]
  i760.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i761[30], i760.m_TaaSettings)
  return i760
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i767 = data
  i766.m_Quality = i767[0]
  i766.m_FrameInfluence = i767[1]
  i766.m_JitterScale = i767[2]
  i766.m_MipBias = i767[3]
  i766.m_VarianceClampScale = i767[4]
  i766.m_ContrastAdaptiveSharpening = i767[5]
  return i766
}

Deserializers["CameraAspect"] = function (request, data, root) {
  var i768 = root || request.c( 'CameraAspect' )
  var i769 = data
  i768.targetAspect = i769[0]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i771 = data
  i770.enabled = !!i771[0]
  i770.type = i771[1]
  i770.color = new pc.Color(i771[2], i771[3], i771[4], i771[5])
  i770.cullingMask = i771[6]
  i770.intensity = i771[7]
  i770.range = i771[8]
  i770.spotAngle = i771[9]
  i770.shadows = i771[10]
  i770.shadowNormalBias = i771[11]
  i770.shadowBias = i771[12]
  i770.shadowStrength = i771[13]
  i770.shadowResolution = i771[14]
  i770.lightmapBakeType = i771[15]
  i770.renderMode = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'cookie')
  i770.cookieSize = i771[19]
  return i770
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i773 = data
  i772.m_Version = i773[0]
  i772.m_UsePipelineSettings = !!i773[1]
  i772.m_AdditionalLightsShadowResolutionTier = i773[2]
  i772.m_LightLayerMask = i773[3]
  i772.m_RenderingLayers = i773[4]
  i772.m_CustomShadowLayers = !!i773[5]
  i772.m_ShadowLayerMask = i773[6]
  i772.m_ShadowRenderingLayers = i773[7]
  i772.m_LightCookieSize = new pc.Vec2( i773[8], i773[9] )
  i772.m_LightCookieOffset = new pc.Vec2( i773[10], i773[11] )
  i772.m_SoftShadowQuality = i773[12]
  return i772
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i775 = data
  i774.priority = i775[0]
  i774.blendDistance = i775[1]
  i774.weight = i775[2]
  request.r(i775[3], i775[4], 0, i774, 'sharedProfile')
  i774.m_IsGlobal = !!i775[5]
  return i774
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_FirstSelected')
  i776.m_sendNavigationEvents = !!i777[2]
  i776.m_DragThreshold = i777[3]
  return i776
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i779 = data
  i778.m_HorizontalAxis = i779[0]
  i778.m_VerticalAxis = i779[1]
  i778.m_SubmitButton = i779[2]
  i778.m_CancelButton = i779[3]
  i778.m_InputActionsPerSecond = i779[4]
  i778.m_RepeatDelay = i779[5]
  i778.m_ForceModuleActive = !!i779[6]
  i778.m_SendPointerHoverToParent = !!i779[7]
  return i778
}

Deserializers["DongHeon.GameManager"] = function (request, data, root) {
  var i780 = root || request.c( 'DongHeon.GameManager' )
  var i781 = data
  var i783 = i781[0]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i780.objectPool = i782
  var i785 = i781[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i780.orderPool = i784
  var i787 = i781[2]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i780.objectSpawnPoses = i786
  var i789 = i781[3]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i780.orderSpawnPoses = i788
  var i791 = i781[4]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i780.cokeGos = i790
  var i793 = i781[5]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i780.JuiceGos = i792
  var i795 = i781[6]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i780.danjiGos = i794
  var i797 = i781[7]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i780.pringlesGos = i796
  var i799 = i781[8]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i780.milkGos = i798
  var i801 = i781[9]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i780.peperoGos = i800
  var i803 = i781[10]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i780.kimbabGos = i802
  var i805 = i781[11]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i780.twinGos = i804
  var i807 = i781[12]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i780.yoplaitGos = i806
  request.r(i781[13], i781[14], 0, i780, 'progressImage')
  request.r(i781[15], i781[16], 0, i780, 'scoreText')
  request.r(i781[17], i781[18], 0, i780, 'comboGO')
  request.r(i781[19], i781[20], 0, i780, 'gameOverPanel')
  i780.objectLayer = UnityEngine.LayerMask.FromIntegerValue( i781[21] )
  return i780
}

Deserializers["MouseCtrl"] = function (request, data, root) {
  var i812 = root || request.c( 'MouseCtrl' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'mainCanvas')
  i812.offsetX = i813[2]
  i812.offsetY = i813[3]
  return i812
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Text' )
  var i815 = data
  i814.m_FontData = request.d('UnityEngine.UI.FontData', i815[0], i814.m_FontData)
  i814.m_Text = i815[1]
  request.r(i815[2], i815[3], 0, i814, 'm_Material')
  i814.m_Maskable = !!i815[4]
  i814.m_Color = new pc.Color(i815[5], i815[6], i815[7], i815[8])
  i814.m_RaycastTarget = !!i815[9]
  i814.m_RaycastPadding = new pc.Vec4( i815[10], i815[11], i815[12], i815[13] )
  return i814
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.FontData' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_Font')
  i816.m_FontSize = i817[2]
  i816.m_FontStyle = i817[3]
  i816.m_BestFit = !!i817[4]
  i816.m_MinSize = i817[5]
  i816.m_MaxSize = i817[6]
  i816.m_Alignment = i817[7]
  i816.m_AlignByGeometry = !!i817[8]
  i816.m_RichText = !!i817[9]
  i816.m_HorizontalOverflow = i817[10]
  i816.m_VerticalOverflow = i817[11]
  i816.m_LineSpacing = i817[12]
  return i816
}

Deserializers["GameOverPanel"] = function (request, data, root) {
  var i818 = root || request.c( 'GameOverPanel' )
  var i819 = data
  return i818
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i821 = data
  i820.m_hasFontAssetChanged = !!i821[0]
  request.r(i821[1], i821[2], 0, i820, 'm_baseMaterial')
  i820.m_maskOffset = new pc.Vec4( i821[3], i821[4], i821[5], i821[6] )
  i820.m_text = i821[7]
  i820.m_isRightToLeft = !!i821[8]
  request.r(i821[9], i821[10], 0, i820, 'm_fontAsset')
  request.r(i821[11], i821[12], 0, i820, 'm_sharedMaterial')
  var i823 = i821[13]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.m_fontSharedMaterials = i822
  request.r(i821[14], i821[15], 0, i820, 'm_fontMaterial')
  var i825 = i821[16]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i820.m_fontMaterials = i824
  i820.m_fontColor32 = UnityEngine.Color32.ConstructColor(i821[17], i821[18], i821[19], i821[20])
  i820.m_fontColor = new pc.Color(i821[21], i821[22], i821[23], i821[24])
  i820.m_enableVertexGradient = !!i821[25]
  i820.m_colorMode = i821[26]
  i820.m_fontColorGradient = request.d('TMPro.VertexGradient', i821[27], i820.m_fontColorGradient)
  request.r(i821[28], i821[29], 0, i820, 'm_fontColorGradientPreset')
  request.r(i821[30], i821[31], 0, i820, 'm_spriteAsset')
  i820.m_tintAllSprites = !!i821[32]
  request.r(i821[33], i821[34], 0, i820, 'm_StyleSheet')
  i820.m_TextStyleHashCode = i821[35]
  i820.m_overrideHtmlColors = !!i821[36]
  i820.m_faceColor = UnityEngine.Color32.ConstructColor(i821[37], i821[38], i821[39], i821[40])
  i820.m_fontSize = i821[41]
  i820.m_fontSizeBase = i821[42]
  i820.m_fontWeight = i821[43]
  i820.m_enableAutoSizing = !!i821[44]
  i820.m_fontSizeMin = i821[45]
  i820.m_fontSizeMax = i821[46]
  i820.m_fontStyle = i821[47]
  i820.m_HorizontalAlignment = i821[48]
  i820.m_VerticalAlignment = i821[49]
  i820.m_textAlignment = i821[50]
  i820.m_characterSpacing = i821[51]
  i820.m_wordSpacing = i821[52]
  i820.m_lineSpacing = i821[53]
  i820.m_lineSpacingMax = i821[54]
  i820.m_paragraphSpacing = i821[55]
  i820.m_charWidthMaxAdj = i821[56]
  i820.m_enableWordWrapping = !!i821[57]
  i820.m_wordWrappingRatios = i821[58]
  i820.m_overflowMode = i821[59]
  request.r(i821[60], i821[61], 0, i820, 'm_linkedTextComponent')
  request.r(i821[62], i821[63], 0, i820, 'parentLinkedComponent')
  i820.m_enableKerning = !!i821[64]
  i820.m_enableExtraPadding = !!i821[65]
  i820.checkPaddingRequired = !!i821[66]
  i820.m_isRichText = !!i821[67]
  i820.m_parseCtrlCharacters = !!i821[68]
  i820.m_isOrthographic = !!i821[69]
  i820.m_isCullingEnabled = !!i821[70]
  i820.m_horizontalMapping = i821[71]
  i820.m_verticalMapping = i821[72]
  i820.m_uvLineOffset = i821[73]
  i820.m_geometrySortingOrder = i821[74]
  i820.m_IsTextObjectScaleStatic = !!i821[75]
  i820.m_VertexBufferAutoSizeReduction = !!i821[76]
  i820.m_useMaxVisibleDescender = !!i821[77]
  i820.m_pageToDisplay = i821[78]
  i820.m_margin = new pc.Vec4( i821[79], i821[80], i821[81], i821[82] )
  i820.m_isUsingLegacyAnimationComponent = !!i821[83]
  i820.m_isVolumetricText = !!i821[84]
  request.r(i821[85], i821[86], 0, i820, 'm_Material')
  i820.m_Maskable = !!i821[87]
  i820.m_Color = new pc.Color(i821[88], i821[89], i821[90], i821[91])
  i820.m_RaycastTarget = !!i821[92]
  i820.m_RaycastPadding = new pc.Vec4( i821[93], i821[94], i821[95], i821[96] )
  return i820
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.VertexGradient' )
  var i827 = data
  i826.topLeft = new pc.Color(i827[0], i827[1], i827[2], i827[3])
  i826.topRight = new pc.Color(i827[4], i827[5], i827[6], i827[7])
  i826.bottomLeft = new pc.Color(i827[8], i827[9], i827[10], i827[11])
  i826.bottomRight = new pc.Color(i827[12], i827[13], i827[14], i827[15])
  return i826
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.Button' )
  var i829 = data
  i828.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i829[0], i828.m_OnClick)
  i828.m_Navigation = request.d('UnityEngine.UI.Navigation', i829[1], i828.m_Navigation)
  i828.m_Transition = i829[2]
  i828.m_Colors = request.d('UnityEngine.UI.ColorBlock', i829[3], i828.m_Colors)
  i828.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i829[4], i828.m_SpriteState)
  i828.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i829[5], i828.m_AnimationTriggers)
  i828.m_Interactable = !!i829[6]
  request.r(i829[7], i829[8], 0, i828, 'm_TargetGraphic')
  return i828
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i831 = data
  i830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i831[0], i830.m_PersistentCalls)
  return i830
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('UnityEngine.Events.PersistentCall', i835[i + 0]));
  }
  i832.m_Calls = i834
  return i832
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Target')
  i838.m_TargetAssemblyTypeName = i839[2]
  i838.m_MethodName = i839[3]
  i838.m_Mode = i839[4]
  i838.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i839[5], i838.m_Arguments)
  i838.m_CallState = i839[6]
  return i838
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'm_ObjectArgument')
  i840.m_ObjectArgumentAssemblyTypeName = i841[2]
  i840.m_IntArgument = i841[3]
  i840.m_FloatArgument = i841[4]
  i840.m_StringArgument = i841[5]
  i840.m_BoolArgument = !!i841[6]
  return i840
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i843 = data
  i842.m_Mode = i843[0]
  i842.m_WrapAround = !!i843[1]
  request.r(i843[2], i843[3], 0, i842, 'm_SelectOnUp')
  request.r(i843[4], i843[5], 0, i842, 'm_SelectOnDown')
  request.r(i843[6], i843[7], 0, i842, 'm_SelectOnLeft')
  request.r(i843[8], i843[9], 0, i842, 'm_SelectOnRight')
  return i842
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i845 = data
  i844.m_NormalColor = new pc.Color(i845[0], i845[1], i845[2], i845[3])
  i844.m_HighlightedColor = new pc.Color(i845[4], i845[5], i845[6], i845[7])
  i844.m_PressedColor = new pc.Color(i845[8], i845[9], i845[10], i845[11])
  i844.m_SelectedColor = new pc.Color(i845[12], i845[13], i845[14], i845[15])
  i844.m_DisabledColor = new pc.Color(i845[16], i845[17], i845[18], i845[19])
  i844.m_ColorMultiplier = i845[20]
  i844.m_FadeDuration = i845[21]
  return i844
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_HighlightedSprite')
  request.r(i847[2], i847[3], 0, i846, 'm_PressedSprite')
  request.r(i847[4], i847[5], 0, i846, 'm_SelectedSprite')
  request.r(i847[6], i847[7], 0, i846, 'm_DisabledSprite')
  return i846
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i849 = data
  i848.m_NormalTrigger = i849[0]
  i848.m_HighlightedTrigger = i849[1]
  i848.m_PressedTrigger = i849[2]
  i848.m_SelectedTrigger = i849[3]
  i848.m_DisabledTrigger = i849[4]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i851 = data
  i850.ambientIntensity = i851[0]
  i850.reflectionIntensity = i851[1]
  i850.ambientMode = i851[2]
  i850.ambientLight = new pc.Color(i851[3], i851[4], i851[5], i851[6])
  i850.ambientSkyColor = new pc.Color(i851[7], i851[8], i851[9], i851[10])
  i850.ambientGroundColor = new pc.Color(i851[11], i851[12], i851[13], i851[14])
  i850.ambientEquatorColor = new pc.Color(i851[15], i851[16], i851[17], i851[18])
  i850.fogColor = new pc.Color(i851[19], i851[20], i851[21], i851[22])
  i850.fogEndDistance = i851[23]
  i850.fogStartDistance = i851[24]
  i850.fogDensity = i851[25]
  i850.fog = !!i851[26]
  request.r(i851[27], i851[28], 0, i850, 'skybox')
  i850.fogMode = i851[29]
  var i853 = i851[30]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i853[i + 0]) );
  }
  i850.lightmaps = i852
  i850.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i851[31], i850.lightProbes)
  i850.lightmapsMode = i851[32]
  i850.mixedBakeMode = i851[33]
  i850.environmentLightingMode = i851[34]
  i850.ambientProbe = new pc.SphericalHarmonicsL2(i851[35])
  i850.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i851[36])
  i850.useReferenceAmbientProbe = !!i851[37]
  request.r(i851[38], i851[39], 0, i850, 'customReflection')
  request.r(i851[40], i851[41], 0, i850, 'defaultReflection')
  i850.defaultReflectionMode = i851[42]
  i850.defaultReflectionResolution = i851[43]
  i850.sunLightObjectId = i851[44]
  i850.pixelLightCount = i851[45]
  i850.defaultReflectionHDR = !!i851[46]
  i850.hasLightDataAsset = !!i851[47]
  i850.hasManualGenerate = !!i851[48]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'lightmapColor')
  request.r(i857[2], i857[3], 0, i856, 'lightmapDirection')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i858 = root || new UnityEngine.LightProbes()
  var i859 = data
  return i858
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'panelPrefab')
  var i869 = i867[2]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i869[i + 0]));
  }
  i866.prefabs = i868
  return i866
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i873 = data
  i872.type = i873[0]
  request.r(i873[1], i873[2], 0, i872, 'prefab')
  return i872
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i875 = data
  i874.m_Spacing = i875[0]
  i874.m_ChildForceExpandWidth = !!i875[1]
  i874.m_ChildForceExpandHeight = !!i875[2]
  i874.m_ChildControlWidth = !!i875[3]
  i874.m_ChildControlHeight = !!i875[4]
  i874.m_ChildScaleWidth = !!i875[5]
  i874.m_ChildScaleHeight = !!i875[6]
  i874.m_ReverseArrangement = !!i875[7]
  i874.m_Padding = UnityEngine.RectOffset.FromPaddings(i875[8], i875[9], i875[10], i875[11])
  i874.m_ChildAlignment = i875[12]
  return i874
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i877 = data
  i876.m_HorizontalFit = i877[0]
  i876.m_VerticalFit = i877[1]
  return i876
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'contentHolder')
  return i878
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'nameLabel')
  request.r(i881[2], i881[3], 0, i880, 'scrollRect')
  request.r(i881[4], i881[5], 0, i880, 'viewport')
  request.r(i881[6], i881[7], 0, i880, 'Canvas')
  return i880
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i883 = data
  i882.m_IgnoreLayout = !!i883[0]
  i882.m_MinWidth = i883[1]
  i882.m_MinHeight = i883[2]
  i882.m_PreferredWidth = i883[3]
  i882.m_PreferredHeight = i883[4]
  i882.m_FlexibleWidth = i883[5]
  i882.m_FlexibleHeight = i883[6]
  i882.m_LayoutPriority = i883[7]
  return i882
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_Content')
  i884.m_Horizontal = !!i885[2]
  i884.m_Vertical = !!i885[3]
  i884.m_MovementType = i885[4]
  i884.m_Elasticity = i885[5]
  i884.m_Inertia = !!i885[6]
  i884.m_DecelerationRate = i885[7]
  i884.m_ScrollSensitivity = i885[8]
  request.r(i885[9], i885[10], 0, i884, 'm_Viewport')
  request.r(i885[11], i885[12], 0, i884, 'm_HorizontalScrollbar')
  request.r(i885[13], i885[14], 0, i884, 'm_VerticalScrollbar')
  i884.m_HorizontalScrollbarVisibility = i885[15]
  i884.m_VerticalScrollbarVisibility = i885[16]
  i884.m_HorizontalScrollbarSpacing = i885[17]
  i884.m_VerticalScrollbarSpacing = i885[18]
  i884.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i885[19], i884.m_OnValueChanged)
  return i884
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i887 = data
  i886.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i887[0], i886.m_PersistentCalls)
  return i886
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.Mask' )
  var i889 = data
  i888.m_ShowMaskGraphic = !!i889[0]
  return i888
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'm_HandleRect')
  i890.m_Direction = i891[2]
  i890.m_Value = i891[3]
  i890.m_Size = i891[4]
  i890.m_NumberOfSteps = i891[5]
  i890.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i891[6], i890.m_OnValueChanged)
  i890.m_Navigation = request.d('UnityEngine.UI.Navigation', i891[7], i890.m_Navigation)
  i890.m_Transition = i891[8]
  i890.m_Colors = request.d('UnityEngine.UI.ColorBlock', i891[9], i890.m_Colors)
  i890.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i891[10], i890.m_SpriteState)
  i890.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i891[11], i890.m_AnimationTriggers)
  i890.m_Interactable = !!i891[12]
  request.r(i891[13], i891[14], 0, i890, 'm_TargetGraphic')
  return i890
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i897[i + 0]));
  }
  i894.m_Delegates = i896
  return i894
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i901 = data
  i900.eventID = i901[0]
  i900.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i901[1], i900.callback)
  return i900
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i903 = data
  i902.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i903[0], i902.m_PersistentCalls)
  return i902
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'nameLabel')
  request.r(i905[2], i905[3], 0, i904, 'valueLabel')
  i904.colorDefault = new pc.Color(i905[4], i905[5], i905[6], i905[7])
  i904.colorSelected = new pc.Color(i905[8], i905[9], i905[10], i905[11])
  return i904
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'nameLabel')
  request.r(i907[2], i907[3], 0, i906, 'valueToggle')
  request.r(i907[4], i907[5], 0, i906, 'checkmarkImage')
  i906.colorDefault = new pc.Color(i907[6], i907[7], i907[8], i907[9])
  i906.colorSelected = new pc.Color(i907[10], i907[11], i907[12], i907[13])
  return i906
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i909 = data
  i908.toggleTransition = i909[0]
  request.r(i909[1], i909[2], 0, i908, 'graphic')
  i908.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i909[3], i908.onValueChanged)
  request.r(i909[4], i909[5], 0, i908, 'm_Group')
  i908.m_IsOn = !!i909[6]
  i908.m_Navigation = request.d('UnityEngine.UI.Navigation', i909[7], i908.m_Navigation)
  i908.m_Transition = i909[8]
  i908.m_Colors = request.d('UnityEngine.UI.ColorBlock', i909[9], i908.m_Colors)
  i908.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i909[10], i908.m_SpriteState)
  i908.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i909[11], i908.m_AnimationTriggers)
  i908.m_Interactable = !!i909[12]
  request.r(i909[13], i909[14], 0, i908, 'm_TargetGraphic')
  return i908
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i911 = data
  i910.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i911[0], i910.m_PersistentCalls)
  return i910
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'nameLabel')
  request.r(i913[2], i913[3], 0, i912, 'valueLabel')
  i912.colorDefault = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.colorSelected = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  return i912
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'nameLabel')
  request.r(i915[2], i915[3], 0, i914, 'valueLabel')
  i914.colorDefault = new pc.Color(i915[4], i915[5], i915[6], i915[7])
  i914.colorSelected = new pc.Color(i915[8], i915[9], i915[10], i915[11])
  return i914
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'nameLabel')
  request.r(i917[2], i917[3], 0, i916, 'valueLabel')
  i916.colorDefault = new pc.Color(i917[4], i917[5], i917[6], i917[7])
  i916.colorSelected = new pc.Color(i917[8], i917[9], i917[10], i917[11])
  return i916
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'nextButtonText')
  request.r(i919[2], i919[3], 0, i918, 'previousButtonText')
  request.r(i919[4], i919[5], 0, i918, 'nameLabel')
  request.r(i919[6], i919[7], 0, i918, 'valueLabel')
  i918.colorDefault = new pc.Color(i919[8], i919[9], i919[10], i919[11])
  i918.colorSelected = new pc.Color(i919[12], i919[13], i919[14], i919[15])
  return i918
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'nameLabel')
  i920.colorDefault = new pc.Color(i921[2], i921[3], i921[4], i921[5])
  i920.colorSelected = new pc.Color(i921[6], i921[7], i921[8], i921[9])
  return i920
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'nameLabel')
  request.r(i923[2], i923[3], 0, i922, 'valueToggle')
  i922.colorDefault = new pc.Color(i923[4], i923[5], i923[6], i923[7])
  i922.colorSelected = new pc.Color(i923[8], i923[9], i923[10], i923[11])
  return i922
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i925 = data
  i924.toggleTransition = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'graphic')
  i924.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i925[3], i924.onValueChanged)
  request.r(i925[4], i925[5], 0, i924, 'content')
  request.r(i925[6], i925[7], 0, i924, 'arrowOpened')
  request.r(i925[8], i925[9], 0, i924, 'arrowClosed')
  request.r(i925[10], i925[11], 0, i924, 'm_Group')
  i924.m_IsOn = !!i925[12]
  i924.m_Navigation = request.d('UnityEngine.UI.Navigation', i925[13], i924.m_Navigation)
  i924.m_Transition = i925[14]
  i924.m_Colors = request.d('UnityEngine.UI.ColorBlock', i925[15], i924.m_Colors)
  i924.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i925[16], i924.m_SpriteState)
  i924.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i925[17], i924.m_AnimationTriggers)
  i924.m_Interactable = !!i925[18]
  request.r(i925[19], i925[20], 0, i924, 'm_TargetGraphic')
  return i924
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'nameLabel')
  request.r(i927[2], i927[3], 0, i926, 'valueToggle')
  request.r(i927[4], i927[5], 0, i926, 'colorImage')
  request.r(i927[6], i927[7], 0, i926, 'fieldR')
  request.r(i927[8], i927[9], 0, i926, 'fieldG')
  request.r(i927[10], i927[11], 0, i926, 'fieldB')
  request.r(i927[12], i927[13], 0, i926, 'fieldA')
  i926.colorDefault = new pc.Color(i927[14], i927[15], i927[16], i927[17])
  i926.colorSelected = new pc.Color(i927[18], i927[19], i927[20], i927[21])
  return i926
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'nameLabel')
  request.r(i929[2], i929[3], 0, i928, 'valueLabel')
  i928.colorDefault = new pc.Color(i929[4], i929[5], i929[6], i929[7])
  i928.colorSelected = new pc.Color(i929[8], i929[9], i929[10], i929[11])
  return i928
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'nameLabel')
  request.r(i931[2], i931[3], 0, i930, 'valueToggle')
  request.r(i931[4], i931[5], 0, i930, 'fieldX')
  request.r(i931[6], i931[7], 0, i930, 'fieldY')
  i930.colorDefault = new pc.Color(i931[8], i931[9], i931[10], i931[11])
  i930.colorSelected = new pc.Color(i931[12], i931[13], i931[14], i931[15])
  return i930
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'nameLabel')
  request.r(i933[2], i933[3], 0, i932, 'valueToggle')
  request.r(i933[4], i933[5], 0, i932, 'fieldX')
  request.r(i933[6], i933[7], 0, i932, 'fieldY')
  request.r(i933[8], i933[9], 0, i932, 'fieldZ')
  i932.colorDefault = new pc.Color(i933[10], i933[11], i933[12], i933[13])
  i932.colorSelected = new pc.Color(i933[14], i933[15], i933[16], i933[17])
  return i932
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'nameLabel')
  request.r(i935[2], i935[3], 0, i934, 'valueToggle')
  request.r(i935[4], i935[5], 0, i934, 'fieldX')
  request.r(i935[6], i935[7], 0, i934, 'fieldY')
  request.r(i935[8], i935[9], 0, i934, 'fieldZ')
  request.r(i935[10], i935[11], 0, i934, 'fieldW')
  i934.colorDefault = new pc.Color(i935[12], i935[13], i935[14], i935[15])
  i934.colorSelected = new pc.Color(i935[16], i935[17], i935[18], i935[19])
  return i934
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i937 = data
  i936.colorDefault = new pc.Color(i937[0], i937[1], i937[2], i937[3])
  i936.colorSelected = new pc.Color(i937[4], i937[5], i937[6], i937[7])
  return i936
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i939 = data
  i938.m_Spacing = i939[0]
  i938.m_ChildForceExpandWidth = !!i939[1]
  i938.m_ChildForceExpandHeight = !!i939[2]
  i938.m_ChildControlWidth = !!i939[3]
  i938.m_ChildControlHeight = !!i939[4]
  i938.m_ChildScaleWidth = !!i939[5]
  i938.m_ChildScaleHeight = !!i939[6]
  i938.m_ReverseArrangement = !!i939[7]
  i938.m_Padding = UnityEngine.RectOffset.FromPaddings(i939[8], i939[9], i939[10], i939[11])
  i938.m_ChildAlignment = i939[12]
  return i938
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i941 = data
  i940.colorDefault = new pc.Color(i941[0], i941[1], i941[2], i941[3])
  i940.colorSelected = new pc.Color(i941[4], i941[5], i941[6], i941[7])
  return i940
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'nameLabel')
  request.r(i943[2], i943[3], 0, i942, 'header')
  i942.colorDefault = new pc.Color(i943[4], i943[5], i943[6], i943[7])
  i942.colorSelected = new pc.Color(i943[8], i943[9], i943[10], i943[11])
  return i942
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'nameLabel')
  request.r(i945[2], i945[3], 0, i944, 'valueToggle')
  var i947 = i945[4]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i944.toggles = i946
  i944.colorDefault = new pc.Color(i945[5], i945[6], i945[7], i945[8])
  i944.colorSelected = new pc.Color(i945[9], i945[10], i945[11], i945[12])
  return i944
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'nameLabel')
  request.r(i951[2], i951[3], 0, i950, 'valueToggle')
  request.r(i951[4], i951[5], 0, i950, 'checkmarkImage')
  i950.colorDefault = new pc.Color(i951[6], i951[7], i951[8], i951[9])
  i950.colorSelected = new pc.Color(i951[10], i951[11], i951[12], i951[13])
  return i950
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'nameLabel')
  request.r(i953[2], i953[3], 0, i952, 'valueToggle')
  request.r(i953[4], i953[5], 0, i952, 'checkmarkImage')
  i952.colorDefault = new pc.Color(i953[6], i953[7], i953[8], i953[9])
  i952.colorSelected = new pc.Color(i953[10], i953[11], i953[12], i953[13])
  return i952
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'nextButtonText')
  request.r(i955[2], i955[3], 0, i954, 'previousButtonText')
  request.r(i955[4], i955[5], 0, i954, 'nameLabel')
  request.r(i955[6], i955[7], 0, i954, 'valueLabel')
  i954.colorDefault = new pc.Color(i955[8], i955[9], i955[10], i955[11])
  i954.colorSelected = new pc.Color(i955[12], i955[13], i955[14], i955[15])
  return i954
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'nameLabel')
  request.r(i957[2], i957[3], 0, i956, 'valueToggle')
  i956.colorDefault = new pc.Color(i957[4], i957[5], i957[6], i957[7])
  i956.colorSelected = new pc.Color(i957[8], i957[9], i957[10], i957[11])
  return i956
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'nameLabel')
  i958.colorDefault = new pc.Color(i959[2], i959[3], i959[4], i959[5])
  i958.colorSelected = new pc.Color(i959[6], i959[7], i959[8], i959[9])
  return i958
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'nameLabel')
  request.r(i961[2], i961[3], 0, i960, 'valueLabel')
  request.r(i961[4], i961[5], 0, i960, 'progressBarRect')
  i960.colorDefault = new pc.Color(i961[6], i961[7], i961[8], i961[9])
  i960.colorSelected = new pc.Color(i961[10], i961[11], i961[12], i961[13])
  return i960
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'nameLabel')
  request.r(i963[2], i963[3], 0, i962, 'valueLabel')
  i962.colorDefault = new pc.Color(i963[4], i963[5], i963[6], i963[7])
  i962.colorSelected = new pc.Color(i963[8], i963[9], i963[10], i963[11])
  return i962
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'nameLabel')
  request.r(i965[2], i965[3], 0, i964, 'valueLabel')
  i964.colorDefault = new pc.Color(i965[4], i965[5], i965[6], i965[7])
  i964.colorSelected = new pc.Color(i965[8], i965[9], i965[10], i965[11])
  return i964
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'nextButtonText')
  request.r(i967[2], i967[3], 0, i966, 'previousButtonText')
  request.r(i967[4], i967[5], 0, i966, 'nameLabel')
  request.r(i967[6], i967[7], 0, i966, 'valueLabel')
  i966.colorDefault = new pc.Color(i967[8], i967[9], i967[10], i967[11])
  i966.colorSelected = new pc.Color(i967[12], i967[13], i967[14], i967[15])
  return i966
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'nextButtonText')
  request.r(i969[2], i969[3], 0, i968, 'previousButtonText')
  request.r(i969[4], i969[5], 0, i968, 'nameLabel')
  request.r(i969[6], i969[7], 0, i968, 'valueLabel')
  i968.colorDefault = new pc.Color(i969[8], i969[9], i969[10], i969[11])
  i968.colorSelected = new pc.Color(i969[12], i969[13], i969[14], i969[15])
  return i968
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'panel')
  request.r(i971[2], i971[3], 0, i970, 'valuePrefab')
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i973 = data
  i972.AdditionalLightsPerObjectLimit = i973[0]
  i972.AdditionalLightsRenderingMode = i973[1]
  i972.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i973[2], i972.LightRenderingMode)
  i972.ColorGradingLutSize = i973[3]
  i972.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i973[4], i972.ColorGradingMode)
  i972.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i973[5], i972.MainLightRenderingMode)
  i972.MainLightRenderingModeValue = i973[6]
  i972.SupportsMainLightShadows = !!i973[7]
  i972.MixedLightingSupported = !!i973[8]
  i972.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i973[9], i972.MsaaQuality)
  i972.MSAA = i973[10]
  i972.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i973[11], i972.OpaqueDownsampling)
  i972.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i973[12], i972.MainLightShadowmapResolution)
  i972.MainLightShadowmapResolutionValue = i973[13]
  i972.SupportsSoftShadows = !!i973[14]
  i972.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i973[15], i972.SoftShadowQuality)
  i972.SoftShadowQualityValue = i973[16]
  i972.ShadowDistance = i973[17]
  i972.ShadowCascadeCount = i973[18]
  i972.Cascade2Split = i973[19]
  i972.Cascade3Split = new pc.Vec2( i973[20], i973[21] )
  i972.Cascade4Split = new pc.Vec3( i973[22], i973[23], i973[24] )
  i972.CascadeBorder = i973[25]
  i972.ShadowDepthBias = i973[26]
  i972.ShadowNormalBias = i973[27]
  i972.RenderScale = i973[28]
  i972.RequireDepthTexture = !!i973[29]
  i972.RequireOpaqueTexture = !!i973[30]
  i972.SupportsHDR = !!i973[31]
  i972.SupportsTerrainHoles = !!i973[32]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i975 = data
  i974.Disabled = i975[0]
  i974.PerVertex = i975[1]
  i974.PerPixel = i975[2]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i977 = data
  i976.LowDynamicRange = i977[0]
  i976.HighDynamicRange = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i979 = data
  i978.Disabled = i979[0]
  i978._2x = i979[1]
  i978._4x = i979[2]
  i978._8x = i979[3]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i981 = data
  i980.None = i981[0]
  i980._2xBilinear = i981[1]
  i980._4xBox = i981[2]
  i980._4xBilinear = i981[3]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i983 = data
  i982._256 = i983[0]
  i982._512 = i983[1]
  i982._1024 = i983[2]
  i982._2048 = i983[3]
  i982._4096 = i983[4]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i985 = data
  i984.UsePipelineSettings = i985[0]
  i984.Low = i985[1]
  i984.Medium = i985[2]
  i984.High = i985[3]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i989[i + 0]));
  }
  i986.ShaderCompilationErrors = i988
  i986.name = i987[1]
  i986.guid = i987[2]
  var i991 = i987[3]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i986.shaderDefinedKeywords = i990
  var i993 = i987[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i993[i + 0]) );
  }
  i986.passes = i992
  var i995 = i987[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i995[i + 0]) );
  }
  i986.usePasses = i994
  var i997 = i987[6]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i997[i + 0]) );
  }
  i986.defaultParameterValues = i996
  request.r(i987[7], i987[8], 0, i986, 'unityFallbackShader')
  i986.readDepth = !!i987[9]
  i986.isCreatedByShaderGraph = !!i987[10]
  i986.compiled = !!i987[11]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1001 = data
  i1000.shaderName = i1001[0]
  i1000.errorMessage = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1006 = root || new pc.UnityShaderPass()
  var i1007 = data
  i1006.id = i1007[0]
  i1006.subShaderIndex = i1007[1]
  i1006.name = i1007[2]
  i1006.passType = i1007[3]
  i1006.grabPassTextureName = i1007[4]
  i1006.usePass = !!i1007[5]
  i1006.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[6], i1006.zTest)
  i1006.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[7], i1006.zWrite)
  i1006.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[8], i1006.culling)
  i1006.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1007[9], i1006.blending)
  i1006.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1007[10], i1006.alphaBlending)
  i1006.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[11], i1006.colorWriteMask)
  i1006.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[12], i1006.offsetUnits)
  i1006.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[13], i1006.offsetFactor)
  i1006.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[14], i1006.stencilRef)
  i1006.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[15], i1006.stencilReadMask)
  i1006.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[16], i1006.stencilWriteMask)
  i1006.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[17], i1006.stencilOp)
  i1006.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[18], i1006.stencilOpFront)
  i1006.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[19], i1006.stencilOpBack)
  var i1009 = i1007[20]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1009[i + 0]) );
  }
  i1006.tags = i1008
  var i1011 = i1007[21]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1006.passDefinedKeywords = i1010
  var i1013 = i1007[22]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1013[i + 0]) );
  }
  i1006.passDefinedKeywordGroups = i1012
  var i1015 = i1007[23]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1015[i + 0]) );
  }
  i1006.variants = i1014
  var i1017 = i1007[24]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1017[i + 0]) );
  }
  i1006.excludedVariants = i1016
  i1006.hasDepthReader = !!i1007[25]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1019 = data
  i1018.val = i1019[0]
  i1018.name = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1021 = data
  i1020.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[0], i1020.src)
  i1020.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[1], i1020.dst)
  i1020.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[2], i1020.op)
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1023 = data
  i1022.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[0], i1022.pass)
  i1022.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[1], i1022.fail)
  i1022.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[2], i1022.zFail)
  i1022.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[3], i1022.comp)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.value = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1030.keywords = i1032
  i1030.hasDiscard = !!i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1037 = data
  i1036.passId = i1037[0]
  i1036.subShaderIndex = i1037[1]
  var i1039 = i1037[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1036.keywords = i1038
  i1036.vertexProgram = i1037[3]
  i1036.fragmentProgram = i1037[4]
  i1036.exportedForWebGl2 = !!i1037[5]
  i1036.readDepth = !!i1037[6]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'shader')
  i1042.pass = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1047 = data
  i1046.name = i1047[0]
  i1046.type = i1047[1]
  i1046.value = new pc.Vec4( i1047[2], i1047[3], i1047[4], i1047[5] )
  i1046.textureValue = i1047[6]
  i1046.shaderPropertyFlag = i1047[7]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1049 = data
  i1048.name = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'texture')
  i1048.aabb = i1049[3]
  i1048.vertices = i1049[4]
  i1048.triangles = i1049[5]
  i1048.textureRect = UnityEngine.Rect.MinMaxRect(i1049[6], i1049[7], i1049[8], i1049[9])
  i1048.packedRect = UnityEngine.Rect.MinMaxRect(i1049[10], i1049[11], i1049[12], i1049[13])
  i1048.border = new pc.Vec4( i1049[14], i1049[15], i1049[16], i1049[17] )
  i1048.transparency = i1049[18]
  i1048.bounds = i1049[19]
  i1048.pixelsPerUnit = i1049[20]
  i1048.textureWidth = i1049[21]
  i1048.textureHeight = i1049[22]
  i1048.nativeSize = new pc.Vec2( i1049[23], i1049[24] )
  i1048.pivot = new pc.Vec2( i1049[25], i1049[26] )
  i1048.textureRectOffset = new pc.Vec2( i1049[27], i1049[28] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.ascent = i1051[1]
  i1050.originalLineHeight = i1051[2]
  i1050.fontSize = i1051[3]
  var i1053 = i1051[4]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1053[i + 0]) );
  }
  i1050.characterInfo = i1052
  request.r(i1051[5], i1051[6], 0, i1050, 'texture')
  i1050.originalFontSize = i1051[7]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1057 = data
  i1056.index = i1057[0]
  i1056.advance = i1057[1]
  i1056.bearing = i1057[2]
  i1056.glyphWidth = i1057[3]
  i1056.glyphHeight = i1057[4]
  i1056.minX = i1057[5]
  i1056.maxX = i1057[6]
  i1056.minY = i1057[7]
  i1056.maxY = i1057[8]
  i1056.uvBottomLeftX = i1057[9]
  i1056.uvBottomLeftY = i1057[10]
  i1056.uvBottomRightX = i1057[11]
  i1056.uvBottomRightY = i1057[12]
  i1056.uvTopLeftX = i1057[13]
  i1056.uvTopLeftY = i1057[14]
  i1056.uvTopRightX = i1057[15]
  i1056.uvTopRightY = i1057[16]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.bytes64 = i1059[1]
  i1058.data = i1059[2]
  return i1058
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 1, i1062, '')
  }
  i1060.components = i1062
  return i1060
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1067 = data
  i1066.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1067[0], i1066.mode)
  i1066.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1067[1], i1066.neutralHDRRangeReductionMode)
  i1066.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1067[2], i1066.acesPreset)
  i1066.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1067[3], i1066.hueShiftAmount)
  i1066.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1067[4], i1066.detectPaperWhite)
  i1066.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1067[5], i1066.paperWhite)
  i1066.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1067[6], i1066.detectBrightnessLimits)
  i1066.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1067[7], i1066.minNits)
  i1066.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1067[8], i1066.maxNits)
  i1066.active = !!i1067[9]
  return i1066
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1069 = data
  i1068.m_Value = i1069[0]
  i1068.m_OverrideState = !!i1069[1]
  return i1068
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1071 = data
  i1070.m_Value = i1071[0]
  i1070.m_OverrideState = !!i1071[1]
  return i1070
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1073 = data
  i1072.m_Value = i1073[0]
  i1072.m_OverrideState = !!i1073[1]
  return i1072
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1075 = data
  i1074.m_Value = i1075[0]
  i1074.m_OverrideState = !!i1075[1]
  return i1074
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1077 = data
  i1076.m_Value = !!i1077[0]
  i1076.m_OverrideState = !!i1077[1]
  return i1076
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1079 = data
  i1078.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1079[0], i1078.skipIterations)
  i1078.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1079[1], i1078.threshold)
  i1078.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1079[2], i1078.intensity)
  i1078.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1079[3], i1078.scatter)
  i1078.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1079[4], i1078.clamp)
  i1078.tint = request.d('UnityEngine.Rendering.ColorParameter', i1079[5], i1078.tint)
  i1078.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1079[6], i1078.highQualityFiltering)
  i1078.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1079[7], i1078.downscale)
  i1078.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1079[8], i1078.maxIterations)
  i1078.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1079[9], i1078.dirtTexture)
  i1078.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1079[10], i1078.dirtIntensity)
  i1078.active = !!i1079[11]
  return i1078
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1081 = data
  i1080.m_Value = i1081[0]
  i1080.m_OverrideState = !!i1081[1]
  return i1080
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1083 = data
  i1082.m_Value = i1083[0]
  i1082.m_OverrideState = !!i1083[1]
  return i1082
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1085 = data
  i1084.m_Value = new pc.Color(i1085[0], i1085[1], i1085[2], i1085[3])
  i1084.m_OverrideState = !!i1085[4]
  return i1084
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1087 = data
  i1086.m_Value = i1087[0]
  i1086.m_OverrideState = !!i1087[1]
  return i1086
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1089 = data
  i1088.dimension = i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'm_Value')
  i1088.m_OverrideState = !!i1089[3]
  return i1088
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1091 = data
  i1090.color = request.d('UnityEngine.Rendering.ColorParameter', i1091[0], i1090.color)
  i1090.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1091[1], i1090.center)
  i1090.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1091[2], i1090.intensity)
  i1090.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1091[3], i1090.smoothness)
  i1090.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1091[4], i1090.rounded)
  i1090.active = !!i1091[5]
  return i1090
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1093 = data
  i1092.m_Value = new pc.Vec2( i1093[0], i1093[1] )
  i1092.m_OverrideState = !!i1093[2]
  return i1092
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1095 = data
  i1094.hashCode = i1095[0]
  request.r(i1095[1], i1095[2], 0, i1094, 'material')
  i1094.materialHashCode = i1095[3]
  request.r(i1095[4], i1095[5], 0, i1094, 'atlas')
  i1094.normalStyle = i1095[6]
  i1094.normalSpacingOffset = i1095[7]
  i1094.boldStyle = i1095[8]
  i1094.boldSpacing = i1095[9]
  i1094.italicStyle = i1095[10]
  i1094.tabSize = i1095[11]
  i1094.m_Version = i1095[12]
  i1094.m_SourceFontFileGUID = i1095[13]
  request.r(i1095[14], i1095[15], 0, i1094, 'm_SourceFontFile_EditorRef')
  request.r(i1095[16], i1095[17], 0, i1094, 'm_SourceFontFile')
  i1094.m_AtlasPopulationMode = i1095[18]
  i1094.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1095[19], i1094.m_FaceInfo)
  var i1097 = i1095[20]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('UnityEngine.TextCore.Glyph', i1097[i + 0]));
  }
  i1094.m_GlyphTable = i1096
  var i1099 = i1095[21]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('TMPro.TMP_Character', i1099[i + 0]));
  }
  i1094.m_CharacterTable = i1098
  var i1101 = i1095[22]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1094.m_AtlasTextures = i1100
  i1094.m_AtlasTextureIndex = i1095[23]
  i1094.m_IsMultiAtlasTexturesEnabled = !!i1095[24]
  i1094.m_ClearDynamicDataOnBuild = !!i1095[25]
  var i1103 = i1095[26]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('UnityEngine.TextCore.GlyphRect', i1103[i + 0]));
  }
  i1094.m_UsedGlyphRects = i1102
  var i1105 = i1095[27]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('UnityEngine.TextCore.GlyphRect', i1105[i + 0]));
  }
  i1094.m_FreeGlyphRects = i1104
  i1094.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1095[28], i1094.m_fontInfo)
  i1094.m_AtlasWidth = i1095[29]
  i1094.m_AtlasHeight = i1095[30]
  i1094.m_AtlasPadding = i1095[31]
  i1094.m_AtlasRenderMode = i1095[32]
  var i1107 = i1095[33]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('TMPro.TMP_Glyph', i1107[i + 0]));
  }
  i1094.m_glyphInfoList = i1106
  i1094.m_KerningTable = request.d('TMPro.KerningTable', i1095[34], i1094.m_KerningTable)
  i1094.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1095[35], i1094.m_FontFeatureTable)
  var i1109 = i1095[36]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1109.length; i += 2) {
  request.r(i1109[i + 0], i1109[i + 1], 1, i1108, '')
  }
  i1094.fallbackFontAssets = i1108
  var i1111 = i1095[37]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 1, i1110, '')
  }
  i1094.m_FallbackFontAssetTable = i1110
  i1094.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1095[38], i1094.m_CreationSettings)
  var i1113 = i1095[39]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('TMPro.TMP_FontWeightPair', i1113[i + 0]) );
  }
  i1094.m_FontWeightTable = i1112
  var i1115 = i1095[40]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('TMPro.TMP_FontWeightPair', i1115[i + 0]) );
  }
  i1094.fontWeights = i1114
  return i1094
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1117 = data
  i1116.m_FaceIndex = i1117[0]
  i1116.m_FamilyName = i1117[1]
  i1116.m_StyleName = i1117[2]
  i1116.m_PointSize = i1117[3]
  i1116.m_Scale = i1117[4]
  i1116.m_UnitsPerEM = i1117[5]
  i1116.m_LineHeight = i1117[6]
  i1116.m_AscentLine = i1117[7]
  i1116.m_CapLine = i1117[8]
  i1116.m_MeanLine = i1117[9]
  i1116.m_Baseline = i1117[10]
  i1116.m_DescentLine = i1117[11]
  i1116.m_SuperscriptOffset = i1117[12]
  i1116.m_SuperscriptSize = i1117[13]
  i1116.m_SubscriptOffset = i1117[14]
  i1116.m_SubscriptSize = i1117[15]
  i1116.m_UnderlineOffset = i1117[16]
  i1116.m_UnderlineThickness = i1117[17]
  i1116.m_StrikethroughOffset = i1117[18]
  i1116.m_StrikethroughThickness = i1117[19]
  i1116.m_TabWidth = i1117[20]
  return i1116
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1121 = data
  i1120.m_Index = i1121[0]
  i1120.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1121[1], i1120.m_Metrics)
  i1120.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1121[2], i1120.m_GlyphRect)
  i1120.m_Scale = i1121[3]
  i1120.m_AtlasIndex = i1121[4]
  i1120.m_ClassDefinitionType = i1121[5]
  return i1120
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1123 = data
  i1122.m_Width = i1123[0]
  i1122.m_Height = i1123[1]
  i1122.m_HorizontalBearingX = i1123[2]
  i1122.m_HorizontalBearingY = i1123[3]
  i1122.m_HorizontalAdvance = i1123[4]
  return i1122
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1125 = data
  i1124.m_X = i1125[0]
  i1124.m_Y = i1125[1]
  i1124.m_Width = i1125[2]
  i1124.m_Height = i1125[3]
  return i1124
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1128 = root || request.c( 'TMPro.TMP_Character' )
  var i1129 = data
  i1128.m_ElementType = i1129[0]
  i1128.m_Unicode = i1129[1]
  i1128.m_GlyphIndex = i1129[2]
  i1128.m_Scale = i1129[3]
  return i1128
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1135 = data
  i1134.Name = i1135[0]
  i1134.PointSize = i1135[1]
  i1134.Scale = i1135[2]
  i1134.CharacterCount = i1135[3]
  i1134.LineHeight = i1135[4]
  i1134.Baseline = i1135[5]
  i1134.Ascender = i1135[6]
  i1134.CapHeight = i1135[7]
  i1134.Descender = i1135[8]
  i1134.CenterLine = i1135[9]
  i1134.SuperscriptOffset = i1135[10]
  i1134.SubscriptOffset = i1135[11]
  i1134.SubSize = i1135[12]
  i1134.Underline = i1135[13]
  i1134.UnderlineThickness = i1135[14]
  i1134.strikethrough = i1135[15]
  i1134.strikethroughThickness = i1135[16]
  i1134.TabWidth = i1135[17]
  i1134.Padding = i1135[18]
  i1134.AtlasWidth = i1135[19]
  i1134.AtlasHeight = i1135[20]
  return i1134
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1139 = data
  i1138.id = i1139[0]
  i1138.x = i1139[1]
  i1138.y = i1139[2]
  i1138.width = i1139[3]
  i1138.height = i1139[4]
  i1138.xOffset = i1139[5]
  i1138.yOffset = i1139[6]
  i1138.xAdvance = i1139[7]
  i1138.scale = i1139[8]
  return i1138
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.KerningTable' )
  var i1141 = data
  var i1143 = i1141[0]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('TMPro.KerningPair', i1143[i + 0]));
  }
  i1140.kerningPairs = i1142
  return i1140
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.KerningPair' )
  var i1147 = data
  i1146.xOffset = i1147[0]
  i1146.m_FirstGlyph = i1147[1]
  i1146.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1147[2], i1146.m_FirstGlyphAdjustments)
  i1146.m_SecondGlyph = i1147[3]
  i1146.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1147[4], i1146.m_SecondGlyphAdjustments)
  i1146.m_IgnoreSpacingAdjustments = !!i1147[5]
  return i1146
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1149 = data
  var i1151 = i1149[0]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1151[i + 0]));
  }
  i1148.m_GlyphPairAdjustmentRecords = i1150
  return i1148
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1155 = data
  i1154.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1155[0], i1154.m_FirstAdjustmentRecord)
  i1154.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1155[1], i1154.m_SecondAdjustmentRecord)
  i1154.m_FeatureLookupFlags = i1155[2]
  return i1154
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1157 = data
  i1156.m_GlyphIndex = i1157[0]
  i1156.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1157[1], i1156.m_GlyphValueRecord)
  return i1156
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1159 = data
  i1158.m_XPlacement = i1159[0]
  i1158.m_YPlacement = i1159[1]
  i1158.m_XAdvance = i1159[2]
  i1158.m_YAdvance = i1159[3]
  return i1158
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1163 = data
  i1162.sourceFontFileName = i1163[0]
  i1162.sourceFontFileGUID = i1163[1]
  i1162.pointSizeSamplingMode = i1163[2]
  i1162.pointSize = i1163[3]
  i1162.padding = i1163[4]
  i1162.packingMode = i1163[5]
  i1162.atlasWidth = i1163[6]
  i1162.atlasHeight = i1163[7]
  i1162.characterSetSelectionMode = i1163[8]
  i1162.characterSequence = i1163[9]
  i1162.referencedFontAssetGUID = i1163[10]
  i1162.referencedTextAssetGUID = i1163[11]
  i1162.fontStyle = i1163[12]
  i1162.fontStyleModifier = i1163[13]
  i1162.renderMode = i1163[14]
  i1162.includeFontFeatures = !!i1163[15]
  return i1162
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'regularTypeface')
  request.r(i1167[2], i1167[3], 0, i1166, 'italicTypeface')
  return i1166
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1169 = data
  i1168.useSafeMode = !!i1169[0]
  i1168.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1169[1], i1168.safeModeOptions)
  i1168.timeScale = i1169[2]
  i1168.unscaledTimeScale = i1169[3]
  i1168.useSmoothDeltaTime = !!i1169[4]
  i1168.maxSmoothUnscaledTime = i1169[5]
  i1168.rewindCallbackMode = i1169[6]
  i1168.showUnityEditorReport = !!i1169[7]
  i1168.logBehaviour = i1169[8]
  i1168.drawGizmos = !!i1169[9]
  i1168.defaultRecyclable = !!i1169[10]
  i1168.defaultAutoPlay = i1169[11]
  i1168.defaultUpdateType = i1169[12]
  i1168.defaultTimeScaleIndependent = !!i1169[13]
  i1168.defaultEaseType = i1169[14]
  i1168.defaultEaseOvershootOrAmplitude = i1169[15]
  i1168.defaultEasePeriod = i1169[16]
  i1168.defaultAutoKill = !!i1169[17]
  i1168.defaultLoopType = i1169[18]
  i1168.debugMode = !!i1169[19]
  i1168.debugStoreTargetId = !!i1169[20]
  i1168.showPreviewPanel = !!i1169[21]
  i1168.storeSettingsLocation = i1169[22]
  i1168.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1169[23], i1168.modules)
  i1168.createASMDEF = !!i1169[24]
  i1168.showPlayingTweens = !!i1169[25]
  i1168.showPausedTweens = !!i1169[26]
  return i1168
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1170 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1171 = data
  i1170.logBehaviour = i1171[0]
  i1170.nestedTweenFailureBehaviour = i1171[1]
  return i1170
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1172 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1173 = data
  i1172.showPanel = !!i1173[0]
  i1172.audioEnabled = !!i1173[1]
  i1172.physicsEnabled = !!i1173[2]
  i1172.physics2DEnabled = !!i1173[3]
  i1172.spriteEnabled = !!i1173[4]
  i1172.uiEnabled = !!i1173[5]
  i1172.textMeshProEnabled = !!i1173[6]
  i1172.tk2DEnabled = !!i1173[7]
  i1172.deAudioEnabled = !!i1173[8]
  i1172.deUnityExtendedEnabled = !!i1173[9]
  i1172.epoOutlineEnabled = !!i1173[10]
  return i1172
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_Settings' )
  var i1175 = data
  i1174.m_enableWordWrapping = !!i1175[0]
  i1174.m_enableKerning = !!i1175[1]
  i1174.m_enableExtraPadding = !!i1175[2]
  i1174.m_enableTintAllSprites = !!i1175[3]
  i1174.m_enableParseEscapeCharacters = !!i1175[4]
  i1174.m_EnableRaycastTarget = !!i1175[5]
  i1174.m_GetFontFeaturesAtRuntime = !!i1175[6]
  i1174.m_missingGlyphCharacter = i1175[7]
  i1174.m_warningsDisabled = !!i1175[8]
  request.r(i1175[9], i1175[10], 0, i1174, 'm_defaultFontAsset')
  i1174.m_defaultFontAssetPath = i1175[11]
  i1174.m_defaultFontSize = i1175[12]
  i1174.m_defaultAutoSizeMinRatio = i1175[13]
  i1174.m_defaultAutoSizeMaxRatio = i1175[14]
  i1174.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1175[15], i1175[16] )
  i1174.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1175[17], i1175[18] )
  i1174.m_autoSizeTextContainer = !!i1175[19]
  i1174.m_IsTextObjectScaleStatic = !!i1175[20]
  var i1177 = i1175[21]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 1, i1176, '')
  }
  i1174.m_fallbackFontAssets = i1176
  i1174.m_matchMaterialPreset = !!i1175[22]
  request.r(i1175[23], i1175[24], 0, i1174, 'm_defaultSpriteAsset')
  i1174.m_defaultSpriteAssetPath = i1175[25]
  i1174.m_enableEmojiSupport = !!i1175[26]
  i1174.m_MissingCharacterSpriteUnicode = i1175[27]
  i1174.m_defaultColorGradientPresetsPath = i1175[28]
  request.r(i1175[29], i1175[30], 0, i1174, 'm_defaultStyleSheet')
  i1174.m_StyleSheetsResourcePath = i1175[31]
  request.r(i1175[32], i1175[33], 0, i1174, 'm_leadingCharacters')
  request.r(i1175[34], i1175[35], 0, i1174, 'm_followingCharacters')
  i1174.m_UseModernHangulLineBreakingRules = !!i1175[36]
  return i1174
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1179 = data
  i1178.hashCode = i1179[0]
  request.r(i1179[1], i1179[2], 0, i1178, 'material')
  i1178.materialHashCode = i1179[3]
  request.r(i1179[4], i1179[5], 0, i1178, 'spriteSheet')
  var i1181 = i1179[6]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.TMP_Sprite', i1181[i + 0]));
  }
  i1178.spriteInfoList = i1180
  var i1183 = i1179[7]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1178.fallbackSpriteAssets = i1182
  i1178.m_Version = i1179[8]
  i1178.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1179[9], i1178.m_FaceInfo)
  var i1185 = i1179[10]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_SpriteCharacter', i1185[i + 0]));
  }
  i1178.m_SpriteCharacterTable = i1184
  var i1187 = i1179[11]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('TMPro.TMP_SpriteGlyph', i1187[i + 0]));
  }
  i1178.m_SpriteGlyphTable = i1186
  return i1178
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1191 = data
  i1190.name = i1191[0]
  i1190.hashCode = i1191[1]
  i1190.unicode = i1191[2]
  i1190.pivot = new pc.Vec2( i1191[3], i1191[4] )
  request.r(i1191[5], i1191[6], 0, i1190, 'sprite')
  i1190.id = i1191[7]
  i1190.x = i1191[8]
  i1190.y = i1191[9]
  i1190.width = i1191[10]
  i1190.height = i1191[11]
  i1190.xOffset = i1191[12]
  i1190.yOffset = i1191[13]
  i1190.xAdvance = i1191[14]
  i1190.scale = i1191[15]
  return i1190
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1197 = data
  i1196.m_Name = i1197[0]
  i1196.m_HashCode = i1197[1]
  i1196.m_ElementType = i1197[2]
  i1196.m_Unicode = i1197[3]
  i1196.m_GlyphIndex = i1197[4]
  i1196.m_Scale = i1197[5]
  return i1196
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'sprite')
  i1200.m_Index = i1201[2]
  i1200.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1201[3], i1200.m_Metrics)
  i1200.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1201[4], i1200.m_GlyphRect)
  i1200.m_Scale = i1201[5]
  i1200.m_AtlasIndex = i1201[6]
  i1200.m_ClassDefinitionType = i1201[7]
  return i1200
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1203 = data
  var i1205 = i1203[0]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('TMPro.TMP_Style', i1205[i + 0]));
  }
  i1202.m_StyleList = i1204
  return i1202
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_Style' )
  var i1209 = data
  i1208.m_Name = i1209[0]
  i1208.m_HashCode = i1209[1]
  i1208.m_OpeningDefinition = i1209[2]
  i1208.m_ClosingDefinition = i1209[3]
  i1208.m_OpeningTagArray = i1209[4]
  i1208.m_ClosingTagArray = i1209[5]
  i1208.m_OpeningTagUnicodeArray = i1209[6]
  i1208.m_ClosingTagUnicodeArray = i1209[7]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1211 = data
  var i1213 = i1211[0]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1213[i + 0]) );
  }
  i1210.files = i1212
  i1210.componentToPrefabIds = i1211[1]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1217 = data
  i1216.path = i1217[0]
  request.r(i1217[1], i1217[2], 0, i1216, 'unityObject')
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1219 = data
  var i1221 = i1219[0]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1221[i + 0]) );
  }
  i1218.scriptsExecutionOrder = i1220
  var i1223 = i1219[1]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1223[i + 0]) );
  }
  i1218.sortingLayers = i1222
  var i1225 = i1219[2]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1225[i + 0]) );
  }
  i1218.cullingLayers = i1224
  i1218.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1219[3], i1218.timeSettings)
  i1218.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1219[4], i1218.physicsSettings)
  i1218.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1219[5], i1218.physics2DSettings)
  i1218.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1219[6], i1218.qualitySettings)
  i1218.enableRealtimeShadows = !!i1219[7]
  i1218.enableAutoInstancing = !!i1219[8]
  i1218.enableDynamicBatching = !!i1219[9]
  i1218.lightmapEncodingQuality = i1219[10]
  i1218.desiredColorSpace = i1219[11]
  var i1227 = i1219[12]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1218.allTags = i1226
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.value = i1231[1]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1235 = data
  i1234.id = i1235[0]
  i1234.name = i1235[1]
  i1234.value = i1235[2]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1239 = data
  i1238.id = i1239[0]
  i1238.name = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1241 = data
  i1240.fixedDeltaTime = i1241[0]
  i1240.maximumDeltaTime = i1241[1]
  i1240.timeScale = i1241[2]
  i1240.maximumParticleTimestep = i1241[3]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1243 = data
  i1242.gravity = new pc.Vec3( i1243[0], i1243[1], i1243[2] )
  i1242.defaultSolverIterations = i1243[3]
  i1242.bounceThreshold = i1243[4]
  i1242.autoSyncTransforms = !!i1243[5]
  i1242.autoSimulation = !!i1243[6]
  var i1245 = i1243[7]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1245[i + 0]) );
  }
  i1242.collisionMatrix = i1244
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1249 = data
  i1248.enabled = !!i1249[0]
  i1248.layerId = i1249[1]
  i1248.otherLayerId = i1249[2]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'material')
  i1250.gravity = new pc.Vec2( i1251[2], i1251[3] )
  i1250.positionIterations = i1251[4]
  i1250.velocityIterations = i1251[5]
  i1250.velocityThreshold = i1251[6]
  i1250.maxLinearCorrection = i1251[7]
  i1250.maxAngularCorrection = i1251[8]
  i1250.maxTranslationSpeed = i1251[9]
  i1250.maxRotationSpeed = i1251[10]
  i1250.baumgarteScale = i1251[11]
  i1250.baumgarteTOIScale = i1251[12]
  i1250.timeToSleep = i1251[13]
  i1250.linearSleepTolerance = i1251[14]
  i1250.angularSleepTolerance = i1251[15]
  i1250.defaultContactOffset = i1251[16]
  i1250.autoSimulation = !!i1251[17]
  i1250.queriesHitTriggers = !!i1251[18]
  i1250.queriesStartInColliders = !!i1251[19]
  i1250.callbacksOnDisable = !!i1251[20]
  i1250.reuseCollisionCallbacks = !!i1251[21]
  i1250.autoSyncTransforms = !!i1251[22]
  var i1253 = i1251[23]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1253[i + 0]) );
  }
  i1250.collisionMatrix = i1252
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1257 = data
  i1256.enabled = !!i1257[0]
  i1256.layerId = i1257[1]
  i1256.otherLayerId = i1257[2]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1261[i + 0]) );
  }
  i1258.qualityLevels = i1260
  var i1263 = i1259[1]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1258.names = i1262
  i1258.shadows = i1259[2]
  i1258.anisotropicFiltering = i1259[3]
  i1258.antiAliasing = i1259[4]
  i1258.lodBias = i1259[5]
  i1258.shadowCascades = i1259[6]
  i1258.shadowDistance = i1259[7]
  i1258.shadowmaskMode = i1259[8]
  i1258.shadowProjection = i1259[9]
  i1258.shadowResolution = i1259[10]
  i1258.softParticles = !!i1259[11]
  i1258.softVegetation = !!i1259[12]
  i1258.activeColorSpace = i1259[13]
  i1258.desiredColorSpace = i1259[14]
  i1258.masterTextureLimit = i1259[15]
  i1258.maxQueuedFrames = i1259[16]
  i1258.particleRaycastBudget = i1259[17]
  i1258.pixelLightCount = i1259[18]
  i1258.realtimeReflectionProbes = !!i1259[19]
  i1258.shadowCascade2Split = i1259[20]
  i1258.shadowCascade4Split = new pc.Vec3( i1259[21], i1259[22], i1259[23] )
  i1258.streamingMipmapsActive = !!i1259[24]
  i1258.vSyncCount = i1259[25]
  i1258.asyncUploadBufferSize = i1259[26]
  i1258.asyncUploadTimeSlice = i1259[27]
  i1258.billboardsFaceCameraPosition = !!i1259[28]
  i1258.shadowNearPlaneOffset = i1259[29]
  i1258.streamingMipmapsMemoryBudget = i1259[30]
  i1258.maximumLODLevel = i1259[31]
  i1258.streamingMipmapsAddAllCameras = !!i1259[32]
  i1258.streamingMipmapsMaxLevelReduction = i1259[33]
  i1258.streamingMipmapsRenderersPerFrame = i1259[34]
  i1258.resolutionScalingFixedDPIFactor = i1259[35]
  i1258.streamingMipmapsMaxFileIORequests = i1259[36]
  i1258.currentQualityLevel = i1259[37]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1269 = data
  i1268.weight = i1269[0]
  i1268.vertices = i1269[1]
  i1268.normals = i1269[2]
  i1268.tangents = i1269[3]
  return i1268
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1271 = data
  i1270.xPlacement = i1271[0]
  i1270.yPlacement = i1271[1]
  i1270.xAdvance = i1271[2]
  i1270.yAdvance = i1271[3]
  return i1270
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[96],"97":[19],"98":[99],"100":[99],"101":[99],"102":[99],"103":[99],"104":[99],"105":[99],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[107],"115":[107],"116":[107],"117":[107],"118":[107],"119":[107],"120":[19],"121":[5],"122":[123],"124":[123],"11":[10],"125":[107],"22":[19],"126":[18,127,10],"58":[10],"128":[19],"21":[19],"24":[23],"129":[130],"131":[10],"132":[10],"14":[11],"16":[18,10],"133":[10],"13":[11],"41":[10],"134":[10],"65":[10],"135":[10],"45":[10],"136":[10],"40":[10],"47":[10],"137":[10],"138":[18,10],"139":[10],"46":[10],"44":[10],"140":[10],"33":[18,10],"51":[10],"141":[27],"142":[27],"28":[27],"143":[27],"144":[19],"145":[19],"146":[130],"147":[10],"148":[5,10],"31":[10,18],"149":[10],"150":[18,10],"151":[5],"152":[18,10],"153":[10],"154":[130]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","ObjectCtrl","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ComboPopUp","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","CameraAspect","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DongHeon.GameManager","UnityEngine.GameObject","TMPro.TextMeshProUGUI","MouseCtrl","UnityEngine.UI.Text","UnityEngine.Font","GameOverPanel","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayerController","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "08/06/2025 15:05:59";

Deserializers.lunaDaysRunning = "0.4";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Subject-Test-Build";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1812";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4172";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "0d6d0f74-487e-4ece-b63b-09f7cef272d8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

