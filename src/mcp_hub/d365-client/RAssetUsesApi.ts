/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetUses } from './RAssetUses';
import { RAssetUsesRequestBuilder } from './RAssetUsesRequestBuilder';
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
export class RAssetUsesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetUses<DeSerializersT>, DeSerializersT>
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
  ): RAssetUsesApi<DeSerializersT> {
    return new RAssetUsesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RAssetUses;

  requestBuilder(): RAssetUsesRequestBuilder<DeSerializersT> {
    return new RAssetUsesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetUses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RAssetUses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RAssetUses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RAssetUses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RAssetUses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetUses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FA_INVENTORY_NUMBER: OrderableEdmTypeField<
      RAssetUses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      RAssetUses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OUTPUT_RUN_NONTAXABLE: OrderableEdmTypeField<
      RAssetUses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTPUT_RUN_EXPORT: OrderableEdmTypeField<
      RAssetUses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTPUT_MILEAGE: OrderableEdmTypeField<
      RAssetUses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RAssetUses<DeSerializers>>;
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
         * Static representation of the {@link faInventoryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_INVENTORY_NUMBER: fieldBuilder.buildEdmTypeField(
          'FAInventoryNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField(
          'Period',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link outputRunNontaxable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_RUN_NONTAXABLE: fieldBuilder.buildEdmTypeField(
          'OutputRunNontaxable',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link outputRunExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_RUN_EXPORT: fieldBuilder.buildEdmTypeField(
          'OutputRunExport',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link outputMileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_MILEAGE: fieldBuilder.buildEdmTypeField(
          'OutputMileage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetUses)
      };
    }

    return this._schema;
  }
}
