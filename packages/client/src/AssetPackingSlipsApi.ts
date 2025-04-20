/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetPackingSlips } from './AssetPackingSlips';
import { AssetPackingSlipsRequestBuilder } from './AssetPackingSlipsRequestBuilder';
import { CarrierTypeW } from './CarrierTypeW';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetPackingSlipsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetPackingSlips<DeSerializersT>, DeSerializersT>
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
  ): AssetPackingSlipsApi<DeSerializersT> {
    return new AssetPackingSlipsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetPackingSlips;

  requestBuilder(): AssetPackingSlipsRequestBuilder<DeSerializersT> {
    return new AssetPackingSlipsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetPackingSlips<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetPackingSlips<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetPackingSlips<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AssetPackingSlips,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetPackingSlips,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKING_SLIP: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATE_TIME: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOADING_DATE_AND_TIME: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GOODS_ISSUED_BY: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOAD_ADDRESS: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_DATE_AND_TIME: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_DEPARTMENT: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAILER_REGISTRATION_NUMBER: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_DEPARTMENT: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_NAME: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_ADDRESS: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_ADDRESS: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE_AND_TIME: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RISK_LEVEL_OF_THE_LOAD: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRIVER: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_TYPE: EnumField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      CarrierTypeW,
      true,
      true
    >;
    LOAD_ADDRESS: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_TRANSPORTATION_DETAILS: EnumField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DRIVER_NAME: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_NAME: OrderableEdmTypeField<
      AssetPackingSlips<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetPackingSlips<DeSerializers>>;
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
         * Static representation of the {@link packingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP: fieldBuilder.buildEdmTypeField(
          'PackingSlip',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link createDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'CreateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreateTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loadingDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'LoadingDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link goodsIssuedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUED_BY: fieldBuilder.buildEdmTypeField(
          'GoodsIssuedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOAD_ADDRESS: fieldBuilder.buildEdmTypeField(
          'UnloadAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'UnloadingDateAndTime',
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
        /**
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER: fieldBuilder.buildEdmTypeField('Carrier', 'Edm.String', true),
        /**
         * Static representation of the {@link originalDepartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'OriginalDepartment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trailerRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrailerRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newDepartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'NewDepartment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_NAME: fieldBuilder.buildEdmTypeField(
          'LoadingName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_ADDRESS: fieldBuilder.buildEdmTypeField(
          'LoadingAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_ADDRESS: fieldBuilder.buildEdmTypeField(
          'UnloadingAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL: fieldBuilder.buildEdmTypeField('Model', 'Edm.String', true),
        /**
         * Static representation of the {@link documentDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'DocumentDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link riskLevelOfTheLoad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_LEVEL_OF_THE_LOAD: fieldBuilder.buildEdmTypeField(
          'RiskLevelOfTheLoad',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link driver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER: fieldBuilder.buildEdmTypeField('Driver', 'Edm.String', true),
        /**
         * Static representation of the {@link package} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE: fieldBuilder.buildEdmTypeField('Package', 'Edm.String', true),
        /**
         * Static representation of the {@link carrierType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_TYPE: fieldBuilder.buildEnumField(
          'CarrierType',
          CarrierTypeW,
          true
        ),
        /**
         * Static representation of the {@link loadAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ADDRESS: fieldBuilder.buildEdmTypeField(
          'LoadAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printTransportationDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_TRANSPORTATION_DETAILS: fieldBuilder.buildEnumField(
          'PrintTransportationDetails',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link driverName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_NAME: fieldBuilder.buildEdmTypeField(
          'DriverName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_NAME: fieldBuilder.buildEdmTypeField(
          'UnloadingName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetPackingSlips)
      };
    }

    return this._schema;
  }
}
