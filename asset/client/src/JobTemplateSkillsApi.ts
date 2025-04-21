/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateSkills } from './JobTemplateSkills';
import { JobTemplateSkillsRequestBuilder } from './JobTemplateSkillsRequestBuilder';
import { JobTemplatesApi } from './JobTemplatesApi';
import { RatingLevelsApi } from './RatingLevelsApi';
import { SkillsApi } from './SkillsApi';
import { HrmSkillImportance } from './HrmSkillImportance';
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
export class JobTemplateSkillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobTemplateSkills<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateSkillsApi<DeSerializersT> {
    return new JobTemplateSkillsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateSkills<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      JobTemplateSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      JobTemplateSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobTemplatesApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      SkillsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[0]),
      RATING_LEVEL: new OneToOneLink('RatingLevel', this, linkedApis[1]),
      SKILL: new OneToOneLink('Skill', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = JobTemplateSkills;

  requestBuilder(): JobTemplateSkillsRequestBuilder<DeSerializersT> {
    return new JobTemplateSkillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateSkills<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobTemplateSkills<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobTemplateSkills<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof JobTemplateSkills,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateSkills,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SKILL_ID: OrderableEdmTypeField<
      JobTemplateSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORTANCE: EnumField<
      JobTemplateSkills<DeSerializers>,
      DeSerializersT,
      HrmSkillImportance,
      true,
      true
    >;
    RATING_ID: OrderableEdmTypeField<
      JobTemplateSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL_ID: OrderableEdmTypeField<
      JobTemplateSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateSkills<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      JobTemplateSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      JobTemplateSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateSkills<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'JobTemplateId',
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
         * Static representation of the {@link importance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTANCE: fieldBuilder.buildEnumField(
          'Importance',
          HrmSkillImportance,
          true
        ),
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
         * Static representation of the {@link levelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_ID: fieldBuilder.buildEdmTypeField('LevelId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplateSkills)
      };
    }

    return this._schema;
  }
}
