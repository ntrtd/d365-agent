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
import type { EngineeringChangeOrderProductFormulaCoProductsApi } from './EngineeringChangeOrderProductFormulaCoProductsApi';
import { PmfCostAllocationMethod } from './PmfCostAllocationMethod';
import { PmfProductType } from './PmfProductType';
import { PmfCoByRoundUp } from './PmfCoByRoundUp';
import { PmfBurdenType } from './PmfBurdenType';
import {
  EngineeringChangeOrderProductFormulaHeaders,
  EngineeringChangeOrderProductFormulaHeadersType
} from './EngineeringChangeOrderProductFormulaHeaders';

/**
 * This class represents the entity "EngineeringChangeOrderProductFormulaCoProducts" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductFormulaCoProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductFormulaCoProductsType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductFormulaCoProducts.
   */
  static override _entityName =
    'EngineeringChangeOrderProductFormulaCoProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductFormulaCoProducts entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber',
    'LineCreationSequenceNumber'
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
   * Engineering Change Order Product Bill Of Materials Header Creation Sequence Number.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Site Id.
   * @nullable
   */
  declare consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Allocation Method.
   * @nullable
   */
  declare costAllocationMethod?: PmfCostAllocationMethod | null;
  /**
   * Burden Allocation Amount.
   */
  declare burdenAllocationAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Rounding Up Multiples.
   */
  declare quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: PmfProductType | null;
  /**
   * Rounding Up Method.
   * @nullable
   */
  declare roundingUpMethod?: PmfCoByRoundUp | null;
  /**
   * Cost Allocation Percentage.
   */
  declare costAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Denominator.
   */
  declare quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Burden Allocation Method.
   * @nullable
   */
  declare burdenAllocationMethod?: PmfBurdenType | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductFormulaHeaders} entity.
   */
  declare engineeringChangeOrderProductFormulaHeader?: EngineeringChangeOrderProductFormulaHeaders<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductFormulaCoProductsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductFormulaCoProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  costAllocationMethod?: PmfCostAllocationMethod | null;
  burdenAllocationAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  productType?: PmfProductType | null;
  roundingUpMethod?: PmfCoByRoundUp | null;
  costAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  burdenAllocationMethod?: PmfBurdenType | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductFormulaHeader?: EngineeringChangeOrderProductFormulaHeadersType<T> | null;
}
