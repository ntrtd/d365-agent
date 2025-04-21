/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetSortings } from './AssetSortings';
import { AssetSortingsRequestBuilder } from './AssetSortingsRequestBuilder';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
import { AssetSortValue } from './AssetSortValue';
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
export class AssetSortingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetSortings<DeSerializersT>, DeSerializersT>
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
  ): AssetSortingsApi<DeSerializersT> {
    return new AssetSortingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SortField2Asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SORT_FIELD_2_ASSET: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SortField1Asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SORT_FIELD_1_ASSET: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SortField3Asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SORT_FIELD_3_ASSET: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sortField1ValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SORT_FIELD_1_VALUE_MODEL: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sortField3ValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SORT_FIELD_3_VALUE_MODEL: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sortField2ValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SORT_FIELD_2_VALUE_MODEL: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_BOOK_V_2_SORT_FIELD_2_ASSET: new OneToManyLink(
        'AssetBookV2SortField2Asset',
        this,
        linkedApis[0]
      ),
      ASSET_BOOK_V_2_SORT_FIELD_1_ASSET: new OneToManyLink(
        'AssetBookV2SortField1Asset',
        this,
        linkedApis[1]
      ),
      ASSET_BOOK_V_2_SORT_FIELD_3_ASSET: new OneToManyLink(
        'AssetBookV2SortField3Asset',
        this,
        linkedApis[2]
      ),
      SORT_FIELD_1_VALUE_MODEL: new OneToManyLink(
        'SortField1ValueModel',
        this,
        linkedApis[3]
      ),
      SORT_FIELD_3_VALUE_MODEL: new OneToManyLink(
        'SortField3ValueModel',
        this,
        linkedApis[4]
      ),
      SORT_FIELD_2_VALUE_MODEL: new OneToManyLink(
        'SortField2ValueModel',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = AssetSortings;

  requestBuilder(): AssetSortingsRequestBuilder<DeSerializersT> {
    return new AssetSortingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetSortings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetSortings<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetSortings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AssetSortings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AssetSortings, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetSortings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SORTING: EnumField<
      AssetSortings<DeSerializers>,
      DeSerializersT,
      AssetSortValue,
      true,
      true
    >;
    IDENTIFICATION: OrderableEdmTypeField<
      AssetSortings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetSortings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SortField2Asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SORT_FIELD_2_ASSET: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SortField1Asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SORT_FIELD_1_ASSET: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SortField3Asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SORT_FIELD_3_ASSET: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sortField1ValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SORT_FIELD_1_VALUE_MODEL: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sortField3ValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SORT_FIELD_3_VALUE_MODEL: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sortField2ValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SORT_FIELD_2_VALUE_MODEL: OneToManyLink<
      AssetSortings<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetSortings<DeSerializers>>;
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
         * Static representation of the {@link sorting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING: fieldBuilder.buildEnumField('Sorting', AssetSortValue, true),
        /**
         * Static representation of the {@link identification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'Identification',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetSortings)
      };
    }

    return this._schema;
  }
}
