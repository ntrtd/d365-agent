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
import type { VendSettlementBiEntitiesApi } from './VendSettlementBiEntitiesApi';
import { NoYes } from './NoYes';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "VendSettlementBiEntities" of service "d365_metadata".
 */
export class VendSettlementBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendSettlementBiEntitiesType<T>
{
  /**
   * Technical entity name for VendSettlementBiEntities.
   */
  static override _entityName = 'VendSettlementBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendSettlementBiEntities entity.
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
   * Settle Tax 1099 State Amount.
   */
  declare settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Tax Agent Amount Ru.
   */
  declare vatTaxAgentAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Cash Disc Date.
   */
  declare vendCashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settle Tax 1099 Amount.
   */
  declare settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reverse Trans Ru.
   * @nullable
   */
  declare reverseTransRu?: NoYes | null;
  /**
   * Fine Amount Br.
   */
  declare fineAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Date Ru.
   */
  declare reportingDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Penny Diff.
   */
  declare pennyDiff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Utilized Cash Disc.
   */
  declare utilizedCashDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Amount Cur.
   */
  declare settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Rec Id.
   */
  declare transRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Third Party Bank Account Id.
   * @nullable
   */
  declare thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Voucher Ru.
   * @nullable
   */
  declare taxVoucherRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Code Br.
   * @nullable
   */
  declare interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales List.
   * @nullable
   */
  declare euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Amount Reporting.
   */
  declare settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount Ledger Dimension Values Json.
   * @nullable
   */
  declare cashDiscountLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Settle Amount Mst.
   */
  declare settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Payment Group.
   * @nullable
   */
  declare vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Adjustment.
   */
  declare exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Adjustment Reporting.
   */
  declare exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Recid.
   */
  declare offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settlement Voucher.
   * @nullable
   */
  declare settlementVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address.
   */
  declare remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fine Code Br.
   * @nullable
   */
  declare fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Trans Voucher.
   * @nullable
   */
  declare offsetTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Num.
   * @nullable
   */
  declare offsetAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LedgerTransType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reversed Rec Id Ru.
   */
  declare reversedRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Company.
   * @nullable
   */
  declare transCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status Voucher.
   * @nullable
   */
  declare statusVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Open.
   */
  declare transOpen: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Can Be Reversed.
   * @nullable
   */
  declare canBeReversed?: NoYes | null;
  /**
   * Settlement Group.
   */
  declare settlementGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Interest Amount Br.
   */
  declare interestAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Interest Date Dummy.
   */
  declare lastInterestDateDummy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Closed Date.
   */
  declare closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: VendSettlementBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendSettlementBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  vatTaxAgentAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  vendCashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  reverseTransRu?: NoYes | null;
  fineAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  reportingDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pennyDiff: DeserializedType<T, 'Edm.Decimal'>;
  utilizedCashDisc: DeserializedType<T, 'Edm.Decimal'>;
  settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  transRecId: DeserializedType<T, 'Edm.Int64'>;
  thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  taxVoucherRu?: DeserializedType<T, 'Edm.String'> | null;
  interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscountLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
  exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  settlementVoucher?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  offsetTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  transType?: LedgerTransType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  reversedRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  transCompany?: DeserializedType<T, 'Edm.String'> | null;
  statusVoucher?: DeserializedType<T, 'Edm.String'> | null;
  transOpen: DeserializedType<T, 'Edm.Int64'>;
  canBeReversed?: NoYes | null;
  settlementGroup: DeserializedType<T, 'Edm.Int64'>;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  interestAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  lastInterestDateDummy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
