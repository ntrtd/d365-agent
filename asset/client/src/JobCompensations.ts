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
import type { JobCompensationsApi } from './JobCompensationsApi';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';
import { Jobs, JobsType } from './Jobs';
import { SurveyCompanies, SurveyCompaniesType } from './SurveyCompanies';

/**
 * This class represents the entity "JobCompensations" of service "d365_metadata".
 */
export class JobCompensations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobCompensationsType<T>
{
  /**
   * Technical entity name for JobCompensations.
   */
  static override _entityName = 'JobCompensations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobCompensations entity.
   */
  static _keys = ['JobId', 'CompensationLevelId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Compensation Level Id.
   */
  declare compensationLevelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Market Minimum Pay.
   */
  declare marketMinimumPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Survey Company Id.
   * @nullable
   */
  declare surveyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Maximum Pay.
   */
  declare marketMaximumPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Market Control Pay.
   */
  declare marketControlPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Survey Code.
   * @nullable
   */
  declare externalSurveyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Source.
   * @nullable
   */
  declare marketSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compensationLevel?: CompensationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link SurveyCompanies} entity.
   */
  declare surveyCompany?: SurveyCompanies<T> | null;

  constructor(_entityApi: JobCompensationsApi<T>) {
    super(_entityApi);
  }
}

export interface JobCompensationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  compensationLevelId: DeserializedType<T, 'Edm.String'>;
  marketMinimumPay: DeserializedType<T, 'Edm.Decimal'>;
  surveyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  marketMaximumPay: DeserializedType<T, 'Edm.Decimal'>;
  marketControlPay: DeserializedType<T, 'Edm.Decimal'>;
  externalSurveyCode?: DeserializedType<T, 'Edm.String'> | null;
  marketSource?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevel?: CompensationLevelsType<T> | null;
  job?: JobsType<T> | null;
  surveyCompany?: SurveyCompaniesType<T> | null;
}
