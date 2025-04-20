/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillCpiLines } from './SubBillCpiLines';
import { SubBillCpiLinesRequestBuilder } from './SubBillCpiLinesRequestBuilder';
import { SubBillCpiTablesApi } from './SubBillCpiTablesApi';
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
export class SubBillCpiLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillCpiLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillCpiLinesApi<DeSerializersT> {
    return new SubBillCpiLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillCpiTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_CPI_TABLE_ENTITY: OneToOneLink<
      SubBillCpiLines<DeSerializersT>,
      DeSerializersT,
      SubBillCpiTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillCpiTablesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_CPI_TABLE_ENTITY: new OneToOneLink(
        'SubBillCPITableEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillCpiLines;

  requestBuilder(): SubBillCpiLinesRequestBuilder<DeSerializersT> {
    return new SubBillCpiLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillCpiLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SubBillCpiLines<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SubBillCpiLines<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SubBillCpiLines, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillCpiLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillCpiLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CPI_SCHEDULE: OrderableEdmTypeField<
      SubBillCpiLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillCpiLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CPI_INDEX: OrderableEdmTypeField<
      SubBillCpiLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CPI_DATE: OrderableEdmTypeField<
      SubBillCpiLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillCpiTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_CPI_TABLE_ENTITY: OneToOneLink<
      SubBillCpiLines<DeSerializersT>,
      DeSerializersT,
      SubBillCpiTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillCpiLines<DeSerializers>>;
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
         * Static representation of the {@link cpiSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPI_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'CPISchedule',
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
         * Static representation of the {@link cpiIndex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPI_INDEX: fieldBuilder.buildEdmTypeField(
          'CPIIndex',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cpiDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPI_DATE: fieldBuilder.buildEdmTypeField(
          'CPIDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillCpiLines)
      };
    }

    return this._schema;
  }
}
