/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationLifecycleStates } from './AssetMaintenanceFunctionalLocationLifecycleStates';
import { AssetMaintenanceFunctionalLocationLifecycleStatesRequestBuilder } from './AssetMaintenanceFunctionalLocationLifecycleStatesRequestBuilder';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceFunctionalLocationLifecycleStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationLifecycleStatesApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationLifecycleStatesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceFunctionalLocationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'AssetMaintenanceFunctionalLocation',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFunctionalLocationLifecycleStates;

  requestBuilder(): AssetMaintenanceFunctionalLocationLifecycleStatesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationLifecycleStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationLifecycleStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationLifecycleStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOW_NEW_SUB_LOCATIONS: EnumField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_DELETE_LOCATION: EnumField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_LOCATION_MAINTENANCE_ASSET: EnumField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FUNCTIONAL_LOCATION_ACTIVE: EnumField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_RENAME_LOCATION: EnumField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_INSTALL_MAINTENANCE_ASSETS: EnumField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAINTENANCE_ASSET_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationLifecycleStates<DeSerializers>
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
         * Static representation of the {@link lifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allowNewSubLocations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_NEW_SUB_LOCATIONS: fieldBuilder.buildEnumField(
          'AllowNewSubLocations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowDeleteLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_DELETE_LOCATION: fieldBuilder.buildEnumField(
          'AllowDeleteLocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link createLocationMaintenanceAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_LOCATION_MAINTENANCE_ASSET: fieldBuilder.buildEnumField(
          'CreateLocationMaintenanceAsset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link functionalLocationActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ACTIVE: fieldBuilder.buildEnumField(
          'FunctionalLocationActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowRenameLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_RENAME_LOCATION: fieldBuilder.buildEnumField(
          'AllowRenameLocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link allowInstallMaintenanceAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_INSTALL_MAINTENANCE_ASSETS: fieldBuilder.buildEnumField(
          'AllowInstallMaintenanceAssets',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetLifecycleStateId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceFunctionalLocationLifecycleStates
        )
      };
    }

    return this._schema;
  }
}
