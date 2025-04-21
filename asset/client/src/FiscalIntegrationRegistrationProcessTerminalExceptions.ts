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
import type { FiscalIntegrationRegistrationProcessTerminalExceptionsApi } from './FiscalIntegrationRegistrationProcessTerminalExceptionsApi';

/**
 * This class represents the entity "FiscalIntegrationRegistrationProcessTerminalExceptions" of service "d365_metadata".
 */
export class FiscalIntegrationRegistrationProcessTerminalExceptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationRegistrationProcessTerminalExceptionsType<T>
{
  /**
   * Technical entity name for FiscalIntegrationRegistrationProcessTerminalExceptions.
   */
  static override _entityName =
    'FiscalIntegrationRegistrationProcessTerminalExceptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationRegistrationProcessTerminalExceptions entity.
   */
  static _keys = ['ProcessNumber', 'TerminalNumber'];
  /**
   * Process Number.
   */
  declare processNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Number.
   */
  declare terminalNumber: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: FiscalIntegrationRegistrationProcessTerminalExceptionsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationRegistrationProcessTerminalExceptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processNumber: DeserializedType<T, 'Edm.String'>;
  terminalNumber: DeserializedType<T, 'Edm.String'>;
}
