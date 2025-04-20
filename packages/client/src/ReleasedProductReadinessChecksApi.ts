/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductReadinessChecks } from './ReleasedProductReadinessChecks';
import { ReleasedProductReadinessChecksRequestBuilder } from './ReleasedProductReadinessChecksRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { ReleasedEngineeringProductVersionsApi } from './ReleasedEngineeringProductVersionsApi';
import { ProductReadinessPolicyChecksApi } from './ProductReadinessPolicyChecksApi';
import { TeamsV2Api } from './TeamsV2Api';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { EngChgReadinessModule } from './EngChgReadinessModule';
import { NoYes } from './NoYes';
import { EngChgReadinessStatus } from './EngChgReadinessStatus';
import { KmQuestionAnswerInputType } from './KmQuestionAnswerInputType';
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
export class ReleasedProductReadinessChecksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ReleasedProductReadinessChecks<DeSerializersT>, DeSerializersT>
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
  ): ReleasedProductReadinessChecksApi<DeSerializersT> {
    return new ReleasedProductReadinessChecksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link approverPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_PERSON: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedEngineeringProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSION: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicyCheck} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECK: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_PERSON: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningTeamV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_TEAM_V_2: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeopleApi<DeSerializersT>,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>,
      ProductReadinessPolicyChecksApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      TeamsV2Api<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      APPROVER_PERSON: new OneToOneLink('ApproverPerson', this, linkedApis[0]),
      RELEASED_ENGINEERING_PRODUCT_VERSION: new OneToOneLink(
        'ReleasedEngineeringProductVersion',
        this,
        linkedApis[1]
      ),
      PRODUCT_READINESS_POLICY_CHECK: new OneToOneLink(
        'ProductReadinessPolicyCheck',
        this,
        linkedApis[2]
      ),
      OWNING_PERSON: new OneToOneLink('OwningPerson', this, linkedApis[3]),
      OWNING_TEAM_V_2: new OneToOneLink('OwningTeamV2', this, linkedApis[4]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ReleasedProductReadinessChecks;

  requestBuilder(): ReleasedProductReadinessChecksRequestBuilder<DeSerializersT> {
    return new ReleasedProductReadinessChecksRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductReadinessChecks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductReadinessChecks<DeSerializersT>,
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
    typeof ReleasedProductReadinessChecks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductReadinessChecks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_READINESS_CHECK_RECORD_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_NOTES: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_LOG: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTIONNAIRE_QUESTION_TEXT: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_READINESS_POLICY_CHECK_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_AREA: EnumField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      EngChgReadinessModule,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHECK_MANDATORY: EnumField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUESTIONNAIRE_QUESTION_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_STATUS: EnumField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      EngChgReadinessStatus,
      true,
      true
    >;
    APPROVED_DATE_TIME: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_READINESS_POLICY_NAME: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTIONNAIRE_QUESTION_INSTRUCTION: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_READINESS_POLICY_CHECK_PROCESS_AREA: EnumField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      EngChgReadinessModule,
      true,
      true
    >;
    PRODUCT_READINESS_POLICY_CHECK_NAME: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTIONNAIRE_ANSWER_COMMENT: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNING_TEAM_NAME: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTIONNAIRE_QUESTION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUESTIONNAIRE_ANSWER_TEXT: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_PRODUCT_NUMBER: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTIONNAIRE_QUESTION_INPUT_TYPE: EnumField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      KmQuestionAnswerInputType,
      true,
      true
    >;
    OWNING_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ReleasedProductReadinessChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_PERSON: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedEngineeringProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSION: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicyCheck} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY_CHECK: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPolicyChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_PERSON: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningTeamV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_TEAM_V_2: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ReleasedProductReadinessChecks<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReleasedProductReadinessChecks<DeSerializers>>;
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
         * Static representation of the {@link productReadinessCheckRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_READINESS_CHECK_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'ProductReadinessCheckRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NOTES: fieldBuilder.buildEdmTypeField(
          'CheckNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_LOG: fieldBuilder.buildEdmTypeField(
          'CheckLog',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionnaireQuestionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_QUESTION_TEXT: fieldBuilder.buildEdmTypeField(
          'QuestionnaireQuestionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productReadinessPolicyCheckLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_READINESS_POLICY_CHECK_LEGAL_ENTITY_ID:
          fieldBuilder.buildEdmTypeField(
            'ProductReadinessPolicyCheckLegalEntityId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link processArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_AREA: fieldBuilder.buildEnumField(
          'ProcessArea',
          EngChgReadinessModule,
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCheckMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHECK_MANDATORY: fieldBuilder.buildEnumField(
          'IsCheckMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link questionnaireQuestionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_QUESTION_ID: fieldBuilder.buildEdmTypeField(
          'QuestionnaireQuestionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_STATUS: fieldBuilder.buildEnumField(
          'CheckStatus',
          EngChgReadinessStatus,
          true
        ),
        /**
         * Static representation of the {@link approvedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ApprovedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productReadinessPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_READINESS_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductReadinessPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionnaireQuestionInstruction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_QUESTION_INSTRUCTION: fieldBuilder.buildEdmTypeField(
          'QuestionnaireQuestionInstruction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productReadinessPolicyCheckProcessArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_READINESS_POLICY_CHECK_PROCESS_AREA:
          fieldBuilder.buildEnumField(
            'ProductReadinessPolicyCheckProcessArea',
            EngChgReadinessModule,
            true
          ),
        /**
         * Static representation of the {@link productReadinessPolicyCheckName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_READINESS_POLICY_CHECK_NAME: fieldBuilder.buildEdmTypeField(
          'ProductReadinessPolicyCheckName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionnaireAnswerComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_ANSWER_COMMENT: fieldBuilder.buildEdmTypeField(
          'QuestionnaireAnswerComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link owningTeamName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_TEAM_NAME: fieldBuilder.buildEdmTypeField(
          'OwningTeamName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionnaireQuestionSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_QUESTION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'QuestionnaireQuestionSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link questionnaireAnswerText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_ANSWER_TEXT: fieldBuilder.buildEdmTypeField(
          'QuestionnaireAnswerText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approverPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionnaireQuestionInputType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_QUESTION_INPUT_TYPE: fieldBuilder.buildEnumField(
          'QuestionnaireQuestionInputType',
          KmQuestionAnswerInputType,
          true
        ),
        /**
         * Static representation of the {@link owningPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OwningPersonPartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReleasedProductReadinessChecks)
      };
    }

    return this._schema;
  }
}
