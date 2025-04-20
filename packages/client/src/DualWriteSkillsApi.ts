/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteSkills } from './DualWriteSkills';
import { DualWriteSkillsRequestBuilder } from './DualWriteSkillsRequestBuilder';
import { RatingModelsApi } from './RatingModelsApi';
import { SkillTypesApi } from './SkillTypesApi';
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
export class DualWriteSkillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DualWriteSkills<DeSerializersT>, DeSerializersT>
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
  ): DualWriteSkillsApi<DeSerializersT> {
    return new DualWriteSkillsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link hcmRatingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_RATING_MODEL: OneToOneLink<
      DualWriteSkills<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmSkillType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_SKILL_TYPE: OneToOneLink<
      DualWriteSkills<DeSerializersT>,
      DeSerializersT,
      SkillTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RatingModelsApi<DeSerializersT>, SkillTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      HCM_RATING_MODEL: new OneToOneLink('HcmRatingModel', this, linkedApis[0]),
      HCM_SKILL_TYPE: new OneToOneLink('HcmSkillType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DualWriteSkills;

  requestBuilder(): DualWriteSkillsRequestBuilder<DeSerializersT> {
    return new DualWriteSkillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DualWriteSkills<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DualWriteSkills<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DualWriteSkills<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DualWriteSkills, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteSkills,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SKILL: OrderableEdmTypeField<
      DualWriteSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARACTERISTIC_TYPE: OrderableEdmTypeField<
      DualWriteSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_ID: OrderableEdmTypeField<
      DualWriteSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DualWriteSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      DualWriteSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKILL_TYPE_ID: OrderableEdmTypeField<
      DualWriteSkills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmRatingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_RATING_MODEL: OneToOneLink<
      DualWriteSkills<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmSkillType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_SKILL_TYPE: OneToOneLink<
      DualWriteSkills<DeSerializersT>,
      DeSerializersT,
      SkillTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DualWriteSkills<DeSerializers>>;
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
         * Static representation of the {@link characteristicType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTERISTIC_TYPE: fieldBuilder.buildEdmTypeField(
          'CharacteristicType',
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
        ALL_FIELDS: new AllFields('*', DualWriteSkills)
      };
    }

    return this._schema;
  }
}
