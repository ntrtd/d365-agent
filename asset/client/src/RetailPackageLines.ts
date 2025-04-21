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
import type { RetailPackageLinesApi } from './RetailPackageLinesApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { RetailPackages, RetailPackagesType } from './RetailPackages';

/**
 * This class represents the entity "RetailPackageLines" of service "d365_metadata".
 */
export class RetailPackageLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailPackageLinesType<T>
{
  /**
   * Technical entity name for RetailPackageLines.
   */
  static override _entityName = 'RetailPackageLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPackageLines entity.
   */
  static _keys = [
    'dataAreaId',
    'PackageId',
    'ItemId',
    'PurchaseUnit',
    'Color',
    'Size',
    'Style',
    'ConfigId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Package Id.
   */
  declare packageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Unit.
   */
  declare purchaseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Color.
   */
  declare color: DeserializedType<T, 'Edm.String'>;
  /**
   * Size.
   */
  declare size: DeserializedType<T, 'Edm.String'>;
  /**
   * Style.
   */
  declare style: DeserializedType<T, 'Edm.String'>;
  /**
   * Config Id.
   */
  declare configId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailPackages} entity.
   */
  declare retailPackage?: RetailPackages<T> | null;

  constructor(_entityApi: RetailPackageLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPackageLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  packageId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  purchaseUnit: DeserializedType<T, 'Edm.String'>;
  color: DeserializedType<T, 'Edm.String'>;
  size: DeserializedType<T, 'Edm.String'>;
  style: DeserializedType<T, 'Edm.String'>;
  configId: DeserializedType<T, 'Edm.String'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  retailPackage?: RetailPackagesType<T> | null;
}
