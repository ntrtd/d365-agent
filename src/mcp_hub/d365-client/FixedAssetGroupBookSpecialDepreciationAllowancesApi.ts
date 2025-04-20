/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetGroupBookSpecialDepreciationAllowances } from './FixedAssetGroupBookSpecialDepreciationAllowances';
import { FixedAssetGroupBookSpecialDepreciationAllowancesRequestBuilder } from './FixedAssetGroupBookSpecialDepreciationAllowancesRequestBuilder';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { AssetSpecialDepreciationAllowancesApi } from './AssetSpecialDepreciationAllowancesApi';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
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
export class FixedAssetGroupBookSpecialDepreciationAllowancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
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
  ): FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT> {
    return new FixedAssetGroupBookSpecialDepreciationAllowancesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupSetupBonusAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_SETUP_BONUS_ASSET_GROUP: OneToOneLink<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_SPECIAL_DEPRECIATION_ALLOWANCE: OneToOneLink<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      AssetSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupSetupBonusValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_SETUP_BONUS_VALUE_MODEL: OneToOneLink<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetGroupsApi<DeSerializersT>,
      AssetSpecialDepreciationAllowancesApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_GROUP_SETUP_BONUS_ASSET_GROUP: new OneToOneLink(
        'AssetGroupSetupBonusAssetGroup',
        this,
        linkedApis[0]
      ),
      ASSET_SPECIAL_DEPRECIATION_ALLOWANCE: new OneToOneLink(
        'AssetSpecialDepreciationAllowance',
        this,
        linkedApis[1]
      ),
      ASSET_GROUP_SETUP_BONUS_VALUE_MODEL: new OneToOneLink(
        'AssetGroupSetupBonusValueModel',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = FixedAssetGroupBookSpecialDepreciationAllowances;

  requestBuilder(): FixedAssetGroupBookSpecialDepreciationAllowancesRequestBuilder<DeSerializersT> {
    return new FixedAssetGroupBookSpecialDepreciationAllowancesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
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
    typeof FixedAssetGroupBookSpecialDepreciationAllowances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetGroupBookSpecialDepreciationAllowances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK_ID: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOWANCE_ID: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupSetupBonusAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_SETUP_BONUS_ASSET_GROUP: OneToOneLink<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetSpecialDepreciationAllowance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_SPECIAL_DEPRECIATION_ALLOWANCE: OneToOneLink<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      AssetSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupSetupBonusValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_SETUP_BONUS_VALUE_MODEL: OneToOneLink<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      FixedAssetGroupBookSpecialDepreciationAllowances<DeSerializers>
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
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
          FixedAssetGroupBookSpecialDepreciationAllowances
        )
      };
    }

    return this._schema;
  }
}
