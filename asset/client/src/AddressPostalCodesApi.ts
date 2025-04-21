/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressPostalCodes } from './AddressPostalCodes';
import { AddressPostalCodesRequestBuilder } from './AddressPostalCodesRequestBuilder';
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
export class AddressPostalCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressPostalCodes<DeSerializersT>, DeSerializersT>
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
  ): AddressPostalCodesApi<DeSerializersT> {
    return new AddressPostalCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AddressPostalCodes;

  requestBuilder(): AddressPostalCodesRequestBuilder<DeSerializersT> {
    return new AddressPostalCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressPostalCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressPostalCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressPostalCodes<DeSerializersT>,
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
    typeof AddressPostalCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressPostalCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ZIP_CODE: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_ID: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTRICT_ID: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_NUMBER_MINIMUM: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STREET_NUMBER_MAXIMUM: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY_ALIAS: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER_VALIDITY: EnumField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      AllEvenOdd,
      true,
      true
    >;
    TIME_ZONE: EnumField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      AddressPostalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AddressPostalCodes<DeSerializers>>;
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
         * Static representation of the {@link countyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'CountyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_ID: fieldBuilder.buildEdmTypeField('CityId', 'Edm.String', false),
        /**
         * Static representation of the {@link districtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_ID: fieldBuilder.buildEdmTypeField(
          'DistrictId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetNumberMinimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER_MINIMUM: fieldBuilder.buildEdmTypeField(
          'StreetNumberMinimum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link streetNumberMaximum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER_MAXIMUM: fieldBuilder.buildEdmTypeField(
          'StreetNumberMaximum',
          'Edm.Int32',
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
         * Static representation of the {@link streetNumberValidity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER_VALIDITY: fieldBuilder.buildEnumField(
          'StreetNumberValidity',
          AllEvenOdd,
          true
        ),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressPostalCodes)
      };
    }

    return this._schema;
  }
}
