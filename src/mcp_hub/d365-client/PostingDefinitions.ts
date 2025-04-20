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
import type { PostingDefinitionsApi } from './PostingDefinitionsApi';
import { JournalizingDefinitionModuleId } from './JournalizingDefinitionModuleId';

/**
 * This class represents the entity "PostingDefinitions" of service "d365_metadata".
 */
export class PostingDefinitions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PostingDefinitionsType<T>
{
  /**
   * Technical entity name for PostingDefinitions.
   */
  static override _entityName = 'PostingDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostingDefinitions entity.
   */
  static _keys = ['dataAreaId', 'PostingDefinitionId', 'ValidFrom'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Definition Id.
   */
  declare postingDefinitionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Module.
   * @nullable
   */
  declare module?: JournalizingDefinitionModuleId | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version Description.
   * @nullable
   */
  declare versionDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PostingDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface PostingDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingDefinitionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  module?: JournalizingDefinitionModuleId | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  versionDescription?: DeserializedType<T, 'Edm.String'> | null;
}
