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
import type { ReleasedProductsForAiApi } from './ReleasedProductsForAiApi';
import { PmfProductType } from './PmfProductType';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
import { NoYes } from './NoYes';
import { EcoResProductType } from './EcoResProductType';
import { Abc } from './Abc';
import { ItemType } from './ItemType';
import {
  InventoryTableModulesForAi,
  InventoryTableModulesForAiType
} from './InventoryTableModulesForAi';
import {
  InventoryOnHandForAi,
  InventoryOnHandForAiType
} from './InventoryOnHandForAi';
import {
  ProductApprovedVendorsForAi,
  ProductApprovedVendorsForAiType
} from './ProductApprovedVendorsForAi';
import {
  PurchaseAgreementLinesForAi,
  PurchaseAgreementLinesForAiType
} from './PurchaseAgreementLinesForAi';
import {
  EcoResProductTranslationsForAi,
  EcoResProductTranslationsForAiType
} from './EcoResProductTranslationsForAi';
import {
  PurchaseOrderLinesForAi,
  PurchaseOrderLinesForAiType
} from './PurchaseOrderLinesForAi';

/**
 * This class represents the entity "ReleasedProductsForAI" of service "d365_metadata".
 */
export class ReleasedProductsForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductsForAiType<T>
{
  /**
   * Technical entity name for ReleasedProductsForAi.
   */
  static override _entityName = 'ReleasedProductsForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductsForAi entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Key.
   */
  declare productKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Type.
   * @nullable
   */
  declare productionType?: PmfProductType | null;
  /**
   * Production Consumption Width Conversion Factor.
   */
  declare productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Variant Configuration Technology.
   * @nullable
   */
  declare variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  /**
   * Product Volume.
   */
  declare productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alternative Product Configuration Id.
   * @nullable
   */
  declare alternativeProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Retail Style Group Id.
   * @nullable
   */
  declare retailStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Product Height.
   */
  declare grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Size Group Id.
   * @nullable
   */
  declare retailSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Product Size Id.
   * @nullable
   */
  declare defaultProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Product Style Id.
   * @nullable
   */
  declare alternativeProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Phantom.
   * @nullable
   */
  declare isPhantom?: NoYes | null;
  /**
   * Production Consumption Density Conversion Factor.
   */
  declare productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Pds Shelf Life.
   */
  declare pdsShelfLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pds Shelf Advice.
   */
  declare pdsShelfAdvice: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Alternative Item Number.
   * @nullable
   */
  declare alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Product Style Id.
   * @nullable
   */
  declare defaultProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Dual Use Product.
   * @nullable
   */
  declare isDualUseProduct?: NoYes | null;
  /**
   * Planning Formula Item Number.
   * @nullable
   */
  declare planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Retail Color Group Id.
   * @nullable
   */
  declare retailColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Vendor Account Number.
   * @nullable
   */
  declare primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Height.
   */
  declare height: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alternative Product Color Id.
   * @nullable
   */
  declare alternativeProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Product Version Id.
   * @nullable
   */
  declare alternativeProductVersionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Dual Use Code.
   * @nullable
   */
  declare dualUseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Total Weight.
   */
  declare retailTotalWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Value Abc Code.
   * @nullable
   */
  declare valueAbcCode?: Abc | null;
  /**
   * Gross Product Width.
   */
  declare grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gross Product Depth.
   */
  declare grossProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alternative Product Size Id.
   * @nullable
   */
  declare alternativeProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Depth Conversion Factor.
   */
  declare productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Display Product Number.
   * @nullable
   */
  declare displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Product Weight.
   */
  declare netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Type.
   * @nullable
   */
  declare itemType?: ItemType | null;
  /**
   * Default Product Color Id.
   * @nullable
   */
  declare defaultProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InventoryTableModulesForAi} entity.
   */
  declare releasedProduct: InventoryTableModulesForAi<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryOnHandForAi} entity.
   */
  declare inventoryOnHand: InventoryOnHandForAi<T>[];
  /**
   * One-to-many navigation property to the {@link ProductApprovedVendorsForAi} entity.
   */
  declare productApprovedVendors: ProductApprovedVendorsForAi<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLinesForAi} entity.
   */
  declare purchaseAgreementLinesAi: PurchaseAgreementLinesForAi<T>[];
  /**
   * One-to-many navigation property to the {@link EcoResProductTranslationsForAi} entity.
   */
  declare ecoResProductTranslationAiEntity: EcoResProductTranslationsForAi<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLinesForAi} entity.
   */
  declare purchaseOrderLines: PurchaseOrderLinesForAi<T>[];

  constructor(_entityApi: ReleasedProductsForAiApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductsForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productKey: DeserializedType<T, 'Edm.Int64'>;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  productionType?: PmfProductType | null;
  productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  alternativeProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  retailStyleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  retailSizeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  isPhantom?: NoYes | null;
  productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  pdsShelfLife: DeserializedType<T, 'Edm.Int32'>;
  pdsShelfAdvice: DeserializedType<T, 'Edm.Int32'>;
  alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  isDualUseProduct?: NoYes | null;
  planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productType?: EcoResProductType | null;
  retailColorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  height: DeserializedType<T, 'Edm.Decimal'>;
  alternativeProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  dualUseCode?: DeserializedType<T, 'Edm.String'> | null;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  retailTotalWeight: DeserializedType<T, 'Edm.Int32'>;
  valueAbcCode?: Abc | null;
  grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  grossProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  alternativeProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  itemType?: ItemType | null;
  defaultProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  releasedProduct: InventoryTableModulesForAiType<T>[];
  inventoryOnHand: InventoryOnHandForAiType<T>[];
  productApprovedVendors: ProductApprovedVendorsForAiType<T>[];
  purchaseAgreementLinesAi: PurchaseAgreementLinesForAiType<T>[];
  ecoResProductTranslationAiEntity: EcoResProductTranslationsForAiType<T>[];
  purchaseOrderLines: PurchaseOrderLinesForAiType<T>[];
}
