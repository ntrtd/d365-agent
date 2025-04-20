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
import type { GuidesApi } from './GuidesApi';

/**
 * This class represents the entity "Guides" of service "d365_metadata".
 */
export class Guides<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GuidesType<T>
{
  /**
   * Technical entity name for Guides.
   */
  static override _entityName = 'Guides';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Guides entity.
   */
  static _keys = ['IntegrationKey'];
  /**
   * Integration Key.
   */
  declare integrationKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Guide Id.
   */
  declare guideId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schema Version.
   */
  declare schemaVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Modified On.
   */
  declare lastModifiedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: GuidesApi<T>) {
    super(_entityApi);
  }
}

export interface GuidesType<T extends DeSerializers = DefaultDeSerializers> {
  integrationKey: DeserializedType<T, 'Edm.String'>;
  guideId: DeserializedType<T, 'Edm.Guid'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  schemaVersion: DeserializedType<T, 'Edm.Int32'>;
  lastModifiedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
