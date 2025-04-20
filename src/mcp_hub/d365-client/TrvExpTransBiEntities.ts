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
import type { TrvExpTransBiEntitiesApi } from './TrvExpTransBiEntitiesApi';
import { TrvAppStatus } from './TrvAppStatus';
import { TrvCostOwner } from './TrvCostOwner';
import { NoYes } from './NoYes';
import { TrvExpSplitLineType } from './TrvExpSplitLineType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TrvExpLineType } from './TrvExpLineType';
import { TrvExpEntryPoint } from './TrvExpEntryPoint';
import { TrvBillIssuedTo } from './TrvBillIssuedTo';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
import { TrvExpType } from './TrvExpType';

/**
 * This class represents the entity "TrvExpTransBiEntities" of service "d365_metadata".
 */
export class TrvExpTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpTransBiEntitiesType<T>
{
  /**
   * Technical entity name for TrvExpTransBiEntities.
   */
  static override _entityName = 'TrvExpTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpTransBiEntities entity.
   */
  static _keys = ['ExpTransNumber'];
  /**
   * Exp Trans Number.
   */
  declare expTransNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Ticket Number.
   * @nullable
   */
  declare ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reimburse Amt.
   */
  declare reimburseAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Per Diem Hotel Allowance.
   */
  declare perDiemHotelAllowance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Card Transaction Currency Amount.
   */
  declare creditCardTransactionCurrencyAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Transaction Currency.
   * @nullable
   */
  declare creditCardTransactionCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvAppStatus | null;
  /**
   * Address City.
   */
  declare addressCity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Zip Code.
   */
  declare addressZipCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pay Method.
   * @nullable
   */
  declare payMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Transfer Price.
   */
  declare intercompanyTransferPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Owner.
   * @nullable
   */
  declare costOwner?: TrvCostOwner | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Required.
   * @nullable
   */
  declare receiptRequired?: NoYes | null;
  /**
   * Mapped To Requisition Line.
   */
  declare mappedToRequisitionLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mileage To Address.
   * @nullable
   */
  declare mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduktion Dinner.
   */
  declare deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Parent Rec Id.
   */
  declare parentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exchange Code.
   * @nullable
   */
  declare exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipts Attached.
   * @nullable
   */
  declare receiptsAttached?: NoYes | null;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entertainment Location.
   * @nullable
   */
  declare entertainmentLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Split Line Type.
   * @nullable
   */
  declare splitLineType?: TrvExpSplitLineType | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accounting Currency Reconciled Amount.
   */
  declare accountingCurrencyReconciledAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Trv Locations.
   */
  declare trvLocations: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pbs Rec Id.
   */
  declare pbsRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apply Action.
   * @nullable
   */
  declare applyAction?: NoYes | null;
  /**
   * Tax Included.
   * @nullable
   */
  declare taxIncluded?: NoYes | null;
  /**
   * Km Own Car.
   */
  declare kmOwnCar: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Status Id.
   * @nullable
   */
  declare projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Account Type.
   * @nullable
   */
  declare postAccountType?: LedgerJournalAcType | null;
  /**
   * Cash Advance Rec Id.
   */
  declare cashAdvanceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Date To.
   */
  declare dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Original Receipts Recvd.
   * @nullable
   */
  declare originalReceiptsRecvd?: NoYes | null;
  /**
   * Cost Type.
   * @nullable
   */
  declare costType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ticket Used.
   * @nullable
   */
  declare ticketUsed?: NoYes | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Exp Table.
   */
  declare trvExpTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: TrvExpLineType | null;
  /**
   * Is Budget Check Pending.
   * @nullable
   */
  declare isBudgetCheckPending?: NoYes | null;
  /**
   * Number Of Passengers.
   */
  declare numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reason.
   * @nullable
   */
  declare reason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Point.
   * @nullable
   */
  declare entryPoint?: TrvExpEntryPoint | null;
  /**
   * Inter Company Le.
   * @nullable
   */
  declare interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Curr.
   */
  declare amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Itemization Group Id.
   * @nullable
   */
  declare expenseItemizationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Purpose.
   * @nullable
   */
  declare businessPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Km Price.
   */
  declare kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exp Number.
   * @nullable
   */
  declare expNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Not Approved Date.
   */
  declare notApprovedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merchant Id.
   * @nullable
   */
  declare merchantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Source Document Line.
   */
  declare originalSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vat Due Date W.
   */
  declare vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Transfer Currency.
   * @nullable
   */
  declare intercompanyTransferCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vehicle Type.
   * @nullable
   */
  declare vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Billed.
   */
  declare intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mobile Statement.
   * @nullable
   */
  declare mobileStatement?: NoYes | null;
  /**
   * Is Split.
   * @nullable
   */
  declare isSplit?: NoYes | null;
  /**
   * Deduktion Breakfest.
   */
  declare deduktionBreakfest: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Errors.
   * @nullable
   */
  declare postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduktion Lunch.
   */
  declare deduktionLunch: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bill Issued To.
   * @nullable
   */
  declare billIssuedTo?: TrvBillIssuedTo | null;
  /**
   * Invoice Amt.
   */
  declare invoiceAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ticket Class.
   * @nullable
   */
  declare ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduktion.
   */
  declare deduktion: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approved Date.
   */
  declare approvedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Transaction Amount.
   */
  declare netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Policy Status.
   * @nullable
   */
  declare projPolicyStatus?: ProjExpPolicyStatus | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Intercompany Sales Currency.
   * @nullable
   */
  declare intercompanySalesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Activity Number.
   * @nullable
   */
  declare projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Category.
   * @nullable
   */
  declare interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Category Rec Id.
   */
  declare subCategoryRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mileage From Address.
   * @nullable
   */
  declare mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Over Budget Amount.
   */
  declare accountingCurrencyOverBudgetAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Date From.
   */
  declare dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Pre Authorized.
   * @nullable
   */
  declare isPreAuthorized?: NoYes | null;
  /**
   * Proj Policy Text.
   * @nullable
   */
  declare projPolicyText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corrected Tax Amount Mst.
   */
  declare correctedTaxAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Corrected Tax Amount.
   */
  declare correctedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exp Type.
   * @nullable
   */
  declare expType?: TrvExpType | null;
  /**
   * Pbs Statement.
   * @nullable
   */
  declare pbsStatement?: NoYes | null;
  /**
   * Intercompany Sales Price.
   */
  declare intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Level Posting.
   * @nullable
   */
  declare lineLevelPosting?: NoYes | null;
  /**
   * Post Account.
   * @nullable
   */
  declare postAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Row Num.
   */
  declare transRowNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrvExpTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  expTransNumber: DeserializedType<T, 'Edm.String'>;
  ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  reimburseAmt: DeserializedType<T, 'Edm.Decimal'>;
  perDiemHotelAllowance: DeserializedType<T, 'Edm.Decimal'>;
  creditCardTransactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  creditCardTransactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  approvalStatus?: TrvAppStatus | null;
  addressCity: DeserializedType<T, 'Edm.Int64'>;
  addressZipCode: DeserializedType<T, 'Edm.Int64'>;
  payMethod?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyTransferPrice: DeserializedType<T, 'Edm.Decimal'>;
  costOwner?: TrvCostOwner | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  receiptRequired?: NoYes | null;
  mappedToRequisitionLine: DeserializedType<T, 'Edm.Int64'>;
  mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  parentRecId: DeserializedType<T, 'Edm.Int64'>;
  exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  receiptsAttached?: NoYes | null;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  entertainmentLocation?: DeserializedType<T, 'Edm.String'> | null;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  splitLineType?: TrvExpSplitLineType | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountingCurrencyReconciledAmount: DeserializedType<T, 'Edm.Decimal'>;
  trvLocations: DeserializedType<T, 'Edm.Int64'>;
  pbsRecId: DeserializedType<T, 'Edm.Int64'>;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  applyAction?: NoYes | null;
  taxIncluded?: NoYes | null;
  kmOwnCar: DeserializedType<T, 'Edm.Decimal'>;
  projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  postAccountType?: LedgerJournalAcType | null;
  cashAdvanceRecId: DeserializedType<T, 'Edm.Int64'>;
  dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  originalReceiptsRecvd?: NoYes | null;
  costType?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  ticketUsed?: NoYes | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  trvExpTable: DeserializedType<T, 'Edm.Int64'>;
  lineType?: TrvExpLineType | null;
  isBudgetCheckPending?: NoYes | null;
  numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  entryPoint?: TrvExpEntryPoint | null;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  expenseItemizationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  businessPurpose?: DeserializedType<T, 'Edm.String'> | null;
  kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  expNumber?: DeserializedType<T, 'Edm.String'> | null;
  notApprovedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  merchantId?: DeserializedType<T, 'Edm.String'> | null;
  originalSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyTransferCurrency?: DeserializedType<T, 'Edm.String'> | null;
  vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  mobileStatement?: NoYes | null;
  isSplit?: NoYes | null;
  deduktionBreakfest: DeserializedType<T, 'Edm.Int32'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  deduktionLunch: DeserializedType<T, 'Edm.Int32'>;
  billIssuedTo?: TrvBillIssuedTo | null;
  invoiceAmt: DeserializedType<T, 'Edm.Decimal'>;
  ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  deduktion: DeserializedType<T, 'Edm.Decimal'>;
  approvedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  projPolicyStatus?: ProjExpPolicyStatus | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  intercompanySalesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
  subCategoryRecId: DeserializedType<T, 'Edm.Int64'>;
  mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyOverBudgetAmount: DeserializedType<T, 'Edm.Decimal'>;
  dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPreAuthorized?: NoYes | null;
  projPolicyText?: DeserializedType<T, 'Edm.String'> | null;
  correctedTaxAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  correctedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  expType?: TrvExpType | null;
  pbsStatement?: NoYes | null;
  intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  lineLevelPosting?: NoYes | null;
  postAccount?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  transRowNum: DeserializedType<T, 'Edm.Int32'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
}
