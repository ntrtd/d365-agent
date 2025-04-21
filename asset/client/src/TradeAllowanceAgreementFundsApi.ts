/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAllowanceAgreementFunds } from './TradeAllowanceAgreementFunds';
import { TradeAllowanceAgreementFundsRequestBuilder } from './TradeAllowanceAgreementFundsRequestBuilder';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
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
export class TradeAllowanceAgreementFundsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TradeAllowanceAgreementFunds<DeSerializersT>, DeSerializersT>
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
  ): TradeAllowanceAgreementFundsApi<DeSerializersT> {
    return new TradeAllowanceAgreementFundsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementFunds<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TradeAllowanceAgreementHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TRADE_ALLOWANCE_AGREEMENT_HEADER: new OneToOneLink(
        'TradeAllowanceAgreementHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TradeAllowanceAgreementFunds;

  requestBuilder(): TradeAllowanceAgreementFundsRequestBuilder<DeSerializersT> {
    return new TradeAllowanceAgreementFundsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TradeAllowanceAgreementFunds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAllowanceAgreementFunds<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAllowanceAgreementFunds<DeSerializersT>,
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
    typeof TradeAllowanceAgreementFunds,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAllowanceAgreementFunds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementFunds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementFunds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementFunds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROMOTION_FUND_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementFunds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ALLOCATION_PERCENTAGE: OrderableEdmTypeField<
      TradeAllowanceAgreementFunds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementFunds<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TradeAllowanceAgreementFunds<DeSerializers>>;
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
         * Static representation of the {@link tradeAllowanceAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'TradeAllowanceAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link promotionFundId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_FUND_ID: fieldBuilder.buildEdmTypeField(
          'PromotionFundId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costAllocationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ALLOCATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CostAllocationPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TradeAllowanceAgreementFunds)
      };
    }

    return this._schema;
  }
}
