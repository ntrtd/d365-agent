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
import type { RetailPackagePurchasesApi } from './RetailPackagePurchasesApi';
import { RetailPackages, RetailPackagesType } from './RetailPackages';

/**
 * This class represents the entity "RetailPackagePurchases" of service "d365_metadata".
 */
export class RetailPackagePurchases<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailPackagePurchasesType<T>
{
  /**
   * Technical entity name for RetailPackagePurchases.
   */
  static override _entityName = 'RetailPackagePurchases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPackagePurchases entity.
   */
  static _keys = ['dataAreaId', 'PurchaseId', 'PackageId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Id.
   */
  declare purchaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Package Id.
   */
  declare packageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allocated Cross Dock Qty.
   */
  declare allocatedCrossDockQty: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quantity Received.
   */
  declare quantityReceived: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailPackages} entity.
   */
  declare retailPackage?: RetailPackages<T> | null;

  constructor(_entityApi: RetailPackagePurchasesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPackagePurchasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseId: DeserializedType<T, 'Edm.String'>;
  packageId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  allocatedCrossDockQty: DeserializedType<T, 'Edm.Int32'>;
  quantityReceived: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  retailPackage?: RetailPackagesType<T> | null;
}
