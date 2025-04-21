/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetProvisionTypes } from './AssetProvisionTypes';
import { AssetProvisionTypesRequestBuilder } from './AssetProvisionTypesRequestBuilder';
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
export class AssetProvisionTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetProvisionTypes<DeSerializersT>, DeSerializersT>
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
  ): AssetProvisionTypesApi<DeSerializersT> {
    return new AssetProvisionTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetBookV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_V_2: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ProvisionTypeAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_PROVISION_TYPE_ASSET: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_VALUE_MODEL: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link provisionTypeValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_TYPE_VALUE_MODEL: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FIXED_ASSET_BOOK_V_2: new OneToManyLink(
        'FixedAssetBookV2',
        this,
        linkedApis[0]
      ),
      ASSET_BOOK_V_2_PROVISION_TYPE_ASSET: new OneToManyLink(
        'AssetBookV2ProvisionTypeAsset',
        this,
        linkedApis[1]
      ),
      FIXED_ASSET_VALUE_MODEL: new OneToManyLink(
        'FixedAssetValueModel',
        this,
        linkedApis[2]
      ),
      PROVISION_TYPE_VALUE_MODEL: new OneToManyLink(
        'ProvisionTypeValueModel',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetProvisionTypes;

  requestBuilder(): AssetProvisionTypesRequestBuilder<DeSerializersT> {
    return new AssetProvisionTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetProvisionTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetProvisionTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetProvisionTypes<DeSerializersT>,
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
    typeof AssetProvisionTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetProvisionTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetProvisionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      AssetProvisionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LENGTH_OF_OWNERSHIP: OrderableEdmTypeField<
      AssetProvisionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      AssetProvisionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetProvisionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetBookV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_BOOK_V_2: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ProvisionTypeAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_PROVISION_TYPE_ASSET: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fixedAssetValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_VALUE_MODEL: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link provisionTypeValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_TYPE_VALUE_MODEL: OneToManyLink<
      AssetProvisionTypes<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetProvisionTypes<DeSerializers>>;
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
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', false),
        /**
         * Static representation of the {@link lengthOfOwnership} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_OF_OWNERSHIP: fieldBuilder.buildEdmTypeField(
          'LengthOfOwnership',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
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
        ALL_FIELDS: new AllFields('*', AssetProvisionTypes)
      };
    }

    return this._schema;
  }
}
