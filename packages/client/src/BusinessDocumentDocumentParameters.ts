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
import type { BusinessDocumentDocumentParametersApi } from './BusinessDocumentDocumentParametersApi';

/**
 * This class represents the entity "BusinessDocumentDocumentParameters" of service "d365_metadata".
 */
export class BusinessDocumentDocumentParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentDocumentParametersType<T>
{
  /**
   * Technical entity name for BusinessDocumentDocumentParameters.
   */
  static override _entityName = 'BusinessDocumentDocumentParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentDocumentParameters entity.
   */
  static _keys = ['EnvironmentName'];
  /**
   * Environment Name.
   */
  declare environmentName: DeserializedType<T, 'Edm.String'>;
  /**
   * Client Id.
   * @nullable
   */
  declare clientId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Endpoint.
   * @nullable
   */
  declare serviceEndpoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tenant Id.
   * @nullable
   */
  declare tenantId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BusinessDocumentDocumentParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentDocumentParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  environmentName: DeserializedType<T, 'Edm.String'>;
  clientId?: DeserializedType<T, 'Edm.String'> | null;
  serviceEndpoint?: DeserializedType<T, 'Edm.String'> | null;
  tenantId?: DeserializedType<T, 'Edm.String'> | null;
}
