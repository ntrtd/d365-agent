/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ProductMastersApi } from './ProductMastersApi';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
import {
  ReleasedProductMasters,
  ReleasedProductMastersType
} from './ReleasedProductMasters';
import {
  ReleasedProductVariants,
  ReleasedProductVariantsType
} from './ReleasedProductVariants';
import {
  ProductMasterSizes,
  ProductMasterSizesType
} from './ProductMasterSizes';
import {
  ReleasedProductMastersV2,
  ReleasedProductMastersV2Type
} from './ReleasedProductMastersV2';
import {
  ProductMasterConfigurations,
  ProductMasterConfigurationsType
} from './ProductMasterConfigurations';
import {
  ProductMasterColors,
  ProductMasterColorsType
} from './ProductMasterColors';
import {
  ProductMasterStyles,
  ProductMasterStylesType
} from './ProductMasterStyles';
import {
  ProductMasterVersions,
  ProductMasterVersionsType
} from './ProductMasterVersions';
import { ProductVariantsV2, ProductVariantsV2Type } from './ProductVariantsV2';
import { ProductVariants, ProductVariantsType } from './ProductVariants';
import {
  ProductNumberIdentifiedReleasedProductVariants,
  ProductNumberIdentifiedReleasedProductVariantsType
} from './ProductNumberIdentifiedReleasedProductVariants';
import {
  ProductTranslations,
  ProductTranslationsType
} from './ProductTranslations';
import {
  ProductNumberIdentifiedProductVariants,
  ProductNumberIdentifiedProductVariantsType
} from './ProductNumberIdentifiedProductVariants';
import {
  ReleasedProductVariantsV2,
  ReleasedProductVariantsV2Type
} from './ReleasedProductVariantsV2';

/**
 * This class represents the entity "ProductMasters" of service "d365_metadata".
 */
export class ProductMasters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductMastersType<T>
{
  /**
   * Technical entity name for ProductMasters.
   */
  static override _entityName = 'ProductMasters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasters entity.
   */
  static _keys = ['ProductNumber'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Nmfc Code.
   * @nullable
   */
  declare nmfcCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Product Style Group Id.
   * @nullable
   */
  declare productStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stcc Code.
   * @nullable
   */
  declare stccCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Product Variant Unit Conversion Enabled.
   * @nullable
   */
  declare isProductVariantUnitConversionEnabled?: NoYes | null;
  /**
   * Are Identical Configurations Allowed.
   * @nullable
   */
  declare areIdenticalConfigurationsAllowed?: NoYes | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Automatic Variant Generation Enabled.
   * @nullable
   */
  declare isAutomaticVariantGenerationEnabled?: NoYes | null;
  /**
   * Product Size Group Id.
   * @nullable
   */
  declare productSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Configuration Technology.
   * @nullable
   */
  declare variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  /**
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Product Kit.
   * @nullable
   */
  declare isProductKit?: NoYes | null;
  /**
   * Is Catch Weight Product.
   * @nullable
   */
  declare isCatchWeightProduct?: NoYes | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Group Id.
   * @nullable
   */
  declare productColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Product Category Name.
   * @nullable
   */
  declare retailProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Harmonized System Code.
   * @nullable
   */
  declare harmonizedSystemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductMasters} entity.
   */
  declare releasedProductMaster: ReleasedProductMasters<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariants} entity.
   */
  declare releasedProductVariant: ReleasedProductVariants<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterSizes} entity.
   */
  declare productMasterSizes: ProductMasterSizes<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductMastersV2} entity.
   */
  declare releasedProductMasterV2: ReleasedProductMastersV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterConfigurations} entity.
   */
  declare productMasterConfigurations: ProductMasterConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterColors} entity.
   */
  declare productMasterColors: ProductMasterColors<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterStyles} entity.
   */
  declare productMasterStyles: ProductMasterStyles<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterVersions} entity.
   */
  declare productMasterVersions: ProductMasterVersions<T>[];
  /**
   * One-to-many navigation property to the {@link ProductVariantsV2} entity.
   */
  declare productVariantV2: ProductVariantsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductVariants} entity.
   */
  declare productVariant: ProductVariants<T>[];
  /**
   * One-to-many navigation property to the {@link ProductNumberIdentifiedReleasedProductVariants} entity.
   */
  declare releasedProductVariants: ProductNumberIdentifiedReleasedProductVariants<T>[];
  /**
   * One-to-many navigation property to the {@link ProductTranslations} entity.
   */
  declare productTranslation: ProductTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link ProductNumberIdentifiedProductVariants} entity.
   */
  declare productVariantsV2: ProductNumberIdentifiedProductVariants<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantsV2} entity.
   */
  declare releasedProductVariantV2: ReleasedProductVariantsV2<T>[];

  constructor(_entityApi: ProductMastersApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMastersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  nmfcCode?: DeserializedType<T, 'Edm.String'> | null;
  productType?: EcoResProductType | null;
  productStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  stccCode?: DeserializedType<T, 'Edm.String'> | null;
  isProductVariantUnitConversionEnabled?: NoYes | null;
  areIdenticalConfigurationsAllowed?: NoYes | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  isAutomaticVariantGenerationEnabled?: NoYes | null;
  productSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  isProductKit?: NoYes | null;
  isCatchWeightProduct?: NoYes | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  retailProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  harmonizedSystemCode?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductMaster: ReleasedProductMastersType<T>[];
  releasedProductVariant: ReleasedProductVariantsType<T>[];
  productMasterSizes: ProductMasterSizesType<T>[];
  releasedProductMasterV2: ReleasedProductMastersV2Type<T>[];
  productMasterConfigurations: ProductMasterConfigurationsType<T>[];
  productMasterColors: ProductMasterColorsType<T>[];
  productMasterStyles: ProductMasterStylesType<T>[];
  productMasterVersions: ProductMasterVersionsType<T>[];
  productVariantV2: ProductVariantsV2Type<T>[];
  productVariant: ProductVariantsType<T>[];
  releasedProductVariants: ProductNumberIdentifiedReleasedProductVariantsType<T>[];
  productTranslation: ProductTranslationsType<T>[];
  productVariantsV2: ProductNumberIdentifiedProductVariantsType<T>[];
  releasedProductVariantV2: ReleasedProductVariantsV2Type<T>[];
}
