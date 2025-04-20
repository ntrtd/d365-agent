/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillRevenueSplitLines } from './SubBillRevenueSplitLines';
import { SubBillRevenueSplitLinesRequestBuilder } from './SubBillRevenueSplitLinesRequestBuilder';
import { SubBillRevenueSplitHeadersApi } from './SubBillRevenueSplitHeadersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SubBillRevenueSplitLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillRevenueSplitLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillRevenueSplitLinesApi<DeSerializersT> {
    return new SubBillRevenueSplitLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillRevenueSplitHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_REVENUE_SPLIT_HEADER_ENTITY: OneToOneLink<
      SubBillRevenueSplitLines<DeSerializersT>,
      DeSerializersT,
      SubBillRevenueSplitHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillRevenueSplitHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_REVENUE_SPLIT_HEADER_ENTITY: new OneToOneLink(
        'SubBillRevenueSplitHeaderEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillRevenueSplitLines;

  requestBuilder(): SubBillRevenueSplitLinesRequestBuilder<DeSerializersT> {
    return new SubBillRevenueSplitLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillRevenueSplitLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillRevenueSplitLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillRevenueSplitLines<DeSerializersT>,
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
    typeof SubBillRevenueSplitLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillRevenueSplitLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillRevenueSplitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_ITEM: OrderableEdmTypeField<
      SubBillRevenueSplitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillRevenueSplitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPONENT_ITEM: OrderableEdmTypeField<
      SubBillRevenueSplitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      SubBillRevenueSplitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillRevenueSplitHeaderEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_REVENUE_SPLIT_HEADER_ENTITY: OneToOneLink<
      SubBillRevenueSplitLines<DeSerializersT>,
      DeSerializersT,
      SubBillRevenueSplitHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillRevenueSplitLines<DeSerializers>>;
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
         * Static representation of the {@link parentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ITEM: fieldBuilder.buildEdmTypeField(
          'ParentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link componentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_ITEM: fieldBuilder.buildEdmTypeField(
          'ComponentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillRevenueSplitLines)
      };
    }

    return this._schema;
  }
}
