/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContactsForAi } from './ContactsForAi';
import { ContactsForAiRequestBuilder } from './ContactsForAiRequestBuilder';
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
export class ContactsForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContactsForAi<DeSerializersT>, DeSerializersT>
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
  ): ContactsForAiApi<DeSerializersT> {
    return new ContactsForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      ContactsForAi<DeSerializersT>,
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

  entityConstructor = ContactsForAi;

  requestBuilder(): ContactsForAiRequestBuilder<DeSerializersT> {
    return new ContactsForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ContactsForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ContactsForAi<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ContactsForAi<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ContactsForAi, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ContactsForAi, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSION: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS_NAME: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTION: OrderableEdmTypeField<
      ContactsForAi<DeSerializers>,
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
      ContactsForAi<DeSerializersT>,
      DeSerializersT,
      VendorsForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ContactsForAi<DeSerializers>>;
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
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSION: fieldBuilder.buildEdmTypeField(
          'Profession',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link knownAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS_NAME: fieldBuilder.buildEdmTypeField(
          'KnownAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link function} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION: fieldBuilder.buildEdmTypeField(
          'Function',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ContactsForAi)
      };
    }

    return this._schema;
  }
}
