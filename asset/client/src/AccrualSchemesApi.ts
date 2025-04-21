/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualSchemes } from './AccrualSchemes';
import { AccrualSchemesRequestBuilder } from './AccrualSchemesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DayWeekMonth } from './DayWeekMonth';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { LedgerAccrualPeriod } from './LedgerAccrualPeriod';
import { LedgerAccrualEvenScale } from './LedgerAccrualEvenScale';
import { OmOperatingUnitType } from './OmOperatingUnitType';
import { LedgerAccrualVoucher } from './LedgerAccrualVoucher';
import { PrimoMedioUltimo } from './PrimoMedioUltimo';
import { AssetAccrualCalendar } from './AssetAccrualCalendar';
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
export class AccrualSchemesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccrualSchemes<DeSerializersT>, DeSerializersT>
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
  ): AccrualSchemesApi<DeSerializersT> {
    return new AccrualSchemesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AccrualSchemes<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AccrualSchemes;

  requestBuilder(): AccrualSchemesRequestBuilder<DeSerializersT> {
    return new AccrualSchemesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccrualSchemes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccrualSchemes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AccrualSchemes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AccrualSchemes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AccrualSchemes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCRUAL_IDENTIFICATION: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER_SEQUENCE_TABLE_NUMBER_SEQUENCE: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_SCHEME_DESCRIPTION: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_TRANSACTIONS: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      DayWeekMonth,
      true,
      true
    >;
    TRANSACTION_DESCRIPTION: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PERIOD_FREQUENCY: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      AssetAccrualFiscal,
      true,
      true
    >;
    FISCAL_CALENDAR_CALENDAR_ID: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_BASIS: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      LedgerAccrualPeriod,
      true,
      true
    >;
    PERIOD_KEY: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_OCCURRENCES_PER_PERIOD: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPREAD_MONTH_AND_QUARTER_VALUES: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      LedgerAccrualEvenScale,
      true,
      true
    >;
    NUMBER_SEQUENCE_SCOPE_OPERATING_UNIT_TYPE: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    CREDIT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR_YEAR_NAME: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      LedgerAccrualVoucher,
      true,
      true
    >;
    DEBIT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_IN_WEEK_MONTH_OR_QUARTER: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      PrimoMedioUltimo,
      true,
      true
    >;
    NUMBER_SEQUENCE_SCOPE_DATA_AREA: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_PARTY_NUMBER: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_PERIOD_FREQUENCY: EnumField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      AssetAccrualCalendar,
      true,
      true
    >;
    FISCAL_CALENDAR_PERIOD_NAME: OrderableEdmTypeField<
      AccrualSchemes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AccrualSchemes<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccrualSchemes<DeSerializers>>;
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
         * Static representation of the {@link accrualIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'AccrualIdentification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceTableNumberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_TABLE_NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceTable_NumberSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrualSchemeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_SCHEME_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AccrualSchemeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_TRANSACTIONS: fieldBuilder.buildEnumField(
          'PostTransactions',
          DayWeekMonth,
          true
        ),
        /**
         * Static representation of the {@link transactionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TransactionDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPeriodFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD_FREQUENCY: fieldBuilder.buildEnumField(
          'FiscalPeriodFrequency',
          AssetAccrualFiscal,
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendarCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar_CalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'LegalEntity_DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnit_PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrualBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_BASIS: fieldBuilder.buildEnumField(
          'AccrualBasis',
          LedgerAccrualPeriod,
          true
        ),
        /**
         * Static representation of the {@link periodKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_KEY: fieldBuilder.buildEdmTypeField(
          'PeriodKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfOccurrencesPerPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_OCCURRENCES_PER_PERIOD: fieldBuilder.buildEdmTypeField(
          'NumberOfOccurrencesPerPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link spreadMonthAndQuarterValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPREAD_MONTH_AND_QUARTER_VALUES: fieldBuilder.buildEnumField(
          'SpreadMonthAndQuarterValues',
          LedgerAccrualEvenScale,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceScopeOperatingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_SCOPE_OPERATING_UNIT_TYPE: fieldBuilder.buildEnumField(
          'NumberSequenceScope_OperatingUnitType',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link creditLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CreditLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendarYearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarYear_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEnumField(
          'Voucher',
          LedgerAccrualVoucher,
          true
        ),
        /**
         * Static representation of the {@link debitLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DebitLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postInWeekMonthOrQuarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_IN_WEEK_MONTH_OR_QUARTER: fieldBuilder.buildEnumField(
          'PostInWeekMonthOrQuarter',
          PrimoMedioUltimo,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceScopeDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_SCOPE_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'NumberSequenceScope_DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'LegalEntity_PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarPeriodFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_PERIOD_FREQUENCY: fieldBuilder.buildEnumField(
          'CalendarPeriodFrequency',
          AssetAccrualCalendar,
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendarPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarPeriod_Name',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccrualSchemes)
      };
    }

    return this._schema;
  }
}
