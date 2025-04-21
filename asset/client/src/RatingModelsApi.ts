/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RatingModels } from './RatingModels';
import { RatingModelsRequestBuilder } from './RatingModelsRequestBuilder';
import { DiscussionGoalsApi } from './DiscussionGoalsApi';
import { JobPreferredSkillsApi } from './JobPreferredSkillsApi';
import { DualWriteSkillsApi } from './DualWriteSkillsApi';
import { HumanResourcesParametersApi } from './HumanResourcesParametersApi';
import { DiscussionTopicsApi } from './DiscussionTopicsApi';
import { RecruitingRequestSkillsApi } from './RecruitingRequestSkillsApi';
import { MeasurementsApi } from './MeasurementsApi';
import { CourseTypeSkillProfilesApi } from './CourseTypeSkillProfilesApi';
import { RatingLevelsApi } from './RatingLevelsApi';
import { DiscussionsApi } from './DiscussionsApi';
import { DiscussionTemplatesApi } from './DiscussionTemplatesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RatingModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RatingModels<DeSerializersT>, DeSerializersT>
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
  ): RatingModelsApi<DeSerializersT> {
    return new RatingModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link discussionGoal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOAL: OneToOneLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILL: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link hcmRatingModelHcmSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_RATING_MODEL_HCM_SKILL: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DualWriteSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link humanResourcesParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HUMAN_RESOURCES_PARAMETERS: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      HumanResourcesParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussionTopic} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPIC: OneToOneLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILES: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ratingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVELS: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATES: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionGoalsApi<DeSerializersT>,
      JobPreferredSkillsApi<DeSerializersT>,
      DualWriteSkillsApi<DeSerializersT>,
      HumanResourcesParametersApi<DeSerializersT>,
      DiscussionTopicsApi<DeSerializersT>,
      RecruitingRequestSkillsApi<DeSerializersT>,
      MeasurementsApi<DeSerializersT>,
      CourseTypeSkillProfilesApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      DiscussionsApi<DeSerializersT>,
      DiscussionTemplatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION_GOAL: new OneToOneLink('DiscussionGoal', this, linkedApis[0]),
      JOB_PREFERRED_SKILL: new OneToManyLink(
        'JobPreferredSkill',
        this,
        linkedApis[1]
      ),
      HCM_RATING_MODEL_HCM_SKILL: new OneToManyLink(
        'HcmRatingModel_HcmSkill',
        this,
        linkedApis[2]
      ),
      HUMAN_RESOURCES_PARAMETERS: new OneToManyLink(
        'HumanResourcesParameters',
        this,
        linkedApis[3]
      ),
      DISCUSSION_TOPIC: new OneToOneLink(
        'DiscussionTopic',
        this,
        linkedApis[4]
      ),
      RECRUITING_REQUEST_SKILLS: new OneToManyLink(
        'RecruitingRequestSkills',
        this,
        linkedApis[5]
      ),
      MEASUREMENT: new OneToManyLink('Measurement', this, linkedApis[6]),
      COURSE_TYPE_SKILL_PROFILES: new OneToManyLink(
        'CourseTypeSkillProfiles',
        this,
        linkedApis[7]
      ),
      RATING_LEVELS: new OneToManyLink('RatingLevels', this, linkedApis[8]),
      DISCUSSION: new OneToManyLink('Discussion', this, linkedApis[9]),
      DISCUSSION_TEMPLATES: new OneToManyLink(
        'DiscussionTemplates',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = RatingModels;

  requestBuilder(): RatingModelsRequestBuilder<DeSerializersT> {
    return new RatingModelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RatingModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RatingModels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RatingModels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RatingModels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RatingModels, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RATING_MODEL_ID: OrderableEdmTypeField<
      RatingModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RatingModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussionGoal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOAL: OneToOneLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILL: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link hcmRatingModelHcmSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_RATING_MODEL_HCM_SKILL: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DualWriteSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link humanResourcesParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HUMAN_RESOURCES_PARAMETERS: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      HumanResourcesParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussionTopic} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPIC: OneToOneLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILES: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ratingLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVELS: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TEMPLATES: OneToManyLink<
      RatingModels<DeSerializersT>,
      DeSerializersT,
      DiscussionTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RatingModels<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ratingModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingModelId',
          'Edm.String',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RatingModels)
      };
    }

    return this._schema;
  }
}
