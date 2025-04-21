/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ForeignTradeParameters } from './ForeignTradeParameters';
import { ForeignTradeParametersRequestBuilder } from './ForeignTradeParametersRequestBuilder';
import { NoYes } from './NoYes';
import { PeriodOfReporting } from './PeriodOfReporting';
import { RoundOffType } from './RoundOffType';
import { IntrastatWeightRounding } from './IntrastatWeightRounding';
import { IntrastatCalcMethodHu } from './IntrastatCalcMethodHu';
import { NoneOneOfAllSelected } from './NoneOneOfAllSelected';
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
export class ForeignTradeParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ForeignTradeParameters<DeSerializersT>, DeSerializersT>
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
  ): ForeignTradeParametersApi<DeSerializersT> {
    return new ForeignTradeParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ForeignTradeParameters;

  requestBuilder(): ForeignTradeParametersRequestBuilder<DeSerializersT> {
    return new ForeignTradeParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ForeignTradeParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ForeignTradeParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ForeignTradeParameters<DeSerializersT>,
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
    typeof ForeignTradeParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ForeignTradeParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMODITY: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_COMPANY_FLOOR_NUMBER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEMS_WITH_ADDITIONAL_UNITS: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMS_OF_DELIVERY: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORT_LEVEL_EXPORT: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATE_OR_PROVINCE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESL_COMPANY_DOOR_NUMBER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_FILLED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_FAX: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_AMOUNT_DECIMALS: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPANY_INFO_DATA_AREA_ID: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_REPORTING_PERIOD: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      PeriodOfReporting,
      true,
      true
    >;
    ESL_TRANSFER_CASH_DISCOUNT: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_REPORTING_PERIOD: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      PeriodOfReporting,
      true,
      true
    >;
    ESL_AMOUNT_ROUND_OFF: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_WEIGHT_ROUNDING_METHOD: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    INTRASTAT_REPORT_ER_SOLUTION_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_AMOUNT_ROUND_OFF_USE_MINIMUM_VALUE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESL_REPORT_ER_FORMAT_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_STATE_SENDER_RECEIVER: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WEIGHT: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_STATISTIC_PROCEDURE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_AMOUNT_ROUNDING_RULE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_EMAIL: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_WEIGHT_DECIMALS: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGENT_BRANCH_ID: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_FILE_ER_SOLUTION_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_LOW_WEIGHT_ROUNDING: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      IntrastatWeightRounding,
      true,
      true
    >;
    CONTACT_URL: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_TRANSFER_PURCHASES: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NONSERVICE_ITEMS: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_AMOUNT_ROUND_OFF_USE_MINIMUM_VALUE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PORT_PARM: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATISTIC_PROCEDURE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEMS_WITH_COMMODITY_CODE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGENT_PHONE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_WEIGHT_ROUNDING_RULE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGENT_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_COMPANY_BUILDING_NUMBER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGENT_FAX: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODES: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMODITY_HIERARCHY_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_UNITS: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_CHECK_FULFILLMENT_DATE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESL_FILE_ER_VENDOR_URL: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEMS_WITH_WEIGHT: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_EXPORT_STATISTICAL_REPORT: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESL_REPORT_ER_VENDOR_URL: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_QTY: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_SPEC_MOVE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGIN: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESL_TAX_AUTHORITY: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_SPECIFIC_MOVEMENT: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMODITY_CODE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_AMOUNT_ROUNDING_METHOD: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    INTRASTAT_FILE_ER_SOLUTION_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_CALC_METHOD: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      IntrastatCalcMethodHu,
      true,
      true
    >;
    TRANSFER_ORDER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_REPORT_ER_VENDOR_URL: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_LEVEL_IMPORT: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_AMOUNT: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_FILE_ER_FORMAT_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGENT_TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_REPORT_ER_SOLUTION_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_AUTHORIZED_BY_ROLE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_REPORT_ER_FORMAT_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_FILE_ER_FORMAT_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_COUNTRY_REGION_SENDER_RECEIVER: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESL_COMPANY_STAIRWAY_NUMBER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_MODE_CODE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_NAME: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_NOTE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_WHEN_MEETING_CRITERION_FOR: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoneOneOfAllSelected,
      true,
      true
    >;
    INTRASTAT_FILE_ER_VENDOR_URL: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESL_AUTHORIZED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_WEIGHT: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PORT: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_PHONE: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESL_COMPANY_NAME_APPENDIX: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_ORIGIN_DESTINATION: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_INFO_LOCATION_ID: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_EMPTY_WARNING: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_AMOUNT_DECIMALS: OrderableEdmTypeField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ESL_AMOUNT_ROUND_OFF_TYPE: EnumField<
      ForeignTradeParameters<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ForeignTradeParameters<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link commodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY: fieldBuilder.buildEdmTypeField(
          'Commodity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslCompanyFloorNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_COMPANY_FLOOR_NUMBER: fieldBuilder.buildEdmTypeField(
          'ESLCompanyFloorNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemsWithAdditionalUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_WITH_ADDITIONAL_UNITS: fieldBuilder.buildEnumField(
          'ItemsWithAdditionalUnits',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link termsOfDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_DELIVERY: fieldBuilder.buildEnumField(
          'TermsOfDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportLevelExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_LEVEL_EXPORT: fieldBuilder.buildEdmTypeField(
          'ReportLevelExport',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link stateOrProvince} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_OR_PROVINCE: fieldBuilder.buildEnumField(
          'StateOrProvince',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eslCompanyDoorNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_COMPANY_DOOR_NUMBER: fieldBuilder.buildEdmTypeField(
          'ESLCompanyDoorNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslFilledByWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_FILLED_BY_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ESLFilledByWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'ContactFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslAmountDecimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_AMOUNT_DECIMALS: fieldBuilder.buildEdmTypeField(
          'ESLAmountDecimals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link companyInfoDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_INFO_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'CompanyInfoDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEnumField(
          'CountryRegion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesReportingPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REPORTING_PERIOD: fieldBuilder.buildEnumField(
          'SalesReportingPeriod',
          PeriodOfReporting,
          true
        ),
        /**
         * Static representation of the {@link eslTransferCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_TRANSFER_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'ESLTransferCashDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseReportingPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REPORTING_PERIOD: fieldBuilder.buildEnumField(
          'PurchaseReportingPeriod',
          PeriodOfReporting,
          true
        ),
        /**
         * Static representation of the {@link eslAmountRoundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_AMOUNT_ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'ESLAmountRoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intrastatWeightRoundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_WEIGHT_ROUNDING_METHOD: fieldBuilder.buildEnumField(
          'IntrastatWeightRoundingMethod',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link intrastatReportErSolutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_REPORT_ER_SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'IntrastatReportERSolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslAmountRoundOffUseMinimumValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_AMOUNT_ROUND_OFF_USE_MINIMUM_VALUE: fieldBuilder.buildEnumField(
          'ESLAmountRoundOffUseMinimumValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eslReportErFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_REPORT_ER_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'ESLReportERFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkStateSenderReceiver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_STATE_SENDER_RECEIVER: fieldBuilder.buildEnumField(
          'CheckStateSenderReceiver',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEnumField('Weight', NoYes, true),
        /**
         * Static representation of the {@link checkStatisticProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_STATISTIC_PROCEDURE: fieldBuilder.buildEnumField(
          'CheckStatisticProcedure',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatAmountRoundingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_AMOUNT_ROUNDING_RULE: fieldBuilder.buildEdmTypeField(
          'IntrastatAmountRoundingRule',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS: fieldBuilder.buildEdmTypeField(
          'DeliveryTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatWeightDecimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_WEIGHT_DECIMALS: fieldBuilder.buildEdmTypeField(
          'IntrastatWeightDecimals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link agentBranchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_BRANCH_ID: fieldBuilder.buildEdmTypeField(
          'AgentBranchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslFileErSolutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_FILE_ER_SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'ESLFileERSolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatLowWeightRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_LOW_WEIGHT_ROUNDING: fieldBuilder.buildEnumField(
          'IntrastatLowWeightRounding',
          IntrastatWeightRounding,
          true
        ),
        /**
         * Static representation of the {@link contactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'ContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslTransferPurchases} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_TRANSFER_PURCHASES: fieldBuilder.buildEnumField(
          'ESLTransferPurchases',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nonserviceItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NONSERVICE_ITEMS: fieldBuilder.buildEnumField(
          'NonserviceItems',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatAmountRoundOffUseMinimumValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_AMOUNT_ROUND_OFF_USE_MINIMUM_VALUE:
          fieldBuilder.buildEnumField(
            'IntrastatAmountRoundOffUseMinimumValue',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link portParm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT_PARM: fieldBuilder.buildEdmTypeField(
          'PortParm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEnumField('Transport', NoYes, true),
        /**
         * Static representation of the {@link statisticProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTIC_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'StatisticProcedure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemsWithCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_WITH_COMMODITY_CODE: fieldBuilder.buildEnumField(
          'ItemsWithCommodityCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agentPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_PHONE: fieldBuilder.buildEdmTypeField(
          'AgentPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatWeightRoundingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_WEIGHT_ROUNDING_RULE: fieldBuilder.buildEdmTypeField(
          'IntrastatWeightRoundingRule',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_NAME: fieldBuilder.buildEdmTypeField(
          'AgentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslCompanyBuildingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_COMPANY_BUILDING_NUMBER: fieldBuilder.buildEdmTypeField(
          'ESLCompanyBuildingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agentFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_FAX: fieldBuilder.buildEdmTypeField(
          'AgentFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODES: fieldBuilder.buildEnumField(
          'TransactionCodes',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link commodityHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CommodityHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_UNITS: fieldBuilder.buildEnumField(
          'AdditionalUnits',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatCheckFulfillmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CHECK_FULFILLMENT_DATE: fieldBuilder.buildEnumField(
          'IntrastatCheckFulfillmentDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eslFileErVendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_FILE_ER_VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'ESLFileERVendorUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemsWithWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_WITH_WEIGHT: fieldBuilder.buildEnumField(
          'ItemsWithWeight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEnumField('County', NoYes, true),
        /**
         * Static representation of the {@link printExportStatisticalReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_EXPORT_STATISTICAL_REPORT: fieldBuilder.buildEnumField(
          'PrintExportStatisticalReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eslReportErVendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_REPORT_ER_VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'ESLReportERVendorUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_QTY: fieldBuilder.buildEnumField('CheckQty', NoYes, true),
        /**
         * Static representation of the {@link intrastatSpecMove} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_SPEC_MOVE: fieldBuilder.buildEnumField(
          'IntrastatSpecMove',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEnumField('Origin', NoYes, true),
        /**
         * Static representation of the {@link eslTaxAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_TAX_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'ESLTaxAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatSpecificMovement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_SPECIFIC_MOVEMENT: fieldBuilder.buildEdmTypeField(
          'IntrastatSpecificMovement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_CODE: fieldBuilder.buildEnumField(
          'CommodityCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatAmountRoundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_AMOUNT_ROUNDING_METHOD: fieldBuilder.buildEnumField(
          'IntrastatAmountRoundingMethod',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link intrastatFileErSolutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FILE_ER_SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'IntrastatFileERSolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CALC_METHOD: fieldBuilder.buildEnumField(
          'IntrastatCalcMethod',
          IntrastatCalcMethodHu,
          true
        ),
        /**
         * Static representation of the {@link transferOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER: fieldBuilder.buildEdmTypeField(
          'TransferOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatReportErVendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_REPORT_ER_VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'IntrastatReportERVendorUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportLevelImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_LEVEL_IMPORT: fieldBuilder.buildEdmTypeField(
          'ReportLevelImport',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEnumField('Amount', NoYes, true),
        /**
         * Static representation of the {@link maxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intrastatFileErFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FILE_ER_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'IntrastatFileERFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agentTaxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgentTaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslReportErSolutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_REPORT_ER_SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'ESLReportERSolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslAuthorizedByRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_AUTHORIZED_BY_ROLE: fieldBuilder.buildEdmTypeField(
          'ESLAuthorizedByRole',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatReportErFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_REPORT_ER_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'IntrastatReportERFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslFileErFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_FILE_ER_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'ESLFileERFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkCountryRegionSenderReceiver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_COUNTRY_REGION_SENDER_RECEIVER: fieldBuilder.buildEnumField(
          'CheckCountryRegionSenderReceiver',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eslCompanyStairwayNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_COMPANY_STAIRWAY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ESLCompanyStairwayNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'TransportModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE: fieldBuilder.buildEdmTypeField(
          'CreditNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferWhenMeetingCriterionFor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_WHEN_MEETING_CRITERION_FOR: fieldBuilder.buildEnumField(
          'TransferWhenMeetingCriterionFor',
          NoneOneOfAllSelected,
          true
        ),
        /**
         * Static representation of the {@link intrastatFileErVendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FILE_ER_VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'IntrastatFileERVendorUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eslAuthorizedByWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_AUTHORIZED_BY_WORKER_PERSONNEL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ESLAuthorizedByWorkerPersonnelNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link maxWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_WEIGHT: fieldBuilder.buildEdmTypeField(
          'MaxWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEnumField('Port', NoYes, true),
        /**
         * Static representation of the {@link contactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'ContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEnumField(
          'TaxExemptNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eslCompanyNameAppendix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_COMPANY_NAME_APPENDIX: fieldBuilder.buildEdmTypeField(
          'ESLCompanyNameAppendix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countyOriginDestination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ORIGIN_DESTINATION: fieldBuilder.buildEdmTypeField(
          'CountyOriginDestination',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyInfoLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_INFO_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'CompanyInfoLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatFulfillmentDateEmptyWarning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FULFILLMENT_DATE_EMPTY_WARNING: fieldBuilder.buildEnumField(
          'IntrastatFulfillmentDateEmptyWarning',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatAmountDecimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_AMOUNT_DECIMALS: fieldBuilder.buildEdmTypeField(
          'IntrastatAmountDecimals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link eslAmountRoundOffType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESL_AMOUNT_ROUND_OFF_TYPE: fieldBuilder.buildEnumField(
          'ESLAmountRoundOffType',
          RoundOffType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ForeignTradeParameters)
      };
    }

    return this._schema;
  }
}
