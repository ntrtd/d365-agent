/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatStatisticProcedures } from './IntrastatStatisticProcedures';
import { IntrastatStatisticProceduresRequestBuilder } from './IntrastatStatisticProceduresRequestBuilder';
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
export class IntrastatStatisticProceduresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IntrastatStatisticProcedures<DeSerializersT>, DeSerializersT>
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
  ): IntrastatStatisticProceduresApi<DeSerializersT> {
    return new IntrastatStatisticProceduresApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntrastatStatisticProcedures;

  requestBuilder(): IntrastatStatisticProceduresRequestBuilder<DeSerializersT> {
    return new IntrastatStatisticProceduresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntrastatStatisticProcedures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntrastatStatisticProcedures<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntrastatStatisticProcedures<DeSerializersT>,
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
    typeof IntrastatStatisticProcedures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntrastatStatisticProcedures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IntrastatStatisticProcedures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATISTIC_PROCEDURE_ID: OrderableEdmTypeField<
      IntrastatStatisticProcedures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMODITY_NAME: OrderableEdmTypeField<
      IntrastatStatisticProcedures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT_1: OrderableEdmTypeField<
      IntrastatStatisticProcedures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMODITY_HIERARCHY_NAME: OrderableEdmTypeField<
      IntrastatStatisticProcedures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT_2: OrderableEdmTypeField<
      IntrastatStatisticProcedures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntrastatStatisticProcedures<DeSerializers>>;
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
         * Static representation of the {@link statisticProcedureId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTIC_PROCEDURE_ID: fieldBuilder.buildEdmTypeField(
          'StatisticProcedureId',
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
          true
        ),
        /**
         * Static representation of the {@link text1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_1: fieldBuilder.buildEdmTypeField('Text1', 'Edm.String', true),
        /**
         * Static representation of the {@link commodityHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CommodityHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link text2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_2: fieldBuilder.buildEdmTypeField('Text2', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntrastatStatisticProcedures)
      };
    }

    return this._schema;
  }
}
