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
import type { FiscalIntegrationRegistrationProcessesApi } from './FiscalIntegrationRegistrationProcessesApi';
import { NoYes } from './NoYes';
import { RetailFiscalIntegrationConnectorType } from './RetailFiscalIntegrationConnectorType';

/**
 * This class represents the entity "FiscalIntegrationRegistrationProcesses" of service "d365_metadata".
 */
export class FiscalIntegrationRegistrationProcesses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationRegistrationProcessesType<T>
{
  /**
   * Technical entity name for FiscalIntegrationRegistrationProcesses.
   */
  static override _entityName = 'FiscalIntegrationRegistrationProcesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationRegistrationProcesses entity.
   */
  static _keys = ['ProcessNumber', 'Sequence', 'Priority'];
  /**
   * Process Number.
   */
  declare processNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Mark As Registered.
   * @nullable
   */
  declare allowMarkAsRegistered?: NoYes | null;
  /**
   * Allow Skip.
   * @nullable
   */
  declare allowSkip?: NoYes | null;
  /**
   * Group Number.
   * @nullable
   */
  declare groupNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Connector Type.
   * @nullable
   */
  declare connectorType?: RetailFiscalIntegrationConnectorType | null;
  /**
   * Optional.
   * @nullable
   */
  declare optional?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalIntegrationRegistrationProcessesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationRegistrationProcessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processNumber: DeserializedType<T, 'Edm.String'>;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  allowMarkAsRegistered?: NoYes | null;
  allowSkip?: NoYes | null;
  groupNumber?: DeserializedType<T, 'Edm.String'> | null;
  connectorType?: RetailFiscalIntegrationConnectorType | null;
  optional?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
