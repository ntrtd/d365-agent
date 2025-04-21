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
import type { RetailTransactionInfoCodeLinesApi } from './RetailTransactionInfoCodeLinesApi';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailInfocodeInputType } from './RetailInfocodeInputType';

/**
 * This class represents the entity "RetailTransactionInfoCodeLines" of service "d365_metadata".
 */
export class RetailTransactionInfoCodeLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionInfoCodeLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionInfoCodeLines.
   */
  static override _entityName = 'RetailTransactionInfoCodeLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionInfoCodeLines entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionType',
    'TransactionNumber',
    'LineNumber',
    'InfoCodeId',
    'OperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: RetailInfocodeTransType | null;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Info Code Id.
   */
  declare infoCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fiscal Transaction Parent Guid.
   */
  declare fiscalTransactionParentGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Item Tender.
   * @nullable
   */
  declare itemTender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Info Amount.
   */
  declare infoAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Information.
   * @nullable
   */
  declare information?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Code.
   * @nullable
   */
  declare sourceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Code Three.
   * @nullable
   */
  declare sourceCodeThree?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Code Two.
   * @nullable
   */
  declare sourceCodeTwo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Line Number.
   */
  declare parentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Input Type.
   * @nullable
   */
  declare inputType?: RetailInfocodeInputType | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Info Code Id.
   * @nullable
   */
  declare subInfoCodeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionInfoCodeLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionInfoCodeLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionType?: RetailInfocodeTransType | null;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  infoCodeId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fiscalTransactionParentGuid: DeserializedType<T, 'Edm.Guid'>;
  itemTender?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  infoAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: RetailEntryStatus | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  information?: DeserializedType<T, 'Edm.String'> | null;
  sourceCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceCodeThree?: DeserializedType<T, 'Edm.String'> | null;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceCodeTwo?: DeserializedType<T, 'Edm.String'> | null;
  parentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  inputType?: RetailInfocodeInputType | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  subInfoCodeId?: DeserializedType<T, 'Edm.String'> | null;
}
