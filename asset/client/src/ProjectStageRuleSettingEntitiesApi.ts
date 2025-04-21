/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectStageRuleSettingEntities } from './ProjectStageRuleSettingEntities';
import { ProjectStageRuleSettingEntitiesRequestBuilder } from './ProjectStageRuleSettingEntitiesRequestBuilder';
import { ProjStatus } from './ProjStatus';
import { ProjType } from './ProjType';
import { ProjStatusRule } from './ProjStatusRule';
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
export class ProjectStageRuleSettingEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectStageRuleSettingEntities<DeSerializersT>, DeSerializersT>
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
  ): ProjectStageRuleSettingEntitiesApi<DeSerializersT> {
    return new ProjectStageRuleSettingEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectStageRuleSettingEntities;

  requestBuilder(): ProjectStageRuleSettingEntitiesRequestBuilder<DeSerializersT> {
    return new ProjectStageRuleSettingEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjectStageRuleSettingEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectStageRuleSettingEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectStageRuleSettingEntities<DeSerializersT>,
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
    typeof ProjectStageRuleSettingEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectStageRuleSettingEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectStageRuleSettingEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_STATUS: EnumField<
      ProjectStageRuleSettingEntities<DeSerializers>,
      DeSerializersT,
      ProjStatus,
      true,
      true
    >;
    PROJ_TYPE: EnumField<
      ProjectStageRuleSettingEntities<DeSerializers>,
      DeSerializersT,
      ProjType,
      true,
      true
    >;
    PROJ_STATUS_RULE: EnumField<
      ProjectStageRuleSettingEntities<DeSerializers>,
      DeSerializersT,
      ProjStatusRule,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectStageRuleSettingEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_STATUS: fieldBuilder.buildEnumField(
          'ProjStatus',
          ProjStatus,
          true
        ),
        /**
         * Static representation of the {@link projType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TYPE: fieldBuilder.buildEnumField('ProjType', ProjType, true),
        /**
         * Static representation of the {@link projStatusRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_STATUS_RULE: fieldBuilder.buildEnumField(
          'ProjStatusRule',
          ProjStatusRule,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectStageRuleSettingEntities)
      };
    }

    return this._schema;
  }
}
