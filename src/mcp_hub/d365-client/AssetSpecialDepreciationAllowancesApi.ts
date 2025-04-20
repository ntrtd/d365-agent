/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetSpecialDepreciationAllowances } from './AssetSpecialDepreciationAllowances';
import { AssetSpecialDepreciationAllowancesRequestBuilder } from './AssetSpecialDepreciationAllowancesRequestBuilder';
import { FixedAssetGroupBookSpecialDepreciationAllowancesApi } from './FixedAssetGroupBookSpecialDepreciationAllowancesApi';
import { FixedAssetBookSpecialDepreciationAllowancesApi } from './FixedAssetBookSpecialDepreciationAllowancesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetSpecialDepreciationAllowancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetSpecialDepreciationAllowances<DeSerializersT>,
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
  ): AssetSpecialDepreciationAllowancesApi<DeSerializersT> {
    return new AssetSpecialDepreciationAllowancesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetGroupBookSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_GROUP_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: OneToManyLink<
      AssetSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetBookSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: OneToManyLink<
      AssetSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>,
      FixedAssetBookSpecialDepreciationAllowancesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FIXED_ASSET_GROUP_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: new OneToManyLink(
        'FixedAssetGroupBookSpecialDepreciationAllowance',
        this,
        linkedApis[0]
      ),
      FIXED_ASSET_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: new OneToManyLink(
        'FixedAssetBookSpecialDepreciationAllowance',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetSpecialDepreciationAllowances;

  requestBuilder(): AssetSpecialDepreciationAllowancesRequestBuilder<DeSerializersT> {
    return new AssetSpecialDepreciationAllowancesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetSpecialDepreciationAllowances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetSpecialDepreciationAllowances<DeSerializersT>,
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
    typeof AssetSpecialDepreciationAllowances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetSpecialDepreciationAllowances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOWANCE_ID: OrderableEdmTypeField<
      AssetSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      AssetSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      AssetSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetGroupBookSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_GROUP_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: OneToManyLink<
      AssetSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetBookSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_SPECIAL_DEPRECIATION_ALLOWANCE: OneToManyLink<
      AssetSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetSpecialDepreciationAllowances<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetSpecialDepreciationAllowances)
      };
    }

    return this._schema;
  }
}
