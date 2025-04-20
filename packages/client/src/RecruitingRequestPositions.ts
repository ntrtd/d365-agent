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
import type { RecruitingRequestPositionsApi } from './RecruitingRequestPositionsApi';
import { HcmRecruitingRequestPositionStatus } from './HcmRecruitingRequestPositionStatus';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { Departments, DepartmentsType } from './Departments';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';
import { PositionTypes, PositionTypesType } from './PositionTypes';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';

/**
 * This class represents the entity "RecruitingRequestPositions" of service "d365_metadata".
 */
export class RecruitingRequestPositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RecruitingRequestPositionsType<T>
{
  /**
   * Technical entity name for RecruitingRequestPositions.
   */
  static override _entityName = 'RecruitingRequestPositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RecruitingRequestPositions entity.
   */
  static _keys = ['dataAreaId', 'RecruitingRequestId', 'PositionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Recruiting Request Id.
   */
  declare recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Financial Dimension.
   * @nullable
   */
  declare financialDimension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HcmRecruitingRequestPositionStatus | null;
  /**
   * Reports To Personnel Number.
   * @nullable
   */
  declare reportsToPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reports To Position Id.
   * @nullable
   */
  declare reportsToPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department Number.
   * @nullable
   */
  declare departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare reportsToPosition?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequest?: RecruitingRequests<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionTypes} entity.
   */
  declare positionType?: PositionTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare reportsToWorker?: BaseWorkers<T> | null;

  constructor(_entityApi: RecruitingRequestPositionsApi<T>) {
    super(_entityApi);
  }
}

export interface RecruitingRequestPositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  financialDimension?: DeserializedType<T, 'Edm.String'> | null;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  status?: HcmRecruitingRequestPositionStatus | null;
  reportsToPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  reportsToPositionId?: DeserializedType<T, 'Edm.String'> | null;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  reportsToPosition?: PositionsV2Type<T> | null;
  position?: PositionsV2Type<T> | null;
  department?: DepartmentsType<T> | null;
  recruitingRequest?: RecruitingRequestsType<T> | null;
  positionType?: PositionTypesType<T> | null;
  reportsToWorker?: BaseWorkersType<T> | null;
}
