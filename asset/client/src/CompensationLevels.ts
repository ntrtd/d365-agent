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
import type { CompensationLevelsApi } from './CompensationLevelsApi';
import { HcmCompensationType } from './HcmCompensationType';
import { CompFixedEmpls, CompFixedEmplsType } from './CompFixedEmpls';
import { BenefitsRateTiers, BenefitsRateTiersType } from './BenefitsRateTiers';
import {
  CompensationStructures,
  CompensationStructuresType
} from './CompensationStructures';
import { Jobs, JobsType } from './Jobs';
import { JobCompensations, JobCompensationsType } from './JobCompensations';
import {
  BenefitsRateDoubleTiers,
  BenefitsRateDoubleTiersType
} from './BenefitsRateDoubleTiers';
import {
  CompVarPlanLevelsV2,
  CompVarPlanLevelsV2Type
} from './CompVarPlanLevelsV2';
import {
  CompensationStructuresDualWriteV2,
  CompensationStructuresDualWriteV2Type
} from './CompensationStructuresDualWriteV2';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';

/**
 * This class represents the entity "CompensationLevels" of service "d365_metadata".
 */
export class CompensationLevels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompensationLevelsType<T>
{
  /**
   * Technical entity name for CompensationLevels.
   */
  static override _entityName = 'CompensationLevels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationLevels entity.
   */
  static _keys = ['Level'];
  /**
   * Level.
   */
  declare level: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HcmCompensationType | null;
  /**
   * One-to-many navigation property to the {@link CompFixedEmpls} entity.
   */
  declare compFixedEmpls: CompFixedEmpls<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsRateTiers} entity.
   */
  declare benefitRateTiers: BenefitsRateTiers<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationStructures} entity.
   */
  declare compensationStructures: CompensationStructures<T>[];
  /**
   * One-to-many navigation property to the {@link Jobs} entity.
   */
  declare jobs: Jobs<T>[];
  /**
   * One-to-many navigation property to the {@link JobCompensations} entity.
   */
  declare compensationLevels: JobCompensations<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsRateDoubleTiers} entity.
   */
  declare benefitRateDoubleTiers: BenefitsRateDoubleTiers<T>[];
  /**
   * One-to-many navigation property to the {@link CompVarPlanLevelsV2} entity.
   */
  declare compVarPlanLevelV2: CompVarPlanLevelsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationStructuresDualWriteV2} entity.
   */
  declare compensationStructuresV2: CompensationStructuresDualWriteV2<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequests: RecruitingRequests<T>[];

  constructor(_entityApi: CompensationLevelsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationLevelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  level: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: HcmCompensationType | null;
  compFixedEmpls: CompFixedEmplsType<T>[];
  benefitRateTiers: BenefitsRateTiersType<T>[];
  compensationStructures: CompensationStructuresType<T>[];
  jobs: JobsType<T>[];
  compensationLevels: JobCompensationsType<T>[];
  benefitRateDoubleTiers: BenefitsRateDoubleTiersType<T>[];
  compVarPlanLevelV2: CompVarPlanLevelsV2Type<T>[];
  compensationStructuresV2: CompensationStructuresDualWriteV2Type<T>[];
  recruitingRequests: RecruitingRequestsType<T>[];
}
