/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Measurements } from './Measurements';
import { MeasurementsRequestBuilder } from './MeasurementsRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { RatingModelsApi } from './RatingModelsApi';
import { GoalMeasurementsApi } from './GoalMeasurementsApi';
import { GoalTemplateMeasurementsApi } from './GoalTemplateMeasurementsApi';
import { DiscussionMeasurementsApi } from './DiscussionMeasurementsApi';
import { DiscussionTemplateMeasurementsApi } from './DiscussionTemplateMeasurementsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class MeasurementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Measurements<DeSerializersT>, DeSerializersT>
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
  ): MeasurementsApi<DeSerializersT> {
    return new MeasurementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      GoalMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goalTemplateMeasurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATE_MEASUREMENTS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      GoalTemplateMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      DiscussionMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionMeasurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_MEASUREMENTS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplateMeasurementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      RatingModelsApi<DeSerializersT>,
      GoalMeasurementsApi<DeSerializersT>,
      GoalTemplateMeasurementsApi<DeSerializersT>,
      DiscussionMeasurementsApi<DeSerializersT>,
      DiscussionTemplateMeasurementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[0]),
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[1]),
      GOALS: new OneToManyLink('Goals', this, linkedApis[2]),
      GOAL_TEMPLATE_MEASUREMENTS: new OneToManyLink(
        'GoalTemplateMeasurements',
        this,
        linkedApis[3]
      ),
      DISCUSSIONS: new OneToManyLink('Discussions', this, linkedApis[4]),
      DISCUSSION_MEASUREMENTS: new OneToManyLink(
        'DiscussionMeasurements',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = Measurements;

  requestBuilder(): MeasurementsRequestBuilder<DeSerializersT> {
    return new MeasurementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Measurements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Measurements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Measurements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Measurements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Measurements, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MEASUREMENT_ID: OrderableEdmTypeField<
      Measurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      Measurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      Measurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEASUREMENT_TYPE: EnumField<
      Measurements<DeSerializers>,
      DeSerializersT,
      HcmMeasurementType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOALS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      GoalMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goalTemplateMeasurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOAL_TEMPLATE_MEASUREMENTS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      GoalTemplateMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSIONS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      DiscussionMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionMeasurements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_MEASUREMENTS: OneToManyLink<
      Measurements<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplateMeasurementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Measurements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
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
         * Static representation of the {@link measurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASUREMENT_TYPE: fieldBuilder.buildEnumField(
          'MeasurementType',
          HcmMeasurementType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Measurements)
      };
    }

    return this._schema;
  }
}
