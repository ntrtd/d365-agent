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
import type { ProjectJournalApprovalsApi } from './ProjectJournalApprovalsApi';

/**
 * This class represents the entity "ProjectJournalApprovals" of service "d365_metadata".
 */
export class ProjectJournalApprovals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectJournalApprovalsType<T>
{
  /**
   * Technical entity name for ProjectJournalApprovals.
   */
  static override _entityName = 'ProjectJournalApprovals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectJournalApprovals entity.
   */
  static _keys = ['dataAreaId', 'Approve'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Approve.
   */
  declare approve: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectJournalApprovalsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectJournalApprovalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  approve: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
