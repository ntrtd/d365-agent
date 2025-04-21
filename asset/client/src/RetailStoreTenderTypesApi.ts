/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreTenderTypes } from './RetailStoreTenderTypes';
import { RetailStoreTenderTypesRequestBuilder } from './RetailStoreTenderTypesRequestBuilder';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { RetailCallCentersApi } from './RetailCallCentersApi';
import { RetailStoresApi } from './RetailStoresApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { RetailAuthorizationTypes } from './RetailAuthorizationTypes';
import { RetailNoneNearestUpDown } from './RetailNoneNearestUpDown';
import { RetailLedgerBank } from './RetailLedgerBank';
import { RetailTenderFunction } from './RetailTenderFunction';
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
export class RetailStoreTenderTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailStoreTenderTypes<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreTenderTypesApi<DeSerializersT> {
    return new RetailStoreTenderTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnlineChannelsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      RetailCallCentersApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ONLINE_CHANNEL: new OneToOneLink('OnlineChannel', this, linkedApis[0]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      ),
      RETAIL_CALL_CENTER: new OneToOneLink(
        'RetailCallCenter',
        this,
        linkedApis[2]
      ),
      RETAIL_STORE: new OneToOneLink('RetailStore', this, linkedApis[3]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = RetailStoreTenderTypes;

  requestBuilder(): RetailStoreTenderTypesRequestBuilder<DeSerializersT> {
    return new RetailStoreTenderTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreTenderTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreTenderTypes<DeSerializersT>,
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
    typeof RetailStoreTenderTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreTenderTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_METHOD_NUMBER: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAKEN_TO_BANK: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SIGNATURE_CAPTURE_MIN_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HIDE_CARD_INPUT_DETAILS_IN_POS: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONNECTOR_NAME: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_RECOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAY_ACCOUNT_BILL: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEEK_AUTHORIZATION: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      RetailAuthorizationTypes,
      true,
      true
    >;
    MAXIMUM_OVERTENDER_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_METHOD: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      RetailNoneNearestUpDown,
      true,
      true
    >;
    FRONT_OF_CHECK: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAFE_ACTIVE_ACCOUNT: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPEN_DRAWER: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPRESS_PAYMENT_ENTRIES: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTIPLY_IN_TENDER_OPERATIONS: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROUNDING: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_DIMENSION_GIFT_CARD_COMPANY_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_CHANGE_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POS_COUNT_ENTRIES: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAKEN_TO_SAFE: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_NORMAL_DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_UNDERTENDER: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TENDER_FLOW_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABOVE_MINIMUM_TENDER_ID: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_RETURN_NEGATIVE: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_LINE_ON_RECEIPT: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIFFERENCE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIG_CAP_ENABLED: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_AMOUNT_ENTERED: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENDORSE_CHECK: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_TYPE_GIFT_CARD_COMPANY: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    GIFT_CARD_COMPANY: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_OVERTENDER: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIFT_CARD_CASH_OUT_THRESHOLD: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASK_FOR_DATE: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_AMOUNT_ALLOWED: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_AMOUNT_ALLOWED: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHANGE_TENDER_ID: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTION: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      RetailTenderFunction,
      true,
      true
    >;
    MINIMUM_AMOUNT_ENTERED: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIFF_ACC_BIG_DIFF_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ITEM_ID: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_COUNTING_DIFFERENCE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDERTENDER_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    COUNTING_REQUIRED: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAFE_ACCOUNT_TYPE: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    POS_OPERATION: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHECK_PAYEE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_ACCOUNT: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SLIP_BACK_IN_PRINTER: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_BAG_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENDORSMENT_LINE_2: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SLIP_FRONT_IN_PRINTER: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENDORSMENT_LINE_1: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_FLOAT: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_NUM_IN_TRANSACTION: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAFE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_BAG_ACCOUNT_TYPE: EnumField<
      RetailStoreTenderTypes<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailStoreTenderTypes<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStoreTenderTypes<DeSerializers>>;
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
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentMethodNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_NUMBER: fieldBuilder.buildEdmTypeField(
          'PaymentMethodNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link takenToBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAKEN_TO_BANK: fieldBuilder.buildEnumField('TakenToBank', NoYes, true),
        /**
         * Static representation of the {@link signatureCaptureMinAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_CAPTURE_MIN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SignatureCaptureMinAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hideCardInputDetailsInPos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_CARD_INPUT_DETAILS_IN_POS: fieldBuilder.buildEnumField(
          'HideCardInputDetailsInPOS',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link connectorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_NAME: fieldBuilder.buildEdmTypeField(
          'ConnectorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link maxRecount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_RECOUNT: fieldBuilder.buildEdmTypeField(
          'MaxRecount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link payAccountBill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_ACCOUNT_BILL: fieldBuilder.buildEnumField(
          'PayAccountBill',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link seekAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEEK_AUTHORIZATION: fieldBuilder.buildEnumField(
          'SeekAuthorization',
          RetailAuthorizationTypes,
          true
        ),
        /**
         * Static representation of the {@link maximumOvertenderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_OVERTENDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumOvertenderAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD: fieldBuilder.buildEnumField(
          'RoundingMethod',
          RetailNoneNearestUpDown,
          true
        ),
        /**
         * Static representation of the {@link frontOfCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRONT_OF_CHECK: fieldBuilder.buildEnumField(
          'FrontOfCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link safeActiveAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFE_ACTIVE_ACCOUNT: fieldBuilder.buildEnumField(
          'SafeActiveAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link openDrawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_DRAWER: fieldBuilder.buildEnumField('OpenDrawer', NoYes, true),
        /**
         * Static representation of the {@link compressPaymentEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPRESS_PAYMENT_ENTRIES: fieldBuilder.buildEnumField(
          'CompressPaymentEntries',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link multiplyInTenderOperations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLY_IN_TENDER_OPERATIONS: fieldBuilder.buildEnumField(
          'MultiplyInTenderOperations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING: fieldBuilder.buildEdmTypeField(
          'Rounding',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerDimensionGiftCardCompanyDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_GIFT_CARD_COMPANY_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'LedgerDimensionGiftCardCompanyDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link minimumChangeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_CHANGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumChangeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link posCountEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_COUNT_ENTRIES: fieldBuilder.buildEnumField(
          'PosCountEntries',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link takenToSafe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAKEN_TO_SAFE: fieldBuilder.buildEnumField('TakenToSafe', NoYes, true),
        /**
         * Static representation of the {@link maxNormalDifferenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_NORMAL_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxNormalDifferenceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowUndertender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_UNDERTENDER: fieldBuilder.buildEnumField(
          'AllowUndertender',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tenderFlowLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_FLOW_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'TenderFlowLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link aboveMinimumTenderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABOVE_MINIMUM_TENDER_ID: fieldBuilder.buildEdmTypeField(
          'AboveMinimumTenderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowReturnNegative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_RETURN_NEGATIVE: fieldBuilder.buildEnumField(
          'AllowReturnNegative',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link changeLineOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_LINE_ON_RECEIPT: fieldBuilder.buildEdmTypeField(
          'ChangeLineOnReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link differenceAccLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFFERENCE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DifferenceAccLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link sigCapEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIG_CAP_ENABLED: fieldBuilder.buildEnumField(
          'SigCapEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumAmountEntered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT_ENTERED: fieldBuilder.buildEdmTypeField(
          'MaximumAmountEntered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link endorseCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDORSE_CHECK: fieldBuilder.buildEnumField('EndorseCheck', NoYes, true),
        /**
         * Static representation of the {@link accountTypeGiftCardCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE_GIFT_CARD_COMPANY: fieldBuilder.buildEnumField(
          'AccountTypeGiftCardCompany',
          RetailLedgerBank,
          true
        ),
        /**
         * Static representation of the {@link giftCardCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_COMPANY: fieldBuilder.buildEdmTypeField(
          'GiftCardCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowOvertender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_OVERTENDER: fieldBuilder.buildEnumField(
          'AllowOvertender',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giftCardCashOutThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_CASH_OUT_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'GiftCardCashOutThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link askForDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASK_FOR_DATE: fieldBuilder.buildEnumField('AskForDate', NoYes, true),
        /**
         * Static representation of the {@link minimumAmountAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT_ALLOWED: fieldBuilder.buildEdmTypeField(
          'MinimumAmountAllowed',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumAmountAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT_ALLOWED: fieldBuilder.buildEdmTypeField(
          'MaximumAmountAllowed',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link changeTenderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_TENDER_ID: fieldBuilder.buildEdmTypeField(
          'ChangeTenderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link function} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION: fieldBuilder.buildEnumField(
          'Function',
          RetailTenderFunction,
          true
        ),
        /**
         * Static representation of the {@link minimumAmountEntered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT_ENTERED: fieldBuilder.buildEdmTypeField(
          'MinimumAmountEntered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link diffAccBigDiffLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFF_ACC_BIG_DIFF_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DiffAccBigDiffLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link paymTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_TERM_ID: fieldBuilder.buildEdmTypeField(
          'PaymTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'GiftCardItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxCountingDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_COUNTING_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'MaxCountingDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link undertenderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERTENDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'UndertenderAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          RetailLedgerBank,
          true
        ),
        /**
         * Static representation of the {@link countingRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_REQUIRED: fieldBuilder.buildEnumField(
          'CountingRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link safeAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFE_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'SafeAccountType',
          RetailLedgerBank,
          true
        ),
        /**
         * Static representation of the {@link posOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_OPERATION: fieldBuilder.buildEdmTypeField(
          'PosOperation',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link checkPayee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_PAYEE: fieldBuilder.buildEdmTypeField(
          'CheckPayee',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ACCOUNT: fieldBuilder.buildEnumField(
          'ActiveAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link slipBackInPrinter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SLIP_BACK_IN_PRINTER: fieldBuilder.buildEdmTypeField(
          'SlipBackInPrinter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankBagLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BAG_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'BankBagLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endorsmentLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDORSMENT_LINE_2: fieldBuilder.buildEdmTypeField(
          'EndorsmentLine2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link slipFrontInPrinter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SLIP_FRONT_IN_PRINTER: fieldBuilder.buildEdmTypeField(
          'SlipFrontInPrinter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endorsmentLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDORSMENT_LINE_1: fieldBuilder.buildEdmTypeField(
          'EndorsmentLine1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowFloat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_FLOAT: fieldBuilder.buildEnumField('AllowFloat', NoYes, true),
        /**
         * Static representation of the {@link lineNumInTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM_IN_TRANSACTION: fieldBuilder.buildEdmTypeField(
          'LineNumInTransaction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link safeAccLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SafeAccLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankBagAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BAG_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'BankBagAccountType',
          RetailLedgerBank,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreTenderTypes)
      };
    }

    return this._schema;
  }
}
