/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendTableBiEntities } from './VendTableBiEntities';
import { VendTableBiEntitiesRequestBuilder } from './VendTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { VendorTypeMx } from './VendorTypeMx';
import { VendCisStatus } from './VendCisStatus';
import { VendTableChangeProposalWorkflowState } from './VendTableChangeProposalWorkflowState';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { TaxIdType } from './TaxIdType';
import { CfdiWithholdingTaxpayerTypeMx } from './CfdiWithholdingTaxpayerTypeMx';
import { RevenueTypologyIt } from './RevenueTypologyIt';
import { CustVendorBlocked } from './CustVendorBlocked';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { CompanyTypeMx } from './CompanyTypeMx';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { Tax1099NameChoice } from './Tax1099NameChoice';
import { VatPartnerKindRu } from './VatPartnerKindRu';
import { VendVendorCollaborationType } from './VendVendorCollaborationType';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { UseCashDisc } from './UseCashDisc';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
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
export class VendTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendTableBiEntitiesApi<DeSerializersT> {
    return new VendTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendTableBiEntities;

  requestBuilder(): VendTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendTableBiEntities<DeSerializersT>,
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
    typeof VendTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNITED_VAT_INVOICE_LT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IE_NUM_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCALLY_OWNED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CPRB_BR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_DAY_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_PERIOD: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_CONTRIBUTOR_BR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURP_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONALITY_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMALL_BUSINESS: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESTINATION_CODE_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_TIN: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_1099_REG_NUM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_GROUP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_TYPE_MX: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendorTypeMx,
      true,
      true
    >;
    W_9: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_INCOME_CODE_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEMO: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BUYER_GROUP_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_AMOUNT_PURCHASE_ORDER: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGINAL_VENDOR_IN_REPORTING_IT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INSSCEI_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_STATUS: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendCisStatus,
      true,
      true
    >;
    LEGAL_REPRESENTATIVE_RFC_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HUB_ZONE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BID_ONLY: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKFLOW_STATE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendTableChangeProposalWorkflowState,
      true,
      true
    >;
    VEND_CONSUMPTION_BR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FATCA_FILING_REQUIREMENT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    PARTY: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_CALCULATE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FOREIGNER_ID_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESIDENCE_FOREIGN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRESENCE_TYPE_BR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_RESIDENT_LV: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_UNIQUE_TAX_PAYER_REF: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_RESIDENT_RU: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STRUCT_DEPARTMENT_RU: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_LINE_DISC: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_TAX_AGENT_RU: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_SCHED: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_INVENT_STATUS_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE_ON_DLV_ADDRESS_BR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAIN_CONTACT_WORKER: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBSEGMENT_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_DECLARATION_IS: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY_ID_SIRET: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_REPRESENTATIVE_CURP_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_TAXABLE_BR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_EXCEPTION_GROUP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONE_TIME_VENDOR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_VENDOR_TYPE_TH: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxWithholdVendorTypeTh,
      true,
      true
    >;
    TAX_ID_TYPE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxIdType,
      true,
      true
    >;
    WITHHOLDING_TAXPAYER_TYPE_MX: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      CfdiWithholdingTaxpayerTypeMx,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FINE_CODE_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_TYPOLOGY_IT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      RevenueTypologyIt,
      true,
      true
    >;
    CIS_VERIFICATION_DATE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VAT_NUM_REC_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    MINORITY_OWNED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DBA: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CENTRAL_BANK_TRANS_TYPE_CUR_RU: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LV_PAYM_TRANS_CODES: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FOREIGN_TAX_REGISTRATION_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_POOL_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_TAX: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_MAX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_ENTITY_INDICATOR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CCM_NUM_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TYPE_MX: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      CompanyTypeMx,
      true,
      true
    >;
    VAT_NUM_TABLE_TYPE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxExemptNumberSourceType,
      true,
      true
    >;
    CIS_COMPANY_REG_NUM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_COUNTY_CODE_IT: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_CALENDAR_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTORING_ACCOUNT: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY_VAT_DATE_PL: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE_REVENUE_TYPOLOGY_IT: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNPJCPF_NUM_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INT_BANK_LV: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PAYM_FEE_COVERED_JP: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    W_9_INCLUDED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_GROUP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_REPORTS: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    YOUR_ACCOUNT_NUM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CXML_ORDER_ENABLE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME_CONTROL: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_NAME_CHOICE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      Tax1099NameChoice,
      true,
      true
    >;
    CNAE_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEMALE_OWNED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY_NAF_CODE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VAT_PARTNER_KIND_RU: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      VatPartnerKindRu,
      true,
      true
    >;
    VEND_VENDOR_COLLABORATION_TYPE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendVendorCollaborationType,
      true,
      true
    >;
    SUPP_ITEM_GROUP_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SELF_INVOICE_VENDOR_IT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISABLED_OWNED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_PRICE_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_TYPE_MX: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    NIT_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_PLACE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PUBLIC_SECTOR_IT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_REQUEST_ENABLED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_REQUEST_ALLOW_OVERRIDE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATE_INSCRIPTION_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_CODE_BR: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CASH_DISC: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      UseCashDisc,
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEIR_IT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TAXATION_OVER_PAYROLL_BR: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEGMENT_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_VERIFICATION_NUM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_ZONE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORG_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_INVOICE_REGISTER_IT: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VETERAN_OWNED: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY_CHAIN_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ITEM_GROUP_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE_REQUEST_OVERRIDE: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_OPERATION_CODE_RU: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_NOTES_GROUP_IT: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_REPRESENTATIVE_NAME_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ORDER_OF_PAYMENT_RU: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_PAYM_FEE_GROUP_JP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_GROUP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIOT_COUNTRY_CODE_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONS_DAY_JP: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BLOCKED_RELEASE_DATE: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MATCHING_POLICY: EnumField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyWithNotSetOption,
      true,
      true
    >;
    WITHHOLDING_TYPE_CODE_MX: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAM_REBATE_GROUP_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_NATIONAL_INSURANCE_NUM: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEPARATE_DIVISION_ID_RU: OrderableEdmTypeField<
      VendTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link locallyOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALLY_OWNED: fieldBuilder.buildEnumField('LocallyOwned', NoYes, true),
        /**
         * Static representation of the {@link isCprbBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CPRB_BR: fieldBuilder.buildEnumField('IsCPRB_BR', NoYes, true),
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
         * Static representation of the {@link nationalityMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY_MX: fieldBuilder.buildEdmTypeField(
          'Nationality_MX',
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
         * Static representation of the {@link smallBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMALL_BUSINESS: fieldBuilder.buildEnumField(
          'SmallBusiness',
          NoYes,
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
         * Static representation of the {@link secondTin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_TIN: fieldBuilder.buildEnumField('SecondTIN', NoYes, true),
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
         * Static representation of the {@link tax1099RegNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_REG_NUM: fieldBuilder.buildEdmTypeField(
          'Tax1099RegNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_GROUP: fieldBuilder.buildEdmTypeField(
          'VendGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TYPE_MX: fieldBuilder.buildEnumField(
          'VendorType_MX',
          VendorTypeMx,
          true
        ),
        /**
         * Static representation of the {@link w9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_9: fieldBuilder.buildEnumField('W9', NoYes, true),
        /**
         * Static representation of the {@link vendIncomeCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INCOME_CODE_BR: fieldBuilder.buildEdmTypeField(
          'VendIncomeCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
        /**
         * Static representation of the {@link memo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMO: fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true),
        /**
         * Static representation of the {@link itemBuyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemBuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', true),
        /**
         * Static representation of the {@link purchAmountPurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_AMOUNT_PURCHASE_ORDER: fieldBuilder.buildEnumField(
          'PurchAmountPurchaseOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link originalVendorInReportingIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_VENDOR_IN_REPORTING_IT: fieldBuilder.buildEnumField(
          'OriginalVendorInReporting_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tax1099Fields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FIELDS: fieldBuilder.buildEdmTypeField(
          'Tax1099Fields',
          'Edm.Int64',
          false
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
         * Static representation of the {@link taxWithholdGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_STATUS: fieldBuilder.buildEnumField(
          'CISStatus',
          VendCisStatus,
          true
        ),
        /**
         * Static representation of the {@link legalRepresentativeRfcMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_REPRESENTATIVE_RFC_MX: fieldBuilder.buildEdmTypeField(
          'LegalRepresentativeRfc_MX',
          'Edm.String',
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
         * Static representation of the {@link hubZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HUB_ZONE: fieldBuilder.buildEnumField('HUBZone', NoYes, true),
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
         * Static representation of the {@link bidOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BID_ONLY: fieldBuilder.buildEnumField('BidOnly', NoYes, true),
        /**
         * Static representation of the {@link workflowState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATE: fieldBuilder.buildEnumField(
          'WorkflowState',
          VendTableChangeProposalWorkflowState,
          true
        ),
        /**
         * Static representation of the {@link vendConsumptionBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_CONSUMPTION_BR: fieldBuilder.buildEnumField(
          'VendConsumption_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fatcaFilingRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FATCA_FILING_REQUIREMENT: fieldBuilder.buildEnumField(
          'FATCAFilingRequirement',
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
         * Static representation of the {@link taxWithholdCalculate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALCULATE: fieldBuilder.buildEnumField(
          'TaxWithholdCalculate',
          NoYes,
          true
        ),
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
         * Static representation of the {@link residenceForeignCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDENCE_FOREIGN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ResidenceForeignCountryRegionId',
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link inventLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION: fieldBuilder.buildEdmTypeField(
          'InventLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisUniqueTaxPayerRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_UNIQUE_TAX_PAYER_REF: fieldBuilder.buildEdmTypeField(
          'CISUniqueTaxPayerRef',
          'Edm.String',
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
         * Static representation of the {@link structDepartmentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRUCT_DEPARTMENT_RU: fieldBuilder.buildEdmTypeField(
          'StructDepartment_RU',
          'Edm.String',
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
         * Static representation of the {@link vatTaxAgentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_TAX_AGENT_RU: fieldBuilder.buildEnumField(
          'VATTaxAgent_RU',
          NoYes,
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
         * Static representation of the {@link defaultInventStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventStatusId',
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
         * Static representation of the {@link vendInvoiceDeclarationIs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_DECLARATION_IS: fieldBuilder.buildEdmTypeField(
          'VendInvoiceDeclaration_IS',
          'Edm.Int64',
          false
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
         * Static representation of the {@link legalRepresentativeCurpMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_REPRESENTATIVE_CURP_MX: fieldBuilder.buildEdmTypeField(
          'LegalRepresentativeCurp_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nonTaxableBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_TAXABLE_BR: fieldBuilder.buildEnumField(
          'NonTaxable_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendExceptionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_EXCEPTION_GROUP: fieldBuilder.buildEdmTypeField(
          'VendExceptionGroup',
          'Edm.Int64',
          false
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
         * Static representation of the {@link oneTimeVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_VENDOR: fieldBuilder.buildEnumField(
          'OneTimeVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdVendorTypeTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_VENDOR_TYPE_TH: fieldBuilder.buildEnumField(
          'TaxWithholdVendorType_TH',
          TaxWithholdVendorTypeTh,
          true
        ),
        /**
         * Static representation of the {@link taxIdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID_TYPE: fieldBuilder.buildEnumField('TaxIDType', TaxIdType, true),
        /**
         * Static representation of the {@link withholdingTaxpayerTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAXPAYER_TYPE_MX: fieldBuilder.buildEnumField(
          'WithholdingTaxpayerType_MX',
          CfdiWithholdingTaxpayerTypeMx,
          true
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
         * Static representation of the {@link revenueTypologyIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_TYPOLOGY_IT: fieldBuilder.buildEnumField(
          'RevenueTypology_IT',
          RevenueTypologyIt,
          true
        ),
        /**
         * Static representation of the {@link cisVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_VERIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'CISVerificationDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link minorityOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINORITY_OWNED: fieldBuilder.buildEnumField(
          'MinorityOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dba} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DBA: fieldBuilder.buildEdmTypeField('DBA', 'Edm.String', true),
        /**
         * Static representation of the {@link bankCentralBankTransTypeCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_TRANS_TYPE_CUR_RU: fieldBuilder.buildEdmTypeField(
          'BankCentralBankTransTypeCur_RU',
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
         * Static representation of the {@link purchPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_POOL_ID: fieldBuilder.buildEdmTypeField(
          'PurchPoolId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignEntityIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_ENTITY_INDICATOR: fieldBuilder.buildEnumField(
          'ForeignEntityIndicator',
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
         * Static representation of the {@link cisCompanyRegNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_COMPANY_REG_NUM: fieldBuilder.buildEdmTypeField(
          'CISCompanyRegNum',
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
         * Static representation of the {@link purchCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PurchCalendarId',
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
         * Static representation of the {@link mandatoryVatDatePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_VAT_DATE_PL: fieldBuilder.buildEnumField(
          'MandatoryVatDate_PL',
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
         * Static representation of the {@link codeRevenueTypologyIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_REVENUE_TYPOLOGY_IT: fieldBuilder.buildEdmTypeField(
          'CodeRevenueTypology_IT',
          'Edm.String',
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
         * Static representation of the {@link intBankLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INT_BANK_LV: fieldBuilder.buildEdmTypeField(
          'IntBank_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPaymFeeCoveredJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAYM_FEE_COVERED_JP: fieldBuilder.buildEnumField(
          'IsPaymFeeCovered_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link w9Included} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_9_INCLUDED: fieldBuilder.buildEnumField('W9Included', NoYes, true),
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
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
         * Static representation of the {@link markupGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_GROUP: fieldBuilder.buildEdmTypeField(
          'MarkupGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Reports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_REPORTS: fieldBuilder.buildEnumField(
          'Tax1099Reports',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link yourAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YOUR_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'YourAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cxmlOrderEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CXML_ORDER_ENABLE: fieldBuilder.buildEnumField(
          'CXMLOrderEnable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nameControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_CONTROL: fieldBuilder.buildEdmTypeField(
          'NameControl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link tax1099NameChoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_NAME_CHOICE: fieldBuilder.buildEnumField(
          'Tax1099NameChoice',
          Tax1099NameChoice,
          true
        ),
        /**
         * Static representation of the {@link cnaeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNAE_BR: fieldBuilder.buildEdmTypeField('CNAE_BR', 'Edm.String', true),
        /**
         * Static representation of the {@link femaleOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEMALE_OWNED: fieldBuilder.buildEnumField('FemaleOwned', NoYes, true),
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
         * Static representation of the {@link vatPartnerKindRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_PARTNER_KIND_RU: fieldBuilder.buildEnumField(
          'VATPartnerKind_RU',
          VatPartnerKindRu,
          true
        ),
        /**
         * Static representation of the {@link vendVendorCollaborationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_VENDOR_COLLABORATION_TYPE: fieldBuilder.buildEnumField(
          'VendVendorCollaborationType',
          VendVendorCollaborationType,
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
         * Static representation of the {@link isSelfInvoiceVendorIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SELF_INVOICE_VENDOR_IT: fieldBuilder.buildEnumField(
          'IsSelfInvoiceVendor_IT',
          NoYes,
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
         * Static representation of the {@link disabledOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLED_OWNED: fieldBuilder.buildEnumField(
          'DisabledOwned',
          NoYes,
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
         * Static representation of the {@link vendPriceToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PRICE_TOLERANCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendPriceToleranceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operationTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE_MX: fieldBuilder.buildEnumField(
          'OperationType_MX',
          VendorOperationTypeMx,
          true
        ),
        /**
         * Static representation of the {@link nitBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NIT_BR: fieldBuilder.buildEdmTypeField('NIT_BR', 'Edm.String', true),
        /**
         * Static representation of the {@link birthPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_PLACE: fieldBuilder.buildEdmTypeField(
          'BirthPlace',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link changeRequestEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_REQUEST_ENABLED: fieldBuilder.buildEnumField(
          'ChangeRequestEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link changeRequestAllowOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_REQUEST_ALLOW_OVERRIDE: fieldBuilder.buildEnumField(
          'ChangeRequestAllowOverride',
          NoYes,
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
         * Static representation of the {@link heirIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIR_IT: fieldBuilder.buildEnumField('Heir_IT', NoYes, true),
        /**
         * Static representation of the {@link isTaxationOverPayrollBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAXATION_OVER_PAYROLL_BR: fieldBuilder.buildEnumField(
          'IsTaxationOverPayroll_BR',
          NoYes,
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
         * Static representation of the {@link cisVerificationNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_VERIFICATION_NUM: fieldBuilder.buildEdmTypeField(
          'CISVerificationNum',
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
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
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
         * Static representation of the {@link veteranOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_OWNED: fieldBuilder.buildEnumField('VeteranOwned', NoYes, true),
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
         * Static representation of the {@link vendItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changeRequestOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_REQUEST_OVERRIDE: fieldBuilder.buildEnumField(
          'ChangeRequestOverride',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vatOperationCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OPERATION_CODE_RU: fieldBuilder.buildEdmTypeField(
          'VATOperationCode_RU',
          'Edm.String',
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
         * Static representation of the {@link legalRepresentativeNameMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_REPRESENTATIVE_NAME_MX: fieldBuilder.buildEdmTypeField(
          'LegalRepresentativeName_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankOrderOfPaymentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ORDER_OF_PAYMENT_RU: fieldBuilder.buildEdmTypeField(
          'BankOrderOfPayment_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendPaymFeeGroupJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PAYM_FEE_GROUP_JP: fieldBuilder.buildEdmTypeField(
          'VendPaymFeeGroup_JP',
          'Edm.String',
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
         * Static representation of the {@link diotCountryCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_COUNTRY_CODE_MX: fieldBuilder.buildEdmTypeField(
          'DiotCountryCode_MX',
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
         * Static representation of the {@link blockedReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'BlockedReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link matchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_POLICY: fieldBuilder.buildEnumField(
          'MatchingPolicy',
          PurchMatchingPolicyWithNotSetOption,
          true
        ),
        /**
         * Static representation of the {@link withholdingTypeCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TYPE_CODE_MX: fieldBuilder.buildEdmTypeField(
          'WithholdingTypeCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tamRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TAMRebateGroupID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
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
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEdmTypeField('EndDisc', 'Edm.String', true),
        /**
         * Static representation of the {@link cisNationalInsuranceNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_NATIONAL_INSURANCE_NUM: fieldBuilder.buildEdmTypeField(
          'CISNationalInsuranceNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link separateDivisionIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATE_DIVISION_ID_RU: fieldBuilder.buildEdmTypeField(
          'SeparateDivisionId_RU',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendTableBiEntities)
      };
    }

    return this._schema;
  }
}
