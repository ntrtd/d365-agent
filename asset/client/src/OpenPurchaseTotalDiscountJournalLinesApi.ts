/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenPurchaseTotalDiscountJournalLines } from './OpenPurchaseTotalDiscountJournalLines';
import { OpenPurchaseTotalDiscountJournalLinesRequestBuilder } from './OpenPurchaseTotalDiscountJournalLinesRequestBuilder';
import { TotalDiscountVendorGroupsApi } from './TotalDiscountVendorGroupsApi';
import { VendorsV2Api } from './VendorsV2Api';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OpenPurchaseTotalDiscountJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
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
  ): OpenPurchaseTotalDiscountJournalLinesApi<DeSerializersT> {
    return new OpenPurchaseTotalDiscountJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link totalDiscountVendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_DISCOUNT_VENDOR_GROUP: OneToOneLink<
      OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      TotalDiscountVendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TotalDiscountVendorGroupsApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TOTAL_DISCOUNT_VENDOR_GROUP: new OneToOneLink(
        'TotalDiscountVendorGroup',
        this,
        linkedApis[0]
      ),
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = OpenPurchaseTotalDiscountJournalLines;

  requestBuilder(): OpenPurchaseTotalDiscountJournalLinesRequestBuilder<DeSerializersT> {
    return new OpenPurchaseTotalDiscountJournalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
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
    typeof OpenPurchaseTotalDiscountJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OpenPurchaseTotalDiscountJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_AGREEMENT_JOURNAL_NUMBER: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_ORDER_SUBTOTAL_AMOUNT: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_ORDER_SUBTOTAL_AMOUNT: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_SEARCH_CONTINUE: EnumField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_PERCENTAGE_2: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PERCENTAGE_1: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_APPLICABLE_FROM_DATE: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_APPLICABLE_TO_DATE: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_CURRENCY_CODE: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_LOG: OrderableEdmTypeField<
      OpenPurchaseTotalDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link totalDiscountVendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_DISCOUNT_VENDOR_GROUP: OneToOneLink<
      OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      TotalDiscountVendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      OpenPurchaseTotalDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OpenPurchaseTotalDiscountJournalLines<DeSerializers>>;
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
         * Static representation of the {@link tradeAgreementJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_AGREEMENT_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TradeAgreementJournalNumber',
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
         * Static representation of the {@link toOrderSubtotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ORDER_SUBTOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToOrderSubtotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fromOrderSubtotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ORDER_SUBTOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromOrderSubtotalAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link totalDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountVendorGroupCode',
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
         * Static representation of the {@link processingLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_LOG: fieldBuilder.buildEdmTypeField(
          'ProcessingLog',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OpenPurchaseTotalDiscountJournalLines)
      };
    }

    return this._schema;
  }
}
