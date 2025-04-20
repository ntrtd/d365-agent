/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillCpiTables } from './SubBillCpiTables';
import { SubBillCpiTablesRequestBuilder } from './SubBillCpiTablesRequestBuilder';
import { SubBillCpiLinesApi } from './SubBillCpiLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SubBillCpiTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillCpiTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillCpiTablesApi<DeSerializersT> {
    return new SubBillCpiTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillCpiTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_CPI_TABLE_ENTITY: OneToManyLink<
      SubBillCpiTables<DeSerializersT>,
      DeSerializersT,
      SubBillCpiLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillCpiLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELATED_TO_SUB_BILL_CPI_TABLE_ENTITY: new OneToManyLink(
        'RelatedToSubBillCPITableEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillCpiTables;

  requestBuilder(): SubBillCpiTablesRequestBuilder<DeSerializersT> {
    return new SubBillCpiTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillCpiTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SubBillCpiTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SubBillCpiTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SubBillCpiTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillCpiTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillCpiTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CPI_SCHEDULE: OrderableEdmTypeField<
      SubBillCpiTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillCpiTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillCpiTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_CPI_TABLE_ENTITY: OneToManyLink<
      SubBillCpiTables<DeSerializersT>,
      DeSerializersT,
      SubBillCpiLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillCpiTables<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillCpiTables)
      };
    }

    return this._schema;
  }
}
