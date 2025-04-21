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
import type { TitlesApi } from './TitlesApi';
import {
  PayIntV1HcmPositionDetails,
  PayIntV1HcmPositionDetailsType
} from './PayIntV1HcmPositionDetails';
import { Workers, WorkersType } from './Workers';
import { Employees, EmployeesType } from './Employees';
import { ContractorsV2, ContractorsV2Type } from './ContractorsV2';
import { PositionDetails, PositionDetailsType } from './PositionDetails';
import { WorkerSummaries, WorkerSummariesType } from './WorkerSummaries';
import { Contractors, ContractorsType } from './Contractors';
import { Jobs, JobsType } from './Jobs';
import { EmployeesV2, EmployeesV2Type } from './EmployeesV2';
import { Positions, PositionsType } from './Positions';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';
import {
  WorkerTitlesCurrent,
  WorkerTitlesCurrentType
} from './WorkerTitlesCurrent';

/**
 * This class represents the entity "Titles" of service "d365_metadata".
 */
export class Titles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TitlesType<T>
{
  /**
   * Technical entity name for Titles.
   */
  static override _entityName = 'Titles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Titles entity.
   */
  static _keys = ['TitleId'];
  /**
   * Title Id.
   */
  declare titleId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionDetails} entity.
   */
  declare payIntPositionDetails: PayIntV1HcmPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link Workers} entity.
   */
  declare workers: Workers<T>[];
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  declare employees: Employees<T>[];
  /**
   * One-to-many navigation property to the {@link ContractorsV2} entity.
   */
  declare contractorsV2: ContractorsV2<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDetails} entity.
   */
  declare positionDetails: PositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerSummaries} entity.
   */
  declare workerTitles: WorkerSummaries<T>[];
  /**
   * One-to-many navigation property to the {@link Contractors} entity.
   */
  declare contractors: Contractors<T>[];
  /**
   * One-to-many navigation property to the {@link Jobs} entity.
   */
  declare jobs: Jobs<T>[];
  /**
   * One-to-many navigation property to the {@link EmployeesV2} entity.
   */
  declare employeesV2: EmployeesV2<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequests: RecruitingRequests<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerTitlesCurrent} entity.
   */
  declare workerTitleCurrent: WorkerTitlesCurrent<T>[];

  constructor(_entityApi: TitlesApi<T>) {
    super(_entityApi);
  }
}

export interface TitlesType<T extends DeSerializers = DefaultDeSerializers> {
  titleId: DeserializedType<T, 'Edm.String'>;
  payIntPositionDetails: PayIntV1HcmPositionDetailsType<T>[];
  workers: WorkersType<T>[];
  employees: EmployeesType<T>[];
  contractorsV2: ContractorsV2Type<T>[];
  positionDetails: PositionDetailsType<T>[];
  workerTitles: WorkerSummariesType<T>[];
  contractors: ContractorsType<T>[];
  jobs: JobsType<T>[];
  employeesV2: EmployeesV2Type<T>[];
  positions: PositionsType<T>[];
  positionsV2: PositionsV2Type<T>[];
  recruitingRequests: RecruitingRequestsType<T>[];
  workerTitleCurrent: WorkerTitlesCurrentType<T>[];
}
