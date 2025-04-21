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
import type { VendCorrectionNotesApi } from './VendCorrectionNotesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "VendCorrectionNotes" of service "d365_metadata".
 */
export class VendCorrectionNotes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendCorrectionNotesType<T>
{
  /**
   * Technical entity name for VendCorrectionNotes.
   */
  static override _entityName = 'VendCorrectionNotes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendCorrectionNotes entity.
   */
  static _keys = ['dataAreaId', 'CorrectionNoteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Correction Note Id.
   */
  declare correctionNoteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Text.
   * @nullable
   */
  declare originalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Corrected Text.
   * @nullable
   */
  declare correctedText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendCorrectionNotesApi<T>) {
    super(_entityApi);
  }
}

export interface VendCorrectionNotesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  correctionNoteId: DeserializedType<T, 'Edm.String'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalText?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  correctedText?: DeserializedType<T, 'Edm.String'> | null;
}
