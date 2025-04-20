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
import type { JobPositionsDualWriteApi } from './JobPositionsDualWriteApi';
import {
  PayrollPositionDetails,
  PayrollPositionDetailsType
} from './PayrollPositionDetails';
import {
  PositionDefaultDimensionsDualWrite,
  PositionDefaultDimensionsDualWriteType
} from './PositionDefaultDimensionsDualWrite';

/**
 * This class represents the entity "JobPositionsDualWrite" of service "d365_metadata".
 */
export class JobPositionsDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobPositionsDualWriteType<T>
{
  /**
   * Technical entity name for JobPositionsDualWrite.
   */
  static override _entityName = 'JobPositionsDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobPositionsDualWrite entity.
   */
  static _keys = ['PositionId'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reports To Valid To.
   */
  declare reportsToValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retirement.
   */
  declare retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Position Id.
   * @nullable
   */
  declare parentPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department Id.
   * @nullable
   */
  declare departmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activation.
   */
  declare activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Available For Assignment.
   */
  declare availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reports To Valid From.
   */
  declare reportsToValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Compensation Region Id.
   * @nullable
   */
  declare compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayrollPositionDetails} entity.
   */
  declare payrollPositionDetails: PayrollPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDefaultDimensionsDualWrite} entity.
   */
  declare positionDefaultDimensionDualWrite: PositionDefaultDimensionsDualWrite<T>[];

  constructor(_entityApi: JobPositionsDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface JobPositionsDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  reportsToValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  parentPositionId?: DeserializedType<T, 'Edm.String'> | null;
  departmentId?: DeserializedType<T, 'Edm.String'> | null;
  activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportsToValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  payrollPositionDetails: PayrollPositionDetailsType<T>[];
  positionDefaultDimensionDualWrite: PositionDefaultDimensionsDualWriteType<T>[];
}
