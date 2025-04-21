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
import type { ProjectJournalApprovalDetailsApi } from './ProjectJournalApprovalDetailsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjectJournalApprovalDetails" of service "d365_metadata".
 */
export class ProjectJournalApprovalDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectJournalApprovalDetailsType<T>
{
  /**
   * Technical entity name for ProjectJournalApprovalDetails.
   */
  static override _entityName = 'ProjectJournalApprovalDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectJournalApprovalDetails entity.
   */
  static _keys = ['dataAreaId', 'Approve', 'StatusValue'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Approve.
   */
  declare approve: DeserializedType<T, 'Edm.String'>;
  /**
   * Status Value.
   */
  declare statusValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Next.
   * @nullable
   */
  declare next?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Journal.
   * @nullable
   */
  declare checkJournal?: NoYes | null;
  /**
   * Editing.
   * @nullable
   */
  declare editing?: NoYes | null;
  /**
   * Group.
   * @nullable
   */
  declare group?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ready For Posting.
   * @nullable
   */
  declare readyForPosting?: NoYes | null;

  constructor(_entityApi: ProjectJournalApprovalDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectJournalApprovalDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  approve: DeserializedType<T, 'Edm.String'>;
  statusValue: DeserializedType<T, 'Edm.String'>;
  next?: DeserializedType<T, 'Edm.String'> | null;
  checkJournal?: NoYes | null;
  editing?: NoYes | null;
  group?: DeserializedType<T, 'Edm.String'> | null;
  readyForPosting?: NoYes | null;
}
