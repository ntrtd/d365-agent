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
import type { PayIntV1JobsApi } from './PayIntV1JobsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1Jobs" of service "d365_metadata".
 */
export class PayIntV1Jobs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1JobsType<T>
{
  /**
   * Technical entity name for PayIntV1Jobs.
   */
  static override _entityName = 'PayIntV1Jobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1Jobs entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   */
  declare title: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Market Price Source.
   * @nullable
   */
  declare marketPriceSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Number Of Positions.
   */
  declare maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid Hourly.
   * @nullable
   */
  declare paidHourly?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Compensation Reference Job.
   * @nullable
   */
  declare compensationReferenceJob?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Function Id.
   * @nullable
   */
  declare functionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Family Id.
   * @nullable
   */
  declare jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Unlimited Positions.
   * @nullable
   */
  declare allowUnlimitedPositions?: NoYes | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type.
   */
  declare jobType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Compensation Survey Company.
   */
  declare compensationSurveyCompany: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Compensation Level.
   */
  declare compensationLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Market Price Control Point.
   */
  declare marketPriceControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Family.
   */
  declare jobFamily: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Market Price Low Threshold.
   */
  declare marketPriceLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Function.
   */
  declare function: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Compensation Survey Company Id.
   * @nullable
   */
  declare compensationSurveyCompanyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Price High Threshold.
   */
  declare marketPriceHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Description.
   * @nullable
   */
  declare jobDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1JobsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1JobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  title: DeserializedType<T, 'Edm.Int64'>;
  marketPriceSource?: DeserializedType<T, 'Edm.String'> | null;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  paidHourly?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationReferenceJob?: DeserializedType<T, 'Edm.String'> | null;
  functionId?: DeserializedType<T, 'Edm.String'> | null;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  allowUnlimitedPositions?: NoYes | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobType: DeserializedType<T, 'Edm.Int64'>;
  compensationSurveyCompany: DeserializedType<T, 'Edm.Int64'>;
  compensationLevel: DeserializedType<T, 'Edm.Int64'>;
  marketPriceControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  jobFamily: DeserializedType<T, 'Edm.Int64'>;
  marketPriceLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  function: DeserializedType<T, 'Edm.Int64'>;
  compensationSurveyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  marketPriceHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  jobDescription?: DeserializedType<T, 'Edm.String'> | null;
}
