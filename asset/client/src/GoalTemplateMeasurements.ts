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
import type { GoalTemplateMeasurementsApi } from './GoalTemplateMeasurementsApi';
import { NoYes } from './NoYes';
import { HcmMeasurementType } from './HcmMeasurementType';
import { GoalTemplates, GoalTemplatesType } from './GoalTemplates';
import { Measurements, MeasurementsType } from './Measurements';

/**
 * This class represents the entity "GoalTemplateMeasurements" of service "d365_metadata".
 */
export class GoalTemplateMeasurements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GoalTemplateMeasurementsType<T>
{
  /**
   * Technical entity name for GoalTemplateMeasurements.
   */
  static override _entityName = 'GoalTemplateMeasurements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GoalTemplateMeasurements entity.
   */
  static _keys = ['TemplateId', 'MeasurementId', 'SequenceNumber'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.Int32'>;
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
   * Target Rating Level Id.
   * @nullable
   */
  declare targetRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Measurement Type.
   * @nullable
   */
  declare measurementType?: HcmMeasurementType | null;
  /**
   * Target Value.
   */
  declare targetValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link GoalTemplates} entity.
   */
  declare goalTemplate?: GoalTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link Measurements} entity.
   */
  declare measurement?: Measurements<T> | null;

  constructor(_entityApi: GoalTemplateMeasurementsApi<T>) {
    super(_entityApi);
  }
}

export interface GoalTemplateMeasurementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.Int32'>;
  measurementId: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  targetPercent: DeserializedType<T, 'Edm.Decimal'>;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  targetRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  targetAmount: DeserializedType<T, 'Edm.Decimal'>;
  targetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isStretchGoal?: NoYes | null;
  measurementType?: HcmMeasurementType | null;
  targetValue: DeserializedType<T, 'Edm.Int32'>;
  goalTemplate?: GoalTemplatesType<T> | null;
  measurement?: MeasurementsType<T> | null;
}
