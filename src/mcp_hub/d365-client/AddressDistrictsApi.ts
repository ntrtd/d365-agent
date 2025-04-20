/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressDistricts } from './AddressDistricts';
import { AddressDistrictsRequestBuilder } from './AddressDistrictsRequestBuilder';
import { AddressStatesApi } from './AddressStatesApi';
import { AddressCountiesApi } from './AddressCountiesApi';
import { AddressCitiesApi } from './AddressCitiesApi';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AddressDistrictsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressDistricts<DeSerializersT>, DeSerializersT>
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
  ): AddressDistrictsApi<DeSerializersT> {
    return new AddressDistrictsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link state} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATE: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link county} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTY: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link city} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITY: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_REGION: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressStatesApi<DeSerializersT>,
      AddressCountiesApi<DeSerializersT>,
      AddressCitiesApi<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      STATE: new OneToOneLink('State', this, linkedApis[0]),
      COUNTY: new OneToOneLink('County', this, linkedApis[1]),
      CITY: new OneToOneLink('City', this, linkedApis[2]),
      COUNTRY_REGION: new OneToOneLink('CountryRegion', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = AddressDistricts;

  requestBuilder(): AddressDistrictsRequestBuilder<DeSerializersT> {
    return new AddressDistrictsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressDistricts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressDistricts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressDistricts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AddressDistricts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressDistricts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISTRICT: OrderableEdmTypeField<
      AddressDistricts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_KEY: OrderableEdmTypeField<
      AddressDistricts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AddressDistricts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      AddressDistricts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      AddressDistricts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AddressDistricts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link state} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATE: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link county} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTY: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link city} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITY: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_REGION: OneToOneLink<
      AddressDistricts<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressDistricts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link district} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT: fieldBuilder.buildEdmTypeField(
          'District',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cityKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_KEY: fieldBuilder.buildEdmTypeField(
          'CityKey',
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
        ALL_FIELDS: new AllFields('*', AddressDistricts)
      };
    }

    return this._schema;
  }
}
