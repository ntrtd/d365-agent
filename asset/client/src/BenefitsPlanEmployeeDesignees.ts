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
import type { BenefitsPlanEmployeeDesigneesApi } from './BenefitsPlanEmployeeDesigneesApi';
import { BenefitBeneficiaryPriority } from './BenefitBeneficiaryPriority';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "BenefitsPlanEmployeeDesignees" of service "d365_metadata".
 */
export class BenefitsPlanEmployeeDesignees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPlanEmployeeDesigneesType<T>
{
  /**
   * Technical entity name for BenefitsPlanEmployeeDesignees.
   */
  static override _entityName = 'BenefitsPlanEmployeeDesignees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanEmployeeDesignees entity.
   */
  static _keys = [
    'PersonnelNumber',
    'PeriodId',
    'LegalEntityId',
    'PlanId',
    'CoverageOptionId',
    'DesigneePartyNumber',
    'ValidFrom'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Option Id.
   */
  declare coverageOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Designee Party Number.
   */
  declare designeePartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Party Number.
   * @nullable
   */
  declare workerPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Designee Name.
   * @nullable
   */
  declare designeeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beneficiary Percent.
   */
  declare beneficiaryPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Beneficiary Priority.
   * @nullable
   */
  declare beneficiaryPriority?: BenefitBeneficiaryPriority | null;
  /**
   * Plan Status.
   * @nullable
   */
  declare planStatus?: BenefitEmployeePlanStatus | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: BenefitsPlanEmployeeDesigneesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanEmployeeDesigneesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  coverageOptionId: DeserializedType<T, 'Edm.String'>;
  designeePartyNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  designeeName?: DeserializedType<T, 'Edm.String'> | null;
  beneficiaryPercent: DeserializedType<T, 'Edm.Decimal'>;
  beneficiaryPriority?: BenefitBeneficiaryPriority | null;
  planStatus?: BenefitEmployeePlanStatus | null;
  worker?: WorkersType<T> | null;
}
