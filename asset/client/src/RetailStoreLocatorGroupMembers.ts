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
import type { RetailStoreLocatorGroupMembersApi } from './RetailStoreLocatorGroupMembersApi';

/**
 * This class represents the entity "RetailStoreLocatorGroupMembers" of service "d365_metadata".
 */
export class RetailStoreLocatorGroupMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreLocatorGroupMembersType<T>
{
  /**
   * Technical entity name for RetailStoreLocatorGroupMembers.
   */
  static override _entityName = 'RetailStoreLocatorGroupMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreLocatorGroupMembers entity.
   */
  static _keys = [
    'StoreLocatorGroupName',
    'InventLocationId',
    'InventLocationDataAreaId',
    'OMOperatingUnitNumber'
  ];
  /**
   * Store Locator Group Name.
   */
  declare storeLocatorGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Location Id.
   */
  declare inventLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Location Data Area Id.
   */
  declare inventLocationDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailStoreLocatorGroupMembersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreLocatorGroupMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  storeLocatorGroupName: DeserializedType<T, 'Edm.String'>;
  inventLocationId: DeserializedType<T, 'Edm.String'>;
  inventLocationDataAreaId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
}
