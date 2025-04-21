/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetImpairmentCashGeneratingUnitSharedAssetsAllocations } from './AssetImpairmentCashGeneratingUnitSharedAssetsAllocations';
import { AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsRequestBuilder } from './AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsRequestBuilder';
import { ImpairmentCashGeneratingUnitGroupsApi } from './ImpairmentCashGeneratingUnitGroupsApi';
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
export class AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializersT>,
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
  ): AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi<DeSerializersT> {
    return new AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link impairmentCashGeneratingUnitGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPAIRMENT_CASH_GENERATING_UNIT_GROUP: OneToOneLink<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializersT>,
      DeSerializersT,
      ImpairmentCashGeneratingUnitGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ImpairmentCashGeneratingUnitGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      IMPAIRMENT_CASH_GENERATING_UNIT_GROUP: new OneToOneLink(
        'ImpairmentCashGeneratingUnitGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetImpairmentCashGeneratingUnitSharedAssetsAllocations;

  requestBuilder(): AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsRequestBuilder<DeSerializersT> {
    return new AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializersT>,
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
    typeof AssetImpairmentCashGeneratingUnitSharedAssetsAllocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetImpairmentCashGeneratingUnitSharedAssetsAllocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CGU_GROUP_NAME: OrderableEdmTypeField<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED_ASSET_ID: OrderableEdmTypeField<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED_ASSET_BOOK_ID: OrderableEdmTypeField<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASH_GENERATING_UNIT_NUMBER: OrderableEdmTypeField<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROPORTION: OrderableEdmTypeField<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impairmentCashGeneratingUnitGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPAIRMENT_CASH_GENERATING_UNIT_GROUP: OneToOneLink<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializersT>,
      DeSerializersT,
      ImpairmentCashGeneratingUnitGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<DeSerializers>
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
         * Static representation of the {@link sharedAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'SharedAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sharedAssetBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_ASSET_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'SharedAssetBookId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cashGeneratingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_GENERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CashGeneratingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link proportion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPORTION: fieldBuilder.buildEdmTypeField(
          'Proportion',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetImpairmentCashGeneratingUnitSharedAssetsAllocations
        )
      };
    }

    return this._schema;
  }
}
