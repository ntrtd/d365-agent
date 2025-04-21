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
import type { EngineeringChangeOrderProductFormulaHeadersApi } from './EngineeringChangeOrderProductFormulaHeadersApi';
import { NoYes } from './NoYes';
import {
  EngineeringChangeOrderProductFormulaByProducts,
  EngineeringChangeOrderProductFormulaByProductsType
} from './EngineeringChangeOrderProductFormulaByProducts';
import {
  EngineeringChangeOrderProductFormulaLines,
  EngineeringChangeOrderProductFormulaLinesType
} from './EngineeringChangeOrderProductFormulaLines';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import { Workers, WorkersType } from './Workers';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import {
  EngineeringChangeOrderProductFormulaCoProducts,
  EngineeringChangeOrderProductFormulaCoProductsType
} from './EngineeringChangeOrderProductFormulaCoProducts';

/**
 * This class represents the entity "EngineeringChangeOrderProductFormulaHeaders" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductFormulaHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductFormulaHeadersType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductFormulaHeaders.
   */
  static override _entityName = 'EngineeringChangeOrderProductFormulaHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductFormulaHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'CreationSequenceNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Creation Sequence Number.
   */
  declare creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Total Cost Allocation Used.
   * @nullable
   */
  declare isTotalCostAllocationUsed?: NoYes | null;
  /**
   * Formula Batch Size Multiples.
   */
  declare formulaBatchSizeMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formula Id.
   * @nullable
   */
  declare formulaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Bulk Item Number.
   * @nullable
   */
  declare bulkItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Co Product Quantity Variation Allowed.
   * @nullable
   */
  declare isCoProductQuantityVariationAllowed?: NoYes | null;
  /**
   * Is Approved.
   */
  declare isApproved: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Changed Date.
   */
  declare changedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Formula Name.
   * @nullable
   */
  declare formulaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Cost Calculation Include Version.
   * @nullable
   */
  declare willCostCalculationIncludeVersion?: NoYes | null;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formula Batch Size.
   */
  declare formulaBatchSize: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductFormulaByProducts} entity.
   */
  declare engineeringChangeOrderProductFormulaByProducts: EngineeringChangeOrderProductFormulaByProducts<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductFormulaLines} entity.
   */
  declare engineeringChangeOrderProductFormulaLines: EngineeringChangeOrderProductFormulaLines<T>[];
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProduct?: EngineeringChangeOrderProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approverWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductFormulaCoProducts} entity.
   */
  declare engineeringChangeOrderProductFormulaCoProducts: EngineeringChangeOrderProductFormulaCoProducts<T>[];

  constructor(_entityApi: EngineeringChangeOrderProductFormulaHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductFormulaHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  isTotalCostAllocationUsed?: NoYes | null;
  formulaBatchSizeMultiples: DeserializedType<T, 'Edm.Decimal'>;
  formulaId?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  bulkItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isCoProductQuantityVariationAllowed?: NoYes | null;
  isApproved: DeserializedType<T, 'Edm.Boolean'>;
  changedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  formulaName?: DeserializedType<T, 'Edm.String'> | null;
  willCostCalculationIncludeVersion?: NoYes | null;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  formulaBatchSize: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductFormulaByProducts: EngineeringChangeOrderProductFormulaByProductsType<T>[];
  engineeringChangeOrderProductFormulaLines: EngineeringChangeOrderProductFormulaLinesType<T>[];
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  approverWorker?: WorkersType<T> | null;
  engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2Type<T> | null;
  engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3Type<T> | null;
  engineeringChangeOrderProductFormulaCoProducts: EngineeringChangeOrderProductFormulaCoProductsType<T>[];
}
