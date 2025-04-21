/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductReadinessPolicyChecks } from './ProductReadinessPolicyChecks';
import { ProductReadinessPolicyChecksRequestBuilder } from './ProductReadinessPolicyChecksRequestBuilder';
import { ReleasedProductReadinessChecksApi } from './ReleasedProductReadinessChecksApi';
import { ProductReadinessPoliciesApi } from './ProductReadinessPoliciesApi';
import { PeopleApi } from './PeopleApi';
import { TeamsV2Api } from './TeamsV2Api';
import { EngChgReadinessModule } from './EngChgReadinessModule';
import { EngChgReadinessType } from './EngChgReadinessType';
import { NoYes } from './NoYes';
import { EngChgReadinessCheckType } from './EngChgReadinessCheckType';
import { EngChgReadinessExecute } from './EngChgReadinessExecute';
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
export class ProductReadinessPolicyChecksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductReadinessPolicyChecks<DeSerializersT>, DeSerializersT>
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
  ): ProductReadinessPolicyChecksApi<DeSerializersT> {
    return new ProductReadinessPolicyChecksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY: OneToOneLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_PERSON: OneToOneLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningTeamV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_TEAM_V_2: OneToOneLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductReadinessChecksApi<DeSerializersT>,
      ProductReadinessPoliciesApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      TeamsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_READINESS_CHECKS: new OneToManyLink(
        'ReleasedProductReadinessChecks',
        this,
        linkedApis[0]
      ),
      PRODUCT_READINESS_POLICY: new OneToOneLink(
        'ProductReadinessPolicy',
        this,
        linkedApis[1]
      ),
      OWNING_PERSON: new OneToOneLink('OwningPerson', this, linkedApis[2]),
      OWNING_TEAM_V_2: new OneToOneLink('OwningTeamV2', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ProductReadinessPolicyChecks;

  requestBuilder(): ProductReadinessPolicyChecksRequestBuilder<DeSerializersT> {
    return new ProductReadinessPolicyChecksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductReadinessPolicyChecks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductReadinessPolicyChecks<DeSerializersT>,
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
    typeof ProductReadinessPolicyChecks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductReadinessPolicyChecks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_READINESS_POLICY_NAME: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHECK_NAME: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS_AREA: EnumField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      EngChgReadinessModule,
      true,
      true
    >;
    CHECK_TYPE: EnumField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      EngChgReadinessType,
      true,
      true
    >;
    OWNING_TEAM_NAME: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_LIST_QUESTIONNAIRE_ID: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_DESCRIPTION: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHECK_MANDATORY: EnumField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_RELEASE_CATEGORY: EnumField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      EngChgReadinessCheckType,
      true,
      true
    >;
    WILL_CHECK_AUTOMATICALLY_APPROVE_RESULT: EnumField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_CLASS_NAME: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXECUTION_SCOPE: EnumField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      EngChgReadinessExecute,
      true,
      true
    >;
    OWNING_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ProductReadinessPolicyChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductReadinessChecks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_READINESS_CHECKS: OneToManyLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      ReleasedProductReadinessChecksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReadinessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_READINESS_POLICY: OneToOneLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      ProductReadinessPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_PERSON: OneToOneLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link owningTeamV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OWNING_TEAM_V_2: OneToOneLink<
      ProductReadinessPolicyChecks<DeSerializersT>,
      DeSerializersT,
      TeamsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductReadinessPolicyChecks<DeSerializers>>;
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
         * Static representation of the {@link productReadinessPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_READINESS_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductReadinessPolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link checkName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NAME: fieldBuilder.buildEdmTypeField(
          'CheckName',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link processArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_AREA: fieldBuilder.buildEnumField(
          'ProcessArea',
          EngChgReadinessModule,
          true
        ),
        /**
         * Static representation of the {@link checkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_TYPE: fieldBuilder.buildEnumField(
          'CheckType',
          EngChgReadinessType,
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
         * Static representation of the {@link checkListQuestionnaireId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_LIST_QUESTIONNAIRE_ID: fieldBuilder.buildEdmTypeField(
          'CheckListQuestionnaireId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CheckDescription',
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
         * Static representation of the {@link checkReleaseCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_RELEASE_CATEGORY: fieldBuilder.buildEnumField(
          'CheckReleaseCategory',
          EngChgReadinessCheckType,
          true
        ),
        /**
         * Static representation of the {@link willCheckAutomaticallyApproveResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_CHECK_AUTOMATICALLY_APPROVE_RESULT: fieldBuilder.buildEnumField(
          'WillCheckAutomaticallyApproveResult',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'CheckClassName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link executionScope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_SCOPE: fieldBuilder.buildEnumField(
          'ExecutionScope',
          EngChgReadinessExecute,
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
        ALL_FIELDS: new AllFields('*', ProductReadinessPolicyChecks)
      };
    }

    return this._schema;
  }
}
