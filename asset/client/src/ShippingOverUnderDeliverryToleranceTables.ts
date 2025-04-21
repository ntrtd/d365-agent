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
import type { ShippingOverUnderDeliverryToleranceTablesApi } from './ShippingOverUnderDeliverryToleranceTablesApi';

/**
 * This class represents the entity "ShippingOverUnderDeliverryToleranceTables" of service "d365_metadata".
 */
export class ShippingOverUnderDeliverryToleranceTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingOverUnderDeliverryToleranceTablesType<T>
{
  /**
   * Technical entity name for ShippingOverUnderDeliverryToleranceTables.
   */
  static override _entityName = 'ShippingOverUnderDeliverryToleranceTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingOverUnderDeliverryToleranceTables entity.
   */
  static _keys = [
    'dataAreaId',
    'VendorAccountNumber',
    'VendorOverUnderdeliveryToleranceGroupId',
    'ItemNumber',
    'ItemOverUnderdeliveryToleranceGroupId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Over Underdelivery Tolerance Group Id.
   */
  declare vendorOverUnderdeliveryToleranceGroupId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Over Underdelivery Tolerance Group Id.
   */
  declare itemOverUnderdeliveryToleranceGroupId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Tolerance Percentage.
   */
  declare tolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tolerance Amount.
   */
  declare toleranceAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ShippingOverUnderDeliverryToleranceTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingOverUnderDeliverryToleranceTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  vendorOverUnderdeliveryToleranceGroupId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  itemOverUnderdeliveryToleranceGroupId: DeserializedType<T, 'Edm.String'>;
  tolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  toleranceAmount: DeserializedType<T, 'Edm.Decimal'>;
}
