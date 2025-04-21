/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseTypeSkillProfiles } from './CourseTypeSkillProfiles';
import { CourseTypeSkillProfilesRequestBuilder } from './CourseTypeSkillProfilesRequestBuilder';
import { RatingModelsApi } from './RatingModelsApi';
import { CourseTypesApi } from './CourseTypesApi';
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
export class CourseTypeSkillProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseTypeSkillProfiles<DeSerializersT>, DeSerializersT>
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
  ): CourseTypeSkillProfilesApi<DeSerializersT> {
    return new CourseTypeSkillProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ratingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_MODEL: OneToOneLink<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RatingModelsApi<DeSerializersT>,
      CourseTypesApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      SkillsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RATING_MODEL: new OneToOneLink('RatingModel', this, linkedApis[0]),
      COURSE_TYPE: new OneToOneLink('CourseType', this, linkedApis[1]),
      RATING_LEVEL: new OneToOneLink('RatingLevel', this, linkedApis[2]),
      SKILL: new OneToOneLink('Skill', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = CourseTypeSkillProfiles;

  requestBuilder(): CourseTypeSkillProfilesRequestBuilder<DeSerializersT> {
    return new CourseTypeSkillProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseTypeSkillProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CourseTypeSkillProfiles<DeSerializersT>,
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
    typeof CourseTypeSkillProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseTypeSkillProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COURSE_TYPE_ID: OrderableEdmTypeField<
      CourseTypeSkillProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SKILL_ID: OrderableEdmTypeField<
      CourseTypeSkillProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_ID: OrderableEdmTypeField<
      CourseTypeSkillProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL_ID: OrderableEdmTypeField<
      CourseTypeSkillProfiles<DeSerializers>,
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
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      CourseTypeSkillProfiles<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseTypeSkillProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link courseTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CourseTypeId',
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
        ALL_FIELDS: new AllFields('*', CourseTypeSkillProfiles)
      };
    }

    return this._schema;
  }
}
