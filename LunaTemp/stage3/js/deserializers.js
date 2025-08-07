var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.JointSpring' )
  var i1909 = data
  i1908.spring = i1909[0]
  i1908.damper = i1909[1]
  i1908.targetPosition = i1909[2]
  return i1908
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.JointMotor' )
  var i1911 = data
  i1910.m_TargetVelocity = i1911[0]
  i1910.m_Force = i1911[1]
  i1910.m_FreeSpin = i1911[2]
  return i1910
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.JointLimits' )
  var i1913 = data
  i1912.m_Min = i1913[0]
  i1912.m_Max = i1913[1]
  i1912.m_Bounciness = i1913[2]
  i1912.m_BounceMinVelocity = i1913[3]
  i1912.m_ContactDistance = i1913[4]
  i1912.minBounce = i1913[5]
  i1912.maxBounce = i1913[6]
  return i1912
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1914 = root || request.c( 'UnityEngine.JointDrive' )
  var i1915 = data
  i1914.m_PositionSpring = i1915[0]
  i1914.m_PositionDamper = i1915[1]
  i1914.m_MaximumForce = i1915[2]
  i1914.m_UseAcceleration = i1915[3]
  return i1914
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1917 = data
  i1916.m_Spring = i1917[0]
  i1916.m_Damper = i1917[1]
  return i1916
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1919 = data
  i1918.m_Limit = i1919[0]
  i1918.m_Bounciness = i1919[1]
  i1918.m_ContactDistance = i1919[2]
  return i1918
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1921 = data
  i1920.m_ExtremumSlip = i1921[0]
  i1920.m_ExtremumValue = i1921[1]
  i1920.m_AsymptoteSlip = i1921[2]
  i1920.m_AsymptoteValue = i1921[3]
  i1920.m_Stiffness = i1921[4]
  return i1920
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1923 = data
  i1922.m_LowerAngle = i1923[0]
  i1922.m_UpperAngle = i1923[1]
  return i1922
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1925 = data
  i1924.m_MotorSpeed = i1925[0]
  i1924.m_MaximumMotorTorque = i1925[1]
  return i1924
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1927 = data
  i1926.m_DampingRatio = i1927[0]
  i1926.m_Frequency = i1927[1]
  i1926.m_Angle = i1927[2]
  return i1926
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1929 = data
  i1928.m_LowerTranslation = i1929[0]
  i1928.m_UpperTranslation = i1929[1]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1930 = root || new pc.UnityMaterial()
  var i1931 = data
  i1930.name = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'shader')
  i1930.renderQueue = i1931[3]
  i1930.enableInstancing = !!i1931[4]
  var i1933 = i1931[5]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1933[i + 0]) );
  }
  i1930.floatParameters = i1932
  var i1935 = i1931[6]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1935[i + 0]) );
  }
  i1930.colorParameters = i1934
  var i1937 = i1931[7]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1937[i + 0]) );
  }
  i1930.vectorParameters = i1936
  var i1939 = i1931[8]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1939[i + 0]) );
  }
  i1930.textureParameters = i1938
  var i1941 = i1931[9]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1941[i + 0]) );
  }
  i1930.materialFlags = i1940
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.value = i1945[1]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1949 = data
  i1948.name = i1949[0]
  i1948.value = new pc.Color(i1949[1], i1949[2], i1949[3], i1949[4])
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1953 = data
  i1952.name = i1953[0]
  i1952.value = new pc.Vec4( i1953[1], i1953[2], i1953[3], i1953[4] )
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1957 = data
  i1956.name = i1957[0]
  request.r(i1957[1], i1957[2], 0, i1956, 'value')
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.enabled = !!i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.width = i1963[1]
  i1962.height = i1963[2]
  i1962.mipmapCount = i1963[3]
  i1962.anisoLevel = i1963[4]
  i1962.filterMode = i1963[5]
  i1962.hdr = !!i1963[6]
  i1962.format = i1963[7]
  i1962.wrapMode = i1963[8]
  i1962.alphaIsTransparency = !!i1963[9]
  i1962.alphaSource = i1963[10]
  i1962.graphicsFormat = i1963[11]
  i1962.sRGBTexture = !!i1963[12]
  i1962.desiredColorSpace = i1963[13]
  i1962.wrapU = i1963[14]
  i1962.wrapV = i1963[15]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1965 = data
  i1964.position = new pc.Vec3( i1965[0], i1965[1], i1965[2] )
  i1964.scale = new pc.Vec3( i1965[3], i1965[4], i1965[5] )
  i1964.rotation = new pc.Quat(i1965[6], i1965[7], i1965[8], i1965[9])
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'sharedMesh')
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'additionalVertexStreams')
  i1968.enabled = !!i1969[2]
  request.r(i1969[3], i1969[4], 0, i1968, 'sharedMaterial')
  var i1971 = i1969[5]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 2, i1970, '')
  }
  i1968.sharedMaterials = i1970
  i1968.receiveShadows = !!i1969[6]
  i1968.shadowCastingMode = i1969[7]
  i1968.sortingLayerID = i1969[8]
  i1968.sortingOrder = i1969[9]
  i1968.lightmapIndex = i1969[10]
  i1968.lightmapSceneIndex = i1969[11]
  i1968.lightmapScaleOffset = new pc.Vec4( i1969[12], i1969[13], i1969[14], i1969[15] )
  i1968.lightProbeUsage = i1969[16]
  i1968.reflectionProbeUsage = i1969[17]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1975 = data
  i1974.name = i1975[0]
  i1974.tagId = i1975[1]
  i1974.enabled = !!i1975[2]
  i1974.isStatic = !!i1975[3]
  i1974.layer = i1975[4]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.halfPrecision = !!i1977[1]
  i1976.useUInt32IndexFormat = !!i1977[2]
  i1976.vertexCount = i1977[3]
  i1976.aabb = i1977[4]
  var i1979 = i1977[5]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( !!i1979[i + 0] );
  }
  i1976.streams = i1978
  i1976.vertices = i1977[6]
  var i1981 = i1977[7]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1981[i + 0]) );
  }
  i1976.subMeshes = i1980
  var i1983 = i1977[8]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 16) {
    i1982.push( new pc.Mat4().setData(i1983[i + 0], i1983[i + 1], i1983[i + 2], i1983[i + 3],  i1983[i + 4], i1983[i + 5], i1983[i + 6], i1983[i + 7],  i1983[i + 8], i1983[i + 9], i1983[i + 10], i1983[i + 11],  i1983[i + 12], i1983[i + 13], i1983[i + 14], i1983[i + 15]) );
  }
  i1976.bindposes = i1982
  var i1985 = i1977[9]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1985[i + 0]) );
  }
  i1976.blendShapes = i1984
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1991 = data
  i1990.triangles = i1991[0]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1997 = data
  i1996.name = i1997[0]
  var i1999 = i1997[1]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1999[i + 0]) );
  }
  i1996.frames = i1998
  return i1996
}

Deserializers["ObjectCtrl"] = function (request, data, root) {
  var i2000 = root || request.c( 'ObjectCtrl' )
  var i2001 = data
  i2000.objectNum = i2001[0]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2003 = data
  i2002.center = new pc.Vec3( i2003[0], i2003[1], i2003[2] )
  i2002.size = new pc.Vec3( i2003[3], i2003[4], i2003[5] )
  i2002.enabled = !!i2003[6]
  i2002.isTrigger = !!i2003[7]
  request.r(i2003[8], i2003[9], 0, i2002, 'material')
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2005 = data
  i2004.pivot = new pc.Vec2( i2005[0], i2005[1] )
  i2004.anchorMin = new pc.Vec2( i2005[2], i2005[3] )
  i2004.anchorMax = new pc.Vec2( i2005[4], i2005[5] )
  i2004.sizeDelta = new pc.Vec2( i2005[6], i2005[7] )
  i2004.anchoredPosition3D = new pc.Vec3( i2005[8], i2005[9], i2005[10] )
  i2004.rotation = new pc.Quat(i2005[11], i2005[12], i2005[13], i2005[14])
  i2004.scale = new pc.Vec3( i2005[15], i2005[16], i2005[17] )
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2007 = data
  i2006.enabled = !!i2007[0]
  i2006.planeDistance = i2007[1]
  i2006.referencePixelsPerUnit = i2007[2]
  i2006.isFallbackOverlay = !!i2007[3]
  i2006.renderMode = i2007[4]
  i2006.renderOrder = i2007[5]
  i2006.sortingLayerName = i2007[6]
  i2006.sortingOrder = i2007[7]
  i2006.scaleFactor = i2007[8]
  request.r(i2007[9], i2007[10], 0, i2006, 'worldCamera')
  i2006.overrideSorting = !!i2007[11]
  i2006.pixelPerfect = !!i2007[12]
  i2006.targetDisplay = i2007[13]
  i2006.overridePixelPerfect = !!i2007[14]
  return i2006
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2009 = data
  i2008.m_UiScaleMode = i2009[0]
  i2008.m_ReferencePixelsPerUnit = i2009[1]
  i2008.m_ScaleFactor = i2009[2]
  i2008.m_ReferenceResolution = new pc.Vec2( i2009[3], i2009[4] )
  i2008.m_ScreenMatchMode = i2009[5]
  i2008.m_MatchWidthOrHeight = i2009[6]
  i2008.m_PhysicalUnit = i2009[7]
  i2008.m_FallbackScreenDPI = i2009[8]
  i2008.m_DefaultSpriteDPI = i2009[9]
  i2008.m_DynamicPixelsPerUnit = i2009[10]
  i2008.m_PresetInfoIsWorld = !!i2009[11]
  return i2008
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2011 = data
  i2010.m_IgnoreReversedGraphics = !!i2011[0]
  i2010.m_BlockingObjects = i2011[1]
  i2010.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2011[2] )
  return i2010
}

Deserializers["ComboPopUp"] = function (request, data, root) {
  var i2012 = root || request.c( 'ComboPopUp' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'comboImage')
  var i2015 = i2013[2]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 2) {
  request.r(i2015[i + 0], i2015[i + 1], 2, i2014, '')
  }
  i2012.comboSprites = i2014
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2019 = data
  i2018.cullTransparentMesh = !!i2019[0]
  return i2018
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.Image' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'm_Sprite')
  i2020.m_Type = i2021[2]
  i2020.m_PreserveAspect = !!i2021[3]
  i2020.m_FillCenter = !!i2021[4]
  i2020.m_FillMethod = i2021[5]
  i2020.m_FillAmount = i2021[6]
  i2020.m_FillClockwise = !!i2021[7]
  i2020.m_FillOrigin = i2021[8]
  i2020.m_UseSpriteMesh = !!i2021[9]
  i2020.m_PixelsPerUnitMultiplier = i2021[10]
  request.r(i2021[11], i2021[12], 0, i2020, 'm_Material')
  i2020.m_Maskable = !!i2021[13]
  i2020.m_Color = new pc.Color(i2021[14], i2021[15], i2021[16], i2021[17])
  i2020.m_RaycastTarget = !!i2021[18]
  i2020.m_RaycastPadding = new pc.Vec4( i2021[19], i2021[20], i2021[21], i2021[22] )
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2023 = data
  i2022.name = i2023[0]
  i2022.atlasId = i2023[1]
  i2022.mipmapCount = i2023[2]
  i2022.hdr = !!i2023[3]
  i2022.size = i2023[4]
  i2022.anisoLevel = i2023[5]
  i2022.filterMode = i2023[6]
  var i2025 = i2023[7]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 4) {
    i2024.push( UnityEngine.Rect.MinMaxRect(i2025[i + 0], i2025[i + 1], i2025[i + 2], i2025[i + 3]) );
  }
  i2022.rects = i2024
  i2022.wrapU = i2023[8]
  i2022.wrapV = i2023[9]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.index = i2029[1]
  i2028.startup = !!i2029[2]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2031 = data
  i2030.enabled = !!i2031[0]
  i2030.aspect = i2031[1]
  i2030.orthographic = !!i2031[2]
  i2030.orthographicSize = i2031[3]
  i2030.backgroundColor = new pc.Color(i2031[4], i2031[5], i2031[6], i2031[7])
  i2030.nearClipPlane = i2031[8]
  i2030.farClipPlane = i2031[9]
  i2030.fieldOfView = i2031[10]
  i2030.depth = i2031[11]
  i2030.clearFlags = i2031[12]
  i2030.cullingMask = i2031[13]
  i2030.rect = i2031[14]
  request.r(i2031[15], i2031[16], 0, i2030, 'targetTexture')
  i2030.usePhysicalProperties = !!i2031[17]
  i2030.focalLength = i2031[18]
  i2030.sensorSize = new pc.Vec2( i2031[19], i2031[20] )
  i2030.lensShift = new pc.Vec2( i2031[21], i2031[22] )
  i2030.gateFit = i2031[23]
  i2030.commandBufferCount = i2031[24]
  i2030.cameraType = i2031[25]
  return i2030
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2033 = data
  i2032.m_RenderShadows = !!i2033[0]
  i2032.m_RequiresDepthTextureOption = i2033[1]
  i2032.m_RequiresOpaqueTextureOption = i2033[2]
  i2032.m_CameraType = i2033[3]
  var i2035 = i2033[4]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 1, i2034, '')
  }
  i2032.m_Cameras = i2034
  i2032.m_RendererIndex = i2033[5]
  i2032.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2033[6] )
  request.r(i2033[7], i2033[8], 0, i2032, 'm_VolumeTrigger')
  i2032.m_VolumeFrameworkUpdateModeOption = i2033[9]
  i2032.m_RenderPostProcessing = !!i2033[10]
  i2032.m_Antialiasing = i2033[11]
  i2032.m_AntialiasingQuality = i2033[12]
  i2032.m_StopNaN = !!i2033[13]
  i2032.m_Dithering = !!i2033[14]
  i2032.m_ClearDepth = !!i2033[15]
  i2032.m_AllowXRRendering = !!i2033[16]
  i2032.m_AllowHDROutput = !!i2033[17]
  i2032.m_UseScreenCoordOverride = !!i2033[18]
  i2032.m_ScreenSizeOverride = new pc.Vec4( i2033[19], i2033[20], i2033[21], i2033[22] )
  i2032.m_ScreenCoordScaleBias = new pc.Vec4( i2033[23], i2033[24], i2033[25], i2033[26] )
  i2032.m_RequiresDepthTexture = !!i2033[27]
  i2032.m_RequiresColorTexture = !!i2033[28]
  i2032.m_Version = i2033[29]
  i2032.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2033[30], i2032.m_TaaSettings)
  return i2032
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2039 = data
  i2038.m_Quality = i2039[0]
  i2038.m_FrameInfluence = i2039[1]
  i2038.m_JitterScale = i2039[2]
  i2038.m_MipBias = i2039[3]
  i2038.m_VarianceClampScale = i2039[4]
  i2038.m_ContrastAdaptiveSharpening = i2039[5]
  return i2038
}

Deserializers["CameraAspect"] = function (request, data, root) {
  var i2040 = root || request.c( 'CameraAspect' )
  var i2041 = data
  i2040.targetAspect = i2041[0]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2043 = data
  i2042.enabled = !!i2043[0]
  i2042.type = i2043[1]
  i2042.color = new pc.Color(i2043[2], i2043[3], i2043[4], i2043[5])
  i2042.cullingMask = i2043[6]
  i2042.intensity = i2043[7]
  i2042.range = i2043[8]
  i2042.spotAngle = i2043[9]
  i2042.shadows = i2043[10]
  i2042.shadowNormalBias = i2043[11]
  i2042.shadowBias = i2043[12]
  i2042.shadowStrength = i2043[13]
  i2042.shadowResolution = i2043[14]
  i2042.lightmapBakeType = i2043[15]
  i2042.renderMode = i2043[16]
  request.r(i2043[17], i2043[18], 0, i2042, 'cookie')
  i2042.cookieSize = i2043[19]
  return i2042
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2045 = data
  i2044.m_Version = i2045[0]
  i2044.m_UsePipelineSettings = !!i2045[1]
  i2044.m_AdditionalLightsShadowResolutionTier = i2045[2]
  i2044.m_LightLayerMask = i2045[3]
  i2044.m_RenderingLayers = i2045[4]
  i2044.m_CustomShadowLayers = !!i2045[5]
  i2044.m_ShadowLayerMask = i2045[6]
  i2044.m_ShadowRenderingLayers = i2045[7]
  i2044.m_LightCookieSize = new pc.Vec2( i2045[8], i2045[9] )
  i2044.m_LightCookieOffset = new pc.Vec2( i2045[10], i2045[11] )
  i2044.m_SoftShadowQuality = i2045[12]
  return i2044
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2047 = data
  i2046.priority = i2047[0]
  i2046.blendDistance = i2047[1]
  i2046.weight = i2047[2]
  request.r(i2047[3], i2047[4], 0, i2046, 'sharedProfile')
  i2046.m_IsGlobal = !!i2047[5]
  return i2046
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, 'm_FirstSelected')
  i2048.m_sendNavigationEvents = !!i2049[2]
  i2048.m_DragThreshold = i2049[3]
  return i2048
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2051 = data
  i2050.m_HorizontalAxis = i2051[0]
  i2050.m_VerticalAxis = i2051[1]
  i2050.m_SubmitButton = i2051[2]
  i2050.m_CancelButton = i2051[3]
  i2050.m_InputActionsPerSecond = i2051[4]
  i2050.m_RepeatDelay = i2051[5]
  i2050.m_ForceModuleActive = !!i2051[6]
  i2050.m_SendPointerHoverToParent = !!i2051[7]
  return i2050
}

Deserializers["DongHeon.GameManager"] = function (request, data, root) {
  var i2052 = root || request.c( 'DongHeon.GameManager' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 2, i2054, '')
  }
  i2052.objectPool = i2054
  var i2057 = i2053[1]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 2, i2056, '')
  }
  i2052.orderPool = i2056
  var i2059 = i2053[2]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 2, i2058, '')
  }
  i2052.objectSpawnPoses = i2058
  var i2061 = i2053[3]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 2, i2060, '')
  }
  i2052.orderSpawnPoses = i2060
  var i2063 = i2053[4]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 2, i2062, '')
  }
  i2052.cokeGos = i2062
  var i2065 = i2053[5]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 2) {
  request.r(i2065[i + 0], i2065[i + 1], 2, i2064, '')
  }
  i2052.JuiceGos = i2064
  var i2067 = i2053[6]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2052.danjiGos = i2066
  var i2069 = i2053[7]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 2, i2068, '')
  }
  i2052.pringlesGos = i2068
  var i2071 = i2053[8]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 2) {
  request.r(i2071[i + 0], i2071[i + 1], 2, i2070, '')
  }
  i2052.milkGos = i2070
  var i2073 = i2053[9]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 2, i2072, '')
  }
  i2052.peperoGos = i2072
  var i2075 = i2053[10]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 2, i2074, '')
  }
  i2052.kimbabGos = i2074
  var i2077 = i2053[11]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 2) {
  request.r(i2077[i + 0], i2077[i + 1], 2, i2076, '')
  }
  i2052.twinGos = i2076
  var i2079 = i2053[12]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 2, i2078, '')
  }
  i2052.yoplaitGos = i2078
  request.r(i2053[13], i2053[14], 0, i2052, 'progressImage')
  request.r(i2053[15], i2053[16], 0, i2052, 'scoreText')
  request.r(i2053[17], i2053[18], 0, i2052, 'comboGO')
  request.r(i2053[19], i2053[20], 0, i2052, 'gameOverPanel')
  i2052.objectLayer = UnityEngine.LayerMask.FromIntegerValue( i2053[21] )
  return i2052
}

Deserializers["MouseCtrl"] = function (request, data, root) {
  var i2084 = root || request.c( 'MouseCtrl' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'mainCanvas')
  i2084.offsetX = i2085[2]
  i2084.offsetY = i2085[3]
  return i2084
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.UI.Text' )
  var i2087 = data
  i2086.m_FontData = request.d('UnityEngine.UI.FontData', i2087[0], i2086.m_FontData)
  i2086.m_Text = i2087[1]
  request.r(i2087[2], i2087[3], 0, i2086, 'm_Material')
  i2086.m_Maskable = !!i2087[4]
  i2086.m_Color = new pc.Color(i2087[5], i2087[6], i2087[7], i2087[8])
  i2086.m_RaycastTarget = !!i2087[9]
  i2086.m_RaycastPadding = new pc.Vec4( i2087[10], i2087[11], i2087[12], i2087[13] )
  return i2086
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'm_Font')
  i2088.m_FontSize = i2089[2]
  i2088.m_FontStyle = i2089[3]
  i2088.m_BestFit = !!i2089[4]
  i2088.m_MinSize = i2089[5]
  i2088.m_MaxSize = i2089[6]
  i2088.m_Alignment = i2089[7]
  i2088.m_AlignByGeometry = !!i2089[8]
  i2088.m_RichText = !!i2089[9]
  i2088.m_HorizontalOverflow = i2089[10]
  i2088.m_VerticalOverflow = i2089[11]
  i2088.m_LineSpacing = i2089[12]
  return i2088
}

Deserializers["GameOverPanel"] = function (request, data, root) {
  var i2090 = root || request.c( 'GameOverPanel' )
  var i2091 = data
  return i2090
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2092 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2093 = data
  i2092.m_hasFontAssetChanged = !!i2093[0]
  request.r(i2093[1], i2093[2], 0, i2092, 'm_baseMaterial')
  i2092.m_maskOffset = new pc.Vec4( i2093[3], i2093[4], i2093[5], i2093[6] )
  i2092.m_text = i2093[7]
  i2092.m_isRightToLeft = !!i2093[8]
  request.r(i2093[9], i2093[10], 0, i2092, 'm_fontAsset')
  request.r(i2093[11], i2093[12], 0, i2092, 'm_sharedMaterial')
  var i2095 = i2093[13]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 2) {
  request.r(i2095[i + 0], i2095[i + 1], 2, i2094, '')
  }
  i2092.m_fontSharedMaterials = i2094
  request.r(i2093[14], i2093[15], 0, i2092, 'm_fontMaterial')
  var i2097 = i2093[16]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 2, i2096, '')
  }
  i2092.m_fontMaterials = i2096
  i2092.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2093[17], i2093[18], i2093[19], i2093[20])
  i2092.m_fontColor = new pc.Color(i2093[21], i2093[22], i2093[23], i2093[24])
  i2092.m_enableVertexGradient = !!i2093[25]
  i2092.m_colorMode = i2093[26]
  i2092.m_fontColorGradient = request.d('TMPro.VertexGradient', i2093[27], i2092.m_fontColorGradient)
  request.r(i2093[28], i2093[29], 0, i2092, 'm_fontColorGradientPreset')
  request.r(i2093[30], i2093[31], 0, i2092, 'm_spriteAsset')
  i2092.m_tintAllSprites = !!i2093[32]
  request.r(i2093[33], i2093[34], 0, i2092, 'm_StyleSheet')
  i2092.m_TextStyleHashCode = i2093[35]
  i2092.m_overrideHtmlColors = !!i2093[36]
  i2092.m_faceColor = UnityEngine.Color32.ConstructColor(i2093[37], i2093[38], i2093[39], i2093[40])
  i2092.m_fontSize = i2093[41]
  i2092.m_fontSizeBase = i2093[42]
  i2092.m_fontWeight = i2093[43]
  i2092.m_enableAutoSizing = !!i2093[44]
  i2092.m_fontSizeMin = i2093[45]
  i2092.m_fontSizeMax = i2093[46]
  i2092.m_fontStyle = i2093[47]
  i2092.m_HorizontalAlignment = i2093[48]
  i2092.m_VerticalAlignment = i2093[49]
  i2092.m_textAlignment = i2093[50]
  i2092.m_characterSpacing = i2093[51]
  i2092.m_wordSpacing = i2093[52]
  i2092.m_lineSpacing = i2093[53]
  i2092.m_lineSpacingMax = i2093[54]
  i2092.m_paragraphSpacing = i2093[55]
  i2092.m_charWidthMaxAdj = i2093[56]
  i2092.m_enableWordWrapping = !!i2093[57]
  i2092.m_wordWrappingRatios = i2093[58]
  i2092.m_overflowMode = i2093[59]
  request.r(i2093[60], i2093[61], 0, i2092, 'm_linkedTextComponent')
  request.r(i2093[62], i2093[63], 0, i2092, 'parentLinkedComponent')
  i2092.m_enableKerning = !!i2093[64]
  i2092.m_enableExtraPadding = !!i2093[65]
  i2092.checkPaddingRequired = !!i2093[66]
  i2092.m_isRichText = !!i2093[67]
  i2092.m_parseCtrlCharacters = !!i2093[68]
  i2092.m_isOrthographic = !!i2093[69]
  i2092.m_isCullingEnabled = !!i2093[70]
  i2092.m_horizontalMapping = i2093[71]
  i2092.m_verticalMapping = i2093[72]
  i2092.m_uvLineOffset = i2093[73]
  i2092.m_geometrySortingOrder = i2093[74]
  i2092.m_IsTextObjectScaleStatic = !!i2093[75]
  i2092.m_VertexBufferAutoSizeReduction = !!i2093[76]
  i2092.m_useMaxVisibleDescender = !!i2093[77]
  i2092.m_pageToDisplay = i2093[78]
  i2092.m_margin = new pc.Vec4( i2093[79], i2093[80], i2093[81], i2093[82] )
  i2092.m_isUsingLegacyAnimationComponent = !!i2093[83]
  i2092.m_isVolumetricText = !!i2093[84]
  request.r(i2093[85], i2093[86], 0, i2092, 'm_Material')
  i2092.m_Maskable = !!i2093[87]
  i2092.m_Color = new pc.Color(i2093[88], i2093[89], i2093[90], i2093[91])
  i2092.m_RaycastTarget = !!i2093[92]
  i2092.m_RaycastPadding = new pc.Vec4( i2093[93], i2093[94], i2093[95], i2093[96] )
  return i2092
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2098 = root || request.c( 'TMPro.VertexGradient' )
  var i2099 = data
  i2098.topLeft = new pc.Color(i2099[0], i2099[1], i2099[2], i2099[3])
  i2098.topRight = new pc.Color(i2099[4], i2099[5], i2099[6], i2099[7])
  i2098.bottomLeft = new pc.Color(i2099[8], i2099[9], i2099[10], i2099[11])
  i2098.bottomRight = new pc.Color(i2099[12], i2099[13], i2099[14], i2099[15])
  return i2098
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2100 = root || request.c( 'UnityEngine.UI.Button' )
  var i2101 = data
  i2100.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2101[0], i2100.m_OnClick)
  i2100.m_Navigation = request.d('UnityEngine.UI.Navigation', i2101[1], i2100.m_Navigation)
  i2100.m_Transition = i2101[2]
  i2100.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2101[3], i2100.m_Colors)
  i2100.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2101[4], i2100.m_SpriteState)
  i2100.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2101[5], i2100.m_AnimationTriggers)
  i2100.m_Interactable = !!i2101[6]
  request.r(i2101[7], i2101[8], 0, i2100, 'm_TargetGraphic')
  return i2100
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2103 = data
  i2102.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2103[0], i2102.m_PersistentCalls)
  return i2102
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2105 = data
  var i2107 = i2105[0]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.add(request.d('UnityEngine.Events.PersistentCall', i2107[i + 0]));
  }
  i2104.m_Calls = i2106
  return i2104
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'm_Target')
  i2110.m_TargetAssemblyTypeName = i2111[2]
  i2110.m_MethodName = i2111[3]
  i2110.m_Mode = i2111[4]
  i2110.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2111[5], i2110.m_Arguments)
  i2110.m_CallState = i2111[6]
  return i2110
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'm_ObjectArgument')
  i2112.m_ObjectArgumentAssemblyTypeName = i2113[2]
  i2112.m_IntArgument = i2113[3]
  i2112.m_FloatArgument = i2113[4]
  i2112.m_StringArgument = i2113[5]
  i2112.m_BoolArgument = !!i2113[6]
  return i2112
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2115 = data
  i2114.m_Mode = i2115[0]
  i2114.m_WrapAround = !!i2115[1]
  request.r(i2115[2], i2115[3], 0, i2114, 'm_SelectOnUp')
  request.r(i2115[4], i2115[5], 0, i2114, 'm_SelectOnDown')
  request.r(i2115[6], i2115[7], 0, i2114, 'm_SelectOnLeft')
  request.r(i2115[8], i2115[9], 0, i2114, 'm_SelectOnRight')
  return i2114
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2117 = data
  i2116.m_NormalColor = new pc.Color(i2117[0], i2117[1], i2117[2], i2117[3])
  i2116.m_HighlightedColor = new pc.Color(i2117[4], i2117[5], i2117[6], i2117[7])
  i2116.m_PressedColor = new pc.Color(i2117[8], i2117[9], i2117[10], i2117[11])
  i2116.m_SelectedColor = new pc.Color(i2117[12], i2117[13], i2117[14], i2117[15])
  i2116.m_DisabledColor = new pc.Color(i2117[16], i2117[17], i2117[18], i2117[19])
  i2116.m_ColorMultiplier = i2117[20]
  i2116.m_FadeDuration = i2117[21]
  return i2116
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'm_HighlightedSprite')
  request.r(i2119[2], i2119[3], 0, i2118, 'm_PressedSprite')
  request.r(i2119[4], i2119[5], 0, i2118, 'm_SelectedSprite')
  request.r(i2119[6], i2119[7], 0, i2118, 'm_DisabledSprite')
  return i2118
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2121 = data
  i2120.m_NormalTrigger = i2121[0]
  i2120.m_HighlightedTrigger = i2121[1]
  i2120.m_PressedTrigger = i2121[2]
  i2120.m_SelectedTrigger = i2121[3]
  i2120.m_DisabledTrigger = i2121[4]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2123 = data
  i2122.ambientIntensity = i2123[0]
  i2122.reflectionIntensity = i2123[1]
  i2122.ambientMode = i2123[2]
  i2122.ambientLight = new pc.Color(i2123[3], i2123[4], i2123[5], i2123[6])
  i2122.ambientSkyColor = new pc.Color(i2123[7], i2123[8], i2123[9], i2123[10])
  i2122.ambientGroundColor = new pc.Color(i2123[11], i2123[12], i2123[13], i2123[14])
  i2122.ambientEquatorColor = new pc.Color(i2123[15], i2123[16], i2123[17], i2123[18])
  i2122.fogColor = new pc.Color(i2123[19], i2123[20], i2123[21], i2123[22])
  i2122.fogEndDistance = i2123[23]
  i2122.fogStartDistance = i2123[24]
  i2122.fogDensity = i2123[25]
  i2122.fog = !!i2123[26]
  request.r(i2123[27], i2123[28], 0, i2122, 'skybox')
  i2122.fogMode = i2123[29]
  var i2125 = i2123[30]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2125[i + 0]) );
  }
  i2122.lightmaps = i2124
  i2122.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2123[31], i2122.lightProbes)
  i2122.lightmapsMode = i2123[32]
  i2122.mixedBakeMode = i2123[33]
  i2122.environmentLightingMode = i2123[34]
  i2122.ambientProbe = new pc.SphericalHarmonicsL2(i2123[35])
  i2122.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2123[36])
  i2122.useReferenceAmbientProbe = !!i2123[37]
  request.r(i2123[38], i2123[39], 0, i2122, 'customReflection')
  request.r(i2123[40], i2123[41], 0, i2122, 'defaultReflection')
  i2122.defaultReflectionMode = i2123[42]
  i2122.defaultReflectionResolution = i2123[43]
  i2122.sunLightObjectId = i2123[44]
  i2122.pixelLightCount = i2123[45]
  i2122.defaultReflectionHDR = !!i2123[46]
  i2122.hasLightDataAsset = !!i2123[47]
  i2122.hasManualGenerate = !!i2123[48]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'lightmapColor')
  request.r(i2129[2], i2129[3], 0, i2128, 'lightmapDirection')
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2130 = root || new UnityEngine.LightProbes()
  var i2131 = data
  return i2130
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'panelPrefab')
  var i2141 = i2139[2]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2141[i + 0]));
  }
  i2138.prefabs = i2140
  return i2138
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2145 = data
  i2144.type = i2145[0]
  request.r(i2145[1], i2145[2], 0, i2144, 'prefab')
  return i2144
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2147 = data
  i2146.m_Spacing = i2147[0]
  i2146.m_ChildForceExpandWidth = !!i2147[1]
  i2146.m_ChildForceExpandHeight = !!i2147[2]
  i2146.m_ChildControlWidth = !!i2147[3]
  i2146.m_ChildControlHeight = !!i2147[4]
  i2146.m_ChildScaleWidth = !!i2147[5]
  i2146.m_ChildScaleHeight = !!i2147[6]
  i2146.m_ReverseArrangement = !!i2147[7]
  i2146.m_Padding = UnityEngine.RectOffset.FromPaddings(i2147[8], i2147[9], i2147[10], i2147[11])
  i2146.m_ChildAlignment = i2147[12]
  return i2146
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2149 = data
  i2148.m_HorizontalFit = i2149[0]
  i2148.m_VerticalFit = i2149[1]
  return i2148
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'contentHolder')
  return i2150
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'nameLabel')
  request.r(i2153[2], i2153[3], 0, i2152, 'scrollRect')
  request.r(i2153[4], i2153[5], 0, i2152, 'viewport')
  request.r(i2153[6], i2153[7], 0, i2152, 'Canvas')
  return i2152
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2155 = data
  i2154.m_IgnoreLayout = !!i2155[0]
  i2154.m_MinWidth = i2155[1]
  i2154.m_MinHeight = i2155[2]
  i2154.m_PreferredWidth = i2155[3]
  i2154.m_PreferredHeight = i2155[4]
  i2154.m_FlexibleWidth = i2155[5]
  i2154.m_FlexibleHeight = i2155[6]
  i2154.m_LayoutPriority = i2155[7]
  return i2154
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'm_Content')
  i2156.m_Horizontal = !!i2157[2]
  i2156.m_Vertical = !!i2157[3]
  i2156.m_MovementType = i2157[4]
  i2156.m_Elasticity = i2157[5]
  i2156.m_Inertia = !!i2157[6]
  i2156.m_DecelerationRate = i2157[7]
  i2156.m_ScrollSensitivity = i2157[8]
  request.r(i2157[9], i2157[10], 0, i2156, 'm_Viewport')
  request.r(i2157[11], i2157[12], 0, i2156, 'm_HorizontalScrollbar')
  request.r(i2157[13], i2157[14], 0, i2156, 'm_VerticalScrollbar')
  i2156.m_HorizontalScrollbarVisibility = i2157[15]
  i2156.m_VerticalScrollbarVisibility = i2157[16]
  i2156.m_HorizontalScrollbarSpacing = i2157[17]
  i2156.m_VerticalScrollbarSpacing = i2157[18]
  i2156.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2157[19], i2156.m_OnValueChanged)
  return i2156
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2159 = data
  i2158.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2159[0], i2158.m_PersistentCalls)
  return i2158
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2161 = data
  i2160.m_ShowMaskGraphic = !!i2161[0]
  return i2160
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'm_HandleRect')
  i2162.m_Direction = i2163[2]
  i2162.m_Value = i2163[3]
  i2162.m_Size = i2163[4]
  i2162.m_NumberOfSteps = i2163[5]
  i2162.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2163[6], i2162.m_OnValueChanged)
  i2162.m_Navigation = request.d('UnityEngine.UI.Navigation', i2163[7], i2162.m_Navigation)
  i2162.m_Transition = i2163[8]
  i2162.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2163[9], i2162.m_Colors)
  i2162.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2163[10], i2162.m_SpriteState)
  i2162.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2163[11], i2162.m_AnimationTriggers)
  i2162.m_Interactable = !!i2163[12]
  request.r(i2163[13], i2163[14], 0, i2162, 'm_TargetGraphic')
  return i2162
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2165 = data
  i2164.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2165[0], i2164.m_PersistentCalls)
  return i2164
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2167 = data
  var i2169 = i2167[0]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2169[i + 0]));
  }
  i2166.m_Delegates = i2168
  return i2166
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2173 = data
  i2172.eventID = i2173[0]
  i2172.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2173[1], i2172.callback)
  return i2172
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2175 = data
  i2174.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2175[0], i2174.m_PersistentCalls)
  return i2174
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'nameLabel')
  request.r(i2177[2], i2177[3], 0, i2176, 'valueLabel')
  i2176.colorDefault = new pc.Color(i2177[4], i2177[5], i2177[6], i2177[7])
  i2176.colorSelected = new pc.Color(i2177[8], i2177[9], i2177[10], i2177[11])
  return i2176
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'nameLabel')
  request.r(i2179[2], i2179[3], 0, i2178, 'valueToggle')
  request.r(i2179[4], i2179[5], 0, i2178, 'checkmarkImage')
  i2178.colorDefault = new pc.Color(i2179[6], i2179[7], i2179[8], i2179[9])
  i2178.colorSelected = new pc.Color(i2179[10], i2179[11], i2179[12], i2179[13])
  return i2178
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2181 = data
  i2180.toggleTransition = i2181[0]
  request.r(i2181[1], i2181[2], 0, i2180, 'graphic')
  i2180.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2181[3], i2180.onValueChanged)
  request.r(i2181[4], i2181[5], 0, i2180, 'm_Group')
  i2180.m_IsOn = !!i2181[6]
  i2180.m_Navigation = request.d('UnityEngine.UI.Navigation', i2181[7], i2180.m_Navigation)
  i2180.m_Transition = i2181[8]
  i2180.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2181[9], i2180.m_Colors)
  i2180.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2181[10], i2180.m_SpriteState)
  i2180.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2181[11], i2180.m_AnimationTriggers)
  i2180.m_Interactable = !!i2181[12]
  request.r(i2181[13], i2181[14], 0, i2180, 'm_TargetGraphic')
  return i2180
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2183 = data
  i2182.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2183[0], i2182.m_PersistentCalls)
  return i2182
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'nameLabel')
  request.r(i2185[2], i2185[3], 0, i2184, 'valueLabel')
  i2184.colorDefault = new pc.Color(i2185[4], i2185[5], i2185[6], i2185[7])
  i2184.colorSelected = new pc.Color(i2185[8], i2185[9], i2185[10], i2185[11])
  return i2184
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'nameLabel')
  request.r(i2187[2], i2187[3], 0, i2186, 'valueLabel')
  i2186.colorDefault = new pc.Color(i2187[4], i2187[5], i2187[6], i2187[7])
  i2186.colorSelected = new pc.Color(i2187[8], i2187[9], i2187[10], i2187[11])
  return i2186
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'nameLabel')
  request.r(i2189[2], i2189[3], 0, i2188, 'valueLabel')
  i2188.colorDefault = new pc.Color(i2189[4], i2189[5], i2189[6], i2189[7])
  i2188.colorSelected = new pc.Color(i2189[8], i2189[9], i2189[10], i2189[11])
  return i2188
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'nextButtonText')
  request.r(i2191[2], i2191[3], 0, i2190, 'previousButtonText')
  request.r(i2191[4], i2191[5], 0, i2190, 'nameLabel')
  request.r(i2191[6], i2191[7], 0, i2190, 'valueLabel')
  i2190.colorDefault = new pc.Color(i2191[8], i2191[9], i2191[10], i2191[11])
  i2190.colorSelected = new pc.Color(i2191[12], i2191[13], i2191[14], i2191[15])
  return i2190
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'nameLabel')
  i2192.colorDefault = new pc.Color(i2193[2], i2193[3], i2193[4], i2193[5])
  i2192.colorSelected = new pc.Color(i2193[6], i2193[7], i2193[8], i2193[9])
  return i2192
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'nameLabel')
  request.r(i2195[2], i2195[3], 0, i2194, 'valueToggle')
  i2194.colorDefault = new pc.Color(i2195[4], i2195[5], i2195[6], i2195[7])
  i2194.colorSelected = new pc.Color(i2195[8], i2195[9], i2195[10], i2195[11])
  return i2194
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2197 = data
  i2196.toggleTransition = i2197[0]
  request.r(i2197[1], i2197[2], 0, i2196, 'graphic')
  i2196.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2197[3], i2196.onValueChanged)
  request.r(i2197[4], i2197[5], 0, i2196, 'content')
  request.r(i2197[6], i2197[7], 0, i2196, 'arrowOpened')
  request.r(i2197[8], i2197[9], 0, i2196, 'arrowClosed')
  request.r(i2197[10], i2197[11], 0, i2196, 'm_Group')
  i2196.m_IsOn = !!i2197[12]
  i2196.m_Navigation = request.d('UnityEngine.UI.Navigation', i2197[13], i2196.m_Navigation)
  i2196.m_Transition = i2197[14]
  i2196.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2197[15], i2196.m_Colors)
  i2196.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2197[16], i2196.m_SpriteState)
  i2196.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2197[17], i2196.m_AnimationTriggers)
  i2196.m_Interactable = !!i2197[18]
  request.r(i2197[19], i2197[20], 0, i2196, 'm_TargetGraphic')
  return i2196
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'nameLabel')
  request.r(i2199[2], i2199[3], 0, i2198, 'valueToggle')
  request.r(i2199[4], i2199[5], 0, i2198, 'colorImage')
  request.r(i2199[6], i2199[7], 0, i2198, 'fieldR')
  request.r(i2199[8], i2199[9], 0, i2198, 'fieldG')
  request.r(i2199[10], i2199[11], 0, i2198, 'fieldB')
  request.r(i2199[12], i2199[13], 0, i2198, 'fieldA')
  i2198.colorDefault = new pc.Color(i2199[14], i2199[15], i2199[16], i2199[17])
  i2198.colorSelected = new pc.Color(i2199[18], i2199[19], i2199[20], i2199[21])
  return i2198
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'nameLabel')
  request.r(i2201[2], i2201[3], 0, i2200, 'valueLabel')
  i2200.colorDefault = new pc.Color(i2201[4], i2201[5], i2201[6], i2201[7])
  i2200.colorSelected = new pc.Color(i2201[8], i2201[9], i2201[10], i2201[11])
  return i2200
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'nameLabel')
  request.r(i2203[2], i2203[3], 0, i2202, 'valueToggle')
  request.r(i2203[4], i2203[5], 0, i2202, 'fieldX')
  request.r(i2203[6], i2203[7], 0, i2202, 'fieldY')
  i2202.colorDefault = new pc.Color(i2203[8], i2203[9], i2203[10], i2203[11])
  i2202.colorSelected = new pc.Color(i2203[12], i2203[13], i2203[14], i2203[15])
  return i2202
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'nameLabel')
  request.r(i2205[2], i2205[3], 0, i2204, 'valueToggle')
  request.r(i2205[4], i2205[5], 0, i2204, 'fieldX')
  request.r(i2205[6], i2205[7], 0, i2204, 'fieldY')
  request.r(i2205[8], i2205[9], 0, i2204, 'fieldZ')
  i2204.colorDefault = new pc.Color(i2205[10], i2205[11], i2205[12], i2205[13])
  i2204.colorSelected = new pc.Color(i2205[14], i2205[15], i2205[16], i2205[17])
  return i2204
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'nameLabel')
  request.r(i2207[2], i2207[3], 0, i2206, 'valueToggle')
  request.r(i2207[4], i2207[5], 0, i2206, 'fieldX')
  request.r(i2207[6], i2207[7], 0, i2206, 'fieldY')
  request.r(i2207[8], i2207[9], 0, i2206, 'fieldZ')
  request.r(i2207[10], i2207[11], 0, i2206, 'fieldW')
  i2206.colorDefault = new pc.Color(i2207[12], i2207[13], i2207[14], i2207[15])
  i2206.colorSelected = new pc.Color(i2207[16], i2207[17], i2207[18], i2207[19])
  return i2206
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2209 = data
  i2208.colorDefault = new pc.Color(i2209[0], i2209[1], i2209[2], i2209[3])
  i2208.colorSelected = new pc.Color(i2209[4], i2209[5], i2209[6], i2209[7])
  return i2208
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2211 = data
  i2210.m_Spacing = i2211[0]
  i2210.m_ChildForceExpandWidth = !!i2211[1]
  i2210.m_ChildForceExpandHeight = !!i2211[2]
  i2210.m_ChildControlWidth = !!i2211[3]
  i2210.m_ChildControlHeight = !!i2211[4]
  i2210.m_ChildScaleWidth = !!i2211[5]
  i2210.m_ChildScaleHeight = !!i2211[6]
  i2210.m_ReverseArrangement = !!i2211[7]
  i2210.m_Padding = UnityEngine.RectOffset.FromPaddings(i2211[8], i2211[9], i2211[10], i2211[11])
  i2210.m_ChildAlignment = i2211[12]
  return i2210
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2213 = data
  i2212.colorDefault = new pc.Color(i2213[0], i2213[1], i2213[2], i2213[3])
  i2212.colorSelected = new pc.Color(i2213[4], i2213[5], i2213[6], i2213[7])
  return i2212
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'nameLabel')
  request.r(i2215[2], i2215[3], 0, i2214, 'header')
  i2214.colorDefault = new pc.Color(i2215[4], i2215[5], i2215[6], i2215[7])
  i2214.colorSelected = new pc.Color(i2215[8], i2215[9], i2215[10], i2215[11])
  return i2214
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'nameLabel')
  request.r(i2217[2], i2217[3], 0, i2216, 'valueToggle')
  var i2219 = i2217[4]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 1, i2218, '')
  }
  i2216.toggles = i2218
  i2216.colorDefault = new pc.Color(i2217[5], i2217[6], i2217[7], i2217[8])
  i2216.colorSelected = new pc.Color(i2217[9], i2217[10], i2217[11], i2217[12])
  return i2216
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'nameLabel')
  request.r(i2223[2], i2223[3], 0, i2222, 'valueToggle')
  request.r(i2223[4], i2223[5], 0, i2222, 'checkmarkImage')
  i2222.colorDefault = new pc.Color(i2223[6], i2223[7], i2223[8], i2223[9])
  i2222.colorSelected = new pc.Color(i2223[10], i2223[11], i2223[12], i2223[13])
  return i2222
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'nameLabel')
  request.r(i2225[2], i2225[3], 0, i2224, 'valueToggle')
  request.r(i2225[4], i2225[5], 0, i2224, 'checkmarkImage')
  i2224.colorDefault = new pc.Color(i2225[6], i2225[7], i2225[8], i2225[9])
  i2224.colorSelected = new pc.Color(i2225[10], i2225[11], i2225[12], i2225[13])
  return i2224
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'nextButtonText')
  request.r(i2227[2], i2227[3], 0, i2226, 'previousButtonText')
  request.r(i2227[4], i2227[5], 0, i2226, 'nameLabel')
  request.r(i2227[6], i2227[7], 0, i2226, 'valueLabel')
  i2226.colorDefault = new pc.Color(i2227[8], i2227[9], i2227[10], i2227[11])
  i2226.colorSelected = new pc.Color(i2227[12], i2227[13], i2227[14], i2227[15])
  return i2226
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'nameLabel')
  request.r(i2229[2], i2229[3], 0, i2228, 'valueToggle')
  i2228.colorDefault = new pc.Color(i2229[4], i2229[5], i2229[6], i2229[7])
  i2228.colorSelected = new pc.Color(i2229[8], i2229[9], i2229[10], i2229[11])
  return i2228
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'nameLabel')
  i2230.colorDefault = new pc.Color(i2231[2], i2231[3], i2231[4], i2231[5])
  i2230.colorSelected = new pc.Color(i2231[6], i2231[7], i2231[8], i2231[9])
  return i2230
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'nameLabel')
  request.r(i2233[2], i2233[3], 0, i2232, 'valueLabel')
  request.r(i2233[4], i2233[5], 0, i2232, 'progressBarRect')
  i2232.colorDefault = new pc.Color(i2233[6], i2233[7], i2233[8], i2233[9])
  i2232.colorSelected = new pc.Color(i2233[10], i2233[11], i2233[12], i2233[13])
  return i2232
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'nameLabel')
  request.r(i2235[2], i2235[3], 0, i2234, 'valueLabel')
  i2234.colorDefault = new pc.Color(i2235[4], i2235[5], i2235[6], i2235[7])
  i2234.colorSelected = new pc.Color(i2235[8], i2235[9], i2235[10], i2235[11])
  return i2234
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'nameLabel')
  request.r(i2237[2], i2237[3], 0, i2236, 'valueLabel')
  i2236.colorDefault = new pc.Color(i2237[4], i2237[5], i2237[6], i2237[7])
  i2236.colorSelected = new pc.Color(i2237[8], i2237[9], i2237[10], i2237[11])
  return i2236
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'nextButtonText')
  request.r(i2239[2], i2239[3], 0, i2238, 'previousButtonText')
  request.r(i2239[4], i2239[5], 0, i2238, 'nameLabel')
  request.r(i2239[6], i2239[7], 0, i2238, 'valueLabel')
  i2238.colorDefault = new pc.Color(i2239[8], i2239[9], i2239[10], i2239[11])
  i2238.colorSelected = new pc.Color(i2239[12], i2239[13], i2239[14], i2239[15])
  return i2238
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'nextButtonText')
  request.r(i2241[2], i2241[3], 0, i2240, 'previousButtonText')
  request.r(i2241[4], i2241[5], 0, i2240, 'nameLabel')
  request.r(i2241[6], i2241[7], 0, i2240, 'valueLabel')
  i2240.colorDefault = new pc.Color(i2241[8], i2241[9], i2241[10], i2241[11])
  i2240.colorSelected = new pc.Color(i2241[12], i2241[13], i2241[14], i2241[15])
  return i2240
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'panel')
  request.r(i2243[2], i2243[3], 0, i2242, 'valuePrefab')
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2245 = data
  i2244.AdditionalLightsPerObjectLimit = i2245[0]
  i2244.AdditionalLightsRenderingMode = i2245[1]
  i2244.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2245[2], i2244.LightRenderingMode)
  i2244.ColorGradingLutSize = i2245[3]
  i2244.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2245[4], i2244.ColorGradingMode)
  i2244.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2245[5], i2244.MainLightRenderingMode)
  i2244.MainLightRenderingModeValue = i2245[6]
  i2244.SupportsMainLightShadows = !!i2245[7]
  i2244.MixedLightingSupported = !!i2245[8]
  i2244.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2245[9], i2244.MsaaQuality)
  i2244.MSAA = i2245[10]
  i2244.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2245[11], i2244.OpaqueDownsampling)
  i2244.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2245[12], i2244.MainLightShadowmapResolution)
  i2244.MainLightShadowmapResolutionValue = i2245[13]
  i2244.SupportsSoftShadows = !!i2245[14]
  i2244.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2245[15], i2244.SoftShadowQuality)
  i2244.SoftShadowQualityValue = i2245[16]
  i2244.ShadowDistance = i2245[17]
  i2244.ShadowCascadeCount = i2245[18]
  i2244.Cascade2Split = i2245[19]
  i2244.Cascade3Split = new pc.Vec2( i2245[20], i2245[21] )
  i2244.Cascade4Split = new pc.Vec3( i2245[22], i2245[23], i2245[24] )
  i2244.CascadeBorder = i2245[25]
  i2244.ShadowDepthBias = i2245[26]
  i2244.ShadowNormalBias = i2245[27]
  i2244.RenderScale = i2245[28]
  i2244.RequireDepthTexture = !!i2245[29]
  i2244.RequireOpaqueTexture = !!i2245[30]
  i2244.SupportsHDR = !!i2245[31]
  i2244.SupportsTerrainHoles = !!i2245[32]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2247 = data
  i2246.Disabled = i2247[0]
  i2246.PerVertex = i2247[1]
  i2246.PerPixel = i2247[2]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2249 = data
  i2248.LowDynamicRange = i2249[0]
  i2248.HighDynamicRange = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2251 = data
  i2250.Disabled = i2251[0]
  i2250._2x = i2251[1]
  i2250._4x = i2251[2]
  i2250._8x = i2251[3]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2253 = data
  i2252.None = i2253[0]
  i2252._2xBilinear = i2253[1]
  i2252._4xBox = i2253[2]
  i2252._4xBilinear = i2253[3]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2255 = data
  i2254._256 = i2255[0]
  i2254._512 = i2255[1]
  i2254._1024 = i2255[2]
  i2254._2048 = i2255[3]
  i2254._4096 = i2255[4]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2257 = data
  i2256.UsePipelineSettings = i2257[0]
  i2256.Low = i2257[1]
  i2256.Medium = i2257[2]
  i2256.High = i2257[3]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2259 = data
  var i2261 = i2259[0]
  var i2260 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2261[i + 0]));
  }
  i2258.ShaderCompilationErrors = i2260
  i2258.name = i2259[1]
  i2258.guid = i2259[2]
  var i2263 = i2259[3]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( i2263[i + 0] );
  }
  i2258.shaderDefinedKeywords = i2262
  var i2265 = i2259[4]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2265[i + 0]) );
  }
  i2258.passes = i2264
  var i2267 = i2259[5]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2267[i + 0]) );
  }
  i2258.usePasses = i2266
  var i2269 = i2259[6]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2269[i + 0]) );
  }
  i2258.defaultParameterValues = i2268
  request.r(i2259[7], i2259[8], 0, i2258, 'unityFallbackShader')
  i2258.readDepth = !!i2259[9]
  i2258.isCreatedByShaderGraph = !!i2259[10]
  i2258.compiled = !!i2259[11]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2273 = data
  i2272.shaderName = i2273[0]
  i2272.errorMessage = i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2278 = root || new pc.UnityShaderPass()
  var i2279 = data
  i2278.id = i2279[0]
  i2278.subShaderIndex = i2279[1]
  i2278.name = i2279[2]
  i2278.passType = i2279[3]
  i2278.grabPassTextureName = i2279[4]
  i2278.usePass = !!i2279[5]
  i2278.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[6], i2278.zTest)
  i2278.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[7], i2278.zWrite)
  i2278.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[8], i2278.culling)
  i2278.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2279[9], i2278.blending)
  i2278.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2279[10], i2278.alphaBlending)
  i2278.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[11], i2278.colorWriteMask)
  i2278.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[12], i2278.offsetUnits)
  i2278.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[13], i2278.offsetFactor)
  i2278.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[14], i2278.stencilRef)
  i2278.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[15], i2278.stencilReadMask)
  i2278.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[16], i2278.stencilWriteMask)
  i2278.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2279[17], i2278.stencilOp)
  i2278.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2279[18], i2278.stencilOpFront)
  i2278.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2279[19], i2278.stencilOpBack)
  var i2281 = i2279[20]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2281[i + 0]) );
  }
  i2278.tags = i2280
  var i2283 = i2279[21]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( i2283[i + 0] );
  }
  i2278.passDefinedKeywords = i2282
  var i2285 = i2279[22]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2285[i + 0]) );
  }
  i2278.passDefinedKeywordGroups = i2284
  var i2287 = i2279[23]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2287[i + 0]) );
  }
  i2278.variants = i2286
  var i2289 = i2279[24]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2289[i + 0]) );
  }
  i2278.excludedVariants = i2288
  i2278.hasDepthReader = !!i2279[25]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2291 = data
  i2290.val = i2291[0]
  i2290.name = i2291[1]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2293 = data
  i2292.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2293[0], i2292.src)
  i2292.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2293[1], i2292.dst)
  i2292.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2293[2], i2292.op)
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2295 = data
  i2294.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[0], i2294.pass)
  i2294.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[1], i2294.fail)
  i2294.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[2], i2294.zFail)
  i2294.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[3], i2294.comp)
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2299 = data
  i2298.name = i2299[0]
  i2298.value = i2299[1]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2303 = data
  var i2305 = i2303[0]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( i2305[i + 0] );
  }
  i2302.keywords = i2304
  i2302.hasDiscard = !!i2303[1]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2309 = data
  i2308.passId = i2309[0]
  i2308.subShaderIndex = i2309[1]
  var i2311 = i2309[2]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( i2311[i + 0] );
  }
  i2308.keywords = i2310
  i2308.vertexProgram = i2309[3]
  i2308.fragmentProgram = i2309[4]
  i2308.exportedForWebGl2 = !!i2309[5]
  i2308.readDepth = !!i2309[6]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'shader')
  i2314.pass = i2315[2]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2319 = data
  i2318.name = i2319[0]
  i2318.type = i2319[1]
  i2318.value = new pc.Vec4( i2319[2], i2319[3], i2319[4], i2319[5] )
  i2318.textureValue = i2319[6]
  i2318.shaderPropertyFlag = i2319[7]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2321 = data
  i2320.name = i2321[0]
  request.r(i2321[1], i2321[2], 0, i2320, 'texture')
  i2320.aabb = i2321[3]
  i2320.vertices = i2321[4]
  i2320.triangles = i2321[5]
  i2320.textureRect = UnityEngine.Rect.MinMaxRect(i2321[6], i2321[7], i2321[8], i2321[9])
  i2320.packedRect = UnityEngine.Rect.MinMaxRect(i2321[10], i2321[11], i2321[12], i2321[13])
  i2320.border = new pc.Vec4( i2321[14], i2321[15], i2321[16], i2321[17] )
  i2320.transparency = i2321[18]
  i2320.bounds = i2321[19]
  i2320.pixelsPerUnit = i2321[20]
  i2320.textureWidth = i2321[21]
  i2320.textureHeight = i2321[22]
  i2320.nativeSize = new pc.Vec2( i2321[23], i2321[24] )
  i2320.pivot = new pc.Vec2( i2321[25], i2321[26] )
  i2320.textureRectOffset = new pc.Vec2( i2321[27], i2321[28] )
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2323 = data
  i2322.name = i2323[0]
  i2322.ascent = i2323[1]
  i2322.originalLineHeight = i2323[2]
  i2322.fontSize = i2323[3]
  var i2325 = i2323[4]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2325[i + 0]) );
  }
  i2322.characterInfo = i2324
  request.r(i2323[5], i2323[6], 0, i2322, 'texture')
  i2322.originalFontSize = i2323[7]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2329 = data
  i2328.index = i2329[0]
  i2328.advance = i2329[1]
  i2328.bearing = i2329[2]
  i2328.glyphWidth = i2329[3]
  i2328.glyphHeight = i2329[4]
  i2328.minX = i2329[5]
  i2328.maxX = i2329[6]
  i2328.minY = i2329[7]
  i2328.maxY = i2329[8]
  i2328.uvBottomLeftX = i2329[9]
  i2328.uvBottomLeftY = i2329[10]
  i2328.uvBottomRightX = i2329[11]
  i2328.uvBottomRightY = i2329[12]
  i2328.uvTopLeftX = i2329[13]
  i2328.uvTopLeftY = i2329[14]
  i2328.uvTopRightX = i2329[15]
  i2328.uvTopRightY = i2329[16]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2331 = data
  i2330.name = i2331[0]
  i2330.bytes64 = i2331[1]
  i2330.data = i2331[2]
  return i2330
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2333 = data
  var i2335 = i2333[0]
  var i2334 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2335.length; i += 2) {
  request.r(i2335[i + 0], i2335[i + 1], 1, i2334, '')
  }
  i2332.components = i2334
  return i2332
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2339 = data
  i2338.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2339[0], i2338.mode)
  i2338.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2339[1], i2338.neutralHDRRangeReductionMode)
  i2338.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2339[2], i2338.acesPreset)
  i2338.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2339[3], i2338.hueShiftAmount)
  i2338.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2339[4], i2338.detectPaperWhite)
  i2338.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2339[5], i2338.paperWhite)
  i2338.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2339[6], i2338.detectBrightnessLimits)
  i2338.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2339[7], i2338.minNits)
  i2338.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2339[8], i2338.maxNits)
  i2338.active = !!i2339[9]
  return i2338
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2341 = data
  i2340.m_Value = i2341[0]
  i2340.m_OverrideState = !!i2341[1]
  return i2340
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2343 = data
  i2342.m_Value = i2343[0]
  i2342.m_OverrideState = !!i2343[1]
  return i2342
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2345 = data
  i2344.m_Value = i2345[0]
  i2344.m_OverrideState = !!i2345[1]
  return i2344
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2347 = data
  i2346.m_Value = i2347[0]
  i2346.m_OverrideState = !!i2347[1]
  return i2346
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2349 = data
  i2348.m_Value = !!i2349[0]
  i2348.m_OverrideState = !!i2349[1]
  return i2348
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2351 = data
  i2350.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2351[0], i2350.skipIterations)
  i2350.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2351[1], i2350.threshold)
  i2350.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2351[2], i2350.intensity)
  i2350.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2351[3], i2350.scatter)
  i2350.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2351[4], i2350.clamp)
  i2350.tint = request.d('UnityEngine.Rendering.ColorParameter', i2351[5], i2350.tint)
  i2350.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2351[6], i2350.highQualityFiltering)
  i2350.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2351[7], i2350.downscale)
  i2350.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2351[8], i2350.maxIterations)
  i2350.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2351[9], i2350.dirtTexture)
  i2350.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2351[10], i2350.dirtIntensity)
  i2350.active = !!i2351[11]
  return i2350
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2353 = data
  i2352.m_Value = i2353[0]
  i2352.m_OverrideState = !!i2353[1]
  return i2352
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2355 = data
  i2354.m_Value = i2355[0]
  i2354.m_OverrideState = !!i2355[1]
  return i2354
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2357 = data
  i2356.m_Value = new pc.Color(i2357[0], i2357[1], i2357[2], i2357[3])
  i2356.m_OverrideState = !!i2357[4]
  return i2356
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2359 = data
  i2358.m_Value = i2359[0]
  i2358.m_OverrideState = !!i2359[1]
  return i2358
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2361 = data
  i2360.dimension = i2361[0]
  request.r(i2361[1], i2361[2], 0, i2360, 'm_Value')
  i2360.m_OverrideState = !!i2361[3]
  return i2360
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2363 = data
  i2362.color = request.d('UnityEngine.Rendering.ColorParameter', i2363[0], i2362.color)
  i2362.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2363[1], i2362.center)
  i2362.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2363[2], i2362.intensity)
  i2362.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2363[3], i2362.smoothness)
  i2362.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2363[4], i2362.rounded)
  i2362.active = !!i2363[5]
  return i2362
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2365 = data
  i2364.m_Value = new pc.Vec2( i2365[0], i2365[1] )
  i2364.m_OverrideState = !!i2365[2]
  return i2364
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2366 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2367 = data
  i2366.hashCode = i2367[0]
  request.r(i2367[1], i2367[2], 0, i2366, 'material')
  i2366.materialHashCode = i2367[3]
  request.r(i2367[4], i2367[5], 0, i2366, 'atlas')
  i2366.normalStyle = i2367[6]
  i2366.normalSpacingOffset = i2367[7]
  i2366.boldStyle = i2367[8]
  i2366.boldSpacing = i2367[9]
  i2366.italicStyle = i2367[10]
  i2366.tabSize = i2367[11]
  i2366.m_Version = i2367[12]
  i2366.m_SourceFontFileGUID = i2367[13]
  request.r(i2367[14], i2367[15], 0, i2366, 'm_SourceFontFile_EditorRef')
  request.r(i2367[16], i2367[17], 0, i2366, 'm_SourceFontFile')
  i2366.m_AtlasPopulationMode = i2367[18]
  i2366.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2367[19], i2366.m_FaceInfo)
  var i2369 = i2367[20]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('UnityEngine.TextCore.Glyph', i2369[i + 0]));
  }
  i2366.m_GlyphTable = i2368
  var i2371 = i2367[21]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.add(request.d('TMPro.TMP_Character', i2371[i + 0]));
  }
  i2366.m_CharacterTable = i2370
  var i2373 = i2367[22]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2366.m_AtlasTextures = i2372
  i2366.m_AtlasTextureIndex = i2367[23]
  i2366.m_IsMultiAtlasTexturesEnabled = !!i2367[24]
  i2366.m_ClearDynamicDataOnBuild = !!i2367[25]
  var i2375 = i2367[26]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.add(request.d('UnityEngine.TextCore.GlyphRect', i2375[i + 0]));
  }
  i2366.m_UsedGlyphRects = i2374
  var i2377 = i2367[27]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(request.d('UnityEngine.TextCore.GlyphRect', i2377[i + 0]));
  }
  i2366.m_FreeGlyphRects = i2376
  i2366.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2367[28], i2366.m_fontInfo)
  i2366.m_AtlasWidth = i2367[29]
  i2366.m_AtlasHeight = i2367[30]
  i2366.m_AtlasPadding = i2367[31]
  i2366.m_AtlasRenderMode = i2367[32]
  var i2379 = i2367[33]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.add(request.d('TMPro.TMP_Glyph', i2379[i + 0]));
  }
  i2366.m_glyphInfoList = i2378
  i2366.m_KerningTable = request.d('TMPro.KerningTable', i2367[34], i2366.m_KerningTable)
  i2366.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2367[35], i2366.m_FontFeatureTable)
  var i2381 = i2367[36]
  var i2380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 1, i2380, '')
  }
  i2366.fallbackFontAssets = i2380
  var i2383 = i2367[37]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 1, i2382, '')
  }
  i2366.m_FallbackFontAssetTable = i2382
  i2366.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2367[38], i2366.m_CreationSettings)
  var i2385 = i2367[39]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('TMPro.TMP_FontWeightPair', i2385[i + 0]) );
  }
  i2366.m_FontWeightTable = i2384
  var i2387 = i2367[40]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('TMPro.TMP_FontWeightPair', i2387[i + 0]) );
  }
  i2366.fontWeights = i2386
  return i2366
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2389 = data
  i2388.m_FaceIndex = i2389[0]
  i2388.m_FamilyName = i2389[1]
  i2388.m_StyleName = i2389[2]
  i2388.m_PointSize = i2389[3]
  i2388.m_Scale = i2389[4]
  i2388.m_UnitsPerEM = i2389[5]
  i2388.m_LineHeight = i2389[6]
  i2388.m_AscentLine = i2389[7]
  i2388.m_CapLine = i2389[8]
  i2388.m_MeanLine = i2389[9]
  i2388.m_Baseline = i2389[10]
  i2388.m_DescentLine = i2389[11]
  i2388.m_SuperscriptOffset = i2389[12]
  i2388.m_SuperscriptSize = i2389[13]
  i2388.m_SubscriptOffset = i2389[14]
  i2388.m_SubscriptSize = i2389[15]
  i2388.m_UnderlineOffset = i2389[16]
  i2388.m_UnderlineThickness = i2389[17]
  i2388.m_StrikethroughOffset = i2389[18]
  i2388.m_StrikethroughThickness = i2389[19]
  i2388.m_TabWidth = i2389[20]
  return i2388
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2393 = data
  i2392.m_Index = i2393[0]
  i2392.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2393[1], i2392.m_Metrics)
  i2392.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2393[2], i2392.m_GlyphRect)
  i2392.m_Scale = i2393[3]
  i2392.m_AtlasIndex = i2393[4]
  i2392.m_ClassDefinitionType = i2393[5]
  return i2392
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2395 = data
  i2394.m_Width = i2395[0]
  i2394.m_Height = i2395[1]
  i2394.m_HorizontalBearingX = i2395[2]
  i2394.m_HorizontalBearingY = i2395[3]
  i2394.m_HorizontalAdvance = i2395[4]
  return i2394
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2397 = data
  i2396.m_X = i2397[0]
  i2396.m_Y = i2397[1]
  i2396.m_Width = i2397[2]
  i2396.m_Height = i2397[3]
  return i2396
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2400 = root || request.c( 'TMPro.TMP_Character' )
  var i2401 = data
  i2400.m_ElementType = i2401[0]
  i2400.m_Unicode = i2401[1]
  i2400.m_GlyphIndex = i2401[2]
  i2400.m_Scale = i2401[3]
  return i2400
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2407 = data
  i2406.Name = i2407[0]
  i2406.PointSize = i2407[1]
  i2406.Scale = i2407[2]
  i2406.CharacterCount = i2407[3]
  i2406.LineHeight = i2407[4]
  i2406.Baseline = i2407[5]
  i2406.Ascender = i2407[6]
  i2406.CapHeight = i2407[7]
  i2406.Descender = i2407[8]
  i2406.CenterLine = i2407[9]
  i2406.SuperscriptOffset = i2407[10]
  i2406.SubscriptOffset = i2407[11]
  i2406.SubSize = i2407[12]
  i2406.Underline = i2407[13]
  i2406.UnderlineThickness = i2407[14]
  i2406.strikethrough = i2407[15]
  i2406.strikethroughThickness = i2407[16]
  i2406.TabWidth = i2407[17]
  i2406.Padding = i2407[18]
  i2406.AtlasWidth = i2407[19]
  i2406.AtlasHeight = i2407[20]
  return i2406
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2410 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2411 = data
  i2410.id = i2411[0]
  i2410.x = i2411[1]
  i2410.y = i2411[2]
  i2410.width = i2411[3]
  i2410.height = i2411[4]
  i2410.xOffset = i2411[5]
  i2410.yOffset = i2411[6]
  i2410.xAdvance = i2411[7]
  i2410.scale = i2411[8]
  return i2410
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2412 = root || request.c( 'TMPro.KerningTable' )
  var i2413 = data
  var i2415 = i2413[0]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.add(request.d('TMPro.KerningPair', i2415[i + 0]));
  }
  i2412.kerningPairs = i2414
  return i2412
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2418 = root || request.c( 'TMPro.KerningPair' )
  var i2419 = data
  i2418.xOffset = i2419[0]
  i2418.m_FirstGlyph = i2419[1]
  i2418.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2419[2], i2418.m_FirstGlyphAdjustments)
  i2418.m_SecondGlyph = i2419[3]
  i2418.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2419[4], i2418.m_SecondGlyphAdjustments)
  i2418.m_IgnoreSpacingAdjustments = !!i2419[5]
  return i2418
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2420 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2421 = data
  var i2423 = i2421[0]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2423[i + 0]));
  }
  i2420.m_GlyphPairAdjustmentRecords = i2422
  return i2420
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2426 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2427 = data
  i2426.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2427[0], i2426.m_FirstAdjustmentRecord)
  i2426.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2427[1], i2426.m_SecondAdjustmentRecord)
  i2426.m_FeatureLookupFlags = i2427[2]
  return i2426
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2428 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2429 = data
  i2428.m_GlyphIndex = i2429[0]
  i2428.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2429[1], i2428.m_GlyphValueRecord)
  return i2428
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2430 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2431 = data
  i2430.m_XPlacement = i2431[0]
  i2430.m_YPlacement = i2431[1]
  i2430.m_XAdvance = i2431[2]
  i2430.m_YAdvance = i2431[3]
  return i2430
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2434 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2435 = data
  i2434.sourceFontFileName = i2435[0]
  i2434.sourceFontFileGUID = i2435[1]
  i2434.pointSizeSamplingMode = i2435[2]
  i2434.pointSize = i2435[3]
  i2434.padding = i2435[4]
  i2434.packingMode = i2435[5]
  i2434.atlasWidth = i2435[6]
  i2434.atlasHeight = i2435[7]
  i2434.characterSetSelectionMode = i2435[8]
  i2434.characterSequence = i2435[9]
  i2434.referencedFontAssetGUID = i2435[10]
  i2434.referencedTextAssetGUID = i2435[11]
  i2434.fontStyle = i2435[12]
  i2434.fontStyleModifier = i2435[13]
  i2434.renderMode = i2435[14]
  i2434.includeFontFeatures = !!i2435[15]
  return i2434
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2438 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'regularTypeface')
  request.r(i2439[2], i2439[3], 0, i2438, 'italicTypeface')
  return i2438
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2440 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2441 = data
  i2440.useSafeMode = !!i2441[0]
  i2440.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2441[1], i2440.safeModeOptions)
  i2440.timeScale = i2441[2]
  i2440.unscaledTimeScale = i2441[3]
  i2440.useSmoothDeltaTime = !!i2441[4]
  i2440.maxSmoothUnscaledTime = i2441[5]
  i2440.rewindCallbackMode = i2441[6]
  i2440.showUnityEditorReport = !!i2441[7]
  i2440.logBehaviour = i2441[8]
  i2440.drawGizmos = !!i2441[9]
  i2440.defaultRecyclable = !!i2441[10]
  i2440.defaultAutoPlay = i2441[11]
  i2440.defaultUpdateType = i2441[12]
  i2440.defaultTimeScaleIndependent = !!i2441[13]
  i2440.defaultEaseType = i2441[14]
  i2440.defaultEaseOvershootOrAmplitude = i2441[15]
  i2440.defaultEasePeriod = i2441[16]
  i2440.defaultAutoKill = !!i2441[17]
  i2440.defaultLoopType = i2441[18]
  i2440.debugMode = !!i2441[19]
  i2440.debugStoreTargetId = !!i2441[20]
  i2440.showPreviewPanel = !!i2441[21]
  i2440.storeSettingsLocation = i2441[22]
  i2440.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2441[23], i2440.modules)
  i2440.createASMDEF = !!i2441[24]
  i2440.showPlayingTweens = !!i2441[25]
  i2440.showPausedTweens = !!i2441[26]
  return i2440
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2443 = data
  i2442.logBehaviour = i2443[0]
  i2442.nestedTweenFailureBehaviour = i2443[1]
  return i2442
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2444 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2445 = data
  i2444.showPanel = !!i2445[0]
  i2444.audioEnabled = !!i2445[1]
  i2444.physicsEnabled = !!i2445[2]
  i2444.physics2DEnabled = !!i2445[3]
  i2444.spriteEnabled = !!i2445[4]
  i2444.uiEnabled = !!i2445[5]
  i2444.textMeshProEnabled = !!i2445[6]
  i2444.tk2DEnabled = !!i2445[7]
  i2444.deAudioEnabled = !!i2445[8]
  i2444.deUnityExtendedEnabled = !!i2445[9]
  i2444.epoOutlineEnabled = !!i2445[10]
  return i2444
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2446 = root || request.c( 'TMPro.TMP_Settings' )
  var i2447 = data
  i2446.m_enableWordWrapping = !!i2447[0]
  i2446.m_enableKerning = !!i2447[1]
  i2446.m_enableExtraPadding = !!i2447[2]
  i2446.m_enableTintAllSprites = !!i2447[3]
  i2446.m_enableParseEscapeCharacters = !!i2447[4]
  i2446.m_EnableRaycastTarget = !!i2447[5]
  i2446.m_GetFontFeaturesAtRuntime = !!i2447[6]
  i2446.m_missingGlyphCharacter = i2447[7]
  i2446.m_warningsDisabled = !!i2447[8]
  request.r(i2447[9], i2447[10], 0, i2446, 'm_defaultFontAsset')
  i2446.m_defaultFontAssetPath = i2447[11]
  i2446.m_defaultFontSize = i2447[12]
  i2446.m_defaultAutoSizeMinRatio = i2447[13]
  i2446.m_defaultAutoSizeMaxRatio = i2447[14]
  i2446.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2447[15], i2447[16] )
  i2446.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2447[17], i2447[18] )
  i2446.m_autoSizeTextContainer = !!i2447[19]
  i2446.m_IsTextObjectScaleStatic = !!i2447[20]
  var i2449 = i2447[21]
  var i2448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 1, i2448, '')
  }
  i2446.m_fallbackFontAssets = i2448
  i2446.m_matchMaterialPreset = !!i2447[22]
  request.r(i2447[23], i2447[24], 0, i2446, 'm_defaultSpriteAsset')
  i2446.m_defaultSpriteAssetPath = i2447[25]
  i2446.m_enableEmojiSupport = !!i2447[26]
  i2446.m_MissingCharacterSpriteUnicode = i2447[27]
  i2446.m_defaultColorGradientPresetsPath = i2447[28]
  request.r(i2447[29], i2447[30], 0, i2446, 'm_defaultStyleSheet')
  i2446.m_StyleSheetsResourcePath = i2447[31]
  request.r(i2447[32], i2447[33], 0, i2446, 'm_leadingCharacters')
  request.r(i2447[34], i2447[35], 0, i2446, 'm_followingCharacters')
  i2446.m_UseModernHangulLineBreakingRules = !!i2447[36]
  return i2446
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2450 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2451 = data
  i2450.hashCode = i2451[0]
  request.r(i2451[1], i2451[2], 0, i2450, 'material')
  i2450.materialHashCode = i2451[3]
  request.r(i2451[4], i2451[5], 0, i2450, 'spriteSheet')
  var i2453 = i2451[6]
  var i2452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.add(request.d('TMPro.TMP_Sprite', i2453[i + 0]));
  }
  i2450.spriteInfoList = i2452
  var i2455 = i2451[7]
  var i2454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 1, i2454, '')
  }
  i2450.fallbackSpriteAssets = i2454
  i2450.m_Version = i2451[8]
  i2450.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2451[9], i2450.m_FaceInfo)
  var i2457 = i2451[10]
  var i2456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.add(request.d('TMPro.TMP_SpriteCharacter', i2457[i + 0]));
  }
  i2450.m_SpriteCharacterTable = i2456
  var i2459 = i2451[11]
  var i2458 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.add(request.d('TMPro.TMP_SpriteGlyph', i2459[i + 0]));
  }
  i2450.m_SpriteGlyphTable = i2458
  return i2450
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2462 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2463 = data
  i2462.name = i2463[0]
  i2462.hashCode = i2463[1]
  i2462.unicode = i2463[2]
  i2462.pivot = new pc.Vec2( i2463[3], i2463[4] )
  request.r(i2463[5], i2463[6], 0, i2462, 'sprite')
  i2462.id = i2463[7]
  i2462.x = i2463[8]
  i2462.y = i2463[9]
  i2462.width = i2463[10]
  i2462.height = i2463[11]
  i2462.xOffset = i2463[12]
  i2462.yOffset = i2463[13]
  i2462.xAdvance = i2463[14]
  i2462.scale = i2463[15]
  return i2462
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2468 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2469 = data
  i2468.m_Name = i2469[0]
  i2468.m_HashCode = i2469[1]
  i2468.m_ElementType = i2469[2]
  i2468.m_Unicode = i2469[3]
  i2468.m_GlyphIndex = i2469[4]
  i2468.m_Scale = i2469[5]
  return i2468
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2472 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'sprite')
  i2472.m_Index = i2473[2]
  i2472.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2473[3], i2472.m_Metrics)
  i2472.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2473[4], i2472.m_GlyphRect)
  i2472.m_Scale = i2473[5]
  i2472.m_AtlasIndex = i2473[6]
  i2472.m_ClassDefinitionType = i2473[7]
  return i2472
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.add(request.d('TMPro.TMP_Style', i2477[i + 0]));
  }
  i2474.m_StyleList = i2476
  return i2474
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2480 = root || request.c( 'TMPro.TMP_Style' )
  var i2481 = data
  i2480.m_Name = i2481[0]
  i2480.m_HashCode = i2481[1]
  i2480.m_OpeningDefinition = i2481[2]
  i2480.m_ClosingDefinition = i2481[3]
  i2480.m_OpeningTagArray = i2481[4]
  i2480.m_ClosingTagArray = i2481[5]
  i2480.m_OpeningTagUnicodeArray = i2481[6]
  i2480.m_ClosingTagUnicodeArray = i2481[7]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2483 = data
  var i2485 = i2483[0]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2485[i + 0]) );
  }
  i2482.files = i2484
  i2482.componentToPrefabIds = i2483[1]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2489 = data
  i2488.path = i2489[0]
  request.r(i2489[1], i2489[2], 0, i2488, 'unityObject')
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2491 = data
  var i2493 = i2491[0]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2493[i + 0]) );
  }
  i2490.scriptsExecutionOrder = i2492
  var i2495 = i2491[1]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2495[i + 0]) );
  }
  i2490.sortingLayers = i2494
  var i2497 = i2491[2]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2497[i + 0]) );
  }
  i2490.cullingLayers = i2496
  i2490.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2491[3], i2490.timeSettings)
  i2490.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2491[4], i2490.physicsSettings)
  i2490.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2491[5], i2490.physics2DSettings)
  i2490.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2491[6], i2490.qualitySettings)
  i2490.enableRealtimeShadows = !!i2491[7]
  i2490.enableAutoInstancing = !!i2491[8]
  i2490.enableDynamicBatching = !!i2491[9]
  i2490.lightmapEncodingQuality = i2491[10]
  i2490.desiredColorSpace = i2491[11]
  var i2499 = i2491[12]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( i2499[i + 0] );
  }
  i2490.allTags = i2498
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.value = i2503[1]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2507 = data
  i2506.id = i2507[0]
  i2506.name = i2507[1]
  i2506.value = i2507[2]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2511 = data
  i2510.id = i2511[0]
  i2510.name = i2511[1]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2513 = data
  i2512.fixedDeltaTime = i2513[0]
  i2512.maximumDeltaTime = i2513[1]
  i2512.timeScale = i2513[2]
  i2512.maximumParticleTimestep = i2513[3]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2515 = data
  i2514.gravity = new pc.Vec3( i2515[0], i2515[1], i2515[2] )
  i2514.defaultSolverIterations = i2515[3]
  i2514.bounceThreshold = i2515[4]
  i2514.autoSyncTransforms = !!i2515[5]
  i2514.autoSimulation = !!i2515[6]
  var i2517 = i2515[7]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2517[i + 0]) );
  }
  i2514.collisionMatrix = i2516
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2521 = data
  i2520.enabled = !!i2521[0]
  i2520.layerId = i2521[1]
  i2520.otherLayerId = i2521[2]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'material')
  i2522.gravity = new pc.Vec2( i2523[2], i2523[3] )
  i2522.positionIterations = i2523[4]
  i2522.velocityIterations = i2523[5]
  i2522.velocityThreshold = i2523[6]
  i2522.maxLinearCorrection = i2523[7]
  i2522.maxAngularCorrection = i2523[8]
  i2522.maxTranslationSpeed = i2523[9]
  i2522.maxRotationSpeed = i2523[10]
  i2522.baumgarteScale = i2523[11]
  i2522.baumgarteTOIScale = i2523[12]
  i2522.timeToSleep = i2523[13]
  i2522.linearSleepTolerance = i2523[14]
  i2522.angularSleepTolerance = i2523[15]
  i2522.defaultContactOffset = i2523[16]
  i2522.autoSimulation = !!i2523[17]
  i2522.queriesHitTriggers = !!i2523[18]
  i2522.queriesStartInColliders = !!i2523[19]
  i2522.callbacksOnDisable = !!i2523[20]
  i2522.reuseCollisionCallbacks = !!i2523[21]
  i2522.autoSyncTransforms = !!i2523[22]
  var i2525 = i2523[23]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2525[i + 0]) );
  }
  i2522.collisionMatrix = i2524
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2529 = data
  i2528.enabled = !!i2529[0]
  i2528.layerId = i2529[1]
  i2528.otherLayerId = i2529[2]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2531 = data
  var i2533 = i2531[0]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2533[i + 0]) );
  }
  i2530.qualityLevels = i2532
  var i2535 = i2531[1]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2530.names = i2534
  i2530.shadows = i2531[2]
  i2530.anisotropicFiltering = i2531[3]
  i2530.antiAliasing = i2531[4]
  i2530.lodBias = i2531[5]
  i2530.shadowCascades = i2531[6]
  i2530.shadowDistance = i2531[7]
  i2530.shadowmaskMode = i2531[8]
  i2530.shadowProjection = i2531[9]
  i2530.shadowResolution = i2531[10]
  i2530.softParticles = !!i2531[11]
  i2530.softVegetation = !!i2531[12]
  i2530.activeColorSpace = i2531[13]
  i2530.desiredColorSpace = i2531[14]
  i2530.masterTextureLimit = i2531[15]
  i2530.maxQueuedFrames = i2531[16]
  i2530.particleRaycastBudget = i2531[17]
  i2530.pixelLightCount = i2531[18]
  i2530.realtimeReflectionProbes = !!i2531[19]
  i2530.shadowCascade2Split = i2531[20]
  i2530.shadowCascade4Split = new pc.Vec3( i2531[21], i2531[22], i2531[23] )
  i2530.streamingMipmapsActive = !!i2531[24]
  i2530.vSyncCount = i2531[25]
  i2530.asyncUploadBufferSize = i2531[26]
  i2530.asyncUploadTimeSlice = i2531[27]
  i2530.billboardsFaceCameraPosition = !!i2531[28]
  i2530.shadowNearPlaneOffset = i2531[29]
  i2530.streamingMipmapsMemoryBudget = i2531[30]
  i2530.maximumLODLevel = i2531[31]
  i2530.streamingMipmapsAddAllCameras = !!i2531[32]
  i2530.streamingMipmapsMaxLevelReduction = i2531[33]
  i2530.streamingMipmapsRenderersPerFrame = i2531[34]
  i2530.resolutionScalingFixedDPIFactor = i2531[35]
  i2530.streamingMipmapsMaxFileIORequests = i2531[36]
  i2530.currentQualityLevel = i2531[37]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2541 = data
  i2540.weight = i2541[0]
  i2540.vertices = i2541[1]
  i2540.normals = i2541[2]
  i2540.tangents = i2541[3]
  return i2540
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2542 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2543 = data
  i2542.xPlacement = i2543[0]
  i2542.yPlacement = i2543[1]
  i2542.xAdvance = i2543[2]
  i2542.yAdvance = i2543[3]
  return i2542
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[96],"97":[19],"98":[99],"100":[99],"101":[99],"102":[99],"103":[99],"104":[99],"105":[99],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[107],"115":[107],"116":[107],"117":[107],"118":[107],"119":[107],"120":[19],"121":[5],"122":[123],"124":[123],"11":[10],"125":[107],"22":[19],"126":[18,127,10],"58":[10],"128":[19],"21":[19],"24":[23],"129":[130],"131":[10],"132":[10],"14":[11],"16":[18,10],"133":[10],"13":[11],"41":[10],"134":[10],"65":[10],"135":[10],"45":[10],"136":[10],"40":[10],"47":[10],"137":[10],"138":[18,10],"139":[10],"46":[10],"44":[10],"140":[10],"33":[18,10],"51":[10],"141":[27],"142":[27],"28":[27],"143":[27],"144":[19],"145":[19],"146":[130],"147":[10],"148":[5,10],"31":[10,18],"149":[10],"150":[18,10],"151":[5],"152":[18,10],"153":[10],"154":[130]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","ObjectCtrl","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ComboPopUp","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","CameraAspect","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DongHeon.GameManager","UnityEngine.GameObject","TMPro.TextMeshProUGUI","MouseCtrl","UnityEngine.UI.Text","UnityEngine.Font","GameOverPanel","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayerController","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "08/06/2025 15:05:59";

Deserializers.lunaDaysRunning = "0.5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1768";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4253";

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

Deserializers.buildID = "a93b57e9-2128-40b6-a40c-fffc12bef178";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

