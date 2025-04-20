/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseAisles } from './WarehouseAisles';
import { WarehouseAislesRequestBuilder } from './WarehouseAislesRequestBuilder';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { WarehousesApi } from './WarehousesApi';
import { NoYes } from './NoYes';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WarehouseAislesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarehouseAisles<DeSerializersT>, DeSerializersT>
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
  ): WarehouseAislesApi<DeSerializersT> {
    return new WarehouseAislesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseAisles<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      WarehouseAisles<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseLocationsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_LOCATIONS: new OneToManyLink(
        'WarehouseLocations',
        this,
        linkedApis[0]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WarehouseAisles;

  requestBuilder(): WarehouseAislesRequestBuilder<DeSerializersT> {
    return new WarehouseAislesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseAisles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarehouseAisles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WarehouseAisles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WarehouseAisles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseAisles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseAisles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      WarehouseAisles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AISLE_ID: OrderableEdmTypeField<
      WarehouseAisles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SORT_ORDER_CODE_ASSIGNED_DESCENDING: EnumField<
      WarehouseAisles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL_STARTING_SORT_ORDER_CODE: OrderableEdmTypeField<
      WarehouseAisles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AISLE_NAME: OrderableEdmTypeField<
      WarehouseAisles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AISLE_NUMBER: OrderableEdmTypeField<
      WarehouseAisles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseAisles<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      WarehouseAisles<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseAisles<DeSerializers>>;
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
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link aisleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AISLE_ID: fieldBuilder.buildEdmTypeField(
          'AisleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isSortOrderCodeAssignedDescending} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SORT_ORDER_CODE_ASSIGNED_DESCENDING: fieldBuilder.buildEnumField(
          'IsSortOrderCodeAssignedDescending',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link manualStartingSortOrderCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_STARTING_SORT_ORDER_CODE: fieldBuilder.buildEdmTypeField(
          'ManualStartingSortOrderCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link aisleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AISLE_NAME: fieldBuilder.buildEdmTypeField(
          'AisleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aisleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AISLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'AisleNumber',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseAisles)
      };
    }

    return this._schema;
  }
}
