/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetPostingProfileDisposals } from './FixedAssetPostingProfileDisposals';
import { FixedAssetPostingProfileDisposalsRequestBuilder } from './FixedAssetPostingProfileDisposalsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { AssetSoldScrap } from './AssetSoldScrap';
import { TableGroupAll } from './TableGroupAll';
import { AssetPostValue } from './AssetPostValue';
import { AssetPostType } from './AssetPostType';
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
export class FixedAssetPostingProfileDisposalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FixedAssetPostingProfileDisposals<DeSerializersT>, DeSerializersT>
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
  ): FixedAssetPostingProfileDisposalsApi<DeSerializersT> {
    return new FixedAssetPostingProfileDisposalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FixedAssetPostingProfileDisposals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileDisposalAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_DISPOSAL_ASSET_GROUP: OneToOneLink<
      FixedAssetPostingProfileDisposals<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileDisposalValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_DISPOSAL_VALUE_MODEL: OneToOneLink<
      FixedAssetPostingProfileDisposals<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      FixedAssetGroupsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      ASSET_POSTING_PROFILE_DISPOSAL_ASSET_GROUP: new OneToOneLink(
        'AssetPostingProfileDisposalAssetGroup',
        this,
        linkedApis[1]
      ),
      ASSET_POSTING_PROFILE_DISPOSAL_VALUE_MODEL: new OneToOneLink(
        'AssetPostingProfileDisposalValueModel',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = FixedAssetPostingProfileDisposals;

  requestBuilder(): FixedAssetPostingProfileDisposalsRequestBuilder<DeSerializersT> {
    return new FixedAssetPostingProfileDisposalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetPostingProfileDisposals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FixedAssetPostingProfileDisposals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedAssetPostingProfileDisposals<DeSerializersT>,
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
    typeof FixedAssetPostingProfileDisposals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetPostingProfileDisposals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALE_OR_SCRAP: EnumField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      AssetSoldScrap,
      true,
      true
    >;
    VALUE_MODEL_ID: OrderableEdmTypeField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_GROUPINGS: EnumField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POST_VALUE: EnumField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      AssetPostValue,
      true,
      true
    >;
    SALES_VALUE_TYPE: EnumField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      AssetPostType,
      true,
      true
    >;
    MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      FixedAssetPostingProfileDisposals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FixedAssetPostingProfileDisposals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileDisposalAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_DISPOSAL_ASSET_GROUP: OneToOneLink<
      FixedAssetPostingProfileDisposals<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileDisposalValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_DISPOSAL_VALUE_MODEL: OneToOneLink<
      FixedAssetPostingProfileDisposals<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FixedAssetPostingProfileDisposals<DeSerializers>>;
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
         * Static representation of the {@link postingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'PostingProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link saleOrScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_OR_SCRAP: fieldBuilder.buildEnumField(
          'SaleOrScrap',
          AssetSoldScrap,
          true
        ),
        /**
         * Static representation of the {@link valueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ValueModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountGroupings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_GROUPINGS: fieldBuilder.buildEnumField(
          'AccountGroupings',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_VALUE: fieldBuilder.buildEnumField(
          'PostValue',
          AssetPostValue,
          true
        ),
        /**
         * Static representation of the {@link salesValueType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_VALUE_TYPE: fieldBuilder.buildEnumField(
          'SalesValueType',
          AssetPostType,
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FixedAssetPostingProfileDisposals)
      };
    }

    return this._schema;
  }
}
