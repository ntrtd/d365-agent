/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectWbsDrafts } from './ProjectWbsDrafts';
import { ProjectWbsDraftsRequestBuilder } from './ProjectWbsDraftsRequestBuilder';
import { ProjectCategoryEntitiesApi } from './ProjectCategoryEntitiesApi';
import { ProjectsApi } from './ProjectsApi';
import { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { NoYes } from './NoYes';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
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
export class ProjectWbsDraftsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectWbsDrafts<DeSerializersT>, DeSerializersT>
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
  ): ProjectWbsDraftsApi<DeSerializersT> {
    return new ProjectWbsDraftsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjectWbsDrafts<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECTS: OneToOneLink<
      ProjectWbsDrafts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link roles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROLES: OneToOneLink<
      ProjectWbsDrafts<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjectCategoryEntitiesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      ResourceCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJECT_CATEGORIES: new OneToOneLink(
        'ProjectCategories',
        this,
        linkedApis[0]
      ),
      PROJECTS: new OneToOneLink('Projects', this, linkedApis[1]),
      ROLES: new OneToOneLink('Roles', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ProjectWbsDrafts;

  requestBuilder(): ProjectWbsDraftsRequestBuilder<DeSerializersT> {
    return new ProjectWbsDraftsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectWbsDrafts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectWbsDrafts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectWbsDrafts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectWbsDrafts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectWbsDrafts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WBS_ID: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TASK_CLOSED: EnumField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TASK: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_RESOURCES: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TASK_EFFORT_AT_COMPLETE: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TASK_COST_AT_COMPLETE: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFORT: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CATEGORY_MANDATORY: EnumField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROLE: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TASK_TIME_TYPE: EnumField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DURATION: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_TASK_MANDATORY: EnumField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_STATUS: EnumField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    PREDECESSORS: OrderableEdmTypeField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_PRIORITY: EnumField<
      ProjectWbsDrafts<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjectWbsDrafts<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECTS: OneToOneLink<
      ProjectWbsDrafts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link roles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROLES: OneToOneLink<
      ProjectWbsDrafts<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectWbsDrafts<DeSerializers>>;
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link wbsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ID: fieldBuilder.buildEdmTypeField('WBSId', 'Edm.String', false),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link isTaskClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TASK_CLOSED: fieldBuilder.buildEnumField(
          'IsTaskClosed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
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
         * Static representation of the {@link taskEffortAtComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_EFFORT_AT_COMPLETE: fieldBuilder.buildEdmTypeField(
          'TaskEffortAtComplete',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taskCostAtComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_COST_AT_COMPLETE: fieldBuilder.buildEdmTypeField(
          'TaskCostAtComplete',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link effort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFORT: fieldBuilder.buildEdmTypeField('Effort', 'Edm.Decimal', false),
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
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEdmTypeField('Role', 'Edm.String', true),
        /**
         * Static representation of the {@link activityTaskTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TASK_TIME_TYPE: fieldBuilder.buildEnumField(
          'ActivityTaskTimeType',
          SmmActivityTaskTimeType,
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link duration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION: fieldBuilder.buildEdmTypeField(
          'Duration',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isTaskMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TASK_MANDATORY: fieldBuilder.buildEnumField(
          'IsTaskMandatory',
          NoYes,
          true
        ),
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
         * Static representation of the {@link predecessors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREDECESSORS: fieldBuilder.buildEdmTypeField(
          'Predecessors',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectWbsDrafts)
      };
    }

    return this._schema;
  }
}
