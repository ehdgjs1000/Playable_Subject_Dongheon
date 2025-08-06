var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.JointSpring' )
  var i1891 = data
  i1890.spring = i1891[0]
  i1890.damper = i1891[1]
  i1890.targetPosition = i1891[2]
  return i1890
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.JointMotor' )
  var i1893 = data
  i1892.m_TargetVelocity = i1893[0]
  i1892.m_Force = i1893[1]
  i1892.m_FreeSpin = i1893[2]
  return i1892
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.JointLimits' )
  var i1895 = data
  i1894.m_Min = i1895[0]
  i1894.m_Max = i1895[1]
  i1894.m_Bounciness = i1895[2]
  i1894.m_BounceMinVelocity = i1895[3]
  i1894.m_ContactDistance = i1895[4]
  i1894.minBounce = i1895[5]
  i1894.maxBounce = i1895[6]
  return i1894
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.JointDrive' )
  var i1897 = data
  i1896.m_PositionSpring = i1897[0]
  i1896.m_PositionDamper = i1897[1]
  i1896.m_MaximumForce = i1897[2]
  i1896.m_UseAcceleration = i1897[3]
  return i1896
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1899 = data
  i1898.m_Spring = i1899[0]
  i1898.m_Damper = i1899[1]
  return i1898
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1901 = data
  i1900.m_Limit = i1901[0]
  i1900.m_Bounciness = i1901[1]
  i1900.m_ContactDistance = i1901[2]
  return i1900
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1903 = data
  i1902.m_ExtremumSlip = i1903[0]
  i1902.m_ExtremumValue = i1903[1]
  i1902.m_AsymptoteSlip = i1903[2]
  i1902.m_AsymptoteValue = i1903[3]
  i1902.m_Stiffness = i1903[4]
  return i1902
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1905 = data
  i1904.m_LowerAngle = i1905[0]
  i1904.m_UpperAngle = i1905[1]
  return i1904
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1907 = data
  i1906.m_MotorSpeed = i1907[0]
  i1906.m_MaximumMotorTorque = i1907[1]
  return i1906
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1909 = data
  i1908.m_DampingRatio = i1909[0]
  i1908.m_Frequency = i1909[1]
  i1908.m_Angle = i1909[2]
  return i1908
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1911 = data
  i1910.m_LowerTranslation = i1911[0]
  i1910.m_UpperTranslation = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1913 = data
  i1912.position = new pc.Vec3( i1913[0], i1913[1], i1913[2] )
  i1912.scale = new pc.Vec3( i1913[3], i1913[4], i1913[5] )
  i1912.rotation = new pc.Quat(i1913[6], i1913[7], i1913[8], i1913[9])
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'sharedMesh')
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1917 = data
  request.r(i1917[0], i1917[1], 0, i1916, 'additionalVertexStreams')
  i1916.enabled = !!i1917[2]
  request.r(i1917[3], i1917[4], 0, i1916, 'sharedMaterial')
  var i1919 = i1917[5]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 2) {
  request.r(i1919[i + 0], i1919[i + 1], 2, i1918, '')
  }
  i1916.sharedMaterials = i1918
  i1916.receiveShadows = !!i1917[6]
  i1916.shadowCastingMode = i1917[7]
  i1916.sortingLayerID = i1917[8]
  i1916.sortingOrder = i1917[9]
  i1916.lightmapIndex = i1917[10]
  i1916.lightmapSceneIndex = i1917[11]
  i1916.lightmapScaleOffset = new pc.Vec4( i1917[12], i1917[13], i1917[14], i1917[15] )
  i1916.lightProbeUsage = i1917[16]
  i1916.reflectionProbeUsage = i1917[17]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.tagId = i1923[1]
  i1922.enabled = !!i1923[2]
  i1922.isStatic = !!i1923[3]
  i1922.layer = i1923[4]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1925 = data
  i1924.name = i1925[0]
  i1924.halfPrecision = !!i1925[1]
  i1924.useUInt32IndexFormat = !!i1925[2]
  i1924.vertexCount = i1925[3]
  i1924.aabb = i1925[4]
  var i1927 = i1925[5]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( !!i1927[i + 0] );
  }
  i1924.streams = i1926
  i1924.vertices = i1925[6]
  var i1929 = i1925[7]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1929[i + 0]) );
  }
  i1924.subMeshes = i1928
  var i1931 = i1925[8]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 16) {
    i1930.push( new pc.Mat4().setData(i1931[i + 0], i1931[i + 1], i1931[i + 2], i1931[i + 3],  i1931[i + 4], i1931[i + 5], i1931[i + 6], i1931[i + 7],  i1931[i + 8], i1931[i + 9], i1931[i + 10], i1931[i + 11],  i1931[i + 12], i1931[i + 13], i1931[i + 14], i1931[i + 15]) );
  }
  i1924.bindposes = i1930
  var i1933 = i1925[9]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1933[i + 0]) );
  }
  i1924.blendShapes = i1932
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1939 = data
  i1938.triangles = i1939[0]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1945 = data
  i1944.name = i1945[0]
  var i1947 = i1945[1]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1947[i + 0]) );
  }
  i1944.frames = i1946
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1948 = root || new pc.UnityMaterial()
  var i1949 = data
  i1948.name = i1949[0]
  request.r(i1949[1], i1949[2], 0, i1948, 'shader')
  i1948.renderQueue = i1949[3]
  i1948.enableInstancing = !!i1949[4]
  var i1951 = i1949[5]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1951[i + 0]) );
  }
  i1948.floatParameters = i1950
  var i1953 = i1949[6]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1953[i + 0]) );
  }
  i1948.colorParameters = i1952
  var i1955 = i1949[7]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1955[i + 0]) );
  }
  i1948.vectorParameters = i1954
  var i1957 = i1949[8]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1957[i + 0]) );
  }
  i1948.textureParameters = i1956
  var i1959 = i1949[9]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1959[i + 0]) );
  }
  i1948.materialFlags = i1958
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.value = i1963[1]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1967 = data
  i1966.name = i1967[0]
  i1966.value = new pc.Color(i1967[1], i1967[2], i1967[3], i1967[4])
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1971 = data
  i1970.name = i1971[0]
  i1970.value = new pc.Vec4( i1971[1], i1971[2], i1971[3], i1971[4] )
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1975 = data
  i1974.name = i1975[0]
  request.r(i1975[1], i1975[2], 0, i1974, 'value')
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1979 = data
  i1978.name = i1979[0]
  i1978.enabled = !!i1979[1]
  return i1978
}

Deserializers["ObjectCtrl"] = function (request, data, root) {
  var i1980 = root || request.c( 'ObjectCtrl' )
  var i1981 = data
  i1980.objectNum = i1981[0]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1983 = data
  i1982.center = new pc.Vec3( i1983[0], i1983[1], i1983[2] )
  i1982.size = new pc.Vec3( i1983[3], i1983[4], i1983[5] )
  i1982.enabled = !!i1983[6]
  i1982.isTrigger = !!i1983[7]
  request.r(i1983[8], i1983[9], 0, i1982, 'material')
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1985 = data
  i1984.name = i1985[0]
  i1984.width = i1985[1]
  i1984.height = i1985[2]
  i1984.mipmapCount = i1985[3]
  i1984.anisoLevel = i1985[4]
  i1984.filterMode = i1985[5]
  i1984.hdr = !!i1985[6]
  i1984.format = i1985[7]
  i1984.wrapMode = i1985[8]
  i1984.alphaIsTransparency = !!i1985[9]
  i1984.alphaSource = i1985[10]
  i1984.graphicsFormat = i1985[11]
  i1984.sRGBTexture = !!i1985[12]
  i1984.desiredColorSpace = i1985[13]
  i1984.wrapU = i1985[14]
  i1984.wrapV = i1985[15]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.atlasId = i1987[1]
  i1986.mipmapCount = i1987[2]
  i1986.hdr = !!i1987[3]
  i1986.size = i1987[4]
  i1986.anisoLevel = i1987[5]
  i1986.filterMode = i1987[6]
  var i1989 = i1987[7]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 4) {
    i1988.push( UnityEngine.Rect.MinMaxRect(i1989[i + 0], i1989[i + 1], i1989[i + 2], i1989[i + 3]) );
  }
  i1986.rects = i1988
  i1986.wrapU = i1987[8]
  i1986.wrapV = i1987[9]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.index = i1993[1]
  i1992.startup = !!i1993[2]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1995 = data
  i1994.enabled = !!i1995[0]
  i1994.aspect = i1995[1]
  i1994.orthographic = !!i1995[2]
  i1994.orthographicSize = i1995[3]
  i1994.backgroundColor = new pc.Color(i1995[4], i1995[5], i1995[6], i1995[7])
  i1994.nearClipPlane = i1995[8]
  i1994.farClipPlane = i1995[9]
  i1994.fieldOfView = i1995[10]
  i1994.depth = i1995[11]
  i1994.clearFlags = i1995[12]
  i1994.cullingMask = i1995[13]
  i1994.rect = i1995[14]
  request.r(i1995[15], i1995[16], 0, i1994, 'targetTexture')
  i1994.usePhysicalProperties = !!i1995[17]
  i1994.focalLength = i1995[18]
  i1994.sensorSize = new pc.Vec2( i1995[19], i1995[20] )
  i1994.lensShift = new pc.Vec2( i1995[21], i1995[22] )
  i1994.gateFit = i1995[23]
  i1994.commandBufferCount = i1995[24]
  i1994.cameraType = i1995[25]
  return i1994
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1997 = data
  i1996.m_RenderShadows = !!i1997[0]
  i1996.m_RequiresDepthTextureOption = i1997[1]
  i1996.m_RequiresOpaqueTextureOption = i1997[2]
  i1996.m_CameraType = i1997[3]
  var i1999 = i1997[4]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1996.m_Cameras = i1998
  i1996.m_RendererIndex = i1997[5]
  i1996.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1997[6] )
  request.r(i1997[7], i1997[8], 0, i1996, 'm_VolumeTrigger')
  i1996.m_VolumeFrameworkUpdateModeOption = i1997[9]
  i1996.m_RenderPostProcessing = !!i1997[10]
  i1996.m_Antialiasing = i1997[11]
  i1996.m_AntialiasingQuality = i1997[12]
  i1996.m_StopNaN = !!i1997[13]
  i1996.m_Dithering = !!i1997[14]
  i1996.m_ClearDepth = !!i1997[15]
  i1996.m_AllowXRRendering = !!i1997[16]
  i1996.m_AllowHDROutput = !!i1997[17]
  i1996.m_UseScreenCoordOverride = !!i1997[18]
  i1996.m_ScreenSizeOverride = new pc.Vec4( i1997[19], i1997[20], i1997[21], i1997[22] )
  i1996.m_ScreenCoordScaleBias = new pc.Vec4( i1997[23], i1997[24], i1997[25], i1997[26] )
  i1996.m_RequiresDepthTexture = !!i1997[27]
  i1996.m_RequiresColorTexture = !!i1997[28]
  i1996.m_Version = i1997[29]
  i1996.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1997[30], i1996.m_TaaSettings)
  return i1996
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2003 = data
  i2002.m_Quality = i2003[0]
  i2002.m_FrameInfluence = i2003[1]
  i2002.m_JitterScale = i2003[2]
  i2002.m_MipBias = i2003[3]
  i2002.m_VarianceClampScale = i2003[4]
  i2002.m_ContrastAdaptiveSharpening = i2003[5]
  return i2002
}

Deserializers["CameraAspect"] = function (request, data, root) {
  var i2004 = root || request.c( 'CameraAspect' )
  var i2005 = data
  i2004.targetAspect = i2005[0]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2007 = data
  i2006.enabled = !!i2007[0]
  i2006.type = i2007[1]
  i2006.color = new pc.Color(i2007[2], i2007[3], i2007[4], i2007[5])
  i2006.cullingMask = i2007[6]
  i2006.intensity = i2007[7]
  i2006.range = i2007[8]
  i2006.spotAngle = i2007[9]
  i2006.shadows = i2007[10]
  i2006.shadowNormalBias = i2007[11]
  i2006.shadowBias = i2007[12]
  i2006.shadowStrength = i2007[13]
  i2006.shadowResolution = i2007[14]
  i2006.lightmapBakeType = i2007[15]
  i2006.renderMode = i2007[16]
  request.r(i2007[17], i2007[18], 0, i2006, 'cookie')
  i2006.cookieSize = i2007[19]
  return i2006
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2009 = data
  i2008.m_Version = i2009[0]
  i2008.m_UsePipelineSettings = !!i2009[1]
  i2008.m_AdditionalLightsShadowResolutionTier = i2009[2]
  i2008.m_LightLayerMask = i2009[3]
  i2008.m_RenderingLayers = i2009[4]
  i2008.m_CustomShadowLayers = !!i2009[5]
  i2008.m_ShadowLayerMask = i2009[6]
  i2008.m_ShadowRenderingLayers = i2009[7]
  i2008.m_LightCookieSize = new pc.Vec2( i2009[8], i2009[9] )
  i2008.m_LightCookieOffset = new pc.Vec2( i2009[10], i2009[11] )
  i2008.m_SoftShadowQuality = i2009[12]
  return i2008
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2011 = data
  i2010.priority = i2011[0]
  i2010.blendDistance = i2011[1]
  i2010.weight = i2011[2]
  request.r(i2011[3], i2011[4], 0, i2010, 'sharedProfile')
  i2010.m_IsGlobal = !!i2011[5]
  return i2010
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'm_FirstSelected')
  i2012.m_sendNavigationEvents = !!i2013[2]
  i2012.m_DragThreshold = i2013[3]
  return i2012
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2015 = data
  i2014.m_HorizontalAxis = i2015[0]
  i2014.m_VerticalAxis = i2015[1]
  i2014.m_SubmitButton = i2015[2]
  i2014.m_CancelButton = i2015[3]
  i2014.m_InputActionsPerSecond = i2015[4]
  i2014.m_RepeatDelay = i2015[5]
  i2014.m_ForceModuleActive = !!i2015[6]
  i2014.m_SendPointerHoverToParent = !!i2015[7]
  return i2014
}

Deserializers["DongHeon.GameManager"] = function (request, data, root) {
  var i2016 = root || request.c( 'DongHeon.GameManager' )
  var i2017 = data
  var i2019 = i2017[0]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 2) {
  request.r(i2019[i + 0], i2019[i + 1], 2, i2018, '')
  }
  i2016.objectPool = i2018
  var i2021 = i2017[1]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 2, i2020, '')
  }
  i2016.orderPool = i2020
  var i2023 = i2017[2]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 2, i2022, '')
  }
  i2016.objectSpawnPoses = i2022
  var i2025 = i2017[3]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 2) {
  request.r(i2025[i + 0], i2025[i + 1], 2, i2024, '')
  }
  i2016.orderSpawnPoses = i2024
  var i2027 = i2017[4]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 2) {
  request.r(i2027[i + 0], i2027[i + 1], 2, i2026, '')
  }
  i2016.cokeGos = i2026
  var i2029 = i2017[5]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 2) {
  request.r(i2029[i + 0], i2029[i + 1], 2, i2028, '')
  }
  i2016.JuiceGos = i2028
  var i2031 = i2017[6]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 2, i2030, '')
  }
  i2016.danjiGos = i2030
  var i2033 = i2017[7]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 2, i2032, '')
  }
  i2016.pringlesGos = i2032
  var i2035 = i2017[8]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 2, i2034, '')
  }
  i2016.milkGos = i2034
  var i2037 = i2017[9]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 2) {
  request.r(i2037[i + 0], i2037[i + 1], 2, i2036, '')
  }
  i2016.peperoGos = i2036
  var i2039 = i2017[10]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 2, i2038, '')
  }
  i2016.kimbabGos = i2038
  var i2041 = i2017[11]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 2) {
  request.r(i2041[i + 0], i2041[i + 1], 2, i2040, '')
  }
  i2016.twinGos = i2040
  var i2043 = i2017[12]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 2, i2042, '')
  }
  i2016.yoplaitGos = i2042
  request.r(i2017[13], i2017[14], 0, i2016, 'gameOverPanel')
  i2016.objectLayer = UnityEngine.LayerMask.FromIntegerValue( i2017[15] )
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2049 = data
  i2048.pivot = new pc.Vec2( i2049[0], i2049[1] )
  i2048.anchorMin = new pc.Vec2( i2049[2], i2049[3] )
  i2048.anchorMax = new pc.Vec2( i2049[4], i2049[5] )
  i2048.sizeDelta = new pc.Vec2( i2049[6], i2049[7] )
  i2048.anchoredPosition3D = new pc.Vec3( i2049[8], i2049[9], i2049[10] )
  i2048.rotation = new pc.Quat(i2049[11], i2049[12], i2049[13], i2049[14])
  i2048.scale = new pc.Vec3( i2049[15], i2049[16], i2049[17] )
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2051 = data
  i2050.enabled = !!i2051[0]
  i2050.planeDistance = i2051[1]
  i2050.referencePixelsPerUnit = i2051[2]
  i2050.isFallbackOverlay = !!i2051[3]
  i2050.renderMode = i2051[4]
  i2050.renderOrder = i2051[5]
  i2050.sortingLayerName = i2051[6]
  i2050.sortingOrder = i2051[7]
  i2050.scaleFactor = i2051[8]
  request.r(i2051[9], i2051[10], 0, i2050, 'worldCamera')
  i2050.overrideSorting = !!i2051[11]
  i2050.pixelPerfect = !!i2051[12]
  i2050.targetDisplay = i2051[13]
  i2050.overridePixelPerfect = !!i2051[14]
  return i2050
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2053 = data
  i2052.m_UiScaleMode = i2053[0]
  i2052.m_ReferencePixelsPerUnit = i2053[1]
  i2052.m_ScaleFactor = i2053[2]
  i2052.m_ReferenceResolution = new pc.Vec2( i2053[3], i2053[4] )
  i2052.m_ScreenMatchMode = i2053[5]
  i2052.m_MatchWidthOrHeight = i2053[6]
  i2052.m_PhysicalUnit = i2053[7]
  i2052.m_FallbackScreenDPI = i2053[8]
  i2052.m_DefaultSpriteDPI = i2053[9]
  i2052.m_DynamicPixelsPerUnit = i2053[10]
  i2052.m_PresetInfoIsWorld = !!i2053[11]
  return i2052
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2055 = data
  i2054.m_IgnoreReversedGraphics = !!i2055[0]
  i2054.m_BlockingObjects = i2055[1]
  i2054.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2055[2] )
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2057 = data
  i2056.cullTransparentMesh = !!i2057[0]
  return i2056
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.UI.Image' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'm_Sprite')
  i2058.m_Type = i2059[2]
  i2058.m_PreserveAspect = !!i2059[3]
  i2058.m_FillCenter = !!i2059[4]
  i2058.m_FillMethod = i2059[5]
  i2058.m_FillAmount = i2059[6]
  i2058.m_FillClockwise = !!i2059[7]
  i2058.m_FillOrigin = i2059[8]
  i2058.m_UseSpriteMesh = !!i2059[9]
  i2058.m_PixelsPerUnitMultiplier = i2059[10]
  request.r(i2059[11], i2059[12], 0, i2058, 'm_Material')
  i2058.m_Maskable = !!i2059[13]
  i2058.m_Color = new pc.Color(i2059[14], i2059[15], i2059[16], i2059[17])
  i2058.m_RaycastTarget = !!i2059[18]
  i2058.m_RaycastPadding = new pc.Vec4( i2059[19], i2059[20], i2059[21], i2059[22] )
  return i2058
}

Deserializers["MouseCtrl"] = function (request, data, root) {
  var i2060 = root || request.c( 'MouseCtrl' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'mainCanvas')
  i2060.offsetX = i2061[2]
  i2060.offsetY = i2061[3]
  return i2060
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.UI.Text' )
  var i2063 = data
  i2062.m_FontData = request.d('UnityEngine.UI.FontData', i2063[0], i2062.m_FontData)
  i2062.m_Text = i2063[1]
  request.r(i2063[2], i2063[3], 0, i2062, 'm_Material')
  i2062.m_Maskable = !!i2063[4]
  i2062.m_Color = new pc.Color(i2063[5], i2063[6], i2063[7], i2063[8])
  i2062.m_RaycastTarget = !!i2063[9]
  i2062.m_RaycastPadding = new pc.Vec4( i2063[10], i2063[11], i2063[12], i2063[13] )
  return i2062
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'm_Font')
  i2064.m_FontSize = i2065[2]
  i2064.m_FontStyle = i2065[3]
  i2064.m_BestFit = !!i2065[4]
  i2064.m_MinSize = i2065[5]
  i2064.m_MaxSize = i2065[6]
  i2064.m_Alignment = i2065[7]
  i2064.m_AlignByGeometry = !!i2065[8]
  i2064.m_RichText = !!i2065[9]
  i2064.m_HorizontalOverflow = i2065[10]
  i2064.m_VerticalOverflow = i2065[11]
  i2064.m_LineSpacing = i2065[12]
  return i2064
}

Deserializers["GameOverPanel"] = function (request, data, root) {
  var i2066 = root || request.c( 'GameOverPanel' )
  var i2067 = data
  return i2066
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2069 = data
  i2068.m_hasFontAssetChanged = !!i2069[0]
  request.r(i2069[1], i2069[2], 0, i2068, 'm_baseMaterial')
  i2068.m_maskOffset = new pc.Vec4( i2069[3], i2069[4], i2069[5], i2069[6] )
  i2068.m_text = i2069[7]
  i2068.m_isRightToLeft = !!i2069[8]
  request.r(i2069[9], i2069[10], 0, i2068, 'm_fontAsset')
  request.r(i2069[11], i2069[12], 0, i2068, 'm_sharedMaterial')
  var i2071 = i2069[13]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 2) {
  request.r(i2071[i + 0], i2071[i + 1], 2, i2070, '')
  }
  i2068.m_fontSharedMaterials = i2070
  request.r(i2069[14], i2069[15], 0, i2068, 'm_fontMaterial')
  var i2073 = i2069[16]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 2, i2072, '')
  }
  i2068.m_fontMaterials = i2072
  i2068.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2069[17], i2069[18], i2069[19], i2069[20])
  i2068.m_fontColor = new pc.Color(i2069[21], i2069[22], i2069[23], i2069[24])
  i2068.m_enableVertexGradient = !!i2069[25]
  i2068.m_colorMode = i2069[26]
  i2068.m_fontColorGradient = request.d('TMPro.VertexGradient', i2069[27], i2068.m_fontColorGradient)
  request.r(i2069[28], i2069[29], 0, i2068, 'm_fontColorGradientPreset')
  request.r(i2069[30], i2069[31], 0, i2068, 'm_spriteAsset')
  i2068.m_tintAllSprites = !!i2069[32]
  request.r(i2069[33], i2069[34], 0, i2068, 'm_StyleSheet')
  i2068.m_TextStyleHashCode = i2069[35]
  i2068.m_overrideHtmlColors = !!i2069[36]
  i2068.m_faceColor = UnityEngine.Color32.ConstructColor(i2069[37], i2069[38], i2069[39], i2069[40])
  i2068.m_fontSize = i2069[41]
  i2068.m_fontSizeBase = i2069[42]
  i2068.m_fontWeight = i2069[43]
  i2068.m_enableAutoSizing = !!i2069[44]
  i2068.m_fontSizeMin = i2069[45]
  i2068.m_fontSizeMax = i2069[46]
  i2068.m_fontStyle = i2069[47]
  i2068.m_HorizontalAlignment = i2069[48]
  i2068.m_VerticalAlignment = i2069[49]
  i2068.m_textAlignment = i2069[50]
  i2068.m_characterSpacing = i2069[51]
  i2068.m_wordSpacing = i2069[52]
  i2068.m_lineSpacing = i2069[53]
  i2068.m_lineSpacingMax = i2069[54]
  i2068.m_paragraphSpacing = i2069[55]
  i2068.m_charWidthMaxAdj = i2069[56]
  i2068.m_enableWordWrapping = !!i2069[57]
  i2068.m_wordWrappingRatios = i2069[58]
  i2068.m_overflowMode = i2069[59]
  request.r(i2069[60], i2069[61], 0, i2068, 'm_linkedTextComponent')
  request.r(i2069[62], i2069[63], 0, i2068, 'parentLinkedComponent')
  i2068.m_enableKerning = !!i2069[64]
  i2068.m_enableExtraPadding = !!i2069[65]
  i2068.checkPaddingRequired = !!i2069[66]
  i2068.m_isRichText = !!i2069[67]
  i2068.m_parseCtrlCharacters = !!i2069[68]
  i2068.m_isOrthographic = !!i2069[69]
  i2068.m_isCullingEnabled = !!i2069[70]
  i2068.m_horizontalMapping = i2069[71]
  i2068.m_verticalMapping = i2069[72]
  i2068.m_uvLineOffset = i2069[73]
  i2068.m_geometrySortingOrder = i2069[74]
  i2068.m_IsTextObjectScaleStatic = !!i2069[75]
  i2068.m_VertexBufferAutoSizeReduction = !!i2069[76]
  i2068.m_useMaxVisibleDescender = !!i2069[77]
  i2068.m_pageToDisplay = i2069[78]
  i2068.m_margin = new pc.Vec4( i2069[79], i2069[80], i2069[81], i2069[82] )
  i2068.m_isUsingLegacyAnimationComponent = !!i2069[83]
  i2068.m_isVolumetricText = !!i2069[84]
  request.r(i2069[85], i2069[86], 0, i2068, 'm_Material')
  i2068.m_Maskable = !!i2069[87]
  i2068.m_Color = new pc.Color(i2069[88], i2069[89], i2069[90], i2069[91])
  i2068.m_RaycastTarget = !!i2069[92]
  i2068.m_RaycastPadding = new pc.Vec4( i2069[93], i2069[94], i2069[95], i2069[96] )
  return i2068
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2074 = root || request.c( 'TMPro.VertexGradient' )
  var i2075 = data
  i2074.topLeft = new pc.Color(i2075[0], i2075[1], i2075[2], i2075[3])
  i2074.topRight = new pc.Color(i2075[4], i2075[5], i2075[6], i2075[7])
  i2074.bottomLeft = new pc.Color(i2075[8], i2075[9], i2075[10], i2075[11])
  i2074.bottomRight = new pc.Color(i2075[12], i2075[13], i2075[14], i2075[15])
  return i2074
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.UI.Button' )
  var i2077 = data
  i2076.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2077[0], i2076.m_OnClick)
  i2076.m_Navigation = request.d('UnityEngine.UI.Navigation', i2077[1], i2076.m_Navigation)
  i2076.m_Transition = i2077[2]
  i2076.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2077[3], i2076.m_Colors)
  i2076.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2077[4], i2076.m_SpriteState)
  i2076.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2077[5], i2076.m_AnimationTriggers)
  i2076.m_Interactable = !!i2077[6]
  request.r(i2077[7], i2077[8], 0, i2076, 'm_TargetGraphic')
  return i2076
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2079 = data
  i2078.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2079[0], i2078.m_PersistentCalls)
  return i2078
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2081 = data
  var i2083 = i2081[0]
  var i2082 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.add(request.d('UnityEngine.Events.PersistentCall', i2083[i + 0]));
  }
  i2080.m_Calls = i2082
  return i2080
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'm_Target')
  i2086.m_TargetAssemblyTypeName = i2087[2]
  i2086.m_MethodName = i2087[3]
  i2086.m_Mode = i2087[4]
  i2086.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2087[5], i2086.m_Arguments)
  i2086.m_CallState = i2087[6]
  return i2086
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'm_ObjectArgument')
  i2088.m_ObjectArgumentAssemblyTypeName = i2089[2]
  i2088.m_IntArgument = i2089[3]
  i2088.m_FloatArgument = i2089[4]
  i2088.m_StringArgument = i2089[5]
  i2088.m_BoolArgument = !!i2089[6]
  return i2088
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2091 = data
  i2090.m_Mode = i2091[0]
  i2090.m_WrapAround = !!i2091[1]
  request.r(i2091[2], i2091[3], 0, i2090, 'm_SelectOnUp')
  request.r(i2091[4], i2091[5], 0, i2090, 'm_SelectOnDown')
  request.r(i2091[6], i2091[7], 0, i2090, 'm_SelectOnLeft')
  request.r(i2091[8], i2091[9], 0, i2090, 'm_SelectOnRight')
  return i2090
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2093 = data
  i2092.m_NormalColor = new pc.Color(i2093[0], i2093[1], i2093[2], i2093[3])
  i2092.m_HighlightedColor = new pc.Color(i2093[4], i2093[5], i2093[6], i2093[7])
  i2092.m_PressedColor = new pc.Color(i2093[8], i2093[9], i2093[10], i2093[11])
  i2092.m_SelectedColor = new pc.Color(i2093[12], i2093[13], i2093[14], i2093[15])
  i2092.m_DisabledColor = new pc.Color(i2093[16], i2093[17], i2093[18], i2093[19])
  i2092.m_ColorMultiplier = i2093[20]
  i2092.m_FadeDuration = i2093[21]
  return i2092
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'm_HighlightedSprite')
  request.r(i2095[2], i2095[3], 0, i2094, 'm_PressedSprite')
  request.r(i2095[4], i2095[5], 0, i2094, 'm_SelectedSprite')
  request.r(i2095[6], i2095[7], 0, i2094, 'm_DisabledSprite')
  return i2094
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2097 = data
  i2096.m_NormalTrigger = i2097[0]
  i2096.m_HighlightedTrigger = i2097[1]
  i2096.m_PressedTrigger = i2097[2]
  i2096.m_SelectedTrigger = i2097[3]
  i2096.m_DisabledTrigger = i2097[4]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2099 = data
  i2098.ambientIntensity = i2099[0]
  i2098.reflectionIntensity = i2099[1]
  i2098.ambientMode = i2099[2]
  i2098.ambientLight = new pc.Color(i2099[3], i2099[4], i2099[5], i2099[6])
  i2098.ambientSkyColor = new pc.Color(i2099[7], i2099[8], i2099[9], i2099[10])
  i2098.ambientGroundColor = new pc.Color(i2099[11], i2099[12], i2099[13], i2099[14])
  i2098.ambientEquatorColor = new pc.Color(i2099[15], i2099[16], i2099[17], i2099[18])
  i2098.fogColor = new pc.Color(i2099[19], i2099[20], i2099[21], i2099[22])
  i2098.fogEndDistance = i2099[23]
  i2098.fogStartDistance = i2099[24]
  i2098.fogDensity = i2099[25]
  i2098.fog = !!i2099[26]
  request.r(i2099[27], i2099[28], 0, i2098, 'skybox')
  i2098.fogMode = i2099[29]
  var i2101 = i2099[30]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2101[i + 0]) );
  }
  i2098.lightmaps = i2100
  i2098.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2099[31], i2098.lightProbes)
  i2098.lightmapsMode = i2099[32]
  i2098.mixedBakeMode = i2099[33]
  i2098.environmentLightingMode = i2099[34]
  i2098.ambientProbe = new pc.SphericalHarmonicsL2(i2099[35])
  i2098.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2099[36])
  i2098.useReferenceAmbientProbe = !!i2099[37]
  request.r(i2099[38], i2099[39], 0, i2098, 'customReflection')
  request.r(i2099[40], i2099[41], 0, i2098, 'defaultReflection')
  i2098.defaultReflectionMode = i2099[42]
  i2098.defaultReflectionResolution = i2099[43]
  i2098.sunLightObjectId = i2099[44]
  i2098.pixelLightCount = i2099[45]
  i2098.defaultReflectionHDR = !!i2099[46]
  i2098.hasLightDataAsset = !!i2099[47]
  i2098.hasManualGenerate = !!i2099[48]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2105 = data
  request.r(i2105[0], i2105[1], 0, i2104, 'lightmapColor')
  request.r(i2105[2], i2105[3], 0, i2104, 'lightmapDirection')
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2106 = root || new UnityEngine.LightProbes()
  var i2107 = data
  return i2106
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'panelPrefab')
  var i2117 = i2115[2]
  var i2116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2117[i + 0]));
  }
  i2114.prefabs = i2116
  return i2114
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2121 = data
  i2120.type = i2121[0]
  request.r(i2121[1], i2121[2], 0, i2120, 'prefab')
  return i2120
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2123 = data
  i2122.m_Spacing = i2123[0]
  i2122.m_ChildForceExpandWidth = !!i2123[1]
  i2122.m_ChildForceExpandHeight = !!i2123[2]
  i2122.m_ChildControlWidth = !!i2123[3]
  i2122.m_ChildControlHeight = !!i2123[4]
  i2122.m_ChildScaleWidth = !!i2123[5]
  i2122.m_ChildScaleHeight = !!i2123[6]
  i2122.m_ReverseArrangement = !!i2123[7]
  i2122.m_Padding = UnityEngine.RectOffset.FromPaddings(i2123[8], i2123[9], i2123[10], i2123[11])
  i2122.m_ChildAlignment = i2123[12]
  return i2122
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2125 = data
  i2124.m_HorizontalFit = i2125[0]
  i2124.m_VerticalFit = i2125[1]
  return i2124
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'contentHolder')
  return i2126
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'nameLabel')
  request.r(i2129[2], i2129[3], 0, i2128, 'scrollRect')
  request.r(i2129[4], i2129[5], 0, i2128, 'viewport')
  request.r(i2129[6], i2129[7], 0, i2128, 'Canvas')
  return i2128
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2131 = data
  i2130.m_IgnoreLayout = !!i2131[0]
  i2130.m_MinWidth = i2131[1]
  i2130.m_MinHeight = i2131[2]
  i2130.m_PreferredWidth = i2131[3]
  i2130.m_PreferredHeight = i2131[4]
  i2130.m_FlexibleWidth = i2131[5]
  i2130.m_FlexibleHeight = i2131[6]
  i2130.m_LayoutPriority = i2131[7]
  return i2130
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'm_Content')
  i2132.m_Horizontal = !!i2133[2]
  i2132.m_Vertical = !!i2133[3]
  i2132.m_MovementType = i2133[4]
  i2132.m_Elasticity = i2133[5]
  i2132.m_Inertia = !!i2133[6]
  i2132.m_DecelerationRate = i2133[7]
  i2132.m_ScrollSensitivity = i2133[8]
  request.r(i2133[9], i2133[10], 0, i2132, 'm_Viewport')
  request.r(i2133[11], i2133[12], 0, i2132, 'm_HorizontalScrollbar')
  request.r(i2133[13], i2133[14], 0, i2132, 'm_VerticalScrollbar')
  i2132.m_HorizontalScrollbarVisibility = i2133[15]
  i2132.m_VerticalScrollbarVisibility = i2133[16]
  i2132.m_HorizontalScrollbarSpacing = i2133[17]
  i2132.m_VerticalScrollbarSpacing = i2133[18]
  i2132.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2133[19], i2132.m_OnValueChanged)
  return i2132
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2135 = data
  i2134.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2135[0], i2134.m_PersistentCalls)
  return i2134
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2137 = data
  i2136.m_ShowMaskGraphic = !!i2137[0]
  return i2136
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'm_HandleRect')
  i2138.m_Direction = i2139[2]
  i2138.m_Value = i2139[3]
  i2138.m_Size = i2139[4]
  i2138.m_NumberOfSteps = i2139[5]
  i2138.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2139[6], i2138.m_OnValueChanged)
  i2138.m_Navigation = request.d('UnityEngine.UI.Navigation', i2139[7], i2138.m_Navigation)
  i2138.m_Transition = i2139[8]
  i2138.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2139[9], i2138.m_Colors)
  i2138.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2139[10], i2138.m_SpriteState)
  i2138.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2139[11], i2138.m_AnimationTriggers)
  i2138.m_Interactable = !!i2139[12]
  request.r(i2139[13], i2139[14], 0, i2138, 'm_TargetGraphic')
  return i2138
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2141 = data
  i2140.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2141[0], i2140.m_PersistentCalls)
  return i2140
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2143 = data
  var i2145 = i2143[0]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2145[i + 0]));
  }
  i2142.m_Delegates = i2144
  return i2142
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2149 = data
  i2148.eventID = i2149[0]
  i2148.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2149[1], i2148.callback)
  return i2148
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2151 = data
  i2150.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2151[0], i2150.m_PersistentCalls)
  return i2150
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'nameLabel')
  request.r(i2153[2], i2153[3], 0, i2152, 'valueLabel')
  i2152.colorDefault = new pc.Color(i2153[4], i2153[5], i2153[6], i2153[7])
  i2152.colorSelected = new pc.Color(i2153[8], i2153[9], i2153[10], i2153[11])
  return i2152
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'nameLabel')
  request.r(i2155[2], i2155[3], 0, i2154, 'valueToggle')
  request.r(i2155[4], i2155[5], 0, i2154, 'checkmarkImage')
  i2154.colorDefault = new pc.Color(i2155[6], i2155[7], i2155[8], i2155[9])
  i2154.colorSelected = new pc.Color(i2155[10], i2155[11], i2155[12], i2155[13])
  return i2154
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2157 = data
  i2156.toggleTransition = i2157[0]
  request.r(i2157[1], i2157[2], 0, i2156, 'graphic')
  i2156.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2157[3], i2156.onValueChanged)
  request.r(i2157[4], i2157[5], 0, i2156, 'm_Group')
  i2156.m_IsOn = !!i2157[6]
  i2156.m_Navigation = request.d('UnityEngine.UI.Navigation', i2157[7], i2156.m_Navigation)
  i2156.m_Transition = i2157[8]
  i2156.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2157[9], i2156.m_Colors)
  i2156.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2157[10], i2156.m_SpriteState)
  i2156.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2157[11], i2156.m_AnimationTriggers)
  i2156.m_Interactable = !!i2157[12]
  request.r(i2157[13], i2157[14], 0, i2156, 'm_TargetGraphic')
  return i2156
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2159 = data
  i2158.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2159[0], i2158.m_PersistentCalls)
  return i2158
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2161 = data
  request.r(i2161[0], i2161[1], 0, i2160, 'nameLabel')
  request.r(i2161[2], i2161[3], 0, i2160, 'valueLabel')
  i2160.colorDefault = new pc.Color(i2161[4], i2161[5], i2161[6], i2161[7])
  i2160.colorSelected = new pc.Color(i2161[8], i2161[9], i2161[10], i2161[11])
  return i2160
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'nameLabel')
  request.r(i2163[2], i2163[3], 0, i2162, 'valueLabel')
  i2162.colorDefault = new pc.Color(i2163[4], i2163[5], i2163[6], i2163[7])
  i2162.colorSelected = new pc.Color(i2163[8], i2163[9], i2163[10], i2163[11])
  return i2162
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'nameLabel')
  request.r(i2165[2], i2165[3], 0, i2164, 'valueLabel')
  i2164.colorDefault = new pc.Color(i2165[4], i2165[5], i2165[6], i2165[7])
  i2164.colorSelected = new pc.Color(i2165[8], i2165[9], i2165[10], i2165[11])
  return i2164
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'nextButtonText')
  request.r(i2167[2], i2167[3], 0, i2166, 'previousButtonText')
  request.r(i2167[4], i2167[5], 0, i2166, 'nameLabel')
  request.r(i2167[6], i2167[7], 0, i2166, 'valueLabel')
  i2166.colorDefault = new pc.Color(i2167[8], i2167[9], i2167[10], i2167[11])
  i2166.colorSelected = new pc.Color(i2167[12], i2167[13], i2167[14], i2167[15])
  return i2166
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2169 = data
  request.r(i2169[0], i2169[1], 0, i2168, 'nameLabel')
  i2168.colorDefault = new pc.Color(i2169[2], i2169[3], i2169[4], i2169[5])
  i2168.colorSelected = new pc.Color(i2169[6], i2169[7], i2169[8], i2169[9])
  return i2168
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'nameLabel')
  request.r(i2171[2], i2171[3], 0, i2170, 'valueToggle')
  i2170.colorDefault = new pc.Color(i2171[4], i2171[5], i2171[6], i2171[7])
  i2170.colorSelected = new pc.Color(i2171[8], i2171[9], i2171[10], i2171[11])
  return i2170
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2173 = data
  i2172.toggleTransition = i2173[0]
  request.r(i2173[1], i2173[2], 0, i2172, 'graphic')
  i2172.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2173[3], i2172.onValueChanged)
  request.r(i2173[4], i2173[5], 0, i2172, 'content')
  request.r(i2173[6], i2173[7], 0, i2172, 'arrowOpened')
  request.r(i2173[8], i2173[9], 0, i2172, 'arrowClosed')
  request.r(i2173[10], i2173[11], 0, i2172, 'm_Group')
  i2172.m_IsOn = !!i2173[12]
  i2172.m_Navigation = request.d('UnityEngine.UI.Navigation', i2173[13], i2172.m_Navigation)
  i2172.m_Transition = i2173[14]
  i2172.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2173[15], i2172.m_Colors)
  i2172.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2173[16], i2172.m_SpriteState)
  i2172.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2173[17], i2172.m_AnimationTriggers)
  i2172.m_Interactable = !!i2173[18]
  request.r(i2173[19], i2173[20], 0, i2172, 'm_TargetGraphic')
  return i2172
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'nameLabel')
  request.r(i2175[2], i2175[3], 0, i2174, 'valueToggle')
  request.r(i2175[4], i2175[5], 0, i2174, 'colorImage')
  request.r(i2175[6], i2175[7], 0, i2174, 'fieldR')
  request.r(i2175[8], i2175[9], 0, i2174, 'fieldG')
  request.r(i2175[10], i2175[11], 0, i2174, 'fieldB')
  request.r(i2175[12], i2175[13], 0, i2174, 'fieldA')
  i2174.colorDefault = new pc.Color(i2175[14], i2175[15], i2175[16], i2175[17])
  i2174.colorSelected = new pc.Color(i2175[18], i2175[19], i2175[20], i2175[21])
  return i2174
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'nameLabel')
  request.r(i2177[2], i2177[3], 0, i2176, 'valueLabel')
  i2176.colorDefault = new pc.Color(i2177[4], i2177[5], i2177[6], i2177[7])
  i2176.colorSelected = new pc.Color(i2177[8], i2177[9], i2177[10], i2177[11])
  return i2176
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'nameLabel')
  request.r(i2179[2], i2179[3], 0, i2178, 'valueToggle')
  request.r(i2179[4], i2179[5], 0, i2178, 'fieldX')
  request.r(i2179[6], i2179[7], 0, i2178, 'fieldY')
  i2178.colorDefault = new pc.Color(i2179[8], i2179[9], i2179[10], i2179[11])
  i2178.colorSelected = new pc.Color(i2179[12], i2179[13], i2179[14], i2179[15])
  return i2178
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'nameLabel')
  request.r(i2181[2], i2181[3], 0, i2180, 'valueToggle')
  request.r(i2181[4], i2181[5], 0, i2180, 'fieldX')
  request.r(i2181[6], i2181[7], 0, i2180, 'fieldY')
  request.r(i2181[8], i2181[9], 0, i2180, 'fieldZ')
  i2180.colorDefault = new pc.Color(i2181[10], i2181[11], i2181[12], i2181[13])
  i2180.colorSelected = new pc.Color(i2181[14], i2181[15], i2181[16], i2181[17])
  return i2180
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'nameLabel')
  request.r(i2183[2], i2183[3], 0, i2182, 'valueToggle')
  request.r(i2183[4], i2183[5], 0, i2182, 'fieldX')
  request.r(i2183[6], i2183[7], 0, i2182, 'fieldY')
  request.r(i2183[8], i2183[9], 0, i2182, 'fieldZ')
  request.r(i2183[10], i2183[11], 0, i2182, 'fieldW')
  i2182.colorDefault = new pc.Color(i2183[12], i2183[13], i2183[14], i2183[15])
  i2182.colorSelected = new pc.Color(i2183[16], i2183[17], i2183[18], i2183[19])
  return i2182
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2185 = data
  i2184.colorDefault = new pc.Color(i2185[0], i2185[1], i2185[2], i2185[3])
  i2184.colorSelected = new pc.Color(i2185[4], i2185[5], i2185[6], i2185[7])
  return i2184
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2187 = data
  i2186.m_Spacing = i2187[0]
  i2186.m_ChildForceExpandWidth = !!i2187[1]
  i2186.m_ChildForceExpandHeight = !!i2187[2]
  i2186.m_ChildControlWidth = !!i2187[3]
  i2186.m_ChildControlHeight = !!i2187[4]
  i2186.m_ChildScaleWidth = !!i2187[5]
  i2186.m_ChildScaleHeight = !!i2187[6]
  i2186.m_ReverseArrangement = !!i2187[7]
  i2186.m_Padding = UnityEngine.RectOffset.FromPaddings(i2187[8], i2187[9], i2187[10], i2187[11])
  i2186.m_ChildAlignment = i2187[12]
  return i2186
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2189 = data
  i2188.colorDefault = new pc.Color(i2189[0], i2189[1], i2189[2], i2189[3])
  i2188.colorSelected = new pc.Color(i2189[4], i2189[5], i2189[6], i2189[7])
  return i2188
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'nameLabel')
  request.r(i2191[2], i2191[3], 0, i2190, 'header')
  i2190.colorDefault = new pc.Color(i2191[4], i2191[5], i2191[6], i2191[7])
  i2190.colorSelected = new pc.Color(i2191[8], i2191[9], i2191[10], i2191[11])
  return i2190
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'nameLabel')
  request.r(i2193[2], i2193[3], 0, i2192, 'valueToggle')
  var i2195 = i2193[4]
  var i2194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 1, i2194, '')
  }
  i2192.toggles = i2194
  i2192.colorDefault = new pc.Color(i2193[5], i2193[6], i2193[7], i2193[8])
  i2192.colorSelected = new pc.Color(i2193[9], i2193[10], i2193[11], i2193[12])
  return i2192
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'nameLabel')
  request.r(i2199[2], i2199[3], 0, i2198, 'valueToggle')
  request.r(i2199[4], i2199[5], 0, i2198, 'checkmarkImage')
  i2198.colorDefault = new pc.Color(i2199[6], i2199[7], i2199[8], i2199[9])
  i2198.colorSelected = new pc.Color(i2199[10], i2199[11], i2199[12], i2199[13])
  return i2198
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'nameLabel')
  request.r(i2201[2], i2201[3], 0, i2200, 'valueToggle')
  request.r(i2201[4], i2201[5], 0, i2200, 'checkmarkImage')
  i2200.colorDefault = new pc.Color(i2201[6], i2201[7], i2201[8], i2201[9])
  i2200.colorSelected = new pc.Color(i2201[10], i2201[11], i2201[12], i2201[13])
  return i2200
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'nextButtonText')
  request.r(i2203[2], i2203[3], 0, i2202, 'previousButtonText')
  request.r(i2203[4], i2203[5], 0, i2202, 'nameLabel')
  request.r(i2203[6], i2203[7], 0, i2202, 'valueLabel')
  i2202.colorDefault = new pc.Color(i2203[8], i2203[9], i2203[10], i2203[11])
  i2202.colorSelected = new pc.Color(i2203[12], i2203[13], i2203[14], i2203[15])
  return i2202
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'nameLabel')
  request.r(i2205[2], i2205[3], 0, i2204, 'valueToggle')
  i2204.colorDefault = new pc.Color(i2205[4], i2205[5], i2205[6], i2205[7])
  i2204.colorSelected = new pc.Color(i2205[8], i2205[9], i2205[10], i2205[11])
  return i2204
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'nameLabel')
  i2206.colorDefault = new pc.Color(i2207[2], i2207[3], i2207[4], i2207[5])
  i2206.colorSelected = new pc.Color(i2207[6], i2207[7], i2207[8], i2207[9])
  return i2206
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'nameLabel')
  request.r(i2209[2], i2209[3], 0, i2208, 'valueLabel')
  request.r(i2209[4], i2209[5], 0, i2208, 'progressBarRect')
  i2208.colorDefault = new pc.Color(i2209[6], i2209[7], i2209[8], i2209[9])
  i2208.colorSelected = new pc.Color(i2209[10], i2209[11], i2209[12], i2209[13])
  return i2208
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'nameLabel')
  request.r(i2211[2], i2211[3], 0, i2210, 'valueLabel')
  i2210.colorDefault = new pc.Color(i2211[4], i2211[5], i2211[6], i2211[7])
  i2210.colorSelected = new pc.Color(i2211[8], i2211[9], i2211[10], i2211[11])
  return i2210
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'nameLabel')
  request.r(i2213[2], i2213[3], 0, i2212, 'valueLabel')
  i2212.colorDefault = new pc.Color(i2213[4], i2213[5], i2213[6], i2213[7])
  i2212.colorSelected = new pc.Color(i2213[8], i2213[9], i2213[10], i2213[11])
  return i2212
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'nextButtonText')
  request.r(i2215[2], i2215[3], 0, i2214, 'previousButtonText')
  request.r(i2215[4], i2215[5], 0, i2214, 'nameLabel')
  request.r(i2215[6], i2215[7], 0, i2214, 'valueLabel')
  i2214.colorDefault = new pc.Color(i2215[8], i2215[9], i2215[10], i2215[11])
  i2214.colorSelected = new pc.Color(i2215[12], i2215[13], i2215[14], i2215[15])
  return i2214
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'nextButtonText')
  request.r(i2217[2], i2217[3], 0, i2216, 'previousButtonText')
  request.r(i2217[4], i2217[5], 0, i2216, 'nameLabel')
  request.r(i2217[6], i2217[7], 0, i2216, 'valueLabel')
  i2216.colorDefault = new pc.Color(i2217[8], i2217[9], i2217[10], i2217[11])
  i2216.colorSelected = new pc.Color(i2217[12], i2217[13], i2217[14], i2217[15])
  return i2216
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'panel')
  request.r(i2219[2], i2219[3], 0, i2218, 'valuePrefab')
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2221 = data
  i2220.AdditionalLightsPerObjectLimit = i2221[0]
  i2220.AdditionalLightsRenderingMode = i2221[1]
  i2220.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2221[2], i2220.LightRenderingMode)
  i2220.ColorGradingLutSize = i2221[3]
  i2220.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2221[4], i2220.ColorGradingMode)
  i2220.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2221[5], i2220.MainLightRenderingMode)
  i2220.MainLightRenderingModeValue = i2221[6]
  i2220.SupportsMainLightShadows = !!i2221[7]
  i2220.MixedLightingSupported = !!i2221[8]
  i2220.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2221[9], i2220.MsaaQuality)
  i2220.MSAA = i2221[10]
  i2220.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2221[11], i2220.OpaqueDownsampling)
  i2220.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2221[12], i2220.MainLightShadowmapResolution)
  i2220.MainLightShadowmapResolutionValue = i2221[13]
  i2220.SupportsSoftShadows = !!i2221[14]
  i2220.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2221[15], i2220.SoftShadowQuality)
  i2220.SoftShadowQualityValue = i2221[16]
  i2220.ShadowDistance = i2221[17]
  i2220.ShadowCascadeCount = i2221[18]
  i2220.Cascade2Split = i2221[19]
  i2220.Cascade3Split = new pc.Vec2( i2221[20], i2221[21] )
  i2220.Cascade4Split = new pc.Vec3( i2221[22], i2221[23], i2221[24] )
  i2220.CascadeBorder = i2221[25]
  i2220.ShadowDepthBias = i2221[26]
  i2220.ShadowNormalBias = i2221[27]
  i2220.RenderScale = i2221[28]
  i2220.RequireDepthTexture = !!i2221[29]
  i2220.RequireOpaqueTexture = !!i2221[30]
  i2220.SupportsHDR = !!i2221[31]
  i2220.SupportsTerrainHoles = !!i2221[32]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2223 = data
  i2222.Disabled = i2223[0]
  i2222.PerVertex = i2223[1]
  i2222.PerPixel = i2223[2]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2225 = data
  i2224.LowDynamicRange = i2225[0]
  i2224.HighDynamicRange = i2225[1]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2227 = data
  i2226.Disabled = i2227[0]
  i2226._2x = i2227[1]
  i2226._4x = i2227[2]
  i2226._8x = i2227[3]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2229 = data
  i2228.None = i2229[0]
  i2228._2xBilinear = i2229[1]
  i2228._4xBox = i2229[2]
  i2228._4xBilinear = i2229[3]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2231 = data
  i2230._256 = i2231[0]
  i2230._512 = i2231[1]
  i2230._1024 = i2231[2]
  i2230._2048 = i2231[3]
  i2230._4096 = i2231[4]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2233 = data
  i2232.UsePipelineSettings = i2233[0]
  i2232.Low = i2233[1]
  i2232.Medium = i2233[2]
  i2232.High = i2233[3]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2235 = data
  var i2237 = i2235[0]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2237[i + 0]));
  }
  i2234.ShaderCompilationErrors = i2236
  i2234.name = i2235[1]
  i2234.guid = i2235[2]
  var i2239 = i2235[3]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( i2239[i + 0] );
  }
  i2234.shaderDefinedKeywords = i2238
  var i2241 = i2235[4]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2241[i + 0]) );
  }
  i2234.passes = i2240
  var i2243 = i2235[5]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2243[i + 0]) );
  }
  i2234.usePasses = i2242
  var i2245 = i2235[6]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2245[i + 0]) );
  }
  i2234.defaultParameterValues = i2244
  request.r(i2235[7], i2235[8], 0, i2234, 'unityFallbackShader')
  i2234.readDepth = !!i2235[9]
  i2234.isCreatedByShaderGraph = !!i2235[10]
  i2234.compiled = !!i2235[11]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2249 = data
  i2248.shaderName = i2249[0]
  i2248.errorMessage = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2254 = root || new pc.UnityShaderPass()
  var i2255 = data
  i2254.id = i2255[0]
  i2254.subShaderIndex = i2255[1]
  i2254.name = i2255[2]
  i2254.passType = i2255[3]
  i2254.grabPassTextureName = i2255[4]
  i2254.usePass = !!i2255[5]
  i2254.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[6], i2254.zTest)
  i2254.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[7], i2254.zWrite)
  i2254.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[8], i2254.culling)
  i2254.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2255[9], i2254.blending)
  i2254.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2255[10], i2254.alphaBlending)
  i2254.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[11], i2254.colorWriteMask)
  i2254.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[12], i2254.offsetUnits)
  i2254.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[13], i2254.offsetFactor)
  i2254.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[14], i2254.stencilRef)
  i2254.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[15], i2254.stencilReadMask)
  i2254.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[16], i2254.stencilWriteMask)
  i2254.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2255[17], i2254.stencilOp)
  i2254.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2255[18], i2254.stencilOpFront)
  i2254.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2255[19], i2254.stencilOpBack)
  var i2257 = i2255[20]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2257[i + 0]) );
  }
  i2254.tags = i2256
  var i2259 = i2255[21]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( i2259[i + 0] );
  }
  i2254.passDefinedKeywords = i2258
  var i2261 = i2255[22]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2261[i + 0]) );
  }
  i2254.passDefinedKeywordGroups = i2260
  var i2263 = i2255[23]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2263[i + 0]) );
  }
  i2254.variants = i2262
  var i2265 = i2255[24]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2265[i + 0]) );
  }
  i2254.excludedVariants = i2264
  i2254.hasDepthReader = !!i2255[25]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2267 = data
  i2266.val = i2267[0]
  i2266.name = i2267[1]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2269 = data
  i2268.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[0], i2268.src)
  i2268.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[1], i2268.dst)
  i2268.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2269[2], i2268.op)
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2271 = data
  i2270.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[0], i2270.pass)
  i2270.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[1], i2270.fail)
  i2270.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[2], i2270.zFail)
  i2270.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2271[3], i2270.comp)
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.value = i2275[1]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2279 = data
  var i2281 = i2279[0]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( i2281[i + 0] );
  }
  i2278.keywords = i2280
  i2278.hasDiscard = !!i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2285 = data
  i2284.passId = i2285[0]
  i2284.subShaderIndex = i2285[1]
  var i2287 = i2285[2]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( i2287[i + 0] );
  }
  i2284.keywords = i2286
  i2284.vertexProgram = i2285[3]
  i2284.fragmentProgram = i2285[4]
  i2284.exportedForWebGl2 = !!i2285[5]
  i2284.readDepth = !!i2285[6]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'shader')
  i2290.pass = i2291[2]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.type = i2295[1]
  i2294.value = new pc.Vec4( i2295[2], i2295[3], i2295[4], i2295[5] )
  i2294.textureValue = i2295[6]
  i2294.shaderPropertyFlag = i2295[7]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2297 = data
  i2296.name = i2297[0]
  request.r(i2297[1], i2297[2], 0, i2296, 'texture')
  i2296.aabb = i2297[3]
  i2296.vertices = i2297[4]
  i2296.triangles = i2297[5]
  i2296.textureRect = UnityEngine.Rect.MinMaxRect(i2297[6], i2297[7], i2297[8], i2297[9])
  i2296.packedRect = UnityEngine.Rect.MinMaxRect(i2297[10], i2297[11], i2297[12], i2297[13])
  i2296.border = new pc.Vec4( i2297[14], i2297[15], i2297[16], i2297[17] )
  i2296.transparency = i2297[18]
  i2296.bounds = i2297[19]
  i2296.pixelsPerUnit = i2297[20]
  i2296.textureWidth = i2297[21]
  i2296.textureHeight = i2297[22]
  i2296.nativeSize = new pc.Vec2( i2297[23], i2297[24] )
  i2296.pivot = new pc.Vec2( i2297[25], i2297[26] )
  i2296.textureRectOffset = new pc.Vec2( i2297[27], i2297[28] )
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2299 = data
  i2298.name = i2299[0]
  i2298.ascent = i2299[1]
  i2298.originalLineHeight = i2299[2]
  i2298.fontSize = i2299[3]
  var i2301 = i2299[4]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2301[i + 0]) );
  }
  i2298.characterInfo = i2300
  request.r(i2299[5], i2299[6], 0, i2298, 'texture')
  i2298.originalFontSize = i2299[7]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2305 = data
  i2304.index = i2305[0]
  i2304.advance = i2305[1]
  i2304.bearing = i2305[2]
  i2304.glyphWidth = i2305[3]
  i2304.glyphHeight = i2305[4]
  i2304.minX = i2305[5]
  i2304.maxX = i2305[6]
  i2304.minY = i2305[7]
  i2304.maxY = i2305[8]
  i2304.uvBottomLeftX = i2305[9]
  i2304.uvBottomLeftY = i2305[10]
  i2304.uvBottomRightX = i2305[11]
  i2304.uvBottomRightY = i2305[12]
  i2304.uvTopLeftX = i2305[13]
  i2304.uvTopLeftY = i2305[14]
  i2304.uvTopRightX = i2305[15]
  i2304.uvTopRightY = i2305[16]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2307 = data
  i2306.name = i2307[0]
  i2306.bytes64 = i2307[1]
  i2306.data = i2307[2]
  return i2306
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 1, i2310, '')
  }
  i2308.components = i2310
  return i2308
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2315 = data
  i2314.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2315[0], i2314.mode)
  i2314.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2315[1], i2314.neutralHDRRangeReductionMode)
  i2314.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2315[2], i2314.acesPreset)
  i2314.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2315[3], i2314.hueShiftAmount)
  i2314.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2315[4], i2314.detectPaperWhite)
  i2314.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2315[5], i2314.paperWhite)
  i2314.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2315[6], i2314.detectBrightnessLimits)
  i2314.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2315[7], i2314.minNits)
  i2314.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2315[8], i2314.maxNits)
  i2314.active = !!i2315[9]
  return i2314
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2317 = data
  i2316.m_Value = i2317[0]
  i2316.m_OverrideState = !!i2317[1]
  return i2316
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2319 = data
  i2318.m_Value = i2319[0]
  i2318.m_OverrideState = !!i2319[1]
  return i2318
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2321 = data
  i2320.m_Value = i2321[0]
  i2320.m_OverrideState = !!i2321[1]
  return i2320
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2323 = data
  i2322.m_Value = i2323[0]
  i2322.m_OverrideState = !!i2323[1]
  return i2322
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2325 = data
  i2324.m_Value = !!i2325[0]
  i2324.m_OverrideState = !!i2325[1]
  return i2324
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2327 = data
  i2326.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2327[0], i2326.skipIterations)
  i2326.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2327[1], i2326.threshold)
  i2326.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2327[2], i2326.intensity)
  i2326.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2327[3], i2326.scatter)
  i2326.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2327[4], i2326.clamp)
  i2326.tint = request.d('UnityEngine.Rendering.ColorParameter', i2327[5], i2326.tint)
  i2326.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2327[6], i2326.highQualityFiltering)
  i2326.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2327[7], i2326.downscale)
  i2326.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2327[8], i2326.maxIterations)
  i2326.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2327[9], i2326.dirtTexture)
  i2326.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2327[10], i2326.dirtIntensity)
  i2326.active = !!i2327[11]
  return i2326
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2329 = data
  i2328.m_Value = i2329[0]
  i2328.m_OverrideState = !!i2329[1]
  return i2328
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2331 = data
  i2330.m_Value = i2331[0]
  i2330.m_OverrideState = !!i2331[1]
  return i2330
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2333 = data
  i2332.m_Value = new pc.Color(i2333[0], i2333[1], i2333[2], i2333[3])
  i2332.m_OverrideState = !!i2333[4]
  return i2332
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2335 = data
  i2334.m_Value = i2335[0]
  i2334.m_OverrideState = !!i2335[1]
  return i2334
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2337 = data
  i2336.dimension = i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'm_Value')
  i2336.m_OverrideState = !!i2337[3]
  return i2336
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2339 = data
  i2338.color = request.d('UnityEngine.Rendering.ColorParameter', i2339[0], i2338.color)
  i2338.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2339[1], i2338.center)
  i2338.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2339[2], i2338.intensity)
  i2338.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2339[3], i2338.smoothness)
  i2338.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2339[4], i2338.rounded)
  i2338.active = !!i2339[5]
  return i2338
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2341 = data
  i2340.m_Value = new pc.Vec2( i2341[0], i2341[1] )
  i2340.m_OverrideState = !!i2341[2]
  return i2340
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2343 = data
  i2342.hashCode = i2343[0]
  request.r(i2343[1], i2343[2], 0, i2342, 'material')
  i2342.materialHashCode = i2343[3]
  request.r(i2343[4], i2343[5], 0, i2342, 'atlas')
  i2342.normalStyle = i2343[6]
  i2342.normalSpacingOffset = i2343[7]
  i2342.boldStyle = i2343[8]
  i2342.boldSpacing = i2343[9]
  i2342.italicStyle = i2343[10]
  i2342.tabSize = i2343[11]
  i2342.m_Version = i2343[12]
  i2342.m_SourceFontFileGUID = i2343[13]
  request.r(i2343[14], i2343[15], 0, i2342, 'm_SourceFontFile_EditorRef')
  request.r(i2343[16], i2343[17], 0, i2342, 'm_SourceFontFile')
  i2342.m_AtlasPopulationMode = i2343[18]
  i2342.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2343[19], i2342.m_FaceInfo)
  var i2345 = i2343[20]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.add(request.d('UnityEngine.TextCore.Glyph', i2345[i + 0]));
  }
  i2342.m_GlyphTable = i2344
  var i2347 = i2343[21]
  var i2346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.add(request.d('TMPro.TMP_Character', i2347[i + 0]));
  }
  i2342.m_CharacterTable = i2346
  var i2349 = i2343[22]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 2) {
  request.r(i2349[i + 0], i2349[i + 1], 2, i2348, '')
  }
  i2342.m_AtlasTextures = i2348
  i2342.m_AtlasTextureIndex = i2343[23]
  i2342.m_IsMultiAtlasTexturesEnabled = !!i2343[24]
  i2342.m_ClearDynamicDataOnBuild = !!i2343[25]
  var i2351 = i2343[26]
  var i2350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.add(request.d('UnityEngine.TextCore.GlyphRect', i2351[i + 0]));
  }
  i2342.m_UsedGlyphRects = i2350
  var i2353 = i2343[27]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(request.d('UnityEngine.TextCore.GlyphRect', i2353[i + 0]));
  }
  i2342.m_FreeGlyphRects = i2352
  i2342.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2343[28], i2342.m_fontInfo)
  i2342.m_AtlasWidth = i2343[29]
  i2342.m_AtlasHeight = i2343[30]
  i2342.m_AtlasPadding = i2343[31]
  i2342.m_AtlasRenderMode = i2343[32]
  var i2355 = i2343[33]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.add(request.d('TMPro.TMP_Glyph', i2355[i + 0]));
  }
  i2342.m_glyphInfoList = i2354
  i2342.m_KerningTable = request.d('TMPro.KerningTable', i2343[34], i2342.m_KerningTable)
  i2342.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2343[35], i2342.m_FontFeatureTable)
  var i2357 = i2343[36]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 1, i2356, '')
  }
  i2342.fallbackFontAssets = i2356
  var i2359 = i2343[37]
  var i2358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2359.length; i += 2) {
  request.r(i2359[i + 0], i2359[i + 1], 1, i2358, '')
  }
  i2342.m_FallbackFontAssetTable = i2358
  i2342.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2343[38], i2342.m_CreationSettings)
  var i2361 = i2343[39]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('TMPro.TMP_FontWeightPair', i2361[i + 0]) );
  }
  i2342.m_FontWeightTable = i2360
  var i2363 = i2343[40]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('TMPro.TMP_FontWeightPair', i2363[i + 0]) );
  }
  i2342.fontWeights = i2362
  return i2342
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2365 = data
  i2364.m_FaceIndex = i2365[0]
  i2364.m_FamilyName = i2365[1]
  i2364.m_StyleName = i2365[2]
  i2364.m_PointSize = i2365[3]
  i2364.m_Scale = i2365[4]
  i2364.m_UnitsPerEM = i2365[5]
  i2364.m_LineHeight = i2365[6]
  i2364.m_AscentLine = i2365[7]
  i2364.m_CapLine = i2365[8]
  i2364.m_MeanLine = i2365[9]
  i2364.m_Baseline = i2365[10]
  i2364.m_DescentLine = i2365[11]
  i2364.m_SuperscriptOffset = i2365[12]
  i2364.m_SuperscriptSize = i2365[13]
  i2364.m_SubscriptOffset = i2365[14]
  i2364.m_SubscriptSize = i2365[15]
  i2364.m_UnderlineOffset = i2365[16]
  i2364.m_UnderlineThickness = i2365[17]
  i2364.m_StrikethroughOffset = i2365[18]
  i2364.m_StrikethroughThickness = i2365[19]
  i2364.m_TabWidth = i2365[20]
  return i2364
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2369 = data
  i2368.m_Index = i2369[0]
  i2368.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2369[1], i2368.m_Metrics)
  i2368.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2369[2], i2368.m_GlyphRect)
  i2368.m_Scale = i2369[3]
  i2368.m_AtlasIndex = i2369[4]
  i2368.m_ClassDefinitionType = i2369[5]
  return i2368
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2371 = data
  i2370.m_Width = i2371[0]
  i2370.m_Height = i2371[1]
  i2370.m_HorizontalBearingX = i2371[2]
  i2370.m_HorizontalBearingY = i2371[3]
  i2370.m_HorizontalAdvance = i2371[4]
  return i2370
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2373 = data
  i2372.m_X = i2373[0]
  i2372.m_Y = i2373[1]
  i2372.m_Width = i2373[2]
  i2372.m_Height = i2373[3]
  return i2372
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2376 = root || request.c( 'TMPro.TMP_Character' )
  var i2377 = data
  i2376.m_ElementType = i2377[0]
  i2376.m_Unicode = i2377[1]
  i2376.m_GlyphIndex = i2377[2]
  i2376.m_Scale = i2377[3]
  return i2376
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2382 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2383 = data
  i2382.Name = i2383[0]
  i2382.PointSize = i2383[1]
  i2382.Scale = i2383[2]
  i2382.CharacterCount = i2383[3]
  i2382.LineHeight = i2383[4]
  i2382.Baseline = i2383[5]
  i2382.Ascender = i2383[6]
  i2382.CapHeight = i2383[7]
  i2382.Descender = i2383[8]
  i2382.CenterLine = i2383[9]
  i2382.SuperscriptOffset = i2383[10]
  i2382.SubscriptOffset = i2383[11]
  i2382.SubSize = i2383[12]
  i2382.Underline = i2383[13]
  i2382.UnderlineThickness = i2383[14]
  i2382.strikethrough = i2383[15]
  i2382.strikethroughThickness = i2383[16]
  i2382.TabWidth = i2383[17]
  i2382.Padding = i2383[18]
  i2382.AtlasWidth = i2383[19]
  i2382.AtlasHeight = i2383[20]
  return i2382
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2386 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2387 = data
  i2386.id = i2387[0]
  i2386.x = i2387[1]
  i2386.y = i2387[2]
  i2386.width = i2387[3]
  i2386.height = i2387[4]
  i2386.xOffset = i2387[5]
  i2386.yOffset = i2387[6]
  i2386.xAdvance = i2387[7]
  i2386.scale = i2387[8]
  return i2386
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2388 = root || request.c( 'TMPro.KerningTable' )
  var i2389 = data
  var i2391 = i2389[0]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('TMPro.KerningPair', i2391[i + 0]));
  }
  i2388.kerningPairs = i2390
  return i2388
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2394 = root || request.c( 'TMPro.KerningPair' )
  var i2395 = data
  i2394.xOffset = i2395[0]
  i2394.m_FirstGlyph = i2395[1]
  i2394.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2395[2], i2394.m_FirstGlyphAdjustments)
  i2394.m_SecondGlyph = i2395[3]
  i2394.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2395[4], i2394.m_SecondGlyphAdjustments)
  i2394.m_IgnoreSpacingAdjustments = !!i2395[5]
  return i2394
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2396 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2397 = data
  var i2399 = i2397[0]
  var i2398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2399[i + 0]));
  }
  i2396.m_GlyphPairAdjustmentRecords = i2398
  return i2396
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2402 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2403 = data
  i2402.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2403[0], i2402.m_FirstAdjustmentRecord)
  i2402.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2403[1], i2402.m_SecondAdjustmentRecord)
  i2402.m_FeatureLookupFlags = i2403[2]
  return i2402
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2407 = data
  i2406.sourceFontFileName = i2407[0]
  i2406.sourceFontFileGUID = i2407[1]
  i2406.pointSizeSamplingMode = i2407[2]
  i2406.pointSize = i2407[3]
  i2406.padding = i2407[4]
  i2406.packingMode = i2407[5]
  i2406.atlasWidth = i2407[6]
  i2406.atlasHeight = i2407[7]
  i2406.characterSetSelectionMode = i2407[8]
  i2406.characterSequence = i2407[9]
  i2406.referencedFontAssetGUID = i2407[10]
  i2406.referencedTextAssetGUID = i2407[11]
  i2406.fontStyle = i2407[12]
  i2406.fontStyleModifier = i2407[13]
  i2406.renderMode = i2407[14]
  i2406.includeFontFeatures = !!i2407[15]
  return i2406
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2410 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'regularTypeface')
  request.r(i2411[2], i2411[3], 0, i2410, 'italicTypeface')
  return i2410
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2412 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2413 = data
  i2412.useSafeMode = !!i2413[0]
  i2412.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2413[1], i2412.safeModeOptions)
  i2412.timeScale = i2413[2]
  i2412.unscaledTimeScale = i2413[3]
  i2412.useSmoothDeltaTime = !!i2413[4]
  i2412.maxSmoothUnscaledTime = i2413[5]
  i2412.rewindCallbackMode = i2413[6]
  i2412.showUnityEditorReport = !!i2413[7]
  i2412.logBehaviour = i2413[8]
  i2412.drawGizmos = !!i2413[9]
  i2412.defaultRecyclable = !!i2413[10]
  i2412.defaultAutoPlay = i2413[11]
  i2412.defaultUpdateType = i2413[12]
  i2412.defaultTimeScaleIndependent = !!i2413[13]
  i2412.defaultEaseType = i2413[14]
  i2412.defaultEaseOvershootOrAmplitude = i2413[15]
  i2412.defaultEasePeriod = i2413[16]
  i2412.defaultAutoKill = !!i2413[17]
  i2412.defaultLoopType = i2413[18]
  i2412.debugMode = !!i2413[19]
  i2412.debugStoreTargetId = !!i2413[20]
  i2412.showPreviewPanel = !!i2413[21]
  i2412.storeSettingsLocation = i2413[22]
  i2412.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2413[23], i2412.modules)
  i2412.createASMDEF = !!i2413[24]
  i2412.showPlayingTweens = !!i2413[25]
  i2412.showPausedTweens = !!i2413[26]
  return i2412
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2414 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2415 = data
  i2414.logBehaviour = i2415[0]
  i2414.nestedTweenFailureBehaviour = i2415[1]
  return i2414
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2416 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2417 = data
  i2416.showPanel = !!i2417[0]
  i2416.audioEnabled = !!i2417[1]
  i2416.physicsEnabled = !!i2417[2]
  i2416.physics2DEnabled = !!i2417[3]
  i2416.spriteEnabled = !!i2417[4]
  i2416.uiEnabled = !!i2417[5]
  i2416.textMeshProEnabled = !!i2417[6]
  i2416.tk2DEnabled = !!i2417[7]
  i2416.deAudioEnabled = !!i2417[8]
  i2416.deUnityExtendedEnabled = !!i2417[9]
  i2416.epoOutlineEnabled = !!i2417[10]
  return i2416
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2418 = root || request.c( 'TMPro.TMP_Settings' )
  var i2419 = data
  i2418.m_enableWordWrapping = !!i2419[0]
  i2418.m_enableKerning = !!i2419[1]
  i2418.m_enableExtraPadding = !!i2419[2]
  i2418.m_enableTintAllSprites = !!i2419[3]
  i2418.m_enableParseEscapeCharacters = !!i2419[4]
  i2418.m_EnableRaycastTarget = !!i2419[5]
  i2418.m_GetFontFeaturesAtRuntime = !!i2419[6]
  i2418.m_missingGlyphCharacter = i2419[7]
  i2418.m_warningsDisabled = !!i2419[8]
  request.r(i2419[9], i2419[10], 0, i2418, 'm_defaultFontAsset')
  i2418.m_defaultFontAssetPath = i2419[11]
  i2418.m_defaultFontSize = i2419[12]
  i2418.m_defaultAutoSizeMinRatio = i2419[13]
  i2418.m_defaultAutoSizeMaxRatio = i2419[14]
  i2418.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2419[15], i2419[16] )
  i2418.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2419[17], i2419[18] )
  i2418.m_autoSizeTextContainer = !!i2419[19]
  i2418.m_IsTextObjectScaleStatic = !!i2419[20]
  var i2421 = i2419[21]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 1, i2420, '')
  }
  i2418.m_fallbackFontAssets = i2420
  i2418.m_matchMaterialPreset = !!i2419[22]
  request.r(i2419[23], i2419[24], 0, i2418, 'm_defaultSpriteAsset')
  i2418.m_defaultSpriteAssetPath = i2419[25]
  i2418.m_enableEmojiSupport = !!i2419[26]
  i2418.m_MissingCharacterSpriteUnicode = i2419[27]
  i2418.m_defaultColorGradientPresetsPath = i2419[28]
  request.r(i2419[29], i2419[30], 0, i2418, 'm_defaultStyleSheet')
  i2418.m_StyleSheetsResourcePath = i2419[31]
  request.r(i2419[32], i2419[33], 0, i2418, 'm_leadingCharacters')
  request.r(i2419[34], i2419[35], 0, i2418, 'm_followingCharacters')
  i2418.m_UseModernHangulLineBreakingRules = !!i2419[36]
  return i2418
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2422 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2423 = data
  i2422.m_GlyphIndex = i2423[0]
  i2422.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2423[1], i2422.m_GlyphValueRecord)
  return i2422
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2424 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2425 = data
  i2424.m_XPlacement = i2425[0]
  i2424.m_YPlacement = i2425[1]
  i2424.m_XAdvance = i2425[2]
  i2424.m_YAdvance = i2425[3]
  return i2424
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2426 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2427 = data
  i2426.hashCode = i2427[0]
  request.r(i2427[1], i2427[2], 0, i2426, 'material')
  i2426.materialHashCode = i2427[3]
  request.r(i2427[4], i2427[5], 0, i2426, 'spriteSheet')
  var i2429 = i2427[6]
  var i2428 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.add(request.d('TMPro.TMP_Sprite', i2429[i + 0]));
  }
  i2426.spriteInfoList = i2428
  var i2431 = i2427[7]
  var i2430 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2431.length; i += 2) {
  request.r(i2431[i + 0], i2431[i + 1], 1, i2430, '')
  }
  i2426.fallbackSpriteAssets = i2430
  i2426.m_Version = i2427[8]
  i2426.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2427[9], i2426.m_FaceInfo)
  var i2433 = i2427[10]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('TMPro.TMP_SpriteCharacter', i2433[i + 0]));
  }
  i2426.m_SpriteCharacterTable = i2432
  var i2435 = i2427[11]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.add(request.d('TMPro.TMP_SpriteGlyph', i2435[i + 0]));
  }
  i2426.m_SpriteGlyphTable = i2434
  return i2426
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2438 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2439 = data
  i2438.name = i2439[0]
  i2438.hashCode = i2439[1]
  i2438.unicode = i2439[2]
  i2438.pivot = new pc.Vec2( i2439[3], i2439[4] )
  request.r(i2439[5], i2439[6], 0, i2438, 'sprite')
  i2438.id = i2439[7]
  i2438.x = i2439[8]
  i2438.y = i2439[9]
  i2438.width = i2439[10]
  i2438.height = i2439[11]
  i2438.xOffset = i2439[12]
  i2438.yOffset = i2439[13]
  i2438.xAdvance = i2439[14]
  i2438.scale = i2439[15]
  return i2438
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2444 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2445 = data
  i2444.m_Name = i2445[0]
  i2444.m_HashCode = i2445[1]
  i2444.m_ElementType = i2445[2]
  i2444.m_Unicode = i2445[3]
  i2444.m_GlyphIndex = i2445[4]
  i2444.m_Scale = i2445[5]
  return i2444
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2448 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'sprite')
  i2448.m_Index = i2449[2]
  i2448.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2449[3], i2448.m_Metrics)
  i2448.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2449[4], i2448.m_GlyphRect)
  i2448.m_Scale = i2449[5]
  i2448.m_AtlasIndex = i2449[6]
  i2448.m_ClassDefinitionType = i2449[7]
  return i2448
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2450 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2451 = data
  var i2453 = i2451[0]
  var i2452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.add(request.d('TMPro.TMP_Style', i2453[i + 0]));
  }
  i2450.m_StyleList = i2452
  return i2450
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2456 = root || request.c( 'TMPro.TMP_Style' )
  var i2457 = data
  i2456.m_Name = i2457[0]
  i2456.m_HashCode = i2457[1]
  i2456.m_OpeningDefinition = i2457[2]
  i2456.m_ClosingDefinition = i2457[3]
  i2456.m_OpeningTagArray = i2457[4]
  i2456.m_ClosingTagArray = i2457[5]
  i2456.m_OpeningTagUnicodeArray = i2457[6]
  i2456.m_ClosingTagUnicodeArray = i2457[7]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2459 = data
  var i2461 = i2459[0]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2461[i + 0]) );
  }
  i2458.files = i2460
  i2458.componentToPrefabIds = i2459[1]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2465 = data
  i2464.path = i2465[0]
  request.r(i2465[1], i2465[2], 0, i2464, 'unityObject')
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2467 = data
  var i2469 = i2467[0]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2469[i + 0]) );
  }
  i2466.scriptsExecutionOrder = i2468
  var i2471 = i2467[1]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2471[i + 0]) );
  }
  i2466.sortingLayers = i2470
  var i2473 = i2467[2]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2473[i + 0]) );
  }
  i2466.cullingLayers = i2472
  i2466.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2467[3], i2466.timeSettings)
  i2466.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2467[4], i2466.physicsSettings)
  i2466.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2467[5], i2466.physics2DSettings)
  i2466.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2467[6], i2466.qualitySettings)
  i2466.enableRealtimeShadows = !!i2467[7]
  i2466.enableAutoInstancing = !!i2467[8]
  i2466.enableDynamicBatching = !!i2467[9]
  i2466.lightmapEncodingQuality = i2467[10]
  i2466.desiredColorSpace = i2467[11]
  var i2475 = i2467[12]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( i2475[i + 0] );
  }
  i2466.allTags = i2474
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2479 = data
  i2478.name = i2479[0]
  i2478.value = i2479[1]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2483 = data
  i2482.id = i2483[0]
  i2482.name = i2483[1]
  i2482.value = i2483[2]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2487 = data
  i2486.id = i2487[0]
  i2486.name = i2487[1]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2489 = data
  i2488.fixedDeltaTime = i2489[0]
  i2488.maximumDeltaTime = i2489[1]
  i2488.timeScale = i2489[2]
  i2488.maximumParticleTimestep = i2489[3]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2491 = data
  i2490.gravity = new pc.Vec3( i2491[0], i2491[1], i2491[2] )
  i2490.defaultSolverIterations = i2491[3]
  i2490.bounceThreshold = i2491[4]
  i2490.autoSyncTransforms = !!i2491[5]
  i2490.autoSimulation = !!i2491[6]
  var i2493 = i2491[7]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2493[i + 0]) );
  }
  i2490.collisionMatrix = i2492
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2497 = data
  i2496.enabled = !!i2497[0]
  i2496.layerId = i2497[1]
  i2496.otherLayerId = i2497[2]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'material')
  i2498.gravity = new pc.Vec2( i2499[2], i2499[3] )
  i2498.positionIterations = i2499[4]
  i2498.velocityIterations = i2499[5]
  i2498.velocityThreshold = i2499[6]
  i2498.maxLinearCorrection = i2499[7]
  i2498.maxAngularCorrection = i2499[8]
  i2498.maxTranslationSpeed = i2499[9]
  i2498.maxRotationSpeed = i2499[10]
  i2498.baumgarteScale = i2499[11]
  i2498.baumgarteTOIScale = i2499[12]
  i2498.timeToSleep = i2499[13]
  i2498.linearSleepTolerance = i2499[14]
  i2498.angularSleepTolerance = i2499[15]
  i2498.defaultContactOffset = i2499[16]
  i2498.autoSimulation = !!i2499[17]
  i2498.queriesHitTriggers = !!i2499[18]
  i2498.queriesStartInColliders = !!i2499[19]
  i2498.callbacksOnDisable = !!i2499[20]
  i2498.reuseCollisionCallbacks = !!i2499[21]
  i2498.autoSyncTransforms = !!i2499[22]
  var i2501 = i2499[23]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2501[i + 0]) );
  }
  i2498.collisionMatrix = i2500
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2505 = data
  i2504.enabled = !!i2505[0]
  i2504.layerId = i2505[1]
  i2504.otherLayerId = i2505[2]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2509[i + 0]) );
  }
  i2506.qualityLevels = i2508
  var i2511 = i2507[1]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( i2511[i + 0] );
  }
  i2506.names = i2510
  i2506.shadows = i2507[2]
  i2506.anisotropicFiltering = i2507[3]
  i2506.antiAliasing = i2507[4]
  i2506.lodBias = i2507[5]
  i2506.shadowCascades = i2507[6]
  i2506.shadowDistance = i2507[7]
  i2506.shadowmaskMode = i2507[8]
  i2506.shadowProjection = i2507[9]
  i2506.shadowResolution = i2507[10]
  i2506.softParticles = !!i2507[11]
  i2506.softVegetation = !!i2507[12]
  i2506.activeColorSpace = i2507[13]
  i2506.desiredColorSpace = i2507[14]
  i2506.masterTextureLimit = i2507[15]
  i2506.maxQueuedFrames = i2507[16]
  i2506.particleRaycastBudget = i2507[17]
  i2506.pixelLightCount = i2507[18]
  i2506.realtimeReflectionProbes = !!i2507[19]
  i2506.shadowCascade2Split = i2507[20]
  i2506.shadowCascade4Split = new pc.Vec3( i2507[21], i2507[22], i2507[23] )
  i2506.streamingMipmapsActive = !!i2507[24]
  i2506.vSyncCount = i2507[25]
  i2506.asyncUploadBufferSize = i2507[26]
  i2506.asyncUploadTimeSlice = i2507[27]
  i2506.billboardsFaceCameraPosition = !!i2507[28]
  i2506.shadowNearPlaneOffset = i2507[29]
  i2506.streamingMipmapsMemoryBudget = i2507[30]
  i2506.maximumLODLevel = i2507[31]
  i2506.streamingMipmapsAddAllCameras = !!i2507[32]
  i2506.streamingMipmapsMaxLevelReduction = i2507[33]
  i2506.streamingMipmapsRenderersPerFrame = i2507[34]
  i2506.resolutionScalingFixedDPIFactor = i2507[35]
  i2506.streamingMipmapsMaxFileIORequests = i2507[36]
  i2506.currentQualityLevel = i2507[37]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2517 = data
  i2516.weight = i2517[0]
  i2516.vertices = i2517[1]
  i2516.normals = i2517[2]
  i2516.tangents = i2517[3]
  return i2516
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2518 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2519 = data
  i2518.xPlacement = i2519[0]
  i2518.yPlacement = i2519[1]
  i2518.xAdvance = i2519[2]
  i2518.yAdvance = i2519[3]
  return i2518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[95],"96":[10],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[106],"107":[106],"108":[106],"109":[106],"110":[106],"111":[106],"112":[106],"113":[106],"114":[106],"115":[106],"116":[106],"117":[106],"118":[106],"119":[10],"120":[3],"121":[122],"123":[122],"24":[23],"124":[106],"13":[10],"125":[27,126,23],"57":[23],"127":[10],"12":[10],"15":[14],"128":[129],"130":[23],"131":[23],"26":[24],"28":[27,23],"132":[23],"25":[24],"40":[23],"133":[23],"64":[23],"134":[23],"44":[23],"135":[23],"39":[23],"46":[23],"136":[23],"137":[27,23],"138":[23],"45":[23],"43":[23],"139":[23],"31":[27,23],"50":[23],"140":[19],"141":[19],"20":[19],"142":[19],"143":[10],"144":[10],"145":[129],"146":[23],"147":[3,23],"34":[23,27],"148":[23],"149":[27,23],"150":[3],"151":[27,23],"152":[23],"153":[129]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.MonoBehaviour","ObjectCtrl","UnityEngine.BoxCollider","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","CameraAspect","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DongHeon.GameManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","MouseCtrl","UnityEngine.UI.Text","UnityEngine.Font","GameOverPanel","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayerController","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "08/06/2025 15:05:59";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "8fa4028c-be67-4e79-9355-6ab2d89b751f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

