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
import type { PaymentSurveyCodesApi } from './PaymentSurveyCodesApi';

/**
 * This class represents the entity "PaymentSurveyCodes" of service "d365_metadata".
 */
export class PaymentSurveyCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentSurveyCodesType<T>
{
  /**
   * Technical entity name for PaymentSurveyCodes.
   */
  static override _entityName = 'PaymentSurveyCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentSurveyCodes entity.
   */
  static _keys = ['dataAreaId', 'SurveyCode', 'CentralBankPurposeCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Survey Code.
   */
  declare surveyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Central Bank Purpose Code.
   */
  declare centralBankPurposeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Summary.
   * @nullable
   */
  declare countryRegionSummary?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PaymentSurveyCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentSurveyCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  surveyCode: DeserializedType<T, 'Edm.String'>;
  centralBankPurposeCode: DeserializedType<T, 'Edm.String'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionSummary?: DeserializedType<T, 'Edm.String'> | null;
}
