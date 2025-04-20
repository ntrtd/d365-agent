/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AcquisitionMethods } from './AcquisitionMethods';
import { AcquisitionMethodsRequestBuilder } from './AcquisitionMethodsRequestBuilder';
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
export class AcquisitionMethodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AcquisitionMethods<DeSerializersT>, DeSerializersT>
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
  ): AcquisitionMethodsApi<DeSerializersT> {
    return new AcquisitionMethodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2AcquisitionMethodAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_ACQUISITION_METHOD_ASSET: OneToManyLink<
      AcquisitionMethods<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link acquisitionMethodValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACQUISITION_METHOD_VALUE_MODEL: OneToManyLink<
      AcquisitionMethods<DeSerializersT>,
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
      ASSET_BOOK_V_2_ACQUISITION_METHOD_ASSET: new OneToManyLink(
        'AssetBookV2AcquisitionMethodAsset',
        this,
        linkedApis[0]
      ),
      ACQUISITION_METHOD_VALUE_MODEL: new OneToManyLink(
        'AcquisitionMethodValueModel',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AcquisitionMethods;

  requestBuilder(): AcquisitionMethodsRequestBuilder<DeSerializersT> {
    return new AcquisitionMethodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AcquisitionMethods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AcquisitionMethods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AcquisitionMethods<DeSerializersT>,
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
    typeof AcquisitionMethods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AcquisitionMethods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AcquisitionMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACQUISITION_METHOD: OrderableEdmTypeField<
      AcquisitionMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AcquisitionMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2AcquisitionMethodAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_ACQUISITION_METHOD_ASSET: OneToManyLink<
      AcquisitionMethods<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link acquisitionMethodValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACQUISITION_METHOD_VALUE_MODEL: OneToManyLink<
      AcquisitionMethods<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AcquisitionMethods<DeSerializers>>;
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
         * Static representation of the {@link acquisitionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_METHOD: fieldBuilder.buildEdmTypeField(
          'AcquisitionMethod',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AcquisitionMethods)
      };
    }

    return this._schema;
  }
}
