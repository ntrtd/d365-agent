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
import type { FormulaVersionsApi } from './FormulaVersionsApi';
import { NoYes } from './NoYes';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { Workers, WorkersType } from './Workers';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "FormulaVersions" of service "d365_metadata".
 */
export class FormulaVersions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FormulaVersionsType<T>
{
  /**
   * Technical entity name for FormulaVersions.
   */
  static override _entityName = 'FormulaVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FormulaVersions entity.
   */
  static _keys = [
    'dataAreaId',
    'ManufacturedItemNumber',
    'FormulaId',
    'ProductionSiteId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'IsActive',
    'ValidFromDate',
    'FromQuantity'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufactured Item Number.
   */
  declare manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Formula Id.
   */
  declare formulaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formula Batch Size.
   */
  declare formulaBatchSize: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed Date.
   */
  declare changedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * From Catch Weight Quantity.
   */
  declare fromCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formula Batch Size Multiples.
   */
  declare formulaBatchSizeMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Catch Weight Size.
   */
  declare catchWeightSize: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Selected For Designer.
   * @nullable
   */
  declare isSelectedForDesigner?: NoYes | null;
  /**
   * Is Co Product Quantity Variation Allowed.
   * @nullable
   */
  declare isCoProductQuantityVariationAllowed?: NoYes | null;
  /**
   * Will Cost Calculation Include Version.
   * @nullable
   */
  declare willCostCalculationIncludeVersion?: NoYes | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bulk Item Number.
   * @nullable
   */
  declare bulkItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Total Cost Allocation Used.
   * @nullable
   */
  declare isTotalCostAllocationUsed?: NoYes | null;
  /**
   * Version Name.
   * @nullable
   */
  declare versionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approverWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare manufacturedReleasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: FormulaVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface FormulaVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  formulaId: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  formulaBatchSize: DeserializedType<T, 'Edm.Decimal'>;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  changedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isApproved?: NoYes | null;
  fromCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  formulaBatchSizeMultiples: DeserializedType<T, 'Edm.Decimal'>;
  catchWeightSize: DeserializedType<T, 'Edm.Decimal'>;
  isSelectedForDesigner?: NoYes | null;
  isCoProductQuantityVariationAllowed?: NoYes | null;
  willCostCalculationIncludeVersion?: NoYes | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bulkItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isTotalCostAllocationUsed?: NoYes | null;
  versionName?: DeserializedType<T, 'Edm.String'> | null;
  productStyle?: ProductStylesType<T> | null;
  approverWorker?: WorkersType<T> | null;
  manufacturedReleasedProductV2?: ReleasedProductsV2Type<T> | null;
}
