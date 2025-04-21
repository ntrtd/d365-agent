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
import type { TransactionTenderDeclarationTransBIsApi } from './TransactionTenderDeclarationTransBIsApi';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';

/**
 * This class represents the entity "TransactionTenderDeclarationTransBIs" of service "d365_metadata".
 */
export class TransactionTenderDeclarationTransBIs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionTenderDeclarationTransBIsType<T>
{
  /**
   * Technical entity name for TransactionTenderDeclarationTransBIs.
   */
  static override _entityName = 'TransactionTenderDeclarationTransBIs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionTenderDeclarationTransBIs entity.
   */
  static _keys = [
    'dataAreaId',
    'store',
    'terminal',
    'transactionId',
    'lineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pos Currency.
   * @nullable
   */
  declare posCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Id.
   * @nullable
   */
  declare cardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate Mst.
   */
  declare exchRateMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tender Type.
   * @nullable
   */
  declare tenderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionTenderDeclarationTransBIsApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionTenderDeclarationTransBIsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  replicated?: NoYes | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  posCurrency?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  cardId?: DeserializedType<T, 'Edm.String'> | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  exchRateMst: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: RetailEntryStatus | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tenderType?: DeserializedType<T, 'Edm.String'> | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  shift?: DeserializedType<T, 'Edm.String'> | null;
}
