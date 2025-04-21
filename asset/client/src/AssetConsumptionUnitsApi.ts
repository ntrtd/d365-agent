/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetConsumptionUnits } from './AssetConsumptionUnits';
import { AssetConsumptionUnitsRequestBuilder } from './AssetConsumptionUnitsRequestBuilder';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
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
export class AssetConsumptionUnitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetConsumptionUnits<DeSerializersT>, DeSerializersT>
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
  ): AssetConsumptionUnitsApi<DeSerializersT> {
    return new AssetConsumptionUnitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ConsumptionUnitAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_CONSUMPTION_UNIT_ASSET: OneToManyLink<
      AssetConsumptionUnits<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelConsumptionUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_CONSUMPTION_UNIT: OneToManyLink<
      AssetConsumptionUnits<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_BOOK_V_2_CONSUMPTION_UNIT_ASSET: new OneToManyLink(
        'AssetBookV2ConsumptionUnitAsset',
        this,
        linkedApis[0]
      ),
      VALUE_MODEL_CONSUMPTION_UNIT: new OneToManyLink(
        'ValueModelConsumptionUnit',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetConsumptionUnits;

  requestBuilder(): AssetConsumptionUnitsRequestBuilder<DeSerializersT> {
    return new AssetConsumptionUnitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetConsumptionUnits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetConsumptionUnits<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetConsumptionUnits<DeSerializersT>,
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
    typeof AssetConsumptionUnits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetConsumptionUnits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetConsumptionUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      AssetConsumptionUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetConsumptionUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ConsumptionUnitAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_CONSUMPTION_UNIT_ASSET: OneToManyLink<
      AssetConsumptionUnits<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelConsumptionUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_CONSUMPTION_UNIT: OneToManyLink<
      AssetConsumptionUnits<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetConsumptionUnits<DeSerializers>>;
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
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', AssetConsumptionUnits)
      };
    }

    return this._schema;
  }
}
