/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Departments } from './Departments';
import { DepartmentsRequestBuilder } from './DepartmentsRequestBuilder';
import { PayIntV1HcmPositionDetailsApi } from './PayIntV1HcmPositionDetailsApi';
import { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { RecruitingRequestPositionsApi } from './RecruitingRequestPositionsApi';
import { PositionDetailsApi } from './PositionDetailsApi';
import { CompensationFixedIncreaseBudgetsApi } from './CompensationFixedIncreaseBudgetsApi';
import { RecruitingProjectsApi } from './RecruitingProjectsApi';
import { CompensationPayPerformanceAllocationsApi } from './CompensationPayPerformanceAllocationsApi';
import { CaseCategoryHierarchyDetailsApi } from './CaseCategoryHierarchyDetailsApi';
import { PositionsApi } from './PositionsApi';
import { ApplicationsApi } from './ApplicationsApi';
import { PositionsV2Api } from './PositionsV2Api';
import { NoYes } from './NoYes';
import { OmOperatingUnitType } from './OmOperatingUnitType';
import { OmInternalOrganizationType } from './OmInternalOrganizationType';
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
export class DepartmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Departments<DeSerializersT>, DeSerializersT>
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
  ): DepartmentsApi<DeSerializersT> {
    return new DepartmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingProjects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_PROJECTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      RecruitingProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link caseCategoryHierarchyDetailEntityDepartments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_ENTITY_DEPARTMENTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayIntV1HcmPositionDetailsApi<DeSerializersT>,
      CompensationEligibilityRulesApi<DeSerializersT>,
      RecruitingRequestPositionsApi<DeSerializersT>,
      PositionDetailsApi<DeSerializersT>,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>,
      RecruitingProjectsApi<DeSerializersT>,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      ApplicationsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_INT_POSITION_DETAILS: new OneToManyLink(
        'PayIntPositionDetails',
        this,
        linkedApis[0]
      ),
      COMPENSATION_ELIGIBILITY_RULES: new OneToManyLink(
        'CompensationEligibilityRules',
        this,
        linkedApis[1]
      ),
      RECRUITING_REQUEST_POSITIONS: new OneToManyLink(
        'RecruitingRequestPositions',
        this,
        linkedApis[2]
      ),
      POSITION_DETAILS: new OneToManyLink(
        'PositionDetails',
        this,
        linkedApis[3]
      ),
      COMPENSATION_FIXED_INCREASE_BUDGETS: new OneToManyLink(
        'CompensationFixedIncreaseBudgets',
        this,
        linkedApis[4]
      ),
      RECRUITING_PROJECTS: new OneToManyLink(
        'RecruitingProjects',
        this,
        linkedApis[5]
      ),
      COMPENSATION_PAY_PERFORMANCE_ALLOCATIONS: new OneToManyLink(
        'CompensationPayPerformanceAllocations',
        this,
        linkedApis[6]
      ),
      CASE_CATEGORY_HIERARCHY_DETAIL_ENTITY_DEPARTMENTS: new OneToManyLink(
        'CaseCategoryHierarchyDetailEntityDepartments',
        this,
        linkedApis[7]
      ),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[8]),
      APPLICATIONS: new OneToManyLink('Applications', this, linkedApis[9]),
      POSITIONS_V_2: new OneToManyLink('PositionsV2', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = Departments;

  requestBuilder(): DepartmentsRequestBuilder<DeSerializersT> {
    return new DepartmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Departments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Departments<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Departments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Departments, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Departments, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: EnumField<
      Departments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: EnumField<
      Departments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_IS_PRIVATE: EnumField<
      Departments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STATE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_EXTENSION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_TYPES: EnumField<
      Departments<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_IM: EnumField<
      Departments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      Departments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEMO: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTY: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_VALID_TO: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_CONTACT_TELEX: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_TYPE: EnumField<
      Departments<DeSerializers>,
      DeSerializersT,
      OmInternalOrganizationType,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_CONTACT_URL: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestPositions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_POSITIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingProjects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_PROJECTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      RecruitingProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link caseCategoryHierarchyDetailEntityDepartments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_ENTITY_DEPARTMENTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Departments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
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
         * Static representation of the {@link primaryContactFacebookIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactFacebookIsPrivate',
          NoYes,
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
         * Static representation of the {@link primaryContactTwitterIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactTwitterIsPrivate',
          NoYes,
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
         * Static representation of the {@link primaryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCity',
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
         * Static representation of the {@link primaryContactUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLPurpose',
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
         * Static representation of the {@link primaryAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressState',
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
         * Static representation of the {@link primaryContactEmailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailDescription',
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
         * Static representation of the {@link operatingUnitTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_TYPES: fieldBuilder.buildEnumField(
          'OperatingUnitTypes',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link partyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'PartyType',
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
         * Static representation of the {@link primaryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
        /**
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
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
         * Static representation of the {@link primaryContactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneExtension',
          'Edm.String',
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
         * Static representation of the {@link primaryContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmail',
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
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
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
         * Static representation of the {@link primaryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreet',
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
         * Static representation of the {@link primaryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionISOCode',
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
         * Static representation of the {@link memo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMO: fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryAddressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCounty',
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
         * Static representation of the {@link primaryContactFaxPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressValidTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link primaryContactTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterDescription',
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
         * Static representation of the {@link primaryContactTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link primaryContactUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLDescription',
          'Edm.String',
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
         * Static representation of the {@link organizationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_TYPE: fieldBuilder.buildEnumField(
          'OrganizationType',
          OmInternalOrganizationType,
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
         * Static representation of the {@link primaryAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressValidFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link primaryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Departments)
      };
    }

    return this._schema;
  }
}
