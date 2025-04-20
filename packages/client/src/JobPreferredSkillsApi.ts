/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobPreferredSkills } from './JobPreferredSkills';
import { JobPreferredSkillsRequestBuilder } from './JobPreferredSkillsRequestBuilder';
import { RatingModelsApi } from './RatingModelsApi';
import { JobsApi } from './JobsApi';
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
export class JobPreferredSkillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobPreferredSkills<DeSerializersT>, DeSerializersT>
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
  ): JobPreferredSkillsApi<DeSerializersT> {
    return new JobPreferredSkillsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RatingModelsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      SkillsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[0]),
      JOB: new OneToOneLink('Job', this, linkedApis[1]),
      RATING_LEVEL: new OneToOneLink('RatingLevel', this, linkedApis[2]),
      SKILL: new OneToOneLink('Skill', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = JobPreferredSkills;

  requestBuilder(): JobPreferredSkillsRequestBuilder<DeSerializersT> {
    return new JobPreferredSkillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobPreferredSkills<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobPreferredSkills<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobPreferredSkills<DeSerializersT>,
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
    typeof JobPreferredSkills,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobPreferredSkills,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      JobPreferredSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SKILL_ID: OrderableEdmTypeField<
      JobPreferredSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_ID: OrderableEdmTypeField<
      JobPreferredSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING_ID: OrderableEdmTypeField<
      JobPreferredSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTANCE: EnumField<
      JobPreferredSkills<DeSerializers>,
      DeSerializersT,
      HrmSkillImportance,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      JobPreferredSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobPreferredSkills<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
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
         * Static representation of the {@link levelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_ID: fieldBuilder.buildEdmTypeField('LevelId', 'Edm.String', true),
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
         * Static representation of the {@link importance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTANCE: fieldBuilder.buildEnumField(
          'Importance',
          HrmSkillImportance,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobPreferredSkills)
      };
    }

    return this._schema;
  }
}
