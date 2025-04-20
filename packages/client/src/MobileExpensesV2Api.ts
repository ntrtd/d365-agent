/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileExpensesV2 } from './MobileExpensesV2';
import { MobileExpensesV2RequestBuilder } from './MobileExpensesV2RequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { TrvCostOwner } from './TrvCostOwner';
import { TrvExpLineType } from './TrvExpLineType';
import { TrvAppStatus } from './TrvAppStatus';
import { TrvExpSplitLineType } from './TrvExpSplitLineType';
import { TrvExpType } from './TrvExpType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';
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
export class MobileExpensesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MobileExpensesV2<DeSerializersT>, DeSerializersT>
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
  ): MobileExpensesV2Api<DeSerializersT> {
    return new MobileExpensesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      MobileExpensesV2<DeSerializersT>,
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

  entityConstructor = MobileExpensesV2;

  requestBuilder(): MobileExpensesV2RequestBuilder<DeSerializersT> {
    return new MobileExpensesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MobileExpensesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MobileExpensesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MobileExpensesV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MobileExpensesV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MobileExpensesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_TRANSACTION_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASH_ADVANCE_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUEST_NAME: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_COST_PRICE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRE_AUTHORIZED: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE_DETAILS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_CLASS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUKTION_DINNER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COST_OWNER: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      TrvCostOwner,
      true,
      true
    >;
    RECEIPT_REQUIRED: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCATIONS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MERCHANT_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NUMBER_OF_LEGS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REGULAR_MILEAGE_CHARGES: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_STATUS_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUING_CARRIER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPENSE_LINE_TYPE: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      TrvExpLineType,
      true,
      true
    >;
    TICKET_USED: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_REPORT_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAVEL_AGENCY_NAME: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WEEKLY_RENTAL_RATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERCOMPANY_TRANSFER_CURRENCY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTED_CREDIT_CARD: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVAL_STATUS: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      TrvAppStatus,
      true,
      true
    >;
    POLICY_VIOLATIONS_LEVEL: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOCATIONS_LOCATION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_DATA_AREA_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEMIZED_LINE_TRANS_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_TAX_AMOUNT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPTS_ATTACHED: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_APPROVED: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_REJECTED: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION_OF_ENTERTAINMENT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_RECEIPTS_RECEIVED: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TICKET_ISSUE_DATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MILEAGE_FROM_ADDRESS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_AMOUNT_IN_COMPANY_CURRENCY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_MILES: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PASSENGERS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOCATIONS_STATE_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUKTION_LUNCH: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_ROOM_NIGHTS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHECK_OUT_DATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDITIONAL_INFORMATION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_URL: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_STATEMENT: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_LE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KM_OWN_CAR: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERCOMPANY_CURRENCY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_TICKET_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SPLIT_TO_PERSONAL: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOLIO_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTHLY_RENTAL_RATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRAVEL_AGENCY_CODE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NO_SHOW_INDICATOR: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPLIT_LINE_TYPE: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      TrvExpSplitLineType,
      true,
      true
    >;
    MEAL_REDUCTION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPARTURE_DATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_TRANSACTION_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JUSTIFYING_WORKER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTERCOMPANY_BILLED: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    TRANS_ROW_NUM: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSE_TYPE: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    POST_ACCOUNT_IDENTIFICATION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_OFFSET_ACCOUNT_TYPE: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    VEHICLE_CLASS: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      TrvCarRentalVehicleClassEnum,
      true,
      true
    >;
    INTERCOMPANY_SALES_PRICE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PASSENGER_NAME: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CURR: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KM_PRICE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_ERRORS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_NAME: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILEAGE_TO_ADDRESS: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_CODE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_TYPE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_TICKET_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ACTIVITY_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INCLUDED: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_OUT_LOCATION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAILY_RENTAL_RATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPENSE_LINE_LEVEL_POSTING: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_CATEGORY_COST_TYPE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUEST_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SUBMITTER_JUSTIFICATION_REQUIRED: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEDUKTION_BREAKFAST: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RENTER_NAME: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_LOCAL_CURRENCY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHED_DOCU_REF_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POLICY_VIOLATION_COUNT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSACTION_TEXT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_TYPE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHARED_SUB_CATEGORY_NAME: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOMESTIC_INDICATOR: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_ACTION: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRAVEL_AGENCY_INVOICE_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILED: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_LOCATION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_METHOD: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_IN_DATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REIMBURSE_AMT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: EnumField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      ProjExpPolicyStatus,
      true,
      true
    >;
    INTER_COMPANY_CATEGORY: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_ROOM_RENT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMPLOYEE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAYS_RENTED: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CAR_RENTAL_CHECK_OUT_DATE: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_CARD_LOCAL_AMOUNT: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBMITTER_JUSTIFICATION: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_NUMBER: OrderableEdmTypeField<
      MobileExpensesV2<DeSerializers>,
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
      MobileExpensesV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MobileExpensesV2<DeSerializers>>;
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
         * Static representation of the {@link expenseTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpenseTransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cashAdvanceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ADVANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CashAdvanceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guestName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUEST_NAME: fieldBuilder.buildEdmTypeField(
          'GuestName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanyCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'IntercompanyCostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
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
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link addressZipCodeDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE_DETAILS: fieldBuilder.buildEdmTypeField(
          'AddressZipCodeDetails',
          'Edm.String',
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
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
         * Static representation of the {@link deduktionDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_DINNER: fieldBuilder.buildEdmTypeField(
          'DeduktionDinner',
          'Edm.Int32',
          false
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
         * Static representation of the {@link receiptRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REQUIRED: fieldBuilder.buildEnumField(
          'ReceiptRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link locationsCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATIONS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'LocationsCountryRegionId',
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
         * Static representation of the {@link dateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO: fieldBuilder.buildEdmTypeField(
          'DateTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link numberOfLegs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_LEGS: fieldBuilder.buildEdmTypeField(
          'NumberOfLegs',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link regularMileageCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULAR_MILEAGE_CHARGES: fieldBuilder.buildEdmTypeField(
          'RegularMileageCharges',
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
         * Static representation of the {@link issuingCarrier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_CARRIER: fieldBuilder.buildEdmTypeField(
          'IssuingCarrier',
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
         * Static representation of the {@link expenseLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_LINE_TYPE: fieldBuilder.buildEnumField(
          'ExpenseLineType',
          TrvExpLineType,
          true
        ),
        /**
         * Static representation of the {@link ticketUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_USED: fieldBuilder.buildEnumField('TicketUsed', NoYes, true),
        /**
         * Static representation of the {@link expenseReportNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REPORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpenseReportNumber',
          'Edm.String',
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link weeklyRentalRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEKLY_RENTAL_RATE: fieldBuilder.buildEdmTypeField(
          'WeeklyRentalRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link importedCreditCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_CREDIT_CARD: fieldBuilder.buildEnumField(
          'ImportedCreditCard',
          NoYes,
          true
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
         * Static representation of the {@link policyViolationsLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATIONS_LEVEL: fieldBuilder.buildEdmTypeField(
          'PolicyViolationsLevel',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link locationsLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATIONS_LOCATION: fieldBuilder.buildEdmTypeField(
          'LocationsLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON: fieldBuilder.buildEdmTypeField('Reason', 'Edm.String', true),
        /**
         * Static representation of the {@link legalEntityDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemizedLineTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMIZED_LINE_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemizedLineTransNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link receiptsAttached} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPTS_ATTACHED: fieldBuilder.buildEnumField(
          'ReceiptsAttached',
          NoYes,
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
         * Static representation of the {@link returnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DATE: fieldBuilder.buildEdmTypeField(
          'ReturnDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_APPROVED: fieldBuilder.buildEdmTypeField(
          'DateApproved',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateRejected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_REJECTED: fieldBuilder.buildEdmTypeField(
          'DateRejected',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link locationOfEntertainment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_OF_ENTERTAINMENT: fieldBuilder.buildEdmTypeField(
          'LocationOfEntertainment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalReceiptsReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_RECEIPTS_RECEIVED: fieldBuilder.buildEnumField(
          'OriginalReceiptsReceived',
          NoYes,
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
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMST',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link mileageFromAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_FROM_ADDRESS: fieldBuilder.buildEdmTypeField(
          'MileageFromAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxAmountInCompanyCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_AMOUNT_IN_COMPANY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalesTaxAmountInCompanyCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalMiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MILES: fieldBuilder.buildEdmTypeField(
          'TotalMiles',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmt',
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
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link locationsStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATIONS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LocationsStateId',
          'Edm.String',
          true
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
         * Static representation of the {@link totalRoomNights} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROOM_NIGHTS: fieldBuilder.buildEdmTypeField(
          'TotalRoomNights',
          'Edm.Int32',
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
         * Static representation of the {@link additionalInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_INFORMATION: fieldBuilder.buildEdmTypeField(
          'AdditionalInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_URL: fieldBuilder.buildEdmTypeField(
          'ReceiptUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mobileStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_STATEMENT: fieldBuilder.buildEnumField(
          'MobileStatement',
          NoYes,
          true
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
         * Static representation of the {@link kmOwnCar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KM_OWN_CAR: fieldBuilder.buildEdmTypeField(
          'KMOwnCar',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intercompanyCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'IntercompanyCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalTicketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'OriginalTicketNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSplitToPersonal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SPLIT_TO_PERSONAL: fieldBuilder.buildEnumField(
          'IsSplitToPersonal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link folioNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER: fieldBuilder.buildEdmTypeField(
          'FolioNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link monthlyRentalRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHLY_RENTAL_RATE: fieldBuilder.buildEdmTypeField(
          'MonthlyRentalRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link travelAgencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_AGENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TravelAgencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link noShowIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_SHOW_INDICATOR: fieldBuilder.buildEnumField(
          'NoShowIndicator',
          NoYes,
          true
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
         * Static representation of the {@link mealReduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_REDUCTION: fieldBuilder.buildEdmTypeField(
          'MealReduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link departureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTURE_DATE: fieldBuilder.buildEdmTypeField(
          'DepartureDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTransactionID',
          'Edm.String',
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
         * Static representation of the {@link intercompanyBilled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_BILLED: fieldBuilder.buildEdmTypeField(
          'IntercompanyBilled',
          'Edm.Boolean',
          false
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
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEnumField(
          'ExpenseType',
          TrvExpType,
          true
        ),
        /**
         * Static representation of the {@link postAccountIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_ACCOUNT_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'PostAccountIdentification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postOffsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'PostOffsetAccountType',
          LedgerJournalAcType,
          true
        ),
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
         * Static representation of the {@link intercompanySalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'IntercompanySalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link passengerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSENGER_NAME: fieldBuilder.buildEdmTypeField(
          'PassengerName',
          'Edm.String',
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
         * Static representation of the {@link kmPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KM_PRICE: fieldBuilder.buildEdmTypeField(
          'KMPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link reservationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReservationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_NAME: fieldBuilder.buildEdmTypeField(
          'AddressCityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link exchangeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_CODE: fieldBuilder.buildEdmTypeField(
          'ExchangeCode',
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
         * Static representation of the {@link exchangeTicketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExchangeTicketNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
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
         * Static representation of the {@link checkOutLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_OUT_LOCATION: fieldBuilder.buildEdmTypeField(
          'CheckOutLocation',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link dailyRentalRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAILY_RENTAL_RATE: fieldBuilder.buildEdmTypeField(
          'DailyRentalRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expenseLineLevelPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_LINE_LEVEL_POSTING: fieldBuilder.buildEnumField(
          'ExpenseLineLevelPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subCategoryCostType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CATEGORY_COST_TYPE: fieldBuilder.buildEdmTypeField(
          'SubCategoryCostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guestNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUEST_NUMBER: fieldBuilder.buildEdmTypeField(
          'GuestNumber',
          'Edm.Int32',
          false
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
         * Static representation of the {@link deduktionBreakfast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_BREAKFAST: fieldBuilder.buildEdmTypeField(
          'DeduktionBreakfast',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link renterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENTER_NAME: fieldBuilder.buildEdmTypeField(
          'RenterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardLocalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_LOCAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CreditCardLocalCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachedDocuRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_DOCU_REF_ID: fieldBuilder.buildEdmTypeField(
          'AttachedDocuRefId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link policyViolationCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_COUNT: fieldBuilder.buildEdmTypeField(
          'PolicyViolationCount',
          'Edm.Int32',
          false
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
         * Static representation of the {@link costType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE: fieldBuilder.buildEdmTypeField(
          'CostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sharedSubCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_SUB_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'SharedSubCategoryName',
          'Edm.String',
          true
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
         * Static representation of the {@link domesticIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOMESTIC_INDICATOR: fieldBuilder.buildEnumField(
          'DomesticIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applyAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_ACTION: fieldBuilder.buildEnumField('ApplyAction', NoYes, true),
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
         * Static representation of the {@link reconciled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILED: fieldBuilder.buildEdmTypeField(
          'Reconciled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LOCATION: fieldBuilder.buildEdmTypeField(
          'ReturnLocation',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link checkInDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_IN_DATE: fieldBuilder.buildEdmTypeField(
          'CheckInDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          ProjExpPolicyStatus,
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
         * Static representation of the {@link totalRoomRent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROOM_RENT: fieldBuilder.buildEdmTypeField(
          'TotalRoomRent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link employeePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'EmployeePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link daysRented} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_RENTED: fieldBuilder.buildEdmTypeField(
          'DaysRented',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link creditCardLocalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_LOCAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditCardLocalAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link receiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link ticketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'TicketNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MobileExpensesV2)
      };
    }

    return this._schema;
  }
}
