/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CityHolidays } from './CityHolidays';
import { CityHolidaysRequestBuilder } from './CityHolidaysRequestBuilder';
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
export class CityHolidaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CityHolidays<DeSerializersT>, DeSerializersT>
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
  ): CityHolidaysApi<DeSerializersT> {
    return new CityHolidaysApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CityHolidays;

  requestBuilder(): CityHolidaysRequestBuilder<DeSerializersT> {
    return new CityHolidaysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CityHolidays<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CityHolidays<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CityHolidays<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CityHolidays, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CityHolidays, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      CityHolidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      CityHolidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_NAME: OrderableEdmTypeField<
      CityHolidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOLIDAY_DATE: OrderableEdmTypeField<
      CityHolidays<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CityHolidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CityHolidays<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField(
          'StateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_NAME: fieldBuilder.buildEdmTypeField(
          'CityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link holidayDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLIDAY_DATE: fieldBuilder.buildEdmTypeField(
          'HolidayDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CityHolidays)
      };
    }

    return this._schema;
  }
}
