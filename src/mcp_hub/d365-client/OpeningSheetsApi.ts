/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpeningSheets } from './OpeningSheets';
import { OpeningSheetsRequestBuilder } from './OpeningSheetsRequestBuilder';
import { NoYes } from './NoYes';
import { FiscalPeriodType } from './FiscalPeriodType';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
export class OpeningSheetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OpeningSheets<DeSerializersT>, DeSerializersT>
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
  ): OpeningSheetsApi<DeSerializersT> {
    return new OpeningSheetsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OpeningSheets;

  requestBuilder(): OpeningSheetsRequestBuilder<DeSerializersT> {
    return new OpeningSheetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OpeningSheets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OpeningSheets<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<OpeningSheets<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof OpeningSheets, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(OpeningSheets, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHEET: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_OPENING_TABLE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_OPENING_TABLE_CHART_OF_ACCOUNTS_NAME: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUM_BALANCE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BALANCE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_OPENING_TRANS_MAIN_ACCOUNT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRIAL_BALANCE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_CAPITAL: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECONCILED: EnumField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_TRIAL_BALANCE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESULT: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSFER: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_OPENING_TRANS_OFFSET_ACCOUNT_MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR_CALENDAR_ID: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_CODE: EnumField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      FiscalPeriodType,
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR_PERIOD_NAME: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountType,
      true,
      true
    >;
    SUM_RESULT: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_TRANSFER: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POST_DATE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATIONS_TAX: EnumField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    LEDGER_OPENING_TRANS_OFFSET_ACCOUNT_CHART_OF_ACCOUNT_NAME: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACKNOWLEDGEMENT_DATE: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_OPENING_TRANS_MAIN_ACCOUNT_CHART_OF_ACCOUNT_NAME: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPITAL: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FISCAL_CALENDAR_YEAR_NAME: OrderableEdmTypeField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_OPERATIONS_TAX: EnumField<
      OpeningSheets<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    ALL_FIELDS: AllFields<OpeningSheets<DeSerializers>>;
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
         * Static representation of the {@link sheet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHEET: fieldBuilder.buildEdmTypeField('Sheet', 'Edm.String', false),
        /**
         * Static representation of the {@link ledgerOpeningTableMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_OPENING_TABLE_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'LedgerOpeningTableMainAccountIdDisplayValue',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link ledgerOpeningTableChartOfAccountsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_OPENING_TABLE_CHART_OF_ACCOUNTS_NAME:
          fieldBuilder.buildEdmTypeField(
            'LedgerOpeningTableChartOfAccountsName',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link sumBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_BALANCE: fieldBuilder.buildEdmTypeField(
          'SumBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link balance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE: fieldBuilder.buildEdmTypeField(
          'Balance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerOpeningTransMainAccountMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_OPENING_TRANS_MAIN_ACCOUNT_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'LedgerOpeningTransMainAccountMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link trialBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIAL_BALANCE: fieldBuilder.buildEdmTypeField(
          'TrialBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sumCapital} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_CAPITAL: fieldBuilder.buildEdmTypeField(
          'SumCapital',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reconciled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILED: fieldBuilder.buildEnumField('Reconciled', NoYes, true),
        /**
         * Static representation of the {@link sumTrialBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_TRIAL_BALANCE: fieldBuilder.buildEdmTypeField(
          'SumTrialBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link result} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT: fieldBuilder.buildEdmTypeField('Result', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link transfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER: fieldBuilder.buildEdmTypeField(
          'Transfer',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerOpeningTransOffsetAccountMainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_OPENING_TRANS_OFFSET_ACCOUNT_MAIN_ACCOUNT_ID:
          fieldBuilder.buildEdmTypeField(
            'LedgerOpeningTransOffsetAccountMainAccountId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link fiscalCalendarCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_CODE: fieldBuilder.buildEnumField(
          'PeriodCode',
          FiscalPeriodType,
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendarPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarPeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          DimensionLedgerAccountType,
          true
        ),
        /**
         * Static representation of the {@link sumResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_RESULT: fieldBuilder.buildEdmTypeField(
          'SumResult',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link sumTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_TRANSFER: fieldBuilder.buildEdmTypeField(
          'SumTransfer',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_DATE: fieldBuilder.buildEdmTypeField(
          'PostDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ledgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operationsTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_TAX: fieldBuilder.buildEnumField(
          'OperationsTax',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link ledgerOpeningTransOffsetAccountChartOfAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_OPENING_TRANS_OFFSET_ACCOUNT_CHART_OF_ACCOUNT_NAME:
          fieldBuilder.buildEdmTypeField(
            'LedgerOpeningTransOffsetAccountChartOfAccountName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link acknowledgementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACKNOWLEDGEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AcknowledgementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ledgerOpeningTransMainAccountChartOfAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_OPENING_TRANS_MAIN_ACCOUNT_CHART_OF_ACCOUNT_NAME:
          fieldBuilder.buildEdmTypeField(
            'LedgerOpeningTransMainAccountChartOfAccountName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link capital} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPITAL: fieldBuilder.buildEdmTypeField(
          'Capital',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendarYearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarYearName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currentOperationsTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_OPERATIONS_TAX: fieldBuilder.buildEnumField(
          'CurrentOperationsTax',
          CurrentOperationsTax,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OpeningSheets)
      };
    }

    return this._schema;
  }
}
