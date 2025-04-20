/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreTenderTypeTable } from './RetailStoreTenderTypeTable';
import { RetailStoreTenderTypeTableRequestBuilder } from './RetailStoreTenderTypeTableRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { RetailNoneNearestUpDown } from './RetailNoneNearestUpDown';
import { RetailLedgerBank } from './RetailLedgerBank';
import { RetailAuthorizationTypes } from './RetailAuthorizationTypes';
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
export class RetailStoreTenderTypeTableApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailStoreTenderTypeTable<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreTenderTypeTableApi<DeSerializersT> {
    return new RetailStoreTenderTypeTableApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailStoreTenderTypeTable<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailStoreTenderTypeTable;

  requestBuilder(): RetailStoreTenderTypeTableRequestBuilder<DeSerializersT> {
    return new RetailStoreTenderTypeTableRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreTenderTypeTable<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStoreTenderTypeTable<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreTenderTypeTable<DeSerializersT>,
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
    typeof RetailStoreTenderTypeTable,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreTenderTypeTable,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TENDER_TYPE_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPEN_DRAWER: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_AMOUNT_ALLOWED: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUM_IN_TRANSACTION: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_METHOD: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      RetailNoneNearestUpDown,
      true,
      true
    >;
    DIFFERENCE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE_LINE_ON_RECEIPT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONNECTOR_NAME: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMINAL_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SLIP_FRONT_IN_PRINTER: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIFF_ACC_BIG_DIFF_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_FLOAT: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAKEN_TO_BANK: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_OVERTENDER_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVE_ACCOUNT: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_BAG_ACCOUNT_TYPE: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    SAFE_ACCOUNT_TYPE: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    MAXIMUM_AMOUNT_ENTERED: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESTRICT_RETURNS_WITHOUT_RECEIPT: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_NORMAL_DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEEK_AUTHORIZATION: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      RetailAuthorizationTypes,
      true,
      true
    >;
    ABOVE_MINIMUM_TENDER_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_CASH_OUT_THRESHOLD: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_COUNTING_DIFFERENCE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_ACCOUNT_BILL: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIFT_CARD_ITEM_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE_GIFT_CARD_COMPANY: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    SIG_CAP_MIN_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TENDER_FLOW_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_COMPANY: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENDORSE_CHECK: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_REQUIRED: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASK_FOR_DATE: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAKEN_TO_SAFE: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAFE_ACTIVE_ACCOUNT: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_BAG_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_CHANGE_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SIG_CAP_ENABLED: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTIPLY_IN_TENDER_OPERATIONS: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_RECOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENDORSMENT_LINE_2: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDERTENDER_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENDORSMENT_LINE_1: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FRONT_OF_CHECK: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPRESS_PAYMENT_ENTRIES: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIDE_CARD_INPUT_DETAILS_IN_POS: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    POS_OPERATION: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHANGE_TENDER_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_UNDERTENDER: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_AMOUNT_ALLOWED: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_RETURN_NEGATIVE: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FUNCTION: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      RetailTenderFunction,
      true,
      true
    >;
    SAFE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PRINTER_TENDER_TYPE_BR: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_OVERTENDER: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POS_COUNT_ENTRIES: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_AMOUNT_ENTERED: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DRAWER_LIMIT: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SLIP_BACK_IN_PRINTER: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_PAYEE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION_GIFT_CARD_COMPANY_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DRAWER_LIMIT_ENABLED: EnumField<
      RetailStoreTenderTypeTable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailStoreTenderTypeTable<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStoreTenderTypeTable<DeSerializers>>;
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
         * Static representation of the {@link omOperatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnit_PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TenderTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link openDrawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_DRAWER: fieldBuilder.buildEnumField('OpenDrawer', NoYes, true),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link lineNumInTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM_IN_TRANSACTION: fieldBuilder.buildEdmTypeField(
          'LineNumInTransaction',
          'Edm.String',
          true
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
         * Static representation of the {@link changeLineOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_LINE_ON_RECEIPT: fieldBuilder.buildEdmTypeField(
          'ChangeLineOnReceipt',
          'Edm.String',
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
         * Static representation of the {@link connectorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_NAME: fieldBuilder.buildEdmTypeField(
          'ConnectorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'PaymentTerminalId',
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
         * Static representation of the {@link allowFloat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_FLOAT: fieldBuilder.buildEnumField('AllowFloat', NoYes, true),
        /**
         * Static representation of the {@link takenToBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAKEN_TO_BANK: fieldBuilder.buildEnumField('TakenToBank', NoYes, true),
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
         * Static representation of the {@link activeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ACCOUNT: fieldBuilder.buildEnumField(
          'ActiveAccount',
          NoYes,
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
         * Static representation of the {@link maximumAmountEntered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT_ENTERED: fieldBuilder.buildEdmTypeField(
          'MaximumAmountEntered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link restrictReturnsWithoutReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_RETURNS_WITHOUT_RECEIPT: fieldBuilder.buildEnumField(
          'RestrictReturnsWithoutReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumNormalDifferenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_NORMAL_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumNormalDifferenceAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link aboveMinimumTenderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABOVE_MINIMUM_TENDER_ID: fieldBuilder.buildEdmTypeField(
          'AboveMinimumTenderId',
          'Edm.String',
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
         * Static representation of the {@link maximumCountingDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_COUNTING_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'MaximumCountingDifference',
          'Edm.Decimal',
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
         * Static representation of the {@link giftCardItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'GiftCardItemId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link sigCapMinAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIG_CAP_MIN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SigCapMinAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link giftCardCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_COMPANY: fieldBuilder.buildEdmTypeField(
          'GiftCardCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endorseCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDORSE_CHECK: fieldBuilder.buildEnumField('EndorseCheck', NoYes, true),
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
         * Static representation of the {@link countingRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_REQUIRED: fieldBuilder.buildEnumField(
          'CountingRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link askForDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASK_FOR_DATE: fieldBuilder.buildEnumField('AskForDate', NoYes, true),
        /**
         * Static representation of the {@link takenToSafe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAKEN_TO_SAFE: fieldBuilder.buildEnumField('TakenToSafe', NoYes, true),
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
         * Static representation of the {@link bankBagLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BAG_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'BankBagLedgerDimensionDisplayValue',
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
         * Static representation of the {@link sigCapEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIG_CAP_ENABLED: fieldBuilder.buildEnumField(
          'SigCapEnabled',
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
         * Static representation of the {@link maximumRecount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RECOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumRecount',
          'Edm.Int32',
          false
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
         * Static representation of the {@link undertenderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERTENDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'UndertenderAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link frontOfCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRONT_OF_CHECK: fieldBuilder.buildEnumField(
          'FrontOfCheck',
          NoYes,
          true
        ),
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
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
         * Static representation of the {@link changeTenderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_TENDER_ID: fieldBuilder.buildEdmTypeField(
          'ChangeTenderId',
          'Edm.String',
          true
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
         * Static representation of the {@link maximumAmountAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT_ALLOWED: fieldBuilder.buildEdmTypeField(
          'MaximumAmountAllowed',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link function} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION: fieldBuilder.buildEnumField(
          'Function',
          RetailTenderFunction,
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
         * Static representation of the {@link fiscalPrinterTenderTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTER_TENDER_TYPE_BR: fieldBuilder.buildEdmTypeField(
          'FiscalPrinterTenderType_BR',
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
         * Static representation of the {@link posCountEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_COUNT_ENTRIES: fieldBuilder.buildEnumField(
          'PosCountEntries',
          NoYes,
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
         * Static representation of the {@link cashDrawerLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DRAWER_LIMIT: fieldBuilder.buildEdmTypeField(
          'CashDrawerLimit',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link checkPayee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_PAYEE: fieldBuilder.buildEdmTypeField(
          'CheckPayee',
          'Edm.String',
          true
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
         * Static representation of the {@link cashDrawerLimitEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DRAWER_LIMIT_ENABLED: fieldBuilder.buildEnumField(
          'CashDrawerLimitEnabled',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreTenderTypeTable)
      };
    }

    return this._schema;
  }
}
