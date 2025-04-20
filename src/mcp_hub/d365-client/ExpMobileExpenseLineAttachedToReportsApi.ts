/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileExpenseLineAttachedToReports } from './ExpMobileExpenseLineAttachedToReports';
import { ExpMobileExpenseLineAttachedToReportsRequestBuilder } from './ExpMobileExpenseLineAttachedToReportsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';
import { TrvExpEntryPoint } from './TrvExpEntryPoint';
import { TrvAirlineServiceClassEnum } from './TrvAirlineServiceClassEnum';
import { TrvBillIssuedTo } from './TrvBillIssuedTo';
import { TrvCostOwner } from './TrvCostOwner';
import { TrvExpLineType } from './TrvExpLineType';
import { Timezone } from './Timezone';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TrvExpSplitLineType } from './TrvExpSplitLineType';
import { TrvExpType } from './TrvExpType';
import { TrvAppStatus } from './TrvAppStatus';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
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
export class ExpMobileExpenseLineAttachedToReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExpMobileExpenseLineAttachedToReports<DeSerializersT>,
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
  ): ExpMobileExpenseLineAttachedToReportsApi<DeSerializersT> {
    return new ExpMobileExpenseLineAttachedToReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpMobileExpenseLineAttachedToReports<DeSerializersT>,
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

  entityConstructor = ExpMobileExpenseLineAttachedToReports;

  requestBuilder(): ExpMobileExpenseLineAttachedToReportsRequestBuilder<DeSerializersT> {
    return new ExpMobileExpenseLineAttachedToReportsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileExpenseLineAttachedToReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileExpenseLineAttachedToReports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileExpenseLineAttachedToReports<DeSerializersT>,
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
    typeof ExpMobileExpenseLineAttachedToReports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileExpenseLineAttachedToReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_PURPOSE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUBMITTER_JUSTIFICATION_REQUIRED: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPT_REQUIRED: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_LOCATIONS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REIMBURSE_AMT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKFLOW_REF_TABLE_NAME: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KM_OWN_CAR: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIPTS_ATTACHED: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_VIOLATION_MESSAGE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLY_ACTION: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEHICLE_CLASS: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvCarRentalVehicleClassEnum,
      true,
      true
    >;
    MILEAGE_FROM_ADDRESS: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_USED: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAY_METHOD: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_BILLED: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_CARD_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOT_APPROVED_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_ACTIVITY_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INCLUDED: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCHANGE_CODE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_AMT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTED_TAX_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENTRY_POINT: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvExpEntryPoint,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_DUE_DATE_W: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TICKET_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_TYPE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHECK_OUT_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTER_COMPANY_LE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CLASS: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvAirlineServiceClassEnum,
      true,
      true
    >;
    ATTACHED_RECEIPT_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_CATEGORY: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAR_RENTAL_CHECK_OUT_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDITIONAL_INFORMATION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_PASSENGERS: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSE_ITEMIZATION_GROUP_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BUDGET_CHECK_PENDING: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRAVEL_AGENCY_NAME: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TEXT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_SALES_CURRENCY: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANT_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_LOCATIONS_LOCATION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_HCM_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_1_DATA_AREA: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_ISSUED_TO: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvBillIssuedTo,
      true,
      true
    >;
    CHECK_OUT_LOCATION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OWNER: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvCostOwner,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvExpLineType,
      true,
      true
    >;
    JUSTIFYING_WORKER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POLICY_VIOLATION_ERROR_MESSAGE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRE_AUTHORIZED: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERDIEM_TIMEZONE: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    INTERCOMPANY_TRANSFER_CURRENCY: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_ISSUE_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEDUKTION_LUNCH: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_ROOM_RENT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PER_DIEM_HOTEL_ALLOWANCE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_OVER_BUDGET_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_CATEGORY_COST_TYPE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_ACCOUNT_TYPE: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    AMOUNT_CURR: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERCOMPANY_SALES_PRICE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_STATUS_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAVEL_AGENCY_INVOICE_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE_FK_ZIP_CODE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEMIZED_LINE_EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_TAX_AMOUNT_MST: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRV_LOCATIONS_STATE_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_POLICY_TEXT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_ROW_NUM: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_LEVEL_POSTING: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUKTION_DINNER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MOBILE_STATEMENT: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_ACCOUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_ROOM_NIGHTS: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSIGNED_TO: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_SHARED_SUB_CATEGORY_NAME: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_IN_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_ADVANCE_CASH_ADVANCE_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_TYPE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHED_GUEST_DETAILS: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_TRANSFER_PRICE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SPLIT_LINE_TYPE: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvExpSplitLineType,
      true,
      true
    >;
    LEGAL_ENTITY_PARTY_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KM_PRICE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_RECEIPTS_RECVD: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_CURRENCY_RECONCILED_AMOUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUKTION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRV_EXP_TABLE_REC_ID_EXP_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_NAME: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_TYPE: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    IS_SPLIT: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOMESTIC_INDICATOR: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUKTION_BREAKFEST: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    APPROVAL_STATUS: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      TrvAppStatus,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_POLICY_STATUS: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      ProjExpPolicyStatus,
      true,
      true
    >;
    REASON: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PBS_STATEMENT: EnumField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_VIOLATION_COUNT: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    APPROVED_DATE: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MILEAGE_TO_ADDRESS: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_ERRORS: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_VIOLATIONS_LEVEL: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBMITTER_JUSTIFICATION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_CLASS: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETACH: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENTERTAINMENT_LOCATION: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_1_PARTY_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_NUMBER: OrderableEdmTypeField<
      ExpMobileExpenseLineAttachedToReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpMobileExpenseLineAttachedToReports<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpMobileExpenseLineAttachedToReports<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link businessPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PURPOSE: fieldBuilder.buildEdmTypeField(
          'BusinessPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSubmitterJustificationRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTER_JUSTIFICATION_REQUIRED: fieldBuilder.buildEdmTypeField(
          'IsSubmitterJustificationRequired',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiptRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REQUIRED: fieldBuilder.buildEnumField(
          'ReceiptRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link trvLocationsCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_LOCATIONS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'TrvLocations_CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reimburseAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REIMBURSE_AMT: fieldBuilder.buildEdmTypeField(
          'ReimburseAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workflowRefTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'WorkflowRefTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link kmOwnCar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KM_OWN_CAR: fieldBuilder.buildEdmTypeField(
          'KMOwnCar',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DATE: fieldBuilder.buildEdmTypeField(
          'ReturnDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receiptsAttached} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPTS_ATTACHED: fieldBuilder.buildEnumField(
          'ReceiptsAttached',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link policyViolationMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_MESSAGE: fieldBuilder.buildEdmTypeField(
          'PolicyViolationMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applyAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_ACTION: fieldBuilder.buildEnumField('ApplyAction', NoYes, true),
        /**
         * Static representation of the {@link vehicleClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_CLASS: fieldBuilder.buildEnumField(
          'VehicleClass',
          TrvCarRentalVehicleClassEnum,
          true
        ),
        /**
         * Static representation of the {@link mileageFromAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_FROM_ADDRESS: fieldBuilder.buildEdmTypeField(
          'MileageFromAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ticketUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_USED: fieldBuilder.buildEnumField('TicketUsed', NoYes, true),
        /**
         * Static representation of the {@link payMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_METHOD: fieldBuilder.buildEdmTypeField(
          'PayMethod',
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
         * Static representation of the {@link intercompanyBilled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_BILLED: fieldBuilder.buildEdmTypeField(
          'IntercompanyBilled',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link creditCardTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CreditCardTransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notApprovedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_APPROVED_DATE: fieldBuilder.buildEdmTypeField(
          'NotApprovedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INCLUDED: fieldBuilder.buildEnumField('TaxIncluded', NoYes, true),
        /**
         * Static representation of the {@link exchangeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_CODE: fieldBuilder.buildEdmTypeField(
          'ExchangeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctedTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CorrectedTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link entryPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_POINT: fieldBuilder.buildEnumField(
          'EntryPoint',
          TrvExpEntryPoint,
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
         * Static representation of the {@link vatDueDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DUE_DATE_W: fieldBuilder.buildEdmTypeField(
          'VatDueDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ticketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'TicketNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vehicleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_TYPE: fieldBuilder.buildEdmTypeField(
          'VehicleType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netTransactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetTransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link checkOutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_OUT_DATE: fieldBuilder.buildEdmTypeField(
          'CheckOutDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link interCompanyLe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_LE: fieldBuilder.buildEdmTypeField(
          'InterCompanyLE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CLASS: fieldBuilder.buildEnumField(
          'ServiceClass',
          TrvAirlineServiceClassEnum,
          true
        ),
        /**
         * Static representation of the {@link attachedReceiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'AttachedReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'InterCompanyCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carRentalCheckOutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAR_RENTAL_CHECK_OUT_DATE: fieldBuilder.buildEdmTypeField(
          'CarRentalCheckOutDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link additionalInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_INFORMATION: fieldBuilder.buildEdmTypeField(
          'AdditionalInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FROM: fieldBuilder.buildEdmTypeField(
          'DateFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfPassengers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PASSENGERS: fieldBuilder.buildEdmTypeField(
          'NumberOfPassengers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expenseItemizationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_ITEMIZATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ExpenseItemizationGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBudgetCheckPending} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BUDGET_CHECK_PENDING: fieldBuilder.buildEnumField(
          'IsBudgetCheckPending',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link travelAgencyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_AGENCY_NAME: fieldBuilder.buildEdmTypeField(
          'TravelAgencyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'TransactionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanySalesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_SALES_CURRENCY: fieldBuilder.buildEdmTypeField(
          'IntercompanySalesCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link merchantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_ID: fieldBuilder.buildEdmTypeField(
          'MerchantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trvLocationsLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_LOCATIONS_LOCATION: fieldBuilder.buildEdmTypeField(
          'TrvLocations_Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trvHcmWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_HCM_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrvHcmWorker_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntity1DataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_1_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'LegalEntity1_DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billIssuedTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_ISSUED_TO: fieldBuilder.buildEnumField(
          'BillIssuedTo',
          TrvBillIssuedTo,
          true
        ),
        /**
         * Static representation of the {@link checkOutLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_OUT_LOCATION: fieldBuilder.buildEdmTypeField(
          'CheckOutLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardTransactionCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_TRANSACTION_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditCardTransactionCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OWNER: fieldBuilder.buildEnumField(
          'CostOwner',
          TrvCostOwner,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          TrvExpLineType,
          true
        ),
        /**
         * Static representation of the {@link justifyingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JUSTIFYING_WORKER: fieldBuilder.buildEdmTypeField(
          'JustifyingWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link policyViolationErrorMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_ERROR_MESSAGE: fieldBuilder.buildEdmTypeField(
          'PolicyViolationErrorMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPreAuthorized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRE_AUTHORIZED: fieldBuilder.buildEnumField(
          'IsPreAuthorized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link perdiemTimezone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERDIEM_TIMEZONE: fieldBuilder.buildEnumField(
          'PerdiemTimezone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link intercompanyTransferCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_TRANSFER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'IntercompanyTransferCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ticketIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'TicketIssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deduktionLunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_LUNCH: fieldBuilder.buildEdmTypeField(
          'DeduktionLunch',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalRoomRent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROOM_RENT: fieldBuilder.buildEdmTypeField(
          'TotalRoomRent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link perDiemHotelAllowance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PER_DIEM_HOTEL_ALLOWANCE: fieldBuilder.buildEdmTypeField(
          'PerDiemHotelAllowance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingCurrencyOverBudgetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_OVER_BUDGET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyOverBudgetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subCategoryCostType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CATEGORY_COST_TYPE: fieldBuilder.buildEdmTypeField(
          'SubCategory_CostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'PostAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link amountCurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CURR: fieldBuilder.buildEdmTypeField(
          'AmountCurr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intercompanySalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'IntercompanySalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ProjStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link travelAgencyInvoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_AGENCY_INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TravelAgencyInvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCodeFkZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE_FK_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode_FK_ZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemizedLineExpTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMIZED_LINE_EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemizedLine_ExpTransNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctedTaxAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_TAX_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'CorrectedTaxAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link trvLocationsStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_LOCATIONS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'TrvLocations_StateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projPolicyText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_POLICY_TEXT: fieldBuilder.buildEdmTypeField(
          'ProjPolicyText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transRowNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ROW_NUM: fieldBuilder.buildEdmTypeField(
          'TransRowNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineLevelPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_LEVEL_POSTING: fieldBuilder.buildEnumField(
          'LineLevelPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deduktionDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_DINNER: fieldBuilder.buildEdmTypeField(
          'DeduktionDinner',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mobileStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_STATEMENT: fieldBuilder.buildEnumField(
          'Mobile_Statement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PostAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRoomNights} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROOM_NIGHTS: fieldBuilder.buildEdmTypeField(
          'TotalRoomNights',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link assignedTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_TO: fieldBuilder.buildEdmTypeField(
          'AssignedTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trvSharedSubCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_SHARED_SUB_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'TrvSharedSubCategory_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkInDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_IN_DATE: fieldBuilder.buildEdmTypeField(
          'CheckInDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cashAdvanceCashAdvanceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ADVANCE_CASH_ADVANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CashAdvance_CashAdvanceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE: fieldBuilder.buildEdmTypeField(
          'CostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachedGuestDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_GUEST_DETAILS: fieldBuilder.buildEdmTypeField(
          'AttachedGuestDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanyTransferPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_TRANSFER_PRICE: fieldBuilder.buildEdmTypeField(
          'IntercompanyTransferPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO: fieldBuilder.buildEdmTypeField(
          'DateTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link splitLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_LINE_TYPE: fieldBuilder.buildEnumField(
          'SplitLineType',
          TrvExpSplitLineType,
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
         * Static representation of the {@link kmPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KM_PRICE: fieldBuilder.buildEdmTypeField(
          'KMPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalReceiptsRecvd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_RECEIPTS_RECVD: fieldBuilder.buildEnumField(
          'OriginalReceiptsRecvd',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyReconciledAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_RECONCILED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyReconciledAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deduktion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION: fieldBuilder.buildEdmTypeField(
          'Deduktion',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link trvExpTableRecIdExpNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_EXP_TABLE_REC_ID_EXP_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrvExpTableRecID_ExpNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_NAME: fieldBuilder.buildEdmTypeField(
          'AddressCity_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TYPE: fieldBuilder.buildEnumField('ExpType', TrvExpType, true),
        /**
         * Static representation of the {@link isSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SPLIT: fieldBuilder.buildEnumField('IsSplit', NoYes, true),
        /**
         * Static representation of the {@link domesticIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOMESTIC_INDICATOR: fieldBuilder.buildEnumField(
          'DomesticIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deduktionBreakfest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_BREAKFEST: fieldBuilder.buildEdmTypeField(
          'DeduktionBreakfest',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          TrvAppStatus,
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link receiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link projPolicyStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_POLICY_STATUS: fieldBuilder.buildEnumField(
          'ProjPolicyStatus',
          ProjExpPolicyStatus,
          true
        ),
        /**
         * Static representation of the {@link reason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON: fieldBuilder.buildEdmTypeField('Reason', 'Edm.String', true),
        /**
         * Static representation of the {@link pbsStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PBS_STATEMENT: fieldBuilder.buildEnumField(
          'PBS_Statement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link policyViolationCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_COUNT: fieldBuilder.buildEdmTypeField(
          'PolicyViolationCount',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link approvedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_DATE: fieldBuilder.buildEdmTypeField(
          'ApprovedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mileageToAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_TO_ADDRESS: fieldBuilder.buildEdmTypeField(
          'MileageToAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingErrors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_ERRORS: fieldBuilder.buildEdmTypeField(
          'PostingErrors',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link policyViolationsLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATIONS_LEVEL: fieldBuilder.buildEdmTypeField(
          'PolicyViolationsLevel',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link submitterJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTER_JUSTIFICATION: fieldBuilder.buildEdmTypeField(
          'SubmitterJustification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ticketClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_CLASS: fieldBuilder.buildEdmTypeField(
          'TicketClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link detach} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETACH: fieldBuilder.buildEdmTypeField('Detach', 'Edm.Int32', false),
        /**
         * Static representation of the {@link entertainmentLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERTAINMENT_LOCATION: fieldBuilder.buildEdmTypeField(
          'EntertainmentLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntity1PartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_1_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'LegalEntity1_PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileExpenseLineAttachedToReports)
      };
    }

    return this._schema;
  }
}
