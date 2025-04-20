/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationStructuresDualWrite } from './CompensationStructuresDualWrite';
import { CompensationStructuresDualWriteRequestBuilder } from './CompensationStructuresDualWriteRequestBuilder';
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
export class CompensationStructuresDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CompensationStructuresDualWrite<DeSerializersT>, DeSerializersT>
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
  ): CompensationStructuresDualWriteApi<DeSerializersT> {
    return new CompensationStructuresDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CompensationStructuresDualWrite;

  requestBuilder(): CompensationStructuresDualWriteRequestBuilder<DeSerializersT> {
    return new CompensationStructuresDualWriteRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CompensationStructuresDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationStructuresDualWrite<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationStructuresDualWrite<DeSerializersT>,
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
    typeof CompensationStructuresDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationStructuresDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GRID: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_ID: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_POINT_LINE_NUMBER: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_SETUP: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_POINT: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      CompensationStructuresDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CompensationStructuresDualWrite<DeSerializers>>;
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
         * Static representation of the {@link grid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRID: fieldBuilder.buildEdmTypeField('Grid', 'Edm.String', false),
        /**
         * Static representation of the {@link levelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'LevelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link referencePointLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_POINT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferencePointLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link referenceSetup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SETUP: fieldBuilder.buildEdmTypeField(
          'ReferenceSetup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link referencePoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_POINT: fieldBuilder.buildEdmTypeField(
          'ReferencePoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationStructuresDualWrite)
      };
    }

    return this._schema;
  }
}
