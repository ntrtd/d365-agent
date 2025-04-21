/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationAllowedByObjectTypes } from './AssetMaintenanceFunctionalLocationAllowedByObjectTypes';
import { AssetMaintenanceFunctionalLocationAllowedByObjectTypesRequestBuilder } from './AssetMaintenanceFunctionalLocationAllowedByObjectTypesRequestBuilder';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { AssetMaintenanceFunctionalLocationTypesApi } from './AssetMaintenanceFunctionalLocationTypesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetTypesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET_TYPE: new OneToOneLink(
        'AssetMaintenanceAssetType',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: new OneToOneLink(
        'AssetMaintenanceFunctionalLocationType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFunctionalLocationAllowedByObjectTypes;

  requestBuilder(): AssetMaintenanceFunctionalLocationAllowedByObjectTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAllowedByObjectTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationAllowedByObjectTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationAllowedByObjectTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationAllowedByObjectTypes<DeSerializers>
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
         * Static representation of the {@link functionalLocationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationTypeId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceFunctionalLocationAllowedByObjectTypes
        )
      };
    }

    return this._schema;
  }
}
