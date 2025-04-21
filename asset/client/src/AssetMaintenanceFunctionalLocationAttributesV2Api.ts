/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationAttributesV2 } from './AssetMaintenanceFunctionalLocationAttributesV2';
import { AssetMaintenanceFunctionalLocationAttributesV2RequestBuilder } from './AssetMaintenanceFunctionalLocationAttributesV2RequestBuilder';
import { AssetMaintenanceSpecificationTypesApi } from './AssetMaintenanceSpecificationTypesApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
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
export class AssetMaintenanceFunctionalLocationAttributesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationAttributesV2Api<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAttributesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link entAssetMaintenanceAttributeTypeRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_ATTRIBUTE_TYPE_ROLE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link entAssetMaintenanceFunctionalLocationRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROLE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENT_ASSET_MAINTENANCE_ATTRIBUTE_TYPE_ROLE: new OneToOneLink(
        'EntAssetMaintenanceAttributeTypeRole',
        this,
        linkedApis[0]
      ),
      ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROLE: new OneToOneLink(
        'EntAssetMaintenanceFunctionalLocationRole',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFunctionalLocationAttributesV2;

  requestBuilder(): AssetMaintenanceFunctionalLocationAttributesV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationAttributesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationAttributesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationAttributesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_STRING: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link entAssetMaintenanceAttributeTypeRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_ATTRIBUTE_TYPE_ROLE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceSpecificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link entAssetMaintenanceFunctionalLocationRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROLE: OneToOneLink<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationAttributesV2<DeSerializers>
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
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
         * Static representation of the {@link valueString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_STRING: fieldBuilder.buildEdmTypeField(
          'ValueString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceFunctionalLocationAttributesV2
        )
      };
    }

    return this._schema;
  }
}
