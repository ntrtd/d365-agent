/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerHierarchyCatalogs } from './CustomerHierarchyCatalogs';
import { CustomerHierarchyCatalogsRequestBuilder } from './CustomerHierarchyCatalogsRequestBuilder';
import { CustomerHiearchiesApi } from './CustomerHiearchiesApi';
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
export class CustomerHierarchyCatalogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerHierarchyCatalogs<DeSerializersT>, DeSerializersT>
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
  ): CustomerHierarchyCatalogsApi<DeSerializersT> {
    return new CustomerHierarchyCatalogsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY: OneToOneLink<
      CustomerHierarchyCatalogs<DeSerializersT>,
      DeSerializersT,
      CustomerHiearchiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CustomerHiearchiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_HIERARCHY: new OneToOneLink(
        'CustomerHierarchy',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CustomerHierarchyCatalogs;

  requestBuilder(): CustomerHierarchyCatalogsRequestBuilder<DeSerializersT> {
    return new CustomerHierarchyCatalogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerHierarchyCatalogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerHierarchyCatalogs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerHierarchyCatalogs<DeSerializersT>,
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
    typeof CustomerHierarchyCatalogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerHierarchyCatalogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CUSTOMER_HIERARCHY_ID: OrderableEdmTypeField<
      CustomerHierarchyCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      CustomerHierarchyCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CATALOG_ID: OrderableEdmTypeField<
      CustomerHierarchyCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY: OneToOneLink<
      CustomerHierarchyCatalogs<DeSerializersT>,
      DeSerializersT,
      CustomerHiearchiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerHierarchyCatalogs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link customerHierarchyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_HIERARCHY_ID: fieldBuilder.buildEdmTypeField(
          'CustomerHierarchyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link catalogId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_ID: fieldBuilder.buildEdmTypeField(
          'CatalogId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerHierarchyCatalogs)
      };
    }

    return this._schema;
  }
}
