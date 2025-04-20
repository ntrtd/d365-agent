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
import type { PurchaseAgreementLineNotesApi } from './PurchaseAgreementLineNotesApi';
import { DocuRestriction } from './DocuRestriction';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  PurchaseAgreementLinesV2,
  PurchaseAgreementLinesV2Type
} from './PurchaseAgreementLinesV2';

/**
 * This class represents the entity "PurchaseAgreementLineNotes" of service "d365_metadata".
 */
export class PurchaseAgreementLineNotes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseAgreementLineNotesType<T>
{
  /**
   * Technical entity name for PurchaseAgreementLineNotes.
   */
  static override _entityName = 'PurchaseAgreementLineNotes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseAgreementLineNotes entity.
   */
  static _keys = [
    'dataAreaId',
    'PurchaseAgreementId',
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
   * Purchase Agreement Id.
   */
  declare purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
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
   * Purchase Agreement Legal Entity Id.
   * @nullable
   */
  declare purchaseAgreementLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine?: PurchaseAgreementLines<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseAgreementLinesV2} entity.
   */
  declare purchaseAgreementLineV2?: PurchaseAgreementLinesV2<T> | null;

  constructor(_entityApi: PurchaseAgreementLineNotesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseAgreementLineNotesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>;
  attachmentDescription: DeserializedType<T, 'Edm.String'>;
  attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accessRestriction?: DocuRestriction | null;
  attachingUserId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementLine?: PurchaseAgreementLinesType<T> | null;
  purchaseAgreementLineV2?: PurchaseAgreementLinesV2Type<T> | null;
}
