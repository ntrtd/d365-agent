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
import type { ItemSpecificFormulaHeadersV3Api } from './ItemSpecificFormulaHeadersV3Api';
import { NoYes } from './NoYes';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "ItemSpecificFormulaHeadersV3" of service "d365_metadata".
 */
export class ItemSpecificFormulaHeadersV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemSpecificFormulaHeadersV3Type<T>
{
  /**
   * Technical entity name for ItemSpecificFormulaHeadersV3.
   */
  static override _entityName = 'ItemSpecificFormulaHeadersV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemSpecificFormulaHeadersV3 entity.
   */
  static _keys = [
    'dataAreaId',
    'FormulaId',
    'ManufacturedItemNumber',
    'ProductionSiteId',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductStyleId',
    'ProductVersionId',
    'ProductSizeId',
    'FromQuantity',
    'ValidFromDate',
    'IsActive'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Formula Id.
   */
  declare formulaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufactured Item Number.
   */
  declare manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Formula Name.
   * @nullable
   */
  declare formulaName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Display Product Number.
   * @nullable
   */
  declare displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eng Chg Engineering Formula Reference.
   * @nullable
   */
  declare engChgEngineeringFormulaReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Engineering Version Id.
   * @nullable
   */
  declare engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare productionSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approvingWorker?: Workers<T> | null;

  constructor(_entityApi: ItemSpecificFormulaHeadersV3Api<T>) {
    super(_entityApi);
  }
}

export interface ItemSpecificFormulaHeadersV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  formulaId: DeserializedType<T, 'Edm.String'>;
  manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isActive?: NoYes | null;
  formulaName?: DeserializedType<T, 'Edm.String'> | null;
  formulaBatchSize: DeserializedType<T, 'Edm.Decimal'>;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  changedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isApproved?: NoYes | null;
  fromCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  formulaBatchSizeMultiples: DeserializedType<T, 'Edm.Decimal'>;
  isCoProductQuantityVariationAllowed?: NoYes | null;
  willCostCalculationIncludeVersion?: NoYes | null;
  bulkItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isTotalCostAllocationUsed?: NoYes | null;
  displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  engChgEngineeringFormulaReference?: DeserializedType<T, 'Edm.String'> | null;
  engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productionSite?: OperationalSitesType<T> | null;
  approvingWorker?: WorkersType<T> | null;
}
