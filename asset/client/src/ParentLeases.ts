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
import type { ParentLeasesApi } from './ParentLeasesApi';
import { NoYes } from './NoYes';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
import { LeaseBooks, LeaseBooksType } from './LeaseBooks';

/**
 * This class represents the entity "ParentLeases" of service "d365_metadata".
 */
export class ParentLeases<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ParentLeasesType<T>
{
  /**
   * Technical entity name for ParentLeases.
   */
  static override _entityName = 'ParentLeases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ParentLeases entity.
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
   * Current Mileage.
   */
  declare currentMileage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Decreases.
   * @nullable
   */
  declare allowDecreases?: NoYes | null;
  /**
   * Bank Contract Number.
   * @nullable
   */
  declare bankContractNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Opening Date.
   */
  declare locationOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transfer Ownership.
   * @nullable
   */
  declare transferOwnership?: NoYesCombo | null;
  /**
   * Residual Value Guarantee.
   */
  declare residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Months Between Revaluations.
   */
  declare monthsBetweenRevaluations: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Limit On Rate Increase.
   */
  declare limitOnRateIncrease: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Holdover Fee.
   */
  declare holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fair Value Of Asset.
   */
  declare fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Late Payment.
   */
  declare latePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Exchange Rate.
   * @nullable
   */
  declare fixedExchangeRate?: NoYes | null;
  /**
   * Percent Common Area Maintenance.
   */
  declare percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Borrowing Rate.
   */
  declare borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Prepayments.
   */
  declare leasePrepayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Implicit Rate.
   */
  declare implicitRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Contract Signature Date.
   */
  declare contractSignatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Minimun Limits Of Liability.
   */
  declare minimunLimitsOfLiability: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Change To Apply.
   */
  declare indexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rentable Area.
   */
  declare rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Security Deposit Reminder Date.
   */
  declare securityDepositReminderDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Exchange Rate Reporting.
   */
  declare exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mileage Limit.
   */
  declare mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Description.
   * @nullable
   */
  declare leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incidental Cost.
   */
  declare incidentalCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Security Deposit Refundable.
   * @nullable
   */
  declare securityDepositRefundable?: NoYes | null;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent Of Index Change To Apply.
   */
  declare percentOfIndexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Security Deposit.
   */
  declare securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Overuse Fee.
   */
  declare overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Breakdown Payment Amount.
   * @nullable
   */
  declare breakdownPaymentAmount?: NoYes | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Index Rate Type.
   * @nullable
   */
  declare indexRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financing Amount.
   */
  declare financingAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Useful Life.
   */
  declare assetUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Initial Direct Cost.
   */
  declare initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dismantling Costs.
   */
  declare dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Manually Revalue.
   * @nullable
   */
  declare manuallyRevalue?: NoYes | null;
  /**
   * Revaluation Date.
   */
  declare revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Compounding Interval.
   * @nullable
   */
  declare compoundingInterval?: AssetLeaseCompoundingInterval | null;
  /**
   * Lease Start Date.
   */
  declare leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fixed Exchange Rate Reporting.
   * @nullable
   */
  declare fixedExchangeRateReporting?: NoYes | null;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Coverage.
   */
  declare maxCoverage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commencement Date.
   */
  declare commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Default Display Value.
   * @nullable
   */
  declare dimensionDefaultDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Lease Incentives.
   */
  declare leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Number.
   * @nullable
   */
  declare locationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Group.
   * @nullable
   */
  declare leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Per Mile.
   */
  declare costPerMile: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Rent Carryover.
   */
  declare deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Commercial Terms.
   * @nullable
   */
  declare financialCommercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unique Asset.
   * @nullable
   */
  declare uniqueAsset?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link LeaseBooks} entity.
   */
  declare masterLeaseIdLeaseId: LeaseBooks<T>[];

  constructor(_entityApi: ParentLeasesApi<T>) {
    super(_entityApi);
  }
}

export interface ParentLeasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  currentMileage: DeserializedType<T, 'Edm.Decimal'>;
  allowDecreases?: NoYes | null;
  bankContractNumber?: DeserializedType<T, 'Edm.String'> | null;
  locationOpeningDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transferOwnership?: NoYesCombo | null;
  residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  monthsBetweenRevaluations: DeserializedType<T, 'Edm.Int32'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  limitOnRateIncrease: DeserializedType<T, 'Edm.Decimal'>;
  holdoverFee: DeserializedType<T, 'Edm.Decimal'>;
  fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  latePayment: DeserializedType<T, 'Edm.Decimal'>;
  fixedExchangeRate?: NoYes | null;
  percentCommonAreaMaintenance: DeserializedType<T, 'Edm.Decimal'>;
  street?: DeserializedType<T, 'Edm.String'> | null;
  borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  leasePrepayments: DeserializedType<T, 'Edm.Decimal'>;
  implicitRate: DeserializedType<T, 'Edm.Decimal'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  annuityType?: AssetLeaseAnnuityType | null;
  contractSignatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  minimunLimitsOfLiability: DeserializedType<T, 'Edm.Decimal'>;
  indexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  rentableArea: DeserializedType<T, 'Edm.Decimal'>;
  securityDepositReminderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  mileageLimit: DeserializedType<T, 'Edm.Decimal'>;
  leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  incidentalCost: DeserializedType<T, 'Edm.Decimal'>;
  securityDepositRefundable?: NoYes | null;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  percentOfIndexChangeToApply: DeserializedType<T, 'Edm.Decimal'>;
  securityDeposit: DeserializedType<T, 'Edm.Decimal'>;
  overuseFee: DeserializedType<T, 'Edm.Decimal'>;
  breakdownPaymentAmount?: NoYes | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  indexRateType?: DeserializedType<T, 'Edm.String'> | null;
  financingAmount: DeserializedType<T, 'Edm.Int32'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  assetUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  manuallyRevalue?: NoYes | null;
  revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compoundingInterval?: AssetLeaseCompoundingInterval | null;
  leaseStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedExchangeRateReporting?: NoYes | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  maxCoverage: DeserializedType<T, 'Edm.Decimal'>;
  commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionDefaultDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  locationNumber?: DeserializedType<T, 'Edm.String'> | null;
  leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  costPerMile: DeserializedType<T, 'Edm.Decimal'>;
  deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  financialCommercialTerms?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  uniqueAsset?: NoYes | null;
  masterLeaseIdLeaseId: LeaseBooksType<T>[];
}
