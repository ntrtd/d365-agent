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
import type { AddressFormatsApi } from './AddressFormatsApi';

/**
 * This class represents the entity "AddressFormats" of service "d365_metadata".
 */
export class AddressFormats<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressFormatsType<T>
{
  /**
   * Technical entity name for AddressFormats.
   */
  static override _entityName = 'AddressFormats';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressFormats entity.
   */
  static _keys = ['AddressFormat'];
  /**
   * Address Format.
   */
  declare addressFormat: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AddressFormatsApi<T>) {
    super(_entityApi);
  }
}

export interface AddressFormatsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressFormat: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
