/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FleetCustomers } from './FleetCustomers';
import { FleetCustomersRequestBuilder } from './FleetCustomersRequestBuilder';
import { FleetRentalsApi } from './FleetRentalsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class FleetCustomersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FleetCustomers<DeSerializersT>, DeSerializersT>
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
  ): FleetCustomersApi<DeSerializersT> {
    return new FleetCustomersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rental} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RENTAL: OneToManyLink<
      FleetCustomers<DeSerializersT>,
      DeSerializersT,
      FleetRentalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FleetRentalsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RENTAL: new OneToManyLink('Rental', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FleetCustomers;

  requestBuilder(): FleetCustomersRequestBuilder<DeSerializersT> {
    return new FleetCustomersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FleetCustomers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FleetCustomers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FleetCustomers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FleetCustomers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FleetCustomers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FIRST_NAME: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DRIVER_LICENSE: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_GROUP: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_LINE_2: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LINE_1: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CELL_PHONE: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      FleetCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rental} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RENTAL: OneToManyLink<
      FleetCustomers<DeSerializersT>,
      DeSerializersT,
      FleetRentalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FleetCustomers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link driverLicense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_LICENSE: fieldBuilder.buildEdmTypeField(
          'DriverLicense',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link customerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.Int32', false),
        /**
         * Static representation of the {@link addressLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LINE_2: fieldBuilder.buildEdmTypeField(
          'AddressLine2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LINE_1: fieldBuilder.buildEdmTypeField(
          'AddressLine1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link cellPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CELL_PHONE: fieldBuilder.buildEdmTypeField(
          'CellPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FleetCustomers)
      };
    }

    return this._schema;
  }
}
