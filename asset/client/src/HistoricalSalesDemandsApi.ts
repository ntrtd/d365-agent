/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HistoricalSalesDemands } from './HistoricalSalesDemands';
import { HistoricalSalesDemandsRequestBuilder } from './HistoricalSalesDemandsRequestBuilder';
import { ItemType } from './ItemType';
import { SalesType } from './SalesType';
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
export class HistoricalSalesDemandsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HistoricalSalesDemands<DeSerializersT>, DeSerializersT>
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
  ): HistoricalSalesDemandsApi<DeSerializersT> {
    return new HistoricalSalesDemandsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HistoricalSalesDemands;

  requestBuilder(): HistoricalSalesDemandsRequestBuilder<DeSerializersT> {
    return new HistoricalSalesDemandsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HistoricalSalesDemands<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HistoricalSalesDemands<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HistoricalSalesDemands<DeSerializersT>,
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
    typeof HistoricalSalesDemands,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HistoricalSalesDemands,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECORD_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_TYPE: EnumField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      ItemType,
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_ACCOUNT_PARTY_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NAME: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DATE: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNT_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_QUANTITY: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_ACCOUNT_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_ACCOUNT_PARTY_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DATA_AREA_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VARIANT_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TYPE: EnumField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      SalesType,
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      HistoricalSalesDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<HistoricalSalesDemands<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          ItemType,
          true
        ),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromAccountPartyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ACCOUNT_PARTY_ID: fieldBuilder.buildEdmTypeField(
          'FromAccountPartyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'AccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'ShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'AccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ID: fieldBuilder.buildEdmTypeField('OrderId', 'Edm.String', true),
        /**
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEdmTypeField('Channel', 'Edm.String', true),
        /**
         * Static representation of the {@link inventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ToAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toAccountPartyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ACCOUNT_PARTY_ID: fieldBuilder.buildEdmTypeField(
          'ToAccountPartyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SalesDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'ProductVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TYPE: fieldBuilder.buildEnumField('OrderType', SalesType, true),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'DocumentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HistoricalSalesDemands)
      };
    }

    return this._schema;
  }
}
