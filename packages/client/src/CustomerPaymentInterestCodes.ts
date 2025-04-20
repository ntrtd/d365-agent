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
import type { CustomerPaymentInterestCodesApi } from './CustomerPaymentInterestCodesApi';
import { DayMonth } from './DayMonth';

/**
 * This class represents the entity "CustomerPaymentInterestCodes" of service "d365_metadata".
 */
export class CustomerPaymentInterestCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPaymentInterestCodesType<T>
{
  /**
   * Technical entity name for CustomerPaymentInterestCodes.
   */
  static override _entityName = 'CustomerPaymentInterestCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentInterestCodes entity.
   */
  static _keys = ['dataAreaId', 'InterestCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Interest Code.
   */
  declare interestCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Day Or Month.
   * @nullable
   */
  declare dayOrMonth?: DayMonth | null;
  /**
   * Grace Period Days.
   */
  declare gracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Interest Calculation Per.
   */
  declare interestCalculationPer: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Percentage.
   */
  declare interestPercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustomerPaymentInterestCodesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentInterestCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  interestCode: DeserializedType<T, 'Edm.String'>;
  dayOrMonth?: DayMonth | null;
  gracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  interestCalculationPer: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  interestPercentage: DeserializedType<T, 'Edm.Decimal'>;
}
