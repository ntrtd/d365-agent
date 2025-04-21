/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationTypes } from './AssetMaintenanceFunctionalLocationTypes';
import { AssetMaintenanceFunctionalLocationTypesRequestBuilder } from './AssetMaintenanceFunctionalLocationTypesRequestBuilder';
import { AssetMaintenanceFunctionalLocationLifecycleModelsApi } from './AssetMaintenanceFunctionalLocationLifecycleModelsApi';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi } from './AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi';
import { AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi } from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi';
import { AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi } from './AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi';
import { AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi } from './AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceFunctionalLocationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationLifecycleModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_LIFECYCLE_MODEL: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypeAttributeRequirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_ATTRIBUTE_REQUIREMENT: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypeMaintenanceSequense} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_MAINTENANCE_SEQUENSE: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAllowedByObjectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ALLOWED_BY_OBJECT_TYPE: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypePermittedSubType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_PERMITTED_SUB_TYPE: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceFunctionalLocationLifecycleModelsApi<DeSerializersT>,
      AssetMaintenanceAssetTypesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_LIFECYCLE_MODEL: new OneToOneLink(
        'AssetMaintenanceFunctionalLocationLifecycleModel',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE: new OneToOneLink(
        'AssetMaintenanceAssetType',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToManyLink(
        'AssetMaintenanceFunctionalLocation',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_ATTRIBUTE_REQUIREMENT:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationTypeAttributeRequirement',
          this,
          linkedApis[3]
        ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_MAINTENANCE_SEQUENSE:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationTypeMaintenanceSequense',
          this,
          linkedApis[4]
        ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ALLOWED_BY_OBJECT_TYPE:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationAllowedByObjectType',
          this,
          linkedApis[5]
        ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_PERMITTED_SUB_TYPE:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationTypePermittedSubType',
          this,
          linkedApis[6]
        )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFunctionalLocationTypes;

  requestBuilder(): AssetMaintenanceFunctionalLocationTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_ASSET_DIMENSION: EnumField<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MULTIPLE_INSTALLED_ASSETS: EnumField<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationLifecycleModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_LIFECYCLE_MODEL: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationLifecycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypeAttributeRequirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_ATTRIBUTE_REQUIREMENT: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypeAttributeRequirementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypeMaintenanceSequense} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_MAINTENANCE_SEQUENSE: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAllowedByObjectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ALLOWED_BY_OBJECT_TYPE: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationTypePermittedSubType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE_PERMITTED_SUB_TYPE: OneToManyLink<
      AssetMaintenanceFunctionalLocationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypePermittedSubTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationTypes<DeSerializers>
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
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link updateAssetDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_ASSET_DIMENSION: fieldBuilder.buildEnumField(
          'UpdateAssetDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowMultipleInstalledAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MULTIPLE_INSTALLED_ASSETS: fieldBuilder.buildEnumField(
          'AllowMultipleInstalledAssets',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleModelId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceFunctionalLocationTypes)
      };
    }

    return this._schema;
  }
}
