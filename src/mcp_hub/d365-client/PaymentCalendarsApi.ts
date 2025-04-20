/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentCalendars } from './PaymentCalendars';
import { PaymentCalendarsRequestBuilder } from './PaymentCalendarsRequestBuilder';
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
export class PaymentCalendarsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentCalendars<DeSerializersT>, DeSerializersT>
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
  ): PaymentCalendarsApi<DeSerializersT> {
    return new PaymentCalendarsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PaymentCalendars;

  requestBuilder(): PaymentCalendarsRequestBuilder<DeSerializersT> {
    return new PaymentCalendarsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentCalendars<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentCalendars<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentCalendars<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymentCalendars, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentCalendars,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FRIDAY_BUSINESS_DAY: EnumField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_THURSDAY_BUSINESS_DAY: EnumField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WEDNESDAY_BUSINESS_DAY: EnumField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SATURDAY_BUSINESS_DAY: EnumField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SUNDAY_BUSINESS_DAY: EnumField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MONDAY_BUSINESS_DAY: EnumField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TUESDAY_BUSINESS_DAY: EnumField<
      PaymentCalendars<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PaymentCalendars<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFridayBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FRIDAY_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'IsFridayBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isThursdayBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_THURSDAY_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'IsThursdayBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isWednesdayBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WEDNESDAY_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'IsWednesdayBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSaturdayBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SATURDAY_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'IsSaturdayBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSundayBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUNDAY_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'IsSundayBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isMondayBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MONDAY_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'IsMondayBusinessDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTuesdayBusinessDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TUESDAY_BUSINESS_DAY: fieldBuilder.buildEnumField(
          'IsTuesdayBusinessDay',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentCalendars)
      };
    }

    return this._schema;
  }
}
