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
import type { AssetLeaseLeaseDetailsBiEntitiesApi } from './AssetLeaseLeaseDetailsBiEntitiesApi';
import { NoYes } from './NoYes';
import { AssetLeaseApprovalStatus } from './AssetLeaseApprovalStatus';
import { AssetLeaseRateValue } from './AssetLeaseRateValue';
import { AssetLeaseTerminationProposalStatus } from './AssetLeaseTerminationProposalStatus';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseLeasingConvention } from './AssetLeaseLeasingConvention';
import { AssetLeaseType } from './AssetLeaseType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetLeaseWorkflowStatus } from './AssetLeaseWorkflowStatus';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
import { AssetLeasePaymentInterval } from './AssetLeasePaymentInterval';
import { AssetLeaseAccountingFramework } from './AssetLeaseAccountingFramework';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseLeaseStatus } from './AssetLeaseLeaseStatus';

/**
 * This class represents the entity "AssetLeaseLeaseDetailsBiEntities" of service "d365_metadata".
 */
export class AssetLeaseLeaseDetailsBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseLeaseDetailsBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseLeaseDetailsBiEntities.
   */
  static override _entityName = 'AssetLeaseLeaseDetailsBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseLeaseDetailsBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LeaseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Signature Date.
   */
  declare signatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mileage Limit.
   */
  declare mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Penalty For Terminating Lease.
   */
  declare penaltyForTerminatingLease: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Incentives.
   */
  declare leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Reason.
   * @nullable
   */
  declare overrideReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Option For Renewal.
   * @nullable
   */
  declare optionForRenewal?: NoYes | null;
  /**
   * Next Maintenance.
   */
  declare nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Increase Cap.
   */
  declare rateIncreaseCap: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: AssetLeaseApprovalStatus | null;
  /**
   * Interest Periods Remaining.
   */
  declare interestPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ballon Payment Amount.
   */
  declare ballonPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Adjusted.
   * @nullable
   */
  declare adjusted?: NoYes | null;
  /**
   * Present Value Over Fair Value.
   */
  declare presentValueOverFairValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Fixed Payment.
   * @nullable
   */
  declare isFixedPayment?: AssetLeaseRateValue | null;
  /**
   * Termination Proposal Status.
   * @nullable
   */
  declare terminationProposalStatus?: AssetLeaseTerminationProposalStatus | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Overuse Fee.
   */
  declare overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commercial Terms.
   * @nullable
   */
  declare commercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Ownership.
   * @nullable
   */
  declare transferOwnership?: NoYesCombo | null;
  /**
   * Undiscounted Payments Remaining.
   */
  declare undiscountedPaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Maintenance.
   */
  declare lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Responsible.
   * @nullable
   */
  declare responsible?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Fixed Asset.
   * @nullable
   */
  declare createFixedAsset?: NoYes | null;
  /**
   * Lease Modification Date.
   */
  declare leaseModificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deferred Rent Treatment.
   * @nullable
   */
  declare deferredRentTreatment?: NoYes | null;
  /**
   * Book Table.
   */
  declare bookTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Lease Description.
   * @nullable
   */
  declare leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Coverage.
   */
  declare maxCoverage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Financing Amount.
   */
  declare financingAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent Common Area Maintenance.
   */
  declare percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leasing Convention.
   * @nullable
   */
  declare leasingConvention?: AssetLeaseLeasingConvention | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fair Value.
   */
  declare fairValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dismantling Costs.
   */
  declare dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Months Btw Revaluation.
   */
  declare monthsBtwRevaluation: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Type.
   * @nullable
   */
  declare leaseType?: AssetLeaseType | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Prepayments.
   */
  declare prepayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Incidental Cost.
   */
  declare incidentalCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Present Value Payments Remaining.
   */
  declare presentValuePaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Center Opening Date.
   */
  declare centerOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Security Deposit Reminder Date.
   */
  declare securityDepositReminderDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Fixed Exchange Rate Reporting.
   * @nullable
   */
  declare fixedExchangeRateReporting?: NoYes | null;
  /**
   * Last Depreciation Date.
   */
  declare lastDepreciationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rentable Area.
   */
  declare rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Logistics Location.
   */
  declare logisticsLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Index Rate Percent.
   */
  declare indexRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Principal Amount.
   */
  declare currentPrincipalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Months Of Useful Life.
   */
  declare monthsOfUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Commencement Date.
   */
  declare commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Variable Component.
   * @nullable
   */
  declare variableComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unposted Depreciation Journals.
   */
  declare unpostedDepreciationJournals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Date Payment Journal.
   */
  declare lastDatePaymentJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Payments Remaining.
   */
  declare leasePaymentsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Discount Rate.
   */
  declare discountRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Rent Carryover.
   */
  declare deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Current Mileage.
   */
  declare currentMileage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Reporting.
   */
  declare exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Security Deposit Refundable.
   * @nullable
   */
  declare securityDepositRefundable?: NoYes | null;
  /**
   * Lessor Contact Name.
   * @nullable
   */
  declare lessorContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Master Lease Rec Id.
   */
  declare masterLeaseRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Revaluation Date.
   */
  declare revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Depreciation Periods Remaining.
   */
  declare depreciationPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unposted Lease Payments.
   */
  declare unpostedLeasePayments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Group.
   * @nullable
   */
  declare leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Asset.
   * @nullable
   */
  declare uniqueAsset?: NoYes | null;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: AssetLeaseWorkflowStatus | null;
  /**
   * Payment Contract Modified.
   * @nullable
   */
  declare paymentContractModified?: NoYes | null;
  /**
   * Asset Book Id.
   * @nullable
   */
  declare assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Termination Date.
   */
  declare expectedTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Extension Period.
   */
  declare extensionPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Start Date.
   */
  declare leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compounding Interval.
   * @nullable
   */
  declare compoundingInterval?: AssetLeaseCompoundingInterval | null;
  /**
   * Current Liability Balance.
   */
  declare currentLiabilityBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Current Expense Balance.
   */
  declare currentExpenseBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Present Value.
   */
  declare presentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Manually Revalue.
   * @nullable
   */
  declare manuallyRevalue?: NoYes | null;
  /**
   * Current Asset Balance.
   */
  declare currentAssetBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Years Of Lease.
   */
  declare yearsOfLease: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unposted Interest Journals.
   */
  declare unpostedInterestJournals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Contract Number.
   * @nullable
   */
  declare contractNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origination Date.
   */
  declare originationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Index Type.
   * @nullable
   */
  declare indexType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Interval.
   * @nullable
   */
  declare paymentInterval?: AssetLeasePaymentInterval | null;
  /**
   * Borrowing Rate.
   */
  declare borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Entry To Post.
   */
  declare dateEntryToPost: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Date Interest Journal.
   */
  declare lastDateInterestJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intend To Extend Lease.
   * @nullable
   */
  declare intendToExtendLease?: NoYesCombo | null;
  /**
   * Accounting Framework.
   * @nullable
   */
  declare accountingFramework?: AssetLeaseAccountingFramework | null;
  /**
   * Breakdown Payment Amount.
   * @nullable
   */
  declare breakdownPaymentAmount?: NoYes | null;
  /**
   * Year Of Useful Life.
   */
  declare yearOfUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fair Value Of Asset.
   */
  declare fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Interest Rate.
   */
  declare interestRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Lease Type.
   * @nullable
   */
  declare overrideLeaseType?: NoYes | null;
  /**
   * Logistics Address Country Region Id.
   * @nullable
   */
  declare logisticsAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Low Value Lease.
   * @nullable
   */
  declare lowValueLease?: NoYes | null;
  /**
   * Short Term Lease.
   * @nullable
   */
  declare shortTermLease?: NoYes | null;
  /**
   * Lease Term Over Useful Life.
   */
  declare leaseTermOverUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Decreases.
   * @nullable
   */
  declare allowDecreases?: NoYes | null;
  /**
   * Worker Responsible.
   */
  declare workerResponsible: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Holdover Fee.
   */
  declare holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Min Liability.
   */
  declare minLiability: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Initial Direct Cost.
   */
  declare initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Residual Value Guarantee.
   */
  declare residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Per Mile.
   */
  declare costPerMile: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Previous Lease Type.
   * @nullable
   */
  declare previousLeaseType?: AssetLeaseType | null;
  /**
   * Late Payment.
   */
  declare latePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate Memo.
   * @nullable
   */
  declare indexRateMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balloon Payment.
   * @nullable
   */
  declare balloonPayment?: NoYesCombo | null;
  /**
   * Maintenance Note.
   * @nullable
   */
  declare maintenanceNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lessor Reference Number.
   * @nullable
   */
  declare lessorReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Deposit.
   */
  declare securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Periods.
   */
  declare numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Extension Payment.
   */
  declare extensionPayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Number.
   * @nullable
   */
  declare locationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Location Memo.
   * @nullable
   */
  declare locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Term Months.
   */
  declare leaseTermMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Status.
   * @nullable
   */
  declare leaseStatus?: AssetLeaseLeaseStatus | null;
  /**
   * Periods Remaining.
   */
  declare periodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fixed Exchange Rate.
   * @nullable
   */
  declare fixedExchangeRate?: NoYes | null;

  constructor(_entityApi: AssetLeaseLeaseDetailsBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseLeaseDetailsBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  signatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  penaltyForTerminatingLease: DeserializedType<T, 'Edm.Decimal'>;
  leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  overrideReason?: DeserializedType<T, 'Edm.String'> | null;
  optionForRenewal?: NoYes | null;
  nextMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  rateIncreaseCap: DeserializedType<T, 'Edm.Decimal'>;
  approvalStatus?: AssetLeaseApprovalStatus | null;
  interestPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  ballonPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  adjusted?: NoYes | null;
  presentValueOverFairValue: DeserializedType<T, 'Edm.Decimal'>;
  isFixedPayment?: AssetLeaseRateValue | null;
  terminationProposalStatus?: AssetLeaseTerminationProposalStatus | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  commercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  transferOwnership?: NoYesCombo | null;
  undiscountedPaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  lastMaintenance: DeserializedType<T, 'Edm.DateTimeOffset'>;
  responsible?: DeserializedType<T, 'Edm.String'> | null;
  createFixedAsset?: NoYes | null;
  leaseModificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deferredRentTreatment?: NoYes | null;
  bookTable: DeserializedType<T, 'Edm.Int64'>;
  leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  maxCoverage: DeserializedType<T, 'Edm.Decimal'>;
  financingAmount: DeserializedType<T, 'Edm.Int32'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  leasingConvention?: AssetLeaseLeasingConvention | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  fairValue: DeserializedType<T, 'Edm.Decimal'>;
  dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  monthsBtwRevaluation: DeserializedType<T, 'Edm.Int32'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  leaseType?: AssetLeaseType | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  prepayments: DeserializedType<T, 'Edm.Decimal'>;
  incidentalCost: DeserializedType<T, 'Edm.Decimal'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  presentValuePaymentsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  centerOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  securityDepositReminderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedExchangeRateReporting?: NoYes | null;
  lastDepreciationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  logisticsLocation: DeserializedType<T, 'Edm.Int64'>;
  indexRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  currentPrincipalAmount: DeserializedType<T, 'Edm.Decimal'>;
  monthsOfUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  variableComponent?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unpostedDepreciationJournals: DeserializedType<T, 'Edm.Int32'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  lastDatePaymentJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leasePaymentsRemaining: DeserializedType<T, 'Edm.Int32'>;
  discountRate: DeserializedType<T, 'Edm.Decimal'>;
  deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  currentMileage: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  securityDepositRefundable?: NoYes | null;
  lessorContactName?: DeserializedType<T, 'Edm.String'> | null;
  masterLeaseRecId: DeserializedType<T, 'Edm.Int64'>;
  postingLayer?: CurrentOperationsTax | null;
  revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  depreciationPeriodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  unpostedLeasePayments: DeserializedType<T, 'Edm.Int32'>;
  leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  uniqueAsset?: NoYes | null;
  workflowStatus?: AssetLeaseWorkflowStatus | null;
  paymentContractModified?: NoYes | null;
  assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  expectedTerminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  extensionPeriod: DeserializedType<T, 'Edm.Int32'>;
  leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  compoundingInterval?: AssetLeaseCompoundingInterval | null;
  currentLiabilityBalance: DeserializedType<T, 'Edm.Decimal'>;
  currentExpenseBalance: DeserializedType<T, 'Edm.Decimal'>;
  presentValue: DeserializedType<T, 'Edm.Decimal'>;
  manuallyRevalue?: NoYes | null;
  currentAssetBalance: DeserializedType<T, 'Edm.Decimal'>;
  yearsOfLease: DeserializedType<T, 'Edm.Decimal'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  unpostedInterestJournals: DeserializedType<T, 'Edm.Int32'>;
  contractNumber?: DeserializedType<T, 'Edm.String'> | null;
  originationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  indexType?: DeserializedType<T, 'Edm.String'> | null;
  paymentInterval?: AssetLeasePaymentInterval | null;
  borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  dateEntryToPost: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastDateInterestJournal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intendToExtendLease?: NoYesCombo | null;
  accountingFramework?: AssetLeaseAccountingFramework | null;
  breakdownPaymentAmount?: NoYes | null;
  yearOfUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  annuityType?: AssetLeaseAnnuityType | null;
  interestRate: DeserializedType<T, 'Edm.Decimal'>;
  overrideLeaseType?: NoYes | null;
  logisticsAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  lowValueLease?: NoYes | null;
  shortTermLease?: NoYes | null;
  leaseTermOverUsefulLife: DeserializedType<T, 'Edm.Decimal'>;
  allowDecreases?: NoYes | null;
  workerResponsible: DeserializedType<T, 'Edm.Int64'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
  minLiability: DeserializedType<T, 'Edm.Decimal'>;
  initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  costPerMile: DeserializedType<T, 'Edm.Decimal'>;
  previousLeaseType?: AssetLeaseType | null;
  latePayment: DeserializedType<T, 'Edm.Decimal'>;
  indexRateMemo?: DeserializedType<T, 'Edm.String'> | null;
  balloonPayment?: NoYesCombo | null;
  maintenanceNote?: DeserializedType<T, 'Edm.String'> | null;
  lessorReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  extensionPayment: DeserializedType<T, 'Edm.Decimal'>;
  locationNumber?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  locationMemo?: DeserializedType<T, 'Edm.String'> | null;
  leaseTermMonths: DeserializedType<T, 'Edm.Int32'>;
  leaseStatus?: AssetLeaseLeaseStatus | null;
  periodsRemaining: DeserializedType<T, 'Edm.Int32'>;
  fixedExchangeRate?: NoYes | null;
}
