type GalleryImageMap = Record<string, string>;

type GalleryModuleValue = { default?: { src?: string } } | { src?: string };

const hasDefaultSrc = (
  value: GalleryModuleValue,
): value is { default?: { src?: string } } => {
  return "default" in value;
};

type GalleryRequireContext = {
  keys(): string[];
  (id: string): GalleryModuleValue;
};

type GalleryRequireWithContext = {
  context(
    path: string,
    hasSubdirs: boolean,
    filter: RegExp,
  ): GalleryRequireContext;
};

const galleryContext: GalleryRequireContext = (
  require as unknown as GalleryRequireWithContext
).context("./", false, /\.(jpg|png|webp|svg)$/i);

export const galleryImages = galleryContext
  .keys()
  .reduce((acc: GalleryImageMap, filePath: string) => {
    const moduleValue = galleryContext(filePath);
    const imagePath = hasDefaultSrc(moduleValue)
      ? (moduleValue.default?.src ?? "")
      : (moduleValue.src ?? "");
    const fileName = filePath.replace("./", "").replace(/\.[^/.]+$/, "");
    const key = /^\d+$/.test(fileName) ? `image${fileName}` : fileName;

    acc[key] = imagePath;
    return acc;
  }, {} as GalleryImageMap);
