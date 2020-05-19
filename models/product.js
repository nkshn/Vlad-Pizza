class Product {
  constructor(
    // Basic info
    ID,
    ID_subCategory,
    name,
    // For layout
    isSmallSize,
    isMediumSize,
    isLargeSize,
    // Names
    smallSizeName,
    mediumSizeName,
    largeSizeName,
    // Prices
    smallSizePrice,
    mediumSizePrice,
    largeSizePrice
  ) {
    // Basic info
    this.ID = ID;
    this.ID_subCategory = ID_subCategory;
    this.name = name;
    // For layout
    this.isSmallSize = isSmallSize;
    this.isMediumSize = isMediumSize;
    this.isLargeSize = isLargeSize;
    // Names
    this.smallSizeName = smallSizeName;
    this.mediumSizeName = mediumSizeName;
    this.largeSizeName = largeSizeName;
    // Prices
    this.smallSizePrice = smallSizePrice;
    this.mediumSizePrice = mediumSizePrice;
    this.largeSizePrice = largeSizePrice;
  }
}

export default Product;
