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
import type { IntentLettersApi } from './IntentLettersApi';
import { IntentLetterTypeIt } from './IntentLetterTypeIt';
import { IntentLetterStatusIt } from './IntentLetterStatusIt';
import { IntentLetterPurchaseTypeIt } from './IntentLetterPurchaseTypeIt';

/**
 * This class represents the entity "IntentLetters" of service "d365_metadata".
 */
export class IntentLetters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntentLettersType<T>
{
  /**
   * Technical entity name for IntentLetters.
   */
  static override _entityName = 'IntentLetters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntentLetters entity.
   */
  static _keys = ['dataAreaId', 'IntentLetterId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Intent Letter Id.
   */
  declare intentLetterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Intent Letter Year.
   */
  declare intentLetterYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Protocol.
   * @nullable
   */
  declare protocol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Notes.
   * @nullable
   */
  declare intentLetterNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closing Notes.
   * @nullable
   */
  declare closingNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Name.
   * @nullable
   */
  declare vendName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Amount Mst.
   */
  declare intentLetterAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intent Letter Date.
   */
  declare intentLetterDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intent Letter Type.
   * @nullable
   */
  declare intentLetterType?: IntentLetterTypeIt | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: IntentLetterStatusIt | null;
  /**
   * Closed Date.
   */
  declare closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Type.
   * @nullable
   */
  declare purchaseType?: IntentLetterPurchaseTypeIt | null;
  /**
   * Report Id.
   * @nullable
   */
  declare reportId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntentLettersApi<T>) {
    super(_entityApi);
  }
}

export interface IntentLettersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  intentLetterId: DeserializedType<T, 'Edm.String'>;
  intentLetterYear: DeserializedType<T, 'Edm.Int32'>;
  protocol?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterNotes?: DeserializedType<T, 'Edm.String'> | null;
  closingNotes?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendName?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  intentLetterDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intentLetterType?: IntentLetterTypeIt | null;
  status?: IntentLetterStatusIt | null;
  closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseType?: IntentLetterPurchaseTypeIt | null;
  reportId?: DeserializedType<T, 'Edm.String'> | null;
}
