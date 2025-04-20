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
import type { RetailDiscountValidationPeriodsApi } from './RetailDiscountValidationPeriodsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailDiscountValidationPeriods" of service "d365_metadata".
 */
export class RetailDiscountValidationPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDiscountValidationPeriodsType<T>
{
  /**
   * Technical entity name for RetailDiscountValidationPeriods.
   */
  static override _entityName = 'RetailDiscountValidationPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDiscountValidationPeriods entity.
   */
  static _keys = ['dataAreaId', 'PeriodId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tuesday Time Within Bounds.
   * @nullable
   */
  declare tuesdayTimeWithinBounds?: NoYes | null;
  /**
   * Saturday Time Within Bounds.
   * @nullable
   */
  declare saturdayTimeWithinBounds?: NoYes | null;
  /**
   * Friday Ending Time.
   */
  declare fridayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Wednesday Time Within Bounds.
   * @nullable
   */
  declare wednesdayTimeWithinBounds?: NoYes | null;
  /**
   * Saturday Ending Time After Midnight.
   * @nullable
   */
  declare saturdayEndingTimeAfterMidnight?: NoYes | null;
  /**
   * Monday Ending Time After Midnight.
   * @nullable
   */
  declare mondayEndingTimeAfterMidnight?: NoYes | null;
  /**
   * Thursday Ending Time.
   */
  declare thursdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Friday Time Within Bounds.
   * @nullable
   */
  declare fridayTimeWithinBounds?: NoYes | null;
  /**
   * Tuesday Ending Time After Midnight.
   * @nullable
   */
  declare tuesdayEndingTimeAfterMidnight?: NoYes | null;
  /**
   * Friday Ending Time After Midnight.
   * @nullable
   */
  declare fridayEndingTimeAfterMidnight?: NoYes | null;
  /**
   * Sunday Ending Time.
   */
  declare sundayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ending Time.
   */
  declare endingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Time Within Bounds.
   * @nullable
   */
  declare timeWithinBounds?: NoYes | null;
  /**
   * Saturday Ending Time.
   */
  declare saturdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tuesday Starting Time.
   */
  declare tuesdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Thursday Ending Time After Midnight.
   * @nullable
   */
  declare thursdayEndingTimeAfterMidnight?: NoYes | null;
  /**
   * Thursday Starting Time.
   */
  declare thursdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Wednesday Ending Time.
   */
  declare wednesdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Wednesday Starting Time.
   */
  declare wednesdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Monday Time Within Bounds.
   * @nullable
   */
  declare mondayTimeWithinBounds?: NoYes | null;
  /**
   * Sunday Ending Time After Midnight.
   * @nullable
   */
  declare sundayEndingTimeAfterMidnight?: NoYes | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Saturday Starting Time.
   */
  declare saturdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Monday Ending Time.
   */
  declare mondayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Thursday Time Within Bounds.
   * @nullable
   */
  declare thursdayTimeWithinBounds?: NoYes | null;
  /**
   * Tuesday Ending Time.
   */
  declare tuesdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Starting Time.
   */
  declare startingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Wednesday Ending Time After Midnight.
   * @nullable
   */
  declare wednesdayEndingTimeAfterMidnight?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sunday Time Within Bounds.
   * @nullable
   */
  declare sundayTimeWithinBounds?: NoYes | null;
  /**
   * Friday Starting Time.
   */
  declare fridayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sunday Starting Time.
   */
  declare sundayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ending Time After Midnight.
   * @nullable
   */
  declare endingTimeAfterMidnight?: NoYes | null;
  /**
   * Monday Starting Time.
   */
  declare mondayStartingTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailDiscountValidationPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDiscountValidationPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  tuesdayTimeWithinBounds?: NoYes | null;
  saturdayTimeWithinBounds?: NoYes | null;
  fridayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  wednesdayTimeWithinBounds?: NoYes | null;
  saturdayEndingTimeAfterMidnight?: NoYes | null;
  mondayEndingTimeAfterMidnight?: NoYes | null;
  thursdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  fridayTimeWithinBounds?: NoYes | null;
  tuesdayEndingTimeAfterMidnight?: NoYes | null;
  fridayEndingTimeAfterMidnight?: NoYes | null;
  sundayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  endingTime: DeserializedType<T, 'Edm.Int32'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  timeWithinBounds?: NoYes | null;
  saturdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  tuesdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  thursdayEndingTimeAfterMidnight?: NoYes | null;
  thursdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  wednesdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  wednesdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  mondayTimeWithinBounds?: NoYes | null;
  sundayEndingTimeAfterMidnight?: NoYes | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  saturdayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  mondayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  thursdayTimeWithinBounds?: NoYes | null;
  tuesdayEndingTime: DeserializedType<T, 'Edm.Int32'>;
  startingTime: DeserializedType<T, 'Edm.Int32'>;
  wednesdayEndingTimeAfterMidnight?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sundayTimeWithinBounds?: NoYes | null;
  fridayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  sundayStartingTime: DeserializedType<T, 'Edm.Int32'>;
  endingTimeAfterMidnight?: NoYes | null;
  mondayStartingTime: DeserializedType<T, 'Edm.Int32'>;
}
