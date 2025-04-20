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
import type { RetailTransactionBankedTenderTransBiEntitiesApi } from './RetailTransactionBankedTenderTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailBankedStatusTypeBase } from './RetailBankedStatusTypeBase';

/**
 * This class represents the entity "RetailTransactionBankedTenderTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionBankedTenderTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionBankedTenderTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionBankedTenderTransBiEntities.
   */
  static override _entityName = 'RetailTransactionBankedTenderTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionBankedTenderTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'Store',
    'Terminal',
    'TransactionId',
    'LineNum'
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
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exch Rate Mst.
   */
  declare exchRateMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Bag No.
   * @nullable
   */
  declare bankBagNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Mstpos.
   */
  declare amountMstpos: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tender Type.
   * @nullable
   */
  declare tenderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Change Line.
   * @nullable
   */
  declare changeLine?: NoYes | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Num.
   */
  declare messageNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cardor Account.
   * @nullable
   */
  declare cardorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Cur Pos.
   */
  declare amountCurPos: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status Type.
   * @nullable
   */
  declare statusType?: RetailBankedStatusTypeBase | null;
  /**
   * Managers Key Live.
   * @nullable
   */
  declare managersKeyLive?: NoYes | null;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Tendered Pos.
   */
  declare amountTenderedPos: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionBankedTenderTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionBankedTenderTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchRateMst: DeserializedType<T, 'Edm.Decimal'>;
  bankBagNo?: DeserializedType<T, 'Edm.String'> | null;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountMstpos: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tenderType?: DeserializedType<T, 'Edm.String'> | null;
  replicated?: NoYes | null;
  transactionStatus?: RetailEntryStatus | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  changeLine?: NoYes | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  messageNum: DeserializedType<T, 'Edm.Int32'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  cardorAccount?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  amountCurPos: DeserializedType<T, 'Edm.Decimal'>;
  statusType?: RetailBankedStatusTypeBase | null;
  managersKeyLive?: NoYes | null;
  counter: DeserializedType<T, 'Edm.Decimal'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  amountTenderedPos: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
}
