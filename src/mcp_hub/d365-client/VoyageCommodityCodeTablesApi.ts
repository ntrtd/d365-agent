/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VoyageCommodityCodeTables } from './VoyageCommodityCodeTables';
import { VoyageCommodityCodeTablesRequestBuilder } from './VoyageCommodityCodeTablesRequestBuilder';
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
export class VoyageCommodityCodeTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VoyageCommodityCodeTables<DeSerializersT>, DeSerializersT>
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
  ): VoyageCommodityCodeTablesApi<DeSerializersT> {
    return new VoyageCommodityCodeTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VoyageCommodityCodeTables;

  requestBuilder(): VoyageCommodityCodeTablesRequestBuilder<DeSerializersT> {
    return new VoyageCommodityCodeTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VoyageCommodityCodeTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VoyageCommodityCodeTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VoyageCommodityCodeTables<DeSerializersT>,
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
    typeof VoyageCommodityCodeTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VoyageCommodityCodeTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VoyageCommodityCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMODITY_CODE: OrderableEdmTypeField<
      VoyageCommodityCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMODITY_DESCRIPTION: OrderableEdmTypeField<
      VoyageCommodityCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VoyageCommodityCodeTables<DeSerializers>>;
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
         * Static representation of the {@link commodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'CommodityCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link commodityDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CommodityDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VoyageCommodityCodeTables)
      };
    }

    return this._schema;
  }
}
