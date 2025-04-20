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
import type { CustIntentLettersApi } from './CustIntentLettersApi';
import { NoYes } from './NoYes';
import { IntentLetterTypeIt } from './IntentLetterTypeIt';
import { IntentLetterStatusIt } from './IntentLetterStatusIt';

/**
 * This class represents the entity "CustIntentLetters" of service "d365_metadata".
 */
export class CustIntentLetters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustIntentLettersType<T>
{
  /**
   * Technical entity name for CustIntentLetters.
   */
  static override _entityName = 'CustIntentLetters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustIntentLetters entity.
   */
  static _keys = ['dataAreaId', 'InternalLetterId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Letter Id.
   */
  declare internalLetterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Intent Letter Year.
   */
  declare intentLetterYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Closed Value Calculated.
   * @nullable
   */
  declare lastClosedValueCalculated?: NoYes | null;
  /**
   * Protocol.
   * @nullable
   */
  declare protocol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Letter.
   */
  declare dateLetter: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intent Letter Amount Mst.
   */
  declare intentLetterAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Closed Remaining Amount.
   */
  declare lastClosedRemainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intent Letter Type.
   * @nullable
   */
  declare intentLetterType?: IntentLetterTypeIt | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Letter Id.
   * @nullable
   */
  declare letterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Closed Sales Amount.
   */
  declare lastClosedSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Register.
   */
  declare dateRegister: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: IntentLetterStatusIt | null;
  /**
   * Closed Date.
   */
  declare closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: CustIntentLettersApi<T>) {
    super(_entityApi);
  }
}

export interface CustIntentLettersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  internalLetterId: DeserializedType<T, 'Edm.String'>;
  intentLetterYear: DeserializedType<T, 'Edm.Int32'>;
  lastClosedValueCalculated?: NoYes | null;
  protocol?: DeserializedType<T, 'Edm.String'> | null;
  dateLetter: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intentLetterAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  lastClosedRemainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  intentLetterType?: IntentLetterTypeIt | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  letterId?: DeserializedType<T, 'Edm.String'> | null;
  lastClosedSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  dateRegister: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: IntentLetterStatusIt | null;
  closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
