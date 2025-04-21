/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDiscountValidationPeriods } from './RetailDiscountValidationPeriods';
import { RetailDiscountValidationPeriodsRequestBuilder } from './RetailDiscountValidationPeriodsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailDiscountValidationPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailDiscountValidationPeriods<DeSerializersT>, DeSerializersT>
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
  ): RetailDiscountValidationPeriodsApi<DeSerializersT> {
    return new RetailDiscountValidationPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDiscountValidationPeriods;

  requestBuilder(): RetailDiscountValidationPeriodsRequestBuilder<DeSerializersT> {
    return new RetailDiscountValidationPeriodsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDiscountValidationPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDiscountValidationPeriods<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDiscountValidationPeriods<DeSerializersT>,
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
    typeof RetailDiscountValidationPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDiscountValidationPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TUESDAY_TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SATURDAY_TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FRIDAY_ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEDNESDAY_TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SATURDAY_ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MONDAY_ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THURSDAY_ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FRIDAY_TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TUESDAY_ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FRIDAY_ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUNDAY_ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SATURDAY_ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TUESDAY_STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THURSDAY_ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THURSDAY_STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEDNESDAY_ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEDNESDAY_STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONDAY_TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUNDAY_ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SATURDAY_STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONDAY_ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THURSDAY_TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TUESDAY_ENDING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEDNESDAY_ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUNDAY_TIME_WITHIN_BOUNDS: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FRIDAY_STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUNDAY_STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENDING_TIME_AFTER_MIDNIGHT: EnumField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MONDAY_STARTING_TIME: OrderableEdmTypeField<
      RetailDiscountValidationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailDiscountValidationPeriods<DeSerializers>>;
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
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tuesdayTimeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'tuesdayTimeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link saturdayTimeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'saturdayTimeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fridayEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'fridayEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link wednesdayTimeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'wednesdayTimeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link saturdayEndingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'saturdayEndingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mondayEndingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'mondayEndingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link thursdayEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'thursdayEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fridayTimeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'fridayTimeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tuesdayEndingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'tuesdayEndingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fridayEndingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'fridayEndingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sundayEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'sundayEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link endingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'endingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'validTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link timeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'timeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link saturdayEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'saturdayEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tuesdayStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'tuesdayStartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thursdayEndingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'thursdayEndingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link thursdayStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'thursdayStartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link wednesdayEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'wednesdayEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link wednesdayStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'wednesdayStartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mondayTimeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'mondayTimeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sundayEndingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'sundayEndingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'validFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link saturdayStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'saturdayStartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mondayEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'mondayEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thursdayTimeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'thursdayTimeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tuesdayEndingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'tuesdayEndingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'startingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link wednesdayEndingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'wednesdayEndingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link sundayTimeWithinBounds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_TIME_WITHIN_BOUNDS: fieldBuilder.buildEnumField(
          'sundayTimeWithinBounds',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fridayStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'fridayStartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sundayStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'sundayStartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link endingTimeAfterMidnight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_TIME_AFTER_MIDNIGHT: fieldBuilder.buildEnumField(
          'endingTimeAfterMidnight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mondayStartingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'mondayStartingTime',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDiscountValidationPeriods)
      };
    }

    return this._schema;
  }
}
