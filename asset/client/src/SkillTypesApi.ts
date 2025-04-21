/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SkillTypes } from './SkillTypes';
import { SkillTypesRequestBuilder } from './SkillTypesRequestBuilder';
import { DualWriteSkillsApi } from './DualWriteSkillsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SkillTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SkillTypes<DeSerializersT>, DeSerializersT>
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
  ): SkillTypesApi<DeSerializersT> {
    return new SkillTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link hcmSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_SKILL: OneToManyLink<
      SkillTypes<DeSerializersT>,
      DeSerializersT,
      DualWriteSkillsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DualWriteSkillsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      HCM_SKILL: new OneToManyLink('HcmSkill', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SkillTypes;

  requestBuilder(): SkillTypesRequestBuilder<DeSerializersT> {
    return new SkillTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SkillTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SkillTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SkillTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SkillTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SkillTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SKILL_TYPE: OrderableEdmTypeField<
      SkillTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COLOR: OrderableEdmTypeField<
      SkillTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SkillTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link hcmSkill} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_SKILL: OneToManyLink<
      SkillTypes<DeSerializersT>,
      DeSerializersT,
      DualWriteSkillsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SkillTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link skillType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKILL_TYPE: fieldBuilder.buildEdmTypeField(
          'SkillType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.Int32', false),
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
        ALL_FIELDS: new AllFields('*', SkillTypes)
      };
    }

    return this._schema;
  }
}
