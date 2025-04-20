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
import type { FiscalIntegrationTechnicalProfilesApi } from './FiscalIntegrationTechnicalProfilesApi';
import { RetailFiscalIntegrationConnectorLocation } from './RetailFiscalIntegrationConnectorLocation';
import { RetailFiscalIntegrationConnectorType } from './RetailFiscalIntegrationConnectorType';

/**
 * This class represents the entity "FiscalIntegrationTechnicalProfiles" of service "d365_metadata".
 */
export class FiscalIntegrationTechnicalProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationTechnicalProfilesType<T>
{
  /**
   * Technical entity name for FiscalIntegrationTechnicalProfiles.
   */
  static override _entityName = 'FiscalIntegrationTechnicalProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationTechnicalProfiles entity.
   */
  static _keys = ['ProfileNumber'];
  /**
   * Profile Number.
   */
  declare profileNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Connector Location.
   * @nullable
   */
  declare connectorLocation?: RetailFiscalIntegrationConnectorLocation | null;
  /**
   * Connector Type.
   * @nullable
   */
  declare connectorType?: RetailFiscalIntegrationConnectorType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Connector Name.
   * @nullable
   */
  declare connectorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Profile Properties.
   * @nullable
   */
  declare technicalProfileProperties?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalIntegrationTechnicalProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationTechnicalProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileNumber: DeserializedType<T, 'Edm.String'>;
  connectorLocation?: RetailFiscalIntegrationConnectorLocation | null;
  connectorType?: RetailFiscalIntegrationConnectorType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  connectorName?: DeserializedType<T, 'Edm.String'> | null;
  technicalProfileProperties?: DeserializedType<T, 'Edm.String'> | null;
}
