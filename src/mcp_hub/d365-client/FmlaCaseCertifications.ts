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
import type { FmlaCaseCertificationsApi } from './FmlaCaseCertificationsApi';
import { HrmBlankYesNo } from './HrmBlankYesNo';
import { HcmFmlaReason } from './HcmFmlaReason';

/**
 * This class represents the entity "FMLACaseCertifications" of service "d365_metadata".
 */
export class FmlaCaseCertifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FmlaCaseCertificationsType<T>
{
  /**
   * Technical entity name for FmlaCaseCertifications.
   */
  static override _entityName = 'FMLACaseCertifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FmlaCaseCertifications entity.
   */
  static _keys = [
    'dataAreaId',
    'CaseID',
    'ValidCertificate',
    'DateSent',
    'DueDate',
    'Notes',
    'ReasonForInvalidCertificate',
    'RequestedDate',
    'DateReturned'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Case Id.
   */
  declare caseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid Certificate.
   * @nullable
   */
  declare validCertificate?: HrmBlankYesNo | null;
  /**
   * Date Sent.
   */
  declare dateSent: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notes.
   */
  declare notes: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason For Invalid Certificate.
   * @nullable
   */
  declare reasonForInvalidCertificate?: HcmFmlaReason | null;
  /**
   * Requested Date.
   */
  declare requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date Returned.
   */
  declare dateReturned: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: FmlaCaseCertificationsApi<T>) {
    super(_entityApi);
  }
}

export interface FmlaCaseCertificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  caseId: DeserializedType<T, 'Edm.String'>;
  validCertificate?: HrmBlankYesNo | null;
  dateSent: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes: DeserializedType<T, 'Edm.String'>;
  reasonForInvalidCertificate?: HcmFmlaReason | null;
  requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateReturned: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
