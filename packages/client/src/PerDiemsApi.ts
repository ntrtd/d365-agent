/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerDiems } from './PerDiems';
import { PerDiemsRequestBuilder } from './PerDiemsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PerDiemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PerDiems<DeSerializersT>, DeSerializersT>
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
  ): PerDiemsApi<DeSerializersT> {
    return new PerDiemsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PerDiems;

  requestBuilder(): PerDiemsRequestBuilder<DeSerializersT> {
    return new PerDiemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<PerDiems<DeSerializersT>, DeSerializersT> {
    return entityBuilder<PerDiems<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PerDiems<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PerDiems, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PerDiems, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEDUCT_LUNCH: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCT_THREE_OR_MORE_MEALS: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OTHER_ALLOWANCE: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCT_DINNER: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCT_ONE_MEAL: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCT_TWO_MEALS: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MEAL_ALLOWANCE: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOTEL_ALLOWANCE: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCT_BREAKF: OrderableEdmTypeField<
      PerDiems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PerDiems<DeSerializers>>;
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
         * Static representation of the {@link deductLunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_LUNCH: fieldBuilder.buildEdmTypeField(
          'DeductLunch',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deductThreeOrMoreMeals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_THREE_OR_MORE_MEALS: fieldBuilder.buildEdmTypeField(
          'DeductThreeOrMoreMeals',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link otherAllowance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_ALLOWANCE: fieldBuilder.buildEdmTypeField(
          'OtherAllowance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deductDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_DINNER: fieldBuilder.buildEdmTypeField(
          'DeductDinner',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductOneMeal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_ONE_MEAL: fieldBuilder.buildEdmTypeField(
          'DeductOneMeal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deductTwoMeals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_TWO_MEALS: fieldBuilder.buildEdmTypeField(
          'DeductTwoMeals',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mealAllowance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_ALLOWANCE: fieldBuilder.buildEdmTypeField(
          'MealAllowance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hotelAllowance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOTEL_ALLOWANCE: fieldBuilder.buildEdmTypeField(
          'HotelAllowance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deductBreakf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_BREAKF: fieldBuilder.buildEdmTypeField(
          'DeductBreakf',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PerDiems)
      };
    }

    return this._schema;
  }
}
