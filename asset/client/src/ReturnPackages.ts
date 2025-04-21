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
import type { ReturnPackagesApi } from './ReturnPackagesApi';

/**
 * This class represents the entity "ReturnPackages" of service "d365_metadata".
 */
export class ReturnPackages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReturnPackagesType<T>
{
  /**
   * Technical entity name for ReturnPackages.
   */
  static override _entityName = 'ReturnPackages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnPackages entity.
   */
  static _keys = ['dataAreaId', 'PackagingCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Packaging Code.
   */
  declare packagingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Deposit.
   */
  declare deposit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReturnPackagesApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnPackagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  packagingCode: DeserializedType<T, 'Edm.String'>;
  deposit: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
