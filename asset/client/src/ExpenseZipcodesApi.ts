/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseZipcodes } from './ExpenseZipcodes';
import { ExpenseZipcodesRequestBuilder } from './ExpenseZipcodesRequestBuilder';
import { AllEvenOdd } from './AllEvenOdd';
import { Timezone } from './Timezone';
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
export class ExpenseZipcodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseZipcodes<DeSerializersT>, DeSerializersT>
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
  ): ExpenseZipcodesApi<DeSerializersT> {
    return new ExpenseZipcodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpenseZipcodes;

  requestBuilder(): ExpenseZipcodesRequestBuilder<DeSerializersT> {
    return new ExpenseZipcodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseZipcodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseZipcodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseZipcodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExpenseZipcodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseZipcodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ZIP_CODE: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_ALIAS: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVEN_ODD: EnumField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      AllEvenOdd,
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_NUM: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_ZONE: EnumField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CITY_REC_ID: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ZIPCODE_REC_ID: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STREET_NAME: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_NUM: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      ExpenseZipcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpenseZipcodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ZipCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cityAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_ALIAS: fieldBuilder.buildEdmTypeField(
          'CityAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link evenOdd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVEN_ODD: fieldBuilder.buildEnumField('EvenOdd', AllEvenOdd, true),
        /**
         * Static representation of the {@link districtName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link district} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT: fieldBuilder.buildEdmTypeField(
          'District',
          'Edm.Int64',
          false
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
         * Static representation of the {@link toNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_NUM: fieldBuilder.buildEdmTypeField('ToNum', 'Edm.Int32', false),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link cityRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_REC_ID: fieldBuilder.buildEdmTypeField(
          'CityRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link zipcodeRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIPCODE_REC_ID: fieldBuilder.buildEdmTypeField(
          'ZipcodeRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link streetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NAME: fieldBuilder.buildEdmTypeField(
          'StreetName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link fromNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_NUM: fieldBuilder.buildEdmTypeField('FromNum', 'Edm.Int32', false),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseZipcodes)
      };
    }

    return this._schema;
  }
}
