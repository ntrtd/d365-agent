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
import type { RetailTillLayoutStoresApi } from './RetailTillLayoutStoresApi';

/**
 * This class represents the entity "RetailTillLayoutStores" of service "d365_metadata".
 */
export class RetailTillLayoutStores<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTillLayoutStoresType<T>
{
  /**
   * Technical entity name for RetailTillLayoutStores.
   */
  static override _entityName = 'RetailTillLayoutStores';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayoutStores entity.
   */
  static _keys = ['LayoutId', 'OMOperatingUnitNumber'];
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailTillLayoutStoresApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutStoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
}
