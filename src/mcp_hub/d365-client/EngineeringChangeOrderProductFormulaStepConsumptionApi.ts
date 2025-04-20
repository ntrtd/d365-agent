/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductFormulaStepConsumption } from './EngineeringChangeOrderProductFormulaStepConsumption';
import { EngineeringChangeOrderProductFormulaStepConsumptionRequestBuilder } from './EngineeringChangeOrderProductFormulaStepConsumptionRequestBuilder';
import { EngineeringChangeOrderProductFormulaLinesApi } from './EngineeringChangeOrderProductFormulaLinesApi';
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
export class EngineeringChangeOrderProductFormulaStepConsumptionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializersT>,
      DeSerializersT
    >
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
  ): EngineeringChangeOrderProductFormulaStepConsumptionApi<DeSerializersT> {
    return new EngineeringChangeOrderProductFormulaStepConsumptionApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductFormulaLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_LINE: OneToOneLink<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringChangeOrderProductFormulaLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_LINE: new OneToOneLink(
        'EngineeringChangeOrderProductFormulaLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductFormulaStepConsumption;

  requestBuilder(): EngineeringChangeOrderProductFormulaStepConsumptionRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductFormulaStepConsumptionRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductFormulaStepConsumption<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductFormulaStepConsumption<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductFormulaStepConsumption,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductFormulaStepConsumption,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_HEADER_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_BOM_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FROM_QTY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOM_QTY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductFormulaLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_LINE: OneToOneLink<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductFormulaStepConsumption<DeSerializers>
    >;
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
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_HEADER_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductBomCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_BOM_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductBOMCreationSequenceNumber',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link fromQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_QTY: fieldBuilder.buildEdmTypeField(
          'FromQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bomQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_QTY: fieldBuilder.buildEdmTypeField('BOMQty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link pdsCwQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY: fieldBuilder.buildEdmTypeField(
          'PdsCWQty',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductFormulaStepConsumption
        )
      };
    }

    return this._schema;
  }
}
