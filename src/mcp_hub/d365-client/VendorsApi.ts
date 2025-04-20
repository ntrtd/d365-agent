/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vendors } from './Vendors';
import { VendorsRequestBuilder } from './VendorsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
import { VendVendorCollaborationType } from './VendVendorCollaborationType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { NoYes } from './NoYes';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { TaxIdType } from './TaxIdType';
import { InvestorType } from './InvestorType';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { CustVendorBlocked } from './CustVendorBlocked';
import { Timezone } from './Timezone';
import { MonthsOfYear } from './MonthsOfYear';
import { VendorTypeMx } from './VendorTypeMx';
import { VendCisStatus } from './VendCisStatus';
import { UseCashDisc } from './UseCashDisc';
import { Abc } from './Abc';
import { Gender } from './Gender';
import { Tax1099Type } from './Tax1099Type';
import { PanStatusIn } from './PanStatusIn';
import { Tax1099NameChoice } from './Tax1099NameChoice';
import { CompanyTypeMx } from './CompanyTypeMx';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vendors<DeSerializersT>, DeSerializersT>
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
  ): VendorsApi<DeSerializersT> {
    return new VendorsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      Vendors<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Vendors<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelVendors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_VENDORS: OneToManyLink<
      Vendors<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1]),
      VALUE_MODEL_VENDORS: new OneToManyLink(
        'ValueModelVendors',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = Vendors;

  requestBuilder(): VendorsRequestBuilder<DeSerializersT> {
    return new VendorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Vendors<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Vendors<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Vendors<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Vendors, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Vendors, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PORTAL_COLLABORATION_METHOD: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      VendVendorCollaborationType,
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PRICE_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_COUNTY_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_OFFSET_ACCOUNT_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SSI_VALIDITY_DATE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_SEGMENT_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PARTY_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DELIVERY_MODE_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_INVOICE_DECLARATION_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OWNER_DISABLED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_VENDOR_LOCALLY_OWNED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_PROFESSIONAL_TITLE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_YEAR: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SERVICE_DELIVERY_ADDRESS_BASED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_OPERATION_PRESENCE_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    PAYMENT_TRANSACTION_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_SERVICE_TYPE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_OFFSET_LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_PHONE_NUMBER_MOBILE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TCS_GROUP: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GTA_VENDOR: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORGANIZATION_PHONETIC_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_ID_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      TaxIdType,
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_PLACE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCHASE_CONSUMED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_INITIALS: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_CONSOLIDATION_DAY_OF_MONTH: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OID_INVESTOR_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      InvestorType,
      true,
      true
    >;
    FOREIGNER_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_SUPPLEMENTARY_PRODUCT_VENDOR_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHANGE_MANAGEMENT_ACTIVATED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_SEARCH_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CHAIN_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_VENDOR_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      TaxWithholdVendorTypeTh,
      true,
      true
    >;
    CIS_UNIQUE_TAX_PAYER_REFERENCE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PURCHASE_SITE_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_MARITAL_STATUS: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      DirPersonMaritalStatus,
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SSI_VENDOR: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_INVOICE_LINE_MATCHING_POLICY: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyWithNotSetOption,
      true,
      true
    >;
    CIS_COMPANY_REGISTRATION_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_INCOME_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_DAY_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHANGE_MANGEMENT_OVERRIDE_BY_VENDOR_ALLOWED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_CHILDREN_NAMES: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIOT_COUNTRY_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_STATUS: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      CustVendorBlocked,
      true,
      true
    >;
    IS_ONE_TIME_VENDOR: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMERCIAL_REGISTER_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_EMPLOYEE_AMOUNT: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_TELEX_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_WORK_CALENDAR_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_NIT: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_RECEIPTS_LIST_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZAKAT_REGISTRATION_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_BOX_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_YEAR: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_INVOICE_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REPORTING_TAX_1099: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RFC_FEDERAL_TAX_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    NATIONALITY: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMERCIAL_REGISTER_SECTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_REFERENCE_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_CNPJ_OR_CPF: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_DOING_BUSINESS_AS_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SERVICE_VETERAN_OWNED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_CCM: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_GROUP: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_FILE_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NATIONAL_REGISTRY_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_DAY: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WITHHOLDING_TAX_CALCULATED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_PERSON_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPOSITION_SCHEME: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_BIRTH_MONTH: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_POPULATION_REGISTRY_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MINORITY_OWNED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_EXTENSION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OID_NOMINEE_DETAILS: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIOT_VENDOR_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      VendorTypeMx,
      true,
      true
    >;
    FACTORING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_VERIFICATION_DATE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSIP_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_PERIOD_PAYMENT_TERMS_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_DAY: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PHONE_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_IE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_VENDOR_TAX_REGISTRATION_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BRAZILIAN_IE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ANNIVERSARY_MONTH: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    PRIMARY_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_STATUS: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      VendCisStatus,
      true,
      true
    >;
    PRODUCT_DESCRIPTION_VENDOR_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PURCHASE_ORDER_INCLUDE_PRICES_AND_AMOUNTS: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CASH_DISCOUNT_USAGE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      UseCashDisc,
      true,
      true
    >;
    STATE_INSCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FAX_NUMBER_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONAL_REGISTRY_NUMBER_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_ABC_CODE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    BRAZILIAN_CNAE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAF_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_REBATE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_LINKED_IN: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIRET_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_EXCEPTION_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_W_9_CHECKING_ENABLED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PURCHASE_ORDER_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_RATING: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_W_9_RECEIVED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VENDOR_PAYING_BANK_PAYMENT_FEE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_FACEBOOK: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INCOMING_FISCAL_DOCUMENT_GENERATED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_HOLD_RELEASE_DATE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_TWITTER_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_FEDERAL_TAX_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_URL: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_FEE_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GENDER: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      Gender,
      true,
      true
    >;
    IS_PURCHASE_ORDER_CHANGE_REQUEST_OVERRIDE_ALLOWED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_EMAIL_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_NATIONAL_INSURANCE_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_PRIMARY_ADDRESS: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PROCUMENT_WAREHOUSE_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSIP_DETAILS: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ICMS_CONTRIBUTOR: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_PERSONAL_SUFFIX: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_FOREIGN_ENTITY: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      Tax1099Type,
      true,
      true
    >;
    PAN_STATUS: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      PanStatusIn,
      true,
      true
    >;
    NAME_CONTROL: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_SUBSEGMENT_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SMALL_BUSINESS: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_KNOWN_AS_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CUSIP_IDENTIFICATION_NUMBER_APPLICABLE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESIDENCE_FOREIGN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_TELEX_PURPOSE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_HOBBIES: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_NAME_TO_USE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      Tax1099NameChoice,
      true,
      true
    >;
    MAIN_CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      CompanyTypeMx,
      true,
      true
    >;
    COMMERCIAL_REGISTER_INSET_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_PERSONAL_TITLE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PARTY_TYPE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIOT_OPERATION_TYPE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_VENDOR_LOCATED_IN_HUB_ZONE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FLAGGED_WITH_SECOND_TIN: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_SPECIFICATION_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_VENDOR: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WOMAN_OWNER: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HAS_ONLY_TAKEN_BIDS: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PURCHASE_ORDER_POOL_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERENTIAL_VENDOR: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_TOTAL_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZILIAN_INSSCEI: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIS_VERIFICATION_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURE_OF_ASSESSEE: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    UPS_FREIGHT_ZONE: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PRODUCT_RECEIPT_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSON_PHONETIC_LAST_NAME: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Vendors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUBCONTRACTOR: EnumField<
      Vendors<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      Vendors<DeSerializers>,
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
      Vendors<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Vendors<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelVendors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_VENDORS: OneToManyLink<
      Vendors<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Vendors<DeSerializers>>;
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
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressBrazilianCnpjOrCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BRAZILIAN_CNPJ_OR_CPF: fieldBuilder.buildEdmTypeField(
          'AddressBrazilianCNPJOrCPF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPortalCollaborationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PORTAL_COLLABORATION_METHOD: fieldBuilder.buildEnumField(
          'VendorPortalCollaborationMethod',
          VendVendorCollaborationType,
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPriceToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PRICE_TOLERANCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorPriceToleranceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthCountyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_COUNTY_CODE: fieldBuilder.buildEdmTypeField(
          'BirthCountyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultOffsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'DefaultOffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ssiValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSI_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'SSIValidityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link businessSegmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SEGMENT_CODE: fieldBuilder.buildEdmTypeField(
          'BusinessSegmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDeliveryModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DELIVERY_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultDeliveryModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DUNSNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorInvoiceDeclarationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_DECLARATION_ID: fieldBuilder.buildEdmTypeField(
          'VendorInvoiceDeclarationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOwnerDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OWNER_DISABLED: fieldBuilder.buildEnumField(
          'IsOwnerDisabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isVendorLocallyOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_LOCALLY_OWNED: fieldBuilder.buildEnumField(
          'IsVendorLocallyOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personProfessionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personBirthYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonBirthYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isServiceDeliveryAddressBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_DELIVERY_ADDRESS_BASED: fieldBuilder.buildEnumField(
          'IsServiceDeliveryAddressBased',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalOperationPresenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_OPERATION_PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'FiscalOperationPresenceType',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link paymentTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentTransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ZakatServiceType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultOffsetLedgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OFFSET_LEDGER_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultOffsetLedgerAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isPrimaryPhoneNumberMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_PHONE_NUMBER_MOBILE: fieldBuilder.buildEnumField(
          'IsPrimaryPhoneNumberMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tcsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP: fieldBuilder.buildEdmTypeField(
          'TCSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
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
         * Static representation of the {@link gtaVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTA_VENDOR: fieldBuilder.buildEnumField('GTAVendor', NoYes, true),
        /**
         * Static representation of the {@link organizationPhoneticName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PHONETIC_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationPhoneticName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099IdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_ID_TYPE: fieldBuilder.buildEnumField(
          'Tax1099IdType',
          TaxIdType,
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
         * Static representation of the {@link birthPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_PLACE: fieldBuilder.buildEdmTypeField(
          'BirthPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPurchaseConsumed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_CONSUMED: fieldBuilder.buildEnumField(
          'IsPurchaseConsumed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personInitials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_INITIALS: fieldBuilder.buildEdmTypeField(
          'PersonInitials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderConsolidationDayOfMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_CONSOLIDATION_DAY_OF_MONTH:
          fieldBuilder.buildEdmTypeField(
            'PurchaseOrderConsolidationDayOfMonth',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link centralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryURLPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oidInvestorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OID_INVESTOR_TYPE: fieldBuilder.buildEnumField(
          'OIDInvestorType',
          InvestorType,
          true
        ),
        /**
         * Static representation of the {@link foreignerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGNER_ID: fieldBuilder.buildEdmTypeField(
          'ForeignerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultSupplementaryProductVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SUPPLEMENTARY_PRODUCT_VENDOR_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'DefaultSupplementaryProductVendorGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isChangeManagementActivated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHANGE_MANAGEMENT_ACTIVATED: fieldBuilder.buildEnumField(
          'IsChangeManagementActivated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'VendorSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyChainName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CHAIN_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyChainName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxVendorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_VENDOR_TYPE: fieldBuilder.buildEnumField(
          'WithholdingTaxVendorType',
          TaxWithholdVendorTypeTh,
          true
        ),
        /**
         * Static representation of the {@link cisUniqueTaxPayerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_UNIQUE_TAX_PAYER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CISUniqueTaxPayerReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPurchaseSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PURCHASE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPurchaseSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personMaritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_MARITAL_STATUS: fieldBuilder.buildEnumField(
          'PersonMaritalStatus',
          DirPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ssiVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSI_VENDOR: fieldBuilder.buildEnumField('SSIVendor', NoYes, true),
        /**
         * Static representation of the {@link vendorPaymentFinancialInterestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_FINANCIAL_INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'VendorPaymentFinancialInterestCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorInvoiceLineMatchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_LINE_MATCHING_POLICY: fieldBuilder.buildEnumField(
          'VendorInvoiceLineMatchingPolicy',
          PurchMatchingPolicyWithNotSetOption,
          true
        ),
        /**
         * Static representation of the {@link cisCompanyRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_COMPANY_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CISCompanyRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentDayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_DAY_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentDayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isChangeMangementOverrideByVendorAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHANGE_MANGEMENT_OVERRIDE_BY_VENDOR_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsChangeMangementOverrideByVendorAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link personChildrenNames} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_CHILDREN_NAMES: fieldBuilder.buildEdmTypeField(
          'PersonChildrenNames',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link diotCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'DIOTCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personProfessionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonProfessionalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onHoldStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HOLD_STATUS: fieldBuilder.buildEnumField(
          'OnHoldStatus',
          CustVendorBlocked,
          true
        ),
        /**
         * Static representation of the {@link isOneTimeVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_VENDOR: fieldBuilder.buildEnumField(
          'IsOneTimeVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link commercialRegisterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_REGISTER_NAME: fieldBuilder.buildEdmTypeField(
          'CommercialRegisterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationEmployeeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_EMPLOYEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrganizationEmployeeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseWorkCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseWorkCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_CODE: fieldBuilder.buildEdmTypeField(
          'DestinationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianNit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_NIT: fieldBuilder.buildEdmTypeField(
          'BrazilianNIT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willReceiptsListProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_RECEIPTS_LIST_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillReceiptsListProcessingSummaryUpdatePurchaseOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link arePricesIncludingSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICES_INCLUDING_SALES_TAX: fieldBuilder.buildEnumField(
          'ArePricesIncludingSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link zakatRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ZakatRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099BoxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_BOX_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099BoxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPhoneNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_YEAR: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willInvoiceProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVOICE_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillInvoiceProcessingSummaryUpdatePurchaseOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReportingTax1099} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REPORTING_TAX_1099: fieldBuilder.buildEnumField(
          'IsReportingTax1099',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rfcFederalTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_FEDERAL_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFCFederalTaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link nationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY: fieldBuilder.buildEdmTypeField(
          'Nationality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commercialRegisterSection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_REGISTER_SECTION: fieldBuilder.buildEdmTypeField(
          'CommercialRegisterSection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianCnpjOrCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CNPJ_OR_CPF: fieldBuilder.buildEdmTypeField(
          'BrazilianCNPJOrCPF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link panNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099DoingBusinessAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_DOING_BUSINESS_AS_NAME: fieldBuilder.buildEdmTypeField(
          'Tax1099DoingBusinessAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isServiceVeteranOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_VETERAN_OWNED: fieldBuilder.buildEnumField(
          'IsServiceVeteranOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianCcm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CCM: fieldBuilder.buildEdmTypeField(
          'BrazilianCCM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tdsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_GROUP: fieldBuilder.buildEdmTypeField(
          'TDSGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatFileNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_FILE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ZakatFileNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNationalRegistryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NATIONAL_REGISTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ISNationalRegistryNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_DAY: fieldBuilder.buildEdmTypeField(
          'PersonAnniversaryDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultVendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultVendorPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWithholdingTaxCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_TAX_CALCULATED: fieldBuilder.buildEnumField(
          'IsWithholdingTaxCalculated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compositionScheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPOSITION_SCHEME: fieldBuilder.buildEnumField(
          'CompositionScheme',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personBirthMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_MONTH: fieldBuilder.buildEnumField(
          'PersonBirthMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uniquePopulationRegistryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_POPULATION_REGISTRY_CODE: fieldBuilder.buildEdmTypeField(
          'UniquePopulationRegistryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMinorityOwned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MINORITY_OWNED: fieldBuilder.buildEnumField(
          'IsMinorityOwned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link multilineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oidNomineeDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OID_NOMINEE_DETAILS: fieldBuilder.buildEdmTypeField(
          'OIDNomineeDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link diotVendorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_VENDOR_TYPE: fieldBuilder.buildEnumField(
          'DIOTVendorType',
          VendorTypeMx,
          true
        ),
        /**
         * Static representation of the {@link factoringVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTORING_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FactoringVendorAccountNumber',
          'Edm.String',
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
         * Static representation of the {@link cusipIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSIP_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CUSIPIdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingPeriodPaymentTermsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_PERIOD_PAYMENT_TERMS_ID: fieldBuilder.buildEdmTypeField(
          'ClearingPeriodPaymentTermsId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personBirthDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_DAY: fieldBuilder.buildEdmTypeField(
          'PersonBirthDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'VendorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
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
         * Static representation of the {@link primaryPhoneNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PHONE_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryPhoneNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilianIe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_IE: fieldBuilder.buildEdmTypeField(
          'BrazilianIE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignVendorTaxRegistrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_VENDOR_TAX_REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'ForeignVendorTaxRegistrationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBrazilianIe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BRAZILIAN_IE: fieldBuilder.buildEdmTypeField(
          'AddressBrazilianIE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personAnniversaryMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ANNIVERSARY_MONTH: fieldBuilder.buildEnumField(
          'PersonAnniversaryMonth',
          MonthsOfYear,
          true
        ),
        /**
         * Static representation of the {@link primaryFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID: fieldBuilder.buildEdmTypeField(
          'PaymentId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link cisStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_STATUS: fieldBuilder.buildEnumField(
          'CISStatus',
          VendCisStatus,
          true
        ),
        /**
         * Static representation of the {@link productDescriptionVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductDescriptionVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willPurchaseOrderIncludePricesAndAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PURCHASE_ORDER_INCLUDE_PRICES_AND_AMOUNTS:
          fieldBuilder.buildEnumField(
            'WillPurchaseOrderIncludePricesAndAmounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultCashDiscountUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CASH_DISCOUNT_USAGE: fieldBuilder.buildEnumField(
          'DefaultCashDiscountUsage',
          UseCashDisc,
          true
        ),
        /**
         * Static representation of the {@link stateInscription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_INSCRIPTION: fieldBuilder.buildEdmTypeField(
          'StateInscription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFaxNumberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FAX_NUMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryFaxNumberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentScheduleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPhoneticMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationalRegistryNumberId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_REGISTRY_NUMBER_ID: fieldBuilder.buildEdmTypeField(
          'NationalRegistryNumberId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ABC_CODE: fieldBuilder.buildEnumField(
          'OrganizationABCCode',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link brazilianCnae} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_CNAE: fieldBuilder.buildEdmTypeField(
          'BrazilianCNAE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nafCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAF_CODE: fieldBuilder.buildEdmTypeField('NAFCode', 'Edm.String', true),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'AddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseRebateVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REBATE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseRebateVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siretNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIRET_NUMBER: fieldBuilder.buildEdmTypeField(
          'SiretNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorExceptionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_EXCEPTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorExceptionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isW9CheckingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_W_9_CHECKING_ENABLED: fieldBuilder.buildEnumField(
          'IsW9CheckingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willPurchaseOrderProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PURCHASE_ORDER_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillPurchaseOrderProcessingSummaryUpdatePurchaseOrder',
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
         * Static representation of the {@link vendorPaymentFineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_FINE_CODE: fieldBuilder.buildEdmTypeField(
          'VendorPaymentFineCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isW9Received} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_W_9_RECEIVED: fieldBuilder.buildEnumField(
          'IsW9Received',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chargeVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVendorPayingBankPaymentFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_PAYING_BANK_PAYMENT_FEE: fieldBuilder.buildEnumField(
          'IsVendorPayingBankPaymentFee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isIncomingFiscalDocumentGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INCOMING_FISCAL_DOCUMENT_GENERATED: fieldBuilder.buildEnumField(
          'IsIncomingFiscalDocumentGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link ourAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OurAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorHoldReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_HOLD_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'VendorHoldReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099FederalTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FEDERAL_TAX_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099FederalTaxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryEmailAddressPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentFeeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FEE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PaymentFeeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'AddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_GENDER: fieldBuilder.buildEnumField(
          'PersonGender',
          Gender,
          true
        ),
        /**
         * Static representation of the {@link isPurchaseOrderChangeRequestOverrideAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_ORDER_CHANGE_REQUEST_OVERRIDE_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsPurchaseOrderChangeRequestOverrideAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link primaryEmailAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_EMAIL_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryEmailAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDeliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultDeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PriceVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisNationalInsuranceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_NATIONAL_INSURANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CISNationalInsuranceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProcumentWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PROCUMENT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProcumentWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cusipDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSIP_DETAILS: fieldBuilder.buildEdmTypeField(
          'CUSIPDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enterpriseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERPRISE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EnterpriseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isIcmsContributor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ICMS_CONTRIBUTOR: fieldBuilder.buildEnumField(
          'IsICMSContributor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personPersonalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PERSONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonPersonalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isForeignEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FOREIGN_ENTITY: fieldBuilder.buildEnumField(
          'IsForeignEntity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tax1099Type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_TYPE: fieldBuilder.buildEnumField(
          'Tax1099Type',
          Tax1099Type,
          true
        ),
        /**
         * Static representation of the {@link panStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_STATUS: fieldBuilder.buildEnumField('PANStatus', PanStatusIn, true),
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
         * Static representation of the {@link centralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessSubsegmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SUBSEGMENT_CODE: fieldBuilder.buildEdmTypeField(
          'BusinessSubsegmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSmallBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SMALL_BUSINESS: fieldBuilder.buildEnumField(
          'IsSmallBusiness',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorKnownAsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_KNOWN_AS_NAME: fieldBuilder.buildEdmTypeField(
          'VendorKnownAsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCusipIdentificationNumberApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSIP_IDENTIFICATION_NUMBER_APPLICABLE: fieldBuilder.buildEnumField(
          'IsCUSIPIdentificationNumberApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
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
         * Static representation of the {@link primaryTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personHobbies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_HOBBIES: fieldBuilder.buildEdmTypeField(
          'PersonHobbies',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099NameToUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_NAME_TO_USE: fieldBuilder.buildEnumField(
          'Tax1099NameToUse',
          Tax1099NameChoice,
          true
        ),
        /**
         * Static representation of the {@link mainContactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'MainContactPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link companyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TYPE: fieldBuilder.buildEnumField(
          'CompanyType',
          CompanyTypeMx,
          true
        ),
        /**
         * Static representation of the {@link commercialRegisterInsetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_REGISTER_INSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'CommercialRegisterInsetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personPersonalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PERSONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonPersonalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPartyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'VendorPartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link diotOperationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_OPERATION_TYPE: fieldBuilder.buildEnumField(
          'DIOTOperationType',
          VendorOperationTypeMx,
          true
        ),
        /**
         * Static representation of the {@link isPrimaryEmailAddressImEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_EMAIL_ADDRESS_IM_ENABLED: fieldBuilder.buildEnumField(
          'IsPrimaryEmailAddressIMEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isVendorLocatedInHubZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VENDOR_LOCATED_IN_HUB_ZONE: fieldBuilder.buildEnumField(
          'IsVendorLocatedInHUBZone',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFlaggedWithSecondTin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FLAGGED_WITH_SECOND_TIN: fieldBuilder.buildEnumField(
          'IsFlaggedWithSecondTIN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentSpecificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'PaymentSpecificationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_VENDOR: fieldBuilder.buildEnumField(
          'ForeignVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personPhoneticFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWomanOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WOMAN_OWNER: fieldBuilder.buildEnumField(
          'IsWomanOwner',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hasOnlyTakenBids} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_ONLY_TAKEN_BIDS: fieldBuilder.buildEnumField(
          'HasOnlyTakenBids',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultPurchaseOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PURCHASE_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPurchaseOrderPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferentialVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERENTIAL_VENDOR: fieldBuilder.buildEnumField(
          'PreferentialVendor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultTotalDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TOTAL_DISCOUNT_VENDOR_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'DefaultTotalDiscountVendorGroupCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link brazilianInsscei} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_INSSCEI: fieldBuilder.buildEdmTypeField(
          'BrazilianINSSCEI',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cisVerificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIS_VERIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CISVerificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link natureOfAssessee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_ASSESSEE: fieldBuilder.buildEnumField(
          'NatureOfAssessee',
          NatureOfAssesseeIn,
          true
        ),
        /**
         * Static representation of the {@link upsFreightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPS_FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'UPSFreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willProductReceiptProcessingSummaryUpdatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RECEIPT_PROCESSING_SUMMARY_UPDATE_PURCHASE_ORDER:
          fieldBuilder.buildEnumField(
            'WillProductReceiptProcessingSummaryUpdatePurchaseOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link personPhoneticLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_PHONETIC_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PersonPhoneticLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSubcontractor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBCONTRACTOR: fieldBuilder.buildEnumField(
          'IsSubcontractor',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Vendors)
      };
    }

    return this._schema;
  }
}
