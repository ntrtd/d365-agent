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
import type { RetailVendorSalesPricePointSetupsApi } from './RetailVendorSalesPricePointSetupsApi';

/**
 * This class represents the entity "RetailVendorSalesPricePointSetups" of service "d365_metadata".
 */
export class RetailVendorSalesPricePointSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailVendorSalesPricePointSetupsType<T>
{
  /**
   * Technical entity name for RetailVendorSalesPricePointSetups.
   */
  static override _entityName = 'RetailVendorSalesPricePointSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailVendorSalesPricePointSetups entity.
   */
  static _keys = [
    'dataAreaId',
    'VendorAccount',
    'suggestedRetailPrice',
    'CategoryName',
    'CategoryHierarchyName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account.
   */
  declare vendorAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Suggested Retail Price.
   */
  declare suggestedRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Hierarchy Name.
   */
  declare categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailVendorSalesPricePointSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailVendorSalesPricePointSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorAccount: DeserializedType<T, 'Edm.String'>;
  suggestedRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
}
