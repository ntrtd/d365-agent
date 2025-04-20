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
import type { SubBillSalesLineRevenueSplitsApi } from './SubBillSalesLineRevenueSplitsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "SubBillSalesLineRevenueSplits" of service "d365_metadata".
 */
export class SubBillSalesLineRevenueSplits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillSalesLineRevenueSplitsType<T>
{
  /**
   * Technical entity name for SubBillSalesLineRevenueSplits.
   */
  static override _entityName = 'SubBillSalesLineRevenueSplits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillSalesLineRevenueSplits entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderNumber',
    'ParentLineNum',
    'ChildItemId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Line Num.
   */
  declare parentLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Child Item Id.
   */
  declare childItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Unit Price.
   */
  declare childUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Child Quantity.
   */
  declare childQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: SubBillSalesLineRevenueSplitsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillSalesLineRevenueSplitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  parentLineNum: DeserializedType<T, 'Edm.Decimal'>;
  childItemId: DeserializedType<T, 'Edm.String'>;
  childUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  childQuantity: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
