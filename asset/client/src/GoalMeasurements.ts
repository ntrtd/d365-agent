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
import type { GoalMeasurementsApi } from './GoalMeasurementsApi';
import { NoYes } from './NoYes';
import { HcmMeasurementType } from './HcmMeasurementType';
import { Goals, GoalsType } from './Goals';
import { Measurements, MeasurementsType } from './Measurements';

/**
 * This class represents the entity "GoalMeasurements" of service "d365_metadata".
 */
export class GoalMeasurements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GoalMeasurementsType<T>
{
  /**
   * Technical entity name for GoalMeasurements.
   */
  static override _entityName = 'GoalMeasurements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GoalMeasurements entity.
   */
  static _keys = [
    'GoalId',
    'GoalHeadingId',
    'PersonnelNumber',
    'MeasurementId',
    'SequenceNumber'
  ];
  /**
   * Goal Id.
   */
  declare goalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Goal Heading Id.
   */
  declare goalHeadingId: DeserializedType<T, 'Edm.String'>;
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
   * Target Percent.
   */
  declare targetPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rating Model Id.
   * @nullable
   */
  declare ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Date.
   */
  declare actualDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Target Rating Level Id.
   * @nullable
   */
  declare targetRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Value.
   */
  declare actualValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Actual Rating Level Id.
   * @nullable
   */
  declare actualRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Amount.
   */
  declare actualAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Target Amount.
   */
  declare targetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Target Date.
   */
  declare targetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Stretch Goal.
   * @nullable
   */
  declare isStretchGoal?: NoYes | null;
  /**
   * Target Value.
   */
  declare targetValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Measurement Type.
   * @nullable
   */
  declare measurementType?: HcmMeasurementType | null;
  /**
   * Actual Percent.
   */
  declare actualPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Goals} entity.
   */
  declare measurements?: Goals<T> | null;
  /**
   * One-to-one navigation property to the {@link Measurements} entity.
   */
  declare goals?: Measurements<T> | null;

  constructor(_entityApi: GoalMeasurementsApi<T>) {
    super(_entityApi);
  }
}

export interface GoalMeasurementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  goalId: DeserializedType<T, 'Edm.String'>;
  goalHeadingId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  measurementId: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  targetPercent: DeserializedType<T, 'Edm.Decimal'>;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  actualDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  targetRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  actualValue: DeserializedType<T, 'Edm.Int32'>;
  actualRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  actualAmount: DeserializedType<T, 'Edm.Decimal'>;
  targetAmount: DeserializedType<T, 'Edm.Decimal'>;
  targetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isStretchGoal?: NoYes | null;
  targetValue: DeserializedType<T, 'Edm.Int32'>;
  measurementType?: HcmMeasurementType | null;
  actualPercent: DeserializedType<T, 'Edm.Decimal'>;
  measurements?: GoalsType<T> | null;
  goals?: MeasurementsType<T> | null;
}
