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
import type { FiscalIntegrationTechnicalProfileOverridesApi } from './FiscalIntegrationTechnicalProfileOverridesApi';

/**
 * This class represents the entity "FiscalIntegrationTechnicalProfileOverrides" of service "d365_metadata".
 */
export class FiscalIntegrationTechnicalProfileOverrides<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationTechnicalProfileOverridesType<T>
{
  /**
   * Technical entity name for FiscalIntegrationTechnicalProfileOverrides.
   */
  static override _entityName = 'FiscalIntegrationTechnicalProfileOverrides';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationTechnicalProfileOverrides entity.
   */
  static _keys = ['TechnicalProfileId', 'StoreId', 'TerminalId'];
  /**
   * Technical Profile Id.
   */
  declare technicalProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Technical Profile Properties.
   * @nullable
   */
  declare technicalProfileProperties?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalIntegrationTechnicalProfileOverridesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationTechnicalProfileOverridesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  technicalProfileId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  technicalProfileProperties?: DeserializedType<T, 'Edm.String'> | null;
}
