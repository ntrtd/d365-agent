/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecruitingRequestSkills } from './RecruitingRequestSkills';
import { RecruitingRequestSkillsRequestBuilder } from './RecruitingRequestSkillsRequestBuilder';
import { RatingModelsApi } from './RatingModelsApi';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { RatingLevelsApi } from './RatingLevelsApi';
import { SkillsApi } from './SkillsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RecruitingRequestSkillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RecruitingRequestSkills<DeSerializersT>, DeSerializersT>
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
  ): RecruitingRequestSkillsApi<DeSerializersT> {
    return new RecruitingRequestSkillsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RatingModelsApi<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      SkillsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[0]),
      RECRUITING_REQUEST: new OneToOneLink(
        'RecruitingRequest',
        this,
        linkedApis[1]
      ),
      RATING_LEVEL: new OneToOneLink('RatingLevel', this, linkedApis[2]),
      SKILL: new OneToOneLink('Skill', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = RecruitingRequestSkills;

  requestBuilder(): RecruitingRequestSkillsRequestBuilder<DeSerializersT> {
    return new RecruitingRequestSkillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecruitingRequestSkills<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RecruitingRequestSkills<DeSerializersT>,
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
    typeof RecruitingRequestSkills,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RecruitingRequestSkills,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RecruitingRequestSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRUITING_REQUEST_ID: OrderableEdmTypeField<
      RecruitingRequestSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SKILL_ID: OrderableEdmTypeField<
      RecruitingRequestSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_LEVEL_ID: OrderableEdmTypeField<
      RecruitingRequestSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING_LEVEL_DESCRIPTION: OrderableEdmTypeField<
      RecruitingRequestSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      RecruitingRequestSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKILL_DESCRIPTION: OrderableEdmTypeField<
      RecruitingRequestSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      RecruitingRequestSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RecruitingRequestSkills<DeSerializers>>;
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
         * Static representation of the {@link recruitingRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITING_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RecruitingRequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link skillId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKILL_ID: fieldBuilder.buildEdmTypeField(
          'SkillId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ratingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ratingLevelDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_LEVEL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RatingLevelDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ratingModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skillDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKILL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SkillDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecruitingRequestSkills)
      };
    }

    return this._schema;
  }
}
