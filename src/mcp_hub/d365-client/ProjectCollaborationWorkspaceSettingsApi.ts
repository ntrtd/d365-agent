/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectCollaborationWorkspaceSettings } from './ProjectCollaborationWorkspaceSettings';
import { ProjectCollaborationWorkspaceSettingsRequestBuilder } from './ProjectCollaborationWorkspaceSettingsRequestBuilder';
import { CollabSiteEntityType } from './CollabSiteEntityType';
import { NoYes } from './NoYes';
import { CollabSiteSharePointType } from './CollabSiteSharePointType';
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
export class ProjectCollaborationWorkspaceSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProjectCollaborationWorkspaceSettings<DeSerializersT>,
      DeSerializersT
    >
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
  ): ProjectCollaborationWorkspaceSettingsApi<DeSerializersT> {
    return new ProjectCollaborationWorkspaceSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectCollaborationWorkspaceSettings;

  requestBuilder(): ProjectCollaborationWorkspaceSettingsRequestBuilder<DeSerializersT> {
    return new ProjectCollaborationWorkspaceSettingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjectCollaborationWorkspaceSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectCollaborationWorkspaceSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectCollaborationWorkspaceSettings<DeSerializersT>,
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
    typeof ProjectCollaborationWorkspaceSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectCollaborationWorkspaceSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_AREA: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      CollabSiteEntityType,
      true,
      true
    >;
    IS_WORKSPACE_AUTO_CREATED: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CREATING_WORKSPACE_PROMPTED: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHARE_POINT_VERSION: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      CollabSiteSharePointType,
      true,
      true
    >;
    IS_DELETING_WORKSPACE_PROMPTED: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKSPACE_HOME_PAGE: OrderableEdmTypeField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE: OrderableEdmTypeField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WORKSPACE_AUTO_CREATED_FOR_TIME: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WORKSPACE_AUTO_CREATED_FOR_COST: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WORKSPACE_AUTO_CREATED_FOR_INTERNAL: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STORE_MS_PROJECT_FILES: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WORKSPACE_AUTO_CREATED_FOR_INVESTMENT: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WORKSPACE_AUTO_CREATED_FOR_TIME_MATERIAL: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WORKSPACE_AUTO_CREATED_FOR_FIXED_PRICE: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYNC_TASK_LISTS: EnumField<
      ProjectCollaborationWorkspaceSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectCollaborationWorkspaceSettings<DeSerializers>>;
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
         * Static representation of the {@link businessArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_AREA: fieldBuilder.buildEnumField(
          'BusinessArea',
          CollabSiteEntityType,
          true
        ),
        /**
         * Static representation of the {@link isWorkspaceAutoCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKSPACE_AUTO_CREATED: fieldBuilder.buildEnumField(
          'IsWorkspaceAutoCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCreatingWorkspacePrompted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREATING_WORKSPACE_PROMPTED: fieldBuilder.buildEnumField(
          'IsCreatingWorkspacePrompted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sharePointVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARE_POINT_VERSION: fieldBuilder.buildEnumField(
          'SharePointVersion',
          CollabSiteSharePointType,
          true
        ),
        /**
         * Static representation of the {@link isDeletingWorkspacePrompted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETING_WORKSPACE_PROMPTED: fieldBuilder.buildEnumField(
          'IsDeletingWorkspacePrompted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workspaceHomePage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKSPACE_HOME_PAGE: fieldBuilder.buildEdmTypeField(
          'WorkspaceHomePage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link template} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE: fieldBuilder.buildEdmTypeField(
          'Template',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWorkspaceAutoCreatedForTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKSPACE_AUTO_CREATED_FOR_TIME: fieldBuilder.buildEnumField(
          'IsWorkspaceAutoCreatedForTime',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isWorkspaceAutoCreatedForCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKSPACE_AUTO_CREATED_FOR_COST: fieldBuilder.buildEnumField(
          'IsWorkspaceAutoCreatedForCost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isWorkspaceAutoCreatedForInternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKSPACE_AUTO_CREATED_FOR_INTERNAL: fieldBuilder.buildEnumField(
          'IsWorkspaceAutoCreatedForInternal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link storeMsProjectFiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_MS_PROJECT_FILES: fieldBuilder.buildEnumField(
          'StoreMSProjectFiles',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isWorkspaceAutoCreatedForInvestment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKSPACE_AUTO_CREATED_FOR_INVESTMENT: fieldBuilder.buildEnumField(
          'IsWorkspaceAutoCreatedForInvestment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isWorkspaceAutoCreatedForTimeMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKSPACE_AUTO_CREATED_FOR_TIME_MATERIAL:
          fieldBuilder.buildEnumField(
            'IsWorkspaceAutoCreatedForTimeMaterial',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isWorkspaceAutoCreatedForFixedPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKSPACE_AUTO_CREATED_FOR_FIXED_PRICE: fieldBuilder.buildEnumField(
          'IsWorkspaceAutoCreatedForFixedPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link syncTaskLists} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYNC_TASK_LISTS: fieldBuilder.buildEnumField(
          'SyncTaskLists',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectCollaborationWorkspaceSettings)
      };
    }

    return this._schema;
  }
}
