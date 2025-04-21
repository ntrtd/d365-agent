/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceCriticalities } from './AssetMaintenanceCriticalities';
import { AssetMaintenanceCriticalitiesRequestBuilder } from './AssetMaintenanceCriticalitiesRequestBuilder';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
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
export class AssetMaintenanceCriticalitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceCriticalities<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceCriticalitiesApi<DeSerializersT> {
    return new AssetMaintenanceCriticalitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link criticalityMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CRITICALITY_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceCriticalities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CRITICALITY_MAINTENANCE_WORK_ORDER_HEADERS: new OneToManyLink(
        'Criticality_MaintenanceWorkOrderHeaders',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceCriticalities;

  requestBuilder(): AssetMaintenanceCriticalitiesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceCriticalitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceCriticalities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceCriticalities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceCriticalities<DeSerializersT>,
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
    typeof AssetMaintenanceCriticalities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceCriticalities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceCriticalities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CRITICALITY: OrderableEdmTypeField<
      AssetMaintenanceCriticalities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceCriticalities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_FACTOR: OrderableEdmTypeField<
      AssetMaintenanceCriticalities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link criticalityMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CRITICALITY_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceCriticalities<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceCriticalities<DeSerializers>>;
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
         * Static representation of the {@link criticality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITICALITY: fieldBuilder.buildEdmTypeField(
          'Criticality',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link ratingFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_FACTOR: fieldBuilder.buildEdmTypeField(
          'RatingFactor',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceCriticalities)
      };
    }

    return this._schema;
  }
}
