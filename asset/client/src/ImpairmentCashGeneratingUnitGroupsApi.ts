/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImpairmentCashGeneratingUnitGroups } from './ImpairmentCashGeneratingUnitGroups';
import { ImpairmentCashGeneratingUnitGroupsRequestBuilder } from './ImpairmentCashGeneratingUnitGroupsRequestBuilder';
import { ImpairmentCashGeneratingUnitsApi } from './ImpairmentCashGeneratingUnitsApi';
import { AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi } from './AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi';
import { AssetImpairmentCguGroupStatusJp } from './AssetImpairmentCguGroupStatusJp';
import { AssetImpairmentSharedAssetsMethodJp } from './AssetImpairmentSharedAssetsMethodJp';
import { AssetImpairmentSharedAssetAllocBasisJp } from './AssetImpairmentSharedAssetAllocBasisJp';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetImpairmentSharedAssetPriorityJp } from './AssetImpairmentSharedAssetPriorityJp';
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
export class ImpairmentCashGeneratingUnitGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
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
  ): ImpairmentCashGeneratingUnitGroupsApi<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cguGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CGU_GROUPS: OneToManyLink<
      ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
      DeSerializersT,
      ImpairmentCashGeneratingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetImpairmentCashGeneratingUnitSharedAssetsAllocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_IMPAIRMENT_CASH_GENERATING_UNIT_SHARED_ASSETS_ALLOCATION: OneToManyLink<
      ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
      DeSerializersT,
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ImpairmentCashGeneratingUnitsApi<DeSerializersT>,
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CGU_GROUPS: new OneToManyLink('CGUGroups', this, linkedApis[0]),
      ASSET_IMPAIRMENT_CASH_GENERATING_UNIT_SHARED_ASSETS_ALLOCATION:
        new OneToManyLink(
          'AssetImpairmentCashGeneratingUnitSharedAssetsAllocation',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = ImpairmentCashGeneratingUnitGroups;

  requestBuilder(): ImpairmentCashGeneratingUnitGroupsRequestBuilder<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
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
    typeof ImpairmentCashGeneratingUnitGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ImpairmentCashGeneratingUnitGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CGU_GROUP: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      AssetImpairmentCguGroupStatusJp,
      true,
      true
    >;
    IMPAIRMENT_METHOD: EnumField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      AssetImpairmentSharedAssetsMethodJp,
      true,
      true
    >;
    PRORATION_METHOD: EnumField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      AssetImpairmentSharedAssetAllocBasisJp,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    SHARED_ASSET_HAS_HIGHER_PRIORITY: EnumField<
      ImpairmentCashGeneratingUnitGroups<DeSerializers>,
      DeSerializersT,
      AssetImpairmentSharedAssetPriorityJp,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cguGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CGU_GROUPS: OneToManyLink<
      ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
      DeSerializersT,
      ImpairmentCashGeneratingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetImpairmentCashGeneratingUnitSharedAssetsAllocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_IMPAIRMENT_CASH_GENERATING_UNIT_SHARED_ASSETS_ALLOCATION: OneToManyLink<
      ImpairmentCashGeneratingUnitGroups<DeSerializersT>,
      DeSerializersT,
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ImpairmentCashGeneratingUnitGroups<DeSerializers>>;
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
         * Static representation of the {@link cguGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CGU_GROUP: fieldBuilder.buildEdmTypeField(
          'CGUGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          AssetImpairmentCguGroupStatusJp,
          true
        ),
        /**
         * Static representation of the {@link impairmentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPAIRMENT_METHOD: fieldBuilder.buildEnumField(
          'ImpairmentMethod',
          AssetImpairmentSharedAssetsMethodJp,
          true
        ),
        /**
         * Static representation of the {@link prorationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATION_METHOD: fieldBuilder.buildEnumField(
          'ProrationMethod',
          AssetImpairmentSharedAssetAllocBasisJp,
          true
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
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link sharedAssetHasHigherPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_ASSET_HAS_HIGHER_PRIORITY: fieldBuilder.buildEnumField(
          'SharedAssetHasHigherPriority',
          AssetImpairmentSharedAssetPriorityJp,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ImpairmentCashGeneratingUnitGroups)
      };
    }

    return this._schema;
  }
}
