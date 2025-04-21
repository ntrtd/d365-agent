/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrvExpMobileAddressCities } from './TrvExpMobileAddressCities';
import { TrvExpMobileAddressCitiesRequestBuilder } from './TrvExpMobileAddressCitiesRequestBuilder';
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
export class TrvExpMobileAddressCitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TrvExpMobileAddressCities<DeSerializersT>, DeSerializersT>
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
  ): TrvExpMobileAddressCitiesApi<DeSerializersT> {
    return new TrvExpMobileAddressCitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrvExpMobileAddressCities;

  requestBuilder(): TrvExpMobileAddressCitiesRequestBuilder<DeSerializersT> {
    return new TrvExpMobileAddressCitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TrvExpMobileAddressCities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TrvExpMobileAddressCities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrvExpMobileAddressCities<DeSerializersT>,
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
    typeof TrvExpMobileAddressCities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrvExpMobileAddressCities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IBGE_CODE_BR: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_CODE_IT: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MUNICIPALITY_CODE_IT: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_MANUAL_CITY_KEY: EnumField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_CITY_REC_ID: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_KEY: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_KANA_JP: OrderableEdmTypeField<
      TrvExpMobileAddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TrvExpMobileAddressCities<DeSerializers>>;
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
         * Static representation of the {@link ibgeCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBGE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'IBGECode_BR',
          'Edm.String',
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
         * Static representation of the {@link cityCodeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_CODE_IT: fieldBuilder.buildEdmTypeField(
          'CityCode_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'CountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link municipalityCodeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUNICIPALITY_CODE_IT: fieldBuilder.buildEdmTypeField(
          'MunicipalityCode_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasManualCityKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_MANUAL_CITY_KEY: fieldBuilder.buildEnumField(
          'HasManualCityKey',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressCityRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressCityRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField('StateId', 'Edm.String', true),
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
         * Static representation of the {@link cityKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_KEY: fieldBuilder.buildEdmTypeField('CityKey', 'Edm.String', true),
        /**
         * Static representation of the {@link cityKanaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_KANA_JP: fieldBuilder.buildEdmTypeField(
          'CityKana_JP',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrvExpMobileAddressCities)
      };
    }

    return this._schema;
  }
}
