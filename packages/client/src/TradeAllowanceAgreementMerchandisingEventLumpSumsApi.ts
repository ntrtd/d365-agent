/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAllowanceAgreementMerchandisingEventLumpSums } from './TradeAllowanceAgreementMerchandisingEventLumpSums';
import { TradeAllowanceAgreementMerchandisingEventLumpSumsRequestBuilder } from './TradeAllowanceAgreementMerchandisingEventLumpSumsRequestBuilder';
import { VendorsV2Api } from './VendorsV2Api';
import { CustomersV3Api } from './CustomersV3Api';
import { TradeAllowanceAgreementMerchandisingEventsApi } from './TradeAllowanceAgreementMerchandisingEventsApi';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
import { McrLumpSumStatus } from './McrLumpSumStatus';
import { TamPaymentType } from './TamPaymentType';
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
export class TradeAllowanceAgreementMerchandisingEventLumpSumsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
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
  ): TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventLumpSumsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link claimPaymentRecipientVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLAIM_PAYMENT_RECIPIENT_VENDOR: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link claimPaymentRecipientCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLAIM_PAYMENT_RECIPIENT_CUSTOMER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorsV2Api<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CLAIM_PAYMENT_RECIPIENT_VENDOR: new OneToOneLink(
        'ClaimPaymentRecipientVendor',
        this,
        linkedApis[0]
      ),
      CLAIM_PAYMENT_RECIPIENT_CUSTOMER: new OneToOneLink(
        'ClaimPaymentRecipientCustomer',
        this,
        linkedApis[1]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: new OneToOneLink(
        'TradeAllowanceAgreementMerchandisingEvent',
        this,
        linkedApis[2]
      ),
      TRADE_ALLOWANCE_AGREEMENT_HEADER: new OneToOneLink(
        'TradeAllowanceAgreementHeader',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = TradeAllowanceAgreementMerchandisingEventLumpSums;

  requestBuilder(): TradeAllowanceAgreementMerchandisingEventLumpSumsRequestBuilder<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventLumpSumsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
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
    typeof TradeAllowanceAgreementMerchandisingEventLumpSums,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAllowanceAgreementMerchandisingEventLumpSums,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LUMP_SUM_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUGGESTED_LUMP_SUM_AMOUNT: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LUMP_SUM_APPROVAL_STATUS: EnumField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      McrLumpSumStatus,
      true,
      true
    >;
    APPROVED_LUMP_SUM_AMOUNT: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CLAIM_PAYMENT_RECIPIENT_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLAIM_PAYMENT_METHOD: EnumField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      TamPaymentType,
      true,
      true
    >;
    CLAIM_PAYMENT_RECIPIENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LUMP_SUM_DETAILS: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link claimPaymentRecipientVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLAIM_PAYMENT_RECIPIENT_VENDOR: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link claimPaymentRecipientCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLAIM_PAYMENT_RECIPIENT_CUSTOMER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TradeAllowanceAgreementMerchandisingEventLumpSums<DeSerializers>
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
         * Static representation of the {@link tradeAllowanceAgreementMerchandisingEventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID:
          fieldBuilder.buildEdmTypeField(
            'TradeAllowanceAgreementMerchandisingEventId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link lumpSumId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUMP_SUM_ID: fieldBuilder.buildEdmTypeField(
          'LumpSumId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link suggestedLumpSumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUGGESTED_LUMP_SUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SuggestedLumpSumAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lumpSumApprovalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUMP_SUM_APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'LumpSumApprovalStatus',
          McrLumpSumStatus,
          true
        ),
        /**
         * Static representation of the {@link approvedLumpSumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_LUMP_SUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ApprovedLumpSumAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link claimPaymentRecipientCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_PAYMENT_RECIPIENT_CUSTOMER_ACCOUNT_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ClaimPaymentRecipientCustomerAccountNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link claimPaymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_PAYMENT_METHOD: fieldBuilder.buildEnumField(
          'ClaimPaymentMethod',
          TamPaymentType,
          true
        ),
        /**
         * Static representation of the {@link claimPaymentRecipientVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_PAYMENT_RECIPIENT_VENDOR_ACCOUNT_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ClaimPaymentRecipientVendorAccountNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lumpSumDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUMP_SUM_DETAILS: fieldBuilder.buildEdmTypeField(
          'LumpSumDetails',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TradeAllowanceAgreementMerchandisingEventLumpSums
        )
      };
    }

    return this._schema;
  }
}
