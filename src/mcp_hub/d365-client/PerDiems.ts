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
import type { PerDiemsApi } from './PerDiemsApi';

/**
 * This class represents the entity "PerDiems" of service "d365_metadata".
 */
export class PerDiems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PerDiemsType<T>
{
  /**
   * Technical entity name for PerDiems.
   */
  static override _entityName = 'PerDiems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PerDiems entity.
   */
  static _keys = [
    'dataAreaId',
    'Location',
    'StateId',
    'CountryRegionId',
    'DateFrom',
    'DateTo'
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
   * Deduct Lunch.
   */
  declare deductLunch: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deduct Three Or More Meals.
   */
  declare deductThreeOrMoreMeals: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Other Allowance.
   */
  declare otherAllowance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deduct Dinner.
   */
  declare deductDinner: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduct One Meal.
   */
  declare deductOneMeal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deduct Two Meals.
   */
  declare deductTwoMeals: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Meal Allowance.
   */
  declare mealAllowance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hotel Allowance.
   */
  declare hotelAllowance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deduct Breakf.
   */
  declare deductBreakf: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PerDiemsApi<T>) {
    super(_entityApi);
  }
}

export interface PerDiemsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  location: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deductLunch: DeserializedType<T, 'Edm.Decimal'>;
  deductThreeOrMoreMeals: DeserializedType<T, 'Edm.Decimal'>;
  otherAllowance: DeserializedType<T, 'Edm.Decimal'>;
  deductDinner: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  deductOneMeal: DeserializedType<T, 'Edm.Decimal'>;
  deductTwoMeals: DeserializedType<T, 'Edm.Decimal'>;
  mealAllowance: DeserializedType<T, 'Edm.Decimal'>;
  hotelAllowance: DeserializedType<T, 'Edm.Decimal'>;
  deductBreakf: DeserializedType<T, 'Edm.Decimal'>;
}
