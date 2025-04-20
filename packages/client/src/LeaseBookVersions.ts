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
import type { LeaseBookVersionsApi } from './LeaseBookVersionsApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { NoYes } from './NoYes';
import { AssetLeaseAccountingFramework } from './AssetLeaseAccountingFramework';
import { AssetLeaseType } from './AssetLeaseType';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseLeaseStatus } from './AssetLeaseLeaseStatus';

/**
 * This class represents the entity "LeaseBookVersions" of service "d365_metadata".
 */
export class LeaseBookVersions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaseBookVersionsType<T>
{
  /**
   * Technical entity name for LeaseBookVersions.
   */
  static override _entityName = 'LeaseBookVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseBookVersions entity.
   */
  static _keys = ['dataAreaId', 'BookId', 'LeaseCounter'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Dismantling Costs.
   */
  declare dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exchange Rate.
   * @nullable
   */
  declare fixedExchangeRate?: NoYes | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Book Type.
   * @nullable
   */
  declare bookType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Date.
   */
  declare revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Default Display Value.
   * @nullable
   */
  declare dimensionDefaultDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Lease Prepayments.
   */
  declare leasePrepayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Classification.
   * @nullable
   */
  declare leaseClassification?: AssetLeaseAccountingFramework | null;
  /**
   * Fair Value Of Asset.
   */
  declare fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate Type.
   * @nullable
   */
  declare indexRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Group.
   * @nullable
   */
  declare leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Reporting.
   */
  declare exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commencement Date.
   */
  declare commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fixed Exchange Rate Reporting.
   * @nullable
   */
  declare fixedExchangeRateReporting?: NoYes | null;
  /**
   * Lease Type.
   * @nullable
   */
  declare leaseType?: AssetLeaseType | null;
  /**
   * Transition Date.
   */
  declare transitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Rent Carryover.
   */
  declare deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Borrowing Rate.
   */
  declare borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Incentives.
   */
  declare leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Description.
   * @nullable
   */
  declare leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Status.
   * @nullable
   */
  declare leaseStatus?: AssetLeaseLeaseStatus | null;
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
   * Initial Direct Cost.
   */
  declare initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeaseBookVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseBookVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bookId: DeserializedType<T, 'Edm.String'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  postingLayer?: CurrentOperationsTax | null;
  dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate?: NoYes | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  bookType?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDefaultDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  leasePrepayments: DeserializedType<T, 'Edm.Decimal'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  leaseClassification?: AssetLeaseAccountingFramework | null;
  fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  indexRateType?: DeserializedType<T, 'Edm.String'> | null;
  leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  commencementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedExchangeRateReporting?: NoYes | null;
  leaseType?: AssetLeaseType | null;
  transitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  county?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  annuityType?: AssetLeaseAnnuityType | null;
  borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  leaseStatus?: AssetLeaseLeaseStatus | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
}
