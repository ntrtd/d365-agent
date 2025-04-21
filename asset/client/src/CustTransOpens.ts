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
import type { CustTransOpensApi } from './CustTransOpensApi';
import { UseCashDisc } from './UseCashDisc';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { NoYes } from './NoYes';
import { PaymSchedTaxDistribution } from './PaymSchedTaxDistribution';
import { CustTransactions, CustTransactionsType } from './CustTransactions';

/**
 * This class represents the entity "CustTransOpens" of service "d365_metadata".
 */
export class CustTransOpens<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustTransOpensType<T>
{
  /**
   * Technical entity name for CustTransOpens.
   */
  static override _entityName = 'CustTransOpens';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustTransOpens entity.
   */
  static _keys = ['dataAreaId', 'SysRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Id.
   */
  declare sysRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tds Amount In.
   */
  declare tdsAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Cash Disc.
   * @nullable
   */
  declare useCashDisc?: UseCashDisc | null;
  /**
   * Settled Total Amount In.
   */
  declare settledTotalAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settled Line Percent In.
   */
  declare settledLinePercentIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Amount Origin In.
   */
  declare taxWithholdAmountOriginIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Collection Letter Code.
   * @nullable
   */
  declare collectionLetterCode?: CustCollectionLetterCode | null;
  /**
   * Last Interest Date.
   */
  declare lastInterestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exch Adj Unrealized.
   */
  declare exchAdjUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Disc Date.
   */
  declare cashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fine Amount Paym Cur Br.
   */
  declare fineAmountPaymCurBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Possible Cash Disc.
   */
  declare possibleCashDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fine Amount Br.
   */
  declare fineAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Collection Letter.
   * @nullable
   */
  declare collectionLetter?: NoYes | null;
  /**
   * Interest Amount Br.
   */
  declare interestAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cov Status.
   */
  declare covStatus: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Disc Notice Deadline.
   */
  declare bankDiscNoticeDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settlement Priority Cash Disc Date.
   */
  declare settlementPriorityCashDiscDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exch Adj Unrealized Reporting.
   */
  declare exchAdjUnrealizedReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Interest Code Br.
   * @nullable
   */
  declare interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fine Code Br.
   * @nullable
   */
  declare fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Amount Paym Cur Br.
   */
  declare interestAmountPaymCurBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tcs Amount In.
   */
  declare tcsAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Distribution.
   * @nullable
   */
  declare taxDistribution?: PaymSchedTaxDistribution | null;
  /**
   * One-to-one navigation property to the {@link CustTransactions} entity.
   */
  declare custTransaction?: CustTransactions<T> | null;

  constructor(_entityApi: CustTransOpensApi<T>) {
    super(_entityApi);
  }
}

export interface CustTransOpensType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sysRecId: DeserializedType<T, 'Edm.Int64'>;
  tdsAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  useCashDisc?: UseCashDisc | null;
  settledTotalAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  settledLinePercentIn: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdAmountOriginIn: DeserializedType<T, 'Edm.Decimal'>;
  collectionLetterCode?: CustCollectionLetterCode | null;
  lastInterestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchAdjUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  fineAmountPaymCurBr: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  possibleCashDisc: DeserializedType<T, 'Edm.Decimal'>;
  fineAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  collectionLetter?: NoYes | null;
  interestAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  covStatus: DeserializedType<T, 'Edm.Int32'>;
  bankDiscNoticeDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  settlementPriorityCashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchAdjUnrealizedReporting: DeserializedType<T, 'Edm.Decimal'>;
  interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  interestAmountPaymCurBr: DeserializedType<T, 'Edm.Decimal'>;
  tcsAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  taxDistribution?: PaymSchedTaxDistribution | null;
  custTransaction?: CustTransactionsType<T> | null;
}
