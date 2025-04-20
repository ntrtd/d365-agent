/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceChecklistVariables } from './AssetMaintenanceChecklistVariables';
import { AssetMaintenanceChecklistVariablesRequestBuilder } from './AssetMaintenanceChecklistVariablesRequestBuilder';
import { AssetMaintenanceWorkOrderLineChecklistsApi } from './AssetMaintenanceWorkOrderLineChecklistsApi';
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
export class AssetMaintenanceChecklistVariablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceChecklistVariables<DeSerializersT>,
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
  ): AssetMaintenanceChecklistVariablesApi<DeSerializersT> {
    return new AssetMaintenanceChecklistVariablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesJobChecklistVariable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_JOB_CHECKLIST_VARIABLE: OneToManyLink<
      AssetMaintenanceChecklistVariables<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB_CHECKLIST_LINES_JOB_CHECKLIST_VARIABLE: new OneToManyLink(
        'JobChecklistLines_JobChecklistVariable',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceChecklistVariables;

  requestBuilder(): AssetMaintenanceChecklistVariablesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceChecklistVariablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceChecklistVariables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceChecklistVariables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceChecklistVariables<DeSerializersT>,
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
    typeof AssetMaintenanceChecklistVariables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceChecklistVariables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistVariables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHECKLIST_VARIABLE_ID: OrderableEdmTypeField<
      AssetMaintenanceChecklistVariables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceChecklistVariables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesJobChecklistVariable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_JOB_CHECKLIST_VARIABLE: OneToManyLink<
      AssetMaintenanceChecklistVariables<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceChecklistVariables<DeSerializers>>;
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
         * Static representation of the {@link checklistVariableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_VARIABLE_ID: fieldBuilder.buildEdmTypeField(
          'ChecklistVariableId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceChecklistVariables)
      };
    }

    return this._schema;
  }
}
