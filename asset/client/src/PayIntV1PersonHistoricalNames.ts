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
import type { PayIntV1PersonHistoricalNamesApi } from './PayIntV1PersonHistoricalNamesApi';

/**
 * This class represents the entity "PayIntV1PersonHistoricalNames" of service "d365_metadata".
 */
export class PayIntV1PersonHistoricalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PersonHistoricalNamesType<T>
{
  /**
   * Technical entity name for PayIntV1PersonHistoricalNames.
   */
  static override _entityName = 'PayIntV1PersonHistoricalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PersonHistoricalNames entity.
   */
  static _keys = ['PartyNumber', 'ValidFrom'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1PersonHistoricalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PersonHistoricalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
}
