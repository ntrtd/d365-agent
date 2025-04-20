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
import type { PayIntV1JobCompensationsApi } from './PayIntV1JobCompensationsApi';

/**
 * This class represents the entity "PayIntV1JobCompensations" of service "d365_metadata".
 */
export class PayIntV1JobCompensations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1JobCompensationsType<T>
{
  /**
   * Technical entity name for PayIntV1JobCompensations.
   */
  static override _entityName = 'PayIntV1JobCompensations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1JobCompensations entity.
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

  constructor(_entityApi: PayIntV1JobCompensationsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1JobCompensationsType<
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
}
