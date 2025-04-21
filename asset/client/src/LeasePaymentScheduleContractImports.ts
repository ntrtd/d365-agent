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
import type { LeasePaymentScheduleContractImportsApi } from './LeasePaymentScheduleContractImportsApi';
import { AssetLeaseCreatedBy } from './AssetLeaseCreatedBy';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';

/**
 * This class represents the entity "LeasePaymentScheduleContractImports" of service "d365_metadata".
 */
export class LeasePaymentScheduleContractImports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentScheduleContractImportsType<T>
{
  /**
   * Technical entity name for LeasePaymentScheduleContractImports.
   */
  static override _entityName = 'LeasePaymentScheduleContractImports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentScheduleContractImports entity.
   */
  static _keys = ['LeaseId', 'StartDate', 'ImportId'];
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Import Id.
   */
  declare importId: DeserializedType<T, 'Edm.String'>;
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
   * Periods.
   */
  declare periods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Excercise.
   * @nullable
   */
  declare excercise?: NoYesCombo | null;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: AssetLeasePaymentFrequency | null;
  /**
   * Variable Payment.
   */
  declare variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: LeasePaymentScheduleContractImportsApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentScheduleContractImportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  leaseId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  importId: DeserializedType<T, 'Edm.String'>;
  costPerUnit: DeserializedType<T, 'Edm.Decimal'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  term?: DeserializedType<T, 'Edm.String'> | null;
  recordCreatedBy?: AssetLeaseCreatedBy | null;
  interval?: AssetLeaseLeaseTermInterval | null;
  indexType?: DeserializedType<T, 'Edm.String'> | null;
  periods: DeserializedType<T, 'Edm.Int32'>;
  excercise?: NoYesCombo | null;
  frequency?: AssetLeasePaymentFrequency | null;
  variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
