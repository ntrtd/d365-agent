/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocumentReceivedXmls } from './EfDocumentReceivedXmls';
import { EfDocumentReceivedXmlsRequestBuilder } from './EfDocumentReceivedXmlsRequestBuilder';
import { EfDocumentReceivedXmlViewLinesApi } from './EfDocumentReceivedXmlViewLinesApi';
import { FiscalDocumentStatusBr } from './FiscalDocumentStatusBr';
import { NoYes } from './NoYes';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EfDocumentReceivedXmlsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EfDocumentReceivedXmls<DeSerializersT>, DeSerializersT>
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
  ): EfDocumentReceivedXmlsApi<DeSerializersT> {
    return new EfDocumentReceivedXmlsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link efDocumentReceivedXmlViewLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EF_DOCUMENT_RECEIVED_XML_VIEW_LINE: OneToManyLink<
      EfDocumentReceivedXmls<DeSerializersT>,
      DeSerializersT,
      EfDocumentReceivedXmlViewLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EfDocumentReceivedXmlViewLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EF_DOCUMENT_RECEIVED_XML_VIEW_LINE: new OneToManyLink(
        'EFDocumentReceivedXmlViewLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EfDocumentReceivedXmls;

  requestBuilder(): EfDocumentReceivedXmlsRequestBuilder<DeSerializersT> {
    return new EfDocumentReceivedXmlsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EfDocumentReceivedXmls<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EfDocumentReceivedXmls<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EfDocumentReceivedXmls<DeSerializersT>,
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
    typeof EfDocumentReceivedXmls,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocumentReceivedXmls,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCESSKEY: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_NAME: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_NAME: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_BASE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS_FROM_SEFAZ: EnumField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      FiscalDocumentStatusBr,
      true,
      true
    >;
    THIRD_PARTY_CNPJ: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_AND_TIME_OF_THE_LAST_INQUIRY: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISSUE_TIMEZONE: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MARKUP_FREIGHT_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISCOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ICMS_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CITY_NAME: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_IEST: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_TIME: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_MARKUP_OTHER_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUSINESS_DOCUMENT_ID: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CNPJ: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_INFORMATION: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_IBGE_CODE: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBGE_CODE: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_INSERTION: EnumField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_CODE: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_IE: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLEMENTARY_INFORMATION: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_DATE: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_PRODUCT_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ICMSST_BASE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_MARKUP_INSURANCE_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IPI_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMSST_AMOUNT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUILDING_COMPLEMENT: OrderableEdmTypeField<
      EfDocumentReceivedXmls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link efDocumentReceivedXmlViewLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EF_DOCUMENT_RECEIVED_XML_VIEW_LINE: OneToManyLink<
      EfDocumentReceivedXmls<DeSerializersT>,
      DeSerializersT,
      EfDocumentReceivedXmlViewLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EfDocumentReceivedXmls<DeSerializers>>;
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
         * Static representation of the {@link accesskey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESSKEY: fieldBuilder.buildEdmTypeField(
          'Accesskey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NAME: fieldBuilder.buildEdmTypeField(
          'StreetName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdPartyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_NAME: fieldBuilder.buildEdmTypeField(
          'ThirdPartyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link icmsBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ICMSBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statusFromSefaz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_FROM_SEFAZ: fieldBuilder.buildEnumField(
          'StatusFromSEFAZ',
          FiscalDocumentStatusBr,
          true
        ),
        /**
         * Static representation of the {@link thirdPartyCnpj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_CNPJ: fieldBuilder.buildEdmTypeField(
          'ThirdPartyCNPJ',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateAndTimeOfTheLastInquiry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_AND_TIME_OF_THE_LAST_INQUIRY: fieldBuilder.buildEdmTypeField(
          'DateAndTimeOfTheLastInquiry',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link issueTimezone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_TIMEZONE: fieldBuilder.buildEdmTypeField(
          'IssueTimezone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalMarkupFreightAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MARKUP_FREIGHT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalMarkupFreightAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link icmsAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ICMSAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_NAME: fieldBuilder.buildEdmTypeField(
          'CityName',
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
         * Static representation of the {@link thirdPartyIest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_IEST: fieldBuilder.buildEdmTypeField(
          'ThirdPartyIEST',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_TIME: fieldBuilder.buildEdmTypeField(
          'IssueTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalMarkupOtherAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MARKUP_OTHER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalMarkupOtherAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link businessDocumentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'BusinessDocumentId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link cnpj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNPJ: fieldBuilder.buildEdmTypeField('CNPJ', 'Edm.String', true),
        /**
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
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
         * Static representation of the {@link cityIbgeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_IBGE_CODE: fieldBuilder.buildEdmTypeField(
          'CityIbgeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.String', true),
        /**
         * Static representation of the {@link ibgeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBGE_CODE: fieldBuilder.buildEdmTypeField(
          'IBGECode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manualInsertion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_INSERTION: fieldBuilder.buildEnumField(
          'ManualInsertion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField('StateId', 'Edm.String', true),
        /**
         * Static representation of the {@link districtName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link returnCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_CODE: fieldBuilder.buildEdmTypeField(
          'ReturnCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'StreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdPartyIe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_IE: fieldBuilder.buildEdmTypeField(
          'ThirdPartyIE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link complementaryInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLEMENTARY_INFORMATION: fieldBuilder.buildEdmTypeField(
          'ComplementaryInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'IssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link totalProductAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PRODUCT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalProductAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link icmsstBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMSST_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ICMSSTBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalMarkupInsuranceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MARKUP_INSURANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalMarkupInsuranceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ipiAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IPI_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IPIAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link icmsstAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMSST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ICMSSTAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link buildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'BuildingComplement',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocumentReceivedXmls)
      };
    }

    return this._schema;
  }
}
