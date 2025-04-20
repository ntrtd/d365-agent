/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalWarehouseManagementSystems } from './ExternalWarehouseManagementSystems';
import { ExternalWarehouseManagementSystemsRequestBuilder } from './ExternalWarehouseManagementSystemsRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { ExternalWarehouseSourceSystemRelationsApi } from './ExternalWarehouseSourceSystemRelationsApi';
import { WhsewManagementSystemType } from './WhsewManagementSystemType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ExternalWarehouseManagementSystemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExternalWarehouseManagementSystems<DeSerializersT>,
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
  ): ExternalWarehouseManagementSystemsApi<DeSerializersT> {
    return new ExternalWarehouseManagementSystemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToManyLink<
      ExternalWarehouseManagementSystems<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalWarehouseSourceSystemRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_SOURCE_SYSTEM_RELATION: OneToManyLink<
      ExternalWarehouseManagementSystems<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseSourceSystemRelationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      ExternalWarehouseSourceSystemRelationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE: new OneToManyLink('Warehouse', this, linkedApis[0]),
      EXTERNAL_WAREHOUSE_SOURCE_SYSTEM_RELATION: new OneToManyLink(
        'ExternalWarehouseSourceSystemRelation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ExternalWarehouseManagementSystems;

  requestBuilder(): ExternalWarehouseManagementSystemsRequestBuilder<DeSerializersT> {
    return new ExternalWarehouseManagementSystemsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExternalWarehouseManagementSystems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalWarehouseManagementSystems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalWarehouseManagementSystems<DeSerializersT>,
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
    typeof ExternalWarehouseManagementSystems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalWarehouseManagementSystems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExternalWarehouseManagementSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: OrderableEdmTypeField<
      ExternalWarehouseManagementSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_TYPE: EnumField<
      ExternalWarehouseManagementSystems<DeSerializers>,
      DeSerializersT,
      WhsewManagementSystemType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToManyLink<
      ExternalWarehouseManagementSystems<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalWarehouseSourceSystemRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_SOURCE_SYSTEM_RELATION: OneToManyLink<
      ExternalWarehouseManagementSystems<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseSourceSystemRelationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalWarehouseManagementSystems<DeSerializers>>;
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
         * Static representation of the {@link externalWarehouseManagementSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalWarehouseManagementSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link externalWarehouseManagementSystemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_TYPE: fieldBuilder.buildEnumField(
          'ExternalWarehouseManagementSystemType',
          WhsewManagementSystemType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalWarehouseManagementSystems)
      };
    }

    return this._schema;
  }
}
