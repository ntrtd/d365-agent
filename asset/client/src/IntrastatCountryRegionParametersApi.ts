/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatCountryRegionParameters } from './IntrastatCountryRegionParameters';
import { IntrastatCountryRegionParametersRequestBuilder } from './IntrastatCountryRegionParametersRequestBuilder';
import { CountryRegionType } from './CountryRegionType';
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
export class IntrastatCountryRegionParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IntrastatCountryRegionParameters<DeSerializersT>, DeSerializersT>
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
  ): IntrastatCountryRegionParametersApi<DeSerializersT> {
    return new IntrastatCountryRegionParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntrastatCountryRegionParameters;

  requestBuilder(): IntrastatCountryRegionParametersRequestBuilder<DeSerializersT> {
    return new IntrastatCountryRegionParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    IntrastatCountryRegionParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntrastatCountryRegionParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntrastatCountryRegionParameters<DeSerializersT>,
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
    typeof IntrastatCountryRegionParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntrastatCountryRegionParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IntrastatCountryRegionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      IntrastatCountryRegionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_TYPE: EnumField<
      IntrastatCountryRegionParameters<DeSerializers>,
      DeSerializersT,
      CountryRegionType,
      true,
      true
    >;
    INTRASTAT_CODE: OrderableEdmTypeField<
      IntrastatCountryRegionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      IntrastatCountryRegionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLACK_LISTED_COUNTRY: EnumField<
      IntrastatCountryRegionParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_THREE_DIGIT_CODE: OrderableEdmTypeField<
      IntrastatCountryRegionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntrastatCountryRegionParameters<DeSerializers>>;
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
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryRegionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_TYPE: fieldBuilder.buildEnumField(
          'CountryRegionType',
          CountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link intrastatCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatCode',
          'Edm.String',
          true
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
         * Static representation of the {@link blackListedCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLACK_LISTED_COUNTRY: fieldBuilder.buildEnumField(
          'BlackListedCountry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link countryThreeDigitCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_THREE_DIGIT_CODE: fieldBuilder.buildEdmTypeField(
          'CountryThreeDigitCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntrastatCountryRegionParameters)
      };
    }

    return this._schema;
  }
}
