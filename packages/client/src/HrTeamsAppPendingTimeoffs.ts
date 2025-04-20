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
import type { HrTeamsAppPendingTimeoffsApi } from './HrTeamsAppPendingTimeoffsApi';

/**
 * This class represents the entity "HRTeamsAppPendingTimeoffs" of service "d365_metadata".
 */
export class HrTeamsAppPendingTimeoffs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HrTeamsAppPendingTimeoffsType<T>
{
  /**
   * Technical entity name for HrTeamsAppPendingTimeoffs.
   */
  static override _entityName = 'HRTeamsAppPendingTimeoffs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HrTeamsAppPendingTimeoffs entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subject.
   * @nullable
   */
  declare subject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Owner.
   * @nullable
   */
  declare workflowOwner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Personnel Number.
   * @nullable
   */
  declare workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Network Alias.
   * @nullable
   */
  declare networkAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Submission Date.
   */
  declare submissionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: HrTeamsAppPendingTimeoffsApi<T>) {
    super(_entityApi);
  }
}

export interface HrTeamsAppPendingTimeoffsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonCode: DeserializedType<T, 'Edm.Int64'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  subject?: DeserializedType<T, 'Edm.String'> | null;
  workflowOwner?: DeserializedType<T, 'Edm.String'> | null;
  workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  networkAlias?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  submissionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
