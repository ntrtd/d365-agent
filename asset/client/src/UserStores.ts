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
import type { UserStoresApi } from './UserStoresApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "UserStores" of service "d365_metadata".
 */
export class UserStores<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserStoresType<T>
{
  /**
   * Technical entity name for UserStores.
   */
  static override _entityName = 'UserStores';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UserStores entity.
   */
  static _keys = ['dataAreaId', 'StoreNumber', 'User'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * User.
   */
  declare user: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Name.
   * @nullable
   */
  declare storeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Store.
   * @nullable
   */
  declare primaryStore?: NoYes | null;

  constructor(_entityApi: UserStoresApi<T>) {
    super(_entityApi);
  }
}

export interface UserStoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  user: DeserializedType<T, 'Edm.String'>;
  storeName?: DeserializedType<T, 'Edm.String'> | null;
  primaryStore?: NoYes | null;
}
