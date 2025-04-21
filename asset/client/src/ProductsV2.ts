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
import type { ProductsV2Api } from './ProductsV2Api';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { NoYes } from './NoYes';
import { EcoResProductType } from './EcoResProductType';
import {
  ProductAttributeValuesV3,
  ProductAttributeValuesV3Type
} from './ProductAttributeValuesV3';
import {
  PhysicalProductDimensionDetails,
  PhysicalProductDimensionDetailsType
} from './PhysicalProductDimensionDetails';
import {
  EngineeringChangeRequestDependencies,
  EngineeringChangeRequestDependenciesType
} from './EngineeringChangeRequestDependencies';
import {
  EngineeringChangeOrderDependencies,
  EngineeringChangeOrderDependenciesType
} from './EngineeringChangeOrderDependencies';
import {
  EngineeringProductVersions,
  EngineeringProductVersionsType
} from './EngineeringProductVersions';
import {
  TrackingDimensionGroups,
  TrackingDimensionGroupsType
} from './TrackingDimensionGroups';
import {
  ProductStyleGroups,
  ProductStyleGroupsType
} from './ProductStyleGroups';
import {
  ProductColorGroups,
  ProductColorGroupsType
} from './ProductColorGroups';
import { ProductSizeGroups, ProductSizeGroupsType } from './ProductSizeGroups';
import {
  ProductReleasePolicies,
  ProductReleasePoliciesType
} from './ProductReleasePolicies';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import {
  ProductReadinessPolicies,
  ProductReadinessPoliciesType
} from './ProductReadinessPolicies';
import {
  ProductAttributeValuesV2,
  ProductAttributeValuesV2Type
} from './ProductAttributeValuesV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  DvReleasedProducts,
  DvReleasedProductsType
} from './DvReleasedProducts';
import {
  EngineeringChangeOrderProductWhereUsedAnalyses,
  EngineeringChangeOrderProductWhereUsedAnalysesType
} from './EngineeringChangeOrderProductWhereUsedAnalyses';
import {
  ProductCategoryAssignments,
  ProductCategoryAssignmentsType
} from './ProductCategoryAssignments';
import {
  EngineeringChangeOrderProductReleases,
  EngineeringChangeOrderProductReleasesType
} from './EngineeringChangeOrderProductReleases';
import {
  ProductDocumentAttachments,
  ProductDocumentAttachmentsType
} from './ProductDocumentAttachments';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "ProductsV2" of service "d365_metadata".
 */
export class ProductsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductsV2Type<T>
{
  /**
   * Technical entity name for ProductsV2.
   */
  static override _entityName = 'ProductsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductsV2 entity.
   */
  static _keys = ['ProductNumber'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Group Id.
   * @nullable
   */
  declare productStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Variant Name Nomenclature Name.
   * @nullable
   */
  declare productVariantNameNomenclatureName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Configuration Technology.
   * @nullable
   */
  declare variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  /**
   * Warranty Duration Time Unit.
   * @nullable
   */
  declare warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  /**
   * Product Variant Number Nomenclature Name.
   * @nullable
   */
  declare productVariantNumberNomenclatureName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Sub Type.
   * @nullable
   */
  declare productSubType?: EcoResProductSubtype | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Type.
   * @nullable
   */
  declare serviceType?: EcoResProductServiceType | null;
  /**
   * Retail Product Category Name.
   * @nullable
   */
  declare retailProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Group Id.
   * @nullable
   */
  declare productColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Identical Configurations Allowed.
   * @nullable
   */
  declare areIdenticalConfigurationsAllowed?: NoYes | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Is Product Kit.
   * @nullable
   */
  declare isProductKit?: NoYes | null;
  /**
   * Warranty Duration Time.
   */
  declare warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Catch Weight Product.
   * @nullable
   */
  declare isCatchWeightProduct?: NoYes | null;
  /**
   * Stcc Code.
   * @nullable
   */
  declare stccCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Automatic Variant Generation Enabled.
   * @nullable
   */
  declare isAutomaticVariantGenerationEnabled?: NoYes | null;
  /**
   * Is Product Variant Unit Conversion Enabled.
   * @nullable
   */
  declare isProductVariantUnitConversionEnabled?: NoYes | null;
  /**
   * Nmfc Code.
   * @nullable
   */
  declare nmfcCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Harmonized System Code.
   * @nullable
   */
  declare harmonizedSystemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Group Id.
   * @nullable
   */
  declare productSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eng Chg Product Owner Id.
   * @nullable
   */
  declare engChgProductOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eng Chg Product Readiness Policy Name.
   * @nullable
   */
  declare engChgProductReadinessPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Eng Chg Product Category Details Name.
   * @nullable
   */
  declare engChgProductCategoryDetailsName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Eng Chg Product Release Policy Name.
   * @nullable
   */
  declare engChgProductReleasePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link ProductAttributeValuesV3} entity.
   */
  declare productAttributeValuesV3: ProductAttributeValuesV3<T>[];
  /**
   * One-to-many navigation property to the {@link PhysicalProductDimensionDetails} entity.
   */
  declare physicalProductDimensionDetails: PhysicalProductDimensionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeRequestDependencies} entity.
   */
  declare engineeringChangeRequestDependencies: EngineeringChangeRequestDependencies<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderDependencies} entity.
   */
  declare engineeringChangeOrderDependencies: EngineeringChangeOrderDependencies<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringProductVersions} entity.
   */
  declare engineeringProductVersions: EngineeringProductVersions<T>[];
  /**
   * One-to-one navigation property to the {@link TrackingDimensionGroups} entity.
   */
  declare trackingDimensionGroup?: TrackingDimensionGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyleGroups} entity.
   */
  declare productStyleGroup?: ProductStyleGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColorGroups} entity.
   */
  declare productColorGroup?: ProductColorGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizeGroups} entity.
   */
  declare productSizeGroup?: ProductSizeGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductReleasePolicies} entity.
   */
  declare productReleasePolicy?: ProductReleasePolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare productCategoryDetails?: EngineeringProductCategoryDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductReadinessPolicies} entity.
   */
  declare productReadinessPolicy?: ProductReadinessPolicies<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductAttributeValuesV2} entity.
   */
  declare productAttributeValues: ProductAttributeValuesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProducts: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link DvReleasedProducts} entity.
   */
  declare dvReleasedProducts: DvReleasedProducts<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductWhereUsedAnalyses} entity.
   */
  declare engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalyses<T>[];
  /**
   * One-to-many navigation property to the {@link ProductCategoryAssignments} entity.
   */
  declare productCategoryAssignments: ProductCategoryAssignments<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductReleases} entity.
   */
  declare engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleases<T>[];
  /**
   * One-to-many navigation property to the {@link ProductDocumentAttachments} entity.
   */
  declare productDocumentAttachments: ProductDocumentAttachments<T>[];
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: ProductsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productVariantNameNomenclatureName?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  productVariantNumberNomenclatureName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productSubType?: EcoResProductSubtype | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  serviceType?: EcoResProductServiceType | null;
  retailProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  areIdenticalConfigurationsAllowed?: NoYes | null;
  productType?: EcoResProductType | null;
  isProductKit?: NoYes | null;
  warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  isCatchWeightProduct?: NoYes | null;
  stccCode?: DeserializedType<T, 'Edm.String'> | null;
  isAutomaticVariantGenerationEnabled?: NoYes | null;
  isProductVariantUnitConversionEnabled?: NoYes | null;
  nmfcCode?: DeserializedType<T, 'Edm.String'> | null;
  harmonizedSystemCode?: DeserializedType<T, 'Edm.String'> | null;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  engChgProductOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  engChgProductReadinessPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  engChgProductCategoryDetailsName?: DeserializedType<T, 'Edm.String'> | null;
  engChgProductReleasePolicyName?: DeserializedType<T, 'Edm.String'> | null;
  productAttributeValuesV3: ProductAttributeValuesV3Type<T>[];
  physicalProductDimensionDetails: PhysicalProductDimensionDetailsType<T>[];
  engineeringChangeRequestDependencies: EngineeringChangeRequestDependenciesType<T>[];
  engineeringChangeOrderDependencies: EngineeringChangeOrderDependenciesType<T>[];
  engineeringProductVersions: EngineeringProductVersionsType<T>[];
  trackingDimensionGroup?: TrackingDimensionGroupsType<T> | null;
  productStyleGroup?: ProductStyleGroupsType<T> | null;
  productColorGroup?: ProductColorGroupsType<T> | null;
  productSizeGroup?: ProductSizeGroupsType<T> | null;
  productReleasePolicy?: ProductReleasePoliciesType<T> | null;
  productCategoryDetails?: EngineeringProductCategoryDetailsType<T> | null;
  productReadinessPolicy?: ProductReadinessPoliciesType<T> | null;
  productAttributeValues: ProductAttributeValuesV2Type<T>[];
  releasedProducts: ReleasedProductsV2Type<T>[];
  dvReleasedProducts: DvReleasedProductsType<T>[];
  engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalysesType<T>[];
  productCategoryAssignments: ProductCategoryAssignmentsType<T>[];
  engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleasesType<T>[];
  productDocumentAttachments: ProductDocumentAttachmentsType<T>[];
  plannedOrders: PlannedOrdersType<T>[];
}
