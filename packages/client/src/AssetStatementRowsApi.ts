/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetStatementRows } from './AssetStatementRows';
import { AssetStatementRowsRequestBuilder } from './AssetStatementRowsRequestBuilder';
import { FixedAssetsApi } from './FixedAssetsApi';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { AssetIntervalRelation } from './AssetIntervalRelation';
import { RowType } from './RowType';
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
export class AssetStatementRowsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetStatementRows<DeSerializersT>, DeSerializersT>
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
  ): AssetStatementRowsApi<DeSerializersT> {
    return new AssetStatementRowsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fixedAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET: OneToOneLink<
      AssetStatementRows<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_GROUP: OneToOneLink<
      AssetStatementRows<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetsApi<DeSerializersT>,
      FixedAssetGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FIXED_ASSET: new OneToOneLink('FixedAsset', this, linkedApis[0]),
      FIXED_ASSET_GROUP: new OneToOneLink(
        'FixedAssetGroup',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetStatementRows;

  requestBuilder(): AssetStatementRowsRequestBuilder<DeSerializersT> {
    return new AssetStatementRowsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetStatementRows<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetStatementRows<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetStatementRows<DeSerializersT>,
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
    typeof AssetStatementRows,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetStatementRows,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetStatementRows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetStatementRows<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      AssetStatementRows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      AssetStatementRows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROW_NAME: OrderableEdmTypeField<
      AssetStatementRows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_INTERVAL_RELATION: EnumField<
      AssetStatementRows<DeSerializers>,
      DeSerializersT,
      AssetIntervalRelation,
      true,
      true
    >;
    ROW_TYPE: EnumField<
      AssetStatementRows<DeSerializers>,
      DeSerializersT,
      RowType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET: OneToOneLink<
      AssetStatementRows<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_GROUP: OneToOneLink<
      AssetStatementRows<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetStatementRows<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fromFixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FromFixedAssetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toFixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ToFixedAssetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rowName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_NAME: fieldBuilder.buildEdmTypeField('RowName', 'Edm.String', true),
        /**
         * Static representation of the {@link assetIntervalRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_INTERVAL_RELATION: fieldBuilder.buildEnumField(
          'AssetIntervalRelation',
          AssetIntervalRelation,
          true
        ),
        /**
         * Static representation of the {@link rowType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_TYPE: fieldBuilder.buildEnumField('RowType', RowType, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetStatementRows)
      };
    }

    return this._schema;
  }
}
