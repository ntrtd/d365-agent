/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CaseCategoryHierarchyDetails } from './CaseCategoryHierarchyDetails';
import { CaseCategoryHierarchyDetailsRequestBuilder } from './CaseCategoryHierarchyDetailsRequestBuilder';
import { DepartmentsApi } from './DepartmentsApi';
import { ServiceLevelAgreementsApi } from './ServiceLevelAgreementsApi';
import { CaseCategoryType } from './CaseCategoryType';
import { SmmActivityCategory } from './SmmActivityCategory';
import { NoYes } from './NoYes';
import { SmmCreateActivity } from './SmmCreateActivity';
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
export class CaseCategoryHierarchyDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CaseCategoryHierarchyDetails<DeSerializersT>, DeSerializersT>
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
  ): CaseCategoryHierarchyDetailsApi<DeSerializersT> {
    return new CaseCategoryHierarchyDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link castCategoryHierarchyDetailParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAST_CATEGORY_HIERARCHY_DETAIL_PARENT: OneToOneLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link castCategoryHierarchyDetailParents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAST_CATEGORY_HIERARCHY_DETAIL_PARENTS: OneToManyLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link caseCategoryHierarchyDetailEntityDepartment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_ENTITY_DEPARTMENT: OneToOneLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link caseCategoryHierarchyDetailServiceLevelAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_SERVICE_LEVEL_AGREEMENT: OneToOneLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CaseCategoryHierarchyDetailsApi<DeSerializersT>,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      ServiceLevelAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CAST_CATEGORY_HIERARCHY_DETAIL_PARENT: new OneToOneLink(
        'CastCategoryHierarchyDetailParent',
        this,
        linkedApis[0]
      ),
      CAST_CATEGORY_HIERARCHY_DETAIL_PARENTS: new OneToManyLink(
        'CastCategoryHierarchyDetailParents',
        this,
        linkedApis[1]
      ),
      CASE_CATEGORY_HIERARCHY_DETAIL_ENTITY_DEPARTMENT: new OneToOneLink(
        'CaseCategoryHierarchyDetailEntityDepartment',
        this,
        linkedApis[2]
      ),
      CASE_CATEGORY_HIERARCHY_DETAIL_SERVICE_LEVEL_AGREEMENT: new OneToOneLink(
        'CaseCategoryHierarchyDetailServiceLevelAgreement',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = CaseCategoryHierarchyDetails;

  requestBuilder(): CaseCategoryHierarchyDetailsRequestBuilder<DeSerializersT> {
    return new CaseCategoryHierarchyDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CaseCategoryHierarchyDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CaseCategoryHierarchyDetails<DeSerializersT>,
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
    typeof CaseCategoryHierarchyDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CaseCategoryHierarchyDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_TYPE: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      CaseCategoryType,
      true,
      true
    >;
    CASE_CATEGORY: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_FOLLOW_UP_CATEGORY: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      SmmActivityCategory,
      true,
      true
    >;
    PROCESS: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_ID: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ACTIVITY_PHASE: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_CASE_CATEGORY_NAME: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FOLLOW_UP_PHASE: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FOLLOW_UP_TYPE: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACK_STATUS: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_FOLLOW_UP_PURPOSE: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ACTIVITY_CATEGORY: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      SmmActivityCategory,
      true,
      true
    >;
    TRACK_ACTIVITIES: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRACK_STAGE: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_ACTIVITY_FOR_FOLLOW_UP: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      SmmCreateActivity,
      true,
      true
    >;
    DEFAULT_ACTIVITY_TYPE: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_ACTIVITY_FOR_CASE: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      SmmCreateActivity,
      true,
      true
    >;
    DEFAULT_OWNER_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_OWNER_DEPARTMENT_NUMBER: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ACTIVITY_PURPOSE: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_CASE_CATEGORY_TYPE: EnumField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      CaseCategoryType,
      true,
      true
    >;
    QUESTIONNAIRE_ID: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LEVEL_AGREEMENT_ID: OrderableEdmTypeField<
      CaseCategoryHierarchyDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link castCategoryHierarchyDetailParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAST_CATEGORY_HIERARCHY_DETAIL_PARENT: OneToOneLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link castCategoryHierarchyDetailParents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAST_CATEGORY_HIERARCHY_DETAIL_PARENTS: OneToManyLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      CaseCategoryHierarchyDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link caseCategoryHierarchyDetailEntityDepartment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_ENTITY_DEPARTMENT: OneToOneLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link caseCategoryHierarchyDetailServiceLevelAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASE_CATEGORY_HIERARCHY_DETAIL_SERVICE_LEVEL_AGREEMENT: OneToOneLink<
      CaseCategoryHierarchyDetails<DeSerializersT>,
      DeSerializersT,
      ServiceLevelAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CaseCategoryHierarchyDetails<DeSerializers>>;
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
         * Static representation of the {@link categoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_TYPE: fieldBuilder.buildEnumField(
          'CategoryType',
          CaseCategoryType,
          true
        ),
        /**
         * Static representation of the {@link caseCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'CaseCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultFollowUpCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FOLLOW_UP_CATEGORY: fieldBuilder.buildEnumField(
          'DefaultFollowUpCategory',
          SmmActivityCategory,
          true
        ),
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', true),
        /**
         * Static representation of the {@link emailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ID: fieldBuilder.buildEdmTypeField('EmailId', 'Edm.String', true),
        /**
         * Static representation of the {@link defaultActivityPhase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACTIVITY_PHASE: fieldBuilder.buildEdmTypeField(
          'DefaultActivityPhase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentCaseCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CASE_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentCaseCategoryName',
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
         * Static representation of the {@link defaultFollowUpPhase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FOLLOW_UP_PHASE: fieldBuilder.buildEdmTypeField(
          'DefaultFollowUpPhase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultFollowUpType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FOLLOW_UP_TYPE: fieldBuilder.buildEdmTypeField(
          'DefaultFollowUpType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trackStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACK_STATUS: fieldBuilder.buildEnumField('TrackStatus', NoYes, true),
        /**
         * Static representation of the {@link defaultFollowUpPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FOLLOW_UP_PURPOSE: fieldBuilder.buildEdmTypeField(
          'DefaultFollowUpPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultActivityCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACTIVITY_CATEGORY: fieldBuilder.buildEnumField(
          'DefaultActivityCategory',
          SmmActivityCategory,
          true
        ),
        /**
         * Static representation of the {@link trackActivities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACK_ACTIVITIES: fieldBuilder.buildEnumField(
          'TrackActivities',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link trackStage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACK_STAGE: fieldBuilder.buildEnumField('TrackStage', NoYes, true),
        /**
         * Static representation of the {@link createActivityForFollowUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ACTIVITY_FOR_FOLLOW_UP: fieldBuilder.buildEnumField(
          'CreateActivityForFollowUp',
          SmmCreateActivity,
          true
        ),
        /**
         * Static representation of the {@link defaultActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'DefaultActivityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createActivityForCase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ACTIVITY_FOR_CASE: fieldBuilder.buildEnumField(
          'CreateActivityForCase',
          SmmCreateActivity,
          true
        ),
        /**
         * Static representation of the {@link defaultOwnerWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OWNER_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultOwnerWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultOwnerDepartmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OWNER_DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultOwnerDepartmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultActivityPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACTIVITY_PURPOSE: fieldBuilder.buildEdmTypeField(
          'DefaultActivityPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentCaseCategoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CASE_CATEGORY_TYPE: fieldBuilder.buildEnumField(
          'ParentCaseCategoryType',
          CaseCategoryType,
          true
        ),
        /**
         * Static representation of the {@link questionnaireId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_ID: fieldBuilder.buildEdmTypeField(
          'QuestionnaireId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceLevelAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ServiceLevelAgreementId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CaseCategoryHierarchyDetails)
      };
    }

    return this._schema;
  }
}
