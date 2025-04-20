/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressStreets } from './AddressStreets';
import { AddressStreetsRequestBuilder } from './AddressStreetsRequestBuilder';
import { AddressObjectStatusRu } from './AddressObjectStatusRu';
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
export class AddressStreetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressStreets<DeSerializersT>, DeSerializersT>
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
  ): AddressStreetsApi<DeSerializersT> {
    return new AddressStreetsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AddressStreets;

  requestBuilder(): AddressStreetsRequestBuilder<DeSerializersT> {
    return new AddressStreetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressStreets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressStreets<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressStreets<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AddressStreets, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AddressStreets, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_FK_NAME: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTRICT_FK_NAME: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROPERTIES_FK_OKATO: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTIES_FK_IMNS_DISTRICT: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTIES_FK_OBJECT_STATUS: EnumField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      AddressObjectStatusRu,
      true,
      true
    >;
    ZIP_CODE_FK_ZIP_CODE: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTIES_FK_GNI_CODE: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TYPE_TABLE_RU_ADDR_TYPE_CODE: OrderableEdmTypeField<
      AddressStreets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AddressStreets<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', false),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', false),
        /**
         * Static representation of the {@link cityFkName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_FK_NAME: fieldBuilder.buildEdmTypeField(
          'City_FK_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link districtFkName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_FK_NAME: fieldBuilder.buildEdmTypeField(
          'District_FK_Name',
          'Edm.String',
          false
        ),
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
          false
        ),
        /**
         * Static representation of the {@link propertiesFkOkato} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_FK_OKATO: fieldBuilder.buildEdmTypeField(
          'Properties_FK_OKATO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propertiesFkImnsDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_FK_IMNS_DISTRICT: fieldBuilder.buildEdmTypeField(
          'Properties_FK_IMNSDistrict',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propertiesFkObjectStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_FK_OBJECT_STATUS: fieldBuilder.buildEnumField(
          'Properties_FK_ObjectStatus',
          AddressObjectStatusRu,
          true
        ),
        /**
         * Static representation of the {@link zipCodeFkZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE_FK_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ZipCode_FK_ZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link propertiesFkGniCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_FK_GNI_CODE: fieldBuilder.buildEdmTypeField(
          'Properties_FK_GniCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTypeTableRuAddrTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE_TABLE_RU_ADDR_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'AddressTypeTable_RU_AddrTypeCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressStreets)
      };
    }

    return this._schema;
  }
}
