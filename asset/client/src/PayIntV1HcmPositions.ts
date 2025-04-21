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
import type { PayIntV1HcmPositionsApi } from './PayIntV1HcmPositionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1HcmPositions" of service "d365_metadata".
 */
export class PayIntV1HcmPositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1HcmPositionsType<T>
{
  /**
   * Technical entity name for PayIntV1HcmPositions.
   */
  static override _entityName = 'PayIntV1HcmPositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1HcmPositions entity.
   */
  static _keys = ['PositionId'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Detail Effective.
   */
  declare detailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Assignment Reason Code.
   */
  declare workerAssignmentReasonCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Union Agreement Effective.
   */
  declare unionAgreementEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Labor Union Id.
   * @nullable
   */
  declare laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Detail Effective.
   */
  declare payrollDetailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retirement.
   */
  declare retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Title.
   */
  declare title: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Department.
   */
  declare department: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Department Number.
   * @nullable
   */
  declare departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annual Regular Hours.
   */
  declare annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job.
   */
  declare job: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Primary Position.
   * @nullable
   */
  declare isPrimaryPosition?: NoYes | null;
  /**
   * Compensation Region.
   */
  declare compensationRegion: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker Assignment End.
   */
  declare workerAssignmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Detail Expiration.
   */
  declare detailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Union Agreement Legal Entity.
   * @nullable
   */
  declare unionAgreementLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activation.
   */
  declare activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Assignment Reason Code Id.
   * @nullable
   */
  declare workerAssignmentReasonCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Assignment Start.
   */
  declare workerAssignmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Available For Assignment.
   */
  declare availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reports To Expiration.
   */
  declare reportsToExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Type.
   */
  declare positionType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reports To Position Id.
   * @nullable
   */
  declare reportsToPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Detail Expiration.
   */
  declare payrollDetailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paid By Legal Entity.
   * @nullable
   */
  declare paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reports To Effective.
   */
  declare reportsToEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Cycle.
   */
  declare payCycle: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Union Agreement.
   */
  declare unionAgreement: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Compensation Region Id.
   * @nullable
   */
  declare compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker.
   */
  declare worker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Union Agreement Expiration.
   */
  declare unionAgreementExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Union Agreement Name.
   * @nullable
   */
  declare unionAgreementName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1HcmPositionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1HcmPositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  detailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  workerAssignmentReasonCode: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  unionAgreementEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  payrollDetailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  title: DeserializedType<T, 'Edm.Int64'>;
  department: DeserializedType<T, 'Edm.Int64'>;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  job: DeserializedType<T, 'Edm.Int64'>;
  isPrimaryPosition?: NoYes | null;
  compensationRegion: DeserializedType<T, 'Edm.Int64'>;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  workerAssignmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  detailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  unionAgreementLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  workerAssignmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  workerAssignmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportsToExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionType: DeserializedType<T, 'Edm.Int64'>;
  reportsToPositionId?: DeserializedType<T, 'Edm.String'> | null;
  payrollDetailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  reportsToEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payCycle: DeserializedType<T, 'Edm.Int64'>;
  unionAgreement: DeserializedType<T, 'Edm.Int64'>;
  compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  worker: DeserializedType<T, 'Edm.Int64'>;
  unionAgreementExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unionAgreementName?: DeserializedType<T, 'Edm.String'> | null;
}
