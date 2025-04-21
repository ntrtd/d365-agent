/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetTypeDefaultSparePartsV2 } from './AssetMaintenanceAssetTypeDefaultSparePartsV2';
import { AssetMaintenanceAssetTypeDefaultSparePartsV2RequestBuilder } from './AssetMaintenanceAssetTypeDefaultSparePartsV2RequestBuilder';
import { AssetMaintenanceReleasedProductsApi } from './AssetMaintenanceReleasedProductsApi';
import { WorkersApi } from './WorkersApi';
import { AssetMaintenanceAssetTypeDefaultsApi } from './AssetMaintenanceAssetTypeDefaultsApi';
import { NoYes } from './NoYes';
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
export class AssetMaintenanceAssetTypeDefaultSparePartsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
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
  ): AssetMaintenanceAssetTypeDefaultSparePartsV2Api<DeSerializersT> {
    return new AssetMaintenanceAssetTypeDefaultSparePartsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link alternativeSparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_SPARE_PART_PRODUCT_NUMBER: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerPersonnelNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSONNEL_NUMBER: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE_DEFAULT: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPARE_PART_PRODUCT_NUMBER: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceReleasedProductsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ALTERNATIVE_SPARE_PART_PRODUCT_NUMBER: new OneToOneLink(
        'AlternativeSparePartProductNumber',
        this,
        linkedApis[0]
      ),
      WORKER_PERSONNEL_NUMBER: new OneToOneLink(
        'WorkerPersonnelNumber',
        this,
        linkedApis[1]
      ),
      ASSET_TYPE_DEFAULT: new OneToOneLink(
        'AssetTypeDefault',
        this,
        linkedApis[2]
      ),
      SPARE_PART_PRODUCT_NUMBER: new OneToOneLink(
        'SparePartProductNumber',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetTypeDefaultSparePartsV2;

  requestBuilder(): AssetMaintenanceAssetTypeDefaultSparePartsV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetTypeDefaultSparePartsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
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
    typeof AssetMaintenanceAssetTypeDefaultSparePartsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetTypeDefaultSparePartsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURER_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURER_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SPARE_PART_APPROVED_FOR_USE: EnumField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeSparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_SPARE_PART_PRODUCT_NUMBER: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerPersonnelNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSONNEL_NUMBER: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE_DEFAULT: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPARE_PART_PRODUCT_NUMBER: OneToOneLink<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<DeSerializers>
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
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manufacturerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_ID: fieldBuilder.buildEdmTypeField(
          'ManufacturerId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manufacturerModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ManufacturerModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isSparePartApprovedForUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SPARE_PART_APPROVED_FOR_USE: fieldBuilder.buildEnumField(
          'IsSparePartApprovedForUse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alternativeProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AlternativeProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ApprovedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link approvedByWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_BY_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApprovedByWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceAssetTypeDefaultSparePartsV2
        )
      };
    }

    return this._schema;
  }
}
