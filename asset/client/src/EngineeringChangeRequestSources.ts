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
import type { EngineeringChangeRequestSourcesApi } from './EngineeringChangeRequestSourcesApi';
import {
  EngineeringChangeRequestHeaders,
  EngineeringChangeRequestHeadersType
} from './EngineeringChangeRequestHeaders';

/**
 * This class represents the entity "EngineeringChangeRequestSources" of service "d365_metadata".
 */
export class EngineeringChangeRequestSources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeRequestSourcesType<T>
{
  /**
   * Technical entity name for EngineeringChangeRequestSources.
   */
  static override _entityName = 'EngineeringChangeRequestSources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeRequestSources entity.
   */
  static _keys = ['EngineeringChangeRequestNumber'];
  /**
   * Engineering Change Request Number.
   */
  declare engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Type.
   * @nullable
   */
  declare sourceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Legal Entity Id.
   * @nullable
   */
  declare sourceLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Transaction Description.
   * @nullable
   */
  declare sourceTransactionDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeRequestHeaders} entity.
   */
  declare engineeringChangeRequestHeader?: EngineeringChangeRequestHeaders<T> | null;

  constructor(_entityApi: EngineeringChangeRequestSourcesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeRequestSourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  sourceType?: DeserializedType<T, 'Edm.String'> | null;
  sourceLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  sourceTransactionDescription?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeRequestHeader?: EngineeringChangeRequestHeadersType<T> | null;
}
