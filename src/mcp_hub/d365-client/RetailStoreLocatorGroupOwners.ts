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
import type { RetailStoreLocatorGroupOwnersApi } from './RetailStoreLocatorGroupOwnersApi';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "RetailStoreLocatorGroupOwners" of service "d365_metadata".
 */
export class RetailStoreLocatorGroupOwners<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreLocatorGroupOwnersType<T>
{
  /**
   * Technical entity name for RetailStoreLocatorGroupOwners.
   */
  static override _entityName = 'RetailStoreLocatorGroupOwners';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreLocatorGroupOwners entity.
   */
  static _keys = ['StoreLocatorGroupName', 'OMOperatingUnitNumber'];
  /**
   * Store Locator Group Name.
   */
  declare storeLocatorGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel?: OnlineChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailStores} entity.
   */
  declare retailStore?: RetailStores<T> | null;

  constructor(_entityApi: RetailStoreLocatorGroupOwnersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreLocatorGroupOwnersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  storeLocatorGroupName: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  onlineChannel?: OnlineChannelsType<T> | null;
  retailStore?: RetailStoresType<T> | null;
}
