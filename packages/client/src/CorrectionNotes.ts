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
import type { CorrectionNotesApi } from './CorrectionNotesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CorrectionNotes" of service "d365_metadata".
 */
export class CorrectionNotes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CorrectionNotesType<T>
{
  /**
   * Technical entity name for CorrectionNotes.
   */
  static override _entityName = 'CorrectionNotes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CorrectionNotes entity.
   */
  static _keys = [
    'dataAreaId',
    'CorrectionNote',
    'Invoice',
    'InvoiceAccount',
    'Date',
    'DocumentDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Correction Note.
   */
  declare correctionNote: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice.
   */
  declare invoice: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Account.
   */
  declare invoiceAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Text.
   * @nullable
   */
  declare originalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corrected Text.
   * @nullable
   */
  declare correctedText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;

  constructor(_entityApi: CorrectionNotesApi<T>) {
    super(_entityApi);
  }
}

export interface CorrectionNotesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  correctionNote: DeserializedType<T, 'Edm.String'>;
  invoice: DeserializedType<T, 'Edm.String'>;
  invoiceAccount: DeserializedType<T, 'Edm.String'>;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalText?: DeserializedType<T, 'Edm.String'> | null;
  correctedText?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
}
