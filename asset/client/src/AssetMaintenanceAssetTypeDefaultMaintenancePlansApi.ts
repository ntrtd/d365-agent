/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetTypeDefaultMaintenancePlans } from './AssetMaintenanceAssetTypeDefaultMaintenancePlans';
import { AssetMaintenanceAssetTypeDefaultMaintenancePlansRequestBuilder } from './AssetMaintenanceAssetTypeDefaultMaintenancePlansRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetTypeDefaultMaintenancePlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializersT>,
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
  ): AssetMaintenanceAssetTypeDefaultMaintenancePlansApi<DeSerializersT> {
    return new AssetMaintenanceAssetTypeDefaultMaintenancePlansApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceAssetTypeDefaultMaintenancePlans;

  requestBuilder(): AssetMaintenanceAssetTypeDefaultMaintenancePlansRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetTypeDefaultMaintenancePlansRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializersT>,
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
    typeof AssetMaintenanceAssetTypeDefaultMaintenancePlans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetTypeDefaultMaintenancePlans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_SETUP_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_PLAN_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceAssetTypeDefaultMaintenancePlans<DeSerializers>
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
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelProductId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ModelProductId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceAssetTypeSetupModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_SETUP_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeSetupModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenancePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'MaintenancePlanId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceAssetTypeDefaultMaintenancePlans
        )
      };
    }

    return this._schema;
  }
}
