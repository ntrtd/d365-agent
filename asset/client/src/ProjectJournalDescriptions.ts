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
import type { ProjectJournalDescriptionsApi } from './ProjectJournalDescriptionsApi';

/**
 * This class represents the entity "ProjectJournalDescriptions" of service "d365_metadata".
 */
export class ProjectJournalDescriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectJournalDescriptionsType<T>
{
  /**
   * Technical entity name for ProjectJournalDescriptions.
   */
  static override _entityName = 'ProjectJournalDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectJournalDescriptions entity.
   */
  static _keys = ['dataAreaId', 'SearchName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Search Name.
   */
  declare searchName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification.
   * @nullable
   */
  declare identification?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectJournalDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectJournalDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  searchName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  identification?: DeserializedType<T, 'Edm.String'> | null;
}
