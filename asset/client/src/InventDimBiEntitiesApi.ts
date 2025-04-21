/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventDimBiEntities } from './InventDimBiEntities';
import { InventDimBiEntitiesRequestBuilder } from './InventDimBiEntitiesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class InventDimBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventDimBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventDimBiEntitiesApi<DeSerializersT> {
    return new InventDimBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventDimBiEntities;

  requestBuilder(): InventDimBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventDimBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventDimBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventDimBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventDimBiEntities<DeSerializersT>,
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
    typeof InventDimBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventDimBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_GTD_ID_RU: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_6: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STATUS_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_9: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_COLOR_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_4: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_VERSION_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_BATCH_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_OWNER_ID_RU: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SIZE_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_3: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    W_MS_LOCATION_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENT_DIMENSION_8: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SERIAL_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_1: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_7: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENT_DIMENSION_10: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIMENSION_11: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_12: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_5: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHA_1_HASH_HEX: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_DIMENSION_2: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHA_3_HASH_HEX: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STYLE_ID: OrderableEdmTypeField<
      InventDimBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventDimBiEntities<DeSerializers>>;
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
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'inventDimId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventGtdIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_GTD_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventGtdId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link configId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'configId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_6: fieldBuilder.buildEdmTypeField(
          'InventDimension6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_9: fieldBuilder.buildEdmTypeField(
          'InventDimension9',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'InventColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_4: fieldBuilder.buildEdmTypeField(
          'InventDimension4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'InventVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'inventBatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventOwnerIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_OWNER_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventOwnerId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'InventSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_3: fieldBuilder.buildEdmTypeField(
          'InventDimension3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wMsLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_MS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'wMSLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inventDimension8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_8: fieldBuilder.buildEdmTypeField(
          'InventDimension8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'inventSerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_1: fieldBuilder.buildEdmTypeField(
          'InventDimension1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_7: fieldBuilder.buildEdmTypeField(
          'InventDimension7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link inventDimension10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_10: fieldBuilder.buildEdmTypeField(
          'InventDimension10',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimension11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_11: fieldBuilder.buildEdmTypeField(
          'InventDimension11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_12: fieldBuilder.buildEdmTypeField(
          'InventDimension12',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_5: fieldBuilder.buildEdmTypeField(
          'InventDimension5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link licensePlateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_ID: fieldBuilder.buildEdmTypeField(
          'LicensePlateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sha1HashHex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHA_1_HASH_HEX: fieldBuilder.buildEdmTypeField(
          'SHA1HashHex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventDimension2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_2: fieldBuilder.buildEdmTypeField(
          'InventDimension2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sha3HashHex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHA_3_HASH_HEX: fieldBuilder.buildEdmTypeField(
          'SHA3HashHex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'InventStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventDimBiEntities)
      };
    }

    return this._schema;
  }
}
