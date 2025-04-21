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
import type { RetailStatementTransBiEntitiesApi } from './RetailStatementTransBiEntitiesApi';

/**
 * This class represents the entity "RetailStatementTransBIEntities" of service "d365_metadata".
 */
export class RetailStatementTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStatementTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailStatementTransBiEntities.
   */
  static override _entityName = 'RetailStatementTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStatementTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'statementId', 'lineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Store Exch Rate.
   */
  declare storeExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counted Amount Mst.
   */
  declare countedAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Store Id.
   * @nullable
   */
  declare storeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Shift Id.
   * @nullable
   */
  declare uniqueShiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Difference Amount Mst.
   */
  declare differenceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Amount Store.
   */
  declare transAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Difference Amount Store.
   */
  declare differenceAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Safe Amount.
   */
  declare safeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Safe Amount Store.
   */
  declare safeAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Banked Amount.
   */
  declare bankedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Safe Amount Mst.
   */
  declare safeAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Banked Amount Store.
   */
  declare bankedAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terminal Id.
   * @nullable
   */
  declare terminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Later Returned Amount Cur Ru.
   */
  declare cashLaterReturnedAmountCurRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Fee Amount.
   */
  declare cardFeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counted Amount Store.
   */
  declare countedAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Banked Amount Mst.
   */
  declare bankedAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Amount.
   */
  declare transAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counted Amount.
   */
  declare countedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Change Tender.
   */
  declare changeTender: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Invoice Amount.
   */
  declare orderInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Invoice Amount Mst.
   */
  declare orderInvoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Type Id.
   * @nullable
   */
  declare tenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Difference Amount.
   */
  declare differenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Amount In Mst.
   */
  declare transAmountInMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Added To Drawer.
   */
  declare addedToDrawer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Staff Id.
   * @nullable
   */
  declare staffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Removed From Drawer.
   */
  declare removedFromDrawer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replication Counter.
   */
  declare replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * In Drawer At End Of Day.
   */
  declare inDrawerAtEndOfDay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Real Exch Rate.
   */
  declare realExchRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailStatementTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStatementTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  storeExchRate: DeserializedType<T, 'Edm.Decimal'>;
  countedAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  storeId?: DeserializedType<T, 'Edm.String'> | null;
  uniqueShiftId?: DeserializedType<T, 'Edm.String'> | null;
  differenceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  differenceAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  safeAmount: DeserializedType<T, 'Edm.Decimal'>;
  safeAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  bankedAmount: DeserializedType<T, 'Edm.Decimal'>;
  safeAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  bankedAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  terminalId?: DeserializedType<T, 'Edm.String'> | null;
  cashLaterReturnedAmountCurRu: DeserializedType<T, 'Edm.Decimal'>;
  cardFeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  countedAmountStore: DeserializedType<T, 'Edm.Decimal'>;
  bankedAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  transAmount: DeserializedType<T, 'Edm.Decimal'>;
  countedAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  changeTender: DeserializedType<T, 'Edm.Decimal'>;
  orderInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  orderInvoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  tenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  differenceAmount: DeserializedType<T, 'Edm.Decimal'>;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  transAmountInMst: DeserializedType<T, 'Edm.Decimal'>;
  addedToDrawer: DeserializedType<T, 'Edm.Decimal'>;
  staffId?: DeserializedType<T, 'Edm.String'> | null;
  removedFromDrawer: DeserializedType<T, 'Edm.Decimal'>;
  replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  inDrawerAtEndOfDay: DeserializedType<T, 'Edm.Decimal'>;
  realExchRate: DeserializedType<T, 'Edm.Decimal'>;
}
