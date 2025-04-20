/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests } from './WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests';
import { WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsRequestBuilder } from './WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsRequestBuilder';
import { WmsLocationType } from './WmsLocationType';
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
export class WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializersT>,
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
  ): WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsApi<DeSerializersT> {
    return new WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor =
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests;

  requestBuilder(): WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsRequestBuilder<DeSerializersT> {
    return new WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializersT>,
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
    typeof WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_LOCATION_PROFILE_ID: OrderableEdmTypeField<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_TYPE: EnumField<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializers>,
      DeSerializersT,
      WmsLocationType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<DeSerializers>
    >;
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
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseLocationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_TYPE: fieldBuilder.buildEnumField(
          'WarehouseLocationType',
          WmsLocationType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests
        )
      };
    }

    return this._schema;
  }
}
