/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailVendorSalesPricePointSetups } from './RetailVendorSalesPricePointSetups';
import { RetailVendorSalesPricePointSetupsRequestBuilder } from './RetailVendorSalesPricePointSetupsRequestBuilder';
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
export class RetailVendorSalesPricePointSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailVendorSalesPricePointSetups<DeSerializersT>, DeSerializersT>
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
  ): RetailVendorSalesPricePointSetupsApi<DeSerializersT> {
    return new RetailVendorSalesPricePointSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailVendorSalesPricePointSetups;

  requestBuilder(): RetailVendorSalesPricePointSetupsRequestBuilder<DeSerializersT> {
    return new RetailVendorSalesPricePointSetupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailVendorSalesPricePointSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailVendorSalesPricePointSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailVendorSalesPricePointSetups<DeSerializersT>,
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
    typeof RetailVendorSalesPricePointSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailVendorSalesPricePointSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailVendorSalesPricePointSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      RetailVendorSalesPricePointSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUGGESTED_RETAIL_PRICE: OrderableEdmTypeField<
      RetailVendorSalesPricePointSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailVendorSalesPricePointSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailVendorSalesPricePointSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      RetailVendorSalesPricePointSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailVendorSalesPricePointSetups<DeSerializers>>;
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
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link suggestedRetailPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUGGESTED_RETAIL_PRICE: fieldBuilder.buildEdmTypeField(
          'suggestedRetailPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailVendorSalesPricePointSetups)
      };
    }

    return this._schema;
  }
}
