/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalEstablishments } from './FiscalEstablishments';
import { FiscalEstablishmentsRequestBuilder } from './FiscalEstablishmentsRequestBuilder';
import { FiscalEstablishmentIePerStatesApi } from './FiscalEstablishmentIePerStatesApi';
import { OperationalSitesV2Api } from './OperationalSitesV2Api';
import { OperationalSitesApi } from './OperationalSitesApi';
import { NoYes } from './NoYes';
import { EfDocEnvironmentBr } from './EfDocEnvironmentBr';
import { SpedContribReportingTypeBr } from './SpedContribReportingTypeBr';
import { EFiscalDocVersionBr } from './EFiscalDocVersionBr';
import { EfDocNFeTechNotesBr } from './EfDocNFeTechNotesBr';
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
export class FiscalEstablishmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalEstablishments<DeSerializersT>, DeSerializersT>
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
  ): FiscalEstablishmentsApi<DeSerializersT> {
    return new FiscalEstablishmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link fiscalEstablishmentIePerState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT_IE_PER_STATE: OneToManyLink<
      FiscalEstablishments<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentIePerStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_V_2: OneToManyLink<
      FiscalEstablishments<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToManyLink<
      FiscalEstablishments<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FiscalEstablishmentIePerStatesApi<DeSerializersT>,
      OperationalSitesV2Api<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FISCAL_ESTABLISHMENT_IE_PER_STATE: new OneToManyLink(
        'FiscalEstablishmentIEPerState',
        this,
        linkedApis[0]
      ),
      OPERATIONAL_SITE_V_2: new OneToManyLink(
        'OperationalSiteV2',
        this,
        linkedApis[1]
      ),
      OPERATIONAL_SITE: new OneToManyLink(
        'OperationalSite',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = FiscalEstablishments;

  requestBuilder(): FiscalEstablishmentsRequestBuilder<DeSerializersT> {
    return new FiscalEstablishmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalEstablishments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalEstablishments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalEstablishments<DeSerializersT>,
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
    typeof FiscalEstablishments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalEstablishments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPRINTED_SECURITY_FORM: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL_TEMPLATE_APPROVED_N_FE: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCH_NFE_XML_ON_POSTING: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CSC_TOKEN: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_FISCAL_PRINTER_DAILY_REPORT_NUMBER: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_POSTING_NOT_VALIDATED_NFE_XML: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_DANFE_WHEN_APROVED: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SEND_DANFE_PDF_IN_EMAIL: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    N_FE_ENVIRONMENT: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      EfDocEnvironmentBr,
      true,
      true
    >;
    FISCAL_ESTABLISHMENT_GROUP_ID: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NF_CE_ENVIRONMENT: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      EfDocEnvironmentBr,
      true,
      true
    >;
    EMAIL_TEMPLATE_CORRECTION_LETTER_N_FE: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_XML_SCHEMA: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CLOSED_WAREHOUSE: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NF_CE_SEND_PDF_IN_EMAIL: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CSC: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNPJ: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPED_CONTRIB_REPORTING_TYPE: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      SpedContribReportingTypeBr,
      true,
      true
    >;
    CCM: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FCI_TO_INTRASTATE_ENABLED: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL_TEMPLATE_CANCELED_N_FE: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    N_FE_DIGITAL_CERTIFICATE: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NF_CE_AUTHORITY: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    N_FE_AUTHORITY: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    N_FE_VERSION: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      EFiscalDocVersionBr,
      true,
      true
    >;
    EF_DOC_N_FE_TECH_NOTES: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      EfDocNFeTechNotesBr,
      true,
      true
    >;
    ACCOUNTANT_CRC: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IE: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_ESTABLISHMENT_SALES_ISSUER_ID: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NIRE: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NF_CE_VERSION: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      EFiscalDocVersionBr,
      true,
      true
    >;
    NF_CE_EMAIL_APPROVED: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EF_DOC_N_FE_402018005_V_110: EnumField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_NAME: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTANT_CPF: OrderableEdmTypeField<
      FiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fiscalEstablishmentIePerState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT_IE_PER_STATE: OneToManyLink<
      FiscalEstablishments<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentIePerStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_V_2: OneToManyLink<
      FiscalEstablishments<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToManyLink<
      FiscalEstablishments<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalEstablishments<DeSerializers>>;
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
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link preprintedSecurityForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPRINTED_SECURITY_FORM: fieldBuilder.buildEnumField(
          'PreprintedSecurityForm',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emailTemplateApprovedNFe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_TEMPLATE_APPROVED_N_FE: fieldBuilder.buildEdmTypeField(
          'EmailTemplateApprovedNFe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchNfeXmlOnPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCH_NFE_XML_ON_POSTING: fieldBuilder.buildEnumField(
          'MatchNfeXmlOnPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cscToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CSC_TOKEN: fieldBuilder.buildEdmTypeField(
          'CSCToken',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nextFiscalPrinterDailyReportNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_FISCAL_PRINTER_DAILY_REPORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'NextFiscalPrinterDailyReportNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockPostingNotValidatedNfeXml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_POSTING_NOT_VALIDATED_NFE_XML: fieldBuilder.buildEnumField(
          'BlockPostingNotValidatedNfeXml',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printDanfeWhenAproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DANFE_WHEN_APROVED: fieldBuilder.buildEdmTypeField(
          'PrintDanfeWhenAproved',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link sendDanfePdfInEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEND_DANFE_PDF_IN_EMAIL: fieldBuilder.buildEnumField(
          'SendDanfePdfInEmail',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nFeEnvironment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        N_FE_ENVIRONMENT: fieldBuilder.buildEnumField(
          'NFeEnvironment',
          EfDocEnvironmentBr,
          true
        ),
        /**
         * Static representation of the {@link fiscalEstablishmentGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nfCeEnvironment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NF_CE_ENVIRONMENT: fieldBuilder.buildEnumField(
          'NFCeEnvironment',
          EfDocEnvironmentBr,
          true
        ),
        /**
         * Static representation of the {@link emailTemplateCorrectionLetterNFe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_TEMPLATE_CORRECTION_LETTER_N_FE: fieldBuilder.buildEdmTypeField(
          'EmailTemplateCorrectionLetterNFe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validateXmlSchema} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_XML_SCHEMA: fieldBuilder.buildEdmTypeField(
          'ValidateXmlSchema',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link closedWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_WAREHOUSE: fieldBuilder.buildEnumField(
          'ClosedWarehouse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nfCeSendPdfInEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NF_CE_SEND_PDF_IN_EMAIL: fieldBuilder.buildEnumField(
          'NFCeSendPdfInEmail',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link csc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CSC: fieldBuilder.buildEdmTypeField('CSC', 'Edm.String', true),
        /**
         * Static representation of the {@link cnpj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNPJ: fieldBuilder.buildEdmTypeField('CNPJ', 'Edm.String', true),
        /**
         * Static representation of the {@link spedContribReportingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_CONTRIB_REPORTING_TYPE: fieldBuilder.buildEnumField(
          'SPEDContribReportingType',
          SpedContribReportingTypeBr,
          true
        ),
        /**
         * Static representation of the {@link ccm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CCM: fieldBuilder.buildEdmTypeField('CCM', 'Edm.String', true),
        /**
         * Static representation of the {@link fciToIntrastateEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCI_TO_INTRASTATE_ENABLED: fieldBuilder.buildEnumField(
          'FciToIntrastateEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emailTemplateCanceledNFe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_TEMPLATE_CANCELED_N_FE: fieldBuilder.buildEdmTypeField(
          'EmailTemplateCanceledNFe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nFeDigitalCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        N_FE_DIGITAL_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'NFeDigitalCertificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nfCeAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NF_CE_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'NFCeAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nFeAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        N_FE_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'NFeAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nFeVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        N_FE_VERSION: fieldBuilder.buildEnumField(
          'NFeVersion',
          EFiscalDocVersionBr,
          true
        ),
        /**
         * Static representation of the {@link efDocNFeTechNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EF_DOC_N_FE_TECH_NOTES: fieldBuilder.buildEnumField(
          'EFDocNFeTechNotes',
          EfDocNFeTechNotesBr,
          true
        ),
        /**
         * Static representation of the {@link accountantCrc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTANT_CRC: fieldBuilder.buildEdmTypeField(
          'AccountantCRC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ie} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IE: fieldBuilder.buildEdmTypeField('IE', 'Edm.String', true),
        /**
         * Static representation of the {@link fiscalEstablishmentSalesIssuerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_SALES_ISSUER_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentSalesIssuerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nire} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NIRE: fieldBuilder.buildEdmTypeField('NIRE', 'Edm.String', true),
        /**
         * Static representation of the {@link nfCeVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NF_CE_VERSION: fieldBuilder.buildEnumField(
          'NFCeVersion',
          EFiscalDocVersionBr,
          true
        ),
        /**
         * Static representation of the {@link nfCeEmailApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NF_CE_EMAIL_APPROVED: fieldBuilder.buildEdmTypeField(
          'NFCeEmailApproved',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link efDocNFe402018005V110} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EF_DOC_N_FE_402018005_V_110: fieldBuilder.buildEnumField(
          'EFDocNFe402018005v110',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'AddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountantCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTANT_CPF: fieldBuilder.buildEdmTypeField(
          'AccountantCPF',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalEstablishments)
      };
    }

    return this._schema;
  }
}
