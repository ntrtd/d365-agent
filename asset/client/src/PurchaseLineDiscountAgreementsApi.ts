/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseLineDiscountAgreements } from './PurchaseLineDiscountAgreements';
import { PurchaseLineDiscountAgreementsRequestBuilder } from './PurchaseLineDiscountAgreementsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseLineDiscountAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseLineDiscountAgreements<DeSerializersT>, DeSerializersT>
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
  ): PurchaseLineDiscountAgreementsApi<DeSerializersT> {
    return new PurchaseLineDiscountAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchaseLineDiscountAgreements;

  requestBuilder(): PurchaseLineDiscountAgreementsRequestBuilder<DeSerializersT> {
    return new PurchaseLineDiscountAgreementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseLineDiscountAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseLineDiscountAgreements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseLineDiscountAgreements<DeSerializersT>,
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
    typeof PurchaseLineDiscountAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseLineDiscountAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_SEARCH_CONTINUE: EnumField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENTAGE_2: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PERCENTAGE_1: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_QUANTITY: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_APPLICABLE_FROM_DATE: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_APPLICABLE_TO_DATE: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_QUANTITY: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_WAREHOUSE_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_PRODUCT_GROUP_CODE: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_SITE_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      PurchaseLineDiscountAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PurchaseLineDiscountAgreements<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willSearchContinue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SEARCH_CONTINUE: fieldBuilder.buildEnumField(
          'WillSearchContinue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link quantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'QuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountPercentage2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE_2: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountPercentage1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE_1: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ToQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountApplicableFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_APPLICABLE_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'DiscountApplicableFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discountApplicableToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_APPLICABLE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'DiscountApplicableToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'DiscountCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DiscountWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDiscountProductGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PRODUCT_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountProductGroupCode',
          'Edm.String',
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DiscountSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseLineDiscountAgreements)
      };
    }

    return this._schema;
  }
}
