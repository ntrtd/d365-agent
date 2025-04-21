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
import type { DocumentRoutingClientAppsApi } from './DocumentRoutingClientAppsApi';

/**
 * This class represents the entity "DocumentRoutingClientApps" of service "d365_metadata".
 */
export class DocumentRoutingClientApps<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentRoutingClientAppsType<T>
{
  /**
   * Technical entity name for DocumentRoutingClientApps.
   */
  static override _entityName = 'DocumentRoutingClientApps';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentRoutingClientApps entity.
   */
  static _keys = ['ClientApplicationId'];
  /**
   * Client Application Id.
   */
  declare clientApplicationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Client Application Description.
   * @nullable
   */
  declare clientApplicationDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: DocumentRoutingClientAppsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentRoutingClientAppsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  clientApplicationId: DeserializedType<T, 'Edm.String'>;
  clientApplicationDescription?: DeserializedType<T, 'Edm.String'> | null;
}
