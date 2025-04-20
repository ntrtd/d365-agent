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
import type { CompFixedEmplsApi } from './CompFixedEmplsApi';
import { HcmCompensationType } from './HcmCompensationType';
import { HrmCompProcessType } from './HrmCompProcessType';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';
import { Workers, WorkersType } from './Workers';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import {
  CompFixedPlanTables,
  CompFixedPlanTablesType
} from './CompFixedPlanTables';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "CompFixedEmpls" of service "d365_metadata".
 */
export class CompFixedEmpls<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompFixedEmplsType<T>
{
  /**
   * Technical entity name for CompFixedEmpls.
   */
  static override _entityName = 'CompFixedEmpls';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompFixedEmpls entity.
   */
  static _keys = [
    'dataAreaId',
    'PositionId',
    'PersonnelNumber',
    'Plan',
    'EffectiveDate',
    'Action',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Rate.
   */
  declare payRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HcmCompensationType | null;
  /**
   * Step.
   * @nullable
   */
  declare step?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Frequency.
   * @nullable
   */
  declare payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Point Setup Id.
   * @nullable
   */
  declare refPointSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: HrmCompProcessType | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compensationLevel?: CompensationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link CompFixedPlanTables} entity.
   */
  declare fixedCompensationPlan?: CompFixedPlanTables<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: CompFixedEmplsApi<T>) {
    super(_entityApi);
  }
}

export interface CompFixedEmplsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  action: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payRate: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  type?: HcmCompensationType | null;
  step?: DeserializedType<T, 'Edm.String'> | null;
  payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  refPointSetupId?: DeserializedType<T, 'Edm.String'> | null;
  processType?: HrmCompProcessType | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevel?: CompensationLevelsType<T> | null;
  worker?: WorkersType<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
  fixedCompensationPlan?: CompFixedPlanTablesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
