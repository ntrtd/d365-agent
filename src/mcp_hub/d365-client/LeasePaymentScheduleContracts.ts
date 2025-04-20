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
import type { LeasePaymentScheduleContractsApi } from './LeasePaymentScheduleContractsApi';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
import { AssetLeaseCreatedBy } from './AssetLeaseCreatedBy';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { NoYesCombo } from './NoYesCombo';

/**
 * This class represents the entity "LeasePaymentScheduleContracts" of service "d365_metadata".
 */
export class LeasePaymentScheduleContracts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentScheduleContractsType<T>
{
  /**
   * Technical entity name for LeasePaymentScheduleContracts.
   */
  static override _entityName = 'LeasePaymentScheduleContracts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentScheduleContracts entity.
   */
  static _keys = ['dataAreaId', 'LeaseId', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Per Unit.
   */
  declare costPerUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Frequency.
   * @nullable
   */
  declare paymentFrequency?: AssetLeasePaymentFrequency | null;
  /**
   * Term.
   * @nullable
   */
  declare term?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Created By.
   * @nullable
   */
  declare recordCreatedBy?: AssetLeaseCreatedBy | null;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetLeaseLeaseTermInterval | null;
  /**
   * Index Type.
   * @nullable
   */
  declare indexType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exercise.
   * @nullable
   */
  declare exercise?: NoYesCombo | null;
  /**
   * Periods.
   */
  declare periods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: LeasePaymentScheduleContractsApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentScheduleContractsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costPerUnit: DeserializedType<T, 'Edm.Decimal'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  paymentFrequency?: AssetLeasePaymentFrequency | null;
  term?: DeserializedType<T, 'Edm.String'> | null;
  recordCreatedBy?: AssetLeaseCreatedBy | null;
  interval?: AssetLeaseLeaseTermInterval | null;
  indexType?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  exercise?: NoYesCombo | null;
  periods: DeserializedType<T, 'Edm.Int32'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
