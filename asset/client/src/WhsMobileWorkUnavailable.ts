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
import type { WhsMobileWorkUnavailableApi } from './WhsMobileWorkUnavailableApi';

/**
 * This class represents the entity "WHSMobileWorkUnavailable" of service "d365_metadata".
 */
export class WhsMobileWorkUnavailable<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WhsMobileWorkUnavailableType<T>
{
  /**
   * Technical entity name for WhsMobileWorkUnavailable.
   */
  static override _entityName = 'WHSMobileWorkUnavailable';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsMobileWorkUnavailable entity.
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

  constructor(_entityApi: WhsMobileWorkUnavailableApi<T>) {
    super(_entityApi);
  }
}

export interface WhsMobileWorkUnavailableType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  sessionRecId: DeserializedType<T, 'Edm.Int64'>;
  submissionType?: DeserializedType<T, 'Edm.String'> | null;
}
