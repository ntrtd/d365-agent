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
import type { PayIntV1HcmPositionDetailsApi } from './PayIntV1HcmPositionDetailsApi';
import { Titles, TitlesType } from './Titles';
import {
  CompensationRegions,
  CompensationRegionsType
} from './CompensationRegions';
import { JobFamilies, JobFamiliesType } from './JobFamilies';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { Jobs, JobsType } from './Jobs';
import { Departments, DepartmentsType } from './Departments';
import { PositionTypes, PositionTypesType } from './PositionTypes';

/**
 * This class represents the entity "PayIntV1HcmPositionDetails" of service "d365_metadata".
 */
export class PayIntV1HcmPositionDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1HcmPositionDetailsType<T>
{
  /**
   * Technical entity name for PayIntV1HcmPositionDetails.
   */
  static override _entityName = 'PayIntV1HcmPositionDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1HcmPositionDetails entity.
   */
  static _keys = ['PositionId', 'ValidFrom', 'ValidTo'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Job Family Id.
   * @nullable
   */
  declare jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
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
   * Compensation Region Id.
   * @nullable
   */
  declare compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationRegions} entity.
   */
  declare compensationRegion?: CompensationRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link JobFamilies} entity.
   */
  declare jobFamily?: JobFamilies<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionTypes} entity.
   */
  declare positionType?: PositionTypes<T> | null;

  constructor(_entityApi: PayIntV1HcmPositionDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1HcmPositionDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  title?: TitlesType<T> | null;
  compensationRegion?: CompensationRegionsType<T> | null;
  jobFamily?: JobFamiliesType<T> | null;
  position?: PositionsV2Type<T> | null;
  job?: JobsType<T> | null;
  department?: DepartmentsType<T> | null;
  positionType?: PositionTypesType<T> | null;
}
