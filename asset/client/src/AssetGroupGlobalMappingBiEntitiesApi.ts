/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetGroupGlobalMappingBiEntities } from './AssetGroupGlobalMappingBiEntities';
import { AssetGroupGlobalMappingBiEntitiesRequestBuilder } from './AssetGroupGlobalMappingBiEntitiesRequestBuilder';
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
export class AssetGroupGlobalMappingBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetGroupGlobalMappingBiEntities<DeSerializersT>, DeSerializersT>
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
  ): AssetGroupGlobalMappingBiEntitiesApi<DeSerializersT> {
    return new AssetGroupGlobalMappingBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetGroupGlobalMappingBiEntities;

  requestBuilder(): AssetGroupGlobalMappingBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetGroupGlobalMappingBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetGroupGlobalMappingBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetGroupGlobalMappingBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetGroupGlobalMappingBiEntities<DeSerializersT>,
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
    typeof AssetGroupGlobalMappingBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetGroupGlobalMappingBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      AssetGroupGlobalMappingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      AssetGroupGlobalMappingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetGroupGlobalMappingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      AssetGroupGlobalMappingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_GROUP_GLOBAL: OrderableEdmTypeField<
      AssetGroupGlobalMappingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GROUP_DATA_AREA_ID: OrderableEdmTypeField<
      AssetGroupGlobalMappingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetGroupGlobalMappingBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField('GroupId', 'Edm.String', true),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetGroupGlobal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP_GLOBAL: fieldBuilder.buildEdmTypeField(
          'AssetGroupGlobal',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link groupDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'GroupDataAreaId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetGroupGlobalMappingBiEntities)
      };
    }

    return this._schema;
  }
}
