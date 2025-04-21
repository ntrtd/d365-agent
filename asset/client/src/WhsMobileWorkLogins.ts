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
import type { WhsMobileWorkLoginsApi } from './WhsMobileWorkLoginsApi';
import {
  WhsMobileWorkSessions,
  WhsMobileWorkSessionsType
} from './WhsMobileWorkSessions';

/**
 * This class represents the entity "WHSMobileWorkLogins" of service "d365_metadata".
 */
export class WhsMobileWorkLogins<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WhsMobileWorkLoginsType<T>
{
  /**
   * Technical entity name for WhsMobileWorkLogins.
   */
  static override _entityName = 'WHSMobileWorkLogins';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsMobileWorkLogins entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Session Rec Id.
   */
  declare sessionRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Submission Type.
   * @nullable
   */
  declare submissionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Password.
   * @nullable
   */
  declare password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error.
   * @nullable
   */
  declare error?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WhsMobileWorkSessions} entity.
   */
  declare session?: WhsMobileWorkSessions<T> | null;

  constructor(_entityApi: WhsMobileWorkLoginsApi<T>) {
    super(_entityApi);
  }
}

export interface WhsMobileWorkLoginsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  sessionRecId: DeserializedType<T, 'Edm.Int64'>;
  submissionType?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  error?: DeserializedType<T, 'Edm.String'> | null;
  session?: WhsMobileWorkSessionsType<T> | null;
}
