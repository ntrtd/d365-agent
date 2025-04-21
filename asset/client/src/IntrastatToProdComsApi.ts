/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatToProdComs } from './IntrastatToProdComs';
import { IntrastatToProdComsRequestBuilder } from './IntrastatToProdComsRequestBuilder';
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
export class IntrastatToProdComsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IntrastatToProdComs<DeSerializersT>, DeSerializersT>
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
  ): IntrastatToProdComsApi<DeSerializersT> {
    return new IntrastatToProdComsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntrastatToProdComs;

  requestBuilder(): IntrastatToProdComsRequestBuilder<DeSerializersT> {
    return new IntrastatToProdComsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntrastatToProdComs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IntrastatToProdComs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntrastatToProdComs<DeSerializersT>,
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
    typeof IntrastatToProdComs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntrastatToProdComs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMODITY_HIERARCHY_NAME: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMODITY_NAME: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_YEAR: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TO_YEAR: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROD_COM_CODE: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIABLE: OrderableEdmTypeField<
      IntrastatToProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntrastatToProdComs<DeSerializers>>;
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
         * Static representation of the {@link commodityHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CommodityHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link commodityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_NAME: fieldBuilder.buildEdmTypeField(
          'CommodityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_YEAR: fieldBuilder.buildEdmTypeField(
          'FromYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link toYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_YEAR: fieldBuilder.buildEdmTypeField('ToYear', 'Edm.Int32', false),
        /**
         * Static representation of the {@link prodComCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_COM_CODE: fieldBuilder.buildEdmTypeField(
          'ProdComCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link variable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE: fieldBuilder.buildEdmTypeField(
          'Variable',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntrastatToProdComs)
      };
    }

    return this._schema;
  }
}
