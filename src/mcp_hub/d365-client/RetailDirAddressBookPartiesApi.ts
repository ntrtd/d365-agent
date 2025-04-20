/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDirAddressBookParties } from './RetailDirAddressBookParties';
import { RetailDirAddressBookPartiesRequestBuilder } from './RetailDirAddressBookPartiesRequestBuilder';
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
export class RetailDirAddressBookPartiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailDirAddressBookParties<DeSerializersT>, DeSerializersT>
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
  ): RetailDirAddressBookPartiesApi<DeSerializersT> {
    return new RetailDirAddressBookPartiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDirAddressBookParties;

  requestBuilder(): RetailDirAddressBookPartiesRequestBuilder<DeSerializersT> {
    return new RetailDirAddressBookPartiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailDirAddressBookParties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDirAddressBookParties<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDirAddressBookParties<DeSerializersT>,
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
    typeof RetailDirAddressBookParties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDirAddressBookParties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_BOOK_NAME: OrderableEdmTypeField<
      RetailDirAddressBookParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      RetailDirAddressBookParties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BOOK_RECORD_ID: OrderableEdmTypeField<
      RetailDirAddressBookParties<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARTY_RECORD_ID: OrderableEdmTypeField<
      RetailDirAddressBookParties<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailDirAddressBookParties<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link addressBookName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOK_NAME: fieldBuilder.buildEdmTypeField(
          'AddressBookName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressBookRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOK_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'AddressBookRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link partyRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'PartyRecordId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDirAddressBookParties)
      };
    }

    return this._schema;
  }
}
