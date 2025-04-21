/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreAddressBooks } from './RetailStoreAddressBooks';
import { RetailStoreAddressBooksRequestBuilder } from './RetailStoreAddressBooksRequestBuilder';
import { RetailChannelsApi } from './RetailChannelsApi';
import { AddressBooksApi } from './AddressBooksApi';
import { RetailAddressBookType } from './RetailAddressBookType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailStoreAddressBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailStoreAddressBooks<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreAddressBooksApi<DeSerializersT> {
    return new RetailStoreAddressBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToOneLink<
      RetailStoreAddressBooks<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressBooks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_BOOKS: OneToOneLink<
      RetailStoreAddressBooks<DeSerializersT>,
      DeSerializersT,
      AddressBooksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelsApi<DeSerializersT>,
      AddressBooksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL: new OneToOneLink('RetailChannel', this, linkedApis[0]),
      ADDRESS_BOOKS: new OneToOneLink('AddressBooks', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RetailStoreAddressBooks;

  requestBuilder(): RetailStoreAddressBooksRequestBuilder<DeSerializersT> {
    return new RetailStoreAddressBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreAddressBooks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStoreAddressBooks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreAddressBooks<DeSerializersT>,
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
    typeof RetailStoreAddressBooks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreAddressBooks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailStoreAddressBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BOOK_NAME: OrderableEdmTypeField<
      RetailStoreAddressBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BOOK_TYPE: EnumField<
      RetailStoreAddressBooks<DeSerializers>,
      DeSerializersT,
      RetailAddressBookType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL: OneToOneLink<
      RetailStoreAddressBooks<DeSerializersT>,
      DeSerializersT,
      RetailChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressBooks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_BOOKS: OneToOneLink<
      RetailStoreAddressBooks<DeSerializersT>,
      DeSerializersT,
      AddressBooksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStoreAddressBooks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link addressBookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOK_TYPE: fieldBuilder.buildEnumField(
          'AddressBookType',
          RetailAddressBookType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreAddressBooks)
      };
    }

    return this._schema;
  }
}
