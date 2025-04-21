/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceJobGroups } from './AssetMaintenanceJobGroups';
import { AssetMaintenanceJobGroupsRequestBuilder } from './AssetMaintenanceJobGroupsRequestBuilder';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
import { AssetMaintenanceScheduledExecutionsApi } from './AssetMaintenanceScheduledExecutionsApi';
import { AssetMaintenanceAssetCriticalitiesApi } from './AssetMaintenanceAssetCriticalitiesApi';
import { AssetMaintenanceWorkersResponsibleApi } from './AssetMaintenanceWorkersResponsibleApi';
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
export class AssetMaintenanceJobGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceJobGroups<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceJobGroupsApi<DeSerializersT> {
    return new AssetMaintenanceJobGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceJobTypesApi<DeSerializersT>,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_JOB_TYPE: new OneToManyLink(
        'AssetMaintenanceJobType',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_SCHEDULED_EXECUTION: new OneToManyLink(
        'AssetMaintenanceScheduledExecution',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_ASSET_CRITICALITY: new OneToManyLink(
        'AssetMaintenanceAssetCriticality',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_WORKER_RESPONSIBLE: new OneToManyLink(
        'AssetMaintenanceWorkerResponsible',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceJobGroups;

  requestBuilder(): AssetMaintenanceJobGroupsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceJobGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceJobGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceJobGroups<DeSerializersT>,
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
    typeof AssetMaintenanceJobGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceJobGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceJobGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_GROUP_ID: OrderableEdmTypeField<
      AssetMaintenanceJobGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceJobGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceJobGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceJobGroups<DeSerializers>>;
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
         * Static representation of the {@link jobGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'JobGroupId',
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceJobGroups)
      };
    }

    return this._schema;
  }
}
