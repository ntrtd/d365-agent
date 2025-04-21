/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoyaltyAgreementLineAmounts } from './RoyaltyAgreementLineAmounts';
import { RoyaltyAgreementLineAmountsRequestBuilder } from './RoyaltyAgreementLineAmountsRequestBuilder';
import { RoyaltyAgreementLinesApi } from './RoyaltyAgreementLinesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RoyaltyAgreementLineAmountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RoyaltyAgreementLineAmounts<DeSerializersT>, DeSerializersT>
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
  ): RoyaltyAgreementLineAmountsApi<DeSerializersT> {
    return new RoyaltyAgreementLineAmountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link royaltyAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE: OneToOneLink<
      RoyaltyAgreementLineAmounts<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RoyaltyAgreementLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ROYALTY_AGREEMENT_LINE: new OneToOneLink(
        'RoyaltyAgreementLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RoyaltyAgreementLineAmounts;

  requestBuilder(): RoyaltyAgreementLineAmountsRequestBuilder<DeSerializersT> {
    return new RoyaltyAgreementLineAmountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RoyaltyAgreementLineAmounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RoyaltyAgreementLineAmounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RoyaltyAgreementLineAmounts<DeSerializersT>,
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
    typeof RoyaltyAgreementLineAmounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RoyaltyAgreementLineAmounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROYALTY_AGREEMENT_ID: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROYALTY_AGREEMENT_LINE_ID: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ROYALTY_PERCENTAGE: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_ROYALTY_AMOUNT: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROYALTY_AMOUNT_PER_PRODUCT_UNIT_SOLD: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_GROSS_SALES_AMOUNT: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_NET_SALES_AMOUNT: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_NET_SALES_AMOUNT: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_GROSS_SALES_AMOUNT: OrderableEdmTypeField<
      RoyaltyAgreementLineAmounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link royaltyAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE: OneToOneLink<
      RoyaltyAgreementLineAmounts<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RoyaltyAgreementLineAmounts<DeSerializers>>;
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
         * Static representation of the {@link royaltyAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'RoyaltyAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link royaltyAgreementLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_AGREEMENT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'RoyaltyAgreementLineId',
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
         * Static representation of the {@link royaltyPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RoyaltyPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedRoyaltyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ROYALTY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FixedRoyaltyAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link royaltyAmountPerProductUnitSold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_AMOUNT_PER_PRODUCT_UNIT_SOLD: fieldBuilder.buildEdmTypeField(
          'RoyaltyAmountPerProductUnitSold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toGrossSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_GROSS_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToGrossSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromNetSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_NET_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromNetSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toNetSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_NET_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToNetSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fromGrossSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_GROSS_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromGrossSalesAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RoyaltyAgreementLineAmounts)
      };
    }

    return this._schema;
  }
}
