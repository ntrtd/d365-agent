/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrokerContractHeaders } from './BrokerContractHeaders';
import { BrokerContractHeadersRequestBuilder } from './BrokerContractHeadersRequestBuilder';
import { BrokerContractLinesApi } from './BrokerContractLinesApi';
import { McrBrokerContractStatus } from './McrBrokerContractStatus';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BrokerContractHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrokerContractHeaders<DeSerializersT>, DeSerializersT>
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
  ): BrokerContractHeadersApi<DeSerializersT> {
    return new BrokerContractHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link mcrBrokerContractLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MCR_BROKER_CONTRACT_LINE: OneToManyLink<
      BrokerContractHeaders<DeSerializersT>,
      DeSerializersT,
      BrokerContractLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BrokerContractLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      MCR_BROKER_CONTRACT_LINE: new OneToManyLink(
        'MCRBrokerContractLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BrokerContractHeaders;

  requestBuilder(): BrokerContractHeadersRequestBuilder<DeSerializersT> {
    return new BrokerContractHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrokerContractHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BrokerContractHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrokerContractHeaders<DeSerializersT>,
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
    typeof BrokerContractHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrokerContractHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BROKER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_BROKER_FEE_AMOUNT: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BROKER_FEE_CURRENCY_CODE: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_DESCRIPTION: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_FEE_AMOUNT_PER_PRODUCT_UNIT_SOLD: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BROKER_SALES_CHARGE_CODE: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_STATUS: EnumField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      McrBrokerContractStatus,
      true,
      true
    >;
    BROKER_FEE_PERCENTAGE: OrderableEdmTypeField<
      BrokerContractHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mcrBrokerContractLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MCR_BROKER_CONTRACT_LINE: OneToManyLink<
      BrokerContractHeaders<DeSerializersT>,
      DeSerializersT,
      BrokerContractLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BrokerContractHeaders<DeSerializers>>;
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
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link fixedBrokerFeeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_BROKER_FEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FixedBrokerFeeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link brokerFeeCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_FEE_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'BrokerFeeCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ContractDescription',
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
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link contractStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_STATUS: fieldBuilder.buildEnumField(
          'ContractStatus',
          McrBrokerContractStatus,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrokerContractHeaders)
      };
    }

    return this._schema;
  }
}
