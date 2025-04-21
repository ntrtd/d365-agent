/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostalAddressElectronicContacts } from './PostalAddressElectronicContacts';
import { PostalAddressElectronicContactsRequestBuilder } from './PostalAddressElectronicContactsRequestBuilder';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
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
export class PostalAddressElectronicContactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PostalAddressElectronicContacts<DeSerializersT>, DeSerializersT>
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
  ): PostalAddressElectronicContactsApi<DeSerializersT> {
    return new PostalAddressElectronicContactsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PostalAddressElectronicContacts;

  requestBuilder(): PostalAddressElectronicContactsRequestBuilder<DeSerializersT> {
    return new PostalAddressElectronicContactsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PostalAddressElectronicContacts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PostalAddressElectronicContacts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PostalAddressElectronicContacts<DeSerializersT>,
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
    typeof PostalAddressElectronicContacts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostalAddressElectronicContacts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCATOR: OrderableEdmTypeField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      LogisticsElectronicAddressMethodType,
      true,
      true
    >;
    POSTAL_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MOBILE: EnumField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INSTANT_MESSAGE: EnumField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERNATIONAL_CALLING_CODE: OrderableEdmTypeField<
      PostalAddressElectronicContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PostalAddressElectronicContacts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link locator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATOR: fieldBuilder.buildEdmTypeField('Locator', 'Edm.String', false),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsElectronicAddressMethodType,
          true
        ),
        /**
         * Static representation of the {@link postalAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PostalAddressLocationId',
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
          false
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link isMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MOBILE: fieldBuilder.buildEnumField('IsMobile', NoYes, true),
        /**
         * Static representation of the {@link isInstantMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INSTANT_MESSAGE: fieldBuilder.buildEnumField(
          'IsInstantMessage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link internationalCallingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_CALLING_CODE: fieldBuilder.buildEdmTypeField(
          'InternationalCallingCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostalAddressElectronicContacts)
      };
    }

    return this._schema;
  }
}
