/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImpairmentCashGeneratingUnitSharedAssets } from './ImpairmentCashGeneratingUnitSharedAssets';
import { ImpairmentCashGeneratingUnitSharedAssetsRequestBuilder } from './ImpairmentCashGeneratingUnitSharedAssetsRequestBuilder';
import { AssetImpairmentSharedAssetAllocBasisJp } from './AssetImpairmentSharedAssetAllocBasisJp';
import { AssetImpairmentSharedAssetTypeJp } from './AssetImpairmentSharedAssetTypeJp';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ImpairmentCashGeneratingUnitSharedAssetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializersT>,
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
  ): ImpairmentCashGeneratingUnitSharedAssetsApi<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitSharedAssetsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ImpairmentCashGeneratingUnitSharedAssets;

  requestBuilder(): ImpairmentCashGeneratingUnitSharedAssetsRequestBuilder<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitSharedAssetsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ImpairmentCashGeneratingUnitSharedAssets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ImpairmentCashGeneratingUnitSharedAssets<DeSerializersT>,
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
    typeof ImpairmentCashGeneratingUnitSharedAssets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ImpairmentCashGeneratingUnitSharedAssets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CGU_GROUP_NAME: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_NUMBER: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NET_SELLING_PRICE: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOCATION_PRIORITY: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRORATION_METHOD_OVERRIDE: EnumField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      AssetImpairmentSharedAssetAllocBasisJp,
      true,
      true
    >;
    SHARED_ASSET_TYPE: EnumField<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>,
      DeSerializersT,
      AssetImpairmentSharedAssetTypeJp,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ImpairmentCashGeneratingUnitSharedAssets<DeSerializers>
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
         * Static representation of the {@link cguGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CGU_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CGUGroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link assetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link book} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK: fieldBuilder.buildEdmTypeField('Book', 'Edm.String', false),
        /**
         * Static representation of the {@link netSellingPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_SELLING_PRICE: fieldBuilder.buildEdmTypeField(
          'NetSellingPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allocationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PRIORITY: fieldBuilder.buildEdmTypeField(
          'AllocationPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link prorationMethodOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATION_METHOD_OVERRIDE: fieldBuilder.buildEnumField(
          'ProrationMethodOverride',
          AssetImpairmentSharedAssetAllocBasisJp,
          true
        ),
        /**
         * Static representation of the {@link sharedAssetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_ASSET_TYPE: fieldBuilder.buildEnumField(
          'SharedAssetType',
          AssetImpairmentSharedAssetTypeJp,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ImpairmentCashGeneratingUnitSharedAssets)
      };
    }

    return this._schema;
  }
}
