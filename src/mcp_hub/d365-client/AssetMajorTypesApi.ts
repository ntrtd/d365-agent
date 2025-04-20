/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMajorTypes } from './AssetMajorTypes';
import { AssetMajorTypesRequestBuilder } from './AssetMajorTypesRequestBuilder';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { AssetTypeJp } from './AssetTypeJp';
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
export class AssetMajorTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMajorTypes<DeSerializersT>, DeSerializersT>
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
  ): AssetMajorTypesApi<DeSerializersT> {
    return new AssetMajorTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_GROUP: OneToOneLink<
      AssetMajorTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FixedAssetGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FIXED_ASSET_GROUP: new OneToOneLink(
        'FixedAssetGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMajorTypes;

  requestBuilder(): AssetMajorTypesRequestBuilder<DeSerializersT> {
    return new AssetMajorTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMajorTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetMajorTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetMajorTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AssetMajorTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMajorTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMajorTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAJOR_TYPE_ID: OrderableEdmTypeField<
      AssetMajorTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMajorTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE_JP: EnumField<
      AssetMajorTypes<DeSerializers>,
      DeSerializersT,
      AssetTypeJp,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_GROUP: OneToOneLink<
      AssetMajorTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMajorTypes<DeSerializers>>;
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
         * Static representation of the {@link majorTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAJOR_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MajorTypeId',
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
         * Static representation of the {@link assetTypeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TYPE_JP: fieldBuilder.buildEnumField(
          'AssetType_JP',
          AssetTypeJp,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMajorTypes)
      };
    }

    return this._schema;
  }
}
