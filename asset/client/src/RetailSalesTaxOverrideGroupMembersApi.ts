/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailSalesTaxOverrideGroupMembers } from './RetailSalesTaxOverrideGroupMembers';
import { RetailSalesTaxOverrideGroupMembersRequestBuilder } from './RetailSalesTaxOverrideGroupMembersRequestBuilder';
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
export class RetailSalesTaxOverrideGroupMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailSalesTaxOverrideGroupMembers<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailSalesTaxOverrideGroupMembersApi<DeSerializersT> {
    return new RetailSalesTaxOverrideGroupMembersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailSalesTaxOverrideGroupMembers;

  requestBuilder(): RetailSalesTaxOverrideGroupMembersRequestBuilder<DeSerializersT> {
    return new RetailSalesTaxOverrideGroupMembersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailSalesTaxOverrideGroupMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailSalesTaxOverrideGroupMembers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailSalesTaxOverrideGroupMembers<DeSerializersT>,
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
    typeof RetailSalesTaxOverrideGroupMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailSalesTaxOverrideGroupMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailSalesTaxOverrideGroupMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_OVERRIDE_CODE: OrderableEdmTypeField<
      RetailSalesTaxOverrideGroupMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_OVERRIDE_GROUP_CODE: OrderableEdmTypeField<
      RetailSalesTaxOverrideGroupMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailSalesTaxOverrideGroupMembers<DeSerializers>>;
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
         * Static representation of the {@link salesTaxOverrideCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_OVERRIDE_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxOverrideCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesTaxOverrideGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_OVERRIDE_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxOverrideGroupCode',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailSalesTaxOverrideGroupMembers)
      };
    }

    return this._schema;
  }
}
