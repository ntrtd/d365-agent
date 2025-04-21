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
import type { RetailPackagesApi } from './RetailPackagesApi';
import {
  RetailPackagePurchases,
  RetailPackagePurchasesType
} from './RetailPackagePurchases';
import {
  RetailPackageLines,
  RetailPackageLinesType
} from './RetailPackageLines';

/**
 * This class represents the entity "RetailPackages" of service "d365_metadata".
 */
export class RetailPackages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailPackagesType<T>
{
  /**
   * Technical entity name for RetailPackages.
   */
  static override _entityName = 'RetailPackages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPackages entity.
   */
  static _keys = ['dataAreaId', 'PackageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Package Id.
   */
  declare packageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Package Name.
   * @nullable
   */
  declare packageName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailPackagePurchases} entity.
   */
  declare retailPackagePurchase: RetailPackagePurchases<T>[];
  /**
   * One-to-many navigation property to the {@link RetailPackageLines} entity.
   */
  declare retailPackageLines: RetailPackageLines<T>[];

  constructor(_entityApi: RetailPackagesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPackagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  packageId: DeserializedType<T, 'Edm.String'>;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  packageName?: DeserializedType<T, 'Edm.String'> | null;
  retailPackagePurchase: RetailPackagePurchasesType<T>[];
  retailPackageLines: RetailPackageLinesType<T>[];
}
