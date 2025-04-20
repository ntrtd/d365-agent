/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxesMatrices } from './TaxesMatrices';
import { TaxesMatricesRequestBuilder } from './TaxesMatricesRequestBuilder';
import { CustVendTypeBr } from './CustVendTypeBr';
import { NoYes } from './NoYes';
import { TableGroupAll } from './TableGroupAll';
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
export class TaxesMatricesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxesMatrices<DeSerializersT>, DeSerializersT>
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
  ): TaxesMatricesApi<DeSerializersT> {
    return new TaxesMatricesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxesMatrices;

  requestBuilder(): TaxesMatricesRequestBuilder<DeSerializersT> {
    return new TaxesMatricesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxesMatrices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxesMatrices<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxesMatrices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxesMatrices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxesMatrices, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT_GROUP_ID: OrderableEdmTypeField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CFOP_GROUP_ID: OrderableEdmTypeField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      CustVendTypeBr,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_USED_FOR_FREE_TEXT_INVOICE: EnumField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_CODE: EnumField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_USED_FOR_SERVICE_ITEMS: EnumField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_CODE: EnumField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      TaxesMatrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxesMatrices<DeSerializers>>;
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
         * Static representation of the {@link fiscalEstablishmentGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cfopGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CFOPGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', CustVendTypeBr, true),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isUsedForFreeTextInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_USED_FOR_FREE_TEXT_INVOICE: fieldBuilder.buildEnumField(
          'IsUsedForFreeTextInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isUsedForServiceItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_USED_FOR_SERVICE_ITEMS: fieldBuilder.buildEnumField(
          'IsUsedForServiceItems',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEnumField('ItemCode', TableGroupAll, true),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxesMatrices)
      };
    }

    return this._schema;
  }
}
