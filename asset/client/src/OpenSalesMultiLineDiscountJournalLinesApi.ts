/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenSalesMultiLineDiscountJournalLines } from './OpenSalesMultiLineDiscountJournalLines';
import { OpenSalesMultiLineDiscountJournalLinesRequestBuilder } from './OpenSalesMultiLineDiscountJournalLinesRequestBuilder';
import { MultilineDiscountProductGroupsApi } from './MultilineDiscountProductGroupsApi';
import { MultilineDiscountCustomerGroupsApi } from './MultilineDiscountCustomerGroupsApi';
import { CustomersV3Api } from './CustomersV3Api';
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
export class OpenSalesMultiLineDiscountJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
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
  ): OpenSalesMultiLineDiscountJournalLinesApi<DeSerializersT> {
    return new OpenSalesMultiLineDiscountJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link multilineDiscountProductGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MULTILINE_DISCOUNT_PRODUCT_GROUP: OneToOneLink<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      MultilineDiscountProductGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link multilineDiscountCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MULTILINE_DISCOUNT_CUSTOMER_GROUP: OneToOneLink<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      MultilineDiscountCustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MultilineDiscountProductGroupsApi<DeSerializersT>,
      MultilineDiscountCustomerGroupsApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MULTILINE_DISCOUNT_PRODUCT_GROUP: new OneToOneLink(
        'MultilineDiscountProductGroup',
        this,
        linkedApis[0]
      ),
      MULTILINE_DISCOUNT_CUSTOMER_GROUP: new OneToOneLink(
        'MultilineDiscountCustomerGroup',
        this,
        linkedApis[1]
      ),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = OpenSalesMultiLineDiscountJournalLines;

  requestBuilder(): OpenSalesMultiLineDiscountJournalLinesRequestBuilder<DeSerializersT> {
    return new OpenSalesMultiLineDiscountJournalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
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
    typeof OpenSalesMultiLineDiscountJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OpenSalesMultiLineDiscountJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_AGREEMENT_JOURNAL_NUMBER: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_CURRENCY_CODE: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_APPLICABLE_FROM_DATE: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_QUANTITY: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PERCENTAGE_2: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_PERCENTAGE_1: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_APPLICABLE_TO_DATE: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_GENERIC_CURRENCY_SEARCH_ENABLED: EnumField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCESSING_LOG: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_LINE_DISCOUNT_PRODUCT_GROUP_CODE: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_SEARCH_CONTINUE: EnumField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FROM_QUANTITY: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LINE_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link multilineDiscountProductGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MULTILINE_DISCOUNT_PRODUCT_GROUP: OneToOneLink<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      MultilineDiscountProductGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link multilineDiscountCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MULTILINE_DISCOUNT_CUSTOMER_GROUP: OneToOneLink<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      MultilineDiscountCustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      OpenSalesMultiLineDiscountJournalLines<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      OpenSalesMultiLineDiscountJournalLines<DeSerializers>
    >;
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
         * Static representation of the {@link quantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'QuantityUnitSymbol',
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
         * Static representation of the {@link toQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ToQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link discountApplicableToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_APPLICABLE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'DiscountApplicableToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isGenericCurrencySearchEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GENERIC_CURRENCY_SEARCH_ENABLED: fieldBuilder.buildEnumField(
          'IsGenericCurrencySearchEnabled',
          NoYes,
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
        /**
         * Static representation of the {@link multiLineDiscountProductGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LINE_DISCOUNT_PRODUCT_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultiLineDiscountProductGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
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
         * Static representation of the {@link fromQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multiLineDiscountCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LINE_DISCOUNT_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultiLineDiscountCustomerGroupCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OpenSalesMultiLineDiscountJournalLines)
      };
    }

    return this._schema;
  }
}
