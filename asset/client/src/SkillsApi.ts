/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Skills } from './Skills';
import { SkillsRequestBuilder } from './SkillsRequestBuilder';
import { JobPreferredSkillsApi } from './JobPreferredSkillsApi';
import { RecruitingRequestSkillsApi } from './RecruitingRequestSkillsApi';
import { CourseTypeSkillProfilesApi } from './CourseTypeSkillProfilesApi';
import { PersonSkillsApi } from './PersonSkillsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SkillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Skills<DeSerializersT>, DeSerializersT>
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
  ): SkillsApi<DeSerializersT> {
    return new SkillsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobPreferredSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILL: OneToOneLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILE: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      PersonSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SKILLS: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      JobTemplateSkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobPreferredSkillsApi<DeSerializersT>,
      RecruitingRequestSkillsApi<DeSerializersT>,
      CourseTypeSkillProfilesApi<DeSerializersT>,
      PersonSkillsApi<DeSerializersT>,
      JobTemplateSkillsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_PREFERRED_SKILL: new OneToOneLink(
        'JobPreferredSkill',
        this,
        linkedApis[0]
      ),
      RECRUITING_REQUEST_SKILLS: new OneToManyLink(
        'RecruitingRequestSkills',
        this,
        linkedApis[1]
      ),
      COURSE_TYPE_SKILL_PROFILE: new OneToManyLink(
        'CourseTypeSkillProfile',
        this,
        linkedApis[2]
      ),
      PERSON_SKILL: new OneToManyLink('PersonSkill', this, linkedApis[3]),
      JOB_TEMPLATE_SKILLS: new OneToManyLink(
        'JobTemplateSkills',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = Skills;

  requestBuilder(): SkillsRequestBuilder<DeSerializersT> {
    return new SkillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Skills<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Skills<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Skills<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Skills, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Skills, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SKILL: OrderableEdmTypeField<
      Skills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_ID: OrderableEdmTypeField<
      Skills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Skills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      Skills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKILL_TYPE_ID: OrderableEdmTypeField<
      Skills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobPreferredSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SKILL: OneToOneLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      JobPreferredSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_SKILLS: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILE: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_SKILL: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      PersonSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SKILLS: OneToManyLink<
      Skills<DeSerializersT>,
      DeSerializersT,
      JobTemplateSkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Skills<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link skill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKILL: fieldBuilder.buildEdmTypeField('Skill', 'Edm.String', false),
        /**
         * Static representation of the {@link ratingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_ID: fieldBuilder.buildEdmTypeField(
          'RatingId',
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
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link skillTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKILL_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'SkillTypeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Skills)
      };
    }

    return this._schema;
  }
}
