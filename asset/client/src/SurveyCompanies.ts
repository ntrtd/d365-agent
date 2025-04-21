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
import type { SurveyCompaniesApi } from './SurveyCompaniesApi';
import { Jobs, JobsType } from './Jobs';
import { JobCompensations, JobCompensationsType } from './JobCompensations';

/**
 * This class represents the entity "SurveyCompanies" of service "d365_metadata".
 */
export class SurveyCompanies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SurveyCompaniesType<T>
{
  /**
   * Technical entity name for SurveyCompanies.
   */
  static override _entityName = 'SurveyCompanies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SurveyCompanies entity.
   */
  static _keys = ['SurveyCompanyId'];
  /**
   * Survey Company Id.
   */
  declare surveyCompanyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extension.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sms.
   * @nullable
   */
  declare sms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Jobs} entity.
   */
  declare jobs: Jobs<T>[];
  /**
   * One-to-many navigation property to the {@link JobCompensations} entity.
   */
  declare jobCompensations: JobCompensations<T>[];

  constructor(_entityApi: SurveyCompaniesApi<T>) {
    super(_entityApi);
  }
}

export interface SurveyCompaniesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  surveyCompanyId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  sms?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  jobs: JobsType<T>[];
  jobCompensations: JobCompensationsType<T>[];
}
