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
import type { DiscussionMeasurementsApi } from './DiscussionMeasurementsApi';
import { HcmMeasurementType } from './HcmMeasurementType';
import { NoYes } from './NoYes';
import { Discussions, DiscussionsType } from './Discussions';
import { Measurements, MeasurementsType } from './Measurements';

/**
 * This class represents the entity "DiscussionMeasurements" of service "d365_metadata".
 */
export class DiscussionMeasurements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscussionMeasurementsType<T>
{
  /**
   * Technical entity name for DiscussionMeasurements.
   */
  static override _entityName = 'DiscussionMeasurements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionMeasurements entity.
   */
  static _keys = [
    'Discussion',
    'PersonnelNumber',
    'MeasurementId',
    'SequenceNumber',
    'MeasurementType'
  ];
  /**
   * Discussion.
   */
  declare discussion: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Measurement Id.
   */
  declare measurementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Measurement Type.
   * @nullable
   */
  declare measurementType?: HcmMeasurementType | null;
  /**
   * Target Value.
   */
  declare targetValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Stretch Goal.
   * @nullable
   */
  declare isStretchGoal?: NoYes | null;
  /**
   * Target Percent.
   */
  declare targetPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Target Rating Level Id.
   * @nullable
   */
  declare targetRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Percent.
   */
  declare actualPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Target Date.
   */
  declare targetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Target Amount.
   */
  declare targetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rating Model Id.
   * @nullable
   */
  declare ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Amount.
   */
  declare actualAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Actual Value.
   */
  declare actualValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Actual Date.
   */
  declare actualDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Actual Rating Level Id.
   * @nullable
   */
  declare actualRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Discussions} entity.
   */
  declare measurements?: Discussions<T> | null;
  /**
   * One-to-one navigation property to the {@link Measurements} entity.
   */
  declare discussions?: Measurements<T> | null;

  constructor(_entityApi: DiscussionMeasurementsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionMeasurementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussion: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  measurementId: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  measurementType?: HcmMeasurementType | null;
  targetValue: DeserializedType<T, 'Edm.Int32'>;
  isStretchGoal?: NoYes | null;
  targetPercent: DeserializedType<T, 'Edm.Decimal'>;
  targetRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  actualPercent: DeserializedType<T, 'Edm.Decimal'>;
  targetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  targetAmount: DeserializedType<T, 'Edm.Decimal'>;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  actualAmount: DeserializedType<T, 'Edm.Decimal'>;
  actualValue: DeserializedType<T, 'Edm.Int32'>;
  actualDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actualRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  measurements?: DiscussionsType<T> | null;
  discussions?: MeasurementsType<T> | null;
}
