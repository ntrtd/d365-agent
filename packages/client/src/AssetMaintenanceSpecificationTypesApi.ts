/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceSpecificationTypes } from './AssetMaintenanceSpecificationTypes';
import { AssetMaintenanceSpecificationTypesRequestBuilder } from './AssetMaintenanceSpecificationTypesRequestBuilder';
import { AssetMaintenanceAssetTypeAttributesApi } from './AssetMaintenanceAssetTypeAttributesApi';
import { AssetMaintenanceAssetAttributesApi } from './AssetMaintenanceAssetAttributesApi';
import { AssetMaintenanceFunctionalLocationAttributesApi } from './AssetMaintenanceFunctionalLocationAttributesApi';
import { AssetMaintenanceFunctionalLocationAttributeSpecificationsApi } from './AssetMaintenanceFunctionalLocationAttributeSpecificationsApi';
import { AssetMaintenanceFunctionalLocationAttributesV2Api } from './AssetMaintenanceFunctionalLocationAttributesV2Api';
import { EntAssetConditionType } from './EntAssetConditionType';
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
export class AssetMaintenanceSpecificationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
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
  ): AssetMaintenanceSpecificationTypesApi<DeSerializersT> {
    return new AssetMaintenanceSpecificationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttributeSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_SPECIFICATION: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetMaintenanceFunctionalLocationAttributeV2AttributeTypeId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_V_2_ATTRIBUTE_TYPE_ID: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetTypeAttributesApi<DeSerializersT>,
      AssetMaintenanceAssetAttributesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAttributesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAttributesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET_TYPE_ATTRIBUTE: new OneToManyLink(
        'AssetMaintenanceAssetTypeAttribute',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_ASSET_ATTRIBUTE: new OneToManyLink(
        'AssetMaintenanceAssetAttribute',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationAttribute',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_SPECIFICATION:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationAttributeSpecification',
          this,
          linkedApis[3]
        ),
      ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_V_2_ATTRIBUTE_TYPE_ID:
        new OneToManyLink(
          'EntAssetMaintenanceFunctionalLocationAttributeV2AttributeTypeId',
          this,
          linkedApis[4]
        )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceSpecificationTypes;

  requestBuilder(): AssetMaintenanceSpecificationTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceSpecificationTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceSpecificationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceSpecificationTypes<DeSerializersT>,
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
    typeof AssetMaintenanceSpecificationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceSpecificationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceSpecificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceSpecificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceSpecificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_TYPE: EnumField<
      AssetMaintenanceSpecificationTypes<DeSerializers>,
      DeSerializersT,
      EntAssetConditionType,
      true,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceSpecificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttributeSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_SPECIFICATION: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetMaintenanceFunctionalLocationAttributeV2AttributeTypeId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_V_2_ATTRIBUTE_TYPE_ID: OneToManyLink<
      AssetMaintenanceSpecificationTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceSpecificationTypes<DeSerializers>>;
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
         * Static representation of the {@link attributeTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'AttributeTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEnumField(
          'DataType',
          EntAssetConditionType,
          true
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceSpecificationTypes)
      };
    }

    return this._schema;
  }
}
