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
import type { CustSettlementBiEntitiesApi } from './CustSettlementBiEntitiesApi';
import { NoYes } from './NoYes';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "CustSettlementBiEntities" of service "d365_metadata".
 */
export class CustSettlementBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustSettlementBiEntitiesType<T>
{
  /**
   * Technical entity name for CustSettlementBiEntities.
   */
  static override _entityName = 'CustSettlementBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustSettlementBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Eu Sales List.
   * @nullable
   */
  declare euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reverse Trans Ru.
   * @nullable
   */
  declare reverseTransRu?: NoYes | null;
  /**
   * Penny Diff.
   */
  declare pennyDiff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Company.
   * @nullable
   */
  declare transCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Amount Mst.
   */
  declare settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Tax 1099 State Amount.
   */
  declare settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Account Num.
   * @nullable
   */
  declare offsetAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Interest Date.
   */
  declare lastInterestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reversed Rec Id Ru.
   */
  declare reversedRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Closed Date.
   */
  declare closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settle Tax 1099 Amount.
   */
  declare settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fine Amount Br.
   */
  declare fineAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Can Be Reversed.
   * @nullable
   */
  declare canBeReversed?: NoYes | null;
  /**
   * Interest Amount Br.
   */
  declare interestAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Adjustment Reporting.
   */
  declare exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Date Ru.
   */
  declare reportingDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Utilized Cash Disc.
   */
  declare utilizedCashDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settlement Group.
   */
  declare settlementGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Rec Id.
   */
  declare transRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Open.
   */
  declare transOpen: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LedgerTransType | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Trans Voucher.
   * @nullable
   */
  declare offsetTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Adjustment.
   */
  declare exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Settle Amount Cur.
   */
  declare settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Recid.
   */
  declare offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settle Amount Reporting.
   */
  declare settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Cash Disc Date.
   */
  declare custCashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Voucher Ru.
   * @nullable
   */
  declare taxVoucherRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Voucher.
   * @nullable
   */
  declare settlementVoucher?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustSettlementBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustSettlementBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  reverseTransRu?: NoYes | null;
  pennyDiff: DeserializedType<T, 'Edm.Decimal'>;
  transCompany?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  offsetAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastInterestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reversedRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  fineAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  canBeReversed?: NoYes | null;
  interestAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  reportingDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  utilizedCashDisc: DeserializedType<T, 'Edm.Decimal'>;
  settlementGroup: DeserializedType<T, 'Edm.Int64'>;
  transRecId: DeserializedType<T, 'Edm.Int64'>;
  transOpen: DeserializedType<T, 'Edm.Int64'>;
  transType?: LedgerTransType | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  custCashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxVoucherRu?: DeserializedType<T, 'Edm.String'> | null;
  settlementVoucher?: DeserializedType<T, 'Edm.String'> | null;
}
