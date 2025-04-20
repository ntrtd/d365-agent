/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjWbsTemplateTasks } from './ProjWbsTemplateTasks';
import { ProjWbsTemplateTasksRequestBuilder } from './ProjWbsTemplateTasksRequestBuilder';
import { ProjectCategoryEntitiesApi } from './ProjectCategoryEntitiesApi';
import { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import { NoYes } from './NoYes';
import { SmmActivityPriority } from './SmmActivityPriority';
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
export class ProjWbsTemplateTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjWbsTemplateTasks<DeSerializersT>, DeSerializersT>
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
  ): ProjWbsTemplateTasksApi<DeSerializersT> {
    return new ProjWbsTemplateTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjWbsTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjWbsTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjectCategoryEntitiesApi<DeSerializersT>,
      ResourceCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJECT_CATEGORIES: new OneToOneLink(
        'ProjectCategories',
        this,
        linkedApis[0]
      ),
      RESOURCE_CATEGORY: new OneToOneLink(
        'ResourceCategory',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProjWbsTemplateTasks;

  requestBuilder(): ProjWbsTemplateTasksRequestBuilder<DeSerializersT> {
    return new ProjWbsTemplateTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjWbsTemplateTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjWbsTemplateTasks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjWbsTemplateTasks<DeSerializersT>,
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
    typeof ProjWbsTemplateTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjWbsTemplateTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIERARCHY_ID: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WBS_ID: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFORT: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROLE: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREDECESSORS: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_STATUS: EnumField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    IS_CATEGORY_MANDATORY: EnumField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_RESOURCES: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TASK_PRIORITY: EnumField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ProjWbsTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjWbsTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CATEGORY: OneToOneLink<
      ProjWbsTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjWbsTemplateTasks<DeSerializers>>;
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
         * Static representation of the {@link hierarchyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_ID: fieldBuilder.buildEdmTypeField(
          'HierarchyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link wbsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ID: fieldBuilder.buildEdmTypeField('WBSId', 'Edm.String', false),
        /**
         * Static representation of the {@link effort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFORT: fieldBuilder.buildEdmTypeField('Effort', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEdmTypeField('Role', 'Edm.String', true),
        /**
         * Static representation of the {@link predecessors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREDECESSORS: fieldBuilder.buildEdmTypeField(
          'Predecessors',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
        /**
         * Static representation of the {@link activityStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_STATUS: fieldBuilder.buildEnumField(
          'ActivityStatus',
          SmmActivityTaskTimeType,
          true
        ),
        /**
         * Static representation of the {@link isCategoryMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_MANDATORY: fieldBuilder.buildEnumField(
          'IsCategoryMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfResources} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_RESOURCES: fieldBuilder.buildEdmTypeField(
          'NumberOfResources',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taskPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_PRIORITY: fieldBuilder.buildEnumField(
          'TaskPriority',
          SmmActivityPriority,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjWbsTemplateTasks)
      };
    }

    return this._schema;
  }
}
