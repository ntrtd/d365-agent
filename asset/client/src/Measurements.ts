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
import type { MeasurementsApi } from './MeasurementsApi';
import { HcmMeasurementType } from './HcmMeasurementType';
import { Currencies, CurrenciesType } from './Currencies';
import { RatingModels, RatingModelsType } from './RatingModels';
import { GoalMeasurements, GoalMeasurementsType } from './GoalMeasurements';
import {
  GoalTemplateMeasurements,
  GoalTemplateMeasurementsType
} from './GoalTemplateMeasurements';
import {
  DiscussionMeasurements,
  DiscussionMeasurementsType
} from './DiscussionMeasurements';
import {
  DiscussionTemplateMeasurements,
  DiscussionTemplateMeasurementsType
} from './DiscussionTemplateMeasurements';

/**
 * This class represents the entity "Measurements" of service "d365_metadata".
 */
export class Measurements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MeasurementsType<T>
{
  /**
   * Technical entity name for Measurements.
   */
  static override _entityName = 'Measurements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Measurements entity.
   */
  static _keys = ['MeasurementId'];
  /**
   * Measurement Id.
   */
  declare measurementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating Model Id.
   * @nullable
   */
  declare ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Measurement Type.
   * @nullable
   */
  declare measurementType?: HcmMeasurementType | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-many navigation property to the {@link GoalMeasurements} entity.
   */
  declare goals: GoalMeasurements<T>[];
  /**
   * One-to-many navigation property to the {@link GoalTemplateMeasurements} entity.
   */
  declare goalTemplateMeasurements: GoalTemplateMeasurements<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionMeasurements} entity.
   */
  declare discussions: DiscussionMeasurements<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionTemplateMeasurements} entity.
   */
  declare discussionMeasurements: DiscussionTemplateMeasurements<T>[];

  constructor(_entityApi: MeasurementsApi<T>) {
    super(_entityApi);
  }
}

export interface MeasurementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  measurementId: DeserializedType<T, 'Edm.String'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  measurementType?: HcmMeasurementType | null;
  currency?: CurrenciesType<T> | null;
  ratingModel?: RatingModelsType<T> | null;
  goals: GoalMeasurementsType<T>[];
  goalTemplateMeasurements: GoalTemplateMeasurementsType<T>[];
  discussions: DiscussionMeasurementsType<T>[];
  discussionMeasurements: DiscussionTemplateMeasurementsType<T>[];
}
