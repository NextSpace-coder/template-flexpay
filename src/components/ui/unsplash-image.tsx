import React, { useRef, useState, useEffect, useMemo } from "react";

export interface UnsplashPhoto {
  alt_description?: string | null;
  user?: {
    name: string;
    username: string;
  };
}

interface UnsplashImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  photo?: UnsplashPhoto;
  appName: string;
  loading?: "lazy" | "eager";
}

// 定义显示模式的类型
type OverlayMode = "full" | "compact" | "hidden";

export default function UnsplashImage(props: UnsplashImageProps) {
  const { photo = {}, appName = 'webbuilder', loading = "lazy", ...imgProps } = props;
  const photographerName = photo.user?.name ?? '';

  const photographerLink = useMemo(() => {
    if (!photo.user) return '';
    return `https://unsplash.com/@${photo.user.username}?utm_source=${appName}&utm_medium=referral`;
  }, [photo.user, appName]);

  const unsplashLink = useMemo(() => {
    return `https://unsplash.com/?utm_source=${appName}&utm_medium=referral`;
  }, [appName]);

  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [overlayMode, setOverlayMode] = useState<OverlayMode>("full");

  // 检查图片尺寸并设置合适的显示模式
  const checkImageSize = () => {
    const img = imgRef.current;
    if (!img) return;

    const width = img.clientWidth;
    const height = img.clientHeight;

    // 根据图片尺寸决定显示模式
    if (width < 120 || height < 120) {
      setOverlayMode("hidden"); // 非常小的图片不显示任何信息
    } else if (width < 250 || height < 200) {
      setOverlayMode("compact"); // 较小的图片显示简化版信息
    } else {
      setOverlayMode("full"); // 足够大的图片显示完整信息
    }
  };

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // 图片加载完成时检查尺寸
    const handleLoad = () => {
      checkImageSize();
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
      return () => img.removeEventListener('load', handleLoad);
    }
  }, [imgProps.src]);

  // 使用 ResizeObserver 监听图片尺寸变化
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // 创建 ResizeObserver 实例
    const resizeObserver = new ResizeObserver(() => {
      checkImageSize();
    });

    // 开始观察图片元素
    resizeObserver.observe(img);

    // 清理函数
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // 判断是否应该显示摄影师信息
  const shouldShowPhotographerInfo = useMemo(() => {
    return !!photo.user && !!photographerName;
  }, [photo.user, photographerName]);

  return (
    <figure className="flex flex-col p-1 mx-auto">
      <div ref={containerRef} className="relative overflow-hidden">
        <img
          ref={imgRef}
          alt={photo.alt_description ?? "Unsplash image"}
          loading={loading}
          {...imgProps}
        />

        {/* 完整信息显示模式 */}
        {overlayMode === "full" && shouldShowPhotographerInfo && (
          <div className="absolute bottom-2 right-2 bg-zinc-900/70 text-white text-[0.7rem] italic font-sans px-2 py-1 rounded shadow max-w-[90%] backdrop-blur-sm">
            <span className="mr-1">Photo by</span>
            <a
              href={photographerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 font-medium"
            >
              {photographerName}
            </a>
            <span className="mx-1">on</span>
            <a
              href={unsplashLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 font-medium"
            >
              Unsplash
            </a>
          </div>
        )}

        {/* 简化信息显示模式 */}
        {overlayMode === "compact" && shouldShowPhotographerInfo && (
          <a
            href={unsplashLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 bg-zinc-900/70 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-900/90"
            title={`Photo by ${photographerName} on Unsplash`}
          >
            U
          </a>
        )}
      </div>
    </figure>
  );
}
