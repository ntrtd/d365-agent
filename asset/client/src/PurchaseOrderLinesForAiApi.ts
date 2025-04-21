/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderLinesForAi } from './PurchaseOrderLinesForAi';
import { PurchaseOrderLinesForAiRequestBuilder } from './PurchaseOrderLinesForAiRequestBuilder';
import { ReleasedProductsForAiApi } from './ReleasedProductsForAiApi';
import { VendorsForAiApi } from './VendorsForAiApi';
import { PurchStatus } from './PurchStatus';
import { NoYes } from './NoYes';
import { PurchaseType } from './PurchaseType';
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
export class PurchaseOrderLinesForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchaseOrderLinesForAi<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderLinesForAiApi<DeSerializersT> {
    return new PurchaseOrderLinesForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      PurchaseOrderLinesForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      PurchaseOrderLinesForAi<DeSerializersT>,
      DeSerializersT,
      VendorsForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductsForAiApi<DeSerializersT>,
      VendorsForAiApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      VENDOR: new OneToOneLink('Vendor', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PurchaseOrderLinesForAi;

  requestBuilder(): PurchaseOrderLinesForAiRequestBuilder<DeSerializersT> {
    return new PurchaseOrderLinesForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderLinesForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderLinesForAi<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderLinesForAi<DeSerializersT>,
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
    typeof PurchaseOrderLinesForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderLinesForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_LINE_STATUS: EnumField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: EnumField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONFIRMED_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDERED_PURCHASE_QUANTITY: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_PRICE: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICE_QUANTITY: OrderableEdmTypeField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_TYPE: EnumField<
      PurchaseOrderLinesForAi<DeSerializers>,
      DeSerializersT,
      PurchaseType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      PurchaseOrderLinesForAi<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsForAiApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      PurchaseOrderLinesForAi<DeSerializersT>,
      DeSerializersT,
      VendorsForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderLinesForAi<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_LINE_STATUS: fieldBuilder.buildEnumField(
          'PurchaseOrderLineStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEnumField('IsDeleted', NoYes, true),
        /**
         * Static representation of the {@link confirmedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedShippingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link confirmedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link orderedPurchaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_PURCHASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedPurchaseQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchasePriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchasePriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_TYPE: fieldBuilder.buildEnumField(
          'PurchaseType',
          PurchaseType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseOrderLinesForAi)
      };
    }

    return this._schema;
  }
}
