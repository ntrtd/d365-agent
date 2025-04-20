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
import type { AllowanceRatesApi } from './AllowanceRatesApi';
import { TrvFirstLastBoth } from './TrvFirstLastBoth';

/**
 * This class represents the entity "AllowanceRates" of service "d365_metadata".
 */
export class AllowanceRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AllowanceRatesType<T>
{
  /**
   * Technical entity name for AllowanceRates.
   */
  static override _entityName = 'AllowanceRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllowanceRates entity.
   */
  static _keys = [
    'dataAreaId',
    'Location',
    'StateId',
    'CountryRegionId',
    'DateFrom',
    'DateTo',
    'MinimumHours',
    'ApplyTo'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Date From.
   */
  declare dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date To.
   */
  declare dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Minimum Hours.
   */
  declare minimumHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Apply To.
   * @nullable
   */
  declare applyTo?: TrvFirstLastBoth | null;
  /**
   * Reduction In Percentage For Breakfast.
   */
  declare reductionInPercentageForBreakfast: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percentage Reduction For 3 Or More Meals.
   */
  declare percentageReductionFor3OrMoreMeals: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Percentage Reduction For 2 Meals.
   */
  declare percentageReductionFor2Meals: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reduction In Percentage For Dinner.
   */
  declare reductionInPercentageForDinner: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Hours.
   */
  declare maximumHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Other Percent.
   */
  declare otherPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reduction In Percentage For Lunch.
   */
  declare reductionInPercentageForLunch: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Meal Percent.
   */
  declare mealPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hotel Percent.
   */
  declare hotelPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percentage Reduction For 1 Meal.
   */
  declare percentageReductionFor1Meal: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AllowanceRatesApi<T>) {
    super(_entityApi);
  }
}

export interface AllowanceRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  location: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  minimumHours: DeserializedType<T, 'Edm.Decimal'>;
  applyTo?: TrvFirstLastBoth | null;
  reductionInPercentageForBreakfast: DeserializedType<T, 'Edm.Decimal'>;
  percentageReductionFor3OrMoreMeals: DeserializedType<T, 'Edm.Decimal'>;
  percentageReductionFor2Meals: DeserializedType<T, 'Edm.Decimal'>;
  reductionInPercentageForDinner: DeserializedType<T, 'Edm.Decimal'>;
  maximumHours: DeserializedType<T, 'Edm.Decimal'>;
  otherPercent: DeserializedType<T, 'Edm.Decimal'>;
  reductionInPercentageForLunch: DeserializedType<T, 'Edm.Decimal'>;
  mealPercent: DeserializedType<T, 'Edm.Decimal'>;
  hotelPercent: DeserializedType<T, 'Edm.Decimal'>;
  percentageReductionFor1Meal: DeserializedType<T, 'Edm.Decimal'>;
}
