/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BarcodeSetupBiEntities } from './BarcodeSetupBiEntities';
import { BarcodeSetupBiEntitiesRequestBuilder } from './BarcodeSetupBiEntitiesRequestBuilder';
import { BarcodeType } from './BarcodeType';
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
export class BarcodeSetupBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BarcodeSetupBiEntities<DeSerializersT>, DeSerializersT>
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
  ): BarcodeSetupBiEntitiesApi<DeSerializersT> {
    return new BarcodeSetupBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BarcodeSetupBiEntities;

  requestBuilder(): BarcodeSetupBiEntitiesRequestBuilder<DeSerializersT> {
    return new BarcodeSetupBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BarcodeSetupBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BarcodeSetupBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BarcodeSetupBiEntities<DeSerializersT>,
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
    typeof BarcodeSetupBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BarcodeSetupBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BARCODE_SETUP_ID: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MINIMUM_LENGTH: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_BARCODE_MASK: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_TYPE: EnumField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      BarcodeType,
      true,
      true
    >;
    FONT_SIZE: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_LENGTH: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FONT_NAME: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      BarcodeSetupBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BarcodeSetupBiEntities<DeSerializers>>;
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
         * Static representation of the {@link barcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'barcodeSetupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link minimumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'minimumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link retailBarcodeMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_BARCODE_MASK: fieldBuilder.buildEdmTypeField(
          'RetailBarcodeMask',
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_TYPE: fieldBuilder.buildEnumField(
          'barcodeType',
          BarcodeType,
          true
        ),
        /**
         * Static representation of the {@link fontSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_SIZE: fieldBuilder.buildEdmTypeField(
          'fontSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maximumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'maximumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fontName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_NAME: fieldBuilder.buildEdmTypeField(
          'fontName',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BarcodeSetupBiEntities)
      };
    }

    return this._schema;
  }
}
