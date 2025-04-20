/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustTableBiEntities } from './CustTableBiEntities';
import { CustTableBiEntitiesRequestBuilder } from './CustTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { EcPsalesOrdersViewType } from './EcPsalesOrdersViewType';
import { CreditCardAddressVerification } from './CreditCardAddressVerification';
import { PaymentStub } from './PaymentStub';
import { CustWhtContributionTypeBr } from './CustWhtContributionTypeBr';
import { InvoiceTypeW } from './InvoiceTypeW';
import { CreditCardAddressVerificationLevel } from './CreditCardAddressVerificationLevel';
import { CustTableChangeProposalWorkflowState } from './CustTableChangeProposalWorkflowState';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { FederalNonFederalIndicatorCode } from './FederalNonFederalIndicatorCode';
import { CustVendorBlocked } from './CustVendorBlocked';
import { CompanyTypeMx } from './CompanyTypeMx';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { CreditCardCvc } from './CreditCardCvc';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { PlFiscalDocType } from './PlFiscalDocType';
import { UseCashDisc } from './UseCashDisc';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { SalesInvoicePostingTypeRu } from './SalesInvoicePostingTypeRu';
import { CustAccountStatement } from './CustAccountStatement';
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
export class CustTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustTableBiEntitiesApi<DeSerializersT> {
    return new CustTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustTableBiEntities;

  requestBuilder(): CustTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustTableBiEntities<DeSerializersT>,
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
    typeof CustTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNITED_VAT_INVOICE_LT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IE_NUM_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_DAY_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_PERIOD: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_FINAL_USER_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_DYNAMIC_QR_CODE_IN: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMISSION_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EINVOICE_EAN_NUM: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_CONTRIBUTOR_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURP_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_ACCOUNT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEB_SALES_ORDER_DISPLAY: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      EcPsalesOrdersViewType,
      true,
      true
    >;
    PARTY_STATE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_CODE_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CFDI_TEMPORARY_EXPORT_MX: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IRS_1099_C_INDICATOR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MEMO: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CreditCardAddressVerification,
      true,
      true
    >;
    PACKAGE_DEPOSIT_EXCEMPT_PL: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DLV_REASON: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAT_PAYM_METHOD_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    TAX_LICENSE_NUM: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_EXCLUDE_COLLECTION_FEE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPRESS_BILL_OF_LADING: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEDERAL_COMMENTS: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_WHT_CONTRIBUTION_TYPE_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustWhtContributionTypeBr,
      true,
      true
    >;
    INVOICE_TYPE_W: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceTypeW,
      true,
      true
    >;
    ISSUER_COUNTRY_HU: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSSCEI_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAT_REGISTRATION_NAME_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ITEM_GROUP_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION_LEVEL: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CreditCardAddressVerificationLevel,
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_STATE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustTableChangeProposalWorkflowState,
      true,
      true
    >;
    DEFAULT_DIRECT_DEBIT_MANDATE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUFRAMA_PISCOFINS_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    PARTY: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FOREIGNER_ID_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRESENCE_TYPE_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    USE_ORIGINAL_DOCUMENT_AS_FACTURE_RU: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RESIDENT_LV: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_WRITE_OFF_REF_REC_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AFFILIATED_RU: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY_CREDIT_LIMIT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_POOL_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORITY_OFFICE_IT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_FLOOR_LIMIT_USE_IN_CHANNEL: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOREIGN_RESIDENT_RU: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PDS_FREIGHT_ACCRUED: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_AUTO_CREATE_ORDERS: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTI_LINE_DISC: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFDI_SKIP_IEPS_TAXES_MX: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIRO_TYPE_FREE_TEXT_INVOICE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_PLACE_IT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_SCHED: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_ID_TYPE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_INVENT_STATUS_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_REFERENCE_EE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE_ON_DLV_ADDRESS_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FED_NON_FED_INDICATOR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      FederalNonFederalIndicatorCode,
      true,
      true
    >;
    ONE_TIME_CUSTOMER: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_ADDRESS_VERIFICATION_VOID: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIRO_TYPE_COLLECTIONLETTER: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    MAIN_CONTACT_WORKER: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBSEGMENT_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ID_SIRET: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIMPLIFY_TAX_INTGR_EXPORT_DOC_VALIDATION_CN: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIRO_TYPE_ACCOUNT_STATEMENT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    CASH_DISC_BASE_DAYS: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FINE_CODE_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_CALCULATE_IN: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGENCY_LOCATION_CODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM_REC_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_DIRECT_DELIVERY: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    SUFRAMA_NUMBER_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LV_PAYM_TRANS_CODES: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_EXTERNALLY_MAINTAINED: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOREIGN_TAX_REGISTRATION_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_TAX: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_MAX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SIMPLE_NATIONAL_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUFRAMA_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ALLOW_INDIRECT_CREATION: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPORT_SALES_PL: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PASSPORT_NO_HU: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TRADING_PARTNER_CODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ISSUE_OWN_ENTRY_CERTIFICATE_W: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATISTICS_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_DMP_INCLUDE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CCM_NUM_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TYPE_MX: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CompanyTypeMx,
      true,
      true
    >;
    VAT_NUM_TABLE_TYPE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxExemptNumberSourceType,
      true,
      true
    >;
    CUST_CLASSIFICATION_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_COUNTY_CODE_IT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_CERTIFICATE_REQUIRED_W: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CARRIER_ACCOUNT_CODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTORING_ACCOUNT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CUST_PAYM_ID_TABLE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MANDATORY_VAT_DATE_PL: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_PURCH_REQUEST: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_EXCLUDE_INTEREST_CHARGES: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CNPJCPF_NUM_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_CALCULATE_TH: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INT_BANK_LV: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_CVC: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CreditCardCvc,
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIMPLIFY_TAX_INTGR_EXPORT_TAX_REG_VALIDATION_CN: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CALENDAR_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DISTRICT_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUR_ACCOUNT_NUM: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_MERGED_PARENT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNAE_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceOrderAccount,
      true,
      true
    >;
    PACK_MATERIAL_FEE_LICENSE_NUM: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_MERGED_ROOT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOC_TYPE_PL: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      PlFiscalDocType,
      true,
      true
    >;
    COMPANY_NAF_CODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAT_PURPOSE_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_INVOICE_ATTACHMENT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOREIGN_TRADE_MX: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPP_ITEM_GROUP_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_PROJ_INVOICE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    ORDER_ENTRY_DEADLINE_GROUP_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME_1: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CFDI_ENABLED_MX: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NIT_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PUBLIC_SECTOR_IT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PDS_REBATE_TMA_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CUST_REBATE_GROUP_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_INSCRIPTION_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_CODE_BR: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CASH_DISC: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      UseCashDisc,
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USUAL_EXPORTER_IT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    E_INVOICE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESIDENCE_FOREIGN_COUNTRY_REGION_ID_IT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_ZONE: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORG_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_INVOICE_REGISTER_IT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTION_LETTER_CODE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustCollectionLetterCode,
      true,
      true
    >;
    COMPANY_CHAIN_ID: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_BLIND_SHIPMENT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_NOTES_GROUP_IT: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_POSTING_TYPE_RU: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      SalesInvoicePostingTypeRu,
      true,
      true
    >;
    PRICE_GROUP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONS_DAY_JP: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GENERATE_INCOMING_FISCAL_DOCUMENT_BR: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTY_COUNTRY: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE_INTEREST_NOTE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    TAX_WITHHOLD_GROUP_TH: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GST_RELIEF_GROUP_HEADING_MY: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_REGIME_CODE_MX: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STATEMENT: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustAccountStatement,
      true,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_FUEL_SURCHARGE: EnumField<
      CustTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link unitedVatInvoiceLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITED_VAT_INVOICE_LT: fieldBuilder.buildEnumField(
          'UnitedVATInvoice_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ieNumBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IE_NUM_BR: fieldBuilder.buildEdmTypeField(
          'IENum_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymDayId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_DAY_ID: fieldBuilder.buildEdmTypeField(
          'PaymDayId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'numberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_PERIOD: fieldBuilder.buildEdmTypeField(
          'ClearingPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custFinalUserBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_FINAL_USER_BR: fieldBuilder.buildEnumField(
          'CustFinalUser_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printDynamicQrCodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DYNAMIC_QR_CODE_IN: fieldBuilder.buildEnumField(
          'PrintDynamicQRCode_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link commissionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_GROUP: fieldBuilder.buildEdmTypeField(
          'CommissionGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link einvoiceEanNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EINVOICE_EAN_NUM: fieldBuilder.buildEdmTypeField(
          'EinvoiceEANNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link icmsContributorBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_CONTRIBUTOR_BR: fieldBuilder.buildEnumField(
          'ICMSContributor_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link curpMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURP_MX: fieldBuilder.buildEdmTypeField('Curp_MX', 'Edm.String', true),
        /**
         * Static representation of the {@link shipCarrierAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShipCarrierAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link webSalesOrderDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_SALES_ORDER_DISPLAY: fieldBuilder.buildEnumField(
          'WebSalesOrderDisplay',
          EcPsalesOrdersViewType,
          true
        ),
        /**
         * Static representation of the {@link partyState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_STATE: fieldBuilder.buildEdmTypeField(
          'PartyState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_GROUP: fieldBuilder.buildEdmTypeField(
          'CustGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cfdiTemporaryExportMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_TEMPORARY_EXPORT_MX: fieldBuilder.buildEnumField(
          'CFDITemporaryExport_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link irs1099CIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IRS_1099_C_INDICATOR: fieldBuilder.buildEnumField(
          'IRS1099CIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link memo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMO: fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true),
        /**
         * Static representation of the {@link creditCardAddressVerification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION: fieldBuilder.buildEnumField(
          'CreditCardAddressVerification',
          CreditCardAddressVerification,
          true
        ),
        /**
         * Static representation of the {@link packageDepositExcemptPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_DEPOSIT_EXCEMPT_PL: fieldBuilder.buildEnumField(
          'PackageDepositExcempt_PL',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dlvReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_REASON: fieldBuilder.buildEdmTypeField(
          'DlvReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', true),
        /**
         * Static representation of the {@link satPaymMethodMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PAYM_METHOD_MX: fieldBuilder.buildEdmTypeField(
          'SATPaymMethod_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE: fieldBuilder.buildEnumField('GiroType', PaymentStub, true),
        /**
         * Static representation of the {@link taxLicenseNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LICENSE_NUM: fieldBuilder.buildEdmTypeField(
          'TaxLicenseNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custExcludeCollectionFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_EXCLUDE_COLLECTION_FEE: fieldBuilder.buildEnumField(
          'CustExcludeCollectionFee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expressBillOfLading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPRESS_BILL_OF_LADING: fieldBuilder.buildEnumField(
          'ExpressBillOfLading',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link federalComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_COMMENTS: fieldBuilder.buildEdmTypeField(
          'FederalComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custWhtContributionTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_WHT_CONTRIBUTION_TYPE_BR: fieldBuilder.buildEnumField(
          'CustWhtContributionType_BR',
          CustWhtContributionTypeBr,
          true
        ),
        /**
         * Static representation of the {@link invoiceTypeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE_W: fieldBuilder.buildEnumField(
          'InvoiceType_W',
          InvoiceTypeW,
          true
        ),
        /**
         * Static representation of the {@link issuerCountryHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER_COUNTRY_HU: fieldBuilder.buildEdmTypeField(
          'IssuerCountry_HU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inssceiBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSSCEI_BR: fieldBuilder.buildEdmTypeField(
          'INSSCEI_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link satRegistrationNameMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_REGISTRATION_NAME_MX: fieldBuilder.buildEdmTypeField(
          'SATRegistrationName_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardAddressVerificationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION_LEVEL: fieldBuilder.buildEnumField(
          'CreditCardAddressVerificationLevel',
          CreditCardAddressVerificationLevel,
          true
        ),
        /**
         * Static representation of the {@link lineOfBusinessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS_ID: fieldBuilder.buildEdmTypeField(
          'LineOfBusinessId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflowState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATE: fieldBuilder.buildEnumField(
          'WorkflowState',
          CustTableChangeProposalWorkflowState,
          true
        ),
        /**
         * Static representation of the {@link defaultDirectDebitMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIRECT_DEBIT_MANDATE: fieldBuilder.buildEdmTypeField(
          'DefaultDirectDebitMandate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link suframaPiscofinsBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFRAMA_PISCOFINS_BR: fieldBuilder.buildEnumField(
          'SuframaPISCOFINS_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventProfileTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_TYPE_RU: fieldBuilder.buildEnumField(
          'InventProfileType_RU',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link party} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY: fieldBuilder.buildEdmTypeField('Party', 'Edm.Int64', false),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link foreignerIdBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGNER_ID_BR: fieldBuilder.buildEdmTypeField(
          'ForeignerId_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link presenceTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENCE_TYPE_BR: fieldBuilder.buildEnumField(
          'PresenceType_BR',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link useOriginalDocumentAsFactureRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ORIGINAL_DOCUMENT_AS_FACTURE_RU: fieldBuilder.buildEnumField(
          'UseOriginalDocumentAsFacture_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isResidentLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESIDENT_LV: fieldBuilder.buildEnumField(
          'IsResident_LV',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custWriteOffRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_WRITE_OFF_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'CustWriteOffRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link affiliatedRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFILIATED_RU: fieldBuilder.buildEnumField(
          'Affiliated_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dlvTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM: fieldBuilder.buildEdmTypeField('DlvTerm', 'Edm.String', true),
        /**
         * Static representation of the {@link paymSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SPEC: fieldBuilder.buildEdmTypeField(
          'PaymSpec',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mandatoryCreditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_CREDIT_LIMIT: fieldBuilder.buildEnumField(
          'MandatoryCreditLimit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION: fieldBuilder.buildEdmTypeField(
          'InventLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POOL_ID: fieldBuilder.buildEdmTypeField(
          'SalesPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorityOfficeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORITY_OFFICE_IT: fieldBuilder.buildEdmTypeField(
          'AuthorityOffice_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockFloorLimitUseInChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_FLOOR_LIMIT_USE_IN_CHANNEL: fieldBuilder.buildEnumField(
          'BlockFloorLimitUseInChannel',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link foreignResidentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_RESIDENT_RU: fieldBuilder.buildEnumField(
          'ForeignResident_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pdsFreightAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_FREIGHT_ACCRUED: fieldBuilder.buildEnumField(
          'PdsFreightAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interCompanyAutoCreateOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_AUTO_CREATE_ORDERS: fieldBuilder.buildEnumField(
          'InterCompanyAutoCreateOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link multiLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'MultiLineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfdiSkipIepsTaxesMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_SKIP_IEPS_TAXES_MX: fieldBuilder.buildEnumField(
          'CFDISkipIEPSTaxes_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giroTypeFreeTextInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_FREE_TEXT_INVOICE: fieldBuilder.buildEnumField(
          'GiroTypeFreeTextInvoice',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthPlaceIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_PLACE_IT: fieldBuilder.buildEdmTypeField(
          'BirthPlace_IT',
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
         * Static representation of the {@link paymSched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SCHED: fieldBuilder.buildEdmTypeField(
          'PaymSched',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymIdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymIdType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultInventStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentReferenceEe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REFERENCE_EE: fieldBuilder.buildEdmTypeField(
          'PaymentReference_EE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCodeOnDlvAddressBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_ON_DLV_ADDRESS_BR: fieldBuilder.buildEnumField(
          'ServiceCodeOnDlvAddress_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fedNonFedIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FED_NON_FED_INDICATOR: fieldBuilder.buildEnumField(
          'FedNonFedIndicator',
          FederalNonFederalIndicatorCode,
          true
        ),
        /**
         * Static representation of the {@link oneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'OneTimeCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditCardAddressVerificationVoid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ADDRESS_VERIFICATION_VOID: fieldBuilder.buildEnumField(
          'CreditCardAddressVerificationVoid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giroTypeCollectionletter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_COLLECTIONLETTER: fieldBuilder.buildEnumField(
          'GiroTypeCollectionletter',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link mainContactWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_CONTACT_WORKER: fieldBuilder.buildEdmTypeField(
          'MainContactWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subsegmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEGMENT_ID: fieldBuilder.buildEdmTypeField(
          'SubsegmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyIdSiret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID_SIRET: fieldBuilder.buildEdmTypeField(
          'CompanyIdSiret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link simplifyTaxIntgrExportDocValidationCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIMPLIFY_TAX_INTGR_EXPORT_DOC_VALIDATION_CN:
          fieldBuilder.buildEnumField(
            'SimplifyTaxIntgrExportDocValidation_CN',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link giroTypeAccountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_ACCOUNT_STATEMENT: fieldBuilder.buildEnumField(
          'GiroTypeAccountStatement',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link cashDiscBaseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_DAYS: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fineCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'FineCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdCalculateIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALCULATE_IN: fieldBuilder.buildEnumField(
          'TaxWithholdCalculate_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agencyLocationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENCY_LOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'AgencyLocationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatNumRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM_REC_ID: fieldBuilder.buildEdmTypeField(
          'VATNumRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link interCompanyDirectDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_DIRECT_DELIVERY: fieldBuilder.buildEnumField(
          'InterCompanyDirectDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED: fieldBuilder.buildEnumField(
          'Blocked',
          CustVendorBlocked,
          true
        ),
        /**
         * Static representation of the {@link suframaNumberBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFRAMA_NUMBER_BR: fieldBuilder.buildEdmTypeField(
          'SuframaNumber_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lvPaymTransCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LV_PAYM_TRANS_CODES: fieldBuilder.buildEdmTypeField(
          'LvPaymTransCodes',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'IsExternallyMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link foreignTaxRegistrationMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_TAX_REGISTRATION_MX: fieldBuilder.buildEdmTypeField(
          'ForeignTaxRegistration_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfcMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_MX: fieldBuilder.buildEdmTypeField('Rfc_MX', 'Edm.String', true),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link creditMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_MAX: fieldBuilder.buildEdmTypeField(
          'CreditMax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link simpleNationalBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIMPLE_NATIONAL_BR: fieldBuilder.buildEnumField(
          'SimpleNational_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link suframaBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFRAMA_BR: fieldBuilder.buildEnumField('Suframa_BR', NoYes, true),
        /**
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyAllowIndirectCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ALLOW_INDIRECT_CREATION: fieldBuilder.buildEnumField(
          'InterCompanyAllowIndirectCreation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exportSalesPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_SALES_PL: fieldBuilder.buildEnumField(
          'ExportSales_PL',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link passportNoHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSPORT_NO_HU: fieldBuilder.buildEdmTypeField(
          'PassportNo_HU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTradingPartnerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TRADING_PARTNER_CODE: fieldBuilder.buildEdmTypeField(
          'CustTradingPartnerCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link issueOwnEntryCertificateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_OWN_ENTRY_CERTIFICATE_W: fieldBuilder.buildEnumField(
          'IssueOwnEntryCertificate_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link statisticsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_GROUP: fieldBuilder.buildEdmTypeField(
          'StatisticsGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastDmpInclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_DMP_INCLUDE: fieldBuilder.buildEnumField(
          'ForecastDMPInclude',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ccmNumBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CCM_NUM_BR: fieldBuilder.buildEdmTypeField(
          'CCMNum_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TYPE_MX: fieldBuilder.buildEnumField(
          'CompanyType_MX',
          CompanyTypeMx,
          true
        ),
        /**
         * Static representation of the {@link vatNumTableType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM_TABLE_TYPE: fieldBuilder.buildEnumField(
          'VATNumTableType',
          TaxExemptNumberSourceType,
          true
        ),
        /**
         * Static representation of the {@link custClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'CustClassificationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthCountyCodeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_COUNTY_CODE_IT: fieldBuilder.buildEdmTypeField(
          'BirthCountyCode_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entryCertificateRequiredW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_CERTIFICATE_REQUIRED_W: fieldBuilder.buildEnumField(
          'EntryCertificateRequired_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipCarrierAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'ShipCarrierAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link factoringAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTORING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FactoringAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCustPaymIdTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CUST_PAYM_ID_TABLE: fieldBuilder.buildEdmTypeField(
          'BankCustPaymIdTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mandatoryVatDatePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_VAT_DATE_PL: fieldBuilder.buildEnumField(
          'MandatoryVatDate_PL',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link usePurchRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PURCH_REQUEST: fieldBuilder.buildEnumField(
          'usePurchRequest',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC: fieldBuilder.buildEdmTypeField(
          'CashDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custExcludeInterestCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_EXCLUDE_INTEREST_CHARGES: fieldBuilder.buildEnumField(
          'CustExcludeInterestCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cnpjcpfNumBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNPJCPF_NUM_BR: fieldBuilder.buildEdmTypeField(
          'CNPJCPFNum_BR',
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
         * Static representation of the {@link taxWithholdCalculateTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALCULATE_TH: fieldBuilder.buildEnumField(
          'TaxWithholdCalculate_TH',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intBankLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INT_BANK_LV: fieldBuilder.buildEdmTypeField(
          'IntBank_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCentralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardCvc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_CVC: fieldBuilder.buildEnumField(
          'CreditCardCVC',
          CreditCardCvc,
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankCentralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link simplifyTaxIntgrExportTaxRegValidationCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIMPLIFY_TAX_INTGR_EXPORT_TAX_REG_VALIDATION_CN:
          fieldBuilder.buildEnumField(
            'SimplifyTaxIntgrExportTaxRegValidation_CN',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link markupGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_GROUP: fieldBuilder.buildEdmTypeField(
          'MarkupGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'SalesCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDistrictId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DISTRICT_ID: fieldBuilder.buildEdmTypeField(
          'SalesDistrictId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ourAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUR_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'OurAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link mcrMergedParent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_MERGED_PARENT: fieldBuilder.buildEdmTypeField(
          'MCRMergedParent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cnaeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNAE_BR: fieldBuilder.buildEdmTypeField('CNAE_BR', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS: fieldBuilder.buildEnumField(
          'InvoiceAddress',
          InvoiceOrderAccount,
          true
        ),
        /**
         * Static representation of the {@link packMaterialFeeLicenseNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_MATERIAL_FEE_LICENSE_NUM: fieldBuilder.buildEdmTypeField(
          'PackMaterialFeeLicenseNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrMergedRoot} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_MERGED_ROOT: fieldBuilder.buildEdmTypeField(
          'MCRMergedRoot',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocTypePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOC_TYPE_PL: fieldBuilder.buildEnumField(
          'FiscalDocType_PL',
          PlFiscalDocType,
          true
        ),
        /**
         * Static representation of the {@link companyNafCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAF_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyNAFCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link satPurposeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PURPOSE_MX: fieldBuilder.buildEdmTypeField(
          'SATPurpose_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eInvoiceAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_ATTACHMENT: fieldBuilder.buildEnumField(
          'EInvoiceAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link foreignTradeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_TRADE_MX: fieldBuilder.buildEnumField(
          'ForeignTrade_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suppItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPP_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SuppItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditRating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_RATING: fieldBuilder.buildEdmTypeField(
          'CreditRating',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeProjInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_PROJ_INVOICE: fieldBuilder.buildEnumField(
          'GiroTypeProjInvoice',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link orderEntryDeadlineGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ENTRY_DEADLINE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'OrderEntryDeadlineGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME_1: fieldBuilder.buildEdmTypeField(
          'CreatedDateTime1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cfdiEnabledMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_ENABLED_MX: fieldBuilder.buildEnumField(
          'CFDIEnabled_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nitBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NIT_BR: fieldBuilder.buildEdmTypeField('NIT_BR', 'Edm.String', true),
        /**
         * Static representation of the {@link isPublicSectorIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUBLIC_SECTOR_IT: fieldBuilder.buildEnumField(
          'IsPublicSector_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pdsRebateTmaGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_REBATE_TMA_GROUP: fieldBuilder.buildEdmTypeField(
          'PdsRebateTMAGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCustRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CUST_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PdsCustRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateInscriptionMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_INSCRIPTION_MX: fieldBuilder.buildEdmTypeField(
          'StateInscription_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE_BR: fieldBuilder.buildEdmTypeField(
          'InterestCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useCashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CASH_DISC: fieldBuilder.buildEnumField(
          'UseCashDisc',
          UseCashDisc,
          true
        ),
        /**
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usualExporterIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USUAL_EXPORTER_IT: fieldBuilder.buildEnumField(
          'UsualExporter_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE: fieldBuilder.buildEnumField('EInvoice', NoYes, true),
        /**
         * Static representation of the {@link residenceForeignCountryRegionIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDENCE_FOREIGN_COUNTRY_REGION_ID_IT: fieldBuilder.buildEdmTypeField(
          'ResidenceForeignCountryRegionId_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_ID: fieldBuilder.buildEdmTypeField(
          'SegmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'FreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orgId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORG_ID: fieldBuilder.buildEdmTypeField('OrgId', 'Edm.String', true),
        /**
         * Static representation of the {@link shipCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShipCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eInvoiceRegisterIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_REGISTER_IT: fieldBuilder.buildEnumField(
          'EInvoiceRegister_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionLetterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_CODE: fieldBuilder.buildEnumField(
          'CollectionLetterCode',
          CustCollectionLetterCode,
          true
        ),
        /**
         * Static representation of the {@link companyChainId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CHAIN_ID: fieldBuilder.buildEdmTypeField(
          'CompanyChainId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCarrierBlindShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_BLIND_SHIPMENT: fieldBuilder.buildEnumField(
          'ShipCarrierBlindShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freeNotesGroupIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_NOTES_GROUP_IT: fieldBuilder.buildEdmTypeField(
          'FreeNotesGroup_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoicePostingTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_POSTING_TYPE_RU: fieldBuilder.buildEnumField(
          'InvoicePostingType_RU',
          SalesInvoicePostingTypeRu,
          true
        ),
        /**
         * Static representation of the {@link priceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consDayJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONS_DAY_JP: fieldBuilder.buildEdmTypeField(
          'ConsDay_JP',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link generateIncomingFiscalDocumentBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_INCOMING_FISCAL_DOCUMENT_BR: fieldBuilder.buildEnumField(
          'GenerateIncomingFiscalDocument_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link partyCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PartyCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroTypeInterestNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE_INTEREST_NOTE: fieldBuilder.buildEnumField(
          'GiroTypeInterestNote',
          PaymentStub,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdGroupTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPeriodPaymentCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_PAYMENT_CODE_PL: fieldBuilder.buildEdmTypeField(
          'TaxPeriodPaymentCode_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGstReliefGroupHeadingMy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GST_RELIEF_GROUP_HEADING_MY: fieldBuilder.buildEdmTypeField(
          'TaxGSTReliefGroupHeading_MY',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxRegimeCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGIME_CODE_MX: fieldBuilder.buildEdmTypeField(
          'TaxRegimeCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STATEMENT: fieldBuilder.buildEnumField(
          'AccountStatement',
          CustAccountStatement,
          true
        ),
        /**
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEdmTypeField('EndDisc', 'Edm.String', true),
        /**
         * Static representation of the {@link shipCarrierFuelSurcharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_FUEL_SURCHARGE: fieldBuilder.buildEnumField(
          'ShipCarrierFuelSurcharge',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustTableBiEntities)
      };
    }

    return this._schema;
  }
}
