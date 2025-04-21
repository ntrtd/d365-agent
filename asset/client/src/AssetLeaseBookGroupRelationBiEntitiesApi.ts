/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseBookGroupRelationBiEntities } from './AssetLeaseBookGroupRelationBiEntities';
import { AssetLeaseBookGroupRelationBiEntitiesRequestBuilder } from './AssetLeaseBookGroupRelationBiEntitiesRequestBuilder';
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
export class AssetLeaseBookGroupRelationBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeaseBookGroupRelationBiEntities<DeSerializersT>,
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
  ): AssetLeaseBookGroupRelationBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseBookGroupRelationBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseBookGroupRelationBiEntities;

  requestBuilder(): AssetLeaseBookGroupRelationBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseBookGroupRelationBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseBookGroupRelationBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseBookGroupRelationBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseBookGroupRelationBiEntities<DeSerializersT>,
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
    typeof AssetLeaseBookGroupRelationBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseBookGroupRelationBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseBookGroupRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      AssetLeaseBookGroupRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseBookGroupRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseBookGroupRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseBookGroupRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GROUP_TABLE: OrderableEdmTypeField<
      AssetLeaseBookGroupRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BOOK_TABLE: OrderableEdmTypeField<
      AssetLeaseBookGroupRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetLeaseBookGroupRelationBiEntities<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link groupTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_TABLE: fieldBuilder.buildEdmTypeField(
          'GroupTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bookTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TABLE: fieldBuilder.buildEdmTypeField(
          'BookTable',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLeaseBookGroupRelationBiEntities)
      };
    }

    return this._schema;
  }
}
