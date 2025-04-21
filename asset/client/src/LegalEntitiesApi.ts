/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalEntities } from './LegalEntities';
import { LegalEntitiesRequestBuilder } from './LegalEntitiesRequestBuilder';
import { RegulatoryEstablishmentDetailsApi } from './RegulatoryEstablishmentDetailsApi';
import { LedgerReportingCurrencyAdjustmentJournalLinesApi } from './LedgerReportingCurrencyAdjustmentJournalLinesApi';
import { LedgerJournalCdsLinesApi } from './LedgerJournalCdsLinesApi';
import { AssetLeaseLedgerJournalHeadersApi } from './AssetLeaseLedgerJournalHeadersApi';
import { LedgerJournalHeadersApi } from './LedgerJournalHeadersApi';
import { LedgerJournalHeadersCdsApi } from './LedgerJournalHeadersCdsApi';
import { LegalEntityContactsApi } from './LegalEntityContactsApi';
import { AssetLeaseLedgerJournalLinesApi } from './AssetLeaseLedgerJournalLinesApi';
import { JournalTransApi } from './JournalTransApi';
import { ProjectEmplForecastsApi } from './ProjectEmplForecastsApi';
import { ProjectExpenseForecastsApi } from './ProjectExpenseForecastsApi';
import { AllocationRuleDestinationsApi } from './AllocationRuleDestinationsApi';
import { RAssetJournalHeadersApi } from './RAssetJournalHeadersApi';
import { LedgerJournalLinesApi } from './LedgerJournalLinesApi';
import { LedgerEliminationRulesApi } from './LedgerEliminationRulesApi';
import { AssetJournalHeadersApi } from './AssetJournalHeadersApi';
import { RAssetJournalLinesApi } from './RAssetJournalLinesApi';
import { ExpenseJournalLinesApi } from './ExpenseJournalLinesApi';
import { AssetJournalV2Api } from './AssetJournalV2Api';
import { MainAccountCompaniesApi } from './MainAccountCompaniesApi';
import { AssetJournalLinesApi } from './AssetJournalLinesApi';
import { LedgerAccountAliasesApi } from './LedgerAccountAliasesApi';
import { ProjectFeeForecastsApi } from './ProjectFeeForecastsApi';
import { LedgerReportingCurrencyAdjustmentJournalHeadersApi } from './LedgerReportingCurrencyAdjustmentJournalHeadersApi';
import { VatNumTablesApi } from './VatNumTablesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { LegalNatureIt } from './LegalNatureIt';
import { CompanyTypeMx } from './CompanyTypeMx';
import { SysLocalizationCountryRegionCode } from './SysLocalizationCountryRegionCode';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LegalEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LegalEntities<DeSerializersT>, DeSerializersT>
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
  ): LegalEntitiesApi<DeSerializersT> {
    return new LegalEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link establishmentDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESTABLISHMENT_DETAILS: OneToManyLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalCdsLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_CDS_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omLegalEntityLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_LEGAL_ENTITY_LEGAL_ENTITY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeaderCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER_CDS: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersCdsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link legalEntityContacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_CONTACTS: OneToManyLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LegalEntityContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationRuleDestination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_DESTINATION: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AllocationRuleDestinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      RAssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineEntityOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerEliminationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ELIMINATION_RULE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerEliminationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      RAssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_V_2_ENTITY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetJournalV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      MainAccountCompaniesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxVatNumsForImportVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_VAT_NUMS_FOR_IMPORT_VAT_NUM: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      VatNumTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxVatNumsForVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_VAT_NUMS_FOR_VAT_NUM: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      VatNumTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RegulatoryEstablishmentDetailsApi<DeSerializersT>,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>,
      LedgerJournalCdsLinesApi<DeSerializersT>,
      LedgerJournalCdsLinesApi<DeSerializersT>,
      LedgerJournalCdsLinesApi<DeSerializersT>,
      AssetLeaseLedgerJournalHeadersApi<DeSerializersT>,
      LedgerJournalHeadersApi<DeSerializersT>,
      LedgerJournalHeadersCdsApi<DeSerializersT>,
      LegalEntityContactsApi<DeSerializersT>,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>,
      JournalTransApi<DeSerializersT>,
      ProjectEmplForecastsApi<DeSerializersT>,
      ProjectExpenseForecastsApi<DeSerializersT>,
      AllocationRuleDestinationsApi<DeSerializersT>,
      RAssetJournalHeadersApi<DeSerializersT>,
      LedgerJournalLinesApi<DeSerializersT>,
      LedgerJournalLinesApi<DeSerializersT>,
      LedgerJournalLinesApi<DeSerializersT>,
      LedgerEliminationRulesApi<DeSerializersT>,
      AssetJournalHeadersApi<DeSerializersT>,
      RAssetJournalLinesApi<DeSerializersT>,
      ExpenseJournalLinesApi<DeSerializersT>,
      AssetJournalV2Api<DeSerializersT>,
      MainAccountCompaniesApi<DeSerializersT>,
      AssetJournalLinesApi<DeSerializersT>,
      LedgerAccountAliasesApi<DeSerializersT>,
      ProjectFeeForecastsApi<DeSerializersT>,
      LedgerReportingCurrencyAdjustmentJournalHeadersApi<DeSerializersT>,
      VatNumTablesApi<DeSerializersT>,
      VatNumTablesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ESTABLISHMENT_DETAILS: new OneToManyLink(
        'EstablishmentDetails',
        this,
        linkedApis[0]
      ),
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_COMPANY:
        new OneToOneLink(
          'LedgerReportingCurrencyAdjustmentJournalLineCompany',
          this,
          linkedApis[1]
        ),
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE: new OneToOneLink(
        'LedgerReportingCurrencyAdjustmentJournalLine',
        this,
        linkedApis[2]
      ),
      LEDGER_JOURNAL_LINE_CDS_COMPANY: new OneToOneLink(
        'LedgerJournalLineCDSCompany',
        this,
        linkedApis[3]
      ),
      LEDGER_JOURNAL_LINE_CDS_OFFSET_COMPANY: new OneToOneLink(
        'LedgerJournalLineCDSOffsetCompany',
        this,
        linkedApis[4]
      ),
      LEDGER_JOURNAL_CDS_LINE: new OneToOneLink(
        'LedgerJournalCDSLine',
        this,
        linkedApis[5]
      ),
      OM_LEGAL_ENTITY_LEGAL_ENTITY: new OneToOneLink(
        'OMLegalEntityLegalEntity',
        this,
        linkedApis[6]
      ),
      LEDGER_JOURNAL_HEADER: new OneToOneLink(
        'LedgerJournalHeader',
        this,
        linkedApis[7]
      ),
      LEDGER_JOURNAL_HEADER_CDS: new OneToOneLink(
        'LedgerJournalHeaderCDS',
        this,
        linkedApis[8]
      ),
      LEGAL_ENTITY_CONTACTS: new OneToManyLink(
        'LegalEntityContacts',
        this,
        linkedApis[9]
      ),
      LEDGER_JOURNAL_LINE_COMPANY: new OneToOneLink(
        'LedgerJournalLineCompany',
        this,
        linkedApis[10]
      ),
      LEDGER_JOURNAL_LINE_OFFSET_COMPANY: new OneToOneLink(
        'LedgerJournalLineOffsetCompany',
        this,
        linkedApis[11]
      ),
      JOURNAL_TRANS: new OneToOneLink('JournalTrans', this, linkedApis[12]),
      PROJECT_EMPL_FORECAST: new OneToOneLink(
        'ProjectEmplForecast',
        this,
        linkedApis[13]
      ),
      PROJECT_EXPENSE_FORECAST: new OneToOneLink(
        'ProjectExpenseForecast',
        this,
        linkedApis[14]
      ),
      ALLOCATION_RULE_DESTINATION: new OneToOneLink(
        'AllocationRuleDestination',
        this,
        linkedApis[15]
      ),
      R_ASSET_JOURNAL_HEADER: new OneToOneLink(
        'RAssetJournalHeader',
        this,
        linkedApis[16]
      ),
      LEDGER_JOURNAL_LINE_ENTITY_COMPANY: new OneToOneLink(
        'LedgerJournalLineEntityCompany',
        this,
        linkedApis[17]
      ),
      LEDGER_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: new OneToOneLink(
        'LedgerJournalLineEntityOffsetCompany',
        this,
        linkedApis[18]
      ),
      LEDGER_JOURNAL_LINE: new OneToOneLink(
        'LedgerJournalLine',
        this,
        linkedApis[19]
      ),
      LEDGER_ELIMINATION_RULE: new OneToOneLink(
        'LedgerEliminationRule',
        this,
        linkedApis[20]
      ),
      ASSET_JOURNAL_HEADER: new OneToOneLink(
        'AssetJournalHeader',
        this,
        linkedApis[21]
      ),
      R_ASSET_JOURNAL_LINE: new OneToOneLink(
        'RAssetJournalLine',
        this,
        linkedApis[22]
      ),
      EXPENSE_JOURNAL_LINE: new OneToOneLink(
        'ExpenseJournalLine',
        this,
        linkedApis[23]
      ),
      ASSET_JOURNAL_V_2_ENTITY: new OneToOneLink(
        'AssetJournalV2Entity',
        this,
        linkedApis[24]
      ),
      MAIN_ACCOUNT_COMPANY: new OneToOneLink(
        'MainAccountCompany',
        this,
        linkedApis[25]
      ),
      ASSET_JOURNAL_LINE: new OneToOneLink(
        'AssetJournalLine',
        this,
        linkedApis[26]
      ),
      LEDGER_ACCOUNT_ALIAS: new OneToOneLink(
        'LedgerAccountAlias',
        this,
        linkedApis[27]
      ),
      PROJECT_FEE_FORECAST: new OneToOneLink(
        'ProjectFeeForecast',
        this,
        linkedApis[28]
      ),
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_HEADER: new OneToOneLink(
        'LedgerReportingCurrencyAdjustmentJournalHeader',
        this,
        linkedApis[29]
      ),
      TAX_VAT_NUMS_FOR_IMPORT_VAT_NUM: new OneToOneLink(
        'TaxVATNumsForImportVATNum',
        this,
        linkedApis[30]
      ),
      TAX_VAT_NUMS_FOR_VAT_NUM: new OneToOneLink(
        'TaxVATNumsForVATNum',
        this,
        linkedApis[31]
      )
    };
    return this;
  }

  entityConstructor = LegalEntities;

  requestBuilder(): LegalEntitiesRequestBuilder<DeSerializersT> {
    return new LegalEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LegalEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LegalEntities<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LegalEntities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LegalEntities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LegalEntities, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_FOR_FINANCIAL_CONSOLIDATION_PROCESS: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIAL_CAPITAL_INVESTMENT: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_LEGAL_REPRESENTATIVE_NAME: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_REPRESENTATIVE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_REPRESENTATIVE_NAME: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_COUNTRY: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOFTWARE_IDENTIFICATION_CODE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_IM: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAICS: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADER_NUMBER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_IS_PRIVATE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TIME_ZONE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DNB_ROUTING_NUMBER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTS_OFFICE_REFERENCE_NUMBER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_OF_BUSINESS: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRINT_INNKPP_IN_ADDRESS: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUC: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURP_LEGAL_REPRESENTATIVE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CODE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURP_NUMBER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_EXTENSION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_NAME: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_NATURE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      LegalNatureIt,
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_LEGAL_REPRESENTATIVE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_CONTACT_URL_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_PERSONNEL: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONAL_REGISTRY_NUMBER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FI_CREDITOR_ID: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TYPE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      CompanyTypeMx,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_ENTERPRISE_REGISTER: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_FOLDER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_IN_CHARGE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_DESCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_FORM: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONAL_CLASSIFICATION_OF_COMPANY_ECONOMIC_ACTIVITY: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_CORRECTIVE_INVOICE_STARTING_DATE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUSINESS_ITEM: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_FOR_FINANCIAL_ELIMINATION_PROCESS: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATE_INSCRIPTION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_PURPOSE: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFIED_TAX_ACCOUNTANT_NAME: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMERCE_REGISTRATION: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_CORRECTIVE_INVOICE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCALIZATION_COUNTRY_REGION_CODE: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      SysLocalizationCountryRegionCode,
      true,
      true
    >;
    VAT_ON_CUSTOMER_BEHALF: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_MARGIN_SCHEME: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_REFUND: EnumField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IMPORT_VAT_NUM: OrderableEdmTypeField<
      LegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link establishmentDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESTABLISHMENT_DETAILS: OneToManyLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalCdsLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_CDS_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omLegalEntityLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_LEGAL_ENTITY_LEGAL_ENTITY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeaderCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER_CDS: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersCdsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link legalEntityContacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_CONTACTS: OneToManyLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LegalEntityContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationRuleDestination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_DESTINATION: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AllocationRuleDestinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      RAssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineEntityCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineEntityOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_OFFSET_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerEliminationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ELIMINATION_RULE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerEliminationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      RAssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_V_2_ENTITY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetJournalV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_COMPANY: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      MainAccountCompaniesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_HEADER: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxVatNumsForImportVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_VAT_NUMS_FOR_IMPORT_VAT_NUM: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      VatNumTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxVatNumsForVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_VAT_NUMS_FOR_VAT_NUM: OneToOneLink<
      LegalEntities<DeSerializersT>,
      DeSerializersT,
      VatNumTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LegalEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
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
         * Static representation of the {@link useForFinancialConsolidationProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FOR_FINANCIAL_CONSOLIDATION_PROCESS: fieldBuilder.buildEnumField(
          'UseForFinancialConsolidationProcess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link initialCapitalInvestment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_CAPITAL_INVESTMENT: fieldBuilder.buildEdmTypeField(
          'InitialCapitalInvestment',
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
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
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
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link externalLegalRepresentativeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_LEGAL_REPRESENTATIVE_NAME: fieldBuilder.buildEdmTypeField(
          'ExternalLegalRepresentativeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyRepresentative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_REPRESENTATIVE: fieldBuilder.buildEdmTypeField(
          'CompanyRepresentative',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalRepresentativeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_REPRESENTATIVE_NAME: fieldBuilder.buildEdmTypeField(
          'LegalRepresentativeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_COUNTRY: fieldBuilder.buildEdmTypeField(
          'CompanyCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link softwareIdentificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOFTWARE_IDENTIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'SoftwareIdentificationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailIsIm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_IS_IM: fieldBuilder.buildEnumField(
          'PrimaryContactEmailIsIM',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactFacebookIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhonePurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhonePurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFax',
          'Edm.String',
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
        /**
         * Static representation of the {@link naics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAICS: fieldBuilder.buildEdmTypeField('NAICS', 'Edm.String', true),
        /**
         * Static representation of the {@link traderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TraderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactTwitterIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_MOBILE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsMobile',
          NoYes,
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
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link dnbRoutingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DNB_ROUTING_NUMBER: fieldBuilder.buildEdmTypeField(
          'DNBRoutingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountsOfficeReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTS_OFFICE_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountsOfficeReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelex',
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
         * Static representation of the {@link startDateOfBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_OF_BUSINESS: fieldBuilder.buildEdmTypeField(
          'StartDateOfBusiness',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link printInnkppInAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_INNKPP_IN_ADDRESS: fieldBuilder.buildEnumField(
          'PrintINNKPPInAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC: fieldBuilder.buildEdmTypeField('Rfc', 'Edm.String', true),
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
         * Static representation of the {@link cuc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUC: fieldBuilder.buildEdmTypeField('CUC', 'Edm.String', true),
        /**
         * Static representation of the {@link curpLegalRepresentative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURP_LEGAL_REPRESENTATIVE: fieldBuilder.buildEdmTypeField(
          'CurpLegalRepresentative',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInPurpose',
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
         * Static representation of the {@link primaryContactTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link curpNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURP_NUMBER: fieldBuilder.buildEdmTypeField(
          'CurpNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneticName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticName',
          'Edm.String',
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
         * Static representation of the {@link legalNature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_NATURE: fieldBuilder.buildEnumField(
          'LegalNature',
          LegalNatureIt,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfcLegalRepresentative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_LEGAL_REPRESENTATIVE: fieldBuilder.buildEdmTypeField(
          'RfcLegalRepresentative',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLocationId',
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
         * Static representation of the {@link primaryContactUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLPurpose',
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
         * Static representation of the {@link accountingPersonnel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_PERSONNEL: fieldBuilder.buildEdmTypeField(
          'AccountingPersonnel',
          'Edm.String',
          true
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
         * Static representation of the {@link nationalRegistryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_REGISTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'NationalRegistryNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiCreditorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FI_CREDITOR_ID: fieldBuilder.buildEdmTypeField(
          'FICreditorID',
          'Edm.String',
          true
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
         * Static representation of the {@link companyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TYPE: fieldBuilder.buildEnumField(
          'CompanyType',
          CompanyTypeMx,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link printEnterpriseRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_ENTERPRISE_REGISTER: fieldBuilder.buildEnumField(
          'PrintEnterpriseRegister',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebook',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportFolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_FOLDER: fieldBuilder.buildEdmTypeField(
          'ReportFolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personInCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_IN_CHARGE: fieldBuilder.buildEdmTypeField(
          'PersonInCharge',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_FORM: fieldBuilder.buildEdmTypeField(
          'LegalForm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationalClassificationOfCompanyEconomicActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_CLASSIFICATION_OF_COMPANY_ECONOMIC_ACTIVITY:
          fieldBuilder.buildEdmTypeField(
            'NationalClassificationOfCompanyEconomicActivity',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link primaryContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printCorrectiveInvoiceStartingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CORRECTIVE_INVOICE_STARTING_DATE: fieldBuilder.buildEdmTypeField(
          'PrintCorrectiveInvoiceStartingDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link businessItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_ITEM: fieldBuilder.buildEdmTypeField(
          'BusinessItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useForFinancialEliminationProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FOR_FINANCIAL_ELIMINATION_PROCESS: fieldBuilder.buildEnumField(
          'UseForFinancialEliminationProcess',
          NoYes,
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
         * Static representation of the {@link primaryContactLinkedInIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactLinkedInIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certifiedTaxAccountantName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFIED_TAX_ACCOUNTANT_NAME: fieldBuilder.buildEdmTypeField(
          'CertifiedTaxAccountantName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commerceRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCE_REGISTRATION: fieldBuilder.buildEdmTypeField(
          'CommerceRegistration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printCorrectiveInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CORRECTIVE_INVOICE: fieldBuilder.buildEnumField(
          'PrintCorrectiveInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link localizationCountryRegionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALIZATION_COUNTRY_REGION_CODE: fieldBuilder.buildEnumField(
          'LocalizationCountryRegionCode',
          SysLocalizationCountryRegionCode,
          true
        ),
        /**
         * Static representation of the {@link vatOnCustomerBehalf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_ON_CUSTOMER_BEHALF: fieldBuilder.buildEnumField(
          'VATOnCustomerBehalf',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', true),
        /**
         * Static representation of the {@link profitMarginScheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_MARGIN_SCHEME: fieldBuilder.buildEnumField(
          'ProfitMarginScheme',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vatRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REFUND: fieldBuilder.buildEnumField('VATRefund', NoYes, true),
        /**
         * Static representation of the {@link importVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_VAT_NUM: fieldBuilder.buildEdmTypeField(
          'ImportVATNum',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LegalEntities)
      };
    }

    return this._schema;
  }
}
