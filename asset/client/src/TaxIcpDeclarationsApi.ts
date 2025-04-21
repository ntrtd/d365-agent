/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxIcpDeclarations } from './TaxIcpDeclarations';
import { TaxIcpDeclarationsRequestBuilder } from './TaxIcpDeclarationsRequestBuilder';
import { NoYes } from './NoYes';
import { Listcode } from './Listcode';
import { Timezone } from './Timezone';
import { TaxEvatStatus } from './TaxEvatStatus';
import { ContactPersonType } from './ContactPersonType';
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
export class TaxIcpDeclarationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxIcpDeclarations<DeSerializersT>, DeSerializersT>
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
  ): TaxIcpDeclarationsApi<DeSerializersT> {
    return new TaxIcpDeclarationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxIcpDeclarations;

  requestBuilder(): TaxIcpDeclarationsRequestBuilder<DeSerializersT> {
    return new TaxIcpDeclarationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxIcpDeclarations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxIcpDeclarations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxIcpDeclarations<DeSerializersT>,
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
    typeof TaxIcpDeclarations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxIcpDeclarations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRECTION_USE_ZIP_PLUS_4: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_INITIALS: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRIANGULAR_TRADE: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_TIME_ZONE: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      TaxEvatStatus,
      true,
      true
    >;
    USE_ZIP_PLUS_4: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECTION_PARENT_COUNTRY_REGION: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_COUNTRY_REGION_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INTRA_COMM_TABLE_NL: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATE_OF_CREATION: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_TAX_PERIOD: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_AMOUNT: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTION_TAX_INTRA_COMM_TABLE_NL: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CORRECTION_SERVICE_AMOUNT: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CORRECTION_SHORT_NAME: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_FORMAT: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_TRIANGULAR_TRADE: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    CORRECTION_VAT_NUM: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_LANGUAGE_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TAX_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_TYPE: EnumField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      ContactPersonType,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_COUNTRY_REGION: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_IS_OCODE: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PREFIX: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_OCODE: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_COUNTRY_REGION: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_AMOUNT: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_ADDRESS_FORMAT: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LONG_NAME: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORRECTION_LONG_NAME: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_GROUP: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_CURRENCY_CODE: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      TaxIcpDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxIcpDeclarations<DeSerializers>>;
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
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
        /**
         * Static representation of the {@link correctionUseZipPlus4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_USE_ZIP_PLUS_4: fieldBuilder.buildEnumField(
          'CorrectionUseZipPlus4',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link contactInitials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_INITIALS: fieldBuilder.buildEdmTypeField(
          'ContactInitials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link triangularTrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANGULAR_TRADE: fieldBuilder.buildEnumField(
          'TriangularTrade',
          Listcode,
          true
        ),
        /**
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_TIME_ZONE: fieldBuilder.buildEnumField(
          'CorrectionTimeZone',
          Timezone,
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', TaxEvatStatus, true),
        /**
         * Static representation of the {@link useZipPlus4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ZIP_PLUS_4: fieldBuilder.buildEnumField('UseZipPlus4', NoYes, true),
        /**
         * Static representation of the {@link correctionParentCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_PARENT_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CorrectionParentCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CorrectionCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxIntraCommTableNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INTRA_COMM_TABLE_NL: fieldBuilder.buildEdmTypeField(
          'TaxIntraCommTable_NL',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dateOfCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_CREATION: fieldBuilder.buildEdmTypeField(
          'DateOfCreation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionTaxPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_TAX_PERIOD: fieldBuilder.buildEdmTypeField(
          'CorrectionTaxPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link correctionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CorrectionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctionTaxIntraCommTableNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_TAX_INTRA_COMM_TABLE_NL: fieldBuilder.buildEdmTypeField(
          'CorrectionTaxIntraCommTable_NL',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link correctionServiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_SERVICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CorrectionServiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link correctionShortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'CorrectionShortName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true),
        /**
         * Static representation of the {@link addressFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_FORMAT: fieldBuilder.buildEdmTypeField(
          'AddressFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionTriangularTrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_TRIANGULAR_TRADE: fieldBuilder.buildEnumField(
          'CorrectionTriangularTrade',
          Listcode,
          true
        ),
        /**
         * Static representation of the {@link correctionVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_VAT_NUM: fieldBuilder.buildEdmTypeField(
          'CorrectionVatNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTING_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoutingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VatNum', 'Edm.String', true),
        /**
         * Static representation of the {@link contactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'ContactID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'CorrectionLanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TAX_ID: fieldBuilder.buildEdmTypeField(
          'CompanyTaxID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link message} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE: fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true),
        /**
         * Static representation of the {@link contactType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_TYPE: fieldBuilder.buildEnumField(
          'ContactType',
          ContactPersonType,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link parentCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'ParentCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionIsOcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_IS_OCODE: fieldBuilder.buildEdmTypeField(
          'CorrectionISOcode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PREFIX: fieldBuilder.buildEdmTypeField(
          'ContactPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link isOcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OCODE: fieldBuilder.buildEdmTypeField('ISOcode', 'Edm.String', true),
        /**
         * Static representation of the {@link correctionCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CorrectionCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ServiceAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link correctionAddressFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_ADDRESS_FORMAT: fieldBuilder.buildEdmTypeField(
          'CorrectionAddressFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
          'Edm.String',
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
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link longName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONG_NAME: fieldBuilder.buildEdmTypeField(
          'LongName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link year} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR: fieldBuilder.buildEdmTypeField('Year', 'Edm.Int32', false),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.Int32', false),
        /**
         * Static representation of the {@link correctionLongName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_LONG_NAME: fieldBuilder.buildEdmTypeField(
          'CorrectionLongName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_GROUP: fieldBuilder.buildEdmTypeField(
          'FiscalGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CorrectionCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxIcpDeclarations)
      };
    }

    return this._schema;
  }
}
