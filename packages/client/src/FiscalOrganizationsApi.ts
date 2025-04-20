/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalOrganizations } from './FiscalOrganizations';
import { FiscalOrganizationsRequestBuilder } from './FiscalOrganizationsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { FbContribAssessmentContributionTypeBr } from './FbContribAssessmentContributionTypeBr';
import { FbContribLegalEntityTypeBr } from './FbContribLegalEntityTypeBr';
import { FbContribActivityTypeBr } from './FbContribActivityTypeBr';
import { FbCompanyLinkToUnionBr } from './FbCompanyLinkToUnionBr';
import { FbCompanyTypeBr } from './FbCompanyTypeBr';
import { FbContribAssessmentCriteriaBr } from './FbContribAssessmentCriteriaBr';
import { FbscpTypeBr } from './FbscpTypeBr';
import { FbContribVersionBr } from './FbContribVersionBr';
import { FbContribCreditAllocationMethodBr } from './FbContribCreditAllocationMethodBr';
import { FbContribAssessmentRegimenBr } from './FbContribAssessmentRegimenBr';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FiscalOrganizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalOrganizations<DeSerializersT>, DeSerializersT>
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
  ): FiscalOrganizationsApi<DeSerializersT> {
    return new FiscalOrganizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FiscalOrganizations<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FiscalOrganizations;

  requestBuilder(): FiscalOrganizationsRequestBuilder<DeSerializersT> {
    return new FiscalOrganizationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalOrganizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalOrganizations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalOrganizations<DeSerializersT>,
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
    typeof FiscalOrganizations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalOrganizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOT_FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_OF_ASSESSMENT_CONTRIBUTION: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbContribAssessmentContributionTypeBr,
      true,
      true
    >;
    SALES_TAX_PIS_EXPENSE_DISPLAY_VALUE: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_TYPE: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbContribLegalEntityTypeBr,
      true,
      true
    >;
    TYPE_OF_ACTIVITY: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbContribActivityTypeBr,
      true,
      true
    >;
    COMPANY_LINK_TO_UNION: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbCompanyLinkToUnionBr,
      true,
      true
    >;
    COMPANY_TYPE: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbCompanyTypeBr,
      true,
      true
    >;
    BOOKING_AND_ASSESSMENT_CRITERIA: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbContribAssessmentCriteriaBr,
      true,
      true
    >;
    SCP_PARTICIPATION: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbscpTypeBr,
      true,
      true
    >;
    CONSTITUTION_ARCHIVE_DATE: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCP_CODE: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_NATURE: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT_VERSION: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbContribVersionBr,
      true,
      true
    >;
    SALES_TAX_COFINS_EXPENSE_DISPLAY_VALUE: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONVERSION_ARCHIVE_DATE: OrderableEdmTypeField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_ALLOCATION_METHOD: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbContribCreditAllocationMethodBr,
      true,
      true
    >;
    ASSESSMENT_REGIMEN: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      FbContribAssessmentRegimenBr,
      true,
      true
    >;
    LARGE_COMPANY: EnumField<
      FiscalOrganizations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FiscalOrganizations<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalOrganizations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link rootFiscalEstablishmentDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'RootFiscalEstablishmentDataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rootFiscalEstablishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_FISCAL_ESTABLISHMENT: fieldBuilder.buildEdmTypeField(
          'RootFiscalEstablishment',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link typeOfAssessmentContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_ASSESSMENT_CONTRIBUTION: fieldBuilder.buildEnumField(
          'TypeOfAssessmentContribution',
          FbContribAssessmentContributionTypeBr,
          true
        ),
        /**
         * Static representation of the {@link salesTaxPisExpenseDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_PIS_EXPENSE_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SalesTaxPISExpenseDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_TYPE: fieldBuilder.buildEnumField(
          'LegalEntityType',
          FbContribLegalEntityTypeBr,
          true
        ),
        /**
         * Static representation of the {@link typeOfActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_ACTIVITY: fieldBuilder.buildEnumField(
          'TypeOfActivity',
          FbContribActivityTypeBr,
          true
        ),
        /**
         * Static representation of the {@link companyLinkToUnion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_LINK_TO_UNION: fieldBuilder.buildEnumField(
          'CompanyLinkToUnion',
          FbCompanyLinkToUnionBr,
          true
        ),
        /**
         * Static representation of the {@link companyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TYPE: fieldBuilder.buildEnumField(
          'CompanyType',
          FbCompanyTypeBr,
          true
        ),
        /**
         * Static representation of the {@link bookingAndAssessmentCriteria} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOKING_AND_ASSESSMENT_CRITERIA: fieldBuilder.buildEnumField(
          'BookingAndAssessmentCriteria',
          FbContribAssessmentCriteriaBr,
          true
        ),
        /**
         * Static representation of the {@link scpParticipation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCP_PARTICIPATION: fieldBuilder.buildEnumField(
          'SCPParticipation',
          FbscpTypeBr,
          true
        ),
        /**
         * Static representation of the {@link constitutionArchiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTITUTION_ARCHIVE_DATE: fieldBuilder.buildEdmTypeField(
          'ConstitutionArchiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCP_CODE: fieldBuilder.buildEdmTypeField('SCPCode', 'Edm.String', true),
        /**
         * Static representation of the {@link legalNature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_NATURE: fieldBuilder.buildEdmTypeField(
          'LegalNature',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layoutVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_VERSION: fieldBuilder.buildEnumField(
          'LayoutVersion',
          FbContribVersionBr,
          true
        ),
        /**
         * Static representation of the {@link salesTaxCofinsExpenseDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_COFINS_EXPENSE_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCOFINSExpenseDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conversionArchiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVERSION_ARCHIVE_DATE: fieldBuilder.buildEdmTypeField(
          'ConversionArchiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link creditAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'CreditAllocationMethod',
          FbContribCreditAllocationMethodBr,
          true
        ),
        /**
         * Static representation of the {@link assessmentRegimen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSMENT_REGIMEN: fieldBuilder.buildEnumField(
          'AssessmentRegimen',
          FbContribAssessmentRegimenBr,
          true
        ),
        /**
         * Static representation of the {@link largeCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LARGE_COMPANY: fieldBuilder.buildEnumField('LargeCompany', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalOrganizations)
      };
    }

    return this._schema;
  }
}
