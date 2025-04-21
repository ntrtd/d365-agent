/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionMeasurements } from './DiscussionMeasurements';
import { DiscussionMeasurementsRequestBuilder } from './DiscussionMeasurementsRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { MeasurementsApi } from './MeasurementsApi';
import { HcmMeasurementType } from './HcmMeasurementType';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DiscussionMeasurementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionMeasurements<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): DiscussionMeasurementsApi<DeSerializersT> {
    return new DiscussionMeasurementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToOneLink<
      DiscussionMeasurements<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToOneLink<
      DiscussionMeasurements<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionsApi<DeSerializersT>,
      MeasurementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MEASUREMENTS: new OneToOneLink('Measurements', this, linkedApis[0]),
      DISCUSSIONS: new OneToOneLink('Discussions', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DiscussionMeasurements;

  requestBuilder(): DiscussionMeasurementsRequestBuilder<DeSerializersT> {
    return new DiscussionMeasurementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionMeasurements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscussionMeasurements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionMeasurements<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DiscussionMeasurements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionMeasurements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MEASUREMENT_ID: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MEASUREMENT_TYPE: EnumField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      HcmMeasurementType,
      true,
      true
    >;
    TARGET_VALUE: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_STRETCH_GOAL: EnumField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TARGET_PERCENT: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARGET_RATING_LEVEL_ID: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_PERCENT: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARGET_DATE: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TARGET_AMOUNT: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_AMOUNT: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTUAL_VALUE: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTUAL_DATE: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTUAL_RATING_LEVEL_ID: OrderableEdmTypeField<
      DiscussionMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link measurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENTS: OneToOneLink<
      DiscussionMeasurements<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToOneLink<
      DiscussionMeasurements<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionMeasurements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link discussion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION: fieldBuilder.buildEdmTypeField(
          'Discussion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link measurementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASUREMENT_ID: fieldBuilder.buildEdmTypeField(
          'MeasurementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link measurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASUREMENT_TYPE: fieldBuilder.buildEnumField(
          'MeasurementType',
          HcmMeasurementType,
          true
        ),
        /**
         * Static representation of the {@link targetValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_VALUE: fieldBuilder.buildEdmTypeField(
          'TargetValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isStretchGoal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STRETCH_GOAL: fieldBuilder.buildEnumField(
          'IsStretchGoal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link targetPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_PERCENT: fieldBuilder.buildEdmTypeField(
          'TargetPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link targetRatingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'TargetRatingLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_PERCENT: fieldBuilder.buildEdmTypeField(
          'ActualPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link targetDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_DATE: fieldBuilder.buildEdmTypeField(
          'TargetDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link targetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TargetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ratingModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ActualAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link actualValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_VALUE: fieldBuilder.buildEdmTypeField(
          'ActualValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link actualDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_DATE: fieldBuilder.buildEdmTypeField(
          'ActualDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actualRatingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'ActualRatingLevelId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionMeasurements)
      };
    }

    return this._schema;
  }
}
