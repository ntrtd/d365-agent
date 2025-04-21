/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionDiscountLines } from './RetailTransactionDiscountLines';
import { RetailTransactionDiscountLinesRequestBuilder } from './RetailTransactionDiscountLinesRequestBuilder';
import { RetailCustomerDiscountType } from './RetailCustomerDiscountType';
import { RetailManualDiscountType } from './RetailManualDiscountType';
import { RetailDiscountOriginType } from './RetailDiscountOriginType';
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
export class RetailTransactionDiscountLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionDiscountLines<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionDiscountLinesApi<DeSerializersT> {
    return new RetailTransactionDiscountLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionDiscountLines;

  requestBuilder(): RetailTransactionDiscountLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionDiscountLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionDiscountLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionDiscountLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionDiscountLines<DeSerializersT>,
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
    typeof RetailTransactionDiscountLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionDiscountLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFECTIVE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUNDLE_ID: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEAL_PRICE: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_CODE: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_DISCOUNT_TYPE: EnumField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailCustomerDiscountType,
      true,
      true
    >;
    MANUAL_DISCOUNT_TYPE: EnumField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailManualDiscountType,
      true,
      true
    >;
    DISCOUNT_ORIGIN_TYPE: EnumField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailDiscountOriginType,
      true,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_OFFER_ID: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_COST: OrderableEdmTypeField<
      RetailTransactionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionDiscountLines<DeSerializers>>;
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
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link effectiveAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EffectiveAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bundleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_ID: fieldBuilder.buildEdmTypeField(
          'BundleId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dealPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_PRICE: fieldBuilder.buildEdmTypeField(
          'DealPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'DiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'CustomerDiscountType',
          RetailCustomerDiscountType,
          true
        ),
        /**
         * Static representation of the {@link manualDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'ManualDiscountType',
          RetailManualDiscountType,
          true
        ),
        /**
         * Static representation of the {@link discountOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'DiscountOriginType',
          RetailDiscountOriginType,
          true
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
         * Static representation of the {@link discountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountOfferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_OFFER_ID: fieldBuilder.buildEdmTypeField(
          'DiscountOfferId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_COST: fieldBuilder.buildEdmTypeField(
          'DiscountCost',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionDiscountLines)
      };
    }

    return this._schema;
  }
}
