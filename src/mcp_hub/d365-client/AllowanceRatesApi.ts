/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllowanceRates } from './AllowanceRates';
import { AllowanceRatesRequestBuilder } from './AllowanceRatesRequestBuilder';
import { TrvFirstLastBoth } from './TrvFirstLastBoth';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AllowanceRatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AllowanceRates<DeSerializersT>, DeSerializersT>
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
  ): AllowanceRatesApi<DeSerializersT> {
    return new AllowanceRatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AllowanceRates;

  requestBuilder(): AllowanceRatesRequestBuilder<DeSerializersT> {
    return new AllowanceRatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllowanceRates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AllowanceRates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AllowanceRates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AllowanceRates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AllowanceRates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MINIMUM_HOURS: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPLY_TO: EnumField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      TrvFirstLastBoth,
      true,
      true
    >;
    REDUCTION_IN_PERCENTAGE_FOR_BREAKFAST: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENTAGE_REDUCTION_FOR_3_OR_MORE_MEALS: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENTAGE_REDUCTION_FOR_2_MEALS: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REDUCTION_IN_PERCENTAGE_FOR_DINNER: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_HOURS: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OTHER_PERCENT: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REDUCTION_IN_PERCENTAGE_FOR_LUNCH: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MEAL_PERCENT: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOTEL_PERCENT: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENTAGE_REDUCTION_FOR_1_MEAL: OrderableEdmTypeField<
      AllowanceRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AllowanceRates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField(
          'StateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FROM: fieldBuilder.buildEdmTypeField(
          'DateFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO: fieldBuilder.buildEdmTypeField(
          'DateTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link minimumHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_HOURS: fieldBuilder.buildEdmTypeField(
          'MinimumHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link applyTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_TO: fieldBuilder.buildEnumField(
          'ApplyTo',
          TrvFirstLastBoth,
          true
        ),
        /**
         * Static representation of the {@link reductionInPercentageForBreakfast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_IN_PERCENTAGE_FOR_BREAKFAST: fieldBuilder.buildEdmTypeField(
          'ReductionInPercentageForBreakfast',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentageReductionFor3OrMoreMeals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_REDUCTION_FOR_3_OR_MORE_MEALS:
          fieldBuilder.buildEdmTypeField(
            'PercentageReductionFor3OrMoreMeals',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link percentageReductionFor2Meals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_REDUCTION_FOR_2_MEALS: fieldBuilder.buildEdmTypeField(
          'PercentageReductionFor2Meals',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reductionInPercentageForDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_IN_PERCENTAGE_FOR_DINNER: fieldBuilder.buildEdmTypeField(
          'ReductionInPercentageForDinner',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_HOURS: fieldBuilder.buildEdmTypeField(
          'MaximumHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link otherPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_PERCENT: fieldBuilder.buildEdmTypeField(
          'OtherPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reductionInPercentageForLunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_IN_PERCENTAGE_FOR_LUNCH: fieldBuilder.buildEdmTypeField(
          'ReductionInPercentageForLunch',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mealPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_PERCENT: fieldBuilder.buildEdmTypeField(
          'MealPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hotelPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOTEL_PERCENT: fieldBuilder.buildEdmTypeField(
          'HotelPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentageReductionFor1Meal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_REDUCTION_FOR_1_MEAL: fieldBuilder.buildEdmTypeField(
          'PercentageReductionFor1Meal',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllowanceRates)
      };
    }

    return this._schema;
  }
}
