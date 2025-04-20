/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnitOfMeasureBiEntities } from './UnitOfMeasureBiEntities';
import { UnitOfMeasureBiEntitiesRequestBuilder } from './UnitOfMeasureBiEntitiesRequestBuilder';
import { UnitOfMeasureSystemOfUnits } from './UnitOfMeasureSystemOfUnits';
import { UnitOfMeasureClass } from './UnitOfMeasureClass';
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
export class UnitOfMeasureBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UnitOfMeasureBiEntities<DeSerializersT>, DeSerializersT>
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
  ): UnitOfMeasureBiEntitiesApi<DeSerializersT> {
    return new UnitOfMeasureBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UnitOfMeasureBiEntities;

  requestBuilder(): UnitOfMeasureBiEntitiesRequestBuilder<DeSerializersT> {
    return new UnitOfMeasureBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UnitOfMeasureBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UnitOfMeasureBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UnitOfMeasureBiEntities<DeSerializersT>,
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
    typeof UnitOfMeasureBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UnitOfMeasureBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SYMBOL: OrderableEdmTypeField<
      UnitOfMeasureBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      UnitOfMeasureBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYSTEM_OF_UNITS: EnumField<
      UnitOfMeasureBiEntities<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureSystemOfUnits,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      UnitOfMeasureBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      UnitOfMeasureBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT_OF_MEASURE_CLASS: EnumField<
      UnitOfMeasureBiEntities<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureClass,
      true,
      true
    >;
    DECIMAL_PRECISION: OrderableEdmTypeField<
      UnitOfMeasureBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<UnitOfMeasureBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link symbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMBOL: fieldBuilder.buildEdmTypeField('Symbol', 'Edm.String', false),
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
         * Static representation of the {@link systemOfUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_OF_UNITS: fieldBuilder.buildEnumField(
          'SystemOfUnits',
          UnitOfMeasureSystemOfUnits,
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
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasureClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_CLASS: fieldBuilder.buildEnumField(
          'UnitOfMeasureClass',
          UnitOfMeasureClass,
          true
        ),
        /**
         * Static representation of the {@link decimalPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_PRECISION: fieldBuilder.buildEdmTypeField(
          'DecimalPrecision',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UnitOfMeasureBiEntities)
      };
    }

    return this._schema;
  }
}
