/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressBooks } from './AddressBooks';
import { AddressBooksRequestBuilder } from './AddressBooksRequestBuilder';
import { RetailStoreAddressBooksApi } from './RetailStoreAddressBooksApi';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AddressBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressBooks<DeSerializersT>, DeSerializersT>
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
  ): AddressBooksApi<DeSerializersT> {
    return new AddressBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreAddressBook} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_ADDRESS_BOOK: OneToManyLink<
      AddressBooks<DeSerializersT>,
      DeSerializersT,
      RetailStoreAddressBooksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailStoreAddressBooksApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_STORE_ADDRESS_BOOK: new OneToManyLink(
        'RetailStoreAddressBook',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AddressBooks;

  requestBuilder(): AddressBooksRequestBuilder<DeSerializersT> {
    return new AddressBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressBooks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressBooks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressBooks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AddressBooks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AddressBooks, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      AddressBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYSTEM: EnumField<
      AddressBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AddressBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStoreAddressBook} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE_ADDRESS_BOOK: OneToManyLink<
      AddressBooks<DeSerializersT>,
      DeSerializersT,
      RetailStoreAddressBooksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressBooks<DeSerializers>>;
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
         * Static representation of the {@link system} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM: fieldBuilder.buildEnumField('System', NoYes, true),
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
        ALL_FIELDS: new AllFields('*', AddressBooks)
      };
    }

    return this._schema;
  }
}
