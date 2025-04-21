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
import type { FiscalIntegrationFunctionalityProfilesApi } from './FiscalIntegrationFunctionalityProfilesApi';

/**
 * This class represents the entity "FiscalIntegrationFunctionalityProfiles" of service "d365_metadata".
 */
export class FiscalIntegrationFunctionalityProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationFunctionalityProfilesType<T>
{
  /**
   * Technical entity name for FiscalIntegrationFunctionalityProfiles.
   */
  static override _entityName = 'FiscalIntegrationFunctionalityProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationFunctionalityProfiles entity.
   */
  static _keys = ['dataAreaId', 'ProfileNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Number.
   */
  declare profileNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Provider Name.
   * @nullable
   */
  declare documentProviderName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Document Provider Properties.
   * @nullable
   */
  declare documentProviderProperties?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalIntegrationFunctionalityProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationFunctionalityProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileNumber: DeserializedType<T, 'Edm.String'>;
  documentProviderName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  connectorName?: DeserializedType<T, 'Edm.String'> | null;
  documentProviderProperties?: DeserializedType<T, 'Edm.String'> | null;
}
