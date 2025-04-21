/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundLoadPackingStructureCases } from './InboundLoadPackingStructureCases';
import { InboundLoadPackingStructureCasesRequestBuilder } from './InboundLoadPackingStructureCasesRequestBuilder';
import { InboundLoadPackingStructureCaseLinesV3Api } from './InboundLoadPackingStructureCaseLinesV3Api';
import { InboundLoadPackingStructureCaseLinesApi } from './InboundLoadPackingStructureCaseLinesApi';
import { InboundLoadPackingStructureCaseLinesV2Api } from './InboundLoadPackingStructureCaseLinesV2Api';
import { InboundLoadPackingStructuresApi } from './InboundLoadPackingStructuresApi';
import { WhsModule } from './WhsModule';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InboundLoadPackingStructureCasesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundLoadPackingStructureCases<DeSerializersT>, DeSerializersT>
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
  ): InboundLoadPackingStructureCasesApi<DeSerializersT> {
    return new InboundLoadPackingStructureCasesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureCaseLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE_LINES_V_3: OneToManyLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCaseLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureCaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE_LINES: OneToManyLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureCaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE_LINES_V_2: OneToManyLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCaseLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentLoadPackingStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_LOAD_PACKING_STRUCTURE: OneToOneLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructuresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InboundLoadPackingStructureCaseLinesV3Api<DeSerializersT>,
      InboundLoadPackingStructureCaseLinesApi<DeSerializersT>,
      InboundLoadPackingStructureCaseLinesV2Api<DeSerializersT>,
      InboundLoadPackingStructuresApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LOAD_PACKING_STRUCTURE_CASE_LINES_V_3: new OneToManyLink(
        'LoadPackingStructureCaseLinesV3',
        this,
        linkedApis[0]
      ),
      LOAD_PACKING_STRUCTURE_CASE_LINES: new OneToManyLink(
        'LoadPackingStructureCaseLines',
        this,
        linkedApis[1]
      ),
      LOAD_PACKING_STRUCTURE_CASE_LINES_V_2: new OneToManyLink(
        'LoadPackingStructureCaseLinesV2',
        this,
        linkedApis[2]
      ),
      PARENT_LOAD_PACKING_STRUCTURE: new OneToOneLink(
        'ParentLoadPackingStructure',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = InboundLoadPackingStructureCases;

  requestBuilder(): InboundLoadPackingStructureCasesRequestBuilder<DeSerializersT> {
    return new InboundLoadPackingStructureCasesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundLoadPackingStructureCases<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundLoadPackingStructureCases<DeSerializersT>,
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
    typeof InboundLoadPackingStructureCases,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundLoadPackingStructureCases,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ID: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE: EnumField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      WhsModule,
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKED_TOTAL_QUANTITY: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTAINED_ITEM_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_PACKING_STRUCTURE_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructureCases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureCaseLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE_LINES_V_3: OneToManyLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCaseLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureCaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE_LINES: OneToManyLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureCaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_CASE_LINES_V_2: OneToManyLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCaseLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentLoadPackingStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_LOAD_PACKING_STRUCTURE: OneToOneLink<
      InboundLoadPackingStructureCases<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructuresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundLoadPackingStructureCases<DeSerializers>>;
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
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inboundShipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'InboundShipmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField('Module', WhsModule, true),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packedTotalQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_TOTAL_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PackedTotalQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link containedItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTAINED_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContainedItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ReceivingUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentPackingStructureLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PACKING_STRUCTURE_LICENSE_PLATE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ParentPackingStructureLicensePlateNumber',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundLoadPackingStructureCases)
      };
    }

    return this._schema;
  }
}
