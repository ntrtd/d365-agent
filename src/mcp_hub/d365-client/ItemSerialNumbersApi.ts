/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemSerialNumbers } from './ItemSerialNumbers';
import { ItemSerialNumbersRequestBuilder } from './ItemSerialNumbersRequestBuilder';
import { CatchWeightTagsApi } from './CatchWeightTagsApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
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
export class ItemSerialNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemSerialNumbers<DeSerializersT>, DeSerializersT>
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
  ): ItemSerialNumbersApi<DeSerializersT> {
    return new ItemSerialNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ItemSerialNumbers<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsItemSerialNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_ITEM_SERIAL_NUMBER: OneToManyLink<
      ItemSerialNumbers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CatchWeightTagsApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CATCH_WEIGHT_TAGS: new OneToManyLink(
        'CatchWeightTags',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_ITEM_SERIAL_NUMBER: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_ItemSerialNumber',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ItemSerialNumbers;

  requestBuilder(): ItemSerialNumbersRequestBuilder<DeSerializersT> {
    return new ItemSerialNumbersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemSerialNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ItemSerialNumbers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ItemSerialNumbers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ItemSerialNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemSerialNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemSerialNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ItemSerialNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      ItemSerialNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURING_DATE: OrderableEdmTypeField<
      ItemSerialNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ItemSerialNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ItemSerialNumbers<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsItemSerialNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_ITEM_SERIAL_NUMBER: OneToManyLink<
      ItemSerialNumbers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ItemSerialNumbers<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manufacturingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURING_DATE: fieldBuilder.buildEdmTypeField(
          'ManufacturingDate',
          'Edm.DateTimeOffset',
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
        ALL_FIELDS: new AllFields('*', ItemSerialNumbers)
      };
    }

    return this._schema;
  }
}
