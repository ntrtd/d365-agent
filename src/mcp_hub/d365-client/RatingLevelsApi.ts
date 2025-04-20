/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RatingLevels } from './RatingLevels';
import { RatingLevelsRequestBuilder } from './RatingLevelsRequestBuilder';
import { DiscussionGoalsApi } from './DiscussionGoalsApi';
import { JobPreferredSkillsApi } from './JobPreferredSkillsApi';
import { DiscussionTopicsApi } from './DiscussionTopicsApi';
import { RecruitingRequestSkillsApi } from './RecruitingRequestSkillsApi';
import { CompensationPayPerformanceAllocationLinesApi } from './CompensationPayPerformanceAllocationLinesApi';
import { CourseTypeSkillProfilesApi } from './CourseTypeSkillProfilesApi';
import { RatingModelsApi } from './RatingModelsApi';
import { PersonSkillsApi } from './PersonSkillsApi';
import { DiscussionsApi } from './DiscussionsApi';
import { JobTemplateSkillsApi } from './JobTemplateSkillsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RatingLevelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RatingLevels<DeSerializersT>, DeSerializersT>
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
  ): RatingLevelsApi<DeSerializersT> {
    return new RatingLevelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalsEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOALS_EMPLOYEE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalsManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOALS_MANAGER: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILLS: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTopicsEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPICS_EMPLOYEE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTopicsManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPICS_MANAGER: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compPerfAllocationLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_PERF_ALLOCATION_LINE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModelEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL_ENTITY: OneToOneLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      PersonSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SKILLS: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      JobTemplateSkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscussionGoalsApi<DeSerializersT>,
      DiscussionGoalsApi<DeSerializersT>,
      JobPreferredSkillsApi<DeSerializersT>,
      DiscussionTopicsApi<DeSerializersT>,
      DiscussionTopicsApi<DeSerializersT>,
      RecruitingRequestSkillsApi<DeSerializersT>,
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>,
      CourseTypeSkillProfilesApi<DeSerializersT>,
      RatingModelsApi<DeSerializersT>,
      PersonSkillsApi<DeSerializersT>,
      DiscussionsApi<DeSerializersT>,
      JobTemplateSkillsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCUSSION_GOALS_EMPLOYEE: new OneToManyLink(
        'DiscussionGoalsEmployee',
        this,
        linkedApis[0]
      ),
      DISCUSSION_GOALS_MANAGER: new OneToManyLink(
        'DiscussionGoalsManager',
        this,
        linkedApis[1]
      ),
      JOB_PREFERRED_SKILLS: new OneToManyLink(
        'JobPreferredSkills',
        this,
        linkedApis[2]
      ),
      DISCUSSION_TOPICS_EMPLOYEE: new OneToManyLink(
        'DiscussionTopicsEmployee',
        this,
        linkedApis[3]
      ),
      DISCUSSION_TOPICS_MANAGER: new OneToManyLink(
        'DiscussionTopicsManager',
        this,
        linkedApis[4]
      ),
      RECRUITING_REQUEST_SKILLS: new OneToManyLink(
        'RecruitingRequestSkills',
        this,
        linkedApis[5]
      ),
      COMP_PERF_ALLOCATION_LINE: new OneToManyLink(
        'CompPerfAllocationLine',
        this,
        linkedApis[6]
      ),
      COURSE_TYPE_SKILL_PROFILE: new OneToManyLink(
        'CourseTypeSkillProfile',
        this,
        linkedApis[7]
      ),
      RATING_MODEL_ENTITY: new OneToOneLink(
        'RatingModelEntity',
        this,
        linkedApis[8]
      ),
      PERSON_SKILL: new OneToManyLink('PersonSkill', this, linkedApis[9]),
      DISCUSSION: new OneToManyLink('Discussion', this, linkedApis[10]),
      JOB_TEMPLATE_SKILLS: new OneToManyLink(
        'JobTemplateSkills',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = RatingLevels;

  requestBuilder(): RatingLevelsRequestBuilder<DeSerializersT> {
    return new RatingLevelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RatingLevels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RatingLevels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RatingLevels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RatingLevels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RatingLevels, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RATING_LEVEL_ID: OrderableEdmTypeField<
      RatingLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      RatingLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      RatingLevels<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RatingLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      RatingLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalsEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOALS_EMPLOYEE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionGoalsManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_GOALS_MANAGER: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionGoalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILLS: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTopicsEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPICS_EMPLOYEE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussionTopicsManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION_TOPICS_MANAGER: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionTopicsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compPerfAllocationLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_PERF_ALLOCATION_LINE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILE: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModelEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL_ENTITY: OneToOneLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      PersonSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SKILLS: OneToManyLink<
      RatingLevels<DeSerializersT>,
      DeSerializersT,
      JobTemplateSkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RatingLevels<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ratingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingLevelId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Int32', false),
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
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RatingLevels)
      };
    }

    return this._schema;
  }
}
