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
import type { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { HrmCompPlanType } from './HrmCompPlanType';
import { NoYes } from './NoYes';
import { JobTypes, JobTypesType } from './JobTypes';
import {
  CompensationRegions,
  CompensationRegionsType
} from './CompensationRegions';
import { Jobs, JobsType } from './Jobs';
import { Departments, DepartmentsType } from './Departments';
import {
  CompFixedPlanTables,
  CompFixedPlanTablesType
} from './CompFixedPlanTables';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';
import { JobFunctions, JobFunctionsType } from './JobFunctions';
import { Unions, UnionsType } from './Unions';

/**
 * This class represents the entity "CompensationEligibilityRules" of service "d365_metadata".
 */
export class CompensationEligibilityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationEligibilityRulesType<T>
{
  /**
   * Technical entity name for CompensationEligibilityRules.
   */
  static override _entityName = 'CompensationEligibilityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationEligibilityRules entity.
   */
  static _keys = ['dataAreaId', 'Eligibility'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Eligibility.
   */
  declare eligibility: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Labor Union Id.
   * @nullable
   */
  declare laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Function Id.
   * @nullable
   */
  declare functionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan.
   * @nullable
   */
  declare plan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HrmCompPlanType | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restrict Eligibility To Workers In Selected Levels.
   * @nullable
   */
  declare restrictEligibilityToWorkersInSelectedLevels?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link JobTypes} entity.
   */
  declare jobType?: JobTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationRegions} entity.
   */
  declare location?: CompensationRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link CompFixedPlanTables} entity.
   */
  declare compFixedPlanTable?: CompFixedPlanTables<T> | null;
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare omOperatingUnit?: OperatingUnits<T> | null;
  /**
   * One-to-one navigation property to the {@link JobFunctions} entity.
   */
  declare jobFunction?: JobFunctions<T> | null;
  /**
   * One-to-one navigation property to the {@link Unions} entity.
   */
  declare laborUnion?: Unions<T> | null;

  constructor(_entityApi: CompensationEligibilityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationEligibilityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  eligibility: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  functionId?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  plan?: DeserializedType<T, 'Edm.String'> | null;
  type?: HrmCompPlanType | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  restrictEligibilityToWorkersInSelectedLevels?: NoYes | null;
  jobType?: JobTypesType<T> | null;
  location?: CompensationRegionsType<T> | null;
  job?: JobsType<T> | null;
  department?: DepartmentsType<T> | null;
  compFixedPlanTable?: CompFixedPlanTablesType<T> | null;
  omOperatingUnit?: OperatingUnitsType<T> | null;
  jobFunction?: JobFunctionsType<T> | null;
  laborUnion?: UnionsType<T> | null;
}
