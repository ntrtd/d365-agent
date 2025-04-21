/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostFolioTables } from './LandedCostFolioTables';
import { LandedCostFolioTablesRequestBuilder } from './LandedCostFolioTablesRequestBuilder';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';
import { PurchStatus } from './PurchStatus';
import { NoYes } from './NoYes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LandedCostFolioTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LandedCostFolioTables<DeSerializersT>, DeSerializersT>
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
  ): LandedCostFolioTablesApi<DeSerializersT> {
    return new LandedCostFolioTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LandedCostFolioTables;

  requestBuilder(): LandedCostFolioTablesRequestBuilder<DeSerializersT> {
    return new LandedCostFolioTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LandedCostFolioTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LandedCostFolioTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LandedCostFolioTables<DeSerializersT>,
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
    typeof LandedCostFolioTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LandedCostFolioTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_FOLIO_ID: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_GOODS_RELEASED: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_EXPORTER_NAME: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CUSTOMS_BROKER: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_STATUS_ID: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_NO_OF_CARTONS: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_EST_DLV_DATE: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_BROKER_ADVISED: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CUSTOMER_APPOINTMENT: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_ORIGINAL_DOCS_RECEIVED: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_REMARKS: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TARIFF_CODE: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_VALUATION_DATE: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CARGO_CONTROL_NUMBER: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DELIVERY_INSTRUCTIONS: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CUSTOMS_ID: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_VERIFICATION_DATE: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_FOLIO_DATE: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_MEASUREMENT_UNIT: EnumField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      ItmMeasurementUnit,
      true,
      true
    >;
    SHIP_GOODS_DESC: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DATA_AREA: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DEL_AT_WAREHOUSE: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_EST_PORT_DATE: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_HAWB: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_EXPORTER_ID: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_ORIGINAL_BOL_SEBT: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_ID: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_PURCH_STATUS: EnumField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    SHIP_DOC_RECEIVED: EnumField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_FROM_PORT: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TO_PORT: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_MEASUREMENT: OrderableEdmTypeField<
      LandedCostFolioTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LandedCostFolioTables<DeSerializers>>;
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
         * Static representation of the {@link shipFolioId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FOLIO_ID: fieldBuilder.buildEdmTypeField(
          'ShipFolioId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipGoodsReleased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_GOODS_RELEASED: fieldBuilder.buildEdmTypeField(
          'ShipGoodsReleased',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipExporterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EXPORTER_NAME: fieldBuilder.buildEdmTypeField(
          'ShipExporterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCustomsBroker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CUSTOMS_BROKER: fieldBuilder.buildEdmTypeField(
          'ShipCustomsBroker',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ShipStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipNoOfCartons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_NO_OF_CARTONS: fieldBuilder.buildEdmTypeField(
          'ShipNoOfCartons',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipEstDlvDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EST_DLV_DATE: fieldBuilder.buildEdmTypeField(
          'ShipEstDlvDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipBrokerAdvised} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_BROKER_ADVISED: fieldBuilder.buildEdmTypeField(
          'ShipBrokerAdvised',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipCustomerAppointment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CUSTOMER_APPOINTMENT: fieldBuilder.buildEdmTypeField(
          'ShipCustomerAppointment',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipOriginalDocsReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ORIGINAL_DOCS_RECEIVED: fieldBuilder.buildEdmTypeField(
          'ShipOriginalDocsReceived',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_REMARKS: fieldBuilder.buildEdmTypeField(
          'ShipRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipTariffCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TARIFF_CODE: fieldBuilder.buildEdmTypeField(
          'ShipTariffCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipValuationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VALUATION_DATE: fieldBuilder.buildEdmTypeField(
          'ShipValuationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipCargoControlNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARGO_CONTROL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipCargoControlNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipDeliveryInstructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DELIVERY_INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'ShipDeliveryInstructions',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipCustomsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CUSTOMS_ID: fieldBuilder.buildEdmTypeField(
          'ShipCustomsId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VERIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'ShipVerificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipFolioDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FOLIO_DATE: fieldBuilder.buildEdmTypeField(
          'ShipFolioDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipMeasurementUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_MEASUREMENT_UNIT: fieldBuilder.buildEnumField(
          'ShipMeasurementUnit',
          ItmMeasurementUnit,
          true
        ),
        /**
         * Static representation of the {@link shipGoodsDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_GOODS_DESC: fieldBuilder.buildEdmTypeField(
          'ShipGoodsDesc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ShipDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipDelAtWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DEL_AT_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'ShipDelAtWarehouse',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipEstPortDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EST_PORT_DATE: fieldBuilder.buildEdmTypeField(
          'ShipEstPortDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipHawb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_HAWB: fieldBuilder.buildEdmTypeField(
          'ShipHAWB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipExporterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EXPORTER_ID: fieldBuilder.buildEdmTypeField(
          'ShipExporterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipOriginalBolSebt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ORIGINAL_BOL_SEBT: fieldBuilder.buildEdmTypeField(
          'ShipOriginalBOLSebt',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ID: fieldBuilder.buildEdmTypeField('ShipId', 'Edm.String', true),
        /**
         * Static representation of the {@link shipPurchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_PURCH_STATUS: fieldBuilder.buildEnumField(
          'ShipPurchStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link shipDocReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DOC_RECEIVED: fieldBuilder.buildEnumField(
          'ShipDocReceived',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipFromPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FROM_PORT: fieldBuilder.buildEdmTypeField(
          'ShipFromPort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipToPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_PORT: fieldBuilder.buildEdmTypeField(
          'ShipToPort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_MEASUREMENT: fieldBuilder.buildEdmTypeField(
          'ShipMeasurement',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LandedCostFolioTables)
      };
    }

    return this._schema;
  }
}
