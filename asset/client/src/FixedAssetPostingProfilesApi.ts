/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetPostingProfiles } from './FixedAssetPostingProfiles';
import { FixedAssetPostingProfilesRequestBuilder } from './FixedAssetPostingProfilesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { FixedAssetsApi } from './FixedAssetsApi';
import { AssetParametersApi } from './AssetParametersApi';
import { AssetTransType } from './AssetTransType';
import { TableGroupAll } from './TableGroupAll';
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
export class FixedAssetPostingProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FixedAssetPostingProfiles<DeSerializersT>, DeSerializersT>
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
  ): FixedAssetPostingProfilesApi<DeSerializersT> {
    return new FixedAssetPostingProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_ASSET_GROUP: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_VALUE_MODEL: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileAssetNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_ASSET_NUMBER: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      AssetParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      FixedAssetGroupsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>,
      FixedAssetsApi<DeSerializersT>,
      AssetParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      ASSET_POSTING_PROFILE_ASSET_GROUP: new OneToOneLink(
        'AssetPostingProfileAssetGroup',
        this,
        linkedApis[1]
      ),
      ASSET_POSTING_PROFILE_VALUE_MODEL: new OneToOneLink(
        'AssetPostingProfileValueModel',
        this,
        linkedApis[2]
      ),
      ASSET_POSTING_PROFILE_ASSET_NUMBER: new OneToOneLink(
        'AssetPostingProfileAssetNumber',
        this,
        linkedApis[3]
      ),
      ASSET_PARAMETER: new OneToOneLink('AssetParameter', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = FixedAssetPostingProfiles;

  requestBuilder(): FixedAssetPostingProfilesRequestBuilder<DeSerializersT> {
    return new FixedAssetPostingProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetPostingProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedAssetPostingProfiles<DeSerializersT>,
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
    typeof FixedAssetPostingProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetPostingProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      AssetTransType,
      true,
      true
    >;
    VALUE_MODEL_ID: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_GROUPINGS: EnumField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_RULE_ID: OrderableEdmTypeField<
      FixedAssetPostingProfiles<DeSerializers>,
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
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_ASSET_GROUP: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_VALUE_MODEL: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetPostingProfileAssetNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_POSTING_PROFILE_ASSET_NUMBER: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER: OneToOneLink<
      FixedAssetPostingProfiles<DeSerializersT>,
      DeSerializersT,
      AssetParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FixedAssetPostingProfiles<DeSerializers>>;
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          AssetTransType,
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
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
         * Static representation of the {@link allocationRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'AllocationRuleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FixedAssetPostingProfiles)
      };
    }

    return this._schema;
  }
}
