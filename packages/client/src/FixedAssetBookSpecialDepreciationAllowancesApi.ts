/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetBookSpecialDepreciationAllowances } from './FixedAssetBookSpecialDepreciationAllowances';
import { FixedAssetBookSpecialDepreciationAllowancesRequestBuilder } from './FixedAssetBookSpecialDepreciationAllowancesRequestBuilder';
import { AssetSpecialDepreciationAllowancesApi } from './AssetSpecialDepreciationAllowancesApi';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { FixedAssetsApi } from './FixedAssetsApi';
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
export class FixedAssetBookSpecialDepreciationAllowancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
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
  ): FixedAssetBookSpecialDepreciationAllowancesApi<DeSerializersT> {
    return new FixedAssetBookSpecialDepreciationAllowancesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_SPECIAL_DEPRECIATION_ALLOWANCE: OneToOneLink<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      AssetSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetBookV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_V_2: OneToOneLink<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET: OneToOneLink<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetSpecialDepreciationAllowancesApi<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_SPECIAL_DEPRECIATION_ALLOWANCE: new OneToOneLink(
        'AssetSpecialDepreciationAllowance',
        this,
        linkedApis[0]
      ),
      FIXED_ASSET_BOOK_V_2: new OneToOneLink(
        'FixedAssetBookV2',
        this,
        linkedApis[1]
      ),
      FIXED_ASSET: new OneToOneLink('FixedAsset', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = FixedAssetBookSpecialDepreciationAllowances;

  requestBuilder(): FixedAssetBookSpecialDepreciationAllowancesRequestBuilder<DeSerializersT> {
    return new FixedAssetBookSpecialDepreciationAllowancesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
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
    typeof FixedAssetBookSpecialDepreciationAllowances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetBookSpecialDepreciationAllowances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_ASSET_ID: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK_ID: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOWANCE_ID: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_SPECIAL_DEPRECIATION_ALLOWANCE: OneToOneLink<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      AssetSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetBookV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_V_2: OneToOneLink<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET: OneToOneLink<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      FixedAssetBookSpecialDepreciationAllowances<DeSerializers>
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
         * Static representation of the {@link fixedAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'FixedAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_ID: fieldBuilder.buildEdmTypeField('BookId', 'Edm.String', false),
        /**
         * Static representation of the {@link specialDepreciationAllowanceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOWANCE_ID: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationAllowanceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
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
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FixedAssetBookSpecialDepreciationAllowances
        )
      };
    }

    return this._schema;
  }
}
