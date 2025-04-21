/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HumanResourcesSharedParameters } from './HumanResourcesSharedParameters';
import { HumanResourcesSharedParametersRequestBuilder } from './HumanResourcesSharedParametersRequestBuilder';
import { IdentificationTypesApi } from './IdentificationTypesApi';
import { NoYes } from './NoYes';
import { HcmPositionAvailableForAssignment } from './HcmPositionAvailableForAssignment';
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
export class HumanResourcesSharedParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<HumanResourcesSharedParameters<DeSerializersT>, DeSerializersT>
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
  ): HumanResourcesSharedParametersApi<DeSerializersT> {
    return new HumanResourcesSharedParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link personalIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link socialSecurityNumberIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOCIAL_SECURITY_NUMBER_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alienIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALIEN_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nationalIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATIONAL_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      IdentificationTypesApi<DeSerializersT>,
      IdentificationTypesApi<DeSerializersT>,
      IdentificationTypesApi<DeSerializersT>,
      IdentificationTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSONAL_IDENTIFICATION_TYPE: new OneToOneLink(
        'PersonalIdentificationType',
        this,
        linkedApis[0]
      ),
      SOCIAL_SECURITY_NUMBER_IDENTIFICATION_TYPE: new OneToOneLink(
        'SocialSecurityNumberIdentificationType',
        this,
        linkedApis[1]
      ),
      ALIEN_IDENTIFICATION_TYPE: new OneToOneLink(
        'AlienIdentificationType',
        this,
        linkedApis[2]
      ),
      NATIONAL_IDENTIFICATION_TYPE: new OneToOneLink(
        'NationalIdentificationType',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = HumanResourcesSharedParameters;

  requestBuilder(): HumanResourcesSharedParametersRequestBuilder<DeSerializersT> {
    return new HumanResourcesSharedParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    HumanResourcesSharedParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HumanResourcesSharedParameters<DeSerializersT>,
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
    typeof HumanResourcesSharedParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HumanResourcesSharedParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_COMPLETED_POSITION_ACTION_DELETION: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_DEPARTMENT_USAGE_BEFORE_DELETING: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSONNEL_ACTION_WORKER: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRACK_ADA: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSONAL_IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_COMPLETED_WORKER_ACTION_DELETION: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NATIONAL_IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOCIAL_SECURITY_NUMBER_IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERIFY_I_9_EMPL_ELIGIBILITY: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALIEN_IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_AVAILABLE_FOR_ASSIGNMENT_DEFAULT: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      HcmPositionAvailableForAssignment,
      true,
      true
    >;
    PERSONNEL_ACTION_POSITION: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPARTMENT_MANDATORY_FOR_POSITION: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSN_JOB_DESCRIPTION_LOCK_ON_POSITION_FORECAST: EnumField<
      HumanResourcesSharedParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link socialSecurityNumberIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOCIAL_SECURITY_NUMBER_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alienIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALIEN_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nationalIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATIONAL_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesSharedParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<HumanResourcesSharedParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link allowCompletedPositionActionDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_COMPLETED_POSITION_ACTION_DELETION: fieldBuilder.buildEnumField(
          'AllowCompletedPositionActionDeletion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkDepartmentUsageBeforeDeleting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_DEPARTMENT_USAGE_BEFORE_DELETING: fieldBuilder.buildEnumField(
          'CheckDepartmentUsageBeforeDeleting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personnelActionWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_ACTION_WORKER: fieldBuilder.buildEnumField(
          'PersonnelActionWorker',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link trackAda} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACK_ADA: fieldBuilder.buildEnumField('TrackADA', NoYes, true),
        /**
         * Static representation of the {@link personalIdentificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PersonalIdentificationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowCompletedWorkerActionDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_COMPLETED_WORKER_ACTION_DELETION: fieldBuilder.buildEnumField(
          'AllowCompletedWorkerActionDeletion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nationalIdentificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'NationalIdentificationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link socialSecurityNumberIdentificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOCIAL_SECURITY_NUMBER_IDENTIFICATION_TYPE_ID:
          fieldBuilder.buildEdmTypeField(
            'SocialSecurityNumberIdentificationTypeId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link verifyI9EmplEligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERIFY_I_9_EMPL_ELIGIBILITY: fieldBuilder.buildEnumField(
          'VerifyI9EmplEligibility',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alienIdentificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIEN_IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'AlienIdentificationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionAvailableForAssignmentDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_AVAILABLE_FOR_ASSIGNMENT_DEFAULT: fieldBuilder.buildEnumField(
          'PositionAvailableForAssignmentDefault',
          HcmPositionAvailableForAssignment,
          true
        ),
        /**
         * Static representation of the {@link personnelActionPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_ACTION_POSITION: fieldBuilder.buildEnumField(
          'PersonnelActionPosition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link departmentMandatoryForPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_MANDATORY_FOR_POSITION: fieldBuilder.buildEnumField(
          'DepartmentMandatoryForPosition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psnJobDescriptionLockOnPositionForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_JOB_DESCRIPTION_LOCK_ON_POSITION_FORECAST:
          fieldBuilder.buildEnumField(
            'PSNJobDescriptionLockOnPositionForecast',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HumanResourcesSharedParameters)
      };
    }

    return this._schema;
  }
}
