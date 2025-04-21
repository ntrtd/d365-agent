/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillEndUserTables } from './SubBillEndUserTables';
import { SubBillEndUserTablesRequestBuilder } from './SubBillEndUserTablesRequestBuilder';
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
export class SubBillEndUserTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillEndUserTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillEndUserTablesApi<DeSerializersT> {
    return new SubBillEndUserTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillEndUserTables;

  requestBuilder(): SubBillEndUserTablesRequestBuilder<DeSerializersT> {
    return new SubBillEndUserTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillEndUserTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SubBillEndUserTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillEndUserTables<DeSerializersT>,
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
    typeof SubBillEndUserTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillEndUserTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillEndUserTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_USER_ACCOUNT: OrderableEdmTypeField<
      SubBillEndUserTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      SubBillEndUserTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillEndUserTables<DeSerializers>>;
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
         * Static representation of the {@link endUserAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_USER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EndUserAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentCustomerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ParentCustomerAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillEndUserTables)
      };
    }

    return this._schema;
  }
}
