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
import type { RetailStoreAddressBooksApi } from './RetailStoreAddressBooksApi';
import { RetailAddressBookType } from './RetailAddressBookType';
import { RetailChannels, RetailChannelsType } from './RetailChannels';
import { AddressBooks, AddressBooksType } from './AddressBooks';

/**
 * This class represents the entity "RetailStoreAddressBooks" of service "d365_metadata".
 */
export class RetailStoreAddressBooks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreAddressBooksType<T>
{
  /**
   * Technical entity name for RetailStoreAddressBooks.
   */
  static override _entityName = 'RetailStoreAddressBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreAddressBooks entity.
   */
  static _keys = ['RetailChannelId', 'AddressBookName', 'AddressBookType'];
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Book Name.
   */
  declare addressBookName: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Book Type.
   * @nullable
   */
  declare addressBookType?: RetailAddressBookType | null;
  /**
   * One-to-one navigation property to the {@link RetailChannels} entity.
   */
  declare retailChannel?: RetailChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressBooks} entity.
   */
  declare addressBooks?: AddressBooks<T> | null;

  constructor(_entityApi: RetailStoreAddressBooksApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreAddressBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  addressBookName: DeserializedType<T, 'Edm.String'>;
  addressBookType?: RetailAddressBookType | null;
  retailChannel?: RetailChannelsType<T> | null;
  addressBooks?: AddressBooksType<T> | null;
}
