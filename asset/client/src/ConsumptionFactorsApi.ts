/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConsumptionFactors } from './ConsumptionFactors';
import { ConsumptionFactorsRequestBuilder } from './ConsumptionFactorsRequestBuilder';
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
export class ConsumptionFactorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConsumptionFactors<DeSerializersT>, DeSerializersT>
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
  ): ConsumptionFactorsApi<DeSerializersT> {
    return new ConsumptionFactorsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ConsumptionFactorAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_CONSUMPTION_FACTOR_ASSET: OneToManyLink<
      ConsumptionFactors<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consumptionFactorValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSUMPTION_FACTOR_VALUE_MODEL: OneToManyLink<
      ConsumptionFactors<DeSerializersT>,
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
      ASSET_BOOK_V_2_CONSUMPTION_FACTOR_ASSET: new OneToManyLink(
        'AssetBookV2ConsumptionFactorAsset',
        this,
        linkedApis[0]
      ),
      CONSUMPTION_FACTOR_VALUE_MODEL: new OneToManyLink(
        'ConsumptionFactorValueModel',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ConsumptionFactors;

  requestBuilder(): ConsumptionFactorsRequestBuilder<DeSerializersT> {
    return new ConsumptionFactorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConsumptionFactors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ConsumptionFactors<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConsumptionFactors<DeSerializersT>,
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
    typeof ConsumptionFactors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConsumptionFactors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConsumptionFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_FACTOR_ID: OrderableEdmTypeField<
      ConsumptionFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ConsumptionFactors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      ConsumptionFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ConsumptionFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ConsumptionFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ConsumptionFactorAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_CONSUMPTION_FACTOR_ASSET: OneToManyLink<
      ConsumptionFactors<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consumptionFactorValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSUMPTION_FACTOR_VALUE_MODEL: OneToManyLink<
      ConsumptionFactors<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConsumptionFactors<DeSerializers>>;
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
         * Static representation of the {@link consumptionFactorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_FACTOR_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionFactorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConsumptionFactors)
      };
    }

    return this._schema;
  }
}
