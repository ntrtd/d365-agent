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
import type { SalesAgreementLineNotesApi } from './SalesAgreementLineNotesApi';
import { DocuRestriction } from './DocuRestriction';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';

/**
 * This class represents the entity "SalesAgreementLineNotes" of service "d365_metadata".
 */
export class SalesAgreementLineNotes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAgreementLineNotesType<T>
{
  /**
   * Technical entity name for SalesAgreementLineNotes.
   */
  static override _entityName = 'SalesAgreementLineNotes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAgreementLineNotes entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesAgreementId',
    'LineNumber',
    'DocumentAttachmentTypeCode',
    'AttachmentDescription',
    'AttachedDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Agreement Id.
   */
  declare salesAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Attachment Type Code.
   */
  declare documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Attachment Description.
   */
  declare attachmentDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Attached Date Time.
   */
  declare attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Access Restriction.
   * @nullable
   */
  declare accessRestriction?: DocuRestriction | null;
  /**
   * Attaching User Id.
   * @nullable
   */
  declare attachingUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Agreement Legal Entity Id.
   * @nullable
   */
  declare salesAgreementLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLine?: SalesAgreementLines<T> | null;

  constructor(_entityApi: SalesAgreementLineNotesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAgreementLineNotesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>;
  attachmentDescription: DeserializedType<T, 'Edm.String'>;
  attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accessRestriction?: DocuRestriction | null;
  attachingUserId?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementLine?: SalesAgreementLinesType<T> | null;
}
