/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrokerContractLines } from './BrokerContractLines';
import { BrokerContractLinesRequestBuilder } from './BrokerContractLinesRequestBuilder';
import { BrokerContractHeadersApi } from './BrokerContractHeadersApi';
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
export class BrokerContractLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrokerContractLines<DeSerializersT>, DeSerializersT>
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
  ): BrokerContractLinesApi<DeSerializersT> {
    return new BrokerContractLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link mcrBrokerContractHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MCR_BROKER_CONTRACT_HEADER: OneToOneLink<
      BrokerContractLines<DeSerializersT>,
      DeSerializersT,
      BrokerContractHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BrokerContractHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      MCR_BROKER_CONTRACT_HEADER: new OneToOneLink(
        'MCRBrokerContractHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BrokerContractLines;

  requestBuilder(): BrokerContractLinesRequestBuilder<DeSerializersT> {
    return new BrokerContractLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrokerContractLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BrokerContractLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrokerContractLines<DeSerializersT>,
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
    typeof BrokerContractLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrokerContractLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BROKER_CONTRACT_ID: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_FEE_AMOUNT_PER_PRODUCT_UNIT_SOLD: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_FEE_BREAK_AMOUNT: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BROKER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_SALES_CHARGE_CODE: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_FEE_BREAK_QUANTITY: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_FEE_PERCENTAGE: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BROKER_FEE_CHARGE_AMOUNT: OrderableEdmTypeField<
      BrokerContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mcrBrokerContractHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MCR_BROKER_CONTRACT_HEADER: OneToOneLink<
      BrokerContractLines<DeSerializersT>,
      DeSerializersT,
      BrokerContractHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BrokerContractLines<DeSerializers>>;
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
         * Static representation of the {@link brokerContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'BrokerContractId',
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
         * Static representation of the {@link customerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brokerFeeAmountPerProductUnitSold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_FEE_AMOUNT_PER_PRODUCT_UNIT_SOLD: fieldBuilder.buildEdmTypeField(
          'BrokerFeeAmountPerProductUnitSold',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brokerFeeBreakAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_FEE_BREAK_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BrokerFeeBreakAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link brokerVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BrokerVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brokerSalesChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_SALES_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'BrokerSalesChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brokerFeeBreakQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_FEE_BREAK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BrokerFeeBreakQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link brokerFeePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_FEE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'BrokerFeePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link brokerFeeChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_FEE_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BrokerFeeChargeAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrokerContractLines)
      };
    }

    return this._schema;
  }
}
