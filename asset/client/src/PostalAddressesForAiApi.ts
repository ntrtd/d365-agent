/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostalAddressesForAi } from './PostalAddressesForAi';
import { PostalAddressesForAiRequestBuilder } from './PostalAddressesForAiRequestBuilder';
import { VendorsForAiApi } from './VendorsForAiApi';
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
export class PostalAddressesForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostalAddressesForAi<DeSerializersT>, DeSerializersT>
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
  ): PostalAddressesForAiApi<DeSerializersT> {
    return new PostalAddressesForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      PostalAddressesForAi<DeSerializersT>,
      DeSerializersT,
      VendorsForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendorsForAiApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VENDOR: new OneToOneLink('Vendor', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PostalAddressesForAi;

  requestBuilder(): PostalAddressesForAiRequestBuilder<DeSerializersT> {
    return new PostalAddressesForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostalAddressesForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PostalAddressesForAi<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PostalAddressesForAi<DeSerializersT>,
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
    typeof PostalAddressesForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostalAddressesForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VALID_FROM: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_BOX: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      PostalAddressesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      PostalAddressesForAi<DeSerializersT>,
      DeSerializersT,
      VendorsForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PostalAddressesForAi<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
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
         * Static representation of the {@link postBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_BOX: fieldBuilder.buildEdmTypeField('PostBox', 'Edm.String', true),
        /**
         * Static representation of the {@link streetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'StreetNumber',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', PostalAddressesForAi)
      };
    }

    return this._schema;
  }
}
