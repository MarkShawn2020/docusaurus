# depreciated surfaceflinger patch research

1. [depreciated analysis of `Layer.cpp`](#depreciated-analysis-of-layercpp)
2. [depreciated: apply patch on distortion](#depreciated-apply-patch-on-distortion)
   1. [patch vr on AOSP 7](#patch-vr-on-aosp-7)

## depreciated analysis of `Layer.cpp`

这部分，代码看起来不难，理解起来却还是要花一些时间，比如`win`是什么，为什么是`position[2]`和`position[3]`。

![picture 15](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/research-diff-1643041530289-a514699d9a94a6c6a126f8194387e1accf41a426ac76b2c037abf054ca03dbef.png)

在我查询了官网 [services/surfaceflinger/Layer.cpp - platform/frameworks/native - Git at Google](https://android.googlesource.com/platform/frameworks/native/+/05cec9d/services/surfaceflinger/Layer.cpp) 后，我发现，这部分代码，似乎改的还是很多的，盲猜一定是在`merge rk3399`中改过了这部分代码。

~~TODO: 查询`merge rk3399`中`Layer.cpp/h`的改动。~~

果然，在**合并了两个 patches**之后，可以很清晰地看到，p2 确实引用了一些 p1 的变量等。

![picture 24](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/research-diff-1643050027633-27e102339f4dc6c42f360184c2ad12d59afac26211cc8a00e907a47167c95182.png)

:sparkles: 这个发现，充分说明，接下来的工作，势必要综合两个 patches，以 p2 为主体，将 p2 所依赖的 p1 都梳理出来，然后合到 aosp 7 上去。

## depreciated: apply patch on distortion

### patch vr on AOSP 7

![picture 3](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-aosp-1642760531653-cf01b4a83acb43ea8337fe1599283a146e166f2e2e4424e84b4eca48d10669fc.png)

```sh
cd frameworks/native

git apply --check 99b06f06.diff

git am --signoff < 99b06f06.diff

git apply --check 8c833649.diff

git am --signoff < 8c833649.diff
```
