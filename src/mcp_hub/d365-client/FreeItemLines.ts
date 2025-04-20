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
import type { FreeItemLinesApi } from './FreeItemLinesApi';

/**
 * This class represents the entity "FreeItemLines" of service "d365_metadata".
 */
export class FreeItemLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FreeItemLinesType<T>
{
  /**
   * Technical entity name for FreeItemLines.
   */
  static override _entityName = 'FreeItemLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FreeItemLines entity.
   */
  static _keys = [
    'dataAreaId',
    'FreeItemId',
    'FreeItemGroup',
    'ProductDisplayProductNumber',
    'UnitOfMeasure_Symbol',
    'InventSiteId',
    'InventLocationId',
    'VariantDisplayProductNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Free Item Id.
   */
  declare freeItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Free Item Group.
   */
  declare freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Display Product Number.
   */
  declare productDisplayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Of Measure Symbol.
   */
  declare unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Site Id.
   */
  declare inventSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Location Id.
   */
  declare inventLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Variant Display Product Number.
   */
  declare variantDisplayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Free Item Line Qty Factor.
   */
  declare freeItemLineQtyFactor: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: FreeItemLinesApi<T>) {
    super(_entityApi);
  }
}

export interface FreeItemLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  freeItemId: DeserializedType<T, 'Edm.String'>;
  freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  productDisplayProductNumber: DeserializedType<T, 'Edm.String'>;
  unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>;
  inventSiteId: DeserializedType<T, 'Edm.String'>;
  inventLocationId: DeserializedType<T, 'Edm.String'>;
  variantDisplayProductNumber: DeserializedType<T, 'Edm.String'>;
  freeItemLineQtyFactor: DeserializedType<T, 'Edm.Int32'>;
}
