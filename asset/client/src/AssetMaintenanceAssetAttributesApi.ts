/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetAttributes } from './AssetMaintenanceAssetAttributes';
import { AssetMaintenanceAssetAttributesRequestBuilder } from './AssetMaintenanceAssetAttributesRequestBuilder';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import { AssetMaintenanceSpecificationTypesApi } from './AssetMaintenanceSpecificationTypesApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { NoYes } from './NoYes';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceAssetAttributes<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceAssetAttributesApi<DeSerializersT> {
    return new AssetMaintenanceAssetAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceAssetAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceSpecificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SPECIFICATION_TYPE: OneToOneLink<
      AssetMaintenanceAssetAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceAssetAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetsApi<DeSerializersT>,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET: new OneToOneLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_SPECIFICATION_TYPE: new OneToOneLink(
        'AssetMaintenanceSpecificationType',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_ASSET_V_3: new OneToOneLink(
        'MaintenanceAssetV3',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetAttributes;

  requestBuilder(): AssetMaintenanceAssetAttributesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetAttributesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetAttributes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetAttributes<DeSerializersT>,
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
    typeof AssetMaintenanceAssetAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_NO_YES: EnumField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALUE_REAL: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_DATE: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE_STRING: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY: EnumField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALUE_INTEGER: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATTRIBUTE_TYPE_DATA_TYPE: EnumField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      EntAssetConditionType,
      true,
      true
    >;
    LINE: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceAssetAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceSpecificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SPECIFICATION_TYPE: OneToOneLink<
      AssetMaintenanceAssetAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceAssetAttributes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetAttributes<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
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
         * Static representation of the {@link valueNoYes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_NO_YES: fieldBuilder.buildEnumField('ValueNoYes', NoYes, true),
        /**
         * Static representation of the {@link valueReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_REAL: fieldBuilder.buildEdmTypeField(
          'ValueReal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link valueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_DATE: fieldBuilder.buildEdmTypeField(
          'ValueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link valueString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_STRING: fieldBuilder.buildEdmTypeField(
          'ValueString',
          'Edm.String',
          true
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
         * Static representation of the {@link mandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY: fieldBuilder.buildEnumField('Mandatory', NoYes, true),
        /**
         * Static representation of the {@link valueInteger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_INTEGER: fieldBuilder.buildEdmTypeField(
          'ValueInteger',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link attributeTypeDataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_DATA_TYPE: fieldBuilder.buildEnumField(
          'AttributeTypeDataType',
          EntAssetConditionType,
          true
        ),
        /**
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetAttributes)
      };
    }

    return this._schema;
  }
}
