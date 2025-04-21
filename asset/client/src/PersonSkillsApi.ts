/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonSkills } from './PersonSkills';
import { PersonSkillsRequestBuilder } from './PersonSkillsRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { WorkersApi } from './WorkersApi';
import { RatingLevelsApi } from './RatingLevelsApi';
import { SkillsApi } from './SkillsApi';
import { HrmSkillLevelType } from './HrmSkillLevelType';
import { NoYes } from './NoYes';
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
export class PersonSkillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonSkills<DeSerializersT>, DeSerializersT>
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
  ): PersonSkillsApi<DeSerializersT> {
    return new PersonSkillsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedRatingLevelExaminer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_RATING_LEVEL_EXAMINER: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCertifier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_CERTIFIER: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeopleApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      SkillsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0]),
      RELATED_RATING_LEVEL_EXAMINER: new OneToOneLink(
        'RelatedRatingLevelExaminer',
        this,
        linkedApis[1]
      ),
      RELATED_CERTIFIER: new OneToOneLink(
        'RelatedCertifier',
        this,
        linkedApis[2]
      ),
      RATING_LEVEL: new OneToOneLink('RatingLevel', this, linkedApis[3]),
      SKILL: new OneToOneLink('Skill', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = PersonSkills;

  requestBuilder(): PersonSkillsRequestBuilder<DeSerializersT> {
    return new PersonSkillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonSkills<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonSkills<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonSkills<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonSkills, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PersonSkills, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_TYPE: EnumField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      HrmSkillLevelType,
      true,
      true
    >;
    SKILL_ID: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_DATE: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CERTIFIER: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING_ID: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERIFIED: EnumField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    YEARS_OF_EXPERIENCE: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATING_LEVEL_EXAMINER: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL_ID: OrderableEdmTypeField<
      PersonSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedRatingLevelExaminer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_RATING_LEVEL_EXAMINER: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCertifier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_CERTIFIER: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link skill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SKILL: OneToOneLink<
      PersonSkills<DeSerializersT>,
      DeSerializersT,
      SkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonSkills<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link levelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_TYPE: fieldBuilder.buildEnumField(
          'LevelType',
          HrmSkillLevelType,
          true
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
         * Static representation of the {@link levelDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_DATE: fieldBuilder.buildEdmTypeField(
          'LevelDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link certifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFIER: fieldBuilder.buildEdmTypeField(
          'Certifier',
          'Edm.String',
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
         * Static representation of the {@link verified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERIFIED: fieldBuilder.buildEnumField('Verified', NoYes, true),
        /**
         * Static representation of the {@link yearsOfExperience} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS_OF_EXPERIENCE: fieldBuilder.buildEdmTypeField(
          'YearsOfExperience',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ratingLevelExaminer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_LEVEL_EXAMINER: fieldBuilder.buildEdmTypeField(
          'RatingLevelExaminer',
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
        ALL_FIELDS: new AllFields('*', PersonSkills)
      };
    }

    return this._schema;
  }
}
