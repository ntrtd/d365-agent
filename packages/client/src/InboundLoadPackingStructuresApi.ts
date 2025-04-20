/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundLoadPackingStructures } from './InboundLoadPackingStructures';
import { InboundLoadPackingStructuresRequestBuilder } from './InboundLoadPackingStructuresRequestBuilder';
import { InboundLoadPackingStructureLinesV3Api } from './InboundLoadPackingStructureLinesV3Api';
import { InboundShipmentHeadersApi } from './InboundShipmentHeadersApi';
import { InboundLoadPackingStructureCasesApi } from './InboundLoadPackingStructureCasesApi';
import { InboundLoadPackingStructureLinesV2Api } from './InboundLoadPackingStructureLinesV2Api';
import { InboundLoadPackingStructureLinesApi } from './InboundLoadPackingStructureLinesApi';
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
export class InboundLoadPackingStructuresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundLoadPackingStructures<DeSerializersT>, DeSerializersT>
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
  ): InboundLoadPackingStructuresApi<DeSerializersT> {
    return new InboundLoadPackingStructuresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_LINES_V_3: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipmentHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_HEADER: OneToOneLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link innerLoadPackingStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INNER_LOAD_PACKING_STRUCTURES: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_LINES_V_2: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_LINES: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InboundLoadPackingStructureLinesV3Api<DeSerializersT>,
      InboundShipmentHeadersApi<DeSerializersT>,
      InboundLoadPackingStructureCasesApi<DeSerializersT>,
      InboundLoadPackingStructureLinesV2Api<DeSerializersT>,
      InboundLoadPackingStructureLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LOAD_PACKING_STRUCTURE_LINES_V_3: new OneToManyLink(
        'LoadPackingStructureLinesV3',
        this,
        linkedApis[0]
      ),
      SHIPMENT_HEADER: new OneToOneLink('ShipmentHeader', this, linkedApis[1]),
      INNER_LOAD_PACKING_STRUCTURES: new OneToManyLink(
        'InnerLoadPackingStructures',
        this,
        linkedApis[2]
      ),
      LOAD_PACKING_STRUCTURE_LINES_V_2: new OneToManyLink(
        'LoadPackingStructureLinesV2',
        this,
        linkedApis[3]
      ),
      LOAD_PACKING_STRUCTURE_LINES: new OneToManyLink(
        'LoadPackingStructureLines',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = InboundLoadPackingStructures;

  requestBuilder(): InboundLoadPackingStructuresRequestBuilder<DeSerializersT> {
    return new InboundLoadPackingStructuresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InboundLoadPackingStructures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundLoadPackingStructures<DeSerializersT>,
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
    typeof InboundLoadPackingStructures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundLoadPackingStructures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_SHIPMENT_ID: OrderableEdmTypeField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE: EnumField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      WhsModule,
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKED_TOTAL_QUANTITY: OrderableEdmTypeField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTAINED_ITEM_NUMBER: OrderableEdmTypeField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundLoadPackingStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_LINES_V_3: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipmentHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_HEADER: OneToOneLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link innerLoadPackingStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INNER_LOAD_PACKING_STRUCTURES: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureCasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_LINES_V_2: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loadPackingStructureLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_PACKING_STRUCTURE_LINES: OneToManyLink<
      InboundLoadPackingStructures<DeSerializersT>,
      DeSerializersT,
      InboundLoadPackingStructureLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundLoadPackingStructures<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundLoadPackingStructures)
      };
    }

    return this._schema;
  }
}
