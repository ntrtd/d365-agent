/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicantSkills } from './ApplicantSkills';
import { ApplicantSkillsRequestBuilder } from './ApplicantSkillsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ApplicantSkillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApplicantSkills<DeSerializersT>, DeSerializersT>
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
  ): ApplicantSkillsApi<DeSerializersT> {
    return new ApplicantSkillsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicantSkills;

  requestBuilder(): ApplicantSkillsRequestBuilder<DeSerializersT> {
    return new ApplicantSkillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicantSkills<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApplicantSkills<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApplicantSkills<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApplicantSkills, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicantSkills,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    APPLICANT_ID: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_TYPE: EnumField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      HrmSkillLevelType,
      true,
      true
    >;
    SKILL_ID: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_DATE: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CERTIFIER: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING_ID: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERIFIED: EnumField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    YEARS_OF_EXPERIENCE: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATING_LEVEL_EXAMINER: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL_ID: OrderableEdmTypeField<
      ApplicantSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicantSkills<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link applicantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT_ID: fieldBuilder.buildEdmTypeField(
          'ApplicantId',
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
        ALL_FIELDS: new AllFields('*', ApplicantSkills)
      };
    }

    return this._schema;
  }
}
