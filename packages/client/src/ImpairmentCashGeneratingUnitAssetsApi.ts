/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImpairmentCashGeneratingUnitAssets } from './ImpairmentCashGeneratingUnitAssets';
import { ImpairmentCashGeneratingUnitAssetsRequestBuilder } from './ImpairmentCashGeneratingUnitAssetsRequestBuilder';
import { AssetImpairmentAllocationMethodJp } from './AssetImpairmentAllocationMethodJp';
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
export class ImpairmentCashGeneratingUnitAssetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ImpairmentCashGeneratingUnitAssets<DeSerializersT>,
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
  ): ImpairmentCashGeneratingUnitAssetsApi<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitAssetsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ImpairmentCashGeneratingUnitAssets;

  requestBuilder(): ImpairmentCashGeneratingUnitAssetsRequestBuilder<DeSerializersT> {
    return new ImpairmentCashGeneratingUnitAssetsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ImpairmentCashGeneratingUnitAssets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ImpairmentCashGeneratingUnitAssets<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ImpairmentCashGeneratingUnitAssets<DeSerializersT>,
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
    typeof ImpairmentCashGeneratingUnitAssets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ImpairmentCashGeneratingUnitAssets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASH_GENERATING_UNIT_NUMBER: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_NUMBER: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPAIRMENT_HOLDING_ASSET_ID: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPAIRMENT_HOLDING_BOOK_ID: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPAIRMENT_ALLOCATION_METHOD: EnumField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      AssetImpairmentAllocationMethodJp,
      true,
      true
    >;
    ALLOCATION_PRIORITY: OrderableEdmTypeField<
      ImpairmentCashGeneratingUnitAssets<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ImpairmentCashGeneratingUnitAssets<DeSerializers>>;
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
         * Static representation of the {@link cashGeneratingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_GENERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CashGeneratingUnitNumber',
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
         * Static representation of the {@link impairmentHoldingAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPAIRMENT_HOLDING_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'ImpairmentHoldingAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link impairmentHoldingBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPAIRMENT_HOLDING_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'ImpairmentHoldingBookId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link impairmentAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPAIRMENT_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'ImpairmentAllocationMethod',
          AssetImpairmentAllocationMethodJp,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ImpairmentCashGeneratingUnitAssets)
      };
    }

    return this._schema;
  }
}
