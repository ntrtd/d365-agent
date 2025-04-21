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
import type { PayIntV1PersonIdentificationNumbersApi } from './PayIntV1PersonIdentificationNumbersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1PersonIdentificationNumbers" of service "d365_metadata".
 */
export class PayIntV1PersonIdentificationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PersonIdentificationNumbersType<T>
{
  /**
   * Technical entity name for PayIntV1PersonIdentificationNumbers.
   */
  static override _entityName = 'PayIntV1PersonIdentificationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PersonIdentificationNumbers entity.
   */
  static _keys = [
    'PartyNumber',
    'IdentificationTypeId',
    'IdentificationNumber'
  ];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Identification Type Id.
   */
  declare identificationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Identification Number.
   */
  declare identificationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Issued Date.
   */
  declare issuedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Issuing Agency Id.
   * @nullable
   */
  declare issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Type.
   * @nullable
   */
  declare entryType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1PersonIdentificationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PersonIdentificationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  identificationTypeId: DeserializedType<T, 'Edm.String'>;
  identificationNumber: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  issuedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  entryType?: DeserializedType<T, 'Edm.String'> | null;
}
