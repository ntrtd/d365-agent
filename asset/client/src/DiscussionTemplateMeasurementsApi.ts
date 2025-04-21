/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionTemplateMeasurements } from './DiscussionTemplateMeasurements';
import { DiscussionTemplateMeasurementsRequestBuilder } from './DiscussionTemplateMeasurementsRequestBuilder';
import { DiscussionTemplatesApi } from './DiscussionTemplatesApi';
import { MeasurementsApi } from './MeasurementsApi';
import { NoYes } from './NoYes';
import { HcmMeasurementType } from './HcmMeasurementType';
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
export class DiscussionTemplateMeasurementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DiscussionTemplateMeasurements<DeSerializersT>, DeSerializersT>
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
  ): DiscussionTemplateMeasurementsApi<DeSerializersT> {
    return new DiscussionTemplateMeasurementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link discussionTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATE: OneToOneLink<
      DiscussionTemplateMeasurements<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link measurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT: OneToOneLink<
      DiscussionTemplateMeasurements<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionTemplatesApi<DeSerializersT>,
      MeasurementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION_TEMPLATE: new OneToOneLink(
        'DiscussionTemplate',
        this,
        linkedApis[0]
      ),
      MEASUREMENT: new OneToOneLink('Measurement', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DiscussionTemplateMeasurements;

  requestBuilder(): DiscussionTemplateMeasurementsRequestBuilder<DeSerializersT> {
    return new DiscussionTemplateMeasurementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DiscussionTemplateMeasurements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscussionTemplateMeasurements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionTemplateMeasurements<DeSerializersT>,
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
    typeof DiscussionTemplateMeasurements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionTemplateMeasurements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MEASUREMENT_ID: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TARGET_PERCENT: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_RATING_LEVEL_ID: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_AMOUNT: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARGET_DATE: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_STRETCH_GOAL: EnumField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MEASUREMENT_TYPE: EnumField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      HcmMeasurementType,
      true,
      true
    >;
    TARGET_VALUE: OrderableEdmTypeField<
      DiscussionTemplateMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussionTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATE: OneToOneLink<
      DiscussionTemplateMeasurements<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link measurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT: OneToOneLink<
      DiscussionTemplateMeasurements<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionTemplateMeasurements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.Int32',
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
         * Static representation of the {@link targetPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_PERCENT: fieldBuilder.buildEdmTypeField(
          'TargetPercent',
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
         * Static representation of the {@link targetRatingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'TargetRatingLevelId',
          'Edm.String',
          true
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
         * Static representation of the {@link targetDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_DATE: fieldBuilder.buildEdmTypeField(
          'TargetDate',
          'Edm.DateTimeOffset',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionTemplateMeasurements)
      };
    }

    return this._schema;
  }
}
