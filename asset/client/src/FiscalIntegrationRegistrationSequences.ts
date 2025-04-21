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
import type { FiscalIntegrationRegistrationSequencesApi } from './FiscalIntegrationRegistrationSequencesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FiscalIntegrationRegistrationSequences" of service "d365_metadata".
 */
export class FiscalIntegrationRegistrationSequences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationRegistrationSequencesType<T>
{
  /**
   * Technical entity name for FiscalIntegrationRegistrationSequences.
   */
  static override _entityName = 'FiscalIntegrationRegistrationSequences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationRegistrationSequences entity.
   */
  static _keys = ['Store', 'Terminal', 'SequenceKey', 'IsOffline'];
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Key.
   */
  declare sequenceKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Offline.
   * @nullable
   */
  declare isOffline?: NoYes | null;
  /**
   * Last Register Response.
   * @nullable
   */
  declare lastRegisterResponse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequential Number.
   */
  declare sequentialNumber: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: FiscalIntegrationRegistrationSequencesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationRegistrationSequencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  sequenceKey: DeserializedType<T, 'Edm.String'>;
  isOffline?: NoYes | null;
  lastRegisterResponse?: DeserializedType<T, 'Edm.String'> | null;
  sequentialNumber: DeserializedType<T, 'Edm.Int64'>;
}
