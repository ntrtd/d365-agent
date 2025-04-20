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
import type { ExpMobileLineApprovalsApi } from './ExpMobileLineApprovalsApi';
import { TrvAppStatus } from './TrvAppStatus';
import { NoYes } from './NoYes';
import { TrvCostOwner } from './TrvCostOwner';
import { TrvExpSplitLineType } from './TrvExpSplitLineType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TrvAirlineServiceClassEnum } from './TrvAirlineServiceClassEnum';
import { TrvExpLineType } from './TrvExpLineType';
import { TrvExpEntryPoint } from './TrvExpEntryPoint';
import { Timezone } from './Timezone';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';
import { TrvBillIssuedTo } from './TrvBillIssuedTo';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
import { TrvExpType } from './TrvExpType';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ExpMobileLineApprovals" of service "d365_metadata".
 */
export class ExpMobileLineApprovals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileLineApprovalsType<T>
{
  /**
   * Technical entity name for ExpMobileLineApprovals.
   */
  static override _entityName = 'ExpMobileLineApprovals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileLineApprovals entity.
   */
  static _keys = ['ExpTransNumber', 'ReferenceDataAreaId', 'WorkItemRecId'];
  /**
   * Exp Trans Number.
   */
  declare expTransNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Data Area Id.
   */
  declare referenceDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
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
   * Domestic Indicator.
   * @nullable
   */
  declare domesticIndicator?: NoYes | null;
  /**
   * Ticket Issue Date.
   */
  declare ticketIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Method.
   * @nullable
   */
  declare payMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creating User.
   * @nullable
   */
  declare creatingUser?: DeserializedType<T, 'Edm.String'> | null;
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
   * Address Zip Code Fk Zip Code.
   * @nullable
   */
  declare addressZipCodeFkZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity 1 Data Area.
   * @nullable
   */
  declare legalEntity1DataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Required.
   * @nullable
   */
  declare receiptRequired?: NoYes | null;
  /**
   * Mileage To Address.
   * @nullable
   */
  declare mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Party Number.
   * @nullable
   */
  declare legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduktion Dinner.
   */
  declare deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Room Nights.
   */
  declare totalRoomNights: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address City Name.
   * @nullable
   */
  declare addressCityName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Legal Entity 1 Party Number.
   * @nullable
   */
  declare legalEntity1PartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entertainment Location.
   * @nullable
   */
  declare entertainmentLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Exp Table Rec Id Exp Number.
   * @nullable
   */
  declare trvExpTableRecIdExpNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Locations Country Region Id.
   * @nullable
   */
  declare trvLocationsCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Split Line Type.
   * @nullable
   */
  declare splitLineType?: TrvExpSplitLineType | null;
  /**
   * Legal Entity Data Area.
   * @nullable
   */
  declare legalEntityDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Category Cost Type.
   * @nullable
   */
  declare subCategoryCostType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Currency Reconciled Amount.
   */
  declare accountingCurrencyReconciledAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
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
   * Check Out Date.
   */
  declare checkOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date To.
   */
  declare dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Check Out Location.
   * @nullable
   */
  declare checkOutLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Date.
   */
  declare returnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Trv Locations State Id.
   * @nullable
   */
  declare trvLocationsStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Locations Location.
   * @nullable
   */
  declare trvLocationsLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attached Guest Details.
   * @nullable
   */
  declare attachedGuestDetails?: DeserializedType<T, 'Edm.String'> | null;
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
   * Service Class.
   * @nullable
   */
  declare serviceClass?: TrvAirlineServiceClassEnum | null;
  /**
   * Workflow Ref Table Name.
   * @nullable
   */
  declare workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Policy Violation Error Message.
   * @nullable
   */
  declare policyViolationErrorMessage?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Of Passengers.
   */
  declare numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Policy Violation Count.
   */
  declare policyViolationCount: DeserializedType<T, 'Edm.Int64'>;
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
   * Trv Shared Sub Category Name.
   * @nullable
   */
  declare trvSharedSubCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Curr.
   */
  declare amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inter Company Le.
   * @nullable
   */
  declare interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
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
   * Travel Agency Invoice Number.
   * @nullable
   */
  declare travelAgencyInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correlation Id.
   */
  declare correlationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Exp Number.
   * @nullable
   */
  declare expNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Not Approved Date.
   */
  declare notApprovedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Room Rent.
   */
  declare totalRoomRent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Perdiem Timezone.
   * @nullable
   */
  declare perdiemTimezone?: Timezone | null;
  /**
   * Merchant Id.
   * @nullable
   */
  declare merchantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned To.
   * @nullable
   */
  declare assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Due Date W.
   */
  declare vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itemized Line Exp Trans Number.
   * @nullable
   */
  declare itemizedLineExpTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Justifying Worker.
   */
  declare justifyingWorker: DeserializedType<T, 'Edm.Int64'>;
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
   * Delegate User Id.
   * @nullable
   */
  declare delegateUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Detach.
   */
  declare detach: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vehicle Class.
   * @nullable
   */
  declare vehicleClass?: TrvCarRentalVehicleClassEnum | null;
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
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Submitter Justification.
   * @nullable
   */
  declare submitterJustification?: DeserializedType<T, 'Edm.String'> | null;
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
   * Cash Advance Cash Advance Number.
   * @nullable
   */
  declare cashAdvanceCashAdvanceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ticket Class.
   * @nullable
   */
  declare ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Car Rental Check Out Date.
   */
  declare carRentalCheckOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Travel Agency Name.
   * @nullable
   */
  declare travelAgencyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Violations Level.
   */
  declare policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Approver Justification.
   * @nullable
   */
  declare approverJustification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduktion.
   */
  declare deduktion: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Workflow Comment.
   * @nullable
   */
  declare workflowComment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Submitter Justification Required.
   */
  declare isSubmitterJustificationRequired: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Attached Receipt Id.
   * @nullable
   */
  declare attachedReceiptId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Trv Hcm Worker Personnel Number.
   * @nullable
   */
  declare trvHcmWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inter Company Category.
   * @nullable
   */
  declare interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
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
   * Check In Date.
   */
  declare checkInDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Action.
   * @nullable
   */
  declare action?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Account.
   * @nullable
   */
  declare postAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Row Num.
   */
  declare transRowNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ExpMobileLineApprovalsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileLineApprovalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  expTransNumber: DeserializedType<T, 'Edm.String'>;
  referenceDataAreaId: DeserializedType<T, 'Edm.String'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  ticketNumber?: DeserializedType<T, 'Edm.String'> | null;
  reimburseAmt: DeserializedType<T, 'Edm.Decimal'>;
  perDiemHotelAllowance: DeserializedType<T, 'Edm.Decimal'>;
  creditCardTransactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  creditCardTransactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  approvalStatus?: TrvAppStatus | null;
  domesticIndicator?: NoYes | null;
  ticketIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payMethod?: DeserializedType<T, 'Edm.String'> | null;
  creatingUser?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyTransferPrice: DeserializedType<T, 'Edm.Decimal'>;
  costOwner?: TrvCostOwner | null;
  addressZipCodeFkZipCode?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity1DataArea?: DeserializedType<T, 'Edm.String'> | null;
  receiptRequired?: NoYes | null;
  mileageToAddress?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  deduktionDinner: DeserializedType<T, 'Edm.Int32'>;
  totalRoomNights: DeserializedType<T, 'Edm.Int32'>;
  addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  receiptsAttached?: NoYes | null;
  legalEntity1PartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  entertainmentLocation?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  trvExpTableRecIdExpNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  trvLocationsCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  splitLineType?: TrvExpSplitLineType | null;
  legalEntityDataArea?: DeserializedType<T, 'Edm.String'> | null;
  subCategoryCostType?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyReconciledAmount: DeserializedType<T, 'Edm.Decimal'>;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  applyAction?: NoYes | null;
  taxIncluded?: NoYes | null;
  kmOwnCar: DeserializedType<T, 'Edm.Decimal'>;
  projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  postAccountType?: LedgerJournalAcType | null;
  checkOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  checkOutLocation?: DeserializedType<T, 'Edm.String'> | null;
  returnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalReceiptsRecvd?: NoYes | null;
  costType?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  trvLocationsStateId?: DeserializedType<T, 'Edm.String'> | null;
  trvLocationsLocation?: DeserializedType<T, 'Edm.String'> | null;
  attachedGuestDetails?: DeserializedType<T, 'Edm.String'> | null;
  ticketUsed?: NoYes | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  serviceClass?: TrvAirlineServiceClassEnum | null;
  workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: TrvExpLineType | null;
  isBudgetCheckPending?: NoYes | null;
  policyViolationErrorMessage?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPassengers: DeserializedType<T, 'Edm.Int32'>;
  policyViolationCount: DeserializedType<T, 'Edm.Int64'>;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  entryPoint?: TrvExpEntryPoint | null;
  trvSharedSubCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  expenseItemizationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  businessPurpose?: DeserializedType<T, 'Edm.String'> | null;
  kmPrice: DeserializedType<T, 'Edm.Decimal'>;
  travelAgencyInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  correlationId: DeserializedType<T, 'Edm.Guid'>;
  expNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  notApprovedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalRoomRent: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  perdiemTimezone?: Timezone | null;
  merchantId?: DeserializedType<T, 'Edm.String'> | null;
  assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemizedLineExpTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  justifyingWorker: DeserializedType<T, 'Edm.Int64'>;
  intercompanyTransferCurrency?: DeserializedType<T, 'Edm.String'> | null;
  vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  delegateUserId?: DeserializedType<T, 'Edm.String'> | null;
  detach: DeserializedType<T, 'Edm.Int32'>;
  vehicleClass?: TrvCarRentalVehicleClassEnum | null;
  intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  mobileStatement?: NoYes | null;
  isSplit?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  submitterJustification?: DeserializedType<T, 'Edm.String'> | null;
  deduktionBreakfest: DeserializedType<T, 'Edm.Int32'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  postingErrors?: DeserializedType<T, 'Edm.String'> | null;
  deduktionLunch: DeserializedType<T, 'Edm.Int32'>;
  billIssuedTo?: TrvBillIssuedTo | null;
  invoiceAmt: DeserializedType<T, 'Edm.Decimal'>;
  cashAdvanceCashAdvanceNumber?: DeserializedType<T, 'Edm.String'> | null;
  ticketClass?: DeserializedType<T, 'Edm.String'> | null;
  carRentalCheckOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  travelAgencyName?: DeserializedType<T, 'Edm.String'> | null;
  policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  approverJustification?: DeserializedType<T, 'Edm.String'> | null;
  deduktion: DeserializedType<T, 'Edm.Decimal'>;
  workflowComment?: DeserializedType<T, 'Edm.String'> | null;
  approvedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  netTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  projPolicyStatus?: ProjExpPolicyStatus | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isSubmitterJustificationRequired: DeserializedType<T, 'Edm.Int32'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  attachedReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  intercompanySalesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  trvHcmWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCategory?: DeserializedType<T, 'Edm.String'> | null;
  mileageFromAddress?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyOverBudgetAmount: DeserializedType<T, 'Edm.Decimal'>;
  dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPreAuthorized?: NoYes | null;
  checkInDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projPolicyText?: DeserializedType<T, 'Edm.String'> | null;
  correctedTaxAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  correctedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  expType?: TrvExpType | null;
  pbsStatement?: NoYes | null;
  intercompanySalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  lineLevelPosting?: NoYes | null;
  action?: DeserializedType<T, 'Edm.String'> | null;
  postAccount?: DeserializedType<T, 'Edm.String'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  transRowNum: DeserializedType<T, 'Edm.Int32'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
